# Content Migration Guide

## Content to Migrate from chitranshagency.co.in

### 1. Product Information
- [ ] Extract all product details (names, descriptions, specifications)
- [ ] Download product images
- [ ] Optimize images (compress, resize to appropriate dimensions)
- [ ] Update `data/products.ts` with actual product data
- [ ] Place images in `public/images/products/`

### 2. Gallery Images
- [ ] Download installation photos
- [ ] Download showroom photos
- [ ] Download customer testimonial photos
- [ ] Optimize all images
- [ ] Update `data/gallery.ts` with actual image paths
- [ ] Place images in `public/images/gallery/`

### 3. Business Information
✅ Already migrated to `lib/constants.ts`:
- Business name
- Owner information
- Contact details
- Address
- Working hours

### 4. About Content
- [ ] Review and update company history in `app/about/page.tsx`
- [ ] Add any additional achievements or certifications
- [ ] Update business details if needed

### 5. Logo and Branding
- [ ] Create or obtain company logo
- [ ] Place logo in `public/images/logo.png`
- [ ] Update Header component to use actual logo
- [ ] Create favicon (place in `public/favicon.ico`)

## Image Optimization Checklist

For each image:
1. Resize to appropriate dimensions:
   - Product images: 800x800px
   - Gallery images: 1200x800px
   - Logo: 200x60px (transparent PNG)
2. Compress using tools like TinyPNG or ImageOptim
3. Convert to WebP format (Next.js will handle this automatically)
4. Ensure file names are descriptive and SEO-friendly

## Verification Steps

After migration:
- [ ] All product images display correctly
- [ ] Gallery images load properly
- [ ] Logo appears in header
- [ ] Favicon shows in browser tab
- [ ] All content is accurate and up-to-date
- [ ] No broken image links
- [ ] Images are optimized (< 200KB each)
