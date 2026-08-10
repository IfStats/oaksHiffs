import Hero from "@/components/home/Hero";
import PropertySearch from "@/components/search/PropertySearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import CityDiscovery from "@/components/home/CityDiscovery";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Hero />

      <PropertySearch />

      <FeaturedProperties />

      <CityDiscovery />

      <Services />
    </main>
  );
}