'use client'

import { createContext, useContext, useState } from "react"
import { TPageProvider, TProvider } from "./types"

export const MainContext = createContext<TProvider | undefined>(undefined)

export const useProvider = (): TProvider => {
   const context = useContext(MainContext)

   if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider')
   }
   return context

}

export function PageProvider({ children }: TPageProvider) {
   //states
   const [toggleSidebar, setToggleSidebar] = useState(false)

   //fuctions
   const handleSidebar = () => {
      setToggleSidebar(!toggleSidebar)
   }

   const value = {
      handleSidebar,
      toggleSidebar
   }
   return (
      <MainContext.Provider value={value}>
         {children}
      </MainContext.Provider>
   )
}