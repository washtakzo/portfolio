import React from "react";
import "./Project.css";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  order: number;
};

const Project = ({
  title,
  description,
  technologies,
  image,
  link,
  order,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-evenly lg:flex-row py-4 lg:py-28 cursor-pointer hover:scale-105 hover:shadow-xl transition duration-300 ease-out">
      <div className="my-8">
        <h4 className="text-center font-serif text-primary text-[22px] sm:text-[32px] lg:text-left">
          {title}
        </h4>
        <p className="font-sans text-[16px] w-[70%] mx-auto leading-7 text-primary text-center py-4 px-8 sm:text-[18px] sm:py-8 lg:text-left lg:px-0 lg:w-[280px]">
          {description}
        </p>
        <div className="project__grid mx-auto w-[220px] gap-1 grid-cols-2 sm:grid-cols-3 sm:w-[380px] lg:grid-cols-2 lg:w-[260px] lg:gap-3 lg:ml-0">
          {technologies.map((techno) => (
            <p
              key={techno}
              className="mx-auto w-[100%] text-center py-3 px-4 rounded-full bg-gray-100 text-xs sm:text-sm"
            >
              {techno}
            </p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
        className={`w-[70%] object-contain ${`lg:order-[${order}]`} lg:mx-8`}
      />
    </div>
  );
};

export default Project;
