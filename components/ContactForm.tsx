"use client";

import { useState } from "react";
import { initiateMpesaPayment } from "@/app/booking/mpesa-actions";

export default function ConfirmForm({ bookingId, amountCents }: { bookingId: string; amountCents: number }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handlePay() {
    setStatus("sending");
    // Sandbox note: M-Pesa's test environment only accepts specific test
    // numbers regardless of what's typed — real numbers work once this
    // moves to production credentials.
    const amountKes = Math.max(1, Math.round(amountCents / 100));
    const result = await initiateMpesaPayment(phone, amountKes, bookingId);

    if (result.ResponseCode === "0") {
      setStatus("sent");
    } else {
      setStatus("error");
      setErrorMsg(result.errorMessage || "Something went wrong. Try again.");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem", textAlign: "center" }}>
        <p style={{ color: "#356B67" }}>Check your phone — approve the M-Pesa prompt to complete payment.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem" }}>
      <label style={{ display: "block", marginBottom: "0.4rem", color: "#356B67", fontSize: "0.85rem" }}>
        M-Pesa phone number (e.g. 0712345678)
      </label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", padding: "0.7rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }}
      />
      {status === "error" && <p style={{ color: "#b23a3a", marginBottom: "1rem" }}>{errorMsg}</p>}
      <button
        onClick={handlePay}
        disabled={status === "sending" || !phone}
        style={{ width: "100%", backgroundColor: "#356B67", color: "#fff", padding: "0.9rem", borderRadius: "8px", border: "none", fontSize: "1rem", cursor: "pointer" }}
      >
        {status === "sending" ? "Sending prompt…" : "Pay with M-Pesa"}
      </button>
    </div>
  );
}