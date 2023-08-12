import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_67 } from '../../../../components/layout/engineer/tutorial';
import { File } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_67>
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/A5pxVctwI-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Layout_tutorial_67>
        ) : id == 2 ? (
          <Layout_tutorial_67>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial6721 />
            <h4>thirdwebのインストール</h4>
            <Tutorial6722 />


          </Layout_tutorial_67>
        ) : id == 3 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className=''>
                <h4>nftフォルダ作成</h4>
                <p> その直下に[id].tsを作ります。</p>
                <p className='text-red-400'>nft/[id].tsx</p>
                <Tutorial6731 />
                <h4>componentsフォルダ作成</h4>
                <p>直下にHeader.tsを作ります。</p>
                <p>trfceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>src/components/Header.js</p>
                <h4></h4>
                <p>Providerで囲みます</p>
                <p className='text-red-400'>pages/_app.tsx</p>
               
                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>
                
                
              </div>

            </div>
          </Layout_tutorial_67>
        ) : id == 4 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <p className='text-red-400'>_app.tsx</p>
                <Tutorial6741 />
                <h3>サインイン</h3>
                <p>addressがあるときはSign Outの表示になり、buttonをクリックしたときはウォレットとの接続をはずす</p>
                <p>addressがないときはSign Inの表示になり、buttonをクリックしたときはウォレットとの接続をする</p>
                <Tutorial6742 />
               
              </div>
            </div>

          </Layout_tutorial_67>
        ) : id == 5 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className=''>
              <h3>sanity</h3>
                  <h4>sanityインストール</h4>
                  <Tutorial6751 />
                  <Tutorial6752 />
                  <Tutorial6753 />
                  <h5>.gitignore変更</h5>

                  <p>sanityを追加します</p>
                  <Tutorial6754 />
                 
                  <h4>nextインストール</h4>
                  <Tutorial6755 />
            
                  <p>sanity.jsをプロジェクト直下に作成します</p>
                  <p className='text-red-400'>sanity.js</p>
                  <Tutorial6756 />
                  <p>.env.lovalをプロジェクト直下に作成します</p>
                  <p>API_TOKENはAPIタブからTokensのAdd API tokenで作成します</p>
                  <p className='text-red-400'>.env.loval</p>
                  <Tutorial6757 />
      
                  <h5>schema.js変更</h5>
                  <p>blockContent.js、category.jsを削除します。</p>
                  <p>author.jsをcreator.js、post.jsをcollection.jsに変更します。</p>
              </div>
            </div>

          </Layout_tutorial_67>
        ) : id == 6 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className=''>

                <h3>MiniProfile</h3>
                <p>create.tsxファイルを作ります。</p>
                <p></p>
                <p>grid grid-cols-2にすることでlabelとinputを横並びにさせることができる</p>
                <p className='text-red-400'>create.tsx</p>
         
                <h3>Suggestions</h3>
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_67>
        ) : id == 7 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className=''>
                <h3>NextAuth</h3>
                <h4>NextAuthのインストール</h4>
               
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
          </Layout_tutorial_67>
        ) : id == 8 ? (
          <Layout_tutorial_67>
            <h3>_app.js</h3>
            <h4>Recoilのインストール</h4>
         
            <p>mailとuserのreducerを作成します。</p>
            <p>RecoilRootで</p>
            <p className='text-red-400'>_app.js</p>
         
            <p>atomsフォルダを作成</p>
            <p>modalAtom.jsファイルを作成</p>
            <p className='text-red-400'>atoms/modalAtom.js</p>
           

            <p className='text-red-400'>Header.js</p>
            <h4>Modal</h4>
            <p>Modal.jsファイル作成</p>

          

            <h4>headlessuiインストール</h4>
          
            <p></p>
            <p>index.jsにModalを追加します</p>
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
           
            <h4>useRef</h4>
            <p>画像ファイルを選択していない場合、カメラアイコンをクリックした時addImageToPostが実行される</p>
         
       
            <p>FileReaderオブジェクトを使用するとユーザーのコンピュータに保存されているファイルの内容を非同期に読み取ることができる</p>
            <p>FileReader.readAsDataURLで指定されたBlobの内容の読み込みを開始し、result属性にファイルのデータを表すURLが格納される</p>
      
            <h4>ダイアログのタイトル</h4>
     
            <h4>ダイアログのcaption</h4>
     
            <h4>ダイアログアップロードボタン</h4>
         
            <h4>Firebaseへのデータ格納</h4>
            <p>firestoreから以下をインポート</p>
           
            <p>storageから以下をインポート</p>
        
            <h4>アップロード</h4>
            <p>uploadString()メソッドを使用してdata_url</p>
         
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
          </Layout_tutorial_67>
        ) : id == 9 ? (
          <Layout_tutorial_67>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>NextAuth</h3>
                <h4>NextAuthのインストール</h4>
             
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">history.push()</span>React-Routerでhistory.push()の引数に遷移先を指定することでページ遷移を行うことができます。
                  </div>
                </div>
                <h4>[...nextauth].js作成</h4>
                <p className='text-red-400'>[...nextauth].js</p>
                
                <h4>プロジェクト作成</h4>
                <h5>データベース作成</h5>
                <p>構築→Firestore Database→データベースの作成→有効にする</p>
                <h5>データベース作成</h5>
                <p>構築→Authentication→始める→Googleを選択→有効にする→保存→</p>
                <h5>アプリ作成</h5>
                <p>プロジェクト設定→アプリを登録→Googleを選択→有効にする→保存→</p>
                <h4>firebase.js作成</h4>
                <p className='text-red-400'>firebase.js</p>
             
                <h4>firebaseインストール</h4>
            
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>[...nextauth].js</p>
              
                <p className='text-red-400'>firebase.js</p>
            
              </div>
            </div>
          </Layout_tutorial_67>
        ) : id == 10 ? (
          <Layout_tutorial_67>
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
           
            <p className='text-red-400'>features/mailSlice.js</p>
         
            <p className='text-red-400'>features/userSlice.js</p>
        
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <p>公式ドキュメント - Generic views </p>
          </Layout_tutorial_67>
        ) : id == 11 ? (
          <Layout_tutorial_67>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_67>
        ) : id == 12 ? (
          <Layout_tutorial_67>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <h3>仮想環境の作成 </h3>
            <p>myvenvという名前で仮想環境を構築します。 </p>

          
            <h3>#仮想環境の実行</h3>
          
            <p>#requirements.txt作成</p>
         
            <p>requirements.txtファイルを作成してください。</p>
            <p>開発で必要なパッケージを記載します。</p>
         

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
          
          </Layout_tutorial_67>
        ) : id == 13 ? (
          <Layout_tutorial_67>
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
       

         
            <h3>Url</h3>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>ModelViewSetの場合</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
            
              </div>
              <div className='w-1/2'>
                <h4>ModelViewSetの場合</h4>
             
              </div>
            </div>
         
          </Layout_tutorial_67>
        ) : id == 14 ? (
          <Layout_tutorial_67>
            <h3>Redux</h3>
            <p>mailとuserのreducerを作成します。</p>
            <p>できます </p>

          </Layout_tutorial_67>
        ) : id == 15 ? (
          <Layout_tutorial_67>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <h3>仮想環境の作成 </h3>
            <p>myvenvという名前で仮想環境を構築します。 </p>

        
            <h3>#仮想環境の実行</h3>
         
            <p>#requirements.txt作成</p>
          
           <p>requirements.txtファイルを作成してください。</p>
            <p>開発で必要なパッケージを記載します。</p>
          

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

          </Layout_tutorial_67>
        ) : id == 16 ? (
          <Layout_tutorial_67>
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
         
            <h3>Url</h3>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h4>ModelViewSetの場合</h4>
                <p>ファイルの保存先(/avatars)を指定し、指定のファイル名にして保存することができる</p>
                <p>extにはファイルの拡張子が格納される</p>
             
              </div>
              <div className='w-1/2'>
                <h4>ModelViewSetの場合</h4>
              
              </div>
            </div>
          
          </Layout_tutorial_67>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial6721 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss nft-challenge
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6722 = () => {
  const test = `
  npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6731 = () => {
  const test = `
<div className="lg:col-span-6 flex flex-col "> 
  <header className="flex items-center justify-between"> 
      <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80"> 
          The {''} 
          <span className="font-extrabold underline decoration-pink-600/50">PAPAFAM</span> {''} 
           NFT Market Place 
      </h1> 
      <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base">Sign In</button> 
  </header> 
  <hr className="my-2 border" /> 
  <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center"> 
      <img className="w-80 object-cover pb-10 lg:h-40" src="https://links.papareact.com/bdy" alt="" /> 
      <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">The PAPAFAM Ape Coding Club | NFT Drop</h1> 
  </div> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6741 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6742 = () => {
  const test = `
<button 
  onClick={() => (address ? disconnect() : connectWithMetamask())} 
  className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base" 
> 
  {address ? "Sign Out" : "Sign In"} 
</button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6751 = () => {
  const test = `
  sanity login
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6752 = () => {
  const test = `
  sanity init --coupon sonny2022
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6753 = () => {
  const test = `
  ? Project name: nftdrop-challenge 
  Your content will be stored in a dataset that can be public or private, depending on 
  whether you want to query your content with or without authentication. 
  The default dataset configuration has a public dataset named "production". 
  ? Use the default dataset configuration? Yes 
  ✔ Creating dataset 
  ? Project output path: /home/ookuboc5399/src/youtube/madeookubo/nft-challenge/sanity 
  ? Select project template Blog (schema) 
  ✔ Bootstrapping files from template 
  ✔ Resolving latest module versions 
  ✔ Creating default project files 
  ✔ Saved lockfile 
  Success! Now, use these commands to continue:
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6754 = () => {
  const test = `
  /sanity/node_modules
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6755 = () => {
  const test = `
  npm i next-sanity @sanity/image-url
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6756 = () => {
  const test = `
  import {createCurrentUserHook, createClient} from 'next-sanity' 
  import createImageUrlBuilder from '@sanity/image-url' 
  export const config = { 
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', 
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
      apiVersion: '2021-03-25', 
      useCdn: process.env.NODE_ENV === 'production', 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6757 = () => {
  const test = `
  NEXT_PUBLIC_SANITY_DATASET=production 
  NEXT_PUBLIC_SANITY_PROJECT_ID=hpq4trvc 
  SANITY_API_TOKEN=skS1TCRK2S6NilsrovguopxYxawIHdTopA4JOZMbbzopKJThkMgpqBODRkDhvVUY2wFkD5JA9vgibYYk74UW6owu4C5q0TFupLrSJ3OAhBqjYgK5tdK7nPb4uAtoVhuI613nPPF7tNQUL3DuOWXGxAau0znctUrOCR9DYecHCgMowqvxXauw
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6758 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};