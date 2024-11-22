// src/components/Projects.js
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png"; // Sicherstellen, dass dieses Bild existiert
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Competitive Market Analysis",
      description: [
        "Analyzed market trends to drive growth",
        "Optimized customer acquisition strategies",
        "Enabled informed strategic decision-making"
      ],
      imgUrl: projImg1,
      categories: ["Strategy"],
    },
    {
      title: "Optimization and Digitalization",
      description: [
        "Reduced operational complexity through process improvements",
        "Enhanced efficiency in workflows",
        "Streamlined operations using advanced analytical tools"
      ],
      imgUrl: projImg2,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "ERP-Klickbot",
      description: [
        "Automated ERP processes to minimize manual tasks",
        "Improved data accuracy and reliability",
        "Empowered teams to focus on strategic priorities"
      ],
      imgUrl: projImg3,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Supply Chain Optimization",
      description: [
        "Improved supply chain processes for better efficiency",
        "Optimized inventory management and planning",
        "Implemented real-time tracking systems"
      ],
      imgUrl: projImg4,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Implementation of OKR Methodology",
      description: [
        "Introduced OKR framework to align team goals",
        "Enhanced team performance through clear objectives",
        "Improved tracking and measurement of key results"
      ],
      imgUrl: projImg5,
      categories: ["Strategy"],
    },
    {
      title: "Data Analytics Platform",
      description: [
        "Optimized data processing and analysis",
        "Supported data-driven decision-making",
        "Developed scalable infrastructure for analytics"
      ],
      imgUrl: projImg6,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Transforming Business with Large Data Analytics",
      description: [
        "Leveraged big data for business insights",
        "Enabled data-driven strategies to optimize performance",
        "Improved campaigns through predictive analytics"
      ],
      imgUrl: projImg7,
      categories: ["Strategy"],
    },      
  ];

  // Funktion zur Filterung der Projekte basierend auf der Kategorie
  const filterProjects = (category) => {
    return projects.filter(project => project.categories.includes(category));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>"You can't manage what you can't measure."</h2>
                  <p>
                    With a deep focus on measurable insights, I empower companies to make informed decisions and optimize every aspect of their operations. By combining data analysis with practical implementation, I ensure that improvements are not just theoretical but lead to tangible results.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Operations</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Digitalization</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Strategy</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            filterProjects("Operations").map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            filterProjects("Digitalization").map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            filterProjects("Strategy").map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
