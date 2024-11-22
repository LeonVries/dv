// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutMe } from './components/AboutMe';
import { SkillsTabs } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Impressum } from './components/Impressum_temp';
import { Datenschutz } from './components/Datenschutz';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AboutMe />
              <SkillsTabs />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
