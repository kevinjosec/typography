import React from "react";
import clsx from "clsx";

type SubheadingProps = {
  size?: "xl" | "lg" | "md";
  className?: string;
  children: React.ReactNode;
};

const sizeClasses = {
  xl: "text-xl font-semibold",
  lg: "text-lg font-medium",
  md: "text-base font-medium",
};

export const Subheading: React.FC<SubheadingProps> = ({ size = "lg", className, children }) => {
  return <h2 className={clsx(sizeClasses[size], className)}>{children}</h2>;
};
