// components/AlbumCover.jsx
import Image from "next/image";
import Link from "next/link";

export default function AlbumCover({ album }) {
  return (
    <Link 
      href={`/albums/${album.id}`} 
      style={{ textDecoration: "none", color: "#ffffff", display: "block" }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden" }}>
        <Image
          src={album.cover}
          alt={album.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 200px"
        />
      </div>
      <p style={{ marginTop: "0.5rem", fontFamily: "monospace", fontSize: "0.9rem", textAlign: "center" }}>
        {album.title}
      </p>
    </Link>
  );
}