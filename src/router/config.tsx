import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import TokuteiPage from "@/pages/legal/Tokutei";
import PrivacyPage from "@/pages/legal/Privacy";
import TermsPage from "@/pages/legal/Terms";
import ServiceDetailPage from "@/pages/services/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services/:slug",
    element: <ServiceDetailPage />,
  },
  {
    path: "/tokutei",
    element: <TokuteiPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
