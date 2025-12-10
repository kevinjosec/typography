import React from "react";
import clsx from "clsx";

type LabelProps = {
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

const sizeClasses = {
  sm: "text-sm font-normal",
  md: "text-base font-medium",
};

export const Label: React.FC<LabelProps> = ({ size = "md", className, children }) => {
  return <label className={clsx(sizeClasses[size], className)}>{children}</label>;
};
