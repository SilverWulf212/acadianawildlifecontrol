const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processHeroImages() {
  const rawDir = 'hero-images-raw';
  const outDir = 'public/images/hero';

  const files = fs.readdirSync(rawDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  const nameMap = {
    '5p1g1u': 'snake-porch',
    'qagmxa': 'louisiana-sunset',
    'qs4qyv': 'raccoon-soffit',
    'xpq4di': 'before-after',
  };

  for (const file of files) {
    const key = Object.keys(nameMap).find(k => file.includes(k));
    const name = key ? nameMap[key] : file.replace(/\.[^.]+$/, '');
    const input = path.join(rawDir, file);

    // Desktop (1920px wide)
    await sharp(input)
      .resize(1920, 800, { fit: 'cover', position: 'center' })
      .webp({ quality: 82 })
      .toFile(path.join(outDir, `${name}-desktop.webp`));

    // Mobile (768px wide)
    await sharp(input)
      .resize(768, 600, { fit: 'cover', position: 'center' })
      .webp({ quality: 80 })
      .toFile(path.join(outDir, `${name}-mobile.webp`));

    // Blur placeholder (20px tiny)
    await sharp(input)
      .resize(20, 10, { fit: 'cover' })
      .webp({ quality: 20 })
      .toFile(path.join(outDir, `${name}-blur.webp`));

    // Also save a jpg fallback for desktop
    await sharp(input)
      .resize(1920, 800, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 80 })
      .toFile(path.join(outDir, `${name}-desktop.jpg`));

    console.log(`Processed: ${name}`);
  }
}

async function processGalleryImages() {
  const srcDir = 'scraped/images';
  const outDir = 'public/images/gallery';

  if (!fs.existsSync(srcDir)) return;

  const files = fs.readdirSync(srcDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f) && fs.statSync(path.join(srcDir, f)).size > 5000);

  for (const file of files) {
    const input = path.join(srcDir, file);
    const name = file.replace(/\.[^.]+$/, '');

    // Thumbnail (400px)
    await sharp(input)
      .resize(400, 300, { fit: 'cover', position: 'center' })
      .webp({ quality: 78 })
      .toFile(path.join(outDir, `${name}-thumb.webp`));

    // Full size (800px)
    await sharp(input)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(path.join(outDir, `${name}-full.webp`));

    console.log(`Gallery: ${name}`);
  }
}

async function processBadges() {
  const outDir = 'public/images/badges';
  const srcDir = 'scraped/images';

  // NWCOA badge (image 013) and LTAHA badge (image 011)
  const badges = [
    { src: '013_98bc37_9654333020814b52a6129a856c85594e.png', name: 'nwcoa' },
    { src: '011_98bc37_84f1e771831941bc9774d6238da87bbf~mv2.jpg', name: 'ltaha' },
  ];

  for (const badge of badges) {
    const input = path.join(srcDir, badge.src);
    if (!fs.existsSync(input)) continue;

    await sharp(input)
      .resize(150, 150, { fit: 'contain', background: { r: 250, g: 246, b: 240, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile(path.join(outDir, `${badge.name}.webp`));

    await sharp(input)
      .resize(150, 150, { fit: 'contain', background: { r: 250, g: 246, b: 240, alpha: 0 } })
      .png()
      .toFile(path.join(outDir, `${badge.name}.png`));

    console.log(`Badge: ${badge.name}`);
  }
}

(async () => {
  await processHeroImages();
  await processGalleryImages();
  await processBadges();
  console.log('All images processed!');
})();
