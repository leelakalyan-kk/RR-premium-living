import * as Icons from "@phosphor-icons/react";
import SectionHead, { FadeIn } from "@/components/SectionHead";
import { RULES } from "@/constants/site";

const Icon = ({ name, size = 24 }) => {
  const Cmp = Icons[name];
  return Cmp ? <Cmp size={size} weight="light" /> : null;
};

export default function Rules() {
  return (
    <section id="rules" data-testid="rules-section" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="05"
          eyebrow="House Policies"
          title="Rules & Payment, made simple."
          note="Clear policies, no surprises. Everything you need to know before you move in."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {RULES.map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.1} className="h-full">
              <article
                data-testid={`rule-card-${r.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/70 hover:shadow-[0_20px_50px_rgba(11,19,43,0.1)]"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-navy">
                    <Icon name={r.icon} />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-navy/10 transition-colors duration-500 group-hover:text-gold/40">
                    {r.no}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-navy">
                  {r.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy/65">{r.desc}</p>
                <span className="mt-6 h-[2px] w-10 bg-gold transition-all duration-500 group-hover:w-full" />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}