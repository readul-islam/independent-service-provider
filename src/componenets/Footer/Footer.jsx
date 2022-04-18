import React from "react";

const Footer = () => {
  return (
    <div className="w-screen bg-[rgb(41,55,75)] text-white flex-wrap pt-20">
      <div className="md:flex items-center justify-center pb-12">
        <div className="massage lg:px-16 px-6 md:w-2/4">
          <h1 className="text-3xl font-bold md:text-4xl pb-6 text-center">
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
            <button className="bg-[rgb(137,96,125)]/70 hover:bg-[rgb(137,96,125)] mb-4  md:text-xl font-semibold  lg:px-10 lg:py-4 md:px-6 md:py-2 px-3 py-1 md:mb-8 rounded-full uppercase ">
              Submit
            </button>
          </div>
        </div>

        <div className="md:w-2/4 lg:space-y-9 lg:px-16 px-6  mt-12">
          <p className=" text-3xl md:text-4xl mb-6 font-bold text-center">
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
        <div className="flex justify-center w-full px-1 text-sm md:text-2xl md:py-3 py-2">
          <div>
            <p className="">Sports phopographer since 2015 to 2022</p>

            <p className=" w-full text-center">Copyright &copy; 2022</p>
          </div>
        </div>
        <div className="flex justify-center lg:gap-22 md:gap-6 py-2 gap-6">
          <span className="text-4xl text-slate-400 duration-500 hover:text-[rgb(184,19,134)]">
            {" "}
            <ion-icon name="logo-google"></ion-icon>{" "}
          </span>
          <span className="text-4xl text-slate-400 duration-500 hover:text-[rgb(184,19,134)]">
            {" "}
            <ion-icon name="logo-facebook"></ion-icon>{" "}
          </span>
          <span className="text-4xl text-slate-400 duration-500 hover:text-[rgb(184,19,134)]">
            {" "}
            <ion-icon name="logo-apple"></ion-icon>{" "}
          </span>
          <span className="text-4xl text-slate-400 duration-500 hover:text-[rgb(184,19,134)]">
            {" "}
            <ion-icon name="logo-twitter"></ion-icon>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
