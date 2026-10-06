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

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <main>
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
      <Toaster position="top-center" richColors closeButton />
    </ErrorBoundary>
  );
}

export default App;
