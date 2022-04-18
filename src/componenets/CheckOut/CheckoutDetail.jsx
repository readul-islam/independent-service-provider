import React from 'react';

const CheckoutDetail = ({ service}) => {
    console.log(service);
    return (
        <div className="border-4 p-4  bg-black text-white rounded border-dotted   shadow-2xl md:flex  justify-between items-center ">
     
      <div className="text-justify space-y-4 pb-4 order-2 md:order-1 mr-8">
        <h1 className="lg:text-2xl text-xl font-semibold ">{service.name}</h1>
        <p>{service.description}</p>
        <h2>Price: ${service.price}</h2>
      </div>
      <div className="order-1 md:order-2">
        <img className="rounded " src={service.img} alt="" />
      </div>
      
    </div>
    );
};

export default CheckoutDetail;