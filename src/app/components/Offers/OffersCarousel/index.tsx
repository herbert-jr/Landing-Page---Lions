'use client';

import { useEffect, useRef, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Card from '../Card';

function OffersCarousel() {
  const [visibleCards, setVisibleCards] = useState(1);
  const [slidesCount, setSlidesCount] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentMargin, setCurrentMargin] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const nextBtn = useRef<HTMLButtonElement>(null);
  const prevBtn = useRef<HTMLButtonElement>(null);

  const cards = [
    <Card key={1} />,
    <Card key={2} />,
    <Card key={3} />,
    <Card key={4} />,
    <Card key={5} />,
    <Card key={6} />,
    <Card key={7} />,
    <Card key={8} />,
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 1080) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 740) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
      setSlidesCount(cards.length - visibleCards);
      if (currentPosition > slidesCount) {
        setCurrentPosition(-slidesCount);
      }
      setCurrentMargin(-currentPosition * (100 / visibleCards));
      setMarginLeft(-currentPosition * (100 / visibleCards));

      if (currentPosition === 0) {
        prevBtn.current?.setAttribute('disabled', 'true');
      }
      if (currentPosition === slidesCount) {
        nextBtn.current?.setAttribute('disabled', 'true');
      }
      if (currentPosition > 0) {
        prevBtn.current?.removeAttribute('disabled');
      }
      if (currentPosition < slidesCount) {
        nextBtn.current?.removeAttribute('disabled');
      }

      console.log('visibleCards', visibleCards);
      console.log('slidesCount', slidesCount);
      console.log('currentPosition', currentPosition);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visibleCards, cards.length, currentPosition, slidesCount]);

  const handleNext = () => {
    if (currentPosition < slidesCount) {
      setCurrentPosition(currentPosition + 1);
      setMarginLeft(currentMargin + 100 / visibleCards);
      setCurrentMargin(currentMargin + 100 / visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
      setMarginLeft(currentMargin - 100 / visibleCards);
      setCurrentMargin(currentMargin - 100 / visibleCards);
    }
  };

  return (
    <div className='relative w-full p-5 overflow-hidden'>
      <div
        className='flex items-center h-full w-auto transition-all ease-personality duration-300'
        style={{
          marginLeft: `${marginLeft}%`,
        }}>
        {cards.map((card) => card)}
        <button
          className='w-fit h-fit text-copy-white px-2.5 py-1.5 bg-secondary-800
         font-medium ml-6 rounded-md hover:bg-secondary-950 transition-colors
         ease-personality duration-300'>
          Ver mais
        </button>
      </div>
      <button
        className='absolute top-1/2 left-0 p-3 text-copy-white rounded-full
         disabled:opacity-50 bg-primary-800 text-lg transition-opacity duration-300
         ease-personality'
        ref={prevBtn}
        onClick={handlePrev}>
        <BiLeftArrow />
      </button>
      <button
        className='absolute top-1/2 right-0 p-3 text-copy-white rounded-full
        disabled:opacity-50 bg-primary-800 text-lg transition-opacity duration-300
        ease-personality'
        ref={nextBtn}
        onClick={handleNext}>
        <BiRightArrow />
      </button>
    </div>
  );
}

export default OffersCarousel;
