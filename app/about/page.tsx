export default function AboutPage() {
  const gallery = [
    "/dr5.jpeg",
    "/dr6.jpeg",
    "/dr4.jpeg",
    "/dr1.jpeg",
    "/about3.jpeg",
    "/about1.jpeg",
    "/about5.jpeg",
  ];
  return (
    <div style={{ backgroundColor: "#DCEEF2", minHeight: "100vh", fontFamily: "sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#356B67", marginBottom: "0.75rem" }}>Who are we</p>
        <h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "1rem" }}>Adventure of Letoluo safari</h1>
        <p style={{ color: "#3d5a58", maxWidth: "600px", marginBottom: "2.5rem" }}>
          About Us

At Adventure of Letoluo Safari, we believe that a safari is more than simply seeing wildlife — it is about experiencing the beauty, culture, landscapes and unforgettable moments of Kenya.
We are a Kenya-based safari and travel company offering memorable wildlife adventures, cultural experiences and tailor-made tours. Our goal is to connect our guests with Kenya’s incredible natural heritage while providing a friendly, professional and personalized safari experience.</p>

<h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "1rem" }}>Experience</h1>
Our knowledge of the Maasai Mara landscape, wildlife and local culture allows us to offer guests more than just a game drive. We help visitors understand the animals they see, their behavior, habitats and the important role conservation plays in protecting Kenya’s wildlife.
We also value authentic cultural experiences and opportunities for visitors to learn about the traditions and way of life of the Maasai community.
<h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "1rem" }}>What We Offer</h1>
 Maasai Mara wildlife safaris
 Wildlife and game-drive experiences
 Birdwatching and nature experiences
 Maasai cultural experiences
 Wildlife photography opportunities
 Conservation and nature experiences
 Customized safari itineraries
 Bushcraft and wilderness experiences
 Family, group and private safaris
<h1 style={{ fontSize: "2.5rem", color: "#1f3a38", marginBottom: "1rem" }}>Our Mission</h1>
<p>Our mission is to provide safe, responsible and memorable travel experiences while promoting appreciation for wildlife, nature and local communities.
We aim to make every journey enjoyable, informative and meaningful. </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {gallery.map((src, i) => (
            <img key={i} src={src} alt="Dusty Roads" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }} />
          ))}
        </div>
      </div>
    </div>
  );
}