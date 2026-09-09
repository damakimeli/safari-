export default function AccommodationPage() {
  const units = [
    { name: "Enchoro Wildlife Camp", note: "Budget: Ksh 34,000 (Residence) $640 (non-residence) 3days/2 nights.", img: "/acc4.jpeg" },
    { name: "Jambo Mara Safari lodge", note: "Budget ksh 41,000 (Residence) $660 (non-residence) 3days/2 nights.", img: "/acc5.jpeg" },
    { name: "Mara Sopa Lodge", note: "Budget ksh 41,000 (Residence) $660 (non-residence) 3days/2 nights.", img: "/acc6.jpeg" },
    { name: "Family camps", note: "depending on preference (If you have a specic one you want", img: "/acc1.jpeg" }, 
    { name: "Double, Tripple, Family rooms", note: "depending on preference (If you have a specic one you want", img: "/acc3.jpeg" }, 
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>
         sleeping Accommodation
        </p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Accommodation</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {units.map((u) => (
            <div key={u.name} style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={u.img} alt={u.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ color: "#1f3a38", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{u.name}</h3>
                <p style={{ color: "#5c5747", fontSize: "0.9rem" }}>{u.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}