"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  label: string;
  layout?: "single" | "pair";
};

export function ImageGallery({
  images,
  label,
  layout = "single",
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const secondaryImage = layout === "pair" ? images[activeIndex + 1] : undefined;
  const slideStep = layout === "pair" ? 2 : 1;

  function showPrevious() {
    setActiveIndex((index) => Math.max(index - slideStep, 0));
  }

  function showNext() {
    setActiveIndex((index) =>
      Math.min(index + slideStep, images.length - slideStep),
    );
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <div
      className="mx-auto w-full max-w-5xl"
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      <div className="relative overflow-hidden bg-[#ccc] shadow-[0_0_8px_rgb(0_0_0/0.32)]">
        <div
          className={`relative grid ${layout === "pair" ? "aspect-[3.29/1] grid-cols-2" : "video-frame"}`}
        >
          {[activeImage, ...(secondaryImage ? [secondaryImage] : [])].map(
            (image) => (
              <div
                key={image.src}
                className="relative min-w-0 overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 440px"
                  className="object-contain p-2 sm:p-5"
                />
              </div>
            ),
          )}
        </div>
        <button
          type="button"
          onClick={showPrevious}
          disabled={activeIndex === 0}
          aria-label="Ver imagem anterior"
          className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-2xl text-ink shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:left-5"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          onClick={showNext}
          disabled={activeIndex + slideStep >= images.length}
          aria-label="Ver próxima imagem"
          className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-2xl text-ink shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 sm:right-5"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div
        className="mt-4 flex min-h-16 flex-col items-center justify-center gap-1 text-center"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="max-w-3xl text-sm leading-6 text-muted sm:text-base">
          {activeImage.alt}
        </p>
        <p className="text-xs font-semibold tracking-wide text-muted">
          {layout === "pair" && secondaryImage
            ? `Imagens ${activeIndex + 1} e ${activeIndex + 2} de ${images.length}`
            : `Imagem ${activeIndex + 1} de ${images.length}`}
        </p>
      </div>
    </div>
  );
}
