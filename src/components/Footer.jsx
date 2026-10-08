import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react";
import { LogoMark } from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, NAV_LINKS } from "@/constants/site";

export default function Footer({ property }) {
  const year = new Date().getFullYear();
  const isStandalonePage = window.location.pathname !== "/";
  const resolveNavHref = (href) =>
    isStandalonePage && href.startsWith("#") ? `/${href}` : href;

  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-navy-deep text-ivory">
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 md:px-8 md:pt-28">
        <div className="flex flex-col gap-14 border-b border-white/10 pb-14 lg:flex-row lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <LogoMark size={52} />
              <p className="font-display text-2xl font-extrabold tracking-tight">
                RR Premium <span className="gold-text">Living</span>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/55">
              {property
                ? `${property.name} is part of RR Premium Living — premium PG and co-living spaces built for comfortable, well-managed living.`
                : "Premium PG & co-living spaces for students and working professionals — in Hyderabad and Bangalore."}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                data-testid="footer-social-facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <FacebookLogo size={18} weight="fill" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                data-testid="footer-social-instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
              >
                <InstagramLogo size={18} />
              </a>
              <span className="ml-2 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/40">
                Facebook · Instagram
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                Explore
              </p>
              <ul className="space-y-3">
                {[...NAV_LINKS, { label: "Apply Now", href: "#apply" }].map((l) => (
                  <li key={l.href}>
                    <a
                      href={resolveNavHref(l.href)}
                      data-testid={`footer-link-${l.href.replace("#", "")}`}
                      className="text-sm font-semibold text-ivory/70 transition-colors hover:text-gold-light"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                Contact
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:+${"919000000000"}`}
                    data-testid="footer-contact-phone"
                    className="flex items-center gap-3 text-sm font-semibold text-ivory/70 transition-colors hover:text-gold-light"
                  >
                    <Phone size={16} className="text-gold" /> {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    data-testid="footer-contact-email"
                    className="flex items-center gap-3 text-sm font-semibold text-ivory/70 transition-colors hover:text-gold-light"
                  >
                    <EnvelopeSimple size={16} className="text-gold" /> {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/40">
                Hyderabad · Bangalore
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-ivory/40 sm:flex-row">
          <p data-testid="footer-copyright">© {year} RR Premium Living. All rights reserved.</p>
          <p className="font-display font-bold uppercase tracking-[0.3em] text-ivory/30">
            Live Premium · Live Easy
          </p>
        </div>
      </div>
    </footer>
  );
}