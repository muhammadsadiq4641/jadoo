import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <>
      <div className=" pe-8 flex flex-col items-center justify-center">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="pb-10">
              <h1 className="text-[#5E6282] text-lg font-semibold uppercase">
                Testimonials
              </h1>
              <h2 className="font-Volkhov text-[#14183E] xl:text-6xl text-2xl font-extrabold">
                What people say about Us.
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-[#5E6282] text-lg font-semibold uppercase">
                Testimonials
              </h1>
              <h2 className="font-Volkhov text-[#14183E] text-5xl font-extrabold">
                What people say about Us.
              </h2>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="text-[#5E6282] text-lg font-semibold uppercase">
                Testimonials
              </h1>
              <h2 className="font-Volkhov text-[#14183E] text-5xl font-extrabold">
                What people say about Us.
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
