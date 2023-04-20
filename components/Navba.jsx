import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../public/img/logo.jpeg'


const Navba = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#eee');
  const [linkColor, setLinkColor] = useState('#000000');
  const[show ,setshow]=useState(false)
  const[show2 ,setshow2]=useState(true)
  const[value ,setvalue]=useState("")

  const [navdown, setnavdown] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 150) {
        setShadow(true);

      } else {
        setShadow(false);

      }
    };
    window.addEventListener('scroll', handleShadow);

  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed top-0 w-full h-16 shadow-xl z-[100] ease-in-out duration-300 '
          : ' absolute top-0  w-full  h-16 z-[100]'
      }
    >
      <div className='flex  items-center w-full h-full px-2 2xl:px-16'>

        <div className='flex items-center sm:justify-around md:justify-around justify-between w-full text-center'>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b font-bold border-white-300'>
              <Link href='/'>Home</Link>
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b font-bold border-white-300'>
              <Link href='/Courses'>Courses </Link>
            </li>

          </ul>

          <Link href='/' className='flex items-center'>
          <span className='text-black text-sm sm:text-[20px]'>lamsa</span>
          <Image src={logo} alt='img' className=' m-auto rounded-[50%] sm:w-full md:w-full w-[30%] relative sm:top-5'/>
          <span className='text-black text-sm sm:text-[20px]'>candles</span>
                  </Link>

          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>

            <li className='ml-10 text-sm uppercase hover:border-b font-bold border-white-300'>
            <Link href='/About'> about us </Link>
          </li>

          <li className='ml-10 text-sm uppercase hover:border-b font-bold border-white-300'>
          <Link href='' onClick={()=>{setshow(!show)}}> admin</Link>

{show?(
  <div className=' absolute top-16 right-4 flex flex-col'> 

  <input type='text' placeholder='Passwork' className='p-2 rounded' value={value}  onChange={(e)=>{setvalue(e.target.value)}} />
  <button onClick={()=>{
    if(value==="123456789"){
      setshow2(!show2)
    }
  }} className='bg-black p-2 rounded text-[#f78da7]'>ok</button>

  {show2?"":(

    <Link href='/Dashboard' className='text-black p-2 rounded bg-[#f78da7]'  onClick={()=>{setshow(!show),setvalue(""),setshow2(!show2)}}> lets go</Link>
  )}
  </div>
):""}
        </li>

          </ul>


          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#eee] p-10 ease-in duration-500'
              : 'fixed left-[-194%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
<p></p>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:bg-white duration-500 hover:shadow-[#f78da7]'
              >
                <AiOutlineClose />
              </div>
            </div>

          </div>
          <div className='py-4 mt-10 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm  rounded hover:bg-[#f78da7] mt-5 duration-500 px-5 font-bold hover:text-white'>
                  Home
                </li>
              </Link>
              <Link href='/About'>
                <li onClick={() => setNav(false)} className='py-4 text-sm  rounded hover:bg-[#f78da7] mt-5 duration-500 px-5 font-bold hover:text-white'>
                  About
                </li>
              </Link>
 
              <Link href='/Courses'>
                <li onClick={() => setNav(false)} className='py-4 text-sm   rounded hover:bg-[#f78da7] mt-5 duration-500 px-5 font-bold  hover:text-white'>
                  Courses
                </li>
              </Link>

              <li className=' py-4 text-sm   rounded hover:bg-[#f78da7] mt-5 duration-500 px-5 font-bold  hover:text-white'>
              <Link href='' onClick={()=>{setshow(!show)}}> admin</Link>
    {show?(
      <div className=' flex flex-col'> 
    
      <input type='text' placeholder='Passwork' className='p-2 rounded text-black' value={value}  onChange={(e)=>{setvalue(e.target.value)}} />
      <button onClick={()=>{
        if(value==="123456789"){
          setshow2(!show2)
        }
      }} className='bg-black p-2 rounded text-[#f78da7]'>ok</button>
    
      {show2?"":(
    
        <Link href='/Dashboard' className='text-black p-2 rounded bg-[#f78da7]'  onClick={()=>{setshow(!show),setvalue(""),setshow2(!show2)}}> lets go</Link>
      )}
      </div>
    ):""}
            </li>

            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navba;
