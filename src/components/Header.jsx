import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/constants/site";
import { Logo } from "@/components/Logo";

const NavLink = ({ href, label, light, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    data-testid={`nav-link-${href.replace("#", "")}`}
    className={`nav-link text-sm font-semibold tracking-wide transition-colors duration-300 ${
      light ? "text-ivory/85 hover:text-gold-light" : "text-navy/80 hover:text-navy"
    }`}
  >
    {label}
  </a>
);

const ApplyButton = ({ className = "", onClick }) => (
  <a
    href="#apply"
    onClick={onClick}
    data-testid="header-apply-btn"
    className={`group inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_24px_rgba(212,175,55,0.35)] ${className}`}
  >
    Apply Now
    <ArrowRight
      size={15}
      weight="bold"
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !scrolled;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-navy/10 bg-white/85 py-0 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo light={light} />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.href} {...l} light={light} />
            ))}
          </nav>
          <div className="hidden lg:block">
            <ApplyButton />
          </div>
          <button
            data-testid="header-menu-toggle"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden transition-colors ${light ? "text-ivory" : "text-navy"}`}
          >
            <List size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy"
          >
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
              <Logo light />
              <button
                aria-label="Close menu"
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="text-ivory"
              >
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...NAV_LINKS, { label: "Apply Now", href: "#apply" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.href.replace("#", "")}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/10 py-4 font-display text-3xl font-bold tracking-tight text-ivory transition-colors hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-10">
              <ApplyButton className="w-full justify-center py-4 text-base" onClick={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}