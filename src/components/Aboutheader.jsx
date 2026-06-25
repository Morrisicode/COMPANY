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
        {/* <span className=" hidden  text-2xl md:text-[3rem] text-white text-center flex justify-center  lg:block">
          live in seconds&nbsp;
        </span> */}

        <div className="block">
          <p className="text-center  text-white text-sm md:text-xl md:w-200 md:pt-5  mx-auto">
            We build innovative software solutions that help businesses scale,
            automate processes, and deliver exceptional digital experiences.
          </p>
          <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full "></div>

          {/* Buttons */}
          <div className="mt-20 gap-10  md:gap-10 flex flex-col md:flex-row items-center justify-center md:mx-10    md:mt-20 text-white">
            <button className=" bg-orange-500 w-full md:w-68 px-5 py-2 rounded-xl">
              Get Started
            </button>
            <button className="bg-transparent outline-2 w-full md:w-68 outline-gray-300 px-4 py-2 rounded-xl">
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
