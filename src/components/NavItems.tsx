import { bell, chat, logout, mailletter, settings, sun, user } from "@/public/icons"
import Image from "next/image"
import PopOver from "./PopOver"
import Link from "next/link"

const NavItems = () => {
   return (
      <div className="flex items-center gap-4 ml-auto">
         <button type="button" aria-label="sun icon">
            <Image src={sun} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
         </button>
         <button type="button" aria-label="chat icon">
            <Image src={chat} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
         </button>
         <button type="button" className="relative" aria-label="bell icon">
            <Image src={bell} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
            <div className="pulse-css" />
         </button>
         <button type="button" aria-label="settings icon">
            <Image src={settings} className="size-[1.3rem]" width={20} height={20} alt="sun icon" />
         </button>
         <PopOver element="/avatar.jpg" isText={false} className="w-40 px-0 py-1 grid gap-1">
            <Link href='#' className="flex items-center gap-2 px-6 py-2 hover:bg-secondary-action group transition-colors">
               <Image src={user} className="size-[1.1rem]" width={20} height={20} alt="user icon" />
               <p className="text-popover-foreground text-xs group:hover:text-primary-purple">Perfil</p>
            </Link>
            <Link href='#' className="flex items-center gap-2 px-6 py-2 hover:bg-secondary-action transition-colors">
               <Image src={mailletter} className="size-[1.1rem]" width={20} height={20} alt="user icon" />
               <p className="text-popover-foreground text-xs">Inbox</p>
            </Link>
            <Link href='#' className="flex items-center gap-2 px-6 py-2 hover:bg-secondary-action transition-colors">
               <Image src={logout} className="size-[1.1rem]" width={20} height={20} alt="user icon" />
               <p className="text-popover-foreground text-xs">Sair</p>
            </Link>
         </PopOver>
      </div>
   )
}

export default NavItems
