import React, { useState } from 'react'
import {db}from '../firebaseConfig'
import 'firebase/firestore';
import {  addDoc,collection } from 'firebase/firestore'


function Form({ninja}) {
 const[name ,setName]=useState()
 const[num ,setnum]=useState()
 const[secnum ,setSecnum]=useState()
 const[Addres ,setAddres]=useState()
 const[Details ,setDetails]=useState()

 const[cong ,setCong]=useState(true)




 const handle=(e)=>{
   e.preventDefault()
   setCong(!cong)
   setName("")
   setnum("")
   setSecnum("")
   setAddres("")
   setDetails("")
    addDoc(userCollectionRef,{
        name:name,
        num:num,
        secnum:secnum,
        Addres:Addres,
        Details:Details,
        ninja:ninja,
       
    })
 }

 
//get data from firebase
const userCollectionRef=collection(db,"candledata")


    return (
    <div className='mt-[100px]'>
{cong?(
  <form className='flex flex-col  items-center'>

  <label className='text-[20px] '>Full name</label>
  <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}} className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder='اكتب اسمك بالكامل'/>

  <label className='text-[20px] '>num</label>
  <input type='text'   value={num} onChange={(e)=>{setnum(e.target.value)}}   className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder=" رقم الهاتف"  /> 

  <label className='text-[20px] '>sec num</label>
  <input type='text'  value={secnum}  onChange={(e)=>{setSecnum(e.target.value)}}  className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder="رقم هاتف اخر (ضروري)"   />

  <label className='text-[20px] '>Details</label>
  <input type='text'  value={Details}  onChange={(e)=>{setDetails(e.target.value)}}  className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder="اكتب العدد التي تريد واي تفاصيل اخري"   />


  <label className='text-[20px] '>Addres</label>
  <textarea type='text'  value={Addres}  onChange={(e)=>{setAddres(e.target.value)}}   className='w-[80%] rounded-[30px] p-3 text-right text-sm' placeholder="العنوان بالتفصيل"  />

  


  <button onClick={handle} className='mt-[60px] bg-[#f78da7] p-3 rounded text-[#eee] px-10 font-bold hover:scale-[1.06] duration-500'>submit</button>
  </form>
):(
  <div className='text-center bg-[#f78da7] m-auto w-fit p-5 rounded'>
  <h2 className='text-[25px]'>   تمت عمليه الشراء بنجاح </h2> 
  <p>   نتمني ان تكون خدمتنا قد نالت اعجابك  وسوف يتم ارسال المنتج لك بعد 14 يوم من اليوم <br/> ويمكنك ايضا القاء نظره علي الكورسات المتاحه </p>
  </div>
)}



    </div>
  )
}

export default Form