import { Link } from "react-router-dom";
import type { ServiceContent } from "@/pages/services/serviceContent";
import { getAccent } from "@/pages/services/components/accent";

export default function ServiceHighlight({ service }: { service: ServiceContent }) {
  const highlight = service.highlight;

  if (!highlight) {
    return null;
  }

  const accent = getAccent(service.accent);

  return (
    <section className="relative bg-background-100 py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-xl border border-background-200 bg-background-50 px-6 py-7 md:px-10 md:py-9">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-500" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-12">
            <div className="flex items-center gap-5 md:gap-6 flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary-600 flex flex-col items-center justify-center flex-shrink-0">
                <span className="font-heading text-2xl md:text-3xl font-semibold text-background-50 leading-none">
                  {highlight.value}
                </span>
                <span className="font-eng-label text-[8px] text-primary-100 mt-1.5">BROKERAGE</span>
              </div>
              <div className="min-w-0">
                <p className={`font-eng-label text-[10px] ${accent.text}`}>{highlight.labelEn}</p>
                <p className="mt-1.5 font-heading text-lg md:text-2xl font-semibold text-secondary-900 leading-snug">
                  {highlight.labelJa}
                </p>
              </div>
            </div>

            <div className="flex-1 min-w-0 lg:border-l lg:border-background-200 lg:pl-10">
              <p className="text-xs md:text-sm text-foreground-700 leading-relaxed">
                {highlight.descJa}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {highlight.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[11px] md:text-xs text-foreground-600 leading-relaxed"
                  >
                    <i className="ri-check-line text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/#booking"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-primary-600 hover:bg-primary-700 text-background-50 text-sm font-semibold transition cursor-pointer whitespace-nowrap flex-shrink-0"
            >
              <i className="ri-calendar-check-line" />
              無料で相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}