import { useEffect, Component } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/Marquee";
import Locations from "@/components/Locations";
import Spaces from "@/components/Spaces";
import Amenities from "@/components/Amenitied";
import Food from "@/components/Food";
import Rules from "@/components/Rules";
import ApplyForm from "@/components/ApplyForm";
import Footer from "@/components/Footer";
import LocationsPage from "@/components/LocationsPage";
import BookingPage from "@/components/BookingPage";
import ContactPage from "@/components/ContactPage";
import FaqsPage from "@/components/FaqsPage";
import AppDownloadPage from "@/components/AppDownloadPage";
import LocationDetailPage from "@/components/LocationDetailPage";
import { LOCATION_PROPERTIES } from "@/constants/site";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-navy px-6 text-center">
          <p className="font-display text-2xl font-bold text-ivory">
            Something went wrong. Please refresh the page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const isLocationsPage =
    window.location.pathname === "/locations" ||
    window.location.pathname.startsWith("/locations/");
  const locationDetailId = window.location.pathname.match(/^\/locations\/([^/]+)$/)?.[1];
  const locationDetail = LOCATION_PROPERTIES.find((property) => property.id === locationDetailId);
  const standalonePage = window.location.pathname;
  const bookingType = window.location.pathname.match(/^\/booking\/(online|process|policies)$/)?.[1];

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (hash === "#" || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -76, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    const hash = window.location.hash;
    const hashTarget = hash ? document.querySelector(hash) : null;
    if (hashTarget) {
      requestAnimationFrame(() => {
        lenis.scrollTo(hashTarget, { offset: -76, immediate: true });
      });
    }

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <div className="relative">
        {locationDetail ? (
          <LocationDetailPage property={locationDetail} />
        ) : isLocationsPage ? (
          <LocationsPage />
        ) : standalonePage === "/contact" ? (
          <ContactPage />
        ) : standalonePage === "/faqs" ? (
          <FaqsPage />
        ) : standalonePage === "/app-download" ? (
          <AppDownloadPage />
        ) : bookingType ? (
          <BookingPage type={bookingType} />
        ) : (
          <>
            <main className="relative">
              <Hero />
              <EditorialMarquee />
              <Locations />
              <Spaces />
              <Amenities />
              <Food />
              <Rules />
              <ApplyForm />
            </main>
            <Footer />
          </>
        )}
      </div>
      <Toaster position="top-center" richColors closeButton />
    </ErrorBoundary>
  );
}

export default App;
