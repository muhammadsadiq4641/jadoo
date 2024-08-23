import Heroenjoy from "../public/assets/hero-enjoy-img.png";
import HeroGirl from "../public/assets/hero-girl-img.png";
import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <Image
                draggable="false"
                className=" enjoy-img -mt-7 -ms-4 absolute lg:w-[385px] sm:w-[250px] w-[200px] "
                src={Heroenjoy}
              />
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
            <button className="bg-[#F1A501] hover:bg-gray-100 border-2 hover:shadow-2xl transition-all duration-700 hover:text-[#212832] rounded-lg sm:h-[60px] max-sm:py-2 sm:text-lg text-sm font-medium text-white sm:px-5 px-3">
              Find out more
            </button>
            <div className="flex items-center gap-5 hover:flex-row group cursor-pointer px-2 hover:shadow-xl rounded-xl transition-shadow duration-1000">
              <span className="flex justify-center items-center text-white bg-[#DF6951] rounded-full sm:w-[50px] w-[30px] h-[30px] sm:h-[50px] transform transition-transform duration-1000 group-hover:translate-x-[110px] max-sm:group-hover:translate-x-[100px]">
                <IoPlaySharp />
              </span>
              <p className="text-[#686D77] text-[17px] font-medium pt-5 transform transition-transform duration-1000 group-hover:-translate-x-[60px] max-sm:group-hover:-translate-x-[50px]">
                Play Demo
              </p>
            </div>
          </div>
        </div>

        {/* asd */}

        <div className="md:flex-1 md:justify-start md:flex">
          <Image
            draggable="false"
            className="max-md:w-[300px]"
            src={HeroGirl}
          />
        </div>
      </div>
      <div>
        {/* Your Hero section content here */}

        {showButton && (
          <div
            onClick={handleClick}
            className="fixed max-sm:right-4 max-sm:bottom-4 z-50 bottom-12 right-12 bg-black text-white hover:text-black hover:bg-transparent border-2 hover:border-[#212832] p-2 rounded cursor-pointer transition-all transform duration-700 hover:scale-75"
          >
            <RiArrowUpSLine />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
