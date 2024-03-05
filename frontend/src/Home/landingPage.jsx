import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

const LandingPage = () => {

    useEffect(()=>{
        gsap.to('.txt h1 ', {
           y:1,
           duration: 1,
           ease:"power2",
           stagger: 0.1,
        }),
        gsap.to('.landingmain', {
          height:'90vh',
          delay:1.5,
          duration: 1.2,
          ease:"power2",
    })
  },[])
  return (
    <div className='landingmain h-[100vh] relative w-[100vw]'>
        <img className=' brightness-75 w-full h-full object-cover' src="home.jpg" alt="" />
        <div className="txt h-full w-full text-white lg:text-[8vw] text-[15vw] font-semibold absolute z-10 top-0 flex  justify-center">
        <div className=' lg:h-[8vw] h-[14vw] mt-[40vh] flex gap-1 overflow-hidden leading-none'><h1 className='translate-y-full '>P</h1><h1 className='translate-y-full leading-none'>G</h1><h1 className='translate-y-full leading-none'>W</h1><h1 className='translate-y-full leading-none'>A</h1><h1 className='translate-y-full leading-none'>L</h1><h1 className='translate-y-full leading-none'>A</h1></div>
        </div>
    </div>
  )
}

export default LandingPage