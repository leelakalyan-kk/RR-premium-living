import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { toast } from "sonner";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/constants/site";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

export default function ContactPage() {
  const submitComplaint = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "New Complaint / Grievance — RR Premium Living",
      "---------------------------------------------",
      `Name: ${formData.get("name")}`,
      `Mobile: ${formData.get("mobile")}`,
      `Complaint: ${formData.get("complaint")}`,
      "---------------------------------------------",
    ].join("\n");
    const whatsappWindow = window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    if (!whatsappWindow) {
      toast.error("WhatsApp could not be opened. Please allow pop-ups and try again.");
      return;
    }
    toast.success("WhatsApp opened. Send your grievance there to submit it.");
  };

  return (
    <>
      <main className="relative z-[2] min-h-screen overflow-hidden bg-paper pb-24 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/why-choose-rr.png')] bg-cover bg-center opacity-[0.35]"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Talk to our team</p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">Contact our PG team.</h1>
            </div>
            <Caption className="mt-0 max-w-sm text-base md:text-lg">
              Contact our admissions team about men's living, women's living, co-living, visits, or move-in questions.
            </Caption>
          </div>
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <section className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 border-b border-navy/10 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Admissions contacts</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">One team, every living option.</h2>
              </div>
              <div className="rounded-xl bg-paper p-5">
                <h3 className="font-display text-xl font-extrabold text-navy">Admissions Team</h3>
                <a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\D/g, "")}`} className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-gold-deep">
                  <Phone size={16} className="text-gold-deep" /> {CONTACT_PHONE_DISPLAY}
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-gold-deep">
                  <EnvelopeSimple size={16} className="text-gold-deep" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </section>
            <section className="h-full rounded-2xl border border-gold/30 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">Resident support</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">Complaint &amp; Grievance</h2>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">Share the issue and our team will review it with care.</p>
              </div>
              <form onSubmit={submitComplaint} className="grid gap-4 md:grid-cols-2">
                <input className="field-input" name="name" placeholder="Your name" required />
                <input className="field-input" name="mobile" placeholder="Mobile number" type="tel" pattern="[0-9]{10}" required />
                <textarea className="field-input resize-none py-2 md:col-span-2" name="complaint" rows={2} placeholder="Describe your complaint or grievance" required />
                <button type="submit" className="w-full rounded-xl bg-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-navy hover:bg-gold-light md:col-span-2">Submit via WhatsApp</button>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
