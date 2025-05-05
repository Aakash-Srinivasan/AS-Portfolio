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
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDrizzle />
      </Col>
    </Row>
  );
}

export default Techstack;
