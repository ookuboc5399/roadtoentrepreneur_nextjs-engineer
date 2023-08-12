import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_36 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_36>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZsV-jDk7dS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_36>
                ) : id == 2 ? (
                  <Layout_tutorial_36>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                  <Tutorial3321 />
                  <h3>既定のCssを削除します。</h3>
                  <p className='text-red-400'>App.css</p>
                  <Tutorial3322 />
                  <p>features/counterの中にあるCounter.jsとCounter.module.cssを削除し、counterSlice.jsをfeatures直下に移動させます。</p>
                  <p>counterフォルダは削除しておきます。</p>
                  
                  <p>store.jsにおけるcounterReducerのimport文を修正します。</p>
                  <p className='text-red-400'>app/store.js</p>
                  <Tutorial3323 />
                  
              </Layout_tutorial_36>
                ) : id == 3 ? (
                  <Layout_tutorial_36>
                  <h3>ヘッダー作成</h3>
                  <p>srcフォルダの直下にHeader.jsファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <p></p>
                  <p className='text-red-400'>components/Header.js</p>
                  <Tutorial3331 />
                  <p>必要のないコードは削除します。＜header＞＜/header＞内を削除してimport ｛Counter｝とlogoを削除します</p>
                  <p> app.jsにHeaderコンポーネントを読み込ませておきます。</p>
                  <p className='text-red-400'>app.js</p>
                  <Tutorial3332 />
                  <h4>material-UIのインポート</h4>
                  <p>背景色と文字色の規定を設定できます。</p>
         
                  <h4>header_left作成</h4>
                  <p>MenuアイコンとGmailの画像を使って。</p>
                  <p className='text-red-400'>Header.js</p>
                 
                  <h4>heroiconsインストール</h4>
                  <p> Facebookrのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
                  <p>下記コマンドでインストールします</p>
      
                  <p className='text-red-400'>components/Header.js</p>
                  
                  <p>HeaderIcon.jsを作成</p>
              </Layout_tutorial_36>
                ) : id == 4 ? (
                  <Layout_tutorial_36>
                  <h3>Sidebar.js作成</h3>
                    <p>srcフォルダにSidebar.jsファイルを作ります。</p>
                    
                    <p>適用させるSidebar.cssも作成します。</p>
                    <p className='text-red-400'>components/Nav.js</p>
                    <Tutorial3341/>
                    <p>App.jsにSidebarコンポーネントを読み込ませておきます</p>
        
                    <p>rafceでreactコンポーネントを作成 </p>
                  
                    <Tutorial3345/>
        
                    <p>utilsフォルダを作り、その中にrequests.jsファイルを作ります。</p>
                    <p className='text-red-400'>utils/request.js</p>
                    <Tutorial3342/>
                    <p>index.jsにNavコンポーネントを読み込ませておきます</p>
                    <h3>SidebarOption.js作成</h3>
                    <p>。</p>
                    <Tutorial3346/>
                    <p>requests.jsのfetchTrendingのurl</p>
                    <p>返ってきたresponseはjson形式に変換</p>
                    <Tutorial3347/>
                    
                    <div class="flex flex-nowrap">
                        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                            <a href="#">
                                <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React(getServerSideProps)</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="http://www.agile-software.site/2022/06/05/reactgetserversideprops/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    記事を読む
                                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <Tutorial3743/>
                    <Tutorial3744/>
                
                    <p>サーバーを起動して表示を確認しましょう。</p>
                    <h3>アイコンのCSS</h3>
                    <p>SidebarRow.jsにCSSを適用していきます</p>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span class="font-medium">max-w-fit</span>hoverした時のエリアが
                        </div>
                    </div>
                       <p>max-w-fit</p> */}
                    
                    
                    
                </Layout_tutorial_36>
                ) : id == 5 ? (
                  <Layout_tutorial_36>
                  <h3>React-router</h3>
                  <p>React-routerをインストールします。 </p>
                  <p>React Router v6だとSwithが使用できないエラーが発生した場合はv5に下げてインストールしてください。</p>
                  <Tutorial3351/>
                  <p>React-routerを適用するためにApp.jsにおいて全体をRouterで囲みます。 </p>
                  <Tutorial3352/>
                  <h3>Routerの設定</h3>
                  <p>メールを選択した時に/mailに遷移し、/の時はEmailリストを表示させることができます</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial3353/>
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
                  <Tutorial3354/>
                  <h3>EmailList.js作成</h3>
                  <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial3355/>
                  <p>SidebarとSwitchを横並びにするためにApp.cssの.app__bodyに対してflexを適用させます。</p>
                  <h3>Section.js作成</h3>
                  <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
              </Layout_tutorial_36>
                ) : id == 6 ? (
                  <Layout_tutorial_36>
                  <h3>Results.js作成</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                   <h4>SideBar.tsx</h4>
                  <p className='text-red-400'>components/Results.js</p>
                  <Tutorial3761 />
                
              </Layout_tutorial_36>
                ) : id == 7 ? (
                  <Layout_tutorial_36>
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
              </Layout_tutorial_36>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial3321 = () => {
  const test = `
  npx create-react-app gmail-clone-yt --template redux
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3322 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3323 = () => {
  const test = `
  import counterReducer from '../features/counterSlice';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3324 = () => {
  const test = `
  module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
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

const Tutorial3725 = () => {
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

const Tutorial3726 = () => {
  const test = `
  import Head from 'next/head'
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>Hulu 2.0</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Lets build Hulu 2.0</h1>
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


const Tutorial3331 = () => {
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



const Tutorial3332 = () => {
  const test = `
  import React from 'react';
  import './App.css';
  import Header from './Header';

  function App() {
    return (
      <div className="App">
       <Header />
      </div>
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


const Tutorial3341 = () => {
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

const Tutorial3342 = () => {
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

const Tutorial3343 = () => {
const test = `
plugins: [require("tailwind-scrollbar-hide")],
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3344 = () => {
const test = `
npm i tailwind-scrollbar-hide
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3345 = () => {
const test = `
<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3346 = () => {
const test = `
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
console.log(results);

return (
  <div>
    <Head>
      <title>Hulu</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Nav />
    <Results results={results} />
  </div>
);
}

export async function getServerSideProps(context) {
const genre = context.query.genre;

const request = await fetch(
  'https://api.themoviedb.org/3＄{
    requests[genre]?.url || requests.fetchTrending.url
  }'
).then((res) => res.json());

return {
  props: {
    results: request.results,
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

const Tutorial3347 = () => {
const test = `
const request = await fetch(
  'https://api.themoviedb.org/3＄{
    requests[genre]?.url || requests.fetchTrending.url
  }'
).then((res) => res.json());
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