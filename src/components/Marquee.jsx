import { MARQUEE_ITEMS } from "@/constants/site";

export default function EditorialMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      data-testid="editorial-marquee"
      className="overflow-hidden border-y border-navy/10 bg-gold py-4"
    >
      <div className="marquee-track flex w-max items-center" aria-label="RR Premium Living highlights">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-8 flex items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.35em] text-navy"
          >
            {item}
            <span className="text-[9px] text-navy/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}