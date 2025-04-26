import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
  AiFillMediumCircle,
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
              I’m a passionate <b className="purple">Mobile Developer</b> driven by creativity and precision — specializing in building seamless iOS and Android apps using <b className="purple">React Native</b> and <b className="purple">Expo</b>. 📱🚀
              <br />
              <br />
              I craft frontends that are fast, fluid, and future-ready, powered by{" "}
              <i>
                <b className="purple">React Native</b>, <b className="purple">TypeScript</b>, <b className="purple">Redux</b>, and the <b className="purple">Expo</b> ecosystem
              </i>
              , bringing visions to life with stunning UI.
              <br />
              <br />
              Every experience I design is enhanced by{" "}
              <i>
                <b className="purple">NativeWind</b>, <b className="purple">Styled Components</b>, and <b className="purple">Tailwind CSS</b>
              </i>
              , delivering clean and intuitive interfaces.
              <br />
              <br />
              Behind the scenes, I architect resilient backends using{" "}
              <i>
                <b className="purple">Supabase</b> and <b className="purple">Firebase</b>
              </i>
              , and integrate{" "}
              <b className="purple">RESTful APIs</b> with precision through <b className="purple">Axios</b>.
              <br />
              <br />
              Equipped with tools like{" "}
              <i>
                <b className="purple">VS Code</b>, <b className="purple">Postman</b>, <b className="purple">Mockoon</b>, <b className="purple">Figma</b>, and <b className="purple">Bruno</b>
              </i>
              , I transform ideas into polished digital realities.
              <br />
              <br />
              For me, coding isn’t just about building apps — it’s about creating experiences that inspire, engage, and leave a lasting legacy. ✨
            </p>
          </Col>

          {/* Right Column - Avatar Image */}
          <Col md={4} className="myAvtar text-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
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
                  href="https://medium.com/@aakash4367595"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
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
