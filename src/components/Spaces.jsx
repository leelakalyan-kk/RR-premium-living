import { ArrowRight, Check } from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { SPACES } from "@/constants/site";

export default function Spaces() {
  return (
    <section id="spaces" data-testid="spaces-section" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Accommodation"
          title="A space for every kind of living."
          note="Three ways to live with RR Premium Living — comfort-first, community-driven, and always well cared for."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SPACES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 0.12} className="h-full">
              <article
                data-testid={`space-card-${s.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_24px_60px_rgba(11,19,43,0.12)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  <span className="absolute left-5 top-5 border border-ivory/40 bg-navy/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-ivory backdrop-blur-sm">
                    0{i + 1}
                  </span>
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
                  <a
                    href="#apply"
                    data-testid={`space-apply-link-${s.id}`}
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold-deep"
                  >
                    Apply for this space
                    <ArrowRight
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}