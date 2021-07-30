import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, Events } from 'react-scroll';

export default function TopLogo() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });
  }, []);

  return (
    <div className='bg-dark flex justify-center w-full items-center fixed top-0'>
      <div className='flex justify-evenly items-center w-3/4'>
        <ul className='flex justify-around text-light text-center text-xl'>
          <Link
            activeClass='active'
            to='aboutUs'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
          >
            <NavItem tabIndex='0'>About Us</NavItem>
          </Link>
          <Link
            activeClass='active'
            to='serviceArea'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
          >
            <NavItem tabIndex='0'>Service Area</NavItem>
          </Link>
          <Link
            activeClass='active'
            to='reviews'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
          >
            <NavItem tabIndex='0'>Reviews</NavItem>
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
          >
            <NavItem tabIndex='0'>Contact Us</NavItem>
          </Link>
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

  &:focus {
    color: #f6921e;
    border-bottom: 3px solid #f6921e;
  }
`;
