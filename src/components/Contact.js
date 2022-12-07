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
        <a href='mailto:info@bandcpestcontrol.com'>
          <MailOutlined className='text-2xl pr-2' />
          info@bandcpestcontrol.com
        </a>
        <br />

        <a href='tel:4073302644'>
          <PhoneOutlined className='text-2xl pr-2' />
          407-330-2644
        </a>
      </p>
      <br />
      <p>
        For Brevard County appointments call or text Andy directly at
        <br />
        <a href='tel:3212656877'>
          <PhoneOutlined className='text-2xl pr-2' />
          321-265-6877
        </a>
      </p>
    </div>
  );
}
