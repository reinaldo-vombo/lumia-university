import HamburgerButton from "./HamburgerButton"
import NavItems from "../NavItems"

const Navbar = () => {
   return (
      <header className="py-4 px-4 bg-background-main h-16 relative">
         <nav className="">
            <div className="flex items-center justify-between h-full">
               <div className="relative">
                  <HamburgerButton />
               </div>
               <NavItems />
            </div>
         </nav>
      </header>
   )
}

export default Navbar
