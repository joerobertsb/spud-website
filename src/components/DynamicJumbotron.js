"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DynamicJumbotron.module.css";

export default function DynamicJumbotron({ animate = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let time = 0;
    let phaseStep = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const palette = ["#D9532A", "#ffffff", "#284234", "#ffffff"];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const baseAmp = 15;
      const baseFreq = 0.015;
      const baseSpeed = 0.015;
      const currentWaveCount = 5;

      const currentAmplitude = baseAmp + Math.sin(time * 0.8) * 10;
      const currentFrequency = Math.max(0.002, baseFreq + Math.cos(time * 0.5) * 0.005);
      const currentSpeed = Math.max(0.001, baseSpeed + Math.sin(time * 0.1) * 0.005);
      const centerY = canvas.height / 2;

      for (let w = 0; w < currentWaveCount; w++) {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = palette[w % palette.length];

        const lineSpeedMultiplier = 0.5 + w * 0.25 + Math.sin(time + w) * 0.01;
        const linePhase = phaseStep * lineSpeedMultiplier + w * 2;
        const waveAmp = currentAmplitude + Math.cos(time * 1.2 + w) * 6;

        for (let x = 0; x < canvas.width; x++) {
          const xFreqMod = currentFrequency + Math.sin(x * 0.002 + time) * 0.003;
          const y = centerY + Math.sin(x * xFreqMod + linePhase) * waveAmp;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      phaseStep += currentSpeed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animate]);

  return (
    <div className={styles.header}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <Link href="/">
          <Image
            src="/logo_white.png"
            alt="SPUD Logo"
            width={220}
            height={80}
            style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: "160px", padding: "0rem 10rem", backgroundColor: "black" }}
            sizes="(max-width: 480px) 140px, 220px"
          />
        </Link>
      </div>

      {animate && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 5,
            pointerEvents: "none",
            background: "transparent",
          }}
        />
      )}
    </div>
  );
}