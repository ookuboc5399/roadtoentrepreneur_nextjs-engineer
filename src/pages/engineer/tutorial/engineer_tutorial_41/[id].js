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
                  <Layout_tutorial_41>
                  <h3>Redux + React Hooks + TypeScript COVID19 </h3>
                 
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
                  </Layout_tutorial_41>
                ) : id == 2 ? (
                  <Layout_tutorial_41>
                  <h3>プロジェクト作成 </h3>
                  <p> nextjs_hpという名前のプロジェクトを作成します。</p>
                  <p> </p>
                  <p> </p>
                  <Tutorial4121 />
                  <p> </p>
                  <h4>TailwindCSS導入</h4>
              
                  <Tutorial4122 />
                  <h3></h3>
                  <Tutorial4123 />
                  <Tutorial4124 />
      
                  <h3>tailwind.config.js修正</h3>
                  <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                  <p>そのファイルのサイズが大きくなってしまうため、purgeでpagesとcomponentsフォルダの中にあるjsファイルの中で使われているユーティリティだけをデプロイの時にファイルを作るようにしている</p>
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial4125 />
                  <h3>_app.js修正</h3>
                  <p className='text-red-400'>_app.js</p>
                  <Tutorial4126 />
                  <h3>global.css修正</h3>
                  <p className='text-red-400'>global.css</p>
                  <Tutorial4127 />
                  <p> Home.module.cssは削除します</p>
              </Layout_tutorial_41>
                ) : id == 3 ? (
                  <Layout_tutorial_41>
                  <h3>Layoutコンポーネント</h3>
                  <p>componentsフォルダを作成し、直下にLayout.jsファイルを作成します。</p>
                  <p> pagesフォルダにblog-page.jsとcontact-page.jsを作成します。</p>
                  <p>NextjsではデフォルトでReactを使ってくれるのでimport Reactは必要ありません。</p>
                  <p> </p>
                  <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                      <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <div>
                          <span class="font-medium">childrenとは</span> LayoutコンポーネントでwrapされたすべてのコンテンツがchildrenのpropsとしてLayoutコンポーネントに渡されてくる
                      </div>
                  </div>
                  <p className='text-red-400'>components/Layout.js</p>
                  <Tutorial4131 />
                  <p> titleについては各ページのタイトルを受け取ってタブのタイトルを表示することが出来る</p>
                  <Tutorial4132 />
                  <h4>Layoutコンポーネントの適用</h4>
                  <p>作成したLayoutコンポーネントをindex.jsに適用させます。</p>
                  <p className='text-red-400'>index.js</p>
                  <Tutorial4134 />
                   <p>Layoutコンポーネントで囲まれたpタグ内がchildrenとして渡されています。</p>
                  <p>またtitle名としてHomeが渡されています</p>
                  <h4>header作成</h4>
                  <p className='text-red-400'>components/Layout.js</p>
                  <Tutorial4135 />
                  <h4>footer作成</h4>
                  <p className='text-red-400'>components/Layout.js</p>
                  <Tutorial4136 />
              </Layout_tutorial_41>
                ) : id == 4 ? (
                  <Layout_tutorial_41>
                  <h3>contact-page作成 </h3>
                  <p>。 </p>
                  <p>。</p>
                  <p className='text-red-400'>contact-page.js</p>
                  <Tutorial4141 />
                  
                  <p>npm startでローカルサーバーが立ち上がります</p>
                  <p>Redux DevToolsでStateを見ることが出来る</p>
                  <h4>モジュールのインポート</h4>
                  <p>外部のAPIにaxiosを使ってアクセスする</p>
                 
      
                  <p></p>
                  </Layout_tutorial_41>
                ) : id == 5 ? (
                  <Layout_tutorial_41>
                  <h3>blog-page</h3>
                  <p>getStaticProps関数がビルド時に呼び出されてサーバーサイドで実行される </p>
                  <p>APIから受け取った投稿の一覧のデータをpropsとしてBlogコンポーネントに渡す</p>
                  <p>libフォルダを作成しpost.jsファイルを作成</p>
                  <p>エンドポイントにfetchを使ってアクセスするためのgetAllPostsDataを作成</p>
                  <p>。 </p>
                  <p className='text-red-400'>lib/posts.js</p>
                  <Tutorial4151 />
                  <p>incrementByAmountではPayloadActionによってnumberの値を受け取れる </p>
                  <Tutorial4152 />
                  <p>取得したpostsをreturnでpropsの形で返すようにしている</p>
                  <Tutorial4153 />
                  <p>postsが存在する場合はpostsのデータをmapで展開して、Postコンポーネントに格納</p>
                  <Tutorial4157 />
                  <h4>Postコンポーネント</h4>
                  <p className='text-red-400'>lib/posts.js</p>
                  <Tutorial4158 />
                  <p className='text-red-400'>lib/posts.js</p>
                  <Tutorial4154 />
                  <p>awaitで同期化してエンドポイントからデータを取得するのを待つ。 </p>
                  <Tutorial4155 />
                  <p>受け取ったデータをjson形式に変換してpostsに格納。 </p>
                  <Tutorial4156 />
                  <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                    <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <div>
                      <span class="font-medium">verbose_name:</span>
                    </div>
                  </div>
                  <h3>Google Chrome拡張機能のJSON Formatterをインストールして下さい。</h3>
            
                  https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=ja-JP
            
            
            
                </Layout_tutorial_41>
                ) : id == 6 ? (
                  <Layout_tutorial_41>
                  <h3>Dynamic routes</h3>
                  <p>ブログのページでリストからアイテムを選んだ時に詳細ページで記事が見れるように</p>
                  <p>getStaticPathsはAPIのエンドポイントにアクセスしてどんなidがあるのかidの一覧を取得 </p>
                  <h4>idの一覧を取得</h4>
                  
                  <p>idの要素だけを取り出してidの一覧のデータを生成</p>
                  <p>getStaticPathsの場合はparamsを付ける必要がある</p>
                  <p className='text-red-400'>lib/posts.js</p>
                  <Tutorial4161 />
                  <p>特定のidを使ってビルド時にデータベースからデータを取得する</p>
                  <p>エンドポイントの末尾に埋め込んでpostで値を返す。</p>
                    <h4>[id].js</h4>
                    <p>postsフォルダを作成し[id].jsファイルを作成</p>
                    <p>getAllPostIdsを実行してビルド時にAPIのエンドポイントにアクセスして必要なidの一覧を取得</p>
                    <p>getPostDataを実行してparamsの中にあるidをposts.jsに渡して</p>
                    <p>個別に事前生成するためにはデータベースから取得したpostのデータをPostコンポーネントに渡す</p> 
                    <p></p>
                  <p className='text-red-400'>posts/[id].js</p>
                  <Tutorial4162 />
                  </Layout_tutorial_41>
                ) : id == 7 ? (
                  <Layout_tutorial_41>
                  <h3>Django REST Framework</h3>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p className='text-red-400'>rest_api/serializers.py</p>
                  <Tutorial4171 />
                  <p>アプリケーションのSECRET_KEYとDEBUGを環境変数に変更します。</p>
                  <p>直下に.envファイルを作成します。</p>
                  <Tutorial4172 />
                  <Tutorial4173 />
                  <p>corsheadersを使えるようにするに</p>
                  <Tutorial4174 />
                  <p>Nextjsのローカルサーバーからのアクセスを許可するように。本番環境の</p>
                  <Tutorial4175 />
                  <p>トークンの有効期限を60分に設定</p>
                  <Tutorial4176 />
                  <p>認証が通ったユーザーだけviewにアクセスすることができる。</p>
                  <p>AUTHENTICATION_CLASSESは認証方法を設定できる。</p>
                  <Tutorial4177 />
                  <p>デプロイするときにcollectstaticが実行される。プロジェクトの中に散らばっているstaticファイルを1つのフォルダに格納してくれる。</p>
                  <Tutorial4177 />
                  </Layout_tutorial_41>
                ) : id == 8 ? (
                  <Layout_tutorial_41>
                  <h3>model</h3>
                  <p></p>
                  <p> </p>
                 
                  <p className='text-red-400'>api/models.py</p>
                  <Tutorial4181 />
                  <p className='text-red-400'>api/serializers.py</p>
                  <Tutorial4182 />
                  <p className='text-red-400'>api/admin.py</p>
                  <Tutorial4183 />
                  <p>querysetでTaskのobjectの一覧を取得</p>
                  <p className='text-red-400'>api/views.py</p>
                  <Tutorial4184 />
                  <p> </p>
                  <p className='text-red-400'>api/urls.py</p>
                  <Tutorial4185 />
                  <p></p>
                  </Layout_tutorial_41>
                ) : id == 9 ? (
                  <Layout_tutorial_41>
                  <h3>Blog+Todos</h3>
                  <p></p>
                  <p></p>
      
                  <Tutorial4191 />
                  <h3></h3>
                  <p></p>
      
                  <h4> </h4>
                  <p> </p>
                  <p></p>
                  <h4> </h4>
                  <p></p>
                  <p></p>
                  <p></p>
                  <Tutorial4192 />
                  <Tutorial4193 />
                  <Tutorial4194 />
                  <p>componentsフォルダの作成し、Layout.jsファイルを作成</p>
                  <p className='text-red-400'>components/Layout.js</p>
                  <Tutorial4195 />
                  <p className='text-red-400'>components/Auth.js</p>
                  <Tutorial4196 />
                  <p></p>
                  <p></p>
                  </Layout_tutorial_41>
                ) : id == 10 ? (
                  <Layout_tutorial_41>
                  <h3>フォーム作成</h3>
                  <Tutorial41101 />
                  <p>tailwind.config.jsのpluginsを修正します。</p>
                  <Tutorial41102 />
      
                  <p> </p>
                  <p>。 </p>
                  <p></p>
                  <p className='text-red-400'>index.js</p>
                  <Tutorial41103 />
                  <p>--use-npmは、npm でインストールするように指定しています </p>
                  <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>
                  <p className='text-red-400'>Auth.js</p>
                  <Tutorial41104 />
                  <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
                  </Layout_tutorial_41>
                ) : id == 11 ? (
                  <Layout_tutorial_41>
                  <h3></h3>
                  <p>環境変数の.env.localファイルを作成します。</p>
                  <h3>cookie インストール </h3>
                   <Tutorial41111 />
                  <h3>useSWR インストール </h3>
                  <Tutorial41112 />
                  <p>取得したJWTトークンをcookieに格納 </p>
                  <p> </p>
                  <p></p>
                  <p></p>
      
                  <h3>cookie インストール </h3>
                  <p> </p>
                  <Tutorial41113 />
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial41114 />
                  <p>元の CSS はすべて削除して、置き換えます。 </p>
                  <p className='text-red-400'>styles/global.css</p>
                  <Tutorial41115 />
                  <p>不要ファイル削除 </p>
                  <p>下記は不要なので削除します</p>
      
                  <p>Home.module.css を削除します</p>
                  <p>api フォルダを削除します。</p>
                  </Layout_tutorial_41>
                ) : id == 12 ? (
                  <Layout_tutorial_41>
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
                  </Layout_tutorial_41>
                ) : id == 13 ? (
                  <Layout_tutorial_41>
                  <h3>レイアウト作成</h3>
                  <p>レイアウトコンポーネントを作成していきます。</p>
                  <p>components フォルダを作成し、その中に layout フォルダを作成します</p>
                  <p>layout フォルダを作成したら、layout.js ファイルを作成します</p>
                  <p>layout.js ファイルには、共通のヘッダーやフッターを書いていきます </p>
                  <p className='text-red-400'>components/layout/layout.js</p>
                  <Tutorial16131 />
                  <p>｛props.children｝の中に、各画面のデータが入っていきます。</p>
                  </Layout_tutorial_41>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial4121 = () => {
  const test = `
  npx create-react-app . --use-npm
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4122 = () => {
  const test = `
  npm i tailwindcss
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4123 = () => {
  const test = `
  npm install tailwindcss@latest postcss@latest autoprefixer@latest
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4124 = () => {
  const test = `
  npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4125 = () => {
  const test = `
  module.exports = {
      purge: [],
      purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
       darkMode: false, // or 'media' or 'class'
       theme: {
         extend: {},
       },
       variants: {
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

const Tutorial4126 = () => {
  const test = `
  import 'tailwindcss/tailwind.css'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

  export default MyApp
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4127 = () => {
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


const Tutorial4131 = () => {
  const test = `
import Head from "next/head";
import Link from "next/link";
export default function Layout({ children, title = "HP by Nextjs" }) {
  return (
      <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
          <Head>
              <title>{title}</title>
          </Head>
          <header>
              <nav className="bg-gray-800 w-screen"></nav>
          </header>
          <main> 
              {children} 
          </main>
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



const Tutorial4132 = () => {
  const test = `
<Head>
  <title>{title}</title>
</Head>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4133 = () => {
  const test = `
  <Layout title="Home">
    <p className="text-4xl">Welcome</p>
  </Layout>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4134 = () => {
  const test = `
  import Layout from "../components/Layout"
  export default function Home() {
    return (
      <Layout title="Home">
        <p className="text-4xl">Welcome</p>
      </Layout>
    )
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4135 = () => {
  const test = `
  import Head from "next/head";
  import Link from "next/link";
  export default function Layout({ children, title = "HP by Nextjs" }) {
      return (
          <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
              <Head>
                  <title>{title}</title>
              </Head>
              <header>
                  <nav className="bg-gray-800 w-screen">
                      <div className="flex items-center pl-8 h-14">
                          <div className="flex space-x-4">
                              <Link href="/">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded ">
                                      Home
                                  </a>
                              </Link>
                              <Link href="/blog-page">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                      Blog
                                  </a>
                              </Link>
                              <Link href="/contact-page">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                      Contact
                                  </a>
                              </Link>
                          </div>
                      </div>
                  </nav>
              </header>
              <main>
                  {children}
              </main>
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

const Tutorial4136 = () => {
  const test = `
  import Head from "next/head";
  import Link from "next/link";
  export default function Layout({ children, title = "HP by Nextjs" }) {
      return (
          <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
              <Head>
                  <title>{title}</title>
              </Head>
              <header>
                  <nav className="bg-gray-800 w-screen">
                      <div className="flex items-center pl-8 h-14">
                          <div className="flex space-x-4">
                              <Link href="/">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded ">
                                      Home
                                  </a>
                              </Link>
                              <Link href="/blog-page">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                      Blog
                                  </a>
                              </Link>
                              <Link href="/contact-page">
                                  <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                      Contact
                                  </a>
                              </Link>
                          </div>
                      </div>
                  </nav>
              </header>
              <main>
                  {children}
              </main>
              <footer className="w-full h-12 flex justify-center items-center border-t"> 
              <a 
                className="flex items-center" 
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" 
                target="_blank" 
                rel="noopener noreferrer" 
              > 
                Powered by{" "} 
                {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */} 
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> 
              </a> 
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


const Tutorial4141 = () => {
  const test = `
import Layout from "../components/Layout" 
import Image from "next/image" 
const Contact = () => { 
  return ( 
    <Layout title="Contact"> 
    <div className="bg-white text-center shadow-xl p-8 w-80 rounded"> 
      <div className="mt-4"> 
        <p className="font-bold">Contact info</p> 
      </div> 
      <div className="flex justify-center mt-4"> 
        <Image 
          className="rounded-full" 
          src="/avatar.jpg" 
          width={60} 
          height={60} 
          alt="Avatar" 
        /> 
      </div> 
      <div className="mt-4"> 
        <p className="font-bold">Address</p> 
        <p className="text-xs mt-2 text-gray-600">city A</p> 
        <p className="font-bold mt-3">E-mail</p> 
        <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p> 
        <p className="font-bold mt-3">Phone</p> 
        <p className="text-xs mt-2 text-gray-600">000-123-456</p> 
      </div> 
      <div className="mt-6 flex justify-around"> 
        <div> 
          <a 
            href="https://nerdcave.com/tailwind-cheat-sheet" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <svg 
              className="w-6 h-6 mr-3 text-blue-500" 
              stroke="currentColor" 
              fill="currentColor" 
              viewBox="0 0 512 512" 
              xmlns="http://www.w3.org/2000/svg" 
            > 
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path> 
            </svg> 
          </a> 
        </div> 
        <div> 
          <a 
            href="https://nerdcave.com/tailwind-cheat-sheet" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <svg 
              className="w-6 h-6 mr-3 text-blue-700" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" 
            > 
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /> 
            </svg> 
          </a> 
        </div> 
        <div> 
          <a 
            href="https://nerdcave.com/tailwind-cheat-sheet" 
            target="_blank" 
            rel="noopener noreferrer" 
          > 
            <svg 
              className="w-6 h-6 mr-3 text-gray-500" 
              fill="currentColor" 
              viewBox="0 0 512 512" 
              xmlns="http://www.w3.org/2000/svg" 
            > 
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path> 
            </svg> 
          </a> 
        </div> 
      </div> 
    </div> 
  </Layout> 
  ) 
} 
 
export default Contact
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


const Tutorial4151 = () => {
  const test = `
    import Layout from "../components/Layout"; 
    import Post from "../components/Post"; 
    import { getAllPostsData } from "../lib/posts"; 
    export default function Blog({ posts }) { 
      return ( 
        <Layout title="Blog"> 
          <ul className="m-10"> 
            {posts && posts.map((post) => <Post key={post.id} post={post} />)} 
          </ul> 
        </Layout> 
      ); 
    } 
    export async function getStaticProps() { 
      const posts = await getAllPostsData(); 
      return { 
        props: { posts }, 
      }; 
    }    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4152 = () => {
  const test = `
    const posts = await getAllPostsData(); 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4153 = () => {
  const test = `
    return { 
        props: { posts }, 
      };
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4154 = () => {
  const test = `
import fetch from "node-fetch"; 
const apiUrl = "https://jsonplaceholder.typicode.com/posts"; 
export async function getAllPostsData() { 
  const res = await fetch(new URL(apiUrl)); 
  const posts = await res.json(); 
  return posts; 
} 
export async function getAllPostIds() { 
  const res = await fetch(new URL(apiUrl)); 
  const posts = await res.json(); 
  return posts.map((post) => { 
    return { 
      params: { 
        id: String(post.id), 
      }, 
    }; 
  }); 
} 
export async function getPostData(id) { 
  const res = await fetch(new URL(’＄｛apiUrl｝/＄{id}/’)); 
  const post = await res.json(); 
  // return { 
  //   post, 
  // }; 
  return post; 
}
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4155 = () => {
  const test = `
    const res = await fetch(new URL(’＄{apiUrl}/＄{id}/’)); 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4156 = () => {
  const test = `
    const post = await res.json(); 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4157 = () => {
  const test = `
    {posts && posts.map((post) => <Post key={post.id} post={post} />)} 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4158 = () => {
  const test = `
  import Link from "next/link";
  export default function Post({ post }) {
    return (
      <div>
        <span>{post.id}</span>
        {" : "}
        <Link href={’/posts/＄｛post.id｝’}>
          <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
            {post.title}
          </span>
        </Link>
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


const Tutorial4161 = () => {
  const test = `
import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
const res = await fetch(new URL(apiUrl));
const posts = await res.json();
return posts;
}

export async function getAllPostIds() {
const res = await fetch(new URL(apiUrl));
const posts = await res.json();

return posts.map((post) => {
  return {
    params: {
      id: String(post.id),
    },
  };
});
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4162 = () => {
  const test = `
  
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
if (!post) {
  return <div>Loading...</div>;
}

return (
  <Layout title={post.title}>
    <p className="m-4">
      {"ID : "}
      {post.id}
    </p>
    <p className="mb-8 text-xl font-bold">{post.title}</p>
    <p className="px-10">{post.body}</p>
    <Link href="/blog-page">
      <div className="flex cursor-pointer mt-12">
        <svg
          className="w-6 h-6 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>Back to blog-page</span>
      </div>
    </Link>
  </Layout>
);
}

export async function getStaticPaths() {
const paths = await getAllPostIds();

return {
  paths,
  fallback: false,
};
}
export async function getStaticProps({ params }) {
//const { post: post } = await getPostData(params.id);
const post = await getPostData(params.id);
return {
  props: {
    post,
  },
};
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4171 = () => {
  const test = `
  from datetime import timedelta
  from decouple import config
  from dj_database_url import parse as dburl
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4172 = () => {
  const test = `
  SECRET_KEY = config('SECRET_KEY')
  DEBUG = config('DEBUG')
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4173 = () => {
  const test = `
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'rest_framework',
      'api.apps.ApiConfig',
      'corsheaders',
      'djoser',
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4174 = () => {
  const test = `
  MIDDLEWARE = [
      'django.middleware.security.SecurityMiddleware',
      'django.contrib.sessions.middleware.SessionMiddleware',
      'django.middleware.common.CommonMiddleware',
      'django.middleware.csrf.CsrfViewMiddleware',
      'django.contrib.auth.middleware.AuthenticationMiddleware',
      'django.contrib.messages.middleware.MessageMiddleware',
      'django.middleware.clickjacking.XFrameOptionsMiddleware',
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4175 = () => {
  const test = `
  CORS_ORIGIN_WHITELIST = [
      "http://localhost:3000", "https://nextjs-blog-todos.vercel.app"
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4176 = () => {
  const test = `
  SIMPLE_JWT = {
      'AUTH_HEADER_TYPES': ('JWT',),
      'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4177 = () => {
  const test = `
  REST_FRAMEWORK = {
      'DEFAULT_PERMISSION_CLASSES': [
          'rest_framework.permissions.IsAuthenticated',
      ],
      'DEFAULT_AUTHENTICATION_CLASSES': [
          'rest_framework_simplejwt.authentication.JWTAuthentication',
      ],
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4181 = () => {
  const test = `
  from django.db import models


  class Post(models.Model):
  
      title = models.CharField(max_length=50)
      content = models.CharField(max_length=500)
      created_at = models.DateTimeField(auto_now_add=True)
  
      def __str__(self):
          return str(self.id) + " - " + self.title
  
  
  class Task(models.Model):
  
      title = models.CharField(max_length=50)
      created_at = models.DateTimeField(auto_now_add=True)
  
      def __str__(self):
          return str(self.id) + " - " + self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4182 = () => {
  const test = `
  from rest_framework import serializers
  from .models import Task,Post
  from django.contrib.auth.models import User
  
  class UserSerializer(serializers.ModelSerializer):
      class Meta:
          
          model = User
          fields = ('id','username','password')
          extra_kwargs = {'password': {'write_only': True, 'required': True}}
  
      def create(self, varidated_data):
          user = User.objects.create_user(**validated_data)
          return user
  
  class PostSerializer(serializers.ModelSerializer):
      created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
  
      class Meta:
          model = Post
          fields = ('id','title','content','created_at')
  
  
  class TaskSerializer(serializers.ModelSerializer):
      created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)
  
      class Meta:
          model = Task
          fields = ('id','title','created_at')
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4183 = () => {
  const test = `
  from django.contrib import admin
  from .models import Task,Post
  
  admin.site.register(Post)
  admin.site.register(Task)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4184 = () => {
  const test = `
  from rest_framework.permissions import AllowAny
  from rest_framework import generics
  from rest_framework import viewsets
  from .serializers import TaskSerializer, UserSerializer, PostSerializer
  from .models import Task, Post
  
  class CreateUserView(generics.CreateAPIView):
      serializer_class = UserSerializer
      permission_classes = (AllowAny,)
  
  class PostListView(generics.ListAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
      permission_classes = (AllowAny,)
  
  class PostRetrieveView(generics.RetrieveAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
      permission_classes = (AllowAny,)
  
  class TaskListView(generics.ListAPIView):
      queryset = Task.objects.all()
      serializer_class = TaskSerializer
      permission_classes = (AllowAny,)
  
  class TaskRetrieveView(generics.RetrieveAPIView):
      queryset = Task.objects.all()
      serializer_class = TaskSerializer
      permission_classes = (AllowAny,)
  
  class TaskViewSet(viewsets.ModelViewSet):
      queryset = Task.objects.all()
      serializer_class = TaskSerializer
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4185 = () => {
  const test = `
  from django.urls import path
  from django.conf.urls import include
  from rest_framework import routers
  from api.views import TaskViewSet, CreateUserView, TaskListView, TaskRetrieveView,PostListView, PostRetrieveView
  
  router = routers.DefaultRouter()
  router.register = ('tasks', TaskViewSet, basename='tasks')
  
  urlpatterns = [
      path('list-post/', PostListView.as_view(), name='list-post'),
      path('detail-post/<str:pk>/', PostRetrieveView.as_view(), name='detail-post'),
      path('list-task/', TaskListView.as_view(), name='list-task'),
      path('detail-task/<str:pk>', TaskRetrieveView.as_view(), name='detail-task'),
      path('register/', CreateUserView.as_view(), name='register'),
      path('auth/', include('djoser.urls.jwt')),
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4191 = () => {
  const test = `
  npx create-next-app . --use-npm
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4192 = () => {
  const test = `
  {
      $ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
      $ npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4193 = () => {
  const test = `
  {
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

const Tutorial4194 = () => {
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

const Tutorial4195 = () => {
  const test = `
  import Head from "next/head";

  export default function Layout({ children, title = "Default title" }) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
        <Head>
          <title>{title}</title>
        </Head>
        <main className="flex flex-1 justify-center items-center w-screen flex-col">
          {children}
        </main>
        <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
          @Udemy 2021
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

const Tutorial4196 = () => {
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


const Tutorial41101 = () => {
  const test = `
  npm i @tailwindcss/forms
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial41102 = () => {
  const test = `
  module.exports = {
      purge: ["./pages/**/*.js", "./components/**/*.js"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [require("@tailwindcss/forms")],
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial41103 = () => {
  const test = `
import Auth from "../components/Auth";
import Layout from "../components/Layout";

export default function Home() {
return (
  <Layout title="Login">
    <Auth />
  </Layout>
);
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial41104 = () => {
  const test = `
  return (
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            {isLogin ? "Login" : "Sign up"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={authUser}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
  
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="cursor-pointer font-medium text-white hover:text-indigo-500"
              >
                change mode ?
              </span>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLogin ? "Login with JWT" : "Create new user"}
            </button>
          </div>
        </form>
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


const Tutorial41111 = () => {
  const test = `
npm i universal-cookie
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial41112 = () => {
  const test = `
npm i swr
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial41113 = () => {
  const test = `
  const login = async () => {
      try {
        await fetch(
          ’$｛process.env.NEXT_PUBLIC_RESTAPI_URL｝api/auth/jwt/create/’,
          {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (res.status === 400) {
              throw "authentication failed";
            } else if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            const options = { path: "/" };
            cookie.set("access_token", data.access, options);
          });
        router.push("/main-page");
      } catch (err) {
        alert(err);
      }
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial41114 = () => {
  const test = `
  const login = async () => {
      try {
        await fetch(
          ’$｛process.env.NEXT_PUBLIC_RESTAPI_URL｝api/auth/jwt/create/’,
          {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (res.status === 400) {
              throw "authentication failed";
            } else if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            const options = { path: "/" };
            cookie.set("access_token", data.access, options);
          });
        router.push("/main-page");
      } catch (err) {
        alert(err);
      }
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial41115 = () => {
  const test = `
  const login = async () => {
      try {
        await fetch(
          ’$｛process.env.NEXT_PUBLIC_RESTAPI_URL｝api/auth/jwt/create/’,
          {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (res.status === 400) {
              throw "authentication failed";
            } else if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            const options = { path: "/" };
            cookie.set("access_token", data.access, options);
          });
        router.push("/main-page");
      } catch (err) {
        alert(err);
      }
    };
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
