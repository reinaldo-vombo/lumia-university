import Image from "next/image"
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "../../components/ui/sheet"
import { chat } from "@/public/icons"
import { Button } from "../ui/button"
import { useState } from "react"
import UserListChat from "./UserListChat"

const SheetSidebar = () => {
   const [selectedTab, setSeletedTab] = useState('chat')

   const handleTabSelect = (tab: string) => {
      setSeletedTab(tab)
   }
   return (
      <Sheet>
         <SheetTrigger>
            <Image src={chat} className="size-[1.3rem]" width={20} height={20} alt="chat icon" />
         </SheetTrigger>
         <SheetContent className="bg-background-main">
            <SheetHeader>
               <SheetTitle className="flex items-center relative py-4">
                  <Button className="flex-1 bg-transparent text-primary-purple" onClick={() => handleTabSelect('chat')}>Chat</Button>
                  <Button className="flex-1 bg-transparent text-primary-purple" onClick={() => handleTabSelect('alert')}>Alertas</Button>
                  <Button className="flex-1 bg-transparent text-primary-purple" onClick={() => handleTabSelect('notes')}>Noata</Button>
               </SheetTitle>
               <SheetDescription>
                  <div className="bg-[#010610] p-3 text-center">
                     <h2 className="text-lg">Chat</h2>
                     <p className="text-xs">Mostra todos</p>
                  </div>
                  {selectedTab === 'chat' ? (
                     <UserListChat />
                  ) : selectedTab === 'alert' ? (<p>alert</p>) : selectedTab === 'notes' ? (<p>otes</p>) : null}
               </SheetDescription>
            </SheetHeader>
         </SheetContent>
      </Sheet>

   )
}

export default SheetSidebar
