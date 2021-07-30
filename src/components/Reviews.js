import React from 'react';
// import styled from 'styled-components';

export default function Reviews() {
  return (
    <div
      id='reviews'
      className='w-1/2 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='font-medium text-3xl text-center text-logo border-b-2 border-logo w-2/3'>
        Customer Reviews
      </h1>
      <br />
      <p>
        "B&C Pest Control I have used for 20+ year. They come one time a year
        unless you have a problem which we rarely do. VERY good."
        <br />- K.H. From Maitland
      </p>
      <br />
      <p>
        "Been using B&C for years and couldn't be happier."
        <br />- C.J. From Sanford
      </p>
      <br />
      <p>
        "B&C Pest Control is awesome. I've used them for years."
        <br />- K.S. From Lake Mary
      </p>
      <br />
    </div>
  );
}
