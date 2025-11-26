import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mediaDir = path.join(__dirname, 'public', 'media');

const galleryImages = [
  'ben-koorengevel-Vd0_Htlb-Kk-unsplash.jpg',
  'signal-2025-11-21-103942.jpeg',
  'creative-assortment-delicious-food.jpg',
  'signal-2025-11-20-175804.jpeg'
];

async function convertGalleryImages() {
  try {
    console.log('Converting gallery images to WebP and AVIF...\n');
    
    for (const image of galleryImages) {
      const inputPath = path.join(mediaDir, image);
      const baseName = path.parse(image).name;
      
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠ Skipping ${image} (not found)`);
        continue;
      }
      
      console.log(`Processing: ${image}`);
      
      // Convert to WebP
      const webpPath = path.join(mediaDir, `${baseName}.webp`);
      await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(webpPath);
      
      const webpSize = fs.statSync(webpPath).size / 1024;
      console.log(`  ✓ .webp: ${webpSize.toFixed(1)} KB`);
      
      // Convert to AVIF
      const avifPath = path.join(mediaDir, `${baseName}.avif`);
      await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .avif({ quality: 60 })
        .toFile(avifPath);
      
      const avifSize = fs.statSync(avifPath).size / 1024;
      console.log(`  ✓ .avif: ${avifSize.toFixed(1)} KB`);
    }
    
    console.log('\n✨ Gallery image optimization complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

convertGalleryImages();
