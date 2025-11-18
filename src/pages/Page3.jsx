import React from 'react'
import Video from "../assets/video/laptop.mp4"

function Page3() {
  return (
    <div className='h-screen xl:h-screen lg:h-[90vh] md:h-[80vh] sm:h-[50vh] min-[320px]:h-[30vh] min-[320px]:mb-8 md:mb-0 relative bg-white flex justify-center items-center'>
      {/* <img className='absolute z-10 w-[68%] xl:w-[68%] lg:w-[60%] overflow-hidden' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_649,h_373,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" /> */}
     
     {/* <div className='2xl:h-[69%] min-[320px]:h-[42%] lg:h-[38%] xl:h-[48%]'> */}

      <video loop muted autoPlay className='z-10 2xl:h-2/3' src={Video}></video>
      {/* https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4 */}

      <div className='h-[1px] min-[320px]:h-[1px] w-2/3 top-[40%] lg:top-[40%] md:top-[40%] min-[320px]:top-[35%] absolute z-0 bg-black '></div>

      <div className='h-[1px] min-[320px]:h-[1px] w-4/5 top-[60%] xl:top-[60%] md:top-[55%]  absolute z-0 bg-black min-[320px]:top-[50%] 2xl:top-[55%]'></div>

      <div className='h-[1px] min-[320px]:h-[1px] w-full top-[80%] xl:top-[80%] md:top-[70%] absolute z-0 bg-black min-[320px]:top-[65%] 2xl:top-[70%]'></div>
    {/* </div> */}
     </div>
  )
}

export default Page3