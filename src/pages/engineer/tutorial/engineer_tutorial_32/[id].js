import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_32 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_32>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/svlEVg0To_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_32>
                ) : id == 2 ? (
                  <Layout_tutorial_32>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                  <Tutorial3221 />
                  <h4>styled-componentsのインポート</h4>
                  <Tutorial3222 />
                 
                  
                  </Layout_tutorial_32>
                ) : id == 3 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                      <div className='mr-4 w-1/2'>
                          <h3>サイドバー作成</h3>
                          <p>componentsフォルダを作成し、その直下にSidebar.jsファイルを作ります。</p>
                          <p>rfceでreactコンポーネントを作成 </p>
                          <p></p>
                          <p className='text-red-400'>src/components/Sidebar.js</p>
                          <Tutorial3231 />
                          <p>index.jsにSidebarコンポーネントを読み込ませておきます</p>
                         
                          <Tutorial3233 />
                          <h4>material-UIのインポート</h4>
                          <Tutorial3232 />
      
                          <Tutorial3233 />
                          <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                              <div>
                                  <span class="font-medium">MODELE_NOT_FOUNDが出た場合：</span>npm add @emotion/react @emotion/styled
                              </div>
                          </div>
                          <Tutorial3234 />
                          
                          <p>vscodeにはstyled-componentsの機能があるので追加します。</p>
      
      
                          <h4>チャット作成</h4>
                          <Tutorial3235 />
                          <h4>EmailValidatorのインストール</h4>
                          <Tutorial3236 />
                      </div>
                      <div className='w-1/2'>
                          <p className='text-red-400'>Sidebar.js</p>
                          <Tutorial3239 />
                          <p className='text-red-400'>SendMail.css</p>
                          <Tutorial32310 />
                      </div>
                  </div>
              </Layout_tutorial_32 >
                ) : id == 4 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
            
                      <h3>firebase.js</h3>
                      <p>firebaseをインストールします。</p>
                      <h4>プロジェクト作成</h4>
                      <h5>データベース作成</h5>
                      <p>構築→Firestore Database→データベースの作成→有効にする</p>
                      <h5>データベース作成</h5>
                      <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
                      <h5>アプリ作成</h5>
                      <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
                      <Tutorial3241 />
                      <h4>firebase.js作成</h4>
                      <p>プロジェクトの直下にfirebase.jsを作成します。</p>
                      <p>データベースと認証</p>
                      <Tutorial3244 />
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
                      <h4>React Firebase Hooksのインストール</h4>
                      <Tutorial3242 />
                      <h4>_app.js</h4>
                      <p>_app.jsに</p>
                      <p>もしユーザーでなかったらログインページに飛ばす</p>
                      <Tutorial3243 />
            
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>SendMail.js</p>
                      <Tutorial3249 />
                      <p className='text-red-400'>SendMail.css</p>
                      <Tutorial32410 />
                    </div>
                  </div>
            
                </Layout_tutorial_32>
                ) : id == 5 ? (
                  <Layout_tutorial_32>
                  <h3>email-validator</h3>
                  <p>componentsフォルダを作成し、その直下にFooter.jsファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <Tutorial3251 />
                  <p className='text-red-400'>エラーが発生した場合</p>
                
                  <p>denseプロパティを指定することで空のスペースをなるべく埋めるようにグリッドアイテムを配置します。 </p>
                  <h5>Carbon neutral since 2007</h5>
                  <p>カラムが3列のときは2列目に配置されるように</p>
                  <h5>Advertising</h5>
                  <p>justify-self-startは軸に沿って内部でボックスの位置を調整できます。</p>
                  <h5>Privacy</h5>
                  <p> </p>
                  <Tutorial3252 />
                  <h3>Routerの設定</h3>
                  <p>メールを選択した時に/mailに遷移し、/の時はEmailリストを表示させることができます</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial2953 />
                 
                  <h3>Mail.js作成</h3>
                  <p>Mail.jsと適用させるMail.cssを作成します。</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial2954 />
                  <h3>EmailList.js作成</h3>
                  <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
                  <p>App.jsにRouteの設定を記述します。</p>
                  <Tutorial2955 />
                  <p>SidebarとSwitchを横並びにするためにApp.cssの.app__bodyに対してflexを適用させます。</p>
                  <h3>Section.js作成</h3>
                  <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
                </Layout_tutorial_32>
                ) : id == 6 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                      <div className='mr-4 w-1/2'>
                          <h3>login.js作成</h3>
                          <p>pages直下にlogin.jsファイルを作ります。</p>
      
                          <p className='text-red-400'>login.js</p>
                          <Tutorial3261 />
                          <h4>login画面を作成</h4>
                          <p>Googleプロバイダを使用してFirebaseでの認証を行います。</p>
                          <p>ユーザーにGoogleアカウントでログインするよう促すためにポップアップウィンドウを表示するか、ログインページにリダイレクトします。</p>
                          <p>ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出します。</p>
                          <p>エラーが発生した場合はコンソールに表示させる</p>
                          <p className='text-red-400'>login.js</p>
                          <Tutorial3262 />
                          <p>ボタンをクリックしたときにsearchが実行される。</p>
                          <p className='text-red-400'>index.js</p>
                          <Tutorial3263 />
                      </div>
                      <div className='w-1/2'>
                          <p className='text-red-400'>SendMail.js</p>
                          <Tutorial3269 />
                          <p className='text-red-400'>SendMail.css</p>
                         
                      </div>
                  </div>
              </Layout_tutorial_32>
                ) : id == 7 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                      <div className='mr-4 w-1/2'>
      
                          <h3>Loading.js</h3>
                          <p>iconを表示させます。</p>
                          <p className='text-red-400'>Loading.js</p>
                          <Tutorial3271 />
                          <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                              <div>
                                  <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                              </div>
                          </div>
                          <h4>better-react-spinkitのインストール</h4>
                          <p> better-react-spinkithはreact@16.2.0以降のバージョンだとインストールできない場合があるのでバージョンを落としてインストールしてください。</p>
                          <Tutorial3272 />
                          <Tutorial3273 />
                          <h4>_app.jsへLoading.jsを追加</h4>
                          <Tutorial3274 />
                          
      
                      </div>
                      <div className='w-1/2'>
                          <p className='text-red-400'>Loading.js</p>
                          <Tutorial3279 />
                          <p className='text-red-400'>Mail.css</p>
                          <Tutorial32710 />
                      </div>
                  </div>
                  </Layout_tutorial_32>
                ) : id == 8 ? (
                  <Layout_tutorial_32>
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
                  </Layout_tutorial_32>
                ) : id == 9 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                     <div className='mr-4 w-1/2'>
     
                         <h3>SendMail.js</h3>
                         <p>iconを表示させます。</p>
                         <p className='text-red-400'>Mail.js</p>
                         <Tutorial3391 />
                         <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                             <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                             <div>
                                 <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                             </div>
                         </div>
                         <h4>React Hook formのインストール</h4>
                         <Tutorial3392 />
                     </div>
                     <div className='w-1/2'>
                     <p className='text-red-400'>SendMail.js</p>
                     <Tutorial3399 />
                     <p className='text-red-400'>SendMail.css</p>
                     <Tutorial33910 />
                     </div>
                 </div>
                 </Layout_tutorial_32>
                ) : id == 10 ? (
                  <Layout_tutorial_32>
                  <div className='flex'>
                     <div className='mr-4 w-1/2'>
     
                         <h3>firebase.js</h3>
                         <p>firebaseをインストールします。</p>
                         
                         <Tutorial33101 />
                         <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                         <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                             <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                             <div>
                                 <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                             </div>
                         </div>
                         <h4>React Hook formのインストール</h4>
                         <Tutorial33102 />
                     </div>
                     <div className='w-1/2'>
                     <p className='text-red-400'>SendMail.js</p>
                     <Tutorial33109 />
                     <p className='text-red-400'>SendMail.css</p>
                     <Tutorial331010 />
                     </div>
                 </div>
                 </Layout_tutorial_32>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial3221 = () => {
  const test = `
  npx create-next-app whatsapp-2
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3222 = () => {
  const test = `
  npm add styled-components
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3223 = () => {
  const test = `
  npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3224 = () => {
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

const Tutorial3225 = () => {
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


const Tutorial3231 = () => {
  const test = `
import { Avatar, Button, IconButton } from '@mui/material';
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

<Container> 
<Header> 
  <UserAvatar /> 
  <IconsContainer > 
      <IconButton> 
          <ChatIcon /> 
      </IconButton> 
      <IconButton> 
          <MoreVertIcon /> 
      </IconButton> 
  </IconsContainer> 
</Header> 
<Search> 
  <SearchIcon /> 
  <SearchInput placeholder="Search" /> 
</Search> 
<SidebarButton>Start a new chat</SidebarButton> 
</Container>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3232 = () => {
  const test = `
  npm install @mui/material @emotion/react @emotion/styled
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3233 = () => {
  const test = `
  npm install @mui/icons-material
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3234 = () => {
  const test = `
  
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3235 = () => {
  const test = `
  const createChat = () => { 
      const input = prompt( 
        "Please enter an email address for the user you wish to chat with" 
      ); 
      if (!input) return; 
      if ( 
        EmailValidator.validate(input) && 
        !chatAlreadyExist(input) && 
        input !== user.email 
      ) { 
        db.collection("chats").add({ 
          users: [user.email, input], 
        }); 
      } 
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3236 = () => {
  const test = `
  npm install email-validator
`
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3239 = () => {
  const test = `
  import { Avatar, Button, IconButton } from "@material-ui/core"; 
  import React from "react"; 
  import { useAuthState } from "react-firebase-hooks/auth"; 
  import { auth, db } from "../firebase"; 
  import ChatIcon from "@material-ui/icons/Chat"; 
  import MoreVertIcon from "@material-ui/icons/MoreVert"; 
  import styled from "styled-components"; 
  import SearchIcon from "@material-ui/icons/Search"; 
  import Chat from "./Chat"; 
  import { useCollection } from "react-firebase-hooks/firestore"; 
  import * as EmailValidator from "email-validator"; 
  function Sidebar() { 
    const [user] = useAuthState(auth); 
    const userChatsRef = db 
      .collection("chats") 
      .where("users", "array-contains", user.email); 
    const [chatsSnapshot, loading] = useCollection(userChatsRef); 
    const createChat = () => { 
      const input = prompt( 
        "Please enter an email address for the user you wish to chat with" 
      ); 
      if (!input) return; 
      if ( 
        EmailValidator.validate(input) && 
        !chatAlreadyExist(input) && 
        input !== user.email 
      ) { 
        db.collection("chats").add({ 
          users: [user.email, input], 
        }); 
      } 
    }; 
    const chatAlreadyExist = (recipientEmail) => 
      !!chatsSnapshot?.docs.find( 
        (chat) => 
          chat.data().users.find((user) => user === recipientEmail)?.length > 0 
      ); 
    return ( 
      <Container> 
        <Header> 
          <UserAvatar onClick={() => auth.signOut()} src={user.photoURL} /> 
          <IconsContainer> 
            <IconButton> 
              <ChatIcon /> 
            </IconButton> 
            <IconButton> 
              <MoreVertIcon /> 
            </IconButton> 
          </IconsContainer> 
        </Header> 
        <Search> 
          <SearchIcon /> 
          <SearchInput placeholder="Search in chats" type="text" /> 
        </Search> 
        <SidebarButton onClick={createChat}>Start a new chat</SidebarButton> 
        {/* Components */} 
        {chatsSnapshot?.docs.map((chat) => ( 
          <Chat key={chat.id} id={chat.id} users={chat.data().users} /> 
        ))} 
      </Container> 
    ); 
  } 
  export default Sidebar; 
  const Container = styled.div' 
    flex: 0.45; 
    border-right: 1px solid whitesmoke; 
    height: 100vh; 
    min-width: 300px; 
    max-width: 350px; 
    overflow-y: scroll; 
    ::-webkit-scrollbar { 
      display: none; 
    } 
    -ms-overflow-style: none; /* IE and Edge */ 
    scrollbar-width: none; /* Firefox */ 
  '; 
  const UserAvatar = styled(Avatar)' 
    cursor: pointer; 
    :hover { 
      opacity: 0.8; 
    } 
  '; 
  const SidebarButton = styled(Button)' 
    width: 100%; 
    &&& { 
      border-top: 1px solid whitesmoke; 
      border-bottom: 1px solid whitesmoke; 
    } 
  '; 
  const Search = styled.div' 
    display: flex; 
    align-items: center; 
    padding: 5px; 
    border-radius: 2px; 
    padding: 20px; 
  '; 
  const SearchInput = styled.input' 
    outline-width: 0; 
    border: none; 
    flex: 1; 
  '; 
  const Header = styled.div' 
    display: flex; 
    position: sticky; 
    top: 0; 
    background-color: white; 
    z-index: 1; 
    justify-content: space-between; 
    align-items: center; 
    padding: 15px; 
    height: 80px; 
    border-bottom: 1px solid whitesmoke; 
  '; 
  const IconsContainer = styled.div'';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial32310 = () => {
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


const Tutorial3241 = () => {
  const test = `
    npm add firebase
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3242 = () => {
  const test = `
  npm install --save react-firebase-hooks
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3243 = () => {
  const test = `
  plugins: [require("tailwind-scrollbar-hide")],
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3244 = () => {
  const test = `
// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app"; 
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = { 
  apiKey: "AIzaSyAxxeGSpZjfiYQIpEaocPjpxmNGIOAlgT0", 
  authDomain: "whatsapp-2-fc83e.firebaseapp.com", 
  projectId: "whatsapp-2-fc83e", 
  storageBucket: "whatsapp-2-fc83e.appspot.com", 
  messagingSenderId: "73020172288", 
  appId: "1:73020172288:web:10fb8307bc6e27b0b350e5", 
  measurementId: "G-WFK5F7GV9T" 
}; 
// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

const db = app.firestore(); 
const auth = app.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 
export { db, auth, provider };
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

const Tutorial3249 = () => {
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

const Tutorial32410 = () => {
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


const Tutorial3251 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3252 = () => {
  const test = `
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
    <div className="text-center md:col-span-2 lg:col-span-1 lg:col-start-2">
      Carbon neutral since 2007
    </div>
    <div className="flex justify-center md:justify-self-start space-x-8 whitespace-nowrap">
      <p>Advertising</p>
      <p>Business</p>
      <p>How Search works</p>
    </div>
    <div className="flex justify-center md:ml-auto space-x-8">
      <p>Privacy</p>
      <p>Terms</p>
      <p>Settings</p>
    </div>
  </div>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2953 = () => {
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

const Tutorial2954 = () => {
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

const Tutorial2955 = () => {
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

const Tutorial2958 = () => {
  const test = `
  npm add react-router-dom@5
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3261 = () => {
  const test = `
  import React from 'react'
  import styled from "styled-components";
  function login() {
    return (
      <Container>
          <Head>
              <title>Login</title>
          </Head>
      </Container>
    )
  }
  export default login
  const Container = styled.div'';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3262 = () => {
  const test = `
const signIn = () => {
  auth.signInWithPopup(provider).catch(console.error);

<LoginContainer>
  <Logo
    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
    alt=""
  />
  <Button variant="outlined" onClick={signIn}>
    Sign in with Google
  </Button>
</LoginContainer>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3263 = () => {
  const test = `
  <button onClick={search} className="btn" type="submit">
    Google Search
  </button>
  <button onClick={search} className="btn">
    I'm Feeling Lucky
  </button>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3269 = () => {
  const test = `
  import React from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Head from "next/head";
function login() {
const signIn = () => {
  auth.signInWithPopup(provider).catch(console.error);
};
return (
  <Container>
    <Head>
      <title>Login</title>
    </Head>
    <LoginContainer>
      <Logo
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
        alt=""
      />
      <Button variant="outlined" onClick={signIn}>
        Sign in with Google
      </Button>
    </LoginContainer>
  </Container>
);
}
export default login;
const Container = styled.div'
display: grid;
place-items: center;
height: 100vh;
background-color: whitesmoke;
';
const LoginContainer = styled.div'
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.75);
';
const Logo = styled.img'
height: 200px;
width: 200px;
margin-bottom: 50px;
';
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3271 = () => {
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

const Tutorial3272 = () => {
  const test = `
  npm i better-react-spinkit
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3273 = () => {
  const test = `
  npm i react@16.2.0
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3274 = () => {
  const test = `
  import '../styles/globals.css' 
  import { useAuthState } from "react-firebase-hooks/auth"; 
  import { auth, db } from "../firebase"; 
  import Login from "./login"; 
  import Loading from '../components/Loading'; 

  function MyApp({ Component, pageProps }) { 
      const [user, loading] = useAuthState(auth); 

      if (loading) return <Loading />; 
      if (!user) return <Login />; 

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

const Tutorial3279 = () => {
  const test = `
  import { Circle } from "better-react-spinkit";
  function Loading() {
    return (
      <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <div>
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
            alt=""
            style={{ marginBottom: 10 }}
            height={200}
          />
          <Circle color="#3CBC28" size={60} />
        </div>
      </center>
    );
  }
  export default Loading;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial32710 = () => {
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


const Tutorial3391 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3392 = () => {
  const test = `
  npm add react-hook-form        
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3399 = () => {
  const test = `
  import React from "react";
  import "./SendMail.css";
  import CloseIcon from "@material-ui/icons/Close";
  import { Button } from "@material-ui/core";
  import { useForm } from "react-hook-form";
  import { useDispatch } from "react-redux";
  import { closeSendMessage } from "./features/mailSlice";
  import { db } from "./firebase";
  import firebase from "firebase";
  
  function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
  
    const onSubmit = (formData) => {
      console.log(formData);
      db.collection("emails").add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      dispatch(closeSendMessage());
    };
  
    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <CloseIcon
            onClick={() => dispatch(closeSendMessage())}
            className="sendMail__close"
          />
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            placeholder="To"
            type="email"
            ref={register({ required: true })}
          />
          {errors.to && <p className="sendMail__error">To is Required!</p>}
  
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <p className="sendMail__error">Subject is Required!</p>
          )}
  
          <input
            name="message"
            placeholder="Message..."
            type="text"
            className="sendMail__message"
            ref={register({ required: true })}
          />
          {errors.message && (
            <p className="sendMail__error">Message is Required!</p>
          )}
  
          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default SendMail;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial33910 = () => {
  const test = `
  .sendMail {
      position: absolute;
      bottom: 0px;
      right: 50px;
      background-color: #404040;
      width: 40%;
      height: 40%;
      max-width: 500px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      flex-direction: column;
      border: 1px solid whitesmoke;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
    }
    
    .sendMail__header {
      padding: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: gray;
    }
    
    .sendMail__header > h3 {
      color: whitesmoke;
      font-size: 13px;
    }
    
    .sendMail__send {
      background-color: #3079ed !important;
      text-transform: capitalize !important;
      margin: 15px !important;
    }
    
    .sendMail__close {
      cursor: pointer;
    }
    
    .sendMail > form {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    
    .sendMail__error {
      background-color: white;
      color: red;
      text-align: right;
      padding: 2px;
    }
    
    .sendMail > form > input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid whitesmoke;
      outline: none;
    }
    
    .sendMail__message {
      flex: 1;
    }
    
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial33101 = () => {
  const test = `
  npm add firebase
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial33102 = () => {
  const test = `
  npm add react-hook-form        
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial33109 = () => {
  const test = `
  import React from "react";
  import "./SendMail.css";
  import CloseIcon from "@material-ui/icons/Close";
  import { Button } from "@material-ui/core";
  import { useForm } from "react-hook-form";
  import { useDispatch } from "react-redux";
  import { closeSendMessage } from "./features/mailSlice";
  import { db } from "./firebase";
  import firebase from "firebase";
  
  function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();
  
    const onSubmit = (formData) => {
      console.log(formData);
      db.collection("emails").add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      dispatch(closeSendMessage());
    };
  
    return (
      <div className="sendMail">
        <div className="sendMail__header">
          <h3>New Message</h3>
          <CloseIcon
            onClick={() => dispatch(closeSendMessage())}
            className="sendMail__close"
          />
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            placeholder="To"
            type="email"
            ref={register({ required: true })}
          />
          {errors.to && <p className="sendMail__error">To is Required!</p>}
  
          <input
            name="subject"
            placeholder="Subject"
            type="text"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <p className="sendMail__error">Subject is Required!</p>
          )}
  
          <input
            name="message"
            placeholder="Message..."
            type="text"
            className="sendMail__message"
            ref={register({ required: true })}
          />
          {errors.message && (
            <p className="sendMail__error">Message is Required!</p>
          )}
  
          <div className="sendMail__options">
            <Button
              className="sendMail__send"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default SendMail;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial331010 = () => {
  const test = `
  .sendMail {
      position: absolute;
      bottom: 0px;
      right: 50px;
      background-color: #404040;
      width: 40%;
      height: 40%;
      max-width: 500px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      flex-direction: column;
      border: 1px solid whitesmoke;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
    }
    
    .sendMail__header {
      padding: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: gray;
    }
    
    .sendMail__header > h3 {
      color: whitesmoke;
      font-size: 13px;
    }
    
    .sendMail__send {
      background-color: #3079ed !important;
      text-transform: capitalize !important;
      margin: 15px !important;
    }
    
    .sendMail__close {
      cursor: pointer;
    }
    
    .sendMail > form {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    
    .sendMail__error {
      background-color: white;
      color: red;
      text-align: right;
      padding: 2px;
    }
    
    .sendMail > form > input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid whitesmoke;
      outline: none;
    }
    
    .sendMail__message {
      flex: 1;
    }
    
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};
