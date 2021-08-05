import React from 'react';

import truck from '../assets/truckasset.jpg';

export default function Truck() {
  return (
    <div className='lg:w-1/2 sm:w-2/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'>
      <img src={truck} alt='BC Pest control truck' className='rounded' />
    </div>
  );
}
