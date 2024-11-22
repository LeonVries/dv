import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myPhoto from '../assets/img/Leon.png'; // Pfad zum Foto

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <img src={myPhoto} alt="Leon de Vries" className="about-photo"/>
          </Col>
          <Col xs={12} md={6}>
            <h2>About Me</h2>
            <p style={{ textAlign: "justify" }}>
              Hi, I'm Leon de Vries, a passionate developer and industrial engineer with a focus on software development, process automation, and performance enhancement. With expertise spanning technical and business-oriented projects, I bridge the gap between technology and operational efficiency. Currently, I’m completing my master’s thesis in manufacturing automation, which aligns closely with my goal of transforming workflows through automation and data-driven decision-making.
            </p>
            <p style={{ textAlign: "justify" }}>
              Outside of work, I’m an ambitious athlete who enjoys the challenge of both physical and mental growth. When I'm not coding or optimizing processes, you can find me in the gym, running, or exploring emerging technologies. My mission is to create impactful solutions that streamline processes and empower companies to operate more efficiently.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
