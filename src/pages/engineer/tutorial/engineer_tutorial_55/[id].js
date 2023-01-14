import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_55 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_55>
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
            <h3>#エラーが発生した場合</h3>
            <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_55>
        ) : id == 2 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>
                <h3>仮想環境の作成 </h3>
                <p>myvenvという名前で仮想環境を構築します。 </p>
                <Tutorial5521 />
                <p>仮想環境を起動。 </p>
                <Tutorial5522 />
                <h3>パッケージのインストール </h3>
                <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。 </p>
                <p>cors-headersでフロントエンドからのアクセスを許可します。</p>
                <p className='text-red-400'>requirements-dev.txt</p>
                <Tutorial5523 />
                <Tutorial5524 />
                <h4>プロジェクト作成</h4>
                <Tutorial5525 />
                <h4>アプリケーション作成</h4>
                <Tutorial5526 />
                <h3>Webサーバーを起動する </h3>
                <p>Djangoが起動できるか確認しましょう。</p>
                <Tutorial5527 />
                <p>URLにアクセスすると、Webページが表示されます。</p>
                <p>http://127.0.0.1:8000/</p>
                <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                <p>追加します。</p>
                <p>GRAPHENEでschema設定。</p>
                <p className='text-red-400'>mysite/settings.py</p>
                <Tutorial5528 />
                <p>JWT認証ます。</p>
                <h4></h4>
              </div>
              <div className='w-1/2'>

              </div>
            </div>
          </Layout_tutorial_55>
        ) : id == 3 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Googleアカウント認証 </h3>
                <p>related_nameで逆参照できるように。</p>
                <p>on_deleteをCASCADEにすることでProfileに紐づいたユーザーが削除されたときはProfileも削除される。</p>
                <p>Profileクラスのインスタンスが作成された。</p>
                <Tutorial5531 />
                <h3>タイトル</h3>
                <p className='text-red-400'>api/models.py</p>
                <Tutorial5532 />
                <h3>モデルの登録</h3>
                <p>。 </p>
                <p>。</p>
                <p className='text-red-400'>api/admin.py</p>
                <Tutorial5533 />
                <h3>superuser作成</h3>
                <p>。</p>
                <Tutorial5534 />
                <h3>schema</h3>
                <p>。</p>
                <Tutorial5535 />
                <p>tickers[company]にはAAPLやFBなどのティッカーシンボルがはいります。</p>
                <p>日付の表示を2021-03-05から05 March 2021に変更することができる。</p>
                <Tutorial5536 />
                <h4>サインイン(email)</h4>
                <p>firebaseのauthモジュールの中に。</p>
                <p>useStateで管理しているemailとpasswordを渡す</p>
                <Tutorial5537 />
                <h4>サインアップ(email)</h4>
                <p>。</p>
                <Tutorial5538 />
                <p>valueとonChangeを追記。</p>
                <Tutorial5539 />
                <p>表示の切り替え。</p>
                <Tutorial55310 />
                <Tutorial55311 />
                <h4></h4>
                <p>Loginしている場合はRegister、Registerの場合はLogin</p>
                <Tutorial55312 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>pages/_document.tsx</p>
                <Tutorial55322 />

              </div>

            </div>
          </Layout_tutorial_55>
        ) : id == 4 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Youtube </h3>
                <p>アプリケーションを作成してきます。 </p>
                <p>app という名前のアプリケーションを作成します。</p>
                <Tutorial5441 />
                <h3>サンプルコード</h3>
                <p>管理ユーザーを作成しておきましょう。</p>
                <Tutorial5442 />
                <p>search.list()によって検索するための条件を設定しています。</p>
                <p>詳しくは<a href='https://developers.google.com/youtube/v3/docs/search/list?hl=ja'>こちら</a></p>
                <Tutorial5443 />
                <h3>パラメーターの変更</h3>
                <p>動画を再生順が多い順にするorderとtypeを追加する</p>
                <Tutorial5444 />
                <p>エラーメッセージを格納させるためのstateを作成します</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial5454 />
                <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                <p>またinitialValuesには初期値を設定</p>
                <p className='text-red-400'>components/Auth.tsx</p>

                <h4>handleSubmit</h4>
                <p>submitボタンが押されたときに実行される関数を作成します。</p>

              </div>
              <div className='w-1/2'>

              </div>

            </div>

          </Layout_tutorial_55>
        ) : id == 5 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h4>プロジェクト作成</h4>
                <Tutorial5551 />

                <p className='text-red-400'>app/models.py</p>

                <h4>パッケージのインストール</h4>
                <Tutorial5552 />
                <p>App.cssをApp.module.cssにファイル名変更し、ファイルの中身を削除。</p>
                <p>必要のないコードを削除</p>
                <p className='text-red-400'>src/App.js</p>
                <Tutorial5553 />
                <h4>componentsフォルダ作成</h4>
                <p>srcフォルダ直下にqueries.js作成</p>
                <p>Auth.jsとMainPage.jsを作成。</p>
                <h4>コマンド作成</h4>
                <p>!は入力必須、$で変数として扱うことができる</p>
                <h5>create_user</h5>
                <p>返り値としてuserのidとusernameを取得する</p>
                <p className='text-red-400'>src/queries.js</p>

                <Tutorial5554 />
                <h5>get_token</h5>
                <p className='text-red-400'>src/queries.js</p>
                <Tutorial5555 />
                <h5>create_profile</h5>
                <p className='text-red-400'>src/queries.js</p>
                <Tutorial5556 />
                <h5>get_profiles</h5>
                <p>profile一覧取得</p>
                <p className='text-red-400'>src/queries.js</p>
                <Tutorial5557 />
                <h5>get_myprofile</h5>
                <p>profilesFollowingsが逆参照のフィールドになっている </p>
                <p className='text-red-400'>src/queries.js</p>
                <Tutorial5558 />
                <p>UserCに対してUserAとUserBからfollowされている。 </p>
                <Image
                  className='m-2 border border-black '
                  src="/images/tutorial/back_reference.png"
                  alt=""
                  width={760}
                  height={420}
                />
                <h5>update_myprofile</h5>
                <p>イ。 </p>
                <Tutorial5559 />
              </div>
              <div className='w-1/2'>

              </div>

            </div>
          </Layout_tutorial_55>
        ) : id == 6 ? (
          <Layout_tutorial_55>

            <h3>URL追加</h3>
            <p>componentsフォルダにAuth.module.cssとMainPage.module.cssを作成します。</p>
            <p className='text-red-400'>components/Auth.module.css</p>
            <Tutorial5561 />
            <p className='text-red-400'>components/MainPage.module.css</p>
            <Tutorial5562 />
            <p>ボタンの表記を動的に変化させることができる。 </p>
          </Layout_tutorial_55>
        ) : id == 7 ? (
          <Layout_tutorial_55>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>api/serializers.py</p>
            <Tutorial5471 />

          </Layout_tutorial_55>
        ) : id == 8 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>。</p>
                <p> </p>
                <p className='text-red-400'>api/models.py</p>
                <Tutorial5581 />
                <Tutorial5582 />
                <Tutorial5583 />
                <Tutorial5584 />
                <p className='text-red-400'>api/admin.py</p>
                <Tutorial5585 />
                <p className='text-red-400'>api/schema.py</p>
                <Tutorial5586 />
                <p className='text-red-400'>sns/schema.py</p>
                <Tutorial5587 />
                <p className='text-red-400'>sns/urls.py</p>
                <Tutorial5588 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>

                <p className='text-red-400'>modal.tsx</p>

              </div>
            </div>

          </Layout_tutorial_55>
        ) : id == 9 ? (
          <Layout_tutorial_55>
            <h3>パッケージのインストール </h3>
            <p className='text-red-400'>api/serializers.py</p>
            <Tutorial5591 />
            <h4>componentsフォルダ作成</h4>
            <p>Auth.jsとMainPage.jsを作成。</p>
            <p>componentsフォルダにAuth.module.cssとMainPage.module.cssを作成します。</p>
            <p>App.cssをApp.module.cssにファイル名変更し、ファイルの中身を削除。</p>
            <div className='flex'>
              <div>
                <p>AがBへ友達申請</p>
                <p>Bが承認し双方のfriendsリストに追加</p>
                <p>友達申請の削除</p>
              </div>
              <Image
                className='m-2 border border-black '
                src="/images/tutorial/main_page.png"
                alt=""
                width={400}
                height={420}
              />
            </div>

          </Layout_tutorial_55>
        ) : id == 10 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>。</p>
                <p> </p>
                <p className='text-red-400'>api/models.py</p>
                <Tutorial5581 />
                <Tutorial5582 />
                <Tutorial5583 />
                <Tutorial5584 />
                <p className='text-red-400'>api/admin.py</p>
                <Tutorial5585 />
                <p className='text-red-400'>api/schema.py</p>
                <Tutorial5586 />
                <p className='text-red-400'>sns/schema.py</p>
                <Tutorial5587 />
                <p className='text-red-400'>sns/urls.py</p>
                <Tutorial5588 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>

                <p className='text-red-400'>modal.tsx</p>

              </div>
            </div>

          </Layout_tutorial_55>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial5521 = () => {
  const test = `
  $ python3 -m venv myvenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5522 = () => {
  const test = `
  source myvenv/bin/activate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5523 = () => {
  const test = `
  aniso8601==7.0.0 
  asgiref==3.2.10 
  certifi==2020.12.5 
  Django==3.1.2 
  django-cors-headers==3.5.0 
  django-filter==2.4.0 
  django-graphql-jwt==0.3.1 
  graphene==2.1.8 
  graphene-django==2.13.0 
  graphql-core==2.3.2 
  graphql-relay==2.0.1 
  promise==2.3 
  PyJWT==1.7.1 
  pytz==2020.4 
  Rx==1.6.1 
  singledispatch==3.4.0.3 
  six==1.15.0 
  sqlparse==0.4.1 
  Unidecode==1.1.1
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5524 = () => {
  const test = `
  pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5525 = () => {
  const test = `
  django-admin startproject sns .
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5526 = () => {
  const test = `
  django-admin startapp api
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5527 = () => {
  const test = `
  python3 manage.py runserver
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5528 = () => {
  const test = `
  INSTALLED_APPS = [
    'graphene_django', 
    'api.apps.ApiConfig', 
    'corsheaders', 
  ]

  MIDDLEWARE = [ 
    'corsheaders.middleware.CorsMiddleware',
  ]

  GRAPHQL_JWT = { 
    'JWT_VERIFY_EXPIRATION': True, 
    'JWT_EXPIRATION_DELTA': timedelta(minutes=30), 
  }


  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5531 = () => {
  const test = `
  import pandas as pd 
  import yfinance as yf 
  import altair as alt 
  import streamlit as st 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5532 = () => {
  const test = `
  from django.db import models 
  from django.contrib.auth.models import User 

  class Profile(models.Model): 
      user_prof = models.OneToOneField( 
          User, 
          related_name = 'profile', 
          on_delete = models.CASCADE 
      ) 
      following = models.ManyToManyField( 
          User, 
          related_name = 'profiles_followings', blank = True 
      ) 
      created_on = models.DateTimeField(auto_now_add = True) 

      def __str__(self): 
          return self.user_prof.username
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5533 = () => {
  const test = `
  from django.contrib import admin 
  from .models import Profile 

  admin.site.register(Profile)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5534 = () => {
  const test = `
  python manage.py createsuperuser
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5535 = () => {
  const test = `
  @st.cache 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5536 = () => {
  const test = `
  hist.index = hist.index.strftime('%d %B %Y') 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5537 = () => {
  const test = `
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

  const signInEmail = async () => { 
    await auth.signInWithEmailAndPassword(email, password); 
};
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5538 = () => {
  const test = `
  const signUpEmail = async () => { 
    await auth.createUserWithEmailAndPassword(email, password); 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5539 = () => {
  const test = `
  <TextField 
  variant="outlined" 
  margin="normal" 
  required 
  fullWidth 
  id="email" 
  label="Email Address" 
  name="email" 
  autoComplete="email" 
  autoFocus 
  value={email} 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ 
    setEmail(e.target.value); 
  }} 
/> 
<TextField 
  variant="outlined" 
  margin="normal" 
  required 
  fullWidth 
  name="password" 
  label="Password" 
  type="password" 
  id="password" 
  autoComplete="current-password" 
  value={password} 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{ 
    setPassword(e.target.value); 
  }} 
/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55310 = () => {
  const test = `
<Typography component="h1" variant="h5"> 
  {isLogin ? "Login" : "Register"} 
</Typography>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial55311 = () => {
  const test = `
<Button
  type="submit"
  fullWidth
  variant="contained"
  color="primary"
  className={classes.submit}
>
  {isLogin ? "Login" : "Register"}
</Button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial55312 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55313 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55321 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial55322 = () => {
  const test = `
import pandas as pd 
import yfinance as yf 
import altair as alt 
import streamlit as st 
st.title('米国株価可視化アプリ') 
st.sidebar.write(""" 
# GAFA株価 
こちらは株価可視化ツールです。以下のオプションから表示日数を指定できます。 
""") 
st.sidebar.write(""" 
## 表示日数選択 
""") 
days = st.sidebar.slider('日数', 1, 50, 20) 
st.write(f""" 
### 過去 **{days}日間** のGAFA株価 
""") 
@st.cache 
def get_data(days, tickers): 
    df = pd.DataFrame() 
    for company in tickers.keys(): 
        tkr = yf.Ticker(tickers[company]) 
        hist = tkr.history(period=f'{days}d') 
        hist.index = hist.index.strftime('%d %B %Y') 
        hist = hist[['Close']] 
        hist.columns = [company] 
        hist = hist.T 
        hist.index.name = 'Name' 
        df = pd.concat([df, hist]) 
    return df 
try:  
    st.sidebar.write(""" 
    ## 株価の範囲指定 
    """) 
    ymin, ymax = st.sidebar.slider( 
        '範囲を指定してください。', 
        0.0, 3500.0, (0.0, 3500.0) 
    ) 
    tickers = { 
        'apple': 'AAPL', 
        'facebook': 'FB', 
        'google': 'GOOGL', 
        'microsoft': 'MSFT', 
        'netflix': 'NFLX', 
        'amazon': 'AMZN' 
    } 
    df = get_data(days, tickers) 
    companies = st.multiselect( 
        '会社名を選択してください。', 
        list(df.index), 
        ['google', 'amazon', 'facebook', 'apple'] 
    ) 
    if not companies: 
        st.error('少なくとも一社は選んでください。') 
    else: 
        data = df.loc[companies] 
        st.write("### 株価 (USD)", data.sort_index()) 
        data = data.T.reset_index() 
        data = pd.melt(data, id_vars=['Date']).rename( 
            columns={'value': 'Stock Prices(USD)'} 
        ) 
        chart = ( 
            alt.Chart(data) 
            .mark_line(opacity=0.8, clip=True) 
            .encode( 
                x="Date:T", 
                y=alt.Y("Stock Prices(USD):Q", stack=None, scale=alt.Scale(domain=[ymin, ymax])), 
                color='Name:N' 
            ) 
        ) 
        st.altair_chart(chart, use_container_width=True) 
except: 
    st.error( 
        "おっと！なにかエラーが起きているようです。" 
    )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5551 = () => {
  const test = `
  npx create-react-app . --use-npm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5552 = () => {
  const test = `
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material

  npm i react-router-dom@5.3.0

  npm i apollo-boost react-apollo graphql-tag graphql --force
  npm i @apollo/react-hooks
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5553 = () => {
  const test = `
  import React from 'react'; 
  import styles from "./App.module.css"; 
  const App = () => { 
    return ( 
      <div className="App"> 
         
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

const Tutorial5554 = () => {
  const test = `
  export const CREATE_USER = gql' 
  mutation($username: String!, $password: String!){ 
      createUser(input: {username: $username, password: $password, email: ""}){ 
          user { 
              id 
              username 
          } 
      } 
  } 
  ';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5555 = () => {
  const test = `
  export const GET_TOKEN = gql' 
  mutation($username: String!, $password: String!){ 
      tokenAuth(username: $username, password: $password){ 
          token 
      } 
  } 
  '; 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5556 = () => {
  const test = `
  export const CREATE_PROFILE = gql'
  mutation { 
      createProfile(input:{}){ 
          profile { 
              id 
              userProf { 
                  username 
              } 
          } 
      } 
  } 
  ';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5557 = () => {
  const test = `
  export const GET_PROFILES = gql' 
  query { 
      allProfiles { 
          edges { 
              node { 
                  id 
                  userProf { 
                      id 
                      username 
                  } 
                  followers { 
                      edges { 
                          node { 
                              id 
                              username 
                          } 
                      } 
                  } 
              } 
          } 
      } 
  } 
  '; 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5558 = () => {
  const test = `
export const GET_MYPROFILE = gql' 
  query { 
    profile { 
        id 
        userProf { 
            id 
            username 
            profilesFollowings { 
                edges { 
                    node { 
                        userProf { 
                            id 
                            username 
                        } 
                    } 
                } 
            } 
        } 
        followings { 
            edges { 
                node { 
                    id 
                    username 
                } 
            } 
        } 
    } 
} 
';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5559 = () => {
  const test = `
  export const UPDATE_PROFILE = gql' 
  mutation($id: ID!, $followings: [ID!]) { 
    updateProfile(input: { id: $id, followings: $followings }) { 
      profile { 
        id 
        userProf { 
          username 
        } 
        followings { 
          edges { 
            node { 
              username 
            } 
          } 
        } 
      } 
    } 
  } 
';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5561 = () => {
  const test = `
  .auth { 
    text-align: center; 
    height: 100vh; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  } 
  .auth__input { 
    margin: 10px; 
  } 
  .auth__toggle { 
    margin: 10px; 
    color: dimgray; 
    cursor: pointer; 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5562 = () => {
  const test = `
  .mainPage__root { 
    margin: 30px; 
  } 
  .mainPage__title { 
    font-size: 28px; 
    font-family: "Gill Sans", sans-serif; 
  } 
  .mainPage__out { 
    margin-left: 10px; 
    color: dimgray; 
    cursor: pointer; 
  } 
  .mainPage__input { 
    margin-right: 10px; 
  } 
  .mainPage__list { 
    height: 300px; 
    overflow: hidden; 
    overflow-y: auto; 
  } 
  .mainPage__item { 
    display: flex; 
    justify-content: space-between; 
    padding-bottom: 5px; 
  } 
  .mainPage__delete { 
    color: dimgray; 
    cursor: pointer; 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5581 = () => {
  const test = `
  from django.db import models 
  from django.contrib.auth.models import User 
  class Profile(models.Model): 
      user_prof = models.OneToOneField( 
          User, related_name='profile', 
          on_delete=models.CASCADE 
      ) 
      friends = models.ManyToManyField( 
          User, related_name='profiles_friends',  blank=True 
      ) 
      friend_requests = models.ManyToManyField( 
          User, related_name='profiles_friend_requests',  blank=True 
      ) 
      created_on = models.DateTimeField(auto_now_add=True) 
      def __str__(self): 
          return self.user_prof.username
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5582 = () => {
  const test = `
  python manage.py makemigrations
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5583 = () => {
  const test = `
  python manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5584 = () => {
  const test = `
  python manage.py createsuperuser
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5585 = () => {
  const test = `
  from django.contrib import admin 
  from .models import Profile 
  # Register your models here. 
  admin.site.register(Profile)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5586 = () => {
  const test = `
  from django.contrib import admin 
  from .models import Profile 
  # Register your models here. 
  admin.site.register(Profile)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5587 = () => {
  const test = `
  from django.contrib import admin 
  from .models import Profile 
  # Register your models here. 
  admin.site.register(Profile)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5588 = () => {
  const test = `
  from django.contrib import admin 
  from django.urls import path 
  from graphene_django.views import GraphQLView 
  from sns.schema import schema 
  from django.views.decorators.csrf import csrf_exempt 

  urlpatterns = [ 
      path('admin/', admin.site.urls), 
      path('graphql/', csrf_exempt(GraphQLView.as_view(graphql=True, schema=schema))), 
  ]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5591 = () => {
  const test = `
  npx create-react-app . --use-npm
  npm i react-router-dom@5.3.0
  npm install @apollo/client graphql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};