# Prompt 3: CLI Deployment Tools for Vercel

**Date:** 2024.12.19  
**Prompt:** So can I deploy from a cli tool somehow? is it a vercel cli?

## Yes! Vercel CLI is the Primary Deployment Tool

**Vercel CLI** is indeed the main command-line tool for deploying to Vercel. It's a powerful Node.js-based CLI that provides comprehensive deployment capabilities.

### Installing Vercel CLI

```bash
# Install globally via npm
npm i -g vercel

# Or via yarn
yarn global add vercel

# Or via pnpm
pnpm add -g vercel
```

### Basic CLI Commands

#### 1. **Initial Setup**
```bash
# Login to your Vercel account
vercel login

# Initialize a new project
vercel init

# Link to existing Vercel project
vercel link
```

#### 2. **Deployment Commands**
```bash
# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod

# Deploy with specific environment
vercel --env production

# Deploy and assign custom domain
vercel --prod --name my-custom-domain
```

#### 3. **Development Commands**
```bash
# Start local development server
vercel dev

# Pull environment variables
vercel env pull

# List deployments
vercel ls
```

### CLI Workflow for NextJS + FastAPI

#### Step 1: Project Setup
```bash
# Navigate to your project
cd your-nextjs-fastapi-project

# Login to Vercel
vercel login

# Link project (first time only)
vercel link
```

#### Step 2: Configure Project
```bash
# Pull environment variables
vercel env pull .env.local

# Set up project configuration
vercel
```

#### Step 3: Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Advanced CLI Features

#### Environment Variables
```bash
# Add environment variable
vercel env add NEXT_PUBLIC_API_URL

# List environment variables
vercel env ls

# Remove environment variable
vercel env rm NEXT_PUBLIC_API_URL
```

#### Domains and Aliases
```bash
# Add custom domain
vercel domains add example.com

# List domains
vercel domains ls

# Remove domain
vercel domains rm example.com
```

#### Team Management
```bash
# Switch between teams
vercel switch

# List team members
vercel team ls

# Invite team member
vercel team invite user@example.com
```

### Alternative CLI Tools

#### 1. **GitHub Actions Integration**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

#### 2. **GitLab CI/CD**
```yaml
# .gitlab-ci.yml
deploy:
  stage: deploy
  script:
    - npm install -g vercel
    - vercel --prod --token $VERCEL_TOKEN
  only:
    - main
```

#### 3. **Bitbucket Pipelines**
```yaml
# bitbucket-pipelines.yml
pipelines:
  default:
    - step:
        name: Deploy to Vercel
        script:
          - npm install -g vercel
          - vercel --prod --token $VERCEL_TOKEN
        only:
          - main
```

### CLI Configuration Files

#### vercel.json
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
    }
  ],
  "functions": {
    "api/**/*.py": {
      "runtime": "python3.9"
    }
  }
}
```

#### .vercelignore
```
node_modules
.next
.env.local
.env.production
.git
README.md
```

### CLI Best Practices

#### 1. **Use Environment-Specific Deployments**
```bash
# Development
vercel --env development

# Staging
vercel --env staging

# Production
vercel --prod --env production
```

#### 2. **Automate with Scripts**
```json
// package.json
{
  "scripts": {
    "deploy:dev": "vercel --env development",
    "deploy:staging": "vercel --env staging",
    "deploy:prod": "vercel --prod --env production",
    "dev": "vercel dev"
  }
}
```

#### 3. **Use Vercel Dev for Local Testing**
```bash
# Start local development
vercel dev

# This will:
# - Load environment variables
# - Start Next.js dev server
# - Start Python functions locally
# - Provide local preview URLs
```

### Troubleshooting Common CLI Issues

#### Authentication Issues
```bash
# Re-login if token expires
vercel logout
vercel login

# Check current user
vercel whoami
```

#### Deployment Failures
```bash
# Check deployment logs
vercel logs [deployment-url]

# Redeploy with verbose output
vercel --debug

# Check project status
vercel ls
```

#### Environment Variable Issues
```bash
# Pull latest environment variables
vercel env pull .env.local

# Verify environment variables
vercel env ls
```

### Summary

**Yes, Vercel CLI is the primary tool** for deploying to Vercel! It provides:

- **Easy deployment** with `vercel` and `vercel --prod`
- **Local development** with `vercel dev`
- **Environment management** for different deployment stages
- **Team collaboration** features
- **Integration** with CI/CD pipelines

The CLI is essential for any serious Vercel deployment workflow and provides much more control than just using the web interface.
