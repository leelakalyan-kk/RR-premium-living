import { MapPin } from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { IMAGES } from "@/constants/site";

const LOCATIONS = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    image: IMAGES.hyderabad,
    span: "lg:col-span-7",
    height: "h-[420px] md:h-[540px]",
    index: "01",
    blurb:
      "Well-connected neighbourhoods close to campuses and tech corridors — a calm, premium base in the City of Pearls.",
  },
  {
    id: "bangalore",
    city: "Bangalore",
    image: IMAGES.bangalore,
    span: "lg:col-span-5",
    height: "h-[420px] md:h-[540px]",
    index: "02",
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {LOCATIONS.map((loc, i) => (
            <FadeIn key={loc.id} delay={i * 0.12} className={loc.span}>
              <article
                data-testid={`location-card-${loc.id}`}
                className={`loc-card group relative overflow-hidden rounded-md ${loc.height}`}
              >
                <img
                  src={loc.image}
                  alt={`${loc.city} cityscape`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-navy/10 transition-opacity duration-700 group-hover:opacity-95" />
                <span className="corner-line absolute inset-x-0 top-0 z-10 h-[3px] bg-gold" />
                <span className="absolute right-6 top-6 font-display text-sm font-bold tracking-[0.3em] text-ivory/60">
                  {loc.index}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                    <MapPin size={14} weight="fill" /> Location
                  </p>
                  <h3 className="font-display text-4xl font-extrabold tracking-tight text-ivory md:text-5xl">
                    {loc.city}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/75 opacity-0 transition-all duration-700 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                    {loc.blurb}
                  </p>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-ivory/55">
                    Men's · Women's · Co-living
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}