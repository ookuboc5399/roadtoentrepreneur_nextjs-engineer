import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_65 } from '../../../../components/layout/engineer/tutorial';
import { File } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_65>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/oYLiqD1eqtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_65>
        ) : id == 2 ? (
          <Layout_tutorial_65>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial6521 />
            <h4>thirdwebのインストール</h4>
            <Tutorial6522 />


          </Layout_tutorial_65>
        ) : id == 3 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className=''>
                <h4>utilsフォルダ作成</h4>
                <p> その直下にnetwork.tsを作ります。</p>
                <p className='text-red-400'>utils/network.ts</p>
                <Tutorial6531 />
                <h4>componentsフォルダ作成</h4>
                <p>直下にHeader.tsを作ります。</p>
                <p>trfceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>src/components/Header.js</p>
                <h4></h4>
                <p>Providerで囲みます</p>
                <p className='text-red-400'>pages/_app.tsx</p>
                <Tutorial6532 />
                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>
                <Tutorial6533 />
                <h4>iconsインストール</h4>
                <p>下記コマンドでインストールします</p>
                <Tutorial6534 />
                <h4>next.config.js変更</h4>
                <p> ホワイトリストにpapareact.comを追加します</p>
                <Tutorial6535 />
                <h4>.env.local作成</h4>
                <p></p>
                <Tutorial6536 />
                <p>。</p>
              
                
              </div>

            </div>
          </Layout_tutorial_65>
        ) : id == 4 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className=''>
                <h3>Feed.js作成</h3>
                <p>componentsフォルダにFeed.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>index.jsにFeedコンポーネントを読み込ませておきます</p>
                <p className='text-red-400'>components/Feed.js</p>
                <Tutorial4341 />

                <h3>Stories.js作成</h3>
                <p>Feed.jsにStoriesコンポーネントを読み込ませておきます</p>

                <h3>fakerインストール</h3>
                <Tutorial4342 />
                <p></p>

                <h3>Story.js作成</h3>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>truncateはoverflow: hidden; 、text-overflow: ellipsis; 、white-space: nowrap;を合わせたclass</p>
                <Tutorial4343 />
                <h3>tailwind-scrollbarインストール</h3>
                <Tutorial4344 />
                <h3>tailwind-scrollbar-hideインストール</h3>
                <Tutorial4345 />
                <p>tailwind.config.jsに追加します </p>
                <Tutorial4346 />
              </div>
            </div>

          </Layout_tutorial_65>
        ) : id == 5 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className=''>
                <h3>選択したファイルの内容の取得</h3>
                <File />
                <p> </p>
                <p></p>
                <p className='text-red-400'>addItem.js</p>
                <Tutorial6551 />
                <p>componentsフォルダにPost.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Posts.jsにPostコンポーネントを読み込ませる</p>
                <Tutorial6552 />
                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>
                <Tutorial6553 />
              </div>
            </div>

          </Layout_tutorial_65>
        ) : id == 6 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className=''>

                <h3>MiniProfile</h3>
                <p>create.tsxファイルを作ります。</p>
                <p></p>
                <p>grid grid-cols-2にすることでlabelとinputを横並びにさせることができる</p>
                <p className='text-red-400'>create.tsx</p>
                <Tutorial6561 />
                <h3>Suggestions</h3>
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_65>
        ) : id == 7 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className=''>
                <h3>NextAuth</h3>
                <h4>NextAuthのインストール</h4>
                <Tutorial6571 />
                <p>listingフォルダを作り[listing].tsx</p>
                <h4>[...nextauth].js作成</h4>
                <p className='text-red-400'>auth/[...nextauth].js</p>
                <p>Googleで認証を行う</p>
               
                <h3>Firebase</h3>
                <h4>プロジェクト作成</h4>
                <h5>データベース作成</h5>
                <p>構築→Firestore Database→データベースの作成→有効にする</p>
                <h5>データベース作成</h5>
                <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
                <h5>アプリ作成</h5>
                <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
                <h4>firebase.js作成</h4>
              
              </div>
            </div>
          </Layout_tutorial_65>
        ) : id == 8 ? (
          <Layout_tutorial_65>
            <h3>_app.js</h3>
            <h4>Recoilのインストール</h4>
            <Tutorial4381 />
            <p>mailとuserのreducerを作成します。</p>
            <p>RecoilRootで</p>
            <p className='text-red-400'>_app.js</p>
            <Tutorial4382 />
            <p>atomsフォルダを作成</p>
            <p>modalAtom.jsファイルを作成</p>
            <p className='text-red-400'>atoms/modalAtom.js</p>
            <Tutorial4383 />

            <p className='text-red-400'>Header.js</p>
            <h4>Modal</h4>
            <p>Modal.jsファイル作成</p>

            <Tutorial4384 />

            <h4>headlessuiインストール</h4>
            <Tutorial4385 />
            <p></p>
            <p>index.jsにModalを追加します</p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Headless UI</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <h4>useRef</h4>
            <p>画像ファイルを選択している場合</p>
            <Tutorial4386 />
            <h4>useRef</h4>
            <p>画像ファイルを選択していない場合、カメラアイコンをクリックした時addImageToPostが実行される</p>
            <Tutorial4387 />
            <Tutorial4388 />
            <p>FileReaderオブジェクトを使用するとユーザーのコンピュータに保存されているファイルの内容を非同期に読み取ることができる</p>
            <p>FileReader.readAsDataURLで指定されたBlobの内容の読み込みを開始し、result属性にファイルのデータを表すURLが格納される</p>
            <Tutorial4389 />
            <h4>ダイアログのタイトル</h4>
            <Tutorial43810 />
            <h4>ダイアログのcaption</h4>
            <Tutorial43811 />
            <h4>ダイアログアップロードボタン</h4>
            <Tutorial43812 />
            <h4>Firebaseへのデータ格納</h4>
            <p>firestoreから以下をインポート</p>
            <Tutorial43814 />
            <p>storageから以下をインポート</p>
            <Tutorial43815 />
            <h4>アップロード</h4>
            <p>uploadString()メソッドを使用してdata_url</p>
            <Tutorial43816 />
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Headless UI</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </Layout_tutorial_65>
        ) : id == 9 ? (
          <Layout_tutorial_65>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>NextAuth</h3>
                <h4>NextAuthのインストール</h4>
                <Tutorial4371 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>[...nextauth].js作成</h4>
                <p className='text-red-400'>[...nextauth].js</p>
                <Tutorial4374 />
                <h4>プロジェクト作成</h4>
                <h5>データベース作成</h5>
                <p>構築→Firestore Database→データベースの作成→有効にする</p>
                <h5>データベース作成</h5>
                <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
                <h5>アプリ作成</h5>
                <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
                <h4>firebase.js作成</h4>
                <p className='text-red-400'>firebase.js</p>
                <Tutorial4372 />
                <h4>firebaseインストール</h4>
                <Tutorial4373 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>[...nextauth].js</p>
                <Tutorial4379 />
                <p className='text-red-400'>firebase.js</p>
                <Tutorial43710 />
              </div>
            </div>
          </Layout_tutorial_65>
        ) : id == 10 ? (
          <Layout_tutorial_33>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
          </Layout_tutorial_33>
        ) : id == 11 ? (
          <Layout_tutorial_65>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_65>
        ) : id == 12 ? (
          <Layout_tutorial_65>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <h3>仮想環境の作成 </h3>
            <p>myvenvという名前で仮想環境を構築します。 </p>

            <Tutorial43121 />
            <h3>#仮想環境の実行</h3>
            <Tutorial43122 />
            <p>#requirements.txt作成</p>
            <Tutorial43123 />
            <p>requirements.txtファイルを作成してください。</p>
            <p>開発で必要なパッケージを記載します。</p>
            <Tutorial43124 />

            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">Active</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。<br />
                <span class="font-medium">Staff権限</span>Staff権限はAdminのDashboardにログインする権限。<br />
                <span class="font-medium">Superuser権限</span>SuperuserはAdminのDashboardにログインする権限に加えデータベースの内容を変更できるなど全権限を持つ。
              </div>
            </div>
            <h3>model</h3>
            <h4>UserManager作成</h4>
            <Tutorial43125 />
            <h4>UserManager作成</h4>
            <p>unique=trueで重複するemailが登録されないようにしている</p>
            <p>objects=UderManager()でUserクラスの中でUserManagerの中の関数を使用することができる</p>
            <Tutorial43126 />
            <h4>Profile作成</h4>
            <p>unique=trueで重複するemailが登録されないようにしている</p>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <Tutorial43128 />
                <h4>upload_avatar_path</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
                <Tutorial43129 />
              </div>
              <div className='w-1/2'>
                <Tutorial43127 />
              </div>
            </div>
            <h4>Post作成</h4>
            <p>OneToManyをForeignKeyで可能にしている</p>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <Tutorial43128 />
                <h4>upload_avatar_path</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
                <Tutorial43129 />
              </div>
              <div className='w-1/2'>
                <Tutorial43127 />
              </div>
            </div>
            <h4>settings.py</h4>
            <p>viewを特定のユーザーに見せるためにDEFAULT_PERMISSION_CLASSESで指定</p>
            <p>ログインしていなくてもユーザーに見せたいviewについては設定を上書きする</p>
            <p>認証の方法についてはDEFAULT_AUTHENTICATION_CLASSESでJWTを使う</p>
            <p>JWTの有効時間については60分に設定</p>
            <Tutorial431210 />
            <h4>マイグレーション実行</h4>
            <Tutorial431211 />
            <h4>superuser作成</h4>
            <Tutorial431212 />
          </Layout_tutorial_65>
        ) : id == 13 ? (
          <Layout_tutorial_65>
            <h3>serializer</h3>
            <p>新規アカウント作成の際のemailやpasswordに対してvalidationをかけることができる。</p>
            <p>モデルオブジェクトをjson型にしてクライアントに返す</p>
            <p>feieldsで取り扱いたい対象を設定 </p>
            <h3>View</h3>
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">ModelViewSet</span>CRUDを全て使いたい場合。<br />
                <span class="font-medium">汎用APIView</span>CRUDのどれかに特化した機能を使いたい場合に使用。<br />
              </div>
            </div>
            <p className='text-red-400'>app/store.js</p>
            <p>.request.userで現在ログインしているユーザー情報を取得することができる</p>
            <p>queryset object.allで全てのデータを取得することができる</p>
            <Tutorial43131 />

            <Tutorial43132 />
            <h3>Url</h3>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>ModelViewSetの場合</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
                <Tutorial43133 />
              </div>
              <div className='w-1/2'>
                <h4>ModelViewSetの場合</h4>
                <Tutorial43134 />
              </div>
            </div>
            <Tutorial43135 />
          </Layout_tutorial_65>
        ) : id == 14 ? (
          <Layout_tutorial_65>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_65>
        ) : id == 15 ? (
          <Layout_tutorial_65>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <h3>仮想環境の作成 </h3>
            <p>myvenvという名前で仮想環境を構築します。 </p>

            <Tutorial43151 />
            <h3>#仮想環境の実行</h3>
            <Tutorial43152 />
            <p>#requirements.txt作成</p>
            <Tutorial43153 />
            <p>requirements.txtファイルを作成してください。</p>
            <p>開発で必要なパッケージを記載します。</p>
            <Tutorial43154 />

            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">Active</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。<br />
                <span class="font-medium">Staff権限</span>Staff権限はAdminのDashboardにログインする権限。<br />
                <span class="font-medium">Superuser権限</span>SuperuserはAdminのDashboardにログインする権限に加えデータベースの内容を変更できるなど全権限を持つ。
              </div>
            </div>
            <h3>model</h3>
            <h4>UserManager作成</h4>

            <h4>UserManager作成</h4>
            <p>unique=trueで重複するemailが登録されないようにしている</p>
            <p>objects=UderManager()でUserクラスの中でUserManagerの中の関数を使用することができる</p>

            <h4>Profile作成</h4>
            <p>unique=trueで重複するemailが登録されないようにしている</p>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>upload_avatar_path</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>

              </div>
              <div className='w-1/2'>

              </div>
            </div>
            <h4>Post作成</h4>
            <p>OneToManyをForeignKeyで可能にしている</p>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>upload_avatar_path</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>

              </div>
              <div className='w-1/2'>

              </div>
            </div>
            <h4>settings.py</h4>
            <p>viewを特定のユーザーに見せるためにDEFAULT_PERMISSION_CLASSESで指定</p>
            <p>ログインしていなくてもユーザーに見せたいviewについては設定を上書きする</p>
            <p>認証の方法についてはDEFAULT_AUTHENTICATION_CLASSESでJWTを使う</p>
            <p>JWTの有効時間については60分に設定</p>

            <h4>マイグレーション実行</h4>

            <h4>superuser作成</h4>

          </Layout_tutorial_65>
        ) : id == 16 ? (
          <Layout_tutorial_65>
            <h3>serializer</h3>
            <p>新規アカウント作成の際のemailやpasswordに対してvalidationをかけることができる。</p>
            <p>モデルオブジェクトをjson型にしてクライアントに返す</p>
            <p>feieldsで取り扱いたい対象を設定 </p>
            <h3>View</h3>
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">ModelViewSet</span>CRUDを全て使いたい場合。<br />
                <span class="font-medium">汎用APIView</span>CRUDのどれかに特化した機能を使いたい場合に使用。<br />
              </div>
            </div>
            <p className='text-red-400'>app/store.js</p>
            <p>.request.userで現在ログインしているユーザー情報を取得することができる</p>
            <p>queryset object.allで全てのデータを取得することができる</p>
            <Tutorial43131 />

            <Tutorial43132 />
            <h3>Url</h3>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>ModelViewSetの場合</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
                <Tutorial43133 />
              </div>
              <div className='w-1/2'>
                <h4>ModelViewSetの場合</h4>
                <Tutorial43134 />
              </div>
            </div>
            <Tutorial43135 />
          </Layout_tutorial_65>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial6521 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss ebay-clone-youtube
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial6522 = () => {
  const test = `
  npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6531 = () => {
  const test = `
  import { ChainId } from "@thirdweb-dev/react"; 

  export default ChainId.Mumbai;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6532 = () => {
  const test = `
  import "../styles/globals.css"; 
  import type { AppProps } from "next/app"; 
  import { ThirdwebProvider } from "@thirdweb-dev/react"; 
  import network from "../utils/network"; 

  function MyApp({ Component, pageProps }: AppProps) { 
    return ( 
      <ThirdwebProvider desiredChainId={network}> 
        <Component {...pageProps} /> 
      </ThirdwebProvider> 
    ); 
  } 
  export default MyApp;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6533 = () => {
  const test = `
  @tailwind base; 
  @tailwind components; 
  @tailwind utilities; 
  @layer components { 
      .connectWalletBtn { 
          @apply bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer; 
      } 
      .headerLink { 
          @apply hidden md:inline-flex cursor-pointer; 
      }
      .link { 
        @apply hover:text-blue-500 hover:underline cursor-pointer text-gray-600; 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6534 = () => {
  const test = `
npm install @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6535 = () => {
  const test = `
  /** @type {import('next').NextConfig} */ 
  module.exports = { 
    reactStrictMode: true, 
    images: { 
      domains:['links.papareact.com'] 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6536 = () => {
  const test = `
  NEXT_PUBLIC_MARKETPLACE_CONTRACT=0x6A3473576DbF613eB4d844f114709aaB6689FFf1 
  NEXT_PUBLIC_COLLECTION_CONTRACT=0xE20C4453C4Ea365ADBACdAf75421f102e8880A56
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6551 = () => {
  const test = `
<input className=""  type="file" onChange={(e) => { 
    if (e.target.files?.[0]) { 
        setPreview(URL.createObjectURL(e.target.files[0])); 
        setImage(e.target.files[0]) 
    } 
}} />
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6552 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6553 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6561 = () => {
  const test = `
<div className="grid grid-cols-2 gap-5"> 
  <label className="border-r font-light"> 
      Direct Listing / Fixed Price 
  </label> 
  <input type="radio" name="listingType" value="directListing" className="ml-auto h-10 w-10 " /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6571 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};