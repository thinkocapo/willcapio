# Prompt 6: Vercel Git Integration and Deployment Process

**Date:** 2024.12.19  
**Prompt:** Does Vercel use the code from .git that i'm sending, or is .git sending updates to my Github and then there's a Github.com-to-Vercel integration that's needed? Asking because with Ghost.io I didn't realize the free/cheap plans did NOT include support with GitHub Actions which was required for triggering builds.

## Vercel Has Direct Git Integration - No GitHub Actions Required!

**Great news**: Vercel directly integrates with your Git repository (GitHub, GitLab, Bitbucket) and automatically deploys when you push code. **No GitHub Actions required** - this is included in the FREE Hobby plan!

### How Vercel Git Integration Works

#### **Direct Repository Connection**
```
Your Local Git → GitHub → Vercel (Automatic)
     ↓              ↓         ↓
   git push    Repository   Auto-deploy
```

**What happens:**
1. You push code to your Git repository
2. Vercel automatically detects the change
3. Vercel builds and deploys your app
4. No manual intervention needed

#### **No GitHub Actions Required**
- **Vercel handles builds automatically**
- **Free Hobby plan includes this feature**
- **No additional CI/CD setup needed**
- **Real-time deployments on every push**

### Vercel vs Ghost.io (Key Differences)

#### **Ghost.io Limitations**
```
Free Plan: ❌ No GitHub Actions
Cheap Plans: ❌ No GitHub Actions
Expensive Plans: ✅ GitHub Actions included
```

**Why this matters:**
- GitHub Actions are required for Ghost.io builds
- Free/cheap plans can't trigger deployments
- You're locked into manual deployments

#### **Vercel Advantages**
```
Free Plan: ✅ Full Git integration
Pro Plan: ✅ Advanced Git features
Enterprise: ✅ Enterprise Git workflows
```

**What you get:**
- Automatic deployments on every push
- Preview deployments for pull requests
- Branch-based deployments
- No additional CI/CD costs

### Setting Up Vercel Git Integration

#### **Step 1: Connect Your Repository**
1. **Login to Vercel**
2. **Click "New Project"**
3. **Import Git Repository**
4. **Select your GitHub/GitLab/Bitbucket repo**

#### **Step 2: Configure Build Settings**
```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

#### **Step 3: Deploy**
```bash
# First deployment (manual)
vercel --prod

# Subsequent deployments (automatic)
git push origin main
# Vercel automatically builds and deploys!
```

### Git Integration Features (All Plans)

#### **Automatic Deployments**
- **Push to main**: Auto-deploy to production
- **Push to branch**: Auto-deploy to preview
- **Pull request**: Create preview deployment
- **Merge to main**: Auto-deploy to production

#### **Preview Deployments**
```
Branch: feature/new-blog-post
Preview URL: https://feature-new-blog-post.vercel.app
Production: https://yourdomain.com
```

#### **Deployment History**
- Every commit gets a unique deployment
- Rollback to any previous version
- Compare deployments side-by-side
- Automatic cleanup of old previews

### Deployment Triggers

#### **What Triggers Deployments**
```bash
# These trigger deployments:
git push origin main          # Production
git push origin feature-branch # Preview
git push origin hotfix        # Preview

# These DON'T trigger deployments:
git commit --amend            # No new commit hash
git rebase                    # Rewrites history
git tag                       # Tags don't auto-deploy
```

#### **Custom Deployment Rules**
```json
// vercel.json
{
  "git": {
    "deploymentEnabled": {
      "main": true,           // Deploy main branch
      "develop": true,        // Deploy develop branch
      "feature/*": true,      // Deploy feature branches
      "hotfix/*": true        // Deploy hotfix branches
    }
  }
}
```

### Branch-Based Deployments

#### **Production Branch (main)**
```
Branch: main
Environment: Production
URL: https://yourdomain.com
Auto-deploy: ✅ Yes
```

#### **Development Branches**
```
Branch: develop
Environment: Preview
URL: https://develop-yourdomain.vercel.app
Auto-deploy: ✅ Yes
```

#### **Feature Branches**
```
Branch: feature/new-post
Environment: Preview
URL: https://feature-new-post-yourdomain.vercel.app
Auto-deploy: ✅ Yes
```

### Environment Variables by Branch

#### **Production Environment**
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
DATABASE_URL=production-db-url
```

#### **Preview Environment**
```bash
# .env.preview
NEXT_PUBLIC_API_URL=https://preview-yourdomain.vercel.app/api
DATABASE_URL=staging-db-url
```

#### **Development Environment**
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=local-db-url
```

### Git Integration Best Practices

#### **1. Use Conventional Commits**
```bash
# Good commit messages
git commit -m "feat: add new blog post about Vercel"
git commit -m "fix: resolve image loading issue"
git commit -m "docs: update README with deployment info"

# Avoid these
git commit -m "update stuff"
git commit -m "fix things"
```

#### **2. Branch Naming Convention**
```bash
# Feature branches
git checkout -b feature/new-blog-post
git checkout -b feature/user-authentication

# Bug fixes
git checkout -b fix/image-optimization
git checkout -b fix/api-endpoint

# Hotfixes
git checkout -b hotfix/security-patch
```

#### **3. Pull Request Workflow**
```
1. Create feature branch
2. Make changes and commit
3. Push to remote
4. Create pull request
5. Vercel creates preview deployment
6. Review and test
7. Merge to main
8. Vercel auto-deploys to production
```

### Monitoring Git Deployments

#### **Vercel Dashboard**
- Real-time deployment status
- Build logs and errors
- Performance metrics
- Rollback options

#### **CLI Monitoring**
```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Rollback to previous version
vercel rollback [deployment-url]
```

#### **Email Notifications**
- Build success/failure alerts
- Deployment completion notices
- Error notifications
- Performance warnings

### Troubleshooting Git Integration

#### **Common Issues**

**1. Deployments Not Triggering**
```bash
# Check repository connection
vercel git connect

# Verify webhook settings
vercel git ls

# Reconnect repository
vercel git disconnect
vercel git connect
```

**2. Build Failures**
```bash
# Check build logs
vercel logs [deployment-url]

# Test build locally
vercel build

# Check environment variables
vercel env ls
```

**3. Environment Variable Issues**
```bash
# Pull latest environment variables
vercel env pull .env.local

# Set environment variable
vercel env add NEXT_PUBLIC_API_URL

# Verify environment variables
vercel env ls
```

### Summary

**Vercel's Git integration is completely different from Ghost.io:**

#### **What You Get (FREE):**
- ✅ **Direct Git repository connection**
- ✅ **Automatic deployments on every push**
- ✅ **Preview deployments for branches**
- ✅ **No GitHub Actions required**
- ✅ **Real-time deployment monitoring**

#### **How It Works:**
1. **Connect your Git repo** to Vercel
2. **Push code** to any branch
3. **Vercel automatically** builds and deploys
4. **No additional setup** or CI/CD configuration needed

#### **Key Advantages:**
- **Simpler than Ghost.io** - no GitHub Actions complexity
- **More reliable** - direct integration, fewer moving parts
- **Cost-effective** - included in free plan
- **Developer-friendly** - works exactly as you'd expect

**Bottom line**: Vercel's Git integration is one of its biggest advantages. You get enterprise-grade CI/CD features in the free plan, without the complexity of GitHub Actions that Ghost.io requires.



