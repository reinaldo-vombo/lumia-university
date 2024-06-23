import { content } from '@/src/constant/site-content'
import Link from 'next/link'
import React from 'react'

const UserNotification = () => {
   return (
      <>
         <ul>
            {content.notification.map((item, index) => (
               <li key={index}>
                  <Link href='#' className='flex items-center gap-3 p-4 border-b border-slate-500 text-sm text-[#454545]'>
                     <i className='size-9 rounded-full bg-green-500'></i>
                     <p className='flex items-center gap-1'>
                        <strong>Martin</strong>
                        {item.message}

                     </p>
                  </Link>
               </li>
            ))}
         </ul>
      </>
   )
}

export default UserNotification
