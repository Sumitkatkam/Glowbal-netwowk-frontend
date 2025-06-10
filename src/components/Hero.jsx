import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Hero = () => {
  return (
    <section className="relative text-white h-[80vh] flex items-center px-10 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/home-video-new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto pl-6">
        <h1 className="text-2xl md:text-5xl font-semibold mb-6 text-left mt-12">
          Meet The Digital Drivers Of Global Disruptors
        </h1>
        <p className="text-xl max-w-2xl mb-6 text-left">
          We catalyze business growth by reimagining digital experiences that 
          <br />
          conquer complex challenges through innovation and agility.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-4 rounded-lg font-medium transition-all duration-300 ease-in-out flex items-center gap-2 mt-5" style={{ backgroundColor: "#126BFB" }}
          onMouseEnter={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ffffff";
                e.target.style.border = "2px solid #ffffff";   
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#126BFB";
                e.target.style.color = "#ffffff";
                e.target.style.border = "#ffffff"; 
              }}>
            Consult Our Experts <SlArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
