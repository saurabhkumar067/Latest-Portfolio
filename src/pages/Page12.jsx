import React from 'react'

function Page12() {
  return (
    <div className='relative h-[140vh] lg:h-[140vh] md:h-screen sm:h-[80vh] min-[320px]:h-[40vh] overflow-hidden'>
        <div className='bg-no-repeat  absolute bg-[50%_5%] bg-cover h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg/v1/fill/w_1349,h_1038,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg)]' style={{backgroundAttachment: "fixed",}}></div>
        <img className='absolute  object-cover z-30 w-full h-full lg:h-full ' src="https://static.wixstatic.com/media/f1c650_710941ddfbe8422c9739a586a079bbe6~mv2.png/v1/fill/w_1349,h_1038,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png" alt="" />
    </div>
  )
}

export default Page12;
