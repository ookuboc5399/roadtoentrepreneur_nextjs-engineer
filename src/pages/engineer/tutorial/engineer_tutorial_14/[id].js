import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_14 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_14>
                        <h3>はじめに </h3>
                        <p>Django REST Framework と Next.js、Stripe でサブスク有料会員サイトを構築していきます。。 </p>
                        <p>バックエンドは Django REST Framework を使用して アカウント認証システムを構築します。</p>
                        <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
                        <p>状態管理は Redux を使用します。 </p>
                        <p>決済は Stripe Checkout を使用します </p>
                        <p>フルスクラッチで有料会員サイトの構築方法を学習していきます </p>

                        <h3>目標</h3>
                        <p>下記を学習していきます。 </p>
                        <li>Django REST Framework で アカウント認証システム構築</li>
                        <li>Next.js と Django REST Framework の連携方法</li>
                        <li>Stripe サブスク決済の方法 </li>
                        <h3>機能 </h3>
                        <li>アカウント登録</li>
                        <li>ログイン</li>
                        <li>ログアウト</li>
                        <li>Stripe サブスク決済</li>
                        <li>Webhook</li>
                        <li> 無料コンテンツ表示</li>
                        <li> 有料コンテンツ表示</li>


                        <h3>#エラーが発生した場合</h3>
                        <p>詳しいコードの解説は、Django REST Framework、NextJS、Stripe の公式ページを参考にして下さい。</p>

                        <p>Django REST Framework 公式ドキュメント</p>
                        <p>Next.js 公式ドキュメント</p>
                        <p>Stripe 公式ドキュメント</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>DRF 参照コード</p>
                        <p>Next.js 参照コード</p>

                        <p>では、始めて行きましょう！！</p>

                    </Layout_tutorial_14>
                ) : id == 2 ? (
                    <Layout_tutorial_14>
                        <h3>準備 </h3>
                        <p>開発の準備をします。 </p>
                        <p>GitHub準備 </p>
                        <p>GitHubのリポジトリを作成します。 </p>
                        <p>.gitignore作成 </p>
                        <p>まずはバックエンドの Django から構築していきます</p>

                        <p>.gitignoreファイルを作成してください。 </p>
                        <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                        <p>必ず作成しておきましょう </p>
                        <Tutorial1421 />

                        <h3>仮想環境の作成 </h3>
                        <p>myvenvという名前で仮想環境を構築します。 </p>

                        <Tutorial1422 />
                        <p>仮想環境の実行</p>
                        <p>sourceコマンドで仮想環境を実行します。</p>
                        <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                        <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                        <p>これがあると、仮想環境に入っていることになります。</p>
                        <Tutorial1423 />
                        <p>※ windows の方は別コマンドになります。</p>
                        <p>Windows のみ</p>
                        <Tutorial1424 />
                        <h3>requirements.txt作成</h3>
                        <p>開発で必要なパッケージを記載します。</p>
                        <Tutorial1425 />
                        <h3>パッケージのインストール</h3>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                        <Tutorial1426 />
                        <p>これで、Djangoで開発する準備ができました。</p>
                    </Layout_tutorial_14>
                ) : id == 3 ? (
                    <Layout_tutorial_14>
                        <h3>プロジェクト作成 </h3>
                        <p>プロジェクトを作成します。</p>
                        <p>プロジェクト名はmysiteです。 </p>
                        <p>最後の.はディレクトリ直下にプロジェクトを作成するという意味です。</p>
                        <Tutorial1431 />
                        <h3>#環境設定変更</h3>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>

                        <Tutorial1432 />

                        <h3>データベースのセットアップ </h3>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>

                        <Tutorial1433 />
                        <h3>#Webサーバーを起動する</h3>
                        <p>Djangoが起動できるか確認しましょう。</p>
                        <Tutorial1434 />
                        <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </Layout_tutorial_14>
                ) : id == 4 ? (
                    <Layout_tutorial_14>
                        <h3>アプリケーション作成 </h3>
                        <p>アプリケーションを作成してきます。 </p>
                        <p>app と accounts いう名前のアプリケーションを作成します。。</p>
                        <p>認証系は accounts のアプリケーションに書いていきます</p>
                        <Tutorial1441 />
                        <h3>#アプリケーションを使えるように設定 </h3>
                        <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                        <p>API を構築するにはDjango REST Frameworkを使用します。 </p>
                        <p>INSTALLED_APPS に追加します </p>
                        <Tutorial1442 />
                        <p>Django Rest Framework と SimpleJWT を使用するための設定 </p>
                        <p>JWT 認証を構築するために、SimpleJWTライブラリを使用します。</p>
                        <p>SimpleJWTの設定は色々あるので、下記ドキュメントを参考にしてください。</p>
                        <Tutorial1443 />
                        <h3>カスタムユーザーの設定 </h3>
                        <p className='border-b-4 border-blue-400'>メールアドレス認証をするために、カスタムユーザーの設定をします。</p>
                        <Tutorial1444 />
                    </Layout_tutorial_14>
                ) : id == 5 ? (
                    <Layout_tutorial_14>
                        <h3>カスタムユーザーモデル</h3>
                        <p>メールアドレス認証するためにカスタムユーザーモデルを作成します。 </p>
                        <p>名前、メールアドレス、パスワードを使用してアカウント登録をします </p>
                        <p>ターミナルでユーザーを作成（manage.py createsuperuserなど）する際に呼ばれるUserManager</p>
                        <p className='text-red-400'>accounts/models.py</p>
                        <Tutorial1451 />
                        <h3>管理画面追加 </h3>
                        <p>ユーザーを管理画面で操作できるようにします。</p>
                        <p className='text-red-400'>accounts/admin.py</p>
                        <div className='flex'>
                            <div>
                                <Tutorial1452 />
                            </div>
                            <div className='m-6'>
                                <p>get_user_model()は現時点で有効になっているUserモデルを呼び出してくれる</p>
                                <p>ここではsettings.pyのAUTH_USER_MODEL=&apos;accounts.UserAccount&apos;</p>
                                <p>UserAdminクラスを継承し、新たなクラスを作成→そのクラスをadmin.site.registerで登録</p>
                            </div>
                        </div>

                        <p>データベース構築</p>
                        <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>

                        <Tutorial1453 />
                        <p>管理者作成</p>
                        <p>管理者を作成します。 </p>
                        <Tutorial1454 />
                    </Layout_tutorial_14>
                ) : id == 6 ? (
                    <Layout_tutorial_14>
                        <h3>URL </h3>
                        <p>URL を設定します</p>
                        <p>プロジェクト用 URL を作成 </p>
                        <p>プロジェクト用の URL を設定します。 </p>
                        <p>SimpleJWTにトークン用のビューが用意されているので、設定します</p>
                        <p className='text-red-400'>mysite/urls.py</p>
                        <Tutorial1461 />
                        <h3>アプリケーション用 URL を作成 </h3>
                        <p>accounts フォルダの下に、urls.py ファイルを作成します。</p>
                        <p>アカウント登録とユーザー情報取得の URL を設定します </p>
                        <p className='text-red-400'>accounts/urls.py</p>
                        <Tutorial1462 />
                    </Layout_tutorial_14>
                ) : id == 7 ? (
                    <Layout_tutorial_14>
                        <h3>Serializer</h3>
                        <p>Serializer とは？</p>
                        <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                        <p>accounts フォルダに serializers.py ファイルを作成します</p>
                        <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                        <p className='text-red-400'>accounts/serializers.py</p>
                        <Tutorial1471 />

                    </Layout_tutorial_14>
                ) : id == 8 ? (
                    <Layout_tutorial_14>
                        <h3>ビュー</h3>
                        <p>Django REST Framework は、GenericAPIView という簡単に書けるコードが用意されてますが、今回はより汎用的な APIView を使用します。</p>
                        <p>意図しない動作は、return Response でエラーコードを返すことができます。 </p>
                        <h3>アカウント登録 </h3>
                        <p>アカウント登録のビューを作成します </p>
                        <p>フロントエンドから渡される request.data の中の name、email、password を使用して、ユーザーを作成します </p>
                        <p className='border-b-4 border-blue-400'>アカウント登録はユーザー認証前なので、permission_classes をAllowAnyに設定します </p>
                        <p>AllowAnyに設定すると、誰でも API にアクセスできるようになります。</p>
                        <p className='text-red-400'>accounts/views.py</p>
                        <Tutorial1481 />
                        <div className='items-center'>
                            <Image
                                className='items-center object-cover'
                                src="/images/programing/django/register.png"
                                alt="01:Pythonとは？"
                                width={876}
                                height={623}
                            />
                        </div>
                        <h3>ユーザー情報取得 </h3>
                        <p>ユーザー情報取得は認証後の操作なので、permission_classes は設定しません </p>
                        <p className='border-b-4 border-blue-400'>permission_classes を設定しないと、API にアクセスするためには、アクセストークンが必要になります </p>
                        <p>request.user からシリアライザーを通して、ユーザー情報を取得します</p>
                        <p className='text-red-400'>accounts/views.py</p>
                        <Tutorial1482 />
                        <div className='items-center'>
                            <Image
                                className='items-center '
                                src="/images/programing/django/user.png"
                                alt="01:Pythonとは？"
                                width={887}
                                height={497}
                            />
                        </div>
                    </Layout_tutorial_14>
                ) : id == 9 ? (
                    <Layout_tutorial_14>
                        <h3>API動作確認</h3>
                        <h4>サーバー起動</h4>
                        <p>サーバーを起動させます</p>

                        <Tutorial1491 />
                        <p>Postman</p>
                        <p>今回は Postman を使用して、API の動作確認を行います。。</p>

                        <p>Postman をインストールしてください </p>
                        <div>
                            <Link href="https://www.postman.com/ ">
                                https://www.postman.com/
                            </Link>
                        </div>


                        <p>Postman を使用すると簡単に動作確認ができるので、この機会に使い方を覚えておきましょう。</p>
                        <h4>アカウント登録 </h4>
                        <p>アカウント登録をしていきます。</p>
                        <p>POST にして下記 URL を入力します</p>
                        <p className='m-4'> http://localhost:8000/api/auth/register/</p>
                        <h5>Headers </h5>
                        <p>Headers の key に Content-Type、value に application/json を入力します </p>

                        <h5>Body</h5>
                        <p>key に email、name、password を入力してそれぞれの value を設定します </p>
                        <p>success となるとアカウント登録が成功しました。 </p>
                        <h4>ログイン</h4>
                        <p>次にログインをします。</p>
                        <p>POST にして下記 URL を入力します。</p>
                        <p className='m-4'> http://localhost:8000/api/login/</p>
                        <h5>Headers</h5>
                        <p>Headers の key に Content-Type、value に application/json を入力します</p>
                        <h5>Body</h5>
                        <p>key に email、password を入力してそれぞれの value を設定します</p>
                        <p>リフレッシュトークンとアクセストークンが取得できるとログイン成功です。</p>
                        <h4>リフレッシュトークン</h4>
                        <p>次にリフレッシュトークンを使用してアクセストークンを取得します</p>

                        <p>POST にして下記 URL を入力します</p>
                        <h5>Headers</h5>
                        <p>Headers の key に Content-Type、value に application/json を入力します。</p>
                        <h5>Body</h5>
                        <p>key に refresh、value にログインで取得したリフレッシュトークンをコピーして入力します</p>
                        <p>アクセストークンが取得できると成功です。</p>
                        <h4>認証チェック</h4>
                        <p>次にアクセストークンを使用して認証チェックをします</p>
                        <p>POST にして下記 URL を入力します。</p>
                        <p className='m-4'> http://localhost:8000/api/verify/</p>
                        <h5>Headers</h5>
                        <p>Headers の key に Content-Type、value に application/json を入力します</p>
                        <h5>Body</h5>
                        <p>key に token、value にリフレッシュトークンで取得したアクセストークンを入力します</p>
                        <p>ステータス 200 となれば認証チェック成功です</p>
                        <h4>ユーザー情報取得</h4>

                        <p>次にアクセストークンを使用してユーザー情報を取得します</p>
                        <p>GET にして下記 URL を入力します</p>
                        <h5>Headers</h5>
                        <p>Headers の key に Authorization、value に Bearer アクセストークン を入力します。</p>
                        <p>Bearer の右横にはスペースが必要です</p>
                        <h5>Body</h5>
                        <p>Body には何も設定しません。</p>
                        <p>ユーザー情報が JSON で取得することができたら成功です。</p>
                        <p>動作確認終了</p>
                        <p>これですべての API の動作確認が終了しました。</p>
                        <p>もしエラーが発生してうまくいかない場合は、下記コードを参考にしてください。。</p>
                        <p>DRF 参照コード</p>
                        <p>次は Next.js を使用してフロントエンドを構築していきます。</p>
                    </Layout_tutorial_14>
                ) : id == 10 ? (
                    <Layout_tutorial_14>
                        <h3>フロントエンド構築</h3>
                        <p>Next.js とは？</p>
                        <p>Next.js は React のライブラリとなります。</p>
                        <p>React と組み合わせて開発を行い、サーバーサイドレンダリングを可能にします</p>
                        <p>サーバー側で静的ファイルをレンダリングして、画面を表示するので、表示速度があがります</p>
                        <p>静的ファイルを生成することができるので、SEO 的にも有利になります</p>
                        <p>node/npm インストール</p>
                        <p>node と npm がインストールされていることを確認します</p>
                        <Tutorial14101 />
                        <p>まだインストールされていない方は、インストールしてください</p>
                        <p>node インストール </p>
                        <p>セットアップ </p>
                        <p>Django とは別のフォルダを新規に作成します。 </p>
                        <p>今回は、nextjs-membership-tutorial というフォルダを作成しました </p>
                        <Tutorial14102 />
                        <p>--use-npmは、npm でインストールするように指定しています </p>
                        <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>
                        <Tutorial14103 />
                        <p>最新の NextJS が動かない方は、NextJS のバージョンを下げてみてください。</p>
                        <Tutorial14104 />

                        <p>下記に遷移すると、Next.js の初期画面が表示されます</p>
                    </Layout_tutorial_14>
                ) : id == 11 ? (
                    <Layout_tutorial_14>
                        <h3>TailwindCSS導入</h3>
                        <p>TailwindCSS を導入していきます。</p>
                        <p>TailwindCSS とは？ </p>

                        <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
                        <p>Bootstrap などのフレームワークでは、ボタンなどのコンポーネントを活用してデザインをしていきます。 </p>
                        <p>TailwindCSS では、コンポーネントは用意されておらず、utility class を使用してデザインを行っていきます。</p>
                        <p>TailwindCSS の方がどんなデザインでも対応できます</p>

                        <h4>TailwindCSS インストール </h4>
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
                        <Tutorial14111 />
                        <Tutorial14112 />
                        <p>元の CSS はすべて削除して、置き換えます。 </p>
                        <Tutorial14113 />
                        <h4>不要ファイル削除 </h4>
                        <p>下記は不要なので削除します</p>

                        <p>Home.module.css を削除します</p>
                        <p>styles/Home.module.css</p>
                    </Layout_tutorial_14>
                ) : id == 12 ? (
                    <Layout_tutorial_14>
                        <h3>ライブラリインストール</h3>
                        <p>必要なライブラリをインストールします</p>
                        <p>今回は、Redux を使用していきます</p>
                        <p>Redux とは？</p>
                        <p>Redux とは、アプリケーションの状態を管理するためのフレームワークです</p>
                        <p>Redux を使用すると、状態管理がしやすく、開発が楽になります</p>
                        <p>Redux の詳細は、下記の記事を参考してください</p>

                        <p>この先 Redux 用語(State、Store、Action、Reducer)が出てきますので、ここで Redux の概要は理解しておいてください。 </p>
                        <li>State：アプリケーションの状態 </li>
                        <li> Store：State の情報を保持する場所 </li>
                        <li>  Action：ユーザーの動作を持つオブジェクト </li>
                        <li>  Reducer：Action をもとに State を更新するメソッド</li>
                        <div class="flex flex-nowrap">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                <a href="#">
                                    <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Reduxとは</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/08/06/redux%e3%81%a8%e3%81%af/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/04/04/django/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        記事を読む
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3>ライブラリインストール </h3>
                        <p>redux 以外にも必要なライブラリを全てインストールしておきます </p>
                        <Tutorial14121 />
                    </Layout_tutorial_14>
                ) : id == 13 ? (
                    <Layout_tutorial_14>
                        <h3>Redux Store設定</h3>
                        <p>Redux の Store の設定をしていきます</p>
                        <p>Store とは、State の情報を保持している場所です</p>
                        <h4>Store</h4>
                        <p>ルートディレクトリに store.js ファイルを作成して、状態管理ができるようにします </p>
                        <p className='text-red-400'>store.js</p>
                        <Tutorial14131 />
                        <h4>Reducer</h4>
                        <p>Reducer とは、Action を元に State を更新するメソッドです。</p>
                        <p>ルートディレクトリに reducers フォルダを作成して、index.js ファイルを作成します</p>
                        <p className='text-red-400'>reducers/index.js</p>
                        <Tutorial14132 />
                        <p>reducers フォルダに auth.js ファイルを作成します</p>

                        <p>user、isAuthenticated、loadingという初期状態を設定しておきます</p>
                        <p className='text-red-400'>reducers/auth.js</p>
                        <Tutorial14133 />
                    </Layout_tutorial_14>
                ) : id == 14 ? (
                    <Layout_tutorial_14>
                        <h3>トップページ</h3>
                        <p>トップページを修正します。</p>
                        <p>スタイルは TaillwindCSS を使用してデザインしていきます。</p>
                        <p>TailwindCSS は下記のチートシートを見ながらスタイリングするのがオススメです。</p>

                        <Tutorial14141 />
                        <p>実行</p>

                        <Tutorial14142 />
                        <p>トップページが表示されていることを確認してください</p>
                    </Layout_tutorial_14>
                ) : id == 15 ? (
                    <Layout_tutorial_14>
                        <h3>レイアウト</h3>
                        <p>画面共通のレイアウトとナビゲーションを作成します。</p>
                        <p>app</p>
                        <p className='border-b-4 border-blue-400'>react-reduxのProviderで囲むことによって、どの画面でも redux を使用することができます</p>

                        <Tutorial14151 />
                        <h4>レイアウト</h4>
                        <p>components フォルダを作成して、Layout.js ファイルを作成します</p>
                        <p>meta情報はここに書いていきます</p>
                        <Tutorial14152 />
                        <h4>ナビゲーション</h4>
                        <p>ナビゲーションを作成します。</p>
                        <p>components フォルダに Navigation.js ファイルを作成します。</p>
                        <Tutorial14153 />
                        <h4>CSS</h4>
                        <p>globals.css に共通の CSS を書いておきます</p>
                        <p>ボタンとフォームのスタイルを共通化させます</p>
                        <Tutorial14154 />
                        <p>動作確認</p>
                        <p>ナビゲーションが表示されたら完成です。</p>
                    </Layout_tutorial_14>
                ) : id == 16 ? (
                    <Layout_tutorial_14>
                        <h3>アカウント登録</h3>
                        <p>アカウント登録機能を構築します</p>
                        <h4>アカウント登録画面</h4>
                        <p>アカウント登録画面を作成します。</p>
                        <p>pages に register.js を作成します </p>
                        <p>名前、メールアドレス、パスワードを入力して、送信ボタンをクリックすると、Action の register関数をコールします</p>
                        <p className='text-red-400'>pages/register.js</p>
                        <Tutorial14161 />
                        <h4>Action</h4>
                        <p>ルートディレクトリに actions フォルダを作成して、types.js ファイルを作成します</p>
                        <p>ここにアクションタイプを定義していきます</p>
                        <p className='text-red-400'>actions/types.js</p>
                        <Tutorial14162 />
                        <p>アカウント登録用の Action を作成します。</p>
                        <p>actions フォルダに auth.js ファイルを作成します</p>
                        <p>register 関数を作成して、フロントエンドの API をコールします</p>
                        <p>API のコール中はロード中というアクションタイプになるように、SET_AUTH_LOADINGとREMOVE_AUTH_LOADINGで囲います</p>
                        <p>NEXT_PUBLIC_API_URL に Django が動いている URL を設定します</p>
                        <p className='text-red-400'>actions/auth.js</p>
                        <Tutorial14163 />
                        <p>環境ファイル</p>
                        <p>ルートディレクトリに.env ファイルを作成します</p>
                        <p>公開したくない値は環境変数とします。</p>
                        <p>NEXT_PUBLIC_API_URL に Django が動いている URL を設定します</p>
                        <Tutorial14164 />
                        <p>hello.js 削除</p>
                        <p>pages/api/hello.js は必要ないので削除します</p>
                        <p>フロント API</p>
                        <p>Action からフロントエンドの API がコールされ、Django の API をコールします。</p>
                        <p>pages/api ファルダに account フォルダを作成します</p>
                        <p>account フォルダに register.js ファイルを作成します</p>
                        <p>ユーザーが入力した名前、メールアドレス、パスワードを Django の http://localhost:8000/api/auth/register/に POST で送信します。</p>
                        <p>Django からのレスポンスのステータスが 201 が返ってきたらアカウント登録成功です。</p>
                        <p>201 以外のステータスはエラーとなります</p>
                        <p className='text-red-400'>pages/api/account/register.js</p>
                        <Tutorial14165 />
                        <p>Reducer</p>
                        <p>Action を元に State を更新します</p>
                        <p>reducers フォルダに auth.js ファイルを作成します</p>
                        <p>アカウント登録と読み込み中のアクションタイプを Reducer に追加します</p>
                        <p className='text-red-400'>reducers/auth.js</p>
                        <Tutorial14166 />
                        <p>処理の流れ</p>
                        <p>流れとしては、下記のようになります</p>
                        <li>
                            ユーザーがフォームからデータを入力
                            ActionからフロントエンドAPIをコール
                            DjangoAPIにデータを送信
                            Reducerで、Actionを元にStateを更新
                            ComponentでStateを参照
                        </li>
                        <p>動作確認</p>
                        <p>環境ファイルを設定したので、サーバーを再起動します</p>
                        <Tutorial14167 />
                        <p>アカウント登録画面はこのようになります。</p>
                        <p>実際にアカウント登録してみましょう。</p>

                        <p>Django サーバーが起動していることを確認してください</p>
                        <p>名前とメールアドレス、パスワードを入力して送信します。</p>
                        <p>送信すると、フロントエンドは何も変わりませんが、アカウントが登録されています</p>
                        <p>Django の管理画面でユーザーが登録されているか確認してみましょう</p>
                        <p>管理画面に遷移すると、送信したユーザーが登録されていたらアカウント登録成功です。。</p>

                    </Layout_tutorial_14>
                ) : id == 17 ? (
                    <Layout_tutorial_14>
                        <p>ログイン</p>
                        <p>ログイン機能を構築します</p>
                        <p>ログイン画面</p>
                        <p>ログイン画面を作成します</p>
                        <p>pages フォルダに login.js ファイルを作成します。 </p>
                        <p>メールアドレスとパスワードを入力して、送信ボタンをクリックすると、Action のログイン関数をコールします。</p>
                        <Tutorial14171 />
                        <p>Action</p>
                        <p>ログイン用の Action を作成します</p>
                        <p>ログインのアクションタイプを追加します</p>
                        <Tutorial14172 />
                        <p>ログイン関数を追加します。</p>


                        <Tutorial14173 />
                        <p>フロント API</p>
                        <p>Django をコールするコードを追加します。</p>
                        <p>pages/api/account フォルダに login.js ファイルを作成します。</p>
                        <p>ログインすると、アクセストークンとリフレッシュトークンを取得することができますので、Cookie に保存します。</p>
                        <p>この Cookie を見て認証チェックやユーザー情報を取得していきます。</p>
                        <Tutorial14174 />
                        <p>Reducer</p>
                        <p>ログインのアクションタイプを Reducer に追加します</p>
                        <Tutorial14175 />
                    </Layout_tutorial_14>
                ) : id == 18 ? (
                    <Layout_tutorial_14>
                        <p>ユーザー情報取得</p>
                        <p>ユーザー情報取得機能を構築します</p>
                        <p>Action</p>
                        <p>ユーザー情報取得用の Action を作成します。</p>
                        <p>この Action はログインが成功するとコールされます </p>
                        <p>ユーザー情報取得のアクションタイプを追加します</p>
                        <Tutorial14181 />
                        <p>ユーザー情報取得関数を追加します。</p>
                        <Tutorial14182 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに user.js ファイルを作成します</p>
                        <p>Cookie に格納されているアクセストークンからユーザー情報を取得します</p>
                        <p>アクセストークンがないと Django のデータベースから情報が取得できません。</p>

                        <Tutorial14183 />
                        <p>Reducer</p>
                        <p>ユーザー情報取得のアクションタイプを Reducer に追加します</p>
                        <p>取得したデータを user に格納します</p>
                        <p>画面で user を参照することにより、ログインユーザーの情報を取得することができます</p>
                        <Tutorial14184 />
                    </Layout_tutorial_14>
                ) : id == 19 ? (
                    <Layout_tutorial_14>
                        <p>リフレッシュトークン</p>
                        <p>システムは、アクセストークンを使用して認証を行いデータベースから情報を取得します</p>
                        <p>もしアクセストークンが漏れてしまうと、情報が取得できてしまうので、危険です</p>
                        <p>そこでアクセストークンの期限を短く設定します。</p>
                        <p>短く設定すると、もしアクセストークンが漏れてしまっても、危険な時間が短くなります。</p>
                        <p>しかし、何度も認証サーバーからアクセストークンを取得しないといけません</p>
                        <p>アクセストークンを取得するリクエストが何度もネットワーク上に流れることになるので、情報漏洩のリスクが高くなります</p>
                        <p>そこで使用するのが、リフレッシュトークンです。</p>
                        <p>リフレッシュトークンの期限は長く、ネットワーク上を流れる頻度が少ないので、情報漏洩のリスクが低くなります。</p>

                        <p>アクセストークン、リフレッシュトークンの理解は、アプリを開発する上でかなり重要になるので、下記サイトでしっかりと理解しておいてください。</p>
                        <p>レイアウト</p>
                        <p>ブラウザを更新する時に、リフレッシュトークンを送信してアクセストークンを再発行するように設定します。</p>
                        <p>Layout.js に refresh 関数を追加します</p>
                        <Tutorial14191 />
                        <p>Action</p>
                        <p>リフレッシュトークン用の Action を作成します</p>
                        <p>リフレッシュトークンのアクションタイプを追加します。</p>
                        <Tutorial14192 />
                        <p>リフレッシュトークン関数を追加します。</p>
                        <Tutorial14193 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに refresh.js ファイルを作成します</p>
                        <p>Cookie に格納されているリフレッシュトークンからアクセストークンを再発行します</p>

                        <p>取得したアクセストークンを Cookie に上書きします。</p>
                        <p>こうすることによってリフレッシュトークンの有効期限内はログイン状態が続きます</p>
                        <Tutorial14194 />
                        <p>Reducer</p>
                        <p>リフレッシュトークンのアクションタイプを Reducer に追加します</p>
                        <Tutorial14195 />
                    </Layout_tutorial_14>
                ) : id == 20 ? (
                    <Layout_tutorial_14>
                        <p>認証チェック</p>
                        <p>アクセストークンを使用して認証をチェックしていきます。</p>
                        <p>認証が通るとシステムはログイン状態となります</p>
                        <p>Action</p>
                        <p>認証チェック用の Action を作成します </p>
                        <p>認証チェックのアクションタイプを追加します</p>
                        <Tutorial14201 />
                        <p>認証チェックのverify関数を追加します。</p>

                        <Tutorial14202 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに verify.js ファイルを作成します</p>
                        <p>Cookie に格納されているアクセストークンを使用して、認証チェックをします</p>
                        <p>Django サーバーから 200 ステータスが返ってくると、認証成功になります</p>
                        <Tutorial14203 />
                        <p>Reducer</p>
                        <p>認証チェックのアクションタイプを Reducer に追加します</p>
                        <p>認証チェックが成功すると isAuthenticated が true になります。</p>
                        <p>この isAuthenticated が true であればログイン状態、false であればログアウト状態になります</p>
                        <Tutorial14204 />
                    </Layout_tutorial_14>
                ) : id == 21 ? (
                    <Layout_tutorial_14>
                        <p>ログアウト</p>
                        <p>ログアウト機能を構築していきます</p>
                        <p>ログアウトはナビゲーションのログアウトボタンから実行できます。</p>
                        <p>Action</p>
                        <p>ログアウトのアクションタイプを追加します。 </p>

                        <Tutorial14211 />
                        <p>ログアウト関数を追加します。</p>

                        <Tutorial14212 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに logout.js ファイルを作成します。</p>
                        <p>ログアウトすると、Cookie に格納されているアクセストークンとリフレッシュトークンがクリアされます。</p>

                        <Tutorial14213 />
                        <p>Reducer</p>
                        <p>ログアウトのアクションタイプを Reducer に追加します。</p>
                        <p>ログアウトが成功すると isAuthenticated が false になります</p>
                        <Tutorial14214 />
                    </Layout_tutorial_14>
                ) : id == 22 ? (
                    <Layout_tutorial_14>
                        <p>ナビゲーション修正</p>
                        <p>ナビゲーションを認証状態(isAuthenticated)によって変更していきます。</p>
                        <p>ログアウトボタンを押したときにログアウト関数がコールされるようにします</p>
                        <Tutorial14221 />
                        <p>動作確認</p>
                        <p>ログイン、ログアウトができるようになりましたので、動作を確認してみてください</p>
                    </Layout_tutorial_14>
                ) : id == 23 ? (
                    <Layout_tutorial_14>
                        <p>トップページ修正</p>
                        <p>トップページを認証状態(isAuthenticated)によって変更していきます</p>
                        <p>認証が通るとシステムはログイン状態となります</p>
                        <p>認証が成功するとログインユーザーの名前が表示されます</p>

                        <Tutorial14231 />
                        <p>これでフロントエンドとバックエンドの認証システムが完成しました。</p>

                        <p>次は Stripe でお支払い機能を構築して、無料会員と有料会員で表示が分かれるようにしていきます。</p>
                    </Layout_tutorial_14>
                ) : id == 24 ? (
                    <Layout_tutorial_14>
                        <p>Stripe導入</p>
                        <p>ここからは Stripe を導入してサブスク有料会員の構築方法を学習していきます</p>
                        <p>フロントエンドから Stripe API をコールして、Stripe Checkout画面でカード情報を入力します。</p>
                        <p>お支払いが成功すると、Stripe の Webhook を受け取り、Djangoデータベースの有効期限を更新します。</p>
                        <p>仕組みは下記のサブスクリプションの仕組みでしっかりと理解しておいてください</p>
                        <p>バックエンドの Django から構築します</p>

                        <p>モデル。</p>
                        <p>UserAccount モデルに、顧客 ID(customer_id)と有料会員有効期限(current_period_end)を追加します</p>
                        <p>有効期限までは有料コンテンツが表示されます。</p>
                        <p>有効期限が過ぎてしまうと、無料コンテンツのみが表示されます。</p>
                        <p>毎月のお支払いで Webhook を受信するので、受信したら有効期限を更新します。</p>
                        <Tutorial14241 />
                        <p>データベース再構築</p>
                        <p>モデルを変更したので、データベースを再構築します。</p>
                        <Tutorial14242 />

                    </Layout_tutorial_14>
                ) : id == 25 ? (
                    <Layout_tutorial_14>
                        <p>Serializer修正</p>
                        <p>モデルを変更したので、Serializer の fields も変更します。</p>
                        <p>顧客 ID と有効期限を追加します。</p>
                        <Tutorial14251 />
                    </Layout_tutorial_14>
                ) : id == 26 ? (
                    <Layout_tutorial_14>
                        <p>URL追加</p>
                        <p>お支払いが成功すると Webhook がコールされます。</p>
                        <p>その Webhook からコールされる Django の URL を追加します。</p>
                        <Tutorial14261 />
                    </Layout_tutorial_14>
                ) : id == 27 ? (
                    <Layout_tutorial_14>
                        <p>ビュー追加</p>
                        <p>メールアドレス、顧客 ID、作成日が渡され、顧客 ID と有効期限を更新します。</p>
                        <p>サブスクリプションなので、1 ヶ月更新となります。</p>
                        <p>そのため有効期限は、お支払い成功日から 1 ヶ月後の日付を設定しています。</p>

                        <Tutorial14271 />
                        <p>Django の変更は以上になります。</p>
                        <p>次は、フロントエンドを構築していきます。</p>
                    </Layout_tutorial_14>
                ) : id == 28 ? (
                    <Layout_tutorial_14>
                        <p>Stripe登録</p>
                        <p>Stripe のアカウントを作成します。</p>
                        <p>API キー</p>
                        <p>アカウントを作成したら開発者ボタンをクリックして、API キー画面に遷移します</p>
                        <p>公開可能キーとシークレットキーをメモします。 </p>
                        <p>NextJS プロジェクトの.env ファイルに公開可能キーとシークレットキーを追加します。</p>
                        <p>公開可能キー：NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY </p>
                        <p>シークレットキー：NEXT_PUBLIC_STRIPE_SECRET_KEY</p>
                        <Tutorial14281 />
                        <p>商品</p>


                        <p>商品を追加します。</p>
                        <p>商品ボタンをクリックして、商品画面に遷移します。</p>
                        <p>商品を追加ボタンで継続 1000 円などで商品を追加します。</p>
                        <p>商品を追加すると、商品詳細の料金項目にAPI IDがありますので、コピーします。</p>
                        <p>コピーした料金のAPI IDを.env に追加します。</p>
                        <Tutorial14282 />

                        <p>ブランディング設定</p>
                        <p>設定のブランディングでアイコンやロゴ、ブランドカラーなどを設定します。</p>
                        <p>以上の設定をするだけで、Stripe を使用してお支払いが可能になります。</p>
                        <p>他にもメール設定など細かい設定をすることができますので、Stripe のドキュメントを見ながら設定してみてください。</p>

                    </Layout_tutorial_14>
                ) : id == 29 ? (
                    <Layout_tutorial_14>
                        <p>お支払い画面</p>
                        <p>ここからはフロントエンドに Stripe のお支払い機能を追加していきます。</p>
                        <p>お支払い画面を作成します。</p>
                        <p>お支払いボタンをクリックして、Stripe API がコールされると、URL が返ってきますので、Stripe のチェックアウト画面に遷移します。</p>
                        <p>今回は、Stripe Checkoutを使用します。 </p>
                        <p>クレジットカードを入力するお支払い画面は、Stripe 側が用意してくれるので、セキュリティ的に安心です</p>
                        <p>pages フォルダに checkout.js ファイルを作成します。。</p>
                        <Tutorial14291 />
                        <p>画面確認</p>
                        <p>checkout の URL に遷移するとプラン選択の画面が表示されます</p>

                        <p>Action</p>
                        <p>チェックアウト完了用の Action を作成します。</p>
                        <p>チェックアウト完了のアクションタイプを追加します。</p>
                        <Tutorial14292 />
                        <p>チェックアウト関数を追加します。</p>
                        <Tutorial14293 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに create_checkout.js ファイルを作成します。</p>
                        <p>stripe ライブラリを使用して、stripe の API をコールします。</p>
                        <p>modeはサブスクリプションで、payment_method_typesはカードとします</p>
                        <p>success_urlにお支払いが成功したあとの URL を指定することができます。</p>
                        <p>stripe.checkout.sessions.createに渡せるパラメータはいくつかありますので、ドキュメントを参考にしてください。</p>
                        <Tutorial14294 />
                        <p>Reducer</p>
                        <p>チェックアウト完了のアクションタイプを Reducer に追加します。</p>
                        <p>Stripe の API コールが成功すると Stripe のチェックアウト画面の URL をフロントに渡します。</p>
                        <Tutorial14295 />
                        <p>Stripe のチェックアウト画面でお支払いが完了すると result 画面に遷移するようにしましたので、result 画面を作成します。</p>
                        <Tutorial14296 />
                    </Layout_tutorial_14>
                ) : id == 30 ? (
                    <Layout_tutorial_14>
                        <p>お支払い結果画面</p>
                        <p>お支払いが完了したことが分かる画面を作成します</p>
                        <p>お支払いが完了するとsession_idが取得できます</p>
                        <p>このsession_idを使用して、お支払いの詳細を取得します。</p>
                        <p>pages フォルダに result.js ファイルを作成します。</p>
                        <Tutorial14301 />
                        <p>Action</p>
                        <p>チェックアウト詳細用の Action を作成します</p>
                        <p>チェックアウト詳細のアクションタイプを追加します</p>
                        <Tutorial14302 />
                        <p>チェックアウト詳細関数を追加します</p>

                        <Tutorial14303 />
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに detail_checkout.js ファイルを作成します</p>
                        <p>sessin_idを stripe API に渡してお支払いの詳細を取得します。</p>
                        <p>stripe.checkout.sessions.retrieveの詳細は、ドキュメントを参考にしてください。</p>
                        <Tutorial14304 />
                        <p>Reducer</p>
                        <p>チェックアウト詳細のアクションタイプを Reducer に追加します</p>
                        <Tutorial14305 />
                        <p>これでお支払い機能のフロントエンド部分の構築が完了しました。</p>
                        <p>次回はお支払いが完了したときに、webhook を通して Django バックエンドの顧客 ID と有効期限を更新するコードを追加します。</p>

                    </Layout_tutorial_14>
                ) : id == 31 ? (
                    <Layout_tutorial_14>
                        <p>Webhook</p>
                        <p>サブスクリプションのお支払いが完了すると、webhook を受け取ります</p>
                        <p>この webhook から顧客情報を取得して Django のデータベースを更新します</p>
                        <p>フロントエンドからデータベースを操作するのではなく、Stripe 側からデータベースを操作することでセキュリティが高まります。</p>
                        <p>webhook </p>
                        <p>Webhook を受け取った時に動作させるコードを書いていきます。</p>
                        <p>毎月のサブスクリプションが成功すると、invoice.payment_succeededイベントを受信します</p>
                        <p>顧客ID、メールアドレス、作成日を使用して Django のデータベースを更新します。 </p>
                        <p>毎月invoice.payment_succeededがコールされると、有効期限が 1 ヶ月ずつ更新されていきます。</p>
                        <p>イベントがコールされないと、有効期限が更新されないので、有効期限が切れてしまうと、有料コンテンツが見れなくなります。</p>
                        <p>詳細は下記のドキュメントを参考にしてください</p>
                        <p>pages/api フォルダに webhooks フォルダを作成し、index.js ファイルを作成します。</p>
                        <Tutorial14301 />
                        <p>Stripe Webhook 設定</p>
                        <p>Stripe で Webhook の設定をします。</p>
                        <p>開発者ボタンをクリックして、Webhook 画面に遷移します。</p>
                        <p>ローカル環境でテストボタンをクリックします</p>
                        <p>Stripe CLI インストール</p>
                        <p>Stripe の Webhook をテストするために、Stripe CLI をインストールします</p>
                        <p>インストールが完了したら、stripe login でログインします。</p>
                        <Tutorial14302 />
                        <p>Webhook サーバー起動</p>
                        <p>別ターミナルで下記のコマンドを実行します。</p>
                        <Tutorial14303 />
                        <p>コマンドを実行すると、webhook のシークレットキーが表示されます</p>
                        <Tutorial14304 />
                        <p>この webhook のシークレットキーを.env ファイルに追加します</p>
                        <Tutorial14305 />
                        <p>NextJS のサーバーを再起動します。</p>
                        <Tutorial14306 />
                        <p>Webhook イベント実行</p>
                        <p>別ターミナルで下記コマンドを実行します</p>
                        <p>テストで payment_intent.succeededイベントを強制的に発行します</p>
                        <Tutorial14307 />
                        <p>下記のように 200 ステータスが返ってきたら成功です</p>
                        <Tutorial14308 />
                    </Layout_tutorial_14>
                ) : id == 32 ? (
                  <Layout_tutorial_14>
                  <p>トップページ修正</p>
                      <p>トップページに、有料会員の場合は、有料コンテンツを表示するようにします。</p>
                      <p>current_period_endに有効期限が格納されているので、本日が有効期限内であれば有料コンテンツが表示されます。</p>
                      <Tutorial14321/>
    </Layout_tutorial_14>
                ) : id == 33 ? (
                  <Layout_tutorial_14>
                  <p>最終動作確認</p>
                      <p>お支払いをして有料会員になれるか最終動作確認をします。</p>
                      <p>念のため NextJS と Webhook サーバーを再起動しておいてください</p>
                   
                      <Tutorial14331/>
                      <Tutorial14332/>
                      <p>今は無料会員ですので、トップページのこちらからボタンをクリックします</p>
                      <p>お支払いボタンをクリックします。</p>
                      <p>Stripe のチェックアウト画面に遷移します。</p>
                      <p>Stripe で設定した商品が表示されます。</p>
                      <p>今はテストモードなので、カード情報はテスト用の番号を入力します</p>
                      <Tutorial14333/>
                      <p>カード番号を入力して、申し込むボタンをクリックします。</p>
                      <p>お支払いが完了すると、チェックアウト完了画面に遷移します。</p>
                      <p>トップページに遷移します。</p>
                      <p>有料会員の期限と有料コンテンツが表示されています。</p>
                      <p>こうなっていればお支払いが成功となります。</p>
                      <p>もし有料コンテンツが表示されていない場合は、Webhook がうまくいっていない可能性もあるので、再起動するなど調べてみてください。</p>
                      <p>DRF 参照コード</p>
                      <p>Next.js 参照コード</p>
      </Layout_tutorial_14>
                ) : id == 34 ? (
                  <Layout_tutorial_14>
                  <p>おわりに</p>
                      <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                      <p>Django REST Framework + NextJS + Stripeサブスク有料会員サイト構築チュートリアルはここまでで終わりとなります。</p>
                      <p>Django REST Frameworkでの認証システムの構築方法やNextJSでReduxの構築方法、Stripeでお支払いの方法など多くのことを学習しました。</p>
                      <p>Stripeの仕組みはしっかりとドキュメントを読んで理解しておいてください</p>
                      <p>ぜひ有料会員サイトを構築してみてください</p>
                      <p>式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                      <p>Django REST Framework 公式ドキュメント</p>
                      <p>Next.js 公式ドキュメント</p>
                      <p>Stripe 公式ドキュメント</p>
      </Layout_tutorial_14>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial1421 = () => {
    const test = `
    myvenv
    db.sqlite3
    .vscode
    __pycache__
    *.pyc
    .DS_Store
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1422 = () => {
    const test = `
    python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1423 = () => {
    const test = `
    source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1424 = () => {
    const test = `
    .\myvenv\Scripts\activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1425 = () => {
    const test = `
    Django==3.2.9
    djangorestframework==3.12.4
    djangorestframework-simplejwt==4.4.0
    PyJWT==1.7.1
    python-dateutil==2.8.2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial1426 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1431 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1432 = () => {
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



const Tutorial1433 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1434 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1441 = () => {
    const test = `
(myvenv) ~$ python3 manage.py startapp app
(myvenv) ~$ python3 manage.py startapp accounts
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1442 = () => {
    const test = `
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'rest_framework', # 追加
        'app', # 追加
        'accounts', # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1443 = () => {
    const test = `
    from datetime import timedelta

    REST_FRAMEWORK = {
        'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.IsAuthenticated',
        ],
        'DEFAULT_AUTHENTICATION_CLASSES': [
            'rest_framework_simplejwt.authentication.JWTAuthentication',
        ]
    }
    
    SIMPLE_JWT = {
        'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
        'REFRESH_TOKEN_LIFETIME': timedelta(days=3),
        'ROTATE_REFRESH_TOKENS': False,
        'BLACKLIST_AFTER_ROTATION': False,
        'AUTH_HEADER_TYPES': ('Bearer', ),
        'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken', )
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1444 = () => {
    const test = `
    AUTH_USER_MODEL = 'accounts.UserAccount'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1451 = () => {
    const test = `
    from django.db import models
    from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
    
    
    class UserManager(BaseUserManager):
        def create_user(self, email, name, password=None):
            if not email:
                raise ValueError('Users must have an email')
    
            email = self.normalize_email(email)
            email = email.lower()
    
            user = self.model(
                email=email,
                name=name
            )
    
            user.set_password(password)
            user.save(using=self._db)
    
            return user
    
        def create_superuser(self, email, name, password=None):
            user = self.create_user(email, name, password)
    
            user.is_superuser = True
            user.is_staff = True
    
            user.save(using=self._db)
    
            return user
    
    
    class UserAccount(AbstractBaseUser, PermissionsMixin):
        email = models.EmailField("メールアドレス", max_length=255, unique=True)
        name = models.CharField("名前", max_length=255)
    
        is_active = models.BooleanField(default=True)
        is_staff = models.BooleanField(default=False)
    
        objects = UserManager()
    
        USERNAME_FIELD = 'email'
        REQUIRED_FIELDS = ['name']
    
        def __str__(self):
            return self.email
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1452 = () => {
    const test = `
    from django.contrib import admin
    from django.contrib.auth import get_user_model
    
    User = get_user_model()
    
    admin.site.register(User)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1453 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py makemigrations
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1454 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py createsuperuser
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1461 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
    
    urlpatterns = [
        path('api/login/', TokenObtainPairView.as_view()),
        path('api/refresh/', TokenRefreshView.as_view()),
        path('api/verify/', TokenVerifyView.as_view()),
        path('api/auth/', include('accounts.urls')),
        path('admin/', admin.site.urls),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1462 = () => {
    const test = `
    from django.urls import path
    from .views import RegisterView, UserView
    
    urlpatterns = [
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

const Tutorial1471 = () => {
    const test = `
    from rest_framework import serializers
    from django.contrib.auth import get_user_model
    
    User = get_user_model()
    
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('id', 'name', 'email')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1481 = () => {
    const test = `
    from django.contrib.auth import get_user_model

    from rest_framework import permissions, status
    from rest_framework.response import Response
    from rest_framework.views import APIView
    from rest_framework.viewsets import ModelViewSet
    
    from .serializers import UserSerializer
    
    User = get_user_model()
    
    
    # アカウント登録
    class RegisterView(APIView):
        permission_classes = (permissions.AllowAny, )
    
        def post(self, request):
            try:
                data = request.data
                name = data['name']
                email = data['email'].lower()
                password = data['password']
    
                # ユーザーの存在確認
                if not User.objects.filter(email=email).exists():
                    # ユーザーが存在しない場合は作成
                    User.objects.create_user(
                        name=name, email=email, password=password)
    
                    return Response(
                        {'success': 'ユーザーの作成に成功しました'},
                        status=status.HTTP_201_CREATED
                    )
                else:
                    return Response(
                        {'error': '既に登録されているメールアドレスです'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            except:
                return Response(
                    {'error': 'アカウント登録時に問題が発生しました'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1482 = () => {
    const test = `
    # ユーザー情報取得
    class UserView(APIView):
        def get(self, request):
            try:
                user = request.user
                user = UserSerializer(user)
    
                return Response(
                    {'user': user.data},
                    status=status.HTTP_200_OK
                )
            except:
                return Response(
                    {'error': 'ユーザーの取得に問題が発生しました'},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1491 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14101 = () => {
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



const Tutorial14102 = () => {
    const test = `
$ mkdir nextjs-membership-tutorial
$ cd nextjs-membership-tutorial
$ npx create-next-app . --use-npm
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
    npm install next@11
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14111 = () => {
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



const Tutorial14112 = () => {
    const test = `
    module.exports = {
        mode: 'jit',
        purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        darkMode: false, // or 'media' or 'class'
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial14113 = () => {
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

const Tutorial14121 = () => {
    const test = `
    npm install cookie date-fns micro micro-cors react-loader-spinner react-redux redux redux-devtools-extension redux-thunk stripe
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14131 = () => {
    const test = `
      import { useMemo } from 'react'
      import { createStore, applyMiddleware } from 'redux'
      import { composeWithDevTools } from 'redux-devtools-extension'
      import thunkMiddleware from 'redux-thunk'
      import reducers from './reducers'
      
      let store
      
      function initStore(initialState) {
        return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
      }
      
      export const initializeStore = (preloadedState) => {
        let _store = store ?? initStore(preloadedState)
      
        if (preloadedState && store) {
          _store = initStore({
            ...store.getState(),
            ...preloadedState,
          })
          store = undefined
        }
      
        if (typeof window === 'undefined') return _store
        if (!store) store = _store
      
        return _store
      }
      
      export function useStore(initialState) {
        const store = useMemo(() => initializeStore(initialState), [initialState])
        return store
      }
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14132 = () => {
    const test = `
      import { combineReducers } from 'redux'
      import authReducer from './auth'
      
      export default combineReducers({
        auth: authReducer,
      })
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14133 = () => {
    const test = `
      const initialState = {
          user: null,
          isAuthenticated: null,
          loading: false,
        }
        
        const authReducer = (state = initialState, action) => {
          const { type, payload } = action
        
          switch (type) {
            default:
              return state
          }
        }
        
        export default authReducer
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14141 = () => {
    const test = `
      const Index = () => {
        return (
          <>
            <div className="text-center text-2xl">
              フルスタックチャンネルによる有料会員サイトのチュートリアルです。
            </div>
          </>
        )
      }
      
      export default Index
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14142 = () => {
    const test = `
      npm run dev
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14151 = () => {
    const test = `
  import { Provider } from 'react-redux'
  import { useStore } from '../store'
  import Layout from '../components/Layout'
  import '../styles/globals.css'
  
  function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)
  
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
  
  export default MyApp
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14152 = () => {
    const test = `
      import Head from 'next/head'
      import Navigation from './Navigation'
      
      const Layout = (props) => {
        return (
          <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navigation />
            <div className="max-w-7xl mx-auto px-8 py-6">{props.children}</div>
          </>
        )
      }
      
      export default Layout
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14153 = () => {
    const test = `
      import Link from 'next/link'
  
      const Navigation = () => {
        return (
          <>
            <div className="bg-gray-900">
              <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                      <a className="text-white hover:text-gray-50 font-extrabold text-lg">
                        フルスタックチャンネル
                      </a>
                    </Link>
                  </div>
                  <div>
                    <div>
                      <Link href="/login">
                        <a className="button-nav mr-4">ログイン</a>
                      </Link>
                      <Link href="/register">
                        <a className="button-nav">アカウント登録</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
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

const Tutorial14154 = () => {
    const test = `
    .input-form {
      @apply w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out;
    }
    
    .button-yellow {
      @apply text-center inline-block text-white bg-yellow-500 py-2 px-4 focus:outline-none hover:bg-yellow-600 rounded;
    }
    
    .button-nav {
      @apply inline-block bg-white py-2 px-4 rounded font-medium text-gray-500 hover:bg-gray-50;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14161 = () => {
    const test = `
      import { useState } from 'react'
      import { useSelector, useDispatch } from 'react-redux'
      import { useRouter } from 'next/router'
      import { register } from '../actions/auth'
      import Loader from 'react-loader-spinner'
      import Head from 'next/head'
      
      const Register = () => {
        const dispatch = useDispatch()
        const router = useRouter()
        const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
        const loading = useSelector((state) => state.auth.loading)
      
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
        })
      
        const { name, email, password } = formData
      
        const onChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      
        const onSubmit = async (e) => {
          e.preventDefault()
      
          if (dispatch && dispatch !== null && dispatch !== undefined) {
            await dispatch(register(name, email, password))
          }
        }
      
        if (typeof window !== 'undefined' && isAuthenticated) {
          router.push('/')
        }
      
        return (
          <>
            <Head>
              <title>有料会員サイト | アカウント登録</title>
            </Head>
      
            <div className="text-center text-2xl mb-5">アカウント登録</div>
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
                <div className="mb-1" htmlFor="email">
                  メールアドレス
                </div>
                <input
                  className="input-form"
                  type="email"
                  name="email"
                  placeholder="xxx@xxx.com"
                  onChange={onChange}
                  value={email}
                  required
                />
              </div>
              <div className="mb-4">
                <div className="mb-1" htmlFor="password">
                  パスワード
                </div>
                <input
                  className="input-form"
                  type="password"
                  name="password"
                  placeholder="半角英数8文字以上"
                  onChange={onChange}
                  value={password}
                  minLength="8"
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
      
      export default Register
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14162 = () => {
    const test = `
      // アカウント登録
      export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
      export const REGISTER_FAIL = 'REGISTER_FAIL'
      
      // 読み込み中
      export const SET_AUTH_LOADING = 'SET_AUTH_LOADING'
      export const REMOVE_AUTH_LOADING = 'REMOVE_AUTH_LOADING'
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14163 = () => {
    const test = `
      import {
        // アカウント登録
        REGISTER_SUCCESS,
        REGISTER_FAIL,
      
        // 読み込み中
        SET_AUTH_LOADING,
        REMOVE_AUTH_LOADING,
      } from './types'
      
      // アカウント登録
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

const Tutorial14164 = () => {
    const test = `
    NEXT_PUBLIC_API_URL=http://localhost:8000
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial14165 = () => {
    const test = `
    export default async (req, res) => {
      if (req.method === 'POST') {
        const { name, email, password } = req.body
    
        const body = JSON.stringify({
          name,
          email,
          password,
        })
    
        try {
          const apiRes = await fetch($｛ process.env.NEXT_PUBLIC_API_URL ｝/api/auth / register / , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: body,
          })
    
          const data = await apiRes.json()
    
          if (apiRes.status === 201) {
            return res.status(200).json({
              success: 'アカウント登録に成功しました',
            })
          } else {
            return res.status(apiRes.status).json({
              error: 'アカウント登録に失敗しました',
            })
          }
        } catch (err) {
          return res.status(500).json({
            error: 'アカウント登録に失敗しました',
          })
        }
      } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: Method $｛ req.method ｝ not allowed })
      }
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14166 = () => {
    const test = `
    import {
      // アカウント登録
      REGISTER_SUCCESS,
      REGISTER_FAIL,
    
      // 読み込み中
      SET_AUTH_LOADING,
      REMOVE_AUTH_LOADING,
    } from './types'
    
    // アカウント登録
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


const Tutorial14167 = () => {
    const test = `
    Ctrl + C
    $ npm run dev
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14171 = () => {
    const test = `
      import { useState } from 'react'
      import { useSelector, useDispatch } from 'react-redux'
      import { useRouter } from 'next/router'
      import { login } from '../actions/auth'
      import Loader from 'react-loader-spinner'
      import Head from 'next/head'
      
      const Login = () => {
        const dispatch = useDispatch()
        const router = useRouter()
        const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
        const loading = useSelector((state) => state.auth.loading)
      
        const [formData, setFormData] = useState({
          email: '',
          password: '',
        })
      
        const { email, password } = formData
      
        const onChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      
        const onSubmit = async (e) => {
          e.preventDefault()
      
          if (dispatch && dispatch !== null && dispatch !== undefined) {
            await dispatch(login(email, password))
          }
        }
      
        if (typeof window !== 'undefined' && isAuthenticated) {
          router.push('/')
        }
      
        return (
          <>
            <Head>
              <title>有料会員サイト | ログイン</title>
            </Head>
      
            <div className="text-center text-2xl mb-5">ログイン</div>
            <form className="w-1/3 mx-auto" onSubmit={onSubmit}>
              <div className="mb-4">
                <div className="mb-1" htmlFor="email">
                  メールアドレス
                </div>
                <input
                  className="input-form"
                  type="email"
                  name="email"
                  placeholder="xxx@xxx.com"
                  onChange={onChange}
                  value={email}
                  required
                />
              </div>
              <div className="mb-4">
                <div className="mb-1" htmlFor="password">
                  パスワード
                </div>
                <input
                  className="input-form"
                  type="password"
                  name="password"
                  placeholder="半角英数8文字以上"
                  onChange={onChange}
                  value={password}
                  minLength="8"
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
      
      export default Login
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14172 = () => {
    const test = `
      // アカウント登録
  export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
  export const REGISTER_FAIL = 'REGISTER_FAIL'
  
  // ログイン
  export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' // 追加
  export const LOGIN_FAIL = 'LOGIN_FAIL' // 追加
  
  // 読み込み中
  export const SET_AUTH_LOADING = 'SET_AUTH_LOADING'
  export const REMOVE_AUTH_LOADING = 'REMOVE_AUTH_LOADING'
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14173 = () => {
    const test = `
      import {
        // アカウント登録
        REGISTER_SUCCESS,
        REGISTER_FAIL,
      
        // ログイン
        LOGIN_SUCCESS, // 追加
        LOGIN_FAIL, // 追加
      
        // 読み込み中
        SET_AUTH_LOADING,
        REMOVE_AUTH_LOADING,
      } from './types'
      
      // アカウント登録
      export const register = (name, email, password) => async (dispatch) => {
        ...
      }
      
      // ↓追加
      // ログイン
      export const login = (email, password) => async (dispatch) => {
        dispatch({
          type: SET_AUTH_LOADING,
        })
      
        const body = JSON.stringify({
          email,
          password,
        })
      
        try {
          const res = await fetch('/api/account/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: body,
          })
      
          if (res.status === 200) {
            dispatch({
              type: LOGIN_SUCCESS,
            })
      
            // ユーザー情報取得
            dispatch(user())
          } else {
            dispatch({
              type: LOGIN_FAIL,
            })
          }
        } catch (err) {
          dispatch({
            type: LOGIN_FAIL,
          })
        }
      
        dispatch({
          type: REMOVE_AUTH_LOADING,
        })
      }
      // ↑追加
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14174 = () => {
    const test = `
    import cookie from 'cookie'
  
    export default async (req, res) => {
      if (req.method === 'POST') {
        const { email, password } = req.body
    
        const body = JSON.stringify({
          email,
          password,
        })
    
        try {
          const apiRes = await fetch('＄{ process.env.NEXT_PUBLIC_API_URL }/api/login / ', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: body,
          })
    
          const data = await apiRes.json()
    
          if (apiRes.status === 200) {
            res.setHeader('Set-Cookie', [
              cookie.serialize('access', data.access, {
                httpOnly: false,
                secure: true,
                sameSite: 'Lax',
                path: '/',
                maxAge: 60 * 60, // 1時間
              }),
              cookie.serialize('refresh', data.refresh, {
                httpOnly: false,
                secure: true,
                sameSite: 'Lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 3, // 3日
              }),
            ])
    
            return res.status(200).json({
              success: 'ログインに成功しました',
            })
          } else {
            return res.status(apiRes.status).json({
              error: 'ログインに失敗しました',
            })
          }
        } catch (err) {
          return res.status(500).json({
            error: 'ログインに失敗しました',
          })
        }
      } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: 'Method ＄{ req.method } now allowed' })
      }
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14175 = () => {
    const test = `
    import {
      // ユーザー登録
      REGISTER_SUCCESS,
      REGISTER_FAIL,
    
      // ログイン
      LOGIN_SUCCESS, // 追加
      LOGIN_FAIL, // 追加
    
      // 読み込み中
      SET_AUTH_LOADING,
      REMOVE_AUTH_LOADING,
    } from '../actions/types'
    
    const initialState = {
      user: null,
      isAuthenticated: null,
      loading: false,
    }
    
    const authReducer = (state = initialState, action) => {
      const { type, payload } = action
    
      switch (type) {
        // ユーザー登録
        case REGISTER_SUCCESS:
          return {
            ...state,
          }
        case REGISTER_FAIL:
          return {
            ...state,
          }
    
        // ↓追加
        // ログイン
        case LOGIN_SUCCESS:
          return {
            ...state,
            isAuthenticated: true,
          }
        case LOGIN_FAIL:
          return {
            ...state,
            isAuthenticated: false,
          }
        // ↑追加
    
        // 読み込み中
        case SET_AUTH_LOADING:
          return {
            ...state,
            loading: true,
          }
        case REMOVE_AUTH_LOADING:
          return {
            ...state,
            loading: false,
          }
        default:
          return state
      }
    }
    
    export default authReducer
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14181 = () => {
    const test = `
    // ユーザー情報取得
    export const USER_SUCCESS = 'USER_SUCCESS'
    export const USER_FAIL = 'USER_FAIL'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14182 = () => {
    const test = `
    import {
      ...
    
      // ユーザー情報取得
      USER_SUCCESS, // 追加
      USER_FAIL, // 追加
    
      ...
    } from './types'
    
    // ↓追加
    // ユーザー情報取得
    export const user = () => async (dispatch) => {
      dispatch({
        type: SET_AUTH_LOADING,
      })
    
      try {
        const res = await fetch('/api/account/user', {
          method: 'GET',
        })
    
        const data = await res.json()
    
        if (res.status === 200) {
          dispatch({
            type: USER_SUCCESS,
            payload: data,
          })
        } else {
          dispatch({
            type: USER_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: USER_FAIL,
        })
      }
    
      dispatch({
        type: REMOVE_AUTH_LOADING,
      })
    }
    
    // ↑追加
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14183 = () => {
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
    
        try {
          const apiRes = await fetch('＄{ process.env.NEXT_PUBLIC_API_URL }/api/auth / user / ', {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ＄{ access } ',
            },
          })
          const data = await apiRes.json()
    
          if (apiRes.status === 200) {
            return res.status(200).json({
              user: data.user,
            })
          } else {
            return res.status(apiRes.status).json({
              error: 'ユーザー情報取得に失敗しました',
            })
          }
        } catch (err) {
          return res.status(500).json({
            error: 'ユーザー情報取得に失敗しました',
          })
        }
      } else {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({
          error: 'Method ＄{ req.method } not allowed',
        })
      }
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial14184 = () => {
    const test = `
  import {
    ...
  
    // ユーザー情報取得
    USER_SUCCESS, // 追加
    USER_FAIL, // 追加
  
    ...
  } from '../actions/types'
  
  const initialState = {
    user: null,
    isAuthenticated: null,
    loading: false,
  }
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      ...
  
      // ↓追加
      // ユーザー情報取得
      case USER_SUCCESS:
        return {
          ...state,
          user: payload.user,
        }
      case USER_FAIL:
        return {
          ...state,
          user: null,
        }
      // ↑追加
  
      ...
    }
  }
  
  export default authReducer
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14191 = () => {
    const test = `
      import { useEffect } from 'react'
      import { useDispatch } from 'react-redux'
      import { refresh } from '../actions/auth'
      import Head from 'next/head'
      import Navigation from './Navigation'
      
      const Layout = (props) => {
        const dispatch = useDispatch()
      
        useEffect(() => {
          const fn = async () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
              await dispatch(refresh())
            }
          }
          fn()
        }, [dispatch])
      
        return (
          <>
            <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navigation />
            <div className="max-w-7xl mx-auto px-8 py-6">{props.children}</div>
          </>
        )
      }
      
      export default Layout
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14192 = () => {
    const test = `
      // リフレッシュトークン
      export const REFRESH_SUCCESS = 'REFRESH_SUCCESS'
      export const REFRESH_FAIL = 'REFRESH_FAIL'
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14193 = () => {
    const test = `
      import {
        ...
      
        // リフレッシュトークン
        REFRESH_SUCCESS, // 追加
        REFRESH_FAIL, // 追加
      
        ...
      } from './types'
      
      // ↓追加
      // リフレッシュトークン
      export const refresh = () => async (dispatch) => {
        dispatch({
          type: SET_AUTH_LOADING,
        })
      
        try {
          const res = await fetch('/api/account/refresh', {
            method: 'GET',
          })
      
          if (res.status === 200) {
            dispatch({
              type: REFRESH_SUCCESS,
            })
            dispatch(verify())
          } else {
            dispatch({
              type: REFRESH_FAIL,
            })
          }
        } catch (err) {
          dispatch({
            type: REFRESH_FAIL,
          })
        }
      
        dispatch({
          type: REMOVE_AUTH_LOADING,
        })
      }
      
      // ↑追加
      
      `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14194 = () => {
    const test = `
    import cookie from 'cookie'
  
    export default async (req, res) => {
      if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '')
        const refresh = cookies.refresh ?? false
    
        if (refresh === false) {
          return res.status(401).json({
            error: 'リフレッシュトークンがありません',
          })
        }
    
        const body = JSON.stringify({
          refresh,
        })
    
        try {
          const apiRes = await fetch('＄{ process.env.NEXT_PUBLIC_API_URL }/api/refresh / ', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: body,
          })
    
          const data = await apiRes.json()
    
          if (apiRes.status === 200) {
            res.setHeader('Set-Cookie', [
              cookie.serialize('access', data.access, {
                httpOnly: false,
                secure: true,
                sameSite: 'Lax',
                path: '/',
                maxAge: 60 * 60, // 1時間
              }),
            ])
    
            return res.status(200).json({
              success: 'リフレッシュトークン取得に成功しました',
            })
          } else {
            return res.status(apiRes.status).json({
              error: 'リフレッシュトークン取得に失敗しました',
            })
          }
        } catch (err) {
          return res.status(500).json({
            error: 'リフレッシュトークン取得に失敗しました',
          })
        }
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


const Tutorial14195 = () => {
    const test = `
    import {
      ...
    
      // リフレッシュトークン
      REFRESH_SUCCESS, // 追加
      REFRESH_FAIL, // 追加
    
      ...
    } from '../actions/types'
    
    const initialState = {
      user: null,
      isAuthenticated: null,
      loading: false,
    }
    
    const authReducer = (state = initialState, action) => {
      const { type, payload } = action
    
      switch (type) {
        ...
    
        // ↓追加
        // リフレッシュトークン
        case REFRESH_SUCCESS:
          return {
            ...state,
          }
        case REFRESH_FAIL:
          return {
            ...state,
            isAuthenticated: false,
            user: null,
          }
        // ↑追加
    
        ...
      }
    }
    
    export default authReducer
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14201= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14202= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14204= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial14211= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14212= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14213= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14214= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14221= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14231= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14241= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14242= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14251= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14261= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14271= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14281= () => {
  const test = `
  NEXT_PUBLIC_API_URL=http://localhost:8000
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
  NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14282= () => {
  const test = `
  NEXT_PUBLIC_API_URL=http://localhost:8000
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
  NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
  NEXT_PUBLIC_STRIPE_PRICE=price_xxxxx
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial14291= () => {
  const test = `
  import { useEffect } from 'react'
  import { useSelector, useDispatch } from 'react-redux'
  import { create_checkout } from '../actions/auth'
  import { useRouter } from 'next/router'
  import Head from 'next/head'
  import Loader from 'react-loader-spinner'
  
  const Checkout = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const checkout_url = useSelector((state) => state.auth.checkout_url)
    const user = useSelector((state) => state.auth.user)
    const loading = useSelector((state) => state.auth.loading)
  
    useEffect(() => {
      if (checkout_url) {
        router.push(checkout_url)
      }
    }, [checkout_url])
  
    const checkoutHandle = async () => {
      if (dispatch && dispatch !== null && dispatch !== undefined && user) {
        await dispatch(create_checkout(user.email))
      }
    }
  
    return (
      <>
        <Head>
          <title>有料会員サイト | お支払い</title>
        </Head>
  
        <div className="border rounded w-1/3 mx-auto text-center shadow-sm">
          <div className="p-4">
            <h2 className="text-2xl font-medium mb-4">有料会員</h2>
            <div className="text-gray-500 mb-4">有効コンテンツをご利用頂けます。</div>
            <div className="mb-4">
              <span className="text-4xl font-extrabold">1000円</span>
              <span className="font-medium">/月</span>
            </div>
  
            <div className="flex justify-center">
              {loading ? (
                <Loader type="Oval" color="#F59E00" width={50} height={50} />
              ) : (
                <div className="button-yellow cursor-pointer" onClick={checkoutHandle}>
                  お支払い
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Checkout
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14292= () => {
  const test = `
  // チェックアウト完了
export const CREATE_CHECKOUT_SUCCESS = 'CREATE_CHECKOUT_SUCCESS'
export const CREATE_CHECKOUT_FAIL = 'CREATE_CHECKOUT_FAIL'
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14293= () => {
  const test = `
  import {
    ...
  
    // チェックアウト完了
    CREATE_CHECKOUT_SUCCESS, // 追加
    CREATE_CHECKOUT_FAIL, // 追加
  
    ...
  } from './types'
  
  // ↓追加
  // チェックアウト
  export const create_checkout = (email) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    })
  
    const body = JSON.stringify({
      email,
    })
  
    try {
      const res = await fetch('/api/account/create_checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      })
  
      const data = await res.json()
  
      if (res.status === 200) {
        dispatch({
          type: CREATE_CHECKOUT_SUCCESS,
          payload: data.url,
        })
        dispatch(verify())
      } else {
        dispatch({
          type: CREATE_CHECKOUT_FAIL,
        })
      }
    } catch (err) {
      dispatch({
        type: CREATE_CHECKOUT_FAIL,
      })
    }
  
    dispatch({
      type: REMOVE_AUTH_LOADING,
    })
  }
  
  // ↑追加
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14294= () => {
const test = `
import Stripe from 'stripe'

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body

    try {
      const params = {
        customer_email: email,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: process.env.NEXT_PUBLIC_STRIPE_PRICE,
            quantity: 1,
          },
        ],
        allow_promotion_codes: true,
        success_url: \`＄{req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}\`,
        cancel_url: \`＄{req.headers.origin}/checkout\`,
      }

      const checkoutSession = await stripe.checkout.sessions.create(params)

      return res.status(200).json(checkoutSession)
    } catch (err) {
      return res.status(500).json({
        error: 'チェックアウトに失敗しました',
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: \`Method ＄{req.method} now allowed\` })
  }
}

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial14295= () => {
const test = `
import {
  ...

  // チェックアウト完了
  CREATE_CHECKOUT_SUCCESS, // 追加
  CREATE_CHECKOUT_FAIL, // 追加

  ...
} from '../actions/types'

const initialState = {
  user: null,
  isAuthenticated: null,
  loading: false,
  checkout_url: null, // 追加
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    ...

    // ↓追加
    // チェックアウト完了
    case CREATE_CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout_url: payload,
      }
    case CREATE_CHECKOUT_FAIL:
      return {
        ...state,
      }
    // ↑追加

    ...
  }
}

export default authReducer

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

// const Tutorial14296= () => {
// const test = `
// success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,

// `
// return (
//     <SyntaxHighlighter language="js" style={syntaxStyle} >
//         {test}
//     </SyntaxHighlighter>
// );
// };

// const Tutorial14301= () => {
//   const test = `
//   import { useEffect } from 'react'
//   import { useSelector, useDispatch } from 'react-redux'
//   import { detail_checkout } from '../actions/auth'
//   import { useRouter } from 'next/router'
//   import Head from 'next/head'
  
//   const Result = () => {
//     const dispatch = useDispatch()
//     const router = useRouter()
//     const checkout_detail = useSelector((state) => state.auth.checkout_detail)
//     const session_id = router.query.session_id
  
//     useEffect(() => {
//       const fn = async () => {
//         if (dispatch && dispatch !== null && dispatch !== undefined) {
//           await dispatch(detail_checkout(session_id))
//         }
//       }
//       if (session_id) {
//         fn()
//       }
//     }, [session_id])
  
//     return (
//       <>
//         <Head>
//           <title>有料会員サイト | お支払い完了</title>
//         </Head>
  
//         {session_id && (
//           <div className="text-center">
//             <div className="text-2xl mb-3">{checkout_detail && checkout_detail.customer.name}様</div>
//             <div className="text-3xl">お支払いが完了しました</div>
//           </div>
//         )}
//       </>
//     )
//   }
  
//   export default Result
  
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

const Tutorial14296= () => {
  const test = `
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

// const Tutorial14302= () => {
//   const test = `
//   // チェックアウト詳細
//   export const DETAIL_CHECKOUT_SUCCESS = 'DETAIL_CHECKOUT_SUCCESS'
//   export const DETAIL_CHECKOUT_FAIL = 'DETAIL_CHECKOUT_FAIL'
  
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

// const Tutorial14303= () => {
//   const test = `
//   import {
//     ...
  
//     // チェックアウト詳細
//     DETAIL_CHECKOUT_SUCCESS, // 追加
//     DETAIL_CHECKOUT_FAIL, // 追加
  
//     ...
//   } from './types'
  
//   // ↓追加
//   // チェックアウト詳細
//   export const detail_checkout = (session_id) => async (dispatch) => {
//     dispatch({
//       type: SET_AUTH_LOADING,
//     })
  
//     const body = JSON.stringify({
//       session_id,
//     })
  
//     try {
//       const res = await fetch('/api/account/detail_checkout', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body,
//       })
  
//       const data = await res.json()
  
//       if (res.status === 200) {
//         dispatch({
//           type: DETAIL_CHECKOUT_SUCCESS,
//           payload: data,
//         })
//       } else {
//         dispatch({
//           type: DETAIL_CHECKOUT_FAIL,
//         })
//       }
//     } catch (err) {
//       dispatch({
//         type: DETAIL_CHECKOUT_FAIL,
//       })
//     }
  
//     dispatch({
//       type: REMOVE_AUTH_LOADING,
//     })
//   }
  
//   // ↑追加
  
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

// const Tutorial14304= () => {
// const test = `
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27',
// })

// export default async (req, res) => {
//   if (req.method === 'POST') {
//     const { session_id } = req.body

//     if (!session_id.startsWith('cs_')) {
//       return res.status(401).json({
//         error: 'セッションIDがありません',
//       })
//     }

//     try {
//       const checkout_session = await stripe.checkout.sessions.retrieve(session_id, {
//         expand: ['customer'],
//       })

//       return res.status(200).json(checkout_session)
//     } catch (err) {
//       return res.status(500).json({
//         error: 'チェックアウト詳細取得に失敗しました',
//       })
//     }
//   } else {
//     res.setHeader('Allow', ['POST'])
//     return res.status(405).json({ error: `Method ${req.method} now allowed` })
//   }
// }

// `
// return (
//     <SyntaxHighlighter language="js" style={syntaxStyle} >
//         {test}
//     </SyntaxHighlighter>
// );
// };


// const Tutorial14304= () => {
// const test = `
// import {
//   ...

//   // チェックアウト詳細
//   DETAIL_CHECKOUT_SUCCESS, // 追加
//   DETAIL_CHECKOUT_FAIL, // 追加

//   ...
// } from '../actions/types'

// const initialState = {
//   user: null,
//   isAuthenticated: null,
//   loading: false,
//   checkout_url: null,
//   checkout_detail: null, // 追加
// }

// const authReducer = (state = initialState, action) => {
//   const { type, payload } = action

//   switch (type) {
//     ...

//     // ↓追加
//     // チェックアウト詳細
//     case DETAIL_CHECKOUT_SUCCESS:
//       return {
//         ...state,
//         checkout_detail: payload,
//       }
//     case DETAIL_CHECKOUT_FAIL:
//       return {
//         ...state,
//       }
//     // ↑追加

//     ...
//   }
// }

// export default authReducer

// `
// return (
//     <SyntaxHighlighter language="js" style={syntaxStyle} >
//         {test}
//     </SyntaxHighlighter>
// );
// };

// const Tutorial14301= () => {
//   const test = `
//   import { buffer } from 'micro'
//   import Cors from 'micro-cors'
//   import Stripe from 'stripe'
  
//   const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
//     apiVersion: '2020-08-27',
//   })
  
//   export const config = {
//     api: {
//       bodyParser: false,
//     },
//   }
  
//   const cors = Cors({
//     allowMethods: ['POST', 'HEAD'],
//   })
  
//   const handleUpdate = async (email, customer_id, created) => {
//     const body = JSON.stringify({
//       email,
//       customer_id,
//       created,
//     })
  
//     try {
//       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/subscription/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: body,
//       })
//     } catch (err) {
//       console.log(err)
//     }
//   }
  
//   const webhookHandler = async (req, res) => {
//     if (req.method === 'POST') {
//       const buf = await buffer(req)
//       const sig = req.headers['stripe-signature']
//       const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET
//       let event
  
//       try {
//         event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
//       } catch (err) {
//         res.status(400).send(`Webhook Error: ${err.message}`)
//         return
//       }
  
//       try {
//         // invoice.payment_succeededイベントを受信
//         if (event.type === 'invoice.payment_succeeded') {
//           const data = event.data.object
//           const customer_id = data.customer
//           const email = data.customer_email
//           const created = data.created
//           await handleUpdate(email, customer_id, created)
//         }
//       } catch (error) {
//         return res.status(400).send('Webhookでエラーが発生しました')
//       }
  
//       res.json({ received: true })
//     } else {
//       res.setHeader('Allow', 'POST')
//       res.status(405).end('Method Not Allowed')
//     }
//   }
  
//   export default cors(webhookHandler)
  
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

// const Tutorial14302= () => {
//   const test = `
//   $ stripe login
  
//   `
//   return (
//       <SyntaxHighlighter language="js" style={syntaxStyle} >
//           {test}
//       </SyntaxHighlighter>
//   );
// };

const Tutorial14203= () => {
  const test = `
  $ stripe listen --forward-to localhost:3000/api/webhooks
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14301= () => {
  const test = `

  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14302= () => {
  const test = `

  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14303= () => {
  const test = `

  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14304= () => {
const test = `
⢿ Checking for new versions... A newer version of the Stripe CLI is available, please update to: v1.7.6
⣟ Getting ready... > Ready! Your webhook signing secret is whsec_xxxxx (^C to quit)

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial14305= () => {
const test = `
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE=price_xxxxx
NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET=whsec_xxxxx

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial14306= () => {
const test = `
Ctrl + C
npm run dev

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial14307= () => {
const test = `
$ stripe trigger payment_intent.succeeded

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial14308= () => {
const test = `
⢿ Checking for new versions... A newer version of the Stripe CLI is available, please update to: v1.7.6
⣟ Getting ready... > Ready! Your webhook signing secret is whsec_xxxxx (^C to quit)
2021-11-09 18:00:14   --> charge.succeeded [evt_3JtqBaGVeidGUX3h2cLMv3Pm]
2021-11-09 18:00:14   --> payment_intent.succeeded [evt_3JtqBaGVeidGUX3h29EOLphe]
2021-11-09 18:00:14   --> payment_intent.created [evt_3JtqBaGVeidGUX3h2OFMKOcP]
2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h2cLMv3Pm]
2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h29EOLphe]
2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h2OFMKOcP]

`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};

const Tutorial14321= () => {
  const test = `
  import { useState, useEffect } from 'react'
  import { useSelector } from 'react-redux'
  import { format } from 'date-fns'
  import Head from 'next/head'
  import Link from 'next/link'
  
  const Index = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user)
    const [member, setMember] = useState(false)
  
    useEffect(() => {
      const today = new Date()
      if (user && new Date(user.current_period_end) > today) {
        setMember(true)
      }
    }, [user])
  
    return (
      <>
        <Head>
          <title>有料会員サイト</title>
        </Head>
  
        <div>
          {isAuthenticated && user ? (
            <div>
              <div>ようこそ、{user.name}さん</div>
              {member ? (
                <div>
                  あなたは、{format(new Date(user.current_period_end), 'yyy年MM月dd日')}
                  まで有料会員です。
                </div>
              ) : (
                <div>あなたは、無料会員です。</div>
              )}
              <div className="my-4 border-4 border-dashed border-gray-200 rounded">
                <div className="flex justify-center items-center h-64">こちらは無料コンテンツ！</div>
              </div>
              {member ? (
                <div className="my-4 border-4 border-dashed border-gray-200 rounded">
                  <div className="flex justify-center items-center h-64">
                    こちらは有料コンテンツ！
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4">
                    有料コンテンツを利用するには、有料会員の登録をお願いします。
                  </div>
                  <Link href="/checkout">
                    <a className="button-yellow">こちらから</a>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-2xl">
              フルスタックチャンネルによる有料会員サイトのチュートリアルです。
            </div>
          )}
        </div>
      </>
    )
  }
  
  export default Index
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial14331= () => {
  const test = `
  $ npm run dev
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14332= () => {
  const test = `
  $ stripe listen --forward-to localhost:3000/api/webhooks
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14333= () => {
  const test = `
 
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};
