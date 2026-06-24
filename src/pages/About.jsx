import React from "react";
import Aboutheader from "../components/Aboutheader";
import Aboutus from "../components/Aboutus";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Footer from "../components/Footer";
function About() {
  return (
    <div>
      <Aboutheader />
      <Aboutus />
      <FeaturedProjects />
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}

export default About;
