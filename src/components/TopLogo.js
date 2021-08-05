import React from 'react';

import logo from '../assets/logo-top.png';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center mt-15'>
      <div className='flex justify-center items-center pt-12'>
        <img
          src={logo}
          alt='bcpestcontrol-logo'
          className='sm:h-60 lg:h-72 w-full'
        ></img>
      </div>
    </div>
  );
}
