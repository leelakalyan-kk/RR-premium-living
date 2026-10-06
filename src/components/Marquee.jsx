import Marquee from "react-fast-marquee";
import { MARQUEE_ITEMS } from "@/constants/site";

export default function EditorialMarquee() {
  return (
    <div
      data-testid="editorial-marquee"
      className="border-y border-navy/10 bg-gold py-4"
    >
      <Marquee speed={38} gradient={false} pauseOnHover>
        {MARQUEE_ITEMS.map((item) => (
          <span
            key={item}
            className="mx-8 flex items-center gap-8 font-display text-sm font-bold uppercase tracking-[0.35em] text-navy"
          >
            {item}
            <span className="text-[9px] text-navy/60">◆</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}