import HamburgerButton from "./HamburgerButton"
import NavItems from "./NavItems"

const Navbar = () => {
   return (
      <header className="py-4 px-4 fixed right-0 left-[190px] bg-background-main">
         <nav className="flex items-center justify-between">
            <div>
               <HamburgerButton />
            </div>
            <NavItems />
         </nav>
      </header>
   )
}

export default Navbar
