import { processSteps } from "@/mocks/services";

export default function Process() {
  return (
    <section id="process" className="relative bg-secondary-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 ubi-grid-bg opacity-30" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary-700/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-accent-400" />
            <span className="font-eng-label text-[11px] text-accent-300">Process</span>
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-background-50 leading-tight">
            お問い合わせから契約まで、
            <br />
            <span className="text-accent-400">5つのステップ。</span>
          </h2>
          <p className="mt-4 font-en text-base md:text-lg text-primary-200">
            From first inquiry to kick-off in five steps.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px bg-primary-500/40" />

          {processSteps.map((s) => (
            <div
              key={s.step}
              className="relative bg-secondary-900/70 border border-secondary-700 rounded-xl p-6 hover:border-accent-400 transition backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-background-50 text-secondary-900">
                  <i className={`${s.icon} text-2xl`} />
                </div>
                <div>
                  <div className="font-eng-label text-[10px] text-accent-300">STEP</div>
                  <div className="font-heading text-2xl text-background-50 leading-none">{s.step}</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-heading text-lg text-background-50">{s.titleJa}</h3>
                <div className="font-en text-sm text-primary-200 mt-0.5">{s.titleEn}</div>
              </div>

              <p className="mt-4 text-[13px] text-background-100/80 leading-relaxed">{s.descJa}</p>
              <p className="mt-2 text-[11px] text-primary-200/70 leading-relaxed">{s.descEn}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl bg-secondary-900/50 border border-secondary-700 px-8 py-6">
          <div>
            <div className="font-heading text-base md:text-lg text-background-50">
              最短、ご相談翌営業日から稼働開始。
            </div>
            <div className="font-en text-xs md:text-sm text-primary-200 mt-1">
              Start as early as the next business day after the consultation.
            </div>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-accent-500 hover:bg-primary-500 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-check-line" />
            相談日程を予約する
          </a>
        </div>
      </div>
    </section>
  );
}