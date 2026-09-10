import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiBruno,
  SiMysql,
  SiFigma,
  SiSupabase,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons reveal">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiSupabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
      <SiBruno />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons reveal">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
