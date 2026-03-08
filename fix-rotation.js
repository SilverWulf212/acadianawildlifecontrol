const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const fixes = { 6: 90, 3: 180 };
const srcDir = 'scraped/images';
const outDir = 'public/images/gallery';

async function fixAll() {
  const files = fs.readdirSync(srcDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f) && fs.statSync(path.join(srcDir, f)).size > 5000);

  let fixed = 0;
  for (const file of files) {
    const input = path.join(srcDir, file);
    const meta = await sharp(input).metadata();
    const rotation = fixes[meta.orientation];

    if (!rotation) continue;

    const name = file.replace(/\.[^.]+$/, '');

    await sharp(input)
      .rotate(rotation)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(outDir, name + '-full.webp'));

    await sharp(input)
      .rotate(rotation)
      .resize(400, 300, { fit: 'cover', position: 'center' })
      .webp({ quality: 78 })
      .toFile(path.join(outDir, name + '-thumb.webp'));

    console.log('Fixed: ' + file + ' (rotated ' + rotation + ')');
    fixed++;
  }
  console.log('Total fixed: ' + fixed);
}
fixAll();
