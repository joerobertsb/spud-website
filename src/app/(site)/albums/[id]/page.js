import { notFound } from "next/navigation";
import Image from "next/image";
import albumsData from "@/app/data/albums.json";
import AlbumTracklist from "@/components/AlbumTrackList";
import styles from "./page.module.css";

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
    <div className={styles.container}>
      <div className={styles.headerCard}>
        <Image
          src={album.cover}
          alt={album.title}
          width={180}
          height={180}
          style={{ objectFit: "cover", borderRadius: "6px" }}
          className={styles.cover}
          priority
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{album.title}</h1>
          <p className={styles.meta}>Released: {album.year}</p>
          <p className={styles.metaLast}>
            {album.tracks.length}{" "}
            {album.tracks.length === 1 ? "Track" : "Tracks"}
          </p>
        </div>
      </div>

      <AlbumTracklist tracks={album.tracks} />
    </div>
  );
}