interface MenuBtnProps {
  handleMenu: () => void;
  menuOpen: boolean;
}

function MenuBtn({ handleMenu, menuOpen }: MenuBtnProps) {
  return (
    <div className='flex-1 flex items-center justify-end md:justify-center  text-copy-white'>
      <button
        className='w-auto px-1 flex items-center justify-center 
      uppercase font-medium text-[14px]'
        onClick={handleMenu}>
        <div className='relative w-7 h-auto flex flez-col items-center justify-center mr-2'>
          <span
            data-open={menuOpen}
            className='absolute w-full h-[1px] bg-copy-white translate-y-1
             data-[open=true]:translate-y-0 data-[open=true]:rotate-45 transition-transform
              duration-700 ease-personality'
          />
          <span
            data-open={menuOpen}
            className='absolute w-full h-[1px] bg-copy-white -translate-y-1
            data-[open=true]:translate-y-0 data-[open=true]:-rotate-45 transition-transform
              duration-700 ease-personality'
          />
        </div>
        <span>Menu</span>
      </button>
    </div>
  );
}

export default MenuBtn;
