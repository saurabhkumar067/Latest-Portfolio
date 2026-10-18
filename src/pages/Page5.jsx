import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// [media query, scroll start, scroll end]
const BREAKPOINTS = [
  ["(min-width: 1536px)", "top 70%", "top -270%"],
  ["(min-width: 1440px) and (max-width: 1535.98px)", "top 70%", "top -300%"],
  ["(min-width: 1280px) and (max-width: 1439.98px)", "top 70%", "top -350%"],
  ["(min-width: 1024px) and (max-width: 1279.98px)", "top 70%", "top -250%"],
  ["(min-width: 768px) and (max-width: 1023.98px)", "top 50%", "top -200%"],
  ["(min-width: 640px) and (max-width: 767.98px)", "top 50%", "top -140%"],
  ["(min-width: 320px) and (max-width: 639.98px)", "top 70%", "top -50%"],
];

const WORDS = ["Bringing", "ideas", "to", "life", "with", "creativity!"];

function Page5() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    BREAKPOINTS.forEach(([query, start, end]) => {
      mm.add(query, () => {
        gsap.from(".rotateText1", {
          transform: "rotateX(-90deg)",
          opacity: 0,
          duration: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".rotateText1",
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
    <div id="section3" className="bg-white text-center p-5 text-black">
      {WORDS.map((word) => (
        <div key={word} className="rotateText1">
          <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
            {word}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Page5;
