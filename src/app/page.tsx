import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import BusinessActivities from '@/components/BusinessActivities'
import Footer from '@/components/Footer'

export default function Home() {
  return (
      <main className="min-h-screen -mt-[60px] sm:-mt-0">
        <HeroSlider />
        <ServicesSection />
        <BusinessActivities />
        <Footer />
      </main>
  );
}
