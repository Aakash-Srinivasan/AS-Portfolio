import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"; 
import {  CgWebsite } from "react-icons/cg";
import { FaGooglePlay } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import ReactPlayer from "react-player";
import video1 from "./swipe.mp4";
import { MdVideoCameraFront } from "react-icons/md";


function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false); 

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {"GitHub"}
          </Button>

          {"\n"} {"\n"}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              {props.ismobile ? <FaGooglePlay /> : <CgWebsite />}
              &nbsp;
              {props.ismobile ? "Download" : "Demo"}
            </Button>
          )}

          {props.videoPath && (
            <Button
              variant="success"
              style={{ marginLeft: "10px", marginTop: "10px" }}
              onClick={handleOpen}
            >
            <MdVideoCameraFront />
            &nbsp;
             Demo
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* 🆕 Modal for Video */}
      <Modal show={showModal} className="project-card" onHide={handleClose} size="md" centered >
        <Modal.Header closeButton>
          <Modal.Title>Video Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <ReactPlayer
            url={video1}
            playing
            controls
            width="100%"
            height="120%"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;
