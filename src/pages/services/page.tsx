import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/pages/home/components/Header";
import Footer from "@/pages/home/components/Footer";
import NotFound from "@/pages/NotFound";
import ServiceHero from "@/pages/services/components/ServiceHero";
import ServiceHighlight from "@/pages/services/components/ServiceHighlight";
import ServiceOverview from "@/pages/services/components/ServiceOverview";
import ServiceStrengths from "@/pages/services/components/ServiceStrengths";
import ServiceMenu from "@/pages/services/components/ServiceMenu";
import ServicePricing from "@/pages/services/components/ServicePricing";
import ServiceFlow from "@/pages/services/components/ServiceFlow";
import ServiceFaq from "@/pages/services/components/ServiceFaq";
import ServiceRelated from "@/pages/services/components/ServiceRelated";
import { getRelatedServices, getServiceContent } from "@/pages/services/serviceContent";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceContent(slug || "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!service) {
    return <NotFound />;
  }

  const related = getRelatedServices(service);

  return (
    <main className="min-h-screen bg-background-50 text-foreground-900">
      <Header />
      <ServiceHero service={service} />
      <ServiceHighlight service={service} />
      <ServiceOverview service={service} />
      <ServiceStrengths service={service} />
      <ServiceMenu service={service} />
      <ServicePricing service={service} />
      <ServiceFlow service={service} />
      <ServiceFaq service={service} />
      <ServiceRelated service={service} related={related} />
      <Footer />
    </main>
  );
}