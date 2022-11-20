import React from "react";
import { Technologie as techno } from "../assets/content";

const Technologie = ({ image, title }: techno) => {
  return (
    <div className="flex flex-col justify-around items-center p-4 m-4 shadow-2xl shadow-primary_shadow rounded-lg mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52">
      <img src={image} alt={title} className="w-12 sm:w-16 lg:w-20" />
      <h4 className="font-sans font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
        {title}
      </h4>
    </div>
  );
};

export default Technologie;
