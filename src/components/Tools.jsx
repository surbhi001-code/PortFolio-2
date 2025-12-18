import React from "react";
import { asset } from "../assets/asset";

const Tools = () => {
  return (
    <div className="w-full">

      {/* ---------------- SECTION 1: Tools & Tricks ---------------- */}
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col w-[1136px] gap-[60px]">

          {/* Heading */}
          <div className="w-full flex justify-center">
            <span className="font-urbanist font-bold text-[36px] leading-10 text-[#0A0A0A] text-center">
              The tools and tricks that make my ideas happen
            </span>
          </div>

          {/* Pills Wrapper */}
          <div className="flex flex-col gap-6">

            {/* Row 1 */}
            <div className="flex flex-row flex-wrap gap-4 justify-between">
              {[
                "UX Design",
                "Emotional Design",
                "User Research",
                "Interaction Design",
                "Storytelling",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row w-auto h-[68px] rounded-full
                  border-[3px] border-[#AD46FF]
                  ring-[3px] ring-[#05DF72] ring-offset-0
                  justify-center items-center px-8 bg-[#FAF5FF]"
                >
                  <span className="font-ariom whitespace-nowrap text-[22.16px] text-[#AD46FF]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-row flex-wrap gap-4 justify-between">
              {[
                "Empathy Mapping",
                "Prototyping",
                "Visual Design",
                "Design Systems",
                "Accessibility",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row w-auto h-[68px] rounded-full
                  border-[3px] border-[#AD46FF]
                  ring-[3px] ring-[#05DF72] ring-offset-0
                  justify-center items-center px-8 bg-[#FAF5FF]"
                >
                  <span className="font-ariom whitespace-nowrap text-[22.16px] text-[#AD46FF]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: Tools I Use ---------------- */}
      <section className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-[60px]">

          {/* Heading */}
          <span className="font-urbanist font-bold text-[36px] text-center text-[#0A0A0A]">
            Tools I Use
          </span>

          {/* Row 1 */}
          <div className="flex flex-row gap-[60px]">
            {[
              { src: asset.tool1, label: "Figma" },
              { src: asset.tool2, label: "Photoshop" },
              { src: asset.tool3, label: "Illustrator" },
              { src: asset.tool4, label: "Framer" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col w-[132px] gap-5">
                <img
                  src={item.src}
                  className="w-[124px] h-[124px] rounded-3xl 
                  border-[3px] border-[#AD46FF]
                  ring-[3px] ring-[#05DF72] ring-offset-0
                  p-[27px] bg-white"
                />
                <span className="text-[20px] text-center text-[#4A5565]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-row gap-[60px]">
            {[
              { src: asset.tool5, label: "HTML (Basic)" },
              { src: asset.tool6, label: "CSS (Basic)" },
              { src: asset.tool7, label: "ChatGpt" },
              { src: asset.tool8, label: "Notion" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col w-[132px] gap-[25px]">
                <img
                  src={item.src}
                  className="w-[124px] h-[124px] rounded-3xl
                  border-[3px] border-[#AD46FF]
                  ring-[3px] ring-[#05DF72] ring-offset-0
                  p-[27px] bg-white"
                />
                <span className="text-[20px] text-center text-[#4A5565]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Tools;
