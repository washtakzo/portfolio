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
  const projectClickHandler = () => {
    if (link) window.open(link, "_blank")?.focus();
  };
  const orderStyle = "lg:order-[" + order + "]";
  console.log(orderStyle);

  return (
    <div
      className="my-8 flex cursor-pointer flex-col items-center justify-evenly px-4 py-4 transition duration-300 ease-out hover:scale-105 lg:mx-auto lg:w-[90%] lg:flex-row lg:px-12 lg:py-28"
      onClick={projectClickHandler}
    >
      <div>
        <h4 className="text-center font-serif text-[22px] text-primary sm:text-[32px] lg:text-left">
          {title}
        </h4>
        <p className="mx-auto w-[70%] py-4 text-center font-sans text-[14px] leading-7 text-primary sm:py-8 sm:text-[16px] lg:mx-0 lg:w-[280px] lg:px-0 lg:text-left">
          {description}
        </p>
        <div className="project__grid mx-auto w-[220px] grid-cols-2 gap-1 sm:w-[380px] sm:grid-cols-3 lg:ml-0 lg:w-[260px] lg:grid-cols-2 lg:gap-3">
          {technologies.map((techno) => (
            <p
              key={techno}
              className="mx-auto w-[100%] rounded-full bg-gray-100 py-3 px-4 text-center text-xs sm:text-sm"
            >
              {techno}
            </p>
          ))}
        </div>
      </div>
      <div className={`${orderStyle} mt-4 lg:px-8`}>
        <img src={image} alt={title} className="" />
      </div>
    </div>
  );
};

export default Project;
