// components/AlbumCover.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AlbumCover({ album, previewOnHover = false }) {
  const audioRef = useRef(null);
  const previewTrack = album.tracks?.[album.previewTrackIndex ?? 0];

  const handleMouseEnter = () => {
    if (!previewOnHover) return;
    if (!previewTrack?.src) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = album.previewStartTime || 0;
    audio.play().catch(() => {
      // Autoplay can be blocked in some browsers; fail silently
    });
  };

  const handleMouseLeave = () => {
    if (!previewOnHover) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <Link
      href={`/albums/${album.id}`}
      style={{ textDecoration: "none", color: "#ffffff", display: "block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          src={album.cover}
          alt={album.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>
      <p
        style={{
          marginTop: "0.5rem",
          fontFamily: "monospace",
          fontSize: "0.9rem",
          textAlign: "center",
        }}
      >
        {album.title}
      </p>

      {previewOnHover && previewTrack?.src && (
        <audio ref={audioRef} src={previewTrack.src} preload="none" />
      )}
    </Link>
  );
}