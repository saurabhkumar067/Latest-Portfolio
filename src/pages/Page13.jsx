import React from "react";

function Page13() {
  return (
    <div className="h-screen min-[425px]:h-screen min-[320px]:h-[85vh] p-3 lg:p-3 min-[320px]:p-2 bg-white">
      <div className="h-full relative w-full rounded-[35px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-no-repeat bg-center bg-cover">
        <div className="absolute z-10 left-16 2xl:top-16 2xl:left-14 xl:left-10 lg:left-12 top-20 xl:top-10  lg:top-12 md:left-10 md:top-14 font-[anzo4] min-[320px]:top-10 min-[320px]:left-6 ">
          <h1 className="text-[15vw] xl:text-[15vw] lg:text-[13vw] min-[320px]:text-[30vw] leading-[10vw] lg:leading-[10vw] min-[320px]:leading-[20vw] tracking-wide uppercase text-[#9b9b9b] sm:text-[20vw] sm:leading-[14vw]">
            <span className="text-white">LOOKING</span> for
          </h1>

          <h1 className="text-[17vw] xl:text-[17vw] lg:text-[15vw] min-[320px]:text-[30vw] leading-[18vw] xl:leading-[18vw] lg:leading-[13vw] min-[320px]:leading-[37vw]  tracking-wide uppercase sm:text-[20vw] sm:leading-[18vw]">
            TALENT?
          </h1>

          {/* <h3 className="min-[320px]:hidden 2xl:flex min-[1360px]:mt-28 xl:mt-20 lg:block text-[20px] lg:text-[20px] md:text-[15px]  font-[anzo3] font-extralight uppercase text-[#9b9b9b] mt-20 2xl:mt-80  lg:bottom-0 md:mt-48">it is not just about solving the problem</h3> */}
        </div>
        <div className="absolute top-[56%] lg:top-[56%] md:top-[50%] left-[45%] lg:left-[45%] md:left-[40%] flex items-center min-[320px]:left-3">
          <img
            className="object-contain w-[12%]"
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
            alt=""
          />
          <div className="h-28 w-[2px] bg-white mx-10 xl:mx-10 lg:mx-8 min-[320px]:mx-4"></div>
          <div className="text-start ">
            <h3 className="text-[20px] xl:text-3xl lg:text-[20px] md:text-[14px] min-[320px]:text-[15px] font-[anzo3] font-extralight uppercase text-[#9b9b9b]">
              World service
            </h3>

            <h3 className="text-[18px] font-[anzo2] leading-[1vw] 2xl:text-xl lg:leading-[1vw] md:leading-[2vw] min-[320px]:leading-[5vw] my-2 md:my-2 min-[320px]:my-1 min-[320px]:text-[15px] xl:text-[18px] lg:text-[15px] md:text-[14px]">
              I’m ready to collaborate with you, wherever you are.
            </h3>

            <h3 className="text-[20px] 2xl:text-2xl lg:text-[20px] min-[320px]:text-[15px] font-[anzo3] font-extralight uppercase text-[#9b9b9b]">
              <a href="tel:+918920023440">+91 8920023440</a>,{" "}
              <span className="text-[14px] md:text-[14px] min-[320px]:text-[12px]">
                <a href="mailto:saurabhkumar22278@gmail.com">
                  saurabhkumar22278@gmail.com
                </a>
              </span>
            </h3>
          </div>
        </div>
        <div className="absolute right-16 font-[anzo5] bottom-10 2xl:text-2xl md:bottom-10 min-[320px]:bottom-4 uppercase lg:text-base md:text-xs min-[375px]:right-20 min-[425px]:right-28 sm:right-0 py-0 md:px-12 w-full flex justify-between items-end min-[320px]:px-0">
          <div>
            <h3 className="min-[320px]:hidden 2xl:flex  md:block text-[20px] lg:text-[20px] md:text-[15px]  font-[anzo3] font-extralight uppercase text-[#9b9b9b] ">
              it is not just about solving the problem
            </h3>

            <h3 className="min-[320px]:hidden md:block text-[18px] lg:text-[18px] md:text-[15px]  uppercase font-[anzo2] leading-[1vw] lg:leading-[1vw] md:leading-[2vw] ">
              <span className="font-[anzo3] text-[#9b9b9b]">but</span> offering
              the transformation!
            </h3>
          </div>
          <p>© 2025 saurabh kumar</p>
        </div>
      </div>
    </div>
  );
}

export default Page13;
