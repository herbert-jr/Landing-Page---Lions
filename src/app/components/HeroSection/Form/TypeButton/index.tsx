import React from 'react';

interface TypeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string[];
  isActive: boolean;
}

function TypeButton({ isActive, text, ...rest }: TypeButtonProps) {
  return (
    <button
      className='relative w-fit flex flex-col md:flex-row gap-1 items-center
       justify-center uppercase md:normal-case'
      {...rest}>
      <span className='text-xs md:text-base font-semibold leading-none'>
        {text[0]}
      </span>
      <span className='text-sm md:text-base font-bold leading-none'>
        {text[1]}
      </span>
      {isActive && (
        <span className='absolute -bottom-1 left-0 w-full h-1 mt-1 bg-primary-800'></span>
      )}
    </button>
  );
}

export default TypeButton;
