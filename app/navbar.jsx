"use client"
import React, { useState } from "react";
import WebLogo from "../public/assets/website-logo.png";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import Drawer from "./drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-5">
        <div>
          <Image src={WebLogo} alt="logo" draggable="false"/>
        </div>
        <div className="flex max-lg:hidden justify-between xl:gap-20 gap-10 items-center">
          <a className="hover:bg-gray-400 rounded px-2 hover:text-white font-sans text-[17px] font-medium text-[#212832]" draggable="false" href="#asd">Desitnations</a>
          <a className="hover:bg-gray-400 rounded px-2 hover:text-white font-sans text-[17px] font-medium text-[#212832]" draggable="false" href="#asd">Hotels</a>
          <a className="hover:bg-gray-400 rounded px-2 hover:text-white font-sans text-[17px] font-medium text-[#212832]" draggable="false" href="#asd">Flights</a>
          <a className="hover:bg-gray-400 rounded px-2 hover:text-white font-sans text-[17px] font-medium text-[#212832]" draggable="false" href="#asd">Bookings</a>
          <a className="hover:bg-gray-400 rounded px-2 hover:text-white font-sans text-[17px] font-medium text-[#212832]" draggable="false" href="#asd">Login</a>
          <button className="font-sans text-[17px] font-medium text-[#212832] border-[1px] border-[#212832] rounded h-[40px] px-5 hover:bg-[#F1A501] hover:border-white transition-all hover:text-white">Sign up</button>
          <p className="font-sans text-[17px] font-medium text-[#212832] -mb-2 flex items-center">EN <MdKeyboardArrowDown /></p>
        </div>
        {!isOpen && (
          <span onClick={showDrawer} className="lg:hidden text-3xl block"><RiMenu3Fill /></span>
        )}
      </div>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Navbar;
