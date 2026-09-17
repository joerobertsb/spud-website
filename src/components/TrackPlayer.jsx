"use client";

import { useState, useRef, useEffect } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import styles from "./TrackPlayer.module.css";

export default function TrackPlayer({ src, title, artist, isActive, onPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!isActive && isPlaying) {
      playerRef.current?.audio?.current?.pause();
    }
  }, [isActive, isPlaying]);

  return (
    <div className={styles.outerFrame}>
      <AudioPlayer
        ref={playerRef}
        src={src}
        showJumpControls={false}
        layout="horizontal"
        className={styles.darkPlayer}
        onPlay={() => {
          setIsPlaying(true);
          onPlay?.();
        }}
        onPause={() => setIsPlaying(false)}
        customProgressBarSection={[]}
        customControlsSection={[
          RHAP_UI.MAIN_CONTROLS,
          <div key="trackinfo" className={styles.trackInfo}>
            <div className={styles.trackTitle}>{title}</div>
            <div className={styles.trackArtist}>{artist}</div>
          </div>,
          <div
            key="equalizer"
            className={`${styles.equalizer} ${!isPlaying ? styles.paused : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>,
        ]}
        customIcons={{
          play: (
            <div className={styles.playButton} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className={styles.playTriangle}></div>
            </div>
          ),
          pause: (
            <div className={styles.playButton} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className={styles.pauseBars}>
                <span></span>
                <span></span>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}