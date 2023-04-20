import { useTheme } from 'next-themes'
import React from 'react'

function About() {
  const{theme,setTheme}=useTheme('dark')

  return (
    <div className=' relative dark:bg-[#57C5B6]  bg-[#1A5F7A] rounded w-[95%] sm:p-6  m-auto mb-10 mt-10 '>
    
    <div className="flex items-center  flex-wrap lg:justify-between justify-center mt-10 p-[20px]" >

    <div className="mb-10 w-[85%] ">
    <h2 className="font-bold text-[30px] border-b-2 border-black mb-10 w-[70%]  dark:!border-white  ">من انا ؟</h2>
    <p className=" text-[#888] ">
    انا لمسه صاحبه البراند 🕯🎂
طالبه في فنون تطبيقية 🎨👷🏼‍♀️
طول عمري عندي شغف تجاه الحاجات الهاند ميد و عندي شعف اكتر اني ابقي شخصيه ناجحه و معروفه 
حاول ديما يكون عندي الطاقه و الوقت اني ادرس و اشتغل مع بعض و انجح في الاتنين و الحمدلله بفضل ربنا ده بيحصل♥️
هدفي ان الناس كلها تجرب الشمع بتاعي 
لان انا دائما بسعي تجاه الاختلاف و التجديد و ده ال ديما هتلاقوه عندي♥️
هفضل اسعي و اطور من نفسي و اشتغل علي نفسي لغايه ما ابقي براند كل الناس عارفاه و بتحبه و ديما هسعي ورا التمييز♥️🕯
و طبعا انجاح ال وصلت ليه في وقت قصير كان وراه مساعده من يد سحريه🫣 
<br/>
<span className=' bg-black text-white dark:text-black dark:bg-white p-2 text-[18px] rounded  sm:flex flex-col  items-center hidden'>احب  اقولكم اهلا بيكم في متجر لمسه الالكتروني لعرض شموعي وطلب ما تريده بكل سهوله</span>
    </p>
  

    </div>
    <div >
    <div className=" border-2 !border-black dark:!border-white w-full sm:flex hidden">
    <img src='https://images.pexels.com/photos/7521473/pexels-photo-7521473.jpeg?auto=compress&cs=tinysrgb&w=400' alt="img" className=" rounded transform hover:scale-[1.02] duration-500 h-[200px] " style={{margin:"-15px",marginBottom:"20px",marginLeft:"14px"}}/>
    </div>
    </div>
    </div>
    
    
    </div>
  )
}

export default About