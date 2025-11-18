import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Resume from "/src/assets/pdf/Saurabh CV.pdf"

function Header() {
  return (
    <div className='fixed w-full z-50 p-14 xl:p-14 lg:p-10 md:p-10 min-[320px]:py-7 min-[320px]:px-5 flex items-center justify-end '>
        <a href={Resume} download="Saurabh CV.pdf" className='bg-black px-7 py-2 md:px-7 md:py-2 min-[320px]:py-1 min-[320px]:text-xs min-[320px]:px-3 rounded-full border-4 lg:text-base hover:bg-gray-500 2xl:text-xl'>Hire me</a>
        <HiDotsVertical className='lg:text-3xl min-[320px]:text-xl lg:ml-2 min-[320px]:ml-0'/> 
    </div>
  )
}

export default Header

