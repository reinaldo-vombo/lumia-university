'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { TPageProvider, TProvider } from "./types";


export const MainContext = createContext<TProvider | undefined>(undefined);

export const useProvider = (): TProvider => {
   const context = useContext(MainContext);

   if (context === undefined) {
      throw new Error("useProvider must be used within a PageProvider");
   }
   return context;
};

export function PageProvider({ children }: TPageProvider) {
   const [toggleSidebar, setToggleSidebar] = useState(false);

   const handleSidebar = () => {
      setToggleSidebar((prevState) => !prevState);
   };

   const value = {
      handleSidebar,
      toggleSidebar,
   };

   return (
      <MainContext.Provider value={value}>
         {children}
      </MainContext.Provider>
   );
}