export default function DestinationsPage() {
  const items = [
    { name: "Southern Rift Valley", coord: "S 2°31' E 34°45'", img: "https://loremflickr.com/600/400/riftvalley,africa" },
    { name: "Migration Corridor", coord: "S 1°58' E 34°50'", img: "https://loremflickr.com/600/400/serengeti,migration" },
    { name: "Highland Escarpment", coord: "S 2°44' E 35°02'", img: "https://loremflickr.com/600/400/highlands,africa" },
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>Where we go</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Destinations</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {items.map((d) => (
            <div key={d.name} style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={d.img} alt={d.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "1.25rem" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#356B67", marginBottom: "0.4rem" }}>{d.coord}</p>
                <h3 style={{ color: "#1f3a38", fontSize: "1.2rem" }}>{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}