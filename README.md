# Engineer in Training



![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)

> React + TypeScript で構築した、福祉 × IT エンジニアの個人ポートフォリオサイト

## 📖 概要

村上英輝（Hideki Murakami）のメインポートフォリオ。職業訓練で習得した React / TypeScript を使い、経歴・作品・資格・学習方針を1ページにまとめた静的サイト。

`package.json` のプロジェクト名は `hideki-murakami-pro`。バックエンド・データベースは未使用。ビルド成果物をさくらのVPS（Nginx）で配信する構成。

サイト上の注記どおり、2027年3月時点の完成形を想定したコンテンツ（2026年10月現在制作中）。

## ✨ 主な機能

- ファーストビュー：キャッチコピー、経歴ハイライト（実務年数・福祉現場・資格数）
- キャリアタイムライン：Web制作実務から職業訓練までの経緯
- ポートフォリオ一覧：作品カード、GitHub / サイトリンク、アコーディオン詳細（`DetailAccordion`）
- 提供価値・資格一覧・学習戦略（探索 / 深化）の紹介
- 達成タイムライン：2026年4月〜2027年3月の学習・資格・制作の軌跡
- 生成AIの活用方針（Cursor / ChatGPT / Claude / Gemini）と運営メディアへの導線
- お問い合わせ：MailtoUI によるメールクライアント選択 UI
- スクロールアニメーション：WOW.js + Animate.css
- 初回表示時のローディング画面（`public/script.js`）
- レスポンシブレイアウト（`App.css` のメディアクエリ）

公開中の作品カード：


| 作品                         | 概要                                |
| -------------------------- | --------------------------------- |
| Engineer in Training（本サイト） | React + TypeScript のメインポートフォリオ    |
| 写真まみれ                      | WordPress オリジナルテーマの写真ブログ          |
| Oreflix                    | YouTube 再生リストを並べて閲覧する AI エージェント開発 |


`HubCare`（Laravel + React）と `ShareCare`（Java + Spring Boot）のセクションは `App.tsx` 内でコメントアウト。

## 🛠 技術スタック


| 分類      | 技術                                                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 言語      | TypeScript 5.9（`typescript` ~6.0.2）、HTML、CSS                                                                                  |
| フレームワーク | React 19.2、React DOM 19.2                                                                                                     |
| ビルド     | Vite 8.2（`@vitejs/plugin-react`、`base: './'`）                                                                                 |
| リンター    | ESLint 10（typescript-eslint、react-hooks、react-refresh）                                                                        |
| スタイル    | `src/App.css` を読み込み。ソースとして `src/App.scss` / `src/App.css.map` あり（npm スクリプトでの Sass コンパイルは未定義）                                  |
| データベース  | 該当なし                                                                                                                          |
| CDN     | Animate.css 3.6.2、MailtoUI 1.0.2、WOW.js 1.1.3                                                                                 |
| 静的 JS   | `public/setting.js`（particles.js 初期化）、`public/script.js`（ローダー・キャンバス同期）。`public/particles.min.js` の読み込みは `index.html` でコメントアウト |
| 解析      | Lunalys（`hideki-murakami.pro` の tracker.js）                                                                                   |


依存関係は `package.json` / `package-lock.json` に準拠。DB クライアントやバックエンド用パッケージはなし。

## 🚀 セットアップ

前提：Node.js は Vite 8 の engines（`^20.19.0 || >=22.12.0`）に合わせる。プロジェクト側の `engines` 指定はなし。

```bash
git clone https://github.com/corekaraweb/portofolio_ts.git
cd portofolio_ts
npm install
```


| コマンド              | 内容                                  |
| ----------------- | ----------------------------------- |
| `npm run dev`     | 開発サーバー起動（Vite、`--open`）             |
| `npm run build`   | `tsc -b` の型チェック後、本番ビルド（出力先 `dist/`） |
| `npm run preview` | ビルド結果のプレビュー                         |
| `npm run lint`    | ESLint 実行                           |


開発サーバーの URL は Vite 既定（通常 `http://localhost:5173/`）。

## 📁 ディレクトリ構成

```text
.
├── public/                 # ビルド時に dist 直下へコピー
│   ├── icons.svg
│   ├── particles.min.js    # particles.js（index.html では未読込）
│   ├── script.js           # ローダー・キャンバスサイズ同期
│   └── setting.js          # particlesJS の設定呼び出し
├── src/
│   ├── assets/             # モックアップ・アイコン画像
│   ├── App.tsx             # ページ全体とアコーディオン
│   ├── App.css             # 本番で読み込むスタイル
│   ├── App.scss            # スタイルの Sass ソース
│   ├── main.tsx            # React のエントリ
│   └── reset.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── package.json
└── README.md
```

ルーティングライブラリは未使用。画面は `App.tsx` の単一コンポーネント。

## 🔗 デモ

- 公開サイト：[https://hideki-murakami.pro/](https://hideki-murakami.pro/)
- リポジトリ：[https://github.com/corekaraweb/portofolio_ts](https://github.com/corekaraweb/portofolio_ts)



## 📝 今後の予定

- `docs/screenshot.png` の追加（テンプレート用パス。現状ファイルなし）
- `App.tsx` でコメントアウト中の HubCare / ShareCare セクションの公開
- `index.html` でコメントアウト中の `particles.min.js` 読み込み方針の確定
- TODO: その他の機能追加・公開スケジュール



## 📄 ライセンス

該当なし