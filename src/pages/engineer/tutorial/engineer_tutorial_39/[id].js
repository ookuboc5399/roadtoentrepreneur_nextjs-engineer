import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_44 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_39>
                  <h3>Redux + React Hooks + TypeScript COVID19 </h3>
                 
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/taPz40VmyzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
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
                  </Layout_tutorial_39>
                ) : id == 2 ? (
                  <Layout_tutorial_39>
                  <h3>プロジェクト作成 </h3>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <Tutorial3921 />
      
                  <h3></h3>
                  <p> webで開発を行うのでwを入力します</p>
                  <Tutorial3922 />
                  <h3></h3>
                  <p>styleSheetは削除します</p>
                  <h3>TailwindCSS導入</h3>
                  <Tutorial3923 />
                  <p>tailwind.config.jsを作成し以下のコードを入力</p>
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial3924 />
                              
                  <p> babel.config.jsを以下のように変更します</p>
                  <p className='text-red-400'>babel.config.js</p>
                  <Tutorial3925 />
                  <h3>react-navigation導入</h3>
                  <Tutorial3926 />
                  <h3>safeareacontainer導入</h3>
                  <Tutorial3927 />
                  <h3>stack導入</h3>
                  <Tutorial3928 />
                
                  <h3>screensフォルダ作成</h3>
                  <p>screensフォルダを作成し直下にHomeScreen.jsを作成</p>
                  <p className='text-red-400'>screens/HomeScreen.js</p>
                  <Tutorial3929 />
                 
                  </Layout_tutorial_39>
                ) : id == 3 ? (
                  <Layout_tutorial_39>
                  <div className='flex'>
                      <div className='w-1/2 mr-2'>
                          <h3>Herder</h3>
                          <p>SafeAreaViewでwrap</p>
                          <Tutorial3931 />
                          <h4>react native heroiconsのインストール</h4>
                          <Tutorial3932 />
                          <h4>検索作成</h4>
                          <p>TextInputを使用することで検索を作成できる</p>
                          <Tutorial3933 />
                          <h4>ScrollView</h4>
                          <p>componentsフォルダを作成し直下にCategories.jsを作成</p>
                          <Tutorial3934 />
                          <h4>ScrollView</h4>
                          <p>componentsフォルダにCategoryCard.jsを作成</p>
                          <p>。</p>
                          <p>。</p>
                      </div>
      
                      <div className='w-1/2'>
                          <Tutorial3939 />
                      </div>
                  </div>
              </Layout_tutorial_39>
                ) : id == 4 ? (
                  <Layout_tutorial_39>
                  <h3> </h3>
                  <p>componentsフォルダにFeaturedRow.jsを作成</p>
                  <p>下記コマンドでプロジェクトを作成します。</p>
                  <Tutorial3941 />
                  
                  <p></p>
                  <p></p>
                  <h4>RestaurantCard.js</h4>
      
                  <Tutorial3942 />
                  <p>グラフを使うためにchart.jsをインストール</p>
                  <Tutorial1943 />
                  <p>reactのchart.jsもインストール</p>
                  <Tutorial1944 />
                  <p>1秒かけて設定した値まで動的に</p>
                   <Tutorial1947 />
                   <p>アイコン</p>
                   <Tutorial1948 />           
      
                  <p></p>
                  </Layout_tutorial_39>
                ) : id == 5 ? (
                  <Layout_tutorial_39>
                  <h3>Sanity</h3>
      <p>Sanityプロジェクト作成</p>
                  <Tutorial3951 />
                  <Tutorial3952 />
                  <p>作成したプロジェクトに移動し下記コマンドでSanity起動</p>
                  <Tutorial3953 />
                  <p>Contentの名前をrestaurantに変更します。  </p>
                  <p>post.jsをrestaurant.jsに変更。</p>
                  <p>blickContent.jsは削除します</p>
                  <p className='text-red-400'>restaurant.js</p>
                  <p>previewは削除</p>
                  <Tutorial3954 />
                  <p className='text-red-400'>schema.js</p>
                  <p>previewは削除</p>
                  <Tutorial3955 />
                  <p className='text-red-400'>category.js</p>
                  <p>previewは削除</p>
                  <Tutorial3956 />
                  <p className='text-red-400'>dish.js</p>
                  <p>author.jsをdish.jsに変更</p>
                  <Tutorial3957 />
                  <p className='text-red-400'>featured.js</p>
                  <p>featured.jsを作成</p>
                  <Tutorial3958 />
                  <h3>Sanity</h3>
                  <p>インストール</p>
                  <Tutorial3959 />
                  </Layout_tutorial_39>
                ) : id == 6 ? (
                  <Layout_tutorial_39>
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
                  </Layout_tutorial_39>
                ) : id == 7 ? (
                  <Layout_tutorial_40>
                  <h3>Serializer追加</h3>
                  <p>Serializer とは？</p>
                  <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                  <p>serializers.py ファイルを作成します</p>
                  <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                  <p className='text-red-400'>app/serializers.py</p>
                  <Tutorial1671 />
                  </Layout_tutorial_40>
                ) : id == 8 ? (
                  <Layout_tutorial_40>
                  <h3>Views追加</h3>
                  <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                  <p>それを継承することで、簡単に開発をすることができます </p>
                  <div class="relative sm:rounded-lg">
                      <table class="w-1/3 shadow text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="px-6 py-3">
                                      クラス
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      操作
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      CreateAPIView
                                  </th>
                                  <td class="px-6 py-4">
                                      登録
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      ListAPIView
                                  </th>
                                  <td class="px-6 py-4">
                                      一覧取得
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      RetrieveAPIView
                                  </th>
                                  <td class="px-6 py-4">
                                      取得
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      UpdateAPIView
                                  </th>
                                  <td class="px-6 py-4">
                                      更新
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      DestroyAPIView
                                  </th>
                                  <td class="px-6 py-4">
                                      削除
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <p className='text-red-400'>app/views.py</p>
                  <Tutorial1681 />
                  <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
                  <p>公式ドキュメント - Generic views </p>
                  </Layout_tutorial_40>
                ) : id == 9 ? (
                  <Layout_tutorial_40>
                  <h3>API確認</h3>
                  <p>サーバー起動</p>
                  <p>サーバーを起動させます</p>
      
                  <Tutorial1691 />
                  <h3>API 画面</h3>
                  <p>Django REST Framework には、API を管理する専用画面が用意されています。</p>
      
                  <h4>一覧 </h4>
                  <p>下記にアクセスすると、Post 一覧が表示されます。 </p>
                  <p>http://127.0.0.1:8000/api/post/</p>
                  <h4>詳細 </h4>
                  <p>http://127.0.0.1:8000/api/post/1/</p>
                  <p>Json</p>
                  <p>API をコールすると、下記のような Json 形式でデータを取得することになります。</p>
                  <Tutorial1692 />
                  <p>フロントエンドからのリクエスト</p>
                  <p>フロントエンドから GET、PUT、PUT/PATCH、DELETE などのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。 </p>
                  <p>ぜひ API を活用した設計にしてみましょう。</p>
                  <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
                  </Layout_tutorial_40>
                ) : id == 10 ? (
                  <Layout_tutorial_40>
                  <h3>Next.js導入</h3>
                  <p>Next.js とは？</p>
                  <p>Next.js は React のライブラリとなります。</p>
                  <p>React と組み合わせて開発を行い、サーバーサイドレンダリングを可能にします</p>
                  <p>サーバー側で静的ファイルをレンダリングして、画面を表示するので、表示速度があがります</p>
                  <p>静的ファイルを生成することができるので、SEO 的にも有利になります</p>
                  <p>特徴</p>
                  <p>React アプリのサーバーサイドレンダリング(SSR)を実現</p>
                  <p>node/npm インストール</p>
                  <p>node と npm がインストールされていることを確認します</p>
                  <Tutorial16101 />
                  <p>まだインストールされていない方は、インストールしてください</p>
                  <p>node インストール </p>
                  <div class="flex flex-nowrap">
                      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                          <a href="#">
                              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                          </a>
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  記事を読む
                                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </a>
                          </div>
                      </div>
                  </div>
                  <p>セットアップ </p>
                  <p>Django とは別のフォルダを新規に作成します。 </p>
                  <p>今回は、next-blog-tutorial というフォルダを作成しました。</p>
                  <Tutorial16102 />
                  <p>--use-npmは、npm でインストールするように指定しています </p>
                  <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>
                  <Tutorial16103 />
                  <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
                  </Layout_tutorial_40>
                ) : id == 11 ? (
                  <Layout_tutorial_40>
                  <h3>TailwindCSS導入</h3>
                  <p>TailwindCSS を導入していきます。</p>
                  <p>TailwindCSS とは？ </p>
      
                  <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
                  <p>Bootstrap などのフレームワークでは、ボタンなどのコンポーネントを活用してデザインをしていきます。 </p>
                  <p>TailwindCSS では、コンポーネントは用意されておらず、utility class を使用してデザインを行っていきます。</p>
                  <p>TailwindCSS の方がどんなデザインでも対応できます</p>
      
                  <h3>TailwindCSS インストール </h3>
                  <p>TailwindCSS は下記の公式ドキュメントを参考にインストールをしていきます。 </p>
                  <div className='flex items-center justify-center shadow cursor-pointer'>
                      <div>
                          <Link href="https://tailwindcss.com/docs/guides/nextjs">
                              <div className="">
                                  <div class="text-xl">Install Tailwind CSS with Next.js - Tailwind CSS</div>
                                  <div class="text-xl">Documentation for the Tailwind CSS framework.</div>
                              </div>
                          </Link>
                      </div>
                      <div class="">
                          <Image
                              className='m-2'
                              src="/images/programing/django/tail.jpg"
                              alt="tailwindcss.com thumbnail image"
                              width={256}
                              height={128}
                          />
                      </div>
                  </div>
                  <Tutorial16111 />
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial16112 />
                  <p>元の CSS はすべて削除して、置き換えます。 </p>
                  <p className='text-red-400'>styles/global.css</p>
                  <Tutorial16113 />
                  <p>不要ファイル削除 </p>
                  <p>下記は不要なので削除します</p>
      
                  <p>Home.module.css を削除します</p>
                  <p>api フォルダを削除します。</p>
                  </Layout_tutorial_40>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial3921 = () => {
  const test = `
  npx create-expo-app deliveroo-clone
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3922 = () => {
  const test = `
  › Press a │ open Android 
  › shift+a │ select a device or emulator 
  › Press w │ open web 
  › Press r │ reload app 
  › Press m │ toggle menu 
  › shift+m │ more tools 
  › Press j │ open JavaScript inspector for Hermes 
  › Press o │ open project code in your editor 
  › Press c │ show project QR 
  › Press p │ toggle build mode (development) 
  › Press d │ show developer tools 
  › shift+d │ toggle auto opening developer tools on startup (disabled)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3923 = () => {
  const test = `
  npm install tailwindcss-react-native 
  npm install --save-dev tailwindcss
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3924 = () => {
  const test = `
  module.exports = { 
      content: [ 
        "./screens/**/*.{js,ts,jsx,tsx}", 
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}", 
      ], 
      // ... 
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3925 = () => {
  const test = `
  module.exports = function(api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: ["tailwindcss-react-native/babel"],
      };
    };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3926 = () => {
  const test = `
  npm install @react-navigation/native
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3927 = () => {
  const test = `
  expo install react-native-screens react-native-safe-area-context
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3928 = () => {
  const test = `
  npm install @react-navigation/native-stack
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3929 = () => {
  const test = `
import { View, Text } from 'react-native' 
import React from 'react' 
const HomeScreen = () => { 
return ( 
  <View> 
    <Text>HomeScreen</Text> 
  </View> 
) 
} 
export default HomeScreen
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial39210 = () => {
  const test = `
  npm install @react-navigation/native
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3931 = () => {
  const test = `
  <SafeAreaView> 
      ・・・
  </SafeAreaView> 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3932 = () => {
  const test = `
  npm i react-native-heroicons react-native-svg
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3933 = () => {
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

const Tutorial3934 = () => {
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

const Tutorial3939 = () => {
  const test = `
  import { View, Text, SafeAreaView, Image } from 'react-native'; 
  import React, { useLayoutEffect } from 'react'; 
  import { useNavigation } from "@react-navigation/native"; 
  import { 
      UserIcon, 
      ChevronDownIcon, 
      SearchIcon, 
      AdjustmentsIcon, 
  } from "react-native-heroicons/outline"; 
  const HomeScreen = () => { 
      const navigation = useNavigation(); 
      useLayoutEffect(() => { 
          navigation.setOptions({ 
              headerShown: false, 
          }) 
      },[]); 
      return ( 
          <SafeAreaView> 
              <Text className="text-red-500"> 
                  <View> 
                      <Image 
                          source={{ url: "https://links.papareact.com/wru", }} 
                          className="h-7 w-7" 
                      /> 
                      <View> 
                          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text> 
                          <Text className="font-bold text-xl">Current Location 
                              <ChevronDownIcon size={20} color="#00CCBB" /> 
                          </Text> 
                      </View> 
                      <UserIcon size={35} color="#00CCBB" /> 
                  </View> 
              </Text> 
          </SafeAreaView> 
      ) 
  } 
  export default HomeScreen
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3941 = () => {
  const test = `
  npx create-react-app . --template redux-typescript --use-npm
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3942 = () => {
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


const Tutorial3951 = () => {
  const test = `
  sanity init --coupon sonny2022    
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3952 = () => {
  const test = `
  ? Project name: deliveroo-clone-yt 
  Your content will be stored in a dataset that can be public or private, depending on 
  whether you want to query your content with or without authentication. 
  The default dataset configuration has a public dataset named "production". 
  ? Use the default dataset configuration? Yes 
  ✔ Creating dataset 
  ? Project output path: /home/ookuboc5399/src/youtube/madeookubo/deliveroo-clone/delive 
  roo-clone-yt 
  ? Select project template Blog (schema) 
  ✔ Bootstrapping files from template 
  ✔ Resolving latest module versions 
  ✔ Creating default project files 
  ✔ Saved lockfile 
  Success! Now, use these commands to continue: 
  First: cd /home/ookuboc5399/src/youtube/madeookubo/deliveroo-clone/deliveroo-clone-yt - to enter project’s directory 
  Then: sanity start - to run Sanity Studio 
  Other helpful commands 
  sanity docs - to open the documentation in a browser 
  sanity manage - to open the project settings in a browser 
  sanity help - to explore the CLI manual
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3953 = () => {
  const test = `
sanity start
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3954 = () => {
  const test = `
  export default { 
      name: 'restaurant', 
      title: 'Restaurant', 
      type: 'document', 
      fields: [ 
        { 
          name: 'name', 
          title: 'Restaurant name', 
          type: 'string', 
          validation:(Rule) => Rule.required(), 
        }, 
        { 
          name: 'short_description', 
          title: 'Short description', 
          type: 'string', 
          validation:(Rule) => Rule.max(200), 
        }, 
        { 
          name: 'image', 
          title: 'Image of the Restaurant', 
          type: 'image', 
        }, 
        { 
          name: 'lat', 
          title: 'Latitude of the Restaurant', 
          type: 'number', 
        }, 
        { 
          name: 'long', 
          title: 'Longitude of the Restaurant', 
          type: 'number', 
        }, 
        { 
          name: 'address', 
          title: 'Restaurant address', 
          type: 'string', 
          validation:(Rule) => Rule.required(), 
        }, 
        { 
          name: 'rating', 
          title: 'Enter a Rating from (1-5 Stars)', 
          type: 'number', 
          validation:(Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"), 
        }, 
        { 
          name: 'type', 
          title: 'Category', 
          validation:(Rule) => Rule.required(), 
          type:"reference", 
          to:[{type: "category"}], 
        }, 
        { 
          name: 'dishes', 
          title: 'Dishes', 
          type: 'array', 
          of:[{type:"reference", to:[{type: "dish"}]}], 
        }, 
      ], 
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3955 = () => {
  const test = `
  // First, we must import the schema creator 
  import createSchema from 'part:@sanity/base/schema-creator' 
  // Then import schema types from any plugins that might expose them 
  import schemaTypes from 'all:part:@sanity/base/schema-type' 
  // We import object and document schemas 
  import blockContent from './blockContent' 
  import category from './category' 
  import restaurant from './restaurant' 
  import author from './author' 
  // Then we give our schema to the builder and provide the result to Sanity 
  export default createSchema({ 
    // We name our schema 
    name: 'default', 
    // Then proceed to concatenate our document type 
    // to the ones provided by any plugins that are installed 
    types: schemaTypes.concat([ 
      // The following are document types which will appear 
      // in the studio. 
      restaurant, 
      author, 
      category, 
      // When added to this list, object types can be used as 
      // { type: 'typename' } in other document schemas 
      blockContent, 
    ]), 
  })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3956 = () => {
  const test = `
  export default { 
      name: 'category', 
      title: 'Menu Category', 
      type: 'document', 
      fields: [ 
        { 
          name: 'name', 
          title: 'Category name', 
          type: 'string', 
          validation:(Rule) => Rule.required(), 
        }, 
        { 
          name: 'image', 
          title: 'Image of Category', 
          type: 'image', 
        }, 
      ], 
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3957 = () => {
  const test = `
  export default { 
      name: 'dish', 
      title: 'Dish', 
        type: 'document', 
      fields: [ 
        { 
          name: 'name', 
          title: 'Name of dish', 
          type: 'string', 
          validation:(Rule) => Rule.required(), 
        }, 
        { 
          name: 'short_description', 
          title: 'Short description', 
          type: 'string', 
          validation:(Rule) => Rule.max(200), 
        }, 
        { 
          name: 'price', 
          title: 'Price of the dish in GBP', 
          type: 'number', 
        }, 
        { 
          name: 'image', 
          title: 'Image of the Dish', 
          type: 'image', 
        }, 
      ], 
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3958 = () => {
  const test = `
  export default { 
      name: 'featured', 
      title: 'Featured Menu categories', 
      type: 'document', 
      fields: [ 
          { 
              name: 'name', 
              title: 'Featured Category name', 
              type: 'string', 
              validation: (Rule) => Rule.required(), 
          }, 
          { 
              name: 'short_description', 
              title: 'Short description', 
              type: 'string', 
              validation: (Rule) => Rule.max(200), 
          }, 
          { 
              name: 'restaurants', 
              title: 'Restaurants', 
              type: 'array', 
              of: [{ type: "reference", to: [{ type: "restaurant" }] }], 
          }, 
      ], 
  };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3959 = () => {
  const test = `
  npm i @sanity/client @sanity/image-url
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


const Tutorial1671 = () => {
  const test = `
  from rest_framework import serializers
  from .models import Post
  
  
  class PostSerializer(serializers.ModelSerializer):
      created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
  
      class Meta:
          model = Post
          fields = ('id', 'title', 'image', 'content', 'created_at')
  
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1681 = () => {
  const test = `
  from rest_framework import generics
  from .serializers import PostSerializer
  from .models import Post
  
  
  class PostView(generics.ListAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
  
  
  class PostDetailView(generics.RetrieveAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1691 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1692 = () => {
  const test = `
  {
      "id": 1,
      "title": "xxxxxxx",
      "image": "http://127.0.0.1:8000/media/images/xxxx.png",
      "content": "xxxxxxxxxxxxxxxxxxxxxxx",
      "created_at": "2021-03-31 18:17"
      }
      
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial16101 = () => {
  const test = `
  $ node -v
  $ npm -v
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial16102 = () => {
  const test = `
  $ cd next-blog-tutorial
  $ npx create-next-app . --use-npm
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial16103 = () => {
  const test = `
  npm run dev
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial16111 = () => {
  const test = `
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial16112 = () => {
  const test = `
  module.exports = {
      purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    };
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
