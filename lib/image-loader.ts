import manifest from "../image-manifest.json";

const widthsBySrc: Record<string, number[]> = (manifest as Record<string, number[]>) || {};

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  const available = widthsBySrc[src];
  if (!available || available.length === 0) return src;

  const chosen = available.find((w) => w >= width) ?? available[available.length - 1];
  return src.replace(/^\/imgs\//, "/imgs/optimized/").replace(/\.\w+$/, `-${chosen}.webp`);
}