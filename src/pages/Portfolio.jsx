import React from "react";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Footer from "../components/Footer";
function Portfolio() {
  return (
    <main className="min-h-screen bg-black">
      <ProjectsGrid />
      <Footer />
    </main>
  );
}

export default Portfolio;
