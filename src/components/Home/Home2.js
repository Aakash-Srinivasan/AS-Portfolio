import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - About Description */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Here’s The <span className="purple">Person</span> Behind The Code!
            </h1>
            <p className="home-about-body">
              Programming is my symphony, where every line of code strikes a
              chord of innovation. It’s more than just a skill—it’s an art that
              fuels my soul. 🎨💻
              <br />
              <br />
              Fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  React.js, React Native Expo, and Full Stack Development
                </b>
              </i>
              <br />
              <br />I transform visions into digital marvels. &nbsp;
              <i>
                My passions orbit the realms of
                <b className="purple"> Full Stack wizardry</b> and
                groundbreaking <b className="purple"> Mobile Development</b>,
                where creativity knows no bounds.
              </i>
              <br />
              <br />
              With the elegance of
              <b className="purple"> React Native</b> and the finesse of{" "}
              <b className="purple"> Next.js</b>, I craft products that don’t
              just work—they leave a legacy. 🚀✨
            </p>
          </Col>

          {/* Right Column - Avatar Image */}
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid "
                alt="avatar"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Tilt>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row className="mt-4">
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aakash-Srinivasan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aakash4367595@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aakash-srinivasan-780189246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.aakash_srinivasan._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
