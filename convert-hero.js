import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mediaDir = path.join(__dirname, 'public', 'media');
const heroFile = path.join(mediaDir, 'hero-img.jpg');

async function convertHeroImage() {
  try {
    console.log('Converting hero-img.jpg to WebP and AVIF...\n');
    
    // Convert to WebP
    const webpPath = path.join(mediaDir, 'hero-img.webp');
    await sharp(heroFile)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size / 1024;
    console.log(`✓ hero-img.webp created: ${webpSize.toFixed(1)} KB`);
    
    // Convert to AVIF
    const avifPath = path.join(mediaDir, 'hero-img.avif');
    await sharp(heroFile)
      .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
      .avif({ quality: 60 })
      .toFile(avifPath);
    
    const avifSize = fs.statSync(avifPath).size / 1024;
    console.log(`✓ hero-img.avif created: ${avifSize.toFixed(1)} KB`);
    
    const jpgSize = fs.statSync(heroFile).size / 1024;
    console.log(`\nOriginal JPG: ${jpgSize.toFixed(1)} KB`);
    console.log(`Total after optimization: ${(jpgSize + webpSize + avifSize).toFixed(1)} KB`);
    console.log(`✨ Hero image optimization complete!`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

convertHeroImage();
