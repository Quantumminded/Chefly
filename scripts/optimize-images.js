#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps convert images in /public/media to modern formats (AVIF, WebP)
 * while maintaining JPG/JPEG fallbacks for older browsers.
 * 
 * Prerequisites:
 * - Install imagemagick: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)
 * - Or use sharp: npm install --save-dev sharp
 * 
 * Usage:
 * node scripts/optimize-images.js
 * 
 * This will process all JPG/JPEG files in public/media and create AVIF and WebP versions.
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('📦 sharp not installed. Install with: npm install --save-dev sharp');
  console.log('');
  console.log('Alternative: Use imagemagick CLI directly:');
  console.log('  for f in public/media/*.{jpg,jpeg}; do');
  console.log('    magick "$f" "${f%.*}.webp"');
  console.log('    magick "$f" "${f%.*}.avif"');
  console.log('  done');
  console.log('');
  process.exit(0);
}

const MEDIA_DIR = path.join(__dirname, '..', 'public', 'media');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg'];
const TARGET_FORMATS = [
  { format: 'webp', quality: 75 },
  { format: 'avif', quality: 60 }
];

async function optimizeImages() {
  if (!fs.existsSync(MEDIA_DIR)) {
    console.error(`❌ Media directory not found: ${MEDIA_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(MEDIA_DIR);
  const imageFiles = files.filter(file =>
    IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found in public/media');
    return;
  }

  console.log(`🖼️  Found ${imageFiles.length} images to optimize\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(MEDIA_DIR, file);
    const baseName = path.parse(file).name;

    console.log(`Processing: ${file}`);

    for (const target of TARGET_FORMATS) {
      const outputPath = path.join(MEDIA_DIR, `${baseName}.${target.format}`);

      try {
        await sharp(inputPath)
          .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
          [target.format]({ quality: target.quality })
          .toFile(outputPath);

        const inputSize = fs.statSync(inputPath).size / 1024;
        const outputSize = fs.statSync(outputPath).size / 1024;
        const compression = (100 - (outputSize / inputSize) * 100).toFixed(1);

        console.log(
          `  ✓ ${target.format.toUpperCase()}: ${outputSize.toFixed(1)}kB (${compression}% reduction)`
        );
      } catch (error) {
        console.error(`  ✗ Failed to convert to ${target.format}: ${error.message}`);
      }
    }

    console.log('');
  }

  console.log('✨ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update src/lib/content.ts gallery images with srcset paths');
  console.log('2. Update src/App.svelte hero poster to use picture element');
  console.log('3. Run: npm run build');
}

optimizeImages().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
