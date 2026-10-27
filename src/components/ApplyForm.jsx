import { toast } from "sonner";
import {
  ArrowRight,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/constants/site";
import SectionHead, { FadeIn } from "@/components/SectionHead";

const STEPS = [
  "Fill the form below, then send the pre-filled application message in WhatsApp.",
  "Our team calls you back to confirm availability and answer questions.",
  "Visit the space, complete your advance & deposit, and move in.",
];

const buildMessage = (d) =>
  [
    "New Application — RR Premium Living",
    "------------------------------------",
    `Full Name: ${d.name}`,
    `Age: ${d.age}`,
    `Gender: ${d.gender}`,
    `Preferred Location: ${d.location}`,
    `Mobile: ${d.mobile}`,
    `Email: ${d.email}`,
    `Query: ${d.address}`,
    "------------------------------------",
  ].join("\n");

export default function ApplyForm() {
  const readForm = (form) => {
    const fd = new FormData(form);
    const mobile = String(fd.get("mobile") || "").replace(/\D/g, "");
    return {
      name: String(fd.get("name") || "").trim(),
      age: String(fd.get("age") || "").trim(),
      gender: String(fd.get("gender") || "").trim(),
      location: String(fd.get("location") || "").trim(),
      mobile,
      email: String(fd.get("email") || "").trim(),
      address: String(fd.get("address") || "").trim(),
    };
  };

  const openWhatsApp = (d) => window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(d))}`,
    "_blank"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = readForm(e.currentTarget);
    if (!/^\d{10}$/.test(d.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!/^(1[6-9]|[2-9]\d)$/.test(d.age)) {
      toast.error("Please enter an age between 16 and 99.");
      return;
    }
    const form = e.currentTarget;
    const win = openWhatsApp(d);
    if (win) {
      form.reset();
      toast.success("Submitted successfully.");
    } else {
      toast.error("WhatsApp could not be opened. Please allow pop-ups and try again.");
    }
  };

  return (
    <section id="apply" data-testid="apply-section" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          index="06"
          eyebrow="Apply Now / Contact Us"
          title="Ready to move in?"
          note="Share your details and we will get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <aside className="flex h-full flex-col justify-between gap-10 rounded-md bg-navy p-8 md:p-10">
              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ivory">
                  What happens next?
                </h3>
                <ol className="mt-7 space-y-6">
                  {STEPS.map((s, i) => (
                    <li key={i} className="flex gap-4" data-testid={`apply-step-${i + 1}`}>
                      <span className="font-display text-lg font-extrabold text-gold">
                        0{i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-ivory/75">{s}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-7">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  data-testid="apply-contact-phone"
                  className="flex items-center gap-3 text-sm font-semibold text-ivory/85 transition-colors hover:text-gold-light"
                >
                  <Phone size={18} className="text-gold" /> {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  data-testid="apply-contact-email"
                  className="flex items-center gap-3 text-sm font-semibold text-ivory/85 transition-colors hover:text-gold-light"
                >
                  <EnvelopeSimple size={18} className="text-gold" /> {CONTACT_EMAIL}
                </a>
              </div>
            </aside>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-7">
            <form
              id="apply-form"
              data-testid="apply-form"
              onSubmit={handleSubmit}
              className="rounded-md border border-navy/10 bg-white p-7 md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="apply-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Full Name *
                  </label>
                  <input
                    id="apply-name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="field-input"
                    data-testid="apply-input-name"
                  />
                </div>
                <div>
                  <label htmlFor="apply-age" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Age *
                  </label>
                  <input
                    id="apply-age"
                    name="age"
                    type="text"
                    inputMode="numeric"
                    pattern="(1[6-9]|[2-9][0-9])"
                    maxLength={2}
                    required
                    placeholder="e.g. 21"
                    className="field-input age-input"
                    data-testid="apply-input-age"
                  />
                </div>
                <div>
                  <label htmlFor="apply-gender" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Gender *
                  </label>
                  <select
                    id="apply-gender"
                    name="gender"
                    required
                    defaultValue=""
                    className="field-input"
                    data-testid="apply-input-gender"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="apply-location" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Preferred Location *
                  </label>
                  <select
                    id="apply-location"
                    name="location"
                    required
                    defaultValue=""
                    className="field-input"
                    data-testid="apply-input-location"
                  >
                    <option value="" disabled>
                      Select your preferred location
                    </option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="apply-mobile" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Mobile Number *
                  </label>
                  <input
                    id="apply-mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                    placeholder="10-digit mobile number"
                    className="field-input"
                    data-testid="apply-input-mobile"
                  />
                </div>
                <div>
                  <label htmlFor="apply-email" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Email *
                  </label>
                  <input
                    id="apply-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="field-input"
                    data-testid="apply-input-email"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="apply-address" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Query *
                  </label>
                  <textarea
                    id="apply-address"
                    name="address"
                    required
                    rows={3}
                    placeholder="Enter your query"
                    className="field-input resize-none"
                    data-testid="apply-input-address"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-7 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  data-testid="apply-submit-whatsapp"
                  className="group inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-[0_14px_40px_rgba(212,175,55,0.35)]"
                >
                  Submit via WhatsApp
                  <ArrowRight
                    size={17}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-navy/50">
                Your details will be pre-filled in WhatsApp. Send that message to complete your application.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}