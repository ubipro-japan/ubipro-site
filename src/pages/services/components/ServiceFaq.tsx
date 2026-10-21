import { useState } from "react";
import type { ServiceContent } from "@/pages/services/serviceContent";

export default function ServiceFaq({ service }: { service: ServiceContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-background-100 py-20 md:py-28">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-primary-500" />
            <span className="font-eng-label text-[11px] text-primary-700">FAQ</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary-900 leading-snug">
            よくあるご質問
          </h2>
          <p className="mt-3 font-en text-base md:text-lg text-primary-700">
            Questions we hear most often.
          </p>
        </div>

        <div className="mt-10 divide-y divide-background-200 border-y border-background-200">
          {service.faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-start gap-4 py-5 text-left cursor-pointer group"
                >
                  <span className="font-label text-xs text-primary-600 mt-1">Q</span>
                  <span className="flex-1 text-sm md:text-[15px] font-medium text-foreground-800 group-hover:text-primary-800 transition leading-relaxed">
                    {item.q}
                  </span>
                  <i
                    className={`mt-0.5 text-lg text-foreground-400 transition-transform duration-300 ${
                      open ? "ri-subtract-line" : "ri-add-line"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-4 pb-6 pl-0">
                      <span className="font-label text-xs text-accent-600 mt-0.5">A</span>
                      <p className="flex-1 text-[13px] md:text-sm text-foreground-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}