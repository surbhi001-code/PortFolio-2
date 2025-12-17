import React from "react";
import { asset } from "../assets/asset";

const Hero = () => {
  return (
    <div className="w-full flex justify-center pt-20">
      <div className="w-[886px] h-[557px] relative">
        <div
          className="absolute top-0 left-[46px] w-[156.31px] h-[170.15px] 
        rounded-3xl rotate-[4.94deg] opacity-30 blur-[128px] 
        bg-linear-to-r from-[#DAB2FF] to-[#FDA5D5]"
        ></div>

        <img
          src={asset.profile}
          className="absolute -top-2.0 left-[58px] w-[132px] h-[132px] 
          rounded-[1000px] border-2 border-[#F234A0] object-cover "
        />
        <div className="absolute top-[110px] left-[209px] w-[116px]">
          <img src={asset.arrow} className="absolute -left-6 -top-3 w-5" />
          <div
            className="w-[103px] h-6 border border-[#0A0A0A] bg-[#AD46FF] 
          flex items-center justify-center mt-2.5 "
          >
            <p className="font-roboto font-semibold text-[14px] text-white">
              Saloni Agarwal
            </p>
          </div>
        </div>
        <p
          className="absolute top-3 left-[235px] font-freehand 
        w-[495px] h-20 text-[30px] leading-10 text-[#0A0A0A]"
        >
          I've seen how easy it is for design to lose its softness in the chase
          for perfection.
        </p>
        <div className="absolute top-[168px] left-[83px] w-[807px]">
          <p className="font-urbanist font-medium text-[44px] leading-[60px] text-[#0A0A0A]">
            <span className="font-semibold italic text-[50px]">Hi,</span>
            I'm Saloni 👋, a designer who believes empathy belongs in every
            interaction. I design for users and their mental well-being,
            building experiences that make people feel seen, calm, and quietly
            <span className="relative inline-block">
              understood.
              <img
                src={asset.vector}
                className="absolute top-[55%] left-[37%] -translate-x-1/2 -translate-y-1/2 w-[130%] max-w-none h-auto object-contain -z-10 pointer-events-none"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
