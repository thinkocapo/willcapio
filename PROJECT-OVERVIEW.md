# WillCap.io - Project Overview

## 📋 Summary

A personal blog website migrated from Gatsby v2 to a modern Next.js 14+ and FastAPI architecture. The application features blog posts with markdown content, tag-based filtering, and responsive design, optimized for deployment on Vercel.

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                    Vercel                        │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────────────┐    ┌──────────────────┐  │
│  │   Next.js        │◄──►│    FastAPI       │  │
│  │   Frontend       │    │    Backend       │  │
│  │                  │    │                  │  │
│  │  - React Pages   │    │  - REST API      │  │
│  │  - Components    │    │  - Markdown      │  │
│  │  - Styling       │    │  - Images        │  │
│  └──────────────────┘    └──────────────────┘  │
│          │                         │            │
│          │                         │            │
│          ▼                         ▼            │
│    Static Assets            Blog Content        │
│    (images, logos)          (markdown files)    │
└─────────────────────────────────────────────────┘
```

## 🎯 Key Features

### Content Management
- ✅ Markdown-based blog posts with frontmatter
- ✅ Image support within posts
- ✅ Tag-based categorization
- ✅ Post excerpts and summaries

### User Experience
- ✅ Fast page loads with SSG
- ✅ Responsive mobile-first design
- ✅ Smooth navigation
- ✅ Clean, modern UI

### Developer Experience
- ✅ TypeScript for type safety
- ✅ Hot reload in development
- ✅ API documentation (FastAPI Swagger)
- ✅ Easy content updates

### SEO & Performance
- ✅ Static site generation
- ✅ Incremental static regeneration
- ✅ Image optimization
- ✅ Metadata and Open Graph tags

## 📁 Project Structure

```
willcapio-old/
│
├── frontend/                       # Next.js Application
│   ├── app/                        # App Router
│   │   ├── layout.tsx              # Root layout with nav/footer
│   │   ├── page.tsx                # Homepage (blog listing)
│   │   ├── page.module.css
│   │   ├── globals.css             # Global styles
│   │   │
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx        # Individual blog post
│   │   │       └── page.module.css
│   │   │
│   │   ├── tags/
│   │   │   ├── page.tsx            # All tags listing
│   │   │   ├── page.module.css
│   │   │   └── [tag]/
│   │   │       └── page.tsx        # Posts by tag
│   │   │
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   │
│   │   ├── code/
│   │   │   ├── page.tsx
│   │   │   └── page.module.css
│   │   │
│   │   └── whereiswill/
│   │       ├── page.tsx
│   │       └── page.module.css
│   │
│   ├── components/                 # React Components
│   │   ├── NavBar.tsx              # Sticky navigation
│   │   ├── NavBar.module.css
│   │   ├── Footer.tsx              # Footer
│   │   ├── Footer.module.css
│   │   ├── Header.tsx              # Page headers
│   │   ├── Header.module.css
│   │   ├── PostList.tsx            # Blog post card
│   │   ├── PostList.module.css
│   │   ├── TagsBlock.tsx           # Tag display
│   │   └── TagsBlock.module.css
│   │
│   ├── lib/                        # Utilities
│   │   ├── api.ts                  # API client functions
│   │   └── theme.ts                # Theme configuration
│   │
│   ├── public/                     # Static assets
│   │   ├── logo/                   # Logos and favicons
│   │   └── robots.txt
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.ts
│   ├── .env.local                  # Environment variables
│   └── .env.example
│
├── backend/                        # FastAPI Application
│   ├── main.py                     # API server
│   ├── requirements.txt            # Python dependencies
│   │
│   └── content/                    # Blog content
│       └── posts/
│           ├── 2018-10-08/
│           │   ├── index.md        # Post content
│           │   └── *.jpg           # Post images
│           ├── 2018-10-09/
│           └── .../
│
├── vercel.json                     # Vercel deployment config
│
├── start-dev.sh                    # Dev startup script
├── test-api.sh                     # API test script
│
├── README-MIGRATION.md             # Migration documentation
├── DEPLOYMENT.md                   # Deployment guide
├── MIGRATION-SUMMARY.md            # What was changed
├── QUICK-START.md                  # Quick start guide
└── PROJECT-OVERVIEW.md             # This file
```

## 🔌 API Endpoints

### Backend (FastAPI)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | API info |
| `/api/posts` | GET | List all blog posts |
| `/api/posts/{slug}` | GET | Get single post by slug |
| `/api/tags` | GET | Get all unique tags |
| `/api/posts/tag/{tag}` | GET | Get posts by tag |
| `/api/site-config` | GET | Get site configuration |
| `/images/{slug}/{filename}` | GET | Serve post images |
| `/docs` | GET | API documentation (Swagger) |

### Frontend Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with blog post listing |
| `/blog/{slug}` | Individual blog post |
| `/tags` | All tags listing |
| `/tags/{tag}` | Posts filtered by tag |
| `/about` | About page |
| `/code` | Code projects page |
| `/whereiswill` | Travel log page |

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **UI Library**: React 18
- **Fonts**: Google Fonts (Open Sans, Candal)
- **Image Optimization**: Next.js Image component

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.x
- **Markdown**: python-markdown
- **Frontmatter**: python-frontmatter
- **Image Processing**: Pillow
- **ASGI Server**: Uvicorn

### Deployment
- **Platform**: Vercel
- **CDN**: Vercel Edge Network
- **SSL**: Automatic HTTPS

### Development Tools
- **Package Manager**: npm (frontend), pip (backend)
- **Linting**: ESLint (frontend)
- **Type Checking**: TypeScript
- **Version Control**: Git

## 🎨 Design System

### Colors
```typescript
Primary Blue: #3498db
Dark Blue: #284187
Light Blue: #3e5fbc
Text: #333438
Light Text: #7f8184
Background: #fff
```

### Typography
- **Headings**: Candal (Google Font)
- **Body**: Open Sans (Google Font)

### Breakpoints
- xs: 400px
- s: 600px
- m: 900px
- l: 1200px

## 📝 Content Format

Blog posts are markdown files with YAML frontmatter:

```markdown
---
title: "Post Title"
date: "2024-12-19"
path: "/post-slug"
tags: ["tag1", "tag2"]
cover: "./cover-image.jpg"
published: true
---

