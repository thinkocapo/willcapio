# Prompt 7: Vercel Entrypoint Detection for Next.js and FastAPI

**Date:** 2024.12.19  
**Prompt:** How does Vercel know to find the entrypoint to the Nextjs and FastAPI apps? Meaning which directory and file is it in. I ask because you gave me one project structure of files, but I'm working in cursor on migrating an app from React Gatsby to Nextjs and FastAPI and looks like it gave a slightly different structure of files, where nextjs is in /frontend and fastapi is in /backend

## Vercel Uses Configuration Files to Find Entrypoints

**Great question!** Vercel doesn't automatically guess where your apps are - it uses configuration files to know exactly where to find your Next.js and FastAPI entrypoints. The `/frontend` and `/backend` structure you're seeing is actually the **recommended approach** for monorepo deployments.

### How Vercel Finds Your Apps

#### **1. Next.js Entrypoint Detection**
Vercel looks for Next.js apps in these locations (in order of priority):

**Option A: Root Directory (Traditional)**
```
project/
├── package.json          # Must contain Next.js dependencies
├── next.config.js        # Next.js configuration
├── app/                  # App Router directory
├── pages/                # Pages Router directory
└── vercel.json           # Vercel configuration
```

**Option B: Subdirectory (Your Structure)**
```
project/
├── frontend/             # Next.js app directory
│   ├── package.json      # Must contain Next.js dependencies
│   ├── next.config.js    # Next.js configuration
│   └── app/              # App Router directory
├── backend/              # FastAPI app directory
│   ├── main.py           # FastAPI entrypoint
│   └── requirements.txt  # Python dependencies
└── vercel.json           # Vercel configuration
```

#### **2. FastAPI Entrypoint Detection**
Vercel looks for Python/FastAPI apps in these locations:

**Option A: Root Directory**
```
project/
├── main.py               # FastAPI entrypoint
├── requirements.txt      # Python dependencies
└── vercel.json          # Vercel configuration
```

**Option B: Subdirectory (Your Structure)**
```
project/
├── backend/              # FastAPI app directory
│   ├── main.py           # FastAPI entrypoint
│   └── requirements.txt  # Python dependencies
└── vercel.json          # Vercel configuration
```

### Configuration Files That Tell Vercel Where to Look

#### **vercel.json - The Key Configuration**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",    // Points to Next.js app
      "use": "@vercel/next"
    },
    {
      "src": "backend/main.py",          // Points to FastAPI app
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",                // API routes
      "dest": "/backend/main.py"         // Route to FastAPI
    },
    {
      "src": "/(.*)",                    // All other routes
      "dest": "/frontend/$1"             // Route to Next.js
    }
  ]
}
```

#### **What Each Section Does**

**`builds` Array:**
- **`src`**: Path to the entrypoint file
- **`use`**: Build tool to use for that entrypoint

**`routes` Array:**
- **`src`**: URL pattern to match
- **`dest`**: Where to route the request

### Your Recommended Project Structure

#### **Monorepo with Frontend/Backend Separation**
```
willcapio-nextjs/
├── frontend/                 # Next.js application
│   ├── package.json          # Next.js dependencies
│   ├── next.config.js        # Next.js configuration
│   ├── app/                  # App Router (Next.js 13+)
│   ├── components/           # React components
│   ├── lib/                  # Utilities and helpers
│   ├── styles/               # Global styles and theme
│   └── public/               # Static assets
├── backend/                  # FastAPI application
│   ├── main.py               # FastAPI entrypoint
│   ├── app/                  # FastAPI app modules
│   ├── content/              # Migrated markdown content
│   └── requirements.txt      # Python dependencies
├── vercel.json               # Vercel configuration
└── README.md                 # Project documentation
```

#### **Why This Structure is Better**
- **Clear separation** of concerns
- **Easier to maintain** and scale
- **Independent deployment** if needed later
- **Better for team collaboration**
- **Follows industry standards**

### Entrypoint File Requirements

#### **Next.js Entrypoint Requirements**
```json
// frontend/package.json
{
  "name": "willcapio-frontend",
  "dependencies": {
    "next": "^14.0.0",           // Must have Next.js
    "react": "^18.0.0",          // Must have React
    "react-dom": "^18.0.0"       // Must have React DOM
  },
  "scripts": {
    "build": "next build",        // Must have build script
    "dev": "next dev"             // Must have dev script
  }
}
```

#### **FastAPI Entrypoint Requirements**
```python
# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="WillCap.io API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "WillCap.io API"}

