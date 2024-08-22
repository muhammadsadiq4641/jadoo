import React from "react";
import Decoration from "../public/assets/Decoration.png";
import { TiLocationArrow } from "react-icons/ti";
import Image from "next/image";
import { destanitionData } from "@/components/data";

const Destination = () => {
  return (
    <div className="container mx-auto pb-10 relative z-10">
      <div className="text-xl sm:mt-52 mt-14 font-bold text-[#5E6282] text-center relative">
        <p>Top Selling</p>
        <h1 className="font-Volkhov sm:text-5xl text-2xl font-black">
          Top Destinations
        </h1>
      </div>

      {/* grid section  */}

      <div className="grid mt-20 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 gap-14 grid-cols-3">
        {destanitionData.map((item) => (
          <div
            key={item.id}
            className="2xl:w-[400px] w-72 bg-white shadow-md rounded-3xl"
          >
            <Image
              draggable="false"
              className="2xl:w-[400px] w-72"
              src={item.image}
            />
            <div className="flex  px-10 pt-8 items-center text-[#5E6282] text-lg font-bold justify-between">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            <div className="flex items-center gap-3 px-10 py-4">
              <TiLocationArrow className="text-3xl -mt-5" />
              <p className="text-base font-normal text-[#5E6282]">
                {item.trip}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Image src={Decoration} alt="decoration" className="absolute max-sm:hidden -right-7 top-[25rem] z-[-1]" />
    </div>
  );
};

export default Destination;
