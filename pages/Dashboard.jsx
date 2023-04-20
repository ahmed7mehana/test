import React, { useEffect, useState } from 'react'
import {db}from '../firebaseConfig'
import 'firebase/firestore';
import { collection, deleteDoc, onSnapshot, query,doc } from 'firebase/firestore'
import Name from '@/Components/Name';
function Dashboard() {
 const[data ,setdata]=useState([])
 const[show ,setshow]=useState()
    useEffect(()=>{
        const q =query(collection(db,"candledata"))
        const unsub=onSnapshot(q,(querySnapshot)=>{
           let todoarry=[]
           querySnapshot.forEach((doc)=>{
              todoarry.push({...doc.data(),id:doc.id})
           })
           setdata(todoarry)
        })
        return ()=>unsub()
     },[])

const deletdata=async(id)=>{
await deleteDoc(doc(db,"candledata",id))
}
     
  return (
    <div className='mt-[150px] min-h-screen'>
    <h2 className='w-fit text-center m-auto border-b-2 border-[#f78da7] font-[Satisfy] text-[#f78da7] text-[30px]'> Welcome to the most beautiful person in the universe</h2>
    <p className='bg-[#f78da7] p-2 rounded px-5 hover:bg-black hover:text-[#f78da7] duration-300 w-fit mt-10 m-auto'>Count :( {data.length} ) Order</p>
{data===""?(
    <p>No users yet</p>
):(
    <div className='flex flex-wrap  justify-center mt-10 w-full'>
    {data.map((item)=>(
        <div key={item.id} className='m-5 items-center sm:flex-row flex flex-wrap flex-col sm:justify-between border-2 font-bold border-[#f78da7] w-full rounded p-2'>
        <div className='!w-[40%]'>
        <p className=''>name: {item.name}</p>
        <p className=''>num: {item.num}</p>
        <p className=''>sec num: {item.secnum}</p>
        <p className=''>Addres: {item.Addres}</p>
        <p  className=''>Details: {item.Details}</p>
        </div>
        <Name ninja={item.ninja} />
      <button onClick={()=>deletdata(item.id)} className='bg-[#f78da7] p-2 rounded px-5 hover:bg-black hover:text-[#f78da7] duration-300'>done</button>
 
 
        </div>
))}
    </div>)}
    







 </div>)
}
export default Dashboard