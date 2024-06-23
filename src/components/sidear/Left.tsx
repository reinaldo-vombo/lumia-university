'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useProvider } from '@/src/providers/AppProvider'
import { content } from '@/src/constant/site-content'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { BookShellIcon, Buildingcon, CalendarIcon, HomeIcon, StaffIcon, StudentsIcon, UsersIcon } from '@/src/constant/svgIcons'

const Left = () => {
   const path = usePathname()

   const HIDESPAN = {
      visible: { opacity: 1, width: 'auto' },
      hidden: { opacity: 0, width: 0 },
   };

   const { toggleSidebar } = useProvider()
   const [openDropdown, setOpenDropdown] = useState(Array(content.menus.length).fill(false));

   const handleDropdownToggle = (index: any) => {
      setOpenDropdown((prev) =>
         prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
   };

   return (
      <motion.div
         animate={{ width: toggleSidebar ? '5rem' : '16rem' }}
         initial={{ width: '16rem' }}
         transition={{ ease: 'linear' }}
         className='py-5'>
         <aside className='space-y-7'>
            <div className='flex items-center gap-1 px-4'>
               <Image src='/logo.png' width={40} height={40} alt='lumia logo' />
               {!toggleSidebar && (<h2 className='text-3xl'>Lumia</h2>)}
            </div>
            {!toggleSidebar && <p className='text-xs px-4'>Menus pricipais</p>}
            <div>
               <ul className={`${toggleSidebar ? 'small gap-6' : ''} grid place-content-center`}>
                  {content.menus.map((item, index) => (
                     <li
                        className={`${path === item.route ? 'text-primary-purple bg-black active-menu' : ''} py-2 px-4 relative`}
                        key={item.id}
                     >
                        <Link href={`/dashboard/admin/${item.route}`} className={`flex items-center gap-2 text-xs`} onClick={() => handleDropdownToggle(index)}>
                           {index === 0 ? <HomeIcon path={path} /> : index === 1 ? <CalendarIcon path={path} /> : index === 2 ? <UsersIcon path={path} /> : index === 3 ? <StudentsIcon path={path} /> : index === 4 ? <BookShellIcon path={path} /> : index === 5 ? <StaffIcon path={path} /> : <Buildingcon path={path} />}
                           {!toggleSidebar && (
                              <AnimatePresence>
                                 <motion.span
                                    variants={HIDESPAN}
                                    initial="visible"
                                    animate={toggleSidebar ? 'hidden' : 'visible'}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                 >
                                    {item.name}
                                 </motion.span>
                              </AnimatePresence>
                           )}
                        </Link>
                        {index !== 0 && index !== 1 && (
                           <AnimatePresence>
                              {openDropdown[index] && (
                                 <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: '4rem' }}
                                    exit={{ height: 0, }}
                                    className="pl-10 py-3 bg-black rounded-lg"
                                 >
                                    <ul className="grid gap-3">
                                       {item.subItems.map((subItem) => (
                                          <li className="text-xs text-slate-500" key={subItem}>
                                             <Link href={subItem}>{subItem}</Link>
                                          </li>
                                       ))}
                                    </ul>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        )}
                     </li>
                  ))}
               </ul>
            </div>
            {!toggleSidebar && (
               <div className='px-4'>
                  <div className='w-full h-[2px] bg-slate-500 rounded-lg' />
                  <div className='bg-[#0c0c10] rounded-lg p-4 space-y-3 mt-5'>
                     <h2 className='text-base'>Use space</h2>
                     <p className='text-sm'>Admin updated at 09:12 am Novemer 09,2024</p>
                     <div>
                        <p className='text-right mb-1'>70%</p>
                        <div className='w-full h-1 rounded-lg bg-secondary-action relative bar'></div>
                     </div>
                  </div>
               </div>
            )}
         </aside>
      </motion.div>
   )
}

export default Left
