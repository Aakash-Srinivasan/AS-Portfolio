import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aakash Srinivasan </span>
            from <span className="purple"> Thiruchengode,Namakkal,Tamil Nadu.</span>
            <br />
            I am currently employed as a Full Stack developer at Plattr Labz in Chennai.
            <br />
            I have completed Bachelor of Computer Engineering at Adithya institute of Technologies in Coimbatore,
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Website Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">AakashSrinivasan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
