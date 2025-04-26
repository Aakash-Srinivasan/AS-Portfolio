import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
<Card.Body>
  <blockquote className="blockquote mb-0">
    <p style={{ textAlign: "justify" }}>
      Hello! I’m <span className="purple">Aakash Srinivasan</span>, a passionate Mobile Developer specializing in <b className="purple">React Native</b> and <b className="purple">Expo</b> with <b className="purple">1.5 years of professional experience</b>.
      <br />
      Hailing from <span className="purple">Thiruchengode, Namakkal, Tamil Nadu</span>, I earned my Bachelor's degree in Computer Engineering from Adithya Institute of Technology, Coimbatore.
      <br />
      <br />
      I previously honed my skills at <span className="purple">Plattr Tech Studio, Madurai</span>, where I contributed to building high-quality, scalable mobile applications for both Android and iOS platforms. Working there helped me deepen my expertise in UI/UX development, API integrations, and performance optimization.
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
