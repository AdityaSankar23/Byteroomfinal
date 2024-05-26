import React from "react";

import background1 from "../photos/background1.webp";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative  h-[13rem] sm:h-[16rem]  md:h-[19rem] rounded-[0.3rem] z-10">
      {/* Background Image */}
      <div className="absolute  flex   w-full ">
        <img
          src={background1}
          className="object-cover w-full rounded-[0.3rem] h-[13rem]  md:h-[19rem] sm:h-[16rem]  "
          alt="xyz"
        />
      </div>
      {/* Overlay */}
      <div className="absolute  flex   w-full h-full bg-black/20 z-10 "></div>

      {/* Search */}
      <div className="relative z-20   flex flex-col items-center justify-center  h-full font-bold text-white  pb-0 space-y-2">
        <p className="text-[19px] md:text-[24px] font-black">
          Find your community on ByteRoom
        </p>
        <p className="pb-2 text-[13.5px] md:text-[17px]    text-white/80">
          From Admissions,to Courses,to Events,we got you covered.
        </p>
        <div className="relative flex items-center      mb-4">
          <input
            type="search "
            placeholder="Explore Colleges"
            className="rounded-[0.3rem] pl-3 placeholder:text-[14px]  md:placeholder:text-[16px] placeholder:text-gray-500 outline-0     py-2 md:py-3 w-[25rem] md:w-[35rem] text-black"
          />
          <FiSearch className="absolute   text-black right-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
