import ContactBtn from './ContactBtn';
import HomeLink from './HomeLink';
import MenuBtn from './MenuBtn';

interface NavigationProps {
  handleMenu: () => void;
  menuOpen: boolean;
}

function Navigation({ handleMenu, menuOpen }: NavigationProps) {
  return (
    <nav className='w-full flex items-center justify-center'>
      <HomeLink />
      <MenuBtn handleMenu={handleMenu} menuOpen={menuOpen} />
      <ContactBtn menuOpen={menuOpen} />
    </nav>
  );
}

export default Navigation;
