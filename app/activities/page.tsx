export default function ActivitiesPage() {
  const items = [
    { name: "Wildlife Game Drives", note: "Open 4x4, 3–4 hours.", img: "/activity3.jpeg" },
    { name: "Big Five Safari Experience", note: "Armed guide, 2–3 hours.", img: "/let4.jpeg" },
    { name: "Hot air Balloon", note: "Short evening walk, drinks at viewpoint.", img: "/hotair2.jpeg" },
    { name: "Manyatta Village visit", note: "Half-day cultural visit.", img: "/let5.jpeg" },
    { name: "Wildlife Photography Safaris", note: "Half-day cultural visit.", img: "/let9.jpeg" },
    { name: "Nature and Bush Experience", note: "Half-day cultural visit.", img: "/let7.jpeg" },
    { name: "Bonfire Experiences", note: "Half-day cultural visit.", img: "/activi1.jpeg" },
    { name: "Family Safaris", note: "Half-day cultural visit.", img: "/dr6.jpeg" },
    { name: "Student and Educational Safaris", note: "Half-day cultural visit.", img: "/let11.jpeg" },
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>What you do</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Activities</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {items.map((a) => (
            <div key={a.name} style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={a.img} alt={a.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ color: "#1f3a38", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{a.name}</h3>
                <p style={{ color: "#5c5747", fontSize: "0.9rem" }}>{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}