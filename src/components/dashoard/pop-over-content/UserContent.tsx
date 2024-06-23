
import { logout, mailletter, user } from "@/public/icons"
import Image from "next/image"
import Link from "next/link"


const UserContent = () => {
   return (
      <div>
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
      </div>
   )
}

export default UserContent
