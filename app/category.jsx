import React from "react";
import Image from "next/image";
import CategoryIMG from "../public/assets/category-bg.png";

import RectangleRed from "../public/assets/Rectangle-red.png";
import { CategoryData } from "@/components/data";

const Category = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-xl font-bold text-[#5E6282] text-center relative">
        <Image
          draggable="false"
          className="absolute -z-10 max-md:w-20 right-0"
          src={CategoryIMG}
        />
        <p>CATEGORY</p>
        <h1 className="font-Volkhov sm:text-5xl text-2xl font-black">
          We Offer Best Services
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 content-center justify-items-center gap-14 sm:mt-40 mt-10">
        {CategoryData.map((item, index) => (
          <div key={item.id} className={`w-[267px] ${index === 1 && ""} `}>
            <div className="hover:shadow-md rounded-3xl py-8 bg-white relative hover:bg-white transition-transform duration-500 hover:scale-110 sm:hover:scale-125">
              <Image
                draggable="false"
                src={item.image}
                alt="calculated weather"
                className="mx-auto mb-8"
              />
              <h4 className="text-xl font-bold text-center mb-5">
                {item.header}
              </h4>
              <p className="text-base font-normal text-center text-[#5E6282] w-44 mx-auto">
                {item.text}
              </p>

              {index === 1 && (
                <>
                  <Image
                    className="absolute -bottom-8 -z-10 -left-10"
                    src={RectangleRed}
                    alt="rectanglered"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
