import { notFound } from "next/navigation";
import Image from "next/image";
import albumsData from "@/app/data/albums.json";
import AlbumTracklist from "@/components/AlbumTrackList";

export async function generateStaticParams() {
  return albumsData.map((album) => ({
    id: album.id.toString(),
  }));
}

export default async function AlbumPage({ params }) {
  const { id } = await params;
  const album = albumsData.find((a) => a.id.toString() === id);

  if (!album) {
    notFound();
  }

  return (
    <div style={{ width: "100%", color: "#ffffff" }}>
      {/* Album Header Card */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          marginBottom: "2.5rem",
          backgroundColor: "#121212",
          padding: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #222",
        }}
      >
        <Image
          src={album.cover}
          alt={album.title}
          width={180}
          height={180}
          style={{ objectFit: "cover", borderRadius: "6px" }}
          priority
        />
        <div>
          <h1
            style={{
              fontSize: "2.5rem",
              margin: "0 0 0.5rem 0",
              fontFamily: "monospace",
            }}
          >
            {album.title}
          </h1>
          <p
            style={{
              color: "#989B99",
              margin: "0 0 0.25rem 0",
              fontFamily: "monospace",
            }}
          >
            Released: {album.year}
          </p>
          <p style={{ color: "#989B99", margin: 0, fontFamily: "monospace" }}>
            {album.tracks.length}{" "}
            {album.tracks.length === 1 ? "Track" : "Tracks"}
          </p>
        </div>
      </div>

      <AlbumTracklist tracks={album.tracks} />
    </div>
  );
}