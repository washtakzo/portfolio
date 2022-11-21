import React from "react";

type Props = {
  image: string;
  text: string;
  author: string;
};
const Testimonial = ({ image, text, author }: Props) => {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto flex flex-col px-4 py-4 sm:max-w-[530px] sm:px-14 md:max-w-[836px]"
    >
      <img
        src={image}
        alt="testimonial author"
        className="mx-auto w-20 sm:w-28"
      />
      <p className="text- my-6 font-serif text-xl italic leading-10 opacity-70 sm:text-[30px]">
        {text}
      </p>
      <p className="text-xs text-primary opacity-50">{author}</p>
    </div>
  );
};

export default Testimonial;
