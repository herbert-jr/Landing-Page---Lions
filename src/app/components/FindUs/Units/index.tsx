import { unidades } from '@/app/assets/data/database';
import Unit from '../Unit';

function Units() {
  return (
    <div className='w-full mt-6 flex items-center justify-around space-y-5 flex-wrap'>
      {unidades.map((unidade, index) => (
        <Unit key={index} unidade={unidade} />
      ))}
    </div>
  );
}

export default Units;
