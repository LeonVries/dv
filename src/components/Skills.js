// components/SkillsTabs.js
import { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import excel from "../assets/img/excel.svg";
import vba from "../assets/img/vba.svg";
import javascript from "../assets/img/javascript.svg";
import python from "../assets/img/python.svg";
import power from "../assets/img/power.svg.png";
import olb from "../assets/img/olb.svg";
import Neelmeyer from "../assets/img/neelmeyer.webp";
import vw from "../assets/img/volkswagen.png";
import audi from "../assets/img/audi.svg.png";
import FAPS from "../assets/img/FAPS.svg.jpg";
import fau from "../assets/img/Fau.png";
import hsE from "../assets/img/HsEmd.png";
import unic from "../assets/img/Unic.png";
import Slider from 'react-slick';

export const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tappedIndex, setTappedIndex] = useState(null);
  
  // Carousel reference to reset position
  const carouselRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (carouselRef.current) {
      carouselRef.current.goToSlide(0); // Geht zum ersten Slide ohne Animation
    }
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleTap = (index) => {
    setTappedIndex(tappedIndex === index ? null : index);
  };

  const tabContent = {
    skills: {
      title: "Skills",
      description: "With a deep focus on measurable insights, I empower companies to make informed decisions and optimize every aspect of their operations.",
      items: [
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },
        { img: excel, title: "Microsoft Excel", overlayText: "Analyzing and visualizing business data to support strategic decisions and optimize operational workflows." },
        { img: vba, title: "Visual Basic for Applications", overlayText: "Automating routine tasks in Microsoft Office, increasing efficiency and minimizing manual errors for seamless operations." },
        { img: javascript, title: "JavaScript", overlayText: "Creating dynamic, user-friendly web applications for seamless customer interactions and streamlined internal processes." },
        { img: python, title: "Python", overlayText: "Developing robust automation solutions, data analysis, and machine learning models to optimize business processes and enhance decision-making." },
        { img: power, title: "Power Platform", overlayText: "Building custom apps and automated workflows to accelerate digital transformation and reduce manual processes." },

      ]
    },
    professionalExperience: {
      title: "Professional Experience",
      description: "A proven track record in delivering solutions that drive growth and efficiency within organizations.",
      items: [
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
        { 
          img: olb, 
          title: "Oldenburgische Landesbank AG", 
          overlayText: "Advised business clients on tailored financing solutions, with a strong focus on fostering growth. Completed IHK-certified training as a Corporate Banking Specialist, building foundational expertise in financial advisory." 
        },
        { 
          img: Neelmeyer, 
          title: "Bankhaus Neelmeyer", 
          overlayText: "Supported post-merger integration, providing operational training on digital competencies and wealth management software to employees and clients. Played a key role in aligning services during consolidation with OLB and BKB." 
        },
        { 
          img: vw, 
          title: "Volkswagen AG", 
          overlayText: "Optimized logistics processes for the ID.3 production ramp-up, ensuring agile responses to supply chain constraints. Developed strategies for proactive supply chain management in a high-paced environment." 
        },
        { 
          img: audi, 
          title: "Audi AG", 
          overlayText: "Developed detailed cost calculations for component development, supporting negotiations with Chinese joint-venture partners. Delivered C-level presentations on cost insights to drive strategic decisions." 
        },
        { 
          img: FAPS, 
          title: "Institute for Factory Automation and Production Systems", 
          overlayText: "Advanced automation research through the development of a software framework utilizing large language models. Enhanced user experience by designing an intuitive interface with Java and React." 
        },
      ]
    },
    education: {
      title: "Education",
      description: "Continuously investing in knowledge to stay ahead in the ever-evolving tech industry.",
      items: [
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree.  " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },
        { img: hsE, title: "University of Applied Sciences Emden-Leer", overlayText: "Comprehensive foundation in classical mechanical engineering principles, combining engineering expertise with business acumen. Graduadted with a bachelor of engineering Graduadted with a bachelor of engineering" },
        { img: unic, title: "University of Nicosia", overlayText: "I studied Mechanical Engineering with a focus on Energy Systems at the University of Nicosia, Cyprus, gaining insights into sustainable technologies and energy optimization." },
        { img: fau, title: "Friedrich-Alexander-Universität Nürnberg-Erlangen", overlayText: "Specializing in manufacturing automation with a focus on optimizing production processes and advanced automation techniques. With a planned Master of Science degree. " },

      ]
    }
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2, // Zeige 1 Element auf Tablets
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1, // Zeige 1 Element auf Mobilgeräten
      slidesToSlide: 1
    }
  };
  // Funktion zum Duplizieren der Items
  const duplicateItems = (items, times = 2) => {
    let duplicated = [];
    for (let i = 0; i < times; i++) {
      duplicated = duplicated.concat(items);
    }
    return duplicated;
  };

  // Duplizieren der Items, um mindestens 6 zu haben (für infinite loop mit slidesToShow: 3)
  const carouselItems = duplicateItems(tabContent[activeTab].items, 2); // 3 * 2 = 6 Items

  return (
    <section className="skills-tabs" id="skills-tabs">
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => handleTabChange("skills")}
          >
            Skills
          </button>
          <button
            className={`tab-button ${activeTab === "professionalExperience" ? "active" : ""}`}
            onClick={() => handleTabChange("professionalExperience")}
          >
            Professional Experience
          </button>
          <button
            className={`tab-button ${activeTab === "education" ? "active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            Education
          </button>
        </div>
        <div className="tab-content">
          <h2>{tabContent[activeTab].title}</h2>
          <p>{tabContent[activeTab].description}</p>
          <Carousel 
            key={activeTab} /* Erzwingt ein Re-Rendering beim Tab-Wechsel */
            responsive={responsive} 
            infinite={true} 
            className="skill-carousel" 
            ref={carouselRef} 
            arrows={true} /* Navigationspfeile anzeigen */
            draggable={true} /* Ziehen auf Touch-Geräten ermöglichen */
            swipeable={true} /* Wischen auf Touch-Geräten ermöglichen */
            keyBoardControl={true} /* Steuerung mit der Tastatur ermöglichen */
            customTransition="all .5" /* Übergangszeit anpassen */
            transitionDuration={500} /* Übergangszeit in ms */
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet"]} /* Pfeile nur auf Tablets entfernen */
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {carouselItems.map((item, index) => (
              <div 
                className="item" 
                key={index} 
                onMouseEnter={() => handleHover(index)} 
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleTap(index)} /* Für mobile Tap */
              >
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                {(hoveredIndex === index || tappedIndex === index) && (
                  <div className="expanded-overlay">
                    {item.overlayText}
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
