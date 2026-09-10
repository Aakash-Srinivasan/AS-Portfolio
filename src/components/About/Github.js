import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="reveal">
      <div className="text-center">
        <p className="section-kicker">Activity</p>
      </div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="github-calendar-row">
        <GitHubCalendar
          username="Aakash-Srinivasan"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
