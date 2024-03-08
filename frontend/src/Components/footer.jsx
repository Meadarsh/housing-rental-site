import React from 'react'
import { FaWhatsapp,FaInstagram ,FaFacebook} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='h-[25vh] text-white flex w-full lg:flex-row flex-col gap-4 lg:gap-0 items-center bg-red-950 mt-8'>
        <div className='logo lg:w-1/3  lg:h-[80%] flex items-center pl-3'>
          <h1 className=' text-3xl lg:text-[3vw]'>THEFLAT4U.com</h1>
        </div>
        <div className='logo lg:w-1/3 text-2xl lg:border-l lg:h-[80%] gap-4 flex flex-col items-center lg:items-start lg:justify-center pl-3'>
            <h1>Connect with us</h1>
            <div className='flex text-white text-3xl gap-3'>
               <a href="https://wa.me/+918652869869">
               <FaWhatsapp/>
               </a>
                <FaFacebook/>
                <FaInstagram/>
                <RiTwitterXLine/>
            </div>

        </div>
        <div className='logo lg:text-xl text-2xl lg:w-1/3 lg:border-l lg:h-[80%] flex flex-col items-center lg:items-start lg:justify-center pl-3'>
        <h1>About us</h1>
            Phone no: +918652869869
        </div>
    </div>
  )
}

export default Footer