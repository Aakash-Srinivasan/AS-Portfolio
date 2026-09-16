import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "./Resume/Aakash-Srinivasan-CV.pdf";

function FloatingCTA() {
  const location = useLocation();
  const [dimmed, setDimmed] = useState(false);

  // Fades the button out while actively scrolling so it doesn't sit on top
  // of body text being read, then brings it back once scrolling settles.
  useEffect(() => {
    let hideTimer;
    const handleScroll = () => {
      setDimmed(true);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setDimmed(false), 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimer);
    };
  }, []);

  if (location.pathname === "/resume") {
    return null;
  }

  return (
    <a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      className={`floating-cta${dimmed ? " is-dimmed" : ""}`}
      aria-label="Download CV"
      title="Download CV"
    >
      <AiOutlineDownload />
    </a>
  );
}

export default FloatingCTA;
