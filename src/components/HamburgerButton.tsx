'use client'

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { VARIANTS } from "../constant/motion";
import { useProvider } from "../providers/AppProvider";

const HamburgerButton = () => {
   const { handleSidebar } = useProvider()

   const [active, setActive] = useState(false);
   const handleToggle = () => {
      setActive(!active)
      handleSidebar()
   }
   return (
      <MotionConfig
         transition={{
            duration: 0.5,
            ease: "easeInOut",
         }}
      >
         <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            onClick={handleToggle}
            className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
         >
            <motion.span
               variants={VARIANTS.top}
               className="absolute h-[0.10rem] w-10 bg-primary-purple"
               style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
               variants={VARIANTS.middle}
               className="absolute h-[0.10rem] w-10 bg-primary-purple"
               style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
               variants={VARIANTS.bottom}
               className="absolute h-[0.10rem] w-5 bg-primary-purple"
               style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
               }}
            />
         </motion.button>
      </MotionConfig>
   );
}

export default HamburgerButton
