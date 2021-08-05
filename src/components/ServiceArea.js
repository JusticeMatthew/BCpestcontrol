import React from 'react';
// import styled from 'styled-components';

export default function ServiceArea() {
  return (
    <div
      id='serviceArea'
      className='lg:w-1/2 sm:w-2/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='font-medium text-3xl text-center text-logo border-b-2 border-logo w-2/3'>
        Service Areas
      </h1>
      <br />
      <div className='text-xl flex'>
        <div className='m-6'>
          <p className='p-1'>Sanford</p>
          <p className='p-1'>Longwood</p>
          <p className='p-1'>Winter Springs</p>
          <p className='p-1'>Altamonte Springs</p>
          <p className='p-1'>Maitland</p>
          <p className='p-1'>Apopka</p>
          <p className='p-1'>Fern Park</p>
          <p className='p-1'>Deltona</p>
        </div>
        <div className='m-6'>
          <p className='p-1'>Lake Mary</p>
          <p className='p-1'>Oviedo</p>
          <p className='p-1'>Casselberry</p>
          <p className='p-1'>Sorrento</p>
          <p className='p-1'>Debary</p>
          <p className='p-1'>Orange City</p>
          <p className='p-1'>Chuluota</p>
          <p className='p-1'>Deland</p>
        </div>
      </div>
    </div>
  );
}
