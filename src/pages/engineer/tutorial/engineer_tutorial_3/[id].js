import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_3 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_3>
                        <h3>ポートフォリオ構築 </h3>
                        <p>Djangoでポートフォリオを作ってみましょう。 </p>
                        <p>ポートフォリオを作るメリット </p>
                        <p>転職時のプレゼン資料</p>
                        <p>書類選考での優遇 </p>
                        <p>技術力の担保 </p>
                        <p>ポートフォリオを作成して、あなたのスキルや開発したWebアプリケーションをのせてアピールしましょう。 </p>

                        <p>クライアントは、あなたのポートフォリオを見て、採用を判断します。</p>
                        <p>何を制作して、何を勉強したかなど、細かく書きましょう！ </p>
                        <p>強力な営業ツールになります。 </p>

                        <h3>#目標 </h3>
                        <p>下記を学習していきます。 </p>
                        <p>ポートフォリオの作り方を学習</p>
                        <p>データベースとのやりとりを学習</p>
                        <p>お問い合わせの作り方を学習</p>
                        <p>完成</p>

                        <p>#機能</p>
                        <p>作品リスト</p>

                        <p>作品詳細</p>
                        <p>自己紹介。</p>
                        <p>職歴</p>

                        <p>学歴</p>

                        <p>スキル</p>
                        <p>お問い合わせ</p>

                        <p>#エラーが発生した場合</p>
                        <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。</p>

                        <p>Djangoドキュメント</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>参照コード</p>
                        <h3>#前提知識</h3>

                        <p>Djangoを始める前に、下記の言語は学習しておいて下さい。</p>
                        <p>Python</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>では、始めて行きましょう！！</p>
                    </Layout_tutorial_3>
                ) : id == 2 ? (
                    <Layout_tutorial_3>
                        <h3>準備 </h3>
                        <p>開発の準備をします。 </p>
                        <p>GitHub準備 </p>
                        <p>GitHubのリポジトリを作成します。 </p>

                        <p>.gitignore作成 </p>

                        <p>.gitignoreファイルを作成してください。 </p>
                        <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                        <p className='text-red-400'>.gitignore</p>
                        <Tutorial321 />

                        <h3>仮想環境の作成 </h3>
                        <p>myvenvという名前で仮想環境を構築します。 </p>

                        <Tutorial322 />
                        <h3>#仮想環境の実行</h3>
                        <p>VS Codeを使用している方は、エクスプローラーをリフレッシュすると、フォルダが表示されます。</p>

                        <p>仮想環境実行</p>
                        <p>sourceコマンドで仮想環境を実行します。</p>
                        <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                        <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                        <p>これがあると、仮想環境に入っていることになります。</p>
                        <Tutorial323 />

                        <p>#requirements.txt作成</p>
                        <p>requirements.txtファイルを作成してください。</p>
                        <p>開発で必要なパッケージを記載します。</p>
                        <Tutorial324 />


                        <p>#パッケージのインストール</p>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                        <Tutorial325 />
                        <p>これで、Djangoで開発する準備ができました。</p>

                    </Layout_tutorial_3>
                ) : id == 3 ? (
                    <Layout_tutorial_3>
                        <h3>プロジェクト作成 </h3>
                        <p>プロジェクトを作成します。</p>

                        <Tutorial331 />
                        <h3>#環境設定変更</h3>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>

                        <Tutorial332 />
                        <p>#コード解説 </p>
                        <p>画像をアップロードした場合、ルートディレクトリのimagesフォルダに画像が格納されます。 </p>
                        <Tutorial333 />
                        <h3>#データベースのセットアップ </h3>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>

                        <Tutorial334 />
                        <p>#Webサーバーを起動する</p>
                        <p>Djangoが起動できるか確認しましょう。</p>
                        <Tutorial335 />
                        <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </Layout_tutorial_3>
                ) : id == 4 ? (
                    <Layout_tutorial_3>
                        <h3>アプリケーション作成 </h3>
                        <p>アプリケーションを作成してきます。 </p>

                        <p>今回は、アプリケーションの名前をappとします。</p>
                        <Tutorial341 />
                        <h3>#アプリケーションを使えるように設定 </h3>
                        <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                        <p>widget_tweaksパッケージも同時に設定します。 </p>
                        <Tutorial342 />
                    </Layout_tutorial_3>
                ) : id == 5 ? (
                    <Layout_tutorial_3>
                        <h3>トップページ</h3>
                        <p>トップページを作成していきます。  </p>
                        <p>モデル </p>
                        <p>プロフィールモデルを作成します。 </p>
                        <p>自己紹介となるので、しっかりと書いていきましょう。</p>
                        <p className='text-red-400'>app/models.py</p>
                        <Tutorial351 />
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします。</p>
                        <p className='text-red-400'>app/admin.py</p>
                        <Tutorial352 />
                        <h3>マイグレーション実行</h3>
                        <p>モデルを追加したので、マイグレーションが必要になります。 </p>
                        <Tutorial353 />

                        <h3>#データ追加 </h3>
                        <p>管理画面でProfileモデルのデータを追加します。 </p>
                        <p>各項目を登録しましょう。 </p>
                        <p>SNSリンクは登録しないと、表示しないようになっています。</p>
                        <p>#プロジェクトURL</p>
                        <p>プロジェクトURLにappアプリケーションを指定します。</p>
                        <p className='text-red-400'>mysite/urls.py</p>
                        <Tutorial354 />
                        <h3>#アプリケーションURL</h3>
                        <p>トップページのURLを作成します。</p>
                        <p className='text-red-400'>app/urls.py</p>
                        <Tutorial355 />
                        <h3>#ビュー</h3>
                        <p>ビューを作成します。</p>
                        <p>プロフィールのデータを降順で並び変えて、テンプレートに渡しています。</p>
                        <p className='text-red-400'>app/views.py</p>
                        <Tutorial356 />
                        <h3>#テンプレート</h3>
                        <p>#base</p>
                        <p>ベースのテンプレートを作成します。</p>
                        <p>レイアウトはBootstrap、アイコンはFontAwesomeを使用しています。</p>
                        <p className='text-red-400'>app/templates/app/base.html</p>
                        <Tutorial357 />
                        <p>#index</p>
                        <p>トップページのテンプレートを作成します。</p>
                        <p>ビューから渡されたデータを表示します。</p>
                        <p className='text-red-400'>app/templates/app/index.html</p>
                        <Tutorial358 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>｛％block content％｝の使い方</div>
                        <div className='justify-center flex'>
                            <Image
                                className='m-2 border border-black '
                                src="/images/programing/django/block_content.png"
                                alt="tailwindcss.com thumbnail image"
                                width={600}
                                height={675 / 2}
                            />
                        </div>
                        <h3>#CSS</h3>
                        <p>CSSでトップページを装飾します。</p>
                        <p>ナビゲーションはホバーエフェクトを追加しています。</p>
                        <p>CSSを自由に操れるように、しっかりと学習しておきましょう。</p>
                        <p>細かい気遣いが大事です。</p>
                        <Tutorial359 />
                        <p>#確認</p>
                        <p>トップページがこのように表示されるか確認してください。</p>
                        <p>画像はアップロードした画像になっているはずです。</p>
                    </Layout_tutorial_3>
                ) : id == 6 ? (
                    <Layout_tutorial_3>
                        <h3>作品リスト </h3>
                        <p>トップページに作品リストを作ります。 </p>
                        <p>モデル </p>
                        <p>Workモデルを作成して、作品を登録します。 </p>
                        <p className='text-red-400'>app/models.py</p>
                        <Tutorial361 />
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします。</p>
                        <p className='text-red-400'>app/admin.py</p>
                        <Tutorial362 />
                        <h3>マイグレーション実行 </h3>
                        <p>モデルを追加したので、マイグレーションが必要になります</p>
                        <Tutorial363 />
                        <p>データ追加 </p>
                        <p>管理画面でWorkモデルのデータを追加します。。 </p>
                        <p>ダミーでもいいので、何件か登録しておくとレイアウトがしやすくなります </p>
                        <h3>ビュー </h3>
                        <p>トップページに作品リストを表示するため、ビューにWorkモデルを追加します</p>
                        <p className='text-red-400'>app/views.py</p>
                        <Tutorial364 />
                        <p>コード解説</p>
                        <p>新しい順に並べたいので、order_byを使用して降順に並べ替えます。</p>
                        <Tutorial365 />
                        <p>テンプレート</p>
                        <p>index</p>
                        <p>indexテンプレートに作品リストを追加します。</p>
                        <Tutorial366 />
                        <p>CSS</p>
                        <p>作品リストを装飾します。</p>
                        <p>ホバーすると、タイトルが表示されるようにエフェクトを追加しています。</p>
                        <Tutorial367 />

                        <p>確認</p>
                        <p>作品リストがこのように表示されることを確認します。</p>
                        <p>いくつかデータを登録してみてレイアウトを確認してください</p>
                    </Layout_tutorial_3>
                ) : id == 7 ? (
                    <Layout_tutorial_3>
                        <p>作品詳細</p>
                        <p>作品をクリックしたら、詳細画面が表示されるようにします</p>
                        <p>URL </p>
                        <p>詳細画面のURLを作成します </p>
                        <Tutorial371 />
                        <p>コード解説</p>
                        <p>＜int:pk＞は、WorkデータのIDを示しています。</p>

                        <Tutorial372 />
                        <p>ビュー </p>
                        <p>詳細画面のビューを作成します。</p>
                        <p>Workデータをテンプレートに渡しています。</p>
                        <Tutorial373 />
                        <p>コード解説 </p>
                        <p>self.kwargs[&apos;pk&apos;]はURLで指定したpkの値を取得することができます。</p>
                        <Tutorial374 />
                        <p>テンプレート </p>
                        <p>index </p>
                        <p>詳細画面へのリンクを追加します</p>
                        <Tutorial375 />
                        <p>detail</p>
                        <p>詳細画面のテンプレートを作成します。</p>
                        <Tutorial376 />
                        <p>コード解説</p>
                        <p>｛% if work_data.url %｝は、urlデータがあるかの判定をしています。</p>
                        <p>もしurlデータがあれば、Linkを表示し、なければ、Privateと表示します</p>
                        <Tutorial377 />
                        <p>linebreaksbrは改行をbrに変更してくれます。</p>
                        <p>よく使いますので、覚えておきましょう。</p>
                        <Tutorial378 />
                        <p>CSS</p>
                        <p>リンクの色を装飾しています。</p>
                        <Tutorial379 />
                        <p>確認</p>
                        <p>詳細画面がこのように表示されていることを確認してください。。</p>
                    </Layout_tutorial_3>
                ) : id == 8 ? (
                    <Layout_tutorial_3>
                        <p>プロフィール</p>
                        <p>プロフィール画面を作成していきます。</p>
                        <p>URL </p>
                        <p>プロフィール画面のURLを作成します。 </p>

                        <Tutorial381 />
                        <p>ビュー </p>
                        <p>プロフィールのビューを作成します。 </p>
                        <p>Profileモデルを読み込んで、テンプレートにデータを渡します。 </p>
                        <Tutorial382 />
                        <p>テンプレート </p>
                        <p>base </p>
                        <p>プロフィール画面へのリンクを作成します。 </p>
                        <Tutorial383 />
                        <p>about </p>
                        <p>プロフィール画面のテンプレートを作成します。 </p>
                        <Tutorial384 />
                        <p>コード解説</p>
                        <p>もしSNSリンクが登録されていない場合は、非表示となるようにしています。</p>

                        <Tutorial385 />
                        <p>CSS</p>
                        <p>プロフィール画像を装飾しています。</p>

                        <Tutorial386 />

                        <p>確認</p>
                        <p>プロフィール画面を確認してください</p>
                    </Layout_tutorial_3>
                ) : id == 9 ? (
                    <Layout_tutorial_3>
                        <p>職歴・学歴</p>
                        <p>職歴と学歴を表示していきます。 </p>
                        <p>モデル </p>
                        <p>職歴と学歴のモデルを作成します。</p>
                        <Tutorial391 />
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします。</p>
                        <Tutorial392 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial393 />
                        <p>データ追加 </p>
                        <p>管理画面でExperienceモデルとEducationモデルのデータを追加します </p>
                        <p>ダミーでもいいので、何件か登録しておくとレイアウトがしやすくなります。 </p>
                        <p>ビュー </p>
                        <p>ビューに職歴と学歴のモデルを読み込んで、データをテンプレートに渡します。</p>

                        <Tutorial394 />
                        <p>テンプレート</p>
                        <p>about</p>
                        <p>プロフィールの下に職歴と学歴を表示させます</p>
                        <Tutorial395 />
                        <p>確認</p>
                        <p>職歴と学歴が表示されることを確認してください。</p>
                    </Layout_tutorial_3>
                ) : id == 10 ? (
                    <Layout_tutorial_3>
                        <p>スキル</p>
                        <p>スキルを表示させていきます。</p>
                        <p>モデル</p>
                        <p>ソフトウェアとテクニカルスキルのモデルを作成します</p>

                        <Tutorial3101 />
                        <p>Admin</p>
                        <p>管理画面でデータを登録できるようにします。 </p>
                        <Tutorial3102 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります。</p>
                        <Tutorial3103 />
                        <p>データ追加 </p>
                        <p>管理画面でSoftwareモデルとTechnicalモデルのデータを追加します</p>
                        <p>ダミーでもいいので、何件か登録しておくとレイアウトがしやすくなります。</p>
                        <p>ビュー </p>
                        <p>ビューに追加します</p>
                        <p>ソフトウェアとテクニカルスキルのモデルを読み込み、テンプレートにデータを渡します</p>

                        <Tutorial3104 />
                        <p>テンプレート</p>
                        <p>about</p>
                        <p>学歴の下にスキルリストを表示させます</p>
                        <Tutorial3105 />
                        <p>コード解説</p>
                        <p>スキルがどのくらいのレベルか見た目で分かるように、星を使って表現しています。</p>

                        <Tutorial3106 />
                        <p>CSS</p>
                        <p>スキルレベルの箇所を装飾しています。</p>
                        <p>position: absolute;をうまく使うと、重なった表現ができるようになります</p>
                        <Tutorial3107 />
                    </Layout_tutorial_3>
                ) : id == 11 ? (
                    <Layout_tutorial_3>
                        <p>お問い合わせ</p>
                        <p>お問い合わせ画面にて、お問い合わせできるようにしていきます。</p>
                        <p>設定追加 </p>
                        <Tutorial3111 />
                        <p>コード解説</p>
                        <p>django.core.mail.backends.console.EmailBackendを使用することで、ターミナル上でメール送信の確認ができます。 </p>
                        <p>テストでメールが送信されることを確認できたら、本番用に書き換えて実際にメールが送られるか確認してください。 </p>
                        <p>下記はGmailを想定しています。</p>
                        <p>EMAIL_HOST_USERとEMAIL_HOST_PASSWORDを書き換えて、試してみてください。</p>
                        <Tutorial3112 />
                        <p>設定変数 </p>
                        <p>メールアドレスとパスワードは、GitHubにコミットしないようにしてください。 </p>
                        <p>実際は、環境変数用のファイルを作成して、その変数を読み込むようにします。 </p>
                        <Tutorial3112 />
                        <p>URL </p>
                        <p>お問い合わせのURLを作成します。</p>
                        <Tutorial3113 />
                        <p>フォーム</p>
                        <p>お問い合わせフォームを作成します。 </p>
                        <p>シンプルに名前とメールアドレス、メッセージだけにしています。</p>
                        <Tutorial3114 />
                        <p>ビュー</p>
                        <p>お問い合わせのビューを作成します。</p>
                        <Tutorial3115 />
                        <p>コード解説1</p>
                        <p>Viewクラスを継承し、get関数をpost関数を用意します。</p>
                        <Tutorial3116 />
                        <p>postとgetは、ブラウザがサーバーにリクエストを送るときに使えるmethodの種類です。</p>
                        <p>リクエストを送ると一緒にmethodの情報も送られます。</p>
                        <p>リクエストはDjangoに送られ、Djangoの中でmethodに応じた処理が行われます。</p>
                        <p>getは、ページが表示された時にコールされる関数です。</p>
                        <p>どのビュークラスも必ず最初にget関数がコールされます。</p>
                        <p>postは、お問い合わせやユーザー登録など、何かの情報をサーバーに送る時にコールされる関数です。</p>
                        <p>お問い合わせフォームなどのmethodはpostにします。</p>
                        <p>ユーザーがフォームに何か入力して、送信ボタンなどのボタンを押したときにコールされます。</p>
                        <p>ユーザーが入力された内容を使って、処理をしたい時に使用します。</p>

                        <p>コード解説2</p>
                        <p>お問い合わせフォームの中身は何もなくていいので、空のフォームをテンプレートに渡します。</p>
                        <Tutorial3117 />
                        <p> フォーム初期値</p>
                        <p>フォームに初期値を加えることもできます。</p>
                        <p> initialオプションを使うことで、formに初期値を加えます。</p>
                        <Tutorial3118 />
                        <p>お問い合わせフォームで送信ボタンが押されたら、post関数がコールされます。</p>
                        <p>ここでは、フォームの内容が正しいかform.is_valid()でバリデーションをしてから、form.cleaned_dataで名前やメールアドレス、メッセージを取得します。</p>
                        <Tutorial3119 />
                        <p>textwrap.deden関数を使用すると、共通して現れる先頭の空白を削除してくれます。</p>
                        <p>便利ですので、覚えておきましょう。</p>

                        <Tutorial31110 />
                        <p>EmailMessage関数を使用することで、多くの設定をすることができます。</p>
                        <p>シンプルな設定でいい場合は、send_mail関数を使用して、メール送信します。</p>
                        <Tutorial31111 />
                        <p>テンプレート</p>
                        <p>base</p>
                        <p>お問い合わせのリンクを追加します。</p>
                        <Tutorial31112 />
                        <p>contact</p>
                        <p>お問い合わせのテンプレートを作成します</p>
                        <Tutorial31113 />
                        <p>コード解説</p>
                        <p>お問い合わせは情報をサーバーに送りたいので、methodはpostを指定します。</p>
                        <Tutorial31114 />
                        <p>form.nameで設定したフォームを設定することができます。</p>
                        <p>ここでは、widget_tweaksプラグインを使って、フォームにクラスを付け足しています。</p>
                        <Tutorial31115 />
                        <p>CSS</p>
                        <p>お問い合わせフォームを装飾します。</p>
                        <Tutorial31116 />
                        <p>確認</p>
                        <p>お問い合わせフォームが動くことを確認します。</p>
                        <p>送信ボタンを押したら、ターミナルにメールの内容が出力されれば成功です。</p>
                        <p>テストで確認できたら、本番用の設定に変更して、メールを送信してみましょう。</p>
                    </Layout_tutorial_3>
                ) : id == 12 ? (
                    <Layout_tutorial_3>
                        <p>お問い合わせ完了 </p>
                        <p>お問い合わせが完了した時の画面を作成します。 </p>
                        <p>URL </p>
                        <p>お問い合わせ完了のURLを作成します。</p>
                        <Tutorial3121 />
                        <p>ビュー </p>
                        <p>お問い合わせ完了のビューを作成します。 </p>
                        <p>お問い合わせが完了したら、リダイレクトするように、変更しておきましょう。 </p>
                        <Tutorial3122 />
                        <p>テンプレート</p>
                        <p>thanks</p>
                        <p>お問い合わせ完了のテンプレートを作成します </p>
                        <Tutorial3123 />
                        <p>確認</p>
                        <p>お問い合わせをしてみて下さい。 </p>
                        <p>お問い合わせ完了画面が表示されることを確認します。</p>
                    </Layout_tutorial_3>
                ) : id == 13 ? (
                    <Layout_tutorial_3>
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>ポートフォリオ構築のチュートリアルはここまでで終わりとなります。 </p>
                        <p>ポートフォリオの作り方</p>
                        <p>ポートフォリオの作り方が理解できましたでしょうか！？ </p>
                        <p>どんどん開発して、ポートフォリオに成果物をのせていきましょう。</p>
                        <p>ぜひ新しい機能やCSSを変更して、オリジナルのポートフォリオにしてみてください。</p>

                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>

                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>
                    </Layout_tutorial_3>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Tutorial321 = () => {
    const test = `
    myvenv
    db.sqlite3
    .vscode
    __pycache__
    *.pyc
    .DS_Store
    media
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial322 = () => {
    const test = `
    $ python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial323 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial324 = () => {
    const test = `
    Django~=3.1.4
    Pillow~=8.1.0
    django-widget-tweaks~=1.4.8
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial325 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial331 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial332 = () => {
    const test = `
LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'

STATIC_URL = '/static/'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial333 = () => {
    const test = `
    MEDIA_URL = '/media/'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial334 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial335 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial341 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py startapp app
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial342 = () => {
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
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial351 = () => {
    const test = `
    from django.db import models


    class Profile(models.Model):
        title = models.CharField('タイトル', max_length=100, null=True, blank=True)
        subtitle = models.CharField('サブタイトル', max_length=100, null=True, blank=True)
        name = models.CharField('名前', max_length=100)
        job = models.TextField('仕事')
        introduction = models.TextField('自己紹介')
        github = models.CharField('github', max_length=100, null=True, blank=True)
        twitter = models.CharField('twitter', max_length=100, null=True, blank=True)
        linkedin = models.CharField('linkedin', max_length=100, null=True, blank=True)
        facebook = models.CharField('facebook', max_length=100, null=True, blank=True)
        instagram = models.CharField('instagram', max_length=100, null=True, blank=True)
        topimage = models.ImageField(upload_to='images', verbose_name='トップ画像')
        subimage = models.ImageField(upload_to='images', verbose_name='サブ画像')
    
        def __str__(self):
            return self.name
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial352 = () => {
    const test = `
    from django.contrib import admin
    from .models import Profile
    
    admin.site.register(Profile)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial353 = () => {
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



const Tutorial354 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    from django.conf.urls.static import static
    from django.conf import settings
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('app.urls')),
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



const Tutorial355 = () => {
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



const Tutorial356 = () => {
    const test = `
    from django.views.generic import View
    from django.shortcuts import render
    from .models import Profile
    
    
    class IndexView(View):
        def get(self, request, *args, **kwargs):
            profile_data = Profile.objects.all()
            if profile_data.exists():
                profile_data = profile_data.order_by("-id")[0]
            return render(request, 'app/index.html', {
                'profile_data': profile_data,
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial357 = () => {
    const test = `
    {% load static %}

    <!DOCTYPE html>
    <html lang="ja">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
        <link rel="stylesheet" href="{% static 'css/style.css' %}">
        <title>Portfolio</title>
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="{% static 'img/logo.svg' %}" width="80" height="80">
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item mr-3">
                        <a class="nav-link nav-color" href="/">HOME</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a class="nav-link nav-color" href="">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-color" href="">CONTACT</a>
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
    
        <footer class="py-4 bg-dark text-center">
            <small class="text-white">&copy; 2020 Haruyasu Kaitori</small>
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



const Tutorial358 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="card top d-flex flex-column justify-content-end mb-4">
        <img src="{{ profile_data.topimage.url }}" alt="">
        <div class="overlay text-white p-5">
            <h1 class="title">{{ profile_data.title }}</h1>
            <h5 class="subtitle">{{ profile_data.subtitle }}</h5>            
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



const Tutorial359 = () => {
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

/* index */

.navbar-nav {
    flex-direction: row!important;
}

.nav-color {
    color: black;
}

.nav-color:hover {
    color: #EE6C4D;
}

.nav-color:after {
    content: "";
    display: block;
    height: 2px;
    background: #EE6C4D;
    margin-top: 6px;
    opacity: 0;
    transform: translateY(12px);
    transition: all 0.3s ease-in-out;
}

.nav-color:hover:after {
    transform: translateY(0px);
    opacity: 1;
}

.top img {
    object-fit: cover;
    height: 500px;
}

.overlay {
    position: absolute;
}

.title {
    font-size: 4rem;
}

.subtitle {
    font-size: 2rem;
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial361 = () => {
    const test = `
    class Work(models.Model):
    title = models.CharField('タイトル', max_length=100)
    image = models.ImageField(upload_to='images', verbose_name='イメージ画像')
    thumbnail = models.ImageField(upload_to='images', verbose_name='サムネイル', null=True, blank=True)
    skill = models.CharField('スキル', max_length=100)
    url = models.CharField('URL', max_length=100, null=True, blank=True)
    created = models.DateField('作成日時')
    description = models.TextField('説明')

    def __str__(self):
        return self.title
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial362 = () => {
    const test = `
    from django.contrib import admin
    from .models import Profile, Work
    
    admin.site.register(Profile)
    admin.site.register(Work)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial363 = () => {
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



const Tutorial364 = () => {
    const test = `
    from .models import Profile, Work


    class IndexView(View):
        def get(self, request, *args, **kwargs):
            profile_data = Profile.objects.all()
            if profile_data.exists():
                profile_data = profile_data.order_by("-id")[0]
            work_data = Work.objects.order_by("-id")
            return render(request, 'app/index.html', {
                'profile_data': profile_data,
                'work_data': work_data
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial365 = () => {
    const test = `
    work_data = Work.objects.order_by("-id")
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial366 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="card top d-flex flex-column justify-content-end mb-4">
        <img src="{{ profile_data.topimage.url }}" alt="">
        <div class="overlay text-white p-5">
            <h1 class="title">{{ profile_data.title }}</h1>
            <h5 class="subtitle">{{ profile_data.subtitle }}</h5>            
        </div>
    </div>
    
    <div class="row mb-5">
        {% for work in work_data %}
            <div class="col-6 col-md-3 mb-3">
                <div class="card work-thumbnail">
                    {% if work.thumbnail %}
                        <img class="work-img" src="{{ work.thumbnail.url }}" alt="">
                    {% else %}
                        <img class="work-img" src="{{ work.image.url }}" alt="">
                    {% endif %}
                    <div class="work-title text-center">
                        <p class="mb-0">{{ work.title }}</p>
                    </div>
                    <a class="stretched-link work" href=""></a>
                </div>
            </div>
        {% endfor %}
    </div>
    
    {% endblock %}
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial367 = () => {
    const test = `
    .work-thumbnail {
        overflow: hidden;
        position: relative;
    }
    
    .work-img {
        object-fit: cover;
        height: 240px;
    }
    
    .work-title {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        color: white;
        font-weight: bold;
        padding: 10px 15px;
        opacity: 0;
        background-color: rgb(238, 108, 77, 0.8);
        transform: translateY(70px);
        transition: all 0.2s ease-in-out;
    }
    
    .work-thumbnail:hover .work-title {
        transform: translateY(0px);
        opacity: 1;
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial371 = () => {
    const test = `
    from django.urls import path
from app import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('detail/<int:pk>/', views.DetailView.as_view(), name='detail'),
]
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial372 = () => {
    const test = `
    path('detail/<int:pk>/', views.DetailView.as_view(), name='detail'),
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial373 = () => {
    const test = `
    class DetailView(View):
    def get(self, request, *args, **kwargs):
        work_data = Work.objects.get(id=self.kwargs['pk'])
        return render(request, 'app/detail.html', {
            'work_data': work_data
        })
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial374 = () => {
    const test = `
    work_data = Work.objects.get(id=self.kwargs['pk'])
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial375 = () => {
    const test = `
    <a class="stretched-link work" href="{% url 'detail' work.id %}"></a>
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial376 = () => {
    const test = `
    {% extends "app/base.html" %}

{% block content %}

<h3 class="mb-4">{{ work_data.title }}</h3>
<div class="card top mb-4">
    <img src="{{ work_data.image.url }}" alt="">
</div>

<div class="row">
    <div class="col-sm-4 mb-4">
        <h4 class="mb-3">INFORMATION</h4>
        <p>
            <i class="fas fa-laptop-code mr-2"></i>
            <span class="font-weight-bolder">SKILLS : </span>
            {{ work_data.skill }}
        </p>
        <hr>
        <p>
            <i class="fab fa-github mr-2"></i>
            <span class="font-weight-bolder">GITHUB : </span>
            {% if work_data.url %}
                <a class="link-color" href="{{ work_data.url }}" target="_blank">Link</a>
            {% else %}
                Private
            {% endif %}
        </p>
        <hr>
        <p>
            <i class="far fa-calendar-alt mr-2"></i>
            <span class="font-weight-bolder">CREATED : </span>
            {{ work_data.created }}
        </p>
        <hr>
    </div>
    <div class="col-sm-8 mb-5">
        <h4 class="mb-3">PROJECT DESCRIPTION</h4>
        <p>{{ work_data.description|linebreaksbr }}</p>
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



const Tutorial377 = () => {
    const test = `
    {% if work_data.url %}
    <a class="link-color" href="{{ work_data.url }}" target="_blank">Link</a>
{% else %}
    Private
{% endif %}
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial378 = () => {
    const test = `
    <p>{{ work_data.description|linebreaksbr }}</p>
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial379 = () => {
    const test = `
    /* detail */
    .link-color {
        color: #EE6C4D;
    }
    
    .link-color:hover {
        color: #c56c55;
        text-decoration: none;
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial381 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('detail/<int:pk>/', views.DetailView.as_view(), name='detail'),
        path('about/', views.AboutView.as_view(), name='about'),
    ]
    
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial382 = () => {
    const test = `
    class AboutView(View):
    def get(self, request, *args, **kwargs):
        profile_data = Profile.objects.all()
        if profile_data.exists():
            profile_data = profile_data.order_by("-id")[0]
        return render(request, 'app/about.html', {
            'profile_data': profile_data,
        })
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial383 = () => {
    const test = `
    <a class="nav-link nav-color" href="{% url 'about' %}">ABOUT</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial384 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <h3 class="mb-4">Profile</h3>
    <div class="mb-5">
        <div class="row">
            <div class="col-md-8">
                <p>{{ profile_data.introduction|linebreaksbr }}</p>
            </div>
            <div class="col-md-4">
                <div class="card text-center px-5 py-4">
                    <div class="avatar mb-3">
                        <img class="card-img-top rounded-circle" src="{{ profile_data.subimage.url }}" alt="">
                    </div>
                    <h5 class="font-weight-bolder">{{ profile_data.name }}</h5>
                    <p class="mb-3 small text-center">{{ profile_data.job|linebreaksbr }}</p>
                    <div class="d-flex justify-content-around">
                        {% if profile_data.github %}
                            <a href="{{ profile_data.github }}" target="_blank"><i class="fab fa-github fa-lg rounded btn-dark icon"></i></a>
                        {% endif %}
                        {% if profile_data.twitter %}
                            <a href="{{ profile_data.twitter }}" target="_blank"><i class="fab fa-twitter fa-lg rounded btn-primary icon"></i></a>
                        {% endif %}
                        {% if profile_data.linkedin %}
                            <a href="{{ profile_data.linkedin }}" target="_blank"><i class="fab fa-linkedin-in fa-lg rounded btn-info icon"></i></a>
                        {% endif %}
                        {% if profile_data.facebook %}
                            <a href="{{ profile_data.facebook }}" target="_blank"><i class="fab fa-facebook-f fa-lg rounded btn-primary icon"></i></a>
                        {% endif %}
                        {% if profile_data.instagram %}
                            <a href="{{ profile_data.instagram }}" target="_blank"><i class="fab fa-instagram fa-lg rounded btn-danger icon"></i></a>
                        {% endif %}
                    </div>
                </div>
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



const Tutorial385 = () => {
    const test = `
    {% if profile_data.github %}
    <a href="{{ profile_data.github }}" target="_blank"><i class="fab fa-github fa-lg rounded btn-dark icon"></i></a>
{% endif %}
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial386 = () => {
    const test = `
    /* about */

    .avatar img {
        max-width: 150px;
        max-height: 150px;
    }
    
    .icon {
        padding: 10px 8px;
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial391 = () => {
    const test = `
    class Experience(models.Model):
    occupation = models.CharField('職種', max_length=100)
    company = models.CharField('会社', max_length=100)
    description = models.TextField('説明')
    place = models.CharField('場所', max_length=100)
    period = models.CharField('期間', max_length=100)

    def __str__(self):
        return self.occupation


class Education(models.Model):
    course = models.CharField('コース', max_length=100)
    school = models.CharField('学校', max_length=100)
    place = models.CharField('場所', max_length=100)
    period = models.CharField('期間', max_length=100)

    def __str__(self):
        return self.course
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




const Tutorial392 = () => {
    const test = `
    from django.contrib import admin
from .models import Profile, Work, Experience, Education

admin.site.register(Profile)
admin.site.register(Work)
admin.site.register(Experience)
admin.site.register(Education)
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial393 = () => {
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



const Tutorial394 = () => {
    const test = `
    from .models import Profile, Work, Experience, Education


    class AboutView(View):
        def get(self, request, *args, **kwargs):
            profile_data = Profile.objects.all()
            if profile_data.exists():
                profile_data = profile_data.order_by("-id")[0]
            experience_data = Experience.objects.order_by("-id")
            education_data = Education.objects.order_by("-id")
            return render(request, 'app/about.html', {
                'profile_data': profile_data,
                'experience_data': experience_data,
                'education_data': education_data,
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial395 = () => {
    const test = `
    <h3 class="mb-4">Experience</h3>
    <div class="mb-5">
        {% for experience in experience_data %}
            <div class="d-flex justify-content-between">
                <h5>{{ experience.occupation }}<span class="small text-secondary"> - {{ experience.company }}</span></h5>
                <p class="mb-1">{{ experience.period }}</p>
            </div>
            <p class="mb-1">{{ experience.description }}</p>
            <p>{{ experience.place }}</p>
            <hr>
        {% endfor %}
    </div>
    
    <h3 class="mb-4">Education</h3>
    <div class="mb-5">
        {% for education in education_data %}
            <div class="d-flex justify-content-between">
                <h5>{{ education.course }}<span class="small text-secondary"> - {{ education.school }}</span></h5>
                <p class="mb-1">{{ education.period }}</p>
            </div>
            <p>{{ education.place }}</p>
            <hr>
        {% endfor %}
    </div>
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial3101 = () => {
    const test = `
    class Software(models.Model):
    name = models.CharField('ソフトウェア', max_length=100)
    level = models.CharField('レベル', max_length=100)
    percentage = models.IntegerField('パーセンテージ')

    def __str__(self):
        return self.name


class Technical(models.Model):
    name = models.CharField('テクニカル', max_length=100)
    level = models.CharField('レベル', max_length=100)
    percentage = models.IntegerField('パーセンテージ')

    def __str__(self):
        return self.name

    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3102 = () => {
    const test = `
    from django.contrib import admin
    from .models import Profile, Work, Experience, Education, Software, Technical
    
    admin.site.register(Profile)
    admin.site.register(Work)
    admin.site.register(Experience)
    admin.site.register(Education)
    admin.site.register(Software)
    admin.site.register(Technical)
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3103 = () => {
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



const Tutorial3104 = () => {
    const test = `
    class AboutView(View):
    def get(self, request, *args, **kwargs):
        profile_data = Profile.objects.all()
        if profile_data.exists():
            profile_data = profile_data.order_by("-id")[0]
        experience_data = Experience.objects.order_by("-id")
        education_data = Education.objects.order_by("-id")
        software_data = Software.objects.order_by("-id")
        technical_data = Technical.objects.order_by("-id")
        return render(request, 'app/about.html', {
            'profile_data': profile_data,
            'experience_data': experience_data,
            'education_data': education_data,
            'software_data': software_data,
            'technical_data': technical_data
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3105 = () => {
    const test = `
    <h3 class="mb-4">Software Skills</h3>
    <div class="mb-5">
        <div class="row">
            {% for software in software_data %}
                <div class="col-6 col-md-3">
                    <h5 class="mb-0">{{ software.name }}<span class="small text-secondary"> - {{ software.level }}</span></h5>
                    <div class="d-flex flex-row">
                        <div class="star-rating">
                            <div class="star-rating-front" style="width: {{ software.percentage }}%">★★★★★</div>
                            <div class="star-rating-back">★★★★★</div>
                        </div>    
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
    
    <h3 class="mb-4">Technical Skills</h3>
    <div class="mb-5">
        <div class="row">
            {% for technical in technical_data %}
                <div class="col-6 col-md-3">
                    <h5 class="mb-0">{{ technical.name }}<span class="small text-secondary"> - {{ technical.level }}</span></h5>
                    <div class="d-flex flex-row">
                        <div class="star-rating">
                            <div class="star-rating-front" style="width: {{ technical.percentage }}%">★★★★★</div>
                            <div class="star-rating-back">★★★★★</div>
                        </div>    
                    </div>
                </div>
            {% endfor %}
        </div>
    </div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3106 = () => {
    const test = `
    <div class="d-flex flex-row">
    <div class="star-rating">
        <div class="star-rating-front" style="width: {{ software.percentage }}%">★★★★★</div>
        <div class="star-rating-back">★★★★★</div>
    </div>    
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3107 = () => {
    const test = `
    .star-rating {
        position: relative;
        font-size: 30px;
        word-wrap: normal !important;
    }
    
    .star-rating-front {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        color: #EE6C4D;
    }
    
    .star-rating-back {
        color: #ccc;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial3111 = () => {
    const test = `
    # テスト用
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
    
    # 本番用
    # EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
    # EMAIL_HOST = 'smtp.gmail.com'
    # EMAIL_PORT = 587
    # EMAIL_HOST_USER = 'xxx@gmail.com'
    # EMAIL_HOST_PASSWORD = 'xxx'
    # EMAIL_USE_TLS = True
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3112 = () => {
    const test = `
    import environ

    DEBUG = False
    
    env = environ.Env(DEBUG=(bool,False))
    
    EMAIL_HOST_USER = env('EMAIL_HOST_USER')
    EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3113 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('detail/<int:pk>/', views.DetailView.as_view(), name='detail'),
        path('about/', views.AboutView.as_view(), name='about'),
        path('contact/', views.ContactView.as_view(), name='contact'),
    ]
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3114 = () => {
    const test = `
    from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=30, label='名前')
    email = forms.EmailField(max_length=30, label='メールアドレス')
    message = forms.CharField(label='メッセージ', widget=forms.Textarea())
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3115 = () => {
    const test = `
    from django.views.generic import View
    from django.shortcuts import render, redirect
    from .forms import ContactForm
    from .models import Profile, Work, Experience, Education, Software, Technical
    from django.conf import settings
    from django.core.mail import BadHeaderError, EmailMessage
    from django.http import HttpResponse
    import textwrap
    
    
    class ContactView(View):
        def get(self, request, *args, **kwargs):
            form = ContactForm(request.POST or None)
    
            return render(request, 'app/contact.html', {
                'form': form
            })
        
        def post(self, request, *args, **kwargs):
            form = form = ContactForm(request.POST or None)
    
            if form.is_valid():
                name = form.cleaned_data['name']
                email = form.cleaned_data['email']
                message = form.cleaned_data['message']
                subject = 'お問い合わせありがとうございます。'
                content = textwrap.dedent('''
                    ※このメールはシステムからの自動返信です。
                    
                    {name} 様
                    
                    お問い合わせありがとうございました。
                    以下の内容でお問い合わせを受け付けいたしました。
                    内容を確認させていただき、ご返信させて頂きますので、少々お待ちください。
                    
                    --------------------
                    ■お名前
                    {name}
                    
                    ■メールアドレス
                    {email}
                    
                    ■メッセージ
                    {message}
                    --------------------
                    ''').format(
                        name=name,
                        email=email,
                        message=message
                    )
    
                to_list = [email]
                bcc_list = [settings.EMAIL_HOST_USER]
    
                try:
                    message = EmailMessage(subject=subject, body=content, to=to_list, bcc=bcc_list)
                    message.send()
                except BadHeaderError:
                    return HttpResponse("無効なヘッダが検出されました。")
    
                return redirect('index') # 後で変更
    
            return render(request, 'app/contact.html', {
                'form': form
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3116 = () => {
    const test = `
    class XXXXX(View):
    def get(self, request, *args, **kwargs):
        # 表示したら必ず最初に呼ばれる
        .....
    
    def post(self, request, *args, **kwargs):
        # 画面で送信ボタンなど、submitされた時に呼ばれる
        .....
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3117 = () => {
    const test = `
    def get(self, request, *args, **kwargs):
    form = ContactForm(request.POST or None)

    return render(request, 'app/contact.html', {
        'form': form
    })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3118 = () => {
    const test = `
    # 例
form = ContactForm(
    request.POST or None,
    initial={
        'name': xxxx,
        'email': xxxx,
        'message': xxxx
    }
)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3119 = () => {
    const test = `
    def post(self, request, *args, **kwargs):
    form = form = ContactForm(request.POST or None)

    if form.is_valid():
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        message = form.cleaned_data['message']
        subject = 'お問い合わせありがとうございます。'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31110 = () => {
    const test = `
    content = textwrap.dedent('''
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31111 = () => {
    const test = `
    try:
    message = EmailMessage(subject=subject, body=content, to=to_list, bcc=bcc_list)
    message.send()
except BadHeaderError:
    return HttpResponse("無効なヘッダが検出されました。")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31112 = () => {
    const test = `
    <a class="nav-link nav-color" href="{% url 'contact' %}">CONTACT</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31113 = () => {
    const test = `
    {% extends "app/base.html" %}
{% load widget_tweaks %}

{% block content %}

<div class="card text-center contact mx-auto rounded">
    <div class="card-body">
        <h2 class="mb-4">Contact Me</h2>
        <form method="post">
            {% csrf_token %}
            <div class="mb-3">
                {% render_field form.name class="form-control" placeholder="名前" %}
            </div>
            <div class="mb-3">
                {% render_field form.email class="form-control" placeholder="メールアドレス" %}
            </div>
            <div class="mb-3">
                {% render_field form.message class="form-control" placeholder="メッセージ" %}
            </div>
            <div class="mb-3">
                <button class="btn btn-warning" type="submit"><i class="fas fa-paper-plane"></i> 送信する</button>
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



const Tutorial31114 = () => {
    const test = `
    <form method="post">

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31115 = () => {
    const test = `
    {% render_field form.name class="form-control" placeholder="名前" %}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial31116 = () => {
    const test = `
    /* contact */

    .contact {
        max-width: 500px;
    }
    
    .form-control:focus {
        border-color: #EE6C4D;
        box-shadow: none;
    }
    
    .card {
        border: none;
    }

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial3121 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('detail/<int:pk>/', views.DetailView.as_view(), name='detail'),
        path('about/', views.AboutView.as_view(), name='about'),
        path('contact/', views.ContactView.as_view(), name='contact'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'),
    ]
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3122 = () => {
    const test = `
    class ContactView(View):
    ...
    
    def post(self, request, *args, **kwargs):
        ...
            return redirect('thanks') # 変更


class ThanksView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'app/thanks.html')

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial3123 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <h1 class="mb-5">お問い合わせありがとうございました。</h1>
        <p class="mb-2">内容を確認いたしまして、ご連絡させて頂きます。</p>
        <p class="mb-4">しばらくお待ちください。</p>
        <a class="btn btn-warning" href="/">ホームに戻る</a>
    </div>
    
    {% endblock %}
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};





