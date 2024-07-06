import Link from 'next/link';
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

const list = [FiInstagram, FiFacebook, FiLinkedin, FiTwitter, FiYoutube];

function SocialsList() {
  return (
    <ul className='w-full md:w-1/2 lg:w-1/4 my-4 flex items-center justify-around'>
      {list.map((Item, index) => (
        <li key={index}>
          <Link href='/' className='text-2xl text-copy-white group'>
            <Item className='transition-tranform duration-300 ease-personality group-hover:scale-125' />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialsList;
