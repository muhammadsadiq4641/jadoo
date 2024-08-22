"use client";
import Navbar from "./navbar";
import Hero from "./hero";
import Category from "./category";
import Destination from "./destination";
export default function Home() {
  return (
    <>
      <div className="bg-NavBG h-screen bg-no-repeat bg-right-top bg-contain">
        <Navbar />
        <Hero />
      </div>
      <Category />
      <Destination />
    </>
  );
}
