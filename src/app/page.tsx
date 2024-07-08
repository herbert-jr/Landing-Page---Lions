import BenefitsSection from './components/BenefitsSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center relative'>
      <Header />
      <HeroSection />
      <BenefitsSection />
    </main>
  );
}
