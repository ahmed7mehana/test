import React from 'react'

function Name({ninja}) {
     console.log(ninja)

  return (
    <div className='mt-10 text-center'>
    <img src={ninja.image} className='h-[150px] w-full rounded'/>
    <p>{ninja.name}</p>
    <p>{ninja.price}</p>
    
    </div>
  )
}

export default Name