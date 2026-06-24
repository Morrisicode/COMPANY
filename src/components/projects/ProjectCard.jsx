import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
    >
      <div className="relative h-80 sm:h-95 lg:h-105 overflow-hidden">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <p className="mb-2 text-sm text-white/70">{project.category}</p>

          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm text-white/80">
            {project.description}
          </p>

          {/* Tech stack preview */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-block w-fit rounded-full border border-white/20 px-4 py-2 text-sm text-white transition group-hover:bg-white group-hover:text-black">
            View Case Study
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
