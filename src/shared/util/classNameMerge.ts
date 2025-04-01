import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const classNameMerge = (inputs: string[]): string => {
  return twMerge(clsx(inputs));
};

export default classNameMerge;
