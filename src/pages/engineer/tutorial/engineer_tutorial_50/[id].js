import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_50 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>グルメサーチAPI </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>
                <p>myvenvという名前で仮想環境を構築します。 </p>
                <Tutorial5022 />
                <Tutorial5023 />
                <p></p>
                <h3>特定の列情報を取得</h3>
                <p></p>
                <Tutorial5024 />
                <h3>csvへ出力</h3>
                <p></p>
                <Tutorial5025 />
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 2 ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'Sheets' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'gmail' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'twitter' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'line' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'bot' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                <Tutorial5026 />
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'azure' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'speech' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>

                <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                <Tutorial5021 />
                <h3>仮想環境の作成 </h3>

                <Tutorial5022 />
                <h4>Item情報の取り出し</h4>
                <p>itemsの中から1つずつ取り出してitemに格納しそのitemからItem情報のものをitemsに再度格納している。 </p>
                <Tutorial5023 />



                <h3>日付のフォーマット</h3>
                <Tutorial5025 />
                <h3>行と列の入れ替え</h3>
                {/* <Tutorial5026 /> */}
              </div>
              <div className='w-1/2'>
                <Tutorial5029 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'rakuten_tra' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>JsonPlaceholder</h3>
                <p>pythonでAPIを使うにはrequestsライブラリを使用する </p>
                <p>HTTPメソッドのgetを使う</p>
                <p className='text-red-400'>jsonplaceholder.ipynb</p>
                <Tutorial50111 />
                <p>getができているか確認。 </p>
                <p className='text-red-400'>jsonplaceholder.ipynb</p>
                <Tutorial50112 />
                <h3>楽天トラベル </h3>
                <p>住所の情報を取得</p>
                <Tutorial50113 />
              </div>
              <div className='w-1/2'>
              <p className='text-red-400'>jsonplaceholder.ipynb</p>
              <Tutorial501110 />
              <p className='text-red-400'>楽天travel_API.ipynb</p>
              <Tutorial501111 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'fast_api' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Fast APIとは</h3>
                <p> 直観的でわかりやすい書き方</p>
                <p>公式ドキュメントの情報が豊富</p>
                <p>自動ドキュメント生成機能</p>
                <p>バリデーション機能の実装が簡単</p>
                <h3>型ヒント </h3>
                <p>型ヒントは注釈でしかなく下記のようになっていたとしてもエラーにはならない</p>
                <p className='text-red-400'>type_hints.py</p>
                <Tutorial50121 />
                <h3>仮想環境構築・実行</h3>
                <Tutorial50122 />
                <h3>requirements.txt作成</h3>
                <p className='text-red-400'>requirements.txt</p>
                <Tutorial50123 />
                <h3>インストール</h3>
                <Tutorial50124 />
                <p>fastAPIをインスタンス化した後、@app.get(&quot;/&quot;)でHTTPメソッドのgetでアクセスがあったときにreturnを返す。 </p>
                <p className='text-red-400'>jsonplaceholder.ipynb</p>
                <Tutorial50125 />
                <h3>サーバー起動</h3>
                <h3>Swagger</h3>
                <p>Swagger UIとはAPIの仕様書をWeb上で見やすくしてくれる</p>
                <h3>パスパラメーター</h3>
                <p>urlのcountries/直下の値を取得して関数内で使用することができる。</p>
                <p>例えばcountries/japanのときは｛&quot;country_name&quot;: japan｝と表示される</p>
                <Tutorial50126 />
                <h3>クエリパラメーター</h3>
                <p>urlの?以下がクエリパラメーター。</p>
                <p>例えばcountries/japanのときは｛&quot;country_name&quot;: japan｝と表示される</p>
                <Tutorial50127 />
                <h3>リクエストボディ</h3>
                <p>データ構造をクラスで定義</p>
                <Tutorial50128 />
                <p>辞書型をjson形式の文字列に変換してpostする</p>
                <Tutorial50129 />
                <p></p>
                <p></p>
                
              </div>
              <div className='w-1/2'>
              <p className='text-red-400'>type_hints.py</p>
              <Tutorial501210 />
              <p className='text-red-400'>楽天travel_API.ipynb</p>
              <Tutorial501211 />
              <p className='text-red-400'></p>
              <Tutorial501212 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : id == 'reserve_api' ? (
          <Layout_tutorial_50>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Fast APIとは</h3>
                <p> 直観的でわかりやすい書き方</p>
                <p>公式ドキュメントの情報が豊富</p>
                <p>自動ドキュメント生成機能</p>
                <p>バリデーション機能の実装が簡単</p>
                <h3>型ヒント </h3>
                <p>型ヒントは注釈でしかなく下記のようになっていたとしてもエラーにはならない</p>
                <p className='text-red-400'>type_hints.py</p>
                <Tutorial50121 />
                <h3>仮想環境構築・実行</h3>
                <Tutorial50122 />
                <h3>requirements.txt作成</h3>
                <p className='text-red-400'>requirements.txt</p>
                <Tutorial50123 />
                <h3>インストール</h3>
                <Tutorial50124 />
                <p>fastAPIをインスタンス化した後、@app.get(&quot;/&quot;)でHTTPメソッドのgetでアクセスがあったときにreturnを返す。 </p>
                <p className='text-red-400'>jsonplaceholder.ipynb</p>
                <Tutorial50125 />
                <h3>サーバー起動</h3>
                <h3>Swagger</h3>
                <p>Swagger UIとはAPIの仕様書をWeb上で見やすくしてくれる</p>
                <h3>パスパラメーター</h3>
                <p>urlのcountries/直下の値を取得して関数内で使用することができる。</p>
                <p>例えばcountries/japanのときは｛&quot;country_name&quot;: japan｝と表示される</p>
                <Tutorial50126 />
                <h3>クエリパラメーター</h3>
                <p>urlの?以下がクエリパラメーター。</p>
                <p>例えばcountries/japanのときは｛&quot;country_name&quot;: japan｝と表示される</p>
                <Tutorial50127 />
                <h3>リクエストボディ</h3>
                <p>データ構造をクラスで定義</p>
                <Tutorial50128 />
                <p>辞書型をjson形式の文字列に変換してpostする</p>
                <Tutorial50129 />
                <p></p>
                <p></p>
                
              </div>
              <div className='w-1/2'>
              <p className='text-red-400'>type_hints.py</p>
              <Tutorial501210 />
              <p className='text-red-400'>楽天travel_API.ipynb</p>
              <Tutorial501211 />
              <p className='text-red-400'></p>
              <Tutorial501212 />
              </div>
            </div>
          </Layout_tutorial_50>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial5021 = () => {
  const test = `
  !pip3  install yfinance
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5022 = () => {
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



const Tutorial5023 = () => {
  const test = `
  aapl = yf.Ticker('AAPL')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial5024 = () => {
  const test = `
  df[['adress', 'name', 'wifi']]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5025 = () => {
  const test = `
  hist.T
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5026 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial5029 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};





// const Tutorial5023 = () => {
//   const test = `
//   items = [item['Item'] for item in items]
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };


// const Tutorial5024 = () => {
//   const test = `
//   days = 20 
//   hist = aapl.history(period=f'{days}d')
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

// const Tutorial5025 = () => {
//   const test = `
//   hist.T
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

const Tutorial50111 = () => {
  const test = `
  requests.get(url)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50112 = () => {
  const test = `
  res.status_code
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50113 = () => {
  const test = `
  hotel['address1']
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial501110 = () => {
  const test = `
  import requests
  url = 'https://jsonplaceholder.typicode.com/posts'
  res = requests.get(url)
  res.status_code
  datum = res.json()[0] 
  datum
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial501111 = () => {
  const test = `
  import requests
  REQUEST_URL = 'https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426' 
  APP_ID = '1041325084269081277'
  params = { 
      'applicationId':APP_ID, 
      'keyword':'沖縄', 
  }
  res = requests.get(REQUEST_URL,params)
  res.status_code
  hotels= res.json()['hotels'] 
  hotel = hotels[0]['hotel'][0]['hotelBasicInfo'] 
  hotel['address1']
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50121 = () => {
  const test = `
  price:int = 100.1 
  tax:float = 10
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50122 = () => {
  const test = `
  python3 -m venv myvenv
  source myvenv/bin/activate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50123 = () => {
  const test = `
  fastapi 
  uvicorn
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50124 = () => {
  const test = `
  pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50125 = () => {
  const test = `
  from fastapi import FastAPI 
  app = FastAPI() 
  @app.get("/") 
  async def index(): 
      return {"message": "Hello World"}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50126 = () => {
  const test = `
  @app.get("/countries/{country_name}") 
  async def country(country_name): 
      return {"country_name": country_name}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50127 = () => {
  const test = `
  @app.get("/countries/") 
  async def country(country_name:str ='japan', country_no: int = 1): 
      return { 
          "country_name": country_name, 
          "country_no": country_no 
      }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50128 = () => {
  const test = `
  class Item(BaseModel): 
      name: str 
      description: Optional[str] = None 
      price: int 
      tax: Optional[float] = None 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial50129 = () => {
  const test = `
  res = requests.post(url, json.dumps(body))
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial501210 = () => {
  const test = `
  price:int = 100 
  tax:float = 1.1 
  def calc_price_including_tax(price:int, tax:float): 
      return int(price * tax) 
  if __name__ == '__main__': 
      print(f'{calc_price_including_tax(price=price, tax=tax)}円')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial501211 = () => {
  const test = `

      return item
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial501212 = () => {
  const test = `
  from typing import Optional 
  from fastapi import FastAPI 
  from pydantic import BaseModel 
  app = FastAPI() 
  class Item(BaseModel): 
      name: str 
      description: Optional[str] = None 
      price: int 
      tax: Optional[float] = None 
  @app.post("/item/") 
  async def create_item(item: Item): 
      return item
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};