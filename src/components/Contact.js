import React from 'react';
// import styled from 'styled-components';

export default function Contact() {
  return (
    <div
      id='contact'
      className='w-1/2 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='text-2xl text-center text-logo border-b-2 border-logo w-2/3'>
        Contact Us
      </h1>
      <br />
      <p className='text-xl'>
        <a href='mailto:info@bandcpestcontrol.com'>info@bandcpestcontrol.com</a>
        <br />
        <a href='tel:4073302644'>407-330-2644</a>
      </p>
    </div>
  );
}
