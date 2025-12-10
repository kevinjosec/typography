import React from "react";
import clsx from "clsx";

type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ className, children }) => {
  return <h1 className={clsx("text-3xl font-bold", className)}>{children}</h1>;
};
