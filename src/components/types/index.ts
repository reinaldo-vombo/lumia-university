import { ReactElement, ReactNode } from "react";

export type TPopover = {
  element: ReactNode;
  isText: boolean;
  children: ReactNode;
  className?: string;
};
export type TAccordion = {
  btnText: string;
  content: string;
};
