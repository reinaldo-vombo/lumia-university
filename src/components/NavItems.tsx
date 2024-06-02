import { bell, chat, settings, sun } from "@/public/icons"
import Image from "next/image"

const NavItems = () => {
   return (
      <div className="flex items-center gap-4">
         <button type="button" aria-label="sun icon">
            <Image src={sun} className="size-6" width={20} height={20} alt="sun icon" />
         </button>
         <button type="button" aria-label="chat icon">
            <Image src={chat} className="size-6" width={20} height={20} alt="sun icon" />
         </button>
         <button type="button" aria-label="bell icon">
            <Image src={bell} className="size-6" width={20} height={20} alt="sun icon" />
         </button>
         <button type="button" aria-label="settings icon">
            <Image src={settings} className="size-6" width={20} height={20} alt="sun icon" />
         </button>
      </div>
   )
}

export default NavItems
