// src/app/(site)/merch/page.js
import Link from "next/link";

export default function ShowsPage() {

  const shows = [];

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "1rem", fontFamily: "monospace" }}>
      {shows.map((show) => {
        const isActive =
          show.href === "/"
            ? pathname === "/"
            : pathname.startsWith(show.href);

        return (
          <Link
            key={show.href}
            href={show.href}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {show.name}{isActive && " ->"}
          </Link>
        );
      })}
    </nav>
  );
}