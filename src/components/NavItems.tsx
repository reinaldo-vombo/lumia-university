'use client'
import { bell, chat, settings, sun, } from "@/public/icons"
import Image from "next/image"
import PopOver from "./PopOver"
import UserContent from "./dashoard/pop-over-content/UserContent"
import UserNotification from "./dashoard/pop-over-content/UserNotification"
import { useProvider } from "../providers/AppProvider"
import SheetSidebar from "./sidear/Right"

const NavItems = () => {
   const { toggleTheme } = useProvider();
   return (
      <div className="flex items-center gap-4 ml-auto ">
         <button type="button" aria-label="sun icon" onClick={toggleTheme}>
            <Image src={sun} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
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
