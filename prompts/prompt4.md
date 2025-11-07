# Prompt 4: Custom Domain Configuration in Vercel

**Date:** 2024.12.19  
**Prompt:** For using a domain that I own for the deployment, is that something I'd configure by logging in to Vercel?

## Yes! Custom Domain Configuration is Done Through Vercel

**Custom domain configuration** can be done both through the Vercel web interface and via CLI, but the web interface is often more user-friendly for domain management.

### Web Interface Configuration (Recommended)

#### Step 1: Access Domain Settings
1. **Login to Vercel** at [vercel.com](https://vercel.com)
2. **Navigate to your project** dashboard
3. **Go to Settings** → **Domains** tab
4. **Click "Add Domain"** button

#### Step 2: Add Your Domain
```
Domain: yourdomain.com
Type: Production
```

#### Step 3: Configure DNS Records
Vercel will provide you with the necessary DNS records to add to your domain registrar:

**For Root Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 76.76.19.36
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For API subdomain (if needed):**
```
Type: CNAME
Name: api
Value: cname.vercel-dns.com
```

### CLI Configuration

#### Add Domain via CLI
```bash
# Add custom domain
vercel domains add yourdomain.com

# List all domains
vercel domains ls

# Remove domain
vercel domains rm yourdomain.com
```

#### Domain Verification
```bash
# Check domain status
vercel domains ls

# Verify domain configuration
vercel domains verify yourdomain.com
```

### Domain Configuration Options

#### 1. **Root Domain vs Subdomain**
```
Root Domain: yourdomain.com
Subdomain: www.yourdomain.com
Custom: api.yourdomain.com
```

#### 2. **Environment-Specific Domains**
```
Production: yourdomain.com
Preview: preview.yourdomain.com
Development: dev.yourdomain.com
```

#### 3. **Multiple Domains**
```
Primary: yourdomain.com
Secondary: yourdomain.net
Regional: us.yourdomain.com
```

### DNS Configuration at Your Registrar

#### Popular Domain Registrars

**Namecheap:**
1. Login to Namecheap
2. Go to **Domain List** → **Manage**
3. Click **Advanced DNS**
4. Add the DNS records provided by Vercel

**GoDaddy:**
1. Login to GoDaddy
2. Go to **My Products** → **DNS**
3. Click **Manage DNS**
4. Add the DNS records provided by Vercel

**Google Domains:**
1. Login to Google Domains
2. Select your domain
3. Go to **DNS** → **Manage Custom Records**
4. Add the DNS records provided by Vercel

**Cloudflare:**
1. Login to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Add the DNS records provided by Vercel

### Advanced Domain Configuration

#### 1. **SSL/HTTPS Configuration**
- **Automatic**: Vercel provides free SSL certificates
- **Custom**: Upload your own SSL certificate if needed
- **Force HTTPS**: Redirect HTTP to HTTPS automatically

#### 2. **Domain Aliases**
```bash
# Add domain alias
vercel alias add yourdomain.com www.yourdomain.com

# List aliases
vercel alias ls

# Remove alias
vercel alias rm yourdomain.com
```

#### 3. **Geographic Routing**
```json
// vercel.json
{
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1",
      "headers": {
        "x-vercel-deployment-url": "https://yourdomain.com"
      }
    }
  ]
}
```

### Domain Verification Process

#### 1. **DNS Propagation**
- **Time**: 24-48 hours for full propagation
- **Check**: Use tools like [whatsmydns.net](https://whatsmydns.net)
- **Status**: Vercel dashboard shows verification status

#### 2. **Verification Steps**
```
1. Add DNS records at registrar
2. Wait for DNS propagation
3. Vercel automatically verifies
4. Domain becomes active
5. SSL certificate is issued
```

#### 3. **Troubleshooting Verification**
```bash
# Check DNS propagation
dig yourdomain.com
nslookup yourdomain.com

# Verify with Vercel
vercel domains verify yourdomain.com

# Check domain status
vercel domains ls
```

### Environment Variables for Domains

#### .env.local
```bash
# Production domain
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://yourdomain.com/api

# Preview domain
NEXT_PUBLIC_SITE_URL=https://preview.yourdomain.com
NEXT_PUBLIC_API_URL=https://preview.yourdomain.com/api
```

#### next.config.js
```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: 'https://yourdomain.com/new-page',
        permanent: true,
      },
    ]
  },
}
```

### Domain Management Best Practices

#### 1. **Use Environment-Specific Domains**
```
Development: localhost:3000
Staging: staging.yourdomain.com
Production: yourdomain.com
```

#### 2. **Set Up Redirects**
```json
// vercel.json
{
  "redirects": [
    {
      "source": "/old-blog/:slug",
      "destination": "/blog/:slug",
      "permanent": true
    }
  ]
}
```

#### 3. **Monitor Domain Health**
```bash
# Check domain status
vercel domains ls

# View domain analytics
vercel analytics

# Monitor SSL certificate
vercel domains verify yourdomain.com
```

### Common Issues and Solutions

#### 1. **DNS Not Propagated**
```bash
# Wait 24-48 hours
# Check with multiple DNS lookup tools
# Verify records at registrar
```

#### 2. **SSL Certificate Issues**
```bash
# Check domain verification
vercel domains verify yourdomain.com

# Force SSL renewal
vercel domains renew yourdomain.com
```

#### 3. **Domain Already in Use**
```bash
# Check if domain is linked to another project
vercel projects ls

# Transfer domain to current project
vercel domains transfer yourdomain.com
```

### Summary

**Yes, custom domain configuration is primarily done through Vercel**, either via:

1. **Web Interface** (Recommended for beginners)
   - Easy-to-use dashboard
   - Visual DNS configuration
   - Step-by-step guidance

2. **CLI** (For advanced users)
   - Command-line automation
   - Script integration
   - Bulk domain management

The process involves:
- Adding your domain in Vercel
- Configuring DNS records at your registrar
- Waiting for DNS propagation
- Automatic SSL certificate issuance

Vercel handles most of the complexity, making it relatively straightforward to use your own domain for deployment.

