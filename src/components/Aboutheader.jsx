import React from "react";

function Aboutheader() {
  return (
    <div>
      <div className="bg-slate-950 h-132.5  pt-20 px-5 md:px-8">
        <div className="hero-text text-2xl text-center px-auto w-full">
          <span className=" md:text-[3rem]">We Build Your&nbsp;</span>

          <div
            className="word-slider text-orange-500 font-bold md:text-[3rem]
        md:my[-20px] md:py[-5px]"
          >
            <span>Platforms</span>
            <span>Websites</span>
            <span>Applications</span>
            <span>Saas</span>
            <span className="">Startups</span>
            <span className="">Network Infra.</span>
          </div>
        </div>
        <span className=" sm:hidden  text-2xl md:text-[3rem] text-white text-center flex justify-center  lg:block">
          live in seconds&nbsp;
        </span>

        <div className="block">
          <p className="text-center  text-white text-sm md:text-xl md:w-200 md:pt-5  mx-auto">
            We build innovative software solutions that help businesses scale,
            automate processes, and deliver exceptional digital experiences.
          </p>
          <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full "></div>

          {/* Buttons */}
          <div className="mt-30 md:mt-0  gap-5 md:gap-0 flex flex-col md:flex-row  justify-between md:mx-10 lg:mx-70 mt-5  md:mt-20">
            <button className="w-70 mx-auto text-white bg-orange-500 py-1 px-2 hover:cursor-pointer transition-all hover:scale-105 font-bold md:px-10 md:py-4 md:text-bold md:text-xl rounded">
              Get Started
            </button>
            <button className="w-70 mx-auto text-gray-400 rounded transition-all hover:scale-105 border border-white hover:cursor-pointer py-1 px-2  font-bold md:px-10 md:py-4 md:text-bold md:text-xl">
              View Projects
            </button>
          </div>
        </div>
        {/* seperate */}
      </div>
    </div>
  );
}

export default Aboutheader;
