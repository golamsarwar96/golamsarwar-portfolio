import React from "react";
import Intro from "../../pages/Home/Intro";
import AboutMe from "../../pages/Home/AboutMe";
import Skills from "../../pages/Home/Skills";
import ContactMe from "../../pages/Home/ContactMe";
const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
