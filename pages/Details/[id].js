import React, { useState } from 'react'
import Data from '../../Data';
import { Button } from 'react-bootstrap';
import Buy from '@/Components/Buy';

export const getStaticPaths = async () => {
    const paths = Data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data=Data[id-1]
  
    return {
      props: { ninja: data }
    }
  }


function Details({ninja}) {
  const[show,setShow]=useState(false)
  
  // console.log(ninja)
  return (
    <div className='flex justify-center flex-col'>
    <div className=' mt-[200px] mb-[100px] flex justify-evenly sm:flex-row flex-col items-center'  >
    <img src={`/${ninja.image}`}  className='w-[300px] h-[300px] rounded-[20px]'/>
        <div className='bg-[#f78da7] p-3 rounded text-center'>  
    <p>{ninja.name}</p>
    <p>{ninja.description}</p>
    <p>{ninja.price}</p>
    </div>
    
        </div>
        <Button onClick={()=>{setShow(!show)}} className='bg-[#f78da7] p-2 rounded px-10 text-center m-auto'> Buy</Button>
        
        
          {show? <Buy show={show} ninja={ninja} setShow={setShow} />:""}

       
    </div>
  )
}

export default Details