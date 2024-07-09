import BenefitsSection from './components/BenefitsSection';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Offers from './components/Offers';

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col items-center justify-center relative'>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <Offers />
      <FindUs />
      <Footer />
    </main>
  );
}
