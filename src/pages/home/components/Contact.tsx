import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const SUBMIT_URL = "https://api.web3forms.com/submit";
// Web3Forms access key (public by design; submissions are emailed to the registered address)
const WEB3FORMS_ACCESS_KEY = "3b1ca334-37da-4783-9551-b738f89d9997";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    // Honeypot check
    const trap = (formData.get("contact_alt") || "").toString().trim();
    if (trap) {
      setStatus("success");
      formEl.reset();
      return;
    }
    formData.delete("contact_alt");

    // Combine consent multiple values if any
    setSubmitting(true);
    setStatus("idle");
    setFormError("");

    try {
      const payload: Record<string, string> = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "【UbiPro】Webサイトからのお問い合わせ",
        from_name: "UbiPro Website",
      };
      formData.forEach((value, key) => {
        payload[key] = value.toString();
      });
      if (payload.email) payload.replyto = payload.email;

      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      let parsed: { success?: boolean; message?: string } = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        // keep raw text
      }

      const serverMsg = parsed?.message || "";

      if (response.ok && parsed?.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setFormError(
          serverMsg
            ? `送信に失敗しました：${serverMsg}`
            : "送信に失敗しました。時間をおいて再度お試しください。"
        );
      }
    } catch (err) {
      setStatus("error");
      setFormError(
        `送信中にエラーが発生しました。ネットワーク接続をご確認のうえ、再度お試しください。（${
          (err as Error)?.message || "network"
        }）`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background-100 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-primary-500" />
              <span className="font-eng-label text-[11px] text-primary-700">Contact</span>
            </div>
            <h2 className="font-heading text-[26px] sm:text-2xl md:text-4xl font-semibold text-secondary-900 leading-tight">
              まずは、ご相談ください。
            </h2>
            <p className="mt-4 font-en text-lg md:text-xl text-primary-700">
              Reach out. We reply within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                {
                  icon: "ri-map-pin-2-line",
                  labelJa: "本社所在地",
                  labelEn: "Head Office",
                  valueJa: "〒105-6415 東京都港区虎ノ門 1-17-1\n虎ノ門ヒルズ ビジネスタワー 15階",
                  valueEn: "15F Toranomon Hills Business Tower, 1-17-1 Toranomon, Minato-ku, Tokyo 105-6415 JAPAN",
                },
                {
                  icon: "ri-mail-line",
                  labelJa: "メール",
                  labelEn: "Email",
                  valueJa: "info@ubipro.net",
                  valueEn: "",
                },
                {
                  icon: "ri-time-line",
                  labelJa: "営業時間",
                  labelEn: "Business Hours",
                  valueJa: "9:00-18:00　土日・祝日を除く",
                  valueEn: "Weekdays only",
                },
              ].map((item) => (
                <div key={item.labelEn} className="flex gap-4">
                  <div className="w-11 h-11 rounded-md bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-xl`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="font-heading text-sm text-secondary-900">{item.labelJa}</div>
                      <div className="font-eng-label text-[10px] text-primary-700">{item.labelEn}</div>
                    </div>
                    <div className="mt-1 text-foreground-800 text-sm whitespace-pre-line">
                      {item.labelEn === "Email" ? (
                        <a
                          href="mailto:info@ubipro.net"
                          className="text-primary-700 underline underline-offset-2 hover:text-accent-600 transition cursor-pointer break-all"
                        >
                          {item.valueJa}
                        </a>
                      ) : (
                        item.valueJa
                      )}
                    </div>
                    {item.valueEn && (
                      <div className="text-foreground-500 text-xs">{item.valueEn}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl overflow-hidden border border-background-200 aspect-[4/3]">
              <iframe
                title="UbiPro Head Office Map"
                src="https://www.google.com/maps?q=Toranomon+Hills+Business+Tower+Tokyo&hl=ja&z=16&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              id="ubipro-contact-form"
              className="rounded-2xl bg-background-50 border border-background-200 p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-md bg-secondary-900 text-background-50 flex items-center justify-center">
                  <i className="ri-mail-send-line text-xl" />
                </div>
                <div>
                  <div className="font-heading text-xl text-secondary-900">お問い合わせフォーム</div>
                  <div className="font-eng-label text-[10px] text-primary-700 mt-0.5">Inquiry Form</div>
                </div>
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="contact_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="contact-alt-field"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-xs font-medium text-foreground-700 mb-2">
                    お名前 / Name <span className="text-accent-600">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={100}
                    className="w-full h-11 px-4 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="山田 太郎 / Taro Yamada"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium text-foreground-700 mb-2">
                    会社名 / Company
                  </span>
                  <input
                    type="text"
                    name="company"
                    maxLength={100}
                    className="w-full h-11 px-4 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="株式会社サンプル"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium text-foreground-700 mb-2">
                    メール / Email <span className="text-accent-600">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={120}
                    className="w-full h-11 px-4 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="block text-xs font-medium text-foreground-700 mb-2">
                    電話番号 / Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={30}
                    className="w-full h-11 px-4 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="03-1234-5678"
                  />
                </label>
              </div>

              <label className="block mt-5">
                <span className="block text-xs font-medium text-foreground-700 mb-2">
                  ご興味のあるサービス / Interested Service
                </span>
                <select
                  name="service"
                  className="w-full h-11 px-4 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 pr-8"
                  defaultValue=""
                >
                  <option value="" disabled>選択してください</option>
                  <option value="PRO ESTATE - 不動産管理">PRO ESTATE / 不動産管理</option>
                  <option value="PROSKU - 保育専門事務">PROSKU / 保育専門事務</option>
                  <option value="Marketing Quest - マーケティング支援">Marketing Quest / マーケティング支援</option>
                  <option value="EngHouse - 英語塾">EngHouse / 英語塾</option>
                  <option value="ProDesign - SNS/Webデザイン">ProDesign / SNS・Webデザイン</option>
                  <option value="ProOnline - オンライン事務代行">ProOnline / オンライン事務代行</option>
                  <option value="Not sure - どれか相談したい">まだ決まっていない / Not sure</option>
                </select>
              </label>

              <label className="block mt-5">
                <span className="block text-xs font-medium text-foreground-700 mb-2">
                  ご相談内容 / Message <span className="text-accent-600">*</span>
                </span>
                <textarea
                  name="message"
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-background-300 bg-background-50 text-sm text-foreground-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
                  placeholder="現状の課題やご要望を、思いつく範囲でお書きください。(500文字以内)"
                />
              </label>

              <label className="flex items-start gap-3 mt-5 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  required
                  value="agreed"
                  className="mt-1 w-4 h-4 accent-primary-600 cursor-pointer"
                />
                <span className="text-xs text-foreground-700 leading-relaxed">
                  <Link to="/terms" className="text-primary-700 underline cursor-pointer">利用規約</Link>および
                  <Link to="/privacy" className="text-primary-700 underline cursor-pointer">プライバシーポリシー</Link>
                  に同意します。<br />
                  <span className="text-foreground-500">
                    I agree to the Terms of Service and Privacy Policy.
                  </span>
                </span>
              </label>

              {status === "success" && (
                <div className="mt-5 p-4 rounded-md bg-primary-100 border border-primary-300 flex items-start gap-3">
                  <i className="ri-check-double-line text-xl text-primary-700 mt-0.5" />
                  <div className="text-sm text-primary-900">
                    <div className="font-semibold">お問い合わせを受け付けました。</div>
                    <div className="text-primary-800/80 text-xs mt-1">
                      Your inquiry has been received. We will reply within one business day.
                    </div>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 p-4 rounded-md bg-accent-50 border border-accent-300 flex items-start gap-3">
                  <i className="ri-error-warning-line text-xl text-accent-700 mt-0.5" />
                  <div className="text-sm text-accent-900">
                    <div className="font-semibold">送信できませんでした</div>
                    <div className="text-accent-800/80 text-xs mt-1">{formError}</div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={`mt-8 w-full h-12 rounded-md font-semibold text-sm transition cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 ${
                  submitting
                    ? "bg-primary-300 text-background-50 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-accent-500 text-background-50"
                }`}
              >
                {submitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin" />
                    送信中...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-2-line" />
                    送信する / Send inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}