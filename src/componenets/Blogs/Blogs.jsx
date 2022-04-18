import React from "react";

const Blogs = () => {
  return (
    <div className="pt-24 w-full h-full text-justify text-white bg-black">
      <div className="w-4/5 mx-auto pb-20 ">
          <h1 className="text-center text-xl font-semibold lg:text-5xl py-8 md:text-2xl">About Firebase</h1>
        <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">Autorization vs Authentication</h1>
            <p className="leading-6 ">
            Authentication is the peocess of recognizing a user's identity.it confirms that an individual is who they 
claim to be, which prevent unauthorized access to a program ,system,ystem, network, or device, but does not affect the access rights of the individual
<hr />
Authorization is a process by which a server determines if 
the client has permission to use a resource or access a file.
Authorization is usually coupled with authentication so that the server 
has some concept of who the client is that is requesting access.
            </p>
        </div>
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">Why are you use firebase? </h1>
            <p>
            
               Firebase is powerfull for a develoer because it allows authentication and authorization and many future . this is provide google authentication , facebook authentication , and many authentication . this is very powerfull tool . it has realtime data storage and provides for a developer 
            </p>
        </div>
        <div className="border flex flex-col items-center rounded shadow-slate-600/50 p-10 shadow-2xl">
            <h1 className="lg:text-3xl md:text-2xl py-4 text-xl font-semibold ">What others services <p> provides  firebase authentication</p> ?</h1>
            
            <p>
            Firebase is a development platform that provides a multitude of features
from hosting to database to analytics to authentication and much more.
Firebase provides hosting , storage , server key  realtime database etc.
firebase provides google authentication facebook authentication etc.
I think firebase is powerfull tool for a web developer!
            </p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Blogs;
