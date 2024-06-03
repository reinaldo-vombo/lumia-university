import { ReactNode } from 'react';

export type TPopover = {
  element: string;
  isText: boolean;
  children: ReactNode;
  className?: string;
};
