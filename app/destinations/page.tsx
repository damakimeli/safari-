export default function DestinationsPage() {
  const groups = [
    {
      category: "Wildlife",
      items: [
        "Maasai Mara National Reserve",
        "Mara Triangle",
        "Mara River",
        "Talek River",
        "Conservancies",
      ],
    },
    {
      category: "Culture",
      items: ["Maasai Village", "Manyatta experience"],
    },
    {
      category: "Adventure",
      items: ["Hot-Air Balloon Safari", "Bush Breakfast", "Sunrise/Sunset drives"],
    },
    {
      category: "Scenic",
      items: ["Oloololo Escarpment", "Mara viewpoints", "Great Migration river-crossing areas"],
    },
  ];

  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>
          Where we go
        </p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Destinations</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {groups.map((group) => (
            <div key={group.category} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "1.75rem", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#356B67", marginBottom: "1rem" }}>
                {group.category}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.items.map((item) => (
                  <li key={item} style={{ color: "#1f3a38", padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}