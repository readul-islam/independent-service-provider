import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(()=>{

        fetch('Photos.json')
        .then(res =>res.json())
        .then(data => setService(data))


    },[])

    return (
        <div className="w-full h-screen   bg-[rgb(41,55,75)]">
           
            <div className="w-3/4  pb-20 mx-auto">
              <h1 className="text-center lg:text-5xl md:text-3xl text-2xl 
              lg:py-10 md:py-14 py-16 font-semibold">OUR SERVICE</h1>
                  
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
           {
            services.map(service => <Service service={service} key={service.id}></Service>)
            }

           </div>
           </div>
            
        </div>
    );
};

export default Services;