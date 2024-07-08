import Image from 'next/image';
import Carousel, { Slide } from '../Carousel';
import Form from './Form';

function HeroSection() {
  const slides: Slide[] = [
    {
      title: 'Promoções Junho',
      image: '/banner1.jpg',
    },
    {
      title: 'Tipos de carro',
      image: '/banner2.jpg',
    },
    {
      title: 'Funcionamento das lojas',
      image: '/banner3.jpg',
    },
  ];

  return (
    <section className='w-[min(90%,1440px)] h-auto pt-16 flex flex-col items-center justify-center'>
      <Carousel slides={slides}>
        {slides.map((slide, index) => (
          <Image
            key={index}
            alt={slide.title}
            src={slide.image}
            width={1440}
            height={500}
            className='w-full h-auto'
          />
        ))}
      </Carousel>
      <Form />
    </section>
  );
}

export default HeroSection;
