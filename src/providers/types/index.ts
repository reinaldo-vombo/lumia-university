import { ReactNode } from 'react';

export type TProvider = {};
export type TPageProvider = {
  children: ReactNode;
  toggleSidebar: boolean
  handleSidebar: () => void
};
