import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Razorcart from "../../Assets/Projects/Razorcart.png";
import Proscanner from "../../Assets/Projects/ProScanner.png";
import CupidLab from "../../Assets/Projects/cupidlab.png";
import Swipes from "../../Assets/Projects/swipes.png";
import Expense from "../../Assets/Projects/expense.png";
import Todolist from "../../Assets/Projects/Todolist.png";
import Drafter from "../../Assets/Projects/drafter.png";
import HealTime from "../../Assets/Projects/HealTime.png"
import DB from "../../Assets/Projects/DB.png";
import serverless from "../../Assets/Projects/Serverless.png";
import video1 from '../../Assets/DemoVideo/swipe.mp4';
import video2 from '../../Assets/DemoVideo/expense.mp4';
import video3 from '../../Assets/DemoVideo/video3.mp4';
import video4 from '../../Assets/DemoVideo/medic.mp4';
import testDemo from '../../Assets/DemoVideo/testDemo.mp4';

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
              imgPath={Proscanner}
              ismobile={true}
              title="Pro Scanner Lite"
              description="Pro Scanner Lite is my first mobile app built with bare React Native. It allows users to capture images using the camera or select photos from the gallery and instantly convert them into PDF documents — simple, fast, and offline!"
              ghLink="https://github.com/Guru-Pravin/Proscanner-lite#"
              demoLink="https://play.google.com/store/apps/details?id=com.proscannerlite"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CupidLab}
              ismobile={true}
              title="Cupid's Lab"
              description="As a beginner in mobile development, I wanted to challenge myself beyond the usual to-do or weather apps. Using React Native and Expo, I built a playful app that matches love by names, calculates compatibility, suggests pickup lines, generates date ideas, and even creates Love Agreements — all while getting real-world hands-on experience and collecting smart user feedback."
              ghLink="https://github.com/Aakash-Srinivasan/valentine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Swipes}
              ismobile={true}
              title="Swipes"
              description="This project showcases my experience building a Tinder-style swipe animation using React Native Reanimated 3. The goal was to create a smooth, interactive user interface where cards could be swiped left or right, mimicking the functionality found in apps like Tinder."
              ghLink="https://github.com/Aakash-Srinivasan/swipeUI"
              videoPath={video1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expense}
              ismobile={true}
              title="Expense Tracker"
              description="Expense Tracker
Built a React Native app with full offline capabilities using SQLite for local storage and Supabase for cloud sync. Implemented queued actions, network state detection, and Drizzle ORM for seamless syncing. Users can add, edit, and delete expenses offline with automatic synchronization when back online."
              ghLink="https://github.com/Aakash-Srinivasan/Expense-Tracker"
              videoPath={video2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drafter}
              ismobile={true}
              title="Drafter"
              description=" Drafter – A Dynamic Notes App
A local notes app built with Expo featuring full CRUD, dynamic light/dark theme switching with smooth animations, and customizable fonts. Preferences are persisted using AsyncStorage. Also includes voice playback of notes via Expo Speech. Built using Expo Router, NativeWind, and custom drawer/tab navigation."
              ghLink="https://github.com/Aakash-Srinivasan/writer"
              videoPath={video3}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealTime}
              ismobile={true}
              title="HealTime"
              description="💊 HealTime – A modern React Native app that helps users manage their medication with timely reminders, dose tracking, and smart snooze options. Designed with a clean UI and persistent storage, it now includes Maestro automation testing for reliable performance and efficient quality assurance using Maestro."
              ghLink="https://github.com/Aakash-Srinivasan/Medic.git"
              videoPath={video4}
              testingVideoPath={testDemo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Razorcart}
              ismobile={false}
              title="Razorcart "
              description="This repository contains the code for a simple e-commerce website built using React.js and Chakra UI. The website allows users to browse through various products and make purchases using the Razorcart payment gateway and also used AWS (DynamoDB) to store the all Payments."
              ghLink="https://github.com/Aakash-Srinivasan/Ecommerce(Razorcart)"
              demoLink="https://d3ufb1e959ciue.cloudfront.net/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serverless}
              ismobile={false}
              title="Serverless-TodoAPI"
              description="Serverless-TodoApi is a lightweight and scalable solution for managing todo lists using serverless architecture. Built with simplicity and efficiency in mind, this project leverages serverless computing technologies to offer a robust API for creating, updating, deleting, and retrieving todo items."
              ghLink="https://github.com/Aakash-Srinivasan/Serverless-TodoApi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DB}
              ismobile={false}
              title="Unox-DB"
              description="Unox Multiplexes Inc. aims to develop an online portal enabling customers to conveniently book tickets for movie screenings over the internet. This project entails the creation of a robust web application to manage movie schedules, seating capacities, ticket rates, movie information, and user bookings."
              ghLink="https://github.com/Aakash-Srinivasan/UNOX-DB"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              ismobile={false}
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
