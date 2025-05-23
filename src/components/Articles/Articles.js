import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import yourFirstArticleImage from "../../Assets/Articles/image1.png";
import yourSecondArticleImage from "../../Assets/Articles/image2.png";
import yourthirdarticleImage from "../../Assets/Articles/My Journey with React Native Reanimated 3.png";
import ArticlesCards from "./ArticlesCards";
import yourfourtharticleImage from "../../Assets/Articles/expense.png";
import yourfiftharticleImage from "../../Assets/Articles/drafter.png";
import heal from "../../Assets/Articles/heal.png";
import testArticle from '../../Assets/Articles/testArticle.png';

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
          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={yourfiftharticleImage}
              isBlog={true}
              title="Drafter — A Beautiful Notes App with Dynamic Theming, Custom Fonts & Animations in React Native"
              description="Learn how I built a local notes app with smooth light/dark theme transitions, custom fonts, and voice playback — all using Expo, NativeWind, and AsyncStorage.
In this article, I share my approach, the challenges I faced, and how I tackled dynamic theming and font switching without external state libraries."
              ghLink="https://medium.com/@aakash4367595/drafter-a-beautiful-notes-app-with-dynamic-theming-custom-fonts-animations-in-react-native-074d9aaab483"
            />
          </Col>
          <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={heal}
              isBlog={true}
              title="Building a Reliable Medication Reminder App with Expo: My Journey Using Notifications and TaskManager"
              description="Explore how I built a Smart Medication Reminder app using Expo Notifications and Expo Task Manager. This app leverages AsyncStorage for local data management and offers intuitive features like snooze options, timely reminders, and status resets to ensure you never miss a dose. Check out the full journey and technical insights behind this project."
              ghLink="https://medium.com/@aakash4367595/building-a-reliable-medication-reminder-app-with-expo-my-journey-using-notifications-and-3ad8a187d1b9"
            />
          </Col>
         <Col md={6} className="project-card">
            <ArticlesCards
              imgPath={testArticle}
              isBlog={true}
              title="🧪 From Developer to Tester: How I Automated My App with Maestro (The Easy Way)"
              description="In this article, I explore how I’ve integrated Maestro Automation Testing into my HealTime app, a sleek React Native solution for managing medication reminders. I walk through the process of setting up Maestro, writing automation scripts, and running tests efficiently on a physical device. Watch the video showcasing the seamless process of running these automated tests, highlighting how Maestro can simplify the testing workflow for developers and testers alike."
              ghLink="https://medium.com/@aakash4367595/from-developer-to-tester-how-i-automated-my-app-with-maestro-the-easy-way-386c43e7b0c4"
            />
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Articles;
