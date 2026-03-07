import HeroCarousel from '@/components/HeroCarousel';
import EmergencyBanner from '@/components/EmergencyBanner';
import ServicesGrid from '@/components/ServicesGrid';
import WhyBill from '@/components/WhyBill';
import GalleryPreview from '@/components/GalleryPreview';
import ServiceArea from '@/components/ServiceArea';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <EmergencyBanner />
      <ServicesGrid />
      <WhyBill />
      <GalleryPreview />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
