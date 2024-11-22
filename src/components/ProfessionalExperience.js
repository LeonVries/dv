import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import experienceIcon from "../assets/img/experience-icon.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const ProfessionalExperience = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>Professional Experience</h2>
          <p>I have extensive professional experience in the tech industry, working with leading companies.</p>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="item"><img src={experienceIcon} alt="Image" /><h5>Software Developer at ABC Corp</h5></div>
            <div className="item"><img src={experienceIcon} alt="Image" /><h5>Project Manager at XYZ Ltd</h5></div>
          </Carousel>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
