import Link from "next/link";

export default function Nav() {
  return (
    <header style={{ borderBottom: "1px solid #b8d4d8", backgroundColor: "#DCEEF2" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <img src="/logo.jpeg" alt="Dusty Roads logo" style={{ height: "36px", width: "36px", objectFit: "cover", borderRadius: "6px" }} />
          <span style={{ color: "#1f3a38", fontSize: "1.1rem" }}>Adventure of Letoluo Safari</span>
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/accommodation" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Accommodation</Link>
          <Link href="/activities" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Activities</Link>
          <Link href="/transfers" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Transfers</Link>
          <Link href="/packages" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Packages</Link>
          <Link href="/destinations" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Destinations</Link>
          <Link href="/about" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>About</Link>
          <Link href="/contact" style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}