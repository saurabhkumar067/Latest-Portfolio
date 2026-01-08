import React from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

function Page7() {
  return (
    <div className="h-[135vh] 2xl:h-[115vh] min-[1360px]:h-[140vh] xl:h-[150vh] lg:h-[140vh] md:h-screen sm:h-[120vh] min-[425px]:h-[115vh] p-3 lg:p-3 min-[320px]:p-2 bg-white min-[320px]:h-[110vh]">
      <div className="h-full w-full shadow-neutral-900 shadow-md bg-black rounded-[35px] overflow-hidden relative">
        <img
          className="relative left-1/2 right-1/2 transform -translate-x-1/2 translate-y-[7%] object-cover lg:h-[90%] lg:top-0 md:top-[15%] md:h-[70%]"
          src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png"
          alt=""
        />

        <div className="w-full absolute h-full top-14 2xl:p-12 2xl:top-10 xl:top-14 lg:top-10 p-20 xl:p-20 lg:p-10  md:p-10 min-[320px]:p-5">
          <div className="font absolute uppercase text-[16vw] leading-[14vw] lg:top-0 tracking-wide font-[anzo4] top-0 md:-top-6 min-[320px]:-top-5">
            <h1 className="text-[#9b9b9b]">TURNING</h1>
            <h1 className="">IDEAS</h1>
          </div>
          <div className=" font absolute uppercase text-end right-16 2xl:right-12 md:right-16 min-[320px]:right-4 text-[15vw] leading-[14vw] tracking-wide font-[anzo4] top-0 md:-top-6 min-[320px]:-top-5 lg:top-0">
            <h1 className="">into</h1>
            <h1 className="text-right">reality</h1>
          </div>
          <div className=" font absolute bottom-48 min-[320px]:bottom-36 lg:bottom-48 md:bottom-40 grid grid-cols-3 md:grid-cols-3 gap-6 justify-between w-[90%]  xl:w-[90%] lg:w-[92%] md:w-[90%] min-[320px]:grid-cols-1 2xl:w-[95%]">
            <div className="box ">
              <p className="text-[#9b9b9b] text-lg xl:text-lg lg:text-base md:text-sm min-[320px]:text-xs leading-6 xl:leading-6 lg:leading-5 font-[anzo5] md:leading-4">
                <span className="text-[#fafafa]">Frontend Developer with 2+ years of experience in developing scalable, pixel-perfect, and SEO-optimized web applications</span>, responsive web platforms that transform ideas into seamless projections and deliver engaging user experiences.
              </p>
              <div className="flex justify-between items-center">
                <a href="/" download="Saurabh Kumar_Internship Certificate.pdf" className="text-lg lg:text-lg min-[320px]:text-xs font-[anzo5] flex items-center gap-1">
                  Download certificate <span className="text-[#9b9b9b]"><MdOutlineFileDownload className="text-2xl"/></span>
                </a>
                <span>
                  <HiOutlineArrowSmallLeft className="bg-black rounded-full p-1 mt-2 mr-5" style={{color:"black",fontSize:"5px"}} />
                </span>
              </div>
            </div>
            <div className="box ">
              <p className="text-[#9b9b9b] text-lg xl:text-lg lg:text-base min-[320px]:text-xs leading-6 xl:leading-6 lg:leading-5 font-[anzo5] md:text-sm md:leading-4">
             
              Proficient Frontend Developer with a proven track record at Full Web Mart and PayMe FinTech Solutions,  <span className="text-[#fafafa] text-[18px] lg:text-[18px] min-[320px]:text-xs"> developing pixel-perfect, high-performance, and scalable web solutions using modern frontend frameworks and tools.</span>
              </p>
            </div>
            <div className="box ">
              <p className="text-[#fafafa] text-lg xl:text-lg lg:text-base leading-6 xl:leading-6 lg:leading-5 font-[anzo5] min-[320px]:text-xs md:text-sm md:leading-4">
                
              Looking ahead to collaborate on challenging, design-driven projects that push the boundaries of web performance, usability, and interactivity, <span className="text-[#9b9b9b]">focusing on bold visuals, smooth animations, and a modern UI to reflect the brand's creativity and professionalism.</span>
              </p>
              {/* <div className="flex justify-between items-center">
                <a href="https://contentbuzz.co/" target="_black" className="text-lg lg:text-lg min-[320px]:text-xs font-[anzo5] flex items-center gap-2">
                 Checkout Website <span className="text-[#9b9b9b]"><FaExternalLinkAlt className="text-xs"/></span>
                </a>
                <span>
                  <HiOutlineArrowSmallLeft className="bg-black rounded-full p-1 mt-2 mr-5" style={{color:"black",fontSize:"5px"}} />
                </span>
              </div> */}
              <div className="flex justify-between items-center">
                <a href="https://github.com/saurabhkumar067" target="_black" className="text-lg lg:text-lg min-[320px]:text-xs font-[anzo5] flex items-center gap-2">
                 Checkout on Github <span className="text-[#9b9b9b]"><FaExternalLinkAlt className="text-xs"/></span>
                </a>
                <span>
                  <HiOutlineArrowSmallLeft className="bg-black rounded-full p-1 mt-2 mr-5" style={{color:"black",fontSize:"5px"}} />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-24 xl:bottom-24 min-[320px]:bottom-20 uppercase font-[anzo3] text-lg lg:text-lg min-[320px]:text-sm">
            <p className="text-[#9b9b9b]">LOOKING TO HIRE?</p>
            <p className="text-[#9b9b9b] ">then please <span className="font-[anzo2] tracking-wide text-[#fafafa] cursor-pointer"><a href="http://wa.me/+918920023440" target="_black">contact me</a></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
