import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_20 } from '../../../../components/layout/engineer/tutorial';
import { Moralis, Netlify } from '../../../../components/Blog_comp';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_20>
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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fim8DfBPVks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    </Layout_tutorial_20>
                ) : id == 2 ? (
                    <Layout_tutorial_20>
                        <h3>準備 </h3>

                        <p>Linux環境でプロジェクトを作成します</p>
                        <p></p>
                        <p></p>

                        <Tutorial2021 />
                        <p>以下のメッセージが表示されたらyでcreate-next-app@latestのpachagesをインストールします。 </p>

                        <Tutorial2022 />
                        <p>インストールが成功しました</p>
                        <Tutorial2023 />
                        <p>作成したcoinnmarketcap-clone-blockchainフォルダに移動します。</p>
                        <Tutorial2024 />
                        <p>tailwind.config.jsがすでにインストールされています</p>
                        <p>yarn devでサーバーを立ち上げましょう。Next.jsが表示されました。</p>

                        <h4>Netlify連携</h4>
                        <p></p>
                        <Netlify />
                        <Tutorial2025 />
                        <p>下記コマンドでサーバーを立ち上げるとhttp://localhost:8888でプロジェクトを確認できます。</p>

                        <Tutorial2026 />

                        <Tutorial2027 />
                        <h4>デプロイ</h4>
                        <p>Githubで新しくリポジトリを作成します。</p>
                        <p>netlifyのdeploy画面で作成したリポジトリを選択する</p>
                        <h4>Moralis連携</h4>
                        <Moralis />
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Layout_tutorial_20>
                ) : id == 3 ? (
                    <Layout_tutorial_20>
                        <h3></h3>
                        <p>必要ないコードを削除します。</p>
                        <Tutorial2031 />
                        <p>componentsフォルダを作成し、Header.jsファイルを作りましょう </p>
                        <p>rafceでコンポーネントを作成したらindex.tsxでHeaderコンポーネントをimportします</p>
                        <p className='text-red-400'>components/Header.js</p>
                        <Tutorial2032 />
                        <h3>coinmarketcapのロゴを表示させます</h3>
                        <p></p>
                        <p></p>
                        <h4>next.config.js設定</h4>
                        <Tutorial2033 />
                        <h4>assetsフォルダ作成</h4>
                        <h4>search.jsを追加</h4>
                        <Tutorial2034 />

                        <h4>package.jsonに追加</h4>
                        <Tutorial2035 />
                        <h4>インストール</h4>
                        <Tutorial2036 />
                        <h4>ConnectButton作成</h4>
                        <p></p>
                        <p className='text-red-400'>.env.local</p>
                        <Tutorial2037 />
                        <p className='text-red-400'>app.tsx</p>
                        <Tutorial2038 />
                        <p className='text-red-400'>components/Header.js</p>
                        <Tutorial2039 />

                    </Layout_tutorial_20>
                ) : id == 4 ? (
                    <Layout_tutorial_20>
                        <h3>UseState </h3>
                        <p>アプリケーションを作成してきます。 </p>
                        <p>useStateをインポート</p>


                        <p>カウンターをボタンで。countという関数名変更するためのsetCount。useState(0)で初期値を0に設定</p>

                        <p>ボタンを押したら状態のcountが1ずつ増えていくように</p>

                        <h4>cmc-tableフォルダ</h4>
                        <p>isIncrementがtrueのときはChevronUpアイコン、rate表示を緑に。</p>
                        <p className='text-red-400'>components/Header.js</p>
                        <Tutorial2042 />
                        <h4>TrendingCard</h4>


                        <p>rafceで変更する</p>
                        <p>evtはhtmlのハンドラー情報を受け取って関数の処理に渡す</p>

                        <h4>MoreButton</h4>
                        <p></p>
                        <p></p>
                        <h4>TrendingCardRow</h4>
                        <p></p>
                    </Layout_tutorial_20>
                ) : id == 5 ? (
                    <Layout_tutorial_20>
                        <h3>Model追加</h3>
                        <p>getTopTenファイルを作成します。 </p>
                        <p className='text-red-400'>api/getTopTen.js</p>
                        <Tutorial2052 />
                        <p>coinmarketcapのAPIキーを追加します</p>
                        <p className='text-red-400'>env.local</p>
                        <Tutorial2053 />

                        <h3>context</h3>
                        <p>coinmarketproviderでwrapします。</p>
                        <p className='text-red-400'>_app.js</p>
                        <Tutorial2054 />
                        <p>サーバー起動</p>


                        <p>データベース登録 </p>
                        <p>管理画面に遷移して、Post データを登録してみましょう </p>
                        <p>イメージ画像は正方形の画像をアップロードしてください。 </p>

                    </Layout_tutorial_20>
                ) : id == 6 ? (
                    <Layout_tutorial_20>
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
                    </Layout_tutorial_20>
                ) : id == 7 ? (
                    <Layout_tutorial_20>
                        <h3>Serializer追加</h3>
                        <p>Serializer とは？</p>
                        <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                        <p>serializers.py ファイルを作成します</p>
                        <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                        <p className='text-red-400'>app/serializers.py</p>
                        <Tutorial1671 />
                    </Layout_tutorial_20>
                ) : id == 8 ? (
                    <Layout_tutorial_20>
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
                    </Layout_tutorial_20>
                ) : id == 9 ? (
                    <Layout_tutorial_20>
                        <h3>API確認</h3>
                        <p>サーバー起動</p>
                        <p>サーバーを起動させます</p>


                        <h3>API 画面</h3>
                        <p>Django REST Framework には、API を管理する専用画面が用意されています。</p>

                        <h4>一覧 </h4>
                        <p>下記にアクセスすると、Post 一覧が表示されます。 </p>
                        <p>http://127.0.0.1:8000/api/post/</p>
                        <h4>詳細 </h4>
                        <p>http://127.0.0.1:8000/api/post/1/</p>
                        <p>Json</p>
                        <p>API をコールすると、下記のような Json 形式でデータを取得することになります。</p>

                        <p>フロントエンドからのリクエスト</p>
                        <p>フロントエンドから GET、PUT、PUT/PATCH、DELETE などのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。 </p>
                        <p>ぜひ API を活用した設計にしてみましょう。</p>
                        <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
                    </Layout_tutorial_20>
                ) : id == 10 ? (
                    <Layout_tutorial_20>
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

                        <p>--use-npmは、npm でインストールするように指定しています </p>
                        <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>

                        <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
                    </Layout_tutorial_20>
                ) : id == 11 ? (
                    <Layout_tutorial_20>

                    </Layout_tutorial_20>
                ) : id == 12 ? (
                    <Layout_tutorial_20>

                    </Layout_tutorial_20>
                ) : id == 13 ? (
                    <Layout_tutorial_20>

                    </Layout_tutorial_20>
                ) : id == 14 ? (
                    <Layout_tutorial_20>
                        <h3>ナビゲーション作成</h3>
                        <p>ナビゲーションコンポーネントを作成していきます。</p>
                        <p>layout フォルダに navigation.js ファイルを作成します。</p>
                        <p className='text-red-400'>components/layout/navigation.js</p>

                    </Layout_tutorial_20>
                ) : id == 15 ? (
                    <Layout_tutorial_20>
                        <h3>_app.js修正</h3>
                        <p>Next.js では App コンポーネントを使用して、全てのページを初期化しています</p>
                        <p>_app.jsファイルを使用することで、デフォルトの App コンポーネントを上書きすることができます</p>
                        <p>先ほど作成した共通レイアウトを持たせていきます</p>
                        <p className='text-red-400'>pages/_app.js</p>

                        <p>画面確認</p>
                        <p>画面を確認すると、ヘッダーとフッターを表示することができました。</p>
                    </Layout_tutorial_20>
                ) : id == 16 ? (
                    <Layout_tutorial_20>
                        <h3>aboutページ作成</h3>
                        <p>Next.js では pages フォルダの中にファイルを作成するだけで、自動でルーティングが設定されます。</p>
                        <p>pages/about.js ファイルを作成します。</p>
                        <p>そうすると、/aboutに遷移することができます。</p>
                        <p className='text-red-400'>pages/about.js</p>

                        <p>画面確認</p>
                        <p>about ページを表示することができました。</p>
                    </Layout_tutorial_20>
                ) : id == 17 ? (
                    <Layout_tutorial_20>
                        <h3>トップページ修正</h3>
                        <p>トップページを修正していきます。</p>
                        <p>トップ画面をtop.pngとして、public ファルダに格納します。</p>
                        <p className='text-red-400'>pages/index.js</p>

                        <p>画面確認</p>
                        <p>トップ画像が表示されました。</p>
                    </Layout_tutorial_20>
                ) : id == 18 ? (
                    <Layout_tutorial_20>
                        <h3>トップページ修正</h3>
                        <p>トップページを修正していきます。</p>
                        <p>トップ画面をtop.pngとして、public ファルダに格納します。</p>
                        <p className='text-red-400'>pages/index.js</p>

                        <p>画面確認</p>
                        <p>トップ画像が表示されました。</p>
                    </Layout_tutorial_20>
                ) : id == 19 ? (
                    <Layout_tutorial_20>
                        <h3>トップページ修正</h3>
                        <p>トップページを修正していきます。</p>
                        <p>トップ画面をtop.pngとして、public ファルダに格納します。</p>
                        <p className='text-red-400'>pages/index.js</p>

                        <p>画面確認</p>
                        <p>トップ画像が表示されました。</p>
                    </Layout_tutorial_20>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial2021 = () => {
    const test = `
npx create-next-app@latest -e with-tailwindcss coinmarketcap-clone-blockchain
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial2022 = () => {
    const test = `
Need to install the following packages:
  create-next-app@latest
Ok to proceed? (y)
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial2023 = () => {
    const test = `
  Success! Created coinmarketcap-clone-blockchain at /home/ookuboc5399/src/CleverProgrammer/coinmarketcap-clone-blockchain
  Inside that directory, you can run several commands:
  
    yarn dev
      Starts the development server.
  
    yarn build
      Builds the app for production.
  
    yarn start
      Runs the built app in production mode.
  
  We suggest that you begin by typing:
  
    cd coinmarketcap-clone-blockchain
    yarn dev
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial2024 = () => {
    const test = `
  cd coinmarketcap-clone-blockchain
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2025 = () => {
    const test = `
npm install netlify-cli -g
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2026 = () => {
    const test = `
ntl dev
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2027 = () => {
    const test = `
ntl init
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial2031 = () => {
    const test = `
import type { NextPage } from 'next'
import Header from '../components/Header'
import Image from 'next/image'

const Home: NextPage = () => {
return (
  <div className="min-h-screen2">
    {/* <Header /> */}
    <div className='mt-10'></div>
    {/* <Trending/> */}
    <div className='mt-20'></div>
    {/* <Header/> */}
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



const Tutorial2032 = () => {
    const test = `
  import type { NextPage } from 'next'
  import Header from '../components/Header'
  import Image from 'next/image'
  
  const Home: NextPage = () => {
    return (
      <div className="min-h-screen2">
        <Header />
        <div className='mt-10'></div>
        {/* <Trending/> */}
        <div className='mt-20'></div>
        {/* <Header/> */}
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



const Tutorial2033 = () => {
    const test = `
  /** @type {import('next').NextConfig} */ 
  module.exports = { 
    reactStrictMode: true, 
    images:{ 
      domains: ['s2.coinmarketcap.com','s3.coinmarketcap.com','encrypted-tbn0.gstatic.com'] 
    }, 
  }
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2034 = () => {
    const test = `
  <div className="flex items-center"> 
  <div className={styles.inputContainer}> 
    <Search /> 
    <input className={styles.input} placeholder='Search' /> 
  </div> 
</div>
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2035 = () => {
    const test = `
  "@walletconnect/web3-provider": "^1.7.4", 
  "@web3auth/web3auth": "^0.4.0", 
  "chart.js": "^3.7.1", 
  "gun": "^0.2020.1235", 
  "magic-sdk": "^8.1.0", 
  "moralis": "^1.5.9", 
  "react-chartjs-2": "^4.0.1", 
  "react-moralis": "^1.3.5", 
  "react-switch": "^6.0.0", 
  "web3uikit": "^0.1.123"
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2036 = () => {
    const test = `
  npm install
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2037 = () => {
    const test = `
  NEXT_PUBLIC_SERVER https://lhducitjxmqn.grandmoralis.com:2053/server
  NEXT_PUBLIC_APP_ID VCslrBo1yvMaMJZTxCCvP9aM2W8yPb9MhL7Hd3Bh
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial2038 = () => {
    const test = `
  import { MoralisProvider } from "react-moralis";
  return ( 
    <MoralisProvider 
      serverUrl={process.env.NEXT_PUBLIC_SERVER} 
      appId={process.env.NEXT_PUBLIC_APP_ID} 
    > 
      <Component {...pageProps} />; 
    </MoralisProvider> 
  );
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2039 = () => {
    const test = `
 <button onClick={() => setCount(count+1)}>Count {count}</button>
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2042 = () => {
    const test = `
  function Rate({isIncrement, rate}) { 
    return ( 
      <div> 
          {isIncrement ? <ChevronUp fill="#17C784" /> : <ChevronDown fill="#EA3943"/>  } 
          <p className={isIncrement ? styles.green : styles.red}>{rate}</p> 
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

const Tutorial2052 = () => {
    const test = `
    // Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
    export default function handler(req, res) { 
        const getData = async () => { 
          const response = await fetch( 
            'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=＄{process.env.NEXT_BACKEND_CMC_API_KEY}', 
            { 
              method: 'GET', 
              headers: { 
                Accept: '*/*', 
              }, 
            }, 
          ) 
       
          const data = await response.json() 
       
          res.status(200).json({ data }) 
        } 
       
        getData() 
      }
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial2053 = () => {
    const test = `
  NEXT_PUBLIC_SERVER=https://lhducitjxmqn.grandmoralis.com:2053/server 
  NEXT_PUBLIC_APP_ID=VCslrBo1yvMaMJZTxCCvP9aM2W8yPb9MhL7Hd3Bh 
  NEXT_BACKEND_CMC_API_KEY=c37223e1-c5d2-40f5-855d-521d7cbc4c99
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial2054 = () => {
    const test = `
  <CoinMarketProvider> 
    <Component {...pageProps} /> 
  </CoinMarketProvider>
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

