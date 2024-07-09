'use client';

import { useEffect, useState } from 'react';

export type Slide = {
  title: string;
  image: string;
};

interface CarouselProps {
  children: any;
  slides: Slide[];
}

function Carousel({ children, slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(
      () =>
        setCurrentSlide((currentSlide) =>
          currentSlide === slides.length - 1 ? 0 : currentSlide + 1,
        ),
      3000,
    );
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className='relative overflow-hidden w-full h-auto rounded-xl md:rounded-3xl border'>
      <div
        className='w-full flex transition-transform ease-personality duration-500'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
