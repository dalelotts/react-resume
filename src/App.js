import React, {useEffect, useState} from 'react';
import './App.scss';
import Home from "./home/Home";
import NavBar from "./nav-bar/NavBar";
import Header from "./header/Header";
import Social from "./social/Social";
import About from "./about/About";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Testimonials from "./testimonials/Testimonials";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";
import Resume from "./resume/Resume";

function App () {

  const [resumeData, setState] = useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(setState)
      .catch(console.error)
  }, []);

  if (resumeData.home) {
    return (
      <>
        <Header>
          <NavBar links={Object.keys(resumeData)}/>
          <Home name={resumeData.home.name} ima={resumeData.home.ima} introduction={resumeData.home.introduction}>
            <Social accounts={resumeData.home.social}/>
          </Home>
        </Header>
        <About about={resumeData.about}/>
        <Resume resume={resumeData.resume}/>
        <Skills skills={resumeData.skills}/>
        <Portfolio portfolio={resumeData.portfolio}/>
        <Testimonials testimonials={resumeData.testimonials}/>
        <Contact name={resumeData.name} contact={resumeData.contact}/>
        <Footer name={resumeData.name}>
          <a title="Back to Top" href="#home"><i className="fas fa-3x fa-chevron-circle-up"/></a>
          <Social accounts={resumeData.home.social}/>
        </Footer>
      </>
    );
  }
  return (
    <div className="text-center p-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default App;
