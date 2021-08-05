import React from 'react';
// import styled from 'styled-components';

export default function About() {
  return (
    <div
      id='aboutUs'
      className='lg:w-1/2 sm:w-2/3 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='font-medium text-3xl text-center text-logo border-b-2 border-logo w-2/3'>
        About Us
      </h1>
      <br />
      <p>
        Welcome to B&amp;C Pest Control, a locally-owned company in Sanford,
        Florida.
        <br />
        <br /> Our company was started more than 30 years ago by Bob Carpenter.
        When it was time for Bob to retire, he passed along his years of
        knowledge and, eventually, the company to myself and my wife. Bob and
        his wife are like family to us, and we feel very fortunate to be able to
        continue to offer the quality service Bob began.
      </p>
      <br />
      <p>
        We specialize in once-a-year pest control treating the inside and
        outside perimeter of your home. If you have any issues during the year,
        we come back and retreat at no additional cost.
      </p>
      <br />
      <p>
        Bob’s philosophy was to buy the best product, use it the way it’s
        supposed to be used and it will work! Our philosophy is to treat others
        how we want to be treated. We value the personal relationship we have
        with our customers, and it will continue to define B&amp;C Pest Control.
      </p>
      <br />
      <h3>- Garry &amp; JJ Reese</h3>
    </div>
  );
}
