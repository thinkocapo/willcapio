# FastAPI Backend for WillCap.io

## Setup

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn main:app --reload
```

## API Endpoints

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/{slug}` - Get a single post by slug
- `GET /api/tags` - Get all tags
- `GET /api/posts/tag/{tag}` - Get posts by tag
- `GET /api/site-config` - Get site configuration

## Deployment

This backend is designed to be deployed to Vercel using the Python runtime.

