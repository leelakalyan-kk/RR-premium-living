import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import { IMAGES } from "@/constants/site";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

function BookingProcess() {
  const steps = [
    ["01", "Meet", "Speak with our admissions team and tour your preferred property.", "/booking-meet.png", "object-[68%_center]"],
    ["02", "Application & Booking", "Submit your details, select a room, review the booking summary, and pay securely.", "/booking-application.png"],
    ["03", "Room Allotment", "Once verified, receive your room allotment and move-in instructions.", "/booking-allotment.png"],
  ];
  return <BookingShell title="Booking Process" intro="A simple, transparent path from your first conversation to your move-in day.">
    <div className="grid gap-6 md:grid-cols-3">{steps.map(([no, title, text, image, imagePosition = "object-center"]) => (
      <article key={no} className="overflow-hidden rounded-md bg-white shadow-sm">
        <img src={image} alt={title} className={`h-52 w-full object-cover ${imagePosition}`} />
        <div className="p-6"><p className="text-xs font-bold tracking-[0.2em] text-gold-deep">{no}</p><h2 className="mt-2 font-display text-2xl font-extrabold text-navy">{title}</h2><p className="mt-3 text-sm leading-relaxed text-navy/60">{text}</p></div>
      </article>
    ))}</div>
  </BookingShell>;
}

function BookingShell({ title, intro, sideIntro, children }) {
  return <><main className="relative z-[2] min-h-screen bg-paper pb-24 pt-32"><div className="mx-auto max-w-7xl px-4 md:px-8">
    <a href="/" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy/60"><ArrowLeft size={16} /> Back to home</a>
    <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl"><p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Book Your Stay</p><h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">{title}</h1>{intro && <Caption className="mt-5">{intro}</Caption>}</div>
      {sideIntro && <Caption className="mb-0 max-w-sm shrink-0 lg:mb-1">{sideIntro}</Caption>}
    </div>
    {children}
  </div></main><Footer /></>;
}

const INITIAL_BOOKING = {
  name: "",
  mobile: "",
  location: "",
  gender: "",
  sharing: "",
  roomType: "",
  moveInDate: "",
  duration: "",
  query: "",
};

