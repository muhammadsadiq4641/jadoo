"use client";
import Navbar from "./navbar";
import Hero from "./hero";
import Category from "./category";
import Destination from "./destination";
import BookYourTrip from "./bookYourTrip";
export default function Home() {
  return (
    <>
      <div className="bg-NavBG px-2 h-screen bg-no-repeat bg-right-top bg-contain">
        <Navbar />
        <Hero />
      </div>
      <Category />
      <Destination />
      <BookYourTrip />
    </>
  );
}
