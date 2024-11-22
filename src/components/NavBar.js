// components/NavBar.js
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink 
              smooth 
              to="/#home" 
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </HashLink>
            <HashLink 
              smooth 
              to="/#about" 
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('about')}
            >
              About Me
            </HashLink>
            <HashLink 
              smooth 
              to="/#skills-tabs" 
              className={activeLink === 'skills-tabs' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('skills-tabs')}
            >
              Skills
            </HashLink>
            <HashLink 
              smooth 
              to="/#projects" 
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </HashLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/leondv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
            </div>
            <HashLink smooth to="/#connect">
              <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
