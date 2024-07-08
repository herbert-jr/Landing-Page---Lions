'use client';

import { useCallback, useEffect, useState } from 'react';

export type Slide = {
  title: string;
  image: string;
};

interface CarouselProps {
  children: any;
  slides: Slide[];
  autoPlay?: boolean;
  NextNPrev?: boolean;
  Mark?: boolean;
}

function Carousel({
  children,
  slides,
  autoPlay = false,
  NextNPrev = false,
  Mark = false,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  const next = useCallback(
    () =>
      setCurrentSlide((currentSlide) =>
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
      ),
    [slides.length],
  );

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, [next, autoPlay]);

  return (
    <div className='relative overflow-hidden w-full h-auto rounded-xl md:rounded-3xl border'>
      <div
        className='w-full flex transition-transform ease-personality duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children}
      </div>
      {NextNPrev && (
        <div className='absolute top-1/2 left-0 flex items-center justify-between w-full'>
          <button
            onClick={prev}
            className='absolute left-0 p-4 bg-black bg-opacity-50 text-white rounded-full'>
            {'<'}
          </button>
          <button
            onClick={next}
            className='absolute right-0 p-4 bg-black bg-opacity-50 text-white rounded-full'>
            {'>'}
          </button>
        </div>
      )}
      {Mark && (
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-2 h-2 bg-white rounded-full
              ${currentSlide === i ? 'p-1' : 'bg-opacity-50'}
            `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
