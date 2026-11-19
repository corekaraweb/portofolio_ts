# Engineer in Training

![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> React + TypeScript で構築した、福祉 × IT エンジニアの個人ポートフォリオサイト

## 概要

村上英輝（Hideki Murakami）のメインポートフォリオ。`package.json` のプロジェクト名は `hideki-murakami-pro`。画面は `src/App.tsx` の単一コンポーネントで、ルーティングライブラリは使っていない。

バックエンドとデータベースはこのリポジトリにはない。Vite で静的ファイルをビルドし、さくらの VPS（Rocky Linux 8 / Nginx）で配信する。アクセス解析の Lunalys（`cgi-bin`）はサーバー側にあり、このリポジトリには含まれない。

ページ内の注記どおり、2027年3月時点の完成形を想定した内容（2026年11月現在制作中）。

- 公開サイト: [https://hideki-murakami.pro/](https://hideki-murakami.pro/)
- リポジトリ: [https://github.com/corekaraweb/portofolio_ts](https://github.com/corekaraweb/portofolio_ts)

## 画面

`App.tsx` の並び。

| セクション | class | 内容 |
| --- | --- | --- |
| ファーストビュー | `.top` | キャッチコピー、Web制作 / 障害福祉 / ITシステム科、実務年数・福祉現場・資格数 |
| プロフィール | `.profile` | 経歴と、仕事で心がけていること |
| キャリア | `.career` | 2026年までの WordPress 実務と、2026〜2027年の職業訓練 |
| ポートフォリオ | `.portfolio` | 作品カード、`DetailAccordion`、会社員時代の実績 |
| 提供できる価値 | `.value` | 実務経験、生成AI、多分野の知識、福祉 × IT |
| 資格 | `.credentials` | IT・Web・ビジネス・福祉の資格一覧 |
| 学習戦略 | `.skills` | 技術の探索と技術の深化 |
| 達成の軌跡 | `.achivement` | 2026年3月〜2027年3月 |
| 生成AI | `.ai` | Cursor / ChatGPT / Claude / Gemini と『おじさんAI』 |
| 結び | `.thanks` | Zenn / Qiita / メール / GitHub |

作品カードの「もっと詳しく」は `DetailAccordion`。開閉時に詳細ブロックの高さを `scrollHeight` で切り替える。

## 掲載中の作品

| 作品 | 公開 | リポジトリ |
| --- | --- | --- |
| React + TypeScript『Engineer in Training』（本サイト） | [hideki-murakami.pro](https://hideki-murakami.pro/) | [portofolio_ts](https://github.com/corekaraweb/portofolio_ts) |
| WordPress オリジナルテーマ『写真まみれ』 | [photo-mamire.jp](https://photo-mamire.jp/) | [photomamire_wp](https://github.com/corekaraweb/photomamire_wp) |
| 【番外編】AIエージェント開発『Oreflix』 | [oreflix.hideki-murakami.pro](https://oreflix.hideki-murakami.pro/) | [oreflix_claude](https://github.com/corekaraweb/oreflix_claude) |

## 技術スタック

バージョンは `package.json` の指定。

| 分類 | 内容 |
| --- | --- |
| 言語 | TypeScript ~6.0.0、HTML、CSS |
| UI | React 19.3.1、React DOM 19.3.1 |
| ビルド | Vite ^8.3.8（`@vitejs/plugin-react`）。`base: './'`、開発サーバーは `host: true` / `port: 5173` / `strictPort: true` |
| リンター | ESLint ^10（typescript-eslint、react-hooks、react-refresh）。対象は `**/*.{ts,tsx}`、`dist` は無視 |
| スタイル | `src/App.tsx` が `src/App.css` と `src/reset.css`（destyle.css v4.0.1）を読み込む。編集元は `src/App.scss`（`App.css.map` あり）。Sass の依存とコンパイル用 npm スクリプトはない |
| フォント | `public/font/` の Noto Sans JP、Space Grotesk（可変フォント） |
| 同梱ライブラリ | Animate.css 3.6.2（`public/css/animate.min.css`）、WOW.js 1.1.2（`public/js/wow.min.js`）、MailtoUI 1.0.2（`public/js/mailtoui-min.js`） |
| 静的 JS | `public/js/script.js`（初回ローダー、幅 1024px 以上での `WOW` 初期化、`#toTop` の表示とページ先頭へのスクロール） |
| 計測 | Google Tag Manager（`GTM-KX3X26KW`）、Lunalys（`./cgi-bin/lunalys3/analyzer/tracker.js`。リポジトリ外） |
| データベース | このサイトでは未使用 |

`index.html` の mailto リンク（`class="mailtoui"`）は、マウント後に `mailtouiApp.listenForClickOnLink()` で有効にする。

ブレークポイントは `max-width: 1024px`。本文は Noto Sans JP、見出しとバッジは Space Grotesk。

## セットアップ

Node.js は Vite 8 の engines（`^20.19.0 || >=22.12.0`）に合わせる。このリポジトリに `engines` の指定はない。

```bash
git clone https://github.com/corekaraweb/portofolio_ts.git
cd portofolio_ts
npm install
```

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー（`vite --open`）。`http://localhost:5173/` |
| `npm run build` | `tsc -b` のあと本番ビルド。出力は `dist/` |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run lint` | ESLint |

`tsconfig.json` は `tsconfig.app.json`（`src`）と `tsconfig.node.json`（`vite.config.ts`）への参照だけを持つ。

## ディレクトリ構成

```text
.
├── public/                          # ビルド時に dist 直下へコピー
│   ├── css/
│   │   └── animate.min.css          # Animate.css 3.6.2
│   ├── font/
│   │   ├── NotoSansJP-VariableFont_wght.ttf
│   │   └── SpaceGrotesk-VariableFont_wght.ttf
│   ├── img/
│   │   ├── ogp.png                  # index.html の OGP / Twitter Card
│   │   ├── favicon.svg              # 参照なし（Vite 同梱のロゴ）
│   │   └── icons.svg                # 参照なし
│   ├── js/
│   │   ├── mailtoui-min.js
│   │   ├── script.js
│   │   └── wow.min.js
│   └── icons.svg                    # 参照なし（Vite 同梱のスプライト）
├── src/
│   ├── assets/                      # プロフィール、作品モック、アイコン
│   │   ├── profile.jpg
│   │   ├── mockup_portfolio.png
│   │   ├── mockup_photomamire.png
│   │   ├── mockup_aiagent.png
│   │   ├── ojisanai_eyecatch.jpg
│   │   ├── ico_webpage.png
│   │   ├── ico_github.png
│   │   ├── ico_link.png
│   │   ├── ico_cursor.png
│   │   ├── ico_chatgpt.png
│   │   ├── ico_claude.png
│   │   └── ico_gemini.png
│   ├── App.tsx                      # ページ全体と DetailAccordion
│   ├── App.scss                     # スタイルの編集元
│   ├── App.css                      # 画面が読み込む CSS
│   ├── App.css.map
│   ├── main.tsx                     # React のエントリ
│   └── reset.css
├── index.html
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── package.json
├── package-lock.json
└── README.md
```

`src/assets` のうち、プロフィール・モックアップ・おじさんAIのアイキャッチ・会社員実績のアイコンは `App.tsx` が import する。GitHub / 外部リンク / 各 AI のアイコンは `App.scss` の `background-image` で参照する。

## 実装メモ

- `@font-face` の URL は `src/App.scss` から見た `../font/`（プロジェクト直下の `font/`）。フォントファイルの実体は `public/font/` にある。
- `App.scss` に `#particles-js` のスタイルが残っている。対応するスクリプトは `public/` にも `index.html` にもない。
- `index.html` は favicon をリンクしていない。OGP 画像は `https://hideki-murakami.pro/img/ogp.png`（`public/img/ogp.png`）。
- SCSS を直したあとは、画面に反映する CSS（`src/App.css`）へ別途書き出す。

## ライセンス

リポジトリに LICENSE ファイルはない。`src/reset.css` は destyle.css v4.0.1（MIT）。Animate.css、WOW.js、MailtoUI、フォントは各配布元のライセンスに従う。
