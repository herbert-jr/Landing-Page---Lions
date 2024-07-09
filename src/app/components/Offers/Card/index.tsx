import Image from 'next/image';
import Link from 'next/link';
import { BsFuelPump } from 'react-icons/bs';
import {
  TbBrandWhatsapp,
  TbColorSwatch,
  TbManualGearbox,
} from 'react-icons/tb';

function Card() {
  return (
    <div
      className='w-[300px] h-[420px] rounded-2xl mx-6 shadow-lg bg-white border
 flex flex-col items-center justify-center flex-shrink-0 overflow-hidden'>
      <div className='w-full'>
        <Image
          className='object-cover'
          src='/carro3.jpg'
          alt='carro1'
          width={300}
          height={300}
        />
      </div>
      <div className='flex-1 w-full flex flex-col items-start justify-between'>
        <div className='pl-3 mt-6'>
          <h4 className='font-bold text-copy-black/90'>Fiat Toro</h4>
          <p className='font-semibold uppercase text-xs text-copy-black/80'>
            1.8 Freedom AT
          </p>
        </div>
        <div className='flex gap-1.5 text-copy-black/80 pl-3'>
          <span className='w-full flex items-center justify-center gap-1 text-sm'>
            <TbManualGearbox /> Automático
          </span>
          <span className='w-full flex items-center justify-center gap-1 text-sm'>
            <TbColorSwatch /> Vermelho
          </span>
          <span className='w-full flex items-center justify-center gap-1 text-sm'>
            <BsFuelPump /> Flex
          </span>
        </div>
        <div>
          <p className='text-2xl font-bold pl-3'>R$ 100.000</p>
        </div>
        <div className='w-full'>
          <Link
            href='/'
            className='w-full flex items-center justify-center bg-[#1abb5a] py-2
      text-[14px] font-bold text-copy-white'>
            <TbBrandWhatsapp className='mr-2 text-2xl' /> Falar com consultor
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
