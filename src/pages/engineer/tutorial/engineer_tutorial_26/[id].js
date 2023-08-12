import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_26 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_26>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/O0AhmAVzOo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>#エラーが発生した場合</h3>
            <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_26>
        ) : id == 2 ? (
          <Layout_tutorial_26>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial2621 />

            <Tutorial2622 />

            <Tutorial2923 />

            <p className='text-red-400'>tailwind.config.js</p>
            <Tutorial2924 />
            <p className='text-red-400'>globals.css</p>
            <Tutorial2925 />
            <p>Homemodule.cssは使用しないので削除します。</p>
            <h4>index.jsの中身を変更する</h4>
            <p className='text-red-400'>index.js</p>
            <Tutorial2926 />
            <p>サーバーを立ち上げて表示を確認しましょう</p>

          </Layout_tutorial_26>
        ) : id == 3 ? (
          <Layout_tutorial_26>
            <h3>ヘッダー作成</h3>
            <p>componentsフォルダを作成し、その直下にHeader.jsファイルを作ります。</p>
            <p>rfceでreactコンポーネントを作成 </p>
            <p></p>
            <p className='text-red-400'>src/components/Header.js</p>
            <Tutorial2631 />
            <h4>next.config.js変更</h4>
            <p>srcを設定した時にエラーが表示されました。指定のドメインを認証させるためにnext.config.jsにドメインを追加します。</p>
            <p> ホワイトリストにpapareact.comを追加します</p>
            <Tutorial2632 />
            <h4>heroiconsインストール</h4>
            <p> Facebookrのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
            <p>下記コマンドでインストールします</p>
            <Tutorial2633 />

            <h4>global.css</h4>
            <p>global.cssにコードを書くことで新しく独自のコンポーネントを追加することができます。</p>
            <p>@layerディレクティブに独自のクラスを定義します。</p>
            <p className='text-red-400'>global.css</p>
            <Tutorial2634 />
            <h3>Nextauth</h3>
            <p>apiフォルダにauthフォルダを作ります。その中に[...nextauth].jsを作ります</p>
            <Tutorial2636 />

            <h4>Nextauthのインポート</h4>
            <Tutorial2635 />
            <h4>redditAPI</h4>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">reddit API</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/06/05/nextauth/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <h4>.env.localファイル作成</h4>
            <p>作成したアプリのクライアントIDとシークレットキーを入力します。</p>
            <p>再起動しましょう</p>
            <Tutorial2637 />
            <h4>RedditProvider</h4>
            <p>_app.tsxにおいてRedditProviderで要素を囲みます</p>
          </Layout_tutorial_26>
        ) : id == 4 ? (
          <Layout_tutorial_26>
            <h3>Supabase</h3>
            <p>srcフォルダにSidebar.jsファイルを作ります。</p>

            <p>適用させるSidebar.cssも作成します。</p>
            <p className='text-red-400'>components/Nav.js</p>
            <Tutorial2641 />
            <div class="">
              <Image
                src="/svg/road to entrepreneur.svg"
                alt="01:Pythonとは？"
                width={150}
                height={150}
              />
            </div>




            <p className='text-red-400'>utils/request.js</p>
            <Tutorial2642 />

            <h3>StepZen</h3>
            <p>stepzenをインストールします。</p>
            <Tutorial2645 />
            <p>stepzenフォルダを作り、stepzenフォルダに移動し下記コマンドを実行します</p>
            <p>stepzenフォルダの中にstepzen.config.jsonファイルが作成されています。</p>
            <Tutorial2646 />
            <Tutorial2647 />
            <p>supabaseで設定したホスト名などのconnection infoを入力します。</p>
            <Tutorial2648 />
            <h3></h3>
            <p>stepzenをインストールします。</p>
            <Tutorial2649 />
            <p>apollo-client.jsファイルを作成します</p>
            <p className='text-red-400'>apollo-client.js</p>
            <Tutorial26410 />
          </Layout_tutorial_26>
        ) : id == 5 ? (
          <Layout_tutorial_26>
            <h3>Footer</h3>
            <p>componentsフォルダを作成し、その直下にFooter.jsファイルを作ります。</p>
            <p>rfceでreactコンポーネントを作成 </p>
            <Tutorial3351 />
            <p className='text-red-400'>エラーが発生した場合</p>
            <Tutorial3358 />
            <p>React-routerを適用するためにApp.jsにおいて全体をRouterで囲みます。 </p>
            <Tutorial3352 />
            <h3>Routerの設定</h3>
            <p>メールを選択した時に/mailに遷移し、/の時はEmailリストを表示させることができます</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3353 />
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TMDB API取得方法</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <h3>Mail.js作成</h3>
            <p>Mail.jsと適用させるMail.cssを作成します。</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3354 />
            <h3>EmailList.js作成</h3>
            <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3355 />
            <p>SidebarとSwitchを横並びにするためにApp.cssの.app__bodyに対してflexを適用させます。</p>
            <h3>Section.js作成</h3>
            <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
          </Layout_tutorial_26>
        ) : id == 6 ? (
          <Layout_tutorial_26>
            <h3>Results.js作成</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <h4>SideBar.tsx</h4>
            <p className='text-red-400'>components/Results.js</p>
            <Tutorial3761 />

          </Layout_tutorial_26>
        ) : id == 7 ? (
          <Layout_tutorial_26>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>Mail.js</h3>
                <p>iconを表示させます。</p>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial3371 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>React Hook formのインストール</h4>

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial3379 />
                <p className='text-red-400'>Mail.css</p>
                <Tutorial33710 />
              </div>
            </div>
          </Layout_tutorial_26>
        ) : id == 8 ? (
          <Layout_tutorial_26>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redux</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <p className='text-red-400'>app/store.js</p>
            <Tutorial3381 />
            <p className='text-red-400'>features/mailSlice.js</p>
            <Tutorial3382 />
            <p className='text-red-400'>features/userSlice.js</p>
            <Tutorial3383 />
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <p>公式ドキュメント - Generic views </p>
          </Layout_tutorial_26>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2621 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss yt-reddit-2
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2622 = () => {
  const test = `
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2923 = () => {
  const test = `
  npx tailwindcss init -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2924 = () => {
  const test = `
  module.exports = {
      mode: 'jit', 
      darkMode: false, // 'media' or 'class' 
      purge: { 
        content: [ 
          './src/pages/**/*.{js,ts,jsx,tsx}', 
          './src/components/**/*.{js,ts,jsx,tsx}' 
        ], 
        options: { 
          // https://purgecss.com/safelisting.html#patterns 
          safelist: { 
            standard: [/^bg-/, /^text-/], 
          }, 
        }, 
      }, 
      content: [], 
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

const Tutorial2925 = () => {
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

const Tutorial2926 = () => {
  const test = `
  import Head from 'next/head'
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>Google 2.0</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Lets build Google 2.0</h1>
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


const Tutorial2631 = () => {
  const test = `
  import React from 'react';
  import Link from 'next/link';
  
  function Header() {
      return (
          <header className="flex justify-between p-5 m-w-7xl mx-auto">
  
  
              <div className="flex items-center space-x-5">
                  <Link href="/">
                      <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
                  </Link>
                  <div className="hidden md:inline-flex items-center space-x-5">
                      <h3>About</h3>
                      <h3>Contact</h3>
                      <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                  </div>
              </div>
              <div className="flex items-center space-x-5 text-green-600">
                  <h3>Sign In</h3>
                  <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
                  
                  </div>
          </header>
      )
  }
  
  export default Header
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2632 = () => {
  const test = `
  /** @type {import('next').NextConfig} */
  module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['links.papareact.com'],
    },
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2633 = () => {
  const test = `
  npm add @heroicons/react 
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2634 = () => {
  const test = `
  @tailwind base; 
@tailwind components; 
@tailwind utilities; 
@layer components { 
  .icon { 
      @apply h-9 w-6 lg:w-9 cursor-pointer rounded-sm lg:p-1 lg:hover:bg-gray-100 
  } 
  .postButtons { 
      @apply flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm 
  } 
  .voteButtons { 
      @apply h-6 w-6 hover:bg-gray-200 p-1 rounded-md 
  } 
}
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2635 = () => {
  const test = `
  npm i next-auth
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2636 = () => {
  const test = `
  import NextAuth from 'next-auth' 
import RedditProvider from 'next-auth/providers/reddit' 
export default NextAuth({ 
// Configure one or more authentication providers 
providers: [ 
  RedditProvider({ 
    clientId: process.env.REDDIT_CLIENT_ID, 
    clientSecret: process.env.REDDIT_CLIENT_SECRET, 
  }), 
  // ...add more providers here 
], 
})
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2637 = () => {
  const test = `
  REDDIT_CLIENT_ID= 
REDDIT_CLIENT_SECRET=
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2641 = () => {
  const test = `
    import { useRouter } from "next/router";
    import requests from "../utils/requests";
    
    function Nav() {
      const router = useRouter();
    
      return (
        <nav className="relative">
          <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(requests).map(([key, { title, url }]) => (
              <h2
                key={key}
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
                onClick={() => router.push('/?genre=＄{key}')}
              >
                {title}
              </h2>
            ))}
          </div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
      );
    }
    
    export default Nav;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2642 = () => {
  const test = `
  // Typically we would store in {process.env.API_KEY}
  const API_KEY = process.env.API_KEY;
  
  export default {
    fetchTrending: {
      title: "Trending",
      url: '/trending/all/week?api_key=＄{API_KEY}&language=en-US',
    },
    fetchTopRated: {
      title: "Top Rated",
      url: '/movie/top_rated?api_key=＄{API_KEY}&language=en-US',
    },
    fetchActionMovies: {
      title: "Action",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=28',
    },
    fetchComedyMovies: {
      title: "Comedy",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=35',
    },
    fetchHorrorMovies: {
      title: "Horror",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=27',
    },
    fetchRomanceMovies: {
      title: "Romance",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=10749',
    },
    fetchMystery: {
      title: "Mystery",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=9648',
    },
    fetchSciFi: {
      title: "Sci-Fi",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=878',
    },
    fetchWestern: {
      title: "Western",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=37',
    },
    fetchAnimation: {
      title: "Animation",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=16',
    },
    fetchTV: {
      title: "TV Movie",
      url: '/discover/movie?api_key=＄{API_KEY}&with_genres=10770',
    },
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2643 = () => {
  const test = `
  plugins: [require("tailwind-scrollbar-hide")],
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2644 = () => {
  const test = `
  npm i tailwind-scrollbar-hide
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2645 = () => {
  const test = `
  npm install -g stepzen
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2646 = () => {
  const test = `
  stepzen init
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2647 = () => {
  const test = `
  stepzen import postgresql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2648 = () => {
  const test = `
? What is your host? db.beknhxaqdxlhqwzxfrlq.supabase.co
? What is your database name? postgres
? What is the username? postgres
? What is the password? [hidden]
? Automatically link types based on foreign key relationships using @materializer
 (https://stepzen.com/docs/features/linking-types) Yes
? What is your database schema (leave blank to use defaults)? 
Starting... done
Successfully imported schema postgresql from StepZen
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2649 = () => {
  const test = `
  npm install @apollo/client graphql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial26410 = () => {
  const test = `
  import { ApolloClient, InMemoryCache } from '@apollo/client' 
// http://localhost:5001/api/eloping-marmot 
const client = new ApolloClient({ 
  uri: 'https://xihe.stepzen.net/api/eloping-marmot/__graphql', 
  headers: { 
    Authorization: 'Apikey ＄{process.env.NEXT_PUBLIC_STEPZEN_KEY}', 
  }, 
  cache: new InMemoryCache(), 
}) 
export default client
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3351 = () => {
  const test = `
npm add react-router-dom
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3352 = () => {
  const test = `
  function App() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidebar />
        </div>
      </Router>
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



const Tutorial3353 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3354 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3355 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3358 = () => {
  const test = `
npm add react-router-dom@5
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3761 = () => {
  const test = `
  import Thumbnail from "./Thumbnail";
  import FlipMove from "react-flip-move";
  
  function Results({ results }) {
    return (
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>
    );
  }
  
  export default Results;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3762 = () => {
  const test = `
  <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3763 = () => {
  const test = `
  <div className="col-span-2 mt-2 hidden items-start px-2 lg:inline">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3764 = () => {
  const test = `
  npm add react-flip-move
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3371 = () => {
  const test = `
<IconButton onClick={() => history.push("/")}>
  <ArrowBackIcon />
</IconButton>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3379 = () => {
  const test = `
  import { IconButton } from '@mui/material' 
  import React from 'react' 
  import "./Mail.css"; 
  import { useHistory } from "react-router-dom"; 
  import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
  import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'; 
  import ErrorIcon from '@mui/icons-material/Error'; 
  import DeleteIcon from '@mui/icons-material/Delete'; 
  import EmailIcon from '@mui/icons-material/Email'; 
  import WatchLaterIcon from '@mui/icons-material/WatchLater'; 
  import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
  import LabelImportantIcon from '@mui/icons-material/LabelImportant'; 
  import MoreVertIcon from '@mui/icons-material/MoreVert'; 
  import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'; 
  import PrintIcon from '@mui/icons-material/Print'; 
  import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
  function Mail() { 
      const history = useHistory(); 
      return ( 
          <div className='mail'> 
              <div className='mail__tools'> 
                  <div className='mail__toolsLeft'> 
                      <IconButton onClick={() => history.push("/")}> 
                          <ArrowBackIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoveToInboxIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ErrorIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <DeleteIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <EmailIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <WatchLaterIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <CheckCircleIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <LabelImportantIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoreVertIcon /> 
                      </IconButton> 
                  </div> 
                  <div className='mail__toolsRight'> 
                      <IconButton> 
                          <UnfoldMoreIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <PrintIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ExitToAppIcon /> 
                      </IconButton> 
                  </div> 
              </div> 
          </div> 
      ) 
  } 
  export default Mail
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial33710 = () => {
  const test = `
  .mail {
      flex: 1;
      background-color: whitesmoke;
    }
    
    .mail__tools {
      display: flex;
      justify-content: space-between;
      background-color: white;
    }
    
    .mail__toolsLeft {
      display: flex;
    }
    
    .mail__body {
      display: flex;
      flex-direction: column;
      margin: 30px;
      background-color: white;
      padding: 20px;
      height: 100vh;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
    }
    
    .mail__bodyHeader {
      display: flex;
      align-items: center;
      border-bottom: 1px solid whitesmoke;
      padding: 20px;
      position: relative;
    }
    
    .mail__important {
      color: #e8ab02 !important;
    }
    
    .mail__bodyHeader > h2 {
      font-weight: 400;
      margin-right: 20px;
    }
    
    .mail__bodyHeader > p {
      margin-left: 20px;
    }
    
    .mail__time {
      position: absolute;
      top: 24px;
      right: 0;
      font-size: 12px;
      color: gray;
    }
    
    .mail__message > p {
      padding: 10px;
      margin-right: 20px;
      overflow-wrap: break-word;
    }
    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3381 = () => {
  const test = `
import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";

export default configureStore({
reducer: {
  mail: mailReducer,
  user: userReducer,
},
});
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3382 = () => {
  const test = `
  import { createSlice } from "@reduxjs/toolkit";

  export const mailSlice = createSlice({
    name: "mail",
    initialState: {
      selectedMail: null,
      sendMessageIsOpen: false,
    },
    reducers: {
      selectMail: (state, action) => {
        state.selectedMail = action.payload;
      },
      openSendMessage: (state) => {
        state.sendMessageIsOpen = true;
      },
      closeSendMessage: (state) => {
        state.sendMessageIsOpen = false;
      },
    },
  });
  
  export const {
    selectMail,
    openSendMessage,
    closeSendMessage,
  } = mailSlice.actions;
  
  export const selectOpenMail = (state) => state.mail.selectedMail;
  export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
  
  export default mailSlice.reducer;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3383 = () => {
  const test = `
  import { createSlice } from "@reduxjs/toolkit";

  export const userSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  export const selectUser = (state) => state.user.user;
  
  export default userSlice.reducer;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};