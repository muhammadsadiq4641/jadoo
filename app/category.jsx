import React from "react";
import Image from "next/image";
import CategoryIMG from "../public/assets/category-bg.png";
import Calculator from "../public/assets/calculator.png";
import Customization from "../public/assets/customization.png";
import Flight from "../public/assets/flight.png";
import LocalEvent from "../public/assets/local-event.png";
import RectangleRed from "../public/assets/Rectangle-red.png";


const Category = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-xl font-bold text-[#5E6282] text-center relative">
        <Image draggable="false" className="absolute -z-10 max-md:w-20 right-0" src={CategoryIMG}/>
        <p>CATEGORY</p>
        <h1 className="font-Volkhov sm:text-5xl text-2xl font-black">
          We Offer Best Services
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 content-center justify-items-center gap-14 sm:mt-40 mt-10">
        <div className="w-[267px]"> 
            <Image draggable="false" src={Calculator} alt="calculated weather" className="mx-auto mb-8"/>
            <h4 className="text-xl font-bold text-center mb-5">Calculated Weather </h4>
            <p className="text-base font-normal text-center text-[#5E6282] w-44 mx-auto">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="w-[267px] shadow-lg bg-white rounded-3xl  relative">
            <Image draggable="false" src={Flight} alt="calculated weather" className="mx-auto mb-8"/>
            <h4 className="text-xl font-bold text-center mb-5">Calculated Weather </h4>
            <p className="text-base font-normal text-center text-[#5E6282] w-44 mx-auto">Built Wicket longer admire do barton vanity itself do in it.</p>
            <Image draggable="false" className="absolute max-sm:w-16 -z-20 max-sm:-left-5 max-sm:-bottom-5 -left-10 -bottom-7" src={RectangleRed}/>
        </div>
        <div className="w-[267px]">
            <Image draggable="false" src={LocalEvent} alt="calculated weather" className="mx-auto mb-8"/>
            <h4 className="text-xl font-bold text-center mb-5">Calculated Weather </h4>
            <p className="text-base font-normal text-center text-[#5E6282] w-44 mx-auto">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="w-[267px]">
            <Image draggable="false" src={Customization} alt="calculated weather" className="mx-auto mb-8"/>
            <h4 className="text-xl font-bold text-center mb-5">Calculated Weather </h4>
            <p className="text-base font-normal text-center text-[#5E6282] w-44 mx-auto">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
