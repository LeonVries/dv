import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import educationIcon from "../assets/img/education-icon.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <h2>Education</h2>
          <p>My formal education has equipped me with the skills and knowledge to excel in my field.</p>
          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
            <div className="item"><img src={educationIcon} alt="Image" /><h5>Bachelor of Engineering</h5></div>
            <div className="item"><img src={educationIcon} alt="Image" /><h5>Master's in Data Science</h5></div>
          </Carousel>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
