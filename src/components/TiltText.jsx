import React from 'react'

function TiltText({refer}) {
  return (
    <div ref={refer} id="tiltDiv" className="absolute top-64 lg:top-52 min-[320px]:top-52">
          <h1 className="text-6xl xl:text-6xl lg:text-5xl sm:text-5xl uppercase font-[anzo5] md:text-4xl min-[320px]:text-3xl">
            I am <span className="text-[#4d4942c2]">DARK MODE</span>™
          </h1>
          <h1 className="text-[7vw] lg:text-[7vw] leading-[7vw] xl:leading-[7vw] lg:leading-[6vw]  uppercase font-[anzo1] sm:text-[9vw] sm:leading-[8vw] min-[320px]:text-[16vw] min-[320px]:leading-[14vw]">
          FRONTEND
          </h1>
          <h1 className="text-6xl lg:text-6xl uppercase font-[anzo5] md:text-4xl min-[320px]:text-5xl"><span className='text-2xl sm:inline-block min-[320px]:block'>DEVELOPER</span> TO HIRE</h1>
        </div>
  )
}

export default TiltText