import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { serviceContext } from "../../App";
import CheckoutDetail from "./CheckoutDetail";

const CheckOut = () => {
  const navigate = useNavigate();
  const [service] = useContext(serviceContext);
 

  
 
//   console.log(service)

   


  return (
    <div  className="pt-20 bg-[rgb(41,55,75)] w-full h-screen text-white ">
      <button className="flex items-center px-4 md:px-8 lg:px-16 fixed"onClick={() => navigate(-1)}><FaArrowLeft/><span>back</span></button>
      <p className="text-center py-8 md:text-2xl text-xl font-semibold">CheckOut Details</p>

      <div className="w-3/5 mx-auto pb-20">
      <div className="grid grid-cols-1  gap-4 ">
          {service.map(data=> <CheckoutDetail key={data.id} service={data} /> )}
      </div>
      </div>
    </div>
  );
};

export default CheckOut;
