"use client";

import Image from "next/image";
import { useState } from "react";

type VideoFacadeProps = {
  videoId: string;
  title: string;
};

export function VideoFacade({ videoId, title }: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="video-frame overflow-hidden rounded-xl bg-black shadow-xl">
        <iframe
          className="h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      className="video-frame group relative block w-full overflow-hidden rounded-xl bg-[#272b2d] text-left shadow-xl"
    >
      <Image
        src="/imgs/video-small-placeholder.png"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 896px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-3xl text-white shadow-xl transition-transform group-hover:scale-110 sm:size-20"
      >
        <span className="ml-1">▶</span>
      </span>
      <span className="sr-only">
        O vídeo será carregado do YouTube somente após você iniciar a reprodução.
      </span>
    </button>
  );
}
