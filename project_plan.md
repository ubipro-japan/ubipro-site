# UbiPro - Tokyo Consulting Group

## 1. Project Description
UbiPro（Tokyo Consulting Group）は、2026年にホールディングス化した多角経営コンサルティンググループのコーポレートサイト。すでに面識のある見込み客に対し、「グループとしてどんなサービスを展開しているか」を明確に伝えることを目的とする。緑をメインに紺・オレンジを組み合わせた清潔感 × 信頼感のあるコンサルティングファーム調デザイン。日本語・英語併記。

## 2. Page Structure
- `/` - コーポレートサイト（ワンページ構成）
  - Header (navigation + CTA)
  - Welcome / Rebranding Modal（ProOnline → UbiPro）
  - Mission (Hero)
  - Group / Services（ホールディングス階層図＋6事業カード）
  - About Representative（アバターイラスト）
  - Process（5ステップ）
  - Booking（Calendly埋め込み）
  - Contact（住所・営業時間・Google Map・お問い合わせフォーム）
  - Footer（News / Support Cases / 特定商取引法 / 利用規約 リンク）
- `/services/:slug` - 事業別サービス詳細ページ（同一レイアウト・コンテンツ差し替え）
  - `/services/pro-estate` 不動産管理（PRO ESTATE）
  - `/services/prosku` 保育専門事務（PROSKU）
  - `/services/marketing-quest` マーケティング支援（Marketing Quest）
  - `/services/enghouse` 英語塾 & 英語託児（EngHouse）
  - `/services/prodesign` SNS運用 / Webデザイン（ProDesign）
  - `/services/pro-online` オンライン事務代行（ProOnline）
  - 構成：ヒーロー（事業名・実績数値）/ 課題 / 選ばれる理由 / サービス内容 / 料金プラン / ご相談の流れ / FAQ / 関連事業＋CTA
- `/tokutei` `/privacy` `/terms` - リーガルページ

## 3. Core Features
- [x] 日英併記の全セクション
- [x] リブランド告知モーダル（初回表示、閉じるボタンで消える）
- [x] グループ構造ビジュアライズ
- [x] Calendly風の予約埋め込みセクション
- [x] Contactフォーム（Readdyフォーム経由でデータ収集）
- [x] Google Map埋め込み
- [x] SEO最適化（メタ情報、構造化データ、地理タグ）
- [x] 事業別サービス詳細ページ 6本（`/services/:slug`、共通レイアウト＋事業データ差し替え）
- [x] 事業ページのSEO設定（title / description / keywords / パンくず / Service構造化データ）
- [x] トップの事業カード・フッターから各事業ページへの内部リンク

## 3-1. 内容の前提（要確認）
- 料金プラン・実績数値は暫定値。正式な料金・実績が決まったら `src/mocks/serviceDetails/*` を更新する。
- 不動産・マーケティング・オンライン事務は既存資料あり。残り3事業（PROSKU / EngHouse / ProDesign）はサイト内情報をもとに作成しており、実データでの差し替えが必要。

## 4. Data Model Design
なし（本フェーズは静的コーポレートサイト。フォーム送信はReaddyのFormエンドポイントを利用）

## 5. Backend / Third-party Integration Plan
- Supabase: 不要（フェーズ1）
- Shopify: 不要
- Stripe: 不要
- Calendly: 相談予約セクションで埋め込み利用可能（後日ユーザーが接続）
- Readdy Form: お問い合わせフォームの送信先として利用

## 6. Development Phase Plan

### Phase 1（今回）: コーポレートサイト全体を1ページで実装
- Goal: 上記全セクションを含む日英併記のワンページコーポレートサイトを完成させる
- Deliverable: `/` に完成したコーポレートページ、リブランドモーダル、フォーム連携、SEO設定

### Phase 2（今後）: サブページの追加
- News（お知らせ一覧）
- Support Cases（導入事例）
- 特定商取引法に基づく表記
- 利用規約 / プライバシーポリシー

### Phase 3（今後）: Calendly の実接続 / 微調整・アニメーション追加