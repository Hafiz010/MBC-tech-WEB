import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { VisionMissionSection } from '@/components/VisionMissionSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-[rgba(18,18,18,1)] flex flex-col overflow-hidden items-center pb-10 sm:pb-15 md:pb-20">
      <Header />
      
      <main className="w-full flex flex-col items-center pt-[120px] md:pt-[140px] lg:pt-[180px]">
        <HeroSection />
        
        {/* Blur transition section */}
        <div className="w-full h-8 sm:h-12 md:h-16 lg:h-24 xl:h-64 bg-gradient-to-b from-transparent via-[rgba(18,18,18,0.5)] to-[rgba(18,18,18,1)] backdrop-blur-sm relative -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-24 xl:-mt-20 z-10"></div>
        
        <AboutSection />
        <VisionMissionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
