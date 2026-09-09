import { supabase } from "@/lib/supabase";
import { reserveBooking } from "./actions";

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string; error?: string }>;
}) {
  const { package: slug, error } = await searchParams;

  if (!slug) {
    return (
      <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
        <p style={{ color: "#5c5747" }}>No package selected. Go back and pick a route first.</p>
      </div>
    );
  }

  const { data: pkg } = await supabase
    .from("packages")
    .select("*, package_components(*, resources(*))")
    .eq("slug", slug)
    .single();

  if (!pkg) {
    return (
      <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
        <p style={{ color: "#5c5747" }}>Package not found.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>
          Reserve
        </p>
        <h1 style={{ fontSize: "2.2rem", color: "#1f3a38", marginBottom: "1.5rem" }}>{pkg.name}</h1>

        {error && (
          <div style={{ backgroundColor: "#fdd", color: "#b23a3a", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
            {decodeURIComponent(error)}
          </div>
        )}

        <form action={reserveBooking} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "2rem" }}>
          <input type="hidden" name="packageSlug" value={pkg.slug} />

          <label style={{ display: "block", marginBottom: "0.4rem", color: "#356B67", fontSize: "0.85rem" }}>Start date</label>
          <input type="date" name="startDate" required style={{ width: "100%", padding: "0.7rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }} />

          <label style={{ display: "block", marginBottom: "0.4rem", color: "#356B67", fontSize: "0.85rem" }}>Your name</label>
          <input type="text" name="guestName" required style={{ width: "100%", padding: "0.7rem", marginBottom: "1rem", border: "1px solid #ddd", borderRadius: "6px" }} />

          <label style={{ display: "block", marginBottom: "0.4rem", color: "#356B67", fontSize: "0.85rem" }}>Email</label>
          <input type="email" name="guestEmail" required style={{ width: "100%", padding: "0.7rem", marginBottom: "1.5rem", border: "1px solid #ddd", borderRadius: "6px" }} />

          <button type="submit" style={{ width: "100%", backgroundColor: "#356B67", color: "#fff", padding: "0.9rem", borderRadius: "8px", border: "none", fontSize: "1rem", cursor: "pointer" }}>
            Reserve (holds your spot for 15 minutes)
          </button>
        </form>
      </div>
    </div>
  );
}