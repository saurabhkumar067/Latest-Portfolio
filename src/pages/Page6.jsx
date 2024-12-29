import React from 'react'

function Page6() {
  return (
    <div className='h-screen md:h-screen min-[320px]:h-[50vh] md:p-3 p-3 min-[320px]:p-2 bg-white'>
      <div className='h-full w-full shadow-neutral-900 shadow-md bg-black rounded-[35px] overflow-hidden relative'>
        <video autoPlay muted loop className='absolute lg:top-0 w-full h-full md:top-[2px] object-cover' src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/720p/mp4/file.mp4"></video>
        <h1 className="z-10 absolute uppercase text-[40vw] xl:text-[30vw] xl:left-16 xl:-bottom-14 md:text-[40vw] min-[320px]:text-[30vw] leading-[33vw] md:leading-[33vw] min-[320px]:leading-[27vw] min-[320px]:left-0 bottom-0 left-16 lg:left-16 md:left-10 tracking-wide font-[anzo4] min-[425px]:left-6 min-[1360px]:left-20 w-full  text-center min-[425px]:text-start">ABOUT</h1>
      </div>
    </div>
  )
}

export default Page6