Post content in markdown...

![Image](./image.jpg)
```

## 🚀 Quick Commands

```bash
# Development
./start-dev.sh                    # Start both servers
./test-api.sh                     # Test API

# Backend
cd backend
source venv/bin/activate
uvicorn main:app --reload         # Start API server

# Frontend
cd frontend
npm run dev                       # Start Next.js
npm run build                     # Build for production
npm run start                     # Run production build

# Deployment
vercel                            # Deploy to preview
vercel --prod                     # Deploy to production
```

## 📊 Performance

Expected metrics:
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+
- **Bundle Size**: Optimized with code splitting

## 🔐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production
```env
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
```

## 📈 Scalability

The architecture supports:
- ✅ Hundreds of blog posts
- ✅ Multiple concurrent users
- ✅ Global CDN distribution
- ✅ Easy content updates
- ✅ Future enhancements (comments, search, etc.)

## 🔄 Development Workflow

1. **Content Updates**: Edit markdown in `backend/content/posts/`
2. **Component Changes**: Edit React components in `frontend/components/`
3. **Styling**: Update CSS Modules
4. **API Changes**: Modify `backend/main.py`
5. **Test Locally**: Run both servers
6. **Deploy**: Push to Git or use Vercel CLI

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Support & Maintenance

### Common Tasks

**Add a new blog post:**
```bash
mkdir backend/content/posts/YYYY-MM-DD
cd backend/content/posts/YYYY-MM-DD
# Create index.md with frontmatter
# Add images
```

**Update styling:**
```bash
# Edit component CSS modules in frontend/components/
# Or edit global styles in frontend/app/globals.css
```

**Debug issues:**
```bash
# Check backend logs
cd backend && source venv/bin/activate && uvicorn main:app --reload --log-level debug

# Check frontend logs
cd frontend && npm run dev

# Build locally
cd frontend && npm run build
```

## 🌟 Future Enhancements

Potential additions:
- [ ] Search functionality
- [ ] Comment system (Giscus/Utterances)
- [ ] RSS feed
- [ ] Newsletter integration
- [ ] Dark mode
- [ ] Reading time estimates
- [ ] Related posts
- [ ] Table of contents
- [ ] Code syntax highlighting improvements
- [ ] Analytics dashboard

## 📄 License

MIT

---

**Author**: Will Cap  
**Twitter**: [@thinkocapo](https://twitter.com/thinkocapo)  
**GitHub**: [thinkocapo](https://github.com/thinkocapo)  
**Website**: [WillCap.io](https://willcap.io)

