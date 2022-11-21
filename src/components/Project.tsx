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
  const orderStyle = "lg:order-[" + order + "]";
  const projectClickHandler = () => {
    if (link) window.open(link, "_blank")?.focus();
  };
  return (
    <div
      className="bg-red-100s my-8 px-4 lg:px-12 flex flex-col items-center justify-evenly lg:flex-row py-4 lg:py-28 cursor-pointer hover:scale-105 hover:shadow-xl transition duration-300 ease-out"
      onClick={projectClickHandler}
    >
      <div className="bg-green-100s">
        <h4 className="text-center font-serif text-primary text-[22px] sm:text-[32px] lg:text-left">
          {title}
        </h4>
        <p className="bg-orange-200s font-sans text-[14px] sm:text-[16px] w-[70%] mx-auto lg:mx-0 leading-7 text-primary text-center py-4 sm:py-8 lg:text-left lg:px-0 lg:w-[280px]">
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
      <div className={`${orderStyle}  mt-4 lg:px-8`}>
        <img src={image} alt={title} className="" />
      </div>
    </div>
  );
};

export default Project;
