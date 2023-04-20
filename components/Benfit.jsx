import React from 'react'
import {BsFillShieldFill,BsArrowDownUp,FaShuttleVan,BsCreditCard2Back,BsEmojiSunglasses ,BsEmojiKiss } from 'react-icons/bs';

function Benfit({header,des,icon}) {
  return (
    <div className='w-[300px] m-3 text-center flex flex-col items-center py-[60px] bg-[#1A5F7A] rounded dark:bg-[#57C5B6]' >
<div className='text-[40px] font-serif'>
{icon}
</div>
    <h2 className='font-bold text-[23px]'>{header}</h2>
    <p className='text-[18px]'>{des}</p>
    </div>
  )
}

export default Benfit