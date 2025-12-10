import React from "react";
import clsx from "clsx";

type ParagraphProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Paragraph: React.FC<ParagraphProps> = ({ size = "md", className, children }) => {
  return <p className={clsx(sizeClasses[size], className)}>{children}</p>;
};
