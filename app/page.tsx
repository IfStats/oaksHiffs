import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PropertySearch from "@/components/search/PropertySearch";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import CityDiscovery from "@/components/home/CityDiscovery";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <Navbar />

      <Hero />

      <PropertySearch />

      <FeaturedProperties />

      <CityDiscovery />

      <Services />

      <footer className="border-t border-neutral-200 bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Oakshiffs. All rights reserved.
          </p>

          <p>
            Lagos · Accra · Abuja
          </p>
        </div>
      </footer>
    </main>
  );
}