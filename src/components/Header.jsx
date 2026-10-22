import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { HEADER_LINKS } from "@/constants/site";
import { Logo } from "@/components/Logo";

const NavLink = ({ href, label, light, onClick }) => {
  const reducedOpacity = label === "Contact" || label === "FAQs";

  return (
    <a
      href={href}
      onClick={onClick}
      data-testid={`nav-link-${href.replace("#", "")}`}
      className={`nav-link text-sm font-semibold tracking-wide transition-colors duration-300 ${
        light
          ? `${reducedOpacity ? "text-ivory/70" : "text-ivory/85"} hover:text-gold-light`
          : `${reducedOpacity ? "text-navy/70" : "text-navy/80"} hover:text-navy`
      }`}
    >
      {label}
    </a>
  );
};

const BookingMenu = ({ light }) => (
  <div className="group relative">
    <a
      href="/booking/online"
      data-testid="nav-link-booking"
      className={`nav-link inline-flex items-center text-sm font-semibold tracking-wide transition-colors duration-300 ${
        light ? "text-ivory/70 hover:text-gold-light" : "text-navy/70 hover:text-navy"
      }`}
    >
      Book My Stay
    </a>
    <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
      <div className="rounded-md border border-navy/10 bg-white p-2 shadow-xl">
        <a href="/booking/online" className="block rounded px-3 py-2.5 text-sm font-semibold text-navy/80 hover:bg-navy/5 hover:text-navy">Online Booking</a>
        <a href="/booking/process" className="block rounded px-3 py-2.5 text-sm font-semibold text-navy/80 hover:bg-navy/5 hover:text-navy">Booking Process</a>
        <a href="/booking/policies" className="block rounded px-3 py-2.5 text-sm font-semibold text-navy/80 hover:bg-navy/5 hover:text-navy">Guidelines &amp; Policies</a>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isStandalonePage = window.location.pathname !== "/";
  const spacesHref = "/#spaces";

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

  const light = !scrolled && !isStandalonePage;

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || isStandalonePage
            ? "border-b border-navy/10 bg-white/85 py-0 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <Logo light={light} />
          <nav className="hidden items-center gap-8 lg:flex">
            {HEADER_LINKS.map((l) => (
              l.label === "Book My Stay" ? (
                <BookingMenu key={l.href} light={light} />
              ) : (
                <NavLink
                  key={l.href}
                  href={l.label === "Spaces" ? spacesHref : l.href}
                  label={l.label}
                  light={light}
                />
              )
            ))}
          </nav>
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
              {HEADER_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.label === "Spaces" ? spacesHref : l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-link-${l.href.replace("#", "")}`}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`border-b border-white/10 py-4 font-display text-3xl font-bold tracking-tight transition-colors hover:text-gold ${
                    ["Contact", "Book My Stay", "FAQs"].includes(l.label) ? "text-ivory/70" : "text-ivory"
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}