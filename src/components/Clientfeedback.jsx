import React from "react";
import testimonials from "../data/testimonials";

function Clientfeedback() {
  return (
    <div className="py-16 px-4">
      <h3 className="uppercase text-center sm:text-2xl  pb-10 font-semibold text-orange-500">
        Clients Testimonials
      </h3>
      <h1 className="text-center text-4xl md:text-5xl font-bold ">
        Our Clients Feedbacks
      </h1>

      {/* Clients Testimonials */}
      <section className="overflow-hidden pt-10 pb-0">
        <div className="slider-track flex ">
          {[...testimonials, ...testimonials].map((item) => (
            <div
              key={`${item.id}-${Math.random()}`}
              className=" mx-4 bg-white rounded-xl shadow p-6 w-87.5 md:w-125 my-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mb-4"
              />

              <p className="text-gray-600 mb-4 block wrap-break-word">
                "{item.feedback}"
              </p>

              <h3 className="font-bold">{item.name}</h3>
              <p>{item.company}</p>
              <p className="text-sm text-cyan-700">{item.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Clientfeedback;
