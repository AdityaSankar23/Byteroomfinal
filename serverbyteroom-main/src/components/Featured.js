import React from "react";

import iembackground from "../photos/iembackground.webp";
import uembackground from "../photos/uembackground.webp";
import jadavpurbackground from "../photos/jadavpurbackground.webp";
import hrbg from "../photos/hrbg.webp";
import suniv from "../photos/suniv.jpg";
import iihmbg from "../photos/iihmbg.webp";
import scbg from "../photos/scbg.jpg";
import nujsbg from "../photos/nujsbg.webp";
import mdbg from "../photos/mdbg.webp";


import uemlogo from "../photos/uemlogo.webp";
import iemlogo from "../photos/iemlogo.webp";
import jadavpurlogo from "../photos/jadavpurlogo.webp";
import iihmlogo from "../photos/iihmlogo.jpg";
import hrlogo from "../photos/hrlogo.webp";
import sunilogo from "../photos/sunilogo.jpg";
import sclogo from "../photos/sclogo.png";
import nujslogo from "../photos/nujslogo.webp";
import mdlogo from "../photos/mdlogo.webp";

import Card from "./Card";

import { Link } from "react-router-dom";

const Featured = () => {
  const cards = [
    {
      bg: iembackground,
      profile: iemlogo ,
      title: "IEM Kolkata",
      description:
        "Good Education,Good Jobs",
        
      size:<p><br/><br/>130 Online &#x2022; 2000 Members</p>,
    },
    {
      bg: uembackground,
      profile: uemlogo,
      title: "UEM kolkata",
      description:
        "Good Education,Good Jobs ",
      size: <p><br/><br/>500 Online &#x2022; 7000 Members</p>,
    },
    {
      bg: jadavpurbackground,
      profile: jadavpurlogo,
      title: "Jadavpur University",
      description:
        "To know is to grow",
      size: <p><br/><br/>5,532 Online &#x2022; 70,000 Members</p>,
    },
    {
      bg: iihmbg,
      profile: iihmlogo,
      title: "IIHM kolkata",
      description:
        "Let there be light",
      size: <p><br/><br/>5,532 Online &#x2022; 3,061 Members</p>,
    },
    {
      bg: hrbg,
      profile: hrlogo,
      title: "Heritage Kolkata",
      description:
        "Atmo Deepo Bhavo",
      size: <p><br/><br/>1,532 Online &#x2022; 2061 Members</p>,
    },
    {
      bg: suniv,
      profile: sunilogo,
      title: "St. Xavier's University",
      description:
        "He has seen great wonders",
      size: <p><br/><br/>5,532 Online &#x2022; 32,061 Members</p>,
    },
    {
      bg: scbg,
      profile: sclogo,
      title: "St. Xavier's College",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      size: <p><br/>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: nujsbg,
      profile: nujslogo,
      title: "NUJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      size: <p><br/>85,532 Online &#x2022; 232,061 Members</p>,
    },
    {
      bg: mdbg,
      profile: mdlogo,
      title: "Medical College",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      size: <p><br/>85,532 Online &#x2022; 232,061 Members</p>,
    },
  ];
  return (
    <div className="pt-6   ">
      {/* Titles */}
      <div className="text-white pb-4">
        <p className="font-bold text-[20px]">Featured Colleges</p>
        <p className="text-white/50">
          Some awesome communities we think you'd love
        </p>
      </div>

      {/* Cards*/}
      <div className="grid grid-cols-1 xs:grid-cols-2   lg:grid-cols-3 gap-y-8 xs:gap-x-2 sm:gap-x-4 mb-4  ">
        {cards.map((card) => (
          <Link to="/card">
            <Card
              bg={card.bg}
              profile={card.profile}
              title={card.title}
              description={card.description}
              size={card.size}
              key={card.description}
            />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
