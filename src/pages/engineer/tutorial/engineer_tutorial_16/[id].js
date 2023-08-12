import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_16 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
            <Layout_tutorial_16>
            <h3>はじめに </h3>
            <p>Django REST Framework と Next.js でシンプルなブログサイトを作成していきます。</p>
            <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
            <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
            <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>


            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
                <li>Django REST Framework で API 構築方法</li>
                <li>Next.js でサイト構築方法</li>
                <li>Django REST Framework と Next.js の連携方法</li>
                <li>TailwindCSS の使い方</li>
            </ul>

            <h3>機能 </h3>
            <ul className='list-disc'>
                <li>投稿一覧</li>
                <li>投稿詳細</li>
                <li>About</li>
            </ul>
            <h3>#エラーが発生した場合</h3>
            <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
            <ul className='list-disc'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Django</li>
            </ul>

            <p>では、始めて行きましょう！！</p>
        </Layout_tutorial_16 >
        ) : id == 2 ? (
            <Layout_tutorial_16>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <p>GitHub準備 </p>
            <p>GitHubのリポジトリを作成します。 </p>
            <p>.gitignore作成 </p>

            <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>

            <Tutorial1621 />

            <h3>仮想環境の作成 </h3>
            <p>myvenvという名前で仮想環境を構築します。 </p>

            <Tutorial1622 />
            <p>仮想環境の実行</p>
            <p>sourceコマンドで仮想環境を実行します。</p>
            <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
            <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
            <p>これがあると、仮想環境に入っていることになります。</p>
            <Tutorial1623 />
            <p>※ windows の方は別コマンドになります。</p>
            <h3>requirements.txt作成</h3>
            <p>開発で必要なパッケージを記載します。</p>
            <Tutorial1624 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">corsheaders:</span> django REST frameworkを使ってAPIエンドポイントをフロントエンド(APIにアクセスするためのURL)から叩く場合にはCORSの設定が必要
                </div>
            </div>

            <h3>パッケージのインストール</h3>
            <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
            <Tutorial1625 />
            <p>これで、Djangoで開発する準備ができました。</p>
        </Layout_tutorial_16 >
        ) : id == 3 ? (
            <Layout_tutorial_16>
            <h3>プロジェクト作成 </h3>
            <p>プロジェクトを作成します。</p>
            <p>プロジェクト名はmysiteです。 </p>
            <p>最後の.はディレクトリ直下にプロジェクトを作成するという意味です。</p>
            <Tutorial1631 />
            <h3>#環境設定変更</h3>
            <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
            <Tutorial1632 />
            <p>データベースのセットアップ </p>
            <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>
            <Tutorial1633 />
            <h3>#Webサーバーを起動する</h3>
            <p>Djangoが起動できるか確認しましょう。</p>
            <Tutorial1634 />
            <p>URLにアクセスすると、Webページが表示されます。</p>
            <p>http://127.0.0.1:8000/</p>
            <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>

        </Layout_tutorial_16 >
        ) : id == 4 ? (
            <Layout_tutorial_16>
            <h3>アプリケーション作成 </h3>
            <p>アプリケーションを作成してきます。 </p>
            <p>app という名前のアプリケーションを作成します。</p>

            <Tutorial1641 />
            <h3>管理ユーザー作成</h3>
            <p>管理ユーザーを作成しておきましょう。</p>
            <Tutorial1642 />
            <p>ユーザー名、メールアドレス、パスワードを入力します。 </p>
            <p>パスワードは見えないので、間違えずに入力して下さい</p>
            <h3>アプリケーションを使えるように設定</h3>
            <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
            <p>API を構築するにはDjango REST Frameworkを使用します</p>
            <p>リクエストを受け取るために、django-cors-headersを使用して、設定していきます</p>
            <p>INSTALLED_APPS に追加します</p>
            <p className='text-red-400'>mysite/settings.py</p>
            <Tutorial1643 />
            <h3>画像を使用するための設定</h3>
            <Tutorial1644 />
        </Layout_tutorial_16 >
        ) : id == 5 ? (
            <Layout_tutorial_16>
            <h3>Model追加</h3>
            <p>ブログに必要な項目をモデルに追加します。 </p>
            <p className='text-red-400'>app/models.py</p>
            <Tutorial1651 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div>
                    <span class="font-medium">verbose_name:</span> モデルのフィールドにverbose_nameを指定することで管理画面でフィールドの名前を指定することができる
                </div>
            </div>
            <h3>管理画面追加 </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <p className='text-red-400'>app/admin.py</p>
            <Tutorial1652 />
            <h3>データベース構築</h3>
            <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
            <Tutorial1653 />
            <p>サーバー起動</p>
            <Tutorial1654 />
            <p>データベース登録 </p>
            <p>管理画面に遷移して、Post データを登録してみましょう </p>
            <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
            <div className='flex'>
                <Image
                    className='m-2'
                    src="/images/programing/django/1.png"
                    alt=""
                    width={250}
                    height={250}
                />
                <Image
                    className='m-2'
                    src="/images/programing/django/2.png"
                    alt=""
                    width={250}
                    height={250}
                />
                <Image
                    className='m-2'
                    src="/images/programing/django/3.png"
                    alt=""
                    width={250}
                    height={250}
                />
            </div>
        </Layout_tutorial_16>
        ) : id == 6 ? (
            <Layout_tutorial_16>
            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial1661 />
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <p className='text-red-400'>app/urls.py</p>
            <Tutorial1662 />
        </Layout_tutorial_16>
        ) : id == 7 ? (
            <Layout_tutorial_16>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>app/serializers.py</p>
            <Tutorial1671 />
        </Layout_tutorial_16>
        ) : id == 8 ? (
          <Layout_tutorial_16>
          <h3>Views追加</h3>
          <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
          <p>それを継承することで、簡単に開発をすることができます </p>
          <div class="relative sm:rounded-lg">
              <table class="w-1/3 shadow text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              クラス
                          </th>
                          <th scope="col" class="px-6 py-3">
                              操作
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              CreateAPIView
                          </th>
                          <td class="px-6 py-4">
                              登録
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              ListAPIView
                          </th>
                          <td class="px-6 py-4">
                              一覧取得
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              RetrieveAPIView
                          </th>
                          <td class="px-6 py-4">
                              取得
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              UpdateAPIView
                          </th>
                          <td class="px-6 py-4">
                              更新
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              DestroyAPIView
                          </th>
                          <td class="px-6 py-4">
                              削除
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <p className='text-red-400'>app/views.py</p>
          <Tutorial1681 />

          <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
          <p>公式ドキュメント - Generic views </p>
      </Layout_tutorial_16>
        ) : id == 9 ? (
          <Layout_tutorial_16>
          <h3>API確認</h3>
          <p>サーバー起動</p>
          <p>サーバーを起動させます</p>

          <Tutorial1691 />
          <h3>API 画面</h3>
          <p>Django REST Framework には、API を管理する専用画面が用意されています。</p>

          <h4>一覧 </h4>
          <p>下記にアクセスすると、Post 一覧が表示されます。 </p>
          <p>http://127.0.0.1:8000/api/post/</p>
          <h4>詳細 </h4>
          <p>http://127.0.0.1:8000/api/post/1/</p>
          <p>Json</p>
          <p>API をコールすると、下記のような Json 形式でデータを取得することになります。</p>
          <Tutorial1692 />
          <p>フロントエンドからのリクエスト</p>
          <p>フロントエンドから GET、PUT、PUT/PATCH、DELETE などのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。 </p>
          <p>ぜひ API を活用した設計にしてみましょう。</p>
          <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
      </Layout_tutorial_16>
        ) : id == 10 ? (
          <Layout_tutorial_16>
          <h3>Next.js導入</h3>
          <p>Next.js とは？</p>
          <p>Next.js は React のライブラリとなります。</p>
          <p>React と組み合わせて開発を行い、サーバーサイドレンダリングを可能にします</p>
          <p>サーバー側で静的ファイルをレンダリングして、画面を表示するので、表示速度があがります</p>
          <p>静的ファイルを生成することができるので、SEO 的にも有利になります</p>
          <p>特徴</p>
          <p>React アプリのサーバーサイドレンダリング(SSR)を実現</p>
          <p>node/npm インストール</p>
          <p>node と npm がインストールされていることを確認します</p>
          <Tutorial16101 />
          <p>まだインストールされていない方は、インストールしてください</p>
          <p>node インストール </p>
          <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
          </div>
          <p>セットアップ </p>
          <p>Django とは別のフォルダを新規に作成します。 </p>
          <p>今回は、next-blog-tutorial というフォルダを作成しました。</p>
          <Tutorial16102 />
          <p>--use-npmは、npm でインストールするように指定しています </p>
          <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>
          <Tutorial16103 />
          <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
      </Layout_tutorial_16>
        ) : id == 11 ? (
          <Layout_tutorial_16>
          <h3>TailwindCSS導入</h3>
          <p>TailwindCSS を導入していきます。</p>
          <p>TailwindCSS とは？ </p>

          <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
          <p>Bootstrap などのフレームワークでは、ボタンなどのコンポーネントを活用してデザインをしていきます。 </p>
          <p>TailwindCSS では、コンポーネントは用意されておらず、utility class を使用してデザインを行っていきます。</p>
          <p>TailwindCSS の方がどんなデザインでも対応できます</p>

          <h3>TailwindCSS インストール </h3>
          <p>TailwindCSS は下記の公式ドキュメントを参考にインストールをしていきます。 </p>
          <div className='flex items-center justify-center shadow cursor-pointer'>
              <div>
                  <Link href="https://tailwindcss.com/docs/guides/nextjs">
                      <div className="">
                          <div class="text-xl">Install Tailwind CSS with Next.js - Tailwind CSS</div>
                          <div class="text-xl">Documentation for the Tailwind CSS framework.</div>
                      </div>
                  </Link>
              </div>
              <div class="">
                  <Image
                      className='m-2'
                      src="/images/programing/django/tail.jpg"
                      alt="tailwindcss.com thumbnail image"
                      width={256}
                      height={128}
                  />
              </div>
          </div>
          <Tutorial16111 />
          <p className='text-red-400'>tailwind.config.js</p>
          <Tutorial16112 />
          <p>元の CSS はすべて削除して、置き換えます。 </p>
          <p className='text-red-400'>styles/global.css</p>
          <Tutorial16113 />
          <p>不要ファイル削除 </p>
          <p>下記は不要なので削除します</p>

          <p>Home.module.css を削除します</p>
          <p>api フォルダを削除します。</p>
      </Layout_tutorial_16>
        ) : id == 12 ? (
          <Layout_tutorial_16>
          <h3>トップページ作成</h3>
          <p>トップページを修正していきます。</p>
          <Tutorial16121 />
          <p>サーバー起動</p>
          <Tutorial16122 />
          <p>画面を表示すると、TailwindCSSという文字が表示されているはずです。</p>
          <p>TailwindCSS</p>
          <p>ここで少し TailwindCSS でスタイルを適応してみましょう</p>
          <p>このチートシートを使用すると、どのクラス名を使用したらいいのかが分かります。</p>
    
          <p>TailwindCSS はclassNameを使用してスタイルを適応させます。。 </p>
          <Tutorial16123 />
    
          <p>この例は、画面の中央にfont-size:128pxのテキストを配置しました。</p>
          <p>TailwindCSSを使用すると簡単にスタイルを適応することができます </p>
          <p>チートシートを使用して、色々なスタイルを適応してみましょう。</p>
          <div className='justify-center flex'>
            <Image
              className='m-2 border border-black '
              src="/images/programing/django/4.png"
              alt="tailwindcss.com thumbnail image"
              width={600}
              height={675 / 2}
            />
          </div>
        </Layout_tutorial_16>
        ) : id == 13 ? (
          <Layout_tutorial_16>
          <h3>レイアウト作成</h3>
          <p>レイアウトコンポーネントを作成していきます。</p>
          <p>components フォルダを作成し、その中に layout フォルダを作成します</p>
          <p>layout フォルダを作成したら、layout.js ファイルを作成します</p>
          <p>layout.js ファイルには、共通のヘッダーやフッターを書いていきます </p>
          <p className='text-red-400'>components/layout/layout.js</p>
          <Tutorial16131 />
          <p>｛props.children｝の中に、各画面のデータが入っていきます。</p>
      </Layout_tutorial_16>
        ) : id == 14 ? (
            <Layout_tutorial_16>
            <h3>ナビゲーション作成</h3>
            <p>ナビゲーションコンポーネントを作成していきます。</p>
            <p>layout フォルダに navigation.js ファイルを作成します。</p>
            <p className='text-red-400'>components/layout/navigation.js</p>
            <Tutorial16141 />
          </Layout_tutorial_16>
        ) : id == 15 ? (
            <Layout_tutorial_16>
            <h3>_app.js修正</h3>
            <p>Next.js では App コンポーネントを使用して、全てのページを初期化しています</p>
            <p>_app.jsファイルを使用することで、デフォルトの App コンポーネントを上書きすることができます</p>
            <p>先ほど作成した共通レイアウトを持たせていきます</p>
            <p className='text-red-400'>pages/_app.js</p>
            <Tutorial16151 />
            <p>画面確認</p>
            <p>画面を確認すると、ヘッダーとフッターを表示することができました。</p>
        </Layout_tutorial_16>
        ) : id == 16 ? (
            <Layout_tutorial_16>
            <h3>aboutページ作成</h3>
            <p>Next.js では pages フォルダの中にファイルを作成するだけで、自動でルーティングが設定されます。</p>
            <p>pages/about.js ファイルを作成します。</p>
            <p>そうすると、/aboutに遷移することができます。</p>
            <p className='text-red-400'>pages/about.js</p>
            <Tutorial16161 />
            <p>画面確認</p>
            <p>about ページを表示することができました。</p>
        </Layout_tutorial_16>
        ) : id == 17 ? (
            <Layout_tutorial_16>
            <h3>トップページ修正</h3>
            <p>トップページを修正していきます。</p>
            <p>トップ画面をtop.pngとして、public ファルダに格納します。</p>
            <p className='text-red-400'>pages/index.js</p>
            <Tutorial16171 />
            <p>画面確認</p>
            <p>トップ画像が表示されました。</p>
          </Layout_tutorial_16>
        ) : id == 18 ? (
            <Layout_tutorial_16>
            <h3>APIコール</h3>
            <p>先ほど作成した、Django サーバーを起動して、API をコールできる状態にしておきます。</p>
            <Tutorial16181 />
            <p className='border-b-4 border-blue-400'>Next.js から Django の API をコールしていきます。</p>
            <p>lib フォルダを作成し、posts.js ファイルを作成します。</p>

            <p>ユーザー情報取得関数を追加します。</p>
            <p className='text-red-400'>lib/posts.js</p>
            <div className='flex'>
                <div className='w-1/2'>
                    <Tutorial16182 />
                </div>
                <div className='w-1/2 m-6'>
                    <p>➀は新しいURLオブジェクトを作成する構文</p>
                </div>
            </div>


            <Tutorial16183 />
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">map関数</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/09/11/map%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </Layout_tutorial_16>
        ) : id == 19 ? (
            <Layout_tutorial_16>
            <p>投稿コンポーネント作成</p>
            <p className='border-b-4 border-blue-400'>トップページに表示する投稿一覧のコンポーネントを作成していきます。</p>
            <p>components フォルダの中に post フォルダを作成し、post.js ファイルを作成します。</p>
            <p className='text-red-400'>components/post/post.js</p>
            <Tutorial16191 />
        </Layout_tutorial_16>
        ): id == 20 ? (
            <Layout_tutorial_16>
            <h2>投稿一覧表示</h2>
            <p>トップページに投稿一覧を表示させていきます</p>
            <p className='text-red-400'>pages/index.js</p>
            <Tutorial16201 />
            <h3>SSG</h3>
      
            <p>SSG はStatic Site Generationの略で、静的サイト生成です。</p>
            <p>ビルド時に HTML ファイルを生成して、リクエストがあったら、生成された HTML ファイルを返します。</p>
            <p>静的ファイルなので、とても早く表示させることができます。</p>
            <p>Next.js は SSG 用にgetStaticProps関数が用意されています。</p>
      
            <p>getStaticProps 内に外部データをコールする処理を書くと、ビルド時にサーバー側でデータを取得して HTML ファイルが生成されます。</p>
            <h3>ISR</h3>
            <p>ISR はIncremental Static Regenerationの略で、段階的な静的サイト生成です。</p>
            <p>ビルド時に HTML ファイルを生成して、stale-while-revalidate というキャッシュの仕組みを使用して、指定時間経過後にリクエストがあった場合は裏側で HTML を再生成し次のリクエスト時にはそれを返すといった仕組みです。</p>
            <p>Next.js では getStaticProps 関数でrevalidate: ＜秒数＞のオプションを指定することで使用することができます。</p>
      
            <p>今回は 3 秒としています。</p>
            <p>Django で登録した Post データが表示されました。</p>
          </Layout_tutorial_16>
        ) : id == 21 ? (
            <Layout_tutorial_16>
            <h3>投稿詳細表示</h3>
            <p>投稿詳細画面を作成していきます。</p>
            <p>pages フォルダに posts フォルダを作成し、[id].jsファイルを作成します。</p>
            <p>Next.js ではファイル名に[id].jsとすることで動的なルーティングを設定することができます</p>
            <p>今回は、posts/[id].jsとすることで[id]に post の id が入っていきます。 </p>
            <p>このように、投稿詳細画面を表示することができるようになります。</p>
            <p className='text-red-400'>pages/posts/[id].js</p>
            <Tutorial16211 />
            <h3>getStaticPaths</h3>
            <p>getStaticPaths は SSG(Static Site Generation) 用の関数であり、動的なルーティングの利用時に静的ファイルを生成します。</p>
            <p>getStaticPaths 関数で投稿一覧の ID を取得しています。</p>
      
      
            <p>画面確認</p>
            <p>各投稿をクリックすると、詳細画面を表示することができます。</p>
            <p>これで投稿一覧と詳細画面を作成することができました。</p>
          </Layout_tutorial_16>
        )  : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial1621 = () => {
    const test = `
    myvenv
    db.sqlite3
    .vscode
    __pycache__
    *.pyc
    .DS_Store
    media
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1622 = () => {
    const test = `
    $ python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1623 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1624 = () => {
    const test = `
    Django~=3.1.7
    django-cors-headers~=3.4.0
    djangorestframework~=3.11.1
    Pillow==8.1.2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1625 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1631 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1632 = () => {
    const test = `
    LANGUAGE_CODE = 'ja'

    TIME_ZONE = 'Asia/Tokyo'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1633 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1634 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1641 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py startapp app
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1642 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py createsuperuser
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1643 = () => {
    const test = `
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'app', # 追加
        'rest_framework', # 追加
        'corsheaders', # 追加
    ]
    
    MIDDLEWARE = [
        'corsheaders.middleware.CorsMiddleware', # 追加
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]
    
    # 追加 localhost:3000からのアクセスを許可します
    CORS_ORIGIN_WHITELIST = [
        "http://localhost:3000",
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1644 = () => {
    const test = `
    # 追加
    import os
    
    MEDIA_URL = '/media/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1651 = () => {
    const test = `
    from django.db import models


    class Post(models.Model):
        title = models.CharField('タイトル', max_length=50)
        image = models.ImageField(upload_to='images', verbose_name='イメージ画像')
        content = models.TextField('本文')
        created_at = models.DateTimeField('作成日', auto_now_add=True)
    
        def __str__(self):
            return self.title
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1652 = () => {
    const test = `
    from django.contrib import admin
    from .models import Post
    
    admin.site.register(Post)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1653 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py makemigrations
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1654 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1661 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    from django.conf.urls.static import static
    from django.conf import settings
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('app.urls')),
    ]
    
    if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1662 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    
    urlpatterns = [
        path('post/', views.PostView.as_view(), name='post'),
        path('post/<str:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    ]
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1671 = () => {
    const test = `
    from rest_framework import serializers
    from .models import Post
    
    
    class PostSerializer(serializers.ModelSerializer):
        created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
    
        class Meta:
            model = Post
            fields = ('id', 'title', 'image', 'content', 'created_at')
    
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1681 = () => {
    const test = `
    from rest_framework import generics
    from .serializers import PostSerializer
    from .models import Post
    
    
    class PostView(generics.ListAPIView):
        queryset = Post.objects.all()
        serializer_class = PostSerializer
    
    
    class PostDetailView(generics.RetrieveAPIView):
        queryset = Post.objects.all()
        serializer_class = PostSerializer
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1691 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1692 = () => {
    const test = `
    {
        "id": 1,
        "title": "xxxxxxx",
        "image": "http://127.0.0.1:8000/media/images/xxxx.png",
        "content": "xxxxxxxxxxxxxxxxxxxxxxx",
        "created_at": "2021-03-31 18:17"
        }
        
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16101 = () => {
    const test = `
    $ node -v
    $ npm -v
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16102 = () => {
    const test = `
    $ cd next-blog-tutorial
    $ npx create-next-app . --use-npm
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16103 = () => {
    const test = `
    npm run dev
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16111 = () => {
    const test = `
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16112 = () => {
    const test = `
    module.exports = {
        purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
        darkMode: false, // or 'media' or 'class'
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16113 = () => {
    const test = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16121 = () => {
    const test = `
  import Head from "next/head";
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>NextJS Startup</title>
        </Head>
        <h1>TailwindCSS</h1>
      </div>
    );
  }
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };
  
  const Tutorial16122 = () => {
    const test = `
      $ npm run dev
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };
  
  const Tutorial16123 = () => {
    const test = `
      import Head from "next/head";
  
      export default function Home() {
        return (
          <div>
            <Head>
              <title>NextJS Startup</title>
            </Head>
            <h1 className="text-9xl flex justify-center h-screen items-center text-indigo-500">
              TailwindCSS
            </h1>
          </div>
        );
      }
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

  const Tutorial16131 = () => {
    const test = `
import Navigation from "./navigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
        {props.children}
      </main>
      <footer className="flex items-center justify-center w-full h-20 text-sm border-t">
        © 2021 NextJS Startup
      </footer>
    </div>
  );
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16141 = () => {
    const test = `
      import Link from "next/link";
  
      export default function Navigation() {
        return (
          <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
            <Link href="/">
              <a className="text-4xl font-bold text-red-300">NextJS Startup</a>
            </Link>
            <nav className="ml-auto">
              <Link href="/about">
                <a className="mr-5">About</a>
              </Link>
            </nav>
          </header>
        );
      }
      
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

  const Tutorial16151 = () => {
    const test = `
    import "../styles/globals.css";

    import Head from "next/head";
    import Layout from "../components/layout/layout";
    
    function MyApp({ Component, pageProps }) {
      return (
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      );
    }
    
    export default MyApp;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16161 = () => {
    const test = `
    export default function About() {
      return <div>about</div>;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16171 = () => {
    const test = `
      import Image from "next/image";
      import Head from "next/head";
      
      export default function Home() {
        return (
          <div>
            <Head>
              <title>NextJS Startup</title>
            </Head>
            <div className="mb-10 p-3 border rounded">
              <Image
                className="object-cover rounded"
                src="/top.png"
                alt="top"
                width={1280}
                height={500}
              />
            </div>
            <div className="flex justify-center flex-col items-center mb-10">
              <div className="text-lg mb-3">BLOG POSTS</div>
              <div className="border w-14"></div>
            </div>
          </div>
        );
      }
      
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

  const Tutorial16181 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16182 = () => {
    const test = `
import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// 投稿一覧を取得　➀
export async function getAllPostsData() {
  const res = await fetch(new URL());
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL());
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getPostData(id) {
  const res = await fetch(new URL());
  const post = await res.json();
  return post;
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial16183 = () => {
    const test = `
    const res = await fetch(new URL());
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16191 = () => {
    const test = `
    import Link from "next/link";

    export default function Post({ post }) {
      return (
        <Link href=>
          <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
            <img alt="post" className="object-cover" src={post.image} />
            <div className="text-center my-4">
              <p>{post.title}</p>
            </div>
          </div>
        </Link>
      );
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16201 = () => {
    const test = `
      import Image from "next/image";
      import Head from "next/head";
      
      import Post from "../components/post/post";
      import { getAllPostsData } from "../lib/posts";
      
      export default function Home({ posts }) {
        return (
          <div>
            <Head>
              <title>NextJS Startup</title>
            </Head>
            <div className="mb-10 p-3 border rounded">
              <Image
                className="object-cover rounded"
                src="/top.png"
                alt="top"
                width={1280}
                height={500}
              />
            </div>
            <div className="flex justify-center flex-col items-center mb-10">
              <div className="text-lg mb-3">BLOG POSTS</div>
              <div className="border w-14"></div>
            </div>
            <div className="flex flex-wrap -m-4 mb-5">
              {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
          </div>
        );
      }
      
      export async function getStaticProps() {
        const posts = await getAllPostsData();
      
        return {
          props: { posts },
          revalidate: 3,
        };
      }
      
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

  const Tutorial16211 = () => {
    const test = `
      import { useRouter } from "next/router";
      import { getAllPostIds, getPostData } from "../../lib/posts";
      
      export default function PostData({ post }) {
        const router = useRouter();
      
        if (router.isFallback || !post) {
          return <div>Loading...</div>;
        }
      
        return (
          <div className="space-y-5 w-full">
            <div className="flex justify-center flex-col items-center mb-5">
              <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
              <p className="mb-3">{post.created_at}</p>
              <div className="border w-14"></div>
            </div>
            <p className="whitespace-pre-wrap">{post.content}</p>
          </div>
        );
      }
      
      // 投稿一覧の ID を取得
      export async function getStaticPaths() {
        const paths = await getAllPostIds();
      
        return {
          paths,
          fallback: true,
        };
      }
      
      // 投稿詳細のデータを取得
      export async function getStaticProps({ params }) {
        const post = await getPostData(params.id);
        return {
          props: {
            post,
          },
          revalidate: 3,
        };
      }
      
      `
    return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
      </SyntaxHighlighter>
    );
  };

