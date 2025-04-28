import BannerCards from "@/components/BannerCards";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/Information";
import SubscriptionPlan from "@/components/SubscriptionPlan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BannerCards />
      <ClientsSection />
      <SubscriptionPlan />
      <FeaturesSection />
    </>
  );
}
