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
        "Analyzed market trends to increase market share by 20%",
        "Improved customer acquisition rates by 15%",
        "Enabled strategic decision-making through data insights"
      ],
      imgUrl: projImg1,
      categories: ["Strategy"],
    },
    {
      title: "Optimization and Digitalization",
      description: [
        "Reduced operational costs by 25%",
        "Increased process efficiency by 30%",
        "Streamlined operations using advanced data analytics"
      ],
      imgUrl: projImg2,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "ERP-Klickbot",
      description: [
        "Automated ERP processes, reducing manual data entry by 40%",
        "Enhanced data accuracy by 35%",
        "Empowered teams to focus on strategic initiatives"
      ],
      imgUrl: projImg3,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Supply Chain Optimization",
      description: [
        "Decreased lead times by 20%",
        "Reduced inventory holding costs by 15%",
        "Integrated real-time tracking systems for efficiency"
      ],
      imgUrl: projImg4,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Implementation of OKR methodology",
      description: [
        "Implemented OKR framework to align team objectives",
        "Increased team productivity by 18%",
        "Enhanced goal tracking and performance measurement"
      ],
      imgUrl: projImg5,
      categories: ["Strategy"],
    },
    {
      title: "Data Analytics Platform",
      description: [
        "Improved data processing speeds by 30%",
        "Enhanced decision-making capabilities by 25%",
        "Developed scalable data infrastructure"
      ],
      imgUrl: projImg6,
      categories: ["Operations", "Digitalization"],
    },
    {
      title: "Transforming Business with Large Data Analytics",
      description: [
        "Leveraged big data to uncover business insights",
        "Increased revenue by 22% through data-driven strategies",
        "Optimized marketing campaigns with predictive analytics"
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
