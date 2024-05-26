import React from "react";

import {
  BsMusicNoteBeamed,
 
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import {AiTwotoneBank} from "react-icons/ai";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillCalculator } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import Topic from "./Topic";

import profilepic from"../photos/profilepic.png";

const Discover = () => {
  const topics = [
  { title: "Home", icon: <AiFillHome />, link: "/" },
  { title: "Assignments", icon: <AiFillCalculator />, link: "/assignments" },
  { title: "Events", icon: <BsMusicNoteBeamed />, link: "https://eventbyteroom.netlify.app/" },
  { title: "Attendance", icon: <FaGraduationCap />, link: "/attendance" },
  { title: "Library", icon: <AiFillDatabase />, link: "/library" },
  { title: "Admissions", icon: <AiTwotoneBank />, link: "/admissions" },
  { title: "Fees", icon: <AiFillShopping />, link: "/fees" },
  { title: "Courses", icon: <FiMonitor />, link: "/courses" },
];
  return (
    <div className="hidden xl:flex flex-col justify-between bg-[#2B2C4B] w-[18rem] shrink-0  h-screen sticky top-0">
      <div className="p-4">
        {/* Title */}
        <p className="text-white/60 font-bold text-[24px]">Explore ByteRoom</p>
        {/* Topics */}
        <div className="mt-4 space-y-4">
          {topics.map((topic) => (
            topic.title === "Events"? <a href="https://eventbyteroom.netlify.app" target="_blank"> <Topic title={topic.title} icon={topic.icon} /></a> :<a href="#">
            <Topic title={topic.title} icon={topic.icon} /></a>
          ))}
        </div>
      </div>

      {/* Profile Settings */}
      <div className="bg-[#000034] h-[5rem] flex text-white/80 items-center px-1 justify-between">
        <div className="flex items-center ">
          <img src={profilepic} alt="" className="w-12 h-12 rounded-full" />
          <div className=" pl-2">
            <p>Aditya Sankar Bhattacharya</p>
            <p className="text-[14px] text-gray-400">EnrolmentNo:12020009001167</p>
          </div>
        </div>

        <div className=" flex space-x-3 text-[20px]">
         
          <IoMdSettings className=" " />
        </div>
      </div>
    </div>
  );
};

export default Discover;
