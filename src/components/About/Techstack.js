import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiExpo } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiDocker,
  SiDrizzle,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiSqlite,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons reveal">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiExpo />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiTypescript />

      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiRedux />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiTailwindcss />

      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiDrizzle />
      </Col>
    </Row>
  );
}

export default Techstack;
