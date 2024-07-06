import Link from 'next/link';
import {
  FiDollarSign,
  FiMapPin,
  FiMonitor,
  FiPhoneCall,
  FiUsers,
} from 'react-icons/fi';

const list = [
  {
    text: 'Atentimento Online',
    icon: FiPhoneCall,
  },
  {
    text: 'Simule o financiamento',
    icon: FiDollarSign,
  },
  {
    text: 'Estoque',
    icon: FiMonitor,
  },
  {
    text: 'Sobre a empresa',
    icon: FiUsers,
  },
  {
    text: 'Onde estamos',
    icon: FiMapPin,
  },
];

function FirstList() {
  return (
    <ul className='w-full flex flex-col items-start text-copy-white my-4 '>
      {list.map((item, index) => (
        <li key={index} className='my-1'>
          <Link
            href='/'
            className='flex items-center space-x-2 text-xl md:text-2xl font-medium group'>
            <span>{item.text}</span>
            <item.icon
              className='group-hover:scale-125 transition-transform duration-300 
            ease-personality'
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FirstList;
