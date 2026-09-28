import SideNav from "@/components/SideNav";
import DynamicJumbotron from "@/components/DynamicJumbotron";
import styles from "./layout.module.css";

export default function InnerLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <DynamicJumbotron />

      <div className={styles.grid}>
        <aside className={styles.aside}>
          <SideNav />
        </aside>

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}