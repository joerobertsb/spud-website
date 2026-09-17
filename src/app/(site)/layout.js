import SideNav from "@/components/SideNav";
import DynamicJumbotron from "@/components/DynamicJumbotron";

export default function InnerLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#ffffff" }}>
      {/* 1. Header Banner */}
      <DynamicJumbotron />

      {/* 2. Grid Container for Sidebar + Page Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <aside style={{ minWidth: "160px" }}>
          <SideNav />
        </aside>

        <main style={{ width: "100%" }}>
          {children}
        </main>
      </div>
    </div>
  );
}