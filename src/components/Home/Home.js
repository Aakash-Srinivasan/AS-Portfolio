import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="hero-badge">Available for new opportunities</p>

              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Aakash Srinivasan</strong>
              </h1>

              <div className="hero-type">
                <Type />
              </div>

              <div className="hero-cta">
                <Link to="/project" className="hero-btn hero-btn-primary">
                  View My Work
                </Link>
                <Link to="/resume" className="hero-btn hero-btn-outline">
                  Get Resume
                </Link>
              </div>
            </Col>

            <Col md={5} className="home-hero-img-wrapper">
              <img src={homeLogo} alt="home pic" className="img-fluid home-hero-img" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
