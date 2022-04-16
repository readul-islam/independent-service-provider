import React from 'react';

const Footer = () => {
    return (
        <div className="w-screen bg-[rgb(41,55,75)]/90 text-white pt-20">
            <div className="main md:flex items-center px-32 pb-32">
                <div className="massage w-full">
                    <h1 className="text-2xl pb-8 font-semibold">Write me a line</h1>
                    <div className="pr-32">
                        <label  >NAME</label>
                        <input type="text" />
                        <label >E-MAIL</label>
                        <input type="email" />
                        <label >YOUR MASSAGE</label>
                        <input type="text" />
                    </div>
                </div>
                
                <div className="contact w-full px-10 space-y-9 pt-20">
                    <p className=" text-xl ">Contact With Me</p>
                    <p className="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis accusantium error quibusdam neque quas eaque fugiat temporibus harum dolor.</p>
                    <div className="flex space-x-12 pt-4">
                        <div className='space-y-4 '>
                            <p>@ADRESS:Dhaka , Mirpur, Bangladesh</p>
                            <p>@Mail: developer.readul@gmail.com </p>
                        </div>
                        <div className='space-y-4'>
                            <p>Phone :++889555455456</p>
                            <p>Web:developer.com</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;