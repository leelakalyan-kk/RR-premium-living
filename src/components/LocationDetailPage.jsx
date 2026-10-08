import { useState } from "react";
import {
  ArrowLeft,
  BuildingOffice,
  CheckCircle,
  EnvelopeSimple,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkle,
  Users,
} from "@phosphor-icons/react";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

export default function LocationDetailPage({ property }) {
  const [day, setDay] = useState("Monday");
  const countIcons = {
    joined: Users,
    floors: BuildingOffice,
    amenities: Sparkle,
    security: ShieldCheck,
  };
  const menu = {
    Monday: property.food,
    Tuesday: ["Poha, Tea", "Rice, Sambar, Potato Fry", "Chicken Curry"],
    Wednesday: ["Upma, Fresh Fruit", "Veg Pulao, Raita", "Chapati, Dal Fry"],
    Thursday: ["Dosa, Chutney", "Rice, Rajma, Curd", "Mixed Veg Curry"],
    Friday: ["Poori, Bhaji", "Rice, Sambar, Beans Fry", "Chicken Biryani, Raita"],
    Saturday: ["Bread, Jam, Banana", "Rice, Dal, Aloo Curry", "Fried Rice, Manchurian"],
    Sunday: ["Masala Dosa", "Special Thali", "Veg Fried Rice, Noodles"],
  };
  return (
    <>
      <main className="relative z-[2] bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <a href="/locations" className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-navy/60 hover:text-gold-deep"><ArrowLeft size={16} weight="bold" /> All properties</a>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">{property.audienceLabel}</p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">{property.name}</h1>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy/60"><MapPin size={17} className="text-gold-deep" /> {property.location}</p>
              <Caption className="mt-6 max-w-2xl text-base md:text-lg">{property.intro || property.details}</Caption>
            </div>
            <img src={property.image} alt={property.name} className="h-72 w-full rounded-md object-cover shadow-lg md:h-96" />
          </div>

          <section className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {Object.entries(property.counts).map(([label, value]) => {
              const Icon = countIcons[label] || Sparkle;
              return (
                <div
                  key={label}
                  className="rounded-2xl border border-navy/10 bg-white px-4 py-6 text-center shadow-sm transition-colors hover:border-gold/60 md:px-6 md:py-7"
                >
                  <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold-deep">
                    <Icon size={20} weight="duotone" />
                  </span>
                  <p className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">{value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/55 md:text-xs">
                    {label}
                  </p>
                </div>
              );
            })}
          </section>

          <section className="mt-20 grid gap-10 lg:grid-cols-2">
            <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Exclusive at this PG</p><h2 className="mt-3 font-display text-4xl font-extrabold text-navy">Designed around your day.</h2><ul className="mt-7 space-y-4">{property.exclusive.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold text-navy/75"><CheckCircle size={20} weight="fill" className="shrink-0 text-gold-deep" />{item}</li>)}</ul></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Nearby locations</p><div className="mt-5 grid gap-3">{property.nearby.map((item) => <p key={item} className="rounded-md bg-white p-4 text-sm font-semibold text-navy/70"><MapPin size={17} className="mr-2 inline text-gold-deep" />{item}</p>)}</div></div>
          </section>

          <section className="mt-20">
            <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Why choose RR</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold text-navy">Premium living, properly managed.</h2>
                <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-navy/65">
                  <p>
                    RR Premium Living brings together thoughtfully selected locations, fully furnished rooms, hygienic food, daily housekeeping, and dependable utilities. Every property is planned to give students and working professionals a comfortable routine, whether they need a quiet place to study, a convenient base near work, or a community that feels easy to settle into.
                  </p>
                  <p>
                    Our on-site teams keep the everyday details running smoothly, from clean shared spaces and regular maintenance to 24/7 security support and responsive admissions assistance. With clear room options, transparent policies, and property-specific support, residents can move in with confidence and focus on living well.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 text-sm font-bold text-navy"><ShieldCheck size={22} className="text-gold-deep" /> Verified community living</div>
              </div>
              <figure className="relative h-80 overflow-hidden rounded-2xl border border-gold/30 bg-navy/5 shadow-sm lg:h-[20rem]">
                <img
                  src={property.gallery[0] || property.image}
                  alt={`${property.name} shared living space`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-6 bottom-6 font-display text-2xl font-extrabold text-ivory">
                  Live well. Feel at home.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="mt-20"><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Gallery</p><h2 className="mt-2 font-display text-4xl font-extrabold text-navy">See the space in motion.</h2><div className="mt-7 flex gap-5 overflow-x-auto pb-4">{property.gallery.map((image) => <img key={image} src={image} alt={`${property.name} gallery`} className="h-64 w-80 shrink-0 rounded-md object-cover shadow-sm transition-transform hover:-translate-y-2" />)}</div></section>

          <section className="mt-20 rounded-md bg-navy p-7 text-ivory md:p-10"><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Food & dining</p><h2 className="mt-2 font-display text-4xl font-extrabold">A menu that keeps you going.</h2><div className="mt-7 flex flex-wrap gap-2">{Object.keys(menu).map((item) => <button key={item} type="button" onClick={() => setDay(item)} className={`rounded-full px-4 py-2 text-xs font-bold ${day === item ? "bg-gold text-navy" : "bg-white/10 text-ivory/70 hover:bg-white/20"}`}>{item}</button>)}</div><div className="mt-6 grid gap-3 md:grid-cols-3">{["Breakfast", "Lunch", "Dinner"].map((label, i) => <div key={label} className="rounded-md bg-white/[0.08] p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{label}</p><p className="mt-3 text-sm text-ivory/80">{menu[day][i]}</p></div>)}</div></section>

          <section className="mt-20"><p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">Meet our happy residents</p><div className="mt-6 grid gap-5 md:grid-cols-2">{property.residents.map((quote) => <blockquote key={quote} className="rounded-md border border-navy/10 bg-white p-6 text-lg font-display font-bold leading-relaxed text-navy">“{quote}”</blockquote>)}</div></section>

          <section className="mt-20 rounded-md border border-gold/30 bg-white p-7 md:p-10"><h2 className="font-display text-3xl font-extrabold text-navy">Talk to {property.contact.name}</h2><div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-navy/70"><a href={`tel:${property.contact.phone.replace(/\D/g, "")}`}><Phone size={17} className="mr-2 inline text-gold-deep" />{property.contact.phone}</a><a href={`mailto:${property.contact.email}`}><EnvelopeSimple size={17} className="mr-2 inline text-gold-deep" />{property.contact.email}</a></div></section>
        </div>
      </main>
      <Footer property={property} />
    </>
  );
}
