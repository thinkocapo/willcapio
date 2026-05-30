# Migration Summary: Gatsby → Next.js + FastAPI

## Overview

Successfully migrated WillCap.io from Gatsby v2 to a modern Next.js 14+ and FastAPI architecture, optimized for Vercel deployment.

## What Was Accomplished

### ✅ Phase 1: Project Structure
- Created new monorepo structure with separate `frontend/` and `backend/` directories
- Initialized Next.js 14+ with TypeScript and App Router
- Set up FastAPI backend with Python dependencies

### ✅ Phase 2: Backend Development
- Built FastAPI REST API with the following endpoints:
  - `GET /api/posts` - List all posts
  - `GET /api/posts/{slug}` - Get individual post
  - `GET /api/tags` - Get all tags
  - `GET /api/posts/tag/{tag}` - Filter posts by tag
  - `GET /api/site-config` - Get site configuration
- Implemented markdown parsing with `python-frontmatter` and `markdown`
- Migrated all blog content from `content/posts/` to `backend/content/posts/`
- Set up CORS for cross-origin requests

### ✅ Phase 3: Frontend Development
- **Components Migrated:**
  - NavBar (with sticky header)
  - Footer
  - Header
  - PostList (blog post cards)
  - TagsBlock (tag display)
  
- **Pages Created:**
  - `/` - Homepage with blog post listing
  - `/blog/[slug]` - Individual blog post pages
  - `/tags` - All tags listing
  - `/tags/[tag]` - Posts filtered by tag
  - `/about` - About page
  - `/code` - Code projects page
  - `/whereiswill` - Travel log page

- **Styling:**
  - Migrated from Emotion CSS-in-JS to CSS Modules
  - Preserved original theme colors and design
  - Maintained responsive breakpoints
  - Added Google Fonts (Open Sans, Candal)

### ✅ Phase 4: Assets Migration
- Copied all static assets from `static/` to `frontend/public/`
- Configured Next.js Image optimization
- Maintained logo and favicon files

### ✅ Phase 5: Deployment Configuration
- Created `vercel.json` for monorepo deployment
- Configured environment variables
- Set up build scripts
- Created comprehensive documentation

## Technology Stack Comparison

### Before (Gatsby)
- Gatsby v2
- GraphQL
- Gatsby Image
- Emotion CSS-in-JS
- Typography.js
- React Helmet
- Netlify deployment

### After (Next.js + FastAPI)
- Next.js 14+ (App Router)
- REST API
- Next.js Image
- CSS Modules
- Google Fonts
- Next.js Metadata API
- Vercel deployment

## Key Improvements

1. **Modern Architecture**: App Router with React Server Components
2. **Better Performance**: Static Site Generation + Incremental Static Regeneration
3. **Type Safety**: Full TypeScript support
4. **API Flexibility**: RESTful API with FastAPI (easily extendable)
5. **Better Developer Experience**: Hot reload, better error messages
6. **Simplified Deployment**: Vercel-optimized monorepo
7. **Improved SEO**: Built-in metadata and SEO support

## File Structure

```
willcapio-old/
├── frontend/                    # Next.js Application
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── blog/[slug]/        # Blog post pages
│   │   ├── tags/               # Tag pages
│   │   ├── about/              # About page
│   │   ├── code/               # Code page
│   │   └── whereiswill/        # Travel page
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── PostList.tsx
│   │   └── TagsBlock.tsx
│   ├── lib/
│   │   ├── api.ts              # API client
│   │   └── theme.ts            # Theme configuration
│   └── public/                 # Static assets
│
├── backend/                    # FastAPI Application
│   ├── main.py                # API server
│   ├── content/posts/         # Blog content
│   └── requirements.txt       # Python dependencies
│
├── vercel.json                # Deployment config
├── start-dev.sh              # Dev startup script
├── README-MIGRATION.md       # Migration documentation
└── DEPLOYMENT.md             # Deployment guide
```

## What Was Preserved

- ✅ All blog content and images
- ✅ Original design and theme
- ✅ Navigation structure
- ✅ Page layouts
- ✅ Tag functionality
- ✅ SEO metadata
- ✅ Responsive design

