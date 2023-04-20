import Link from 'next/link'
import React from 'react'

function Cate({img,title,des,linkto}) {
  return (
<div  className='m-8 hover:scale-[1.06] duration-500' >
<Link href={linkto}>
<img src={img} width={100}  className='w-[255px] h-[200px] rounded' />
<div>
<h1 className=' text-center text-[30px] text-[#f78da7] font-[Yesteryear]'>{title}</h1>
<p className=' text-center w-[255px]  text-sm'>{des}</p>
</div>
</Link>
</div>
  )
}

export default Cate