function OnlineBooking() {
  const [details, setDetails] = useState(INITIAL_BOOKING);
  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (event) => {
    const { name, value } = event.target;
    setDetails((current) => ({ ...current, [name]: value }));
  };

  const handlePreview = (event) => {
    event.preventDefault();
    if (!/^\d{10}$/.test(details.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    setPreview(true);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success("Your booking request has been submitted.");
  };

  if (submitted) {
    return <BookingShell title="Request received" intro="Thank you. Our admissions team will contact you shortly to confirm availability.">
      <div className="max-w-2xl rounded-2xl bg-navy p-8 text-ivory md:p-10">
        <CheckCircle size={42} weight="fill" className="text-gold" />
        <h2 className="mt-5 font-display text-3xl font-extrabold">Booking request submitted</h2>
        <p className="mt-3 leading-relaxed text-ivory/75">We have received your preferences for {details.location}. Keep your phone available for our confirmation call.</p>
        <a href="/" className="mt-7 inline-flex rounded-xl bg-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-navy">Back to home</a>
      </div>
    </BookingShell>;
  }

  return <BookingShell title="Online Booking" sideIntro="Share your stay preferences, review the details, and submit your booking request.">
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
      <div>
        {!preview ? (
          <form onSubmit={handlePreview} className="rounded-2xl bg-white p-7 shadow-sm md:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name *" name="name" value={details.name} onChange={update} placeholder="Enter your full name" required />
              <Field label="Mobile Number *" name="mobile" value={details.mobile} onChange={update} placeholder="10-digit mobile number" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} required />
              <SelectField label="Preferred Location *" name="location" value={details.location} onChange={update} options={["Hyderabad", "Bangalore"]} required />
              <SelectField label="Gender *" name="gender" value={details.gender} onChange={update} options={["Male", "Female", "Other"]} required />
              <SelectField label="Room Sharing *" name="sharing" value={details.sharing} onChange={update} options={["2 Sharing", "3 Sharing", "4 Sharing", "5 Sharing"]} required />
              <SelectField label="Room Type *" name="roomType" value={details.roomType} onChange={update} options={["AC", "Non-AC"]} required />
              <Field label="Expected Move-in Date *" name="moveInDate" value={details.moveInDate} onChange={update} type="date" required />
              <SelectField label="Stay Duration *" name="duration" value={details.duration} onChange={update} options={["1–3 months", "3–6 months", "6–12 months", "12+ months"]} required />
              <div className="sm:col-span-2">
                <label htmlFor="booking-query" className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">Query</label>
                <textarea id="booking-query" name="query" value={details.query} onChange={update} rows={3} placeholder="Any questions or special requirements?" className="field-input resize-none" />
              </div>
            </div>
            <button type="submit" className="mt-8 rounded-xl bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy hover:bg-gold-light">Preview Booking</button>
          </form>
        ) : (
          <div className="rounded-2xl bg-white p-7 shadow-sm md:p-10">
            <h2 className="font-display text-3xl font-extrabold text-navy">Review your booking</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {Object.entries(details).map(([key, value]) => value && <div key={key} className="rounded-xl bg-paper p-4"><p className="text-xs font-bold uppercase tracking-[0.16em] text-navy/45">{key.replace(/([A-Z])/g, " $1")}</p><p className="mt-1 font-semibold text-navy">{value}</p></div>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={() => setPreview(false)} className="rounded-xl border border-navy/15 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy">Edit Details</button>
              <button type="button" onClick={handleSubmit} className="rounded-xl bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy hover:bg-gold-light">Submit Booking Request</button>
            </div>
          </div>
        )}
      </div>
      <aside>
        <div className="overflow-hidden rounded-2xl bg-navy text-ivory shadow-sm">
          <img src={IMAGES.hero} alt="Comfortable RR Premium Living bedroom" className="h-56 w-full object-cover lg:h-72" />
          <div className="p-7 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">A smoother move-in starts here</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold">Tell us what good living looks like for you.</h2>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">Share your preferences once, review them clearly, and let our admissions team help you find the right room.</p>
          </div>
        </div>
      </aside>
    </div>
  </BookingShell>;
}

function Field({ label, name, value, onChange, ...props }) {
  return <div><label htmlFor={`booking-${name}`} className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">{label}</label><input id={`booking-${name}`} name={name} value={value} onChange={onChange} className="field-input" {...props} /></div>;
}

function SelectField({ label, name, value, onChange, options, required }) {
  return <div><label htmlFor={`booking-${name}`} className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-navy/70">{label}</label><select id={`booking-${name}`} name={name} value={value} onChange={onChange} required={required} className="field-input"><option value="" disabled>Select an option</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}

function Policies() {
  const policies = ["A valid government ID and recent photo are required for verification.", "Room availability is confirmed only after document review and payment.", "Security deposit, rent, and any applicable maintenance charges are shown before payment.", "Residents must follow property safety, visitor, quiet-hours, and payment guidelines.", "Cancellation and refund terms will be shared with the final booking summary."];
  return <BookingShell title="Guidelines & Policies" intro="Please review these static guidelines before submitting a booking request.">
    <div className="max-w-3xl rounded-md bg-navy p-7 text-ivory md:p-10"><ul className="space-y-6">{policies.map((policy) => <li key={policy} className="flex gap-3 text-sm leading-relaxed text-ivory/80"><CheckCircle size={20} className="shrink-0 text-gold" weight="fill" />{policy}</li>)}</ul></div>
  </BookingShell>;
}

export default function BookingPage({ type }) {
  if (type === "online") return <OnlineBooking />;
  if (type === "process") return <BookingProcess />;
  return <Policies />;
}
