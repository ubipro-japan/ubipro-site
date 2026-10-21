export default function Mission() {
  return (
    <section id="mission" className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-accent-100/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-primary-500" />
          <span className="font-eng-label text-[11px] text-primary-700">Our Mission</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl md:text-4xl font-semibold text-secondary-900 leading-[1.2]">
              名刺一枚の信頼を、
              <br />
              事業成長に変えていく。
            </h2>
            <p className="mt-4 font-en text-lg md:text-xl text-primary-700">
              Turning the trust of a business card into real business growth.
            </p>

            <div className="mt-10 space-y-6 text-foreground-800 leading-relaxed">
              <p>
                UbiProは、Google、日本M&A、住友商事のメンバーで立ち上げました。コンサルティング・オペレーション・クリエイティブを一体で提供するホールディングス体制を採用しています。単発のコンサルではなく、実行部隊まで含めて経営者を支える。<br />
——それが私たちの提供価値です。
              </p>
              <p className="text-foreground-600 text-[14px] leading-relaxed">
                UbiPro brings together operators from Google, Nihon M&A Center, and a major sogo shosha (trading house) under one holdings structure — combining consulting, operations, and creative execution so business leaders get both strategy and hands-on delivery from the same team. That is the value we deliver.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#group"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-primary-600 hover:bg-accent-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
              >
                グループ構造を見る
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md border border-background-300 hover:border-primary-500 hover:text-primary-700 text-foreground-800 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-2-line" />
                相談日程を確認する
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-background-200 bg-background-50 p-8">
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-primary-500" />
                <span className="font-eng-label text-[10px] text-primary-700">By the Numbers</span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {[
                  { value: "2022", ja: "創業", en: "Founded" },
                  { value: "6", ja: "専門事業", en: "Business units" },
                  { value: "80+", ja: "支援企業", en: "Clients supported" },
                  { value: "300+", ja: "累計プロジェクト", en: "Projects delivered" },
                ].map((s) => (
                  <div key={s.en}>
                    <div className="font-heading text-3xl md:text-4xl font-semibold text-secondary-900 leading-none">
                      {s.value}
                    </div>
                    <div className="mt-2 text-sm text-foreground-800">{s.ja}</div>
                    <div className="font-eng-label text-[10px] text-primary-700 mt-0.5">{s.en}</div>
                  </div>
                ))}
              </div>

              <p className="mt-8 pt-6 border-t border-background-200 text-foreground-600 text-xs leading-relaxed">
                創業から4年間、コンサルティングから現場の実行支援まで一貫して伴走してきた実績です。
                <span className="block mt-1 text-foreground-500">
                  Four years of hands-on support, from strategy through frontline execution.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}