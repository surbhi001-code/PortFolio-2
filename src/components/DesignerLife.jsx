import React, { useEffect, useState, useRef } from "react";
import { asset } from "../assets/asset";

const DesignerLife = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false); // New state to handle the 5-sec pause
  const sectionRef = useRef(null);

  const slides = [
    {
      img: asset.Image1,
      text: "Currently crafting fintech experiences that don’t give users financial anxiety. Designing smoother flows, calmer screens, and microinteractions that almost feel like therapy (for both users and me).",
    },
    {
      img: asset.Image2,
      text: "Exploring how digital spaces in universities can nurture mental health instead of adding stress. Working on ways to make help more accessible, less intimidating, and a little more human.",
    },
    {
      img: asset.Image3,
      text: "A poetic dive into the city’s heart and nostalgia, because good storytelling, whether in design or literature, always begins with empathy.",
    },
  ];

  // Observer to start animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Main Animation Loop
  useEffect(() => {
    // Stop animation if we haven't started OR if we are currently waiting for the 5-sec reset
    if (!startAnimation || isWaiting) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          // Check if we are at the last slide
          if (currentIndex === slides.length - 1) {
            setIsWaiting(true); // Trigger the wait state
            return 100;
          }
          // Move to next slide
          setCurrentIndex((prev) => prev + 1);
          return 0;
        }
        return prevProgress + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [currentIndex, startAnimation, isWaiting]); // Added isWaiting to dependencies

  // 5-Second Reset Timer
  useEffect(() => {
    if (isWaiting) {
      const timer = setTimeout(() => {
        // Reset everything to the beginning
        setCurrentIndex(0);
        setProgress(0);
        setIsWaiting(false); // Resume animation
      }, 5000); // 5000ms = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isWaiting]);

  return (
    <div ref={sectionRef} className="w-full flex justify-center">
      <div className=" absolute w-[454px] h-[60px] top-[818px] left-[493px]">
        <p className="font-freehand font-regular text-[30px] leading-[60px] tracking-normal text-[#0A0A0A]">
          Let’s scroll through my little design story,
        </p>
      </div>
      <div className="absolute w-[64.28px] h-[58.9px] top-[868px] left-[830px] rotate-[-8.96deg]">
        <img src={asset.frame} alt="" />
      </div>

      <div className=" absolute w-[1124px] h-[796px] top-[960px] left-[158px] pt-[81px] pr-[91px] pb-20 pl-[91px] bg-[#FFFFFF]">
        <div className="w-[942px] h-10">
          <p className="font-urbanist font-semibold text-[36px] tracking-normal text-[#0A0A0A] leading-10 ">
            Meanwhile, In My Designer Life...
          </p>
        </div>
        <div className="absolute w-[252.43px] h-[90px] -left-30 -rotate-[7.91deg]">
          <p className=" mt-3.5 text-center font-freehand font-regular text-[24px] leading-[30px] tracking-normal text-[#0A0A0A]">
            Before we get too serious, here’s what I’ve been up to lately
          </p>
          <div className=" ml-23 w-[77.54px] h-[45.12px] top-[1185px] left-[143px] rotate-360">
            <img src={asset.arrow1} alt="" />
          </div>
        </div>

        <div className="flex flex-row w-[942px] h-[427px] gap-[50px] items-start">
          <div className="mt-15 top-[960px] left-[158px]">
            <div className="w-[457px] h-[426px] rounded-[30px] border-4 border-[#F134A2] overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src={slides[currentIndex].img}
                alt="Slide"
              />
            </div>
          </div>

          <div className="w-[435px] mt-28 flex flex-col gap-8">
            <div
              className={`w-[435px] transition-all duration-700 ease-in-out ${
                currentIndex === 0 ? "-translate-y-2" : "translate-y-0"
              }`}
            >
              <p className="font-urbanist font-semibold text-[20px] leading-10 tracking-normal text-[#0A0A0A]">
                1. UI/UX Designer @Ryvo
              </p>
              <div className="relative w-[435px] h-[3px] mt-3">
                <img
                  src={asset.line}
                  className="absolute inset-0 w-full h-full"
                  alt="line"
                />
                <div
                  className="absolute inset-0 bg-[#C97DFF] transition-all duration-200 ease-linear"
                  style={{
                    width:
                      currentIndex === 0
                        ? `${progress}%`
                        : currentIndex > 0
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  currentIndex === 0
                    ? "max-h-[200px] opacity-100 mt-5"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="w-[421px] font-urbanist font-semibold text-[16px] leading-[22px] tracking-normal text-[#00000099]">
                  {slides[0].text}
                </p>
              </div>
            </div>

            <div
              className={`w-[435px] transition-all duration-700 ease-in-out ${
                currentIndex === 1 ? "-translate-y-2" : "translate-y-0"
              }`}
            >
              <p className="font-urbanist font-semibold text-[20px] leading-[30px] tracking-normal text-[#000000]">
                2. Designing for Mental Well-being in Indian Universities
              </p>
              <div className="relative w-[435px] h-[3px] mt-5">
                <img
                  src={asset.line}
                  className="absolute inset-0 w-full h-full"
                  alt="line"
                />
                <div
                  className="absolute inset-0 bg-[#C97DFF] transition-all duration-200 ease-linear"
                  style={{
                    width:
                      currentIndex === 1
                        ? `${progress}%`
                        : currentIndex > 1
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  currentIndex === 1
                    ? "max-h-[200px] opacity-100 mt-5"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="w-[421px] font-urbanist font-semibold text-[16px] leading-[22px] tracking-normal text-[#00000099]">
                  {slides[1].text}
                </p>
              </div>
            </div>

            <div
              className={`w-[435px] transition-all duration-700 ease-in-out ${
                currentIndex === 2 ? "-translate-y-2" : "translate-y-0"
              }`}
            >
              <p className="font-urbanist font-semibold text-[20px] leading-10 tracking-normal text-[#000000]">
                3. Reading Beloved Delhi by Saif Mahmood
              </p>
              <div className="relative w-[435px] h-[3px] mt-5">
                <img
                  src={asset.line}
                  className="absolute inset-0 w-full h-full"
                  alt="line"
                />
                <div
                  className="absolute inset-0 bg-[#C97DFF] transition-all duration-200 ease-linear"
                  style={{
                    width: currentIndex === 2 ? `${progress}%` : "0%",
                  }}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  currentIndex === 2
                    ? "max-h-[200px] opacity-100 mt-5"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <p className="w-[406px] font-urbanist font-semibold text-[16px] leading-[22px] tracking-normal text-[#00000099]">
                  {slides[2].text}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-[451px] w-44 h-12 rounded-[30px] border flex justify-center items-center bg-[#FFFFFF] border-[#C97DFF80] shadow-[5px_5px_20px_0px_#0000001A] cursor-pointer hover:bg-gray-50 transition-colors">
          <a
            href="#about"
            className="font-urbanist font-semibold text-[16px] leading-4 tracking-normal text-[#000000]"
          >
            <span>Read More About Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignerLife;
