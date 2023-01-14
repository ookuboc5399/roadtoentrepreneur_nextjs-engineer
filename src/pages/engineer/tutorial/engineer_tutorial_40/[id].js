import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_44 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_40>
                  <h3>Redux + React Hooks + TypeScript COVID19 </h3>
                 
                  <h3>目標</h3>
                  <p>下記を学習していきます。 </p>
                  <ul className='list-disc'>
                      <li>Django REST Framework で API 構築方法</li>
                      <li>Next.js でサイト構築方法</li>
                      <li>Django REST Framework と Next.js の連携方法</li>
                      <li>TailwindCSS の使い方</li>
                  </ul>
      
                  <div className="text-3xl m-4">
                      Youtube
                  </div>
                  <div className="flex justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Ym6RYyRBPaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
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
                  </Layout_tutorial_40>
                ) : id == 2 ? (
                  <Layout_tutorial_40>
                  <h3>プロジェクト作成 </h3>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
      
                  <p> </p>
                  <p> </p>
      
                  <Tutorial4021 />
      
                  <h3></h3>
                  <p>Reactのfunctionalコンポーネントに対する型 </p>
                  <p>useStateのジェネリックスの型にユニオンタイプを使うとstringかnumberのどちらか1つ</p>
                  <p> </p>
                  <Tutorial4022 />
                  <h3>入力フォームイベントオブジェクトデータ型</h3>
                  <p>inputステートを出力する</p>
                  <p></p>
                  <p></p>
                  <Tutorial4023 />
                  <h3>useEffect</h3>
                  <p>Reactのfunctionalコンポーネントの型を指定</p>
      
                   <h4>Barチャート</h4>
                   <p></p>
                  
                  <p></p>
      
                  </Layout_tutorial_40>
                ) : id == 3 ? (
                  <Layout_tutorial_40>
                  <h3>Material UI</h3>
                  <p></p>
                 
                  <h4>ヘッダーとフッターを削除</h4>
                   <p>layout.tsxにおいて＜Header /＞と＜Footer /＞を削除します。</p>
                  <Tutorial4031 />
                  <p className='text-red-400'>MaterialUI.tsx</p>
                  <p>。</p>
                  <Tutorial4032 />
                  <p></p>
                  <h4>makeStyles</h4>
                  <Tutorial4033 />
                  <p>。</p>
                  <p>。</p>
      
      
              </Layout_tutorial_40>
                ) : id == 4 ? (
                  <Layout_tutorial_40>
                  <h3>プロジェクト作成 </h3>
                  <p>covid_dashboardという名前でフォルダを作成します。 </p>
                  <p>下記コマンドでプロジェクトを作成します。</p>
                  <Tutorial1941 />
                  
                  <p>npm startでローカルサーバーが立ち上がります</p>
                  <p>Redux DevToolsでStateを見ることが出来る</p>
                  <h4>モジュールのインポート</h4>
                  <p>外部のAPIにaxiosを使ってアクセスする</p>
                  <Tutorial1945 />
                  <p>matarialUIのインストール</p>
                  <Tutorial1942 />
                  <p>グラフを使うためにchart.jsをインストール</p>
                  <Tutorial1943 />
                  <p>reactのchart.jsもインストール</p>
                  <Tutorial1944 />
                  <p>1秒かけて設定した値まで動的に</p>
                   <Tutorial1947 />
                   <p>アイコン</p>
                   <Tutorial1948 />           
      
                  <p></p>
                  </Layout_tutorial_40>
                ) : id == 5 ? (
                  <Layout_tutorial_40>
                  <h3>Resux Tool Kit</h3>
                  <p>数値型。 </p>
                   <p>sliceの名前はcounter。第二引数に作成したinitialState。reducersというところにactionを記載</p>
                   <p>incrementは今のstateに+1をする処理。このincrementがReactのコンポーネントからdispatchを使って呼び出される</p>
                  <p className='text-red-400'>features/counter/counterSlice.ts</p>
                  <p>incrementByAmountではPayloadActionによってnumberの値を受け取れる </p>
                  <p>この3つをReactのコンポーネントで使えるようにexport</p>
                      <p>stateの中のcounterの値をselectCountに代入している</p>
                      <p>sliceを複数作った場合RootStateはオブジェクト状にひとまとめにしてくれる。 </p>
                  <Tutorial1951 />
                  <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                      <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <div>
                          <span class="font-medium">verbose_name:</span> 
                      </div>
                  </div>
                  <h3>Google Chrome拡張機能のJSON Formatterをインストールして下さい。</h3>
      
      https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=ja-JP
                          
      
                 
                  </Layout_tutorial_40>
                ) : id == 6 ? (
                  <Layout_tutorial_40>
                  <h3>Covid19用のSliceを</h3>
                  <p>featuresの直下にcovidという名前でフォルダーを作ります</p>
                  <p>covidSlice.tsというファイルを作成する </p>
                  <p>createSliceとcreateAsyncThunkをインポート。createSliceはSliceを作るものでcreateAsyncThunkは非同期の</p>
                  <p>RootStateはappフォルダーのstore.tsでexportされている</p>
      
                  <p>covidフォルダ内にdata.jsonと時系列データのdataDaily.json</p>
                  <p>この2つのファイルをインポート。</p>
                    <p>typeofを使ってdataJsonの型を取得</p>
                    <h4>slice全体のstateの構造を定義</h4>
                    <h4>initialStateを定義</h4>
                    <p>dataには初期値。countryは空の文字列</p>
                    <p></p>
                    <p></p>
                      <h4>sliceの作成</h4>
                    <p></p>
                    <p></p> 
                    <p></p>
                  <p className='text-red-400'>app/urls.py</p>
                  <Tutorial1662 />
                  </Layout_tutorial_40>
                ) : id == 7 ? (
                  <Layout_tutorial_40>
                  <h3>Serializer追加</h3>
                  <p>Serializer とは？</p>
                  <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                  <p>serializers.py ファイルを作成します</p>
                  <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                  <p className='text-red-400'>app/serializers.py</p>
                  <Tutorial1671 />
                  </Layout_tutorial_40>
                ) : id == 8 ? (
                  <Layout_tutorial_40>
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
                  </Layout_tutorial_40>
                ) : id == 9 ? (
                  <Layout_tutorial_40>
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
                  </Layout_tutorial_40>
                ) : id == 10 ? (
                  <Layout_tutorial_40>
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
                              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                  </Layout_tutorial_40>
                ) : id == 11 ? (
                  <Layout_tutorial_40>
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
                  </Layout_tutorial_40>
                ) : id == 12 ? (
                  <Layout_tutorial_40>
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
                  </Layout_tutorial_40>
                ) : id == 13 ? (
                  <Layout_tutorial_40>
                  <h3>レイアウト作成</h3>
                  <p>レイアウトコンポーネントを作成していきます。</p>
                  <p>components フォルダを作成し、その中に layout フォルダを作成します</p>
                  <p>layout フォルダを作成したら、layout.js ファイルを作成します</p>
                  <p>layout.js ファイルには、共通のヘッダーやフッターを書いていきます </p>
                  <p className='text-red-400'>components/layout/layout.js</p>
                  <Tutorial16131 />
                  <p>｛props.children｝の中に、各画面のデータが入っていきます。</p>
                  </Layout_tutorial_40>
                ) : id == 14 ? (
                  <Layout_tutorial_40>
                  <h3>ナビゲーション作成</h3>
                  <p>ナビゲーションコンポーネントを作成していきます。</p>
                  <p>layout フォルダに navigation.js ファイルを作成します。</p>
                  <p className='text-red-400'>components/layout/navigation.js</p>
                  <Tutorial16141 />
                  </Layout_tutorial_40>
                ) : id == 15 ? (
                  <Layout_tutorial_40>
                  <h3>_app.js修正</h3>
                  <p>Next.js では App コンポーネントを使用して、全てのページを初期化しています</p>
                  <p>_app.jsファイルを使用することで、デフォルトの App コンポーネントを上書きすることができます</p>
                  <p>先ほど作成した共通レイアウトを持たせていきます</p>
                  <p className='text-red-400'>pages/_app.js</p>
                  <Tutorial16151 />
                  <p>画面確認</p>
                  <p>画面を確認すると、ヘッダーとフッターを表示することができました。</p>
                  </Layout_tutorial_40>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial4021 = () => {
  const test = `
npx create-reactbricks-app
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4022 = () => {
  const test = `
  ? Do you already have a React Bricks account? (Y/n) y
  ? Please, enter your React Bricks account e-mail: ankle0614@gmail.com
  ? Password: **********
  ? Choose your app or create a new one: portfolio-yt-app
  ? Project name (insert a valid package name): portfolio-yt-app
  ? Folder name: portfolio-yt-app
  ? What would you like to create today? Website and Blog with Tailwind
  ? Select framework: Next.js (i18n ready)
  ? Do you want to load default content? (Y/n) y
    ✔ Downloading starter
    ✔ Downloading starter
    ✔ Downloading starter
    ✔ Downloading starter
    ✔ Downloading starter
    ✔ Setting project configurations
    ✔ Saving app credentials
    ✔ Installing dependencies
    ✔ Setting up git repository
    ✔ Loading default content
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4023 = () => {
  const test = `
  import React from 'react';
  import { Line } from "react-chartjs-2";
  
  const data = {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets: [
          labels: "Demo Line plot",
          backgroundColor: "#008080",
          borderColor: "#7fffd4",
          pointBorderWidth: 10,
          data: [5,6,9,15,30,40,80]
      ]
      );
  }
  
  export default App;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4031 = () => {
  const test = `
  npm install @material-ui/core --legacy-peer-deps
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4032 = () => {
  const test = `
  import React, { ReactNode } from 'react'
  import Header from './header'
  import Footer from './footer'
  interface LayoutProps {
    children?: ReactNode
  }
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <div className="flex flex-col h-screen justify-between font-content antialiased">
        <Header /> 　　　　//削除
        <main className="mb-auto">{children}</main>
        <Footer /> 　　　　//削除
      </div>
    )
  }
  export default Layout
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4033 = () => {
  const test = `
import React from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle:{
      background:"green",
      padding:"3px 50px"
  }
})


const MaterialUI: React.FC = () =>{
  const classes = useStyle();
  return(
      <div>
        <Button className={classes.btnStyle} variant="contained" color="primary">
          Test Button
        </Button>
      </div>
  );
};

export default MaterialUI;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1941 = () => {
  const test = `
  npx create-react-app . --template redux-typescript --use-npm
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1942 = () => {
  const test = `
  npm i @material-ui/core --legacy-peer-deps
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1943 = () => {
  const test = `
  npm install chart.js@2.9.3
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1944 = () => {
  const test = `
  npm install react-chartjs-2@2.9.0 --legacy-peer-deps
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1945 = () => {
  const test = `
 npm install axios
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1947 = () => {
  const test = `
  npm install react-countup
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1948 = () => {
  const test = `
  npm install react-icons
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1951 = () => {
  const test = `

  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { AppThunk, RootState } from '../../app/store';
  
  // ここでstateに保存する形を定義する
  interface CounterState {
    value: number;
  }
  // 初期値を定義する
  const initialState: CounterState = {
    value: 0,
  };
  
  // Reducerの定義をする
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: state => {
        state.value += 1;
      },
    },
  });
  
  export const { increment } = counterSlice.actions;
  
  export const selectCount = (state: RootState) => state.counter.value;
  
  export default counterSlice.reducer;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1952 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1953 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1954 = () => {
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
