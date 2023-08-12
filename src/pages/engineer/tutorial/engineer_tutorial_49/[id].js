import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_49 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_49>
                  <h3>はじめに </h3>
                  <p></p>
                  <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
                  <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
                  <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>
      
      
                  <h3>Web Vitals</h3>
                  <p>下記を学習していきます。 </p>
                  <ul className='list-disc'>
                      <li>TTFB:サーバー初期応答時間</li>
                      <li>FCP:視覚コンテンツの初期表示時間</li>
                      <li>LCP:最大視覚コンテンツの表示時間</li>
                  </ul>
                  <div className="text-3xl m-4">
                      Youtube
                  </div>
                  <div className="flex justify-center">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/a6Xs2Ir40OI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_49>
                ) : id == 2 ? (
                  <Layout_tutorial_49>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                 <Tutorial4921 />
                 <h4>Teatファイル作成</h4>
                 <p className='text-red-400'>src/Render.test.js</p>
                 <Tutorial4922 />
                 <h4>fontインストール</h4>
                 <Tutorial4923 />
                 <h4>Renderコンポーネントの取得</h4>
                 <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                 <Tutorial4924 />
                 <h4>global.css修正</h4>
                 <Tutorial4925 />
         
                 <Tutorial4926 />
            
                 <Tutorial4927 />
     
                 
                 <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
               
             </Layout_tutorial_49>
                ) : id == 3 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>Layout.js </h3>
                      <Tutorial4931 />
                      <h3>#環境設定変更</h3>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                      <Tutorial4932 />
                      <Tutorial4933 />
                      <h3>utils</h3>
                        <p></p>
                        <p className='text-red-400'>utils/supabase.ts</p>
                      <Tutorial4934 />
                      <h3>types</h3>
                        <p>データ型の定義</p>
                        <p className='text-red-400'>types/types.ts</p>
                      <Tutorial4935 />
                      <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/Layout.tsx</p>
                      <Tutorial4939 />
                    </div>
            
                  </div>
                </Layout_tutorial_49>
                ) : id == 4 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>Leaflet </h3>
                      <p>ビルド時にsupabaseにアクセスしてHTMLを生成しておく。 </p>
                      <p>created_atに対してascending:trueとすることで昇順にすることができる。</p>
                      <Tutorial4941 />
                      <p>index.htmlに貼り付けて下さい</p>
                      <Tutorial4942 />
            
                      
                      <h3>マップを上に固定</h3>
                      <p>Material-UIのApp barを使うことでマップをstickeyさせることができます。 </p>
                      <p className='text-red-400'>components/Listings.js</p>
                      <Tutorial4943 />
                    
                      <Tutorial4944 />
                      <p>エラーメッセージを格納させるためのstateを作成します</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
                      <Tutorial4949 />
                      <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                      <p>またinitialValuesには初期値を設定</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
            
                      <h4>handleSubmit</h4>
                      <p>submitボタンが押されたときに実行される関数を作成します。</p>
            
                    </div>
                    <div className='w-1/2'>
                    <p className='text-red-400'>/ssg.tsx</p>
                      <Tutorial4949 />
                    </div>
            
                  </div>
            
                </Layout_tutorial_49>
                ) : id == 5 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>SSR</h3>
                      <p>ユーザーからリクエストがあるたびにサーバーからsupabaseにアクセスして最新のデータからHTMlを生成する </p>
                      <h4>getServerSideProps</h4>
                      <p className='text-red-400'>app/models.py</p>
                      <Tutorial4951 />
                      <h4>仮想環境作成 </h4>
                      <Tutorial4952 />
                      <h4>仮想環境実行</h4>
                      <Tutorial4953 />
            
                      <h4>インストール</h4>
                      <Tutorial4955 />
                      <h4>プロジェクト作成</h4>
                      <Tutorial4956 />
                      <h4>アプリケーション作成</h4>
                      <Tutorial4954 />
                      <h4>環境設定変更 </h4>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。 </p>
                        <Tutorial4957 />
                        <h4>モデル </h4>
                        <p> </p>
                        <Tutorial4958 />
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>/ssg.tsx</p>
                      <Tutorial4959 />
                    </div>
            
                  </div>
                </Layout_tutorial_49>
                ) : id == 6 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>CSR</h3>
                      <p>ルーティングを設定します。</p>
                      <p>プロジェクト用 URL を作成 </p>
                      <p>プロジェクト用ルーティングを作成 </p>
                      <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                      <p className='text-red-400'>mysite/urls.py</p>
                      <Tutorial4961 />
                      <p>アプリケーション用ルーティングを作成</p>
                      <p>app フォルダの下に、urls.py ファイルを作成します。</p>
                      <p className='text-red-400'>api/urls.py</p>
                      <Tutorial4962 />
                      </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>/csr.tsx</p>
                      <Tutorial4969 />
                    </div>
            
                  </div>
                </Layout_tutorial_49>
                ) : id == 7 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                      <div className='w-1/2 mr-2'>
                          <h3>ISR</h3>
                          <p>run timeにsupabaseにアクセスして最新のデータを使ってHTMLを再生成する</p>
                          <h3>ISRの実行条件</h3>
                         <li>ISRのページにアクセスがあった時</li>
                         <li>Link,routerのprefechが実行された時</li>
                          <p className='text-red-400'>api/serializers.py</p>
                          <Tutorial4971 />
                          <h3>Link,router.pushでISRに遷移した時の違い   </h3>
                          <h5>Link</h5>
                          <p>prefetchはdefaltでtrueになっている。</p>
                          <p>Linkコンポーネントが画面に表示されたときにprefetchをfalseにしたときはLinkをhoverしたときにprefetchが実行される</p>
                          <p className='text-red-400'>ssr.tsx</p>
                          <Tutorial4972 />
                          <h5>router.push</h5>
                          <p className='text-red-400'>ssr.tsx</p>
                          <Tutorial4973 />
                      </div>
                      <div className='w-1/2'>
                          <p className='text-red-400'>/isr.tsx</p>
                          <Tutorial4979 />
                      </div>
      
                  </div>
              </Layout_tutorial_49>
                ) : id == 8 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                    <h3>Views追加</h3>
                        <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                        <p>それを継承することで、簡単に開発をすることができます </p>
                        <p className='text-red-400'>api/views.py</p>
                      <Tutorial4981 />
            
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/AuthenForm.tsx</p>
                 
                      <p className='text-red-400'>modal.tsx</p>
            
                    </div>
                  </div>
            
                </Layout_tutorial_49>
                ): id == 9 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                      <p>新しくプロジェクトを作ります。</p>
            
                      <h3>準備 </h3>
                      <p>Linux環境でプロジェクトを作成します</p>
                      <Tutorial4591 />
                      <h4>TailwindCSS導入</h4>
                      <Tutorial4592 />
                      <h3>tailwind.config.js修正</h3>
                      <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                      <Tutorial4593 />
                      <h3>global.css修正</h3>
                      <Tutorial4594 />
                      <h3>react-query、heroiconsインストール</h3>
                      <Tutorial4595 />
                      <h3>touch .prettierrc</h3>
                      <Tutorial4596 />
                      <p className='text-red-400'>.prettierrc</p>
                      <Tutorial4597 />
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>SendMail.js</p>
                      <Tutorial4599 />
                      <p className='text-red-400'>SendMail.css</p>
                      <Tutorial45910 />
                    </div>
                  </div>
                </Layout_tutorial_49>
                ): id == 10 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                    <h3>Views追加</h3>
                        <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                        <p>それを継承することで、簡単に開発をすることができます </p>
                        <p className='text-red-400'>api/views.py</p>
                      <Tutorial4981 />
            
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/AuthenForm.tsx</p>
                 
                      <p className='text-red-400'>modal.tsx</p>
            
                    </div>
                  </div>
            
                </Layout_tutorial_49>
                ): id == 11 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                     <div className='mr-4 w-1/2'>
     
                         <h3></h3>
                         <p>contextフォルダを作成し、StateProvider.tsxを作成。</p>
                         <p>typesフォルダを作成し、types.tsを作成。REST APIから取得するデータ型を定義します</p>
                         <Tutorial49111 />
                         <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                         <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                             <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                             <div>
                                 <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                             </div>
                         </div>
                         <h4>データ型</h4>
                         <p className='text-red-400'>types/types.ts</p>
                         <Tutorial49112 />
                         <h4></h4>
                         <p>createContextを使ってStateContextを作成します</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49113 />
                         <p>REST APIから取得したtaskの一覧を格納するtasks、darkモードを切り替えるをuseStateで定義します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49114 />
                         <p>valueには共有したいstateや関数を指定します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49115 />
                         <h4>hooks</h4>
                         <p>hooksフォルダを作成しを使ってuseClassicalFetch.tsxを作成します</p>
                         <p>useStateContextを使ってtasksとsetTasksを使える</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial49116 />
                         <p>errorの場合はisErrorをtrueにする</p>
                         <p>通信の処理が終わったらisLoadingをfalseにする</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial49117 />
                         <h4>ClassicalFetchA</h4>
                         <p>componentsフォルダにClassicalFetchA.tsxを作成します</p>
                         <h4>ClassicalFetchB</h4>
                         <p>componentsフォルダにClassicalFetchB.tsxを作成します</p>
                     </div>
                     <div className='w-1/2'>
                     <p className='text-red-400'>SendMail.js</p>
                     <Tutorial33109 />
                     <p className='text-red-400'>SendMail.css</p>
                     <Tutorial331010 />
                     </div>
                 </div>
                 </Layout_tutorial_49>
                ): id == 12 ? (
                  <Layout_tutorial_49>
                  <div className='flex'>
                     <div className='mr-4 w-1/2'>
     
                         <h3></h3>
                         <p>contextフォルダを作成し、StateProvider.tsxを作成。</p>
                         <p>typesフォルダを作成し、types.tsを作成。REST APIから取得するデータ型を定義します</p>
                         <Tutorial49111 />
                         <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                         <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                             <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                             <div>
                                 <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                             </div>
                         </div>
                         <h4>データ型</h4>
                         <p className='text-red-400'>types/types.ts</p>
                         <Tutorial49112 />
                         <h4></h4>
                         <p>createContextを使ってStateContextを作成します</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49113 />
                         <p>REST APIから取得したtaskの一覧を格納するtasks、darkモードを切り替えるをuseStateで定義します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49114 />
                         <p>valueには共有したいstateや関数を指定します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial49115 />
                         <h4>hooks</h4>
                         <p>hooksフォルダを作成しを使ってuseClassicalFetch.tsxを作成します</p>
                         <p>useStateContextを使ってtasksとsetTasksを使える</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial49116 />
                         <p>errorの場合はisErrorをtrueにする</p>
                         <p>通信の処理が終わったらisLoadingをfalseにする</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial49117 />
                         <h4>ClassicalFetchA</h4>
                         <p>componentsフォルダにClassicalFetchA.tsxを作成します</p>
                         <h4>ClassicalFetchB</h4>
                         <p>componentsフォルダにClassicalFetchB.tsxを作成します</p>
                     </div>
                     <div className='w-1/2'>
                     <p className='text-red-400'>SendMail.js</p>
                     <Tutorial33109 />
                     <p className='text-red-400'>SendMail.css</p>
                     <Tutorial331010 />
                     </div>
                 </div>
                 </Layout_tutorial_49>
                ): (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial4921 = () => {
  const test = `
  npx create-react-app . --template redux
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4922 = () => {
  const test = `
  npm i -D tailwindcss postcss autoprefixer
  npm i -D prettier prettier-plugin-tailwindcss
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4923 = () => {
  const test = `
  <link 
  rel="stylesheet" 
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
/>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4924 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4925 = () => {
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

const Tutorial4926 = () => {
  const test = `
  npm i @heroicons/react @supabase/supabase-js react-query zustand
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4927 = () => {
  const test = `
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_API_KEY=
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4931 = () => {
  const test = `
  django-admin startproject restapi .
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4932 = () => {
  const test = `
  LANGUAGE_CODE = 'ja'

  TIME_ZONE = 'Asia/Tokyo'
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4933 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4934 = () => {
  const test = `
  import { createClient } from '@supabase/supabase-js' 
  export const supabase = createClient( 
    process.env.NEXT_PUBLIC_SUPABASE_URL as string, 
    process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string 
  )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4935 = () => {
  const test = `
  export type Task = { 
    id: string 
    created_at: string 
    title: string 
    user_id: string | undefined 
  } 
  export type Notice = { 
    id: string 
    created_at: string 
    content: string 
    user_id: string | undefined 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4939 = () => {
  const test = `
  import { FC, ReactNode } from "react"; 
  import Head from "next/head"; 
  import { BadgeCheckIcon } from "@heroicons/react/solid"; 
  type Title = { 
    title: string; 
    children: ReactNode; 
  }; 
  export const Layout: FC<Title> = ({ children, title = "Todo app" }) => { 
    return ( 
      <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800"> 
        <Head> 
          <title>{title}</title> 
        </Head> 
        <header></header> 
        <main className="flex w-screen flex-1 flex-col items-center justify-center"> 
          {children} 
        </main> 
        <footer className="flex h-12 w-full items-center justify-center border-t"> 
          <BadgeCheckIcon className="h-6 w-6 text-blue-500" /> 
        </footer> 
      </div> 
    ); 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4941 = () => {
  const test = `
  npm install react react-dom leaflet
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4942 = () => {
  const test = `
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" 
  integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ==" 
  crossorigin=""/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4943 = () => {
  const test = `
  <AppBar position="sticky">
  </AppBar>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4944 = () => {
  const test = `
  const schema = Yup.object().shape({ 
    email: Yup.string().email('Invalid email').required('No email provided.'), 
    password: Yup.string() 
      .required('No password provided.') 
      .min(8, 'Password should be min 8 chars') 
      .matches(/[a-z]+/, 'One lowercase char missing') 
      .matches(/[A-Z]+/, 'One uppercase char missing') 
      .matches(/[@$!%*#?&]+/, 'One special char missing'), 
    age: Yup.number().min(15, 'Only over 15 for new account'), 
  }) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4949 = () => {
  const test = `
  import Link from 'next/link' 
  import { useRouter } from 'next/router' 
  import { NextPage } from 'next' 
  import { GetStaticProps } from 'next' 
  import { Layout } from '../components/Layout' 
  import { supabase } from '../utils/supabase' 
  import { Task, Notice } from '../types/types' 
  export const getStaticProps: GetStaticProps = async () => { 
    console.log('getStaticProps/ssg invoked') 
    const { data: tasks } = await supabase 
      .from('todos') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    const { data: notices } = await supabase 
      .from('notices') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    return { props: { tasks, notices } } 
  } 
  type StaticProps = { 
    tasks: Task[] 
    notices: Notice[] 
  } 
  const Ssg: NextPage<StaticProps> = ({ tasks, notices }) => { 
    const router = useRouter() 
    return ( 
      <Layout title="SSG"> 
        <p className="mb-3 text-blue-500">SSG</p> 
        <ul className="mb-3"> 
          {tasks.map((task) => { 
            return ( 
              <li key={task.id}> 
                <p className="text-lg font-extrabold">{task.title}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <ul className="mb-3"> 
          {notices.map((notice) => { 
            return ( 
              <li key={notice.id}> 
                <p className="text-lg font-extrabold">{notice.content}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <Link href="/ssr" prefetch={false}> 
          <a className="my-3 text-xs"> Link to ssr</a> 
        </Link> 
        <button className="mb-3 text-xs" onClick={() => router.push('/ssr')}> 
          Route to ssr 
        </button> 
      </Layout> 
    ) 
  } 
  export default Ssg
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4951 = () => {
  const test = `
  from django.db import models
  class Tag(models.Model):
      name = models.CharField(max_length=100)
      def __str__(self):
          return self.name
  class Task(models.Model):
      title = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add=True)
      updated_at = models.DateTimeField(auto_now=True)
      tag = models.ForeignKey(Tag, null=True, on_delete=models.CASCADE)
      def __str__(self):
          return self.title
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4952 = () => {
  const test = `
  python3 -m venv myvenv
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4953 = () => {
  const test = `
  source myvenv/bin/activate
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4954 = () => {
  const test = `
  python3 manage.py startapp listings
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4955 = () => {
  const test = `
  pip install Django
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4956 = () => {
  const test = `
  django-admin startproject backend
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4957 = () => {
  const test = `
  'listings.apps.ListingsConfig',
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4958 = () => {
  const test = `
  class Listing(models.Model): 
  seller = models.ForeignKey( 
      User, on_delete=models.CASCADE, blank=True, null=True) 
  title = models.CharField(max_length=150) 
  description = models.TextField(null=True, blank=True) 
  choices_area = ( 
      ('Inner London', 'Inner London'), 
      ('Outer London', 'Outer London'), 
  ) 
  area = models.CharField(max_length=20, blank=True, 
                          null=True, choices=choices_area)
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4959 = () => {
  const test = `
  import Link from 'next/link' 
  import { useRouter } from 'next/router' 
  import { NextPage } from 'next' 
  import { GetServerSideProps } from 'next' 
  import { Layout } from '../components/Layout' 
  import { supabase } from '../utils/supabase' 
  import { Task, Notice } from '../types/types' 
  export const getServerSideProps: GetServerSideProps = async () => { 
    console.log('getServerSideProps/ssr invoked') 
    const { data: tasks } = await supabase 
      .from('todos') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    const { data: notices } = await supabase 
      .from('notices') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    return { props: { tasks, notices } } 
  } 
  type StaticProps = { 
    tasks: Task[] 
    notices: Notice[] 
  } 
  const Ssr: NextPage<StaticProps> = ({ tasks, notices }) => { 
    const router = useRouter() 
    return ( 
      <Layout title="SSR"> 
        <p className="mb-3 text-pink-500">SSR</p> 
        <ul className="mb-3"> 
          {tasks.map((task) => { 
            return ( 
              <li key={task.id}> 
                <p className="text-lg font-extrabold">{task.title}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <ul className="mb-3"> 
          {notices.map((notice) => { 
            return ( 
              <li key={notice.id}> 
                <p className="text-lg font-extrabold">{notice.content}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <Link href="/ssg" prefetch={false}> 
          <a className="my-3 text-xs"> Link to ssg</a> 
        </Link> 
        <Link href="/isr" prefetch={false}> 
          <a className="mb-3 text-xs"> Link to isr</a> 
        </Link> 
        <button className="mb-3 text-xs" onClick={() => router.push('/ssg')}> 
          Route to ssg 
        </button> 
        <button className="mb-3 text-xs" onClick={() => router.push('/isr')}> 
          Route to isr 
        </button> 
      </Layout> 
    ) 
  } 
  export default Ssr
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4961 = () => {
  const test = `
  from django.contrib import admin 
  from django.urls import path, include 
  urlpatterns = [ 
      path('admin/', admin.site.urls), 
      path('api/', include('api.urls')), 
  ]
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4962 = () => {
  const test = `
  from django.urls import path, include 
  from rest_framework import routers 
  from api.views import TaskViewSet, TagViewSet 
  router = routers.DefaultRouter() 
  router.register('task', TaskViewSet) 
  router.register('tags', TagViewSet) 
  urlpatterns = [ 
      path('', include (router.urls)), 
  ]
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4969 = () => {
  const test = `
  import { useEffect, useState } from 'react' 
  import { NextPage } from 'next' 
  import { supabase } from '../utils/supabase' 
  import { Task, Notice } from '../types/types' 
  import { Layout } from '../components/Layout' 
  const Csr: NextPage = () => { 
    const [tasks, setTasks] = useState<Task[]>([]) 
    const [notices, setNotices] = useState<Notice[]>([]) 
    useEffect(() => { 
      const getTasks = async () => { 
        const { data: tasks } = await supabase 
          .from('todos') 
          .select('*') 
          .order('created_at', { ascending: true }) 
        setTasks(tasks as Task[]) 
      } 
      const getNotices = async () => { 
        const { data: notices } = await supabase 
          .from('notices') 
          .select('*') 
          .order('created_at', { ascending: true }) 
        setNotices(notices as Notice[]) 
      } 
      getTasks() 
      getNotices() 
    }, []) 
    return ( 
      <Layout title="CSR"> 
        <p className="mb-3 text-blue-500">SSG + CSF</p> 
        <ul className="mb-3"> 
          {tasks.map((task) => { 
            return ( 
              <li key={task.id}> 
                <p className="text-lg font-extrabold">{task.title}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <ul className="mb-3"> 
          {notices.map((notice) => { 
            return ( 
              <li key={notice.id}> 
                <p className="text-lg font-extrabold">{notice.content}</p> 
              </li> 
            ) 
          })} 
        </ul> 
      </Layout> 
    ) 
  } 
  export default Csr
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4971 = () => {
  const test = `
  from django.db import models 
  # Create your models here. 
  class Tag(models.Model): 
      name = models.CharField(max_length=100) 
      def __str__(self): 
          return self.name 
  class Task(models.Model): 
      name = models.CharField(max_length=100) 
      created_at = models.DateTimeField(auto_now_add=True) 
      updated_at = models.DateTimeField(auto_now=True) 
      tag = models.ForeignKey(Tag, null=True, on_delete= models.CASCADE) 
       
      def __str__(self): 
          return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4972 = () => {
  const test = `
<Link href="/isr" prefetch={false}> 
  <a className="my-3 text-xs">Link to isr</a> 
</Link> 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4973 = () => {
  const test = `
<button className="mb-3 text-xs" onClick={() => router.push("/isr")}> 
  Route to isr
</button>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4979 = () => {
  const test = `
  import Link from 'next/link' 
  import { useRouter } from 'next/router' 
  import { NextPage } from 'next' 
  import { GetStaticProps } from 'next' 
  import { Layout } from '../components/Layout' 
  import { supabase } from '../utils/supabase' 
  import { Task, Notice } from '../types/types' 
  export const getStaticProps: GetStaticProps = async () => { 
    console.log('getStaticProps/isr invoked') 
    const { data: tasks } = await supabase 
      .from('todos') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    const { data: notices } = await supabase 
      .from('notices') 
      .select('*') 
      .order('created_at', { ascending: true }) 
    return { props: { tasks, notices }, revalidate: 5 } 
  } 
  type StaticProps = { 
    tasks: Task[] 
    notices: Notice[] 
  } 
  const Isr: NextPage<StaticProps> = ({ tasks, notices }) => { 
    const router = useRouter() 
    return ( 
      <Layout title="ISR"> 
        <p className="mb-3 text-indigo-500">ISR</p> 
        <ul className="mb-3"> 
          {tasks.map((task) => { 
            return ( 
              <li key={task.id}> 
                <p className="text-lg font-extrabold">{task.title}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <ul className="mb-3"> 
          {notices.map((notice) => { 
            return ( 
              <li key={notice.id}> 
                <p className="text-lg font-extrabold">{notice.content}</p> 
              </li> 
            ) 
          })} 
        </ul> 
        <Link href="/ssr" prefetch={false}> 
          <a className="my-3 text-xs"> Link to ssr</a> 
        </Link> 
        <button className="mb-3 text-xs" onClick={() => router.push('/ssr')}> 
          Route to ssr 
        </button> 
      </Layout> 
    ) 
  } 
  export default Isr
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4981 = () => {
  const test = `
  from rest_framework import viewsets 
  from .serializers import TaskSerializer, TagSerializer 
  from .models import Task,Tag 
  class TagViewSet(viewsets.ModelViewSet): 
      queryset = Tag.objects.all() 
      serializer_class = TagSerializer 
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


const Tutorial4591 = () => {
  const test = `
  npx create-react-app react-query-lesson --template redux-typescript
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4592 = () => {
  const test = `
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4593 = () => {
  const test = `
  /** @type {import('tailwindcss').Config} */ 
  module.exports = { 
    content: [ 
      "./src/**/*.{js,jsx,ts,tsx}", 
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

const Tutorial4594 = () => {
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

const Tutorial4595 = () => {
  const test = `
  npm install @tanstack/react-query @tanstack/react-query-devtools react-router-dom @types/react-router-dom axios @heroicons/react  
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4596 = () => {
  const test = `
  touch .prettierrc
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4597 = () => {
  const test = `
  { 
    "singleQuote": true, 
    "semi": false 
}
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4599 = () => {
  const test = `
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial45910 = () => {
  const test = `
  
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial49111 = () => {
  const test = `
  npm add firebase
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial49112 = () => {
  const test = `
  export interface Task { 
    id: number 
    title: string 
    tag: number 
    tag_name: string 
    created_at: string 
    updated_at: string 
  }      
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial49113 = () => {
const test = `
export interface Task { 
  id: number 
  title: string 
  tag: number 
  tag_name: string 
  created_at: string 
  updated_at: string 
}      
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial49114 = () => {
const test = `
const [tasks, setTasks] = useState<Task[] | null>(null)
const [dark, setDark] = useState(false)     
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial49115 = () => {
const test = `
<StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>   
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial49116 = () => {
const test = `
const { tasks, setTasks } = useStateContext()
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial49117 = () => {
const test = `
try { 
  const res = await axios('http://127.0.0.1:8000/api/tasks/') 
  setTasks(res.data) 
} catch (error) { 
  setError(true) 
} 
setLoading(false) 
}
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
