import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_57 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_57>
            <h3>宿泊予約サイトのユーザーデータを活用しよう </h3>
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
          </Layout_tutorial_57>
        ) : id == 2 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>
                <p>GitHub準備 </p>
                <p>GitHubのリポジトリを作成します。 </p>
                <p>.gitignore作成 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5521 />
                <h3>仮想環境の作成 </h3>
                <p>myvenvという名前で仮想環境を構築します。 </p>
                <Tutorial5522 />
                <p>データベースのセットアップ </p>
                <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>
                <Tutorial5523 />
                <h4>Material UIインストール</h4>
                <Tutorial5524 />
                <h4>firebaseインストール</h4>
                <Tutorial5525 />
                <h4>環境ファイル作成</h4>
                <Tutorial5526 />
                <h4>firebase.tsファイル作成</h4>
                <p className='text-red-400'>src/firebase.ts</p>
                <Tutorial5527 />
                <h4>userSlice.tsファイル作成</h4>
                <p>Reduxのstoreで扱いたいstateの内容を定義。</p>
                <p>reducersでactionのpayload経由で受け取ったuserの情報で更新</p>
                <p>loginに成功した時にfirebaseから取得したuser情報をreact側のReduxのstateに反映させることができる</p>
                <p className='text-red-400'>src/features/userSlice.ts</p>
                <Tutorial5528 />

                <p>userが存在するときはFeedコンポーネントが表示されて、存在しないときはAuthコンポーネントが表示される</p>
                <p className='text-red-400'>src/features/userSlice.ts</p>
                <Tutorial55215 />
              </div>
              <div className='w-1/2'>
                <Tutorial5529 />
              </div>
            </div>
          </Layout_tutorial_55>
        ) : id == 3 ? (
          <Layout_tutorial_55>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>洋服の画像データを活用しよう</h3>
                <p>。</p>
                <Tutorial5531 />
                <h3>タイトル</h3>
                <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                <Tutorial5532 />
                <h3>sidebar</h3>
                <p>デフォルトは20で1から50までのスライドを作成されます。 </p>
                <p>選択した日数をdaysに格納します。</p>
                <Tutorial5533 />
                <h3>Auth.module.css</h3>
                <p>。</p>
                <Tutorial5534 />
                <p>キャッシュを使うことで毎回データを取得する必要がなくなる。</p>
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
          <Layout_tutorial_57>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Youtube </h3>
                <p>アプリケーションを作成してきます。 </p>
                <p>app という名前のアプリケーションを作成します。</p>
                <Tutorial5741 />
                <h3>サンプルコード</h3>
                <p>管理ユーザーを作成しておきましょう。</p>
                <Tutorial5742 />
                <p>search.list()によって検索するための条件を設定しています。</p>
                <p>詳しくは<a href='https://developers.google.com/youtube/v3/docs/search/list?hl=ja'>こちら</a></p>
                <Tutorial5743 />
                <h3>パラメーターの変更</h3>
                <p>動画を再生順が多い順にするorderとtypeを追加する</p>
                <Tutorial5744 />
                <p>エラーメッセージを格納させるためのstateを作成します</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial5757 />
                <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                <p>またinitialValuesには初期値を設定</p>
                <p className='text-red-400'>components/Auth.tsx</p>

                <h4>handleSubmit</h4>
                <p>submitボタンが押されたときに実行される関数を作成します。</p>

              </div>
              <div className='w-1/2'>

              </div>

            </div>

          </Layout_tutorial_57>
        ) : id == 5 ? (
          <Layout_tutorial_57>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h4>FeedからのLogout</h4>
                <p>。</p>
                <p className='text-red-400'>app/models.py</p>
                <Tutorial5751 />
                <h4>Tweet機能</h4>
                <p>Post モデルを管理画面で操作できるようにします。</p>
                <p className='text-red-400'>app/admin.py</p>
                <Tutorial5752 />
                <h4>画像のupload</h4>
                <p>。</p>
                <Tutorial5757 />
                <p>画像がある場合とない場合で条件分岐を行います。</p>
                <h5>画像がある場合</h5>
                <p>storage.refの返り値がuploadTweetImgに格納される</p>
                <p>storageが更新されたときにon</p>
                <p>1つ目が進捗。2つ目がエラーのハンドリング。3つ目が正常終了した場合に実行される関数</p>
                <Tutorial5757 />
                <h5>画像がない場合</h5>
                <p>collection名はpostにします</p>
                <p>投稿が終わった後にtweetImageとtweetMsgのstateをリセットします </p>
                <Tutorial5755 />
                <p>データベース登録 </p>

                <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
              </div>
              <div className='w-1/2'>

              </div>

            </div>
          </Layout_tutorial_57>
        ) : id == 6 ? (
          <Layout_tutorial_57>

            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial5761 />
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <p className='text-red-400'>api/urls.py</p>
            <Tutorial5762 />

          </Layout_tutorial_57>
        ) : id == 7 ? (
          <Layout_tutorial_57>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>api/serializers.py</p>
            <Tutorial5771 />

          </Layout_tutorial_57>
        ) : id == 8 ? (
          <Layout_tutorial_57>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                <p>それを継承することで、簡単に開発をすることができます </p>
                <p className='text-red-400'>api/views.py</p>
                <Tutorial5781 />

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>

                <p className='text-red-400'>modal.tsx</p>

              </div>
            </div>

          </Layout_tutorial_57>
        ) : id == 9 ? (
          <Layout_tutorial_57>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <p>新しくプロジェクトを作ります。</p>

                <h3>準備 </h3>
                <p>Linux環境でプロジェクトを作成します</p>
                <Tutorial5791 />
                <h4>TailwindCSS導入</h4>
                <Tutorial5792 />
                <h3>tailwind.config.js修正</h3>
                <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
                <Tutorial5793 />
                <h3>global.css修正</h3>
                <Tutorial5794 />
                <h3>react-query、heroiconsインストール</h3>
                <Tutorial5795 />
                <h3>touch .prettierrc</h3>
                <Tutorial5796 />
                <p className='text-red-400'>.prettierrc</p>
                <Tutorial5797 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
                <Tutorial5799 />
                <p className='text-red-400'>SendMail.css</p>
                <Tutorial57910 />
              </div>
            </div>
          </Layout_tutorial_57>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial5521 = () => {
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



const Tutorial5522 = () => {
  const test = `
  $ python3 -m venv myvenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5523 = () => {
  const test = `
  npx create-react-app . --template redux-typescript --use-npm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5524 = () => {
  const test = `
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5525 = () => {
  const test = `
  npm i firebase@8.10.0
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5526 = () => {
  const test = `
  hist.T
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5527 = () => {
  const test = `
  import firebase from "firebase/app"; 
  import "firebase/auth"; 
  import "firebase/firestore"; 
  import "firebase/storage"; 
  const firebaseConfig = { 
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN, 
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE, 
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID, 
    appId: process.env.REACT_APP_FIREBASE_APP_ID, 
  }; 
  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  export const db = firebaseApp.firestore(); 
  export const auth = firebase.auth(); 
  export const storage = firebase.storage(); 
  export const provider = new firebase.auth.GoogleAuthProvider();
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5528 = () => {
  const test = `
  initialState:{ 
      user:{uid:"",photoUrl:"",displayName:""} 
    },
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5529 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial55210 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial55211 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55212 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55213 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55214 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial55215 = () => {
  const test = `
  return ( 
      <> 
        {user.uid ? ( 
          <div className={styles.app}> 
            <Feed /> 
          </div> 
        ) : ( 
          <Auth /> 
        )} 
      </> 
    );
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
  st.title('米国株価可視化アプリ') 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5533 = () => {
  const test = `
  # GAFA株価 
  こちらは株価可視化ツールです。以下のオプションから表示日数を指定できます。 
  """) 
  st.sidebar.write(""" 
  ## 表示日数選択 
  """) 
  days = st.sidebar.slider('日数', 1, 50, 20) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5534 = () => {
  const test = `
  .login_toggleMode { 
    cursor: pointer; 
    color: #0000ff; 
  } 
  .login_modal { 
    text-align: center; 
  } 
  .login_reset { 
    cursor: pointer; 
  } 
  .login_hiddenIcon { 
    text-align: center; 
    display: none; 
  } 
  .login_addIcon { 
    cursor: pointer; 
    color: gray; 
  } 
  .login_addIconLoaded { 
    cursor: pointer; 
    color: whitesmoke; 
  }
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


const Tutorial5741 = () => {
  const test = `
  !pip3 install google-api-python-client
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5742 = () => {
  const test = `
  from apiclient.discovery import build
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5743 = () => {
  const test = `
  DEVELOPER_KEY = "AIzaSyAVHRckOyrNT5AvFrYopndOXRrNSyHz0ro" 
  YOUTUBE_API_SERVICE_NAME = "youtube" 
  YOUTUBE_API_VERSION = "v3" 
  # def youtube_search(options): 
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY) 
  q="Python" 
  max_results = 50 
  search_response = youtube.search().list( 
  q=q, 
  part="id,snippet", 
  maxResults=max_results 
  ).execute()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5744 = () => {
  const test = `
  search_response = youtube.search().list( 
    q=q, 
    part="id,snippet", 
    order="viewCount" 
    type="video" 
    maxResults=max_results 
    ).execute()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5757 = () => {
  const test = `
  const [error, setError] = useState('')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5751 = () => {
  const test = `
  const user = useSelector(selectUser);
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5752 = () => {
  const test = `
  const user = useSelector(selectUser);
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5753 = () => {
  const test = `
  const [tweetImage, setTweetImage] = useState<File | null>(null);

  const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => { 
    if (e.target.files![0]) { 
      setTweetImage(e.target.files![0]); 
      e.target.value = ""; 
    } 
  };
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5757 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5755 = () => {
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

const Tutorial5756 = () => {
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


const Tutorial5761 = () => {
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



const Tutorial5762 = () => {
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


const Tutorial5771 = () => {
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


const Tutorial5781 = () => {
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


const Tutorial5791 = () => {
  const test = `
  npx create-react-app react-query-lesson --template redux-typescript
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5792 = () => {
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

const Tutorial5793 = () => {
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

const Tutorial5794 = () => {
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

const Tutorial5795 = () => {
  const test = `
  npm install @tanstack/react-query @tanstack/react-query-devtools react-router-dom @types/react-router-dom axios @heroicons/react  
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5796 = () => {
  const test = `
  touch .prettierrc
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5797 = () => {
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

const Tutorial5799 = () => {
  const test = `
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial57910 = () => {
  const test = `
  
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
