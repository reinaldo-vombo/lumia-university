'use client'
import { bell, chat, moon, settings, sun, } from "@/public/icons"
import Image from "next/image"
import PopOver from "./PopOver"
import UserContent from "./dashoard/pop-over-content/UserContent"
import UserNotification from "./dashoard/pop-over-content/UserNotification"
import SheetSidebar from "./sidear/Right"
import { useTheme } from "next-themes"

const NavItems = () => {
   const { theme, setTheme } = useTheme()
   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   return (
      <div className="flex items-center gap-4 ml-auto ">
         <button type="button" aria-label="sun icon" onClick={toggleTheme}>
            <Image src={theme === 'dark' ? sun : moon} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
         </button>
         <SheetSidebar />
         <PopOver element={
            <div className="relative">
               <Image src={bell} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
               <div className="pulse-css" />
            </div>
         } isText={false}
            className="px-0 py-1 grid gap-1"
         >
            <UserNotification />
         </PopOver>
         <button type="button" aria-label="settings icon">
            <Image src={settings} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
         </button>
         <PopOver element={<Image src='/avatar.jpg' className="rounded-full" width={30} height={30} alt="avatar" />} isText={false} className="w-40 px-0 py-1 grid gap-1">
            <UserContent />
         </PopOver>
      </div>
   )
}

export default NavItems
