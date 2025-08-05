// import React from 'react'
// import { assets } from '../assets/assets'
// import { CalendarIcon, ClockIcon } from 'lucide-react'

// const HeroSection = () => {
//   return (
//     <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg.jpg")] bg-center h-screen'>
//         <img src={assets.googlePlay} alt="" className="max-h-11 lg:h-11 mt-20"/>

//         <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>The<br/>Avengers</h1>
//         <div className='flex items-center gap-4 text-gray-300'>
//           <span>
//             ACTION || ADVENTURE || SCI-FI
//           </span>
//           <div className='flex items-center gap-1'>
//             <CalendarIcon className='w-4.5 h-4.5'/>2018


//           </div>
//           <div className='flex items center gap-1'>
//             <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
//           </div>
//         </div>

//         </div>
//   )
// }

// export default HeroSection




import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

  const navigate=useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg.jpg")] bg-center bg-cover h-screen'>
      <img src={assets.logo} alt="Google Play" className="max-h-11 lg:h-11 mt-20" />

      <h1 className='text-5xl md:text-[70px] md:leading-[4.5rem] font-semibold max-w-[28rem]'>
        The<br />Avengers
      </h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>ACTION || ADVENTURE || SCI-FI</span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4.5 h-4.5' />2018
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5' />2h 8m
        </div>
      </div>
      <p className='max-w-md text-fuchsia-600'>in the world full of lies be black or white dont be grey</p>
      <button onClick= {()=>navigate('/movies')}className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>
  );
};

export default HeroSection;




