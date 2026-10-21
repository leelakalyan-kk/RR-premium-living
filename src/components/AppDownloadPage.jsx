import { AndroidLogo, AppleLogo, DownloadSimple } from "@phosphor-icons/react";
import Footer from "@/components/Footer";
import { Caption } from "@/components/SectionHead";

const PLATFORMS = [
  { id: "ios", title: "iOS App", copy: "Book and manage your stay from your iPhone.", icon: AppleLogo },
  { id: "android", title: "Android App", copy: "Find your next room from your Android phone.", icon: AndroidLogo },
];

export default function AppDownloadPage() {
  return (
    <>
      <main id="app-download" className="relative z-[2] min-h-screen bg-paper pb-24 pt-32">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">RR on the go</p>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-navy md:text-7xl">Download the app.</h1>
            </div>
            <Caption className="mt-0 max-w-sm text-base md:mt-2 md:text-right md:text-lg">
              Choose your platform to stay close to your property, booking, and resident updates.
            </Caption>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {PLATFORMS.map(({ id, title, copy, icon: Icon }) => (
              <a id={id} key={id} href={`#${id}`} className="group rounded-md border border-navy/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg">
                <Icon size={42} weight="fill" className="text-navy transition-colors group-hover:text-gold-deep" />
                <h2 className="mt-6 font-display text-3xl font-extrabold text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{copy}</p>
                <span className="mt-7 inline-flex items-center gap-2 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-navy">
                  <DownloadSimple size={16} weight="bold" /> Coming soon
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
