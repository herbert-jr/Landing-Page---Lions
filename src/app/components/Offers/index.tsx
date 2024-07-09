import OffersCarousel from './OffersCarousel';

function Offers() {
  return (
    <section
      className='w-[min(90%,1440px)] h-auto mt-16 mb-8 flex flex-col items-center
       justify-center'>
      <div className='w-full flex flex-col justify-center items-start'>
        <h3 className='text-[40px] md:text-[48px] lg:text-[58px] leading-none font-bold'>
          Veja nossas ofertas.
        </h3>
        <h2 className='mt-2 font-medium md:text-xl'>
          Confira nossas oportunidades pra{' '}
          <span className='text-copy-red'>você</span>.
        </h2>
      </div>
      <OffersCarousel />
    </section>
  );
}

export default Offers;
