import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Aakash Srinivasan</span>, a Full Stack Developer at Plattr Tech Studio in Madurai.
            <br />
            Originally from <span className="purple">Thiruchengode, Namakkal, Tamil Nadu</span>, I hold a Bachelor's degree in Computer Engineering from Adithya Institute of Technology, Coimbatore.
            <br />
            <br />
            With a deep passion for technology and problem-solving, I specialize in building high-quality, scalable applications. I thrive on tackling new challenges and pushing the boundaries of what’s possible in development.
            <br />
            <br />
            If you’re looking for a dedicated and skilled developer, let’s connect and explore how we can collaborate!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best builders are those who can see the entire blueprint, from the smallest button to the largest server!!!"
          </p>
          <footer className="blockquote-footer">Aakash Srinivasan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
