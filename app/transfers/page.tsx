export default function TransfersPage() {
  const items = [
    { name: "Airstrip pickup / drop-off", note: "Included on every package.", img: "https://loremflickr.com/600/400/airstrip,bushplane" },
    { name: "Inter-camp transfer", note: "Road transfer between camps.", img: "https://loremflickr.com/600/400/safarijeep,road" },
    { name: "Town-to-camp transfer", note: "For guests arriving by road.", img: "https://loremflickr.com/600/400/safaridrive,africa" },
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>Getting there</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "2.5rem" }}>Transfers</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          {items.map((t) => (
            <div key={t.name} style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", width: "320px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={t.img} alt={t.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ color: "#1f3a38", fontSize: "1.2rem", marginBottom: "0.4rem" }}>{t.name}</h3>
                <p style={{ color: "#5c5747", fontSize: "0.9rem" }}>{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}