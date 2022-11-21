import React from "react";
import { Technologie as techno } from "../assets/content";

const Technologie = ({ image, title }: techno) => {
  return (
    <div
      data-aos="fade-up"
      className="m-4 mx-auto flex h-32 w-32 flex-col items-center justify-around rounded-lg p-4 shadow-2xl sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52"
    >
      <img src={image} alt={title} className="w-12 sm:w-16 lg:w-20" />
      <h4 className="font-sans text-[16px] font-bold sm:text-[18px] md:text-[20px] lg:text-[22px]">
        {title}
      </h4>
    </div>
  );
};

export default Technologie;
