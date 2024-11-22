import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Optimization", "Automation", "Coding" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    // Setze den Text auf ein geschütztes Leerzeichen, wenn er komplett gelöscht ist
    if (isDeleting && updatedText === '') {
      updatedText = '\u00A0'; // Geschütztes Leerzeichen (Unicode-Zeichen)
    }
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '\u00A0') { // Wenn nur das geschützte Leerzeichen bleibt
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I´m Leon de Vries`}</h1>
                <h2 style={{ display: 'inline-block', minWidth: '250px', whiteSpace: 'nowrap' }} className="txt-rotate" dataPeriod="300" data-rotate='[ "Softwareentwicklung", "Prozessoptimierungen", "Automatisierungen" ]'>
                  <span className="wrap">{text}</span>
                </h2>
                <p>I specialize in data-driven process optimization and digital transformation. Leveraging cutting-edge technologies, I help businesses enhance efficiency, eliminate bottlenecks, and stay competitive in an ever-evolving landscape.</p>
                <button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>
                Let’s Connect <ArrowRightCircle size={25} />
                </button>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                {/*   <img src={headerImg} alt="Header Img" style={{ width: "50%", marginLeft: "10%" }}/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
}
