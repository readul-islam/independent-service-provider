import React, { useEffect, useState } from "react";


const Footer = () => {
  const onDate = new Date();
  const d = onDate.getFullYear();
  console.log(d) 
  const [date , setDate] = useState(0)
  useEffect(() =>{
    setDate(d)

  },[])

  
  
  return (
    <div className="w-screen  bg-[rgb(41,55,75)] pb-20 text-white flex-wrap pt-20">
      <div className=" w-5/6 mx-auto md:flex items-center justify-center pb-12">
        <div className="massage lg:px-16 px-6 md:w-2/4">
          <h1 className="text-2xl font-bold md:text-3xl pb-6 text-center">
            Write me a line
          </h1>
          <div className="space-y-2">
            <label>NAME:</label>
            <input type="text" placeholder="your name" />
            <label>E-MAIL:</label>
            <input type="email" placeholder="enter email" />
            <label>YOUR MASSAGE:</label>
            <input type="text" placeholder="enter your massage" />
          </div>
          <div className="md:mt-6 mt-4">
            <button className="bg-[rgb(99,214,196)]/70 hover:bg-[rgb(99,214,196)] mb-4  md:text-xl font-semibold  lg:px-10 lg:py-3 md:px-6 md:py-2 px-3 py-1 md:mb-8 rounded-full uppercase ">
              Submit
            </button>
          </div>
        </div>

        <div className="md:w-2/4 lg:space-y-9 lg:px-16 px-6  mt-12">
          <p className=" text-2xl md:text-3xl mb-6 font-bold text-center">
            Contact With Me
          </p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis accusantium error quibusdam neque quas eaque fugiat
            temporibus harum dolor.
          </p>
          <div className="flex lg:space-x-12 pt-8">
            <div className="space-y-4">
              <p>Phone: +6033738899 , +8798653252</p>
              <p>Email: example.jubayer999.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center w-full px-1 text-slate-500 text-sm md:text-xl md:py-3 py-2">
          <div>
            <p className="text-slate-500">Wedding Photographer</p>

            <p className=" w-full text-center">Copyright &copy; {date} </p>
          </div>
        </div>
        <div className="flex justify-center lg:gap-22 md:gap-6 py-2 gap-6">
          <span className="text-2xl text-slate-400 duration-500 ">
            {" "}
            <ion-icon name="logo-google"></ion-icon>{" "}
          </span>
          <span className="text-2xl text-slate-400 duration-500 ">
            {" "}
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </span>
          <span className="text-2xl text-slate-400 duration-500 ">
            {" "}
            <ion-icon name="logo-apple"></ion-icon>{" "}
          </span>
          <span className="text-2xl text-slate-400 duration-500 ">
            {" "}
            <ion-icon name="logo-twitter"></ion-icon>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
