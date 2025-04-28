import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "./Aakash-Srinivasan-CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactPDF from "react-pdf-js";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Always show loading for 3 seconds minimum
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // We don't immediately remove loading here.
    // Timer will handle it after 3 seconds.
    console.log("PDF loaded with", numPages, "pages");
  };

  return (
    <div>
      <Container fluid className="resume-section" style={{ position: "relative" }}>
        <Particle />
        <Row className="resume">
          <div className="d-flex justify-content-center position-relative">
            {loading && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            {!loading && (
              <ReactPDF
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                page={1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            )}
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
