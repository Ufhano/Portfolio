import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import Tic from "../../Assets/Projects/Tic.jpg"
import image from "../../Assets/Projects/image.png"


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
              imgPath={chatify}
              isBlog={false}
              title="To-Do"
              description="A minimalist to-do list application . It allows users to add tasks, mark them as completed by left-clicking, and delete them via right-clicking. The interface is straightforward, providing a simple and efficient way to manage tasks without unnecessary features."
              ghLink="https://github.com/Ufhano/To-do-Web"
              demoLink="https://ufhano.github.io/To-do-Web/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="A classic game of Tic Tac Toe ,challenge a friend or play against the computer in this clean, simple, and responsive web app"
              ghLink="https://github.com/Ufhano/Tic-Tac-Toe"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Yearly-Progress-Bar"
              description="See your year in progress ,a motivational glance at how far you've come, and how much time is still ahead"
              ghLink="https://github.com/Ufhano/Yearly-Progress-Bar"
              
            />
          </Col>


          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
