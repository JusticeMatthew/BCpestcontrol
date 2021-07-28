import React from 'react';
import styled from 'styled-components';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center mb-12'>
      <div className='flex justify-evenly items-center w-3/4'>
        <ul className='flex justify-around text-light text-xl'>
          <NavItem>About Us</NavItem>
          <NavItem>Service Area</NavItem>
          <NavItem>Reviews</NavItem>
          <NavItem>Contact Us</NavItem>
        </ul>
      </div>
    </div>
  );
}

const NavItem = styled.li`
  margin: 0 8px;
  border-bottom: 3px solid #303030;
  padding: 16px;

  &:hover {
    color: #f6921e;
    border-bottom: 3px solid #f6921e;
  }
`;
