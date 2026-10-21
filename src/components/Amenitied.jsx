import * as Icons from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { AMENITIES, IMAGES } from "@/constants/site";

const Icon = ({ name, size = 26 }) => {
  const Cmp = Icons[name];
  return Cmp ? <Cmp size={size} weight="light" /> : null;
};

const Spotlight = ({ image, label, info, alt }) => (
  <FadeIn className="h-full">
    <article className="group h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_16px_40px_rgba(11,19,43,0.1)]">
      <figure className="clip-frame relative h-36 overflow-hidden md:h-40">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/25 transition-colors duration-700 group-hover:bg-navy/10" />
      </figure>
      <div className="p-5">
        <h3 className="font-display text-xl font-extrabold tracking-tight text-navy">{label}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/60">{info}</p>
      </div>
    </article>
  </FadeIn>
);

const AmenityCard = ({ amenity, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <article
      data-testid={`amenity-card-${amenity.id}`}
      className="group h-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_16px_40px_rgba(11,19,43,0.1)]"
    >
      <figure className="clip-frame relative h-36 overflow-hidden md:h-40">
        <img
          src={amenity.image}
          alt={amenity.label}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy/25 transition-colors duration-700 group-hover:bg-navy/10" />
      </figure>
      <div className="flex items-start gap-3 p-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold-deep transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
          <Icon name={amenity.icon} size={20} />
        </span>
        <div>
          <h3 className="font-display text-lg font-extrabold leading-tight text-navy">{amenity.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/60">{amenity.info}</p>
        </div>
      </div>
    </article>
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

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <Spotlight
            image={IMAGES.kitchen}
            label="Open Kitchen"
            info="Cook, connect, and enjoy fresh meals in a welcoming shared space."
            alt="Open community kitchen"
          />
          <Spotlight
            image={IMAGES.gym}
            label="Fully Equipped Gym"
            info="Stay active with convenient equipment available within the property."
            alt="Fitness gym with equipment"
          />
          <Spotlight
            image={IMAGES.food}
            label="Hygienic Food"
            info="Balanced, home-style meals prepared fresh for residents every day."
            alt="Fresh home-style meals"
          />
        </div>

        <div className="mb-5 flex items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-deep">More amenities</p>
          <span className="h-px flex-1 bg-navy/10" />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {AMENITIES.map((amenity, i) => (
            <AmenityCard key={amenity.id} amenity={amenity} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}