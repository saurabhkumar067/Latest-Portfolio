import React from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import Loading from "../assets/image/loading.png"

function Page11() {
  return (
    <div className="h-[150vh] 2xl:h-[110vh] xl:h-[110vh] lg:h-[120vh] md:h-[92vh] min-[375px]:h-[145vh] min-[320px]:h-[140vh] p-3 lg:p-3 min-[320px]:p-2 bg-white">
      <div className="h-full p-16 xl:p-16 lg:p-10 md:p-10 min-[320px]:py-8 min-[320px]:px-4 flex md:flex min-[320px]:block  justify-between w-full shadow-neutral-900 shadow-md bg-black rounded-[35px] overflow-hidden relative">
        <div className="left relative w-1/3 lg:w-1/3 min-[320px]:w-full h-full">
            <div className="uppercase tracking-wide font-[anzo4] leading-[16vw] lg:leading-[16vw] text-[20vw] lg:text-[20vw] min-[320px]:text-[40vw] min-[320px]:leading-[32vw] min-[320px]:absolute min-[320px]:z-10 md:text-[30vw] md:leading-[24vw] md:static">
                <h1>Right</h1>
                <h1 className="text-[#9b9b9b] absolute z-10 flex">fit <span className="self-end text-2xl rotate-[140deg] bg-zinc-700 rounded-full p-2 2xl:text-5xl"> <HiOutlineArrowSmallLeft /></span></h1>
            </div>
       
            <img className="absolute bottom-20 lg:bottom-28 md:right-5 md:top-[unset] min-[320px]:top-20 lg:w-full min-[320px]:-right-8 min-[320px]:w-2/3" src={Loading} alt="Loading" />

          <div className="absolute -bottom-3  uppercase font-[anzo3] text-lg 2xl:text-2xl lg:text-lg min-[320px]:text-sm">
            <p className="text-[#9b9b9b]">sounds good?</p>
            <p className="text-[#9b9b9b] ">then please <span className="font-[anzo2] tracking-wide text-[#fafafa]"><a href="mailto:saurabhkumar22278@gmail.com">email me</a></span></p>
          </div>
        </div>
        {/* <div className="right w-3/5 text-lg lg:w-3/5 min-[320px]:w-full md:static md:top-0 min-[320px]:absolute min-[320px]:top-72 min-[375px]:top-72 min-[425px]:top-80 sm:top-[41%]"> */}
       <div className="right w-3/5 text-lg lg:w-3/5 min-[320px]:w-full md:static min-[320px]:absolute min-[320px]:bottom-36 min-[425px]:bottom-20">
        <div>
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">personality</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-5 md:pr-0 2xl:text-lg">I believe in building solutions that are clean, functional, and user-friendly. collaboration and communication are at the core of every project I take on.</p>
        </div>
        <div className="2xl:my-10 lg:my-12 min-[320px]:my-8">
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">approach</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-6 md:pr-0 2xl:text-lg">Every project begins with a deep dive into its essence—balancing meticulous planning, agile adaptability, and uncompromising transparency.</p>
        </div>
        <div>
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">design</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-5 md:pr-0 2xl:text-lg">I design not just for beauty but for harmony—interfaces that marry form with function, captivating users while delivering seamless usability</p>
        </div>
        <div className="2xl:my-10 lg:my-12 min-[320px]:my-8">
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">focus</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-5 md:pr-0 2xl:text-lg">My focus is simple yet profound to empower your online identity with innovative solutions that transcend the ordinary and fulfill your ambitions.</p>
        </div>
        <div>
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">fit</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-7 md:pr-0 2xl:text-lg">The ideal solution isn’t just one-size-fits-all—it’s a bespoke creation that aligns with your unique needs, aspirations, and vision.</p>
        </div>
        <div className="2xl:my-10 lg:my-12 min-[320px]:my-8">
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">core values</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-6 md:pr-0 2xl:text-lg">Time, creativity, and expertise are my most valuable resources, and I invest them wholeheartedly in every project.</p>
        </div>
        <div>
            <h3 className="uppercase font-[anzo3] leading-6 lg:leading-6 text-[#9b9b9b] text-[18px] lg:text-[18px] min-[320px]:leading-4 2xl:text-2xl">to consider</h3>
            <p className="font-[anzo2] leading-6 mt-1 lg:text-base min-[320px]:text-xs lg:leading-6 min-[320px]:leading-4 min-[320px]:pr-9 md:pr-0 2xl:text-lg">Your online presence is more than a platform—it’s your story, your signature. Together, we’ll craft a first impression that lingers</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Page11;
