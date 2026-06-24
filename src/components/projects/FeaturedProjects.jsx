import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-/60">
              Featured Projects
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Selected Work We’re Proud Of
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              A quick look at some of the digital products, websites, and
              systems we’ve designed and developed for clients and businesses.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-10 items-center text-center">
        <Link
          to="/portfolio"
          className="w-fit  rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-orange-500 hover:text-white"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProjects;
