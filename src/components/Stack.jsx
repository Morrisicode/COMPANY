import React from "react";
import Bootstrap from "../images/stacks/bootstrap-logo.png";
import CSS from "../images/stacks/css3-logo.png";
import Django from "../images/stacks/django-logo.png";
import HTML from "../images/stacks/html5-logo.png";
import SQL from "../images/stacks/mysql-logo.png";
import JS from "../images/stacks/js5-logo.png";
import PYTHON from "../images/stacks/html5-logo.png";
import REACT from "../images/stacks/react-logo.png";
import TAILWIND from "../images/stacks/tailwind-css.png";
import NEXT from "../images/stacks/next.png";

const technologies = [
  Bootstrap,
  CSS,
  Django,
  HTML,
  SQL,
  JS,
  PYTHON,
  REACT,
  TAILWIND,
  NEXT,
];

function TechStack() {
  return (
    <div className="mx-4 pt-10">
      <h3 className="text-center text-orange-500 uppercase font-bold font-4xl md:text-3xl md:pb-2">
        our tech stack
      </h3>
      <h1 className="text-center  text-[2rem] font-bold py-3">
        Our Daily Technologies
      </h1>
      <section className="overflow-hidden py-10">
        <div className="marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt="technology"
              className="h-16 w-auto mx-10"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TechStack;
