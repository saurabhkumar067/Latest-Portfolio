import React from "react";
import GithubLogo from "../assets/image/GitHub Logo.jfif"
import LinkedinLogo from "../assets/image/Linkedin Logo.jfif"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page1Button() {
  useGSAP(()=>{
    gsap.to("#banner img",{
      rotate:360,
      duration:3,
      repeat:Infinity,
      ease:"linear",
    })
  })
  return (
    <div className="absolute bottom-0 w-full left-0 p-10 md:p-10 flex items-end justify-between min-[320px]:px-5 min-[320px]:py-5">
      <div className="mx-10 2xl:mx-10 xl:mx-3 lg:mx-1 md:mx-0 min-[320px]:mx-0">
        <h2 className="md:text-xl sm:text-lg font-[anzo2] min-[320px]:text-xs">WEB DEVELOPMENT | UI/UX DESIGN</h2>
        <h3 className="text-lg leading-[1vw] md:leading-[1vw] sm:leading-[2vw] min-[320px]:leading-[8vw] text-[#9b9b9b] font-[anzo3] ml-[2px]">BESPOKE FREELANCE</h3>
      </div>
      <div id="banner" className="xl:w-[6%] lg:w-[7%] sm:w-[10%] space-y-4 mr-8 xl:mr-8 lg:mr-4 md:mr-2 min-[320px]:-mr-1 min-[320px]:w-[20%]">
        <a href="https://github.com/saurabhkumar067" target="_black"><img src={GithubLogo} alt="GITHUB" className="w-full rounded-full" /></a>
        <a href="https://www.linkedin.com/in/saurabhkumar-delhi/" target="_black"><img src={LinkedinLogo} alt="LINEDIN" className="mt-5 w-full rounded-full"/></a>
      </div>
    </div>
  );
}

export default Page1Button;
