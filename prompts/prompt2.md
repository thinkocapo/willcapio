# Prompt 2: NextJS FastAPI Deployment in Vercel

**Date:** 2024.12.19  
**Prompt:** What are some ways to deploy a NextJS FastAPI site in Vercel?

## Deployment Strategies for NextJS + FastAPI on Vercel

There are several approaches to deploy a NextJS + FastAPI application on Vercel, each with different trade-offs:

### 1. **Monorepo with Vercel Functions (Recommended)**

**Structure:**
```
project/
├── frontend/          # Next.js app
├── api/               # FastAPI as Vercel serverless functions
├── vercel.json        # Vercel configuration
└── requirements.txt   # Python dependencies
```

**Benefits:**
- Single deployment
- Shared environment variables
- Easy local development
- Cost-effective for small to medium traffic

**Implementation:**
- Convert FastAPI routes to Vercel serverless functions
- Use `vercel dev` for local development
- Deploy entire project with `vercel --prod`

### 2. **Separate Deployments with API Gateway**

**Structure:**
```
frontend/              # Deployed to Vercel
├── package.json
└── next.config.js

backend/               # Deployed separately
├── main.py
└── requirements.txt
```

**Benefits:**
- Independent scaling
- Different deployment cycles
- Can use different hosting for backend if needed

**Implementation:**
- Frontend: Deploy to Vercel as usual
- Backend: Deploy to Vercel Functions or external service
- Configure CORS and environment variables

### 3. **Vercel Functions with Python Runtime**

**Structure:**
```
project/
├── app/
│   ├── api/
│   │   └── [route]/
│   │       └── route.py    # FastAPI route handlers
│   └── page.tsx
├── vercel.json
└── requirements.txt
```

**Benefits:**
- Native Vercel integration
- Automatic scaling
- Edge function support

**Implementation:**
- Convert FastAPI app to individual Vercel functions
- Use `@vercel/python` runtime
- Handle routing through Vercel's file-based system

### 4. **Hybrid Approach with External Backend**

**Structure:**
```
frontend/              # Vercel
├── package.json
└── next.config.js

backend/               # External hosting (Railway, Render, etc.)
├── main.py
└── requirements.txt
```

**Benefits:**
- Backend can use any Python hosting
- Independent scaling and deployment
- Can leverage external services

**Implementation:**
- Deploy frontend to Vercel
- Deploy backend to external service
- Configure CORS and environment variables

## Recommended Configuration Files

### vercel.json for Monorepo Approach
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    },
    {
      "src": "api/**/*.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/$1"
    }
  ],
  "functions": {
    "api/**/*.py": {
      "runtime": "python3.9"
    }
  }
}
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app/api
PYTHONPATH=./api
```

## Deployment Steps

1. **Prepare Project Structure**
   - Organize frontend and backend code
   - Set up proper import paths
   - Configure build scripts

2. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

3. **Configure Vercel**
   - Run `vercel` to initialize
   - Configure project settings
   - Set environment variables

4. **Deploy**
   ```bash
   vercel --prod
   ```

## Considerations and Limitations

### Vercel Functions Limitations
- **Cold starts**: Python functions may have longer cold start times
- **Memory**: Limited to 3008MB per function
- **Timeout**: Maximum 10 seconds for Hobby plan, 60 seconds for Pro
- **File size**: 50MB limit for function packages

### Performance Optimization
- Use edge functions where possible
- Implement proper caching strategies
- Optimize Python dependencies
- Consider using Vercel's Edge Runtime for better performance

### Cost Considerations
- **Hobby plan**: 100GB-hours/month
- **Pro plan**: 1000GB-hours/month
- **Enterprise**: Custom limits
- Monitor function execution times and memory usage

## Alternative Deployment Options

If Vercel doesn't meet your needs, consider:
- **Railway**: Great for Python apps, easy deployment
- **Render**: Good free tier, supports Python
- **Heroku**: Mature platform, but more expensive
- **DigitalOcean App Platform**: Good for full-stack apps

The monorepo approach with Vercel Functions is generally the best choice for most NextJS + FastAPI applications, offering the best balance of simplicity, cost-effectiveness, and performance.
