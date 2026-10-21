import {
  SITE_NAME,
  SITE_ALT_NAME,
  SITE_EMAIL,
  SITE_ADDRESS,
  OG_IMAGE_URL,
  absoluteUrl,
} from "./site";
import { serviceCatalog } from "@/pages/services/serviceContent";

// Builds Schema.org JSON-LD blocks for a given route.
// Every value here matches the visible page content.
export function buildSchema(pathname: string): object[] {
  const homeUrl = absoluteUrl("/");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${homeUrl}#organization`,
    name: SITE_NAME,
    alternateName: SITE_ALT_NAME,
    url: homeUrl,
    logo: OG_IMAGE_URL,
    image: OG_IMAGE_URL,
    description:
      "UbiPro（Tokyo Consulting Group）は、東京を拠点に6つの専門事業を展開するコンサルティングホールディングスです。",
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.locality,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: SITE_ADDRESS.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE_EMAIL,
        availableLanguage: ["ja", "en"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    url: homeUrl,
    name: `${SITE_NAME}（${SITE_ALT_NAME}）`,
    inLanguage: ["ja", "en"],
    publisher: { "@id": `${homeUrl}#organization` },
  };

  if (pathname === "/" || pathname === "") {
    return [organization, website];
  }

  const service = serviceCatalog.find((item) => `/services/${item.id}` === pathname);
  if (service) {
    const serviceUrl = absoluteUrl(pathname);

    const servicePage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: `${service.nameJa}（${service.brand}）｜${SITE_NAME}（${SITE_ALT_NAME}）`,
      description: service.leadJa,
      inLanguage: "ja",
      isPartOf: { "@id": `${homeUrl}#website` },
      publisher: { "@id": `${homeUrl}#organization` },
    };

    const serviceBreadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: homeUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "事業紹介",
          item: `${homeUrl}#group`,
        },
        { "@type": "ListItem", position: 3, name: service.brand, item: serviceUrl },
      ],
    };

    const serviceEntity = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: `${service.brand}（${service.nameJa}）`,
      serviceType: service.nameEn,
      description: service.leadJa,
      url: serviceUrl,
      provider: { "@id": `${homeUrl}#organization` },
      areaServed: { "@type": "Country", name: "Japan" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: serviceUrl,
        availableLanguage: ["ja", "en"],
      },
    };

    return [servicePage, serviceBreadcrumb, serviceEntity];
  }

  const pageMap: Record<
    string,
    { name: string; description: string; breadcrumb: string }
  > = {
    "/tokutei": {
      name: "特定商取引法に基づく表記",
      description:
        "UbiPro Inc.の特定商取引法に基づく表記。販売事業者、所在地、連絡先、提供サービス、販売価格、支払方法、返品・キャンセルポリシー等を掲載しています。",
      breadcrumb: "特定商取引法に基づく表記",
    },
    "/privacy": {
      name: "プライバシーポリシー",
      description:
        "UbiPro Inc.のプライバシーポリシー。個人情報の収集・利用目的、安全管理措置、第三者提供、Cookie・アクセス解析、開示・訂正・削除のご請求等について定めています。",
      breadcrumb: "プライバシーポリシー",
    },
    "/terms": {
      name: "利用規約",
      description:
        "UbiPro Inc.が提供するコンサルティングサービスの利用規約。適用範囲、用語定義、知的財産権、禁止事項、免責事項、準拠法・管轄裁判所等について定めています。",
      breadcrumb: "利用規約",
    },
  };

  const page = pageMap[pathname];
  if (!page) {
    return [organization, website];
  }

  const pageUrl = absoluteUrl(pathname);

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${page.name}｜${SITE_NAME}（${SITE_ALT_NAME}）`,
    description: page.description,
    inLanguage: "ja",
    isPartOf: { "@id": `${homeUrl}#website` },
    publisher: { "@id": `${homeUrl}#organization` },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumb,
        item: pageUrl,
      },
    ],
  };

  return [webPage, breadcrumb];
}