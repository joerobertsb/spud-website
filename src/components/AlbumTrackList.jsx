// src/components/AlbumTracklist.jsx
"use client";

import { useState } from "react";
import TrackPlayer from "@/components/TrackPlayer";

export default function AlbumTracklist({ tracks }) {
  const [activeTrackId, setActiveTrackId] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {tracks.map((track) => (
        <TrackPlayer
          key={track.id}
          src={track.src}
          title={track.title}
          artist="spud"
          isActive={activeTrackId === track.id}
          onPlay={() => setActiveTrackId(track.id)}
        />
      ))}
    </div>
  );
}