## Breaking Changes

- GraphQL queries replaced with REST API calls
- Gatsby plugins removed (no longer needed)
- Image processing handled by Next.js instead of Gatsby
- Build process changed (Next.js instead of Gatsby)

## How to Use

### Development

```bash
# Quick start (both frontend and backend)
./start-dev.sh

# Or manually:

# Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

### Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## Testing the Migration

1. **Backend API**: Visit `http://localhost:8000/docs` for API documentation
2. **Frontend**: Visit `http://localhost:3000`
3. **Test all pages**:
   - Homepage: Blog post listing
   - Individual posts: Click any post
   - Tags: Navigate to tags page
   - Filter by tag: Click a tag
   - Static pages: About, Code, Where Is Will

## Performance Metrics

Expected improvements:
- **Build Time**: Faster incremental builds
- **Page Load**: Optimized with Next.js Image
- **Time to Interactive**: Improved with App Router
- **SEO Score**: Better with built-in metadata

## Future Enhancements

Consider adding:
1. Search functionality
2. Comments system (e.g., Giscus)
3. Reading time estimates
4. Related posts
5. RSS feed
6. Newsletter integration
7. Dark mode toggle
8. Content management system
9. Automated testing
10. Performance monitoring

## Migration Stats

- **Files Created**: ~30 new files
- **Components Migrated**: 6 components
- **Pages Migrated**: 7 pages
- **Blog Posts Preserved**: All posts from `content/posts/`
- **API Endpoints**: 5 endpoints
- **Lines of Code**: ~2000 lines (frontend + backend)
- **Time Invested**: Full migration plan executed

## Conclusion

The migration was successful! The application now runs on a modern, scalable architecture with:
- ✅ Better performance
- ✅ Improved developer experience
- ✅ Easier deployment
- ✅ Full TypeScript support
- ✅ Modern React patterns
- ✅ Flexible API architecture

Ready for deployment to Vercel! 🚀

## vercel.json Explained

```json
{
  "version": 2,
  "builds": [...],
  "routes": [...]
}
```

### builds []

Tells Vercel how to build each part of the monorepo. Two entries:

**1. `@vercel/next` + `frontend/package.json`**
Vercel runs `npm run build` in `frontend/`. Produces the Next.js static HTML pages, JS chunks, and CSS — all uploaded to Vercel's CDN.

**2. `@vercel/python` + `backend/main.py`**
Vercel packages `main.py` and `requirements.txt` into a Python serverless function. This is the FastAPI backend. It has no connection to the Next.js build — they are built independently.

### routes []

Tells Vercel where to send incoming HTTP requests after both builds are complete. Three entries, evaluated top to bottom:

**1. `/api/(.*)` → `backend/main.py`**
Any request to `/api/*` (e.g. `/api/posts`, `/api/tags`) is routed to the FastAPI Python serverless function. Currently no frontend code calls these endpoints — they are kept for future use (e.g. Sentry distributed tracing examples).

**2. `/images/(.*)` → `backend/main.py`**
Any request to `/images/*` (e.g. `/images/2018-10-16/piano-wedding.jpg`) is routed to the FastAPI serverless function, which serves the image files from `backend/content/posts/` using FastAPI's `StaticFiles`. This is the only route actively used at runtime — the browser fetches blog post images through here.

**3. `/(.*)` → `frontend/$1`**
All other requests go to the Next.js frontend. This is the catch-all — homepage, blog posts, tags, about, etc.

> **Note:** The `/api/*` endpoints are no longer called by the frontend. Originally `lib/api.ts` fetched from `localhost:8000/api/*` at build time, but this caused Vercel builds to fail (`ECONNREFUSED`) because FastAPI wasn't running during Vercel's build process. The fix (May 2026) was to replace all `fetch` calls in `lib/api.ts` with direct filesystem reads using `gray-matter` and `marked`, reading markdown files from `backend/content/posts/` at build time instead. The `/images/*` route is the only FastAPI route actively used at runtime.

