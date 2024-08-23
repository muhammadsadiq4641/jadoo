import React from "react";
import Image from "next/image";
import AxonImg from "../public/assets/axon-logo.png";
import JetStar from "../public/assets/jetstar-logo.png";
import ExpediaLogo from "../public/assets/expedia-logo.png";
import QantasLogo from "../public/assets/qantas-logo.png";
import AliTalia from "../public/assets/alitalia-logo.png";

const Axon = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-5 grid-cols-3 place-items-center py-20">
        <div className="px-3 cursor-pointer flex justify-center lg:h-[86px] h-[50px] lg:w-[241px] w-[180px] max-sm:w-[110px] max-sm:h-[30px] items-center hover:scale-110 py-2 hover:shadow-xl filter rounded-xl   grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:contrast-125">
          <Image className="" src={AxonImg} />
        </div>
        <div className="px-3 cursor-pointer flex justify-center lg:h-[86px] h-[50px] lg:w-[241px] w-[180px] max-sm:w-[110px] max-sm:h-[30px] items-center hover:scale-110 filter rounded-xl   grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:contrast-125 py-2 hover:shadow-xl">
          <Image className="" src={JetStar} />
        </div>
        <div className="px-3 cursor-pointer flex justify-center lg:h-[86px] h-[50px] lg:w-[241px] w-[180px] max-sm:w-[110px] max-sm:h-[30px] items-center hover:scale-110 filter rounded-xl   grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:contrast-125 py-2 hover:shadow-xl">
          <Image className="" src={ExpediaLogo} />
        </div>
        <div className="px-3 cursor-pointer flex justify-center lg:h-[86px] h-[50px] lg:w-[241px] w-[180px] max-sm:w-[110px] max-sm:h-[30px] items-center hover:scale-110 filter rounded-xl   grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:contrast-125 py-2 hover:shadow-xl">
          <Image className="" src={QantasLogo} />
        </div>
        <div className="px-3 cursor-pointer flex justify-center lg:h-[86px] h-[50px] lg:w-[241px] w-[180px] max-sm:w-[110px] max-sm:h-[30px] items-center hover:scale-110 filter rounded-xl   grayscale transition duration-500 ease-in-out hover:grayscale-0 hover:contrast-125 py-2 hover:shadow-xl">
          <Image className="" src={AliTalia} />
        </div>
      </div>
    </div>
  );
};

export default Axon;
