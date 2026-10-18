import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import DSucceedLogo from "../assets/image/dsucceedlearners-logo.png";
import PaymeLogo from "../assets/image/payme logo.png";
import ProjectCACALogo from "../assets/image/projectCACA logo.jpg";

gsap.registerPlugin(ScrollTrigger);

// [media query, scroll start, scroll end]
const BREAKPOINTS = [
  ["(min-width: 1536px)", "top 70%", "top -270%"],
  ["(min-width: 1440px) and (max-width: 1535.98px)", "top 70%", "top -300%"],
  ["(min-width: 1280px) and (max-width: 1439.98px)", "top 70%", "top -350%"],
  ["(min-width: 1024px) and (max-width: 1279.98px)", "top 70%", "top -270%"],
  ["(min-width: 768px) and (max-width: 1023.98px)", "top 50%", "top -180%"],
  ["(min-width: 640px) and (max-width: 767.98px)", "top 50%", "top -150%"],
  ["(min-width: 320px) and (max-width: 639.98px)", "top 70%", "top -10%"],
];

const WORDS = ["IMPACTFUL", "DESIGN", "IS THE", "DESIGN", "THAT", "WORKS!"];

function Page2() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    BREAKPOINTS.forEach(([query, start, end]) => {
      mm.add(query, () => {
        gsap.from(".rotateText", {
          transform: "rotateX(-90deg)",
          opacity: 0,
          duration: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".rotateText",
            start,
            end,
            scrub: true,
          },
        });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div id="section2" className=" text-center pt-5 px-5 text-black">
      <h3 className="text-[#6a6a6a] lg:text-lg sm:text-base text-lg md:text-base min-[320px]:text-xs font-[anzo3]">
        ©{" "}
        <a
          href="https://saurabhkumar.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          saurabhkumar.vercel.app
        </a>{" "}
        2026 | designed and developed
      </h3>
      {WORDS.map((word, i) => (
        <div
          key={i}
          className={
            i === 0
              ? "rotateText mt-20 xl:mt-20 lg:mt-10 min-[320px]:mt-10"
              : "rotateText"
          }
        >
          <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
            {word}
          </h1>
        </div>
      ))}
      <div className="flex justify-center items-center scale-50 sm:gap-20 min-[320px]:gap-10">
        <img
          className="w-1/4 md:w-1/6 sm:w-2/5 min-[320px]:w-2/3"
          src={DSucceedLogo}
          alt="D Succeed Learners"
        />
        <img
          className="w-1/4 md:w-1/4 sm:w-2/5 min-[320px]:w-2/3"
          src={PaymeLogo}
          alt="PayMe"
        />
        <img
          className="w-1/6 md:w-1/6 sm:w-2/6 min-[320px]:w-2/5"
          src={ProjectCACALogo}
          alt="Project CACA"
        />
      </div>
      <div className="relative h-[2px] w-1/4 sm:w-1/3 my-7 xl:my-7 min-[425px]:my-4 left-1/2 -translate-x-1/2 bg-black min-[320px]:w-2/4 min-[320px]:my-2"></div>
    </div>
  );
}

export default Page2;
