import SectionHead, { FadeIn } from "@/components/SectionHead";
import { IMAGES, MENU } from "@/constants/site";

export default function Food() {
  return (
    <section id="food" data-testid="food-section" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead
          dark
          index="04"
          eyebrow="Food & Dining"
          title="Nutritious & Hygienic Food"
          note="Fresh, home-style meals prepared in-house every day — cooked clean, served hot, made for long days."
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:items-stretch lg:grid-cols-12">
          <FadeIn className="lg:col-span-5 lg:flex lg:flex-col lg:justify-center">
            <figure className="clip-frame relative overflow-hidden rounded-2xl">
              <img
                src={IMAGES.food}
                alt="Fresh home-style Indian meals served daily"
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </figure>
            <div
              data-testid="menu-note-nonveg"
              className="mt-6 inline-flex w-fit max-w-full items-center gap-3 rounded-xl bg-gold px-5 py-3.5 text-sm font-bold text-navy"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-navy" />
              </span>
              Non-Veg served twice a week
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-7 lg:flex lg:flex-col">
            <div className="flex flex-1 flex-col">
              <div className="mt-8 flex flex-1 flex-col overflow-hidden rounded-2xl lg:mt-0">
                <div className="w-full min-w-0 flex-1">
                  <table className="menu-table h-full" data-testid="menu-table">
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Breakfast</th>
                        <th>Lunch</th>
                        <th>Dinner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MENU.map((m) => (
                        <tr key={m.day} data-testid={`menu-row-${m.day.toLowerCase()}`}>
                          <td className="menu-day">{m.day}</td>
                          <td>{m.breakfast}</td>
                          <td>{m.lunch}</td>
                          <td>
                            {m.dinner}
                            {m.nonVeg && (
                              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-gold align-middle" title="Chicken curry day" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 flex items-center gap-2 px-1 text-xs text-ivory/50">
                  <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                  Chicken curry is served on Wednesday and Sunday dinner.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}