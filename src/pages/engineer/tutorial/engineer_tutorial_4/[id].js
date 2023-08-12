import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_4 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_4>
                        <h3>カスタムユーザー構築 </h3>
                        <p>カスタムユーザーを構築します。</p>
                        <p>デフォルトでは、ユーザー名でログインすることになりますが、メールアドレスでログインした方が都合がいい場合があります。。 </p>
                        <p>その場合、Userモデルをカスタマイズして、メールアドレスでログインする認証に変更します。 </p>
                        <p>認証で便利なallauthパッケージを利用します。 </p>
                        <p>カスタムユーザーを構築したプロジェクトは、他のアプリケーションのベースになりますので、すぐに使えるようにバックアップしておくとよいです。</p>
                        <p>目標</p>

                        <p>下記を学習していきます。</p>

                        <li>メールアドレスでログインする方法</li>
                        <li>サインアップ時に名前などを入力する方法</li>
                        <li>ログイン限定画面の作り方</li>
                        <li>プロフィール画面の作り方</li>
                        <li>プロフィール編集画面の作り方 </li>
                        <li> ユーザー情報に所属を追加する方法 </li>

                        <p>機能</p>
                        <li>サインアップ </li>
                        <li>メールアドレスでログイン </li>
                        <li>ログアウト </li>
                        <li>プロフィール </li>
                        <li>プロフィール編集 </li>

                        <p>エラーが発生した場合。</p>
                        <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>


                    </Layout_tutorial_4>
                ) : id == 2 ? (
                    <Layout_tutorial_4>
                        <h3>準備 </h3>
                        <p>開発の準備をします。</p>
                        <p>GitHub準備 </p>
                        <p>GitHubのリポジトリを作成します。 </p>
                        <p>.gitignore作成</p>
                        <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。</p>
                        <p className='text-red-400'>.gitignore</p>
                        <Tutorial421 />
                        <h3>仮想環境の作成</h3>
                        <p>myvenvという名前で仮想環境を構築します。</p>
                        <Tutorial422 />
                        <h3>仮想環境の実行</h3>
                        <p>sourceコマンドで仮想環境を実行します。</p>
                        <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                        <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                        <p>これがあると、仮想環境に入っていることになります。</p>

                        <Tutorial423 />
                        <h3>requirements.txt作成</h3>
                        <p>開発で必要なパッケージを記載します。</p>
                        <Tutorial424 />
                        <p>パッケージのインストール</p>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                        <Tutorial425 />
                        <p>これで、Djangoで開発する準備ができました。</p>
                    </Layout_tutorial_4>
                ) : id == 3 ? (
                    <Layout_tutorial_4>
                        <h3>プロジェクト作成 </h3>
                        <p>プロジェクトを作成します。</p>
                        <Tutorial431 />
                        <p>環境設定変更 </p>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。 </p>
                        <Tutorial432 />
                        <h3>データベースのセットアップ </h3>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。</p>
                        <Tutorial433 />
                        <h3>Webサーバーを起動する </h3>
                        <p>Djangoが起動できるか確認しましょう。</p>
                        <Tutorial434 />
                        <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>

                    </Layout_tutorial_4>
                ) : id == 4 ? (
                    <Layout_tutorial_4>
                        <h3>アプリケーション作成 </h3>
                        <p>アプリケーションを作成してきます。</p>
                        <p>今回は、メインコンテンツのappとアカウント用のaccountsを作成します。 </p>
                        <Tutorial441 />
                        <h3>アプリケーションを使えるように設定 </h3>
                        <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                        <p>allauthパッケージとwidget_tweaksパッケージも同時に設定します。</p>
                        <div class="flex flex-nowrap">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                <a href="#">
                                    <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Djangoカスタムユーザー</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/04/29/django%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%a0%e3%83%a6%e3%83%bc%e3%82%b6%e3%83%bc/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">django-widget-tweaksとは？</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/07/10/django-widget-tweaks%e3%81%a8%e3%81%af%ef%bc%9f/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        記事を読む
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className='text-red-400'>mysite/settings.py</p>
                        <Tutorial442 />

                    </Layout_tutorial_4>
                ) : id == 5 ? (
                    <Layout_tutorial_4>
                        <h3>メインコンテンツ </h3>
                        <p>メインコンテンツを作成していきます。</p>
                        <p>このチュートリアルは、認証メインのチュートリアルなので、メインコンテンツは簡易的なものにします。 </p>
                        <h4>プロジェクトURL </h4>
                        <p>プロジェクトURLにappアプリケーションを指定します。 </p>
                        <p className='text-red-400'>mysite/urls.py</p>
                        <Tutorial451 />
                        <h4>アプリケーションURL</h4>
                        <p>アプリケーションURLにビューを指定します。</p>
                        <p>今回は、IndexViewにします。</p>
                        <p>逆引き名はindexです。</p>
                        <p className='text-red-400'>app/urls.py</p>
                        <Tutorial452 />
                        <h4>ビュー</h4>
                        <p>TemplateViewを使用して、固定ページにします。</p>
                        <p>テンプレート名は、app/index.htmlです。</p>
                        <p className='text-red-400'>app/views.py</p>
                        <Tutorial453 />
                        <h4>テンプレート</h4>
                        <p>ベースとなるテンプレートを作成します。</p>
                        <p>簡単にレイアウトをするため、Bootstrapを導入しています。</p>
                        <p className='text-red-400'>app/templates/app/base.html</p>
                        <Tutorial454 />
                        <p>index.htmlの中は文字だけを記載しておきます。</p>
                        <p className='text-red-400'>app/templates/app/index.html</p>
                        <Tutorial455 />
                        <h4>CSS</h4>
                        <p>CSSも導入しておきます。</p>
                        <p className='text-red-400'>app/static/css/style.css</p>
                        <Tutorial456 />
                        <p>確認</p>
                        <p>メインコンテンツはこのような画面になります。</p>
                        <p>http://127.0.0.1:8000/</p>
                    </Layout_tutorial_4>
                ) : id == 6 ? (
                    <Layout_tutorial_4>
                        <h3>プロフィール画面 </h3>
                        <p>ログイン者のプロフィール情報を記載する画面を作成します。</p>
                        <p>Webアプリケーションには必須の画面になります。 </p>
                        <p>プロジェクトURL </p>
                        <p>プロジェクトURLにaccountsアプリケーションを指定します。 </p>
                        <p className='text-red-400'>mysite/urls.py</p>
                        <Tutorial461 />
                        <h4>アプリケーションURL</h4>
                        <p>アプリケーションURLにProfileViewを指定します。</p>
                        <p>逆引き名はprofileとします。</p>
                        <p className='text-red-400'>accounts/urls.py</p>
                        <Tutorial462 />
                        <h4>ビュー</h4>
                        <p>自由度の高いget関数を使用して作成します。</p>
                        <p>profile.htmlをレンダリングするのみとしておきます。</p>
                        <p className='text-red-400'>accounts/urls.py</p>
                        <Tutorial463 />
                        <div class="flex flex-nowrap">
                            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                <a href="#">
                                    <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django renderメソッド</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/04/24/django-render%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        記事を読む
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h4>テンプレート</h4>
                        <p>プロフィール画面のテンプレートを作成します。</p>
                        <Tutorial464 />
                        <h4>ナビゲーション</h4>
                        <p>ナビゲーションにプロフィールを追加します。</p>
                        <Tutorial465 />
                        <h4>CSS</h4>
                        <p>CSSでプロフィール画面をレイアウトします。</p>
                        <Tutorial466 />
                        <p>確認</p>
                        <p>プロフィール画面が表示されます。</p>
                        <p>http://127.0.0.1:8000/accounts/profile/</p>
                    </Layout_tutorial_4>
                ) : id == 7 ? (
                    <Layout_tutorial_4>
                        <h3>カスタムユーザー</h3>
                        <p>このチュートリアルのメインであるカスタムユーザーを作成します。</p>
                        <p>概要 </p>
                        <p>デフォルトのユーザークラスは、AbstractUserクラスを継承しています。 </p>
                        <p>このクラスは、ユーザー名とメールアドレスをデフォルトで作成する仕組みになっていて、UserManagerクラスの_create_user関数で作成しています。 </p>
                        <p>そのため、管理ユーザーを作成するときに、下記が聞かれます。</p>
                        <li>ユーザー名</li>
                        <li>  メールアドレス</li>
                        <li>  パスワード</li>
                        <p>変更点</p>
                        <p>今回は、ユーザー名を使用せずに、メールアドレスとパスワードのみの認証に変更します。</p>
                        <li> メールアドレス </li>
                        <li>  パスワード</li>
                        <p>このために、UserManagerクラスをオーバーライドする必要があります。</p>
                        <p>AbstractBaseUserクラスを継承したクラスを作成し、ユーザーに必要な情報も加えていきます。</p>
                        <li>名前(姓)</li>
                        <li>  名前(名)</li>
                        <li>  所属</li>
                        <li>  入会日 </li>
                        <p>モデルカスタマイズ</p>
                        <p>ユーザーモデルのカスタマイズには、下記の方法があります。</p>
                        AbstractUserクラスを継承する方法
                        AbstractBaseUserクラスを継承する方法
                        <p>AbstractUser</p>
                        <p>AbstractUserクラスを使用してカスタマイズをすると</p>
                        <li>
                            簡単にカスタマイズ
                            コーディングが少なくて済む
                            柔軟性がない
                        </li>
                        <p>AbstractBaseUser</p>
                        <p>AbstractBaseUserクラスを使用してカスタマイズすると</p>
                        <li>
                            自由にカスタマイズ
                            コーディング量は多い
                        </li>
                        <p>自由にカスタマイズできるので、AbstractBaseUserクラスを使用することをおすすめします。</p>
                        <p>モデル</p>
                        <p>ユーザーモデルを追加します。</p>
                        <Tutorial471 />
                        <p>コード解説</p>
                        <p>_create_user関数でメールアドレスで認証するように変更しています。</p>
                        <Tutorial472 />
                        <p>AbstractBaseUserクラスを継承し、新たにCustomUserクラスを作成します。</p>
                        <p>フィールドにユーザー情報として必要な情報を追加しておきます。</p>
                        <p>email、first_name、last_nameはデフォルトでありますが、その他に、departmentとcreatedも追加します。</p>
                        <p>名前と、所属は、あとで作成するプロフィール編集画面で変更できるようにします。</p>
                        <Tutorial473 />
                        <p>USERNAME_FIELDにemailフィールドを利用するようにオーバーライドしています。</p>
                        <Tutorial474 />
                        <p>管理画面設定</p>
                        <p>管理画面でカスタムユーザーを編集できるように設定します。</p>
                        <Tutorial475 />
                        <p>設定</p>
                        <p>カスタムユーザーを設定した場合は、AUTH_USER_MODELを指定する必要があります。</p>
                        <p>ACCOUNT_AUTHENTICATION_METHODをemailで指定します。</p>
                        <Tutorial476 />
                        <p>マイグレーション実行</p>
                        <p>モデルを追加したので、マイグレーションが必要になります。</p>
                        <Tutorial477 />
                        <p>管理ユーザー作成</p>
                        <p>管理ユーザーを作成します。</p>
                        <p>カスタムユーザーを作成したので、メールアドレスとパスワードが聞かれます。</p>
                        <Tutorial478 />
                        <p>メールアドレス、パスワードを入力します。</p>
                        <p>ユーザー名の登録がなくなりました。</p>
                        <p>パスワード</p>
                        <p>パスワードは見えないので、間違えずに入力して下さい。</p>
                        <p>管理画面でデータ入力</p>
                        <p>http://127.0.0.1:8000/admin/</p>
                        <p>管理ユーザーでログインすると、姓と名、所属が空欄になっています。</p>
                        <p>プロフィール画面で確認したいので、入力しておきましょう。</p>
                    </Layout_tutorial_4>
                ) : id == 8 ? (
                    <Layout_tutorial_4>
                        <p>プロフィール画面完成 </p>
                        <p>モデルが完成したので、ユーザー情報をプロフィール画面に表示させます。</p>
                        <p>ビュー</p>
                        <p>ビューでデータベースの情報をテンプレートに伝えます。 </p>
                        <Tutorial481 />
                        <p>コード解説</p>
                        <p>モデルで作成したCustomUserクラスからログイン中のユーザー情報を取得します。</p>
                        <Tutorial482 />
                        <p>テンプレート</p>
                        <p>プロフィール画面にユーザー情報を表示させます。</p>
                        <Tutorial483 />
                        <p>確認 </p>
                        <p>ユーザー情報がプロフィール画面に表示されました。</p>
                        <p>http://127.0.0.1:8000/accounts/profile/</p>

                    </Layout_tutorial_4>
                ) : id == 9 ? (
                    <Layout_tutorial_4>
                        <p>プロフィール編集画面</p>
                        <p>プロフィール情報を編集するための画面を作成します。</p>
                        <p>アプリケーションURL </p>
                        <p>編集画面用のURLを作成します。</p>
                        <Tutorial491 />
                        <p>フォーム </p>
                        <p>プロフィール編集用のフォームを作成します。</p>
                        <p>名前と所属を編集したいので、フォームにフィールドを追加します。</p>
                        <Tutorial492 />
                        <p>ビュー </p>
                        <p>プロフィール編集用のビューを作成します。</p>
                        <Tutorial493 />
                        <p>コード解説 </p>
                        <p>get関数は最初に呼ばれます。</p>
                        <p>テンプレートでフォームを表示したいので、ProfileFormクラスを呼び出します。</p>
                        <p>フォームに初期値を与えるために、initialにデータベースの情報を設定します。</p>
                        <p>こうすることで、フォームに初期値を設定することができます。</p>
                        <Tutorial494 />
                        <p>post関数は、フォーム画面で登録ボタンを押した時にコールされる関数です。 </p>
                        <p>formの内容をバリデーションして、問題がなければ、データベースの値をフォームからのデータに置き換えます。</p>
                        <p>save関数をコールすることで保存となります。</p>
                        <p>フォームに初期値を与えるために、initialにデータベースの情報を設定します。</p>
                        <p>保存後は、プロフィール画面にリダイレクトします。</p>
                        <p>バリデーションに問題があれば、プロフィール画面に遷移するようにしています。</p>
                        <Tutorial495 />
                        <p>テンプレート </p>
                        <p>プロフィール編集画面のテンプレートを作成します。</p>
                        <Tutorial496 />
                        <p>コード解説 </p>
                        <p>widget_tweaksはフォームをレンダリングする時に、CSSクラスやHTML属性を変更できるモジュールです。</p>
                        <p>フォームを作る時はほぼ必須のモジュールになります。</p>
                        <Tutorial497 />
                        <p>登録するボタンを押した時に、ビューのpost関数がコールされます。</p>
                        <Tutorial498 />
                        <p>フォームの中に必ずcsrf_tokenを記載してください。</p>
                        <p>これは、フォームでデータが改ざんされることを防ぐための記載になります。</p>
                        <Tutorial499 />
                        <p>フォームにクラスとplaceholderも追加しています。</p>
                        <p>こうすることで、CSSでカスタマイズしやすくなります。</p>
                        <Tutorial4910 />
                        <p>リンク先追加</p>
                        <p>プロフィール画面の編集するボタンのリンク先をプロフィール編集画面にします。</p>
                        <Tutorial4911 />
                        <p>CSS</p>
                        <p>CSSでフォーム周りの見た目を変更します。</p>
                        <Tutorial4912 />
                        <p>確認</p>
                        <p>プロフィール編集画面でデータを編集してみてください。</p>
                        <p>http://127.0.0.1:8000/accounts/profile/edit/</p>
                    </Layout_tutorial_4>
                ) : id == 10 ? (
                    <Layout_tutorial_4>
                        <h3>ログイン画面 </h3>
                        <p>ログイン画面を作成します。</p>
                        <p>プロジェクトURL </p>
                        <p>プロジェクトURLにallauthのURLを追加します。 </p>
                        <p className='text-red-400'>mysite/urls.py</p>
                        <Tutorial4101 />
                        <p>アプリケーションURL </p>
                        <p>アプリケーションURLにログインのURLを追加します。</p>
                        <p>ビューはLoginViewで、逆引き名は、account_loginとします。</p>
                        <p className='text-red-400'>accounts/urls.py</p>
                        <Tutorial4102 />
                        <p>ビュー</p>
                        <p>ログイン用のビューを作成します。</p>
                        <p className='text-red-400'>accounts/views.py</p>
                        <Tutorial4103 />
                        <p>コード解説</p>
                        <p>allauthのLoginViewクラスを継承させて、使用するテンプレートを上書きします。</p>
                        <p>デフォルトでもlogin.htmlとなっていますが、すぐに拡張できるように、ビューを作成しておきます。</p>
                        <Tutorial4104 />
                        <p>テンプレート</p>
                        <p>ログイン用のテンプレートを作成します。</p>
                        <Tutorial4105 />
                        <p>コード解説</p>
                        <p>プロフィール編集画面と同様に、widget_tweaksを使用してフォームにオリジナルCSSクラスを追加します。</p>
                        <Tutorial4106 />
                        <p>CSS</p>
                        <p>ログイン画面をいい感じに装飾します。</p>
                        <Tutorial4107 />
                        <p>ナビゲーション</p>
                        <p>ナビゲーションにログインを追加します。</p>
                        <Tutorial4107 />
                        <p>コード解説</p>
                        <p>user.is_authenticatedを使用して、ログイン状態かログアウト状態かを判定します。</p>
                        <p>ログイン状態であれば、プロフィールナビゲーションを表示し、ログアウト状態であればログインナビゲーションを表示しています。</p>
                        <Tutorial4108 />
                        <p>確認</p>
                        <p>ログイン画面を表示して、管理ユーザーでログインできるか試してみて下さい。</p>
                        <p>http://127.0.0.1:8000/accounts/login/</p>
                    </Layout_tutorial_4>
                ) : id == 11 ? (
                    <Layout_tutorial_4>

                        <p>ログアウト画面</p>

                        <p>ログアウト画面を作成します。</p>
                        <p>アプリケーションURL</p>
                        <p>ログアウトのURLを追加します。</p>
                        <p>ビューはLogoutViewで逆引き名はaccount_logoutにします。 </p>
                        <Tutorial4111 />
                        <p>ビュー</p>
                        <p>ログアウト用のビューを作成します。 </p>
                        <Tutorial4112 />
                        <p>コード解説 </p>
                        <p>allauthのLogoutViewクラスを継承して、設定を上書きします。 </p>
                        <Tutorial4113 />
                        <p>ログアウトボタンを押した時の動作です。</p>
                        <p>ログアウトボタンを押したらpost関数が実行されます。</p>
                        <p>ログイン状態であれば、self.logout()でログアウトすることができます。</p>
                        <p>そして、ログアウトしたら、リダイレクトでトップページに遷移します。</p>
                        <Tutorial4114 />
                        <p>テンプレート</p>
                        <p>ログアウト画面のテンプレートを作成します。</p>
                        <Tutorial4115 />
                        <p>コード解説</p>
                        <p>ログアウトは簡単で、フォームの中にログアウトボタンを設定するだけです。</p>
                        <p>methodはpostに設定しているので、ボタンを押したらpost関数がコールされます。</p>
                        <Tutorial4116 />
                        <p>ナビゲーション</p>
                        <p>ナビゲーションにログアウトを追加します。</p>
                        <Tutorial4117 />
                        <p>コード解説</p>
                        <p>ログイン状態での表示になるので、｛% if user.is_authenticated %｝の中に入れます。</p>

                        <p>確認</p>
                        <p>ログアウト画面を表示して、ログアウトできるか試してみて下さい。</p>
                        <p>http://127.0.0.1:8000/accounts/logout/</p>
                    </Layout_tutorial_4>
                ) : id == 12 ? (
                    <Layout_tutorial_4>
                        <p>サインアップ画面 </p>
                        <p>サインアップ画面を作成します。</p>
                        <p>アプリケーションURL </p>
                        <p>サインアップのURLを追加します。 </p>
                        <Tutorial4121 />
                        <p>フォーム</p>
                        <p>サインアップ用のフォームを作成します。</p>
                        <Tutorial4122 />
                        <p>コード解説</p>
                        <p>allauthのSignupFormクラスを継承し、上書きしていきます。</p>
                        <Tutorial4123 />
                        <p>サインアップ時に必要なフォームを設定します。</p>
                        <p>メールアドレスとパスワードは、allauthですでに設定してあるので必要ありません。</p>
                        <p>ここでは名前のみ追加しておきます。</p>
                        <p>もし所属などサインアップ時に入力してほしい場合は、ここに追加します。</p>
                        <Tutorial4124 />
                        <p>サインアップボタンが押された時の動作です。</p>
                        <p>save関数が実行されます。</p>
                        <p>self.cleaned_dataでフォームに記載された内容を取得し、save関数でデータベースに保存します。</p>
                        <Tutorial4125 />
                        <p>ビュー</p>
                        <p>サインアップ用のビューを作成します。</p>
                        <Tutorial4126 />
                        <p>コード解説</p>
                        <p>allauthのSignupViewクラスを継承して、上書きします。</p>
                        <Tutorial4127 />
                        <p>form_class変数に先ほど作成したSignupUserFormクラスを設定します。</p>
                        <p>こうすることで、サインアップにオリジナルのフォームを使用することができます。</p>
                        <Tutorial4128 />
                        <p>テンプレート</p>
                        <p>サインアップ用のテンプレートを作成します</p>
                        <Tutorial4129 />
                        <p>コード解説</p>
                        <p>widget_tweaksを使用して、フォームにオリジナルCSSを追加します。</p>
                        <p>今回は、サインアップ時に名前を入力するようにしたいので、テンプレートに名前のフォームも追加します。</p>
                        <Tutorial41210 />
                        <p>サインアップ時にpassword1と確認用のpassword2は必須になりますので、追加します。</p>
                        <Tutorial41211 />
                        <p>ナビゲーション</p>
                        <p>ナビゲーションにサインアップを追加します。</p>
                        <Tutorial41212 />
                        <p>コード解説</p>
                        <p>サインアップはログアウト状態の時に表示させるようにします。</p>
                        <p>確認</p>
                        <p>サインアップ画面を表示して、サインアップできるか試してみて下さい。</p>
                        <p>http://127.0.0.1:8000/accounts/signup/</p>
                    </Layout_tutorial_4>
                ) : id == 13 ? (
                    <Layout_tutorial_4>
                        <h3>リダイレクト </h3>
                        <p>ログインしていない状態で、メインコンテンツやプロフィール画面を表示させたくありません。</p>
                        <p>その場合は、LoginRequiredMixinクラスを継承させることによって、ログインしていない状態でアクセスした場合にリダイレクトするように設定できます。 </p>
                        <p>IndexView</p>
                        <p>ログアウト状態でメインコンテンツに遷移した場合は、ログイン画面に遷移するように設定します。 </p>
                        <p className='text-red-400'>app/views.py</p>
                        <Tutorial4131 />
                        <p>コード解説</p>
                        <p>LoginRequiredMixinを継承させます</p>
                        <Tutorial4132 />
                        <p>login_url変数にログイン画面のURLを指定すると、リダイレクトしてくれます。</p>
                        <Tutorial4133 />
                        <p>ProfileView</p>
                        <p>プロフィール画面も同様にLoginRequiredMixinクラスを継承させます。</p>
                        <Tutorial4134 />
                        <p>確認</p>
                        <p>ログアウト状態でメインコンテンツを表示してみて下さい。</p>
                        <p>ログイン画面に遷移します。</p>
                        <p>完成</p>
                        <p>これでカスタムユーザーのチュートリアルは完成です。</p>
                        <p>全機能が動作するか試してみて下さい。</p>
                        <p>後は、メインコンテンツを充実させれば、アプリケーションの完成です。</p>
                    </Layout_tutorial_4>
                ) : id == 14 ? (
                    <Layout_tutorial_4>
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>カスタムユーザーのチュートリアルはここまでで終わりとなります。 </p>
                        <p>カスタムユーザーの作り方</p>
                        <p>allauthを使用したカスタムユーザーの作り方が理解出来ましたでしょうか！？ </p>
                        <p>ユーザーに誕生日や住所など追加したり、パスワード変更、パスワード再設定、退会ページなど作成してみてください。</p>
                        <p>allauthを使用しているので、楽に実装することができます。</p>

                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>

                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>

                        <p>allauthはさらにカスタマイズすることができるので、ドキュメントを読んで実装してみましょう。</p>
                        <p>allauthドキュメント</p>
                        <p>ぜひオリジナルのアプリケーションを開発してみてください。</p>

                        <p>allauthはさらにカスタマイズすることができるので、ドキュメントを読んで実装してみましょう。</p>
                    </Layout_tutorial_4>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Tutorial421 = () => {
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


const Tutorial422 = () => {
    const test = `
    $ python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial423 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial424 = () => {
    const test = `
Django~=3.1.4
django-allauth~=0.41.0
django-widget-tweaks~=1.4.8
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial425 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial431 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial432 = () => {
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

const Tutorial433 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial434 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial441 = () => {
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


const Tutorial442 = () => {
    const test = `
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'widget_tweaks', # 追加
        'app', # 追加
        'accounts', # 追加
        'django.contrib.sites', # 追加
        'allauth', # 追加
        'allauth.account', # 追加
        'allauth.socialaccount' # 追加
    ]
    
    SITE_ID = 1
    LOGIN_REDIRECT_URL = '/'
    ACCOUNT_LOGOUT_REDIRECT_URL = '/'
    ACCOUNT_EMAIL_VERIFICATION = 'none'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial451 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('app.urls')),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial452 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial453 = () => {
    const test = `
    from django.views.generic import TemplateView


    class IndexView(TemplateView):
        template_name = "app/index.html"
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial454 = () => {
    const test = `
{% load static %}

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
    <title>カスタム認証チュートリアル</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">ホーム</a>
                </li>
            </ul>
        </div>
    </nav>

    <main>
        <div class="container">
            {% block content %}
            {% endblock %}
        </div>
    </main>

    <footer class="py-2 bg-dark">
        <p class="m-0 text-center text-white">Copyright &copy; Django Startup 2020</p>
    </footer>

    {% block extra_js %}
    {% endblock %}

</body>

</html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial455 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="my-5">
        <h1>Hello World!!</h1>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial456 = () => {
    const test = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #F1F1F1;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial461 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('app.urls')),
        path('accounts/', include('accounts.urls')),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial462 = () => {
    const test = `
    from django.urls import path
from accounts import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view(), name='profile'),
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial463 = () => {
    const test = `
    from django.views import View
from django.shortcuts import render, redirect


class ProfileView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'accounts/profile.html')

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial464 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="card card-profile my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">プロフィール</h5>
            <table class="profile_table mb-4">
                <tbody>
                    <tr>
                        <th class="header">名前</th>
                        <td class="data">xxx</td>
                    </tr>
                    <tr>
                        <th class="header">メールアドレス</th>
                        <td class="data">xxx</td>
                    </tr>
                    <tr>
                        <th class="header">所属</th>
                        <td class="data">xxx</td>
                    </tr>
                    <tr>
                        <th class="header">入会日</th>
                        <td class="data">xxx</td>
                    </tr>
                </tbody>
            </table>
            <div class="button mx-auto">
                <a class="btn btn-lg btn-warning btn-block" href="">編集する</a>
            </div>
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial465 = () => {
    const test = `
    <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">ホーム</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                </li>
            </ul>
        </div>
    </nav>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial466 = () => {
    const test = `
    .card-profile {
        width: 700px;
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
    }
    
    .button {
        width: 150px;
    }
    
    .btn {
        font-size: 80%;
        border-radius: 5rem;
        font-weight: bold;
    }
    
    .profile_table {
        width: 100%;
        border: 1px solid #D1DBEB;
        border-radius: 8px;
        border-collapse: separate;
        overflow: hidden;
    }
    
    .profile_table .header {
        width: 200px;
        padding: 16px 24px;
        text-align: left;
        background: #F1F5FA;
    }
    
    .profile_table .data {
        padding: 16px 24px;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial471 = () => {
    const test = `
    from django.db import models
    from django.contrib.auth.base_user import AbstractBaseUser
    from django.contrib.auth.models import UserManager, PermissionsMixin
    from django.utils import timezone
    
    
    class UserManager(UserManager):
        def _create_user(self, email, password, **extra_fields):
            email = self.normalize_email(email)
            user = self.model(email=email, **extra_fields)
            user.set_password(password)
            user.save(using=self._db)
            return user
    
        def create_user(self, email, password=None, **extra_fields):
            extra_fields.setdefault('is_staff', False)
            extra_fields.setdefault('is_superuser', False)
            return self._create_user(email, password, **extra_fields)
    
        def create_superuser(self, email, password, **extra_fields):
            extra_fields.setdefault('is_staff', True)
            extra_fields.setdefault('is_superuser', True)
    
            if extra_fields.get('is_staff') is not True:
                raise ValueError('Superuser must have is_staff=True.')
            if extra_fields.get('is_superuser') is not True:
                raise ValueError('Superuser must have is_superuser=True.')
    
            return self._create_user(email, password, **extra_fields)
    
    
    class CustomUser(AbstractBaseUser, PermissionsMixin):
        email = models.EmailField('メールアドレス', unique=True)
        first_name = models.CharField(('姓'), max_length=30)
        last_name = models.CharField(('名'), max_length=30)
        department = models.CharField(('所属'), max_length=30, blank=True)
        created = models.DateTimeField(('入会日'), default=timezone.now)
    
        is_staff = models.BooleanField(
            ('staff status'),
            default=False,
            help_text=('Designates whether the user can log into this admin site.'),
        )
        is_active = models.BooleanField(
            ('active'),
            default=True,
            help_text=(
                'Designates whether this user should be treated as active. '
                'Unselect this instead of deleting accounts.'
            ),
        )
    
        objects = UserManager()
    
        USERNAME_FIELD = 'email'
        EMAIL_FIELD = 'email'
        REQUIRED_FIELDS = []
    
        class Meta:
            verbose_name = ('user')
            verbose_name_plural = ('users')
    
        def clean(self):
            super().clean()
            self.email = self.__class__.objects.normalize_email(self.email)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial472 = () => {
    const test = `
    def _create_user(self, email, password, **extra_fields):
    email = self.normalize_email(email)
    user = self.model(email=email, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial473 = () => {
    const test = `
    class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('メールアドレス', unique=True)
    first_name = models.CharField(('姓'), max_length=30)
    last_name = models.CharField(('名'), max_length=30)
    department = models.CharField(('所属'), max_length=30, blank=True)
    created = models.DateTimeField(('入会日'), default=timezone.now)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial474 = () => {
    const test = `
    USERNAME_FIELD = 'email'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial475 = () => {
    const test = `
    from django.contrib import admin

    from .models import CustomUser
    
    admin.site.register(CustomUser)

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial476 = () => {
    const test = `
    # 一番下に追加
AUTH_USER_MODEL = 'accounts.CustomUser'
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial477 = () => {
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

const Tutorial478 = () => {
    const test = `
(myvenv) ~$ python3 manage.py createsuperuser
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial481 = () => {
    const test = `
    from django.views import View
from accounts.models import CustomUser
from django.shortcuts import render, redirect


class ProfileView(View):
    def get(self, request, *args, **kwargs):
        user_data = CustomUser.objects.get(id=request.user.id)

        return render(request, 'accounts/profile.html', {
            'user_data': user_data,
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial482 = () => {
    const test = `
    user_data = CustomUser.objects.get(id=request.user.id)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial483 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="card card-profile my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">プロフィール</h5>
            <table class="profile_table mb-4">
                <tbody>
                    <tr>
                        <th class="header">名前</th>
                        <td class="data">{{ user_data.first_name }} {{ user_data.last_name }}</td>
                    </tr>
                    <tr>
                        <th class="header">メールアドレス</th>
                        <td class="data">{{ user_data.email }}</td>
                    </tr>
                    <tr>
                        <th class="header">所属</th>
                        <td class="data">{{ user_data.department }}</td>
                    </tr>
                    <tr>
                        <th class="header">入会日</th>
                        <td class="data">{{ user_data.created }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="button mx-auto">
                <a class="btn btn-lg btn-warning btn-block" href="">編集する</a>
            </div>
        </div>
    </div>
    
    {% endblock %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial491 = () => {
    const test = `
    from django.urls import path
    from accounts import views
    
    urlpatterns = [
        path('profile/', views.ProfileView.as_view(), name='profile'),
        path('profile/edit/', views.ProfileEditView.as_view(), name='profile_edit'),
    ]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial492 = () => {
    const test = `
    from django import forms


    class ProfileForm(forms.Form):
        first_name = forms.CharField(max_length=30, label='姓')
        last_name = forms.CharField(max_length=30, label='名')
        department = forms.CharField(max_length=30, label='所属', required=False)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial493 = () => {
    const test = `
    from django.views import View
from accounts.models import CustomUser
from accounts.forms import ProfileForm
from django.shortcuts import render, redirect


class ProfileEditView(View):
    def get(self, request, *args, **kwargs):
        user_data = CustomUser.objects.get(id=request.user.id)
        form = ProfileForm(
            request.POST or None,
            initial={
                'first_name': user_data.first_name,
                'last_name': user_data.last_name,
                'department': user_data.department
            }
        )

        return render(request, 'accounts/profile_edit.html', {
            'form': form
        })

    def post(self, request, *args, **kwargs):
        form = ProfileForm(request.POST or None)
        if form.is_valid():
            user_data = CustomUser.objects.get(id=request.user.id)
            user_data.first_name = form.cleaned_data['first_name']
            user_data.last_name = form.cleaned_data['last_name']
            user_data.department = form.cleaned_data['department']
            user_data.save()
            return redirect('profile')

        return render(request, 'accounts/profile.html', {
            'form': form
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial494 = () => {
    const test = `
    def get(self, request, *args, **kwargs):
    user_data = CustomUser.objects.get(id=request.user.id)
    form = ProfileForm(
        request.POST or None,
        initial={
            'first_name': user_data.first_name,
            'last_name': user_data.last_name,
            'department': user_data.department
        }
    )

    return render(request, 'accounts/profile_edit.html', {
        'form': form
    })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial495 = () => {
    const test = `
    def post(self, request, *args, **kwargs):
        form = ProfileForm(request.POST or None)
        if form.is_valid():
            user_data = CustomUser.objects.get(id=request.user.id)
            user_data.first_name = form.cleaned_data['first_name']
            user_data.last_name = form.cleaned_data['last_name']
            user_data.department = form.cleaned_data['department']
            user_data.save()
            return redirect('profile')

        return render(request, 'accounts/profile.html', {
            'form': form
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial496 = () => {
    const test = `
    {% extends "app/base.html" %}
{% load widget_tweaks %}

{% block content %}

<div class="card card-profile my-5 mx-auto">
    <div class="card-body">
        <h5 class="card-title text-center">プロフィール</h5>
        <form method="post">
            {% csrf_token %}
            <table class="profile_table mb-4">
                <tbody>
                    <tr>
                        <th class="header">名前</th>
                        <td class="data form_wrap form_wrap-2">
                            {% render_field form.first_name class="form-control" placeholder="姓" %}
                            {% render_field form.last_name class="form-control" placeholder="名" %}
                        </td>
                    </tr>
                    <tr>
                        <th class="header">所属</th>
                        <td class="data">
                            {% render_field form.department class="form-control" placeholder="所属" %}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="button mx-auto">
                <button class="btn btn-lg btn-warning btn-block" type="submit">登録する</button>
            </div>
        </form>
    </div>
</div>

{% endblock %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial497 = () => {
    const test = `
    {% load widget_tweaks %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial498 = () => {
    const test = `
    <form method="post">

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial499 = () => {
    const test = `
    {% csrf_token %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4910 = () => {
    const test = `
    {% render_field form.first_name class="form-control" placeholder="姓" %}
    {% render_field form.last_name class="form-control" placeholder="名" %}
    {% render_field form.department class="form-control" placeholder="所属" %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4911 = () => {
    const test = `
    <div class="button mx-auto">
    <a class="btn btn-lg btn-warning btn-block" href="{% url 'profile_edit' %}">編集する</a>
</div>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4912 = () => {
    const test = `
    .form_wrap {
        display: grid;
        gap: 16px;
    }
    
    .form_wrap-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .form-control:focus {
        box-shadow: none;
    }

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4101 = () => {
    const test = `
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('allauth.urls')), # 追加
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4102 = () => {
    const test = `
from django.urls import path
from accounts import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='account_login'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('profile/edit/', views.ProfileEditView.as_view(), name='profile_edit'),
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4103 = () => {
    const test = `
    from django.views import View
    from accounts.models import CustomUser
    from accounts.forms import ProfileForm
    from django.shortcuts import render, redirect
    from allauth.account import views # 追加
    
    
    class LoginView(views.LoginView):
        template_name = 'accounts/login.html'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4104 = () => {
    const test = `
    class LoginView(views.LoginView):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4105 = () => {
    const test = `
    {% extends "app/base.html" %}
    {% load widget_tweaks %}
    
    {% block content %}
    
    <div class="card card-auth my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">ログイン</h5>
            <form method="post" class="form-auth">
                {% csrf_token %}
                <div class="form-label-group">
                    {% render_field form.login class="form-control" placeholder="メールアドレス" %}
                </div>
                <div class="form-label-group">
                    {% render_field form.password class="form-control" placeholder="パスワード" %}
                </div>
                <div class="button mx-auto">
                    <button class="btn btn-lg btn-primary btn-block mx-auto" type="submit">ログイン</button>
                </div>
            </form>
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4106 = () => {
    const test = `
    {% render_field form.login class="form-control" placeholder="メールアドレス" %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4107 = () => {
    const test = `
    .card-auth {
        width: 400px;
        border: 0;
        border-radius: 1rem;
        box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.1);
    }
    
    .card-title {
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    
    .card-body {
        padding: 2rem;
    }
    
    .form-auth {
        width: 100%;
    }
    
    .form-label-group {
        margin-bottom: 1rem;
    }
    
    .form-label-group input {
        border-radius: 2rem;
    }

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4108 = () => {
    const test = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">ホーム</a>
            </li>
            {% if user.is_authenticated %}
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                </li>
            {% else %}
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
                </li>
            {% endif %}
        </ul>
    </div>
</nav>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4111 = () => {
    const test = `
    from django.urls import path
from accounts import views

urlpatterns = [
    path('login/', views.LoginView.as_view(), name='account_login'),
    path('logout/', views.LogoutView.as_view(), name='account_logout'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('profile/edit/', views.ProfileEditView.as_view(), name='profile_edit'),
]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4112 = () => {
    const test = `
    class LogoutView(views.LogoutView):
    template_name = 'accounts/logout.html'

    def post(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            self.logout()
        return redirect('/')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4113 = () => {
    const test = `
    class LogoutView(views.LogoutView):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4114 = () => {
    const test = `
    def post(self, *args, **kwargs):
    if self.request.user.is_authenticated:
        self.logout()
    return redirect('/')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4115 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="card card-auth my-5 mx-auto">
        <div class="card-body">
            <p class="card-title text-center">ログアウトしますか？</p>
            <form method="post" class="form-auth">
                {% csrf_token %}
                <div class="button mx-auto">
                    <button class="btn btn-lg btn-warning btn-block mx-auto" type="submit">ログアウト</button>
                </div>
            </form>
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4116 = () => {
    const test = `
    <form method="post" class="form-auth">
            {% csrf_token %}
            <div class="button mx-auto">
                <button class="btn btn-lg btn-warning btn-block mx-auto" type="submit">ログアウト</button>
            </div>
        </form>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4117 = () => {
    const test = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">ホーム</a>
            </li>
            {% if user.is_authenticated %}
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'account_logout' %}">ログアウト</a>
                </li>
            {% else %}
                <li class="nav-item">
                    <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
                </li>
            {% endif %}
        </ul>
    </div>
</nav>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4121 = () => {
    const test = `
    from django.urls import path
    from accounts import views
    
    urlpatterns = [
        path('signup/', views.SignupView.as_view(), name='account_signup'),
        path('login/', views.LoginView.as_view(), name='account_login'),
        path('logout/', views.LogoutView.as_view(), name='account_logout'),
        path('profile/', views.ProfileView.as_view(), name='profile'),
        path('profile/edit/', views.ProfileEditView.as_view(), name='profile_edit'),
    ]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4122 = () => {
    const test = `
    from django import forms
from allauth.account.forms import SignupForm # 追加


class SignupUserForm(SignupForm):
    first_name = forms.CharField(max_length=30, label='姓')
    last_name = forms.CharField(max_length=30, label='名')

    def save(self, request):
        user = super(SignupUserForm, self).save(request)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.save()
        return user
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4123 = () => {
    const test = `
    class SignupUserForm(SignupForm):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4124 = () => {
    const test = `
    first_name = forms.CharField(max_length=30, label='姓')
    last_name = forms.CharField(max_length=30, label='名')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4125 = () => {
    const test = `
    def save(self, request):
        user = super(SignupUserForm, self).save(request)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.save()
        return user
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4126 = () => {
    const test = `
    from django.views import View
    from accounts.models import CustomUser
    from accounts.forms import ProfileForm, SignupUserForm # 追加
    from django.shortcuts import render, redirect
    from allauth.account import views
    
    
    class SignupView(views.SignupView):
        template_name = 'accounts/signup.html'
        form_class = SignupUserForm
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4127 = () => {
    const test = `
    class SignupView(views.SignupView):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4128 = () => {
    const test = `
    form_class = SignupUserForm
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4129 = () => {
    const test = `
    {% extends "app/base.html" %}
    {% load widget_tweaks %}
    
    {% block content %}
    
    <div class="card card-auth my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">サインアップ</h5>
            <form method="post" class="form-auth">
                {% csrf_token %}
                <div class="form-label-group form_wrap form_wrap-2">
                    {% render_field form.first_name class="form-control" placeholder="姓" %}
                    {% render_field form.last_name class="form-control" placeholder="名" %}
                </div>
                <div class="form-label-group">
                    {% render_field form.email class="form-control" placeholder="メールアドレス" %}
                </div>
                <div class="form-label-group">
                    {% render_field form.password1 class="form-control" placeholder="パスワード" %}
                </div>
                <div class="form-label-group">
                    {% render_field form.password2 class="form-control" placeholder="パスワード(確認)" %}
                </div>
                <div class="button mx-auto">
                    <button class="btn btn-lg btn-primary btn-block mx-auto" type="submit">サインアップ</button>
                </div>
            </form>
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial41210 = () => {
    const test = `
    {% render_field form.first_name class="form-control" placeholder="姓" %}
    {% render_field form.last_name class="form-control" placeholder="名" %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial41211 = () => {
    const test = `
    {% render_field form.password1 class="form-control" placeholder="パスワード" %}
{% render_field form.password2 class="form-control" placeholder="パスワード(確認)" %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial41212 = () => {
    const test = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">ホーム</a>
                </li>
                {% if user.is_authenticated %}
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_logout' %}">ログアウト</a>
                    </li>
                {% else %}
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_signup' %}">サインアップ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
                    </li>
                {% endif %}
            </ul>
        </div>
    </nav>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4131 = () => {
    const test = `
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin


class IndexView(LoginRequiredMixin, TemplateView):
    template_name = "app/index.html"
    login_url = '/accounts/login/'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial4132 = () => {
    const test = `
    class IndexView(LoginRequiredMixin, TemplateView):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4133 = () => {
    const test = `
    login_url = '/accounts/login/'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial4134 = () => {
    const test = `
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from accounts.models import CustomUser
from accounts.forms import ProfileForm, SignupUserForm
from django.shortcuts import render, redirect
from allauth.account import views


class ProfileView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):


class ProfileEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

