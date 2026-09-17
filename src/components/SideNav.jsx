// src/components/SideNav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { name: "Music", href: "/" },
    { name: "Merch", href: "/merch" },
    { name: "Shows", href: "/shows" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "monospace",
      }}
    >
      {links.map((link) => {
        // Highlight Music for home "/" AND any album detail routes "/albums/..."
        const isActive =
          link.href === "/"
            ? pathname === "/" || pathname.startsWith("/albums")
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {link.name}
            {isActive && " ->"}
          </Link>
        );
      })}
    </nav>
  );
}
