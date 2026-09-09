import { supabase } from "@/lib/supabase";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ bookingId?: string }>;
}) {
  const { bookingId } = await searchParams;

  if (!bookingId) {
    return <p style={{ padding: "2rem" }}>No booking found.</p>;
  }

  const { data: booking } = await supabase
    .from("bookings")
    .select("*, packages(name)")
    .eq("id", bookingId)
    .single();

  if (!booking) {
    return <p style={{ padding: "2rem" }}>Booking not found.</p>;
  }

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", color: "#1f3a38", marginBottom: "0.5rem" }}>{booking.packages.name}</h1>
        <p style={{ color: "#5c5747", marginBottom: "2rem" }}>
          ${(booking.total_cents / 100).toFixed(0)} {booking.currency} — spot held for 15 minutes
        </p>

        <div style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem" }}>
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#356B67", marginBottom: "1rem" }}>
            Pay via M-Pesa Paybill
          </p>

       <div style={{ backgroundColor: "#DCEEF2", borderRadius: "8px", padding: "1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.8rem", color: "#356B67", marginBottom: "0.25rem" }}>Paybill Number</p>
            <p style={{ fontSize: "1.8rem", color: "#1f3a38", fontWeight: "bold", letterSpacing: "0.05em" }}>YOUR_PAYBILL_NUMBER</p>
          </div>

          <ol style={{ color: "#1f3a38", paddingLeft: "1.25rem", marginBottom: "1.5rem", lineHeight: "1.8" }}>
            <li>Go to M-Pesa on your phone</li>
            <li>Select <strong>Lipa na M-Pesa</strong> → <strong>Pay Bill</strong></li>
            <li>Enter Business Number: <strong>9277694</strong></li>
            <li>Enter Account Number: <strong>{booking.id.slice(0, 8)}</strong></li>
            <li>Enter Amount: <strong>{(booking.total_cents / 100).toFixed(0)}</strong></li>
            <li>Enter your M-Pesa PIN and confirm</li>
          </ol>

          <p style={{ fontSize: "0.85rem", color: "#5c5747", fontStyle: "italic" }}>
            Once paid, we&apos;ll confirm your booking by email within a few hours. Keep your M-Pesa confirmation message as proof of payment.
          </p>
        </div>
      </div>
    </div>
  );
}