import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose} from 'react-icons/ai';
import Form from '@/Components/Form';

function Buy({setShow,show,itemid,ninja}) {


  
  const[form,setForm]=useState(false)
  return (
<div>
{form?<Form ninja={ninja}/>:(
  <div className=' fixed top-[50%]  bg-[#f78da7] h-[300px] w-[80%]  rounded-[20px] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
  <AiOutlineClose size={30} className='border-2 border-[#f78da7] rounded-[50%] bg-white text-[#f78da7] hover:text-[#eee] hover:bg-[#000] duration-500 ' onClick={()=>setShow(!show)}/>
  <h2 className='text-center text-[30px] font-[Kristi] border-b-2 border-black w-[80%] m-auto'>payment</h2>
<ul className='p-3 m-3'>
<li className='bg-white m-3 rounded text-center hover:bg-black duration-500 font-bold hover:text-[#f78da7]'><Link href="">V cash</Link></li>
<li className='bg-white m-3 rounded text-center hover:bg-black duration-500 font-bold hover:text-[#f78da7]' onClick={
  ()=>{
setForm(!form)
}
} >when you get it</li>
</ul>
</div>
)}
</div>

  


  )
  }
export default Buy