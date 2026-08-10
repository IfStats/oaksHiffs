import PropertySearch from "@/components/search/PropertySearch";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
            Oakshiffs Properties
          </p>

          <div className="mt-5 max-w-3xl">
            <h1 className="text-5xl font-medium tracking-[-0.05em] text-neutral-950 sm:text-6xl">
              Find a property that feels like home.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-500">
              Explore carefully selected properties across
              Lagos, Accra and Abuja. Search by location,
              property type, purpose and bedroom count.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <PropertySearch />
      </section>
    </main>
  );
}