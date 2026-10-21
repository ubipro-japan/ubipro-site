import Header from "@/pages/home/components/Header";
import Footer from "@/pages/home/components/Footer";

interface Section {
  id: string;
  title: string;
  titleEn: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "policy-01",
    title: "個人情報保護に関する基本方針",
    titleEn: "Basic Policy on Personal Information Protection",
    content: (
      <div className="space-y-3">
        <p>
          UbiPro Inc.（以下「当社」といいます）は、個人情報の保護に関する法令およびその他の規範を遵守し、
          お客様・お取引先・従業員等の個人情報を適切に取り扱うことを、事業運営上の最重要事項の一つと位置づけております。
        </p>
        <p>
          当社は、本プライバシーポリシーに基づき、個人情報の収集・利用・管理に関する方針を定め、
          これを当社の役員および従業員に周知徹底するとともに、継続的な改善に努めます。
        </p>
      </div>
    ),
  },
  {
    id: "policy-02",
    title: "収集する情報",
    titleEn: "Information We Collect",
    content: (
      <div className="space-y-3">
        <p>当社は、以下の方法でお客様の個人情報を収集することがあります。</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>お問い合わせフォーム:</strong> お名前、メールアドレス、会社名、電話番号、お問い合わせ内容
          </li>
          <li>
            <strong>ご相談予約フォーム:</strong> お名前、メールアドレス、会社名、ご相談内容、希望日時
          </li>
          <li>
            <strong>Cookieおよびアクセス解析:</strong> 当社ウェブサイトでは、アクセス解析のためにCookieを利用しています。
            これにより、ブラウザの種類、アクセス日時、閲覧ページ等の情報を取得することがあります。
          </li>
          <li>
            <strong>お取引に関する情報:</strong> 業務委託契約・コンサルティング契約に伴い、お取引先のご担当者様の情報を収集します。
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "policy-03",
    title: "個人情報の利用目的",
    titleEn: "Purpose of Use",
    content: (
      <div className="space-y-3">
        <p>当社は、収集した個人情報を以下の目的で利用します。</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>お問い合わせ・ご相談に対する回答およびご連絡</li>
          <li>コンサルティングサービスの提供および契約履行</li>
          <li>当社サービスに関するご案内・ニュースレターの配信（ご同意いただいた場合）</li>
          <li>サービス品質向上のための分析・改善</li>
          <li>法令に基づく対応および権利の行使</li>
        </ul>
        <p>
          上記の利用目的を超えて個人情報を利用する場合は、改めて利用目的をご通知し、ご同意をいただいた上で利用いたします。
        </p>
      </div>
    ),
  },
  {
    id: "policy-04",
    title: "個人情報の管理とセキュリティ対策",
    titleEn: "Management & Security Measures",
    content: (
      <div className="space-y-3">
        <p>
          当社は、お客様の個人情報の漏洩・紛失・改ざん・不正アクセス等を防止するため、
          以下の安全管理措置を講じています。
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>組織的安全管理措置:</strong> 個人情報管理責任者を定め、従業員に対する定期的な教育研修を実施
          </li>
          <li>
            <strong>人的安全管理措置:</strong> 全従業員との機密保持契約の締結、アクセス権限の適切な管理
          </li>
          <li>
            <strong>技術的安全管理措置:</strong> アクセス制御、暗号化通信（SSL/TLS）の採用、
            セキュリティソフトウェアの導入
          </li>
          <li>
            <strong>物理的安全管理措置:</strong> 入退室管理、施錠管理、電子媒体の適切な保管・廃棄
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "policy-05",
    title: "第三者提供について",
    titleEn: "Third-Party Disclosure",
    content: (
      <div className="space-y-3">
        <p>
          当社は、以下のいずれかに該当する場合を除き、お客様の個人情報を第三者に開示・提供することはありません。
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>お客様ご本人の同意がある場合</li>
          <li>法令に基づき開示が必要な場合</li>
          <li>人の生命・身体・財産の保護のために必要であり、お客様の同意を得ることが困難な場合</li>
          <li>
            当社の業務委託先に対し、利用目的の達成に必要な範囲内で提供する場合（この場合、
            委託先とは機密保持契約を締結し、適切な監督を行います）
          </li>
          <li>
            合併・会社分割・事業譲渡等により事業が承継される場合
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "policy-06",
    title: "Cookieおよびアクセス解析ツールの利用",
    titleEn: "Use of Cookies and Analytics Tools",
    content: (
      <div className="space-y-3">
        <p>
          当社ウェブサイトでは、お客様の利便性向上およびサイト改善のためにCookieを使用しています。
          Cookieとは、ウェブサイトがお客様のブラウザに送信する小さなテキストファイルであり、
          お客様のコンピュータを特定するものではありません。
        </p>
        <p>
          お客様は、ブラウザの設定によりCookieの受け入れを拒否することができますが、
          その場合、当社ウェブサイトの一部機能がご利用いただけなくなる可能性があります。
        </p>
        <p>
          また、当社ウェブサイトでは、アクセス解析のためGoogle Analytics等のツールを利用しています。
          これらのツールにより収集される情報は匿名であり、個人を特定するものではありません。
        </p>
      </div>
    ),
  },
  {
    id: "policy-07",
    title: "お客様の権利（開示・訂正・削除等）",
    titleEn: "Rights of Users",
    content: (
      <div className="space-y-3">
        <p>
          当社は、お客様ご本人から個人情報の開示・訂正・利用停止・削除等のご請求があった場合、
          ご本人確認を行った上で、法令に従い合理的な期間内に対応いたします。
        </p>
        <p>
          開示請求にあたっては、当社所定の手続きに従っていただく場合がございますので、
          あらかじめご了承ください。
        </p>
      </div>
    ),
  },
  {
    id: "policy-08",
    title: "お問い合わせ窓口",
    titleEn: "Contact Point for Privacy Inquiries",
    content: (
      <div className="space-y-3">
        <p>個人情報の取扱いに関するお問い合わせは、下記の窓口までご連絡ください。</p>
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-medium text-sm text-foreground-800 shrink-0">受付時間:</span>
            <span className="text-sm text-foreground-700">9:00-18:00（土日・祝日を除く）</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPage() {
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
              プライバシーポリシー
            </h1>
            <p className="font-eng-label text-[11px] text-primary-200/80 mt-3 tracking-[0.12em]">
              PRIVACY POLICY
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="bg-background-100/60 rounded-lg p-6 md:p-8 border border-background-200">
            <p className="text-sm md:text-[15px] text-foreground-600 leading-relaxed">
              本プライバシーポリシーは、UbiPro Inc.（以下「当社」といいます）が運営するウェブサイト
              （https://ubipro.net）および当社の提供するコンサルティングサービスにおいて、
              お客様の個人情報をどのように収集・利用・管理するかについて定めたものです。
              当社のサービスをご利用いただく前に、本ポリシーをよくお読みください。
            </p>
            <p className="mt-3 text-xs text-foreground-500">
              最終更新日: 2026年7月23日
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="relative pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <article
                key={section.id}
                id={section.id}
                className="bg-background-50 border border-background-200 rounded-lg overflow-hidden ubi-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="p-6 md:p-8 border-b border-background-100 bg-background-100/30">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-md bg-primary-600 shrink-0 flex items-center justify-center">
                      <span className="font-label text-xs text-background-50 font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-heading text-base md:text-lg text-foreground-800 font-medium">
                        {section.title}
                      </h2>
                      <p className="font-eng-label text-[9px] text-primary-600 mt-1">
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
      </section>

      <Footer />
    </main>
  );
}