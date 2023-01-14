import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { AWS } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == "aws_detail" ? (
          <AWS>
            <div className="border-2 border-pink-50 inline-block  h-2/4">
              <div></div>
              <div>
                <p>AWSは世界第一位のインターネット通販サイトとして有名なAmazonが提供するクラウドサービスです。</p>
                <p>クラウドサービスとはインターネットを通じてWebサーバーやDBサーバーをレンタルしたり、オンラインのストレージをレンタルしたりすることができるサービスです。</p>
                <p>AWSは2006年にサービスが開始されました。</p>
                <p>AWSには200種類ものサービスがありますがこれらのサービスを利用することでセキュリティ性の高い会員制のECサイトを構築したり動画コンテンツの配信サイトを構築したり、音声を認識して文字起こしをするスマートフォン用アプリを作成したりなど、多種多様なシステムを開発することが可能です。</p>
                <p>200種類ものサービスには仮想的なサーバーを提供するサービスやストレージを提供するサービス、データベースシステムを提供するサービス、人工知能を提供するサービスなど様々です。</p>
                <div className='border-collapse'>
                  <table className='border-collapse'>
                    <tr>
                      <th></th> <th></th><th></th>
                    </tr>
                    <tr>
                      <th>Amazon EC2</th> <td>コンピューティング</td> <td>クラウド内でサイズ変更可能なコンピューティング性能</td>
                    </tr>
                    <tr>
                      <th>Amazon S3</th> <td>ストレージ</td> <td>安全性と耐久性を持つスケーラブルなオブジェクトストレージインフラストラクチャ</td>
                    </tr>
                    <tr>
                      <th>Amazon RDS</th> <td>データベース</td> <td>MySQL、PostgreSQL、MariaDB、Oracle BYOLまたはSQL Serverのためのマネージド型リレーショナルデータベースサービス</td>
                    </tr>
                    <tr>
                      <th>Amazon DynamoDB</th> <td>データベース</td> <td>シームレスなスケーラビリティを備えた、高速で柔軟なNoSQLデータベース</td>
                    </tr>
                    <tr>
                      <th>Amazon SageMaker</th> <td>MACHINE LEARNING</td> <td>機械学習モデルの構築、トレーニング、デプロイを行うためのフルマネージド型プラットフォーム</td>
                    </tr>
                    <tr>
                      <th>AWS Lambda</th> <td>コンピューティング</td> <td>サーバレス。コードさえ用意すればOK。イベント発生時にお客様のコードを実行し、コンピューティングリソースを自動的に管理するコンピューティングサービス</td>
                    </tr>
                    <tr>
                      <th>Amazon Lightsail</th> <td>コンピューティング</td> <td>仮想プライベートサーバーを簡単に利用可能に。コンピューティング、ストレージ、ネットワークなどAWSでプロジェクトを始めるために必要なあらゆるものが用意されている</td>
                    </tr>
                    <tr>
                      <th>Amazon Glasier</th> <td>ストレージ</td> <td>安全で耐久性に優れた長期的なオブジェクトストレージ</td>
                    </tr>
                    <tr>
                      <th>Amazon SageMaker Ground Truth</th> <td>MACHINE LEARNING</td> <td>高精度なトレーニングデータセットを素早く構築しながらラベル付けのコストを最大70%削減</td>
                    </tr>
                    <tr>
                      <th>AWS RoboMaker</th> <td>ロボット工学</td> <td>AWS RoboMakerによりインテリジェントロボット工学アプリケーションを大規模かつ簡単に開発、シュミレート、デプロイすることが可能に</td>
                    </tr>

                  </table>
                  <p>AWSは従来課金制ですがいくつかのサービスについては無料で利用できるものがあります。</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>

                  <p></p>
                </div>
              </div>
            </div>
          </AWS>
        ) : id == "begin_detail" ? (
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
        ) : id == "cloud_detail" ? (
          <AWS>
            <div className="">
              <div className="border-2 border-pink-50 inline-block  h-2/4">
                <div></div>
                <div>
                  <p>クラウドとは雲のように実態が見えないネットワーク上のサービスを表すものであり、IT用語のバズワードの1つです。</p>
                  <p>クラウドの対義語はオンプレミスです。オンプレミスとはサーバーなどのインフラ設備を自社内で構築することを言います。</p>
                  <p>クラウドサービスを提供するAWSのような大企業のセキュリティの管理下に機密データを保管しておいた方が自社でサーバーを構築して機密データを保管しておくより安全と言えます</p>
                  <p>クラウドを利用すると必要な分だけのシステムを利用できる</p>
                  <h4>メリット</h4>
                  <p>高負荷時にはリソースを増強し、負荷が落ち着いたらリソースの割り当てを解除することでコストを適切に配分することが可能</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>クラウドサービス</div>
                  <div>
                   <h4> Saas(Software as a Service)</h4>
                    <p>完成されたソフトウェアやアプリケーションをクラウドで提供すること。</p>
                    <p>カスタマイズ性に欠ける可能性がある</p>
                    <p>具体的にはMicrosoft365、Salesforce、Google Workspaceなどが存在</p>
                  </div>
                  <div>
                  <h4>Paas(Platform as a Service)</h4>
                    <p>オペレーティングシステムや開発環境、ネットワーク環境等をクラウドで提供すること。</p>
                    <p>構成済みのインフラストラクチャがある</p>
                    <p>アプリケーションやデータを自前で用意する必要がある</p>
                    <p>セキュリティ、バージョンアップ作業などは全てクラウド事業者が提供</p>
                  </div>
                  <div>
                  <h4>Iaas(Infrastructure as a Service)</h4>
                    <p>ソフトウェアを稼働させるために必要となる基盤をクラウドで提供すること。クラウドのストレージサービスやネットワークサーバー等が該当します</p>
                    <p>利用者はOS、ミドルウェアの選択とアプリケーションやデータの用意とそれぞれの運用・保守・管理をすべて自前で行う必要がある</p>
                    <p>一般的な管理作業はリモート管理ツール(RDPやSSH)を利用してインターネットを介してリモートから各種サーバーを管理する</p>
                    </div>
                  <p>AWSはPaaSやIaaSに該当し、サービスとして提供されるミドルウェアに開発者が自らシステムを構築する</p>
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>クラウドとホスティングサービス</div>
                  <div>
                   <h4>ホスティングサービス</h4>
                    <p>1台のサーバー上でApacheをマルチドメインで稼働させ、ドメイン単位でユーザーへWebスペースを提供する。</p>
                    <p>複数ドメインを1台のサーバー上で運用しネットワークを共有するため、負荷の高いユーザーがいる場合はサーバーリソースが逼迫し他のユーザーに影響を出す</p>
                    <p></p>
                  </div>
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>VPS(Virtual Private Server)</div>
                  <div>
                   <h4></h4>
                    <p>仮想化技術が進歩したことで仮想マシンを1台のサーバー上に立てて提供することができるようになりました。</p>
                    <p>ーがいる場合はサーバーリソースが逼迫し他のユーザーに影響を出す</p>
                    <p></p>
                  </div>
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想化技術</div>

                  <p>AWSのサービスにはサーバーをレンタルするサービスがあります。また、ストレージをレンタルしたりすることもできます。</p>

                  <p>これは仮想化という技術によって成り立っています。</p>
                  <div className='flex'>
                    <div className='text-center m-4'>
                      <Image
                        src="/images/programing/aws/virtual.png"
                        alt="01:Pythonとは？"
                        width={600}
                        height={200}
                      />
                      <div className='text-left'>
                        <p>上の図は物理的なコンピュータ上で仮想的なコンピューターを3台動作させている様子を表しています。</p>
                        <p>まず物理的なコンピューターが再開に存在し「ホストOS」はそのコンピューター上にインストールされているオペレーティングシステム(OS)を表します</p>
                        <p>さらにその上には「仮想化ソフトウェア」があります。これは仮想的なコンピューターを動作させる上で必要となるソフトウェアです。</p>
                        <p>この仮想化ソフトウェアが仮想化技術と呼ばれているものです。</p>
                        <p></p>
                      </div>
                    </div>
                    <div className='text-center m-4'>
                      <Image
                        src="/images/programing/aws/virtual2.png"
                        alt="01:Pythonとは？"
                        width={600}
                        height={200}
                      />
                      <div className='text-left'>
                        <p>ネットワーク仮想化はネットワーク接続に必要なインフラを仮想化することにより物理的な機器を変更することなくネットワークの構成を変更することを可能とする技術です</p>
                        <p>仮に普段利用している物理的なサーバーに障害が発生した場合でもネットワーク仮想化技術により瞬時にネットワーク接続が別サーバーに切り替わり、継続してサービスを利用することができます。</p>
                        <p></p>
                        <p></p>
                      </div>

                    </div>
                  </div>
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>その他クラウドサービス</div>
                  <p>AWS以外のクラウドサービスとしてはMicrosoft社のAzure、Google社のGCP(Google Cloud Platform)などがあります。</p>
                  <div>
                    Azure
                    <p>Microsoft社のAzureは2010年にサービスが開始されました。</p>
                    <p>AzureはMicrosoft製品との親和性が高いのが特徴です。</p>
                    <p>またMicrosoftはデータベース市場で高いシェアを持つSQLServerの開発元であり、SQL Serverを利用したシステムをオンプレミスからクラウドに移行しやすい</p>
                    <p></p>
                    <p></p>
                  </div>
                  <div>
                    GCP
                    <p>Google社のGCPは2008年にサービスが開始されました。</p>
                    <p>Googleと言えば検索エンジンの他、GmailやGoogleドキュメント、GoogleマップやGoogleフォトなどのクラウドサービスが有名ですがこれらのクラウドサービスもGCPを基盤として構築されています。</p>
                    <p>またMicrosoftはデータベース市場で高いシェアを持つSQLServerの開発元であり、SQL Serverを利用したシステムをオンプレミスからクラウドに移行しやすい</p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
              </div>

            </div>
          </AWS>
        ) : id == "amazonrds_detail" ? (
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
        ) : id == "amazonec2_detail" ? (
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
        ) : id == "api_gate" ? (
          <AWS>
            <div className="">
              <div className="text-3xl m-4">
                関連記事
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
