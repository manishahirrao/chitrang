# Responsive Design Documentation

## Breakpoints

The website uses Tailwind CSS default breakpoints:

- **Mobile**: < 640px (default, no prefix)
- **sm**: ≥ 640px (mobile landscape)
- **md**: ≥ 768px (tablet)
- **lg**: ≥ 1024px (desktop)
- **xl**: ≥ 1280px (large desktop)
- **2xl**: ≥ 1536px (extra large)

## Responsive Components

### Header
- Mobile: Hamburger menu
- Desktop: Full navigation bar

### Navigation
- Mobile: Slide-in menu with backdrop
- Desktop: Horizontal menu bar

### Grid Layouts
- Products: 1 col (mobile) → 2 cols (md) → 3 cols (lg)
- Gallery: 1 col (mobile) → 2 cols (sm) → 3 cols (md) → 4 cols (lg)
- Features: 1 col (mobile) → 2 cols (md) → 4 cols (lg)

### Typography
- Headings scale down on mobile
- Body text remains readable across all devices

### Spacing
- Container padding: 4 (1rem) on all devices
- Section padding: py-16 (4rem) on all devices

## Testing Checklist

✅ Mobile (< 640px)
- Navigation menu works
- All content is readable
- Images scale properly
- Forms are usable

✅ Tablet (768px - 1024px)
- Grid layouts adjust
- Navigation is accessible
- Content flows properly

✅ Desktop (> 1024px)
- Full navigation visible
- Optimal use of screen space
- Hover effects work
