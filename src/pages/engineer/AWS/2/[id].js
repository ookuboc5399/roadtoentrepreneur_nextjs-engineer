import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { AWS, AZURE } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "azure_detail" ? (
          <AZURE>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>高可用性</div>
            <p>日本国内には東日本と西日本にそれぞれデータセンターがある</p>
            <h3>リージョンペア</h3>
            <p>Azureのリージョンは同じジオ内の他のリージョンとリージョンペアが設定されている</p>
            <p>リージョンペアとなっているリージョンは待機時間の短いネットワークで接続されAzure基盤への更新プログラムの適用やメンテナンスが同時に実施されないように管理されている</p>
            <h3>可用性ゾーン</h3>
            <p>Azureの1つのリージョンは複数のデータセンターによって構成されているが、可用性ゾーンに対応したリージョンではデータセンターを「ゾーン」という
              複数のグループに分割している            </p>
              <p>複数の「ゾーン」に同じ役割を持つ仮想マシンをあらかじめ分散配置しておくことで役割全体のダウンを防ぐ</p>
              <p>異なるゾーンに仮想マシンを配置する場合であても仮想ネットワークやサブネットを分離する必要はない。</p>
              <p>同一の仮想ねとワークやサブネット上に異なるゾーンの仮想マシンを混在させることが可能</p>
            <p>可用性ゾーンはリージョン内の物理的な場所のグループです。</p>
            <p>可用性ゾーン同士は互いに非常に低遅延のネットワークで接続</p>
            <p>仮想マシンを2台起動する場合、片方を「1番目のゾーン」で起動し、もう片方を「2番目」のゾーンで運用している仮想マシンは影響を受けない</p>
            <h3>可用性セット</h3>
            <h4>障害ドメイン</h4>
            <p>単一のデータセンター内の特定のハードウェアの故障やメンテナンスによって同じ役割を持つ仮想マシンが同じタイミングで影響を受けることのないようにする</p>
            <p>異なる障害ドメインに仮想マシンを配置することでデータセンター内の物理的な障害に対応することが可能。</p>
            <h4>更新ドメイン</h4>
            <p>更新ドメインはラックの中にある1つの物理的な仮想化サーバーを指す。</p>
            <p>1台の仮想化サーバー上には多くの仮想マシンを構成可能</p>
            <p>仮想マシンを異なる更新ドメインに配置することで仮想化サーバーの故障やメンテナンスが発生した場合にもサービスを提供し続けることが可能</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/available.png"
                alt="top"
                width={712}
                height={412}
              />
            </div>
            <h3>仮想マシン</h3>
            <p>仮想マシンで利用するディスクは「仮想ディスク」</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想ネットワーク(Virtual Network)</div>
            <p>Azureプラットフォーム内に専用のプライベートネットワーク環境を提供するサービス</p>
            <p>Azure上でインターネットとは区別してネットワークを構成してセキュリティを高めること</p>
            <p>仮想マシンを作成する際には必ずこの仮想ネットワークが必要(Azureを利用する場合はまずVNetを構成します)</p>
            <p>VNet内の仮想マシンはサブネットが異なっていても通信できる</p>
            <h4>S2S接続</h4>
            <p>サイト間の接続のことでパブリックIPを設定されたオンプレミスネットワークとAzureのVPN Gatewayを接続するネットワークサイト間の接続を行う接続方法</p>
            <h4>V2V接続</h4>
            <p>VNet間の接続のことでAzure内の別々のリージョンに設置した複数の自社のAzure上の仮想ネットワーク間を接続する際などにV2Vは使われる</p>
            <h4>P2S接続</h4>
            <p>個人のPCなどからAzureネットワークへ直接接続することで、オフィスのオンプレミスネットワークに接続されていない遠隔地からAzure上の仮想ネットワークに接続される</p>
            
            <h3>VPN Gateway</h3>
            <p>Azure仮想ネットワークを他のネットワークと接続するためのゲートウェイ</p>
            <h3>サブスクリプション</h3>
            <p>部門やグループ別にアクセス制限などを完全に分離したい場合、サブスクリプションを分けることで実現が可能</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>冗長性</div>
            <h4>ゾーン冗長ストレージ</h4>
            <p>同一のリージョン内で異なる可用性ゾーンに三重に保存される。</p>
            <h4>geo冗長ストレージ</h4>
            <p>プライマリリージョン(メイン)で三重で保存されたデータがセカンダリリージョンにも同様に三重で保存される。</p>
            <p>非同期でペアリージョンに複製</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>IIS</div>
            <h4></h4>
            <p></p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ロードバランサー</div>
            
            <p>トラフィックを分散する</p>
            <p>「パブリックロードバランサー」と「内部ロードバランサー」の2種類があります。</p>
            <h4>パブリックロードバランサー</h4>
            <p>フロントエンドで着信したトラフィックのパブリックIPアドレスとポート番号をバックエンドのリソースのプライベートIPアドレスとポート番号に分配します。</p>
            <h4>内部ロードバランサー</h4>
            <p>仮想ネットワーク内部のリソース間およびVPNで接続されたオンプレミス環境のリソースと仮想ネットワーク内のリソース間のトラフィックを負荷分散します。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>静的IPアドレスの割り当て</div>
            <p>動的IPアドレスとはネットワークに接続した機器を対象にサーバーが自動的に割り当てるIPアドレスです</p>
            <p>それに対して静的IPアドレスとは特定の端末・機器あるいは人に割り当てられたIPアドレス</p>
            <p>インターネットを一度切断して再び接続してもIPアドレスは変わらない</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>DNS</div>
            <p>DNS(Domain Name System)とはホスト名をネットワークやインターネット上でも使えるようにIPアドレスに対応付けるシステム</p>
            <p>○○社のホームページを見ようと「www.○○.co.jp」にアクセスした際にアクセス先のIPアドレスを教えてもらわないとホームページにアクセスできません。</p>
            <p>そのため、DNSサーバーに「www.○○.co.jp」のIPアドレスは何番ですか？と尋ねることにより、DNSサーバーは「www.○○.co.jp」を元にDNSに登録された情報からIPアドレスを検索して返答します。</p>
            <p>このようなホスト名とIPアドレスを結び付ける動作を「名前解決」と呼び、「名前解決」を行う専用のサーバーを「DNSサーバー」と呼びます。</p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              ホスト名とは主にサーバーやコンピュータの名前を指します
            </div>
            <h4>ドメインツリー</h4>
            <p>各ドメインに存在するDNSサーバーは自身の管理するドメイン内情報や下位のドメイン情報を管理しています。</p>
            <p>問い合わせを受けたDNSサーバーが名前解決できない場合、問い合わせを受けたDNSサーバーは最上位に当たるルートドメインのDNSサーバーへ問い合わせを行う</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/domain_tree.png"
                alt="top"
                width={712}
                height={412}
              />
            </div>
          </AZURE>
        ) : id == "azure_portal" ? (
          <AZURE>
            <h3>Azureポータル</h3>
            <p>AzureにはサブスクリプションやAzureのリソースを管理するためのWebポータルがある</p>
            <p>Azureではこのポータルから様々なサービスを構築して管理することができます。</p>
            <p></p>
            <h3>Azure Site Recovery</h3>
            <p>Azureはビジネス継続性の担保や災害時の復旧計画に役立つ機能です。</p>
            <p>Azureで動作しているアプリケーションやサーバーのワークロードの実行状態を何らかの理由によりプライマリサイトでの機能が停止した場合でもセカンダリサイトへフェールオーバーすることで維持します。</p>
            <p>プライマリサイトが再度利用可能になるとセカンダリサイトからフェールオーバーできます。</p>
            <p>Azureのリージョン間やオンプレミスの仮想マシン、物理サーバーおよびAzure Stackによる仮想マシンなどとAzureとの間でサーバーをレプリケーションすることができます。</p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              レプリケーションとはあるリージョンの仮想マシンなどのサーバーから別のリージョンの仮想マシンなどへリアルタイムに同期をとることをいう。
            </div>
          </AZURE>
        ) : id == "azure_iaas" ? (
          <AZURE>
            <h3>Azure Active Directory</h3>
            <p>Azure ADはAzureにサインインするためのアカウントが保存されている領域でID/パスワードの入力が必要なクラウドサービスに対するシングルサインオンを提供。</p>
            <p>シングルサインオンとは一度ID/パスワードを入力するだけでどこにでもアクセスできるようになる</p>
            <h3>SLA</h3>
            <p>Azureでの稼働率などを含めたサービスレベルの規定がまとめられたものをAzure SLA</p>
            <p>99.9%以上の時間において仮想マシン接続が確保されることを保証</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ネットワークセキュリティ</div>
            <p>複数のセキュリティ対策を組み合わせて実施し、あらゆる攻撃に対応していくセキュリティ対策の考え方を多層防御</p>
            <p></p>
            <p></p>

            <h3>ネットワークセキュリティグループ(NSG)</h3>

            <p>Azure仮想マシンが外部ネットワークと通信を行う際の通信に関する規則を定義したもの。</p>
            <p>IPアドレスとポート番号をベースに通信の可否を定義することで攻撃者による不正アクセスをブロックできる</p>
            <p>NSGは仮想マシンのネットワークインターフェイス(NIC)と仮想ネットワークのサブネットのそれぞれに設定</p>
            <p>特定の仮想マシンが通信できるかどうかはNICに設定されたNSGとサブネットに設定されたNSGの両方の規則の評価によって決まる</p>
            <h3>Azure Firewall</h3>
            <p>仮想マシンはAzure Firewallを経由してインターネット上のコンピューターと通信するようになる</p>
            <h3>Azure App Service</h3>
            <p>APIアプリケーションは他のWebサービスに機能を提供する働きを持たせるアプリケーション。</p>
            <p>シングルサインオンとは一度ID/パスワードを入力するだけでどこにでもアクセスできるようになる</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ストレージ</div>
            <h4>ローカルディスク</h4>
            <p>仮想マシンのOSディスクはBlobストレージにあるVHDファイルとして置かれている。</p>
            <p>Dドライブは仮想マシンをホストしている物理サーバーのディスクを一時ディスクとして</p>
            <p>EドライブはOSディスクと同じように</p>
            <Image
              className='object-cover'
              src="/images/programing/aws/vm_local.png"
              alt="top"
              width={700}
              height={400}
            />
            <h4>Azure Storage</h4>
            <p>Azure Storageを利用するにはストレージアカウントを作成する必要があります。</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <table class="table-auto border-2 border-black">
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>Blob</td>
                  <td className='border px-4 py-2'>テキストやバイナリデータなどの大量の非構造化データを格納できるオブジェクトストレージサービス</td>
                  <td>2021/2/1</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>File</td>
                  <td className='border px-4 py-2'>SMB/NFSプロトコルに対応したファイル共有サービス</td>
                  <td>2021/2/2</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Table</td>
                  <td className='border px-4 py-2'>非構造化データを格納するNoSQLキーバリューストアサービス。大量のデータに高速にアクセスできる</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Queue</td>
                  <td className='border px-4 py-2'>コンポーネント間の非同期通信に使うメッセージサービス</td>
                </tr>
              
          
              </tbody>
            </table>
          </AZURE>
        ) : id == "engineer_amazonrds_detail" ? (
          <AWS>
            <div className="">
              <div className="text-3xl m-4">
                関連記事
              </div>


              <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">コロナショックにおけるBTCUSDの急落は偶然じゃない</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Amazon RDSとは</div>
                <div>
                  <p>Amazon RDSとはAmazon Relational Database Serviceの略でリレーショナルデータベースを提供するサービスです。</p>
                  <p>リレーショナルデータベースとはデータをMicrosoft ExcelやGoogleスプレッドシートのような2次元表で表すデータベースのことです。</p>
                  <p></p>
                </div>
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th>Title1</th> <th>Title2</th><th>Title3</th>
                    </tr>
                    <tr>
                      <th>Value1</th> <td>Value2</td> <td>Value3</td>
                    </tr>
                    <tr>
                      <th>Value4</th> <td>Value5</td> <td>Value6</td>
                    </tr>
                    <tr>
                      <th>Value7</th> <td>Value8</td> <td>Value9</td>
                    </tr>
                    <tr>
                      <th>Value10</th> <td>Value11</td> <td>Value12</td>
                    </tr>
                  </table>
                  <p>Amazon AuroraはAmazonが開発したオリジナルデータベースです。オープンソースのMySQLとPostgreSQLと互換性があります。</p>
                  <p>オープンソースとはソフトウェアの設計書ともいえるソースコードを公開しているソフトウェアのことでMySQLはオープンソースのリレーショナルデータベースとして世界シェアNo.1の実績があり、PostgreSQLはオープンソースのリレーショナルデータベースとして世界シェアNo.2の実績があります。</p>
                  <p>Amazon Auroraの特長としてAmazon Auroraの処理速度はMySQLの最大5倍、PostgreSQLの最大3倍高速である言われています。</p>
                  <p>そのためAWSでMySQLもしくはPostgreSQLを利用するのであれば特に特別な理由がない限りAmazon Auroraを利用するのが良いでしょう。</p>
                  <p></p>
                  <p></p>

                  <p></p>
                </div>
                <div>
                  <p>MariaDBはMySQLから派生して開発されたオープンソースのデータベースです。</p>
                  <p>MySQLはOracleデータベースの開発元であるOracle社によって提供されていますがMySQLがOracle社に買収された際、MySQLの開発者であるミカエル・ウィデニウス氏がMySQLを元に新たに開発したのがMariaDB。</p>
                  <p></p>
                </div>
                <div>
                  <p>オープンソースではない商用データベースはOracleとMicrosoft SQL Serverの2つを利用することができます。</p>
                  <p>Oracleは商用データベースでNo.1のシェアを誇り、かつオープンソースを含めてもリレーショナルデータベースでNo.1のシェアを誇るデータベースです。</p>
                  <p>。</p>
                  <p></p>
                </div>
                <div>
                  ネットワーク
                  <p>AWSのようなクラウドサービスを利用するためにはインターネット接続が必要となるためネットワークに関するセキュリティは特に重要です。</p>
                  <p>AWSはファイアウォール等の様々なネットワークセキュリティ対策が施されており、またWebアプリケーションの脆弱性を突いた攻撃に対するセキュリティ対策の1つであるWAF(Web Application Firewall)を利用することも可能です。</p>
                  <p>。</p>
                  <p></p>
                </div>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>AWSのネットワーク構成</div>
                <div>
                  <Image
                    src="/images/programing/aws/network.png"
                    alt="01:Pythonとは？"
                    width={600}
                    height={400}
                  />
                </div>
                <div>

                  <p>AWSのネットワークはリージョンの中にVPC(Virtual Private Cloud)が存在しVPCのなかにAZ(Availability Zone)が存在します。</p>
                  <p>VPCとは公共のネットワーク上に構築された仮想的なプライベートクラウドのことを言います。たとえばAWSは公共のネットワークを利用しますがAWSのマネジメントコンソールには誰もがアクセスできるわけではなくAWSのアカウントを作成したルートユーザーと一部のIAMユーザーのみでプライベートな空間となっています。</p>
                  <p>AZとはリージョンの中にあるデータセンターを抽象化した概念</p>
                  <p></p>
                </div>
              </div>


              <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
              </div>

            </div>
          </AWS>
        ) : id == "engineer_amazonec2_detail" ? (
          <AWS>
            <div className="">
              <div className="text-3xl m-4">
                関連記事
              </div>


              <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">コロナショックにおけるBTCUSDの急落は偶然じゃない</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/%e3%82%b3%e3%83%ad%e3%83%8a%e3%82%b7%e3%83%a7%e3%83%83%e3%82%af%e3%81%ab%e3%81%8a%e3%81%91%e3%82%8bbtcusd%e3%81%ae%e6%80%a5%e8%90%bd%e3%81%af%e5%81%b6%e7%84%b6%e3%81%98%e3%82%83%e3%81%aa%e3%81%84/145/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>

                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/">
                      記事を読む
                      <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>AWSのセキュリティ</div>
                <div>
                  ユーザー管理
                  <p>AWSのセキュリティ対策の1つとしてはサービスごとに利用可能なユーザーを設定することでユーザーごとに不必要なサービスについてはアクセスできないようにするという考え方があります。</p>
                </div>
                <div>
                  電子証明書管理
                  <p>クラウドサービスでは電子証明書を適切に管理することによりデータの改ざんや盗聴、なりすましを防ぎます。</p>
                  <p>たとえばインターネットの通信を暗号化することで安全に電子メールを宛先に送信することができるようになります。</p>
                  <p>電子証明書にはその電子証明書が正式な電子証明書であることを保証する機関がありその機関のことを認証局といいます。</p>
                  <p></p>
                </div>
                <div>
                  暗号鍵管理
                  <p>暗号鍵とはデータを暗号化するためのアルゴリズムのことをいいます。</p>
                  <p>暗号化と復号化(暗号化されたデータを解除すること)に同じアルゴリズムを用いることを「共通鍵暗号化方式」と言い、暗号化と復号化に別々のアルゴリズムを用いることを「公開鍵暗号化方式」と言います。</p>
                  <p>。</p>
                  <p></p>
                </div>
                <div>
                  ネットワーク
                  <p>AWSのようなクラウドサービスを利用するためにはインターネット接続が必要となるためネットワークに関するセキュリティは特に重要です。</p>
                  <p>AWSはファイアウォール等の様々なネットワークセキュリティ対策が施されており、またWebアプリケーションの脆弱性を突いた攻撃に対するセキュリティ対策の1つであるWAF(Web Application Firewall)を利用することも可能です。</p>
                  <p>。</p>
                  <p></p>
                </div>
              </div>
              <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>AWSのネットワーク構成</div>
                <div>
                  <Image
                    src="/images/programing/aws/network.png"
                    alt="01:Pythonとは？"
                    width={600}
                    height={400}
                  />
                </div>
                <div>

                  <p>AWSのネットワークはリージョンの中にVPC(Virtual Private Cloud)が存在しVPCのなかにAZ(Availability Zone)が存在します。</p>
                  <p>VPCとは公共のネットワーク上に構築された仮想的なプライベートクラウドのことを言います。たとえばAWSは公共のネットワークを利用しますがAWSのマネジメントコンソールには誰もがアクセスできるわけではなくAWSのアカウントを作成したルートユーザーと一部のIAMユーザーのみでプライベートな空間となっています。</p>
                  <p>AZとはリージョンの中にあるデータセンターを抽象化した概念</p>
                  <p></p>
                </div>
              </div>


              <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
              </div>

            </div>
          </AWS>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post
