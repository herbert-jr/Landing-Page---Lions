import Link from 'next/link';

import { FiArrowUpRight } from 'react-icons/fi';

const list = [
  'Pós-venda',
  'Blog',
  'Parceiros',
  'Venda seu usado',
  'FIPE',
  'Lojistas',
  'Trabalhe conosco',
];

function SecondList() {
  return (
    <ul className='w-full md:w-1/2 flex flex-wrap'>
      {list.map((item, index) => (
        <li key={index} className='my-1 w-1/2 text-copy-white'>
          <Link
            href='/'
            className='w-fit flex items-center space-x-2 text-base font-medium group'>
            <span className='whitespace-nowrap'>{item}</span>
            <FiArrowUpRight
              className='group-hover:scale-125 transition-transform duration-300 
        ease-personality'
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SecondList;
