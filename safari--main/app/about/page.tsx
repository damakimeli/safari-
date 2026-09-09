export default function AboutPage() {
  const gallery = [
    "/dr5.jpeg",
    "https://loremflickr.com/400/400/campfire,safari",
    "https://loremflickr.com/400/400/elephant,savanna",
    "https://loremflickr.com/400/400/lion,africa",
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>Who runs this</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "1rem" }}>About Adventures of Letoluo</h1>
        <p style={{ color: "#3d5a58", maxWidth: "600px", marginBottom: "2.5rem" }}>
          Adventures of Letoluo plans and runs guided safari journeys across the Maasai Maras— replace this with your real story.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {gallery.map((src, i) => (
            <img key={i} src={src} alt="Dusty Roads" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }} />
          ))}
        </div>
      </div>
    </div>
  );
}