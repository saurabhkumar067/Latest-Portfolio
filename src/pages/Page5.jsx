import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Page5() {
  gsap.registerPlugin(ScrollTrigger);
  if(window.innerWidth>=1536){
    useGSAP(() => {
      gsap.from(".rotateText1", {
        transform: "rotateX(-90deg)",
        opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText1",
        start: "top 70%",
        end: "top -270%",
        scrub: true,
      },
    });
  });
}else if(window.innerWidth>=1440){
    useGSAP(() => {
      gsap.from(".rotateText1", {
        transform: "rotateX(-90deg)",
        opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText1",
        
        start: "top 70%",
        end: "top -300%",
        scrub: true,
      },
    });
  });
}else if(window.innerWidth>=1280){
    useGSAP(() => {
      gsap.from(".rotateText1", {
        transform: "rotateX(-90deg)",
        opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText1",
        
        start: "top 70%",
        end: "top -350%",
        scrub: true,
      },
    });
  });
}else if(window.innerWidth>=1024){
    useGSAP(() => {
      gsap.from(".rotateText1", {
        transform: "rotateX(-90deg)",
        opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText1",
        start: "top 70%",
        end: "top -250%",
        scrub: true,
      },
    });
  });
}else if(window.innerWidth>=768){
  useGSAP(() => {
    gsap.from(".rotateText1", {
      transform: "rotateX(-90deg)",
      opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".rotateText1",
      
      start: "top 50%",
      end: "top -200%",
      scrub: true,
    },
  });
});
}else if(window.innerWidth>=640){
  useGSAP(() => {
    gsap.from(".rotateText1", {
      transform: "rotateX(-90deg)",
      opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".rotateText1",
      
      start: "top 50%",
      end: "top -140%",
      scrub: true,
    },
  });
});
}else if(window.innerWidth>=320){
  useGSAP(() => {
    gsap.from(".rotateText1", {
      transform: "rotateX(-90deg)",
      opacity: 0,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".rotateText1",
      
      start: "top 70%",
      end: "top -50%",
      scrub: true,
    },
  });
});
}
  return (
    <div id="section3" className="bg-white text-center p-5 text-black">
      
      <div id="" className="rotateText1 ">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        Bringing 
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        ideas 
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        to
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        life
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        with
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="uppercase text-[40vw] leading-[33vw] text-black font-[anzo4]">
        creativity!
        </h1>
      </div>
    </div>
  );
}

export default Page5;
