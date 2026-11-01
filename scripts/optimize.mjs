// optimize.mjs (rodar uma vez; precisa de sharp: pnpm add -D sharp)
import sharp from "sharp";
const src = "public/imgs/img-header.png";
const { width, height } = await sharp(src).metadata();
await sharp(src).webp({ quality: 70 }).toFile("public/imgs/img-header.webp");
await sharp(src)
  .extract({ left: Math.round((width - 480) / 2), top: 0, width: 480, height })
  .webp({ quality: 72 })
  .toFile("public/imgs/img-header-mobile.webp");