import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_15 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_15>
            <h3>はじめに </h3>
            <p>Django REST Framework と Next.js でインスタ風の画像投稿サイトを構築していきます。</p>
            <p>サブスク有料会員サイトチュートリアルのアカウント認証システムのプロジェクトを使用していきます </p>
            <p>バックエンドはDjango、フロントエンドは Next.js と TailwindCSS を使用し、状態管理は Redux を使用します。</p>
            <p>SSG(Static Site Generation) + ISR(Incremental Static Regeneration) の仕組みを採用して、画像の投稿、編集、削除の構築方法を学習していきます。</p>

            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <li>
              SSG + ISRの仕組み
              画像の投稿、編集、削除の構築方法
            </li>
            <p>本プロジェクトは下記のアカウント認証編が完了したプロジェクトを使用していきます。</p>
            <p>アカウント認証編を実施していない方は、下記動画を参考にプロジェクトをご用意下さい。</p>
            <p>機能。</p>
            <li>
              画像投稿
              画像編集
              画像削除
            </li>


            <p>#エラーが発生した場合</p>
            <p>詳しいコードの解説は、Django REST Framework、NextJS、Stripe の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>
            <p>Stripe 公式ドキュメント</p>
            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <p>では、始めて行きましょう！！</p>
            <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
                        <div class="inline-block flex-1">
                            <div class="">
                                NEXT
                            </div>
                            <div class="">
                                準備
                            </div>
                        </div>
                        <div className="inline-block align-middle cursor-pointer">
                            {/* <Link href="./engineer_tutorial_14_2">
                                <div className="inline-block align-middle h-full">
                                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                </div>
                            </Link> */}
                        </div>
                    </div>

          </Layout_tutorial_15>
        ) : id == 2 ? (
          <Layout_tutorial_15>
            <h3>準備 </h3>
            <p>開発の準備をします。 </p>
            <p>本プロジェクトは、サブスク有料会員サイト構築チュートリアルのアカウント認証編の続きから実施していきます。 </p>
            <p>すでにアカウント認証が構築されている状態から、画像投稿システムを構築します。 </p>
            <p>アカウント認証編を実施していない方は、下記動画を参考にプロジェクトをご用意下さい。</p>
            <p>完成コード</p>
            <p>完成コードを載せておきます。</p>

            <p>DRF アカウント認証完成コード</p>
            <p>Next.js アカウント認証完成コード</p>
          </Layout_tutorial_15>
        ) : id == 3 ? (
          <Layout_tutorial_15>
            <h3>設定 </h3>
            <p>まずは、設定をしていきます</p>
            <h4>ライブラリインストール </h4>
            <p>ライブラリをインストールします。</p>
            <p>Pillow、django-cors-headersをrequirements.txtに追加します。</p>
            <Tutorial1531 />
            <p>下記コマンドでライブラリをインストールします。</p>

            <Tutorial1532 />

            <h3>設定変更 </h3>
            <p>corsheadersを使用できるように設定していきます</p>
            <p>画像を投稿できるように、MEDIA_URLとMEDIA_ROOTを設定します </p>
            <p className='text-red-400'>mysite/settings.py</p>
            <Tutorial1533 />

          </Layout_tutorial_15>
        ) : id == 4 ? (
          <Layout_tutorial_15>
            <h3>URL </h3>
            <p>プロジェクト URL </p>
            <p>プロジェクト URL の設定に画像の保存場所を追加します</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <div className='flex'>
              <div className='w-1/2'>
                <Tutorial1541 />
              </div>
              <div className='m-6'>
                <p>MEDIA_ROOTに設定したフォルダ配下にあるファイルの一覧をWEB画面に表示させたいような場合</p>
              </div>
            </div>

          </Layout_tutorial_15>
        ) : id == 5 ? (
          <Layout_tutorial_15>
            <h3>プロフィール</h3>
            <p>ユーザーモデルの変更をしていきます。 </p>
            <p>モデル</p>
            <p>プロフィール画像を表示させたいので、ユーザーモデルにプロフィール画像を追加します。</p>
            <p>更新日と作成日も追加しておきましょう</p>
            <p className='text-red-400'>accounts/models.py</p>
            <div className='flex'>
              <div className='w-1/2'>
                <Tutorial1551 />
              </div>
              <div className='m-6'>
                <p>➀標準のBaseUserManagerを使う代わりにUserManagerを使うということをDjangoに知らせている</p>
                <p>➁デフォルトで必須項目。ログイン時に要求されるユーザー名をメールアドレスに変更</p>
                <p>➂emailをユーザー作成時の必須項目としている</p>
                <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                  <span class="font-medium text-xl">AbstractBaseUserはパーミッション関連の機能を持っていない</span>
                </div>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">JavaScript組み込みオブジェクト</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/05/12/javascript%e7%b5%84%e3%81%bf%e8%be%bc%e3%81%bf%e3%82%aa%e3%83%96%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>

            </div>
            <p>デフォルトの画像を格納 </p>
            <p>プロフィール画像にデフォルトの画像を設定したいので、下記の場所にデフォルトの画像を格納します。</p>
            <p>データベースの再構築 </p>
            <p>モデルを変更したので、データベースの再構築を行います。 </p>
            <Tutorial1552 />
            <p>デフォルトを設定するように聞かれます</p>
            <p>Select an optionは1を入力します。</p>
            <p>[default: timezone.now] ＞＞＞でエンターを入力します</p>
            <Tutorial1553 />
            <Tutorial1554 />
            <h4>Admin</h4>
            <p>管理画面を見やすいように変更します </p>
            <p>この設定をしておくことで、一覧や詳細、ユーザーが追加できるようになります</p>
            <div className='flex'>
              <div className='w-1/2'>
                <Tutorial1555 />
              </div>
              <div className='m-6'>
                <p>collapseスタイルのフィールドセットは初期状態ではadmin内で折り畳まれている。wideスタイルのフィールドセットは水平方向の追加的な余白が与えられる</p>
                <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                  <span class="font-medium text-xl">fieldsetsとadd_fieldsetsの違い</span> Change a few things up and try submitting again.
                </div>
              </div>
            </div>

            <p>シリアライザー </p>
            <p>シリアライザーにimageを追加します。</p>
            <Tutorial1556 />
            <p>URL </p>
            <p>ユーザーの内容を変更するために、UserViewSetを追加します。</p>
            <Tutorial1557 />
            <p>ビュー </p>
            <p>画像を表示するために、UserSerializerの引数に、context=｛&quot;request&quot;: request｝を追加します</p>
            <p>これがないと、API から画像を取得することができません。</p>
            <p>UserViewSet クラスを作成して、ModelViewSet を継承します。</p>
            <Tutorial1558 />
          </Layout_tutorial_15>
        ) : id == 6 ? (
          <Layout_tutorial_15>
            <p>画像投稿</p>
            <p>画像投稿を構築していきます。</p>
            <p>モデル</p>
            <p>Post モデルを作成します </p>

            <Tutorial1561 />
            <p>データベースの再構築 </p>

            <p>モデルを追加したので、データベースの再構築を行います。 </p>
            <Tutorial1562 />
            <p>Admin </p>
            <p>管理画面の投稿一覧を見やすくします。 </p>
            <Tutorial1563 />
            <p>シリアライザー</p>
            <p>投稿用のシリアライザーを作成します。 </p>
            <Tutorial1564 />
            <p>URL</p>
            <p>プロジェクト URL に app への URL を追加します </p>
            <Tutorial1565 />
            <p>app の URL を作成します</p>
            <p>投稿一覧用のpost_list、投稿詳細用のpost_detail、投稿の新規、編集、削除用のpostsを追加します。</p>
            <Tutorial1566 />
            <p>ビュー</p>
            <p>投稿用のビューを作成します</p>
            <p>一覧と詳細は、genericsビューを継承し、新規、編集、削除は、ModelViewSetを継承することで、簡単に書くことができます。</p>
            <p>PostViewSetは新規投稿時にperform_create関数でログインユーザーをuserに保存します。</p>
            <Tutorial1567 />
            <p>動作確認</p>
            <p>プロフィールの画像変更と投稿ができるか、Django の管理画面で確認してみましょう。</p>
            <p>投稿はこの時点でいくつか登録しておくと、フロントエンドでのレイアウトがしやすくなります。</p>

            <p>User</p>
            <p>Post</p>
            <p>これで、Djangoの構築が完了しました。</p>
            <p>次は、NextJSの構築をしていきます。</p>
          </Layout_tutorial_15>
        ) : id == 7 ? (
          <Layout_tutorial_15>
            <h3>NextJS</h3>
            <p>NextJS を構築していきます</p>
            <p>ライブラリをインストール</p>
            <p>SWRと@heroicons/reactアイコン集をインストールします</p>
            <p>データ取得のための React Hooks ライブラリのSWRを使用していきます。</p>
            <Tutorial1571 />
            <h4>ナビゲーション変更</h4>
            <p>ナビゲーションを変更します。</p>
            <p>レイアウトはインスタグラム風にデザインします</p>
            <Tutorial1572 />
          </Layout_tutorial_15>
        ) : id == 8 ? (
          <Layout_tutorial_15>
            <h3>取得API設定</h3>
            <p>投稿一覧、投稿一覧 ID、投稿詳細を取得するための関数を作成します</p>
            <p>GET メソッドで取得して、JSON 形式で return します。 </p>
            <p>環境変数</p>
            <p>.envに Django の URL を記載します。</p>
            <Tutorial1581 />
            <p>lib </p>
            <Tutorial1582 />

          </Layout_tutorial_15>
        ) : id == 9 ? (
          <Layout_tutorial_15>
            <p>投稿一覧</p>
            <p>トップページに投稿一覧を表示させます。</p>
            <p>投稿一覧では、SSG、ISRという仕組みを利用します</p>


            <p>SSG(Static Site Generation)とは</p>
            <p>SSG とは、Static Site Generation の略で、静的サイト生成 です。</p>

            <p>ビルド時にデータを取得して、事前に HTML を生成します。 </p>
            <p>事前に HTML を生成することにより、表示スピードが格段にあがります。 </p>
            <p>getStaticProps 関数を使用しま</p>
            <p>ISR(Incremental Static Regeneration) </p>
            <p>ISR とは、Incremental Static Regeneration の略で、定期的な静的再生成です。</p>
            <p>データに変更があった場合に、データを再取得して、HTML を再生成します。</p>
            <p>SSG だけでは、HTML がビルド時のままですが、ISR を使用することで、最新のデータで HTML を再生成することができます。</p>
            <p>getStaticProps 関数にrevalidateオプションを指定します。 </p>

            <p>解説記事</p>
            <p>下記の記事がとても分かりやすいので、参考にしてください </p>
            <p>NextJS コンフィグ</p>
            <p>画像を localhost から読み込めるように、コンフィグを修正します。</p>
            <Tutorial1591 />

            <p>トップ</p>
            <p>トップページを修正します。</p>
            <p>デザインはインスタグラム風とします</p>
            <p>SSG で生成された HTML を初期値として、画面を表示します。</p>
            <p>最初は初期値が表示され、mutate 関数により、最新のデータを取得して表示します</p>
            <p>投稿データに変更があった場合は、ISR により、最新の HTML が再生成されます。</p>
            <p>useSWRライブラリを使用して実現してます。</p>
            <p>公式ドキュメントを参考にしてください。</p>
            <Tutorial1592 />
            <p>動作確認</p>

            <p>トップページを確認してみましょう。</p>
            <Tutorial1593 />
            <p>Django の管理画面で登録した画像が表示されました。</p>
          </Layout_tutorial_15>
        ) : id == 10 ? (
          <Layout_tutorial_15>
            <p>投稿詳細</p>
            <p>投稿詳細画面を構築していきます。</p>
            <p>投稿詳細も SSG と ISR の仕組みを利用していきます。</p>
            <p>getStaticPaths関数で、動的なルーティングを作成します。</p>
            <p>getStaticPathsで生成されていないパスは、fallbackをblockingにすると表示されません。</p>
            <p>フォールバックについても下記記事に詳しく記載されていますので、参考にしてください。</p>
            <Tutorial15101 />
          </Layout_tutorial_15>
        ) : id == 11 ? (
          <Layout_tutorial_15>
            <p>新規投稿</p>
            <p>新規投稿を構築していきます。</p>
            <p>ログイン </p>

            <p>新規投稿するために、ログインをしてください </p>
            <p>すでにログイン画面を作成していますので、ナビゲーションのログインボタンからログインしてください。 </p>
            <p>新規投稿</p>
            <p>新規投稿画面を作成します。</p>

            <p>タイトル、画像、説明を入力して、action のnew_post関数をコールします。 </p>
            <p>状態管理はReduxを使用して構築していきます。 </p>
            <Tutorial15111 />
            <p>action </p>
            <p>アクションタイプの定義をします。 </p>
            <p>これから使用する投稿系の定義をすべて書いておきます。 </p>
            <Tutorial15112 />
            <p>new_post関数を作成します。 </p>
            <p>画像を扱うので、FormDataとしてデータを送信します。 </p>
            <p>今までは JSON 形式で送信していましたが、画像はFormDataオブジェクトにファイルを格納して送信する必要があります。 </p>
            <p>JSON 形式で画像を送信するためには、Base64 形式に変換してから送信する必要があるため、今回はFormDataオブジェクトを使用しています。 </p>
            <Tutorial15113 />
            <p>API </p>
            <p>フロントエンド API では cookie からアクセストークンを取得するだけになります</p>
            <Tutorial15114 />
            <p>reducer</p>
            <p>投稿用に postReducer を追加します。</p>
            <Tutorial15115 />
            <p>reducer でアクションタイプによって、状態を変更します。</p>
            <p>新規投稿が成功したら、new_post_success状態を true に設定します。</p>
            <Tutorial15116 />
            <p>トップページ。</p>
            <p>トップページにアクセスしたときに、状態をクリアするようにします。</p>
            <Tutorial15117 />
            <p>動作確認</p>
            <p>新規投稿を実施してみましょう。</p>
          </Layout_tutorial_15>
        ) : id == 12 ? (
          <Layout_tutorial_15>
            <p>投稿編集</p>
            <p>投稿の編集機能を構築していきます</p>
            <p>投稿詳細</p>
            <p>投稿詳細画面に、編集ボタンを追加します。</p>
            <p>編集ボタンをクリックすると、編集画面に遷移します。</p>
            <p>状態解除の関数も追加します</p>
            <Tutorial15121 />
            <p>編集画面 </p>
            <p>編集画面を作成します。</p>
            <p>初期データは SSG により事前レンダリングしたものを使用します</p>
            <p>編集が成功したら詳細画面に遷移します。</p>
            <Tutorial15122 />
            <p>action </p>
            <p>アクションに edit_post 関数を追加します。</p>
            <p>新規投稿と同様に画像を扱うので、FormDataオブジェクトに格納して送信します。</p>
            <Tutorial15123 />
            <p>API</p>
            <p>フロントエンド API は cookie からアクセストークンを取得します。</p>
            <Tutorial15124 />

            <p>reducer</p>
            <p>編集用のアクションタイプを追加して、編集が成功したらedit_post_success状態を true に設定します</p>
            <Tutorial15125 />
            <p>動作確認</p>
            <p>詳細画面で編集ボタンをクリックして、編集してみましょう</p>
          </Layout_tutorial_15>
        ) : id == 13 ? (
          <Layout_tutorial_15>
            <p>投稿削除</p>
            <p>投稿削除機能を構築していきます。</p>
            <p>投稿詳細</p>
            <p>投稿詳細画面に削除機能の処理を追加します</p>
            <p>削除が成功したらトップページに遷移します</p>
            <Tutorial15131 />
            <p>action</p>
            <p>アクションに delete_post 関数を追加します</p>

            <Tutorial15132 />
            <p>API</p>

            <p>投稿 ID を URL に設定して、メソッドをDELETEで送信することによって、投稿を削除することができます。</p>
            <Tutorial15133 />
            <p>reducer</p>
            <p>削除用のアクションタイプを追加して、削除が成功したら、delete_post_success状態を true に設定します。</p>

            <Tutorial15134 />
            <p>動作確認</p>

            <p>詳細画面で削除ボタンをクリックして、投稿を削除してみましょう。</p>
          </Layout_tutorial_15>
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
        ) : id == 15 ? (
          <Layout_tutorial_15>
      <p>アカウント登録</p>
      <p>アカウント登録後にログインするように調整します。</p>
      <p>action</p>
      <p>アクションのregister関数でアカウント登録が成功したら、login関数を実行するようにします</p>
      <p>これでアカウント登録したらすぐにログインされるようになります。</p>
      <Tutorial15151 />
      <p>完成</p>
      <p>画像投稿システムが完成しましたので、投稿、編集、削除がうまくいくか動作確認をしましょう</p>

      <p>以上で、Django REST Framework と Next.js でインスタ風画像投稿サイトの構築が完了しました。</p>
    </Layout_tutorial_15>
        ) : id == 16 ? (
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

const Tutorial1531 = () => {
  const test = `
  Django==3.2.9
  djangorestframework==3.12.4
  djangorestframework-simplejwt==4.4.0
  PyJWT==1.7.1
  Pillow==8.1.2
  django-cors-headers==3.8.0
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1532 = () => {
  const test = `
  $ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1533 = () => {
  const test = `
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'rest_framework',
      'app',
      'accounts',
      'corsheaders', # 追加
  ]
  
  MIDDLEWARE = [
      'corsheaders.middleware.CorsMiddleware', # 追加
      'django.middleware.security.SecurityMiddleware',
      'django.contrib.sessions.middleware.SessionMiddleware',
      'django.middleware.common.CommonMiddleware',
      'django.middleware.csrf.CsrfViewMiddleware',
      'django.contrib.auth.middleware.AuthenticationMiddleware',
      'django.contrib.messages.middleware.MessageMiddleware',
      'django.middleware.clickjacking.XFrameOptionsMiddleware',
  ]
  
  # 追加
  CORS_ALLOWED_ORIGINS = [
      "http://localhost:3000",
  ]
  
  REST_FRAMEWORK = {
      'DEFAULT_PERMISSION_CLASSES': [
          'rest_framework.permissions.IsAuthenticated',
      ],
      'DEFAULT_AUTHENTICATION_CLASSES': [
          'rest_framework_simplejwt.authentication.JWTAuthentication',
      ],
      'DATETIME_FORMAT': '%Y/%m/%d %H:%M', # 追加
  }
  
  MEDIA_URL = '/media/' # 追加
  MEDIA_ROOT = str(BASE_DIR / 'media') # 追加
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1541 = () => {
  const test = `
  # 追加
  from django.conf.urls.static import static
  from django.conf import settings
  
  urlpatterns = [
      path('api/login/', TokenObtainPairView.as_view()),
      path('api/refresh/', TokenRefreshView.as_view()),
      path('api/verify/', TokenVerifyView.as_view()),
      path('api/auth/', include('accounts.urls')),
      path('admin/', admin.site.urls),
  ]
  
  # 追加
  if settings.DEBUG:
      urlpatterns += static(
          settings.MEDIA_URL,
          document_root=settings.MEDIA_ROOT
      )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1551 = () => {
  const test = `
  class UserAccount(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField("メールアドレス", max_length=255, unique=True)
  name = models.CharField("名前", max_length=255)
  image = models.ImageField(upload_to='images', verbose_name='プロフィール画像', default='profile/default.png') # 追加
  updated_at = models.DateTimeField("更新日", auto_now=True) # 追加
  created_at = models.DateTimeField("作成日", auto_now_add=True) # 追加

  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)

  //➀
  objects = UserManager()

  //➁
  USERNAME_FIELD = 'email'
  //➂
  REQUIRED_FIELDS = ['name']
➂
  def __str__(self):
      return self.name
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1552 = () => {
  const test = `
  $ python3 manage.py makemigrations
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1553 = () => {
  const test = `
  1) Provide a one-off default now (will be set on all existing rows)
  2) Quit, and let me add a default in models.py
 Select an option:  1
 Please enter the default value now, as valid Python
 You can accept the default 'timezone.now' by pressing 'Enter' or you can provide another value.
 The datetime and django.utils.timezone modules are available, so you can do e.g. timezone.now
 Type 'exit' to exit this prompt
 [default: timezone.now] >>>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1554 = () => {
  const test = `
  $ python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1555 = () => {
  const test = `
  from django.contrib import admin
  from django.contrib.auth.admin import UserAdmin
  from django.contrib.auth import get_user_model
  
  User = get_user_model()
  
  
  class UserAdmin(UserAdmin):
      fieldsets = (
          (None, {
              'fields': (
                  'name',
                  'email',
                  'password',
                  'image',
                  'is_active',
                  'is_staff',
                  'is_superuser',
              )}),
      )
  
      add_fieldsets = (
          (None, {
              'classes': ('wide',),
              'fields': (
                  'name',
                  'email',
                  'password1',
                  'password2',
                  'image',
                  'is_active',
                  'is_staff',
                  'is_superuser',
              ),
          }),
      )
  
      list_display = (
          'id',
          'name',
          'email',
          'updated_at',
          'created_at',
      )
  
      list_display_links = ('id', 'name', 'email')
      ordering = ('id',)
  
  
  admin.site.register(User, UserAdmin)
  
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1556 = () => {
  const test = `
  from rest_framework import serializers
  from django.contrib.auth import get_user_model
  
  User = get_user_model()
  
  
  class UserSerializer(serializers.ModelSerializer):
  
      class Meta:
          model = User
          fields = ('id', 'name', 'email', 'image')
  
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1557 = () => {
  const test = `
  from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, UserView, UserViewSet

# 追加
router = DefaultRouter()
router.register('', UserViewSet)

urlpatterns = [
  path('users/', include(router.urls)), # 追加
  path('register/', RegisterView.as_view()),
  path('user/', UserView.as_view()),
]

  
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1558 = () => {
  const test = `
  from rest_framework.viewsets import ModelViewSet

  # ユーザー情報取得
  class UserView(APIView):
      def get(self, request):
          try:
              user = request.user
              user = UserSerializer(user, context={"request": request}) # 変更
  
              return Response(
                  {'user': user.data},
                  status=status.HTTP_200_OK
              )
  
          except:
              return Response(
                  {'error': 'ユーザーの取得に問題が発生しました'},
                  status=status.HTTP_500_INTERNAL_SERVER_ERROR
              )
  
  # 追加
  class UserViewSet(ModelViewSet):
      queryset = User.objects.all()
      serializer_class = UserSerializer
  
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1561 = () => {
  const test = `
  from django.db import models
  from django.conf import settings
  
  
  class Post(models.Model):
      user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
      title = models.CharField("タイトル", max_length=200)
      image = models.ImageField(upload_to='images', verbose_name='画像', null=True, blank=True)
      content = models.TextField("本文")
      updated_at = models.DateTimeField("更新日", auto_now=True)
      created_at = models.DateTimeField("作成日", auto_now_add=True)
  
      def __str__(self):
          return self.title
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1562 = () => {
  const test = `
  $ python3 manage.py makemigrations
  $ python3 manage.py migrate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1563 = () => {
  const test = `
  from django.contrib import admin
from .models import Post
from django.contrib.admin import ModelAdmin


class PostCustom(ModelAdmin):
  list_display = ('id', 'title', 'updated_at', 'created_at')
  list_display_links = ('id', 'title')


admin.site.register(Post, PostCustom)

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1564 = () => {
  const test = `
  from rest_framework import serializers
  from .models import Post
  from accounts.serializers import UserSerializer
  
  
  class PostSerializer(serializers.ModelSerializer):
      user = UserSerializer(read_only=True)
  
      class Meta:
          model = Post
          fields = ('id', 'user', 'title', 'image', 'content', 'created_at')
  

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1565 = () => {
  const test = `
  urlpatterns = [
      path('api/login/', TokenObtainPairView.as_view()),
      path('api/refresh/', TokenRefreshView.as_view()),
      path('api/verify/', TokenVerifyView.as_view()),
      path('api/auth/', include('accounts.urls')),
      path('api/', include('app.urls')), # 追加
      path('admin/', admin.site.urls),
  ]
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1566 = () => {
  const test = `
  from django.urls import path
  from django.conf.urls import include
  from app import views
  from rest_framework import routers
  
  router = routers.DefaultRouter()
  router.register('posts', views.PostViewSet)
  
  urlpatterns = [
      path('post_list/', views.PostListView.as_view()),
      path('post_detail/<str:pk>/', views.PostDetailView.as_view()),
      path('', include(router.urls)),
  ]
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1567 = () => {
  const test = `
  from rest_framework import viewsets, generics
  from rest_framework.permissions import AllowAny
  from .serializers import PostSerializer
  from .models import Post
  
  
  # 一覧
  class PostListView(generics.ListAPIView):
      queryset = Post.objects.all().order_by('-created_at')
      serializer_class = PostSerializer
      permission_classes = (AllowAny,)
  
  
  # 詳細
  class PostDetailView(generics.RetrieveAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
      permission_classes = (AllowAny,)
  
  
  # 新規、編集、削除
  class PostViewSet(viewsets.ModelViewSet):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
  
      def perform_create(self, serializer, **kwargs):
          serializer.save(user=self.request.user)
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1571 = () => {
  const test = `
    $ npm i swr @heroicons/react
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1572 = () => {
  const test = `
    import Link from 'next/link'
    import { useSelector, useDispatch } from 'react-redux'
    import { logout } from '../actions/auth'
    import {
      HomeIcon,
      LogoutIcon,
      LoginIcon,
      PlusCircleIcon,
      UserAddIcon,
      UserIcon,
    } from '@heroicons/react/outline'
    
    const Navigation = () => {
      const dispatch = useDispatch()
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    
      const logoutHandler = async () => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
          await dispatch(logout())
        }
      }
    
      return (
        <div className="sticky top-0 bg-white z-10">
          <div className="border-b py-3">
            <div className="max-w-5xl mx-auto flex justify-between px-4">
              <div className="text-lg font-extrabold">
                <Link href="/">
                  <a>FullStackChannel</a>
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/">
                  <a>
                    <HomeIcon className="h-7 w-7" />
                  </a>
                </Link>
    
                {isAuthenticated ? (
                  <div className="flex space-x-4">
                    <Link href="/post/new">
                      <a>
                        <PlusCircleIcon className="h-7 w-7" />
                      </a>
                    </Link>
                    <Link href="/profile">
                      <a>
                        <UserIcon className="h-7 w-7" />
                      </a>
                    </Link>
                    <div onClick={logoutHandler} className="cursor-pointer">
                      <LogoutIcon className="h-7 w-7" />
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-4">
                    <Link href="/login">
                      <a>
                        <LoginIcon className="h-7 w-7" />
                      </a>
                    </Link>
                    <Link href="/register">
                      <a>
                        <UserAddIcon className="h-7 w-7" />
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Navigation
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1581 = () => {
  const test = `
    NEXT_PUBLIC_API_URL=http://localhost:8000
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1582 = () => {
  const test = `
    // 投稿一覧取得
    export async function getPostList() {
      const apiRes = await fetch($｛ process.env.NEXT_PUBLIC_API_URL }/api/post_list / , {
        method: 'GET',
      })
      const posts = await apiRes.json()
      return posts
    }
    
    // 投稿一覧ID取得
    export async function getPostIds() {
      const apiRes = await fetch($｛ process.env.NEXT_PUBLIC_API_URL } /api/post_list / , {
        method: 'GET',
      })
      const posts = await apiRes.json()
    
      return posts.map((post) => {
        return {
          params: {
            id: String(post.id),
          },
        }
      })
    }
    
    // 投稿詳細取得
    export async function getPostDetail(id) {
      const apiRes = await fetch($｛ process.env.NEXT_PUBLIC_API_URL ｝ /api/post_detail / $｛ id } /, {
  method: 'GET',
      })
const post = await apiRes.json()
return post
    }
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1591 = () => {
  const test = `
  module.exports = {
      reactStrictMode: true,
      images: {
        domains: ['localhost'],
      },
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1592 = () => {
  const test = `
  import { useEffect } from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { useRouter } from 'next/router'
  import { getPostList } from '../lib/posts'
  import useSWR from 'swr'
  import Head from 'next/head'
  import Link from 'next/link'
  import Image from 'next/image'
  
  const fetcher = (url) => fetch(url).then((res) => res.json())
  
  const Index = ({ staticPosts }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector((state) => state.auth.user)
  
    const { data: posts, mutate } = useSWR(
      '＄{ process.env.NEXT_PUBLIC_API_URL }/api/post_list / ',
      fetcher,
      {
        fallbackData: staticPosts,
      }
    )
  
    useEffect(() => {
      mutate()
    }, [])
  
    if (router.isFallback || !posts) {
      return <div className="text-center">Loading...</div>
    }
  
    return (
      <>
        <Head>
          <title>FullStackChannel</title>
        </Head>
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              {posts &&
                posts.map((data) => (
                  <div className="border mb-6 bg-white" key={data.id}>
                    <div className="flex items-center space-x-4 p-4">
                      <Image
                        src={data.user.image}
                        className="rounded-full"
                        alt={data.user.name}
                        width={40}
                        height={40}
                        objectFit="cover"
                      />
                      <div>
                        <div>{data.user.name}</div>
                        <div>{data.title}</div>
                      </div>
                    </div>
                    <div>
                      <Link href={'/post/＄{data.id}'}>
                        <a>
                          <Image
                            src={data.image}
                            className=""
                            alt={data.title}
                            width={1000}
                            height={1000}
                            objectFit="cover"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="m-4">
                      <div>{data.user.name}</div>
                      <div className="truncate">{data.content}</div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-span-1">
              {user && (
                <div className="flex items-center space-x-4">
                  <Image
                    src={user.image}
                    className="rounded-full"
                    alt={user.name}
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                  <div>{user.name}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export async function getStaticProps() {
    const staticPosts = await getPostList()
  
    return {
      props: { staticPosts },
      revalidate: 1,
    }
  }
  
  export default Index
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1593 = () => {
  const test = `
  $ npm run dev
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15101 = () => {
  const test = `
    import { useEffect } from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { useRouter } from 'next/router'
    import { getPostIds, getPostDetail } from '../../../lib/posts'
    import useSWR from 'swr'
    import Head from 'next/head'
    import Link from 'next/link'
    import Image from 'next/image'
    
    const fetcher = (url) => fetch(url).then((res) => res.json())
    
    const DetailPost = ({ staticPost, id }) => {
      const dispatch = useDispatch()
      const router = useRouter()
      const user = useSelector((state) => state.auth.user)
    
      const { data: post, mutate } = useSWR(
        '＄{ process.env.NEXT_PUBLIC_API_URL }/api/post_detail / ＄{ id } /',
  fetcher,
  {
    fallbackData: staticPost,
  }
      )

useEffect(() => {
  mutate()
}, [])

if (router.isFallback || !post) {
  return <div className="text-center">Loading...</div>
}

return (
  <>
    <Head>
      <title>FullStackChannel | 詳細</title>
    </Head>
    {post && (
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-3 bg-white border">
          <div className="col-span-2">
            <Image
              src={post.image}
              className=""
              alt={post.title}
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="col-span-1">
            <div className="border-b p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src={post.user.image}
                  className="rounded-full"
                  alt={post.title}
                  width={40}
                  height={40}
                  objectFit="cover"
                />
                <div>
                  <div>{post.user.name}</div>
                  <div>{post.title}</div>
                </div>
              </div>
            </div>

            <div className="whitespace-pre p-4">
              <div className="leading-relaxed break-words whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
)
    }

export default DetailPost

export async function getStaticPaths() {
  const paths = await getPostIds()
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const staticPost = await getPostDetail(params.id)

  return {
    props: {
      id: staticPost.id,
      staticPost,
    },
    revalidate: 1,
  }
}

`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial14102 = () => {
  const test = `
    $ mkdir nextjs - membership - tutorial
$ cd nextjs - membership - tutorial
$ npx create - next - app. --use - npm

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial14103 = () => {
  const test = `
    npm run dev

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial14104 = () => {
  const test = `
    npm install next @11
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15111 = () => {
  const test = `
  import { useState } from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { useRouter } from 'next/router'
  import { new_post } from '../../actions/post'
  import Loader from 'react-loader-spinner'
  import Head from 'next/head'
  
  const NewPost = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const loading = useSelector((state) => state.post.loading)
    const new_post_success = useSelector((state) => state.post.new_post_success)
    const [image, setImage] = useState(null)
    const [formData, setFormData] = useState({
      title: '',
      content: '',
    })
  
    const { title, content } = formData
  
    // 入力
    const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
    // 新規投稿
    const onSubmit = async (e) => {
      e.preventDefault()
  
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        await dispatch(new_post(title, image, content))
      }
    }
  
    // 新規投稿成功
    if (new_post_success) {
      router.push('/')
    }
  
    return (
      <>
        <Head>
          <title>FullStackChannel | 新規投稿</title>
        </Head>
  
        <div className="text-center text-2xl mb-5">新規投稿</div>
        <form className="md:w-1/3 mx-auto" onSubmit={onSubmit}>
          <div className="mb-4">
            <div className="mb-1" htmlFor="title">
              タイトル
            </div>
            <input
              className="input-form"
              type="text"
              name="title"
              placeholder="タイトル"
              onChange={onChange}
              value={title}
              required
            />
          </div>
          <div className="mb-4">
            <div className="mb-1">画像</div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="mb-4">
            <div className="mb-1" htmlFor="content">
              説明
            </div>
            <textarea
              className="input-form h-72"
              type="text"
              name="content"
              placeholder="説明"
              onChange={onChange}
              value={content}
              required
            />
          </div>
  
          <div className="flex justify-center">
            {loading ? (
              <Loader type="Oval" color="#F59E00" width={50} height={50} />
            ) : (
              <button className="button-yellow" type="submit">
                送信
              </button>
            )}
          </div>
        </form>
      </>
    )
  }
  
  export default NewPost
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial15112 = () => {
  const test = `
  //////////
  // Post //
  //////////
  
  // 新規投稿
  export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS'
  export const NEW_POST_FAIL = 'NEW_POST_FAIL'
  
  // 投稿編集
  export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
  export const EDIT_POST_FAIL = 'EDIT_POST_FAIL'
  
  // 投稿削除
  export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
  export const DELETE_POST_FAIL = 'DELETE_POST_FAIL'
  
  // 読み込み中
  export const SET_POST_LOADING = 'SET_POST_LOADING'
  export const REMOVE_POST_LOADING = 'REMOVE_POST_LOADING'
  
  // 状態解除
  export const RESET_POST_STATUS = 'RESET_POST_STATUS'
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial15113 = () => {
  const test = `
  import {
      // 新規投稿
      NEW_POST_SUCCESS,
      NEW_POST_FAIL,
    
      // 読み込み中
      SET_POST_LOADING,
      REMOVE_POST_LOADING,
    
      // 状態解除
      RESET_POST_STATUS,
    } from './types'
    
    // 新規投稿
    export const new_post = (title, image, content) => async (dispatch) => {
      dispatch({
        type: SET_POST_LOADING,
      })
    
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      formData.append('image', image)
    
      try {
        const res = await fetch('/api/post/new_post', {
          method: 'GET',
        })
        const data = await res.json()
    
        const res2 = await fetch('＄{ process.env.NEXT_PUBLIC_API_URL }/api/posts / ', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ＄{ data.access } ',
          },
          body: formData,
        })
    
        if (res2.status === 201) {
          dispatch({
            type: NEW_POST_SUCCESS,
          })
        } else {
          dispatch({
            type: NEW_POST_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: NEW_POST_FAIL,
        })
      }
    
      dispatch({
        type: REMOVE_POST_LOADING,
      })
    }
    
    // 状態解除
    export const reset_post_status = () => (dispatch) => {
      dispatch({
        type: RESET_POST_STATUS,
      })
    }
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial15114 = () => {
  const test = `
  import cookie from 'cookie'

  export default async (req, res) => {
    if (req.method === 'GET') {
      const cookies = cookie.parse(req.headers.cookie ?? '')
      const access = cookies.access ?? false
  
      if (access === false) {
        return res.status(401).json({
          error: 'アクセストークンがありません',
        })
      }
  
      return res.status(200).json({
        access: access,
      })
    } else {
      res.setHeader('Allow', ['GET'])
      return res.status(405).json({ error: 'Method ＄{ req.method } not allowed' })
    }
  }
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15115 = () => {
  const test = `
  import { combineReducers } from 'redux'
  import authReducer from './auth'
  import postReducer from './post'
  
  export default combineReducers({
    auth: authReducer,
    post: postReducer,
  })
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15116 = () => {
  const test = `
  import {
      // 新規投稿
      NEW_POST_SUCCESS,
      NEW_POST_FAIL,
    
      // 読み込み中
      SET_POST_LOADING,
      REMOVE_POST_LOADING,
    
      // 状態解除
      RESET_POST_STATUS,
    } from '../actions/types'
    
    const initialState = {
      loading: false,
      new_post_success: false,
    }
    
    const postReducer = (state = initialState, action) => {
      const { type, payload } = action
    
      switch (type) {
        // 新規投稿
        case NEW_POST_SUCCESS:
          return {
            ...state,
            new_post_success: true,
          }
        case NEW_POST_FAIL:
          return {
            ...state,
          }
    
        // 読み込み中
        case SET_POST_LOADING:
          return {
            ...state,
            loading: true,
          }
        case REMOVE_POST_LOADING:
          return {
            ...state,
            loading: false,
          }
    
        // 状態解除
        case RESET_POST_STATUS:
          return {
            ...state,
            new_post_success: false,
          }
        default:
          return state
      }
    }
    
    export default postReducer
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15117 = () => {
  const test = `
  import { reset_post_status } from '../actions/post'

  useEffect(() => {
    mutate()
  }, [])
  
  // 状態解除
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_post_status())
    }
  }, [dispatch])
  
  if (router.isFallback || !posts) {
    return <div className="text-center">Loading...</div>
  }
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15121 = () => {
  const test = `
    import { useEffect } from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { useRouter } from 'next/router'
    import { reset_post_status } from '../../../actions/post' // 追加
    import { getPostIds, getPostDetail } from '../../../lib/posts'
    import useSWR from 'swr'
    import Head from 'next/head'
    import Link from 'next/link'
    import Image from 'next/image'
    
    const fetcher = (url) => fetch(url).then((res) => res.json())
    
    const DetailPost = ({ staticPost, id }) => {
      const dispatch = useDispatch()
      const router = useRouter()
      const user = useSelector((state) => state.auth.user)
    
      const { data: post, mutate } = useSWR(
        '＄{ process.env.NEXT_PUBLIC_API_URL }/api/post_detail / ＄{ id } /',
  fetcher,
  {
    fallbackData: staticPost,
  }
      )

useEffect(() => {
  mutate()
}, [])

// 追加
// 状態解除
useEffect(() => {
  if (dispatch && dispatch !== null && dispatch !== undefined) {
    dispatch(reset_post_status())
  }
}, [dispatch])

if (router.isFallback || !post) {
  return <div className="text-center">Loading...</div>
}

return (
  <>
    <Head>
      <title>FullStackChannel | 詳細</title>
    </Head>
    {post && (
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-3 bg-white border">
          <div className="col-span-2">
            <Image
              src={post.image}
              className=""
              alt={post.title}
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="col-span-1">
            <div className="border-b p-4 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Image
                  src={post.user.image}
                  className="rounded-full"
                  alt={post.title}
                  width={40}
                  height={40}
                  objectFit="cover"
                />
                <div>
                  <div>{post.user.name}</div>
                  <div>{post.title}</div>
                </div>
              </div>
              {user && user.id === post.user.id && (
                <div className="text-sm flex space-x-4">
                  <div>
                    <Link href={'/post/＄{post.id}/edit'}>
                      <a>編集</a>
                    </Link>
                  </div>
                  <div className="cursor-pointer">削除</div>
                </div>
              )}
            </div>

            <div className="whitespace-pre p-4">
              <div className="leading-relaxed break-words whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
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

const Tutorial15122= () => {
    const test = `
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { edit_post } from '../../../actions/post'
import { getPostIds, getPostDetail } from '../../../lib/posts'
import useSWR from 'swr'
import Loader from 'react-loader-spinner'
import Head from 'next/head'

const fetcher = (url) => fetch(url).then((res) => res.json())

const EditPost = ({ staticPost, id }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const loading = useSelector((state) => state.post.loading)
  const edit_post_success = useSelector((state) => state.post.edit_post_success)
  const [image, setImage] = useState(null)

  const { data: post, mutate } = useSWR(
    '＄{process.env.NEXT_PUBLIC_API_URL}/api/post_detail/＄{id}/',
    fetcher,
    {
      fallbackData: staticPost,
    }
  )

  useEffect(() => {
    mutate()
  }, [])

  const [formData, setFormData] = useState({
    title: post ? post.title : '',
    content: post ? post.content : '',
  })

  if (router.isFallback || !post) {
    return <div className="text-center">Loading...</div>
  }

  const { title, content } = formData

  // 入力
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // 編集
  const onSubmit = async (e) => {
    e.preventDefault()

    if (dispatch && dispatch !== null && dispatch !== undefined && post) {
      await dispatch(edit_post(post.id, title, image, content))
    }
  }

  // 編集成功
  if (edit_post_success) {
    router.push('/post/＄{post.id}')
  }

  return (
    <>
      <Head>
        <title>FullStackChannel | 投稿編集</title>
      </Head>

      <div className="text-center text-2xl mb-5">投稿編集</div>
      <form className="md:w-1/3 mx-auto" onSubmit={onSubmit}>
        <div className="mb-4">
          <div className="mb-1" htmlFor="title">
            タイトル
          </div>
          <input
            className="input-form"
            type="text"
            name="title"
            placeholder="タイトル"
            onChange={onChange}
            value={title}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-1">画像</div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="mb-4">
          <div className="mb-1" htmlFor="content">
            説明
          </div>
          <textarea
            className="input-form h-72"
            type="text"
            name="content"
            placeholder="説明"
            onChange={onChange}
            value={content}
            required
          />
        </div>

        <div className="flex justify-center">
          {loading ? (
            <Loader type="Oval" color="#F59E00" width={50} height={50} />
          ) : (
            <button className="button-yellow" type="submit">
              送信
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default EditPost

export async function getStaticPaths() {
  const paths = await getPostIds()
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const staticPost = await getPostDetail(params.id)

  return {
    props: {
      id: staticPost.id,
      staticPost,
    },
    revalidate: 1,
  }
}
`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial15123= () => {
    const test = `
import {
  // 新規投稿
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,

  // 投稿編集
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,

  // 読み込み中
  SET_POST_LOADING,
  REMOVE_POST_LOADING,

  // 状態解除
  RESET_POST_STATUS,
} from './types'

// 投稿編集
export const edit_post = (id, title, image, content) => async (dispatch) => {
  dispatch({
    type: SET_POST_LOADING,
  })

  const formData = new FormData()
  formData.append('title', title)
  formData.append('content', content)
  if (image) {
    formData.append('image', image)
  }

  try {
    const res = await fetch('/api/post/edit_post', {
      method: 'GET',
    })
    const data = await res.json()

    const res2 = await fetch('＄{process.env.NEXT_PUBLIC_API_URL}/api/posts/＄{id}/', {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ＄{data.access}',
      },
      body: formData,
    })

    if (res2.status === 200) {
      dispatch({
        type: EDIT_POST_SUCCESS,
      })
    } else {
      dispatch({
        type: EDIT_POST_FAIL,
      })
    }
  } catch (err) {
    dispatch({
      type: EDIT_POST_FAIL,
    })
  }

  dispatch({
    type: REMOVE_POST_LOADING,
  })
}
`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial15124= () => {
    const test = `
import cookie from 'cookie'

export default async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie ?? '')
    const access = cookies.access ?? false

    if (access === false) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    return res.status(200).json({
      access: access,
    })
  } else {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: 'Method ＄{req.method} not allowed' })
  }
}
`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial15125= () => {
    const test = `
import {
  // 新規投稿
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,

  // 投稿編集
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,

  // 読み込み中
  SET_POST_LOADING,
  REMOVE_POST_LOADING,

  // 状態解除
  RESET_POST_STATUS,
} from '../actions/types'


const initialState = {
  loading: false,
  new_post_success: false,
  edit_post_success: false,
}

const postReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
          ...

          // 投稿編集
          case EDIT_POST_SUCCESS:
return {
  ...state,
  edit_post_success: true,
}
          case EDIT_POST_FAIL:
return {
  ...state,
}

          // 状態解除
          case RESET_POST_STATUS:
return {
  ...state,
  new_post_success: false,
  edit_post_success: false,
}
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial15131= () => {
  const test = `
  import { useEffect } from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { useRouter } from 'next/router'
  import { delete_post, reset_post_status } from '../../../actions/post' // 追加
  import { getPostIds, getPostDetail } from '../../../lib/posts'
  import useSWR from 'swr'
  import Head from 'next/head'
  import Link from 'next/link'
  import Image from 'next/image'
  
  const fetcher = (url) => fetch(url).then((res) => res.json())
  
  const DetailPost = ({ staticPost, id }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector((state) => state.auth.user)
    const delete_post_success = useSelector((state) => state.post.delete_post_success) // 追加
  
    const { data: post, mutate } = useSWR(
      '＄{process.env.NEXT_PUBLIC_API_URL}/api/post_detail/＄{id}/',
      fetcher,
      {
        fallbackData: staticPost,
      }
    )
  
    useEffect(() => {
      mutate()
    }, [])
  
    // 状態解除
    useEffect(() => {
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        dispatch(reset_post_status())
      }
    }, [dispatch])
  
    if (router.isFallback || !post) {
      return <div className="text-center">Loading...</div>
    }
  
    // ↓追加
    // 削除
    const deletePost = async () => {
      if (dispatch && dispatch !== null && dispatch !== undefined && post) {
        await dispatch(delete_post(post.id))
      }
    }
  
    // 削除成功
    if (delete_post_success) {
      router.push('/')
    }
    // ↑追加
  
    return (
      <>
        <Head>
          <title>FullStackChannel | 詳細</title>
        </Head>
        {post && (
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="grid grid-cols-3 bg-white border">
              <div className="col-span-2">
                <Image
                  src={post.image}
                  className=""
                  alt={post.title}
                  width={1000}
                  height={1000}
                  objectFit="cover"
                />
              </div>
              <div className="col-span-1">
                <div className="border-b p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={post.user.image}
                      className="rounded-full"
                      alt={post.title}
                      width={40}
                      height={40}
                      objectFit="cover"
                    />
                    <div>
                      <div>{post.user.name}</div>
                      <div>{post.title}</div>
                    </div>
                  </div>
                  {user && user.id === post.user.id && (
                    <div className="text-sm flex space-x-4">
                      <div>
                        <Link href={'/post/＄{post.id}/edit'}>
                          <a>編集</a>
                        </Link>
                      </div>
                      <div className="cursor-pointer" onClick={deletePost}>
                        削除
                      </div>
                    </div>
                  )}
                </div>
  
                <div className="whitespace-pre p-4">
                  <div className="leading-relaxed break-words whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
  
  export default DetailPost
  
  export async function getStaticPaths() {
    const paths = await getPostIds()
    return {
      paths,
      fallback: true,
    }
  }
  
  export async function getStaticProps({ params }) {
    const staticPost = await getPostDetail(params.id)
  
    return {
      props: {
        id: staticPost.id,
        staticPost,
      },
      revalidate: 1,
    }
  }
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial15132= () => {
  const test = `
  import {
    // 新規投稿
    NEW_POST_SUCCESS,
    NEW_POST_FAIL,
  
    // 投稿編集
    EDIT_POST_SUCCESS,
    EDIT_POST_FAIL,
  
    // 投稿削除
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,
  
    // 読み込み中
    SET_POST_LOADING,
    REMOVE_POST_LOADING,
  
    // 状態解除
    RESET_POST_STATUS,
  } from './types'
  
  // 投稿削除
  export const delete_post = (id) => async (dispatch) => {
    dispatch({
      type: SET_POST_LOADING,
    })
  
    const body = JSON.stringify({
      id,
    })
  
    try {
      const res = await fetch('/api/post/delete_post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      })
  
      if (res.status === 200) {
        dispatch({
          type: DELETE_POST_SUCCESS,
        })
      } else {
        dispatch({
          type: DELETE_POST_FAIL,
        })
      }
    } catch (err) {
      dispatch({
        type: DELETE_POST_FAIL,
      })
    }
  
    dispatch({
      type: REMOVE_POST_LOADING,
    })
  }
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial15133= () => {
  const test = `
  import cookie from 'cookie'

  export default async (req, res) => {
    if (req.method === 'POST') {
      const cookies = cookie.parse(req.headers.cookie ?? '')
      const access = cookies.access ?? false
  
      if (access === false) {
        return res.status(401).json({
          error: 'アクセストークンがありません',
        })
      }
  
      const { id } = req.body
  
      try {
        const apiRes = await fetch('＄{process.env.NEXT_PUBLIC_API_URL}/api/posts/＄{id}/', {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ＄{access}',
          },
        })
  
        if (apiRes.status === 204) {
          return res.status(200).json({
            success: '投稿削除に成功しました。',
          })
        } else {
          return res.status(apiRes.status).json({
            error: '投稿削除に失敗しました',
          })
        }
      } catch (err) {
        return res.status(500).json({
          error: '投稿削除に失敗しました',
        })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      return res.status(405).json({ error: 'Method ＄{req.method} not allowed' })
    }
  }
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial15134= () => {
const test = `
import {
  // 新規投稿
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,

  // 投稿編集
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,

  // 投稿削除
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,

  // 読み込み中
  SET_POST_LOADING,
  REMOVE_POST_LOADING,

  // 状態解除
  RESET_POST_STATUS,
} from '../actions/types'

const initialState = {
  loading: false,
  new_post_success: false,
  edit_post_success: false,
  delete_post_success: false,
}

const postReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    // 新規投稿
    case NEW_POST_SUCCESS:
      return {
        ...state,
        new_post_success: true,
      }
    case NEW_POST_FAIL:
      return {
        ...state,
      }

    // 投稿編集
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        edit_post_success: true,
      }
    case EDIT_POST_FAIL:
      return {
        ...state,
      }

    // 投稿削除
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        delete_post_success: true,
      }
    case DELETE_POST_FAIL:
      return {
        ...state,
      }

    // 読み込み中
    case SET_POST_LOADING:
      return {
        ...state,
        loading: true,
      }
    case REMOVE_POST_LOADING:
      return {
        ...state,
        loading: false,
      }

    // 状態解除
    case RESET_POST_STATUS:
      return {
        ...state,
        new_post_success: false,
        edit_post_success: false,
        delete_post_success: false,
      }
    default:
      return state
  }
}

export default postReducer

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial15141 = () => {
  const test = `
    import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { edit_profile } from '../actions/auth'
import Loader from 'react-loader-spinner'
import Head from 'next/head'

const Profile = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const edit_profile_success = useSelector((state) => state.auth.edit_profile_success)
  const user = useSelector((state) => state.auth.user)
  const loading = useSelector((state) => state.auth.loading)
  const [image, setImage] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
  })

  const { name } = formData

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
      })
    }
  }, [user])

  // 入力
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // プロフィール編集
  const onSubmit = async (e) => {
    e.preventDefault()

    if (dispatch && dispatch !== null && dispatch !== undefined && user) {
      await dispatch(edit_profile(user.id, name, image))
    }
  }

  // プロフィール編集成功
  if (edit_profile_success) {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>FullStackChannel | プロフィール</title>
      </Head>

      <div className="text-center text-2xl mb-5">プロフィール</div>
      <form className="w-1/3 mx-auto" onSubmit={onSubmit}>
        <div className="mb-4">
          <div className="mb-1" htmlFor="name">
            名前
          </div>
          <input
            className="input-form"
            type="text"
            name="name"
            placeholder="フルスタックチャンネル"
            onChange={onChange}
            value={name}
            required
          />
        </div>
        <div className="mb-4">
          <div className="mb-1">プロフィール画像</div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        <div className="flex justify-center">
          {loading ? (
            <Loader type="Oval" color="#F59E00" width={50} height={50} />
          ) : (
            <button className="button-yellow" type="submit">
              送信
            </button>
          )}
        </div>
      </form>
    </>
  )
}

export default Profile
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial15142 = () => {
  const test = `
    // プロフィール編集
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS'
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL'

// 状態解除
export const RESET_AUTH_STATUS = 'RESET_AUTH_STATUS'
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial15143 = () => {
  const test = `
    import {
        ...
      
        // プロフィール編集
        EDIT_PROFILE_SUCCESS,
        EDIT_PROFILE_FAIL,
      
        ...
      
        // 状態解除
        RESET_AUTH_STATUS,
      } from './types'
      
      // プロフィール編集
      export const edit_profile = (id, name, image) => async (dispatch) => {
        dispatch({
          type: SET_AUTH_LOADING,
        })
      
        const formData = new FormData()
        formData.append('name', name)
        if (image) {
          formData.append('image', image)
        }
      
        try {
          const res = await fetch('/api/post/edit_post', {
            method: 'GET',
          })
          const data = await res.json()
      
          const res2 = await fetch('＄{ process.env.NEXT_PUBLIC_API_URL }/api/auth / users / ＄{ id } /', {
  method: 'PATCH',
    headers: {
    Authorization: 'Bearer ＄{data.access}',
            },
  body: formData,
          })

if (res2.status === 200) {
  dispatch({
    type: EDIT_PROFILE_SUCCESS,
  })
  await dispatch(user())
} else {
  dispatch({
    type: EDIT_PROFILE_FAIL,
  })
}
        } catch (err) {
  dispatch({
    type: EDIT_PROFILE_FAIL,
  })
}

dispatch({
  type: REMOVE_AUTH_LOADING,
})
      }

// 状態解除
export const reset_auth_status = () => (dispatch) => {
  dispatch({
    type: RESET_AUTH_STATUS,
  })
}


`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial15144= () => {
    const test = `
import cookie from 'cookie'

export default async (req, res) => {
  if (req.method === 'GET') {
    const cookies = cookie.parse(req.headers.cookie ?? '')
    const access = cookies.access ?? false

    if (access === false) {
      return res.status(401).json({
        error: 'アクセストークンがありません',
      })
    }

    return res.status(200).json({
      access: access,
    })
  } else {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ error: 'Method ＄{req.method} not allowed' })
  }
}

`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial15145= () => {
    const test = `
import {
        ...

  // プロフィール編集
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
      
        ...

  // 状態解除
  RESET_AUTH_STATUS,
} from '../actions/types'


const initialState = {
  user: null,
  isAuthenticated: null,
  loading: false,
  edit_profile_success: false,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
          ...

          // プロフィール編集
          case EDIT_PROFILE_SUCCESS:
return {
  ...state,
  edit_profile_success: true,
}
          case EDIT_PROFILE_FAIL:
return {
  ...state,
}
      
          ...

          // 状態解除
          case RESET_AUTH_STATUS:
return {
  ...state,
  edit_profile_success: false,
}
          default:
return state
        }
      }

`
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial15146= () => {
    const test = `
import { reset_auth_status } from '../actions/auth'

// 状態解除
useEffect(() => {
  if (dispatch && dispatch !== null && dispatch !== undefined) {
    dispatch(reset_auth_status())
    dispatch(reset_post_status())
  }
}, [dispatch])

  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial15151 = () => {
  const test = `
    // ユーザー登録
    export const register = (name, email, password) => async (dispatch) => {
      dispatch({
        type: SET_AUTH_LOADING,
      })
    
      const body = JSON.stringify({
        name,
        email,
        password,
      })
    
      try {
        const res = await fetch('/api/account/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
    
        if (res.status === 200) {
          dispatch({
            type: REGISTER_SUCCESS,
          })
          // 追加
          await dispatch(login(email, password))
        } else {
          dispatch({
            type: REGISTER_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: REGISTER_FAIL,
        })
      }
    
      dispatch({
        type: REMOVE_AUTH_LOADING,
      })
    }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
