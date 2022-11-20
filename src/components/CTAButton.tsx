import React from "react";

type Props = {
  className?: string | null;
  link?: string;
  children: any;
};

const CTAButton = ({ className, link, children }: Props) => {
  return (
    <button
      className={`bg-secondary text-white py-2 px-6 rounded-full text-lg ${className}`}
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
