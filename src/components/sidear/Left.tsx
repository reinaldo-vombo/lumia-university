'use client'
import { useProvider } from '@/src/providers/AppProvider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Left = () => {
   const { toggleSidebar } = useProvider()

   return (
      <motion.div
         animate={{ width: toggleSidebar ? '4rem' : '12rem' }} // Adjust -200 to the width of your sidebar
         initial={{ width: '12rem' }} // Adjust to match the width of your sidebar
         transition={{ ease: 'linear' }}
         className='px-4 py-5'>
         <aside>
            <div>
               <Image src='/logo.png' width={40} height={40} alt='lumia logo' />
            </div>
         </aside>
      </motion.div>
   )
}

export default Left
