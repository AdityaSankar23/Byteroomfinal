import React from "react";

import logo from "../photos/logo.png";
import uemlogo from "../photos/uemlogo.webp";
import iemlogo from "../photos/iemlogo.webp";


import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

const Groups = () => {
  const groups = [uemlogo, iemlogo];
  return (
    <div className="hidden sm:flex bg-[#1D1D3F] w-[6rem] shrink-0 h-screen sticky top-0 pt-6">
      {/* Groups */}
      <div className="flex flex-col items-center w-full space-y-4">
        {/* Byteroom */}
        <Link to="/">
          <div className="bg-[#36393f] p-1 rounded-[1.3rem] cursor-pointer">
            <img
              src={logo}
              className="w-12 h-12 rounded-full text-white brightness-[80%]"
              alt="xyz"
            />
          </div>{" "}
        </Link>

        {/* Compass
        <div className="bg-[#7289dc] p-3 rounded-[1.3rem] cursor-pointer">
          <AiFillCompass className="w-8 h-8 rounded-full text-white" />
        </div> */}
        {/* Groups */}
        <div className="space-y-2 pt-4">
          {groups.map((group) => (
            <div className="w-14 h-14 flex cursor-pointer" key={group}>
              <img src={group} className="object-cover rounded-full" alt="xyz"/>
            </div>
          ))}
        </div>

        {/* Plus */}
        <div className="bg-[#36393f] p-4 rounded-full">
          <FiPlus className="w-6 h-6 rounded-full text-purple-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Groups;
