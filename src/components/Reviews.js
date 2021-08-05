import React from 'react';
// import styled from 'styled-components';

export default function Reviews() {
  return (
    <div
      id='reviews'
      className='lg:w-1/2 sm:w-2/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='font-medium text-3xl text-center text-logo border-b-2 border-logo w-2/3'>
        Customer Reviews
      </h1>
      <br />
      <p>
        "B&C Pest Control, I have used for 20+ years. They come one time a year
        unless you have a problem which we rarely do. VERY good."
        <br />- K.H. from Maitland
      </p>
      <br />
      <p>
        “This is a locally-owned business that provides superior customer
        service. They took care of our roach problem and we have continued to be
        bug-free since 2015.”
        <br />- J.R. from Deltona
      </p>
      <br />
      <p>
        “Garry and his wife, JJ, run a great business. We’ve had them for 3
        years. They come once a year, never see any bugs in our house. If we
        ever do, they come back at no charge. We also have indoor pets, too.
        Highly recommend!”
        <br />- C.B. from Laky Mary
      </p>
      <br />
      <p>
        “B&amp;C Pest Control walks the walk. I wasn’t due for my annual service
        until August 8 th but called in because I had seen some activity of
        late. Garry came over and addressed the issue. No charge! He said, ‘you
        can pay me when I get here on or around August 8 th for your annual
        service’. When they tell you they guarantee their service, they ain’t
        lying, folks! What a breath of fresh air!”
        <br />- J.O. from Longwood
      </p>
    </div>
  );
}
