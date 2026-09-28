import AlbumCover from "@/components/AlbumCover";
import albumsData from "@/app/data/albums.json";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.albumGrid}>
      {albumsData.map((album) => (
        <AlbumCover key={album.id} album={album} />
      ))}
    </div>
  );
}