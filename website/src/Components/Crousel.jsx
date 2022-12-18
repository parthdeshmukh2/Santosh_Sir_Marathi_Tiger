
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import SantoshDada1 from "../Assets/SantoshDada1.jpg";
import SantoshDada2 from "../Assets/SantoshDada2.jpg";
import SantoshDada3 from "../Assets/SantoshDada3.jpg";
import SantoshDada4 from "../Assets/SantoshDada4.jpg"
const imageArray = [
    
  SantoshDada1, SantoshDada2, SantoshDada3, SantoshDada4

]


const Crousel = () => {
  return (
    <Box w='90%' m='auto' mt='12'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {imageArray.map((elem, index)=>{
            return (
                <SwiperSlide key={index}>
                    <Image w='100%' h='500px' src={elem}/>
                </SwiperSlide>
            )

        })}
        
      
      </Swiper>
    </Box>
  )
}

export default Crousel
