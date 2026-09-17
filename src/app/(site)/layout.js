import Link from "next/link";
import Image from "next/image";
import SideNav from "@/components/SideNav";
import DynamicJumbotron from "@/components/DynamicJumbotron";

export default function InnerLayout({ children }) {
  return (
    <div>
      {/* Persistent Banner */}
      <DynamicJumbotron />

      {/* Inner Content Body */}
      <div style={{ position: "relative", width: "100%", maxWidth: "1200px", margin: "0 auto", paddingTop: "2rem" }}>
        <div style={{ position: "absolute", left: "2rem", top: "2rem", zIndex: 10 }}>
          <SideNav />
        </div>
        <main style={{ padding: "0 2rem", maxWidth: "850px", margin: "0 auto" }}>
          {children}
        </main>
      </div>
    </div>
  );
}