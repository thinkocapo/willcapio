# Prompt 1: Migration Plan

**Date:** 2024.12.19  
**Prompt:** Make a migration plan for migrating this project to a Nextjs + FastAPI app which can deployed to Vercel.

But do not execute the plan or change any code yet.

## Migration Plan: Gatsby → Next.js + FastAPI

### Current Project Analysis
The project is a personal blog built with Gatsby v2 that features:
- **Content**: Markdown blog posts with frontmatter (title, date, tags, cover images)
- **Features**: Blog listing, individual post pages, tag-based filtering, responsive design
- **Styling**: Emotion CSS-in-JS, Typography.js, custom theme system
- **Images**: Gatsby Image optimization with Sharp
- **SEO**: React Helmet, sitemap, manifest
- **Analytics**: Sentry integration

### Phase 1: Project Structure Setup

#### 1.1 Create New Project Structure
```
willcapio-nextjs/
├── frontend/                 # Next.js application
│   ├── app/                  # App Router (Next.js 13+)
│   ├── components/           # React components
│   ├── lib/                  # Utilities and helpers
│   ├── styles/               # Global styles and theme
│   ├── public/               # Static assets
│   └── package.json
├── backend/                  # FastAPI application
│   ├── app/
│   ├── content/              # Migrated markdown content
│   ├── requirements.txt
│   └── main.py
└── vercel.json               # Vercel configuration
```

#### 1.2 Initialize Next.js Frontend
- Create Next.js 14+ project with App Router
- Set up TypeScript configuration
- Configure build and development scripts
- Set up ESLint and Prettier

#### 1.3 Initialize FastAPI Backend
- Create FastAPI application structure
- Set up Python environment and dependencies
- Configure CORS for frontend communication
- Set up markdown processing with Python libraries

### Phase 2: Backend Development (FastAPI)

#### 2.1 Content Processing System
- **Markdown Parser**: Replace Gatsby's remark with Python markdown libraries
  - Use `markdown` or `python-markdown` for parsing
  - Implement frontmatter extraction with `python-frontmatter`
  - Set up image processing with `Pillow` for optimization

#### 2.2 API Endpoints
```python
# Main endpoints needed:
GET /api/posts          # List all blog posts
GET /api/posts/{slug}   # Get individual post
GET /api/tags           # Get all tags
GET /api/posts/tag/{tag} # Get posts by tag
GET /api/site-config    # Get site configuration
```

#### 2.3 Content Migration
- Move `content/posts/` directory to backend
- Convert markdown frontmatter to JSON metadata
- Process and optimize images
- Create content indexing system

#### 2.4 Data Models
```python
# FastAPI models
class Post(BaseModel):
    slug: str
    title: str
    date: str
    tags: List[str]
    cover: str
    content: str
    excerpt: str

class SiteConfig(BaseModel):
    title: str
    description: str
    author: str
    # ... other config fields
```

### Phase 3: Frontend Development (Next.js)

#### 3.1 Component Migration
- **Layout Components**: Convert `src/layouts/` to Next.js components
- **Blog Components**: Migrate `BlogList`, `PostList`, `TagsBlock`
- **Navigation**: Convert `NavBar`, `Header`, `Footer`
- **SEO**: Replace React Helmet with Next.js Head component

#### 3.2 Page Structure (App Router)
```
app/
├── page.tsx              # Home page
├── blog/
│   ├── page.tsx          # Blog listing
│   └── [slug]/
│       └── page.tsx      # Individual post
├── tags/
│   ├── page.tsx          # Tags listing
│   └── [tag]/
│       └── page.tsx      # Posts by tag
└── about/
    └── page.tsx          # About page
```

#### 3.3 Data Fetching
- Replace Gatsby's GraphQL with API calls to FastAPI backend
- Implement `getStaticProps` and `getStaticPaths` for SSG
- Set up data fetching utilities in `lib/` directory

#### 3.4 Styling Migration
- **Emotion**: Replace with CSS Modules or styled-components
- **Typography.js**: Convert to CSS custom properties
- **Theme System**: Migrate to CSS variables or CSS-in-JS solution
- **Responsive Design**: Maintain current responsive breakpoints

#### 3.5 Image Optimization
- Replace Gatsby Image with Next.js Image component
- Set up image optimization and lazy loading
- Configure image domains for external sources

### Phase 4: Content and Assets Migration

#### 4.1 Markdown Content
- Process all existing markdown files
- Extract and normalize frontmatter
- Convert relative image paths to absolute URLs
- Validate content structure

#### 4.2 Static Assets
- Move `static/` directory to `frontend/public/`
- Optimize images for web delivery
- Set up asset versioning and caching

#### 4.3 SEO and Metadata
- Migrate React Helmet configurations
- Set up Next.js metadata API
- Configure sitemap generation
- Maintain current SEO structure

### Phase 5: Vercel Deployment Configuration

#### 5.1 Vercel Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    },
    {
      "src": "backend/main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/main.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

#### 5.2 Environment Configuration
- Set up environment variables for development/production
- Configure API endpoints for different environments
- Set up Sentry integration for error tracking

### Phase 6: Testing and Optimization

#### 6.1 Performance Optimization
- Implement proper caching strategies
- Optimize bundle sizes
- Set up performance monitoring

#### 6.2 SEO Validation
- Verify meta tags and structured data
- Test sitemap generation
- Validate Open Graph and Twitter Card data

#### 6.3 Cross-browser Testing
- Test responsive design across devices
- Validate accessibility features
- Performance testing on various network conditions

### Phase 7: Deployment and Migration

#### 7.1 Staging Deployment
- Deploy to Vercel staging environment
- Test all functionality thoroughly
- Validate content migration

#### 7.2 Production Migration
- Deploy to production Vercel environment
- Update DNS and domain configuration
- Monitor performance and errors

#### 7.3 Post-migration Tasks
- Set up monitoring and analytics
- Configure backup strategies
- Document new architecture and deployment process

### Technical Considerations

#### Dependencies to Replace
- **Gatsby**: → Next.js 14+
- **Gatsby Image**: → Next.js Image
- **Gatsby Remark**: → Python markdown processing
- **Emotion**: → CSS Modules or styled-components
- **Typography.js**: → CSS custom properties

#### New Dependencies to Add
- **Frontend**: Next.js, TypeScript, CSS Modules
- **Backend**: FastAPI, Python markdown, Pillow
- **Deployment**: Vercel CLI, vercel.json

#### Migration Challenges
1. **Content Processing**: Replacing Gatsby's GraphQL with API calls
2. **Image Optimization**: Migrating from Gatsby Image to Next.js Image
3. **Styling**: Converting Emotion-based styling to CSS Modules
4. **Build Process**: Adapting from Gatsby's build system to Next.js
5. **Deployment**: Configuring Vercel for both frontend and backend

### Timeline Estimate
- **Phase 1-2**: 1-2 weeks (Project setup and backend)
- **Phase 3**: 2-3 weeks (Frontend migration)
- **Phase 4**: 1 week (Content migration)
- **Phase 5**: 3-5 days (Deployment setup)
- **Phase 6**: 1 week (Testing and optimization)
- **Phase 7**: 3-5 days (Deployment)

**Total Estimated Time**: 6-8 weeks

This migration plan maintains the current functionality while modernizing the tech stack and enabling Vercel deployment. The separation of concerns between frontend and backend will provide better scalability and maintainability for future development.
