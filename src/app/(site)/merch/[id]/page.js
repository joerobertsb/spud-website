// src/app/(site)/merch/[id]/page.js
import { notFound } from "next/navigation";
import merchData from "@/app/data/merch.json"; // Assuming local JSON store

export async function generateStaticParams() {
  return merchData.map((item) => ({
    id: String(item.id),
  }));
}

export default async function MerchItemPage({ params }) {
  const { id } = await params; // Next.js 15+ requires awaiting params
  const item = merchData.find((m) => String(m.id) === String(id));

  if (!item) {
    notFound();
  }

  return (
    <div style={{ color: "#fff" }}>
      <h1 style={{ fontFamily: "monospace", fontSize: "2rem" }}>{item.name}</h1>
      <p style={{ color: "#989B99" }}>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
}