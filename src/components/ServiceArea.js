import React from 'react';
// import styled from 'styled-components';

export default function ServiceArea() {
  return (
    <div className='w-1/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-center text-logo border-b-2 border-logo w-2/3'>
        Our Service Areas
      </h1>
      <br />
      <div className='text-xl flex'>
        <div className='m-6'>
          <p>Sanford</p>
          <p>Longwood</p>
          <p>Winter Springs</p>
          <p>Altamonte Springs</p>
          <p>Maitland</p>
          <p>Apopka</p>
          <p>Fern Park</p>
        </div>
        <div className='m-6'>
          <p>Lake Mary</p>
          <p>Oviedo</p>
          <p>Casselberry</p>
          <p>Sorrento</p>
          <p>West Volusia</p>
          <p>Chuluota</p>
        </div>
      </div>
    </div>
  );
}
