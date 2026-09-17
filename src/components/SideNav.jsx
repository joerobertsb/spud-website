// src/app/(site)/layout.js
import SideNav from "@/components/SideNav";

export default function InnerLayout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr", // Identical 200px reserved sidebar
        gap: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      {/* Left Column: Persistent Navigation */}
      <aside style={{ minWidth: "160px" }}>
        <SideNav />
      </aside>

      {/* Right Column: Dynamic Route Content */}
      <main style={{ width: "100%" }}>
        {children}
      </main>
    </div>
  );
}