import React from 'react';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default function Contact() {
  return (
    <div
      id='contact'
      className='lg:w-1/2 sm:w-2/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='font-medium text-3xl text-center text-logo border-b-2 border-logo w-2/3'>
        Contact Us
      </h1>
      <br />
      <p className='text-xl'>
        <MailOutlined className='text-2xl pr-2' />
        <a href='mailto:info@bandcpestcontrol.com'>info@bandcpestcontrol.com</a>
        <br />
        <PhoneOutlined className='text-2xl pr-2' />
        <a href='tel:4073302644'>407-330-2644</a>
      </p>
    </div>
  );
}
