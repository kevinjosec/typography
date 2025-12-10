import React from "react";
import clsx from "clsx";

type ButtonTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const ButtonText: React.FC<ButtonTextProps> = ({ className, children }) => {
  return <span className={clsx("text-base font-medium", className)}>{children}</span>;
};
