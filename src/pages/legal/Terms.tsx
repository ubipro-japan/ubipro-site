import { useState, useEffect } from "react";
import Header from "@/pages/home/components/Header";
import Footer from "@/pages/home/components/Footer";

interface TermSection {
  id: string;
  title: string;
  titleEn: string;
  content: React.ReactNode;
}

const termSections: TermSection[] = [
  {
    id: "terms-01",
    title: "はじめに（本規約の適用範囲）",
    titleEn: "Introduction & Scope",
    content: (
      <div className="space-y-3">
        <p>
          本利用規約（以下「本規約」といいます）は、UbiPro Inc.（以下「当社」といいます）が提供する
          コンサルティングサービス（以下「本サービス」といいます）の利用条件を定めるものです。
        </p>
        <p>
          当社は、PRO ESTATE、PROSKU、Marketing Quest、EngHouse、ProDesign、ProOnlineの
          6つの専門事業を通じて本サービスを提供しており、本規約はこれらの全事業に適用されます。
        </p>
        <p>
          本サービスをご利用いただくお客様（以下「ユーザー」といいます）は、
          本規約に同意いただいたものとみなします。
        </p>
      </div>
    ),
  },
  {
    id: "terms-02",
    title: "用語の定義",
    titleEn: "Definition of Terms",
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>「本サービス」</strong>とは、当社が提供する全てのコンサルティングサービスを指します。
          </li>
          <li>
            <strong>「ユーザー」</strong>とは、本サービスを利用する個人または法人を指します。
          </li>
          <li>
            <strong>「当社」</strong>とは、UbiPro Inc.を指します。
          </li>
          <li>
            <strong>「契約」</strong>とは、当社とユーザー間で締結される個別の業務委託契約書またはサービス利用契約を指します。
          </li>
          <li>
            <strong>「コンテンツ」</strong>とは、本サービスを通じて提供される文章、画像、動画、ソフトウェア、
            デザイン、ノウハウ等の一切の情報を指します。
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "terms-03",
    title: "本規約の変更",
    titleEn: "Scope and Modifications of Terms",
    content: (
      <div className="space-y-3">
        <p>
          当社は、以下のいずれかの場合に、ユーザーの個別の同意を得ることなく本規約を変更することができるものとします。
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>本規約の変更が、ユーザーの一般の利益に適合するとき</li>
          <li>
            本規約の変更が、契約をした目的に反せず、かつ変更の必要性、変更後の内容の相当性、
            その他変更に係る事情に照らして合理的なものであるとき
          </li>
        </ul>
        <p>
          当社は本規約を変更する場合、変更後の本規約の施行時期および内容を当社ウェブサイトへの掲載
          その他の適切な方法により周知します。
        </p>
      </div>
    ),
  },
  {
    id: "terms-04",
    title: "ユーザー登録およびアカウントの管理",
    titleEn: "User Registration and Account Security",
    content: (
      <div className="space-y-3">
        <p>
          本サービスの一部機能のご利用にあたり、ユーザー登録が必要となる場合があります。
          ユーザーは、真実かつ正確な情報を提供するものとし、登録情報に変更が生じた場合は速やかに更新するものとします。
        </p>
        <p>
          ユーザーは、自己のアカウントおよびパスワードの管理について一切の責任を負うものとし、
          第三者による不正利用により当社に損害が生じた場合、ユーザーはその損害を賠償する責任を負います。
        </p>
      </div>
    ),
  },
  {
    id: "terms-05",
    title: "知的財産権",
    titleEn: "Intellectual Property Rights",
    content: (
      <div className="space-y-3">
        <p>
          本サービスを通じて提供される全てのコンテンツ（文章、画像、動画、ソフトウェア、デザイン、
          ロゴ、商標、ノウハウ等）に関する著作権、商標権、意匠権、特許権その他の知的財産権は、
          当社または正当な権利を有する第三者に帰属します。
        </p>
        <p>
          ユーザーは、当社の事前の書面による承諾なく、本サービスのコンテンツを複製、転載、改変、
          公衆送信、販売、貸与、翻訳、翻案等することはできません。
        </p>
        <p>
          ただし、個別のコンサルティング契約に基づき、当社が制作した成果物の知的財産権の帰属については、
          契約書に定める条件に従うものとします。
        </p>
      </div>
    ),
  },
  {
    id: "terms-06",
    title: "禁止事項",
    titleEn: "Prohibited Matters & Compliance",
    content: (
      <div className="space-y-3">
        <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>法令または公序良俗に違反する行為</li>
          <li>当社、他のユーザー、または第三者の知的財産権、プライバシー権、名誉その他の権利を侵害する行為</li>
          <li>当社のサービス運営を妨害する行為</li>
          <li>不正アクセス、コンピュータウイルスの送信等、当社のシステムに危害を及ぼす行為</li>
          <li>当社の事前承諾なく、本サービスを営利目的で転用・再販する行為</li>
          <li>反社会的勢力への利益供与その他の関与</li>
          <li>その他、当社が不適切と合理的に判断する行為</li>
        </ul>
      </div>
    ),
  },
  {
    id: "terms-07",
    title: "免責事項および責任の制限",
    titleEn: "Disclaimer & Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p>
          当社は、本サービスを利用したことによりユーザーに生じた損害について、
          当社の故意または重大な過失による場合を除き、一切の責任を負いません。
        </p>
        <p>
          当社は、コンサルティングサービスの性質上、特定の成果・結果を保証するものではありません。
          コンサルティングの成果は、ユーザーの事業環境、実施状況その他様々な要因により変動することを、
          ユーザーはあらかじめ承諾するものとします。
        </p>
        <p>
          当社は、システム障害、通信回線の不具合、第三者による不正アクセス等により生じた損害について、
          当社の責めに帰すべき事由がある場合を除き、責任を負いません。
        </p>
        <p>
          当社がユーザーに対して損害賠償責任を負う場合、その賠償額は、当該損害の原因となった
          サービスに関してユーザーから現実に受領した対価の額を上限とします。
        </p>
      </div>
    ),
  },
  {
    id: "terms-08",
    title: "準拠法および管轄裁判所",
    titleEn: "Governing Law & Jurisdiction",
    content: (
      <div className="space-y-3">
        <p>
          本規約の解釈および適用は、日本国法に準拠するものとします。
        </p>
        <p>
          本サービスに関連して当社とユーザーとの間で紛争が生じた場合、
          東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </div>
    ),
  },
  {
    id: "terms-09",
    title: "お問い合わせ",
    titleEn: "Contact Information",
    content: (
      <div className="space-y-3">
        <p>本規約に関するお問い合わせは、下記までご連絡ください。</p>
        <div className="bg-background-100/80 rounded-lg p-5 space-y-2 mt-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-medium text-sm text-foreground-800 shrink-0">事業者名:</span>
            <span className="text-sm text-foreground-700">UbiPro Inc.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-medium text-sm text-foreground-800 shrink-0">所在地:</span>
            <span className="text-sm text-foreground-700">
              〒105-6415 東京都港区虎ノ門1-17-1 虎ノ門ヒルズ ビジネスタワー 15階
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-medium text-sm text-foreground-800 shrink-0">Email:</span>
            <a
              href="mailto:info@ubipro.net"
              className="text-sm text-primary-700 underline underline-offset-2 hover:text-accent-600 transition cursor-pointer break-all"
            >
              info@ubipro.net
            </a>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("terms-01");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolledPastHero(window.scrollY > 280);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background-50 text-foreground-900">
      <Header />

      {/* Hero */}
      <section className="relative bg-secondary-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 ubi-grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-600/10 blur-[100px]" />
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="ubi-fade-up">
            <div className="font-eng-label text-[11px] text-primary-200 tracking-[0.16em] mb-4">
              LEGAL
            </div>
            <h1 className="font-heading text-2xl md:text-4xl text-background-50 font-semibold tracking-wide">
              利用規約
            </h1>
            <p className="font-eng-label text-[11px] text-primary-200/80 mt-3 tracking-[0.12em]">
              TERMS OF SERVICE
            </p>
          </div>
        </div>
      </section>

      {/* Content with sidebar */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Sidebar TOC */}
            <aside className="lg:w-[260px] shrink-0">
              <nav
                className={`lg:sticky transition-all duration-300 ${
                  scrolledPastHero ? "lg:top-[100px]" : "lg:top-[140px]"
                }`}
              >
                <div className="font-eng-label text-[9px] text-foreground-500 tracking-[0.14em] mb-4">
                  TABLE OF CONTENTS
                </div>
                <ul className="space-y-0.5">
                  {termSections.map((section) => (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection(section.id);
                          scrollToSection(section.id);
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition cursor-pointer whitespace-nowrap ${
                          activeSection === section.id
                            ? "bg-primary-600 text-background-50 font-medium"
                            : "text-foreground-600 hover:bg-background-100 hover:text-foreground-800"
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-8">
              <div className="bg-background-100/60 rounded-lg p-6 md:p-8 border border-background-200">
                <p className="text-sm md:text-[15px] text-foreground-600 leading-relaxed">
                  本利用規約（以下「本規約」といいます）は、UbiPro Inc.が提供するコンサルティングサービスの
                  利用条件を定めるものです。本サービスをご利用になる前に、必ず本規約をお読みいただき、
                  内容に同意の上でご利用ください。
                </p>
                <p className="mt-3 text-xs text-foreground-500">
                  最終更新日: 2026年7月23日　/　施行日: 2026年7月23日
                </p>
              </div>

              {termSections.map((section, i) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="bg-background-50 border border-background-200 rounded-lg overflow-hidden ubi-fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="p-6 md:p-8 border-b border-background-100 bg-background-100/30">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-md bg-accent-500 shrink-0 flex items-center justify-center">
                        <span className="font-label text-xs text-background-50 font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h2 className="font-heading text-base md:text-lg text-foreground-800 font-medium">
                          {section.title}
                        </h2>
                        <p className="font-eng-label text-[9px] text-accent-600 mt-1">
                          {section.titleEn}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 text-sm md:text-[15px] text-foreground-700 leading-relaxed">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}