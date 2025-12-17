import React from "react";
import { asset } from "../assets/asset";

export default function Beyond9to5() {
  const items = [
    {
      src: asset.B1,
      w: "w-[375px]",
      h: "h-[776px]",
      story:
        "You’ll find me here every week Watching, Rewatching, and Emotionally adopting movie characters.",
    },
    {
      src: asset.B2,
      w: "w-[401.96px]",
      h: "h-[776px]",
      story: "not trying to miss clicking the wonders ✨",
    },
    {
      src: asset.B3,
      w: "w-[391px]",
      h: "h-[776px]",
      story: "once did product shoots in my 9–5 era 🎞️",
    },

    {
      src: asset.B4,
      w: "w-[375px]",
      h: "h-[664px]",
      story:
        "can’t help but follow color harmony on paper too, it’s my way of bringing a little design therapy offline",
    },
    {
      src: asset.B5,
      w: "w-[375px]",
      h: "h-[663px]",
      story:
        "something about symmetry and sunlight that makes my designer brain feel at peace",
    },
    {
      src: asset.B6,
      w: "w-[390px]",
      h: "h-[663px]",
      story:
        "trying to untangle thoughts the same way i untangle this yarn, patiently, with snacks nearby",
    },

    {
      src: asset.B7,
      w: "w-[375px]",
      h: "h-[536px]",
      story:
        "part-time creativity fueled by binge-watching shows ended up creating this little chaos",
    },
    {
      src: asset.B8,
      w: "w-[401px]",
      h: "h-[536px]",
      story:
        "after 11-8, i read because escaping into stories is cheaper than therapy",
    },
    {
      src: asset.B9,
      w: "w-[391px]",
      h: "h-[536px]",
      story:
        "also great at public speaking and anchoring, basically talking, but with a mic",
    },

    {
      src: asset.B10,
      w: "w-[375px]",
      h: "h-[395px]",
      story:
        "sometimes i just walk into public events wearing something no one expects, call it my soft launch moment",
    },
    {
      src: asset.B11,
      w: "w-[401px]",
      h: "h-[395px]",
      story:
        "also guilty of collecting kewl packaging, because good design deserves shelf space too",
    },
    {
      src: asset.B12,
      w: "w-[391px]",
      h: "h-[395px]",
      story:
        "you won’t believe how big a binge-watch fan i am, or the odd places i’ve watched netflix from",
    },
  ];

  const groups = [
    items.slice(0, 3),
    items.slice(3, 6),
    items.slice(6, 9),
    items.slice(9, 12),
  ];

  const renderCard = (item, idx) => {
    const storyClass =
      "font-urbanist font-semibold text-[14px] leading-[24px] text-center px-4 text-[#FFFFFF]";

    return (
      <div
        key={idx}
        className={`relative group overflow-hidden border border-[#F234A0] shadow-md
        ${item.w} ${item.h} transition-colors duration-500`}
      >
        <img
          src={item.src}
          alt="story-img"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div
          className="absolute inset-0 border-2 border-[#F234A0] pointer-events-none 
          transition-colors duration-500 group-hover:border-transparent"
        />

        <div
          className="absolute inset-0 bg-[#000000CC] opacity-0 
          group-hover:opacity-100 transition-opacity duration-500 
          flex items-end justify-center pb-8 px-4"
        >
          <span className={storyClass}>{item.story}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex justify-center py-16">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="font-urbanist font-semibold text-4xl text-[#0A0A0A]">
            Beyond My 9–5
          </h2>
          <p className="font-urbanist italic text-xl text-[#4A5565]">
            Hover over the pictures for the story
          </p>
        </div>

        {/* GROUPS OF 3 */}
        <div className="flex flex-col w-full gap-16">
          {groups.map((group, gIndex) => (
            <div
              key={gIndex}
              className="
                w-full flex flex-wrap lg:flex-nowrap
                justify-center lg:justify-between
                items-start gap-6
              "
            >
              {group.map((item, idx) => renderCard(item, idx))}
            </div>
          ))}
        </div>

        {/* LAST PARAGRAPH FIXED & CENTERED */}
        <div className="w-full flex justify-center mt-10">
          <div className="max-w-[1073px] px-4">
            <p className="font-urbanist font-regular text-[20px] leading-[30px] text-center text-[#4A5565]">
              When I'm not designing, I'm probably analyzing character arcs,
              sipping coffee at odd hours, or pretending my movie watchlist isn't
              getting longer by the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
