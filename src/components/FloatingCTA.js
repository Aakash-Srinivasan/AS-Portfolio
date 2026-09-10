import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "./Resume/Aakash-Srinivasan-CV.pdf";

function FloatingCTA() {
  const location = useLocation();

  if (location.pathname === "/resume") {
    return null;
  }

  return (
    <a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      className="floating-cta"
      aria-label="Download CV"
      title="Download CV"
    >
      <AiOutlineDownload />
    </a>
  );
}

export default FloatingCTA;
