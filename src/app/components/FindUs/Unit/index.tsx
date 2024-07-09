import { Unidade } from '@/app/assets/data/database';
import Image from 'next/image';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

type Images = {
  [key: string]: string;
};

interface UnitProps {
  unidade: Unidade;
}

function Unit({ unidade }: UnitProps) {
  const primeiraUnidade = unidade;
  const { Cidade, Estado, Funcionamento, Pais, Rua, Unidade, Bairro } =
    primeiraUnidade;
  const images: Images = {
    Brasil: '/brasil.png',
    'Estados Unidos': '/estados-unidos.png',
  };

  return (
    <div
      className='w-full max-w-[440px] h-[200px] flex items-center overflow-hidden bg-copy-white border
    rounded-lg shadow-md flex-shrink-0'>
      <div className='w-full h-full'>
        <Image
          src={'/fachada.jpg'}
          alt='Fachada da unidade'
          width={500}
          height={500}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='w-full flex items-center justify-between gap-2 p-2'>
          <h4 className='font-semibold text-wrap'>Unidade {Unidade}</h4>
          <Image alt={Pais} src={images[Pais]} width={25} height={25} />
        </div>
        <div className='pl-2 w-full gap-3 flex flex-col items-start justify-center'>
          <div className='w-full flex items-center gap-2'>
            <FaMapMarkerAlt className='text-copy-red' />
            <p className='text-xs font-medium text-copy-black/80'>
              {Rua}, {Bairro}, {Cidade} - {Estado}
            </p>
          </div>
          <div className='w-full flex items-center gap-2'>
            <FaClock className='text-copy-red' />
            <p className='text-xs font-medium text-copy-black/80'>
              {Funcionamento}
            </p>
          </div>
        </div>
        <button className='w-full py-1 font-medium bg-copy-red text-copy-white'>
          Entre em contato
        </button>
      </div>
    </div>
  );
}

export default Unit;
