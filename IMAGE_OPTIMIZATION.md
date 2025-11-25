# Image Optimization Guide

## Overview
This guide explains how to convert your images to modern formats (AVIF, WebP) for better performance while maintaining backward compatibility.

## Why Modern Image Formats?
- **AVIF**: ~25-35% smaller than JPEG (best compression, newer browsers)
- **WebP**: ~25-30% smaller than JPEG (good compression, broader support)
- **JPEG**: Fallback for older browsers (100% baseline)

## Quick Start

### Option 1: Using the Provided Script (Recommended)
```bash
npm install --save-dev sharp
node scripts/optimize-images.js
```

### Option 2: Using ImageMagick CLI
```bash
# Install ImageMagick
# macOS: brew install imagemagick
# Linux: apt-get install imagemagick
# Windows: download from imagemagick.org

# Convert all JPG/JPEG files
for f in public/media/*.{jpg,jpeg}; do
  magick "$f" "${f%.*}.webp"
  magick "$f" "${f%.*}.avif"
done
```

### Option 3: Using Online Tools
For quick one-off conversions:
- [Squoosh.app](https://squoosh.app) - Google's image compression tool
- [CloudConvert](https://cloudconvert.com) - Batch conversion tool
- [TinyPNG](https://tinypng.com) - Good for PNG/JPEG

### Option 4: Using ffmpeg
```bash
# WebP
ffmpeg -i input.jpg -c:v libwebp -quality 75 output.webp

# AVIF
ffmpeg -i input.jpg -c:v libaom-av1 -crf 28 output.avif
```

## Manual Conversion Steps

1. **Convert images**:
   ```bash
   # Convert hero-image.jpg
   magick public/media/hero-image.jpg -quality 75 public/media/hero-image.webp
   magick public/media/hero-image.jpg -quality 60 public/media/hero-image.avif
   ```

2. **Verify files were created**:
   ```bash
   ls -lh public/media/hero-image.*
   ```

3. **Expected output**:
   ```
   hero-image.jpg   ~200-250 KB
   hero-image.webp  ~80-120 KB
   hero-image.avif  ~50-80 KB
   ```

## Gallery Images to Convert

The following images need conversion (from `src/lib/content.ts`):

1. `ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg` → `.webp` and `.avif`
2. `signal-2025-11-21-103942.jpeg` → `.webp` and `.avif`
3. `creative-assortment-delicious-food.jpg` → `.webp` and `.avif`
4. `signal-2025-11-20-175804.jpeg` → `.webp` and `.avif`
5. `hero-image.jpg` → `.webp` and `.avif` (already updated in config)

## After Conversion

1. **Verify srcset paths in content.ts** are correct
2. **Check markup** - ResponsiveImage component should use `picture` element
3. **Build and test**:
   ```bash
   npm run build
   npm run preview  # serve dist/ locally
   ```

4. **Test in browser**:
   - Open DevTools Network tab
   - Check that AVIF/WebP images are loaded on supported browsers
   - Check that JPEG fallback works on older browsers

## Performance Targets

After image conversion, you should see:

| Asset | Before | After | Savings |
|-------|--------|-------|---------|
| Hero poster | ~200 KB | ~60 KB (AVIF) | ~70% |
| Gallery image (avg) | ~150 KB | ~45 KB (AVIF) | ~70% |
| **Total page images** | ~1.2 MB | ~360 KB | ~70% |

## Browser Support

| Format | Chrome | Firefox | Safari | Edge | Notes |
|--------|--------|---------|--------|------|-------|
| AVIF   | 85+    | 93+     | 16+    | 85+  | Newest, best compression |
| WebP   | 23+    | 65+     | 14+    | 18+  | Good compression, wider support |
| JPEG   | All    | All     | All    | All  | Fallback for older browsers |

## Responsive Sizing

The `ResponsiveImage` component automatically serves:
- AVIF for modern browsers (85%+ of users)
- WebP for browsers without AVIF support (14% of users)
- JPEG for older browsers (<1% of users)

## Optimization Checklist

- [ ] Convert hero-image.jpg to WebP and AVIF
- [ ] Convert all 4 gallery images to WebP and AVIF
- [ ] Verify all srcset paths in content.ts
- [ ] Verify ResponsiveImage component is used in GallerySection
- [ ] Update App.svelte hero preload links if needed
- [ ] Run production build: `npm run build`
- [ ] Verify compressed sizes in dist/
- [ ] Deploy and test in production
- [ ] Run Lighthouse audit

## Troubleshooting

### ImageMagick "not authorized" error
```bash
# Edit /etc/ImageMagick-6/policy.xml and remove PDF/PS restrictions
# Or use: convert input.jpg output.webp (same command)
```

### AVIF conversion too slow
- AVIF encoding is slower than WebP; use quality 60 for faster builds
- Or skip AVIF for non-critical images during development

### Picture element not rendering
- Check ResponsiveImage component is imported correctly
- Verify srcset object has `jpg` property (required fallback)
- Check browser DevTools Network tab for 404s

## Resources

- [AVIF Format Spec](https://aomediacodec.org/av1-image/)
- [WebP Format Info](https://developers.google.com/speed/webp)
- [Sharp.js Docs](https://sharp.pixelplumbing.com/) - Node.js image processor
- [Vite Image Tools](https://github.com/JonasKruckenberg/imagetools) - Vite plugin for image processing
