import React from "react";
import developer from '../../assets/image/developer.png'

const About = () => {
  return (
    <div className=" w-screen bg-black text-white pt-28 h-screen">
      <div className="w-4/5 mx-auto ">
        <div className="md:flex  items-center justify-between w-full">

          <div className="space-y-3 ">
          <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold uppercase">I'm web <span className="text-[rgb(99,214,196)]"> Developer</span> </h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat fugiat iure adipisci obcaecati dicta natus esse tempora in veritatis reiciendis libero quam tenetur possimus quod, saepe reprehenderit, odio dolores.</p>
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
