import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

const images: Record<string, string> = {
  "rift-valley-classic": "/let5.jpeg",
  "migration-route": "/let3.jpeg",
  "walking-wilderness": "/hotair2.jpeg",
  "family-crossing": "/activi1.jpeg",
  "grand-traverse": "/dr1.jpeg",
};

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: pkg, error } = await supabase
    .from("packages")
    .select("*, package_components(*, resources(*))")
    .eq("slug", slug)
    .single();

  if (error || !pkg) notFound();

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <img src={images[pkg.slug]} alt={pkg.name} style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "12px", marginBottom: "2rem" }} />
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.5rem" }}>
          {pkg.days} days
        </p>
        <h1 style={{ fontSize: "2.2rem", color: "#1f3a38", marginBottom: "0.75rem" }}>{pkg.name}</h1>
        <p style={{ fontSize: "1.3rem", color: "#356B67", marginBottom: "1.5rem" }}>
          ${(pkg.base_price_cents / 100).toFixed(0)} {pkg.currency}
        </p>

        <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#356B67", marginBottom: "1rem" }}>
          What&apos;s included
        </h2>
        {pkg.highlights?.length ? (
  <ul style={{ marginBottom: "2rem", paddingLeft: "1.25rem", color: "#1f3a38", lineHeight: "1.8" }}>
    {pkg.highlights.map((h: string, i: number) => (
      <li key={i}>{h}</li>
    ))}
  </ul>
) : (
  <p style={{ color: "#5c5747", marginBottom: "2rem", fontStyle: "italic" }}>
    Details coming soon.
  </p>
)}

        <Link
          href={`/booking?package=${pkg.slug}`}
          style={{ display: "inline-block", backgroundColor: "#356B67", color: "#fff", padding: "0.9rem 2rem", borderRadius: "8px", textDecoration: "none" }}
        >
          Check dates for this route
        </Link>
      </div>
    </div>
  );
}