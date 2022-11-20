import React from "react";

type Props = {
  image: string;
  text: string;
  author: string;
};
const Testimonial = ({ image, text, author }: Props) => {
  return (
    <div className="flex flex-col px-4 sm:px-14 py-4 mx-auto sm:max-w-[530px] md:max-w-[836px]">
      <img
        src={image}
        alt="testimonial author"
        className="w-20 mx-auto sm:w-28"
      />
      <p className="font-serif italic text- opacity-70 text-xl leading-10 my-6 sm:text-[30px]">
        {text}
      </p>
      <p className="text-xs text-primary opacity-50">{author}</p>
    </div>
  );
};

export default Testimonial;
