import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_19 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_19>
            <h3>Redux + React Hooks + TypeScript COVID19 </h3>

            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
              <li>Django REST Framework で API 構築方法</li>
              <li>Next.js でサイト構築方法</li>
              <li>Django REST Framework と Next.js の連携方法</li>
              <li>TailwindCSS の使い方</li>
            </ul>

            <h3>機能 </h3>
            <ul className='list-disc'>
              <li>投稿一覧</li>
              <li>投稿詳細</li>
              <li>About</li>
            </ul>
            <h3>#エラーが発生した場合</h3>
            <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
            <ul className='list-disc'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Django</li>
            </ul>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_19>
        ) : id == 2 ? (
          <Layout_tutorial_19>
            <h3>React-Chartjsでグラフプロット </h3>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>

            <p> </p>
            <p> </p>
            <p></p>
            <p> </p>
            <Tutorial1921 />

            <h3>Chart.jsのインストール</h3>
            <p> </p>

            <Tutorial1922 />
            <h3>Lineチャート</h3>
            <p></p>
            <p></p>
            <p></p>
            <Tutorial1923 />
            <h3>Pieチャート</h3>
            <p>Reactのfunctionalコンポーネントの型を指定</p>
            <p></p>
            <p></p>
            <Tutorial1924 />
            <h4>Barチャート</h4>
            <p></p>
            <Tutorial1925 />
            <h4>RadarPlot</h4>
            <p></p>
            <Tutorial1926 />
            <p></p>

          </Layout_tutorial_19>
        ) : id == 3 ? (
          <Layout_tutorial_19>
            <h3>Material UI</h3>
            <p></p>
            <p> </p>
            <h4>Material UIインストール</h4>
            <Tutorial1931 />
            <p className='text-red-400'>MaterialUI.tsx</p>
            <p>。</p>
            <Tutorial1932 />
            <p></p>
            <h4>makeStyles</h4>
            <Tutorial1933 />
            <p>。</p>
            <p>。</p>
          </Layout_tutorial_19>
        ) : id == 4 ? (
          <Layout_tutorial_19>
            <h3>プロジェクト作成 </h3>
            <p>covid_dashboardという名前でフォルダを作成します。 </p>
            <p>下記コマンドでプロジェクトを作成します。</p>
            <Tutorial1941 />

            <p>npm startでローカルサーバーが立ち上がります</p>
            <p>Redux DevToolsでStateを見ることが出来る</p>
            <h4>モジュールのインポート</h4>
            <p>外部のAPIにaxiosを使ってアクセスする</p>
            <Tutorial1945 />
            <p>matarialUIのインストール</p>
            <Tutorial1942 />
            <p>グラフを使うためにchart.jsをインストール</p>
            <Tutorial1943 />
            <p>reactのchart.jsもインストール</p>
            <Tutorial1944 />
            <p>1秒かけて設定した値まで動的に</p>
            <Tutorial1947 />
            <p>アイコン</p>
            <Tutorial1948 />

            <p></p>
          </Layout_tutorial_19>
        ) : id == 5 ? (
          <Layout_tutorial_19>
            <h3>Resux Tool Kit</h3>
            <p>数値型。 </p>
            <p>sliceの名前はcounter。第二引数に作成したinitialState。reducersというところにactionを記載</p>
            <p>incrementは今のstateに+1をする処理。このincrementがReactのコンポーネントからdispatchを使って呼び出される</p>
            <p className='text-red-400'>features/counter/counterSlice.ts</p>
            <p>incrementByAmountではPayloadActionによってnumberの値を受け取れる </p>
            <p>この3つをReactのコンポーネントで使えるようにexport</p>
            <p>stateの中のcounterの値をselectCountに代入している</p>
            <p>sliceを複数作った場合RootStateはオブジェクト状にひとまとめにしてくれる。 </p>
            <Tutorial1951 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">verbose_name:</span>
              </div>
            </div>
            <h3>Google Chrome拡張機能のJSON Formatterをインストールして下さい。</h3>

            https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=ja-JP


          </Layout_tutorial_19>
        ) : id == 6 ? (
          <Layout_tutorial_19>
            <h3>Covid19用のSliceを</h3>
            <p>featuresの直下にcovidという名前でフォルダーを作ります</p>
            <p>covidSlice.tsというファイルを作成する </p>
            <p>createSliceとcreateAsyncThunkをインポート。createSliceはSliceを作るものでcreateAsyncThunkは非同期の</p>
            <p>RootStateはappフォルダーのstore.tsでexportされている</p>

            <p>covidフォルダ内にdata.jsonと時系列データのdataDaily.json</p>
            <p>この2つのファイルをインポート。</p>
            <p>typeofを使ってdataJsonの型を取得</p>
            <h4>slice全体のstateの構造を定義</h4>
            <h4>initialStateを定義</h4>
            <p>dataには初期値。countryは空の文字列</p>
            <p></p>
            <p></p>
            <h4>sliceの作成</h4>
            <p></p>
            <p></p>
            <p></p>
            <p className='text-red-400'>app/urls.py</p>
            <Tutorial1662 />

          </Layout_tutorial_19>
        ) : id == 7 ? (
          <Layout_tutorial_19>
            <h3>Cardsコンポーネント作成</h3>
            <p>features-covidフォルダの下にCardsとChart、DashBoard、PieChart、SwitchCountryフォルダーを作成します。</p>
            <p>まずはCardsコンポーネントから作成していきます。</p>
            <p>Cardsフォルダの下にCards.tsxを作成</p>
            <p>またCards.module.cssを作成します</p>
            <p className='text-red-400'>Cards/Cards.module.css</p>
            <Tutorial1971 />
            <p>Cards.module.cssからstylesをインポート</p>
            <p>materialUIからCard,CardContent,Typography,Gridをインポートします。</p>
            <p>reactのiconsからGiHastyGrave,MdLocalHospital,AiFillLike</p>
            <p>データのstateを取得したいのでuseSelectorとcovidSlice.tsで作成したselectDataの関数をインポート</p>
            <p>useSelectorを使ってstoreの中の属性をdata変数に格納。こうすることでdataにアクセスすることでstateの値を読み取ることができる。</p>
            <p></p>
            <h4>レスポンシブ</h4>
            <p>横幅が960px以上の時はCardsが3つ並ぶようにして960px以下の時は1つだけ</p>
            <Tutorial1973 />
            <p></p>
            <p></p>
            <p></p>

            <p></p>
            <p className='text-red-400'>Cards/Cards.tsx</p>
            <Tutorial1972 />
            <p>App.tsxで作成したCardsコンポーネントを表示</p>
            <p>画面をリフレッシュした時に動的に1.5秒かけて最終的な値まで</p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useSelector</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/05/25/useselector/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MaterialUI</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/08/03/materialui/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </Layout_tutorial_19>
        ) : id == 8 ? (
          <Layout_tutorial_19>
          <h3>Chartコンポーネント作成</h3>
          <p>またChart.module.cssを作成します</p>
          <p className='text-red-400'>Chart/Chart.module.css</p>
          <Tutorial1981 />
          <p>Cards.module.cssからstylesをインポート</p>
          <p>chartjsからLine,Barをインポート</p>
          <p>データのstateを取得したいのでuseSelectorとcovidSlice.tsで作成したselectData,selectDailyData,selectCountryの関数をインポート</p>
          <p>React.FCで型を定義します。</p>
          <p className='text-red-400'>Chart/Chart.tsx</p>
          <Tutorial1982 />
          <h4>Barチャート</h4>
          <p>data &&でデータが存在するときだけBarチャートを表示させることができる。 </p>
          <p>下記コードで凡例を非表示にさせている。</p>
          <Tutorial1983 />
          <p>その時に選ばれているcountryを表示させることができる。</p>
          <Tutorial1984 />
          <h4>Lineチャート</h4>
          <p>fill:trueとは線からX軸までの下の部分を色塗りするかどうか            </p>
          <p>barchartを表示してそれ以外はlinechartを表示する</p>
          </Layout_tutorial_19>
        ) : id == 9 ? (
          <Layout_tutorial_19>
          <h3>PieChartコンポーネント作成</h3>
          <p>materialUIからTypographyをインポートします。</p>
          <p>chartjsからDoughnutをインポート</p>
          <p className='text-red-400'>PieChart/PieChart.tsx</p>
          <Tutorial1991 />
          <p>下記コードでデータが存在するときだけ死者数を感染者数で割った致死率を表示させる。 </p>
          <Tutorial1992 />

          <p>データが存在する時だけTypographyでMotality。toFixed(2) は小数点以下2桁まで表示</p>

          </Layout_tutorial_19>
        ) : id == 10 ? (
          <Layout_tutorial_19>
            <h3>SwitchCountryコンポーネント</h3>
            <p>materialUIからmakestylesをインポートします。</p>
            <p>materialUIから</p>
            <p>materialUIをmakestylesを使って装飾する場合</p>
            <p>関数コンポーネント外でuseStyles</p>


            <Tutorial19101 />
            <p>covidSlice.tsで定義したfetchAsyncGetCountry関数に選択した国を引数で渡す</p>
            <Tutorial19102 />
            <p>Django とは別のフォルダを新規に作成します。 </p>

            <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
            </Layout_tutorial_19>
        ) : id == 11 ? (
          <Layout_tutorial_19>
            <h3>DashBoardコンポーネント</h3>
            <p>DashBoardフォルダ内にDashBoard.tsxとDashBoard.module.cssファイルを作成</p>
            
            <Tutorial19111 />
            <p>react-reduxからuseSelectorとuseDispatchをインポート </p>
            <p>covidSlice.tsで定義したfetchAsyncGet,fetchAsyncGetDaily,selectData関数をインポート</p>
            <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
            <Tutorial19112 />
            <p>useStylesを使ってmaterialUIを装飾するてデザインを行っていきます。</p>
            <p>TailwindCSS の方がどんなデザインでも対応できます</p>
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useState・useEffect</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link href="/engineer/react_nextjs/react/0/engineer_react_detail_use" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </Link>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MaterialUI</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/08/03/materialui/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <h3>TailwindCSS インストール </h3>
            <p>TailwindCSS は下記の公式ドキュメントを参考にインストールをしていきます。 </p>
          
            </Layout_tutorial_19>
        ): id == 12 ? (
          <Layout_tutorial_19>
          <h3>トップページ作成</h3>
          <p>トップページを修正していきます。</p>
     
          <p>サーバー起動</p>
       
          <p>画面を表示すると、TailwindCSSという文字が表示されているはずです。</p>
          <p>TailwindCSS</p>
          <p>ここで少し TailwindCSS でスタイルを適応してみましょう</p>
          <p>このチートシートを使用すると、どのクラス名を使用したらいいのかが分かります。</p>
    
          <p>TailwindCSS はclassNameを使用してスタイルを適応させます。。 </p>
       
    
          <p>この例は、画面の中央にfont-size:128pxのテキストを配置しました。</p>
          <p>TailwindCSSを使用すると簡単にスタイルを適応することができます </p>
          <p>チートシートを使用して、色々なスタイルを適応してみましょう。</p>
          <div className='justify-center flex'>
            <Image
              className='m-2 border border-black '
              src="/images/programing/django/4.png"
              alt="tailwindcss.com thumbnail image"
              width={600}
              height={675 / 2}
            />
          </div>
          </Layout_tutorial_19>
        )  : (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial1921 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1922 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1923 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1924 = () => {
  const test = `
import React from "react";
import {Pie, Doughnut} from "react-chartjs-2";

const data = {
  labels = ["Windows", "Mac", "Linux"],
  datasets = [
      {
          data: [90,7,3],
          backgroundColor: [],
          hoverBackgroundColor:
          border
      }
  ]
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1925 = () => {
  const test = `
  import React from "react";
  import {Bar, HorizontalBar} from "react-chartjs-2";
  
  const data = {
      labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
      datasets = [
          {
              label: "Demo bar plot",
              backgroundColor: "#20b2aa",
              hoverBackgroundColor: "#5f9ea0",
              data: [50, 30, 70, 15, 50, 0, 100],
          }
      ]
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1926 = () => {
  const test = `
  import React from "react";
  import { Radar } from "react-chartjs-2";
  
  const data = {
      labels: [
          "React",
          "Vue",
          "Angular",
          "JavaScript",
          "TypeScript",
          "Redux",
          "REST API",
      ],
      datasets = [
          {
              label: "Person A",
              backgroundColor: "rgba(179,181,198,0.2)",
              borderColor: "#008b8b",
              pointBackgroundColor: "#008b8b",
              pointBorderColor: "#fff",
              data: [100, 30, 70, 15, 50, 0, 100],
          }
      ]
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1931 = () => {
  const test = `
  npm install @material-ui/core --legacy-peer-deps
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1932 = () => {
  const test = `
import React from "react";
import { Button } from "@material-ui/core";

const MaterialUI: React.FC = () =>{
  return(
      <div>
        <Button variant="contained" color="primary"></Button>
      </div>
  );
};

export default MaterialUI;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1933 = () => {
  const test = `
import React from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle:{
      background:"green",
      padding:"3px 50px"
  }
})


const MaterialUI: React.FC = () =>{
  const classes = useStyle();
  return(
      <div>
        <Button className={classes.btnStyle} variant="contained" color="primary">
          Test Button
        </Button>
      </div>
  );
};

export default MaterialUI;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1941 = () => {
  const test = `
  npx create-react-app . --template redux-typescript --use-npm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1942 = () => {
  const test = `
  npm i @material-ui/core --legacy-peer-deps
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1943 = () => {
  const test = `
  npm install chart.js@2.9.3
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1944 = () => {
  const test = `
  npm install react-chartjs-2@2.9.0 --legacy-peer-deps
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1945 = () => {
  const test = `
 npm install axios
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1947 = () => {
  const test = `
  npm install react-countup
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1948 = () => {
  const test = `
  npm install react-icons
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1951 = () => {
  const test = `

  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { AppThunk, RootState } from '../../app/store';
  
  // ここでstateに保存する形を定義する
  interface CounterState {
    value: number;
  }
  // 初期値を定義する
  const initialState: CounterState = {
    value: 0,
  };
  
  // Reducerの定義をする
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: state => {
        state.value += 1;
      },
    },
  });
  
  export const { increment } = counterSlice.actions;
  
  export const selectCount = (state: RootState) => state.counter.value;
  
  export default counterSlice.reducer;
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1952 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1953 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1954 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1661 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include
  
  from django.conf.urls.static import static
  from django.conf import settings
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('api/', include('app.urls')),
  ]
  
  if settings.DEBUG:
      urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1662 = () => {
  const test = `
  from django.urls import path
  from app import views
  
  
  urlpatterns = [
      path('post/', views.PostView.as_view(), name='post'),
      path('post/<str:pk>/', views.PostDetailView.as_view(), name='post-detail'),
  ]
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1971 = () => {
  const test = `
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
    
    .infected {
      border-left: 5px solid #33a3ff;
      border-radius: 0% !important;
      margin: 2% 2% !important;
    }
    
    .recovered {
      border-left: 5px solid #3cb371;
      border-radius: 0% !important;
      margin: 2% 2% !important;
    }
    
    .deaths {
      border-left: 5px solid #ff3370;
      border-radius: 0% !important;
      margin: 2% 2% !important;
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1972 = () => {
  const test = `
  import React from "react";
  import styles from "./Cards.module.css";
  import CountUp from "react-countup";
  import { Card, CardContent, Typography, Grid } from "@material-ui/core";
  
  import { GiHastyGrave } from "react-icons/gi";
  import { MdLocalHospital } from "react-icons/md";
  import { AiFillLike } from "react-icons/ai";
  
  import { useSelector } from "react-redux";
  import { selectData } from "../covidSlice";
  
  const Cards: React.FC = () => {
    const data = useSelector(selectData);
    return (
      <div className={styles.container}>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} md={3} component={Card} className={styles.infected}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <MdLocalHospital />
                Infected persons
              </Typography>
              <Typography variant="h5">
                {/* <CountUp
                  start={0}
                  end={data.confirmed.value}
                  duration={1.5}
                  separator=","
                /> */}
                {data.confirmed.value}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <AiFillLike /> Recovered persons
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.recovered.value}
                  duration={1.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                <GiHastyGrave />
                Dead persons
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={data.deaths.value}
                  duration={1.5}
                  separator=","
                />
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default Cards;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1973 = () => {
  const test = `
  <Grid item xs={12} md={3} component={Card} className={styles.infected}>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1981 = () => {
  const test = `
  .container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1982 = () => {
  const test = `
  import React from "react";
  import styles from "./Chart.module.css";
  import { Line, Bar } from "react-chartjs-2";
  
  import { useSelector } from "react-redux";
  import { selectData, selectDailyData, selectCountry } from "../covidSlice";
  
  const Chart: React.FC = () => {
    const data = useSelector(selectData);
    const dailyData = useSelector(selectDailyData);
    const country = useSelector(selectCountry);
  
    const barChart = data && (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "#008080",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: ’Latest status in $｛country｝’ },
        }}
      />
    );
  
    const lineChart = dailyData[0] && (
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed.total),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths.total),
              label: "Deaths",
              borderColor: "#ff3370",
              fill: true,
            },
          ],
        }}
      />
    );
  
    return (
      <div className={styles.container}>
        {country.length ? barChart : lineChart}
      </div>
    );
  };
  
  export default Chart;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1983 = () => {
  const test = `
  legend: { display: false }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1984 = () => {
  const test = `
  Latest status in ＄{country}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1991 = () => {
  const test = `
  import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const PieChart: React.FC = () => {
const data = useSelector(selectData);
const motality =
  data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

const pieChart = data && (
  <Doughnut
    data={{
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          data: [
            data.confirmed.value,
            data.recovered.value,
            data.deaths.value,
          ],
          backgroundColor: [
            "rgba(0, 0, 255, 0.5)",
            "#008080",
            "rgba(255, 0, 0, 0.5)",
          ],
          hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
          borderColor: ["transparent", "transparent", "transparent"],
        },
      ],
    }}
    options={{
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 15,
        },
      },
    }}
  />
);

return (
  <>
    {data.confirmed && (
      <Typography align="center" color="textSecondary" gutterBottom>
        Motarity {data.confirmed && motality.toFixed(2)} [%]
      </Typography>
    )}
    {pieChart}
  </>
);
};

export default PieChart;

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1992 = () => {
  const test = `
  const motality =
  data.confirmed && (100 * data.deaths.value) / data.confirmed.value;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial19101 = () => {
  const test = `
  import React from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import { NativeSelect, FormControl } from "@material-ui/core";
  
  import { useDispatch } from "react-redux";
  import { fetchAsyncGetCountry } from "../covidSlice";
  
  const useStyles = makeStyles((theme) => ({
    formControl: {
      marginBottom: theme.spacing(3),
      minWidth: 320,
    },
  }));
  
  const SwitchCoutry: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
  
    const countries = [
      "japan",
      "china",
      "us",
      "france",
      "italy",
      "spain",
      "united kingdom",
      "germany",
      "russia",
      "brazil",
      "taiwan",
      "thailand",
      "new zealand",
      "sweden",
      "india",
    ];
  
    return (
      <FormControl className={classes.formControl}>
        <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch(fetchAsyncGetCountry(e.target.value))
          }
        >
          <option value="">Worldwide</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    );
  };
  
  export default SwitchCoutry;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial19102 = () => {
  const test = `
  dispatch(fetchAsyncGetCountry(e.target.value))
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial19111 = () => {
  const test = `
  .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }      
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial19112 = () => {
  const test = `
  import React, { useEffect } from "react";
  import styles from "./DashBoard.module.css";
  import { makeStyles } from "@material-ui/core/styles";
  import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
  } from "@material-ui/core";
  
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
  
  import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
  import Cards from "../Cards/Cards";
  import Chart from "../Chart/Chart";
  import PieChart from "../PieChart/PieChart";
  import SwithCountry from "../SwitchCountry/SwitchCountry";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    content: {
      marginTop: 85,
    },
  }));
  
  const DashBoard: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(selectData);
  
    useEffect(() => {
      dispatch(fetchAsyncGet());
      dispatch(fetchAsyncGetDaily());
    }, [dispatch]);
  
    return (
      <div>
        <AppBar position="absolute">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Covid 19 Live Dashboard
            </Typography>
            {data && (
              <Typography variant="body1">
                {new Date(data.lastUpdate).toDateString()}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <Container className={classes.content}>
          <div className={styles.container}>
            <SwithCountry />
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Chart />
            </Grid>
  
            <Grid item xs={12} md={5}>
              <PieChart />
            </Grid>
  
            <Grid item xs={12} md={12}>
              <Cards />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  };
  
  export default DashBoard;
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial16113 = () => {
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


