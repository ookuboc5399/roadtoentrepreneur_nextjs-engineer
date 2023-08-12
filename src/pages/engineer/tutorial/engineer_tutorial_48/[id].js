import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_48 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_48>
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
              </Layout_tutorial_48>
                ) : id == 2 ? (
                  <Layout_tutorial_48>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                 <Tutorial4821 />
                 <h4>Teatファイル作成</h4>
                 <p className='text-red-400'>src/Render.test.js</p>
                 <Tutorial4822 />
                 <h4>実行</h4>
                 <p>ターミナルでnpm test</p>
                 <Tutorial4823 />
                 <h4>Renderコンポーネントの取得</h4>
                 <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                 <Tutorial4824 />
                 <h4>global.css修正</h4>
                 <Tutorial4825 />
         
                 <Tutorial4826 />
            
                 <Tutorial4827 />
     
                 
                 <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
               
             </Layout_tutorial_48>
                ) : id == 3 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>Layout.js </h3>
                      <Tutorial4731 />
                      <h3>#環境設定変更</h3>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                      <Tutorial4732 />
                      <Tutorial4733 />
                      <h3>utils</h3>
                        <p></p>
                        <p className='text-red-400'>utils/supabase.ts</p>
                      <Tutorial4734 />
                      <h3>types</h3>
                        <p>データ型の定義</p>
                        <p className='text-red-400'>types/types.ts</p>
                      <Tutorial4735 />
                      <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/Layout.tsx</p>
                      <Tutorial4739 />
                    </div>
            
                  </div>
                </Layout_tutorial_48>
                ) : id == 4 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>SSG </h3>
                      <p>ビルド時にsupabaseにアクセスしてHTMLを生成しておく。 </p>
                      <p>created_atに対してascending:trueとすることで昇順にすることができる。</p>
                      <Tutorial4841 />
            
                      <Tutorial4842 />
            
                      <p>パスワードは見えないので、間違えずに入力して下さい</p>
                      <h3>アプリケーションを使えるように設定</h3>
                      <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                      <p>API を構築するにはDjango REST Frameworkを使用します</p>
                      <p>リクエストを受け取るために、django-cors-headersを使用して、設定していきます</p>
                      <p>INSTALLED_APPS に追加します</p>
                      <p>MIDDLEWAREは上から順番に読み込まれるのでcorsheadersは一番上に追加する</p>
                      <p className='text-red-400'>mysite/settings.py</p>
                      <Tutorial4843 />
                    
                      <Tutorial4844 />
                      <p>エラーメッセージを格納させるためのstateを作成します</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
                      <Tutorial4848 />
                      <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                      <p>またinitialValuesには初期値を設定</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
            
                      <h4>handleSubmit</h4>
                      <p>submitボタンが押されたときに実行される関数を作成します。</p>
            
                    </div>
                    <div className='w-1/2'>
                    <p className='text-red-400'>/ssg.tsx</p>
                      <Tutorial4849 />
                    </div>
            
                  </div>
            
                </Layout_tutorial_48>
                ) : id == 5 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>SSR</h3>
                      <p>ユーザーからリクエストがあるたびにサーバーからsupabaseにアクセスして最新のデータからHTMlを生成する </p>
                      <h4>getServerSideProps</h4>
                      <p className='text-red-400'>app/models.py</p>
                      <Tutorial4851 />
                      <h3>管理画面追加 </h3>
                      <p>Post モデルを管理画面で操作できるようにします。</p>
                      <p className='text-red-400'>app/admin.py</p>
                      <Tutorial4852 />
                      <h3>データベース構築</h3>
                      <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
                      <Tutorial4853 />
                      <p>サーバー起動</p>
                      <Tutorial4854 />
                      <p>データベース登録 </p>
                      <p>管理画面に遷移して、Post データを登録してみましょう </p>
                      <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>/ssg.tsx</p>
                      <Tutorial4859 />
                    </div>
            
                  </div>
                </Layout_tutorial_48>
                ) : id == 6 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>CSR</h3>
                      <p>ルーティングを設定します。</p>
                      <p>プロジェクト用 URL を作成 </p>
                      <p>プロジェクト用ルーティングを作成 </p>
                      <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                      <p className='text-red-400'>mysite/urls.py</p>
                      <Tutorial4861 />
                      <p>アプリケーション用ルーティングを作成</p>
                      <p>app フォルダの下に、urls.py ファイルを作成します。</p>
                      <p className='text-red-400'>api/urls.py</p>
                      <Tutorial4862 />
                      </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>/csr.tsx</p>
                      <Tutorial4869 />
                    </div>
            
                  </div>
                </Layout_tutorial_48>
                ) : id == 7 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                      <div className='w-1/2 mr-2'>
                          <h3>ISR</h3>
                          <p>run timeにsupabaseにアクセスして最新のデータを使ってHTMLを再生成する</p>
                          <h3>ISRの実行条件</h3>
                         <li>ISRのページにアクセスがあった時</li>
                         <li>Link,routerのprefechが実行された時</li>
                          <p className='text-red-400'>api/serializers.py</p>
                          <Tutorial4871 />
                          <h3>Link,router.pushでISRに遷移した時の違い   </h3>
                          <h5>Link</h5>
                          <p>prefetchはdefaltでtrueになっている。</p>
                          <p>Linkコンポーネントが画面に表示されたときにprefetchをfalseにしたときはLinkをhoverしたときにprefetchが実行される</p>
                          <p className='text-red-400'>ssr.tsx</p>
                          <Tutorial4872 />
                          <h5>router.push</h5>
                          <p className='text-red-400'>ssr.tsx</p>
                          <Tutorial4873 />
                      </div>
                      <div className='w-1/2'>
                          <p className='text-red-400'>/isr.tsx</p>
                          <Tutorial4879 />
                      </div>
      
                  </div>
              </Layout_tutorial_48>
                ) : id == 8 ? (
                  <Layout_tutorial_48>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                    <h3>Views追加</h3>
                        <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                        <p>それを継承することで、簡単に開発をすることができます </p>
                        <p className='text-red-400'>api/views.py</p>
                      <Tutorial4881 />
            
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/AuthenForm.tsx</p>
                 
                      <p className='text-red-400'>modal.tsx</p>
            
                    </div>
                  </div>
            
                </Layout_tutorial_48>
                ): id == 9 ? (
                  <Layout_tutorial_48>
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
                </Layout_tutorial_48>
                ): (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial4821 = () => {
  const test = `
  npx create-react-app . --template redux
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4822 = () => {
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



const Tutorial4823 = () => {
  const test = `
  npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4824 = () => {
  const test = `

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4825 = () => {
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

const Tutorial4826 = () => {
  const test = `
  npm i @heroicons/react @supabase/supabase-js react-query zustand
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4827 = () => {
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


const Tutorial4731 = () => {
  const test = `
  django-admin startproject restapi .
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4732 = () => {
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


const Tutorial4733 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4734 = () => {
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

const Tutorial4735 = () => {
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

const Tutorial4739 = () => {
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


const Tutorial4841 = () => {
  const test = `
  .order('created_at', { ascending: true }) 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4842 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py createsuperuser
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4843 = () => {
  const test = `
  INSTALLED_APPS = [ 
    'django.contrib.admin', 
    'django.contrib.auth', 
    'django.contrib.contenttypes', 
    'django.contrib.sessions', 
    'django.contrib.messages', 
    'django.contrib.staticfiles', 
    'api.apps.ApiConfig', # 追加 
    'rest_framework', # 追加 
    'corsheaders', # 追加 
] 
MIDDLEWARE = [ 
    'corsheaders.middleware.CorsMiddleware', # 追加 
    'django.middleware.security.SecurityMiddleware', 
    'django.contrib.sessions.middleware.SessionMiddleware', 
    'django.middleware.common.CommonMiddleware', 
    'django.middleware.csrf.CsrfViewMiddleware', 
    'django.contrib.auth.middleware.AuthenticationMiddleware', 
    'django.contrib.messages.middleware.MessageMiddleware', 
    'django.middleware.clickjacking.XFrameOptionsMiddleware', 
]
# 追加 localhost:3000からのアクセスを許可します
CORS_ORIGIN_WHITELIST = [ 
    "http://localhost:3000", 
]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4844 = () => {
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

const Tutorial4848 = () => {
  const test = `
  const [error, setError] = useState('')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4849 = () => {
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




const Tutorial4851 = () => {
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



const Tutorial4852 = () => {
  const test = `
  from django.contrib import admin 
  from .models import Task, Tag 
  admin.site.register(Task) 
  admin.site.register(Tag)
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4853 = () => {
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

const Tutorial4854 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4855 = () => {
  const test = `
  HTTP 200 OK 
Allow: GET, POST, HEAD, OPTIONS 
Content-Type: application/json 
Vary: Accept 
[ 
    { 
        "id": 1, 
        "title": "Implement feature A", 
        "created_at": "2022-07-31 18:55", 
        "updated_at": "2022-07-31 18:55", 
        "tag": 1, 
        "tag_name": "Coding" 
    }, 
    { 
        "id": 2, 
        "title": "Unit test for feature A", 
        "created_at": "2022-07-31 18:55", 
        "updated_at": "2022-07-31 18:55", 
        "tag": 2, 
        "tag_name": "Unit test" 
    }, 
    { 
        "id": 3, 
        "title": "Implement feature B", 
        "created_at": "2022-07-31 18:56", 
        "updated_at": "2022-07-31 18:56", 
        "tag": 1, 
        "tag_name": "Coding" 
    } 
]
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4856 = () => {
  const test = `
  HTTP 200 OK 
Allow: GET, POST, HEAD, OPTIONS 
Content-Type: application/json 
Vary: Accept 
[ 
    { 
        "id": 1, 
        "name": "Coding" 
    }, 
    { 
        "id": 2, 
        "name": "Unit test" 
    }, 
    { 
        "id": 3, 
        "name": "Requirement" 
    } 
]
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4859 = () => {
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


const Tutorial4861 = () => {
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



const Tutorial4862 = () => {
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

const Tutorial4869 = () => {
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


const Tutorial4871 = () => {
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

const Tutorial4872 = () => {
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

const Tutorial4873 = () => {
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

const Tutorial4879 = () => {
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


const Tutorial4881 = () => {
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