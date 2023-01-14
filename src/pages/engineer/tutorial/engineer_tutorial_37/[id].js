import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_37 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_37>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/MqDlsjc8GLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_37>
                ) : id == 2 ? (
                  <Layout_tutorial_37>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                  <p></p>
                  <p></p>
      
                  <Tutorial3721 />
                  
                  <p>Homemodule.cssを削除 </p>
                  <h3>TailwindCSS導入</h3>
                  <Tutorial3722 />
                  <p>初期化</p>
      
                  <Tutorial3723 />
                  <p>tailwind.config.jsの中を変更します</p>
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial3724 />
                  <p className='text-red-400'>globals.css</p>
                  <Tutorial3725 />
                  <p>index.jsの中身を変更する</p>
                  <p className='text-red-400'>index.js</p>
                  <Tutorial3726 />
                  <p>サーバーを立ち上げて表示を確認しましょう</p>
              </Layout_tutorial_37>
                ) : id == 3 ? (
                  <Layout_tutorial_37>
                  <h3>ヘッダー作成</h3>
                  <p>componentsフォルダを作成し、その中にHeader.jsファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <p className='text-red-400'>components/Header.js</p>
                  <Tutorial3031 />
                  <p>index.jsにHeaderコンポーネントを読み込ませておきます</p>
                  <p className='text-red-400'>index.js</p>
                  <Tutorial3035 />
                  <h4>next.config.js変更</h4>
                  <p className='text-red-400'>next.config.css</p>
                  <Tutorial3032 />
                  <p>サーバーを再起動</p>
                  <h4>global.css変更</h4>
                  <p>背景色と文字色の規定を設定できます。</p>
                  <p className='text-red-400'>global.css</p>
                  <Tutorial3037 />
                  <h4>componentsフォルダ内にHeaderItem.jsファイルを作ります。</h4>
                  <p>Header.jsからtitleとIconをHeaderItem.jsに渡します。</p>
                   <p>titleをhoverした時にtitleが表示されるようにopacity-0 hover:opacity-100</p>
                  <p>親クラスにgroupとすることでアイコンをhoverした時にもtitleが表示されるようになる</p>
                  <p className='text-red-400'>components/HeaderItem.js</p>
                  <Tutorial3038 />
                  <h4>heroiconsインストール</h4>
                  <p> Facebookrのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
                  <p>下記コマンドでインストールします</p>
                  <Tutorial3033 />
                  <h4></h4>
                 
                  <p className='text-red-400'>components/Header.js</p>
                  <Tutorial3034 />
                  <p>HeaderIcon.jsを作成</p>
              </Layout_tutorial_37>
                ) : id == 4 ? (
                  <Layout_tutorial_37>
                  <h3>Nav.js作成</h3>
                    <p>componentsフォルダにNav.jsファイルを作ります。</p>
                    <p className='text-red-400'>components/Nav.js</p>
                    <Tutorial3741/>
                    <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                        <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span class="font-medium">Object.entries()メソッド</span>引数に与えたオブジェクトが所有する文字列をキーとしたプロパティの組[key,value]からなる配列を返す。
                        </div>
                    </div>
                    <p>rafceでreactコンポーネントを作成 </p>
                    <p>右端にぼやかしを実装できる</p>
                    <Tutorial3745/>
        
                    <p>utilsフォルダを作り、その中にrequests.jsファイルを作ります。</p>
                    <p className='text-red-400'>utils/request.js</p>
                    <Tutorial3742/>
                    <p>index.jsにNavコンポーネントを読み込ませておきます</p>
                    <h3>getServerSideProps</h3>
                    <p>index.jsにgetServerSidePropsを記述します。</p>
                    
                    <p>requests.jsのfetchTrendingのurlまたはその他のgenreに指定されているfetchTopRatedなどのurlを使ってエンドポイントを作成します。</p>
                    <p>返ってきたresponseはjson形式に変換</p>
                    <Tutorial3746/>
                    <p>request.resultをresultsとしてprops</p>
                    <Tutorial3747/>
                    
                    <div class="flex flex-nowrap">
                        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                            <a href="#">
                                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    
                    
                    
                </Layout_tutorial_37>
                ) : id == 5 ? (
                  <Layout_tutorial_37>
                  <h3>TMDBb</h3>
                  <p>下記のリンクからTMDBbのサイトにアクセスできます。 </p>
                  <a href='https://www.themoviedb.org/?language=ja'>The Movie Database(TMDb) </a>
                  <div class="flex flex-nowrap">
                      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                          <a href="#">
                              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                  <p>.env.localファイルを作成します。 </p>
                  <p className='text-red-400'>.env.local</p>
                  
                  <Tutorial3751 />
              </Layout_tutorial_37>
                ) : id == 6 ? (
                  <Layout_tutorial_37>
                  <h3>Results.js作成</h3>
                  <p>resultsを受け取って。</p>
                  <p>react-flip-moveを使うことでスムーズなアニメーションが実現できる </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                  <p className='text-red-400'>components/Results.js</p>
                  <Tutorial3760 />
                  <h3>Thumbnail.js作成</h3>
                  <p></p>
                  <p> </p>
                  <p className='text-red-400'>components/Thumbnail.js</p>
                  <Tutorial3761 />
                  <Tutorial3762 />
                  <Tutorial3763 />
                  <Tutorial3764 />
                  <Tutorial3765 />
              </Layout_tutorial_37>
                ) : id == 7 ? (
                  <Layout_tutorial_37>
                  <h3>デプロイ</h3>
                  <p>.env.localに記載されているAPI_KEYをデプロイ環境でも使用するにはEnvironment Variablesに追加する必要があります。</p>
                 
      
                  </Layout_tutorial_37>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial3721 = () => {
  const test = `
  npx create-next-app hulu-2-yt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3722 = () => {
  const test = `
  npm install -D tailwindcss postcss autoprefixer
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3723 = () => {
  const test = `
  npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3724 = () => {
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


const Tutorial3031 = () => {
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



const Tutorial3032 = () => {
  const test = `
  module.exports = {
      images: {
        domains: ["links.papareact.com", "image.tmdb.org"],
      },
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3033 = () => {
  const test = `
npm add @heroicons/react  
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3034 = () => {
  const test = `
  import {
      BadgeCheckIcon,
      CollectionIcon,
      HomeIcon,
      LightningBoltIcon,
      SearchIcon,
      UserIcon,
    } from "@heroicons/react/outline";
    import Image from "next/image";
    import HeaderItem from "../components/HeaderItem";
    
    function Header() {
      return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
          <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem title="SEARCH" Icon={SearchIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
          </div>
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
          />
        </header>
      );
    }
    
    export default Header;
    
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3035 = () => {
  const test = `
  import Head from 'next/head'
  import Header from "../components/Header";
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>Hulu 2.0</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
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


const Tutorial3036 = () => {
  const test = `
npm add @heroicons/react  
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3037 = () => {
  const test = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
body {
  @apply bg-[#06202A]  text-gray-300;
}
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3038 = () => {
  const test = `
  function HeaderItem({ Icon, title }) {
      return (
        <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white">
          <Icon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">
            {title}
          </p>
        </div>
      );
    }
    
    export default HeaderItem;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3741 = () => {
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

const Tutorial3742 = () => {
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

const Tutorial3743 = () => {
const test = `
plugins: [require("tailwind-scrollbar-hide")],
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3744 = () => {
const test = `
npm i tailwind-scrollbar-hide
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3745 = () => {
const test = `
<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial3746 = () => {
const test = `
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

const Tutorial3747 = () => {
const test = `
export default function Home({ results }) {
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial3751 = () => {
  const test = `
  API_KEY=b6bc8d161e8cafe5ef4079a6200277ba
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3760 = () => {
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


const Tutorial3761 = () => {
  const test = `
  import { ThumbUpIcon } from "@heroicons/react/outline"; 
  import Image from "next/image"; 
  import { forwardRef } from "react"; 
  const Thumbnail = forwardRef(({ result }, ref) => { 
    const BASE_URL = "https://image.tmdb.org/t/p/original/"; 
    return ( 
      <div 
        ref={ref} 
        className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" 
      > 
        <Image 
          layout="responsive" 
          src={ 
            '＄{BASE_URL}＄{result.backdrop_path || result.poster_path}' || 
            '＄{BASE_URL}＄{result.poster_path}' 
          } 
          height={1080} 
          width={1920} 
        /> 
        <div className="p-2"> 
          <p className="truncate max-w-md">{result.overview}</p> 
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold"> 
            {result.title || result.original_name} 
          </h2> 
          <p className="opacity-0 group-hover:opacity-100 flex items-center"> 
            {result.media_type && '＄{result.media_type} •'}{" "} 
            {result.release_date || result.first_air_date} •{" "} 
            <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count} 
          </p> 
        </div> 
      </div> 
    ); 
  }); 
  export default Thumbnail;
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

const Tutorial3765 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};