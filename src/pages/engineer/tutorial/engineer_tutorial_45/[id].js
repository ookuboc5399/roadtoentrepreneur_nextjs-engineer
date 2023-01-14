import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_45 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_45>
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
              </Layout_tutorial_45>
                ) : id == 2 ? (
                  <Layout_tutorial_45>
                  <h3>準備 </h3>
                 <p>開発の準備をします。 </p>
                 <p>GitHub準備 </p>
                 <p>GitHubのリポジトリを作成します。 </p>
                 <p>.gitignore作成 </p>
     
                 <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                 <Tutorial4521 />
                 <h3>仮想環境の作成 </h3>
                 <p>myvenvという名前で仮想環境を構築します。 </p>
                 <Tutorial4522 />
                 <p>仮想環境の実行</p>
                 <p>sourceコマンドで仮想環境を実行します。</p>
                 <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                 <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                 <p>これがあると、仮想環境に入っていることになります。</p>
                 <Tutorial4523 />
                 <p>※ windows の方は別コマンドになります。</p>
                 <h3>requirements.txt作成</h3>
                 <p>開発で必要なパッケージを記載します。</p>
                 <Tutorial4524 />
                 <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                     <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                     <div>
                         <span class="font-medium">corsheaders:</span> django REST frameworkを使ってAPIエンドポイントをフロントエンド(APIにアクセスするためのURL)から叩く場合にはCORSの設定が必要
                     </div>
                 </div>
     
                 <h3>パッケージのインストール</h3>
                 <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                 <Tutorial4525 />
               
             </Layout_tutorial_45>
                ) : id == 3 ? (
                  <Layout_tutorial_45>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>プロジェクト作成 </h3>
                      <p>プロジェクトを作成します。</p>
                      <p>プロジェクト名はrestapiです。 </p>
                      <p>最後の.はディレクトリ直下にプロジェクトを作成するという意味です。</p>
                      <Tutorial4531 />
                      <h3>#環境設定変更</h3>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                      <Tutorial4532 />
                      <p>データベースのセットアップ </p>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>
                      <Tutorial4533 />
                      <h3>#Webサーバーを起動する</h3>
                        <p>Djangoが起動できるか確認しましょう。</p>
                      <Tutorial4534 />
                      <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>pages/_document.tsx</p>
                  
                      <p className='text-red-400'>pages/_app.tsx</p>
                    
                      <p className='text-red-400'>pages/button.tsx</p>
                 
                      <p className='text-red-400'>pages/group.tsx</p>
                
                      <p className='text-red-400'>pages/grid.tsx</p>
              
                    </div>
            
                  </div>
                </Layout_tutorial_45>
                ) : id == 4 ? (
                  <Layout_tutorial_45>
                  <div className='flex'>
                    <div className='w-1/2 mr-2'>
                      <h3>アプリケーション作成 </h3>
                      <p>アプリケーションを作成してきます。 </p>
                      <p>app という名前のアプリケーションを作成します。</p>
                      <Tutorial4541 />
                      <h3>管理ユーザー作成</h3>
                      <p>管理ユーザーを作成しておきましょう。</p>
                      <Tutorial4542 />
                      <p>ユーザー名、メールアドレス、パスワードを入力します。 </p>
                      <p>パスワードは見えないので、間違えずに入力して下さい</p>
                      <h3>アプリケーションを使えるように設定</h3>
                      <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                      <p>API を構築するにはDjango REST Frameworkを使用します</p>
                      <p>リクエストを受け取るために、django-cors-headersを使用して、設定していきます</p>
                      <p>INSTALLED_APPS に追加します</p>
                      <p>MIDDLEWAREは上から順番に読み込まれるのでcorsheadersは一番上に追加する</p>
                      <p className='text-red-400'>mysite/settings.py</p>
                      <Tutorial4543 />
                    
                      <Tutorial4544 />
                      <p>エラーメッセージを格納させるためのstateを作成します</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
                      <Tutorial4545 />
                      <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                      <p>またinitialValuesには初期値を設定</p>
                      <p className='text-red-400'>components/Auth.tsx</p>
            
                      <h4>handleSubmit</h4>
                      <p>submitボタンが押されたときに実行される関数を作成します。</p>
            
                    </div>
                    <div className='w-1/2'>
            
                    </div>
            
                  </div>
            
                </Layout_tutorial_45>
                ) : id == 5 ? (
                  <Layout_tutorial_45>
                  <h3>Model追加</h3>
                  <p>ブログに必要な項目をモデルに追加します。 </p>
                  <p>on_deleteをCASCADEに設定することでTaskモデルに紐づいたTagが削除されたときにはTaskも削除される</p>
                  <p className='text-red-400'>app/models.py</p>
                  <Tutorial4551 />
                  <p>tagsのidとnameがtaskのtagとtag_nameに紐づいています</p>
                  <div className='flex'>
                    <div className='p-2'>
                      <p className='text-red-400'>/api/task/</p>
                      <Tutorial4555 />
                    </div>
                    <div className='p-2'>
                      <p className='text-red-400'>/api/tags/</p>
                      <Tutorial4556 />
                    </div>
                  </div>
                  <h3>管理画面追加 </h3>
                  <p>Post モデルを管理画面で操作できるようにします。</p>
                  <p className='text-red-400'>app/admin.py</p>
                  <Tutorial4552 />
                  <h3>データベース構築</h3>
                  <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
                  <Tutorial4553 />
                  <p>サーバー起動</p>
                  <Tutorial4554 />
                  <p>データベース登録 </p>
                  <p>管理画面に遷移して、Post データを登録してみましょう </p>
                  <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
            
                </Layout_tutorial_45>
                ) : id == 6 ? (
                  <Layout_tutorial_45>

                  <h3>URL追加</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                  <p className='text-red-400'>mysite/urls.py</p>
                  <Tutorial4561 />
                  <p>アプリケーション用ルーティングを作成</p>
                  <p>app フォルダの下に、urls.py ファイルを作成します。</p>
                  <p className='text-red-400'>api/urls.py</p>
                  <Tutorial4562 />
        
            </Layout_tutorial_45>
                ) : id == 7 ? (
                  <Layout_tutorial_45>
                  <h3>Serializer追加</h3>
                  <p>Serializer とは？</p>
                  <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                  <p>serializers.py ファイルを作成します</p>
                  <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                  <p className='text-red-400'>api/serializers.py</p>
                  <Tutorial4571 />
      
              </Layout_tutorial_45>
                ) : id == 8 ? (
                  <Layout_tutorial_45>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                    <h3>Views追加</h3>
                        <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                        <p>それを継承することで、簡単に開発をすることができます </p>
                        <p className='text-red-400'>api/views.py</p>
                      <Tutorial4581 />
            
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/AuthenForm.tsx</p>
                 
                      <p className='text-red-400'>modal.tsx</p>
            
                    </div>
                  </div>
            
                </Layout_tutorial_45>
                ) : id == 9 ? (
                  <Layout_tutorial_45>
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
                </Layout_tutorial_45>
                ) : id == 10 ? (
                  <Layout_tutorial_45>
                  <div className='flex'>
                    <div className='mr-4 w-1/2'>
                      <h3>Layout.tsx</h3>
                      <p>componentsフォルダを作成し、その直下にLayout.tsxファイルを作ります。</p>
                      <p>rfceでreactコンポーネントを作成 </p>
                      <p>functionalコンポーネントのデータ型とpropsで受け取るchildrenのデータ型を定義するためにReactNodeとVFC。</p>
                      <p className='text-red-400'>components/Layout.tsx</p>
                      <Tutorial45101 />
                      <h3>App.tsx</h3>
                      <p>＜header＞タグ内を削除します。</p>
                      <p>App.test.tsxは使わないので削除します</p>
                      <p className='text-red-400'>App.tsx</p>
                      <Tutorial45102 />
                    </div>
                    <div className='w-1/2'>
                      <p className='text-red-400'>components/Layout.tsx</p>
            
                      <p className='text-red-400'>SendMail.css</p>
            
                    </div>
                  </div>
                </Layout_tutorial_45>
                ) : id == 11 ? (
                  <Layout_tutorial_45>
                  <div className='flex'>
                     <div className='mr-4 w-1/2'>
     
                         <h3></h3>
                         <p>contextフォルダを作成し、StateProvider.tsxを作成。</p>
                         <p>typesフォルダを作成し、types.tsを作成。REST APIから取得するデータ型を定義します</p>
                         <Tutorial45111 />
                         <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                         <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                             <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                             <div>
                                 <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                             </div>
                         </div>
                         <h4>データ型</h4>
                         <p className='text-red-400'>types/types.ts</p>
                         <Tutorial45112 />
                         <h4></h4>
                         <p>createContextを使ってStateContextを作成します</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial45113 />
                         <p>REST APIから取得したtaskの一覧を格納するtasks、darkモードを切り替えるをuseStateで定義します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial45114 />
                         <p>valueには共有したいstateや関数を指定します。</p>
                         <p className='text-red-400'>context/StateProvider.tsx</p>
                         <Tutorial45115 />
                         <h4>hooks</h4>
                         <p>hooksフォルダを作成しを使ってuseClassicalFetch.tsxを作成します</p>
                         <p>useStateContextを使ってtasksとsetTasksを使える</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial45116 />
                         <p>errorの場合はisErrorをtrueにする</p>
                         <p>通信の処理が終わったらisLoadingをfalseにする</p>
                         <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                         <Tutorial45117 />
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
                 </Layout_tutorial_45>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Tutorial4521 = () => {
  const test = `
  myvenv
  db.sqlite3
  .vscode
  __pycache__
  *.pyc
  .DS_Store
  media
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4522 = () => {
  const test = `
  $ python3 -m venv myvenv
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial4523 = () => {
  const test = `
  $ source myvenv/bin/activate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4524 = () => {
  const test = `
  Django~=3.2.3 
  django-cors-headers~=3.7.0 
  djangorestframework~=3.12.4
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial4525 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial4531 = () => {
  const test = `
  django-admin startproject restapi .
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4532 = () => {
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


const Tutorial4533 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4534 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4541 = () => {
  const test = `
  django-admin startapp api
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4542 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py createsuperuser
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4543 = () => {
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

const Tutorial4544 = () => {
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

const Tutorial4545 = () => {
  const test = `
  const [error, setError] = useState('')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4551 = () => {
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



const Tutorial4552 = () => {
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



const Tutorial4553 = () => {
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

const Tutorial4554 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4555 = () => {
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

const Tutorial4556 = () => {
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


const Tutorial4561 = () => {
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



const Tutorial4562 = () => {
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


const Tutorial4571 = () => {
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


const Tutorial4581 = () => {
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


const Tutorial45101 = () => {
  const test = `
    npm add firebase
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial45102 = () => {
  const test = `
    import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import { Layout } from './components/Layout' 
function App() { 
  return ( 
    <BrowserRouter> 
      <Layout> 
        <div> 
        </div> 
      </Layout> 
    </BrowserRouter> 
  ) 
} 
export default App        
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


const Tutorial45111 = () => {
  const test = `
  npm add firebase
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial45112 = () => {
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

const Tutorial45113 = () => {
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

const Tutorial45114 = () => {
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

const Tutorial45115 = () => {
const test = `
<StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>   
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial45116 = () => {
const test = `
const { tasks, setTasks } = useStateContext()
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial45117 = () => {
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

