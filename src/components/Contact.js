import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'; // Hier das neue Package verwenden

emailjs.init("O6iW3mAnbYaNNT42j"); // Falls du die Initialisierung benötigst, kannst du dies einmalig tun

export const Contact = () => {
  const formRef = useRef(); // Verwende useRef für das Formular
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceID = "service_zv3jups"; 
    const templateID = "template_5t19uzp";

    // Überprüfung und Logging
    console.log('Sending form details via emailjs');

    // Template Parameter für den E-Mail-Versand
    emailjs.sendForm(serviceID, templateID, formRef.current)
      .then(() => {
        setButtonText("Send Email");
        setStatus({ success: true, message: 'Message sent successfully' });
      }, (err) => {
        setButtonText("Send Email");
        setStatus({ success: false, message: `Failed to send message. Error: ${err.text}` });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col sm={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Let’s connect</h2>
                  <form id="form" ref={formRef} onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="firstName"
                          placeholder="First Name" 
                          required 
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="text" 
                          name="lastName"
                          placeholder="Last Name" 
                          required 
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email Address" 
                          required 
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="Phone No." 
                        />
                      </Col>
                      <Col sm={12} className="px-1">
                        <textarea 
                          rows="6" 
                          name="message"
                          placeholder="Message" 
                          required 
                        ></textarea>
                        <button type="submit" id="button"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
