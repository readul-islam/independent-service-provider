import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div className="w-screen">
           <div className='flex justify-between items-center z-10 px-4 h-20 fixed  md:px-8 lg:px-16 w-full bg-[rgb(41,55,75)]  text-white'>
               <h1 className='text-2xl font-bold'>Logo</h1>
              <div>
              <ul className='hidden md:flex items-center text-xl uppercase'>
              <Link to='/home' className='px-4 '>Home</Link>
                   <li className='px-4'>Blogs</li>
                   <Link to='/service' className='px-4 '>Service</Link>
                   <li className='px-4'>About</li>
                   <div>
                   { user ?   <Link to='/login' onClick={()=> signOut(auth)}   className='px-4 font-semibold py-2  rounded-full bg-[rgb(99,214,196)]/70 shadow-2xl uppercase'>Sign Out</Link> :  <Link to='/sign-up' className='px-4 font-semibold py-2 rounded-full bg-[rgb(99,214,196)]/90 uppercase shadow-2xl '>Sign Up</Link>}
                   </div>
               </ul>
              </div>
                  <div onClick={()=> setNav(!nav)} className='block md:hidden'>
               {  nav ?  <AiOutlineClose size={30}></AiOutlineClose> :
                  <AiOutlineBars size={30} ></AiOutlineBars>}
                  </div>
                  <div className={!nav ? 'md:hidden  fixed top-[-100%] w-full left-0 bg-[rgb(41,55,75)] text-2xl ease-in-out duration-1000' : 'md:hidden  fixed top-20 w-full  left-0 bg-[rgb(41,55,75)] text-2xl ease-in-out duration-1000'}>
              <ul className='flex flex-col justify-center items-center '>
                   <Link to='/home' className='py-4 '>Home</Link>
                   <li className='py-5 '>Food</li>
                   <li className='py-5 '>Service</li>
                   <li className='py-5 '>About</li>
                   <div className='pb-8 pt-6'>
                    { user ?  <Link to='/login' onClick={()=> signOut(auth)} className='px-3  font-semibold   py-5 rounded-full bg-[rgb(99,214,196)] shadow-2xl '>Sign Out</Link> :
                     <Link to='/sign-up' className='px-3  font-semibold py-2 rounded-full bg-[rgb(99,214,196)] mb-4 shadow-2xl '>Sign up</Link>}
                   </div>
               </ul>
              </div>
              
               
               
               </div> 
        </div>
    );
};

export default Navbar;