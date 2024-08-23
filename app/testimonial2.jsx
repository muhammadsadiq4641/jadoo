import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import TestimonialImg from "../public/assets/testomonialimg.png";

import { Pagination, Navigation } from "swiper/modules";

const Testimonial2 = () => {
  return (
    <div className="relative w-full ">
      <Swiper
        direction="vertical"
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full sm:max-h-[500px] max-h-[150px] swiper-container"
      >
        <SwiperSlide className="text-center flex items-center justify-center h-full">
          <Image className=" h-[100px]" src={TestimonialImg} />
        </SwiperSlide>
        <SwiperSlide className="text-center flex items-center justify-center h-full">
          <Image className=" h-[100px]" src={TestimonialImg} />
        </SwiperSlide>
        <SwiperSlide className="text-center flex items-center justify-center h-full">
        <Image className=" h-[100px]" src={TestimonialImg} />

        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial2;
