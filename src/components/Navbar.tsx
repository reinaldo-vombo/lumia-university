import NavItems from "./NavItems"

const Navbar = () => {
   return (
      <header className="bg-secondary-action w-full py-4 px-4">
         <nav className="flex items-center justify-between">
            <div></div>
            <NavItems />
         </nav>
      </header>
   )
}

export default Navbar
