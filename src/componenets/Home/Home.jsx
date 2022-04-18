import React from 'react';
import Typed from 'react-typed';
import banner from '../../assets/image/Asset 1.png'

import Services from '../Service/Services';

const Home = () => {
    return (
        <>
        <div className="w-screen  h-screen  pt-20 text-white bg-[rgb(41,55,75)] ">
            <div className="w-3/4 h-full   mx-auto md:pt-20 ">
           <div className="lg:flex    justify-between items-center ">
          <div className="lg:space-y-4 md:space-y-2  w-full h-full text-center lg:text-left  ">
          <h1 className="lg:text-5xl font-bold md:text-3xl  text-2xl ">WILDLIFE PHOTOGRAPHER  <p className="  text-[rgb(99,214,196)]  '">
           <Typed strings={['OF THE YEAR', 'Grand title winners']} typeSpeed={120} backSpeed={140} loop></Typed>
               </p></h1>
               <p className="lg:text-xl text-[14px] md:text-base text-gray-400 pb-2 ">These pictures can be either stored as a soft copy or they can 
             
              be printed on photographi
             
                .</p>
            <div className='w-full'>
            <button className="bg-[rgb(99,214,196)]/60 hover:bg-[rgb(99,214,196)] mb-4  md:text-xl font-semibold  lg:px-10 lg:py-4 md:px-6 md:py-2 px-3 py-1 md:mb-8 rounded-full uppercase ">See more</button>
            </div>
          </div>

             <div className='w-full h-full'>
                 <img className="lg:w-[1200px] md:[200px] rounded-2xl" src={banner} alt="" />
             </div>

           </div>


            </div>
            
       
        </div>
        <Services/>
        </>
    );
};

export default Home;