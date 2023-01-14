import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_31 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_31>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QaYts9sPmcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_31>
        ) : id == 2 ? (
          <Layout_tutorial_31>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <p></p>
            <p></p>

            <Tutorial3121 />
            <h3>firebase.js</h3>
            <p>firebaseをインストールします。</p>
            <Tutorial3124 />
            <h4>プロジェクト作成</h4>
            <h5>データベース作成</h5>
            <p>構築→Firestore Database→データベースの作成→有効にする</p>
            <h5>データベース作成</h5>
            <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
            <h5>アプリ作成</h5>
            <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
            <Tutorial3122 />
            <h4>firebase.js作成</h4>
            <p>srcプロジェクトの直下にfirebase.jsを作成します。</p>
            <p>構成オブジェクトを貼り付けます。</p>
            <p className='text-red-400'>src/firebase.js</p>
            <Tutorial3125 />
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
            <p>必要のないファイルを削除します。App.test.js、logo.svg、setupTest.js </p>

            <p>App.jsの中身を変更する</p>
            <p className='text-red-400'>src/App.js</p>
            <Tutorial3123 />
            <p>App.cssの中身はすべて削除しましょう。</p>
            <p>サーバーを立ち上げて表示を確認しましょう</p>
          </Layout_tutorial_31>
        ) : id == 3 ? (
          <Layout_tutorial_31>
            <div className='flex'>
              <div className=''>
                <h3>ヘッダー作成</h3>
                <p>componentsフォルダを作成し、その中にHeader.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>src/Header.js</p>
                <Tutorial3131 />
                <p>App.jsにHeaderコンポーネントを読み込ませておきます</p>
                <p className='text-red-400'>src/App.js</p>
                <Tutorial3132 />
                <h4>material-UIのインポート</h4>
                <Tutorial3133 />
                <Tutorial3134 />
                <h4>cssファイル</h4>
                <p> Header.cssファイルを作ります</p>
                <h4>HeaderOption.js作成</h4>
                <p>HeaderOption.jsを作成</p>
                <p>Header.jsからavatar,Icon,titleを受け取ります。</p>
                <p className='text-red-400'>src/HeaderOption.js</p>
                <Tutorial3135 />
                <h4>HeaderOption.css作成</h4>
                <p> HeaderOption.cssファイルを作ります</p>
              </div>
            </div>
          </Layout_tutorial_31>
        ) : id == 4 ? (
          <Layout_tutorial_31>
            <div className='flex'>
              <div className=''>

                <h3>Sidebar.js作成</h3>
                <p>srcフォルダにSidebar.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>src/Sidebar.js</p>
                <Tutorial3141 />
                <h4>app__body</h4>
                <p> header以下については横並びにするためdisplay:flexを適用</p>
                <p className='text-red-400'>App.css</p>
                <Tutorial3142 />
                <h4>sidebar.css</h4>
                <p>sidebarの横幅は全体を1と考えたときの0.2に指定</p>
                <p className='text-red-400'>Sidebar.css</p>
                <Tutorial3143 />
                <h4>recentItem</h4>
                <p>引数でreactjs等の値をtopicで受け取りそれを同じスタイルで表示しています。</p>
                <p className='text-red-400'>src/Sidebar.js</p>
                <Tutorial3144 />

              </div>

            </div>
          </Layout_tutorial_31>
        ) : id == 5 ? (
          <Layout_tutorial_31>
            <div className='flex'>
              <div className=''>
                <h3>Feed</h3>
                <p>srcフォルダにFeed.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>src/Feed.js</p>
                <Tutorial3151 />
                <h4>Feed.css</h4>
                <p>横幅を0.6に設定 </p>
                <p className='text-red-400'>src/Feed.css</p>
                <Tutorial3152 />
                <p className='text-red-400'></p>
                <h4>inputOption.js作成</h4>
                <p>Feed.jsからinputOption.jsにpropsを渡します。 </p>
                <h4>inputOption.css作成</h4>
                <h4>Post.js作成</h4>
                <p>Feed.jsからprops(name,description,message,photoUrl)を受け取ります。 </p>
                <p>また、Post.jsからinputOption.jsにIcon,tile,colorのpropsを渡します。 </p>
                <p className='text-red-400'>src/Post.js</p>
                <Tutorial3153 />
                <h4>cssファイル</h4>
                <p>Post.cssファイルを作ります</p>
                <p>overflow-wrapをanywhereとすることで改行が自動で行われる</p>
                <p className='text-red-400'>src/Post.css</p>
                <Tutorial3153 />
                <h3>FeedのState</h3>
                <p>入力欄の値をstateに格納</p>
                <h3>Firebase.js作成</h3>
                <p>firebaseのインストール</p>
                <Tutorial3155 />
                <p className='text-red-400'>src/firebase.js</p>
                <Tutorial3156 />
              </div>
            </div>
          </Layout_tutorial_31>
        ) : id == 6 ? (
          <Layout_tutorial_31>
            <h3>Results.js作成</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <h4>SideBar.tsx</h4>
            <p className='text-red-400'>components/Results.js</p>
            <Tutorial3761 />

          </Layout_tutorial_31>
        ) : id == 7 ? (
          <Layout_tutorial_31>
            <h3>コンタクトフォーム作成</h3>
            <p></p>
            <p className='text-red-400'>[slug].tsx</p>
            <Tutorial3871 />
            <h4>React Hook formのインストール</h4>

            <p></p>

          </Layout_tutorial_31>
        ) : id == 8 ? (
          <Layout_tutorial_17>
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
          </Layout_tutorial_17>
        ) : id == 9 ? (
          <Layout_tutorial_17>
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
          </Layout_tutorial_17>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial3121 = () => {
  const test = `
  npx create-react-app linkedin-clone-yt --template redux
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3122 = () => {
  const test = `
  npm install -g firebase-tools
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3123 = () => {
  const test = `
import React from 'react'; 
import './App.css'; 
function App() { 
return ( 
  <div className="App"> 
    <h1>build a LinkedIn CLONE</h1> 
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


const Tutorial3124 = () => {
  const test = `
  npm add firebase
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3125 = () => {
  const test = `
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAKgDMUeJD0eKJb786RVYq__KncOQyH6Zw",
    authDomain: "linkedin-clone-yt-4e97f.firebaseapp.com",
    projectId: "linkedin-clone-yt-4e97f",
    storageBucket: "linkedin-clone-yt-4e97f.appspot.com",
    messagingSenderId: "218743018440",
    appId: "1:218743018440:web:066e936a92d524269d66fd",
    measurementId: "G-YJXLFPHYDL"
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3126 = () => {
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

const Tutorial3131 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3132 = () => {
  const test = `
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

const Tutorial3133 = () => {
  const test = `
  npm install @mui/material @emotion/react @emotion/styled
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3134 = () => {
  const test = `
  npm install @mui/icons-material
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3135 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3136 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3137 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3138 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3139 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial31310 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3141 = () => {
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

const Tutorial3142 = () => {
  const test = `
  .app__body {
    display: flex;
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3143 = () => {
  const test = `
  .sidebar { 
    position: sticky; 
    top: 80px; 
    flex: 0.2; 
    border-radius: 10px; 
    text-align: center; 
    height: fit-content; 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3144 = () => {
  const test = `
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>

    <div className='sidebar__bottom'> 
      <p>Recent</p> 
      {recentItem("reactjs")} 
      {recentItem("programming")} 
      {recentItem("softwareengineering")} 
      {recentItem("design")} 
      {recentItem("developer")} 
    </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3145 = () => {
  const test = `
  plugins: [require("tailwind-scrollbar-hide")],
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3746 = () => {
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

const Tutorial3149 = () => {
  const test = `
  import { Avatar } from "@material-ui/core";
  import React from "react";
  import { useSelector } from "react-redux";
  import { selectUser } from "./features/userSlice";
  import "./Sidebar.css";
  function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
            alt=""
          />
          <Avatar src={user.photoUrl} className="sidebar__avatar">
            {user.email[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>
          </div>
        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>
      </div>
    );
  }
  export default Sidebar;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3151 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3152 = () => {
  const test = `
  .feed { 
    flex: 0.6; 
    margin: 0 20px; 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3153 = () => {
  const test = `
  <div className='post__buttons'> 
    <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" /> 
    <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" /> 
    <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" /> 
    <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" /> 
  </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3154 = () => {
  const test = `
  .post__body {
    overflow-wrap: anywhere;
}



  *[_type == "post"]{
      _id,
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3155 = () => {
  const test = `
  npm add firebase
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3156 = () => {
  const test = `
  import { initializeApp, getApps, getApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyAKgDMUeJD0eKJb786RVYq__KncOQyH6Zw",
      authDomain: "linkedin-clone-yt-4e97f.firebaseapp.com",
      projectId: "linkedin-clone-yt-4e97f",
      storageBucket: "linkedin-clone-yt-4e97f.appspot.com",
      messagingSenderId: "218743018440",
      appId: "1:218743018440:web:066e936a92d524269d66fd",
      measurementId: "G-YJXLFPHYDL"
    };
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();
  export { app, db, storage };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3159 = () => {
  const test = `
  import React, { useEffect, useState } from "react"; 
  import "./Feed.css"; 
  import CreateIcon from "@material-ui/icons/Create"; 
  import ImageIcon from "@material-ui/icons/Image"; 
  import InputOption from "./InputOption"; 
  import SubscriptionsIcon from "@material-ui/icons/Subscriptions"; 
  import EventNoteIcon from "@material-ui/icons/EventNote"; 
  import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"; 
  import Post from "./Post"; 
  import { db } from "./firebase"; 
  import firebase from "firebase"; 
  import { useSelector } from "react-redux"; 
  import { selectUser } from "./features/userSlice"; 
  import FlipMove from "react-flip-move"; 
  function Feed() { 
    const user = useSelector(selectUser); 
    const [input, setInput] = useState(""); 
    const [posts, setPosts] = useState([]); 
    useEffect(() => { 
      db.collection("posts") 
        .orderBy("timestamp", "desc") 
        .onSnapshot((snapshot) => 
          setPosts( 
            snapshot.docs.map((doc) => ({ 
              id: doc.id, 
              data: doc.data(), 
            })) 
          ) 
        ); 
    }, []); 
    const sendPost = (e) => { 
      e.preventDefault(); 
      db.collection("posts").add({ 
        name: user.displayName, 
        description: user.email, 
        message: input, 
        photoUrl: user.photoUrl || "", 
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
      }); 
      setInput(""); 
    }; 
    return ( 
      <div className="feed"> 
        <div className="feed__inputContainer"> 
          <div className="feed__input"> 
            <CreateIcon /> 
            <form> 
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
              /> 
              <button onClick={sendPost} type="submit"> 
                Send 
              </button> 
            </form> 
          </div> 
          <div className="feed__inputOptions"> 
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" /> 
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" /> 
            <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" /> 
            <InputOption 
              Icon={CalendarViewDayIcon} 
              title="Write article" 
              color="#7FC15E" 
            /> 
          </div> 
        </div> 
        {/* Posts */} 
        <FlipMove> 
          {posts.map(({ id, data: { name, description, message, photoUrl } }) => ( 
            <Post 
              key={id} 
              name={name} 
              description={description} 
              message={message} 
              photoUrl={photoUrl} 
            /> 
          ))} 
        </FlipMove> 
      </div> 
    ); 
  } 
  export default Feed;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial31510 = () => {
  const test = `
  .feed {
      flex: 0.6;
      margin: 0 20px;
    }
    .feed__inputContainer {
      background-color: white;
      padding: 10px;
      padding-bottom: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    .feed__input {
      border: 1px solid lightgray;
      border-radius: 30px;
      display: flex;
      padding: 10px;
      color: gray;
      padding-left: 15px;
    }
    .feed__input > form {
      display: flex;
      width: 100%;
    }
    .feed__input > form > input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline-width: 0;
      font-weight: 600;
    }
    .feed__input > form > button {
      display: none;
    }
    .feed__inputOptions {
      display: flex;
      justify-content: space-evenly;
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial31511 = () => {
  const test = `
  import React from "react"; 
  import "./InputOption.css"; 
  function InputOption({ Icon, title, color }) { 
    return ( 
      <div className="inputOption"> 
        <Icon style={{ color: color }} /> 
        <h4>{title}</h4> 
      </div> 
    ); 
  } 
  export default InputOption;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial31512 = () => {
  const test = `
  .inputOption { 
      display: flex; 
      align-items: center; 
      margin-top: 15px; 
      color: gray; 
      padding: 10px; 
      cursor: pointer; 
    } 
    .inputOption:hover { 
      background-color: whitesmoke; 
      border-radius: 10px; 
    } 
    .inputOption > h4 { 
      margin-left: 5px; 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial31513 = () => {
  const test = `
  .inputOption { 
      display: flex; 
      align-items: center; 
      margin-top: 15px; 
      color: gray; 
      padding: 10px; 
      cursor: pointer; 
    } 
    .inputOption:hover { 
      background-color: whitesmoke; 
      border-radius: 10px; 
    } 
    .inputOption > h4 { 
      margin-left: 5px; 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial31514 = () => {
  const test = `
  .inputOption { 
      display: flex; 
      align-items: center; 
      margin-top: 15px; 
      color: gray; 
      padding: 10px; 
      cursor: pointer; 
    } 
    .inputOption:hover { 
      background-color: whitesmoke; 
      border-radius: 10px; 
    } 
    .inputOption > h4 { 
      margin-left: 5px; 
    }
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


const Tutorial3871 = () => {
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
