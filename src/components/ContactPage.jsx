import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { LOCATION_PROPERTIES } from "@/constants/site";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <main className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Talk to our team</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">
              Contact your preferred PG.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy/65 md:text-lg">
              Choose a property below to connect directly with its admissions team. These contacts are managed with each PG listing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATION_PROPERTIES.map((property) => (
              <article key={property.id} className="rounded-md border border-navy/10 bg-white p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Property contact</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold text-navy">{property.name}</h2>
                  </div>
                  <MapPin size={24} weight="fill" className="shrink-0 text-gold-deep" />
                </div>
                <p className="mt-3 text-sm text-navy/60">{property.location}</p>
                <div className="mt-7 space-y-4 border-t border-navy/10 pt-5">
                  <p className="text-sm font-bold text-navy">{property.contact.name}</p>
                  <a href={`tel:${property.contact.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 text-sm font-semibold text-navy/70 hover:text-gold-deep">
                    <Phone size={17} className="text-gold-deep" /> {property.contact.phone}
                  </a>
                  <a href={`mailto:${property.contact.email}`} className="flex items-center gap-3 break-all text-sm font-semibold text-navy/70 hover:text-gold-deep">
                    <EnvelopeSimple size={17} className="shrink-0 text-gold-deep" /> {property.contact.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
