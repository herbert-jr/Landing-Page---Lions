import HeaderContent from './HeaderContent';

function Header() {
  return (
    <header
      className='fixed top-0 left-0 w-full h-auto py-2 flex
     items-center justify-center bg-primary-800 z-50'>
      <HeaderContent />
    </header>
  );
}

export default Header;
