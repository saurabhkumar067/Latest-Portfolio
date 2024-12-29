import React from 'react'

function Page8() {
  return (
    <div className='relative h-screen lg:h-screen min-[320px]:h-[42vh] md:h-[60vh] overflow-hidden'>
        <div className='bg-no-repeat absolute bg-center bg-cover h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg/v1/fill/w_1349,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg)]' style={{backgroundAttachment: "fixed",}}></div>
        <img className='absolute  object-cover z-30 w-full h-full' src="https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1349,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png" alt="" />
    </div>
  )
}

export default Page8
