import React from 'react';
import styled from 'styled-components';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center'>
      <div className='flex justify-evenly items-center w-3/4'>
        <ul className='flex justify-around text-white'>
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
    color: #de7300;
    border-bottom: 3px solid #de7300;
  }
`;
