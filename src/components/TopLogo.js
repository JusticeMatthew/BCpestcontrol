import React from 'react';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center p-6'>
      <div className='flex justify-between items-center w-3/4'>
        <h1 className='text-orange text-7xl text-center'>
          B&C <span className='text-white'>Pest Control</span>
        </h1>
        <h2 className='text-white text-2xl text-center'>
          Find us on: Insert links here
        </h2>
      </div>
    </div>
  );
}
