import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { IMAGES } from "@/constants/site";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-visible pb-[0.32em] -mb-[0.32em]">
    <motion.span
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      className={`block will-change-transform ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <img
          src={IMAGES.hero}
          alt="Premium co-living living room at RR Premium Living"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-36 md:px-8 md:pb-32 md:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="hero-location-badge mb-6 inline-flex items-center gap-3 rounded-full border border-ivory/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-ivory/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span>
            <span className="hero-location-copy">PG &amp; Co-living · </span>
            <span className="hero-location-copy">Hyderabad / Bangalore</span>
          </span>
        </motion.p>

        <h1 className="font-display font-extrabold leading-[0.95] tracking-tighter text-ivory">
          <MaskedLine delay={0.25}>
            <span className="text-3xl font-medium text-ivory/75 md:text-5xl">Welcome to</span>
          </MaskedLine>
          <MaskedLine delay={0.4} className="hero-title-line text-[clamp(2.9rem,8.5vw,6.6rem)]">
            RR Premium
          </MaskedLine>
          <MaskedLine delay={0.55} className="hero-title-line text-[clamp(2.9rem,8.5vw,6.6rem)]">
            <span className="gold-text">Living</span>
          </MaskedLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-9 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg"
        >
          Premium co-living spaces for Students &amp; Working Professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="/locations"
            data-testid="hero-cta-book"
            className="group inline-flex items-center gap-3 rounded-xl bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-[0_14px_40px_rgba(212,175,55,0.4)]"
          >
            Book Your Space
            <ArrowRight
              size={17}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
          <a
            href="#spaces"
            data-testid="hero-cta-explore"
            className="inline-flex items-center gap-3 rounded-xl border border-ivory/35 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold-light"
          >
            Explore Spaces
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-bold uppercase tracking-[0.28em] text-ivory/55"
        >
          {["Students", "Working Professionals", "Fully Furnished", "Hygienic Food"].map(
            (t) => (
              <span key={t} className="flex items-center gap-3">
                <span className="hidden h-1 w-1 rounded-full bg-gold md:inline-block" />
                {t}
              </span>
            )
          )}
        </motion.div>
      </div>

    </section>
  );
}