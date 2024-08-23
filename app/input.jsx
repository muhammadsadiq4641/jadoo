import Image from "next/image";
import InputIMG from "../public/assets/input-image.png";
import InputTelegram from "../public/assets/input-telegram.png";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
const Inputz = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Handle the search functionality here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-InputBG bg-no-repeat bg-right-bottom bg-auto">
      <div className="container mx-auto">
        <div className="relative">
          <Image
            className="absolute w-full lg:h-[400px] h-[300px]"
            src={InputIMG}
          />
          <Image className="absolute -right-5 -top-5" src={InputTelegram} />
          <div className="flex flex-col justify-center items-center  lg:h-[400px] h-[300px]">
            <h2 className="text-[#5E6282] text-[33px] font-semibold lg:w-[881px] sm:w-[500px] w-full px-5 max-lg:text-xl  text-center">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h2>
            <div className="flex items-center max-w-md w-full justify-center mt-10">
              <div className="relative w-full max-md:px-4">
                <MdOutlineEmail className="absolute md:left-3 left-6  top-1/2 transform -translate-y-1/2 text-black text-opacity-60 text-xl" />
                <input
                  type="text"
                  className="md:w-[421px] w-full  h-[50px] pl-10 pr-4 py-2 border-none hover:shadow-lg rounded-md  focus:border-gray-300"
                  placeholder="Your email"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
              </div>
              <button
                onClick={handleSearch}
                className="ml-4 bg-[#ff8a6b] text-white  rounded-lg hover:scale-110 sm:px-6 px-3 me-2 h-[50px] transition-colors duration-1000"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inputz;
