import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./Aakash-Srinivasan-CV.pdf";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { usePdf } from "react-pdf-js";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page, setPage] = useState(1);
  const canvasEl = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [loading, numPages] = usePdf({
    file: pdf,
    page,
    scale: width > 786 ? 1.7 : 0.6,
    canvasEl,
  });

  return (
    <div>
      <Container fluid className="resume-section" style={{ position: "relative" }}>
        <Row className="reveal">
          <div className="text-center">
            <p className="section-kicker">Experience</p>
            <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
              My <strong className="purple">Resume</strong>
            </h1>
          </div>
        </Row>
        <Row className="resume">
          <div className="resume-pdf-wrapper d-flex flex-column justify-content-center align-items-center position-relative reveal">
            {loading && (
              <div className="resume-loader">
                <span className="loader-ring"></span>
                <p>Loading resume…</p>
              </div>
            )}
            <canvas ref={canvasEl} style={{ display: loading ? "none" : "block", maxWidth: "100%" }} />
            {!loading && numPages > 1 && (
              <div className="resume-pagination">
                <button
                  type="button"
                  className="resume-page-btn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                >
                  <AiOutlineLeft /> Prev
                </button>
                <span className="resume-page-indicator">
                  Page {page} of {numPages}
                </span>
                <button
                  type="button"
                  className="resume-page-btn"
                  onClick={() => setPage((p) => Math.min(numPages, p + 1))}
                  disabled={page >= numPages}
                >
                  Next <AiOutlineRight />
                </button>
              </div>
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
