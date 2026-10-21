import type { ServiceContent } from "@/pages/services/serviceContent";

export default function ServiceFlow({ service }: { service: ServiceContent }) {
  return (
    <section className="relative bg-background-50 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">Process</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
            ご相談の流れ
          </h2>
          <p className="mt-3 font-en text-base md:text-lg text-primary-700">
            From first contact to kick-off.
          </p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {service.flow.map((step, i) => (
            <li key={step.step} className="relative">
              <div className="h-full rounded-xl border border-background-200 bg-background-50 p-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-secondary-900 text-background-50 flex items-center justify-center font-label text-xs">
                    {step.step}
                  </span>
                  {i < service.flow.length - 1 && (
                    <i className="ri-arrow-right-line text-background-400 hidden lg:block" />
                  )}
                </div>
                <h3 className="mt-5 font-heading text-base text-secondary-900">{step.titleJa}</h3>
                <p className="font-eng-label text-[9px] text-primary-600 mt-1">{step.titleEn}</p>
                <p className="mt-3 text-[13px] text-foreground-700 leading-relaxed">{step.descJa}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}