// src/components/SideNav.jsx
import Link from "next/link";

export default function SideNav() {
  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "1rem", fontFamily: "monospace" }}>
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Music -></Link>
      <Link href="/merch" style={{ color: "#fff", textDecoration: "none" }}>Merch</Link>
      <Link href="/shows" style={{ color: "#fff", textDecoration: "none" }}>Shows</Link>
      <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}