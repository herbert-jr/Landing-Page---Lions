import React from 'react';

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  type: string;
  value: string;
}

function InputText({ name, type, text, value, ...rest }: InputTextProps) {
  return (
    <div>
      <label className='text-sm font-semibold text-gray-500'>{text}</label>
      <input
        className='w-full h-10 px-2 border-2 rounded-md bg-white text-gray-500'
        value={`${value}`}
        name={`${name}`}
        type={`${type}`}
        {...rest}
      />
    </div>
  );
}

export default InputText;
