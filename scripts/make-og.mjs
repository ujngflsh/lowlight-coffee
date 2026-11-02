// Membuat public/og.png (1200x630). Jalankan ulang dengan: npm run og
import sharp from 'sharp';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#15110E"/>
  <circle cx="930" cy="300" r="230" fill="#A8744A" opacity="0.28"/>
  <path d="M830 120h200l-14 330a24 24 0 0 1-24 22h-124a24 24 0 0 1-24-22z" fill="#ffffff" fill-opacity="0.08" stroke="#F3EAD9" stroke-opacity="0.7" stroke-width="5"/>
  <path d="M836 250h188l-8 200a22 22 0 0 1-22 20h-128a22 22 0 0 1-22-20z" fill="#A8744A"/>
  <path d="M846 195h168v60H846z" fill="#ECD9BC" opacity="0.9"/>
  <line x1="940" y1="50" x2="920" y2="330" stroke="#C7E66B" stroke-width="14" stroke-linecap="round"/>
  <text x="72" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="104" fill="#F3EAD9">Cold drinks,</text>
  <text x="72" y="410" font-family="Georgia, 'Times New Roman', serif" font-size="104" fill="#F3EAD9">made slowly.</text>
  <text x="72" y="500" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#C2B49E">Lowlight Coffee · concept project by Ujang</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('public/og.png dibuat');
