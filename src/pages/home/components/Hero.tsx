export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden flex items-center pt-28 pb-16 md:pt-32 md:pb-24 min-h-[600px] md:min-h-[780px]"
    >
      <img
        src="/images/hero.jpg"
        alt="UbiPro consulting group in Tokyo"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/70 via-secondary-950/45 to-secondary-950/70" />
      <div className="absolute inset-0 ubi-grid-bg opacity-40" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 flex flex-col justify-center">
        <div className="ubi-fade-up max-w-3xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-background-50/10 border border-background-50/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
            <span className="font-eng-label text-[9px] sm:text-[11px] text-background-50">
              <span className="sm:hidden">Tokyo Consulting Group</span>
              <span className="hidden sm:inline">Tokyo Consulting Group · Est. 2026</span>
            </span>
          </div>

          <h1 className="mt-6 md:mt-8 font-heading text-[27px] sm:text-5xl lg:text-7xl font-semibold text-background-50 leading-[1.18] tracking-tight">
            成長を、公正に、
            <br />
            仕組みで届ける。
          </h1>
          <p className="mt-4 md:mt-6 font-en text-lg md:text-2xl text-primary-200 leading-relaxed">
            Growth, delivered with fairness and structure.
          </p>

          <p className="mt-5 md:mt-8 max-w-2xl text-background-100/90 text-[13px] sm:text-sm md:text-base leading-relaxed">
            UbiProは、東京を拠点にする多角経営コンサルティング・ホールディングスです。不動産・マーケティング・SNS/Webデザイン・オンライン事務・保育事務・英語教育——6つの専門事業がひとつのグループとして連携し、経営者の隣に伴走します。
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 md:px-8 py-3.5 rounded-md bg-primary-500 hover:bg-accent-500 text-background-50 text-xs sm:text-sm font-semibold tracking-wide transition cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-check-line text-sm flex-shrink-0" />
              <span className="sm:hidden">無料相談を予約</span>
              <span className="hidden sm:inline">無料オンライン相談を予約 / Book a consultation</span>
            </a>
            <a
              href="#group"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 md:px-8 py-3.5 rounded-md border border-background-50/40 text-background-50 hover:border-accent-400 hover:text-accent-300 text-xs sm:text-sm font-semibold transition cursor-pointer whitespace-nowrap"
            >
              グループ6事業を見る
              <i className="ri-arrow-right-line flex-shrink-0" />
            </a>
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 md:gap-6 max-w-2xl">
            {[
              { num: "6", label: "Group Services", ja: "グループ事業" },
              { num: "2022", label: "Founded as ProOnline", ja: "前身創業" },
              { num: "2026", label: "Rebranded to UbiPro", ja: "リブランド" },
              { num: "100%", label: "Tokyo based experts", ja: "東京拠点" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-primary-400 pl-4">
                <div className="font-heading text-xl md:text-2xl text-background-50 font-semibold">
                  {s.num}
                </div>
                <div className="mt-1 font-eng-label text-[9px] text-primary-200 whitespace-nowrap">{s.label}</div>
                <div className="text-[10px] text-background-100/80 whitespace-nowrap">{s.ja}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-background-50/70">
        <span className="font-eng-label text-[10px]">Scroll</span>
        <span className="w-px h-10 bg-background-50/40" />
      </div>
    </section>
  );
}