import React from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white px-4 pt-5 h-full shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          onClick={onClose}
          className="text-2xl text-black cursor-pointer"
        />
        <div className="flex flex-col gap-5">
          <a
            className=" shadow-md mt-4 font-sans text-[17px] hover:bg-gray-400 rounded ps-4 hover:text-white font-medium text-[#212832]"
            href="#asd"
          >
            Desitnations
          </a>
          <a
            className=" shadow-md mt-4 font-sans text-[17px] hover:bg-gray-400 rounded ps-4 hover:text-white font-medium text-[#212832]"
            href="#asd"
          >
            Hotels
          </a>
          <a
            className=" shadow-md mt-4 font-sans text-[17px] hover:bg-gray-400 rounded ps-4 hover:text-white font-medium text-[#212832]"
            href="#asd"
          >
            Flights
          </a>
          <a
            className=" shadow-md mt-4 font-sans text-[17px] hover:bg-gray-400 rounded ps-4 hover:text-white font-medium text-[#212832]"
            href="#asd"
          >
            Bookings
          </a>
          <a
            className=" shadow-md mt-4 font-sans text-[17px] hover:bg-gray-400 rounded ps-4 hover:text-white font-medium text-[#212832]"
            href="#asd"
          >
            Login
          </a>
          <button className="font-sans text-[17px] font-medium text-[#212832] border-[1px] border-[#212832] rounded h-[40px] px-5 hover:bg-[#F1A501] hover:border-white transition-all hover:text-white">
            Sign up
          </button>
          <p className="font-sans text-[17px] font-medium text-[#212832] -mb-2 flex items-center">
            EN <MdKeyboardArrowDown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
