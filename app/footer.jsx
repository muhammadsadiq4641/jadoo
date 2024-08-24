import React from "react";
import Image from "next/image";
import Facebook from "../public/assets/facebook-logo.png";
import INstagram from "../public/assets/instagram-logo.png";
import Twitter from "../public/assets/twiiter-logo.png";
import Googleplay from "../public/assets/google-play-logo.png";
import AppStore from "../public/assets/app-store-logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 mx-auto mt-40 gap-8">
        <div className="mx-auto">
          <h2 className="text-[44px] font-bold text-[#181E4B]">Jadoo.</h2>
          <p className="text-sm font-semibold w-[207px] text-[#5E6282]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex mx-auto flex-col gap-4">
          <h2 className="text-xl font-[900] text-[#080809]">Company</h2>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            About
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Careers
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Mobile
          </a>
        </div >
        <div className="flex flex-col gap-4 mx-auto">
          <h2 className="text-xl font-[900] text-[#080809]">Contact</h2>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Help/FAQ
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Press
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Affilates
          </a>
        </div>
        <div className="flex flex-col gap-4 mx-auto">
          <h2 className="text-xl font-[900] text-[#080809]">More</h2>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Airlinefees
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Airline
          </a>
          <a className="text-lg font-semibold text-[#5E6282]" href="#">
            Low fare tips
          </a>
        </div>
        <div className="mx-auto">
          <div className="flex">
            <Image src={Facebook} />
            <Image src={INstagram} />
            <Image src={Twitter} />
          </div>
          <h2 className="text-xl font-semibold text-[#5E6282]">Discover our app</h2>
          <div className="flex gap-3">
            <Image src={Googleplay}/>
            <Image src={AppStore}/>
          </div>
        </div>
      </div>
      <a href="asd" className="text-sm text-[#5E6282] font-semibold flex justify-center py-20">All rights reserved@jadoo.co</a>
    </div>
  );
};

export default Footer;
