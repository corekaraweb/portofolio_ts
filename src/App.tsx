import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import './App.css';
import mockupPhotomamire from './assets/mockup_photomamire.png';
import mockupPortfolio from './assets/mockup_portfolio.png';
import './reset.css';

type MailtoUiApp = {
  listenForClickOnLink?: () => void;
};

function DetailAccordion({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  const setBlockHeight = (open: boolean) => {
    const detailBlock = blockRef.current;
    if (!detailBlock) {
      return;
    }
    detailBlock.style.height = open ? `${detailBlock.scrollHeight}px` : '0';
  };

  const toggleOpen = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    setBlockHeight(nextOpen);
  };

  const handleClose = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setBlockHeight(false);
  };

  return (
    <div className="detail">
      <p className="btn" onClick={toggleOpen}>
        もっと詳しく<span className="arrow">↓</span>
      </p>
      <div ref={blockRef} className={`detail-block${isOpen ? ' is-open' : ''}`}>
        {children}
        <a className="close" href="#" onClick={handleClose}>
          閉じる
        </a>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const mailtouiApp = (window as Window & { mailtouiApp?: MailtoUiApp }).mailtouiApp;
    mailtouiApp?.listenForClickOnLink?.();
  }, []);

  return (
    <>
      <main>
        <div className="top main-inner">
          <div className="top-inner">
            <div className="fv">
              <p className="sub">Hideki Murakami - PORTFOLIO 2027</p>
              <h1>
                <span className="wow animated fadeInLeft" data-wow-delay="0.3s">
                  Engineer
                </span>
                <br />
                <span className="wow animated fadeInLeft" data-wow-delay="0.7s">
                  in Training.
                </span>
              </h1>
              <div className="badgelist">
                <div className="badge">Web制作実務</div>
                <span>＋</span>
                <div className="badge">障害福祉</div>
                <span>＋</span>
                <div className="badge">ITシステム科 職業訓練</div>
              </div>
              <div className="txt">
                <p>福祉の現場を知るエンジニアとして、 テクノロジーで社会課題を解決することを目指しています。 Java + AWS + Laravel + React + TypeScript を習得。</p>
              </div>
            </div>
            <div className="appeal">
              <div className="sc box wow animated fadeInUp" data-wow-delay="1.2s">
                <div className="snum">
                  <span className="aca">13年</span>
                </div>
                <div className="slbl">WordPress実務経験（オリジナルテーマ開発・SEO・コンテンツ作成）</div>
              </div>
              <div className="sc box wow animated fadeInUp" data-wow-delay="1.7s">
                <div className="snum">
                  <span className="acb">30+</span>
                </div>
                <div className="slbl">保有資格・認定数（IT・ビジネス・法律・金融 など）</div>
              </div>
              <div className="sc box wow animated fadeInUp" data-wow-delay="2.3s">
                <div className="snum">
                  <span className="acc">7年+</span>
                </div>
                <div className="slbl">障害福祉の現場（3事業所）でWeb制作・職業指導員に従事</div>
              </div>
            </div>
          </div>
        </div>

        <div className="career main-inner">
          <div className="career-inner">
            <p className="sub">CAREER JOURNEY</p>
            <h1 className="wow animated fadeInLeft">Webの現場から、サービス開発の世界へ</h1>
            <div className="txt">
              <p>13年間の実務で培ったWebスキルを土台に、職業訓練でクラウドやサーバーサイド技術を体系的に学習しました。「知っている」から「作れる」へ、一歩ずつ進んでいます。</p>
            </div>
            <div className="timeline">
              <div className="timeline-inner">
                <div className="before2026 timeline-block">
                  <div className="year">～2026年</div>
                  <div className="contents">
                    <h2>WordPress × SEO × 障害福祉</h2>
                    <p>オリジナルテーマ開発・SEO施策・コンテンツ作成を13年間経験。ユーザー視点のWeb構築とプロジェクトマネジメントを現場で習得しました。うち約6年は障害福祉の事業所に所属し、WordPressテーマ開発やWebライティングを担当しました。その後、就労支援施設にてWeb制作の職業指導員となり、利用者・スタッフの双方と日々接する中で、福祉の現場に本当に必要なものが何かを考え続けてきました。</p>
                    <div className="badgelist">
                      <div className="badge">WordPress</div>
                      <div className="badge">PHP</div>
                      <div className="badge">JavaScript</div>
                      <div className="badge">SEO</div>
                      <div className="badge">Web Marketing</div>
                    </div>
                  </div>
                </div>
                <div className="after2026 timeline-block">
                  <div className="year">2026年～2027年</div>
                  <div className="contents">
                    <h2>ITシステム科 職業訓練</h2>
                    <p>Java・AWS・Laravel・React・TypeScript を体系的に学習。Java Gold SE17・AWS 3冠を取得し、バックエンドとクラウドの基礎を確立しました。学んだ技術は座学で終わらせず、福祉の現場で感じた課題を題材にした社内向けWebアプリや備品管理システムなど、4つの作品として実装まで形にしました。</p>
                    <div className="badgelist">
                      <div className="badge">Java Gold SE17</div>
                      <div className="badge">AWS AIF</div>
                      <div className="badge">AWS CLF</div>
                      <div className="badge">AWS SAA</div>
                      <div className="badge">Laravel</div>
                      <div className="badge">React</div>
                      <div className="badge">TypeScript</div>
                    </div>
                    <div className="whynow">
                      <div className="whynow-inner">
                        <h3>WHY NOW</h3>
                        <p>WordPressでの制作を重ねる中で「作れる範囲」に限界を感じるようになりました。サービス全体を設計・実装できるエンジニアを目指すなら、経験と学ぶ意欲が揃った今が最良の機会だと思い、13年のWeb制作経験を土台に職業訓練で新たな一歩を踏み出しています。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio main-inner">
          <div className="portfolio-inner">
            <p className="sub">PORTFOLIO WORKS</p>
            <h1 className="wow animated fadeInLeft">ポートフォリオ作品</h1>
            <div className="txt">
              <p>実務経験と学び直しの成果を、4つの作品という形にしました。全てのプロダクトはGitHubにてソースコードを公開しています。</p>
            </div>
            <div className="itemlist">
              <div className="itemlist-inner">
                <div className="item wow animated fadeInUp">
                  <div className="contents">
                    <div className="img">
                      <img src={mockupPortfolio} alt="" />
                    </div>
                    <div className="txt">
                      <h2>React＋TypeScript『Engineer in Training』</h2>
                      <p>モダンフロントエンド技術である React と TypeScript で構築したメインポートフォリオです。現在ご覧いただいているWebサイトです。当ポートフォリオ公開のために、新規でVPSを契約し自ら環境構築して動作させています。</p>
                      <div className="tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Sass</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>GitHub</span>
                        <span>GitHub Actions</span>
                        <span>さくらのVPS</span>
                      </div>
                      <div className="btn-area">
                        <div className="github btn">
                          <a href="https://github.com/corekaraweb/portofolio_ts" target="_blank">
                            GitHubを見る
                          </a>
                        </div>
                        <div className="viewsite btn">
                          <a href="https://hideki-murakami.pro/" target="_blank">
                            サイトを見る
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DetailAccordion>
                    <div className="detail-block-inner">
                      <div className="left">
                        <table>
                          <tbody>
                            <tr>
                              <th>フロントエンド</th>
                              <td>React・TypeScript・HTML5・CSS3・Sass</td>
                            </tr>
                            <tr>
                              <th>バックエンド</th>
                              <td>未使用</td>
                            </tr>
                            <tr>
                              <th>データベース</th>
                              <td>未使用</td>
                            </tr>
                            <tr>
                              <th>インフラ</th>
                              <td>
                                さくらのVPS
                                <br />
                                （Rocky Linux 8 / Nginx / メモリ 1GB / SSD 100GB）
                              </td>
                            </tr>
                            <tr>
                              <th>開発ツール</th>
                              <td>Cursor Pro・Git・GitHub・Node.js</td>
                            </tr>
                            <tr>
                              <th>生成AI活用</th>
                              <td>Gemini 3.5 Flash・Claude Fable5・ChatGPT 5.6-Sol</td>
                            </tr>
                            <tr>
                              <th>制作期間</th>
                              <td>7週間</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="right">
                        <h3>工夫したところ</h3>
                        <p>
                          静的HTMLで構造を固めてから段階的にReact化する進め方を取りました。技術書で学習しながら、このWebページのReact化も同時並行で実施。草案はClaudeと壁打ちして作り、最終文言は自分で決めました。インフラはさくらのVPS（Rocky Linux）にNginxを導入し、このReactサイトの静的配信と、サブドメインで動くSpring Boot（ShareCare）へのリバースプロキシを1台で担わせています。Let's
                          EncryptによるSSL化、GitHub Actionsからの自動デプロイまで自分で構築しました。雰囲気だけを作るのではなく、しっかりとしたコンテンツとなることを意識しました。
                        </p>
                      </div>
                    </div>
                  </DetailAccordion>
                </div>
                <div className="item wow animated fadeInUp">
                  <div className="contents">
                    <div className="img">
                      <img src={mockupPhotomamire} alt="" />
                    </div>
                    <div className="txt">
                      <h2>WordPressオリジナルブログ『写真まみれ』</h2>
                      <p>WordPressのオリジナルテーマで開発した写真ブログです。テンプレート階層を自分で組み立てられるクラシックテーマをあえて選び、斜めに傾けたサムネイルの疑似スクロールや、タグ指定による検索など、UI演出とクエリ制御の両面で工夫しました。</p>
                      <div className="tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Sass</span>
                        <span>JavaScript</span>
                        <span>WordPress</span>
                        <span>PHP</span>
                        <span>Database</span>
                        <span>GitHub</span>
                        <span>GitHub Actions</span>
                        <span>エックスサーバー</span>
                      </div>
                      <div className="btn-area">
                        <div className="github btn">
                          <a href="https://github.com/corekaraweb/photomamire_wp" target="_blank">
                            GitHubを見る
                          </a>
                        </div>
                        <div className="viewsite btn">
                          <a href="https://photo-mamire.jp/" target="_blank">
                            サイトを見る
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DetailAccordion>
                    <div className="detail-block-inner">
                      <div className="left">
                        <table>
                          <tbody>
                            <tr>
                              <th>フロントエンド</th>
                              <td>HTML5・CSS3・Sass・JavaScript</td>
                            </tr>
                            <tr>
                              <th>バックエンド</th>
                              <td>PHP8.3.30</td>
                            </tr>
                            <tr>
                              <th>データベース</th>
                              <td>MariaDB 10.5.x</td>
                            </tr>
                            <tr>
                              <th>インフラ</th>
                              <td>エックスサーバー（スタンダード）</td>
                            </tr>
                            <tr>
                              <th>開発ツール</th>
                              <td>Cursor Pro・Git・GitHub</td>
                            </tr>
                            <tr>
                              <th>生成AI活用</th>
                              <td>Gemini 3.5 Flash・Claude Fable5・ChatGPT 5.6-Sol</td>
                            </tr>
                            <tr>
                              <th>制作期間</th>
                              <td>4週間</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="right">
                        <h3>工夫したところ</h3>
                        <p>
                          WordPressのオリジナルテーマで構築した写真ブログです。トップページおよびアーカイブページにおいて、サムネイルのリストを斜めに傾けており、その状態で疑似的なスクロールを実装しています。このあたりのJavaScriptによる実装が、当作品の山場です。Cursorによるアシストにも助けられました。
                          ハンバーガーアイコンとしてハンバーガーのアニメーション画像を使うといった遊び心も出してみました。search.phpのメインクエリを改変し、直感的な検索も可能になっています。プロフィールや使用機材、お問い合わせフォーム（Contact Form 7）ページもしっかりと作り、完成したメディアとして構築することを目指しました。
                        </p>
                      </div>
                    </div>
                  </DetailAccordion>
                </div>
                <div className="item wow animated fadeInUp">
                  <div className="contents">
                    <div className="img">
                      <img src="https://placehold.jp/1898x1279.png" alt="" />
                    </div>
                    <div className="txt">
                      <h2>Laravel＋React『HubCare』</h2>
                      <p>福祉施設の支援の現場で、ヒヤリハットや利用者様の様子の変化をスタッフと共有し記録を蓄積できる、社内Webアプリケーションシステムです。</p>
                      <div className="tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>PHP</span>
                        <span>Laravel</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Database</span>
                        <span>Node.js</span>
                        <span>GitHub</span>
                        <span>GitHub Actions</span>
                        <span>AWS</span>
                      </div>
                      <div className="btn-area">
                        <div className="github btn">
                          <a href="#">GitHubを見る</a>
                        </div>
                        <div className="viewsite btn">
                          <a href="http://ec2-15-168-196-144.ap-northeast-3.compute.amazonaws.com/" target="_blank">
                            サイトを見る
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DetailAccordion>
                    <div className="detail-block-inner">
                      <div className="left">
                        <table>
                          <tbody>
                            <tr>
                              <th>フロントエンド</th>
                              <td>React・TypeScript・HTML5・CSS3・Sass</td>
                            </tr>
                            <tr>
                              <th>バックエンド</th>
                              <td>PHP8.5.9（Laravel）</td>
                            </tr>
                            <tr>
                              <th>データベース</th>
                              <td>MariaDB（AWS RDS）</td>
                            </tr>
                            <tr>
                              <th>インフラ</th>
                              <td>AWS（Amazon Linux 2023 / Apache）</td>
                            </tr>
                            <tr>
                              <th>開発ツール</th>
                              <td>Cursor Pro・Git・GitHub</td>
                            </tr>
                            <tr>
                              <th>生成AI活用</th>
                              <td>Gemini 3.5 Flash・Claude Fable5・ChatGPT 5.6-Sol</td>
                            </tr>
                            <tr>
                              <th>制作期間</th>
                              <td>X週間</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="right">
                        <h3>工夫したところ</h3>
                        <p>現在開発中！</p>
                      </div>
                    </div>
                    <div className="assets"></div>
                  </DetailAccordion>
                </div>
                <div className="item wow animated fadeInUp">
                  <div className="contents">
                    <div className="img">
                      <img src="https://placehold.jp/1898x1279.png" alt="" />
                    </div>
                    <div className="txt">
                      <h2>Java＋Spring Boot『ShareCare』</h2>
                      <p>福祉施設や事務所にある備品（車椅子・タブレット・公用車など）を「誰が・いつから・いつまで」借りているかを記録・管理する簡易システムです。</p>
                      <div className="tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Java</span>
                        <span>Spring Boot</span>
                        <span>Database</span>
                        <span>Maven</span>
                        <span>GitHub</span>
                        <span>さくらのVPS</span>
                      </div>
                      <div className="btn-area">
                        <div className="github btn">
                          <a href="#">GitHubを見る</a>
                        </div>
                        <div className="viewsite btn">
                          <a href="https://sharecare.hideki-murakami.pro/" target="_blank">
                            サイトを見る
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DetailAccordion>
                    <div className="detail-block-inner">
                      <div className="left">
                        <table>
                          <tbody>
                            <tr>
                              <th>フロントエンド</th>
                              <td>HTML5・CSS3・Sass・JavaScript・Sass</td>
                            </tr>
                            <tr>
                              <th>バックエンド</th>
                              <td>Java（Spring Boot）</td>
                            </tr>
                            <tr>
                              <th>データベース</th>
                              <td>MariaDB 10.5.x</td>
                            </tr>
                            <tr>
                              <th>インフラ</th>
                              <td>
                                さくらのVPS
                                <br />
                                （Rocky Linux 8 / Nginx / メモリ 1GB / SSD 100GB）
                              </td>
                            </tr>
                            <tr>
                              <th>開発ツール</th>
                              <td>Cursor Pro・Git・GitHub</td>
                            </tr>
                            <tr>
                              <th>生成AI活用</th>
                              <td>Gemini 3.5 Flash・Claude Fable5・ChatGPT 5.6-Sol</td>
                            </tr>
                            <tr>
                              <th>制作期間</th>
                              <td>X週間</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="right">
                        <h3>工夫したところ</h3>
                        <p>現在開発中！</p>
                      </div>
                    </div>
                  </DetailAccordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="value main-inner">
          <div className="value-inner">
            <p className="sub">MY VALUE</p>
            <h1 className="wow animated fadeInLeft">私が提供できる価値</h1>
            <div className="txt">
              <p>Web制作者としての技術力と、福祉業界で培った対人支援の経験を兼ね備えたエンジニアです。</p>
            </div>
            <div className="value-list">
              <div className="value">
                <h3>13年の実務経験 × 体系的な再学習</h3>
                <p>WordPressを軸に13年間、現場で手を動かし続けてきました。この経験を大切にしながら、職業訓練でフルスタック技術を基礎から学び直しています。実務で培った勘所と体系的な知識の両方を持つことが、私の技術力の土台です。</p>
              </div>
              <div className="value">
                <h3>生成AIを実務に活用できる</h3>
                <p>ChatGPT・Gemini・Claude・Cursorの有料版を契約し、用途に応じて使い分けながら日常的に業務へ組み込んでいます。試行錯誤を重ねて身につけたAIとの協働スキルは、開発効率の向上という形で入社後すぐに貢献できると考えています。</p>
              </div>
              <div className="value">
                <h3>多分野の知識で設計の引き出しを増やす</h3>
                <p>金融・法律・会計・マーケティング・心理学など、幅広い分野を学んできました。エンジニアリング単独では見落としがちな視点を補えるため、ビジネス要件の背景を早く理解し、仕様検討の場でも初期からお力になれます。</p>
              </div>
              <div className="value">
                <h3>福祉 × IT という希少軸</h3>
                <p>福祉施設での実務経験を持つエンジニアは、まだ多くありません。高齢者・障がい者・介護現場のリアルなニーズを肌で知っているからこそ、当事者に本当に届くプロダクトづくりに貢献できる。この掛け合わせが私ならではの強みです。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills main-inner">
          <div className="skills-inner">
            <p className="sub">Learning Strategy</p>
            <h1 className="wow animated fadeInLeft">技術の探索 × 技術の深化</h1>
            <div className="txt">
              <p>「両利きの経営」を学習戦略に応用。既存の強みを深めながら、新領域への挑戦を同時並行で進めてきました。</p>
            </div>
            <div className="skill-box">
              <div className="skill-box-inner">
                <div className="left wow animated fadeInLeft" data-wow-delay="0.5s">
                  <h3>技術の探索</h3>
                  <p>新しい技術や未経験の分野にも恐れず飛び込んで学ぶ。その積み重ねでこれからの現場で活かせる力を広げてきました。</p>
                  <ul>
                    <li>
                      Java Gold SE17<span>（サーバーサイド言語）</span>
                    </li>
                    <li>
                      AWS AIF / CLF / SAA<span>（Amazon Web Services）</span>
                    </li>
                    <li>
                      React + TypeScript<span>（フロントエンドフレームワーク）</span>
                    </li>
                    <li>
                      Laravel<span>（バックエンドフレームワーク）</span>
                    </li>
                    <li>
                      Nginx / Apache / AWS EC2<span>（Webサーバー構築）</span>
                    </li>
                    <li>
                      生成AI活用・AIエージェント活用<span>（ChatGPT・Gemini・Claude・Cursor Pro）</span>
                    </li>
                    <li>
                      社会福祉士<span>（ソーシャルワーク）</span>
                    </li>
                  </ul>
                </div>
                <div className="right wow animated fadeInRight" data-wow-delay="0.5s">
                  <h3>技術の深化</h3>
                  <p>13年の実務で培った経験を今も磨き続けています。現場で得たスキルを、より確かな技術力へと育ててきました。</p>
                  <ul>
                    <li>
                      HTML・CSS<span>（Sass・グリッドレイアウト・レスポンシブ対応）</span>
                    </li>
                    <li>
                      WordPress オリジナルテーマ開発<span>（ブロックエディタ対応）</span>
                    </li>
                    <li>
                      SEOからLLMO・AIOへ拡張<span>（検索エンジンとAI回答への露出設計）</span>
                    </li>
                    <li>
                      コンテンツ・情報アーキテクチャ設計<span>（サイト構造・導線）</span>
                    </li>
                    <li>
                      モダンPHPコーディング<span>（保守しやすく安全なコード）</span>
                    </li>
                    <li>
                      jQueryからVanilla JSへ<span>（ES2015+・DOM操作）</span>
                    </li>
                    <li>
                      Webライティング<span>（構成設計・編集・校正）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="credentials main-inner">
          <div className="credentials-inner">
            <p className="sub">Skills & Credentials</p>
            <h1 className="wow animated fadeInLeft">幅広い資格と専門性</h1>
            <div className="txt">
              <p>IT・Webから金融・法律・福祉を含めた30以上の資格を保有。多種多様な専門性が顧客と自社の課題解決を支えます。</p>
            </div>
            <div className="credential-list">
              <div className="credential-item">
                <h2>IT国家資格</h2>
                <ul>
                  <li>情報セキュリティスペシャリスト</li>
                  <li>応用情報技術者</li>
                  <li>情報セキュリティマネジメント</li>
                  <li>基本情報技術者</li>
                  <li>ITパスポート</li>
                </ul>
              </div>
              <div className="credential-item">
                <h2>IT民間資格</h2>
                <ul>
                  <li>Java Gold SE17</li>
                  <li>AWS SAA / AIF / CLF</li>
                  <li>G検定</li>
                  <li>Salesforce認定Platformアドミニストレーター</li>
                  <li>Salesforce認定Platformアプリケーションビルダー</li>
                  <li>Salesforce認定Sales Cloudコンサルタント</li>
                  <li>Salesforce認定Agentforce スペシャリスト</li>
                </ul>
              </div>
              <div className="credential-item">
                <h2>Web・マーケティング</h2>
                <ul>
                  <li>認定SEOコンサルタント</li>
                  <li>SEO検定1級</li>
                  <li>ウェブ解析士</li>
                  <li>HTML5プロフェッショナル認定試験 レベル2</li>
                  <li>Webクリエイター能力認定試験</li>
                  <li>ウェブライティング実務士</li>
                </ul>
              </div>
              <div className="credential-item">
                <h2>ビジネス（金融・法律）</h2>
                <ul>
                  <li>日商簿記2級</li>
                  <li>ビジネス会計検定2級</li>
                  <li>2級ファイナンシャルプランニング技能士</li>
                  <li>AFP</li>
                  <li>ビジネス実務法務検定2級</li>
                  <li>年金アドバイザー3級</li>
                </ul>
              </div>
              <div className="credential-item">
                <h2>福祉・ヒューマン</h2>
                <ul>
                  <li>社会福祉士（受験予定）</li>
                  <li>認定心理士（取得予定）</li>
                  <li>社会福祉主事任用資格</li>
                  <li>健康経営アドバイザー</li>
                  <li>両立支援コーディネーター</li>
                  <li>メンタルヘルスマネジメント検定Ⅱ種</li>
                  <li>心理学検定2級</li>
                  <li>カラーコーディネーター3級</li>
                </ul>
              </div>
              <div className="credential-item appendix">
                <p>
                  ※放送大学 心理と教育コースで学ぶ大学生でもあります。
                  <br />
                  （2027年3月卒業見込み）
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-inner achivement">
          <div className="achivement-inner">
            <p className="sub">Achievement TIMELINE</p>
            <h1 className="wow animated fadeInLeft">2026 → 2027 達成の軌跡</h1>
            <div className="txt">
              <p>
                職業訓練をフル活用し、資格取得とポートフォリオ作成まで一気に駆け抜けました。GitHubで
                <a href="https://github.com/corekaraweb/study-log" target="_blank">
                  日々の学習記録
                </a>
                を書いています。
              </p>
            </div>
            <div className="seasons">
              <div className="season-list">
                <div className="season">2026 4月</div>
                <div className="items">
                  <div className="item activity">職業訓練開始</div>
                  <div className="item activity">Java学習開始</div>
                  <div className="item licence">G検定 合格</div>
                  <div className="item licence">Java Bronze 合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 5月</div>
                <div className="items">
                  <div className="item licence fail">Java Silver SE17 不合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 6月</div>
                <div className="items">
                  <div className="item activity">AWS学習開始</div>
                  <div className="item licence">Java Silver SE17 合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 7月</div>
                <div className="items">
                  <div className="item activity">LLMO・AIO学習開始</div>
                  <div className="item activity">ポートフォリオ（WordPress）作成開始</div>
                  <div className="item licence">AWS AIF 合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 8月</div>
                <div className="items">
                  <div className="item activity">React学習開始</div>
                  <div className="item activity">ポートフォリオ（WordPress）完成</div>
                  <div className="item licence">AWS CLF 合格</div>
                  <div className="item licence">Java Gold SE17 合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 9月</div>
                <div className="items">
                  <div className="item activity">Laravel学習開始</div>
                  <div className="item activity">社会福祉士試験学習開始</div>
                  <div className="item activity">ポートフォリオ（React+TypeScript）作成開始</div>
                  <div className="item licence">AWS SAA 合格</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 10月</div>
                <div className="items">
                  <div className="item activity">Spring Boot学習開始</div>
                  <div className="item activity">ポートフォリオ（React+TypeScript）完成</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 11月</div>
                <div className="items">
                  <div className="item activity">ポートフォリオ（Laravel＋React）作成開始</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2026 12月</div>
                <div className="items">
                  <div className="item activity">ポートフォリオ（Java＋Spring Boot）作成開始</div>
                  <div className="item activity">ポートフォリオ（Laravel＋React）完成</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2027 1月</div>
                <div className="items">
                  <div className="item activity">ポートフォリオ（Java＋Spring Boot）完成</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2027 2月</div>
                <div className="items">
                  <div className="item activity">社会福祉士国家試験</div>
                </div>
              </div>
              <div className="season-list">
                <div className="season">2027 3月</div>
                <div className="items">
                  <div className="item licence">社会福祉士 合格</div>
                  <div className="item licence">心理学検定1級 合格</div>
                  <div className="item activity">職業訓練修了</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ai main-inner">
          <div className="ai-inner">
            <p className="sub">AI APPROACH</p>
            <h1 className="wow animated fadeInLeft">生成AIとの向き合い方</h1>
            <div className="txt">
              <p>AIエージェントの最新情報をキャッチアップしながら、各種モデルを使い分けてAI活用を実践ています。</p>
            </div>
            <div className="ailist">
              <div className="ailist-inner">
                <div className="ai-item cursor">
                  <div className="head">
                    <h2>Cursor</h2>
                    <div className="tags">
                      <span>有料契約</span>
                    </div>
                  </div>
                  <div className="contents">
                    <p>Claude CodeやCodexの登場前から愛用しています。「AIの使えるVS Code」という感覚で導入しましたが、Cursorは本当に頼りになります。有料のPro版を使えば、各種モデルの最新版を切り替えながら活用可能。今年になってAIエージェントモードも使えるようになり、エージェントモードも実務で活用しています。</p>
                    <div className="tags">
                      <span className="tag">コード生成</span>
                      <span className="tag">コード分析</span>
                      <span className="tag">コード解説</span>
                      <span className="tag">コード改善</span>
                    </div>
                  </div>
                </div>
                <div className="ai-item chatgpt">
                  <div className="head">
                    <h2>ChatGPT</h2>
                    <div className="tags">
                      <span>有料契約</span>
                    </div>
                  </div>
                  <div className="contents">
                    <p>技術学習やエラー解決、文章構成の相談など、幅広い用途で活用しやすいAIです。特に、Java・React・Laravel・SQLなどの新分野の学習の方向性や目標の整理に役立ちました。回答をそのまま使うのではなく、自分で検証しながら理解を深めるための壁打ち相手として活用しています。</p>
                    <div className="tags">
                      <span className="tag">テキスト生成</span>
                      <span className="tag">画像生成</span>
                      <span className="tag">壁打ち</span>
                      <span className="tag">リサーチ</span>
                      <span className="tag">マルチモーダル</span>
                    </div>
                  </div>
                </div>
                <div className="ai-item claude">
                  <div className="head">
                    <h2>Claude</h2>
                    <div className="tags">
                      <span>有料契約</span>
                    </div>
                  </div>
                  <div className="contents">
                    <p>長文の読解や文章の整理、論理構成の確認に強みがあるAIとして活用しています。技術記事、README、ポートフォリオ文面など、読みやすさや説得力が求められる文章の改善に向いています。単なる文章生成ではなく、自分の考えを整理し、相手に伝わる表現へ磨き込むための編集パートナーとして位置づけています。</p>
                    <div className="tags">
                      <span className="tag">テキスト生成</span>
                      <span className="tag">コード生成</span>
                      <span className="tag">壁打ち</span>
                      <span className="tag">リサーチ</span>
                      <span className="tag">マルチモーダル</span>
                    </div>
                  </div>
                </div>
                <div className="ai-item gemini">
                  <div className="head">
                    <h2>Gemini</h2>
                    <div className="tags">
                      <span>有料契約</span>
                    </div>
                  </div>
                  <div className="contents">
                    <p>Googleサービスとの親和性や情報整理のしやすさが強みだと感じています。調べもの、文章の要約、比較検討、アイデア出しなどで使いやすく、学習内容を俯瞰して整理したい場面に向いています。今年からNotebook LMとの連携ができ更に便利なツールに進化。特に、技術選定や複数の選択肢を比較するときに、視点を広げるための補助ツールとして活用しています。</p>
                    <div className="tags">
                      <span className="tag">テキスト生成</span>
                      <span className="tag">画像生成</span>
                      <span className="tag">壁打ち</span>
                      <span className="tag">情報整理</span>
                      <span className="tag">リサーチ</span>
                      <span className="tag">マルチモーダル</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="appendix">
              <div className="appendix-inner">
                ※「<strong>キラキラしていないAI活用術</strong>」を解説するメディア『
                <a href="https://ojisan-ai.jp" target="_blank">
                  おじさんAI
                </a>
                』を個人で運営しています。メディア構築・リサーチ・構成案作成・記事執筆・SEO・LLMO・AIO・各種メンテナンスなど、すべて自分で行っています。
              </div>
            </div>
          </div>
        </div>
        <div className="thanks main-inner">
          <div className="thanks-inner">
            <div className="center">
              <h1>
                Thank you<span className="dot">.</span>
              </h1>
              <div className="txt">
                <p>
                  最後までご覧いただき、ありがとうございます。
                  <br />
                  「福祉 × IT」 という視点で、 テクノロジーの力を必要な人々に届ける
                  <br />
                  エンジニアを目指しています。 <br />
                  ぜひ、一緒に働く機会をいただけたら嬉しいです。
                  <br />
                  （2027年4月から就業可能です）
                </p>
              </div>
              <div className="contact">
                <div className="contact-inner">
                  <div className="item">
                    <a href="https://zenn.dev/corekaraweb" target="_blank">
                      Zenn
                    </a>
                  </div>
                  <div className="item">
                    <a href="https://qiita.com/corekaraweb" target="_blank">
                      Qiita
                    </a>
                  </div>
                  <div className="item">
                    <a href="https://note.com/corekaraweb" target="_blank">
                      note
                    </a>
                  </div>
                  <div className="item">
                    <a className="mailtoui" href="mailto:jugedred@gmail.com">
                      Mail
                    </a>
                  </div>
                  <div className="item">
                    <a href="https://github.com/corekaraweb" target="_blank">
                      GitHub
                    </a>
                  </div>
                  <div className="item">
                    <a href="https://hideki-murakami.pro">TOP</a>
                  </div>
                </div>
              </div>
              <p className="copy">© 2027 — 村上英輝 / Hideki Murakami（Welfare × IT Engineer）</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
