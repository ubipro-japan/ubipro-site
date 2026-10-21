import Header from "@/pages/home/components/Header";
import Footer from "@/pages/home/components/Footer";

export default function TokuteiPage() {
  const rows: { label: string; labelEn: string; value: React.ReactNode }[] = [
    {
      label: "販売事業者名",
      labelEn: "Distributor",
      value: "UbiPro Inc.（Tokyo Consulting Group）",
    },
    {
      label: "運営責任者",
      labelEn: "Representative",
      value: "岡部 なつみ",
    },
    {
      label: "所在地",
      labelEn: "Address",
      value: "〒105-6415 東京都港区虎ノ門1-17-1 虎ノ門ヒルズ ビジネスタワー 15階",
    },
    {
      label: "連絡先",
      labelEn: "Contact",
      value: (
        <>
          <div>
            Email:{" "}
            <a
              href="mailto:info@ubipro.net"
              className="text-primary-700 underline underline-offset-2 hover:text-accent-600 transition cursor-pointer break-all"
            >
              info@ubipro.net
            </a>
          </div>
          <div className="mt-1">営業時間: 9:00-18:00（土日・祝日を除く）</div>
          <div className="mt-1 text-sm text-foreground-600">
            電話番号につきましては、お客様からのご請求があった場合、遅滞なく開示いたします。
            お問合せはメール（
            <a
              href="mailto:info@ubipro.net"
              className="text-primary-700 underline underline-offset-2 hover:text-accent-600 transition cursor-pointer break-all"
            >
              info@ubipro.net
            </a>
            ）またはお問い合わせフォームよりお願いいたします。
          </div>
        </>
      ),
    },
    {
      label: "提供サービス内容",
      labelEn: "Services",
      value: "専門コンサルティング事業（6つの専門領域：PRO ESTATE / PROSKU / Marketing Quest / EngHouse / ProDesign / ProOnline）",
    },
    {
      label: "販売価格",
      labelEn: "Pricing",
      value: "各サービス個別見積もりまたは契約書面記載の通り",
    },
    {
      label: "代金の支払時期・方法",
      labelEn: "Payment Terms & Methods",
      value: "銀行振込（請求書払い等、契約条件による）",
    },
    {
      label: "サービス提供の時期",
      labelEn: "Service Delivery",
      value: "契約締結後、個別合意したスケジュールに従い提供",
    },
    {
      label: "返品・キャンセルについて",
      labelEn: "Cancellation / Refund Policy",
      value: "コンサルティングサービスの性質上、契約確定後の返金はお受けしておりません。（契約書面の解約条項に準拠）",
    },
  ];

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
              特定商取引法に基づく表記
            </h1>
            <p className="font-eng-label text-[11px] text-primary-200/80 mt-3 tracking-[0.12em]">
              SPECIFIED COMMERCIAL TRANSACTIONS ACT
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="bg-background-50 border border-background-200 rounded-lg overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.labelEn}
                className={`flex flex-col md:flex-row border-b border-background-100 last:border-b-0 transition-colors hover:bg-background-100/50 ${
                  i === 0 ? "" : ""
                }`}
              >
                <div className="md:w-[260px] shrink-0 p-5 md:p-6 bg-background-100/70 md:bg-background-100/40 border-b md:border-b-0 md:border-r border-background-200">
                  <div className="font-heading text-sm text-foreground-800 font-medium">
                    {row.label}
                  </div>
                  <div className="font-eng-label text-[9px] text-primary-600 mt-0.5">
                    {row.labelEn}
                  </div>
                </div>
                <div className="flex-1 p-5 md:p-6 text-sm md:text-[15px] text-foreground-700 leading-relaxed">
                  {row.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-foreground-500 text-center leading-relaxed">
            本表記は、特定商取引に関する法律第11条に基づき表示しています。
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}