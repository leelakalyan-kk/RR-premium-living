import { CaretDown } from "@phosphor-icons/react";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

const FAQS = [
  ["What documents are needed to book a room?", "We need a valid government ID and a recent photo for verification. The exact requirements are shown before you submit your booking."],
  ["Can I choose AC or Non-AC accommodation?", "Yes. Availability depends on the selected property. Our admissions team will confirm your preference and availability."],
  ["What room-sharing options are available?", "Sharing options vary by property and are listed on the Locations page. Select a property to see its available room types."],
  ["How does the booking process work?", "Start by meeting our admissions team, submit your application and preferences, then complete verification and payment before room allotment."],
  ["Can I visit a property before booking?", "Yes. Contact the admissions team for your preferred PG to arrange a visit and confirm availability."],
  ["Are food and housekeeping included?", "Services vary by property. Our team will confirm the included services, charges, and house rules before your booking is finalized."],
  ["How do I contact a specific PG?", "Open the Contact page from the header and choose the property you are interested in. Each listed PG has its own admissions phone number and email."],
];

export default function FaqsPage() {
  return (
    <>
      <main id="faq" className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Need to know</p>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">Frequently asked questions.</h1>
            <Caption className="mt-5 max-w-2xl text-base md:text-lg">
              Quick answers about choosing a property, booking your room, and settling into RR Premium Living.
            </Caption>
          </div>
          <div className="space-y-3">
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
