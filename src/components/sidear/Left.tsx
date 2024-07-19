'use client'


import { motion } from 'framer-motion'
import { useProvider } from '@/src/providers/AppProvider'
import { content } from '@/src/constant/site-content'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { BookShellIcon, Buildingcon, CalendarIcon, HomeIcon, StaffIcon, StudentsIcon, UsersIcon, } from '@/src/constant/svgIcons'

const Left = () => {
   const path = usePathname()

   const { toggleSidebar } = useProvider()
   const svgs = [
      <HomeIcon
         className={path === '/dashboard/admin' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <CalendarIcon
         className={path === '/dashboard/admin/event-management' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <UsersIcon
         className={path === '/dashboard/admin/teachers' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <StudentsIcon
         className={path === '/dashboard/admin/studentes' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <BookShellIcon
         className={path === '/dashboard/admin/curses' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <StaffIcon
         className={path === '/dashboard/admin/members' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
      <Buildingcon
         className={path === '/dashboard/admin/departmentes' ? 'text-primary-action' : " dark:text-primary-text"}
         width={30}
         height={30}
      />,
   ]

   return (
      <motion.div
         animate={{ width: toggleSidebar ? '5rem' : '16rem' }}
         initial={{ width: '16rem' }}
         transition={{ ease: 'linear' }}
         className='py-5'>
         <aside className={toggleSidebar ? 'space-y-24' : 'space-y-7'}>
            <div className='flex items-center gap-1 px-4'>
               <Image src='/logo-p.png' width={40} height={40} alt='lumia logo' />
               {!toggleSidebar && (<h2 className='text-3xl'>Lumia</h2>)}
            </div>
            {!toggleSidebar && <p className='text-xs px-4'>Menus pricipais</p>}
            <div>
               <ul className={`${toggleSidebar ? 'small gap-2 place-content-center' : ''} grid`}>
                  {content.menus.map((item, index) => (
                     <li className={`${path === item.route ? 'text-primary-purple dark:bg-secondary-action active-menu bg-slate-200' : ''} ${toggleSidebar ? 'pl-4' : 'px-4'} py-2 relative`}
                        key={index}
                     >
                        <Link href={`${item.route}`} className="flex items-center gap-2 text-xs">
                           {svgs[index]}
                           {!toggleSidebar && (
                              <span>{item.name}</span>
                           )}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
            {!toggleSidebar && (
               <div className='px-4 space-y-7'>
                  {!toggleSidebar && <p className='text-xs'>CMS</p>}
                  <ul className='grid gap-6'>
                     {content.cmsMenus.map((item) => (
                        <li>
                           <Link href={'#'}>
                              <span>{item.name}</span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </aside>
      </motion.div>
   )
}

export default Left
