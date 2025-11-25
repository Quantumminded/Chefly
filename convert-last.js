import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mediaDir = path.join(__dirname, 'public', 'media');
const inputPath = path.join(mediaDir, 'signal-2025-11-20-175804.jpeg');

async function convertLastImage() {
  try {
    console.log('Converting last gallery image to AVIF...\n');
    
    const avifPath = path.join(mediaDir, 'signal-2025-11-20-175804.avif');
    await sharp(inputPath)
      .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
      .avif({ quality: 60 })
      .toFile(avifPath);
    
    const avifSize = fs.statSync(avifPath).size / 1024;
    console.log(`✓ signal-2025-11-20-175804.avif: ${avifSize.toFixed(1)} KB`);
    console.log('✨ Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

convertLastImage();
