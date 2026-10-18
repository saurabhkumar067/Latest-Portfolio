import React from 'react'

const TiltText = React.forwardRef(function TiltText(_, ref) {
  return (
    <div ref={ref} id="tiltDiv" className="absolute top-64 lg:top-48 xl:top-60 min-[320px]:top-52 sm:top-64 2xl:top-1/2 2xl:left-[4%] 2xl:-translate-y-1/2 2xl:transform">
          <h1 className="text-6xl lg:text-6xl sm:text-5xl uppercase font-[anzo5] min-[320px]:text-3xl">
            I am <span className="text-[#4d4942c2]">DARK MODE</span>™
          </h1>
          <h1 className="text-[6vw] xl:text-[6.5vw] lg:text-[8vw] leading-[7vw] xl:leading-[6vw] lg:leading-[8vw] uppercase font-[anzo1] sm:text-[8vw] md:text-[8vw] sm:leading-[8vw] min-[320px]:text-[13vw] min-[320px]:leading-[14vw]">
          FULL STACK
          </h1>
          <h1 className="text-6xl lg:text-6xl uppercase font-[anzo5] md:text-5xl min-[320px]:text-5xl"><span className='text-2xl lg:inline-block min-[320px]:block'>DEVELOPER (AI)</span> TO HIRE</h1>
        </div>
  )
})

export default TiltText