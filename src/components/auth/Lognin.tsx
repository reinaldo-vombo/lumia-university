'use client'
import { Moon02Icon, Sun03Icon } from "@/src/constant/svgIcons"
import { useTheme } from "next-themes";
import Image from "next/image"
import { motion } from "framer-motion";
import { useState } from "react";
import StudentForm from "./forms/StudentForm";
import OthersForm from "./forms/OthersForm";

const Lognin = () => {
   const { theme, setTheme } = useTheme()
   const [isStudent, setIsStudent] = useState(false)
   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
   }
   return (
      <section className="h-full">
         <div className="grid grid-cols-12 h-full ">
            <div className="hidden lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9">
               <div className="col-span-6 relative h-full overflow-hidden">
                  <motion.div
                     initial={false}
                     animate={{
                        x: isStudent ? '100%' : 0
                     }}
                     transition={{ ease: 'easeInOut', duration: 0.5 }}
                     className='bg-slate-50 absolute inset-0 rounded-r-lg'
                     style={{ background: `url(/wp.png)`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
                  <motion.div
                     initial={false}
                     animate={{
                        x: isStudent ? 0 : '-100%'
                     }}
                     transition={{ ease: 'easeInOut', duration: 0.5 }}
                     className='bg-slate-50 absolute inset-0 rounded-r-lg'
                     style={{ background: `url(/wp.png)`, backgroundPosition: 'center', backgroundSize: 'cover' }} />
               </div>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
               <div className="flex flex-col items-stretch p-8 lg:px-16 lg:py-6">
                  <div className="flex items-center justify-between">
                     <div className="inline">
                        <Image src='/logo-p.png' width={72} height={72} alt="logo" />
                     </div>
                     <button type="button" className="rounded-full bg-slate-200 p-2 dark:bg-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600" aria-label="them toggle" onClick={toggleTheme}>
                        {theme === 'light' ? <Moon02Icon /> : <Sun03Icon />}
                     </button>
                  </div>
                  <div className="mt-8 lg:mt-24">
                     <h3 className="text-center text-xl font-semibold">Entrar</h3>
                     <p className="mt-2 text-center text-sm text-base-content/70">
                        Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
                     </p>
                     <div className="space-y-4">
                        <h3 className="text-secondary-action">Eu sou ...</h3>
                        <div className="border-[1px] relative flex rounded border-white overflow-hidden font-medium w-fit">
                           <motion.div
                              initial={false}
                              animate={{
                                 left: isStudent ? '50%' : '0%',
                                 width: isStudent ? '51%' : '51%',
                              }}
                              transition={{ duration: 0.75 }}
                              className="absolute inset-0 bg-white z-0" />
                           <button className="text-black w-40 text-sm px-3 py-1.5 transition-colors duration-[750ms] relative" onClick={() => setIsStudent(false)}>
                              <span className="relative z-10">aluno</span>
                           </button>
                           <button className="text-black w-40 text-sm px-3 py-1.5 transition-colors duration-[750ms] relative" onClick={() => setIsStudent(true)}>
                              <span className="relative z-10">fucionari</span>
                           </button>
                        </div>
                     </div>
                     <div className="mt-16 overflow-hidden relative h-60">
                        <StudentForm isStudent={isStudent} />
                        <OthersForm isStudent={isStudent} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Lognin
