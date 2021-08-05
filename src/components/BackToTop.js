import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { UpSquareTwoTone } from '@ant-design/icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <UpSquareTwoTone
        onClick={scrollToTop}
        twoToneColor='#a3d845'
        className='text-5xl hidden fixed bottom-16 right-6 transition-all duration-200 '
        style={{ display: visible ? 'block' : 'none' }}
      />
    </>
  );
}
