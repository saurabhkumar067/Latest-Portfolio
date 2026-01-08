import React from 'react'
import Video from "../assets/video/laptop.mp4"

function Page3() {
  return (
    <div className='h-screen xl:h-screen lg:h-[90vh] md:h-[80vh] sm:h-[50vh] min-[320px]:h-[30vh] min-[320px]:mb-8 md:mb-0 relative bg-white flex justify-center items-center'>
      <video loop muted autoPlay className='z-10 2xl:h-2/3' src={Video}></video>
      {/* https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4 */}

     </div>
  )
}

export default Page3;