import React from "react";
import clsx from "clsx";

type HeadingProps = {
  size?: "4xl" | "3xl" | "2xl" | "xl";
  className?: string;
  children: React.ReactNode;
};

const sizeClasses = {
  "4xl": "text-5xl font-bold",
  "3xl": "text-4xl font-semibold",
  "2xl": "text-3xl font-semibold",
  xl: "text-2xl font-medium",
};

export const Heading: React.FC<HeadingProps> = ({ size = "2xl", className, children }) => {
  return <h1 className={clsx(sizeClasses[size], className)}>{children}</h1>;
};
