import React from "react";
import developer from '../../assets/image/developer.png'

const About = () => {
  return (
    <div className=" w-screen bg-black text-white pt-28 ">
      <div className="w-4/5 mx-auto ">
        <div className="md:flex  items-center justify-between w-full">

          <div className="space-y-3 ">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold uppercase">I'm web <span className="text-[rgb(99,214,196)]"> Developer</span> </h1>
           <p className="leading-6">My aim in life has always been to become a successful full Stack web developer. <p>
           Full Stack web developer is highly respected in the field of information technology as almost every field is associated with computers these days.

           </p>
<p>The role of a  full Stack web developer becomes crucial in tapping the available sources to provide the best solution for issues faced.</p>

<p>Checking out the latest web appllication upgrades has to be considered as well.  full Stack web developer will help me in realizing my dream of making it big in the severe competition involved in the corporate market</p>..</p>
          </div>

            <div className='w-full h-full'>
                <img className='w-full' src={developer} alt="" />
            </div>


        </div>
      </div>
    </div>
  );
};

export default About;
