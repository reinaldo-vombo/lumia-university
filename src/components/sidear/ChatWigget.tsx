import { Cancel01Icon, Navigation03Icon } from "@/src/constant/svgIcons"
import Image from "next/image"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Dispatch, SetStateAction } from "react"
type TWiget = {
   close: Dispatch<SetStateAction<boolean>>
   user: {
      name: string,
      photo: string
      isOnline: boolean
   } | null
}
const ChatWigget = ({ close, user }: TWiget) => {
   return (
      <div className="fixed right-0 bottom-0 bg-background-main rounded-xl w-[20rem] h-80">
         <div className="bg-background-main rounded-t-xl p-4 flex items-center justify-between border border-b-slate-700">
            <div className="flex items-center gap-2">
               <div className="relative">
                  <Image src={user ? user.photo : ''} className="rounded-full object-cover" width={40} height={40} alt="name" />
                  <div className={`absolute size-3 ${user?.isOnline ? 'bg-green-400' : 'bg-red-400'} rounded-full bottom-0 left-0`} />
               </div>
               <div className="flex flex-col text-white">
                  <span>{user?.name}</span>
                  <span>Online</span>
               </div>
            </div>
            <button onClick={() => close(false)}>
               <Cancel01Icon color="#fff" />
            </button>
         </div>
         <div className="h-[200px]"></div>
         <div className="flex items-center">
            <Input placeholder="Menssagem" />
            <Button className="bg-primary-purple hover:bg-primary-purple size-10 flex items-center justify-center">
               <Navigation03Icon />
            </Button>
         </div>
      </div>
   )
}

export default ChatWigget
