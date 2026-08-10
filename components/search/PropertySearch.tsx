"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bath,
  BedDouble,
  MapPin,
  Maximize,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { properties } from "@/data/properties";
import { formatPrice } from "@/lib/format";

const cities = ["All cities", "Lagos", "Accra", "Abuja"] as const;

const propertyTypes = [
  "All types",
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Land",
] as const;

const purposes = ["All", "For Sale", "For Rent"] as const;

const bedrooms = ["Any", "1+", "2+", "3+", "4+", "5+"] as const;

export default function PropertySearch() {
  const [search, setSearch] = useState("");
  const [city, setCity] =
    useState<(typeof cities)[number]>("All cities");
  const [type, setType] =
    useState<(typeof propertyTypes)[number]>("All types");
  const [purpose, setPurpose] =
    useState<(typeof purposes)[number]>("All");
  const [bedroomFilter, setBedroomFilter] =
    useState<(typeof bedrooms)[number]>("Any");

  const filteredProperties = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesSearch =
        !searchTerm ||
        property.title.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm) ||
        property.city.toLowerCase().includes(searchTerm) ||
        property.type.toLowerCase().includes(searchTerm);

      const matchesCity =
        city === "All cities" || property.city === city;

      const matchesType =
        type === "All types" || property.type === type;

      const matchesPurpose =
        purpose === "All" || property.purpose === purpose;

      const minimumBedrooms =
        bedroomFilter === "Any"
          ? 0
          : Number(bedroomFilter.replace("+", ""));

      const matchesBedrooms =
        property.bedrooms >= minimumBedrooms;

      return (
        matchesSearch &&
        matchesCity &&
        matchesType &&
        matchesPurpose &&
        matchesBedrooms
      );
    });
  }, [search, city, type, purpose, bedroomFilter]);

  const hasFilters =
    search !== "" ||
    city !== "All cities" ||
    type !== "All types" ||
    purpose !== "All" ||
    bedroomFilter !== "Any";

  function clearFilters() {
    setSearch("");
    setCity("All cities");
    setType("All types");
    setPurpose("All");
    setBedroomFilter("Any");
  }

  return (
    <div>
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} />
          <h2 className="text-sm font-medium">
            Find your property
          </h2>
        </div>

        <div className="mt-5">
          <label
            htmlFor="property-search"
            className="sr-only"
          >
            Search properties
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />

            <input
              id="property-search"
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by property, location or city..."
              className="h-14 w-full rounded-2xl border border-neutral-200 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-neutral-950"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 transition hover:text-neutral-950"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSelect
            label="City"
            value={city}
            options={cities}
            onChange={setCity}
          />

          <FilterSelect
            label="Property type"
            value={type}
            options={propertyTypes}
            onChange={setType}
          />

          <FilterSelect
            label="Purpose"
            value={purpose}
            options={purposes}
            onChange={setPurpose}
          />

          <FilterSelect
            label="Bedrooms"
            value={bedroomFilter}
            options={bedrooms}
            onChange={setBedroomFilter}
          />
        </div>

        {hasFilters && (
          <div className="mt-5 flex items-center justify-between border-t border-neutral-200 pt-5">
            <p className="text-sm text-neutral-500">
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1
                ? "property"
                : "properties"}{" "}
              found
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm font-medium text-neutral-950 transition hover:text-neutral-500"
            >
              <X size={15} />
              Clear filters
            </button>
          </div>
        )}
      </div>

      {!hasFilters && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            Showing all {properties.length} properties
          </p>
        </div>
      )}

      {hasFilters && (
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-neutral-500">
            Showing {filteredProperties.length} of{" "}
            {properties.length} properties
          </p>
        </div>
      )}

      {filteredProperties.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/property/${property.id}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden bg-neutral-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-neutral-950">
                      {property.purpose}
                    </span>

                    {property.featured && (
                      <span className="rounded-full bg-neutral-950/90 px-3 py-1.5 text-xs font-medium text-white">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium tracking-[-0.02em] text-neutral-950">
                        {property.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
                        <MapPin size={14} />
                        {property.location}, {property.city}
                      </div>
                    </div>

                    <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {property.type}
                    </span>
                  </div>

                  <div className="mt-5 text-xl font-medium text-neutral-950">
                    {formatPrice(
                      property.price,
                      property.currency
                    )}
                  </div>

                  <div className="mt-5 grid grid-cols-3 border-t border-neutral-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <BedDouble size={15} />
                      {property.bedrooms}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Bath size={15} />
                      {property.bathrooms}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Maximize size={15} />
                      {property.area} m²
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-dashed border-neutral-300 px-6 py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
            <Search size={20} className="text-neutral-500" />
          </div>

          <h3 className="mt-5 text-xl font-medium text-neutral-950">
            No properties found
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-500">
            Try changing your search or removing some of
            the filters to see more Oakshiffs properties.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

type FilterSelectProps<T extends string> = {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
};

function FilterSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: FilterSelectProps<T>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value as T)
        }
        className="mt-2 h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-950 outline-none transition focus:border-neutral-950"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}