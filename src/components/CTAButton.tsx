import React from "react";

type Props = {
  className?: string | null;
  children: any;
};

const CTAButton = ({ className, children }: Props) => {
  return (
    <button
      className={`bg-secondary text-white py-2 px-6 rounded-full text-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
