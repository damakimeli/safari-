export default function AccommodationPage() {
  const units = [
    { name: "Rift Camp", note: "6 tents, riverfront.", img: "https://loremflickr.com/600/400/safaritent,camp" },
    { name: "Walking Camp", note: "8 tents, foot access only.", img: "https://loremflickr.com/600/400/tentcamp,africa" },
    { name: "Family Tent", note: "4 family suites.", img: "https://loremflickr.com/600/400/familytent,safari" },
    { name: "Highland Lodge", note: "10 rooms.", img: "https://loremflickr.com/600/400/lodge,africa" },
  ];

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>
          Where you sleep
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