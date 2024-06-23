import { content } from "@/src/constant/site-content"
import Image from "next/image"
import ChatWigget from "./ChatWigget"
import { useState } from "react"


const UserListChat = () => {
   type TUserData = {
      name: string
      photo: string
      isOnline: boolean
   }
   const [toggleChat, setToggleChat] = useState(false)
   const [userData, setuserData] = useState<null | TUserData>(null)
   const handleselectedUser = (triger: boolean, data: any) => {
      setToggleChat(triger)
      setuserData(data)
   }

   return (
      <div className="mt-6">
         <ul className="grid gap-4">
            {content.chatList.map((item) => (
               <li className="flex items-center gap-2 hover:bg-[#010610] transition-colors cursor-pointer" onClick={() => handleselectedUser(true, item)}>
                  <div className="relative">
                     <div className={`absolute size-3 ${item.isOnline ? 'bg-green-400' : 'bg-red-400'} rounded-full bottom-0 left-0`} />
                     <Image src={item.photo} className="object-cover rounded-full" width={50} height={50} alt={item.name} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-white">{item.name}</span>
                     <span className="text-xs">{
                        item.isOnline ? `${item.name.split(' ')[0]} is online` : `${item.name.split(' ')[0]} left 5 mins ago`
                     }</span>
                  </div>
               </li>
            ))}
         </ul>
         {toggleChat && (
            <ChatWigget user={userData} close={setToggleChat} />
         )}
      </div>
   )
}

export default UserListChat
