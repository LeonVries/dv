// Footer.js
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ width: "15%" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/leondv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
            </div>
            <p>
              &copy; 2024 Leon de Vries. All Rights Reserved
                <br />
                  <Link to="/impressum" style={{ color: "#FFFFFF", marginRight: "15px" }}>Impressum</Link>
                  <Link to="/datenschutz" style={{ color: "#FFFFFF" }}>Privacy</Link>
            </p>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
