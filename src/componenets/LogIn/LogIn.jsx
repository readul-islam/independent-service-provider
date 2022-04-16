import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const LogIn = () => {
    return (
       <div className="w-screen text-white pt-32">
            <div className=" md:w-[600px] w-[90%] bg-[rgb(41,55,75)] mx-auto rounded-2xl shadow-2xl shadow-[rgb(41,55,75)]/75">
      
      <div className="w-full lg:px-20 p-4 md:px-8">
          <div className="text-center text-2xl font-semibold">Sign In</div>
          <form className="w-full md:pt-8 ">
             
                 
             
                  <label>E-MAIL</label>
                  <input type="email"  placeholder='Enter your email' />
           
                  <label>PASSWORD</label>
                  <input type="password" placeholder='password' />
              
            

                
         <span>
         <input className=' w-3' type="checkbox"/>
         <span className='ml-2'>Remember Me  </span>
         </span>

                <div className=" md:flex justify-center mt-4 space-y-4 md:space-x-4 items-center">
                <button className="bg-[rgb(99,214,196)] md:text-xl font-semibold px-4  md:px-12 py-1 md:py-2 rounded-full ">Sign In</button>
                <p className='underline  underline-offset-4 decoration-[rgb(99,214,196)] px-1 pb-3'>Create a new account</p>
                </div>

                  
             
          </form>
          <div className="w-full flex items-center pt-6">
            <hr className='w-1/2 mr-2' /> <span>or</span> <hr className='w-1/2 ml-2' />
          </div>
         <div className='flex justify-between pt-6 text-white'>
         <p><AiFillGithub size={40}/></p>
          <p><AiFillGoogleCircle size={40}/></p>
          <p><FaFacebook size={40}/></p>
         </div>
      </div>
       </div>
       </div>
    );
};

export default LogIn;