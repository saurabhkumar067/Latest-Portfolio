import React from 'react'

function Page9() {
  return (
    <div className='h-screen p-3 lg:p-3 min-[320px]:p-2 sm:h-screen min-[320px]:h-[85vh] bg-white'>
    <div className='h-full  text-center md:text-center w-full shadow-neutral-900 shadow-md bg-black rounded-[35px] overflow-hidden relative'>

      <video autoPlay muted loop className='absolute -top-12 xl:top-0 lg:top-0 w-full h-full lg:h-full min-[320px]:h-[110%] object-cover' src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/720p/mp4/file.mp4"></video>
      <div className='absolute w-full h-full px-5 flex flex-col justify-evenly items-center'>
            <div className='min-[320px]:text-center'>
                <h1 className='uppercase text-[12vw] lg:text-[12vw] min-[320px]:text-[25vw] leading-[8.7vw] lg:leading-[8.7vw] min-[320px]:leading-[18vw] font-[anzo4] tracking-wide sm:text-[20vw] sm:leading-[14vw] min-[425px]:text-start text-center'>Personal</h1>
                <p className='text-lg sm:text-lg min-[320px]:text-base text-[#9b9b9b] font-[anzo2]'>Punctuality, Creative, Focused</p>
            </div>
            <div className='min-[320px]:text-center'>
                <h1 className='uppercase text-[12vw] lg:text-[12vw] min-[320px]:text-[25vw] leading-[8.7vw] lg:leading-[8.7vw] min-[320px]:leading-[18vw] font-[anzo4] tracking-wide sm:text-[20vw] sm:leading-[14vw] min-[425px]:text-start text-center'>Professional</h1>
                <p className='text-lg text-[#9b9b9b] font-[anzo2]'>JavaScript, React.js, Next.js, Gsap</p>
            </div>
            <div className='min-[320px]:text-center'>
                <h1 className='uppercase text-[12vw] leading-[8.7vw] lg:text-[12vw] min-[320px]:text-[25vw]  lg:leading-[8.7vw] min-[320px]:leading-[18vw] font-[anzo4] tracking-wide sm:text-[20vw] sm:leading-[14vw]  text-center'>Additional</h1>
                <p className='text-lg text-[#9b9b9b] font-[anzo2]'>HTML, CSS, TailwindCSS, WordPress, Shopify</p>
            </div>
        </div>

    </div>
  </div>
  )
}

export default Page9