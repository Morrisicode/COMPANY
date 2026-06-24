import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function ProjectsGrid() {
  return (
    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            Our Projects
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Work We’ve Built For Businesses & Brands
          </h2>

          <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
            Explore a selection of digital products, business systems, websites,
            and custom software solutions developed to solve real-world
            challenges and drive growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsGrid;
