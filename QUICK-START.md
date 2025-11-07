# Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Option 1: Automated Start (Recommended)

```bash
./start-dev.sh
```

This script will:
1. Set up Python virtual environment (if needed)
2. Install backend dependencies
3. Start FastAPI backend on port 8000
4. Start Next.js frontend on port 3000

Visit:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

Press `Ctrl+C` to stop both servers.

### Option 2: Manual Start

#### Terminal 1 - Backend

```bash
cd backend

# First time only
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Every time
source venv/bin/activate
uvicorn main:app --reload --port 8000
```

#### Terminal 2 - Frontend

```bash
cd frontend

# First time only
npm install

# Every time
npm run dev
```

## 🧪 Test the Setup

```bash
./test-api.sh
```

This will verify that:
- Backend is running
- All API endpoints are responding
- Data is being returned correctly

## 📦 What's Included

### Backend Features
- FastAPI REST API
- Markdown blog post parsing
- Image serving
- Tag filtering
- CORS enabled for frontend

### Frontend Features
- Next.js 14+ App Router
- TypeScript
- Responsive design
- Blog post listing
- Individual post pages
- Tag filtering
- Static pages (About, Code, Where Is Will)

## 🔧 Common Issues

### Backend won't start

```bash
# Make sure Python 3 is installed
python3 --version

# Create fresh virtual environment
cd backend
rm -rf venv
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Frontend won't start

```bash
# Clear Next.js cache and reinstall
cd frontend
rm -rf .next node_modules
npm install
npm run dev
```

### Port already in use

```bash
# Kill process on port 8000 (backend)
lsof -ti:8000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

## 📚 Next Steps

1. **Explore the API**: Visit http://localhost:8000/docs
2. **Browse the blog**: Visit http://localhost:3000
3. **Add a blog post**: Create a new directory in `backend/content/posts/`
4. **Deploy**: See `DEPLOYMENT.md` for Vercel deployment

## 📖 More Documentation

- `README-MIGRATION.md` - Migration overview
- `DEPLOYMENT.md` - Deployment to Vercel
- `MIGRATION-SUMMARY.md` - What was changed

## 🆘 Need Help?

Check the logs:
- Backend logs: In the terminal where you ran `uvicorn`
- Frontend logs: In the terminal where you ran `npm run dev`

Common commands:
```bash
# Backend logs in detail
cd backend && source venv/bin/activate && uvicorn main:app --reload --log-level debug

# Frontend build errors
cd frontend && npm run build

# Test API endpoints
curl http://localhost:8000/api/posts
curl http://localhost:8000/api/tags
```

## ✨ Ready to Deploy?

See `DEPLOYMENT.md` for step-by-step Vercel deployment instructions.

```bash
# Quick deploy to Vercel
npm i -g vercel
vercel login
vercel --prod
```

That's it! Happy coding! 🎉

