import React, { useState } from 'react'
import Data from '../Data'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function Candy() {
  const[itemid,setitemid]=useState("")
  console.log(itemid)
  return (
    <div  className='bg-[#eee]   mt-[100px] mb-[100px] p-2'>
    <h2  className=' font-[Yesteryear] text-[40px]   text-center  border-b-2 border-black w-fit m-auto '>Candy Candles</h2>
    <div className='flex flex-wrap justify-center mt-10 '>
    {Data.map((item)=>(
      <div key={item.id} className='m-5 hover:scale-[1.06] duration-500'>
<Link href={`/Details/${item.id}`}>

<Card style={{ width: '15rem' }}  key={item.id}>
<Card.Img variant="top" src={item.image} className='w-full h-[200px] rounded-lg'/>
<Card.Body className='text-center'>
  <Card.Title>{item.name}</Card.Title>
  <Card.Text>
  {item.description}
  </Card.Text>

  
  </Card.Body>
  </Card>
</Link>
        </div>

        ))}
    </div>


    </div>
  )
}

export default Candy