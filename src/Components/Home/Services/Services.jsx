import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { CircleLoader } from 'react-spinners';
import ServicesCard from './ServicesCard';

const Services = () => {

    const {isPending,error, data} = useQuery({
        queryKey:'services',
        queryFn: async ()=>{
            const response = await axios.get("http://localhost:5000/services");
            return response.data;
        },
    })

    if(isPending){
        return (
          <div>
            <CircleLoader color="#36d7b7" />
          </div>
        );
    }

    console.log(data);
    if(error){
      return (
        <img
          src="https://img.freepik.com/premium-vector/no-data-empty-data-concept-illustration-vector_610956-1400.jpg"
          alt=""
        />
      );
    }


    return (
      <div>
        <div className='text-center space-y-3 mb-5'>
          <h4 className="font-semibold text-orange-500">Services</h4>
          <h1 className="font-bold text-5xl ">Our Service Area</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            data?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
          }
        </div>
      </div>
    );
};

export default Services;