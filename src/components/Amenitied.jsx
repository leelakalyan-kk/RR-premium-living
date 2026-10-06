import * as Icons from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { AMENITIES, IMAGES } from "@/constants/site";

const Icon = ({ name, size = 26 }) => {
  const Cmp = Icons[name];
  return Cmp ? <Cmp size={size} weight="light" /> : null;
};

const Spotlight = ({ image, label, alt }) => (
  <FadeIn className="h-full">
    <figure className="clip-frame group relative h-full min-h-[240px] overflow-hidden rounded-md">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-navy/35 transition-colors duration-700 group-hover:bg-navy/20" />
      <figcaption className="absolute bottom-6 left-6 z-10 font-display text-xl font-bold tracking-tight text-ivory md:text-2xl">
        {label}
      </figcaption>
    </figure>
  </FadeIn>
);

export default function Amenities() {
  return (
    <section id="amenities" data-testid="amenities-section" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="03"
          eyebrow="Amenities"
          title="Everything taken care of."
          note="From hot water on cold mornings to a guarded gate at midnight — every detail of daily life is handled."
        />

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Spotlight image={IMAGES.kitchen} label="Open Kitchen" alt="Open community kitchen" />
          <Spotlight image={IMAGES.gym} label="Fully Equipped Gym" alt="Fitness gym with equipment" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {AMENITIES.map((a, i) => (
            <FadeIn key={a.id} delay={(i % 4) * 0.08} className="h-full">
              <div
                data-testid={`amenity-card-${a.id}`}
                className="group flex h-full flex-col gap-5 rounded-md border border-navy/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_16px_40px_rgba(11,19,43,0.1)] md:p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold-deep transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                  <Icon name={a.icon} />
                </span>
                <p className="text-sm font-bold leading-snug text-navy">{a.label}</p>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.24} className="h-full">
            <a
              href="#apply"
              data-testid="amenity-cta-card"
              className="group flex h-full min-h-[150px] flex-col justify-between gap-5 rounded-md bg-navy p-5 transition-all duration-500 hover:-translate-y-1.5 hover:bg-navy-light md:p-6"
            >
              <span className="font-display text-2xl font-extrabold leading-tight tracking-tight text-gold">
                Book a
                <br />
                visit
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/70 transition-colors group-hover:text-gold-light">
                Apply now
                <Icons.ArrowRight size={14} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}