import { asset } from "../assets/asset";

const Project = () => {
  return (
    <div className="w-full flex justify-center mt-[1050px] mb-20">
      <div className="flex flex-col w-[1198px] gap-6">
        {/* Designer Line Text */}
        <div className="w-full flex justify-center mx-auto">
          <div className="w-[600px] font-freehand font-regular text-[24px] leading-[30px] text-center text-[#0A0A0A] ">
            Every designer has those projects that remind them why they started.
          </div>
        </div>

        {/* Title */}
        <div className="w-full">
          <p className="font-urbanist font-semibold text-[36px] leading-10 text-center text-[#0A0A0A] mt-12">
            Projects That Made Me Fall (Back) in Love With UX
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-row w-full gap-8 justify-between mt-8 items-stretch">
          {/* Project 1 */}
          <div className="w-[380px] rounded-[30px] border-4 bg-white border-[#F234A0] overflow-hidden flex flex-col shadow-[4px_4px_0px_0px_#C97DFF]">
            <img
              src={asset.projectImg1}
              className="w-full h-[230px] object-cover  border-b border-[#F234A0]"
              alt="Project 1"
            />

            <div className="p-5 flex flex-col grow">
              <h1 className="font-urbanist font-semibold text-[22px] text-[#0A0A0A] leading-tight">
                Mental Wellness App Concept
              </h1>
              <p className="font-urbanist text-[16px] text-[#4A5565] mt-3 leading-relaxed">
                A holistic approach to mental health combining journaling,
                empathy, and AI support.
              </p>

              <div className="grow"></div>

              <div className="bg-[#008D00] w-full max-w-[90%] mx-auto rounded-full py-2 px-4 mt-4">
                <p className="font-arimo text-[13px] text-center text-white font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Helping users find balance within
                </p>
              </div>

              <div className="flex flex-row justify-center items-center gap-2 mt-4 mb-1">
                <a
                  href="https://www.behance.net/gallery/234645797/Mental-Health-Project"
                  className="font-arimo font-regular text-[16px] text-[#AD46FF] underline decoration-[#AD46FF]/30"
                >
                  View Case Study
                </a>
                <img src={asset.rightArrow} className="w-4 h-4" alt="" />
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-[380px] rounded-[30px] border-4 bg-white border-[#F234A0] overflow-hidden flex flex-col shadow-[4px_4px_0px_0px_#C97DFF]">
            <img
              src={asset.projectImg2}
              className="w-full h-[230px] object-cover  border-b border-[#F234A0]"
              alt="Project 2"
            />

            <div className="p-5 flex flex-col grow">
              <h1 className="font-urbanist font-semibold text-[22px] text-[#0A0A0A] leading-tight">
                Together Apart
              </h1>
              <p className="font-urbanist text-[16px] text-[#4A5565] mt-3 leading-relaxed">
                A heartfelt space that blends journaling, empathy, and AI to
                keep couples close across the distance.
              </p>

              <div className="grow"></div>

              <div className="bg-[#008D00] w-full max-w-[90%] mx-auto rounded-full py-2 px-4 mt-4">
                <p className="font-arimo text-[13px] text-white text-center font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Helping couples feel close, even miles apart
                </p>
              </div>

              <div className="flex flex-row justify-center items-center gap-2 mt-4 mb-1">
                <a
                  href="https://www.behance.net/gallery/234642931/Together-Apart"
                  className="font-arimo font-regular text-[16px] text-[#AD46FF] underline decoration-[#AD46FF]/30"
                >
                  View Case Study
                </a>
                <img src={asset.rightArrow} className="w-4 h-4" alt="" />
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-[380px] rounded-[30px] border-4 bg-white border-[#F234A0] overflow-hidden flex flex-col shadow-[4px_4px_0px_0px_#C97DFF]">
            <img
              src={asset.projectImg3}
              className="w-full h-[220px] object-cover border-b border-[#F234A0] scale-110"
              alt="Project 3"
            />

            <div className="p-5 flex flex-col grow mt-1.5">
              <h1 className="font-urbanist font-semibold text-[22px] text-[#0A0A0A] leading-tight">
                Attendance Not Required
              </h1>
              <p className="font-urbanist text-[16px] text-[#4A5565] mt-3 leading-relaxed">
                A mindful system that values emotional well-being as much as
                attendance.
              </p>

              <div className="grow"></div>

              <div className="bg-[#008D00] w-full max-w-[90%] mx-auto rounded-full py-2 px-4 mt-4">
                <p className="font-arimo text-[13px] text-center text-white font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Designing balance between learning and life
                </p>
              </div>

              <div className="flex flex-row justify-center items-center gap-2 mt-4 mb-1">
                <a
                  href="https://www.behance.net/gallery/226097385/Attendance-Not-Required-to-Dream"
                  className="font-arimo font-regular text-[16px] text-[#AD46FF] underline decoration-[#AD46FF]/30  "
                >
                  View Case Study
                </a>
                <img src={asset.rightArrow} className="w-4 h-4" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* --- VIEW MORE BUTTON --- */}
        <div className="flex flex-row w-[145px] h-12 rounded-[30px] border border-[#AD46FF80] items-center justify-center mx-auto py-[9px] px-3 gap-2.5 bg-[#FFFFFF] shadow-[5px_5px_20px_0px_#0000001A] mt-12">
          <a
            href="https://www.behance.net/UXsaloniagrawal"
            className="w-auto h-[30px] flex items-center"
          >
            <span className="font-urbanist font-semibold text-base tracking-normal underline decoration-solid underline-offset-0 decoration-1 text-[#0A0A0A] decoration-[#0A0A0A]/30">
              View More
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
