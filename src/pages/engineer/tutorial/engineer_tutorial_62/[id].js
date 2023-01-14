import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_62 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_62>
            <div className='flex'>
              <div className='w-2/3 mr-2'>
                <p></p>
                <h3></h3>
                <p>Dashはhtmlやcssを準備しなくてもpythonファイル1つで</p>

                <Tutorial6211 />
                <Tutorial6212 />
                <p>div要素の中に子要素があり、h1,div,graphに分けられる。</p>
                <p>グラフpsなどがある</p>
                <p>debug=trueにすることで再実行することなく画面が変わる</p>
                <p className='text-red-400'>sample.py</p>
                <Tutorial6213 />
                <h4>散布図</h4>
                <p>0から100までのランダムな数字を50個生成する</p>
                <p className='text-red-400'>scatter.py</p>
                <Tutorial6214 />
                <h4>株価を可視化</h4>
                <p className='text-red-400'>line.py</p>
                <Tutorial6215 />
                <h4>株価を可視化</h4>
                <p className='text-red-400'>markdown.py</p>
                <h4>ドロップダウン・ラジオボタン</h4>
                <p className='text-red-400'>sample01.py</p>
              </div>
              <div className='w-1/3'>
                <p className='text-red-400'>sample.py</p>
                <Tutorial62110 />
                <p className='text-red-400'>scatter.py</p>
                <Tutorial62111 />
                <p className='text-red-400'>line.py</p>
                <Tutorial62112 />
                <p className='text-red-400'>markdown.py</p>
                <Tutorial62113 />
                <p className='text-red-400'>sample01.py</p>
                <Tutorial62114 />
              </div>
            </div>
          </Layout_tutorial_62>
        ) : id == 2 ? (
          <Layout_tutorial_62>
            <div className='flex'>
              <div className=''>
                <h3>リソースグループ作成</h3>
                <p>リソースグループ。 </p>
                <h4>インストール</h4>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/resource1.png"
                  alt="top"
                  width={700}
                  height={400}
                />

                <h3>App Serviceの作成</h3>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm1.png"
                  alt="top"
                  width={1271}
                  height={614}
                />

                <Image
                  className='object-cover'
                  src="/images/tutorial/vm3.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm4.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>サイズ</h4>

                <h4>Kudu</h4>
                <p>Gitを使ってWeb Appsにデプロイ可能</p>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/app4.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4></h4>
                <p>siteのwwwrootにindex.htmlを作成</p>
                <Image
                  className='object-cover'
                  src="/images/programing/tutorial/61/app6.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>スケールアップ・スケールアウト                </h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm8.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <h4>スケールアウト</h4>
                <p>台数を1台から2台に増やす</p>
                <p>5分間のCPU使用率の平均が70%より大きい場合に1台増やす</p>
                <Image
                  className='object-cover'
                  src="/images/tutorial/vm9.png"
                  alt="top"
                  width={712}
                  height={612}
                />
                <p>5分間のCPU使用率の平均が20%より小さい場合に1台減らす</p>
              </div>
            </div>
          </Layout_tutorial_62>
        ) : id == 3 ? (
          <Layout_tutorial_62>
            <div className=''>
              <div className=''>
                <h4>カスタムドメインの取得方法</h4>
                <p>Azureのサービス(App Serviceドメイン)</p>
                <p>外部のドメイン登録サービス</p>
                <Image
                  className='object-cover'
                  src="/images/tutorial/rd1.png"
                  alt="top"
                  width={1271}
                  height={614}
                />
                <h4>Xdomainでドメイン取得</h4>
                <Image
                  className='object-cover'
                  src="/images/tutorial/rd2.png"
                  alt="top"
                  width={1271}
                  height={614}
                />

                <h3>キャンプ場新規登録</h3>
                <p>。</p>
                <h3>sidebar</h3>
                <p>。</p>



              </div>


            </div>
          </Layout_tutorial_62>
        ) : id == 4 ? (
          <Layout_tutorial_62>
            <div className=''>
              <div className=''>
                <h3>西日本リージョンにWeb Appsを作成 </h3>
                <p>DNS機能により宛先サーバの振り分けを行うロードバランサー。 </p>
                <p>。</p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image1.png"
                    alt="top"
                    width={700}
                    height={400}
                  />
                </div>
                <h3>Traffic Managerプロファイルの作成 </h3>
                <p>一般化するにチェックを入れてシャットダウンを設定。 </p>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image2.png"
                    alt="top"
                    width={700}
                    height={400}
                  />
                </div>
                <h3>エンドポイントの追加 </h3>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image3.png"
                    alt="top"
                    width={1271}
                    height={614}
                  />
                </div>
                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image4.png"
                    alt="top"
                    width={700}
                    height={700}
                  />
                </div>
                <p>キャプチャをすると元の仮想マシンは不要になるので仮想マシンを自動的に削除するにチェックを入れる。 </p>
                <h3>イメージから仮想マシンを作成</h3>

                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image5.png"
                    alt="top"
                    width={1271}
                    height={614}
                  />
                </div>

              </div>

            </div>

          </Layout_tutorial_62>
        ) : id == 5 ? (
          <Layout_tutorial_62>
             
            <h3>インストール</h3>
            <Tutorial6251 />
            <p>仮想ネットワークの作成をクリック</p>
            
            <p>リソースグループ名と名前を設定</p>
           

            <h3>サブネット関連付け </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <h3>可用性セット作成 </h3>
            
          </Layout_tutorial_62>
        ) : id == 6 ? (
          <Layout_tutorial_62>

            <h3>URL追加</h3>
            <h4>ロードバランサの作成</h4>
            <p>作成時に指定するIPアドレスが接続先になる</p>
            <h4>バックエンドプールの追加</h4>
            <p>負荷分散する対象VMを登録します。</p>
            <h4>負荷分散規則の追加</h4>
            <p>ルーティングを設定します。</p>
            <h4>インバウンドNAT規則</h4>
            <p>VMにパブリックIPアドレスを設定しているため、あるユーザーがVMのIPアドレスに直接アクセスすることができる。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load1.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load4.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load5.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load6.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load7.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load8.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load9.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load10.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>


          </Layout_tutorial_62>
        ) : id == 7 ? (
          <Layout_tutorial_60>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>


          </Layout_tutorial_60>
        ) : id == 8 ? (
l
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial6211 = () => {
  const test = `
  pip3 install dash
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6212 = () => {
  const test = `
  python3 sample.py
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6213 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6214 = () => {
  const test = `
  x1 = np.random.randint(0,100,50)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6215 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial62110 = () => {
  const test = `
  import dash 
  import dash_core_components as dcc 
  import dash_html_components as html 
  external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css'] 
  app = dash.Dash(__name__, external_stylesheets=external_stylesheets) 
  app.layout = html.Div(children=[ 
      html.H1(children='Hello Dash'), 
      html.Div(children=''' 
          Dash: A web application framework for Python. 
      '''), 
      dcc.Graph( 
          id='example-graph', 
          figure={ 
              'data': [ 
                  {'x': [1, 2, 3], 'y': [4, 1, 2], 'type': 'bar', 'name': 'SF'}, 
                  {'x': [1, 2, 3], 'y': [2, 4, 5], 'type': 'bar', 'name': 'Montréal'}, 
              ], 
              'layout': { 
                  'title': 'Dash Data Visualization' 
              } 
          } 
      ) 
  ]) 
  if __name__ == '__main__': 
      app.run_server(debug=True)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial62111 = () => {
  const test = `
  import dash 
  from dash import dcc 
  from dash import html 
  import plotly.graph_objs as go 
  import numpy as np 
  x1 = np.random.randint(0,100,50) 
  y1 = np.random.randint(0,100,50) 
  x2 = np.random.randint(0,100,50) 
  y2 = np.random.randint(0,100,50) 
  external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css'] 
  app = dash.Dash(__name__, external_stylesheets=external_stylesheets) 
  app.layout = html.Div([ 
      dcc.Graph( 
          id='sample-scatter', 
          figure={ 
              'data':[ 
                  go.Scatter( 
                      x=x1, 
                      y=y1, 
                      mode='markers', 
                      opacity=0.7, 
                      marker={ 
                          'size':15 
                      }, 
                      name='グループ1' 
                  ), 
                     go.Scatter( 
                      x=x2, 
                      y=y2, 
                      mode='markers', 
                      opacity=0.7, 
                      marker={ 
                          'size':15 
                      }, 
                      name='グループ2' 
                  ) 
              ], 
                              'layout':go.Layout( 
                      xaxis={'title':'x軸'}, 
                      yaxis={'title':'y軸'} 
                  ) 
          } 
      ) 
  ]) 
  if __name__ == '__main__': 
      app.run_server(debug=True)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial62112 = () => {
  const test = `
  import dash 
  from dash import dcc 
  from dash import html 
  import plotly.graph_objs as go 
  import numpy as np 
  import pandas as pd 
  df = pd.read_csv('time_series.csv') 
  external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css'] 
  app = dash.Dash(__name__, external_stylesheets=external_stylesheets) 
  app.layout = html.Div([ 
      dcc.Graph( 
          id='sample', 
          figure={ 
              'data':[ 
                  go.Scatter( 
                      x=df['date'], 
                      y=df['MSFT'], 
                      mode='lines', 
                      opacity=0.7, 
                      marker={ 
                          'size':15 
                      }, 
                      name='Microsoft' 
                  ), 
                   go.Scatter( 
                      x=df['date'], 
                      y=df['AAPL'], 
                      mode='lines', 
                      opacity=0.7, 
                      marker={ 
                          'size':15 
                      }, 
                      name='Apple' 
                  ) 
              ], 
              'layout':go.Layout( 
                  xaxis={'title':'x軸'}, 
                  yaxis={'title':'y軸'}, 
                  width=1000, 
                  height=500 
              ) 
          } 
      ) 
  ]) 
  if __name__ == '__main__': 
      app.run_server(debug=True)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial62113 = () => {
  const test = `
  import dash 
  import dash_core_components as dcc 
  import dash_html_components as html 
  external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css'] 
  app = dash.Dash(__name__, external_stylesheets=external_stylesheets) 
  app.layout = html.Div([ 
      dcc.Markdown(''' 
      # 見出し1 
      ## 見出し2 
      -箇条書き 
          -箇条書き 
              -箇条書き 
      ''') 
  ]) 
  if __name__ == '__main__': 
      app.run_server(debug=True)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial62114 = () => {
  const test = `
  import dash 
  from dash import dcc 
  from dash import html 
  external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css'] 
  app = dash.Dash(__name__, external_stylesheets=external_stylesheets) 
  app.layout = html.Div([ 
  html.Label('Dropdown'), 
  dcc.Dropdown( 
      options=[ 
          {'label': '佐藤', 'value': 'sato'}, 
          {'label': '鈴木', 'value': 'suzuki'}, 
          {'label': '田中', 'value': 'tanaka'}, 
      ], 
      value= 'suzuki' 
  ), 
  html.Label('Multi-Select Dropdown'), 
  dcc.Dropdown( 
      options=[ 
          {'label': '佐藤', 'value': 'sato'}, 
          {'label': '鈴木', 'value': 'suzuki'}, 
          {'label': '田中', 'value': 'tanaka'}, 
      ], 
      value= ['sato','suzuki'], 
      multi = True 
  ), 
  html.Label('Radio Items'), 
  dcc.RadioItems( 
      options=[ 
          {'label': '佐藤', 'value': 'sato'}, 
          {'label': '鈴木', 'value': 'suzuki'}, 
          {'label': '田中', 'value': 'tanaka'}, 
      ], 
      value= 'suzuki' 
  ) 
  ]) 
  if __name__ == '__main__': 
      app.run_server(debug=True)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6251 = () => {
  const test = `
  pip3 install selenium
  pip3 install pillow
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};