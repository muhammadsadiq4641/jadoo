import React from "react";
import Heroenjoy from "../public/assets/hero-enjoy-img.png";
import HeroGirl from "../public/assets/hero-girl-img.png";
import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex max-md:flex-col items-center h-calC100 ">
        <div className="md:flex-1">
          <p className="text-[#DF6951] sm:text-xl text-md lg:pb-10 pb-2 max-sm:mt-4 font-extrabold tracking-wide uppercase">
            Best Destinations around the world
          </p>
          <div className="flex items-center gap-3">
            <div>
              <h1 className="lg:text-[84px] sm:text-[60px] text-[40px] font-bold font-Volkhov text-[#181E4B] leading-10 ">
                Travel,
              </h1>
            </div>
            <div>
              <h1 className="lg:text-[84px] sm:text-[60px] text-[40px] z-10 font-bold font-Volkhov text-[#181E4B] leading-10 relative">
                enjoy
              </h1>
              <Image className="sm:-mt-9 enjoy-img -mt-7 -ms-4 absolute lg:w-[385px] sm:w-[250px] w-[200px] " src={Heroenjoy} />
            </div>
          </div>
          <div>
            <h1 className="lg:text-[84px] sm:text-[60px] text-[40px] font-bold font-Volkhov text-[#181E4B] leading-tight -my-5 ">
              and live a new and full life
            </h1>
            <p className="text-[#5E6282] text-base capitalize font-medium sm:w-[477px] mt-7 leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div className="flex sm:gap-10 gap-4 items-center">
            <button className="bg-[#F1A501] rounded-lg sm:h-[60px] max-sm:py-2 sm:text-lg text-sm font-medium text-white sm:px-5 px-3">
              Find out more
            </button>
            <div className="flex items-center gap-5">
              <span className="flex justify-center items-center text-white bg-[#DF6951] rounded-full sm:w-[50px] w-[30px] h-[30px] sm:h-[50px]">
                <IoPlaySharp />
              </span>
              <p className="text-[#686D77] text-[17px] font-medium pt-5">Play Demo</p>
            </div>
          </div>
        </div>

        {/* asd */}

        <div className="md:flex-1 md:justify-start md:flex">
          <Image className="max-md:w-[300px]" src={HeroGirl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
