/* Makes the light WebP copies the pages load, plus the social sharing image.
   Needs the "sharp" package, which is not kept in this repo. Run it like this
   whenever a photo in img/photos changes:

     npm install --no-save sharp
     node tools/images.js

   Output: img/photos/<name>-800.webp, img/photos/<name>-1400.webp, img/og.jpg */
const fs = require('fs');
const path = require('path');
const sharp = require(process.env.SHARP_PATH || 'sharp');
const DIR = path.join(__dirname, '..', 'img', 'photos');
const WIDTHS = [800, 1400];

(async () => {
  const sizes = {};
  for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.jpg'))) {
    const name = f.replace(/\.jpg$/, '');
    const src = path.join(DIR, f);
    const meta = await sharp(src).metadata();
    sizes[name] = [meta.width, meta.height];
    for (const w of WIDTHS) {
      const out = path.join(DIR, `${name}-${w}.webp`);
      await sharp(src).resize({ width: Math.min(w, meta.width) }).webp({ quality: 72 }).toFile(out);
    }
    const kb = n => Math.round(fs.statSync(n).size / 1024);
    console.log(name.padEnd(26), `${kb(src)} KB jpg ->`, WIDTHS.map(w => `${kb(path.join(DIR, `${name}-${w}.webp`))} KB`).join(' / '));
  }
  // 1200x630 image for link previews (WhatsApp, Instagram, X)
  await sharp(path.join(DIR, 'vrf-outdoor-units.jpg')).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(DIR, '..', 'og.jpg'));
  fs.writeFileSync(path.join(__dirname, 'image-sizes.json'), JSON.stringify(sizes, null, 2) + '\n');
  console.log('wrote img/og.jpg and tools/image-sizes.json');
})();