@app.get("/api/posts")
async def get_posts():
    # Your blog posts logic here
    return {"posts": []}
```

### Alternative Project Structures

#### **Option 1: Root-Level Apps (Simpler)**
```
willcapio-nextjs/
├── package.json              # Next.js dependencies
├── next.config.js            # Next.js configuration
├── app/                      # Next.js App Router
├── main.py                   # FastAPI entrypoint
├── requirements.txt          # Python dependencies
└── vercel.json              # Vercel configuration
```

**vercel.json for Root-Level:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    },
    {
      "src": "main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/main.py"
    }
  ]
}
```

#### **Option 2: Your Current Structure (Recommended)**
```
willcapio-nextjs/
├── frontend/                 # Next.js app
├── backend/                  # FastAPI app
└── vercel.json              # Points to both
```

**vercel.json for Frontend/Backend:**
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
      "dest": "/backend/main.py"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/$1"
    }
  ]
}
```

### How Vercel Builds Each App

#### **Next.js Build Process**
```bash
# Vercel automatically runs:
cd frontend/
npm install
npm run build
# Output goes to frontend/.next/
```

#### **FastAPI Build Process**
```bash
# Vercel automatically runs:
cd backend/
pip install -r requirements.txt
# Python code is packaged for serverless execution
```

### Environment Variables by App

#### **Frontend Environment Variables**
```bash
# .env.local (in frontend directory)
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

#### **Backend Environment Variables**
```bash
# Set in Vercel dashboard or vercel.json
DATABASE_URL=your-database-url
API_KEY=your-api-key
```

### Troubleshooting Entrypoint Issues

#### **Common Problems**

**1. "Build not found" Error**
```bash
# Check vercel.json paths
# Ensure src paths match actual file locations
# Verify package.json exists in specified location
```

**2. "Framework not detected" Error**
```bash
# Check package.json has Next.js dependencies
# Verify next.config.js exists
# Ensure proper directory structure
```

**3. "Python app not found" Error**
```bash
# Check main.py exists in specified path
# Verify requirements.txt exists
# Ensure Python dependencies are correct
```

#### **Debugging Steps**
```bash
# Test build locally
vercel build

# Check project structure
vercel ls

# View build logs
vercel logs [deployment-url]
```

### Migration from Your Current Structure

#### **If You Want to Keep Frontend/Backend Separation**
1. **Keep your current structure** - it's actually better!
2. **Update vercel.json** to point to the correct paths
3. **Ensure package.json** is in the frontend directory
4. **Ensure main.py** is in the backend directory

#### **If You Want to Simplify to Root-Level**
1. **Move Next.js files** to root directory
2. **Move FastAPI files** to root directory
3. **Update vercel.json** for root-level paths
4. **Update import paths** in your code

### Summary

**Vercel finds your apps through configuration, not magic:**

#### **What Vercel Needs:**
1. **vercel.json** - Tells Vercel where to look
2. **Correct file paths** - Must match your actual structure
3. **Proper entrypoint files** - package.json for Next.js, main.py for FastAPI

#### **Your Current Structure is Perfect:**
- **`/frontend`** - Next.js app (with package.json)
- **`/backend`** - FastAPI app (with main.py)
- **`vercel.json`** - Points to both locations

#### **Key Points:**
- **Vercel doesn't auto-detect** - it follows your configuration
- **Frontend/backend separation** is the recommended approach
- **vercel.json is the map** that tells Vercel where everything is
- **Your structure is actually better** than the simpler root-level approach

**Bottom line**: Your current `/frontend` and `/backend` structure is excellent. Just make sure your `vercel.json` correctly points to `frontend/package.json` and `backend/main.py`, and Vercel will know exactly where to find and build both apps.



