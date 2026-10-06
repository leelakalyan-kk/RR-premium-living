import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  CheckCircle,
  FileArrowUp,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/constants/site";
import SectionHead, { FadeIn } from "@/components/SectionHead";

const STEPS = [
  "Submit the form below — it opens WhatsApp with your details pre-filled.",
  "Our team calls you back to confirm availability and answer questions.",
  "Visit the space, complete your advance & deposit, and move in.",
];

const FileCard = ({ id, label, accept, file, onPick, testid }) => {
  const ref = useRef(null);
  return (
    <div>
      <input
        ref={ref}
        id={id}
        type="file"
        accept={accept}
        className="hidden"
        data-testid={testid}
        onChange={(e) => onPick(e.target.files?.[0] || null)}
      />
      <button
        type="button"
        data-testid={`${testid}-card`}
        onClick={() => ref.current?.click()}
        className={`file-card w-full text-left ${file ? "filled" : ""}`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
            file ? "bg-gold text-navy" : "bg-navy/5 text-navy/60"
          }`}
        >
          {file ? <CheckCircle size={20} weight="fill" /> : <FileArrowUp size={20} />}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-bold text-navy">{label}</span>
          <span className="block truncate text-xs text-navy/55" data-testid={`${testid}-name`}>
            {file ? `${file.name} · ${(file.size / 1024).toFixed(0)} KB` : "Click to upload"}
          </span>
        </span>
      </button>
    </div>
  );
};

const buildMessage = (d) =>
  [
    "New Application — RR Premium Living",
    "------------------------------------",
    `Full Name: ${d.name}`,
    `Age: ${d.age}`,
    `Gender: ${d.gender}`,
    `Mobile: ${d.mobile}`,
    `Current Place / Address: ${d.address}`,
    `ID Proof: ${d.idName}`,
    `Photo: ${d.photoName}`,
    "------------------------------------",
    "Documents will be shared once we connect.",
  ].join("\n");

export default function ApplyForm() {
  const [idFile, setIdFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const readForm = (form) => {
    const fd = new FormData(form);
    const mobile = String(fd.get("mobile") || "").replace(/\D/g, "");
    return {
      name: String(fd.get("name") || "").trim(),
      age: String(fd.get("age") || "").trim(),
      gender: String(fd.get("gender") || "").trim(),
      mobile,
      address: String(fd.get("address") || "").trim(),
      idName: idFile?.name || "To be shared",
      photoName: photoFile?.name || "To be shared",
    };
  };

  const mailtoHref = (d) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "New Application — RR Premium Living"
    )}&body=${encodeURIComponent(buildMessage(d))}`;

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
    const win = openWhatsApp(d);
    if (win) {
      toast.success("Opening WhatsApp with your application details.");
    } else {
      toast.info("WhatsApp did not open — falling back to Email.");
      window.location.href = mailtoHref(d);
    }
  };

  const handleEmailFallback = (e) => {
    e.preventDefault();
    const form = document.getElementById("apply-form");
    const d = readForm(form);
    if (!/^\d{10}$/.test(d.mobile)) {
      toast.error("Please fill the form with a valid 10-digit mobile number first.");
      return;
    }
    window.location.href = mailtoHref(d);
    toast.success("Opening your email app with the application details.");
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
              <div className="space-y-4 border-t border-white/10 pt-7">
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
                <p className="pt-1 text-xs leading-relaxed text-ivory/45">
                  ID proof &amp; photo help us verify your application. Your details are shared
                  only with our admissions team.
                </p>
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
                <div className="sm:col-span-2">
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
                    type="number"
                    min="16"
                    max="99"
                    required
                    placeholder="e.g. 21"
                    className="field-input"
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
                <div className="sm:col-span-2">
                  <label htmlFor="apply-mobile" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Mobile Number *
                  </label>
                  <input
                    id="apply-mobile"
                    name="mobile"
                    type="tel"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    className="field-input"
                    data-testid="apply-input-mobile"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="apply-address" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">
                    Current Place / Address *
                  </label>
                  <textarea
                    id="apply-address"
                    name="address"
                    required
                    rows={3}
                    placeholder="Where do you currently live?"
                    className="field-input resize-none"
                    data-testid="apply-input-address"
                  />
                </div>
                <FileCard
                  id="apply-id"
                  testid="apply-file-id"
                  label="ID Proof *"
                  accept="image/*,.pdf"
                  file={idFile}
                  onPick={setIdFile}
                />
                <FileCard
                  id="apply-photo"
                  testid="apply-file-photo"
                  label="Photo *"
                  accept="image/*"
                  file={photoFile}
                  onPick={setPhotoFile}
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-navy/10 pt-7 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  data-testid="apply-submit-whatsapp"
                  className="group inline-flex flex-1 items-center justify-center gap-3 bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-[0_14px_40px_rgba(212,175,55,0.35)]"
                >
                  Submit via WhatsApp
                  <ArrowRight
                    size={17}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>
                <button
                  type="button"
                  onClick={handleEmailFallback}
                  data-testid="apply-fallback-email"
                  className="text-center text-sm font-bold text-navy/60 underline decoration-gold/60 underline-offset-4 transition-colors hover:text-navy"
                >
                  or send via Email instead
                </button>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-navy/50">
                Submitting opens WhatsApp with your application pre-filled for our team. If
                WhatsApp does not open, we fall back to email automatically — or use the email
                link above.
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}