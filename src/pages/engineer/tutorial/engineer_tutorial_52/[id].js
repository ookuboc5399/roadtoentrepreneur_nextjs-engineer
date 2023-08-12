import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_52 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_52>
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
              <iframe width="560" height="315" src="https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649161#overview"></iframe>
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
          </Layout_tutorial_52>
        ) : id == 2 ? (
          <Layout_tutorial_52>
            <h3 className='text-center'> Mapty</h3>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>CDNを利用してLeafletのコードをhtmlに追加します。 </p>
                <p>ここでscriptタグにdeferを追加します。deferを追加することでjsファイルの読み込みと実行のタイミングを調整することができます。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Sanity</div>
                <div class="flex flex-nowrap">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">defer</h5>
                      </a>
                      <a href="https://www.sanity.io/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Leaflet</h5>
                      </a>
                      <a href="https://www.sanity.io/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h4>Leafletインストール</h4>
                <Tutorial5221 />
                <h4>サンプルコード</h4>
                <p>サンプルコードをscript.jsに追加します。 </p>
                <p>L.map(&aposmap&apos)とすることでhtmlのなかでのid=&quot;map&quot;のdivタグにおいて地図が表示される</p>
                <Tutorial5222 />
                <h4>現在値を取得</h4>
                <h4>地図上の位置を取得</h4>
                <Tutorial5223 />
                <p>latlngのなかにlat lngを持つオブジェクトがある。にクリックした緯度経度が表示されている</p>
                <Tutorial5224 />


                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">corsheaders:</span> が必要
                  </div>
                </div>
              </div>
              <div className='w-1/2'>
                <Tutorial5229 />
              </div>
            </div>
          </Layout_tutorial_52>
        ) : id == 3 ? (
          <Layout_tutorial_52>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>クリック時にフォームを表示 </h3>
                <p>index.htmlにはフォームが作成されており、hiddenで見えなくなっている。</p>
                <p>。</p>
                <Tutorial5231 />
                <p>classに設定されているhiddenを削除することでマップをクリックしたときにフォームが表示される</p>
                <Tutorial5232 />
                <h3>sidebar</h3>
                <p>デフォルトは20で1から50までのスライドを作成されます。 </p>
                <p>選択した日数をdaysに格納します。</p>
                <Tutorial5233 />
                <h3>フォームでsubmitされたときの処理</h3>
                <p>*で囲うことで太字になる。</p>
                <Tutorial5234 />
                <h3>フォームのtypeが変わることによって表示を変える</h3>
                <p>Typeが変更された時にdivタグに設定されているform__row--hiddenをtoggleさせている。</p>
                <p className='text-red-400'>index.html</p>
                <Tutorial5235 />
                <p className='text-red-400'>script.js</p>
                <Tutorial5236 />
                <p>終値のみを使用する。</p>
                <Tutorial5237 />
                <p>行と列を入れ替えることができる。</p>
                <Tutorial5238 />
                <p>列の名前をCloseからcompanyの名前に変更。</p>
                <Tutorial5239 />
                <p>列の名前をCloseからcompanyの名前に変更。</p>
                <Tutorial52310 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>pages/_document.tsx</p>
                <Tutorial52322 />

              </div>

            </div>
          </Layout_tutorial_52>
        ) : id == 4 ? (
          <Layout_tutorial_52>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Youtube </h3>
                <p>アプリケーションを作成してきます。 </p>
                <p>app という名前のアプリケーションを作成します。</p>
                <Tutorial5241 />
                <h3>サンプルコード</h3>
                <p>管理ユーザーを作成しておきましょう。</p>
                <Tutorial5242 />
                <p>search.list()によって検索するための条件を設定しています。</p>
                <p>詳しくは<a href='https://developers.google.com/youtube/v3/docs/search/list?hl=ja'>こちら</a></p>
                <Tutorial5243 />
                <h3>パラメーターの変更</h3>
                <p>動画を再生順が多い順にするorderとtypeを追加する</p>
                <Tutorial5244 />
                <p>エラーメッセージを格納させるためのstateを作成します</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial5252 />
                <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                <p>またinitialValuesには初期値を設定</p>
                <p className='text-red-400'>components/Auth.tsx</p>

                <h4>handleSubmit</h4>
                <p>submitボタンが押されたときに実行される関数を作成します。</p>

              </div>
              <div className='w-1/2'>

              </div>

            </div>

          </Layout_tutorial_52>
        ) : id == 5 ? (
          <Layout_tutorial_52>
            <h3>Model追加</h3>
            <p>ブログに必要な項目をモデルに追加します。 </p>
            <p>on_deleteをCASCADEに設定することでTaskモデルに紐づいたTagが削除されたときにはTaskも削除される</p>
            <p className='text-red-400'>app/models.py</p>
            <Tutorial5252 />
            <p>tagsのidとnameがtaskのtagとtag_nameに紐づいています</p>
            <div className='flex'>
              <div className='p-2'>
                <p className='text-red-400'>/api/task/</p>
                <Tutorial5255 />
              </div>
              <div className='p-2'>
                <p className='text-red-400'>/api/tags/</p>
                <Tutorial5256 />
              </div>
            </div>
            <h3>管理画面追加 </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <p className='text-red-400'>app/admin.py</p>
            <Tutorial5252 />
            <h3>データベース構築</h3>
            <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
            <Tutorial5253 />
            <p>サーバー起動</p>
            <Tutorial5254 />
            <p>データベース登録 </p>
            <p>管理画面に遷移して、Post データを登録してみましょう </p>
            <p>イメージ画像は正方形の画像をアップロードしてください。 </p>

          </Layout_tutorial_52>
        ) : id == 6 ? (
          <Layout_tutorial_52>

            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial5261 />
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <p className='text-red-400'>api/urls.py</p>
            <Tutorial5262 />

          </Layout_tutorial_52>
        ) : id == 7 ? (
          <Layout_tutorial_52>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>api/serializers.py</p>
            <Tutorial5271 />

          </Layout_tutorial_52>
        ) : id == 8 ? (
          <Layout_tutorial_52>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                <p>それを継承することで、簡単に開発をすることができます </p>
                <p className='text-red-400'>api/views.py</p>
                <Tutorial5281 />

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>

                <p className='text-red-400'>modal.tsx</p>

              </div>
            </div>

          </Layout_tutorial_52>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial5221 = () => {
  const test = `
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.1/dist/leaflet.css" integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14=" crossorigin="" /> 
  <script src="https://unpkg.com/leaflet@1.9.1/dist/leaflet.js" integrity="sha256-NDI0K41gVbWqfkkaHj15IzU7PtMoelkzyKp8TOaFQ3s=" crossorigin=""></script>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5222 = () => {
  const test = `
  const map = L.map('map').setView([51.505, -0.09], 13); 
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
  }).addTo(map); 
  L.marker([51.5, -0.09]).addTo(map) 
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.') 
      .openPopup();
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5223 = () => {
  const test = `
  pip install mediapipe
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5224 = () => {
  const test = `
  days = 20 
  hist = aapl.history(period=f'{days}d')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5225 = () => {
  const test = `
  hist.T
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5229 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5231 = () => {
  const test = `
  <form class="form hidden"> 
  <div class="form__row"> 
    <label class="form__label">Type</label> 
    <select class="form__input form__input--type"> 
      <option value="running">Running</option> 
      <option value="cycling">Cycling</option> 
    </select> 
  </div> 
  <div class="form__row"> 
    <label class="form__label">Distance</label> 
    <input class="form__input form__input--distance" placeholder="km" /> 
  </div> 
  <div class="form__row"> 
    <label class="form__label">Duration</label> 
    <input 
      class="form__input form__input--duration" 
      placeholder="min" 
    /> 
  </div> 
  <div class="form__row"> 
    <label class="form__label">Cadence</label> 
    <input 
      class="form__input form__input--cadence" 
      placeholder="step/min" 
    /> 
  </div> 
  <div class="form__row form__row--hidden"> 
    <label class="form__label">Elev Gain</label> 
    <input 
      class="form__input form__input--elevation" 
      placeholder="meters" 
    /> 
  </div> 
  <button class="form__btn">OK</button> 
</form>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5232 = () => {
  const test = `
  form.classList.remove('hidden');
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5233 = () => {
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



const Tutorial5234 = () => {
  const test = `
  form.addEventListener('submit', function(e){ 
    e.preventDefault(); 
   const { lat, lng } = mapEvent.latlng; 
        L.marker([lat, lng]) 
          .addTo(map) 
          .bindPopup(L.popup({maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false,className: 'running-popup'})) 
          .setPopupContent('Workout') 
          .openPopup(); 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5235 = () => {
  const test = `
<div class="form__row"> 
  <label class="form__label">Cadence</label> 
  <input 
    class="form__input form__input--cadence" 
    placeholder="step/min" 
  /> 
</div> 
<div class="form__row form__row--hidden"> 
  <label class="form__label">Elev Gain</label> 
  <input 
    class="form__input form__input--elevation" 
    placeholder="meters" 
  /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5236 = () => {
  const test = `
  inputType.addEventListener('change', function () { 
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); 
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5237 = () => {
  const test = `
  hist = hist[['Close']] 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5238 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5239 = () => {
  const test = `
  hist.columns = [company] 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial52310 = () => {
  const test = `
  tickers = { 
    'apple': 'AAPL', 
    'facebook': 'FB', 
    'google': 'GOOGL', 
    'microsoft': 'MSFT', 
    'netflix': 'NFLX', 
    'amazon': 'AMZN' 
} 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial52311 = () => {
  const test = `
  tkr = yf.Ticker(tickers[company]) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial52312 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial52313 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial52321 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial52322 = () => {
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


const Tutorial5241 = () => {
  const test = `
  !pip3 install google-api-python-client
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5242 = () => {
  const test = `
  from apiclient.discovery import build
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5243 = () => {
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

const Tutorial5244 = () => {
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



const Tutorial5251 = () => {
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



const Tutorial5252 = () => {
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



const Tutorial5253 = () => {
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

const Tutorial5254 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5255 = () => {
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

const Tutorial5256 = () => {
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


const Tutorial5261 = () => {
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



const Tutorial5262 = () => {
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


const Tutorial5271 = () => {
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


const Tutorial5281 = () => {
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
