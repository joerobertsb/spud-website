// src/app/(site)/page.js
import AlbumCover from "@/components/AlbumCover";
import albumsData from "@/app/data/albums.json";

export default function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "2rem",
        width: "100%",
      }}
    >
      {albumsData.map((album) => (
        <AlbumCover key={album.id} album={album} />
      ))}
    </div>
  );
}