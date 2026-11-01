"use client";

import { useEffect, useState } from "react";

type VideoStatus = "fallback" | "loading" | "playing" | "paused" | "unavailable";

const videoId = "AfiFxAI5sWs";
const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

export function HeroBackgroundVideo() {
  const [status, setStatus] = useState<VideoStatus>("fallback");

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (motionPreference.matches) return;

    const startTimer = window.setTimeout(() => {
      setStatus("loading");
    }, 1200);

    return () => window.clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (status !== "loading") return;

    const failureTimer = window.setTimeout(() => {
      setStatus("unavailable");
    }, 10000);

    return () => window.clearTimeout(failureTimer);
  }, [status]);

  const isMounted = status === "loading" || status === "playing";

  return (
    <>
      {isMounted && (
        <iframe
          src={videoUrl}
          title="Abertura - Narrativa Vertical (AreaH)"
          aria-hidden="true"
          tabIndex={-1}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setStatus("playing")}
          onError={() => setStatus("unavailable")}
          className={`hero-background-video ${status === "playing" ? "hero-background-video-ready" : ""}`}
        />
      )}
      {(status === "fallback" || status === "unavailable") && (
        <button
          type="button"
          onClick={() => setStatus("loading")}
          className="absolute right-5 bottom-20 z-50 rounded-sm border border-white/40 bg-black/50 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-black/75 focus-visible:outline-offset-2"
        >
          {status === "unavailable"
            ? "Tentar reproduzir vídeo"
            : "Reproduzir vídeo de fundo"}
        </button>
      )}
      {(status === "loading" ||
        status === "playing" ||
        status === "paused") && (
        <button
          type="button"
          onClick={() => {
            if (status === "paused") {
              setStatus("loading");
              return;
            }

            setStatus("paused");
          }}
          aria-label={
            status === "paused"
              ? "Reproduzir vídeo de fundo"
              : "Pausar vídeo de fundo"
          }
          className="absolute right-5 bottom-20 z-50 rounded-sm border border-white/40 bg-black/50 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-black/75 focus-visible:outline-offset-2"
        >
          {status === "paused" ? "Reproduzir vídeo" : "Pausar vídeo"}
        </button>
      )}
    </>
  );
}
