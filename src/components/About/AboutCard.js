import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ufhano Tshivhidzo </span>
            from <span className="purple"> Midrand, Gauteng.</span>
            <br />
          
            <br />
            I have completed Bachelors in Science (BSc) in Computer Science and Information Systems at University of The Western Cape
          .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Wactching Tech Documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Oppotunities are meant to be taken!"{" "}
          </p>
          <footer className="blockquote-footer">Rehoboth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
