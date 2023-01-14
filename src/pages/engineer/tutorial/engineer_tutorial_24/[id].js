import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_24 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_24>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qJaFIGjyRms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_24>
                ) : id == 2 ? (
                  <Layout_tutorial_24>
                  <h3>プロジェクト作成 </h3>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <Tutorial2421 />
      
                  <h3></h3>
                  <p> webで開発を行うので下記コマンドで立ち上げます</p>
                  <Tutorial2422 />
                  <h3></h3>
                  <p>styleSheetは削除します</p>
                  <h3>TailwindCSS導入</h3>
                  <Tutorial2423 />
                  <h3>react-navigation導入</h3>
                  <Tutorial2424 />
                  <h3>react-native-screen</h3>
                  <Tutorial2425 />
                  <h3>react-native導入</h3>
                  <Tutorial2426 />
      
                  <h3>StackNavigatorファイル作成</h3>
                  <p>rnfeでreactコンポーネントを作成 </p>
      
                  <h3>sereensフォルダ作成</h3>
                  <p>screensフォルダを作成し直下にHomeScreen.jsを作成</p>
                  <p className='text-red-400'>screens/HomeScreen.js</p>
                  <Tutorial2427 />
                  <p>screensフォルダを作成し直下にChatScreen.jsを作成</p>
                  <p className='text-red-400'>global.css</p>
                  <Tutorial2428 />
                  <p>screensフォルダを作成し直下にLoginScreen.jsを作成</p>
                  <p className='text-red-400'>global.css</p>
                  <Tutorial2429 />
                  <h3>_App.js</h3>
                  <p>NavigationContainerでwrap</p>
                  <p>AuthProviderでwrap</p>
                  <Tutorial24210 />
                  <h3>hooks</h3>
                  <p>hooksフォルダを作成し直下にuseAuth.jsを作成</p>
                  <p>rnfeでreactコンポーネントを作成 </p>
                  <p>NavigationContainerでwrap</p>
                  <Tutorial24210 />
              </Layout_tutorial_24>
                ) : id == 3 ? (
                  <Layout_tutorial_24>
                  <h3>hooks</h3>
                  <h4>Google認証</h4>
                  <Tutorial2431 />
                  <h3>Firebase</h3>
                  <h4>プロジェクト作成</h4>
                  <h5>データベース作成</h5>
                  <p>構築→Firestore Database→データベースの作成→有効にする</p>
                  <h5>データベース作成</h5>
                  <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
                  <h5>アプリ作成</h5>
                  <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
                  <h4>firebaseインストール</h4>
                  <Tutorial2432 />
                  <h4>firebase.js作成</h4>
                  <p className='text-red-400'>firebase.js</p>
                  <Tutorial2433 />
                  <Tutorial2434 />
                  <h4>google画像表示</h4>
                  <p>srcを設定した時にエラーが表示されました。指定のドメインを認証させるためにnext.config.jsにドメインを追加します。</p>
      
              </Layout_tutorial_24>
                ) : id == 4 ? (
                  <Layout_tutorial_24>
        
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
                       
                  
                  
              </Layout_tutorial_24>
                ) : id == 5 ? (
                  <Layout_tutorial_24>
                  <h3>Footer</h3>
                  <p>componentsフォルダを作成し、その直下にFooter.jsファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <Tutorial3351/>
                  <p className='text-red-400'>エラーが発生した場合</p>
                  <Tutorial3358/>
                  <p>React-routerを適用するためにApp.jsにおいて全体をRouterで囲みます。 </p>
                  <Tutorial3352/>
                  <h3>Routerの設定</h3>
                  <p>メールを選択した時に/mailに遷移し、/の時はEmailリストを表示させることができます</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial3353/>
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
              </Layout_tutorial_24>
                ) : id == 6 ? (
                  <Layout_tutorial_24>
                  <h3>Results.js作成</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                   <h4>SideBar.tsx</h4>
                  <p className='text-red-400'>components/Results.js</p>
                  <Tutorial3761 />
                
              </Layout_tutorial_24>
                ) : id == 7 ? (
                  <Layout_tutorial_24>
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
              </Layout_tutorial_24>
                ) : id == 8 ? (
                  <Layout_tutorial_24>
                  <h3>Redux</h3>
                  <p>mailとuserのreducerを作成します。</p>
                  <p>できます </p>
                  <div class="flex flex-nowrap">
                      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                          <a href="#">
                              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
              </Layout_tutorial_24>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial2421 = () => {
  const test = `
  npx create-expo-app tinder-2-yt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2422 = () => {
  const test = `
  npm run web
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2423 = () => {
  const test = `
  npm install tailwind-rn
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2424 = () => {
  const test = `
  npm install @react-navigation/native
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2425 = () => {
  const test = `
  expo install react-native-screens react-native-safe-area-context
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2426 = () => {
  const test = `
  npm install @react-navigation/native-stack
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2427 = () => {
  const test = `
  import { View, Text } from 'react-native' 
  import React from 'react' 
  const HomeScreen = () => { 
    return ( 
      <View> 
        <Text>HomeScreen</Text> 
      </View> 
    ) 
  } 
  export default HomeScreen
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2428 = () => {
  const test = `
  import { View, Text } from 'react-native' 
import React from 'react' 
const ChatScreem = () => { 
return ( 
  <View> 
    <Text>ChatScreem</Text> 
  </View> 
) 
} 
export default ChatScreem
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2429 = () => {
  const test = `
  import { View, Text } from 'react-native' 
import React from 'react' 
const LoginScreen = () => { 
return ( 
  <View> 
    <Text>LoginScreen</Text> 
  </View> 
) 
} 
export default LoginScreen
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial24210 = () => {
  const test = `
  import { NavigationContainer } from "@react-navigation/native"; 
  import StackNavigator from "./StackNavigator"; 
  import { AuthProvider } from './hooks/useAuth'; 
  export default function App() { 
    return ( 
      <NavigationContainer> 
        <AuthProvider> 
          <StackNavigator /> 
        </AuthProvider> 
      </NavigationContainer> 
    ); 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2431 = () => {
  const test = `
  npm i expo-google-app-auth
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2432 = () => {
  const test = `
expo install firebase
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2433 = () => {
  const test = `
// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyCS6Kt548U9cekb_NjrT7WMoOgfi7WkpMo", 
  authDomain: "tinder-2-yt-c2ec7.firebaseapp.com", 
  projectId: "tinder-2-yt-c2ec7", 
  storageBucket: "tinder-2-yt-c2ec7.appspot.com", 
  messagingSenderId: "109850132728", 
  appId: "1:109850132728:web:b4092364f4f4f3ea813b0d", 
  measurementId: "G-9C73C3DX0L" 
}; 
// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const auth = getAuth(); 
const db = getFirestore(); 
export { auth, db };
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2434 = () => {
  const test = `
  
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2441 = () => {
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

const Tutorial2442 = () => {
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

const Tutorial2443 = () => {
const test = `
plugins: [require("tailwind-scrollbar-hide")],
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial2444 = () => {
const test = `
npm i tailwind-scrollbar-hide
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial2445 = () => {
const test = `
<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial2446 = () => {
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