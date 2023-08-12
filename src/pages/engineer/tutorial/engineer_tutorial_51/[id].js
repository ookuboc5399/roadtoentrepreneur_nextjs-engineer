import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_51 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_51>
            <h3>Streamlitとは </h3>
            <p></p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_51>
        ) : id == 2 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>
                <h3>yfinanceインストール </h3>
                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <p className='text-red-400'>01_株価可視化アプリ.ipynb</p>
                <Tutorial5121 />
                <h3>pandas,matplotlibインストール </h3>
                <p className='text-red-400'>01_株価可視化アプリ.ipynb</p>
                <Tutorial5122 />
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>pandas</div>
                <div class="flex flex-nowrap">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">pandas</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://www.sanity.io/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h4>ティッカーシンボル</h4>
                <Tutorial5123 />
                <p></p>
                <h3>株価情報の取得</h3>
                <p>20日分の株価を取得することができる</p>
                <Tutorial5124 />
                <h3>日付のフォーマット</h3>
                <p>stringformattime</p>
                <Tutorial5125 />
                <p>使用するのは株価の終値なので</p>
                <Tutorial5127 />
                <h3>行と列の入れ替え</h3>
                <p>Dateが行、株価が列になっているので行と列を入れ替えます</p>
                <Tutorial5126 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>02_株価可視化アプリ.ipynb</p>
                <Tutorial5129 />
              </div>
            </div>
          </Layout_tutorial_51>
        ) : id == 3 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>インストール </h3>
                <p>。</p>
                <Tutorial5131 />
                <h3>タイトル</h3>
                <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                <Tutorial5132 />
                <h3>sidebar</h3>
                <p>デフォルトは20で1から50までのスライドを作成されます。 </p>
                <p>選択した日数をdaysに格納します。</p>
                <Tutorial5133 />
                <h3>sidebar</h3>
                <p>*で囲うことで太字になる。</p>
                <Tutorial5134 />
                <p>キャッシュを使うことで毎回データを取得する必要がなくなる。</p>
                <Tutorial5135 />
                <p>tickers[company]にはAAPLやFBなどのティッカーシンボルがはいります。</p>
                <Tutorial51311 />
                <p>日付の表示を2021-03-05から05 March 2021に変更することができる。</p>
                <Tutorial5136 />
                <p>終値のみを使用する。</p>
                <Tutorial5137 />
                <p>行と列を入れ替えることができる。</p>
                <Tutorial5138 />
                <p>列の名前をCloseからcompanyの名前に変更。</p>
                <Tutorial5139 />
                <p>列の名前をCloseからcompanyの名前に変更。</p>
                <Tutorial51310 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>pages/_document.tsx</p>
                <Tutorial51322 />

              </div>

            </div>
          </Layout_tutorial_51>
        ) : id == 4 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Youtube動画分析アプリ </h3>
                <p>アプリケーションを作成してきます。 </p>
                <p>app という名前のアプリケーションを作成します。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Youtube Data API</div>
                <div class="flex flex-nowrap">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Youtube Data API</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="https://www.sanity.io/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <Tutorial5141 />
                <h3>サンプルコード</h3>
                <p>APIキーを元にインスタンスを作成。</p>
                <Tutorial5142 />
                <p>search.list()によって検索するための条件を設定しています。</p>
                <p>詳しくは<a href='https://developers.google.com/youtube/v3/docs/search/list?hl=ja'>APIドキュメント</a></p>

                <h3>パラメーターの変更</h3>
                <p>qはクエリを意味しています</p>
                <p>partでidとsnippetの情報を取得するようにしている</p>
                <p>動画を再生順が多い順にするためにorderとtypeを追加する</p>
                <Tutorial5144 />
                <h4></h4>
                <p>辞書型でitem_idを用意して取ってきた情報の中からvideo_idとchannel_idだけを</p>
                <p className='text-blue-400'>item_id</p>
                <Tutorial5145 />
                <p className='text-blue-400'>items_id</p>
                <Tutorial5146 />
                <h4>チャンネルidの重複をさける</h4>
                <Tutorial5146 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>Youtube.ipynb</p>
                <Tutorial5143 />
                <p className='text-red-400'>Youtube.ipynb</p>
                <Tutorial5149 />
              </div>

            </div>

          </Layout_tutorial_51>
        ) : id == 5 ? (
          <Layout_tutorial_51>
            <h3>Model追加</h3>
            <p>ブログに必要な項目をモデルに追加します。 </p>
            <p>on_deleteをCASCADEに設定することでTaskモデルに紐づいたTagが削除されたときにはTaskも削除される</p>
            <p className='text-red-400'>app/models.py</p>
            <Tutorial5151 />
            <p>tagsのidとnameがtaskのtagとtag_nameに紐づいています</p>
            <div className='flex'>
              <div className='p-2'>
                <p className='text-red-400'>/api/task/</p>
                <Tutorial5155 />
              </div>
              <div className='p-2'>
                <p className='text-red-400'>/api/tags/</p>
                <Tutorial5156 />
              </div>
            </div>
            <h3>管理画面追加 </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <p className='text-red-400'>app/admin.py</p>
            <Tutorial5152 />
            <h3>データベース構築</h3>
            <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
            <Tutorial5153 />
            <p>サーバー起動</p>
            <Tutorial5154 />
            <p>データベース登録 </p>
            <p>管理画面に遷移して、Post データを登録してみましょう </p>
            <p>イメージ画像は正方形の画像をアップロードしてください。 </p>

          </Layout_tutorial_51>
        ) : id == 6 ? (
          <Layout_tutorial_51>

            <h3>URL追加</h3>
            <p>返ってきたレスポンスをparserすることで整形されたhtmlファイルとすることができる。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial5161 />
            <p></p>
            <p></p>
            <p className='text-red-400'>api/urls.py</p>
            <Tutorial5162 />
            <h3>スプレッドシートへ格納</h3>
            <p>Google CloudでGoogle drive APIとGoogle Sheets APIを有効にします</p>
            <p>サービスアカウントを作成。</p>
            <p>作成したサービスアカウントにおいてJSONキーを発行。</p>
          </Layout_tutorial_51>
        ) : id == 7 ? (
          <Layout_tutorial_51>


          </Layout_tutorial_51>
        ) : id == 8 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>列名が日本語の場合はencodingをshift_jisに指定する。</p>

                <Tutorial5181 />
                <p>csvファイルのデータサイズ、index、カラム名、データ型を確認します</p>
                <div className='flex'>
                  <div className='mr-4'>
                  <h4>実行</h4>
                    <Tutorial5182 />
                  </div>
                  <div>
                    <h4>結果</h4>
                    <Tutorial5183 />
                  </div>
                </div>
                <h3>ユニークデータの確認</h3>
                <div className='flex'>
                  <div className='mr-4'>
                  <h4>実行</h4>
                    <Tutorial5184 />
                  </div>
                  <div>
                    <h4>結果</h4>
                    <Tutorial5185 />
                  </div>
                </div>
                <h3>重複データの確認</h3>
                <div className='flex'>
                  <div className='mr-4'>
                  <h4>実行</h4>
                    <Tutorial5186 />
                  </div>
                  <div>
                    <h4>結果</h4>
                    <Tutorial5187 />
                  </div>
                </div>
                <h3>欠損値の確認</h3>
                <div className='flex'>
                  <div className='mr-4'>
                  <h4>実行</h4>
                    <Tutorial5188 />
                  </div>
                  <div>
                    <h4>結果</h4>
                    <Tutorial5189 />
                  </div>
                </div>
              </div>

            </div>

          </Layout_tutorial_51>
        ) : id == 9 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <p>新しくプロジェクトを作ります。</p>

              
              </div>
            </div>
          </Layout_tutorial_51>
        ) : id == 10 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Google Colud</h3>
                <p>サービスアカウント作成します。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>functionalコンポーネントのデータ型とpropsで受け取るchildrenのデータ型を定義するためにReactNodeとVFC。</p>
                <p className='text-red-400'>components/Layout.tsx</p>
                <Tutorial51101 />
                <h4></h4>
                <p>Audio_contentをします</p>
                <h4>ssmlとは</h4>
            
              </div>
            </div>
          </Layout_tutorial_51>
        ) : id == 11 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3></h3>
                <p>contextフォルダを作成し、StateProvider.tsxを作成。</p>
                <p>typesフォルダを作成し、types.tsを作成。REST APIから取得するデータ型を定義します</p>
               
                <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>データ型</h4>
                <p className='text-red-400'>types/types.ts</p>
         
                <h4></h4>
                <p>createContextを使ってStateContextを作成します</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
            
                <p>REST APIから取得したtaskの一覧を格納するtasks、darkモードを切り替えるをuseStateで定義します。</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
            
                <p>valueには共有したいstateや関数を指定します。</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
                {/* <Tutorial45115 /> */}
                <h4>hooks</h4>
                <p>hooksフォルダを作成しを使ってuseClassicalFetch.tsxを作成します</p>
                <p>useStateContextを使ってtasksとsetTasksを使える</p>
                <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
             
                <p>errorの場合はisErrorをtrueにする</p>
                <p>通信の処理が終わったらisLoadingをfalseにする</p>
                <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
         
                <h4>ClassicalFetchA</h4>
                <p>componentsフォルダにClassicalFetchA.tsxを作成します</p>
                <h4>ClassicalFetchB</h4>
                <p>componentsフォルダにClassicalFetchB.tsxを作成します</p>
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
              
                <p className='text-red-400'>SendMail.css</p>
            
              </div>
            </div>
          </Layout_tutorial_51>
        ) : id == 12 ? (
          <Layout_tutorial_51>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3></h3>
                <p>contextフォルダを作成し、StateProvider.tsxを作成。</p>
                <p>typesフォルダを作成し、types.tsを作成。REST APIから取得するデータ型を定義します</p>
                {/* <Tutorial45111 /> */}
                <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>データ型</h4>
                <p className='text-red-400'>types/types.ts</p>
                {/* <Tutorial45112 /> */}
                <h4></h4>
                <p>createContextを使ってStateContextを作成します</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
                {/* <Tutorial45113 /> */}
                <p>REST APIから取得したtaskの一覧を格納するtasks、darkモードを切り替えるをuseStateで定義します。</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
                {/* <Tutorial45114 /> */}
                <p>valueには共有したいstateや関数を指定します。</p>
                <p className='text-red-400'>context/StateProvider.tsx</p>
                {/* <Tutorial45115 /> */}
                <h4>hooks</h4>
                <p>hooksフォルダを作成しを使ってuseClassicalFetch.tsxを作成します</p>
                <p>useStateContextを使ってtasksとsetTasksを使える</p>
                <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
               
                <p>errorの場合はisErrorをtrueにする</p>
                <p>通信の処理が終わったらisLoadingをfalseにする</p>
                <p className='text-red-400'>hooks/useClassicalFetch.tsx</p>
                {/* <Tutorial45117 /> */}
                <h4>ClassicalFetchA</h4>
                <p>componentsフォルダにClassicalFetchA.tsxを作成します</p>
                <h4>ClassicalFetchB</h4>
                <p>componentsフォルダにClassicalFetchB.tsxを作成します</p>
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
             
                <p className='text-red-400'>SendMail.css</p>
           
              </div>
            </div>
          </Layout_tutorial_51>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial5121 = () => {
  const test = `
  !pip3  install yfinance
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5122 = () => {
  const test = `
  !pip3 install pandas
  !pip3 install matplotlib
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5123 = () => {
  const test = `
  aapl = yf.Ticker('AAPL')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5124 = () => {
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

const Tutorial5125 = () => {
  const test = `
  hist.index = hist.index.strftime('%d %B %Y')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5126 = () => {
  const test = `
  hist.T
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5127 = () => {
  const test = `
  hist = hist[['Close']]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5128 = () => {
  const test = `
  hist.T
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5129 = () => {
  const test = `
  days = 20 
  tickers = { 
      'apple': 'AAPL', 
      'facebook': 'FB', 
      'google': 'GOOGL', 
      'microsoft': 'MSFT', 
      'netflix': 'NFLX', 
      'amazon': 'AMZN' 
  } 
  df = pd.DataFrame() 
  for company in tickers.key(): 
      tkr = yf.Ticker(tickers[company]) 
      hist = tkr.history(period=f'{days}d') 
      hist.index = hist.index.strftime('%d %B %Y') 
      hist = hist[['Close']] 
      hist.columns= [company] 
      hist = hist.T 
      hist.index.name = 'Name' 
      df = pd.concat([df, hist])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5131 = () => {
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



const Tutorial5132 = () => {
  const test = `
  st.title('米国株価可視化アプリ') 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5133 = () => {
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



const Tutorial5134 = () => {
  const test = `
  st.write(f""" 
  ### 過去 **{days}日間** のGAFA株価 
  """) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5135 = () => {
  const test = `
  @st.cache 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5136 = () => {
  const test = `
  hist.index = hist.index.strftime('%d %B %Y') 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5137 = () => {
  const test = `
  hist = hist[['Close']] 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5138 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5139 = () => {
  const test = `
  hist.columns = [company] 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial51310 = () => {
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

const Tutorial51311 = () => {
  const test = `
  tkr = yf.Ticker(tickers[company]) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial51312 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial51313 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial51321 = () => {
  const test = `
  hist = hist.T 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial51322 = () => {
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


const Tutorial5141 = () => {
  const test = `
  !pip3 install google-api-python-client
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5142 = () => {
  const test = `
  from apiclient.discovery import build
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5143 = () => {
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

const Tutorial5144 = () => {
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

const Tutorial5145 = () => {
  const test = `
  {'video_id': 'adUlm2m7RrU', 'channel_id': 'UCF4iJ7HRtEPW3mugTt6V2aA'}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5146 = () => {
  const test = `
  [{'video_id': 'adUlm2m7RrU', 'channel_id': 'UCF4iJ7HRtEPW3mugTt6V2aA'}, 
  {'video_id': 'x7JAconQHio', 'channel_id': 'UC5vj2bqibHXNFn-UJp-Ns2Q'},
  ・・・
  {'video_id': 'ujGo4o4Z-As', 'channel_id': 'UC_e-1gI4D1aOixooUVkUzXg'}, 
  {'video_id': 'vLqTf2b6GZw', 'channel_id': 'UCBwmMxybNva6P_5VmxjzwqA'}]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5149 = () => {
  const test = `
  items_id = [] 
  items = search_response['items'] 
  for item in items: 
      item_id = {} 
      item_id['video_id'] = item['id']['videoId'] 
      item_id['channel_id'] = item['snippet']['channelId'] 
      items_id.append(item_id) 
  items_id
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5151 = () => {
  const test = `
  const [error, setError] = useState('')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


// const Tutorial5151 = () => {
//   const test = `
//   from django.db import models
//   class Tag(models.Model):
//       name = models.CharField(max_length=100)
//       def __str__(self):
//           return self.name
//   class Task(models.Model):
//       title = models.CharField(max_length=100)
//       created_at = models.DateTimeField(auto_now_add=True)
//       updated_at = models.DateTimeField(auto_now=True)
//       tag = models.ForeignKey(Tag, null=True, on_delete=models.CASCADE)
//       def __str__(self):
//           return self.title
//     `
//   return (
//     <SyntaxHighlighter language="js" style={syntaxStyle} >
//       {test}
//     </SyntaxHighlighter>
//   );
// };



const Tutorial5152 = () => {
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



const Tutorial5153 = () => {
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

const Tutorial5154 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5155 = () => {
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

const Tutorial5156 = () => {
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


const Tutorial5161 = () => {
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



const Tutorial5162 = () => {
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

const Tutorial5181 = () => {
  const test = `
  df_jp_ind = pd.read_csv('./code_file/csv_data/雇用_医療福祉_一人当たり賃金_全国_全産業.csv', encoding='shift_jis')
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5182 = () => {
  const test = `
  print('====== データサイズ\n', df_jp_ind.shape) 
  print('====== index\n', df_jp_ind.index) 
  print('====== カラム名\n', df_jp_ind.columns) 
  print('====== データ型\n', df_jp_ind.dtypes) 
  df_jp_ind.head()
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5183 = () => {
  const test = `
  ====== データサイズ 
  (130, 5) 
 ====== index 
  RangeIndex(start=0, stop=130, step=1) 
 ====== カラム名 
  Index(['集計年', '年齢', '所定内給与額（万円）', '年間賞与その他特別給与額（万円）', '一人当たり賃金（万円）'], dtype='object') 
 ====== データ型 
  集計年                   int64 
 年齢                   object 
 所定内給与額（万円）          float64 
 年間賞与その他特別給与額（万円）    float64 
 一人当たり賃金（万円）         float64 
 dtype: object 
 集計年	年齢	所定内給与額（万円）	年間賞与その他特別給与額（万円）	一人当たり賃金（万円） 
 0	2010	年齢計	29.6219	79.1174	434.5804 
 1	2010	〜19歳	16.7837	13.6030	215.0078 
 2	2010	20〜24歳	19.4890	35.6139	269.4816 
 3	2010	25〜29歳	22.8221	55.3967	329.2620 
 4	2010	30〜34歳	26.3490	67.9498	384.1379
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5184 = () => {
  const test = `
  df_jp_ind['年齢'].unique()
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5185 = () => {
  const test = `
  array(['年齢計', '〜19歳', '20〜24歳', '25〜29歳', '30〜34歳', '35〜39歳', '40〜44歳', 
  '45〜49歳', '50〜54歳', '55〜59歳', '60〜64歳', '65〜69歳', '70歳〜'], 
 dtype=object)
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5186 = () => {
  const test = `
  print(df_jp_ind.duplicated())
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5187 = () => {
  const test = `
  0      False 
  1      False 
  2      False 
  3      False 
  4      False 
         ...   
  125    False 
  126    False 
  127    False 
  128    False 
  129    False 
  Length: 130, dtype: bool
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5188 = () => {
  const test = `
  df_jp_ind.isnull().sum()
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5189 = () => {
  const test = `
  集計年                 0 
  年齢                  0 
  所定内給与額（万円）          0 
  年間賞与その他特別給与額（万円）    0 
  一人当たり賃金（万円）         0 
  dtype: int64
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial51101 = () => {
  const test = `
  from google.cloud import texttospeech 
  # Instantiates a client 
  client = texttospeech.TextToSpeechClient() 
  # Set the text input to be synthesized 
  synthesis_input = texttospeech.SynthesisInput(text="Hello, World!") 
  # Build the voice request, select the language code ("en-US") and the ssml 
  # voice gender ("neutral") 
  voice = texttospeech.VoiceSelectionParams( 
      language_code="en-US", ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL 
  ) 
  # Select the type of audio file you want returned 
  audio_config = texttospeech.AudioConfig( 
      audio_encoding=texttospeech.AudioEncoding.MP3 
  ) 
  # Perform the text-to-speech request on the text input with the selected 
  # voice parameters and audio file type 
  response = client.synthesize_speech( 
      input=synthesis_input, voice=voice, audio_config=audio_config 
  ) 
  # The response's audio_content is binary. 
  with open("output.mp3", "wb") as out: 
      # Write the response to the output file. 
      out.write(response.audio_content) 
      print('Audio content written to file "output.mp3"')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial51102 = () => {
  const test = `
  .sendMail {
      position: absolute;

    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
