import { EnvelopeSimple, FacebookLogo, InstagramLogo, Phone } from "@phosphor-icons/react";
import { Logo } from "@/components/Logo";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  NAV_LINKS,
  WHATSAPP_NUMBER,
} from "@/constants/site";

export default function Footer({ property }) {
  const year = new Date().getFullYear();
  const isStandalonePage = window.location.pathname !== "/";
  const resolveNavHref = (href) =>
    isStandalonePage && href.startsWith("#") ? `/${href}` : href;
  const exploreLinks = [
    ...NAV_LINKS,
    { label: "Apply Now", href: "#apply" },
    { label: "Book Your Stay", href: "/booking/online" },
    { label: "FAQs", href: "/faqs" },
    { label: "Terms and Conditions", href: "/booking/policies" },
  ];

  return (
    <footer data-testid="site-footer" className="relative overflow-hidden bg-navy-deep text-ivory">
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-12 md:px-8 md:pt-16">
        <div className="flex flex-col gap-9 border-b border-white/10 pb-8 lg:flex-row lg:justify-between">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">
              {property
                ? `Explore ${property.audienceLabel.toLowerCase()} at RR Premium Living — a comfortable, well-managed community.`
                : "Premium PG & co-living spaces for students and working professionals — in Hyderabad and Bangalore."}
            </p>
            <div className="mt-5 flex items-center gap-3 text-ivory/65">
              <span aria-label="Facebook" role="img">
                <FacebookLogo size={20} weight="fill" />
              </span>
              <span aria-label="Instagram" role="img">
                <InstagramLogo size={20} />
              </span>
              <span className="ml-1 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/40">
                Facebook · Instagram
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                Explore
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {exploreLinks.map((l) => (
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
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-ivory/40">
                Hyderabad · Bangalore
              </p>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
                Contact
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
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
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-5 text-xs text-ivory/40 sm:flex-row">
          <p data-testid="footer-copyright">© {year} RR Premium Living. All rights reserved.</p>
          <p className="font-display font-bold uppercase tracking-[0.3em] text-ivory/30">
            Live Premium · Live Easy
          </p>
        </div>
      </div>
    </footer>
  );
}