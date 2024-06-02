'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Login from '../forms/Login'
import Image from 'next/image'

const Register = () => {
   const [isStudent, setIsStudent] = useState(false)
   return (
      <div className='shadow-md shadow-secondary-action'>
         <div className="grid grid-cols-12">
            <div className="col-span-6 place-content-center bg-primary-action p-5 rounded-l-lg">
               <Login isStudent={isStudent} setIsStudent={setIsStudent} />
            </div>
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
      </div>
   )
}

export default Register
