import { motion } from 'framer-motion';
import FirstList from './FirstList';
import SecondList from './SecondList';
import SocialsList from './SocialsList';

function Menu() {
  return (
    <motion.menu
      initial={{
        height: 0,
      }}
      animate={{
        height: 'auto',
      }}
      exit={{
        height: 0,
      }}
      transition={{ duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
      className='w-full flex flex-col overflow-hidden'>
      <FirstList />
      <SecondList />
      <SocialsList />
    </motion.menu>
  );
}

export default Menu;
