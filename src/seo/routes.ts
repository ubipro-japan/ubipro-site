import { OG_IMAGE_URL } from "./site";

// Centralized route manifest.
// This is the single source of truth for per-route SEO metadata and for
// the public/sitemap.xml + public/robots.txt files.
//
// Fields:
//  - public:       reachable without authentication
//  - authRequired: gated behind auth / login
//  - indexable:    should search engines index the page
//  - sitemapInclude: eligible for sitemap.xml
export interface RouteSeoConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogType: string;
  ogImage?: string;
  public: boolean;
  authRequired: boolean;
  indexable: boolean;
  sitemapInclude: boolean;
  // Accurate content-modification date (YYYY-MM-DD) only when truthfully known.
  lastmod?: string;
}

export const routeSeo: RouteSeoConfig[] = [
  {
    path: "/",
    title:
      "UbiPro（Tokyo Consulting Group）| 東京の多角経営コンサルティンググループ",
    description:
      "UbiPro（Tokyo Consulting Group）は、東京を拠点に不動産・保育事務・マーケティング・英語塾・SNS/Webデザイン・オンライン事務代行を展開するコンサルティングホールディングス。前身のProOnlineから2026年にリブランドし、6つの専門事業でクライアントの成長を支援します。",
    keywords:
      "UbiPro,Tokyo Consulting Group,コンサルティング,東京,ProOnline,不動産管理,保育専門事務,マーケティング支援,英語塾,SNSマーケティング,オンライン事務代行",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/tokutei",
    title: "特定商取引法に基づく表記｜UbiPro（Tokyo Consulting Group）",
    description:
      "UbiPro Inc.の特定商取引法に基づく表記ページです。販売事業者、運営責任者、所在地、連絡先、提供サービス内容、販売価格、代金の支払時期・方法、サービス提供の時期、返品・キャンセルについて掲載しています。",
    keywords:
      "UbiPro,特定商取引法,特定商取引法に基づく表記,販売事業者,Tokyo Consulting Group",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/privacy",
    title: "プライバシーポリシー｜UbiPro（Tokyo Consulting Group）",
    description:
      "UbiPro Inc.のプライバシーポリシーです。個人情報の収集方法・利用目的、安全管理措置、第三者提供、Cookieおよびアクセス解析ツールの利用、開示・訂正・削除等のご請求、お問い合わせ窓口について定めています。",
    keywords:
      "UbiPro,プライバシーポリシー,個人情報保護,個人情報,セキュリティ,Tokyo Consulting Group",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
    lastmod: "2026-07-23",
  },
  {
    path: "/terms",
    title: "利用規約｜UbiPro（Tokyo Consulting Group）",
    description:
      "UbiPro Inc.が提供するコンサルティングサービスの利用規約です。本規約の適用範囲、用語の定義、知的財産権、禁止事項、免責事項および責任の制限、準拠法と管轄裁判所について定めています。",
    keywords:
      "UbiPro,利用規約,サービス利用規約,コンサルティング,契約,Tokyo Consulting Group",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
    lastmod: "2026-07-23",
  },
  {
    path: "/services/pro-estate",
    title: "不動産管理 PRO ESTATE｜売買・賃貸管理｜UbiPro",
    description:
      "UbiProの不動産管理事業PRO ESTATEのご紹介。都心マンション・投資用物件・法人社宅の売買仲介から賃貸管理、資産診断、出口戦略の設計まで一貫対応。宅地建物取引士が在籍し、月次レポートで運用状況を可視化します。",
    keywords:
      "PRO ESTATE,不動産管理,賃貸管理,売買仲介,資産診断,法人社宅,東京,港区,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/services/prosku",
    title: "保育専門事務 PROSKU｜看護師による事務支援｜UbiPro",
    description:
      "UbiProの保育専門事務PROSKU。看護師資格を持つスタッフが、認可・認証保育所の登降園管理、労務、保護者対応、保健業務を代行します。事務工数を平均42%削減し、保育士が子どもと向き合う時間を取り戻します。",
    keywords: "PROSKU,保育専門事務,保育所,事務代行,看護師,登降園管理,保育士,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/services/marketing-quest",
    title: "マーケティング支援 Marketing Quest｜広告運用｜UbiPro",
    description:
      "UbiProのマーケティング支援事業Marketing Quest。大手事業会社・代理店出身のマーケターが、事業戦略、チャネル設計、広告運用、SEO、CRM構築、データ分析まで担当します。平均34%のCPA改善実績があります。",
    keywords:
      "Marketing Quest,マーケティング支援,広告運用,SEO,CRM,CPA改善,マーケター,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/services/enghouse",
    title: "英語塾 EngHouse｜夜間・土日開講と英語託児｜UbiPro",
    description:
      "UbiProの英語塾EngHouse。共働き家庭向けに平日夜間・土日のマンツーマンレッスンを提供し、英語のみで運営する託児サービスも平日・土日に併設。英検対策は通常のレッスンに組み込み、3級以上の合格率は88%です。",
    keywords: "EngHouse,英語塾,英語託児,英検対策,子ども英会話,夜間レッスン,土日,東京,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/services/prodesign",
    title: "SNS運用・Webデザイン ProDesign｜制作｜UbiPro",
    description:
      "UbiProのデザイン事業ProDesign。Instagram・X・LinkedInの投稿デザインから、ショート動画編集、ランディングページ、コーポレートサイト制作まで一貫対応します。定額制で最短7営業日に納品します。",
    keywords: "ProDesign,SNS運用,Webデザイン,LP制作,コーポレートサイト,ロゴ制作,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
  {
    path: "/services/pro-online",
    title: "オンライン事務代行 ProOnline｜オンライン秘書｜UbiPro",
    description:
      "UbiProの前身事業ProOnline。スケジュール調整、経理・請求書、資料作成、顧客対応、リサーチまで、必要な時間だけ依頼できるオンライン秘書サービスです。最短3営業日で稼働を開始できます。",
    keywords:
      "ProOnline,オンライン事務代行,オンライン秘書,事務代行,バックオフィス,UbiPro",
    ogType: "website",
    ogImage: OG_IMAGE_URL,
    public: true,
    authRequired: false,
    indexable: true,
    sitemapInclude: true,
  },
];

export function resolveRouteSeo(pathname: string): RouteSeoConfig | undefined {
  return routeSeo.find((route) => route.path === pathname);
}