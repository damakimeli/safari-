"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/accommodation", label: "Accommodation" },
  { href: "/activities", label: "Activities" },
  { href: "/transfers", label: "Transfers" },
  { href: "/packages", label: "Packages" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid #b8d4d8", backgroundColor: "#DCEEF2" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1.25rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <img src="/logo.jpeg" alt="Dusty Roads logo" style={{ height: "36px", width: "36px", objectFit: "cover", borderRadius: "6px" }} />
          <span style={{ color: "#1f3a38", fontSize: "1.1rem" }}>Adventure of Letoluo Safari</span>
        </Link>

        <nav className="desktop-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "#356B67", fontSize: "0.9rem", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{ background: "none", border: "none", padding: "6px", cursor: "pointer" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f3a38" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "#356B67", fontSize: "0.95rem", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
        }
        .hamburger-btn {
          display: none;
        }
        .mobile-nav {
          display: none;
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none;
          }
          .hamburger-btn {
            display: block;
          }
          .mobile-nav {
            display: flex;
            flex-direction: column;
            padding: 0.5rem 1.5rem 1.25rem;
            gap: 0.9rem;
            background-color: #dceef2;
          }
        }
      `}</style>
    </header>
  );
}