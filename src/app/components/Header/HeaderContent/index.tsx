'use client';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Menu from '../Menu';
import Navigation from '../Navigation';

function HeaderContent() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='w-[min(90%,1440px)] flex flex-col'>
      <Navigation handleMenu={handleMenu} menuOpen={menuOpen} />
      <AnimatePresence mode='wait'>{menuOpen && <Menu />}</AnimatePresence>
    </div>
  );
}

export default HeaderContent;
