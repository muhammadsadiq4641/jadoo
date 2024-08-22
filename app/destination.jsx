import React from "react";
import Europe from "../public/assets/full-europe.png";
import LonDon from "../public/assets/london-uk.png";
import Rome from "../public/assets/rome-italy.png";
import Decoration from "../public/assets/Decoration.png";
import { TiLocationArrow } from "react-icons/ti";
import Image from "next/image";

const Destination = () => {
  return (
    <div className="container mx-auto pb-10">
      <div className="text-xl sm:mt-52 mt-14 font-bold text-[#5E6282] text-center relative">
        <p>Top Selling</p>
        <h1 className="font-Volkhov sm:text-5xl text-2xl font-black">
          Top Destinations
        </h1>
      </div>

      {/* grid section  */}

      <div className="grid mt-20 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1 gap-14 grid-cols-3">
        <div className="2xl:w-[400px] w-72  shadow-md rounded-3xl">
          <Image draggable="false" className="2xl:w-[400px] w-72" src={Rome} />
          <div className="flex  px-10 pt-8 items-center text-[#5E6282] text-lg font-bold justify-between">
            <p>Rome, Italty</p>
            <p>$5,42k</p>
          </div>
          <div className="flex items-center gap-3 px-10 py-4">
            <TiLocationArrow className="text-3xl -mt-5" />
            <p className="text-base font-normal text-[#5E6282]">10 Days Trip</p>
          </div>
        </div>

        <div className="2xl:w-[400px] w-72  shadow-md rounded-3xl">
          <Image draggable="false" className="2xl:w-[400px] w-72" src={LonDon} />
          <div className="flex  px-10 pt-8 items-center text-[#5E6282] text-lg font-bold justify-between">
            <p>London, UK</p>
            <p>$4.2k</p>
          </div>
          <div className="flex items-center gap-3 px-10 py-4">
            <TiLocationArrow className="text-3xl -mt-5" />
            <p className="text-base font-normal text-[#5E6282]">12 Days Trip</p>
          </div>
        </div>

        <div className="2xl:w-[400px] w-72 relative shadow-md bg-white rounded-3xl">
            <Image draggable="false" className="absolute max-sm:hidden -right-16 bottom-16 -z-10" src={Decoration}/>
          <Image draggable="false" className="2xl:w-[400px] w-72" src={Europe} />
          <div className="flex  px-10 pt-8 items-center text-[#5E6282] text-lg font-bold justify-between">
            <p>Full Europe</p>
            <p>$15k</p>
          </div>
          <div className="flex items-center gap-3 px-10 py-4">
            <TiLocationArrow className="text-3xl -mt-5" />
            <p className="text-base font-normal text-[#5E6282]">28 Days Trip</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
