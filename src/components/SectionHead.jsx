import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

const SectionHead = ({ index, eyebrow, title, note, dark = false, meta }) => (
  <div className="mb-12 md:mb-16">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`mb-5 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.32em] ${
        dark ? "text-gold" : "text-gold-deep"
      }`}
    >
      <span>{index}</span>
      {meta}
      <span className={`h-px w-12 ${dark ? "bg-gold/60" : "bg-gold-deep/50"}`} />
      <span className={dark ? "text-ivory/60" : "text-navy/50"}>{eyebrow}</span>
    </motion.div>
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
        className={`max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tighter md:text-5xl ${
          dark ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </motion.h2>
      {note && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
          className={`max-w-sm text-sm leading-relaxed ${
            dark ? "text-ivory/60" : "text-navy/60"
          }`}
        >
          {note}
        </motion.p>
      )}
    </div>
  </div>
);

export const FadeIn = ({ children, delay = 0, className = "", y = 30 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export default SectionHead;