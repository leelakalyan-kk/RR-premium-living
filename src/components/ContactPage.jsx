import { MapPin, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { LOCATION_PROPERTIES } from "@/constants/site";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitComplaint = (event) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Your complaint has been recorded. Our team will respond shortly.");
  };

  return (
    <>
      <main className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Talk to our team</p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">Contact your preferred PG.</h1>
            </div>
            <Caption className="mt-0 max-w-sm text-base md:text-lg">
              Choose a property and connect directly with its admissions team. Our support is available for visits, availability, and move-in questions.
            </Caption>
          </div>
          <section className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-navy/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Admissions contacts</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">One team, every property.</h2>
              </div>
              <MapPin size={28} weight="fill" className="text-gold-deep" />
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {LOCATION_PROPERTIES.map((property) => (
                <div key={property.id} className="rounded-xl bg-paper p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-deep">{property.location}</p>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-navy">{property.name}</h3>
                  <p className="mt-4 text-sm font-bold text-navy">{property.contact.name}</p>
                  <a href={`tel:${property.contact.phone.replace(/\D/g, "")}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-gold-deep">
                    <Phone size={16} className="text-gold-deep" /> {property.contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-8 rounded-2xl border border-gold/30 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Resident support</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">Complaint &amp; Grievance</h2>
              </div>
              <p className="max-w-sm text-right text-sm leading-relaxed text-navy/60">Share the issue and our team will review it with care.</p>
            </div>
            {submitted ? (
              <p className="rounded-xl bg-navy p-5 font-semibold text-ivory">Thank you. Your grievance has been submitted to the support team.</p>
            ) : (
              <form onSubmit={submitComplaint} className="grid gap-4 md:grid-cols-2">
                <input className="field-input" name="name" placeholder="Your name" required />
                <input className="field-input" name="mobile" placeholder="Mobile number" type="tel" pattern="[0-9]{10}" required />
                <textarea className="field-input resize-none md:col-span-2" name="complaint" rows={4} placeholder="Describe your complaint or grievance" required />
                <button type="submit" className="rounded-xl bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold-light md:col-span-2 md:justify-self-end">Submit grievance</button>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
