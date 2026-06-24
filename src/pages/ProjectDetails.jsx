import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Project Not Found</h2>
          <Link
            to="/projects"
            className="inline-block rounded-full border border-white/20 px-6 py-3"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-4 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Back Link */}
        <Link
          to="/projects"
          className="mb-8 inline-block text-sm text-white/70 hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/60">
            {project.category}
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="h-70w-full object-cover sm:h-105 lg:h-140"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Left */}
          <div>
            <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
              Project Overview
            </h2>

            <p className="text-base leading-8 text-white/75 sm:text-lg">
              {project.overview}
            </p>

            {/* Features */}
            <div className="mt-12">
              <h3 className="mb-5 text-2xl font-bold">Key Features</h3>

              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="border-b border-white/10 pb-3 text-white/80"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="h-fit rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-5 text-xl font-bold">Project Info</h3>

            {/* Category */}
            <div className="mb-6">
              <p className="mb-2 text-sm text-white/50">Category</p>
              <p className="text-white">{project.category}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="mb-3 text-sm text-white/50">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center font-medium text-black"
              >
                View Live Project
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-center font-medium"
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
