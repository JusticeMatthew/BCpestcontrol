import React from 'react';
// import styled from 'styled-components';

export default function About() {
  return (
    <div
      id='aboutUs'
      className='w-1/2 text-center text-light bg-dark m-6 p-6 rounded-2xl flex flex-col justify-center items-center'
    >
      <h1 className='text-2xl text-center text-logo border-b-2 border-logo w-2/3'>
        About Us
      </h1>
      <br />
      <p>
        Welcome to B&C Pest Control, a locally owned company.
        <br />
        <br /> Our company was started more than 30 years ago by our friend Bob
        Carpenter, and when it was time for him to retire, he passed along his
        years of knowledge to Garry Reese. Bob and his wife Carol are like
        family to us. We have known them for 20 years and are very grateful to
        continue the quality service Bob started all those years ago.
      </p>
      <br />
      <p>
        We specialize in once-a-year pest control. This means We treat the
        inside of your home as well as the outside perimeter and you are good
        for the entire year. Any issues and we will come back out and retreat at
        no additional cost.
      </p>
      <br />
      <p>
        Bob's philosophy was to buy the best product, use it the way it's
        supposed to be used, and it will work!
        <br />
        Our Philosophy is to treat others how we want to be treated, the golden
        rule.
        <br />
        These two philosophies will continue to define B&C Pest Control.
      </p>
    </div>
  );
}
