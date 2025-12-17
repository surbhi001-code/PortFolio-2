// Updated About.jsx with improved spacing and closer second section
import React from "react";
import { asset } from "../assets/asset";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center pt-[110px] gap-10"
    >
      {/* MAIN CONTENT WRAPPER */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1300px] gap-[70px] px-6">
        {/* TEXT SECTION */}
        <div className="flex flex-col w-full md:w-[520px] gap-10 text-center md:text-left items-center md:items-start">
          <span className="font-urbanist font-semibold text-[50px] leading-[50px] text-[#0A0A0A]">
            Hi, I am Saloni
          </span>

          <p className="font-urbanist text-[26px] leading-9 text-[#0A0A0A] max-w-[520px]">
            I'm a
            <span className="font-urbanist font-semibold"> UX designer</span>{" "}
            who believes creativity is born somewhere between chaos and calm.
            Around me, ideas move fast, wild, loud, and full of colour. Inside,
            I slow down to make sense of them, to feel them deeply before
            turning them into design.
            <br />
            <b>That’s what I love about this work</b>, it lets me embrace both
            sides of myself:
            <br />
            the dreamer who sees endless possibilities, and the designer who
            turns them into meaning.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-[550px] h-[520px] rounded-3xl border-4 bg-white border-[#F234A0] shadow-xl relative overflow-hidden group mt-8">
          <img
            src={asset.SaloniPic}
            className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:blur-sm opacity-100 group-hover:opacity-0"
          />

          <img
            src={asset.SaloniPic2}
            className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:blur-0"
          />

          <div className="absolute top-6 left-6 rounded-[20px] py-1.5 px-[35px] bg-[#C3FF40] opacity-100 group-hover:opacity-0 transition-all duration-500">
            <span className="font-freehand text-[18px] text-[#0A0A0A]">
              Hover over to see the real me
            </span>
          </div>
        </div>
      </div>

      {/* CENTERED SUBTEXT */}
      <div className="w-full flex justify-center px-4 -mt-1">
        <span className="font-freehand text-[24px] leading-[30px] text-center max-w-[700px] text-[#0A0A0A]">
          But let’s rewind a little
          <br /> Here’s how I ended up falling for design in the first place.
        </span>
      </div>

      {/* SECOND SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1300px] gap-[70px] px-6">
        {/* IMAGE */}
        <div className="w-[550px] h-[520px] rounded-3xl border-4 bg-white border-[#F234A0] shadow-xl relative overflow-hidden group mt-6">
          <img
            src={asset.SaloniPic3}
            className="w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:blur-sm opacity-100 group-hover:opacity-0"
          />

          <img
            src={asset.SaloniPic4}
            className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:blur-0"
          />

          <div className="absolute top-6 left-6 rounded-[20px] py-1.5 px-[35px] bg-[#C3FF40] opacity-100 group-hover:opacity-0 transition-all duration-500">
            <span className="font-freehand text-[18px] text-[#0A0A0A]">
              Hover over to see the real me
            </span>
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex flex-col w-full md:w-[520px] gap-10 text-center md:text-left items-center md:items-start">
          <span className="font-urbanist font-semibold text-[50px] leading-[50px] text-[#0A0A0A]">
            and this is my story...
          </span>

          <div>
            <p className="font-urbanist text-[26px] leading-9 text-[#0A0A0A] max-w-[520px]">
              I didn’t plan to become a designer, I just wanted to understand
              why people feel the way they do.
              <br /> Somewhere between curiosity and chaos, I found UX, a space
              where emotions and logic could finally coexist.
              <br /> Now, every design I create begins with a question:
              <br />
              How do I make this feel a little lighter for someone?
              <br /> Because good design isn’t loud, it simply listens.
            </p>

            <div className="w-[520px] h-16 bg-[#FAF5FF] border-l-4 border-[#AD46FF] rounded-tr-[14px] rounded-br-[14px] mt-3 shadow-md flex items-center pl-7 pr-6">
              <span className="font-urbanist font-semibold italic text-[16px] leading-6 text-[#AD46FF]">
                "Design that doesn't consider emotions is just decoration."
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[551px] h-[60px] top-[4105px] left-[455px] rotate-0 mt-4">
        <span className="font-freehand font-regular text-[24px] leading-[30px] tracking-normal text-center text-[#0A0A0A]">
          And when I’m not designing for screens, I’m out there living stories
          that somehow find their way back into my work.
        </span>
      </div>
    </div>
  );
};

export default About;
