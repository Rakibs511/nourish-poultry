import HeroSlider from '@/components/HeroSlider'
import ServicesSection from '@/components/ServicesSection'
import BusinessActivities from '@/components/BusinessActivities'
import Footer from '@/components/Footer'

export default function Home() {
  return (
      <main className="min-h-screen md:-mt-[60px] sm:-mt-0" role="main" aria-labelledby="main-content">
        <h1 id="main-content" className="sr-only">Nourish Bangladesh - Home Page</h1>
        <HeroSlider />
        <ServicesSection />
        <BusinessActivities />
        <Footer />
      </main>
  );
}
