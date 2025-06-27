import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import BusinessActivities from '@/components/BusinessActivities'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <ServicesSection />
      <BusinessActivities />
      <Footer />
    </div>
  );
}
