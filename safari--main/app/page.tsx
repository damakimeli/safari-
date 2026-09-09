export default function Home() {
  const packages = [
    { name: "Rift Valley Classic", days: 3, tagline: "The essential first safari.", img: "https://loremflickr.com/600/400/safari,savanna" },
    { name: "Migration Route", days: 5, tagline: "Follow the herds across two camps.", img: "https://loremflickr.com/600/400/wildebeest,migration" },
    { name: "Walking Wilderness", days: 4, tagline: "On foot, guided, slower.", img: "https://loremflickr.com/600/400/safariwalk,africa" },
  ];

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Hero */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "5rem 1.5rem" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "1rem" }}>
          S 2°31&apos; E 34°45&apos;
        </p>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#1f3a38" }}>Dusty Roads</h1>
        <p style={{ color: "#3d5a58", marginBottom: "2rem", maxWidth: "500px" }}>
          The road ends where the journey begins. Five signed safari routes through the Rift Valley.
        </p>
        <button style={{ backgroundColor: "#356B67", color: "#DCEEF2", padding: "0.9rem 2rem", borderRadius: "8px", border: "none", fontSize: "1rem", cursor: "pointer", boxShadow: "0 8px 20px rgba(53,107,103,0.3)" }}>
          See the five routes
        </button>
      </div>

      {/* Package cards */}
      <div style={{ backgroundColor: "#F1E7D3", padding: "4rem 1.5rem" }}>
        <h2 style={{ textAlign: "center", color: "#1f3a38", fontSize: "1.8rem", marginBottom: "2.5rem" }}>
          Every route, fully arranged
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", maxWidth: "1100px", margin: "0 auto" }}>
          {packages.map((p) => (
            <div key={p.name} style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={p.img} alt={p.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.5rem" }}>
                  {p.days} days
                </p>
                <h3 style={{ color: "#1f3a38", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{p.name}</h3>
                <p style={{ color: "#5c5747", fontSize: "0.9rem" }}>{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}