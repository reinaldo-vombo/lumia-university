import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { TPopover } from './types'
import Image from 'next/image'

const PopOver = ({ children, element, isText, className }: TPopover) => {
   return (
      <Popover>
         <PopoverTrigger>
            {isText ? element : (
               <Image src={element} className='rounded-full' width={40} height={40} alt='user avatar' />
            )}
         </PopoverTrigger>
         <PopoverContent className={`${className ? className : ''}`}>{children}</PopoverContent>
      </Popover>
   )
}

export default PopOver
