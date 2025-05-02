import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import yourFirstArticleImage from "../../Assets/Articles/image1.png";
import yourSecondArticleImage from "../../Assets/Articles/image2.png";
import yourthirdarticleImage from "../../Assets/Articles/My Journey with React Native Reanimated 3.png";
import ArticlesCards from "./ArticlesCards";
import yourfourtharticleImage from "../../Assets/Articles/expense.png";


function Articles() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Articles</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few articles I've written recently on Medium.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={yourFirstArticleImage} // You can use an image if you have one, else a Medium logo
              isBlog={true}
              title="From Beginner to Builder: How I Created a Funny React Native App (And Leveled Up My Skills!)"
              description="Building a quirky app called Cupid Lab, I combined fun with learning—featuring love matching, pickup lines, and even a joke generator. What began as a playful project turned into a deep dive into TypeScript, APIs, and Supabase. Curious to see how I brought it all together? Read on!"
              ghLink="https://medium.com/@aakash4367595/from-beginner-to-builder-how-i-created-a-funny-react-native-app-and-leveled-up-my-skills-8aeafa4e8f23"
            />
          </Col>

          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={yourSecondArticleImage}
              isBlog={true}
              title="No Backend? No Problem! Use Telegram Bots to Get Real-Time Feedback in React Native"
              description="After launching a fun project built with React Native + Expo, I needed a simple way to get real-time feedback without setting up a backend. Enter the perfect zero-cost solution: a Telegram bot and Axios for instant, serverless feedback. No databases, no hassle—just pure simplicity. Want to know how I did it? Read on!"
              ghLink="https://medium.com/@aakash4367595/no-backend-no-problem-use-telegram-bots-to-get-real-time-feedback-in-react-native-8ff9699a6b7d"
            />
          </Col>
          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={yourthirdarticleImage}
              isBlog={true}
              title="Swipe,Cry,Repeat: My Journey with React Native Reanimated 3"
              description="In this article, I share my experience building a Tinder-style swipe animation using React Native Reanimated 3.From struggling with confusing docs and broken tutorials to finally achieving smooth swipes, I walk through the challenges, learnings, and breakthroughs.Perfect for developers who want a real, honest look at mastering complex animations!"
              ghLink="https://medium.com/@aakash4367595/swipe-cry-repeat-my-journey-with-react-native-reanimated-3-fbeb9596683e"
            />
          </Col>
          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={yourfourtharticleImage}
              isBlog={true}
              title="Offline-First Architecture in React Native — Building a Bulletproof Expense Tracker"
              description="Built an Offline-First Expense Tracker in React Native using SQLite, Drizzle, and Supabase. In this article, I break down how I handled offline caching, queued actions, and real-time syncing — with code, architecture, and key lessons learned."
              ghLink="https://medium.com/@aakash4367595/offline-first-architecture-in-react-native-building-a-bulletproof-expense-tracker-2eae8be4ded3"
            />
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Articles;
