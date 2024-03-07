import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Navigation} from "swiper/modules"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { PGPageSlider } from '../Data/data';
import Card from '../Components/card';
import Footer from '../Components/footer';

const PG = () => {
  return (
    <div  className="w-full relative">
      <h1 className='text-5xl lg:text-[4vw] font-bold absolute z-10 text-red-800 origin-center lg:left-[48%] left-[44%] lg:top-[15vh] top-[10vh] text-center'>PG</h1>
     <Swiper
          modules={[Autoplay,Navigation]}
            navigation
            slidesPerView={3}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="w-full  lg:mt-20 mt-16 lg:h-[35vh] h-[25vh]  overflow-hidden"
          >
            {PGPageSlider?.map((path) => (
              <SwiperSlide>
                <img src={path} alt="N/a" className="w-full h-full object-cover m-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        <div className="flex flex-col items-center bg-slate-50">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
         
        </div>
        <Footer/>
         
    </div>
  )
}

export default PG