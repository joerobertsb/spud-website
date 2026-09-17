// src/app/(site)/merch/page.js
import Link from "next/link";
import merchData from "@/app/data/merch.json"; // Update to your data source path

export default function MerchPage() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "2rem",
          width: "100%",
        }}
      >
        {merchData.map((item) => (
          <Link
            key={item.id}
            href={`/merch/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                backgroundColor: "#121212",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid #222",
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "monospace" }}>
                {item.name}
              </h3>
              <p style={{ color: "#989B99", margin: 0 }}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}