# WillCap.io

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=flat-square&logo=python)](https://www.python.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

A modern personal blog built with Next.js and FastAPI, featuring markdown-based content, tag filtering, and responsive design.

## ✨ Features

- 📝 **Markdown Blog Posts** - Write posts in markdown with frontmatter
- 🏷️ **Tag System** - Organize and filter posts by tags
- 🖼️ **Image Support** - Optimized image handling and serving
- 📱 **Responsive Design** - Mobile-first, works on all devices
- ⚡ **Fast Performance** - Static generation with incremental updates
- 🔍 **SEO Optimized** - Built-in metadata and Open Graph support
- 🎨 **Modern UI** - Clean design with CSS Modules
- 🚀 **Easy Deployment** - Optimized for Vercel

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│              Vercel                     │
├─────────────────────────────────────────┤
│  Next.js Frontend  ◄──►  FastAPI Backend│
│  (React + TypeScript)   (Python)        │
└─────────────────────────────────────────┘
```

- **Frontend**: Next.js 14+ with App Router and TypeScript
- **Backend**: FastAPI serving blog content via REST API
- **Deployment**: Vercel with automatic HTTPS and global CDN

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- npm or yarn

### One-Command Start

```bash
./start-dev.sh
```

This starts both the frontend and backend servers. Visit:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

### Manual Start

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📁 Project Structure

```
willcapio-old/
├── frontend/           # Next.js application
│   ├── app/           # App Router pages
│   ├── components/    # React components
│   ├── lib/           # Utilities (API, theme)
│   └── public/        # Static assets
│
├── backend/           # FastAPI application
│   ├── main.py       # API server
│   ├── content/      # Markdown blog posts
│   └── requirements.txt
│
└── vercel.json       # Deployment configuration
```

## 🛠️ Tech Stack

### Frontend
- Next.js 14+ (App Router)
- TypeScript
- CSS Modules
- React 18

### Backend
- FastAPI
- Python Markdown
- Frontmatter parsing
- Uvicorn (ASGI server)

### Deployment
- Vercel
- Automatic HTTPS
- Global CDN

## 📝 Adding Blog Posts

1. Create a new directory in `backend/content/posts/`:
   ```bash
   mkdir backend/content/posts/2024-12-19
   ```

2. Create `index.md` with frontmatter:
   ```markdown
   ---
   title: "My New Post"
   date: "2024-12-19"
   tags: ["tech", "blog"]
   cover: "./cover-image.jpg"
   ---
   
   Your post content here...
   ```

3. Add images to the same directory

4. Restart the backend to see changes

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### Environment Variables

Set `NEXT_PUBLIC_API_URL` in Vercel:
- Development: `http://localhost:8000`
- Production: `https://your-domain.vercel.app`

## 📖 Documentation

- **[Quick Start Guide](QUICK-START.md)** - Get up and running fast
- **[Deployment Guide](DEPLOYMENT.md)** - Deploy to Vercel
- **[Project Overview](PROJECT-OVERVIEW.md)** - Full technical overview
- **[Migration Summary](MIGRATION-SUMMARY.md)** - What was changed
- **[Migration Complete](MIGRATION-COMPLETE.md)** - Completion checklist

## 🧪 Testing

```bash
# Test the API
./test-api.sh

# Test frontend build
cd frontend && npm run build
```

## 📊 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/posts` | List all blog posts |
| `GET /api/posts/{slug}` | Get single post |
| `GET /api/tags` | Get all tags |
| `GET /api/posts/tag/{tag}` | Filter by tag |
| `GET /api/site-config` | Site configuration |
| `GET /docs` | API documentation |

## 🎨 Customization

### Theme Colors
Edit `frontend/lib/theme.ts` to change colors, fonts, and styles.

### Components
React components are in `frontend/components/` with CSS Modules for styling.

### API
All API logic is in `backend/main.py`. Easy to extend with new endpoints.

## 🔒 Security

- ✅ CORS properly configured
- ✅ Environment variables for configuration
- ✅ No sensitive data in code
- ✅ HTTPS on Vercel

## 📈 Performance

- ⚡ Static Site Generation (SSG)
- 🔄 Incremental Static Regeneration (ISR)
- 🖼️ Optimized image loading
- 🌍 Global CDN distribution
- 📱 Mobile-first responsive design

## 🤝 Contributing

This is a personal blog, but feel free to fork and adapt for your own use!

## 📄 License

MIT

## 👤 Author

**Will Cap**

- Website: [WillCap.io](https://willcap.io)
- Twitter: [@thinkocapo](https://twitter.com/thinkocapo)
- GitHub: [@thinkocapo](https://github.com/thinkocapo)
- LinkedIn: [williamcapozzoli](https://linkedin.com/in/williamcapozzoli)

## 🙏 Acknowledgments

- Originally built with Gatsby
- Migrated to Next.js + FastAPI architecture
- Deployed on Vercel

---

**Status**: ✅ Migration Complete  
**From**: Gatsby v2  
**To**: Next.js 14+ & FastAPI  

Ready to deploy! 🚀
