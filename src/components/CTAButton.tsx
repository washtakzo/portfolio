import React from "react";

type Props = {
  className?: string | null;
  link?: string;
  children: any;
  aos?: string;
  aosDelay?: string;
  aosDuration?: string;
  aosEasing?: string;
};

const CTAButton = ({
  className,
  link,
  children,
  aos,
  aosDelay,
  aosDuration,
  aosEasing,
}: Props) => {
  const isPropsContainTextSize = className?.includes("text");
  return (
    <button
      data-aos={aos}
      data-aos-delay={aosDelay}
      data-aos-duration={aosDuration}
      data-aos-easing={aosEasing}
      className={`rounded-full bg-secondary py-2 px-6 ${
        !isPropsContainTextSize && "text-lg"
      } text-white ${className}`}
      onClick={() => {
        if (link) {
          window.open(link, "_blank")?.focus();
        }
      }}
    >
      {children}
    </button>
  );
};

export default CTAButton;
