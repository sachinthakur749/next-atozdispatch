import BannerCards from "@/components/BannerCards";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/Information";
import Newsletter from "@/components/Newsletter";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerCards />
      <div className="space-y-[100px]">
        <ClientsSection />
        <SubscriptionPlan />
        <FeaturesSection />
        <FaqSection />
        <ContactUs />
        <Newsletter />
      </div>
    </>
  );
}
