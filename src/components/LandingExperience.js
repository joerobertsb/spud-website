"use client";

import { useState, useEffect } from "react";

export default function LandingExperience({ children, videoSrc }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if the user already entered during this session
    const entered = sessionStorage.getItem("spud_has_entered");
    if (entered === "true") {
      setHasEntered(true);
    }
    setIsChecking(false);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("spud_has_entered", "true");
    setHasEntered(true);
  };

  // Prevent flash of the enter button while checking storage
  if (isChecking) {
    return <div style={{ backgroundColor: "#000", minHeight: "100vh" }} />;
  }

  // Show main site content if already entered
  if (hasEntered) {
    return <>{children}</>;
  }

  // Show "Enter Site" screen on first visit
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <button
          onClick={handleEnter}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            fontFamily: "Courier New, monospace",
            cursor: "pointer",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: "4px",
          }}
        >
          ENTER
        </button>
      </div>
    </div>
  );
}