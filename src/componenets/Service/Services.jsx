import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { serviceContext } from '../../App';

import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [service, setService] = useContext(serviceContext) ; 

    const serviceHandler = (selectedService) =>{ 
        const findService = service.find(data => data.id === selectedService.id);
        if(!findService){

            setService([...service,selectedService ])
        }else{

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
        
        
    }   
      
          
   

    useEffect(()=>{

        fetch('Photos.json')
        .then(res =>res.json())
        .then(data => setServices(data))


    },[])

    return (
        <div className="w-screen h-full overflow-hidden text-white  bg-[rgb(41,55,75)]">
           
            <div className="w-3/4  pb-20 mx-auto">
              <h1 className="text-center lg:text-5xl md:text-3xl text-2xl 
              lg:py-10 md:py-14 py-16 font-semibold">OUR SERVICE</h1>
                  
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
           {
            services.map(service => <Service service={service} key={service.id} serviceHandler ={serviceHandler}></Service>)
            }

           </div>
           </div>
            
        </div>
    );
};

export default Services;