import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className="w-screen">
           <div className='flex justify-between items-center z-10 px-4 h-20 fixed  md:px-8 lg:px-16 w-full bg-[rgb(41,55,75)] text-white'>
               <h1 className='text-2xl font-bold'>Logo</h1>
              <div>
              <ul className='hidden md:flex items-center text-xl'>
                   <li className='px-4'>Home</li>
                   <li className='px-4'>Food</li>
                   <li className='px-4'>Service</li>
                   <li className='px-4'>About</li>
                   <div>
                       <button className='px-4 font-semibold py-2 rounded-full bg-[rgb(99,214,196)] shadow-2xl '>Sign Up</button>
                   </div>
               </ul>
              </div>
                  <div onClick={()=> setNav(!nav)} className='block md:hidden'>
               {  nav ?  <AiOutlineClose size={30}></AiOutlineClose> :
                  <AiOutlineBars size={30} ></AiOutlineBars>}
                  </div>
                  <div className={!nav ? 'md:hidden  fixed top-[-100%] w-full left-0 bg-[rgb(41,55,75)] text-2xl' : 'md:hidden  fixed top-20 w-full left-0 bg-[rgb(41,55,75)] text-2xl'}>
              <ul className='flex flex-col justify-center place-items-center'>
                   <li className='py-4 '>Home</li>
                   <li className='py-4 '>Food</li>
                   <li className='py-4 '>Service</li>
                   <li className='py-4 '>About</li>
                   <div>
                       <button className='px-4 mb-8 font-semibold py-2 rounded-full bg-[rgb(99,214,196)] shadow-2xl '>Sign Up</button>
                   </div>
               </ul>
              </div>
              
               
               
               </div> 
        </div>
    );
};

export default Navbar;