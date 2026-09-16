import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from "./ProjectCards";
import TeleMedix from "../../Assets/Projects/TeleMedix.png";
import Actavivo from "../../Assets/Projects/Actavivo.png";
import BlockManagement from "../../Assets/Projects/BlockManagement.png";
import SubscriptionMgmt from "../../Assets/Projects/SubscriptionMgmt.png";
import WimCart from "../../Assets/Projects/WimCart.png";
import Proscanner from "../../Assets/Projects/ProScanner.png";
import ProscannerPro from "../../Assets/Projects/ProScannerPro.png";
import CupidLab from "../../Assets/Projects/cupidlab.webp";
import Swipes from "../../Assets/Projects/swipes.webp";
import Drafter from "../../Assets/Projects/drafter.webp";
import HealTime from "../../Assets/Projects/HealTime.webp"
import video1 from '../../Assets/DemoVideo/swipe.mp4';
import video3 from '../../Assets/DemoVideo/video3.mp4';
import video4 from '../../Assets/DemoVideo/medic.mp4';
import testDemo from '../../Assets/DemoVideo/testDemo.mp4';

// Shows a client's company name as plain text with a small external-link
// icon next to it (instead of underlining the whole name) so the reader
// isn't left guessing whether "Coimbatore." itself is a clickable phrase.
function CompanyTag({ name, url }) {
  return (
    <>
      <span className="purple">{name}</span>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="project-card-company-icon"
          aria-label={`Visit ${name}'s website`}
          title={`Visit ${name}'s website`}
        >
          <FiExternalLink />
        </a>
      )}
    </>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="reveal">
          <p className="section-kicker">Portfolio</p>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <p className="project-section-label reveal">Client Work</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={Actavivo}
              ismobile={true}
              title="Actavivo"
              badge="Client Project"
              description={<>A free team communication app for sports clubs, groups, and organizations — group messaging, activity and RSVP management, and social sharing, live on the App Store and Google Play. I worked on this already-in-production app for several months, resolving bugs and shipping new features before moving on to TeleMedix. — <CompanyTag name="App Innovation Technologies, Coimbatore" url="https://www.aitechindia.com" /></>}
              demoLink="https://actavivo.net/"
              demoLabel="Website"
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={TeleMedix}
              ismobile={false}
              title="TeleMedix"
              badge="Client Project"
              description={<>A HIPAA-oriented telehealth platform connecting patients and providers for video visits and virtual care. I've been contributing to the provider-facing medical record retrieval workflow — a paginated dashboard tracking record-retrieval jobs across external health networks, drilling into a CCDA-style longitudinal record viewer (problems, medications, allergies, procedures, vitals) — along with an AI-driven clinical decision support (CDSS) chat that dynamically renders its UI from backend-supplied data. — <CompanyTag name="App Innovation Technologies, Coimbatore" url="https://www.aitechindia.com" /></>}
              demoLink="https://telemedix.net/"
              demoLabel="Website"
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={BlockManagement}
              ismobile={true}
              title="Block Management System"
              badge="Client Project"
              description={<>A React Native + Expo mobile app for railway block management — an approval workflow system with push notifications and real-time updates. Later extended into a Task Management System with multi-stage approval chains, status tracking, and a commenting system. — <CompanyTag name="Plattr Tech Studio, Madurai" url="https://www.plattrtechstudio.com" /></>}
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={SubscriptionMgmt}
              ismobile={true}
              title="Subscription Management"
              badge="Client Project"
              description={<>A React Native mobile app helping small businesses manage customer subscriptions — image uploads, user management, and REST API sync. — <CompanyTag name="Anjane Technologies, Chennai" url="https://anjane.tech/" /> (outsourced via <CompanyTag name="Plattr Tech Studio" url="https://www.plattrtechstudio.com" />).</>}
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={WimCart}
              ismobile={true}
              title="Wim Cart"
              badge="Client Project"
              description={<>A complete e-commerce mobile app built with React Native, TypeScript, and Redux — product listings, cart, order tracking, map-pin delivery selection, and user authentication, with a responsive UI built using NativeWind and Styled Components. — <CompanyTag name="Plattr Tech Studio, Madurai" url="https://www.plattrtechstudio.com" /></>}
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={Proscanner}
              ismobile={true}
              title="Pro Scanner Lite"
              badge="Client Project"
              description={<>An earlier document scanner built with bare React Native (no Expo) — captures photos via camera or gallery and converts them into PDF documents instantly, fully offline. Published and live on the Google Play Store. — <CompanyTag name="Plattr Tech Studio, Madurai" url="https://www.plattrtechstudio.com" /></>}
              ghLink="https://github.com/Guru-Pravin/Proscanner-lite#"
              demoLink="https://play.google.com/store/apps/details?id=com.proscannerlite"
            />
          </Col>
        </Row>

        <p className="project-section-label reveal">Personal Projects</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={ProscannerPro}
              ismobile={true}
              title="Pro Scanner"
              badge="New"
              description="Pro Scanner is a full-featured document scanner app built entirely on Expo (Expo Go compatible, no native modules). Capture pages with manual perspective correction and filters, reorder and manage multi-page documents, then compress, e-sign, or scan barcodes — all with pdf.js running inside a hidden WebView for on-device PDF rendering. Includes History with local backup/restore, and full light/dark theming."
              ghLink="https://github.com/Aakash-Srinivasan/pro-scanner"
            />
          </Col>
          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={CupidLab}
              ismobile={true}
              title="Cupid's Lab"
              description="A playful React Native + Expo app built around a whole set of lighthearted relationship games — FLAMES-style name matching, compatibility scoring, pickup line and date idea generators, age prediction, coin toss, star sign matching, truth-or-dare, and PDF 'Love Agreement' export — built to explore a more expressive, personality-driven UI than a typical utility app, with in-app feedback collection to guide iteration."
              ghLink="https://github.com/Aakash-Srinivasan/valentine"
            />
          </Col>

          <Col md={4} className="project-card reveal">
            <ProjectCard
              imgPath={Swipes}
              ismobile={true}
              title="Swipes"
              description="This project showcases my experience building a Tinder-style swipe animation using React Native Reanimated 3. The goal was to create a smooth, interactive user interface where cards could be swiped left or right, mimicking the functionality found in apps like Tinder."
              ghLink="https://github.com/Aakash-Srinivasan/swipeUI"
              videoPath={video1}
            />
          </Col>

          <Col md={4} className="project-card reveal">
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
          <Col md={4} className="project-card reveal">
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
