import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
  SiTrello,
  SiLinux,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGit/>
      
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs ={4} md={2} className="tech-icons">
      <SiLinux/>
      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiFigma />
</Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiTrello />
</Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
