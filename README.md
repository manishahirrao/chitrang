# Chitransh Agency Website

Modern, premium, professional multi-page website for Chitransh Agency - Leading provider of RO Water Purifiers, Vacuum Cleaners, and Water Softeners in Bhopal.

## 🚀 Features

### Pages
- **Homepage** - Hero section, features, products preview, CTA
- **About** - Company information, mission, owner details
- **Products** - Complete product catalog with categories
- **Gallery** - Image gallery with lightbox and category filtering
- **Contact** - Contact information, map, and inquiry options

### Components
- Responsive navigation (desktop & mobile)
- Floating WhatsApp button
- Inquiry modal with form validation
- Product cards with features
- Gallery grid with lightbox
- Professional footer

### Technical Features
- ✅ Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Sitemap and robots.txt
- ✅ Custom 404 page
- ✅ Performance optimized
- ✅ Accessibility compliant
- ✅ Static site generation (SSG)

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.2
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Validation:** React Hook Form + Zod
- **Icons:** React Icons
- **Lightbox:** Yet Another React Lightbox
- **Animations:** Framer Motion

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # React components
│   ├── layout/           # Header, Footer, MobileMenu
│   ├── ui/               # Button, Card, Input, Modal
│   ├── home/             # Homepage components
│   ├── InquiryModal.tsx  # Contact form modal
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── ProductCard.tsx   # Product display card
│   └── GalleryGrid.tsx   # Gallery grid component
├── lib/                   # Utilities
│   ├── constants.ts      # Business information
│   └── validation.ts     # Form validation schemas
├── types/                 # TypeScript types
│   └── index.ts          # Type definitions
├── data/                  # Data files
│   ├── products.ts       # Product data
│   └── gallery.ts        # Gallery images
└── public/               # Static assets
    └── images/           # Images directory
```

## 🎨 Color Scheme

- **Primary Blue:** #3b82f6 (Trust, professionalism)
- **Secondary Green:** #22c55e (Purity, eco-friendly)
- **Accent Orange:** #f59e0b (Energy, action)
- **WhatsApp Green:** #25D366

## 📱 Contact Information

- **Business:** 9300010566, 07554297797
- **Support:** 0755-4297797
- **Email:** chitranshagency21@gmail.com
- **Address:** 49 Lala Lajpat Rai Colony Raisen Road, Bhopal, 462023
- **Hours:** 9:00 AM TO 9:00PM

## 📋 Requirements Checklist

✅ Multi-page website (Home, About, Products, Gallery, Contact)
✅ Popup inquiry form
✅ Floating WhatsApp button
✅ Responsive design (mobile, tablet, desktop)
✅ Modern, premium design aesthetic
✅ SEO optimized
✅ Fast loading performance
✅ Accessibility compliant
✅ Professional color scheme
✅ All business information displayed

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Recommended:** Deploy to Vercel for zero-configuration deployment.

## 📝 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [CONTENT_MIGRATION.md](./CONTENT_MIGRATION.md) - Content migration checklist
- [RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md) - Responsive design documentation
- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - Accessibility checklist
- [BROWSER_COMPATIBILITY.md](./BROWSER_COMPATIBILITY.md) - Browser support

## 🔧 Configuration

### Business Information
Update business details in `lib/constants.ts`

### Products
Add/edit products in `data/products.ts`

### Gallery
Add/edit gallery images in `data/gallery.ts`

### Styling
Customize colors in `app/globals.css`

## 📄 License

© 2026 Chitransh Agency. All rights reserved.

## 🤝 Support

For technical support or questions, contact the development team.
