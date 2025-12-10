import React from "react";
import clsx from "clsx";

type SubtitleProps = {
  className?: string;
  children: React.ReactNode;
};

export const Subtitle: React.FC<SubtitleProps> = ({ className, children }) => {
  return <h3 className={clsx("text-lg font-medium text-gray-700", className)}>{children}</h3>;
};
