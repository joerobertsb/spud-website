// src/components/SideNav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideNav.module.css";

export default function SideNav() {
  const pathname = usePathname();

  const links = [
    { name: "Music", href: "/" },
    { name: "Merch", href: "/merch" },
    { name: "Shows", href: "/shows" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/" || pathname.startsWith("/albums")
            : pathname.startsWith(link.href);
        return (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.name}
            {isActive && " <|>"}
            
          </Link>
        );
      })}
    </nav>
  );
}