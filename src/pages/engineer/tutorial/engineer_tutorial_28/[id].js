import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_28 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_28>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/bvn_HYpix6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_28>
        ) : id == 2 ? (
          <Layout_tutorial_28>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>Linux環境でプロジェクトを作成します</p>
                <Tutorial2821 />
                <Tutorial2825 />
                <p> webで開発を行うので下記コマンドで立ち上げます</p>
                <Tutorial2822 />


                <h3>Redux導入</h3>
                <Tutorial2823 />
                <p className='text-red-400'>_App.js</p>
                <p>デフォルト_App.js</p>
                <Tutorial2826 />
                <p>Providerでwrapします。</p>
                <h3>store.jsファイル作成</h3>
                <p className='text-red-400'>store.js</p>
                <Tutorial2827 />
                <h3>slicesフォルダ作成</h3>
                <p>navSlice.js作成</p>
                <p className='text-red-400'>slices/navSlice.js</p>
                <Tutorial2828 />
                <h3>screensフォルダ作成</h3>
                <p>HomeScreen.js作成</p>
                <p className='text-red-400'>screens/HomeScreen.js</p>
                <Tutorial28210 />
                <h3>Uber画像表示</h3>
                <p className='text-red-400'>_App.js</p>
                <Tutorial28211 />
                <h3>TailwindCSS導入</h3>
                <Tutorial2824 />
              </div>

              <div className='w-1/2'>
                <p className='text-red-400'>screens/HomeScreen.js</p>
                <Tutorial2829 />
              </div>
            </div>


          </Layout_tutorial_28>
        ) : id == 3 ? (
          <Layout_tutorial_28>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3></h3>
                <p>componentsフォルダを作成し、その直下にNavOptions.jsファイルを作ります。</p>
                <p>rnfeでreactコンポーネントを作成 </p>
                <p>FlatListを使うと、foreach等の処理せずとも、自動で配列内の各オブジェクトに対して処理をしてくれます。</p>
                <p className='text-red-400'>components/</p>
                <Tutorial2831 />
                <h4>reacr-native-elementのインストール</h4>
                <p> reacr-native-elementのインストールの際、safe-area-contextのバージョンが新しいとインストールできない場合は、バージョンを落としてインストールします </p>
                <p>react-native-safe-area-context@&quot;^3.1.9&quot; from react-native-elements@3.4.2</p>
                <Tutorial2832 />
                <h4>iconsインストール</h4>

                <p>下記コマンドでインストールします</p>
                <Tutorial2833 />
                <h4>Safe-Area-Contextインストール</h4>
                <p>SafeAreaViewで囲むことで要素をスクリーン外に表示するのを防ぐことができます。</p>
                <Tutorial2834 />
                <h4>MapScreen.js作成</h4>
                <Tutorial28317 />
                <h4>React Navigationインストール</h4>
                <Tutorial2835 />
                <h4>NavigationContainerでwrap</h4>
                <p className='text-red-400'>_App.js</p>
                <Tutorial28315 />
                <h4>Stackインストール</h4>
                <Tutorial28316 />
                <h4>useNavigationを使った画面遷移</h4>
                <p>ボタンを押したときに画面を遷移</p>
                <p className='text-red-400'>NavOptions.js</p>
                <Tutorial28318 />

              </div>

              <div className='w-1/2'>
                <p className='text-red-400'>components/NavOptions.js</p>
                <Tutorial2839 />
              </div>
            </div>
          </Layout_tutorial_28>
        ) : id == 4 ? (
          <Layout_tutorial_28>
            <h3>Google Cloud Platform</h3>
            <p>新しいプロジェクトを作成</p>
            <p>APIを選択します</p>
            <ul>
              <li>Directions API</li>
              <li>Distance Matrix API</li>
              <li>Places API</li>
            </ul>
            <h4>Google places autocompleteインストール</h4>
            <Tutorial2841 />
            <h4>.envファイル作成</h4>
            <Tutorial2842 />
            <p>srcを設定した時にエラーが表示されました。指定のドメインを認証させるためにnext.config.jsにドメインを追加します。</p>
            <h4>react-native-dotenvインストール</h4>
            <Tutorial2843 />
            <h4></h4>
            <p className='text-red-400'>babel.config.js</p>
            <Tutorial2844 />
            <h4>HomeScreen.jsにGoogle places autocompleteを設定</h4>
            <p className='text-red-400'>screens/HomeScreen.js</p>
            <Tutorial2845 />
            <h4>MapScreen.js</h4>
            <h4>Map.js作成</h4>
            <p>componentsフォルダにMap.jsファイルを作ります。</p>
            <p>rnfes</p>
            <p>MapScreen.jsにMapコンポーネントを読み込ませます</p>
            <p className='text-red-400'>components/Map.js</p>
            <h4>react-native-mapsインストール</h4>
            <Tutorial2846 />



          </Layout_tutorial_28>
        ) : id == 5 ? (
          <Layout_tutorial_28>
            <h3>Footer</h3>
            <p>componentsフォルダを作成し、その直下にFooter.jsファイルを作ります。</p>
            <p>rfceでreactコンポーネントを作成 </p>
            <Tutorial3351 />
            <p className='text-red-400'>エラーが発生した場合</p>
            <Tutorial3358 />
            <p>React-routerを適用するためにApp.jsにおいて全体をRouterで囲みます。 </p>
            <Tutorial3352 />
            <h3>Routerの設定</h3>
            <p>メールを選択した時に/mailに遷移し、/の時はEmailリストを表示させることができます</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3353 />
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TMDB API取得方法</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <h3>Mail.js作成</h3>
            <p>Mail.jsと適用させるMail.cssを作成します。</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3354 />
            <h3>EmailList.js作成</h3>
            <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
            <p>App.jsにRouteの設定を記述します。</p>
            <Tutorial3355 />
            <p>SidebarとSwitchを横並びにするためにApp.cssの.app__bodyに対してflexを適用させます。</p>
            <h3>Section.js作成</h3>
            <p>EmailList.jsと適用させるEmailList.cssを作成します。</p>
          </Layout_tutorial_28>
        ) : id == 6 ? (
          <Layout_tutorial_28>
            <h3>Results.js作成</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <h4>SideBar.tsx</h4>
            <p className='text-red-400'>components/Results.js</p>
            <Tutorial3761 />

          </Layout_tutorial_28>
        ) : id == 7 ? (
          <Layout_tutorial_28>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>Mail.js</h3>
                <p>iconを表示させます。</p>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial3371 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>React Hook formのインストール</h4>

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial3379 />
                <p className='text-red-400'>Mail.css</p>
                <Tutorial33710 />
              </div>
            </div>
          </Layout_tutorial_28>
        ) : id == 8 ? (
          <Layout_tutorial_28>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Redux</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <p className='text-red-400'>app/store.js</p>
            <Tutorial3381 />
            <p className='text-red-400'>features/mailSlice.js</p>
            <Tutorial3382 />
            <p className='text-red-400'>features/userSlice.js</p>
            <Tutorial3383 />
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <p>公式ドキュメント - Generic views </p>
          </Layout_tutorial_28>
        ) : id == 9 ? (
          <Layout_tutorial_28>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>SendMail.js</h3>
                <p>iconを表示させます。</p>
                <p className='text-red-400'>Mail.js</p>
             
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>React Hook formのインストール</h4>
            
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
              
                <p className='text-red-400'>SendMail.css</p>
            
              </div>
            </div>
          </Layout_tutorial_28>
        ) : id == 10 ? (
          <Layout_tutorial_28>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>firebase.js</h3>
                <p>firebaseをインストールします。</p>

              
                <p>srcフォルダの直下にfirebase.jsを作成します。</p>
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>React Hook formのインストール</h4>
               
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
               
                <p className='text-red-400'>SendMail.css</p>
             
              </div>
            </div>
          </Layout_tutorial_28>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2821 = () => {
  const test = `
  expo init uber-clone-yt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2822 = () => {
  const test = `
  npm run web
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2823 = () => {
  const test = `
  npm install @reduxjs/toolkit
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2824 = () => {
  const test = `
  npm i tailwind-react-native-classnames
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2825 = () => {
  const test = `
✔ Choose a template: › blank               a minimal app as clean as an empty canvas 
✔ Downloaded template. 
📦 Using npm to install packages. 
✔ Installed JavaScript dependencies. 
✅ Your project is ready! 
To run your project, navigate to the directory and run one of the following npm commands. 
- cd uber2-clone-yt 
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below. 
- npm run android 
- npm run ios # requires an iOS device or macOS for access to an iOS simulator 
- npm run web
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2826 = () => {
  const test = `
  import { StatusBar } from 'expo-status-bar'; 
  import { StyleSheet, Text, View } from 'react-native'; 
  export default function App() { 
    return ( 
      <View style={styles.container}> 
        <Text>Open up App.js to start working on your app!</Text> 
        <StatusBar style="auto" /> 
      </View> 
    ); 
  } 
  const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: '#fff', 
      alignItems: 'center', 
      justifyContent: 'center', 
    }, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2827 = () => {
  const test = `
  import { configureStore } from "@reduxjs/toolkit"; 
  import navReducer from "./slices/navSlice"; 
  export const store = configureStore({ 
    reducer: { 
      nav: navReducer, 
    }, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2828 = () => {
  const test = `
  import { createSlice } from "@reduxjs/toolkit"; 
  const initialState = { 
    origin: null, 
    destination: null, 
    travelTimeInformation: null, 
  }; 
  export const navSlice = createSlice({ 
    name: "nav", 
    initialState, 
    reducers: { 
      setOrigin: (state, action) => { 
        state.origin = action.payload; 
      }, 
      setDestination: (state, action) => { 
        state.destination = action.payload; 
      }, 
      setTravelTimeInformation: (state, action) => { 
        state.travelTimeInformation = action.payload; 
      }, 
    }, 
  }); 
  export const { setOrigin, setDestination, setTravelTimeInformation } = 
    navSlice.actions; 
  // Selectors 
  export const selectOrigin = (state) => state.nav.origin; 
  export const selectDestination = (state) => state.nav.destination; 
  export const selectTravelTimeInformation = (state) => 
    state.nav.travelTimeInformation; 
  export default navSlice.reducer;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2829 = () => {
  const test = `
  import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavFavourites from "../components/NavFavourites";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavOptions from "../components/NavOptions";
const HomeScreen = () => {
const dispatch = useDispatch();
return (
  <SafeAreaView style={tw'bg-white h-full'}>
    <View style={tw'p-5'}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={{ uri: "https://links.papareact.com/gzs" }}
      />
      <GooglePlacesAutocomplete
        placeholder="Where From?"
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
        returnKeyType={"search"}
        minLength={2}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />
      <NavOptions />
      <NavFavourites />
    </View>
  </SafeAreaView>
);
};
export default HomeScreen;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28210 = () => {
  const test = `
  import { View, Text, SafeAreaView, Image } from 'react-native' 
  import React from 'react' 
  import tw from 'tailwind-react-native-classnames'; 
  const HomeScreen = () => { 
      return ( 
          <SafeAreaView style={tw'bg-white h-full'}> 
              <View style={tw'p-5'}> 
                  <Image 
                      style={{ width: 100, height: 100, resizeMode: "contain" }} 
                      source={{ uri: "https://links.papareact.com/gzs" }} 
                  /> 
              </View> 
               
          </SafeAreaView> 
      )} 
  export default HomeScreen
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28211 = () => {
  const test = `
  import { StyleSheet, Text, View } from 'react-native'; 
  import { store } from "./store"; 
  import { Provider } from "react-redux"; 
  import { SafeAreaProvider } from "react-native-safe-area-context"; 
  import HomeScreen from "./screens/HomeScreen"; 
  export default function App() { 
    return ( 
      <Provider store={store}> 
            <View> 
              <HomeScreen /> 
            </View> 
      </Provider> 
    ); 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2831 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2832 = () => {
  const test = `
  npm install react-native-elements
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2833 = () => {
  const test = `
  npm install react-native-vector-icons
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2834 = () => {
  const test = `
  npm install react-native-safe-area-context
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2835 = () => {
  const test = `
  expo install react-native-gesture-handler react-native-reanimated react-native-screens @react-native-community/masked-view
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2836 = () => {
  const test = `
  npm install @react-navigation/native-stack
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2839 = () => {
  const test = `
  import React from "react"; 
import { Icon } from "react-native-elements"; 
import tw from "tailwind-react-native-classnames"; 
import { 
View, 
Text, 
Image, 
FlatList, 
TouchableOpacity, 
StyleSheet, 
} from "react-native"; 
import { useNavigation } from "@react-navigation/native"; 
import { useSelector } from "react-redux"; 
import { selectOrigin } from "../slices/navSlice"; 
const data = [ 
{ 
  id: "123", 
  title: "Get a ride", 
  image: "https://links.papareact.com/3pn", 
  screen: "MapScreen", 
}, 
{ 
  id: "456", 
  title: "Order food", 
  image: "https://links.papareact.com/28w", 
  screen: "EatsScreen", // Change in future... 
}, 
]; 
const NavOptions = () => { 
const navigation = useNavigation(); 
const origin = useSelector(selectOrigin); 
return ( 
  <FlatList 
    data={data} 
    horizontal 
    keyExtractor={(item) => item.id} 
    renderItem={({ item }) => ( 
      <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)} 
        style={tw'p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'} 
        disabled={!origin} 
      > 
        <View style={tw'＄{!origin && "opacity-20"}'}> 
          <Image 
            style={{ width: 120, height: 120, resizeMode: "contain" }} 
            source={{ uri: item.image }} 
          /> 
          <Text style={tw'mt-2 text-lg font-semibold'}>{item.title}</Text> 
          <Icon 
            style={tw'p-2 bg-black rounded-full w-10 mt-4'} 
            name="arrowright" 
            color="white" 
            type="antdesign" 
          /> 
        </View> 
      </TouchableOpacity> 
    )} 
  /> 
); 
}; 
export default NavOptions; 
const styles = StyleSheet.create({});
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28315 = () => {
  const test = `
import { StyleSheet, Text, View } from 'react-native'; 
import { store } from "./store"; 
import { Provider } from "react-redux"; 
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import HomeScreen from "./screens/HomeScreen"; 
import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native"; 
export default function App() { 
return ( 
  <Provider store={store}> 
    <NavigationContainer> 
      <SafeAreaProvider> 
        <View> 
          <HomeScreen /> 
        </View> 
      </SafeAreaProvider> 
    </NavigationContainer> 
  </Provider> 
); 
}
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28316 = () => {
  const test = `
  npm install @react-navigation/stack
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28317 = () => {
  const test = `
  
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial28318 = () => {
  const test = `
  <TouchableOpacity  
  onPress={() => navigation.navigate(item.screen)} 
  style={tw'p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 '} 
  >
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2841 = () => {
  const test = `
  npm install react-native-google-places-autocomplete --save
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2842 = () => {
  const test = `
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2843 = () => {
  const test = `
  npm i react-native-dotenv
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2844 = () => {
  const test = `
  module.exports = function (api) { 
    api.cache(true); 
    return { 
      presets: ["babel-preset-expo"], 
      plugins: [ 
        [ 
          "module:react-native-dotenv", 
          { 
            moduleName: "@env", 
            path: ".env", 
          }, 
        ], 
      ], 
    }; 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2845 = () => {
  const test = `
  import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; 
  import { GOOGLE_MAPS_APIKEY } from "@env";

  <GooglePlacesAutocomplete 
  placeholder="Where From?" 
  styles={{ 
    container: { 
      flex: 0, 
    }, 
    textInput: { 
      fontSize: 18, 
    }, 
  }} 
  fetchDetails={true} 
  enablePoweredByContainer={false} 
  returnKeyType={"search"} 
  minLength={2} 
  onPress={(data, details = null) => { 
    dispatch( 
      setOrigin({ 
        location: details.geometry.location, 
        description: data.description, 
      }) 
    ); 
    dispatch(setDestination(null)); 
  }} 
  query={{ 
    key: GOOGLE_MAPS_APIKEY, 
    language: "en", 
  }} 
  nearbyPlacesAPI="GooglePlacesSearch" 
  debounce={400} 
/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2846 = () => {
  const test = `
  npm install react-native-maps
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3347 = () => {
  const test = `
  const request = await fetch(
    'https://api.themoviedb.org/3＄{
      requests[genre]?.url || requests.fetchTrending.url
    }'
  ).then((res) => res.json());
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3351 = () => {
  const test = `
npm add react-router-dom
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3352 = () => {
  const test = `
  function App() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Sidebar />
        </div>
      </Router>
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



const Tutorial3353 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3354 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3355 = () => {
  const test = `
  function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
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

const Tutorial3358 = () => {
  const test = `
npm add react-router-dom@5
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3761 = () => {
  const test = `
  import Thumbnail from "./Thumbnail";
  import FlipMove from "react-flip-move";
  
  function Results({ results }) {
    return (
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      </FlipMove>
    );
  }
  
  export default Results;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial3762 = () => {
  const test = `
  <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3763 = () => {
  const test = `
  <div className="col-span-2 mt-2 hidden items-start px-2 lg:inline">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3764 = () => {
  const test = `
  npm add react-flip-move
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3371 = () => {
  const test = `
<IconButton onClick={() => history.push("/")}>
  <ArrowBackIcon />
</IconButton>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3379 = () => {
  const test = `
  import { IconButton } from '@mui/material' 
  import React from 'react' 
  import "./Mail.css"; 
  import { useHistory } from "react-router-dom"; 
  import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
  import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'; 
  import ErrorIcon from '@mui/icons-material/Error'; 
  import DeleteIcon from '@mui/icons-material/Delete'; 
  import EmailIcon from '@mui/icons-material/Email'; 
  import WatchLaterIcon from '@mui/icons-material/WatchLater'; 
  import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
  import LabelImportantIcon from '@mui/icons-material/LabelImportant'; 
  import MoreVertIcon from '@mui/icons-material/MoreVert'; 
  import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'; 
  import PrintIcon from '@mui/icons-material/Print'; 
  import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
  function Mail() { 
      const history = useHistory(); 
      return ( 
          <div className='mail'> 
              <div className='mail__tools'> 
                  <div className='mail__toolsLeft'> 
                      <IconButton onClick={() => history.push("/")}> 
                          <ArrowBackIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoveToInboxIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ErrorIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <DeleteIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <EmailIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <WatchLaterIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <CheckCircleIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <LabelImportantIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoreVertIcon /> 
                      </IconButton> 
                  </div> 
                  <div className='mail__toolsRight'> 
                      <IconButton> 
                          <UnfoldMoreIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <PrintIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ExitToAppIcon /> 
                      </IconButton> 
                  </div> 
              </div> 
          </div> 
      ) 
  } 
  export default Mail
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial33710 = () => {
  const test = `
  .mail {
      flex: 1;
      background-color: whitesmoke;
    }
    
    .mail__tools {
      display: flex;
      justify-content: space-between;
      background-color: white;
    }
    
    .mail__toolsLeft {
      display: flex;
    }
    
    .mail__body {
      display: flex;
      flex-direction: column;
      margin: 30px;
      background-color: white;
      padding: 20px;
      height: 100vh;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
    }
    
    .mail__bodyHeader {
      display: flex;
      align-items: center;
      border-bottom: 1px solid whitesmoke;
      padding: 20px;
      position: relative;
    }
    
    .mail__important {
      color: #e8ab02 !important;
    }
    
    .mail__bodyHeader > h2 {
      font-weight: 400;
      margin-right: 20px;
    }
    
    .mail__bodyHeader > p {
      margin-left: 20px;
    }
    
    .mail__time {
      position: absolute;
      top: 24px;
      right: 0;
      font-size: 12px;
      color: gray;
    }
    
    .mail__message > p {
      padding: 10px;
      margin-right: 20px;
      overflow-wrap: break-word;
    }
    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3381 = () => {
  const test = `
import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";

export default configureStore({
reducer: {
  mail: mailReducer,
  user: userReducer,
},
});
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3382 = () => {
  const test = `
  import { createSlice } from "@reduxjs/toolkit";

  export const mailSlice = createSlice({
    name: "mail",
    initialState: {
      selectedMail: null,
      sendMessageIsOpen: false,
    },
    reducers: {
      selectMail: (state, action) => {
        state.selectedMail = action.payload;
      },
      openSendMessage: (state) => {
        state.sendMessageIsOpen = true;
      },
      closeSendMessage: (state) => {
        state.sendMessageIsOpen = false;
      },
    },
  });
  
  export const {
    selectMail,
    openSendMessage,
    closeSendMessage,
  } = mailSlice.actions;
  
  export const selectOpenMail = (state) => state.mail.selectedMail;
  export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
  
  export default mailSlice.reducer;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3383 = () => {
  const test = `
  import { createSlice } from "@reduxjs/toolkit";

  export const userSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
    },
    reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null;
      },
    },
  });
  
  export const { login, logout } = userSlice.actions;
  
  export const selectUser = (state) => state.user.user;
  
  export default userSlice.reducer;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

