import HamburgerButton from "./HamburgerButton"
import NavItems from "./NavItems"

const Navbar = () => {
   return (
      <header className="py-4 px-4 fixed right-0 left-[147px] bg-background-main">
         <nav className="flex items-center justify-between relative">
            <div className="absolute">
               <HamburgerButton />
            </div>
            <NavItems />
         </nav>
      </header>
   )
}

export default Navbar
