"use client";
import Navbar from "./navbar";
import Hero from "./hero";
import Category from "./category";
import Destination from "./destination";
import BookYourTrip from "./bookYourTrip";       
import Testimonial from "./testimonial";
import Testimonial2 from "./testimonial2";
import Inputz from "./input";
import Axon from "./axon";
export default function Home() {
  return (
    <>
      <div className="bg-NavBG  h-screen bg-no-repeat bg-right-top bg-contain">
        <Navbar />
        <Hero />
      </div>
      <Category />
      <Destination />
      <BookYourTrip />
      <div className="grid lg:grid-cols-2 grid-cols-1 container mx-auto">
      <Testimonial />
      <Testimonial2 />
      </div>
      <Axon />
      <Inputz />
    </>
  );
}

