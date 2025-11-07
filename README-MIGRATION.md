# WillCap.io - Next.js + FastAPI Migration

This project has been migrated from Gatsby to Next.js + FastAPI architecture.

## Project Structure

```
willcapio-old/
├── frontend/           # Next.js 14+ application
│   ├── app/            # App Router pages
│   ├── components/     # React components
│   ├── lib/            # Utilities (API client, theme)
│   └── public/         # Static assets
├── backend/            # FastAPI application
│   ├── content/        # Markdown blog posts
│   ├── main.py         # FastAPI server
│   └── requirements.txt
└── vercel.json         # Vercel deployment config
```

## Local Development

### Backend (FastAPI)

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

API Documentation: `http://localhost:8000/docs`

### Frontend (Next.js)

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/{slug}` - Get a single post by slug
- `GET /api/tags` - Get all tags
- `GET /api/posts/tag/{tag}` - Get posts by tag
- `GET /api/site-config` - Get site configuration

## Deployment to Vercel

### Prerequisites

1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`

### Deployment Steps

```bash
# From project root
vercel

# For production
vercel --prod
```

### Environment Variables

Set the following environment variable in Vercel:

- `NEXT_PUBLIC_API_URL` - Your production API URL (e.g., `https://your-domain.vercel.app`)

## Features

- **Static Site Generation (SSG)**: Blog posts are pre-rendered at build time
- **Incremental Static Regeneration (ISR)**: Content revalidates every hour
- **Image Optimization**: Next.js Image component for optimized images
- **SEO-Friendly**: Built-in metadata and SEO support
- **Fast API**: Python-based API with markdown processing
- **Responsive Design**: Mobile-first responsive design

## Technology Stack

### Frontend
- Next.js 14+ (App Router)
- TypeScript
- CSS Modules
- React 18

### Backend
- FastAPI
- Python 3.x
- Python Markdown
- Frontmatter

### Deployment
- Vercel

## Migration Notes

This migration from Gatsby included:

1. ✅ Replaced Gatsby's GraphQL with REST API
2. ✅ Migrated Emotion CSS-in-JS to CSS Modules
3. ✅ Converted React components to Next.js components
4. ✅ Set up FastAPI backend for content serving
5. ✅ Migrated all markdown content
6. ✅ Copied static assets
7. ✅ Configured Vercel deployment

## Content Management

Blog posts are stored in `backend/content/posts/` as markdown files with frontmatter:

```markdown
---
title: "Post Title"
date: "2024-12-19"
tags: ["tag1", "tag2"]
cover: "cover-image.jpg"
---

Post content here...
```

To add a new post, create a new directory in `backend/content/posts/` with an `index.md` file and any images.

## License

MIT

