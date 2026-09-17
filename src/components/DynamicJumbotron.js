import Image from "next/image";
import Link from "next/link";
// If you have a custom canvas wave component, import it here:
// import WaveCanvas from "@/components/WaveCanvas";

export default function DynamicJumbotron() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      {/* 1. Background Rig Image */}
      <Image
        src="/LUN-A.jpg"
        alt="SPUD Banner Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* 2. Center Logo Overlay */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <Link href="/">
          <Image
            src="/logo_white.png"
            alt="SPUD Logo"
            width={220}
            height={80}
            style={{ objectFit: "contain" }}
          />
          </Link>
      </div>

      {/* 3. Wave Layer */}
      {/* IF USING AN ANIMATED CANVAS COMPONENT: */}
      {/* <WaveCanvas /> */}

      {/* IF USING AN SVG FILE (e.g., in /public/sine-wave.svg): */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          backgroundImage: "url('/sine-wave.svg')", // Path to your wave SVG/PNG
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.85,
        }}
      />
    </div>
  );
}