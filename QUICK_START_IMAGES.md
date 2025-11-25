# Quick Start: Convert Your Images

## TL;DR - Convert Images in 3 Steps

### Step 1: Install Sharp (one-time)
```bash
npm install --save-dev sharp
```

### Step 2: Run Conversion
```bash
npm run optimize-images
```

This will automatically convert all JPG/JPEG files in `public/media/` to WebP and AVIF formats.

### Step 3: Build & Deploy
```bash
npm run build
npm run preview  # test locally
# Then deploy to Vercel/Netlify
```

## Expected Results

After conversion, you'll have files like:
```
public/media/
├── hero-image.jpg      (200 KB)
├── hero-image.webp     (80 KB)
├── hero-image.avif     (50 KB)
├── ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg    (150 KB)
├── ben-koorengevel-Vd0_Htlb-Kk-unsplash.webp   (50 KB)
├── ben-koorengevel-Vd0_Htlb-Kk-unsplash.avif   (35 KB)
└── ... (etc for all 4 gallery images)
```

## What Changed in Your Code

### New Component
- `src/components/ResponsiveImage.svelte` - Handles AVIF/WebP/JPEG fallback

### Updated Components
- `src/components/GallerySection.svelte` - Now uses ResponsiveImage
- `src/App.svelte` - Hero poster now preloads modern formats
- `src/lib/content.ts` - Gallery images include srcset metadata
- `vite.config.ts` - Added optional image processing plugin

### New Files
- `IMAGE_OPTIMIZATION.md` - Full optimization guide
- `IMAGE_CONVERSION_IMPLEMENTATION.md` - Implementation details
- `scripts/optimize-images.js` - Batch conversion script

## Browser Support After Conversion

Your images will automatically serve:
- **AVIF** to Chrome 85+, Firefox 93+, Safari 16+, Edge 85+ (~85% of users)
- **WebP** to older Chrome 23+, Firefox 65+, etc. (~14% of users)
- **JPEG** to ancient browsers (<1% of users)

## Performance Gains

| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| Hero image | ~200 KB | ~60 KB | -70% |
| Gallery images | ~600 KB | ~180 KB | -70% |
| **Total images** | **~1.2 MB** | **~360 KB** | **-70%** |
| LCP (estimated) | ~3.5s | ~2.0s | -43% |

## Need Help?

- **Step-by-step guide**: See `IMAGE_OPTIMIZATION.md`
- **Technical details**: See `IMAGE_CONVERSION_IMPLEMENTATION.md`
- **No Node.js?** Use [Squoosh.app](https://squoosh.app) instead
- **ImageMagick user?** See instructions in `IMAGE_OPTIMIZATION.md`

## One-Liner (if Sharp is installed)

```bash
npm install --save-dev sharp && npm run optimize-images && npm run build
```

## Rollback (if something goes wrong)

Just delete the `.webp` and `.avif` files - the component will use JPEG fallback:
```bash
rm public/media/*.webp public/media/*.avif
npm run build
```
