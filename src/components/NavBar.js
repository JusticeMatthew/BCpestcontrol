import React from 'react';
import styled from 'styled-components';

export default function TopLogo() {
  return (
    <div className='bg-dark flex justify-center w-full items-center p-6'>
      <div className='flex justify-evenly items-center w-3/4'>
        <ul className='flex justify-around text-white'>
          <NavItem>About</NavItem>
          <NavItem>Locations</NavItem>
          <NavItem>Reviews</NavItem>
          <NavItem>Who knows</NavItem>
          <NavItem>Who cares</NavItem>
        </ul>
      </div>
    </div>
  );
}

const NavItem = styled.li`
  margin: 0 16px;
  padding: 8px;

  &:hover {
    color: #de7300;
    border-bottom: 1px solid #de7300;
  }
`;
