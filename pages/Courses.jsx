import Link from 'next/link'
import React from 'react'

function Courses() {
  return (
<div className='min-h-[400px]'>
<div  className='m-8 mt-[100px]  hover:scale-[1.06] duration-500 w-fit border-2 border-[#f78da7] p-2 rounded' >
<Link href={""}>
<img src="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=400" width={100}  className='w-[255px] h-[200px] rounded' />
<div>
<h1 className=' text-center text-[30px] text-[#f78da7] font-[Yesteryear]'>Candle Course</h1>
<p className=' text-center w-[255px]  text-sm'></p>
</div>
</Link>
</div>
</div>
  )
}

export default Courses