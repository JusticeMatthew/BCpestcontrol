import React from 'react';

import logo from '../assets/logo-top.png';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt='bcpestcontrol-logo' className='h-72 w=full'></img>
      </div>
    </div>
  );
}
