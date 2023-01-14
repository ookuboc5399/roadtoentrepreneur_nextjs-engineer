import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_43 } from '../../../../components/layout/engineer/tutorial';
import { Firebase } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_43>
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
          </Layout_tutorial_43>
        ) : id == 2 ? (
          <Layout_tutorial_43>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial4321 />


          </Layout_tutorial_43>
        ) : id == 3 ? (
          <Layout_tutorial_43>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <p>componentsフォルダを作成し、その直下にHeader.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>「pointer-events」は要素のクリック・タップイベントを無効化するときに仕様されます。</p>
                <p>inset-y-0はtop: 0; 、bottom: 0;を設定し、上下方向に要素を伸ばしている。</p>
                <p className='text-red-400'>src/components/Header.js</p>
                <Tutorial4331 />
                <h4>next.config.js変更</h4>
                <p> ホワイトリストにpapareact.comを追加します</p>
                <Tutorial4332 />
                <h4>iconsインストール</h4>

                <p>下記コマンドでインストールします</p>
                <Tutorial4333 />
                <h4>tailwindcss/formsインストール</h4>
                <p>。</p>
                <Tutorial4334 />
                <p className='text-red-400'>tailwind.config.js</p>
                <Tutorial4335 />
                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>
                <Tutorial4336 />
              </div>

            </div>
          </Layout_tutorial_43>
        ) : id == 4 ? (
          <Layout_tutorial_43>
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
                <p>fakerのバージョンを5.5.3にしてインストールしてください。</p>
                <Tutorial4342 />
                

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

          </Layout_tutorial_43>
        ) : id == 5 ? (
          <Layout_tutorial_43>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <p>componentsフォルダにPosts.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
                <p className='text-red-400'></p>
                <Tutorial4351 />
                <p>componentsフォルダにPost.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Posts.jsにPostコンポーネントを読み込ませる</p>
                <Tutorial4351 />
                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>
                <Tutorial4353 />
              </div>
            </div>

          </Layout_tutorial_43>
        ) : id == 6 ? (
          <Layout_tutorial_43>
            <div className='flex'>
              <div className=''>

                <h3>MiniProfile</h3>
                <p>componentsフォルダにMiniProfile.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにMiniProfileコンポーネントを読み込ませる</p>
                <p className='text-red-400'></p>
                <Tutorial4361 />
                <h3>Suggestions</h3>
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_43>
        ) : id == 7 ? (
          <Layout_tutorial_43>
            <div className='flex'>
              <div className=''>
                <h3>NextAuth</h3>
                <h4>NextAuthのインストール</h4>
                <Tutorial4371 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <p>apiフォルダの直下にauthフォルダを作成</p>
                <h4>[...nextauth].js作成</h4>
                <p className='text-red-400'>pages/api/auth/[...nextauth].js</p>
                <p>Googleで認証を行う</p>
                <Tutorial4374 />
                <h3>Firebase</h3>
                <h4>プロジェクト作成</h4>
                <Firebase />
                <h4>firebase.js作成</h4>
                <p className='text-red-400'>firebase.js</p>
                <Tutorial4372 />
                <h4>firebaseインストール</h4>
                <Tutorial4373 />
                <p>AuthenticationのSign-in methodでウェブSDK構成に記載されているウェブクライアントとウェブクライアントシークレットを.env.localファイルに                </p>
                <h4>.env.local</h4>
                <p className='text-red-400'>.env.local</p>
                <Tutorial43713 />
                <h4>サインインページ作成</h4>
                <p>pagesフォルダの直下にauthフォルダを作成し、signin.jsを作成</p>
                <p className='text-red-400'>auth/signin.js</p>
                <Tutorial43714 />

                <p>rfceでreactコンポーネントを作成 </p>
                <h4>Google Cloud</h4>
                <p>APIとサービスから認証情報を作成をクリックし、OAuth2.0クライアントIDでウェブクライアントを選択 </p>
                <p>承認済みのJavaScript生成元にhttp://localhost:3000を追加 </p>
                <Image
                  className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src="/images/tutorial/google cloud.png"
                  width={800}
                  height={450}
                  alt=""
                />
                <p>rfceでreactコンポーネントを作成 </p>
                <h4>_app.js</h4>
                <p>SessionProviderで</p>
                <Tutorial4375 />
                <h4>Header.jsの修正</h4>
                <p>useSessionのインポート</p>
                <Tutorial4376 />
                <p>sessionの状態によって表示する内容を変える</p>
                <p>プロフィール画像をクリックしたときにサインアウトするようにonClick=｛signOut｝   </p>
                <Tutorial4377 />
                <h4>サインイン画面の修正</h4>
                <p>providerが複数ある場合map関数で繰り返し表示させる</p>
                <p>callbackUrlを"/"でトップ画面に飛ぶ</p>
                <p className='text-red-400'>auth/signin.js</p>
                <Tutorial43715 />
                <h4>MiniProfile.jsの修正</h4>
                <p>Sign OutをクリックしたときにサインアウトするようにonClick=｛signOut｝   </p>
                <Tutorial4378 />
                <h4>Feed.jsの修正</h4>
                <p>サインインしていないときは1カラムでFeedを表示する </p>
                <Tutorial4379 />
                <p>サインインしているときにプロフィールを表示するように   </p>
                <Tutorial43710 />
                <h4>Stories.jsの修正</h4>
                <p>ユーザーの先頭にユーザーを表示させる </p>
                <Tutorial43711 />
                <h4>router</h4>
                <p>instagramのロゴ、ホームアイコンをクリックしたときにホーム画面に戻るように</p>
                <p className='text-red-400'>components/Header.js</p>
                <Tutorial43712 />
              </div>
            </div>
          </Layout_tutorial_43>
        ) : id == 8 ? (
          <Layout_tutorial_43>
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
            <Tutorial4384 />
            <h4>Modal</h4>
            <p>Modal.jsファイル作成</p>
            <p className='text-red-400'>Modal.js</p>
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
          </Layout_tutorial_43>
        ) : id == 9 ? (
          <Layout_tutorial_43>
            <div className='flex'>
              <div className=''>
               
              </div>
            </div>
          </Layout_tutorial_43>
        ) : id == 10 ? (
          <Layout_tutorial_43>
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
           
          </Layout_tutorial_43>
        ) : id == 11 ? (
          <Layout_tutorial_43>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_43>
        ) : id == 12 ? (
          <Layout_tutorial_43>
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
          </Layout_tutorial_43>
        ) : id == 13 ? (
          <Layout_tutorial_43>
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
          </Layout_tutorial_43>
        ) : id == 14 ? (
          <Layout_tutorial_43>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_43>
        ) : id == 15 ? (
          <Layout_tutorial_43>
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

          </Layout_tutorial_43>
        ) : id == 16 ? (
          <Layout_tutorial_43>
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
          </Layout_tutorial_43>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial4321 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss insta-2-yt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4322 = () => {
  const test = `
  npm run web
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4331 = () => {
  const test = `
<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none"> 
  <SearchIcon 
    className="h-5 w-5 text-gray-400" 
    aria-hidden="true" 
  /> 
</div> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4332 = () => {
  const test = `
  module.exports = { 
    images: { 
      domains: ["links.papareact.com"], 
    }, 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
const Tutorial4333 = () => {
  const test = `
npm install @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4334 = () => {
  const test = `
  npm install @tailwindcss/forms
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4335 = () => {
  const test = `
  plugins: [ 
    require("@tailwindcss/forms"),
  ],
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4336 = () => {
  const test = `
  @layer components { 
    .navBtn { 
      @apply hidden h-6 md:inline-flex hover:scale-125 cursor-pointer transition-all duration-150 ease-out; 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4341 = () => {
  const test = `
 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4342 = () => {
  const test = `
npm i faker 
npm install @faker-js/faker --save-dev
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4343 = () => {
  const test = `
  <p className='text-xs w-14 truncate texr-center'>{username}</p>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4344 = () => {
  const test = `
  npm install --save-dev tailwind-scrollbar
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4345 = () => {
  const test = `
  npm install tailwind-scrollbar-hide
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4346 = () => {
  const test = `
  module.exports = { 
    mode: "jit", 
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], 
    darkMode: false, // or 'media' or 'class' 
    theme: { 
      extend: {}, 
    }, 
    variants: { 
      extend: {}, 
    }, 
    plugins: [ 
      require("@tailwindcss/forms"), 
      require("tailwind-scrollbar"), 
      require("tailwind-scrollbar-hide"), 
    ], 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4349 = () => {
  const test = `
  import { useSession } from "next-auth/react"; 
  import MiniProfile from "./MiniProfile"; 
  import Posts from "./Posts"; 
  import Stories from "./Stories"; 
  import Suggestions from "./Suggestions"; 
  function Feed() { 
    const { data: session } = useSession(); 
    return ( 
      <main 
        className={'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ＄{ 
          !session && "!grid-cols-1 !max-w-3xl" 
        }'} 
      > 
        <section className="col-span-2"> 
          <Stories /> 
          <Posts /> 
        </section> 
        {session && ( 
          <section className="hidden xl:inline-grid md:col-span-1"> 
            <div className="fixed top-20"> 
              <MiniProfile /> 
              <Suggestions /> 
            </div> 
          </section> 
        )} 
      </main> 
    ); 
  } 
  export default Feed;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43410 = () => {
  const test = `
  import Story from "./Story"; 
  import { useEffect, useState } from "react"; 
  import faker from "faker"; 
  import { useSession } from "next-auth/react"; 
  function Stories() { 
    const [suggestions, setSuggestions] = useState([]); 
    const { data: session } = useSession(); 
    useEffect(() => { 
      const suggestions = [...Array(20)].map((_, i) => ({ 
        ...faker.helpers.contextualCard(), 
        id: i, 
      })); 
      setSuggestions(suggestions); 
    }, []); 
    return ( 
      <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"> 
        {session && ( 
          <Story img={session.user.image} username={session.user.username} /> 
        )} 
        {suggestions.map((profile) => ( 
          <Story 
            key={profile.id} 
            img={profile.avatar} 
            username={profile.username} 
          /> 
        ))} 
      </div> 
    ); 
  } 
  export default Stories;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43411 = () => {
  const test = `
  function Story({ img, username }) { 
    return ( 
      <div className="z-0"> 
        <img 
          className="h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out" 
          src={img} 
          alt="" 
        /> 
        <p className="text-xs w-14 truncate text-center">{username}</p> 
      </div> 
    ); 
  } 
  export default Story;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4351 = () => {
  const test = `
npm add react-router-dom
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4352 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4353 = () => {
  const test = `
  @layer components { 
    .navBtn { 
      @apply hidden h-6 md:inline-flex hover:scale-125 cursor-pointer transition-all duration-150 ease-out; 
    } 
   
    .btn { 
      @apply h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out; 
    } 
  }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4361 = () => {
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

const Tutorial4369 = () => {
  const test = `
  import { signOut, useSession } from "next-auth/react"; 
function MiniProfile() { 
const { data: session } = useSession(); 
return ( 
  <div className="flex items-center justify-between mt-14 ml-10"> 
    <img 
      className="w-16 h-16 rounded-full border p-[2px]" 
      src={session.user.image} 
      alt="" 
    /> 
    <div className="flex-1 mx-4"> 
      <h2 className="font-bold">{session.user.username}</h2> 
      <h3 className="text-sm text-gray-400">Welcome to Instagram</h3> 
    </div> 
    <button className="text-blue-400 text-sm font-semibold" onClick={signOut}> 
      Sign Out 
    </button> 
  </div> 
); 
} 
export default MiniProfile;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43610 = () => {
  const test = `
  import { useEffect, useState } from "react"; 
import faker from "faker"; 
function Suggestions() { 
const [suggestions, setSuggestions] = useState([]); 
useEffect(() => { 
  const suggestions = [...Array(5)].map((_, i) => ({ 
    ...faker.helpers.contextualCard(), 
    id: i, 
  })); 
  setSuggestions(suggestions); 
}, []); 
return ( 
  <div className="mt-4 ml-10"> 
    <div className="flex justify-between text-sm mb-5"> 
      <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3> 
      <button className="text-gray-600 font-semibold">See All</button> 
    </div> 
    {suggestions.map((profile) => ( 
      <div 
        key={profile.id} 
        className="flex items-center justify-between mt-3" 
      > 
        <img 
          className="w-10 h-10 rounded-full border p-[2px]" 
          src={profile.avatar} 
          alt="" 
        /> 
        <div className="flex-1 ml-4"> 
          <h2 className="font-semibold text-sm">{profile.username}</h2> 
          <h3 className="text-xs text-gray-400"> 
            Works at {profile.company.name} 
          </h3> 
        </div> 
        <button className="text-blue-400 text-xs font-bold">Follow</button> 
      </div> 
    ))} 
  </div> 
); 
} 
export default Suggestions;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4371 = () => {
  const test = `
  npm i next-auth
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4372 = () => {
  const test = `
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4373 = () => {
  const test = `
  npm i firebase
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4374 = () => {
  const test = `
  providers: [ 
    GoogleProvider({ 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }), 
  ],
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4375 = () => {
  const test = `
  function MyApp({ Component, pageProps: { session, ...pageProps } }) { 
    return ( 
      <SessionProvider session={session}> 
        <Component {...pageProps} /> 
      </SessionProvider> 
    ); 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4376 = () => {
  const test = `
  import { signIn, signOut, useSession } from "next-auth/react";

  const { data: session, status } = useSession();
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4377 = () => {
  const test = `
  {session ? ( 
    <> 
      <div className="relative navBtn"> 
        <PaperAirplaneIcon className="navBtn" /> 
        <div className="absolute rounded-full bg-red-500 text-white w-5 h-5 text-xs -top-2 -right-1 items-center justify-center flex animate-pulse"> 
          3 
        </div> 
      </div> 
      <PlusCircleIcon className="h-6 cursor-pointer" /> 
      <UserGroupIcon className="navBtn" /> 
      <HeartIcon className="navBtn" /> 
      <img 
        onClick={signOut} 
        className="cursor-pointer rounded-full h-10" 
        src="https://links.papareact.com/3ke" 
        alt="" 
      /> 
    </> 
  ) : ( 
    <button onClick={signIn}>Sign In</button> 
  )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4378 = () => {
  const test = `
  <button className="text-blue-400 text-sm font-semibold" onClick={signOut}> 
    Sign Out 
  </button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4379 = () => {
  const test = `
  <main className={'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ＄{!session && "!grid-cols-1 !max-w-3xl"}'}>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43710 = () => {
  const test = `
  {session && ( 
    <section className="hidden xl:inline-grid md:col-span-1"> 
      <div className="fixed top-20"> 
        <MiniProfile /> 
        <Suggestions /> 
      </div> 
    </section> 
  )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43711 = () => {
  const test = `
  {session && ( 
    <Story img={session.user.image} username={session.user.username} /> 
  )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43712 = () => {
  const test = `
  import { useRouter } from "next/router";
  const router = useRouter();

  <div 
  className="hidden relative w-24 lg:inline-grid cursor-pointer" 
  onClick={() => router.push("/")} 
>

<div 
  className="relative w-10 flex-shrink-0 lg:hidden cursor-pointer" 
  onClick={() => router.push("/")} 
>

  <HomeIcon className="navBtn" onClick={() => router.push("/")} />
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43713 = () => {
  const test = `
  GOOGLE_CLIENT_ID=174140500118-dtltibtk42acltvde0raaj1i64bob0dr.apps.googleusercontent.com 
  GOOGLE_CLIENT_SECRET=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 
  NEXTAUTH_URL=http://localhost:3000
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43714 = () => {
  const test = `
<div className="mt-40"> 
  {Object.values(providers).map((provider) => ( 
    <div key={provider.name}> 
      <button 
        className="p-3 bg-blue-500 rounded-lg text-white" 
        onClick={() => signIn(provider.id, { callbackUrl: "/" })} 
      > 
        Sign in with {provider.name} 
      </button> 
    </div> 
  ))} 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43715 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4381 = () => {
  const test = `
  npm i recoil
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4382 = () => {
  const test = `
  import { RecoilRoot } from "recoil";


  <SessionProvider session={session}> 
    <RecoilRoot> 
      <Component {...pageProps} /> 
    </RecoilRoot> 
  </SessionProvider>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4383 = () => {
  const test = `
  import atom from "recoil"; 

  export const modalState = atom({ 
    key: "modalState", 
    default: false, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4384 = () => {
  const test = `
import { useRecoilState } from "recoil";
  const [open, setOpen] = useRecoilState(modalState);
<PlusCircleIcon className="h-6 cursor-pointer" onClick={() => setOpen(true)}/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4385 = () => {
  const test = `
  npm i @headlessui/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4386 = () => {
  const test = `
  {selectedFile ? ( 
    <img 
      onClick={() => setSelectedFile(null)} 
      className="w-full object-contain cursor-pointer" 
      src={selectedFile} 
      alt="" 
    /> 
  )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4387 = () => {
  const test = `
  <div 
  onClick={() => filePickerRef.current.click()} 
  className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer" 
>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4388 = () => {
  const test = `
  <div> 
  <input 
    ref={filePickerRef} 
    type="file" 
    hidden 
    onChange={addImageToPost} 
  /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4389 = () => {
  const test = `
  const addImageToPost = (e) => { 
    const reader = new FileReader(); 
    if (e.target.files[0]) { 
      reader.readAsDataURL(e.target.files[0]); 
    } 
    reader.onload = (readerEvent) => { 
      setSelectedFile(readerEvent.target.result); 
    }; 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43810 = () => {
  const test = `
  <Dialog.Title 
  as="h3" 
  className="text-lg leading-6 font-medium text-gray-900" 
> 
  Upload a photo 
</Dialog.Title>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43811 = () => {
  const test = `
  <div className="mt-2"> 
  <input 
    className="border-none focus:ring-0 w-full text-center" 
    type="text" 
    ref={captionRef} 
    placeholder="Please enter a caption..." 
  /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43812 = () => {
  const test = `
  <div className="mt-5 sm:mt-6"> 
  <button 
    type="button" 
    disabled={!selectedFile} 
    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300" 
    onClick={uploadPost} 
  > 
    {loading ? "Uploading..." : "Upload Post"} 
  </button> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43813 = () => {
  const test = `
  const [loading, setLoading] = useState(false);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43814 = () => {
  const test = `
  import {
    collection,
    addDoc,
    serverTimestamp,
    updateDoc,
    doc,
  } from "firebase/firestore";
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43815 = () => {
  const test = `
  import { ref, getDownloadURL, uploadString } from "@firebase/storage";
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43816 = () => {
  const test = `
  await uploadString(imageRef, selectedFile, "data_url").then( 
    async (snapshot) => { 
      const downloadURL = await getDownloadURL(imageRef); 
      await updateDoc(doc(db, "posts", docRef.id), { 
        image: downloadURL, 
      }); 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43817 = () => {
  const test = `
  import { ref, getDownloadURL, uploadString } from "@firebase/storage";
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43121 = () => {
  const test = `
  python3 -m venv myvenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43122 = () => {
  const test = `
  source myvenv/bin/activate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43123 = () => {
  const test = `
  django == 3.0.7 
  djangorestframework == 3.10 
  djangorestframework-simplejwt==4.6.0 
  djoser 
  django-cors-headers==3.4.0 
  Pillow 
  PyJWT==2.0.0
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43124 = () => {
  const test = `
  pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43125 = () => {
  const test = `
  class UserManager(BaseUserManager): 
  def create_user(self, email, password=None): 
      if not email: 
          raise ValueError('You must') 
      user = self.model(email=self.normalize_email(email)) 
      user.set_password(password) 
      user.save(using=self._db) 
      return user 
  def create_superuser(self, email, password): 
      user = self.create_user(email, password) 
      user.is_staff = True 
      user.is_superuser = True 
      user.save(using=self._db) 
      return user
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43126 = () => {
  const test = `
  class User(AbstractBaseUser, PermissionsMixin): 
  email = models.EmailField(max_lemgth=50, unique=True) 
  is_active = models.BooleanField(default=True) 
  is_staff = models.BooleanField(default=False) 
  objects = UserManager() 
  USERNAME_FIELD = 'email' 
  def __str__(self): 
      return self.email
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43127 = () => {
  const test = `
  class Profile(models.Model): 
  nickName = models.CharField(max_length=20) 
  userProfile = models.OneToOneField( 
      settings.AUTH_USER_MODEL, related_name='userProfile', 
      on_delete=models.CASCADE 
  ) 
  created_on = models.DateTimeField(auto_now_add=True) 
  img = models.ImageField(blank=True, null=True, upload_to=upload_avatar_path) 
  def __str__(self): 
      return self.nickName
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43128 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43129 = () => {
  const test = `
  def upload_avatar_path(instance, filename): 
  ext = filename.split('.')[-1] 
  return '/'.join(['avatars', str(instance.userProfile.id)+str(instance.nickName)+str(".")+str(ext)])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial431210 = () => {
  const test = `
from datetime import timedelta

INSTALLED_APPS = [
    'rest_framework', 
    'djoser', 
    'api.apps.ApiConfig', 
    'corsheaders', 
]

MIDDLEWARE = [ 
  'corsheaders.middleware.CorsMiddleware',
]

CORS_ORIGIN_WHITELIST = [ 
  "http://localhost:3000" 
]

REST_FRAMEWORK = { 
  'DEFAULT_PERMISSION_CLASSES': [ 
      'rest_framework.permissions.IsAuthenticated', 
  ], 
  'DEFAULT_AUTHENTICATION_CLASSES': [ 
      'rest_framework_simplejwt.authentication.JWTAuthentication', 
  ], 
}

SIMPLE_JWT = { 
  'AUTH_HEADER_TYPES': ('JWT',), 
  'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60), 
}

LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'

AUTH_USER_MODEL = 'api.User'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media') 
MEDIA_URL = '/media/'
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial431211 = () => {
  const test = `
  python3 manage.py makemigrations
  python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial431212 = () => {
  const test = `
  python manage.py createsuperuser
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43131 = () => {
  const test = `
  class ProfileViewSet(viewsets.ModelViewSet): 
  queryset = Profile.objects.all() 
  serializer_class = serializers.ProfileSerializer 
  def perform_create(self, serializer): 
      serializer.save(userProfile=self.request.user)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43132 = () => {
  const test = `
  class ProfileViewSet(viewsets.ModelViewSet): 
  queryset = Profile.objects.all() 
  serializer_class = serializers.ProfileSerializer 
  def perform_create(self, serializer): 
      serializer.save(userProfile=self.request.user)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43133 = () => {
  const test = `
  router = DefaultRouter() 
  router.register('profile',views.ProfileViewSet) 
  router.register('post', views.PostViewSet) 
  router.register('comment', views.CommentViewSet)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43134 = () => {
  const test = `
  urlpatterns = [ 
    path('register/', views.CreateUserView.as_view(), name='register'), 
    path('myprofile/', views.MyProfileListView.as_view(), name='myprofile'), 
    path('',include(router.urls)) 
]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43135 = () => {
  const test = `
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43151 = () => {
  const test = `
  npx create-react-app . --template redux-typescript --use-npm
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  npm install react-icons
  npm install formik --save
  npm i axios@0.27.2
  npm install yup @types/yup
  npm install react-modal
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43152 = () => {
  const test = `
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43153 = () => {
  const test = `
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial43154 = () => {
  const test = `
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};