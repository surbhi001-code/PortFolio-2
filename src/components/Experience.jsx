import React from "react";
import { asset } from "../assets/asset";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center mt-32 mb-20 px-4 " id="work">

      {/* ------ TOP SECTION ------ */}
      <div className="relative w-full max-w-[990px] flex flex-col items-center">

        {/* VECTOR BEHIND HEADING (responsive left positioning) */}
        <img
          src={asset.vector4}
          className="w-[150px] sm:w-[180px] md:w-[200px] absolute -top-10 -left-4 sm:-left-10 md:-left-28 z-0 opacity-90"
        />

        {/* MAIN HEADING */}
        <h2 className="font-urbanist font-bold text-[28px] sm:text-[32px] md:text-[36px] text-center text-[#0A0A0A] w-full z-10 relative">
          The work chapters that made me a better designer
        </h2>

        {/* HANDWRITTEN TEXT */}
        <p className="font-freehand text-[18px] sm:text-[22px] md:text-[24px] -rotate-6 mt-6 text-[#0C0C0C] z-20 relative
          -ml-[230px] sm:-ml-[550px] md:-ml-[1150px] -top-[35px] md:-top-[45px]">
          Have been designing <br /> since my past 3 years
        </p>
      </div>

      {/* ------- RESPONSIVE CARDS ------- */}
      <div className="flex flex-col gap-8 mt-6 w-full items-center">

        {/* CARD COMPONENT (Reusable styling) */}
        {[
          {
            role: "Co-Founder",
            date: "Feb 2024 - Present",
            company: "Stickman Studios",
            text: [
              "Revived agency activity by leading 5+ projects across branding, UI/UX, and visual identity, expanding Stickman's portfolio.",
              "Directed collaboration between team members and clients, improving project delivery accuracy by 30%.",
              "Expanded services into new domains, ensuring consistent design quality across all projects and boosting client retention.",
            ],
            height: "h-auto",
          },
          {
            role: "UX/UI Designer",
            date: "Oct 2025 - Present",
            company: "Ryvo Technologies Pvt. Ltd.",
            text: [
              "Currently working as a UX/UI Designer at Ryvo.",
              "Building the brand from scratch including logo, app design, website, and marketing visuals.",
            ],
            height: "h-auto",
          },
          {
            role: "UX/UI Designer",
            date: "Jan 2025 - Jun 2025",
            company: "Sabjiwala - BFS",
            text: [
              "Headed the end-to-end design for the B2C quick-commerce application, ensuring seamless usability across web and mobile platforms.",
              "Pitched and defined app implementation strategy, enabling scaling from 1 platform to multiple platforms.",
              "Built a responsive design system that reduced developer rework by 20%.",
              "Partnered with developers and stakeholders to align UI with backend logic and user needs.",
            ],
            height: "h-auto",
          },
          {
            role: "Product Designer",
            date: "Oct 2024 - Dec 2024",
            company: "Leather Village",
            text: [
              "Joined as a Graphic Designer and quickly upskilled into product photography, editing, and post-processing.",
              "Delivered 100% of visuals on time, ensuring crucial assets for product shipments.",
              "Supported the brand's pipeline from product design to social media and ad campaigns.",
            ],
            height: "h-auto",
          },
          {
            role: "Graphic Designer",
            date: "Feb 2024 - Apr 2024",
            company: "Kavadea",
            text: [
              "Designed packaging, tags, and branding assets, strengthening the brand's identity in the fashion market.",
              "Created storytelling-driven visuals enhancing customer engagement.",
            ],
            height: "h-auto",
          },
          {
            role: "Graphic Designer",
            date: "Aug 2022 - Feb 2024",
            company: "NOCIW",
            text: [
              "Designed illustrations and social media graphics for a growing app-based startup.",
              "Contributed to early UI/UX ideation and design tasks.",
              "Ensured brand consistency across all visual touchpoints.",
            ],
            height: "h-auto",
          },
        ].map((item, index) => (
          <div key={index} className="relative w-full max-w-[990px]">
            {/* Outer green border */}
            <div className="absolute inset-0 rounded-[20px] border-[3px] border-[#AD46FF] ring-[3px] ring-[#05DF72]"></div>

            {/* Main card */}
            <div className="relative rounded-[20px] border-[3px] border-[#AD46FF] bg-white p-6 sm:p-8">

              {/* Top row */}
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-bold text-[#0A0A0A]">
                  {item.role}
                </h3>
                <span className="text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#AD46FF]">
                  {item.date}
                </span>
              </div>

              <p className="text-[22px] sm:text-[24px] md:text-[26px] text-[#4A5565] mt-1">
                {item.company}
              </p>

              {/* Bullet Text */}
              <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#4A5565] mt-4 leading-[26px] w-full">
                {item.text.map((line, i) => (
                  <span key={i}>
                    • {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
