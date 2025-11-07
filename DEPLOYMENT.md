# Deployment Guide - WillCap.io

## Overview

This guide covers deploying the migrated Next.js + FastAPI application to Vercel.

## Local Dev
To test locally:  
./start-dev.sh  

Then visit:  

Frontend: http://localhost:3000  
Backend API: http://localhost:8000/docs  


## Architecture

The application consists of two main parts:

1. **Frontend**: Next.js 14+ application with App Router
2. **Backend**: FastAPI application serving blog content via REST API

Both are deployed to Vercel using the monorepo configuration in `vercel.json`.

## Prerequisites

1. Vercel account (free tier works)
2. Vercel CLI installed: `npm i -g vercel`
3. Git repository (push your code to GitHub/GitLab/Bitbucket)

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Make sure all changes are committed
git add .
git commit -m "Migration to Next.js + FastAPI complete"
git push origin main
```

### 2. Install Vercel CLI

```bash
npm i -g vercel
```

### 3. Login to Vercel

```bash
vercel login
```

### 4. Deploy to Staging (Preview)

```bash
# From the project root
cd /path/to/willcapio-old
vercel
```

This creates a preview deployment. Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `willcapio`
- In which directory is your code located? `./`

### 5. Set Environment Variables

After the first deployment, set the environment variable:

```bash
# Set the API URL to your Vercel domain
vercel env add NEXT_PUBLIC_API_URL

# When prompted, enter: https://willcapio.vercel.app
# Select: Production, Preview, Development
```

Or set it in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_API_URL` = `https://your-domain.vercel.app`

### 6. Deploy to Production

```bash
vercel --prod
```

## Vercel Configuration Explanation

The `vercel.json` file configures the deployment:

```json
{
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

This tells Vercel to:
1. Build the Next.js frontend from `frontend/`
2. Build the Python backend from `backend/`
3. Route `/api/*` requests to the FastAPI backend
4. Route all other requests to the Next.js frontend

## Custom Domain

To use a custom domain:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain (e.g., `willcap.io`)
4. Follow the DNS configuration instructions
5. Update `NEXT_PUBLIC_API_URL` to use your custom domain

## Monitoring and Debugging

### View Logs

```bash
# View deployment logs
vercel logs

# View latest deployment
vercel logs --follow
```

### Debugging Tips

1. **Backend API not responding**: Check the FastAPI logs in Vercel dashboard
2. **Frontend errors**: Check the Next.js build logs
3. **CORS errors**: Verify the CORS configuration in `backend/main.py`
4. **Environment variables**: Ensure `NEXT_PUBLIC_API_URL` is set correctly

## Performance Optimization

The application is configured for optimal performance:

- **Static Site Generation (SSG)**: Blog posts are pre-rendered at build time
- **Incremental Static Regeneration (ISR)**: Content revalidates every hour
- **Image Optimization**: Next.js Image component handles image optimization
- **Edge Network**: Vercel's global CDN distributes your content

## Continuous Deployment

Once connected to Git, Vercel automatically deploys:

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## Rollback

To rollback to a previous deployment:

1. Go to Vercel dashboard
2. Navigate to "Deployments"
3. Find the deployment you want to rollback to
4. Click "..." → "Promote to Production"

## Cost Estimation

With Vercel's free tier:
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN

For most personal blogs, the free tier is sufficient.

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test blog post pages
- [ ] Check tag filtering
- [ ] Verify API endpoints (`/api/posts`, `/api/tags`)
- [ ] Test mobile responsiveness
- [ ] Check SEO metadata
- [ ] Verify custom domain (if configured)
- [ ] Test navigation between pages
- [ ] Check images load correctly
- [ ] Verify analytics (if configured)

## Support

If you encounter issues:

1. Check Vercel deployment logs
2. Review the FastAPI logs in Vercel
3. Test the API endpoints directly
4. Verify environment variables are set correctly

## Next Steps

After successful deployment:

1. Configure Google Analytics or other analytics
2. Set up monitoring (e.g., Sentry for error tracking)
3. Configure sitemap generation
4. Set up automated backups of content
5. Consider adding a CMS for easier content management

