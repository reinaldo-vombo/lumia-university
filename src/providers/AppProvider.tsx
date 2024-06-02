'use client'

import { createContext, useContext } from "react"
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


   //fuctions

   const value = {

   }
   return (
      <MainContext.Provider value={value}>
         {children}
      </MainContext.Provider>
   )
}