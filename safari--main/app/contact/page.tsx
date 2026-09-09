"use client";

import { useState } from "react";
import { sendContactMessage } from "./actions";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSending(true);
    await sendContactMessage(formData);
    setSending(false);
    setSent(true);
  }

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>Get in touch</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2rem" }}>Contact Us</h1>

        {sent ? (
          <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem" }}>
            <p style={{ color: "#356B67" }}>Message sent — we&apos;ll reply within one working day.</p>
          </div>
        ) : (
          <form action={handleSubmit} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem" }}>
            <input name="name" placeholder="Name" required style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }} />
            <input name="email" type="email" placeholder="Email" required style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }} />
            <textarea name="message" placeholder="Message" rows={4} required style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }} />
            <button type="submit" disabled={sending} style={{ backgroundColor: "#356B67", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "6px", border: "none", width: "100%", cursor: "pointer" }}>
              {sending ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}