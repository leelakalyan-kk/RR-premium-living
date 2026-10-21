import {
  ArrowLeft,
  ArrowRight,
  GenderFemale,
  GenderMale,
  Snowflake,
  UsersThree,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { LOCATION_PROPERTIES } from "@/constants/site";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

const AUDIENCE_ICONS = { male: GenderMale, female: GenderFemale, "co-living": UsersThree };

function AudienceBadge({ audience, label }) {
  const Icon = AUDIENCE_ICONS[audience] || UsersThree;
  return (
    <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-navy/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
      <Icon size={14} weight="bold" className="text-gold-light" />
      {label}
    </span>
  );
}

export default function LocationsPage() {
  const initialSpace = new URLSearchParams(window.location.search).get("space");
  const [selectedSpace, setSelectedSpace] = useState(
    ["mens", "womens", "coliving"].includes(initialSpace) ? initialSpace : "all",
  );
  const visibleProperties = useMemo(() => {
    const audiences = {
      mens: ["male", "co-living"],
      womens: ["female", "co-living"],
      coliving: ["co-living"],
      all: ["male", "female", "co-living"],
    };
    return LOCATION_PROPERTIES.filter((property) => audiences[selectedSpace].includes(property.audience));
  }, [selectedSpace]);

  const selectSpace = (space) => {
    setSelectedSpace(space);
    const url = new URL(window.location.href);
    if (space === "all") {
      url.searchParams.delete("space");
    } else {
      url.searchParams.set("space", space);
    }
    window.history.replaceState({}, "", url);
  };

  return (
    <>
      <main className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-gold-deep">
          <ArrowLeft size={16} weight="bold" /> Back to home
        </a>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">One PG, three living options</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">
              Find your next place to live.
            </h1>
          </div>
          <Caption className="mt-0 max-w-sm text-base md:text-lg">
            Choose men's living, women's living, or co-living in the same RR Premium Living PG.
          </Caption>
        </div>
        <div className="mb-10 flex flex-wrap items-center gap-3" aria-label="Filter properties by space">
          <span className="mr-2 text-xs font-bold uppercase tracking-[0.18em] text-navy/45">Filter by space</span>
          {[
            ["all", "All spaces"],
            ["mens", "Men's spaces"],
            ["womens", "Women's spaces"],
            ["coliving", "Co-living"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => selectSpace(value)}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                selectedSpace === value
                  ? "border-navy bg-navy text-ivory"
                  : "border-navy/15 bg-white text-navy/70 hover:border-gold-deep hover:text-navy"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProperties.map((property) => (
            <article key={property.id} className="group overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(11,19,43,0.14)]">
              <div className="relative h-64 overflow-hidden">
                <img src={property.image} alt={property.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <AudienceBadge audience={property.audience} label={property.audienceLabel} />
                {property.audience === "co-living" && (
                  <span className="absolute bottom-4 right-4 rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">
                    Co-living from 2 persons
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy">{property.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{property.details}</p>
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/45">Room sharing</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {property.sharing.map((beds) => (
                      <span key={beds} className="rounded-sm bg-navy/5 px-3 py-1.5 text-xs font-bold text-navy">{beds}-sharing</span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {property.airConditioning.map((option) => (
                    <span key={option} className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70">
                      <Snowflake size={14} className={option === "AC" ? "text-gold-deep" : "text-navy/35"} /> {option}
                    </span>
                  ))}
                </div>
                <a href={`/locations/${property.id}`} className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-navy opacity-70 transition-all group-hover:gap-3 group-hover:text-gold-deep group-hover:opacity-100">
                  More details <ArrowRight size={15} weight="bold" />
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
