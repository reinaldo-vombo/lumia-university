import Image from 'next/image'
import React from 'react'

const Left = () => {
   return (
      <div className='relative w-48 px-4 py-5'>
         <aside>
            <div>
               <Image src='/logo.png' width={40} height={40} alt='lumia logo' />
            </div>
         </aside>
      </div>
   )
}

export default Left
