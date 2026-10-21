import Header from "@/pages/home/components/Header";
import Hero from "@/pages/home/components/Hero";
import Mission from "@/pages/home/components/Mission";
import GroupTree from "@/pages/home/components/GroupTree";
import Representative from "@/pages/home/components/Representative";
import Process from "@/pages/home/components/Process";
import Booking from "@/pages/home/components/Booking";
import Contact from "@/pages/home/components/Contact";
import Footer from "@/pages/home/components/Footer";
import WelcomeModal from "@/pages/home/components/WelcomeModal";
import MobileCtaBar from "@/pages/home/components/MobileCtaBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.hash]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="min-h-screen bg-background-50 text-foreground-900">
      <Header />
      <WelcomeModal />
      <Hero />
      <Mission />
      <GroupTree />
      <Representative />
      <Process />
      <Booking />
      <Contact />
      <Footer />
      {/* Spacer so the mobile CTA bar never covers footer content */}
      <div className="h-[70px] lg:hidden" aria-hidden="true" />
      <MobileCtaBar />
    </main>
  );
}