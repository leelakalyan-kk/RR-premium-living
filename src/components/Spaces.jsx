import { ArrowRight, Bed, BuildingOffice, Check, Sparkle, Users } from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { PROPERTY_STATS, SPACES } from "@/constants/site";

export default function Spaces() {
  const statIcons = {
    properties: BuildingOffice,
    amenities: Sparkle,
    residents: Users,
    "beds-in-progress": Bed,
  };

  return (
    <section id="spaces" data-testid="spaces-section" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Accommodation"
          title="A space for every kind of living."
          note="Three ways to live with RR Premium Living — comfort-first, community-driven, and always well cared for."
        />
        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PROPERTY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-navy/10 bg-white px-4 py-6 text-center shadow-sm transition-colors hover:border-gold/60 md:px-6 md:py-7"
            >
              {(() => {
                const Icon = statIcons[stat.id];
                return (
                  <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold-deep">
                    <Icon size={20} weight="duotone" />
                  </span>
                );
              })()}
              <p className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/55 md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SPACES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.12} className="h-full">
              <a
                href={`/locations?space=${s.id}`}
                data-testid={`space-card-${s.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(11,19,43,0.12)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/65">{s.copy}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm font-semibold text-navy/80">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15">
                          <Check size={11} weight="bold" className="text-gold-deep" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.16em] text-gold-deep">
                    Explore spaces <ArrowRight size={15} weight="bold" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}