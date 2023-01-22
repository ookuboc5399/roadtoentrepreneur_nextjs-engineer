import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { Nodejs_0 } from "../../../../../components/layout/engineer/engineer";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id == "nodejs_detail" ? (
        <Nodejs_0>
          <div className="">
            <div className="border-2 border-pink-50 inline-block  h-2/4">
              <div></div>
              <div>
                <p>
                  NodejsはJavaScriptでサーバープログラムの開発を行うのに多用されているJavascriptの実行環境です。
                </p>
                <p>
                  これに用意されているパッケージ管理ソフトを使い、様々なJavaScriptのソフトウェアのインストール等を行います。
                </p>
                <p>
                  私たちがWebアクセスに使っているブラウザなどは「クライアント」と呼ばれます。
                </p>
                <p>
                  サーバーにアクセスしてサーバーから情報をもらっている利用者のことです。
                </p>
                <p>
                  多くの人が作っているWebサイトはクライアントがサーバーにアクセスすると、そのアドレスにおいてあるHTMLファイルを送り返すという単純なものです。
                </p>
                <h4>フレームワークとは?</h4>
                <p>基本的な仕組みを提供するのがフレームワークです。</p>
                <p>
                  フレームワークはプログラムの基本的なシステムそのものを持っており、必要に応じてカスタマイズする部分だけを作って追加すればプログラム全体が完成します。
                </p>
                <li>
                  フレームワークはWebのプログラムの基本的な仕組みを持っています。そのうえでそれぞれカスタマイズするところだけを書き加えていけばいいのです。
                  <br />
                  このため、すべてのプログラムを書くのに比べると圧倒的に短いプログラムで済みます。
                </li>
                <li>
                  フレームワークは基本的な仕組みが最初から用意されています。そこには、様々なサイト攻撃への対応も住んでいることが多いのです。
                  <br />
                  またセキュリティに関する機能なども用意されていることが多く、安産対策も簡単に行えるようになっていることが多いです。
                </li>
                <li>
                  まったく開発の内容を知らなかった人間がいきなりメンテナンスの担当となったとしても、そのフレームワークの使い方が分かっていれば、大体何がどうなっているのか理解できます。
                </li>
                <p></p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  ポート番号
                </div>
                <p>
                  1つのサーバーの中にWebサーバー、メールサーバーなどいくつものサーバーが動いていてそれぞれサービスを提供していることもあります。
                </p>
                <p>
                  そこでポート番号というものを使い、アクセスするサービスを指定するのです。
                </p>
                <p>
                  この3000というポート番号はNode.jsでデフォルトで使われているものです。
                </p>
                <p>
                  Node.jsのプログラムの流れは簡単にまとめると以下のようになります。
                </p>
                <li>
                  インターネットアクセスをする「http」というオブジェクトを読み込む。
                </li>
                <li>httpからサーバーのオブジェクトを作る。</li>
                <li>サーバーオブジェクトを待ち受け状態にする</li>
                <p>
                  待ち受けはサーバーに外部からアクセスしてくるのをずっと待ち続ける状態にするものです。
                </p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="text-3xl m-4">関連記事</div>

            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Webサイトの仕組み
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="http://www.agile-software.site/2022/04/23/web%e3%82%b5%e3%82%a4%e3%83%88%e3%81%ae%e4%bb%95%e7%b5%84%e3%81%bf/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Django
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="http://www.agile-software.site/2021/04/04/django/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      BTCUSD20000ドル突破
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      BTCUSD(1月前半相場)
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Nodejs_0>
      ) : id == "nodejs_detail_project" ? (
        <Nodejs_0>
          <div className="">
            <div className="border-2 border-pink-50 inline-block  h-2/4">
              <div></div>
              <div>
                <p>今回はnode-appというプロジェクト名でを作成します。</p>
                <Code1 />
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  startprojectコマンドとは？
                </div>
                <p>
                  Node.jsでプログラムを実行するときはこのようにコマンドを実行します。
                </p>
                <Code2 />
                <p>最初に行うのは「http」オブジェクトのロードです。</p>
                <p>
                  今回はhellowworldprojectというプロジェクト名でを作成します。
                </p>
                <p>
                  ここでは「require」というメソッドを実行しています。このメソッドはNode.jsのモジュールローディングシステムという機能を利用するものです。
                </p>
                <p>
                  Node.jsではオブジェクトをモジュール化して管理し、必要に応じてそれをロードし利用できるようにしています。これがモジュールローディングシステムです。
                </p>
                <Code3 />
                <p>
                  引数には読み込むモジュール名を用意します。これで指定した名前のモジュールがロードされ、変数にオブジェクトとして設定されます。
                </p>
                <p>
                  ここでは「http」というモジュールをロードしています。これはHTTPアクセスのための機能を提供するものです。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  サーバーオブジェクト作成
                </div>
                <p>
                  サーバーのオブジェクトはhttp.Serverというオブジェクトとして用意されています。
                </p>
                <p>
                  httpオブジェクトにある「createServer」というメソッドを呼び出します。これでhttp.Serverオブジェクトが作成され変数に設定されます。
                </p>
                <p>このcreateServerは関数を1つ引数に用意します。</p>
                <p>
                  requestとresponseという2つの引数を持った関数が用意されていた。この2つはクライアントからサーバーへの要求とサーバーからクライアントへの返信のそれぞれを管理するためのものです。
                </p>
                <p>
                  サーバーに誰かがアクセスしてくるとこの関数が呼び出されるのです。
                </p>
                <p>
                  引数で渡されたresponseという変数の「end」というメソッドを呼び出しています。
                </p>
                <p>
                  このresponseというのはサーバーからクライアントへの返信に関するオブジェクトです。
                </p>
                <p>このendはクライアントへの返信を終了するメソッドです。</p>
                <p>
                  サーバーのプログラムというのは常に「クライアントから送られてきた情報」と「サーバーから送り返す情報」の2つを意識して考えないといけません。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  待ち受け
                </div>
                <p>
                  待ち受け状態はhttp.Serverの「listen」というメソッドを呼び出して行います。
                </p>
                <p>
                  Node.jsは実行中、ファイルの修正を自動的に反映してくれません。起動時にメモリにファイルをロードし、それを元に実行するため、ファイルを修正してもそれだけでは表示に反映されないのです。
                </p>
                <p>
                  ヘッダー情報というのはサーバーとクライアントの間でやり取りをする際に送られる「見えない」情報です。
                </p>
                <p>
                  サーバーとのやり取りを行う際には実際に送られるデータ(テキスト)の前にアクセスに関する情報をやり取りしているのです。
                </p>
                <p>
                  その情報をもとにどんなデータが送られてくるかを解釈し処理しているのです。
                </p>
                <p>
                  ですから、サーバーからクライアントにデータを返信する際にはまずヘッダー情報としてどういうデータが返信されるかを送っておけば確実に必要な形式でデータが処理されるようになります。
                </p>
                <li>HTMLの＜head＞内にタグを用意する</li>
                <p>HTMLの＜head＞部分はヘッダー情報に関する記述をするところ</p>
                <li>http.ServerResponseのメソッドを使う</li>
                <p>
                  サーバーからの送信内容を管理するhttp.ServerResponseオブジェクトにはヘッダー情報を扱うためのメソッドがいくつか用意されています。
                </p>
                <p>
                  setHeader/getHeaderはヘッダー情報から特定の項目の値を読み書きするものです。
                </p>
                <p>
                  ヘッダー情報というのは1つの情報だけあるわけではなくて、様々な情報が用意されています。
                </p>
                <p>
                  そのヘッダー情報の項目を名前で指定して取り出したり設定したりするのがこれらのメソッドです。
                </p>
                <p>
                  writeHeadはヘッダー情報をテキストで用意して直接書き出すためのものです。これはステータスコードと呼ばれる番号をつけて出力します。
                </p>
                <Code4 />
                <p>
                  「Content-Type」はコンテンツの種類を示すもので「text/html」というのは「テキストデータでHTML形式のもの」であることを示します。
                </p>
                <p>writeは引数のテキストを出力します。</p>
                <p>
                  これらのヘッダー関係の情報により、送信されるデータがUTF-8の日本語テキストであることがクライアント側に伝えられます。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  fsオブジェクト
                </div>
                <p>
                  ファイルを扱うオブジェクトは「File
                  System」オブジェクトと呼ばれるものです。
                </p>
                <p>
                  fsオブジェクト内にあるreadFileというメソッドでファイルを読み込みます。
                </p>
                <Code5 />
                <p>
                  readFileには3つの引数を用意します。1つ目は読み込むファイルの名前。2つ目はファイルの内容のエンコーディング方式を指定します。
                </p>
                <p>
                  そして3つ目がreadFileが完了した後に実行する処理を関数として用意
                </p>
                <p>
                  readFileは実行するとすぐに次の処理に進む。ファイルの読み込みはバックグラウンドで行い、完了したら指定の関数を実行する
                </p>
                <p>これらは後で呼び出すのでコールバック関数と呼ばれます。</p>
                <Code6 />
                <p>
                  第一引数には読み込み時にエラーなどが起こった場合、そのエラーに関する情報をまとめたオブジェクトが渡されます。
                </p>
                <p>
                  エラーが起きていなかったら空になります。第二引数がファイルから読み込んだデータになります。
                </p>
                <p>
                  普通プログラムの命令は「1つの命令を実行し、それが終わったら次の命令に進む」というように動くはずです。
                </p>
                <p>
                  こういう「やることが終わるまで待ってから次に進む」というやり方を「同期処理」といいます。
                </p>
                <p>
                  readFileは処理が終わってないのに次に進みます。こうした処理の仕方を「非同期処理」と呼びます。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  テンプレートエンジン
                </div>
                <p>
                  テンプレートエンジンというのは「テンプレート」というものを使って表示するコンテンツを用意するための仕組みです。
                </p>
                <p>
                  Node.jsで用意されているテンプレートエンジンは「EJS」と呼ばれるものです。
                </p>
                <p>
                  EJSは「Embedded JavaScript
                  Templates」というものでJavaScriptで利用するシンプルなテンプレートエンジンです。
                </p>
                <p>
                  Node.jsではNode.jsの機能を拡張する様々なプログラムがパッケージという形式で配布されています。
                </p>
                <p>
                  リリースされているパッケージを一か所にまとめ、必要なものをいつでもインストールできるような仕組みがパッケージマネージャーです。
                </p>
                <p>
                  node_modulesはこのアプリケーションにインストールされるNode.jsのパッケージが保管されるところです。
                </p>
                <p>
                  この中にEJSやそれを利用する上で必要になる各種のパッケージがインストールされます。
                </p>
                <h4>テンプレートの表示</h4>
                <li>テンプレートファイルを読み込む</li>
                <p>まずはファイルを読み込みます</p>
                <li>レンダリングする</li>
                <p>
                  レンダリングというのはテンプレートの内容をもとに実際に表示されるHTMLのソースコードを生成する作業です。
                </p>
                <p></p>
                <li>ejsオブジェクトの読み込み</li>
                <Code7 />
                <li>テンプレートファイルの読み込み</li>
                <Code8 />
                <p>
                  fsオブジェクトを使って読み込みます。readFileSyncというメソッドを使います。これは同期処理でファイルを読み込むものです。
                </p>
                <p>
                  ファイルの読み込みが終わるまで待って、すべて完了したら次に進む
                </p>
                <li>テンプレートファイルの読み込み</li>
                <p>
                  読み込んだテンプレートファイルのデータをレンダリングし、実際に表示するHTMLのソースコードに変換します。ejsのrenderメソッドを使います。
                </p>
                <p>このタグは指定した変数の値を出力するものです</p>
                <Code9 />
                <Code10 />
                <p>第二引数にさまざまな値をまとめたオブジェクトが渡されます</p>
                <p>
                  このオブジェクトにまとめてある値がテンプレート側の＜%=%＞タグで利用されることになるのです。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  ルーティング
                </div>
                <p>
                  urlオブジェクトにはURLのデータをパース処理(データを解析して本来の状態に組み立てなおす処理のこと)する機能があります。
                </p>
                <p>
                  それを利用してドメインより下のパス部分の値をチェックし、それに応じて処理を分岐します。
                </p>
                <p>
                  url.parseというのがURLデータをパースシテドメインやパス部分などURLを構成するそれぞれの要素に分けて整理するメソッドです。
                </p>
                <p>
                  その後のswitchでパース処理した値の「pathname」というものを取り出しています。
                </p>
                <p></p>
                <p>
                  アドレスに値の情報を付け足して送ることで必要な値をサーバーに渡すことができる。これを「クエリパラメーター」
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  クエリパラメーターの取り出し
                </div>
                <p>
                  parseメソッドでrequest.urlの値をパース処理します。この時重要なのはparseの第二引数にtrueをつける点です。
                </p>
                <p>
                  こうすることでクエリパラメーターとして追加されている部分もパース処理されるようになります。
                </p>
                <Code10 />
                <p>
                  このqueryというプロパティにパースされたクエリパラメーターのオブジェクトが保管されています。
                </p>
                <p>
                  例えばurlがhttp://localhost:3000/?msg=helloだとtrueをつけることでクエリパラメーターの値が｛'msg'：'hello'｝
                </p>
                <p>
                  trueをつけないとqueryの値はmsg='helloというただのテキストになります。
                </p>
                <p>
                  ユーザーからの入力をサーバーに送って処理をするという場合、クエリパラメーターはあまり便利なものではありません。それよりフォームを利用することが多いでしょう
                </p>
                <p>
                  Node.jsには標準で「フォームから送られたデータを取り出す」という機能が標準ではついてないのです。
                </p>
                <p>
                  クエリパラメーターならurl.parseでパースし、queryから取り出せばいいのですが、フォームのPOST送信にはそういった便利なものがないのです。
                </p>
                <p></p>
                <h4>Query Stringモジュールのロード</h4>
                <p>
                  Query
                  Stringはクエリテキストを処理するための機能を提供するものです。
                </p>
                <p></p>
                <Code11 />
                <p>
                  これで指定のイベントが発生したらあらかじめ用意しておいた関数を実行させることができるようになります。
                </p>
                <p>
                  クライアントから送信された情報というのは、requestオブジェクトにまとめられています。このrequestにはクライアントから送られたデータを受信する際のイベントが用意されています。
                </p>
                <table className="border-collapse">
                  <tr>
                    <th>'data'イベント</th>{" "}
                    <td>クライアントからデータを受け取ると発生するイベント</td>
                  </tr>
                  <tr>
                    <th>'end'イベント</th>{" "}
                    <td>データの受け取りが完了すると発生するイベントです</td>
                  </tr>
                </table>
                <p>
                  インターネットではデータは一度にまとめて送られてくるわけではないという点です。長いテキストなどでは少しずつ何回かに分かれてデータが送られてくることもあります
                </p>
                <p>
                  ですから、dataイベントで受け取ったデータを変数などに保管していき、endイベントが起きたらそれまで送られたものすべてをまとめてエンコードして使うというようなやり方をしなければいけません。
                </p>
                <p>
                  endイベントに割り当てる関数に引数はありません。すべてのデータを受け取った後ですから、もう渡されるデータはないのです。
                </p>
                <div className="text-2xl text-center m-4 border-b-4 border-blue-400">
                  パーシャル
                </div>
                <p>
                  includeは＜%- %＞というタグを使って呼び出しますこれは＜%=
                  %＞と同じように内容を出力するものですが、出力内容をエスケープ処理しないようになっています。{" "}
                </p>
                <p>
                  ＜%=
                  %＞は出力するテキストにHTMLのタグなどが含まれていると自動的にエスケープ処理をして「HTMLタグのテキスト」として表示されるようになっています。
                </p>
                <p>
                  が、＜%- %＞はタグをそのままタグとして出力するようにします。
                </p>
                <p>
                  include関数は第一引数にパーシャルのファイル名を指定します。第二引数にはパーシャル側に渡す値をまとめたオブジェクトを用意します。
                </p>
                <Code12 />
                <p>
                  クッキーはWebブラウザに用意されているもので、サーバーから送られた値を保管しておくための仕組みです。サーバーとのやり取りはヘッダー情報として値をやり取りしている
                </p>
                <p>
                  サーバーからヘッダー情報としてクライアントにクッキーの情報が送られるとWebブラウザはそれをブラウザの中に保管します。
                </p>
                <p>
                  そしてサーバーにアクセスする際にはそのクッキー情報をヘッダーに追加して送ります。受け取ったサーバー側はそのクッキー情報を使って必要な処理を行い、またヘッダー情報として送り返すといったことを繰り返しているのです。
                </p>
                <p>
                  クッキーには日本語などを直接保管できない。クッキーは保管できる値の種類が限られているので、特殊な形式に変換して保管し、取り出したらまた変換して元のテキストに戻してやらないといけません。
                </p>
                <h4>クッキーに値を保存する</h4>
                <p>setCookieという関数はクッキーのキーと値、そしてresponseを引数に持ちます。</p>
                <p>クッキーに値を保存するにはまず保存する値を「エスケープ処理」します。これは要するに「クッキーに保存できる形式に変換する」処理のことです。</p>
                <p>変換された値が用意で来たらそれを指定のキーの値に設定して保存します。</p>
                <p>クッキーはそれぞれ名前(キー)とそれに設定される値がセットになっています。こうして用意した配列をSet-Cookieの値に用意し、setHeaderすればそれがクッキーとしてヘッダー情報に追加されてクライアントへ送られるのです</p>
                <h4>クッキーから値を取り出す</h4>
                <p>Cookieの値は['キー = 値','キー = 値']といった配列になっています。これは実際には'キー = 値;'キー = 値;'というようにセミコロンでつなげた1つのテキストの形でクッキーに保管されています</p>
                <p>クッキーの値を取り出すためにはまずこれらの値を1つ1つ切り離して取り出したいキーを探してその値だけを取り出さないといけません。</p>
                <p>requestのheadersはヘッダー情報がまとめられているプロパティでその中のcookieというプロパティにクッキーの値が保管されています。</p>
                <p>場合によってはクッキーがまだないこともあるのでこのcookieの値がundefined出ないならクッキーのテキストを取り出し、そうでない場合は空のテキストを返すようにしています。</p>
                <Code13 />
                <p>data[i]のテキストをトリム(前後の余白を取り除く)し、startsWithでkey + '='というテキストで始まっているかどうかをチェックするものです。</p>
                <p>これで始まっているならsubstringを使って'キー='の後のテキスト部分を取り出し、それをunescapeという関数を使ってクッキーの形式から普通のテキストに戻す処理</p>
                <p></p>
                <p>クライアントごとにデータを保存するものとしてローカルストレージがあります。これもブラウザにデータを保存するための機能</p>
                <p>ただ問題が1つあり、クライアント側でしか動かないということ</p>
                <p></p>
                <Code13 />
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="text-3xl m-4 text-center">作成されたファイル</div>
            <p>
              startprojectコマンドによって作成されたファイルの中身について見ていきます。
            </p>

            <div class="flex content-between">
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      _init_.pyファイル
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Her.
                  </p>
                  <a
                    href="http://www.agile-software.site/2022/04/23/init_-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      manage.pyファイル
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Herer.
                  </p>
                  <a
                    href="http://www.agile-software.site/2022/04/23/manage-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      asgi.pyファイル
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here .
                  </p>
                  <a
                    href="http://www.agile-software.site/2021/04/04/django/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      settings.pyファイル
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here
                  </p>
                  <a
                    href="http://www.agile-software.site/2021/04/24/django-mysite-setting-py/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      wsgi.pyファイル
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here.
                  </p>
                  <a
                    href="http://www.agile-software.site/2022/04/23/wsgi-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Nodejs_0>
      ) : id == "nodejs_detail_development" ? (
        <Nodejs_0>
          <div className="">
            <div className="border-2 border-pink-50 inline-block  h-2/4">
              <div></div>
              <div>
                <p>以下の関連記事においてNode.jsの開発環境構築してください。</p>
              </div>
            </div>
            <div className="text-3xl m-4">関連記事</div>

            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      node.js
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="http://www.agile-software.site/2021/05/06/node-js/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="/docs/images/blog/image-1.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      エラー集2 nodejsインストール時unable to locate package
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="http://www.agile-software.site/2022/03/21/%e3%82%a8%e3%83%a9%e3%83%bc%e9%9b%862-nodejs%e3%82%a4%e3%83%b3%e3%82%b9%e3%83%88%e3%83%bc%e3%83%ab%e6%99%82unable-to-locate-package/"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    記事を読む
                    <svg
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-2xl text-center m-4 border-b-4 border-blue-400"></div>
          </div>
        </Nodejs_0>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;

const Code1 = () => {
  const test = `
  const http = require('http');

  var server = http.createServer(
    (request,response)=>{
      response.end('Hello Node.js!');
    }
  );
  server.listen(3000);
     `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
    node
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code3 = () => {
  const test = `
    const http = require('http');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code4 = () => {
  const test = `
    const http = require('http');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code5 = () => {
  const test = `
    fs.readFile(ファイル名,エンコーディング,関数);
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code6 = () => {
  const test = `
    const http = require('http');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code7 = () => {
  const test = `
    const ejs = require('ejs');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code8 = () => {
  const test = `
    const index_page = fs.readFileSync('./index.ejs', 'utf8');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code9 = () => {
  const test = `
    <%=変数 %>
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code10 = () => {
  const test = `
    ejs.render(レンダリングするデータ,オブジェクト)
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code11 = () => {
  const test = `
    オブジェクト.on(イベント名,関数);
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code12 = () => {
  const test = `
    <%-  include(ファイル名 , {・・受け渡す値・・}) %>
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code13 = () => {
  const test = `
  data[i].trim().startsWith(key + '=')
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code14 = () => {
  const test = `
    const http = require('http');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Code15 = () => {
  const test = `
    const http = require('http');
       `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};
