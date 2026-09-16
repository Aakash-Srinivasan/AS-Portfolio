import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
<Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "left" }}>
      Hello! I’m <span className="purple">Aakash Srinivasan</span>, a passionate Mobile Developer specializing in <b className="purple">React Native</b> and <b className="purple">Expo</b> with <b className="purple">3+ years of professional experience</b>.
      <br />
      Hailing from <span className="purple">Thiruchengode, Namakkal, Tamil Nadu</span>, I earned my Bachelor's degree in Computer Engineering from Adithya Institute of Technology, Coimbatore.
      <br />
      <br />
      I currently work as a <span className="purple">React Native Developer at App Innovation Technologies, Coimbatore</span>, where I began by resolving bugs and delivering new features for <b className="purple">Actavivo</b>, a client application already in production, before transitioning to <b className="purple">TeleMedix</b> — a HIPAA-oriented telehealth platform I've been contributing to as part of the development team since its early stages, covering patient-provider video visits, AI-assisted pre-visit intake, and cross-organization medical record retrieval. Previously, I honed my skills at <span className="purple">Plattr Tech Studio, Madurai</span>, where I contributed to building high-quality, scalable mobile applications for both Android and iOS platforms — deepening my expertise in UI/UX development, API integrations, and performance optimization.
      <br />
      <br />
      I'm comfortable owning the full <b className="purple">React Native</b> app lifecycle end-to-end — architecting and building an app from scratch, then carrying it all the way to release: configuring and shipping production builds to both the <b className="purple">Apple App Store</b> and <b className="purple">Google Play Store</b>, and managing beta distribution through <b className="purple">TestFlight</b> and Play Store internal/closed testing tracks.
      <br />
      <br />
      Today, I continue to pursue new challenges, staying committed to crafting innovative mobile solutions that combine creativity, functionality, and seamless user experience.
      <br />
      <br />
      If you’re looking for a developer who codes with passion, precision, and purpose — let’s connect and create something extraordinary!
    </p>

    <p style={{ color: "rgb(155 126 172)" }}>
      "Great apps aren’t just built — they’re crafted with vision, innovation, and relentless passion."
    </p>
    <footer className="blockquote-footer">Aakash Srinivasan</footer>
  </blockquote>
</Card.Body>


    </Card>
  );
}

export default AboutCard;
