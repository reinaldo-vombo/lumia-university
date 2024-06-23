import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { TPopover } from './types'
import Image from 'next/image'

const PopOver = ({ children, element, isText, className }: TPopover) => {
   return (
      <Popover>
         <PopoverTrigger className='relative'>
            {element}
         </PopoverTrigger>
         <PopoverContent className={`${className ? className : ''}`}>{children}</PopoverContent>
      </Popover>
   )
}

export default PopOver
