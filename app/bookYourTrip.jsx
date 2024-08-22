import React from "react";
import Image from "next/image";
import TripToGreece from "../public/assets/trip-to-greece.png";
import ChooseDestination from "../public/assets/choose-destination.png";
import MakePayment from "../public/assets/make-payment.png";
import ReachAirport from "../public/assets/reach-airport.png";

const BookYourTrip = () => {
  return (
    <div className="container mx-auto px-2 max-sm:mt-14">
      <div className="flex items-center max-md:flex-col">
        <div className="flex-1">
          <div className="text-xl font-bold text-[#5E6282]  relative">
            <p>Easy and Fast</p>
            <h1 className="font-Volkhov sm:text-6xl text-2xl font-black">
              Book your next trip in 3 easy steps
            </h1>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-3">
              <div>
                <Image draggable="false" src={ChooseDestination} />
              </div>
              <div className="-mb-4">
                <h2 className="text-base font-black text-[#5E6282] leading-3">Choose Destination</h2>
                <p className="text-[#5e6282b4] w-[327px] max-sm:w-full text-base font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Image draggable="false" src={MakePayment} />
              </div>
              <div className="-mb-4">
                <h2 className="text-base font-black text-[#5E6282] leading-3">Make Payment</h2>
                <p className="text-[#5e6282b4] w-[327px] max-sm:w-full text-base font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <Image draggable="false" src={ReachAirport} />
              </div>
              <div className="-mb-4">
                <h2 className="text-base font-black text-[#5E6282] leading-3">Reach Airport on Selected Date</h2>
                <p className="text-[#5e6282b4] w-[327px] max-sm:w-full text-base font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image draggable="false" src={TripToGreece} />
        </div>
      </div>
    </div>
  );
};

export default BookYourTrip;
