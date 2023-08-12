import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_22 } from '../../../../components/layout/engineer/tutorial';
import { Map } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_22>
            <h3>はじめに </h3>
            <p></p>
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
            <div className="text-3xl m-4">
              Youtube
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/HMdwbq1JJT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_22>
        ) : id == 2 ? (
          <Layout_tutorial_22>
            <h3>準備 </h3>
            <p>ファルダを作成し、その直下にLinux環境でプロジェクトを作成します</p>
            <p></p>
            <p></p>

            <Tutorial2221 />
            <Tutorial2222 />

            <Tutorial2223 />
            <p>インストールが成功しました</p>

            <h4>TailwindCSS導入</h4>
            <Tutorial2224 />
            <p>初期化</p>
            <Tutorial2225 />
            <p>tailwind.config.jsの中身を変更します。</p>
            <Tutorial2226 />
            <p>stylesのglobals.cssの中身を変更します。</p>
            <Tutorial2227 />
            <p>npm devでサーバーを立ち上げましょう。Next.jsが表示されました。</p>



            <h4>Moralis連携</h4>
            <p>下記記事を参考に新しいサーバーを作成しましょう。</p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Moralis</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/05/15/moralis/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <h4>Netlify連携</h4>
            <p>Netlifyを使えばGitHubにあるプロジェクトを簡単にデプロイすることが出来ます。</p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Moralis</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/05/15/moralis/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <p>プロジェクトにMoralisやiconをインストールします</p>
            <Tutorial2228 />
            <Tutorial2229 />
            <Tutorial22210 />
            <Tutorial22211 />
            <p className='text-xl border-b-4 border-blue-400'>index.js修正</p>
            <p>必要ないコードを削除します。</p>
            <Tutorial22212 />
          </Layout_tutorial_22>
        ) : id == 3 ? (
          <Layout_tutorial_22>
            <h3>Sidebar.js作成</h3>
            <p className='text-red-400'>components/Sidebar.js</p>
            <Tutorial2231 />
            <p> </p>
            <p>認証済みのユーザーの場合はアバター画像を表示させコンポーネントをimportします</p>
            <Tutorial2234 />
            <Tutorial2235 />
            <h3>.envファイル</h3>
            <p>MoralisのServer Detailに表示されているServer URLとApplication IDを.envファイルに設定</p>
            <Tutorial2232 />
            <h3>app.jsファイル</h3>
            <p>MoralisProviderを使って</p>
            <p>Server URLとApplication IDは.envファイルで設定したものとする</p>
            <p className='text-red-400'>pages/api/app.js</p>
            <p></p>
            <p></p>

            <p>サーバーを起動して表示を確認しましょう。</p>
            <h3>assetsフォルダの作成</h3>
            <p>表示させるNFTの画像を格納</p>
          </Layout_tutorial_22>
        ) : id == 4 ? (
          <Layout_tutorial_22>
            <h3>AmazonContext.js作成</h3>
            <p className='text-red-400'>context/AmazonContext.js</p>
            <Tutorial2241 />


            <h4>app.jsファイルに作成したAmazonContextを適用</h4>
            <Tutorial2242 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium"></span>
              </div>
            </div>
            <p className='text-xl border-b-4 border-blue-400'>useState</p>
            <p></p>
            <Tutorial2243 />
            <p className='text-xl border-b-4 border-blue-400'>useEffect</p>
            <p></p>
            <Tutorial2244 />
            <h4>set Nicknameボタンをクリックしたとき関数</h4>
            <p>ユーザーかつnicknameがあるなら設定、nicknameがない場合「Can&apos;t set empty nickname」と表示する。</p>
            <p>ユーザー出ない場合「No user」と表示する</p>
            <Tutorial2245 />
          </Layout_tutorial_22>
        ) : id == 5 ? (
          <Layout_tutorial_22>
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
          </Layout_tutorial_22>
        ) : id == 6 ? (
          <Layout_tutorial_22>
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
   
          </Layout_tutorial_22>
        ) : id == 7 ? (
          <Layout_tutorial_22>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>app/serializers.py</p>
           
          </Layout_tutorial_22>
        ) : id == 8 ? (
          <Layout_tutorial_22>
            <h3>はじめに </h3>
            <p></p>
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
            <div className="text-3xl m-4">
              Youtube
            </div>
            <div className="grid grid-cols-3">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/oq0B7XUNbtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VA-UN_6oNG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
            <ul className='list-disc'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Django</li>
            </ul>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_22>
        ) : id == 9 ? (
          <Layout_tutorial_22>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial2291 />
            <h3>index.tsx</h3>
            <p>必要ないコードは削除します。</p>
            <p>index.tsxにHeaderコンポーネントを読み込ませておきます</p>
            <Tutorial2292 />
            <h3>next.config.js</h3>
            <p> 外部URLの画像を使うときには外部ドメインを設定しておく必要がある。</p>
            <Tutorial2293 />
            <h3>heroiconsインストール</h3>
            <p> 。</p>
            <Tutorial2294 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            </div>
          </Layout_tutorial_22>
        ) : id == 10 ? (
          <Layout_tutorial_22>
            <h3>検索</h3>
            <p>divタグにflex-grow、inputタグにflex-growを適用することで要素が横に広がる</p>
            <Tutorial22101 />
            <h3>Header.js</h3>
            <p>index.tsxにHeaderコンポーネントを読み込ませておきます</p>
            <Tutorial22102 />
            <h3>独自のユーティリティクラス</h3>
            <p> 。</p>
            <Tutorial22103 />
            <Tutorial22105 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            </div>

          </Layout_tutorial_22>
        ) : id == 11 ? (
          <Layout_tutorial_22>
            <h3></h3>
            <p>Banner.jsを作成</p>
            <p>index.jsにBannerコンポーネントを読み込ませておきます</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial22111 />
            <h3></h3>
            <p>Reactでカルーセルを利用することができる</p>
            <Tutorial22112 />
            <h3></h3>
            <p> 。</p>
            <p className='text-red-400'>components/Banner.js</p>
            <Tutorial22113 />
          </Layout_tutorial_22>
        ) : id == 12 ? (
          <Layout_tutorial_22>
            <h3>ProductFeed</h3>
            <p>Banner.jsを作成</p>
            <p>index.jsにBannerコンポーネントを読み込ませておきます</p>
            <p>事前にデータを用意したものを表示させる</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial22123 />
            <h3>fakeAPI</h3>
            <p>Banner.jsを作成</p>
            <h3>Product</h3>
            <p>ratingの数だけfill()メソッドで配列を作ってmap関数で配列の長さ分繰り返している。</p>
            <p>第一引数のvalueは必要ないため_、第二引数のindexを指定しています</p>
            <p className='text-red-400'>components/Product.js</p>
            <Tutorial22124 />
            <Map />

            <h3>react currency formatterのインストール</h3>
            <p>react@16.xとバージョンが16以上だとエラーになります。</p>
            <Tutorial22125 />
            <h3>description</h3>
            <p>2行だけ表示するように。</p>
            <p className='text-red-400'>components/Product.js</p>
            <Tutorial22126 />
            <h3>独自のユーティリティクラス</h3>
            <p></p>
            <p className='text-red-400'>styles/global.css</p>
            <Tutorial22127 />

          </Layout_tutorial_22>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2221 = () => {
  const test = `
mkdir amazon-clone-blockchain
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2222 = () => {
  const test = `
cd amazon-clone-blockchain
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2223 = () => {
  const test = `
npx create-next-app@latest .
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2224 = () => {
  const test = `
  npm add -D tailwindcss postcss autoprefixer
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2225 = () => {
  const test = `
npx tailwindcss init -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2226 = () => {
  const test = `
  module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2227 = () => {
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



const Tutorial2228 = () => {
  const test = `
  npm add moralis react-moralis
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2229 = () => {
  const test = `
  npm add react-icons react-spinners react-simple-hook-modal
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22210 = () => {
  const test = `
  npm add @walletconnect/web3-provider @web3auth/web3auth ethers
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22211 = () => {
  const test = `
  npm add magic-sdk moment web3uikit
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22212 = () => {
  const test = `
  const styles = {
      container: ’h-full w-full flex bg-[#fff]’,
    }
    
    export default function Home() {
      return (
        <div className={styles.container}>
          <Sidebar />
          <Main />
        </div>
      )
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2231 = () => {
  const test = `
  import type { NextPage } from 'next'
  import Head from 'next/head'
  const Home: NextPage = () => {
    return (
      <div className="">
        <Head>
          <title>Twitter 2.0</title>
        </Head>
        <main>
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </main>
      </div>
    )
  }
  export default Home
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2232 = () => {
  const test = `
  NEXT_PUBLIC_MORALIS_SERVER=https://cc6hvjbkhcwo.usemoralis.com:2053/server
  NEXT_PUBLIC_MORALIS_APP_ID=ll7wj0A1O0GpnUjdjiAmOhAvCOpTHBOH91n5qyXM
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2233 = () => {
  const test = `
  import '../styles/globals.css'
  import { MoralisProvider } from 'react-moralis'
  import { AmazonProvider } from '../context/AmazonContext'
  import { ModalProvider } from 'react-simple-hook-modal'
  
  function MyApp({ Component, pageProps }) {
    return (
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
        appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      >
        <AmazonProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </AmazonProvider>
      </MoralisProvider>
    )
  }
  
  export default MyApp
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2234 = () => {
  const test = `
<div className={styles.profile}>
{isAuthenticated && (
  <>
    <div className={styles.profilePicContainer}>
      <Image
        src={’https://avatars.dicebear.com/api/pixel-art/＄{username}.svg’}
        alt='profile'
        className={styles.profilePic}
        height={100}
        width={100}
      />
    </div>
    {!username ? (
      <>
        <div className={styles.username}>
          <input
            type='text'
            placeholder='Username....'
            className={styles.usernameInput}
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
        </div>
        <button
          className={styles.setNickname}
          onClick={handleSetUsername}
        >
          Set Nickname
        </button>
      </>
    ) : (
      <div>
        <div className={styles.welcome}>Wecome {username}</div>
      </div>
    )}
  </>
)}
<div className={styles.connectButton}>
  <ConnectButton />
</div>
</div>
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2235 = () => {
  const test = `
<div className={styles.menu}>
<Link href='/'>
  <div className={styles.menuItem}>
    <Image
      src={logo}
      height={30}
      width={30}
      className={styles.amazonLogo}
    />
    My Amazon
    <br /> Board
  </div>
</Link>
<div className={styles.menuItem}>
  <FaBox />
  Collections
</div>
<div className={styles.menuItem}>
  <BsFillBookmarkFill />
  Saved
</div>
<div className={styles.menuItem}>
  <BsFillPersonFill />
  Profile
</div>
<Link href='/history'>
  <div className={styles.menuItem}>
    <AiOutlineHistory />
    Transaction History
  </div>
</Link>
</div>
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2241 = () => {
  const test = `
  import { createContext, useState, useEffect } from 'react'
  import { useMoralis, useMoralisQuery } from 'react-moralis'

  export const AmazonContext = createContext()

  export const AmazonProvider = ({ children }) => {

  return (
      <AmazonContext.Provider
        value={{
      
        }}
      >
        {children}
      </AmazonContext.Provider>
    )
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2242 = () => {
  const test = `
  import '../styles/globals.css'
  import { MoralisProvider } from 'react-moralis'
  import { AmazonProvider } from '../context/AmazonContext'
  
  function MyApp({ Component, pageProps }) {
    return (
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
        appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      >
        <AmazonProvider>
            <Component {...pageProps} />
        </AmazonProvider>
      </MoralisProvider>
    )
  }
  
  export default MyApp
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2243 = () => {
  const test = `
  const [nickname, setNickname] = useState('')
  const [username, setUsername] = useState('')

  const {
      authenticate,
      isAuthenticated,
      enableWeb3,
      Moralis,
      user,
      isWeb3Enabled,
    } = useMoralis()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2244 = () => {
  const test = `
  useEffect(async () => {
         
      if (isAuthenticated) {
          const currentUsername = await user?.get('nickname')
          setUsername(currentUsername)
      }
  })()
},[isAuthenticated,user,username,])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2245 = () => {
  const test = `
  const handleSetUsername = () => {
      if (user) {
        if (nickname) {
          user.set('nickname', nickname)
          user.save()
          setNickname('')
        } else {
          console.log("Can't set empty nickname")
        }
      } else {
        console.log('No user')
      }
    }
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






const Tutorial2291 = () => {
  const test = `
  npx create-next-app@latest -e with-tailwindcss amazon-nextjs
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2292 = () => {
  const test = `
  const Home: NextPage = () => { 
    return ( 
      <div className="flex min-h-screen flex-col items-center justify-center py-2"> 
        <Head> 
          <title>Create Next App</title> 
          <link rel="icon" href="/favicon.ico" /> 
        </Head> 
      </div> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2293 = () => {
  const test = `
  /** @type {import('next').NextConfig} */ 
  module.exports = { 
    reactStrictMode: true, 
    images: { 
      domains: ["links.papareact.com", "fakestoreapi.com"], 
    }, 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2294 = () => {
  const test = `
  npm i heroicons-react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22101 = () => {
  const test = `
<div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer"> 
  <input className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4" 
   type="text"  
   /> 
  <SearchIcon className="h-12 p-4" /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial22102 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial22103 = () => {
  const test = `
  <div 
  onClick={!session ? signIn : signOut} 
  className="cursor-pointer link" 
>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22104 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22105 = () => {
  const test = `
  @layer components { 
    .link { 
      @apply hover:underline cursor-pointer; 
    } 
     
    .button { 
      @apply p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500; 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22111 = () => {
  const test = `
<main className="max-w-screen-2xl mx-auto"> 
  <Banner /> 
</main>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22112 = () => {
  const test = `
  npm install react-responsive-carousel
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22113 = () => {
  const test = `
  @layer components { 
    .link { 
      @apply hover:underline cursor-pointer; 
    } 
     
    .button { 
      @apply p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500; 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22121 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22122 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22123 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22124 = () => {
  const test = `
  const MAX_RATING = 5; 
  const MIN_RATING = 1;
    const [rating] = useState( 
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING 
    );

  <div className="flex"> 
    {Array(rating) 
      .fill() 
      .map((_, i) => ( 
        <StarIcon key={i} className="h-5 text-yellow-500" /> 
      ))} 
  </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22125 = () => {
  const test = `
  npm i react-currency-formatter
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22126 = () => {
  const test = `
  <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22127 = () => {
  const test = `
  .button { 
    @apply p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500; 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22128 = () => {
  const test = `
  <p className="text-xs mt-2 mb-2 line-clamp-2">{description}</p>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};