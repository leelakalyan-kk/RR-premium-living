import { MapPin } from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { IMAGES } from "@/constants/site";

const LOCATIONS = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    image: IMAGES.hyderabad,
    blurb:
      "Well-connected neighbourhoods close to campuses and tech corridors — a calm, premium base in the City of Pearls.",
  },
  {
    id: "bangalore",
    city: "Bangalore",
    image: IMAGES.bangalore,
    blurb:
      "Premium co-living in India's garden city — built for students and professionals who want comfort without compromise.",
  },
];

export default function Locations() {
  return (
    <section id="locations" data-testid="locations-section" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="01"
          eyebrow="Where we are"
          title="Two cities. One standard of living."
          note="RR Premium Living operates in Hyderabad and Bangalore — premium PG & co-living spaces in both cities."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <FadeIn key={loc.id} delay={i * 0.12} className="h-full">
              <a
                href="/locations"
                data-testid={`location-card-${loc.id}`}
                className="loc-card group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(11,19,43,0.12)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`${loc.city} cityscape`}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
                  <span className="pointer-events-none absolute inset-3 rounded-xl border border-gold/75" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-deep">
                    <MapPin size={14} weight="fill" /> Location
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                    {loc.city}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/65">{loc.blurb}</p>
                  <p className="mt-auto pt-6 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-deep">
                    View PG properties
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
