import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Let me paint a picture of who{" "}
              <strong className="purple">I'M</strong>
            </h1>

            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "0px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              style={{
                width: "80%", // Control the width of the logo
                height: "auto", // Maintain the aspect ratio
                marginBottom: "20px",
                maxWidth: "100%", // Prevent it from overflowing its container
              }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
