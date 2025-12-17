import { React, useState } from "react";
import { asset } from "../assets/asset";

const Navbar = () => {
  const [isCopied, setIsCopied] = useState(false);

  const email = "uxsaloniagrawal@gmail.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      // Set copied state to true
      setIsCopied(true);

      // Revert back to original text after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <nav className="w-full h-[73px] bg-[#FFFFFFCC] border border-[#E5E3E3] flex justify-center">
      <div className="w-[1440px] h-[73px] bottom-[0.8px] text-center pt-[19px] pr-[251px] pb-4 pl-[588px] bg-[#FFFFFFCC] border border-[#E5E3E3]">
        <div className="w-[346px] h-10 gap-12 flex flex-row">
          <div className="flex flex-row w-[215px] h-6 gap-10 ">
            <a
              href="#work"
              className="w-[35px] h-6 font-urbanist font-normal text-[16px] leading-6 tracking-normal text-[#0A0A0A] "
            >
              Work
            </a>

            <a
              href="#about"
              className="w-[35px] h-6 font-urbanist font-normal text-[16px] leading-6 tracking-normal text-[#0A0A0A]"
            >
              About
            </a>

            <a
              href="#contact"
              className="w-[35px] h-6 font-urbanist font-normal text-[16px] leading-6 tracking-normal text-[#0A0A0A]"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col w-[135px] h-10 border border-solid rounded-full border-[#0A0A0A] item-center justify-center py-2 px-5 gap-10 bg-[#FFFFFF]">
            <a
              href="https://drive.google.com/file/d/1ypHD2o_2Is2LCVh1IHYnEFfwsQyLS6RJ/view?usp=drive_link"
              className="w-[95px] h-10 font-urbanist font-medium text-[16px] leading-6 tracking-normal text-center underline decoration-solid decoration-offset-0 decoration-1 decoration-skip-ink text-[#0A0A0A]"
            >
              View Resume
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex flex-row items-center justify-center w-[171px] h-10 rounded-full py-0 px-4 gap-2.5 bg-[#AD46FF]">
              <img
                src={asset.icon}
                alt="clipboard icon"
                className="w-3.5 h-3.5 shrink-0"
              />

              <button
                onClick={handleCopy}
                className="ml-1 font-urbanist font-medium text-[16px] leading-6 tracking-normal text-center text-[#FFFFFF] underline decoration-solid decoration-offset-0 decoration-skip-ink decoration-1 bg-transparent border-0 w-[107px] h-6 flex items-center justify-center"
              >
                {isCopied ? "Email Copied!" : "Copy my email"}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
