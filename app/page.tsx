export default function Home() {
  const gallery = [
    "/dr2.jpeg",
    "/dr3.jpeg",
    "/dr4.jpeg",
    "/dr5.jpeg",
    "/dr6.jpeg",
    "/let3.jpeg",
    "/let1.jpeg",
    "/let2.jpeg",
    "/let5.jpeg",
    "/let7.jpeg",
    "/let8.jpeg",
    "/let9.jpeg",
    "/let10.jpeg",
  ];

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Hero with background photo */}
      <div
        style={{
          backgroundImage: "linear-gradient(rgba(31,58,56,0.45), rgba(31,58,56,0.45)), url('/dr1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 1.5rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#DCEEF2", marginBottom: "1rem" }}>
          Maasai Mara, Kenya
        </p>
        <h1 style={{ fontSize: "3rem", color: "#fff", marginBottom: "1rem", maxWidth: "700px" }}>
          Adventure of Letoluo Safari
        </h1>
        <p style={{ color: "#f1f1f1", maxWidth: "550px", fontSize: "1.1rem", lineHeight: "1.6" }}>
          Guided safaris through the heart of the Maasai Mara — game drives, hot-air balloon
          sunrises, and authentic Maasai culture, led by people who call this land home.
        </p>
      </div>

      {/* Photo showcase */}
      <div style={{ backgroundColor: "#F1E7D3", padding: "3rem 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Letoluo Safari"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}