// src/app/page.js
import SideNav from "@/components/SideNav";
import DynamicJumbotron from "@/components/DynamicJumbotron";
import AlbumCover from "@/components/AlbumCover";
import albumsData from "@/app/data/albums.json";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#ffffff", width: "100%" }}>
      <DynamicJumbotron />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "2rem", // Standardized top padding
        }}
      >
        {/* Pinned SideNav */}
        <div style={{ position: "absolute", left: "2rem", top: "2rem", zIndex: 10 }}>
          <SideNav />
        </div>

        {/* Grid Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "2rem",
            maxWidth: "880px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {albumsData.map((album) => (
            <AlbumCover key={album.id} album={album} />
          ))}
        </div>
      </div>
    </main>
  );
}