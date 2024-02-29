import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Razorcart from "../../Assets/Projects/Razorcart.png";
import Todolist from "../../Assets/Projects/Todolist.png";
import DB from "../../Assets/Projects/DB.png";
import serverless from "../../Assets/Projects/Serverless.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Razorcart}
              isBlog={false}
              title="Razorcart "
              description="This repository contains the code for a simple e-commerce website built using React.js and Chakra UI. The website allows users to browse through various products and make purchases using the Razorcart payment gateway and also used AWS (DynamoDB) to store the all Payments."
              ghLink="https://github.com/Aakash-Srinivasan/Ecommerce(Razorcart)"
              demoLink="https://d3ufb1e959ciue.cloudfront.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              isBlog={false}
              title="Serverless-TodoAPI"
              description="Serverless-TodoApi is a lightweight and scalable solution for managing todo lists using serverless architecture. Built with simplicity and efficiency in mind, this project leverages serverless computing technologies to offer a robust API for creating, updating, deleting, and retrieving todo items."
              ghLink="https://github.com/Aakash-Srinivasan/Serverless-TodoApi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DB}
              isBlog={false}
              title="Unox-DB"
              description="Unox Multiplexes Inc. aims to develop an online portal enabling customers to conveniently book tickets for movie screenings over the internet. This project entails the creation of a robust web application to manage movie schedules, seating capacities, ticket rates, movie information, and user bookings."
              ghLink="https://github.com/Aakash-Srinivasan/UNOX-DB"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="To-Do-List"
              description="This To-Do List application allows users to manage their tasks efficiently. Users can add, edit, delete, and mark tasks as completed or incomplete."
              ghLink="https://github.com/Aakash-Srinivasan/To-Do-List"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
