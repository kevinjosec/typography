import React from "react";
import clsx from "clsx";

type CaptionProps = {
  className?: string;
  children: React.ReactNode;
};

export const Caption: React.FC<CaptionProps> = ({ className, children }) => {
  return <span className={clsx("text-xs text-gray-500", className)}>{children}</span>;
};
