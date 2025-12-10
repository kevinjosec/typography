import React from "react";
import clsx from "clsx";

type LeadTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const LeadText: React.FC<LeadTextProps> = ({ className, children }) => {
  return <p className={clsx("text-lg font-normal", className)}>{children}</p>;
};
    