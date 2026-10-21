import { CaretDown } from "@phosphor-icons/react";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

const FAQS = [
  ["What documents are needed to book a room?", "We need a valid government ID and a recent photo for verification. The exact requirements are shown before you submit your booking."],
  ["Can I choose AC or Non-AC accommodation?", "Yes. Our admissions team will confirm your preference and current availability."],
  ["What room-sharing options are available?", "Sharing options are listed for men's living, women's living, and co-living on the Living Options page."],
  ["How does the booking process work?", "Start by meeting our admissions team, submit your application and preferences, then complete verification and payment before room allotment."],
  ["Can I visit the PG before booking?", "Yes. Contact the admissions team to arrange a visit and confirm availability."],
  ["Are food and housekeeping included?", "Our team will confirm the included services, charges, and house rules before your booking is finalized."],
  ["How do I contact the PG team?", "Use the Contact page to reach our shared admissions team by phone or email."],
];

export default function FaqsPage() {
  return (
    <>
      <main id="faq" className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Need to know</p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-6xl xl:text-7xl">Frequently asked questions.</h1>
            </div>
            <Caption className="mt-0 max-w-sm text-base md:text-lg">
              Quick answers about living options, booking your room, and settling into RR Premium Living.
            </Caption>
          </div>
          <div className="mx-auto max-w-5xl space-y-3">
            {FAQS.map(([question, answer]) => (
              <details key={question} className="group rounded-md border border-navy/10 bg-white px-6 py-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-navy">
                  {question}
                  <CaretDown size={20} className="shrink-0 text-gold-deep transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-relaxed text-navy/65">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
