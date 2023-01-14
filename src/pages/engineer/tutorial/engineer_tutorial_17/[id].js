import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_15 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_17>
          <h3>はじめに </h3>
          <p>Django REST Framework と Next.js でシンプルなブログサイトを作成していきます。</p>
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

          <h3>機能 </h3>
          <ul className='list-disc'>
              <li>投稿一覧</li>
              <li>投稿詳細</li>
              <li>About</li>
          </ul>
          <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">useState・useEffect</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="/engineer/react_nextjs/react/0/engineer_react_detail_use" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
          </Layout_tutorial_17>
        ) : id == 2 ? (
          <Layout_tutorial_17>
          <h3>node/npm インストール</h3>
          <p>node と npm がインストールされていることを確認します</p>
          <Tutorial1727 />
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
          <h3>セットアップ </h3>
          <p>react-basicというフォルダを作成します</p>
          <Tutorial1728 />
          <p>React の初期画面が表示されます</p>
          <Tutorial1729 />

          <h3>関数コンポーネント </h3>
          <p>コンポーネントにはクラスコンポーネントとfunctionalコンポーネントがあります。 </p>
          <p> React Hooksではfunctionalコンポーネントを使う。</p>
          <p>Visual Studio CodeでES7 React/Redux/GraphQL/React-Nativeをインストール。 </p>
          <p>srcフォルダの下にcomponentsフォルダを作成します。 </p>
          <p>その中にBasic1.jsファイルを作成し、関数コンポーネントを書いていきます。 </p>
          <p> rafce（React Arrow Function Component）ベーシックとなるコンポーネントを作成することが出来る</p>
          <p>return内は＜div＞タグかReactのフラグメント＜＞＜/＞で囲わないといけない</p>
          <p> </p>
          <p className='text-red-400'>src/components/Basic1.js</p>
          <Tutorial1721 />

          <h3>App.jsで上記コンポーネントを読み込み</h3>
          <p> </p>
          <p className='text-red-400'>src/App.js</p>
          <Tutorial1722 />
          <p>Reactにおけるfunctinalコンポーネントの基本</p>
          <h3>props</h3>
          <p>App.jsからBasic1を呼び出してh1タグの内容</p>
          <p>App.jsからある文字列を渡してBasic1の方で処理をしてその結果を返すことができます。</p>
          <p>HooksをBasic1で利用できるようにするためには引数のところにpropsと記入します。</p>
          <p>propsの中の属性にアクセスるためにカーリーブラケットで｛props.name｝</p>
          <div className='flex'>
              <div className='m-4 w-1/2'>
                  <p className='text-red-400'>src/App.js</p>
                  <Tutorial1723 />
              </div>
              <div className='m-4 w-1/2'>
                  <p className='text-red-400'>src/components/Basic1.js</p>
                  <Tutorial1730 />
              </div>
          </div>

          <p>Basic1は関数なのでいろんな引数を渡して呼び出すことが可能です</p>

          <h3>イベントハンドラー</h3>
          <p>ボタンをクリックしたときに呼び出される関数の処理</p>

          <p>clickHandlerの関数の定義をする</p>
          <p></p>
          <Tutorial1724 />
          <h4>コード解説</h4>
          <p>Basic1にボタンを作ります</p>
          <Tutorial1725 />
          <p>clickHandlerの関数の定義をする</p>
          <Tutorial1726 />
          <p></p>

      </Layout_tutorial_17>
        ) : id == 3 ? (
          <Layout_tutorial_17>
          <h3>React Hooks</h3>
          <p></p>
          <p> </p>
          <h4>Classコンポーネントを使う必要がなくなった</h4>
          <p> コーディングの簡素化　読みやすい</p>
          <h3>Props Drilling問題の解決</h3>
          <p>AからCに何か値を渡したい場合は必ず間のB経由して渡す必要があった。</p>
          <p>reactのHooksにはuseContextを使うとAからCに直接値を渡すことが出来る</p>
          <div class="">
              <Image
                  src="/images/programing/props_drilling.png"
                  alt="01:Pythonとは？"
                  width={760}
                  height={428}
              />
          </div>
          <h3>Redux最小限</h3>
          <p>useContextとuseReducerを組み合わせることによってReduxと同じようなことができる</p>
          <p>reactにはfunctionalコンポーネントとクラスコンポーネントがあった。</p>

          <p>functionalコンポーネントある値を受け取って処理をして返すことしかできなかった。またpropsの属性は受け取った関数側で変更することが出来ない</p>
        
          <p>より複雑な処理をする場合はクラスコンポーネントを使う。this.propsとthis.stateがあり、値を保持したり変更することが出来る。</p>
          <p>ReactHooksにはuseStateがあり、これを使うとReactの開発でクラスコンポーネントを使う必要がなくなった。</p>
          <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Hooks</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2021/07/10/react-hooks/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>

          </div>

      </Layout_tutorial_17>
        ) : id == 4 ? (
          <Layout_tutorial_17>
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>UseState</div>
          <h3>UseState基礎 </h3>
          <p>アプリケーションを作成してきます。 </p>
          <p>useStateをインポート</p>
          <Tutorial1741 />

          <p>カウンターをボタンで。countという関数名変更するためのsetCount。useState(0)で初期値を0に設定</p>
          <Tutorial1742 />
          <p>ボタンを押したら状態のcountが1ずつ増えていくように</p>


          <p>ボタンに増えていく数を表示するためにCount｛count｝。 setCountを使って値を増やしていく。</p>
          <Tutorial1743 />
          <p></p>
          <h4>Formに入力された値を動的に管理</h4>
          <p className='text-red-400'>src/components/Basic1.js</p>
          <Tutorial1744 />

          <p>setProductsを使ってproductのstateを変更する</p>
          <p>evtはhtmlのハンドラー情報を受け取って関数の処理に渡す</p>
          
          <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                  <span class="font-medium">...product</span> オブジェクトとしてnameとpriceがあります。nameだけ書き換えてしまうとpriceの情報が消されてしまう。...をつけることによってオブジェクトの中身を分解して新しい値を設定している
              </div>
          </div>
          <Tutorial1746 />
          <h4>配列</h4>
          <p className='text-red-400'>src/components/Basic2.js</p>
          <Tutorial1745 />
          <p>productの値がmap関数によって展開されてproductに値が入る</p>
          <Tutorial1747 />
      </Layout_tutorial_17>
        ) : id == 5 ? (
          <Layout_tutorial_17>
          <h3>UseEffect</h3>
          <p className='text-red-400'>components/BasicUseEffect</p>
          <Tutorial1751 />
          <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UseEffect</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="/engineer/react_nextjs/react/0/engineer_react_detail_use" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
          </div>
          <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                  <span class="font-medium">UseEffect:</span> レンダリングが走るたびにすぐ実行される
              </div>
          </div>
          <p>useEffectの第二引数に[ ]をすることでクリックを何回押してもuseEffect内は実行されない。</p>
          <p className='text-red-400'>components/BasicUseEffect</p>
          <Tutorial1752 />
          <p>useEffectの第二引数に反応してほしい変数を指定することができる</p>

          <Tutorial1753 />
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>UseState</div>
          <p>componentsフォルダの直下にTimer.jsとTimerContainer.jsファイルを作成します。</p>
          <p>TimerContainer.jsがTimer.jsを呼び出す</p>
          <p></p>
          <p className='text-red-400'>components/TimerContainer.js</p>
           <Tutorial1754 />
          <p></p>
          <p></p>
          <p className='text-red-400'>components/Timer.js</p>
          <Tutorial1755 />
          <p></p>
      </Layout_tutorial_17>
        ) : id == 6 ? (
          <Layout_tutorial_17>
          <h3>APIアクセス</h3>
          <p>ReactでAPIにアクセスする方法axios、JavaScriptのFetchを使う方法の2つがあります。</p>
          <h4>axios</h4>
          <p>axiosをインストールします。</p>
          <Tutorial1763 />
          <p>setPostsを使って変数postsにAPI先のJsonファイルを格納します。 </p>
          <Tutorial1764 />
          <p>useEffectの第二引数には[ ]を</p>
          <p className='text-red-400'>components/ApiFetch.js</p>
          <Tutorial1761 />
          <h4>Fetch</h4>
          <p className='text-red-400'>components/ApiFetch.js</p>
          <Tutorial1765 />
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>id</div>
          <p>URLはシングルクォーテーションで文字列と認識されています。</p>
          <p>しかしidは変化するstateとして埋め込みたいので下記のように記述し、バッククォーテーションで囲みます</p>
          <Tutorial1766 />
          <p>ボタンが押されたときにuseEffectをためにclickedを第二引数に指定します。</p>
          <p></p>
          <p></p>
          <p className='text-red-400'>components/ApiFetch.js</p>
          <Tutorial1762 />

          </Layout_tutorial_17>
        ) : id == 7 ? (
          <Layout_tutorial_17>
          <h3>useContext</h3>
          <p></p>
          <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                  <a href="#">
                      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Hooks</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2021/07/10/react-hooks/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          記事を読む
                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
          </div>
          <p>srcフォルダの中にcontextsフォルダを作成し、その中にAppContext.jsファイルを作成します</p>
          <p></p>
          <p></p>
          <p className='text-red-400'>contexts/AppContext.js</p>
          <Tutorial1771 />
          <p>App.jsの要素全体をProviderで囲みます。</p>
          <p>そうするとProvider内のコンポーネントでProviderから提供されるvalueが利用できるようになります</p>
          <p className='text-red-400'>src/App.js</p>
          <Tutorial1772 />
          <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>useContext</div>
          <p>componentsフォルダにA.jsとB.jsファイルを作成</p>
          <p>App.jsから孫のC.jsまでvalue値をuseContextを使って渡す</p>
          <p className='text-red-400'>components/B.js</p>
          <Tutorial1773 />
          <p className='text-red-400'>components/C.js</p>
          <Tutorial1774 />
          <p>C.jsを修正します</p>
                      <p className='text-red-400'>components/C.js</p>
          <Tutorial1775 />
      </Layout_tutorial_17>
        ) : id == 8 ? (
          <Layout_tutorial_16>
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
      </Layout_tutorial_16>
        ) : id == 9 ? (
          <Layout_tutorial_16>
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
      </Layout_tutorial_16>
        ) : id == 10 ? (
          <Layout_tutorial_16>
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
      </Layout_tutorial_16>
        ) : id == 11 ? (
          <Layout_tutorial_16>
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
      </Layout_tutorial_16>
        ) : id == 12 ? (
          <Layout_tutorial_16>
          <h3>トップページ作成</h3>
          <p>トップページを修正していきます。</p>
          <Tutorial16121 />
          <p>サーバー起動</p>
          <Tutorial16122 />
          <p>画面を表示すると、TailwindCSSという文字が表示されているはずです。</p>
          <p>TailwindCSS</p>
          <p>ここで少し TailwindCSS でスタイルを適応してみましょう</p>
          <p>このチートシートを使用すると、どのクラス名を使用したらいいのかが分かります。</p>
    
          <p>TailwindCSS はclassNameを使用してスタイルを適応させます。。 </p>
          <Tutorial16123 />
    
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
        </Layout_tutorial_16>
        ) : id == 13 ? (
          <Layout_tutorial_16>
          <h3>レイアウト作成</h3>
          <p>レイアウトコンポーネントを作成していきます。</p>
          <p>components フォルダを作成し、その中に layout フォルダを作成します</p>
          <p>layout フォルダを作成したら、layout.js ファイルを作成します</p>
          <p>layout.js ファイルには、共通のヘッダーやフッターを書いていきます </p>
          <p className='text-red-400'>components/layout/layout.js</p>
          <Tutorial16131 />
          <p>｛props.children｝の中に、各画面のデータが入っていきます。</p>
      </Layout_tutorial_16>
        ) : id == 14 ? (
          <Layout_tutorial_15>
          <p>プロフィール編集</p>
          <p>プロフィール編集機能を構築していきます。</p>
          <p>プロフィール編集</p>
          <p>プロフィール編集画面を作成します。</p>
          <p>プロフィールの名前と画像を変更できるようにします。</p>
          <p>名前はuser状態から取得することができます。</p>
          <p>送信ボタンをクリックするとアクションのedit_profile関数がコールされます。</p>
          <p>プロフィール編集が成功したら、トップページに遷移します。</p>
          <Tutorial15141 />
          <p>action</p>
          <p>プロフィール編集と状態解除のアクションタイプを定義します。</p>
          <Tutorial15142 />
          <p>アクションにedit_profile関数を追加します。</p>
          <p>画像を扱うので、FormDataオブジェクトに格納して送信します</p>
          <Tutorial15143 />
          <p>API</p>
          <p>フロントエンド API は coolkie からアクセストークンを取得します。</p>
          <Tutorial15144 />
          <p>reducer</p>
          <p>プロフィール編集用のアクションタイプを追加して、プロフィール編集が成功したら、edit_profile_successを true に設定します。</p>
          <Tutorial15145 />
          <p>トップページ</p>
          <p>トップページに認証用の状態解除関数を追加します</p>
          <Tutorial15146 />
          <p>動作確認</p>
          <p>プロフィール編集画面で名前とプロフィール画像を変更してみましょう。</p>
        </Layout_tutorial_15>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial1721 = () => {
  const test = `
import React from 'react'

const Basic1 = () => {
  return (
      <div>
          <h1>Hello React1</h1>
          <h1>Hello React2</h1>
      </div>
  )
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1722 = () => {
  const test = `
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1'

funcion App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Basic1 />
          </header>
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



const Tutorial1723 = () => {
  const test = `
  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Basic1 from './components/Basic1'
  
  funcion App() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Basic1 name="Hooks"/>
              </header>
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


const Tutorial1724 = () => {
  const test = `
import React from 'react'

const Basic1 = () => {
  return (
      <div>
          <button onClick={clickHandler}>Click</button>
          <h1>Hello React1</h1>
          <h1>Hello React2</h1>
      </div>
  )
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1725 = () => {
  const test = `
<button onClick={clickHandler}>Click</button>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1726 = () => {
  const test = `
  const clickHandler = () =>{
      console.log('clicked')
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1727 = () => {
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


const Tutorial1728 = () => {
  const test = `
  $ mkdir react-basic
  $ cd react-basic
  $ npx create-react-app react-basic
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1729 = () => {
  const test = `
  npm start
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1730 = () => {
  const test = `
import React from 'react'

const Basic1 = (props) => {
  return (
      <div>
          <h1>Hello {props.name}</h1>
          <h1>Hello React2</h1>
      </div>
  )
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1731 = () => {
  const test = `
  (myvenv) ~$ django-admin startproject mysite .
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1732 = () => {
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


const Tutorial1741 = () => {
  const test = `
  import React,{useState} from 'react'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1742 = () => {
  const test = `
const [count, setCount] = usestate(0)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1743 = () => {
  const test = `
 <button onClick={() => setCount(count+1)}>Count {count}</button>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1744 = () => {
  const test = `
 import React, {useState} from 'react'

 const Basic1 = () => {
     const [product, setProducts] = useState({name:'',price:''})

     return(
         <>
             <form>
                 <input type='text' value={product.name}
                 onChange={evt=>setProduct({...product, name: evt.target.value})}/>

                 <input type='text' value={product.price}
                 onChange={evt=>setProduct({...product, price: evt.target.value})}/>

             </form>

             <h1>Product name is {product.name}</h1>
              <h1>Product name is {product.price}</h1>
         </>
     )
 }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1745 = () => {
  const test = `
  import React, {useState} from 'react'

  const Basic2 = () => {
      const [products, setProducts] = useState([])
      const newProducts = () => {
          setProducts([...products,{
              id:products.length,
              name: "Hello React"
          }])
      }

      return(
          <div>
              <button onClick={newProducts}>Add New Product</button>
              <ul>
                  {products.map(product => (
                      <li key={product.id}>{product.name} id:{product.id}</li>
                  ))}

              </ul>
          </div>
      )
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1746 = () => {
  const test = `
onChange={evt=>setProduct({})}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1747 = () => {
  const test = `
  <li key={product.id}>{product.name} id:{product.id}</li>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1751 = () => {
  const test = `
  import React, {useState, useEffect} from 'react'

  const BasicUseEffect = () => {


  class [count, setCount] = useState(0)

  useEffect(() => {
      console.log("useEffect invoked")
  })

  return(
      <div>
          <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
      </div>
  )
}

  export default BasicUseEffect
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1752 = () => {
  const test = `
  import React, {useState, useEffect} from 'react'

  const BasicUseEffect = () => {


  const [count, setCount] = useState(0)
  const [item, setItem] = useState('')

  useEffect(() => {
      console.log("useEffect invoked")
  })

  return(
      <div>
          <button onClick={()=> setCount(prevCount=>prevCount+1)}>Click {count}</button>
          <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}>
      </div>
  )
}

  export default BasicUseEffect
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1753 = () => {
  const test = `
  useEffect(() => {
      console.log("useEffect invoked")
  }[count])
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1754 = () => {
  const test = `
  import React, {useState} from 'react'
  import Timer from './Timer'

  const TimerContainer = () =>{
      const [display,setDisplay] = useState(true)
      return(
          <div>
              <button onClick={()=>setDisplay(!display)}>Switch Timer</button>
              {display && <Timer />}
          </div>
          )
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1755 = () => {
  const test = `
  import React, {useState,useEffect} from 'react'

  const Timer = () =>{
      const [count,setCount] = useState(0)

      const Time = () =>{
          setCount(prevCount => prevCount+1)
      }

      useEffect(()=>{
          const interval = setInterval(time, 1000)
          return 
      })
      return(
          <div>
              <button onClick={()=>setDisplay(!display)}>Switch Timer</button>
              {display && <Timer />}
          </div>
          )
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1761 = () => {
  const test = `
  import React, {useState, useEffect} from 'react'
  import axios from 'axios'
  const ApiFetch =()=>{

      const [posts,setPosts] = useState([])

      useEffect(() =>{
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
              setPosts(res.data)
          })
      },[])

      return (
          <div>
              <ul>
                  {
                      posts.map(post => <li key={post.id}> {post.title}</li>)
                  }
              </ul>
          </div>
      )
  }

  export default ApiFetch
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1762 = () => {
  const test = `
  import React, {useState, useEffect} from 'react'
  import axios from 'axios'
  const ApiFetch =()=>{

      const [posts,setPosts] = useState([])
      const [id,setId] = useState(1)
      const [clicked, setClicked] = useState(false)

      useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'})
          .then(res => res.json())
          .then(data =>{
              setPosts(data)
          })
      },[])

      return (
          <div>
              <ul>
                  {
                      posts.map(post => <li key={post.id}> {post.title}</li>)
                  }
              </ul>
          </div>
      )
  }

  export default ApiFetch
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1763 = () => {
  const test = `
  npm install axios
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1764 = () => {
  const test = `
  setPosts(res.data)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1765 = () => {
  const test = `
  import React, {useState, useEffect} from 'react'
  import axios from 'axios'
  const ApiFetch =()=>{

      const [posts,setPosts] = useState([])

      useEffect(() =>{
          fetch('https://jsonplaceholder.typicode.com/posts/＄{id}',{method:'GET'})
          .then(res => res.json())
          .then(data =>{
              setPosts(data)
          })
      },[])

      return (
          <div>
              <input type='text value={id} onChange={evt=>setId(evt.target.value)}/>
              <br/>
              <buton type='buton' onClick={handlerClicked}>Get post</button>
              <br/>
              {posts.title}

          </div>
      )
  }

  export default ApiFetch
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1766 = () => {
  const test = `
  fetch(‘https://jsonplaceholder.typicode.com/posts/＄{id}‘,{method:'GET'}) 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1771 = () => {
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


const Tutorial1772 = () => {
  const test = `
  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import AppContext from './components/AppContext';
  
  funcion App() {
      return (
          <AppContext.Provider value={'value from App.js'}>
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <Basic1 />
                  </header>
              </div>
          </AppContext.Provider>
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

const Tutorial1773 = () => {
  const test = `
  import React from 'react';
  import C from './C'
  
  const B = () =>{
      return (
              <div>
                  <h3>B</h3>
                  <C />
              </div>
      );
  }
  
  export default B;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1774 = () => {
  const test = `
  import React from 'react';
  
  const C = () =>{
      return (
              <div>
                  <h3>C</h3>

              </div>
      );
  }
  
  export default C;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1775 = () => {
  const test = `
  import React,{useContext} from 'react';
  import AppContext from 'react';
  
  const C = () =>{
      const value = useContext(AppContext)
      return (
              <div>
                  <h3>C</h3>
{value}
              </div>
      );
  }
  
  export default C;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};