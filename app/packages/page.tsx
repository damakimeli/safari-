import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function PackagesPage() {
  const { data: packages, error } = await supabase
    .from("packages")
    .select("*")
    .order("days");

  if (error) {
    return <p style={{ padding: "2rem", color: "red" }}>Error loading packages: {error.message}</p>;
  }

  const images: Record<string, string> = {
  "rift-valley-classic": "/let5.jpeg",
  "migration-route": "/let3.jpeg",
  "walking-wilderness": "/hotair2.jpeg",
  "family-crossing": "/activi1.jpeg",
  "grand-traverse": "/dr1.jpeg",
};
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Explore our packages.</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {packages?.map((p) => (
            <Link key={p.slug} href={`/packages/${p.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                <img src={images[p.slug]} alt={p.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.5rem" }}>{p.days} day</p>
                  <h3 style={{ color: "#1f3a38", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{p.name}</h3>
                  <p style={{ color: "#5c5747", fontSize: "0.9rem" }}>${(p.base_price_cents / 100).toFixed(0)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}