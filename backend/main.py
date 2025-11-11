from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path
from typing import List, Optional
import frontmatter
import markdown
from pydantic import BaseModel
from datetime import datetime
import os
import re

app = FastAPI(title="WillCap.io Blog API")

# Backend URL configuration
BACKEND_URL = os.getenv('BACKEND_URL', 'http://localhost:8000')

# CORS configuration for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://*.vercel.app",
        "https://willcap.io",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files for images
CONTENT_DIR = Path(__file__).parent / "content" / "posts"
if CONTENT_DIR.exists():
    app.mount("/images", StaticFiles(directory=str(CONTENT_DIR)), name="images")

# Data Models
class Post(BaseModel):
    slug: str
    title: str
    date: str
    tags: List[str]
    cover: Optional[str] = None
    content: str
    excerpt: str
    preview: Optional[str] = None

class PostSummary(BaseModel):
    slug: str
    title: str
    date: str
    tags: List[str]
    cover: Optional[str] = None
    excerpt: str
    preview: Optional[str] = None

class SiteConfig(BaseModel):
    title: str
    description: str
    author: str
    url: str
    twitter: str


# Helper functions
def get_image_url(path: str) -> str:
    """Convert image path to full URL for HTML content, or just path for JSON"""
    # For HTML content, we need full URLs. For JSON, frontend will add the domain.
    return f"{BACKEND_URL}{path}"

def process_image_paths(html_content: str, slug: str) -> str:
    """Replace relative image paths in HTML with absolute API URLs"""
    # Pattern to match img tags with relative src paths
    pattern = r'<img([^>]*?)src=["\']\./(.*?)["\']([^>]*?)>'
    # HTML needs full URLs since it's rendered in browser
    replacement = rf'<img\1src="{BACKEND_URL}/images/{slug}/\2"\3>'
    return re.sub(pattern, replacement, html_content)

def parse_post(post_path: Path) -> Optional[Post]:
    """Parse a markdown post file and return a Post object"""
    try:
        index_file = post_path / "index.md"
        if not index_file.exists():
            return None
        
        with open(index_file, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
        
        # Convert markdown to HTML
        html_content = markdown.markdown(
            post.content,
            extensions=['extra', 'codehilite', 'toc']
        )
        
        # Process image paths in HTML content
        html_content = process_image_paths(html_content, post_path.name)
        
        # Process cover image path
        cover = post.get('cover', None)
        if cover:
            # Remove ./ prefix if present
            cover = cover.replace('./', '')
            # Return just the path - frontend will add the domain
            cover = f"/images/{post_path.name}/{cover}"
        
        # Extract excerpt (first paragraph or first 150 chars)
        content_text = post.content.replace('\n', ' ')
        excerpt = content_text[:150] + "..." if len(content_text) > 150 else content_text
        
        # Get preview from frontmatter if available, otherwise use excerpt
        preview = post.get('preview', None)
        
        return Post(
            slug=post_path.name,
            title=post.get('title', 'Untitled'),
            date=post.get('date', ''),
            tags=post.get('tags', []),
            cover=cover,
            content=html_content,
            excerpt=excerpt,
            preview=preview
        )
    except Exception as e:
        print(f"Error parsing post {post_path}: {e}")
        return None

def get_all_posts() -> List[PostSummary]:
    """Get all blog posts sorted by date"""
    posts = []
    
    if not CONTENT_DIR.exists():
        return posts
    
    for post_dir in CONTENT_DIR.iterdir():
        if post_dir.is_dir():
            post = parse_post(post_dir)
            if post:
                posts.append(PostSummary(
                    slug=post.slug,
                    title=post.title,
                    date=post.date,
                    tags=post.tags,
                    cover=post.cover,
                    excerpt=post.excerpt,
                    preview=post.preview
                ))
    
    # Sort by date (newest first)
    posts.sort(key=lambda x: x.date, reverse=True)
    return posts

# API Endpoints
@app.get("/")
async def root():
    return {"message": "WillCap.io Blog API", "version": "1.0.0"}

@app.get("/api/posts", response_model=List[PostSummary])
async def get_posts():
    """Get all blog posts"""
    return get_all_posts()

@app.get("/api/posts/{slug}", response_model=Post)
async def get_post(slug: str):
    """Get a single blog post by slug"""
    post_path = CONTENT_DIR / slug
    
    if not post_path.exists():
        raise HTTPException(status_code=404, detail="Post not found")
    
    post = parse_post(post_path)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    return post

@app.get("/api/tags")
async def get_tags():
    """Get all unique tags"""
    posts = get_all_posts()
    tags = set()
    for post in posts:
        tags.update(post.tags)
    return sorted(list(tags))

@app.get("/api/posts/tag/{tag}", response_model=List[PostSummary])
async def get_posts_by_tag(tag: str):
    """Get all posts with a specific tag"""
    posts = get_all_posts()
    filtered_posts = [post for post in posts if tag in post.tags]
    return filtered_posts

@app.get("/api/site-config", response_model=SiteConfig)
async def get_site_config():
    """Get site configuration"""
    return SiteConfig(
        title="WillCap.io",
        description="life",
        author="Will",
        url="https://willcap.io",
        twitter="@thinkocapo"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

