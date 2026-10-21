import React from 'react';

export default function Representative() {
  return (
    <section id="representative" className="relative bg-background-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Text only layout — photo removed */}
        <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-primary-500" />
              <span className="font-eng-label text-[11px] text-primary-700">Our Team</span>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-tight">
              B2Bの難問に、
              <br />
              実行で応えるチーム。
            </h2>
            <p className="mt-3 font-en text-sm md:text-base text-primary-700">
              A team that answers hard B2B questions with execution.
            </p>

            <div className="mt-6 space-y-4 text-foreground-800 leading-relaxed text-sm md:text-[15px] max-w-[760px]">
              <p>
                企業向け（B2B）の経営課題は、正解のない問いの連続です。新規事業の立ち上げ、既存事業の収益改善、バックオフィスや組織の整備——どれも、戦略を描いただけでは前に進みません。私たちは、経営層と同じ目線で本質的な課題を捉え、現場の実行まで一貫して伴走することを強みとしています。
              </p>
              <p>
                コンサルティングに本当に求められるのは、美しい資料ではなく「事業が動き出すこと」。提案のあとの〈誰が・いつ・どう実行するか〉まで設計し、クライアントのチームと一緒に手を動かす。だからこそ、机上の戦略で終わらせず、成果につなげられます。
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                {
                  icon: "ri-focus-3-line",
                  ja: "課題の構造化と仮説構築",
                  en: "Problem Framing",
                },
                {
                  icon: "ri-line-chart-line",
                  ja: "事業・収益モデルの設計",
                  en: "Business & Revenue Design",
                },
                {
                  icon: "ri-team-line",
                  ja: "現場実行から定着まで",
                  en: "Execution & Adoption",
                },
              ].map((c) => (
                <div
                  key={c.ja}
                  className="rounded-lg border border-background-200 bg-background-100/70 p-4"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-secondary-900 text-background-50">
                    <i className={`${c.icon} text-lg`} />
                  </div>
                  <div className="mt-3 font-heading text-sm text-secondary-900">{c.ja}</div>
                  <div className="font-eng-label text-[9px] text-primary-700 mt-0.5">{c.en}</div>
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
}