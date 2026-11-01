"use client";

import Image from "next/image";
import { useRef } from "react";

type HorizontalInfographicProps = {
  src: string;
  alt: string;
  label: string;
  width: number;
};

export function HorizontalInfographic({
  src,
  alt,
  label,
  width,
}: HorizontalInfographicProps) {
  const dragStart = useRef<{ x: number; scrollLeft: number } | null>(null);

  function startDragging(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStart.current = {
      x: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  }

  function drag(event: React.PointerEvent<HTMLDivElement>) {
    if (!dragStart.current) return;

    event.currentTarget.scrollLeft =
      dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
  }

  function stopDragging(event: React.PointerEvent<HTMLDivElement>) {
    dragStart.current = null;
    event.currentTarget.classList.remove("is-dragging");
  }

  return (
    <figure>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className="wide-image-scroll cursor-grab overflow-x-auto overscroll-x-contain rounded-md bg-[#eeeae5] focus-visible:outline-offset-2 active:cursor-grabbing"
        onPointerDown={startDragging}
        onPointerMove={drag}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onLostPointerCapture={stopDragging}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={550}
          unoptimized
          draggable={false}
          className="h-[550px] max-w-none select-none"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">
        Arraste, use as setas do teclado ou deslize para explorar o infográfico.
      </figcaption>
    </figure>
  );
}
