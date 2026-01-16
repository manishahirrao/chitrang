# Deployment Guide

## Pre-Deployment Checklist

✅ All pages built successfully
✅ No TypeScript errors
✅ Responsive design tested
✅ SEO metadata configured
✅ Sitemap and robots.txt generated
✅ 404 page created
✅ Performance optimizations applied

## Recommended Hosting: Vercel

### Why Vercel?
- Built by Next.js creators
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Free tier available
- Custom domain support

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Custom Domain**
   - Go to Project Settings → Domains
   - Add `chitranshagency.in`
   - Follow DNS configuration instructions
   - Add A record or CNAME as instructed

### Environment Variables

No environment variables required for basic functionality.

Optional (if adding EmailJS later):
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Alternative: Netlify

1. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Configure Domain**
   - Go to Domain settings
   - Add custom domain
   - Follow DNS instructions

## Alternative: Traditional Hosting

For static hosting (Hostinger, GoDaddy, etc.):

1. **Export Static Site**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload contents of `.next` folder
   - Configure server to serve `index.html` for all routes

## Post-Deployment

1. **Verify Deployment**
   - [ ] All pages load correctly
   - [ ] Navigation works
   - [ ] Forms validate properly
   - [ ] WhatsApp button works
   - [ ] Images load (once added)
   - [ ] Mobile responsive
   - [ ] SEO tags present

2. **Submit to Search Engines**
   - [ ] Google Search Console
   - [ ] Bing Webmaster Tools
   - [ ] Submit sitemap: `https://chitranshagency.in/sitemap.xml`

3. **Monitor Performance**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Monitor uptime

## Build Information

- **Framework:** Next.js 16.1.2
- **Build Time:** ~3-4 seconds
- **Output:** Static pages (SSG)
- **Total Pages:** 10 (including sitemap, robots.txt, 404)

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
