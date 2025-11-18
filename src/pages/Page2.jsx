import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import PaymeLogo from "../assets/image/payme logo.png";
import ProjectCACALogo from "../assets/image/projectCACA logo.jpg";

function Page2() {
  gsap.registerPlugin(ScrollTrigger);

  if (window.innerWidth >= 1990) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",
          start: "top 70%",
          end: "top -270%",
          scrub: true,
          markers: true,
        },
      });
    });
  } else if (window.innerWidth >= 1536) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",
          start: "top 70%",
          end: "top -270%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 1440) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",
          start: "top 70%",
          end: "top -300%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 1280) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",

          start: "top 70%",
          end: "top -350%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 1024) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",

          start: "top 70%",
          end: "top -270%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 768) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",

          start: "top 50%",
          end: "top -180%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 640) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",

          start: "top 50%",
          end: "top -150%",
          scrub: true,
        },
      });
    });
  } else if (window.innerWidth >= 320) {
    useGSAP(() => {
      gsap.from(".rotateText", {
        transform: "rotateX(-90deg)",
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",

          start: "top 70%",
          end: "top -10%",
          scrub: true,
        },
      });
    });
  }

  return (
    <div id="section2" className=" text-center pt-5 px-5 text-black">
      <h3 className="text-[#6a6a6a] lg:text-lg sm:text-base text-lg md:text-base min-[320px]:text-xs font-[anzo3]">
        ©{" "}
        <a href="https://saurabhkumar.vercel.app/" target="_black">
          saurabhkumar.vercel.app
        </a>{" "}
        2025 | designed and developed
      </h3>
      <div
        id=""
        className="rotateText mt-20 xl:mt-20 lg:mt-10 min-[320px]:mt-10"
      >
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          IS THE
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          THAT
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
          WORKS!
        </h1>
      </div>
      <div className="flex justify-center items-center scale-50 gap-20">
        {/* <img className="w-1/4 md:w-1/4 sm:w-2/5 min-[320px]:w-2/3" src="src/assets/payme logo.png" alt="PayMe" /> */}
        {/* <img className="w-1/4 md:w-1/4 sm:w-2/5 min-[320px]:w-2/3" src="https://github.com/saurabhkumar067/Latest-Portfolio/blob/main/src/assets/payme%20logo.png?raw=true" alt="PayMe" /> */}
        <img
          className="w-1/4 md:w-1/4 sm:w-2/5 min-[320px]:w-2/3"
          src={PaymeLogo}
          alt="PayMe"
        />
        <img
          className="w-1/6 md:w-1/6 sm:w-2/6 min-[320px]:w-2/5"
          src={ProjectCACALogo}
          alt="PayMe"
        />
      </div>
      <div className="relative h-[2px] w-1/4 sm:w-1/3 my-7 xl:my-7 min-[425px]:my-4 left-1/2 -translate-x-1/2 bg-black min-[320px]:w-2/4 min-[320px]:my-2"></div>
    </div>
  );
}

export default Page2;
