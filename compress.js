import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'src', 'assets'),
  path.join(__dirname, 'src', 'assetss')
];

// Max widths per directory context — hero/full-screen get 1920, others 1200
const MAX_WIDTH = 1400;
const WEBP_QUALITY = 82;

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      const webpPath = fullPath.replace(/\.(png|jpe?g)$/i, '.webp');

      // Skip if already converted and up to date
      if (fs.existsSync(webpPath)) {
        const webpStat = fs.statSync(webpPath);
        if (webpStat.mtimeMs >= stat.mtimeMs) {
          console.log(`Skipping (already converted): ${path.basename(webpPath)}`);
          continue;
        }
      }

      console.log(`Converting ${path.basename(fullPath)} (${(stat.size / 1024).toFixed(0)} KB) → WebP...`);
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        let pipeline = image;
        if ((metadata.width || 0) > MAX_WIDTH) {
          pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        await pipeline
          .webp({ quality: WEBP_QUALITY, effort: 6 })
          .toFile(webpPath);

        const newStat = fs.statSync(webpPath);
        const savings = ((1 - newStat.size / stat.size) * 100).toFixed(1);
        console.log(`  ✓ ${path.basename(webpPath)}: ${(newStat.size / 1024).toFixed(0)} KB (saved ${savings}%)`);
      } catch (e) {
        console.error(`  ✗ Error processing ${fullPath}:`, e.message);
      }
    }
  }
}

async function main() {
  console.log('🖼  Converting images to WebP for faster loading...\n');
  for (const dir of dirs) {
    await processDirectory(dir);
  }
  console.log('\n✅ Done! Now update your component imports to use .webp files.');
}

main();
