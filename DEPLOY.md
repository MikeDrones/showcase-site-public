# Deployment Guide

This guide will help you deploy your portfolio to GitHub and then to your server.

## Step 1: Push to GitHub

### Create a New GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `portfolio-showcase`)
3. Choose **Public** (or Private if you prefer)
4. **DO NOT** initialize with README (we already have one)
5. Click "Create repository"

### Push Your Code

```bash
cd C:\Users\Thinkpad\projects\showcase-site-public

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repository name.

---

## Step 2: Deploy to Your Server

### Option A: Deploy to Vercel (Easiest)

Vercel is the company behind Next.js and provides the best hosting for Next.js apps.

1. Go to [vercel.com](https://vercel.com)
2. Sign up/in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Vercel will auto-deploy on every git push.

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Update your DNS settings as instructed

---

### Option B: Deploy to Your Own Server

#### Requirements
- Node.js 18+ installed on server
- SSH access to your server
- Nginx or Apache for reverse proxy

#### Build for Production

```bash
cd C:\Users\Thinkpad\projects\showcase-site-public

# Install dependencies
npm install

# Build the production version
npm run build

# Test production build locally
npm start
```

#### Deploy via SSH

```bash
# On your local machine, create a tarball
npm run build
tar -czf portfolio.tar.gz .next package.json package-lock.json public

# Upload to server
scp portfolio.tar.gz user@yourserver.com:/var/www/portfolio/

# On your server
ssh user@yourserver.com
cd /var/www/portfolio
tar -xzf portfolio.tar.gz
npm install --production
npm start
```

#### Use PM2 for Process Management

```bash
# On your server
npm install -g pm2

# Start the app
pm2 start npm --name "portfolio" -- start

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

#### Nginx Configuration

Create `/etc/nginx/sites-available/portfolio`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and reload:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

### Option C: Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
```

Deploy:
```bash
docker-compose up -d
```

---

## Environment Variables

If you need environment variables for production:

Create `.env.production`:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# Add any other env vars here
```

**Important:** Never commit `.env` files to GitHub!

---

## Updating Your Site

### After Making Changes

```bash
# Commit your changes
git add .
git commit -m "Update: description of changes"
git push

# If using Vercel, it will auto-deploy
# If using your own server, rebuild and redeploy
```

---

## Performance Checklist

Before deploying, ensure:
- ✅ Images are optimized (use WebP format)
- ✅ `npm run build` completes without errors
- ✅ Test on mobile devices
- ✅ Check Lighthouse scores (aim for 90+)
- ✅ Verify all links work
- ✅ Test form submissions (if applicable)

---

## Monitoring

### Vercel
- Built-in analytics at vercel.com/dashboard
- Real-time logs and error tracking

### Self-Hosted
Consider adding:
- **Plausible** for privacy-friendly analytics
- **Sentry** for error tracking
- **Uptime Robot** for monitoring

---

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repo

---

Good luck with your deployment! 🚀
