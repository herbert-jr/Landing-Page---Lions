interface ContactBtnProps {
  menuOpen: boolean;
}

function ContactBtn({ menuOpen }: ContactBtnProps) {
  return (
    <div className='flex-1 h-full md:flex items-center justify-end hidden'>
      <button
        data-open={menuOpen}
        className='px-2.5 py-1.5 bg-copy-white text-copy-red
       font-semibold text-sm rounded-sm hover:scale-105 transition-all 
       duration-300 ease-personality data-[open=true]:opacity-0'
        title='Botão para contato'>
        Fale conosco
      </button>
    </div>
  );
}

export default ContactBtn;
