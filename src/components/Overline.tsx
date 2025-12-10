import React from "react";
import clsx from "clsx";

type OverlineProps = {
  className?: string;
  children: React.ReactNode;
};

export const Overline: React.FC<OverlineProps> = ({ className, children }) => {
  return <span className={clsx("text-xs font-medium uppercase tracking-widest text-gray-500", className)}>{children}</span>;
};
