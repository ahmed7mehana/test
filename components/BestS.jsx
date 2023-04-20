import React from 'react'
import Cate from './Cate'
function BestS() {
  return (
    <div className='mt-[50px] py-[60px] text-center bg-[#eee] w-[80%] m-auto'>

<h2 className=' font-[Yesteryear] text-[40px]   text-center m-3 '>[ Cateygory ]</h2>
<p className='text-center border-b-2 border-black   dark:border-white  w-[80%] m-auto text-[20px] '>    </p>


<div className=' flex  flex-wrap justify-center mb-10 mt-10'>
<Cate linkto={"/Candy"} title={"Candy Candels"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/4202963/pexels-photo-4202963.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
<Cate linkto={"/Basic"} title={"Basic Candles"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/1123256/pexels-photo-1123256.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
<Cate linkto={"/Movies"} title={"Movies Candles"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
<Cate linkto={"/Shea"} title={"Shea Butter"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
<Cate linkto={"/Courses"} title={"Courses"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/4218864/pexels-photo-4218864.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
<Cate linkto={"/Reveiw"} title={"Reveiw"} des={" Here we need a brief summary of the quality of these candles"} img={"https://images.pexels.com/photos/7876380/pexels-photo-7876380.jpeg?auto=compress&cs=tinysrgb&w=2000"}/>
</div>

    </div>
  )
}

export default BestS

