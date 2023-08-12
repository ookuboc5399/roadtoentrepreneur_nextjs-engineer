import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_6 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_6>

                        <h3>レストラン検索システム構築</h3>
                        <p>レストラン検索システムを実装して、APIの使い方を学習します。</p>
                        <p>目標 </p>
                        <p>レストラン検索システムを実装することを目標にします。</p>
                        <p>レストラン検索システム</p>
                        <p>注意</p>
                        <p>Herokuサーバーを使用しているため、立ち上がりに時間がかかります。</p>
                        <p>API</p>
                        <p>今回は、ぐるなびAPIを使用して、レストラン情報を取得します。</p>
                        <p>ぐるなびWebサービス</p>
                        <h3>機能</h3>
                        <li>レストラン検索機能</li>
                        <li>コメント機能</li>
                        <li>点数機能</li>
                        <li> 認証機能(サインアップ、ログイン、ログアウト)</li>
                        <p>前提知識</p>
                        <li> Python</li>
                        <li>  HTML</li>
                        <li>  CSS</li>
                        <li>  JavaScript</li>

                    </Layout_tutorial_6>
                ) : id == 2 ? (
                    <Layout_tutorial_6>
                        <p>準備 </p>
                        <p>開発の準備をします。</p>
                        <p>GitHub準備 </p>
                        <p>GitHubのリポジトリを作成します。 </p>
                        <p>.gitignore作成</p>
                        <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。</p>
                        <Tutorial621 />
                        <p>仮想環境の作成</p>
                        <p>myvenvという名前で仮想環境を構築します。</p>
                        <Tutorial622 />
                        <p>仮想環境の実行</p>
                        <p>sourceコマンドで仮想環境を実行します。</p>
                        <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                        <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                        <p>これがあると、仮想環境に入っていることになります。</p>
                        <Tutorial623 />
                        <p>requirements.txt変更</p>
                        <p>開発で必要なパッケージを記載します。</p>
                        <Tutorial624 />
                        <p>パッケージのインストール</p>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                    </Layout_tutorial_6>
                ) : id == 3 ? (
                    <Layout_tutorial_6>
                        <p>プロジェクト作成</p>
                        <p>プロジェクトを作成します。</p>
                        <Tutorial631 />
                        <p>環境設定変更 </p>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                        <Tutorial632 />
                        <p>データベースのセットアップ。</p>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。</p>
                        <Tutorial633 />
                        <p>Webサーバーを起動する</p>
                        <p>Djangoが起動できるか確認しましょう。</p>
                        <Tutorial634 />
                        <p>URLにアクセスすると、Webページが表示されます</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </Layout_tutorial_6>
                ) : id == 4 ? (
                    <Layout_tutorial_6>
                        <p>アプリケーション作成 </p>
                        <p>アプリケーションを作成してきます。</p>
                        <p>今回は、レストラン検索システムを構築するので、名前はfoodieにします </p>
                        <Tutorial641 />
                        <p>Djangoでアプリケーションを使えるように設定</p>
                        <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                        <p>INSTALLED_APPSに追加します。</p>
                        <Tutorial642 />
                        <p> ポイント</p>
                        <p>foodie.apps.FoodieConfigとfoodieは同じ意味です。 </p>
                        <p>foodieと追加しても動作します。</p>
                    </Layout_tutorial_6>
                ) : id == 5 ? (
                    <Layout_tutorial_6>
                        <p>API使用 </p>
                        <p>今回は、ぐるなびAPIを使用して、レストラン検索システムを構築します</p>
                        <p>ぐるなびWebサービス </p>
                        <p>ぐるなびWebサービスとは？</p>
                        <p>ぐるなびが所有する豊富な飲食店情報を提供する、無料のAPIです。 </p>

                        <p> APIとは？</p>
                        <p>APIは、ソフトウェアの一部を公開しているので、他のソフトウェアでも機能を使用することができます。 誰でも外部から利用することができるようになります。</p>
                        <p>ぐるなびAPIを使用すると、あなたのオリジナルアプリケーションから、ぐるなびのレストラン情報を取得することができます</p>
                        <p> アカウント取得</p>
                        <p>APIを使用するためには、アカウントを取得する必要があります。</p>
                        <p>新規アカウント発行</p>
                        <p> 利用用途は、「ハッカソン等の開発イベントで利用」にします。</p>
                        <p>概要は、「レストラン検索システムを構築」にします。</p>
                        <p>アカウントを発行したら、keyidをメモしておいてください</p>
                        <p> 後で使用します。</p>
                        <p>レストラン検索API。</p>
                        <p>APIの仕様は下記から確認できます。</p>
                        <p>レストラン検索API。</p>
                        <p>リクエストとレスポンスのパラメータ名は、後でViewに記載していきます</p>
                    </Layout_tutorial_6>
                ) : id == 6 ? (
                    <Layout_tutorial_6>
                        <p>Model追加 </p>
                        <p>レストランのカテゴリと都道府県を検索できるようにします。</p>
                        <p>カテゴリと都道府県のModelを追加していきます </p>


                        <p>変数名は、下記に従っています。</p>
                        <p>レストラン検索API </p>
                        <Tutorial661 />
                        <p>データベース構築</p>
                        <p>モデルを作成したら、下記コマンドで必ずデータベースの構築が必要になります</p>
                        <Tutorial662 />
                    </Layout_tutorial_6>
                ) : id == 7 ? (
                    <Layout_tutorial_6>
                        <p>管理画面作成</p>
                        <p>作成したカテゴリと都道府県モデルを管理画面で管理を出来るようにします。</p>
                        <p>list_displayオプションを使用して、一覧で表示するようにします。</p>



                        <Tutorial661 />
                        <p>管理ユーザー作成</p>
                        <p>管理ユーザーを作成します。</p>
                        <Tutorial662 />
                        <p>ユーザー名、メールアドレス、パスワードを入力します。</p>
                        <p> パスワード</p>
                        <p>パスワードは見えないので、間違えずに入力して下さい</p>
                        <p>Webサーバー開始</p>
                        <Tutorial663 />
                        <p>/admin/で管理画面を表示できます</p>
                        <p> http://127.0.0.1:8000/admin/</p>
                        <p>ユーザー名とパスワードを入力すると、管理画面が表示されます</p>
                    </Layout_tutorial_6>
                ) : id == 8 ? (
                    <Layout_tutorial_6>
                        <p>URL追加</p>
                        <p>ルーティングを設定します。</p>
                        <p>プロジェクト用ルーティングを作成</p>
                        <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します</p>


                        <Tutorial681 />
                        <p>アプリケーション用ルーティングを作成</p>
                        <p>アプリケーション用のルーティングで、トップページ(index)を表示するように指定します。</p>
                        <Tutorial682 />
                    </Layout_tutorial_6>
                ) : id == 9 ? (
                    <Layout_tutorial_6>
                        <p>View追加</p>
                        <p>Viewでトップページを指定します。</p>
                        <p>今回は、index.htmlをトップページとします</p>
                        <p>ぐるなびAPIを登録した時に取得したkeyidをGNAVI_KEYに渡しておきましょう。</p>


                        <Tutorial681 />
                        <p>クラス汎用ビューを使用している場合は、template_nameにhtmlファイルを渡すだけです</p>
                    </Layout_tutorial_6>
                ) : id == 10 ? (
                    <Layout_tutorial_6>
                        <p>テンプレート追加</p>
                        <p>トップページを表示するテンプレートを追加します。</p>
                        <p>templates、foodieフォルダを作成して、全ページのベースとなるbase.htmlを作成します。</p>
                        <Tutorial6101 />
                        <p>レイアウトはBootstrapを使用していきます</p>
                        <p>Bootstrap</p>
                        <p>公式ドキュメントを見ながら、理解を深めてください。</p>
                        <Tutorial6102 />
                        <p>トップページを表示するために、index.html作成します。</p>
                        <Tutorial6103 />

                        <Tutorial6104 />
                    </Layout_tutorial_6>
                ) : id == 11 ? (
                    <Layout_tutorial_6>
                        <p>CSS追加</p>
                        <p>CSSで見た目を変更します</p>
                        <p>static、cssフォルダを作成し、style.cssを作成します</p>
                        <Tutorial6111 />

                        <Tutorial6112 />

                    </Layout_tutorial_6>
                ) : id == 12 ? (
                    <Layout_tutorial_6>
                        <p>画像追加</p>
                        <p>トップ画像を追加します</p>
                        <p>imageフォルダを追加して、top.jpgを追加します</p>
                        <Tutorial6121 />
                        <p>画像は、pixabayなどのフリー素材からダウンロードしましょう</p>
                        <p>pixabay</p>
                        <p>オンラインイメージ最適化ツールで画像を圧縮してから、Djangoのフォルダに保存しましょう</p>
                        <p>名前変更</p>
                        <p>画像の名前を変更した場合は、cssの名前も変更してください</p>
                        <Tutorial6122 />
                        <p>runserverで起動すると、下記のように表示されます</p>

                    </Layout_tutorial_6>
                ) : id == 13 ? (
                    <Layout_tutorial_6>
                        <p>データベース追加</p>
                        <p>カテゴリと都道府県をデータベースに登録します</p>
                        <p>カテゴリテーブルの登録</p>

                        <p>APIテストツールで、大業態マスタ取得APIを選択して、クエリを送信をします。</p>
                        <p>APIテストツール</p>
                        <Tutorial6131 />
                        <p>category_l_codeとcategory_l_nameをJson形式で取得することができます。</p>
                        <p>このcategory_l_codeとcategory_l_nameをDjangoのデータベースに登録していきます</p>
                    </Layout_tutorial_6>
                ) : id == 14 ? (
                    <Layout_tutorial_6>
                        <p>context_processors追加</p>
                        <p>context_processorsとは？</p>
                        <p>変数をviewからテンプレートに直接渡さなくても、全てのテンプレート上で変数を使えるようにする仕組みです。</p>

                        <p>Viewの代わりをしてくれます</p>
                        <p>色々なところに表示させたい時に使用すると便利です</p>
                        <p>今回は、トップ画面と検索画面に都道府県リスト(pref_list)とカテゴリリスト(category_list)を使用したいので、context_processorsを使用していきます。</p>

                        <p>2画面以上で同じモデルを使用したい時にcontext_processorsを使用します</p>
                        <p>foodieフォルダの中にcontext_processors.pyを作成します</p>
                        <Tutorial6131 />

                        <Tutorial6131 />
                        <p>pref_list</p>
                        <p>全ての都道府県データ</p>
                        <p>category_list</p>
                        <p>全てのカテゴリデータ</p>
                        <p>全てのテンプレートでpref_listとcategory_listが使用できるようになりました。</p>
                        <p>settings.pyを修正て、context_processorsを使用出来るようにします</p>
                        <Tutorial6131 />
                    </Layout_tutorial_6>
                ) : id == 15 ? (
                    <Layout_tutorial_6>
                        <p>Views追加</p>
                        <p>検索機能を実装していきます。</p>
                        <p>レストラン検索API</p>
                        <p>ポイント</p>
                        <p>ぐるなびAPIでリクエストできる全パラメータを設定しているので、コードが長くなっています。</p>
                        <p>Search関数では、カテゴリや都道府県などをデータベースに検索するので、request.methodはGETとなります</p>
                        <p>gnavi_api関数のrequests.getでAPI情報を取得します。</p>
                        <p>Json形式で返ってくるので、辞書に変換するjson.loads()関数を使用します。</p>

                        <p>他のAPIを使用する場合でも、同じです。</p>
                        <p>フォームでユーザーからの入力データを取得</p>
                        <p>queryに格納。</p>

                        <p>requests.getの引数にqueryを渡す</p>
                        <p>Json形式で結果を取得</p>


                        <Tutorial6151 />
                        <p>検索結果のテンプレートは、foodie/search.htmlとします。</p>
                        <Tutorial6152 />
                    </Layout_tutorial_6>
                ) : id == 16 ? (
                    <Layout_tutorial_6>
                        <p>Form追加</p>
                        <p>ユーザーからの入力に対応するため、フォームを追加します</p>
                        <p>forms.pyファイルを作成します。</p>


                        <Tutorial6151 />
                        <p>都道府県、カテゴリ、フリーワードをユーザーからの入力とします。</p>
                        <Tutorial6152 />
                    </Layout_tutorial_6>
                ) : id == 17 ? (
                    <Layout_tutorial_6>
                        <p>URL追加</p>
                        <p>検索結果を表示するために、URLを追加します。</p>
                        <p>searchとしています。</p>


                        <Tutorial6171 />

                    </Layout_tutorial_6>
                ) : id == 18 ? (
                    <Layout_tutorial_6>
                        <p>indexテンプレート追加</p>
                        <p>検索条件のテンプレートを作成します。</p>
                        <p>context_processorsで定義したので、pref_listとcategory_listをテンプレートで使用することができます。</p>
                        <p>こだわり条件</p>
                        <p>checkboxを使用し、ボタンが送信(request.method == &apos;GET&apos;)されたら下記Viewの処理が実行されます。</p>
                        <p>ランチ営業をチェックした場合、request.GET[&apos;lunch&apos;]は1になります。</p>

                        <Tutorial6181 />
                        <p>すべての検索条件を使用しているので、コードが長くなっています。</p>

                        <Tutorial6182 />
                        <p>
                            テンプレートを作成すると、下記のように表示されます</p>
                    </Layout_tutorial_6>
                ) : id == 19 ? (
                    <Layout_tutorial_6>
                        <p>searchテンプレート追加</p>
                        <p>検索結果のテンプレートを作成します。</p>
                        <p>トップ画像で表示している、こだわり条件と同じものを検索結果画面でも表示しています</p>
                        <p>リファクタリング</p>
                        <p>こだわり条件は、別のテンプレートにまとめた方がいいです</p>
                        <p>検索結果は、Viewから渡されたレストラン検索結果(restaurant_list)を使用して、レストランを表示しています。</p>

                        <Tutorial6191 />
                        <p>検索結果画面ができたら、実際に検索してみましょう。</p>
                    </Layout_tutorial_6>
                ) : id == 20 ? (
                    <Layout_tutorial_6>
                        <p>View追加</p>
                        <p>レストラン詳細情報ページを作成します。</p>
                        <p>ViewにShopInfo関数を追加します。。</p>
                        <p>テンプレートはshop_info.htmlになります。</p>
                        <p>render関数の第二引数にレストラン情報を代入して、テンプレートから読み込めるようにします。</p>

                        <Tutorial6201 />

                    </Layout_tutorial_6>
                ) : id == 21 ? (
                    <Layout_tutorial_6>
                        <p>URL追加</p>
                        <p>レストラン詳細ページのURLは、/shop_info/となり、restidでレストラン毎のページを作成します。</p>

                        <Tutorial6211 />
                    </Layout_tutorial_6>
                ) : id == 22 ? (
                    <Layout_tutorial_6>
                        <p>shop_infoテンプレート追加</p>
                        <p>レストラン詳細ページのテンプレートを作成します。</p>
                        <p>Viewから渡されたレストラン情報(restaurants_info)を使用して、レストランの詳細を表示します</p>
                        <Tutorial6221 />
                        <p>検索結果のレストランをクリックしたら、詳細ページにリンクするように、urlを追加します</p>
                        <Tutorial6222 />
                        <p>詳細画面を作成したら、実際に動作するか試してみましょう。</p>
                    </Layout_tutorial_6>
                ) : id == 23 ? (
                    <Layout_tutorial_6>
                        <p>設定変更</p>
                        <p>新機能</p>
                        <p>認証機能を追加</p>
                        <p>口コミを書くことが出来るのは、ログインしている人だけに限定したいので、認証機能を追加していきます</p>
                        <p>認証用のアプリケーションを追加</p>
                        <Tutorial6231 />
                        <p>settings.pyを修正します</p>
                        <p>allauthはすでにインストールしているので、INSTALLED_APPSに追加すると使えるようになります</p>
                        <Tutorial6232 />
                        <p>ルーティングを追加</p>
                        <p>認証機能用のルーティングを設定します。</p>
                        <Tutorial6233 />
                        <p>マイグレーション実行</p>
                        <p>新しくaccountsアプリケーションを追加したので、マイグレーションをする必要があります。</p>
                        <Tutorial6234 />
                    </Layout_tutorial_6>
                ) : id == 24 ? (
                    <Layout_tutorial_6>
                        <p>Loginテンプレート追加</p>
                        <p>allauthを使用すると、すでに認証用のテンプレートが用意されています。</p>
                        <p>しかし、認証画面はオリジナルにしたいので、テンプレートを上書きするために、login.htmlを作成します</p>

                        <Tutorial6241 />

                        <Tutorial6242 />

                    </Layout_tutorial_6>
                ) : id == 25 ? (
                    <Layout_tutorial_6>
                        <p>Logoutテンプレート追加</p>
                        <p>ログアウト画面も作成します。</p>

                        <Tutorial6251 />

                        <Tutorial6252 />

                    </Layout_tutorial_6>
                ) : id == 26 ? (
                    <Layout_tutorial_6>
                        <p>Signupテンプレート追加</p>
                        <p>サインアップ画面も作成します</p>

                        <Tutorial6251 />

                        <Tutorial6252 />

                    </Layout_tutorial_6>
                ) : id == 27 ? (
                    <Layout_tutorial_6>
                        <p>Navigation追加</p>
                        <p>ナビゲーションのリンクを追加します</p>

                        <Tutorial6271 />
                        <p>サインアップ、ログイン、ログアウト画面は、このように表示されます</p>

                    </Layout_tutorial_6>
                ) : id == 28 ? (
                    <Layout_tutorial_6>
                        <p>Model追加</p>
                        <p>新機能</p>
                        <p>口コミ機能を追加</p>
                        <p>ユーザーがレストランの口コミを投稿するので、Modelを追加する必要があります。</p>
                        <p>コメントとスコアも登録するようにしました。</p>
                        <p>スコアは5段階評価で★を選択する形式にしています。</p>
                        <Tutorial6281 />
                        <p>データベース構築</p>
                        <p>モデルを追加したら、下記コマンドで必ずデータベースの再構築が必要になります。</p>
                        <Tutorial6282 />
                    </Layout_tutorial_6>
                ) : id == 29 ? (
                    <Layout_tutorial_6>
                        <p>Form追加</p>
                        <p>ユーザーからの口コミを受け取るために、Formを追加します</p>
                        <p>ReviewFormクラスを追加します</p>
                        <Tutorial6291 />

                    </Layout_tutorial_6>
                ) : id == 30 ? (
                    <Layout_tutorial_6>
                         <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>View追加</p>
                        <p>レストラン詳細ページで口コミを投稿するために、ShopInfo関数を変更します</p>
                        <Tutorial6301 />
                        <p>口コミを投稿した時のメッセージ機能も追加しています</p>
                    </div>
                    </Layout_tutorial_6>
                ) : id == 31 ? (
                    <Layout_tutorial_6>
                       <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>shop_infoテンプレート追加</p>
                        <p>口コミが投稿された時に、口コミの平均点を表示するようにします。</p>
                        <Tutorial6311 />
                        <p>口コミの一覧を、店情報の下に追加します。</p>
                        <Tutorial6312 />
                    </div>
                    </Layout_tutorial_6>
                ) : id == 32 ? (
                    <Layout_tutorial_6>
 <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Message追加</p>
                        <p>メッセージは、全ページに対応するために、ベーステンプレートに追加します。</p>
                        <Tutorial6321 />
                       
                    </div>
                    </Layout_tutorial_6>
                ) : id == 33 ? (
                    <Layout_tutorial_6>
                       <div className="ml-80">
                        <p>View追加</p>
                        <p> 新機能</p>
                        <p>おすすめ機能を追加</p>
                        <p>トップページにおすすめレストランを表示する機能を追加します。</p>
                        <p>この条件でおすすめレストランを決めることができます</p>
                        <Tutorial6331 />
                        <p>ポイント</p>
                        <p>get_context_data関数の戻り値に、テンプレートで使用したいデータを渡します。</p>
                        <Tutorial6332 />
                    </div>
                    </Layout_tutorial_6>
                ) : id == 34 ? (
                    <Layout_tutorial_6>
                       <div className="ml-80">
                        <p>indexテンプレート追加</p>
                        <p>おすすめレストランは、トップページの下に表示します。</p>
                        <p>ポイント</p>
                        <p>Viewから渡されたpickup_restaurantからレストラン情報を表示します。</p>
                       
                        <Tutorial6341 />
                     
                    </div>
                    </Layout_tutorial_6>
                ) : id == 35 ? (
                    <Layout_tutorial_6>
                       <p>View追加</p>
                        <p> 新機能</p>
                        <p>ページネーション機能を追加</p>
                        <p>ポイント</p>
                        <p>page_objに、ページネーション情報を代入して、テンプレートに渡します。</p>
                        <Tutorial6351 />
                    </Layout_tutorial_6>
                ): id == 36 ? (
                    <Layout_tutorial_6>
                       <p>templatetags追加</p>
                        <p>カスタムテンプレートタグを作成します。</p>
                        <p>カスタムテンプレートタグとは？</p>
                        <p>Djangoには、テンプレートで使用する｛% if ... %｝や｛% for ... in ... %｝などの、ビルトイン・テンプレートフィルタやタグが用意されています。</p>
                        <p>これらのビルトイン・テンプレートフィルタやタグで十分ですが、Webアプリケーションが複雑になってくると、自作したフィルタやタグが必要な時があります。</p>
                        <p>自分でタグやフィルタを作ることができる機能を、カスタムテンプレートタグ/フィルタといいます。</p>
                        <p>カスタムテンプレートタグは、templatetagsフォルダを作成し、__init__.pyを追加します</p>
                        <Tutorial6361 />
                        <Tutorial6362 />
                        <p>utils.pyファイルを追加して、カスタムテンプレートタグを作成します</p>
                        <p>今回は、ページネーション機能を追加するために、GETパラメータを一部を置き換えるタグを用意します。</p>
                        <Tutorial6363 />
                        <Tutorial6364 />
                    </Layout_tutorial_6>
                ): id == 37 ? (
                    <Layout_tutorial_6>
                      <p>searchテンプレート追加</p>
                        <p>検索結果の下にページネーションを追加します。</p>
                        <p>今までは50件すべて表示されていたので、10件ずつ表示するようにします</p>
                        <p>表示件数は自由にViewで設定できます</p>
                        <p>カスタムテンプレートタグを読み込むために、下記を追加します</p>
                        
                        <Tutorial6371 />
                        <Tutorial6372 />
                        <p>10件ずつ表示されています。</p>
                        <p>実際に別のページに遷移してみましょう。</p>
                  
                    </Layout_tutorial_6>
                ) : id == 38 ? (
                    <Layout_tutorial_6>
                         <p>Herokuデプロイ</p>
                        <p>ステップ1同様にHerokuにデプロイをして、公開します。</p>
                        <p>設定</p>
                        <p>ポイント</p>
                        <p>django-herokuをインポートすることによって、デプロイに必要な設定をしてくれます</p>
                        
                       
                        <p>Procfile作成</p>
                        <p>Procfileは、アプリのプロセスタイプやエントリーポイントを宣言するファイルです。</p>
                        <p>Procfileを作成します</p>
                     
                        <p>mysiteの部分はあなたが作成したプロジェクトのディレクトリ名を指定します。</p>
                        <p>gunicornは、Djangoを動かすWebサーバーです。</p>
                        <p>runtime.txt作成</p>
                        <p>runtime.txtにはプログラム実行時に必要なものを定義します。</p>
                        <p>ここではPythonが必要なのでPythonのバージョンを指定します。</p>
                        <p>runtime.txtを作成します。</p>
                      
                        <p>Herokuを操作</p>
                        <p>Herokuにデプロイする準備ができましたので、Herokuを操作していきます。</p>
                        <p>Herokuがインストールされていることを確認してください。</p>
                        <p>WSL</p>
                        <p>WSLを使用している方は、sudoが必要になります。</p>
                       
                        <p>Herokuにログイン</p>
                        <p>ターミナルからHerokuにログインします。</p>
                      
                        <p>Herokuプロジェクト作成</p>
                        <p>Herokuにプロジェクトを作成します。</p>
                        <p>好きなプロジェクト名を指定して下さい</p>
                        <p>このプロジェクト名がURLになりますので、既に他の人に使われているプロジェクト名は指定できません。</p>
                      
                        <p>Herokuにpush</p>
                        <p>GitHub</p>
                        <p>Herokuにpushする前に、GitHubにすべてコミットしておいて下さい</p>
                     
                        <p>プロセスを起動</p>
                        <p>下記コマンドでgunicornサーバーを起動します。</p>
                      
                        <p>Herokuのデータベースを構築</p>
                        <p>migrateコマンドをしてデータベースを構築します。</p>
                     
                        <p>管理ユーザーを作成</p>
                        <p>ローカルと同じようにHerokuでも管理ユーザーを作成することができます。</p>
                      
                        <p>パスワード</p>
                        <p>ユーザー名、メールアドレス、パスワードを入力します。 パスワードの入力は表示されませんので、間違えずに入力して下さい。</p>
                        <p>これで無事デプロイ完了です。</p>
                        <p>デプロイしたURLにアクセスしてみましょう。</p>
                        <p>ローカルと同じ画面が表示されているはずです</p>
                        <p>データベース</p>
                        <p>最初はデータがない初期状態なので、カテゴリと都道府県のデータを管理画面(/admin/)から登録する必要があります。</p>
                        <p>https://xxxx.herokuapp.com/admin/</p>
                    </Layout_tutorial_6>
                ): (
                    <></>
                )}
        </div>
    )
}

export default Post


const Tutorial621 = () => {
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


const Tutorial622 = () => {
    const test = `
    $ python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial623 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial624 = () => {
    const test = `
    Django~=3.1.4
    django-allauth~=0.41.0
    requests~=2.23.0
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial625 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial631 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial632 = () => {
    const test = `
    LANGUAGE_CODE = 'ja'
TIME_ZONE = 'Asia/Tokyo'

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial633 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial634 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial641 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py startapp foodie

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial642 = () => {
    const test = `
    # Application definition

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'foodie.apps.FoodieConfig', # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial661 = () => {
    const test = `
    from django.db import models


    class Category(models.Model):
        category_l = models.CharField("大業態コード", max_length=10, blank=False)
        name = models.CharField("カテゴリ名", max_length=30, blank=False)
    
        def __str__(self):
            return str(self.name)
    
    
    class Pref(models.Model):
        pref = models.CharField("都道府県コード", max_length=6, blank=False)
        name = models.CharField("都道府県名", max_length=10, blank=False)
    
        def __str__(self):
            return str(self.name)

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial662 = () => {
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


// const Tutorial661 = () => {
//     const test = `
//     from django.contrib import admin
//     from .models import Category, Pref
    
    
//     @admin.register(Category)
//     class CategoryAdmin(admin.ModelAdmin):
//         list_display = ('category_l', 'name')
//         list_display_links = ('category_l',)
//         list_editable = ('name',)
    
    
//     @admin.register(Pref)
//     class PrefAdmin(admin.ModelAdmin):
//         list_display = ('pref', 'name')
//         list_display_links = ('pref',)
//         list_editable = ('name',)
    

//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };


// const Tutorial662 = () => {
//     const test = `
//     (myvenv) ~$ python3 manage.py createsuperuser
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };

const Tutorial663 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial681 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include # 追加
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('foodie.urls')), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial682 = () => {
    const test = `
    from django.urls import path
from . import views

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


// const Tutorial681 = () => {
//     const test = `
//     from django.views.generic import TemplateView

// GNAVI_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
// GNAVI_KEY = "xxxxx" # 取得したkeyid

// class IndexView(TemplateView):
//     template_name = 'foodie/index.html'
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };


const Tutorial6101 = () => {
    const test = `
    foodie
└───templates
    └───foodie
        └───base.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6102 = () => {
    const test = `
    <!DOCTYPE html>
    <html lang="ja">
    {% load static %}
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Foodie</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
        <link rel="stylesheet" type="text/css" href="{% static 'css/style.css' %}">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">Foodie</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        {% if user.is_authenticated %}
                            <li class="nav-item">
                                <a class="nav-link" href="">ログアウト</a>
                            </li>
                        {% else %}
                            <li class="nav-item">
                                <a class="nav-link" href="">サインアップ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">ログイン</a>
                            </li>
                        {% endif %}
                    </ul>
                </div>
            </div>
        </nav>
    
        {% block header %}
        {% endblock header %}
    
        <main>
            <div class="container">
                <!-- メイン -->
                {% block content %}
                {% endblock content %}
            </div>
        </main>
    
        <footer class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">Copyright &copy; Your Website 2020 | Supported by <a class="gnavi" href="https://api.gnavi.co.jp/api/scope/" target="_blank">ぐるなびWebService</a></p>
            </div>
        </footer>
    
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6103 = () => {
    const test = `
    foodie
    └───templates
        └───foodie
            └───index.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6104 = () => {
    const test = `
    {% extends 'foodie/base.html' %}
    {% load static %}
    
    {% block header %}
        <header class="py-5 mb-3 bg-image-full">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Django Startup</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    {% endblock header %}
    
    {% block content %}
        <h2 class="mb-4">条件からお店を探す <i class="fas fa-utensils my-icon2"></i></h2>
    {% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6111 = () => {
    const test = `
	foodie
	└───static
		└───css
			└───style.css
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6112 = () => {
    const test = `
	body {
		color: #455A64 !important;
		font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", sans-serif !important;
		padding-top: 56px;
		display: flex;
		flex-flow: column;
		min-height: 100vh;
	}
	
	h1, h2, h3, h4, h5, h6 {
		line-height: 1.5em !important;
		letter-spacing: 0.1em !important;
	}
	
	p {
		line-height: 1.65em !important;
		text-align: justify !important;
		letter-spacing: 0.05em !important;
	}
	
	main {
		flex: 1;
	}
	
	.bg-image-full {
		background-image: url('/static/image/top.jpg');
		background-color: #868e96;
		background-attachment: scroll;
		position: relative;
		background-size: cover;
	}
	
	.bg-image-full .overlay {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #212529;
		opacity: 0.2;
	}
	
	.bg-image-full .site-heading {
		padding: 100px 0;
		text-align: center;
	}
	
	.bg-image-full .site-heading h1 {
		color: white;
		font-size: 80px;
	}
	
	*:focus {
		box-shadow: none !important;
	}
	
	.card img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	
	label, input[type='checkbox'] {
		cursor: pointer;
	}
	
	.img-search {
		width: 200px;
		height: 100%;
		object-fit: cover;
	}
	
	.my-icon {
		color: red !important;
	}
	
	.my-icon2 {
		color: coral !important;
	}
	
	.img-carousel {
		width: 100%;
		height: 300px;
		object-fit: cover;
	}
	
	.evaluation {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
	}
	
	.evaluation input[type="radio"] {
		display: none;
	}
	
	.evaluation label {
		position: relative;
		padding: 10px 10px 0;
		color: #ccc;
		cursor: pointer;
		font-size: 30px;
	}
	
	.evaluation label .text {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		text-align: center;
		font-size: 12px;
		color: gray;
	}
	
	.evaluation label:hover, .evaluation label:hover~label, .evaluation input[type="radio"]:checked~label {
		color: coral;
	}
	
	textarea {
		width: 80%;
		border-radius: 3px;
	}
	
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
		color: coral;
	}
	
	.star-rating-back {
		color: #ccc;
	}
	
	.average {
		color: red;
		font-size: 30px;
		font-weight: bold;
	}
	
	.review-count {
		vertical-align: middle;
	}
	
	.gnavi {
		color: white;
	}
	
	.gnavi:hover {
		color: #28A745;
		text-decoration: none;
	}
	
	.page-item.active .page-link {
		background-color: #28A745 !important;
		border-color: #28A745 !important;
		color: #fff !important;
	}
	
	.page-link {
		color: #28A745 !important;
	}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6121 = () => {
    const test = `
    foodie
    └───static
        └───image
            └───top.jpg
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6122 = () => {
    const test = `
	.bg-image-full {
        background-image: url('/static/image/top.jpg')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6131 = () => {
    const test = `
    {
        "@attributes": {
            "api_version": "v3"
        },
        "category_l": [
            {
                "category_l_code": "RSFST09000",
                "category_l_name": "居酒屋"
            },
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6141 = () => {
    const test = `
    foodie
    └───context_processors.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6142 = () => {
    const test = `
    from .models import Pref, Category


    def common(request):
        context = {
            'pref_list': Pref.objects.all().order_by('pref'),
            'category_list': Category.objects.all().order_by('category_l'),
        }
        return context
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6143 = () => {
    const test = `
    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                    'foodie.context_processors.common', # 追加
                ],
            },
        },
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6151 = () => {
    const test = `
    def gnavi_api(query):
    result = []
    result_api = requests.get(GNAVI_URL, params=query).text
    result_json = json.loads(result_api)
    if "error" not in result_json:
        result.extend(result_json["rest"])
    return result
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6152 = () => {
    const test = `
    from django.shortcuts import render
    from django.views.generic import TemplateView
    from .models import Pref, Category
    from .forms import SearchForm
    import json
    import requests
    
    # API に渡すパラメータの値の指定
    GNAVI_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
    GNAVI_KEY = "xxxx"
    
    class IndexView(TemplateView):
        template_name = 'foodie/index.html'
    
        def get_context_data(self, *args, **kwargs):
            searchform = SearchForm()
    
            params = {
                'searchform': searchform
            }
            return params
    
    
    def Search(request):
        if request.method == 'GET':
            searchform = SearchForm(request.POST)
    
            if searchform.is_valid():
                category_l = request.GET['category_l']
                pref = request.GET['pref']
                freeword = request.GET['freeword']
                num = 50
                lunch = request.GET['lunch']
                no_smoking = request.GET['no_smoking']
                card = request.GET['card']
                mobilephone = request.GET['mobilephone']
                bottomless_cup = request.GET['bottomless_cup']
                sunday_open = request.GET['sunday_open']
                takeout = request.GET['takeout']
                private_room = request.GET['private_room']
                midnight = request.GET['midnight']
                parking = request.GET['parking']
                memorial_service = request.GET['memorial_service']
                birthday_privilege = request.GET['birthday_privilege']
                betrothal_present = request.GET['betrothal_present']
                kids_menu = request.GET['kids_menu']
                outret = request.GET['outret']
                wifi = request.GET['wifi']
                microphone = request.GET['microphone']
                buffet = request.GET['buffet']
                late_lunch = request.GET['late_lunch']
                sports = request.GET['sports']
                until_morning = request.GET['until_morning']
                lunch_desert = request.GET['lunch_desert']
                projecter_screen = request.GET['projecter_screen']
                with_pet = request.GET['with_pet']
                deliverly = request.GET['deliverly']
                special_holiday_lunch = request.GET['special_holiday_lunch']
                e_money = request.GET['e_money']
                caterling = request.GET['caterling']
                breakfast = request.GET['breakfast']
                desert_buffet = request.GET['desert_buffet']
                lunch_buffet = request.GET['lunch_buffet']
                bento = request.GET['bento']
                lunch_salad_buffet = request.GET['lunch_salad_buffet']
                darts = request.GET['darts']
                web_reserve = request.GET['web_reserve']
                query = get_gnavi_data(
                    "",
                    category_l,
                    pref,
                    freeword,
                    num,
                    lunch,
                    no_smoking,
                    card,
                    mobilephone,
                    bottomless_cup,
                    sunday_open,
                    takeout,
                    private_room,
                    midnight,
                    parking,
                    memorial_service,
                    birthday_privilege,
                    betrothal_present,
                    kids_menu,
                    outret,
                    wifi,
                    microphone,
                    buffet,
                    late_lunch,
                    sports,
                    until_morning,
                    lunch_desert,
                    projecter_screen,
                    with_pet,
                    deliverly,
                    special_holiday_lunch,
                    e_money,
                    caterling,
                    breakfast,
                    desert_buffet,
                    lunch_buffet,
                    bento,
                    lunch_salad_buffet,
                    darts,
                    web_reserve
                )
                result = gnavi_api(query)
                total_hit_count = len(result)
                restaurant_list = get_restaurant_info(result)
    
            context = {
                'total_hit_count': total_hit_count,
                'restaurant_list': restaurant_list
            }
    
            return render(request, 'foodie/search.html', context)
    
    
    def gnavi_api(query):
        result = []
        result_api = requests.get(GNAVI_URL, params=query).text
        result_json = json.loads(result_api)
        if "error" not in result_json:
            result.extend(result_json["rest"])
        return result
    
    
    def get_gnavi_data(
            id,
            category_l,
            pref,
            freeword,
            hit_per_page,
            lunch='0',
            no_smoking='0',
            card='0',
            mobilephone='0',
            bottomless_cup='0',
            sunday_open='0',
            takeout='0',
            private_room='0',
            midnight='0',
            parking='0',
            memorial_service='0',
            birthday_privilege='0',
            betrothal_present='0',
            kids_menu='0',
            outret='0',
            wifi='0',
            microphone='0',
            buffet='0',
            late_lunch='0',
            sports='0',
            until_morning='0',
            lunch_desert='0',
            projecter_screen='0',
            with_pet='0',
            deliverly='0',
            special_holiday_lunch='0',
            e_money='0',
            caterling='0',
            breakfast='0',
            desert_buffet='0',
            lunch_buffet='0',
            bento='0',
            lunch_salad_buffet='0',
            darts='0',
            web_reserve='0'
        ):
        query = {
            "keyid": GNAVI_KEY,
            "id": id,
            "pref": pref,
            "category_l": category_l,
            "freeword": freeword,
            "hit_per_page": hit_per_page,
            "lunch": lunch,
            "no_smoking": no_smoking,
            "card": card,
            "mobilephone": mobilephone,
            "bottomless_cup": bottomless_cup,
            "sunday_open": sunday_open,
            "takeout": takeout,
            "private_room": private_room,
            "midnight": midnight,
            "parking": parking,
            "memorial_service": memorial_service,
            "birthday_privilege": birthday_privilege,
            "betrothal_present": betrothal_present,
            "kids_menu": kids_menu,
            "outret": outret,
            "wifi": wifi,
            "microphone": microphone,
            "buffet": buffet,
            "late_lunch": late_lunch,
            "sports": sports,
            "until_morning": until_morning,
            "lunch_desert": lunch_desert,
            "projecter_screen": projecter_screen,
            "with_pet": with_pet,
            "deliverly": deliverly,
            "special_holiday_lunch": special_holiday_lunch,
            "e_money": e_money,
            "caterling": caterling,
            "breakfast": breakfast,
            "desert_buffet": desert_buffet,
            "lunch_buffet": lunch_buffet,
            "bento": bento,
            "lunch_salad_buffet": lunch_salad_buffet,
            "darts": darts,
            "web_reserve": web_reserve
        }
        query = {k: v for (k, v) in query.items() if v != '0' and v != ''}
    
        return query
    
    
    def get_restaurant_info(restaurants):
        restaurant_list = []
        for restaurant in restaurants:
            id = restaurant["id"]
            update_date = restaurant["update_date"]
            name = restaurant["name"]
            name_kana = restaurant["name_kana"]
            latitude = restaurant["latitude"]
            longitude = restaurant["longitude"]
            category = restaurant["category"]
            url = restaurant["url"]
            url_mobile = restaurant["url_mobile"]
            coupon_url_pc = restaurant["coupon_url"]["pc"]
            coupon_url_mobile = restaurant["coupon_url"]["mobile"]
            shop_image1 = restaurant["image_url"]["shop_image1"]
            shop_image2 = restaurant["image_url"]["shop_image2"]
            qrcode = restaurant["image_url"]["qrcode"]
            address = restaurant["address"]
            tel = restaurant["tel"]
            tel_sub = restaurant["tel_sub"]
            fax = restaurant["fax"]
            opentime = restaurant["opentime"]
            holiday = restaurant["holiday"]
            line = restaurant["access"]["line"]
            station = restaurant["access"]["station"]
            station_exit = restaurant["access"]["station_exit"]
            walk = restaurant["access"]["walk"]
            note = restaurant["access"]["note"]
            parking_lots = restaurant["parking_lots"]
            pr_short = restaurant["pr"]["pr_short"]
            pr_long = restaurant["pr"]["pr_long"]
            areaname = restaurant["code"]["areaname"]
            prefname = restaurant["code"]["prefname"]
            areaname_s = restaurant["code"]["areaname_s"]
            category_name_l = " | ".join(filter(lambda a: a != '', restaurant["code"]["category_name_l"]))
            category_name_s = " | ".join(filter(lambda a: a != '', restaurant["code"]["category_name_s"]))
            budget = restaurant["budget"]
            party = restaurant["party"]
            lunch = restaurant["lunch"]
            credit_card = restaurant["credit_card"]
            e_money = restaurant["e_money"]
    
            restaurant_list.append([
                id, # 0
                update_date, # 1
                name, # 2
                name_kana, # 3
                latitude, # 4
                longitude, # 5
                category, # 6
                url, # 7
                url_mobile, # 8
                coupon_url_pc, # 9
                coupon_url_mobile, # 10
                shop_image1, # 11
                shop_image2, # 12
                qrcode, # 13
                address, # 14
                tel, # 15
                tel_sub, # 16
                fax, # 17
                opentime, # 18
                holiday, # 19
                line, # 20
                station, # 21
                station_exit, # 22
                walk, # 23
                note, # 24
                parking_lots, # 25
                pr_short, # 26
                pr_long, # 27
                areaname, # 28
                prefname, # 29
                areaname_s, # 30
                category_name_l, # 31
                category_name_s, # 32
                budget, # 33
                party, # 34
                lunch, # 35
                credit_card, # 36
                e_money # 37
            ])
        return restaurant_list
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6161 = () => {
    const test = `
    foodie
    └───forms.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6162 = () => {
    const test = `
    from django import forms
    from .models import Category, Pref
    
    
    class SearchForm(forms.Form):
        pref = forms.ModelChoiceField(
            label='都道府県',
            required=False,
            queryset=Pref.objects,
        )
        category = forms.ModelChoiceField(
            label='カテゴリ',
            required=False,
            queryset=Category.objects,
        )
        freeword = forms.CharField(
            label='フリーワード',
            required=False,
            min_length=2,
            max_length=100
        )
    
        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            pref = self.fields['pref']
            category = self.fields['category']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6171 = () => {
    const test = `
    from django.urls import path
    from . import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('search/', views.Search, name='search'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6181 = () => {
    const test = `
    def Search(request):
    if request.method == 'GET':
        searchform = SearchForm(request.POST)

        if searchform.is_valid():
            ...
            lunch = request.GET['lunch']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6182 = () => {
    const test = `
    {% block content %}
    <h2 class="mb-4">条件からお店を探す <i class="fas fa-utensils my-icon2"></i></h2>
    <div class="p-4 mb-4 bg-light rounded border">
        <form method="GET" action="{% url 'search' %}" name="searchform">
            <h4 class="mb-4">基本条件</h4>
            <div class="row mb-4">
                <div class="col-md-4">
                    <label>エリア</label>
                    <select class="form-control" name="pref">
                        <option value="">こだわらない</option>
                        {% for item in pref_list %}
                            <option value="{{item.pref}}">{{ item.name }}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-md-4">
                    <label>ジャンル</label>
                    <select class="form-control" name="category_l">
                        <option value="">こだわらない</option>
                        {% for item in category_list %}
                            <option value="{{item.category_l}}">{{ item.name }}</option>
                        {% endfor %}
                    </select>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="">フリーワード</label>
                        <input class="form-control" type="text" placeholder="こだわらない" aria-label="Search" name="freeword">
                    </div>
                </div>
            </div>

            <h4 class="mb-4">こだわり条件</h4>

            <div class="row mb-4">
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="lunch">
                            <input type="hidden" name="lunch" value="0">
                            <input type="checkbox" class="form-check-input" id="lunch" name="lunch" value="1">
                            ランチ営業
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="no_smoking">
                            <input type="hidden" name="no_smoking" value="0">
                            <input type="checkbox" class="form-check-input" id="no_smoking" name="no_smoking" value="1">
                            禁煙席
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="card">
                            <input type="hidden" name="card" value="0">
                            <input type="checkbox" class="form-check-input" id="card" name="card" value="1">
                            カード利用可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="mobilephone">
                            <input type="hidden" name="mobilephone" value="0">
                            <input type="checkbox" class="form-check-input" id="mobilephone" name="mobilephone" value="1">
                            携帯の電波
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="bottomless_cup">
                            <input type="hidden" name="bottomless_cup" value="0">
                            <input type="checkbox" class="form-check-input" id="bottomless_cup" name="bottomless_cup" value="1">
                            飲み放題
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="sunday_open">
                            <input type="hidden" name="sunday_open" value="0">
                            <input type="checkbox" class="form-check-input" id="sunday_open" name="sunday_open" value="1">
                            日曜営業
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="takeout">
                            <input type="hidden" name="takeout" value="0">
                            <input type="checkbox" class="form-check-input" id="takeout" name="takeout" value="1">
                            テイクアウト
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="private_room">
                            <input type="hidden" name="private_room" value="0">
                            <input type="checkbox" class="form-check-input" id="private_room" name="private_room" value="1">
                            個室
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="midnight">
                            <input type="hidden" name="midnight" value="0">
                            <input type="checkbox" class="form-check-input" id="midnight" name="midnight" value="1">
                            深夜営業
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="parking">
                            <input type="hidden" name="parking" value="0">
                            <input type="checkbox" class="form-check-input" id="parking" name="parking" value="1">
                            駐車場
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="memorial_service">
                            <input type="hidden" name="memorial_service" value="0">
                            <input type="checkbox" class="form-check-input" id="memorial_service" name="memorial_service" value="1">
                            法事利用可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="birthday_privilege">
                            <input type="hidden" name="birthday_privilege" value="0">
                            <input type="checkbox" class="form-check-input" id="birthday_privilege" name="birthday_privilege" value="1">
                            誕生日特典
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="betrothal_present">
                            <input type="hidden" name="betrothal_present" value="0">
                            <input type="checkbox" class="form-check-input" id="betrothal_present" name="betrothal_present" value="1">
                            結納利用可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="kids_menu">
                            <input type="hidden" name="kids_menu" value="0">
                            <input type="checkbox" class="form-check-input" id="kids_menu" name="kids_menu" value="1">
                            キッズメニュー
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="outret">
                            <input type="hidden" name="outret" value="0">
                            <input type="checkbox" class="form-check-input" id="outret" name="outret" value="1">
                            電源
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="wifi">
                            <input type="hidden" name="wifi" value="0">
                            <input type="checkbox" class="form-check-input" id="wifi" name="wifi" value="1">
                            wifi
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="microphone">
                            <input type="hidden" name="microphone" value="0">
                            <input type="checkbox" class="form-check-input" id="microphone" name="microphone" value="1">
                            マイク
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="buffet">
                            <input type="hidden" name="buffet" value="0">
                            <input type="checkbox" class="form-check-input" id="buffet" name="buffet" value="1">
                            食べ放題
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="late_lunch">
                            <input type="hidden" name="late_lunch" value="0">
                            <input type="checkbox" class="form-check-input" id="late_lunch" name="late_lunch" value="1">
                            14時以降のランチ
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="sports">
                            <input type="hidden" name="sports" value="0">
                            <input type="checkbox" class="form-check-input" id="sports" name="sports" value="1">
                            スポーツ観戦可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="until_morning">
                            <input type="hidden" name="until_morning" value="0">
                            <input type="checkbox" class="form-check-input" id="until_morning" name="until_morning" value="1">
                            朝まで営業
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="lunch_desert">
                            <input type="hidden" name="lunch_desert" value="0">
                            <input type="checkbox" class="form-check-input" id="lunch_desert" name="lunch_desert" value="1">
                            ランチデザート
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="projecter_screen">
                            <input type="hidden" name="projecter_screen" value="0">
                            <input type="checkbox" class="form-check-input" id="projecter_screen" name="projecter_screen" value="1">
                            プロジェクター
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="with_pet">
                            <input type="hidden" name="with_pet" value="0">
                            <input type="checkbox" class="form-check-input" id="with_pet" name="with_pet" value="1">
                            ペット同伴可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="deliverly">
                            <input type="hidden" name="deliverly" value="0">
                            <input type="checkbox" class="form-check-input" id="deliverly" name="deliverly" value="1">
                            デリバリー
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="special_holiday_lunch">
                            <input type="hidden" name="special_holiday_lunch" value="0">
                            <input type="checkbox" class="form-check-input" id="special_holiday_lunch" name="special_holiday_lunch" value="1">
                            土日特別ランチ
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="e_money">
                            <input type="hidden" name="e_money" value="0">
                            <input type="checkbox" class="form-check-input" id="e_money" name="e_money" value="1">
                            電子マネー利用可
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="caterling">
                            <input type="hidden" name="caterling" value="0">
                            <input type="checkbox" class="form-check-input" id="caterling" name="caterling" value="1">
                            ケータリング
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="breakfast">
                            <input type="hidden" name="breakfast" value="0">
                            <input type="checkbox" class="form-check-input" id="breakfast" name="breakfast" value="1">
                            モーニング
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="bento">
                            <input type="hidden" name="bento" value="0">
                            <input type="checkbox" class="form-check-input" id="bento" name="bento" value="1">
                            お弁当
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="desert_buffet">
                            <input type="hidden" name="desert_buffet" value="0">
                            <input type="checkbox" class="form-check-input" id="desert_buffet" name="desert_buffet" value="1">
                            デザートビュッフェ
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="lunch_buffet">
                            <input type="hidden" name="lunch_buffet" value="0">
                            <input type="checkbox" class="form-check-input" id="lunch_buffet" name="lunch_buffet" value="1">
                            ランチビュッフェ
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="lunch_salad_buffet">
                            <input type="hidden" name="lunch_salad_buffet" value="0">
                            <input type="checkbox" class="form-check-input" id="lunch_salad_buffet" name="lunch_salad_buffet" value="1">
                            ランチサラダバー
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="darts">
                            <input type="hidden" name="darts" value="0">
                            <input type="checkbox" class="form-check-input" id="darts" name="darts" value="1">
                            ダーツ
                        </label>
                    </div>
                </div>
                <div class="col-sm-4 col-md-2">
                    <div class="form-group form-check">
                        <label class="form-check-label" for="web_reserve">
                            <input type="hidden" name="web_reserve" value="0">
                            <input type="checkbox" class="form-check-input" id="web_reserve" name="web_reserve" value="1">
                            Web予約可
                        </label>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <button class="btn btn-success" type="submit">この条件で絞り込む</button>
            </div>
        </form>
    </div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6191 = () => {
    const test = `
	{% extends 'foodie/base.html' %}
	{% load static %}
	
	{% block content %}
		<div class="row">
			<div class="col-md-3">
				<div class="card my-4">
					<h5 class="card-header">お店を探す</h5>
					<div class="card-body">
						<form method="GET" action="{% url 'search' %}" name="searchform">
							<div class="row">
								<div class="col-12 mb-2">
									<label>エリア</label>
									<select class="form-control" name="pref">
										<option value="">こだわらない</option>
										{% for item in pref_list %}
										<option value="{{item.pref}}">{{ item.name }}</option>
										{% endfor %}
									</select>
								</div>
								<div class="col-12 mb-2">
									<label>ジャンル</label>
									<select class="form-control" name="category_l">
										<option value="">こだわらない</option>
										{% for item in category_list %}
										<option value="{{item.category_l}}">{{ item.name }}</option>
										{% endfor %}
									</select>
								</div>
								<div class="col-12 mb-2">
									<div class="form-group">
										<label>フリーワード</label>
										<input class="form-control" type="text" placeholder="こだわらない"
											aria-label="Search" name="freeword">
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="lunch">
											<input type="hidden" name="lunch" value="0">
											<input type="checkbox" class="form-check-input" id="lunch" name="lunch" value="1">
											ランチ営業
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="no_smoking">
											<input type="hidden" name="no_smoking" value="0">
											<input type="checkbox" class="form-check-input" id="no_smoking" name="no_smoking" value="1">
											禁煙席
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="card">
											<input type="hidden" name="card" value="0">
											<input type="checkbox" class="form-check-input" id="card" name="card" value="1">
											カード利用可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="mobilephone">
											<input type="hidden" name="mobilephone" value="0">
											<input type="checkbox" class="form-check-input" id="mobilephone" name="mobilephone" value="1">
											携帯の電波
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="bottomless_cup">
											<input type="hidden" name="bottomless_cup" value="0">
											<input type="checkbox" class="form-check-input" id="bottomless_cup" name="bottomless_cup" value="1">
											飲み放題
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="sunday_open">
											<input type="hidden" name="sunday_open" value="0">
											<input type="checkbox" class="form-check-input" id="sunday_open" name="sunday_open" value="1">
											日曜営業
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="takeout">
											<input type="hidden" name="takeout" value="0">
											<input type="checkbox" class="form-check-input" id="takeout" name="takeout" value="1">
											テイクアウト
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="private_room">
											<input type="hidden" name="private_room" value="0">
											<input type="checkbox" class="form-check-input" id="private_room" name="private_room" value="1">
											個室
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="midnight">
											<input type="hidden" name="midnight" value="0">
											<input type="checkbox" class="form-check-input" id="midnight" name="midnight" value="1">
											深夜営業
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="parking">
											<input type="hidden" name="parking" value="0">
											<input type="checkbox" class="form-check-input" id="parking" name="parking" value="1">
											駐車場
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="memorial_service">
											<input type="hidden" name="memorial_service" value="0">
											<input type="checkbox" class="form-check-input" id="memorial_service" name="memorial_service" value="1">
											法事利用可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="birthday_privilege">
											<input type="hidden" name="birthday_privilege" value="0">
											<input type="checkbox" class="form-check-input" id="birthday_privilege" name="birthday_privilege" value="1">
											誕生日特典
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="betrothal_present">
											<input type="hidden" name="betrothal_present" value="0">
											<input type="checkbox" class="form-check-input" id="betrothal_present" name="betrothal_present" value="1">
											結納利用可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="kids_menu">
											<input type="hidden" name="kids_menu" value="0">
											<input type="checkbox" class="form-check-input" id="kids_menu" name="kids_menu" value="1">
											キッズメニュー
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="outret">
											<input type="hidden" name="outret" value="0">
											<input type="checkbox" class="form-check-input" id="outret" name="outret" value="1">
											電源
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="wifi">
											<input type="hidden" name="wifi" value="0">
											<input type="checkbox" class="form-check-input" id="wifi" name="wifi" value="1">
											wifi
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="microphone">
											<input type="hidden" name="microphone" value="0">
											<input type="checkbox" class="form-check-input" id="microphone" name="microphone" value="1">
											マイク
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="buffet">
											<input type="hidden" name="buffet" value="0">
											<input type="checkbox" class="form-check-input" id="buffet" name="buffet" value="1">
											食べ放題
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="late_lunch">
											<input type="hidden" name="late_lunch" value="0">
											<input type="checkbox" class="form-check-input" id="late_lunch" name="late_lunch" value="1">
											14時以降のランチ
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="sports">
											<input type="hidden" name="sports" value="0">
											<input type="checkbox" class="form-check-input" id="sports" name="sports" value="1">
											スポーツ観戦可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="until_morning">
											<input type="hidden" name="until_morning" value="0">
											<input type="checkbox" class="form-check-input" id="until_morning" name="until_morning" value="1">
											朝まで営業
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="lunch_desert">
											<input type="hidden" name="lunch_desert" value="0">
											<input type="checkbox" class="form-check-input" id="lunch_desert" name="lunch_desert" value="1">
											ランチデザート
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="projecter_screen">
											<input type="hidden" name="projecter_screen" value="0">
											<input type="checkbox" class="form-check-input" id="projecter_screen" name="projecter_screen" value="1">
											プロジェクター
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="with_pet">
											<input type="hidden" name="with_pet" value="0">
											<input type="checkbox" class="form-check-input" id="with_pet" name="with_pet" value="1">
											ペット同伴可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="deliverly">
											<input type="hidden" name="deliverly" value="0">
											<input type="checkbox" class="form-check-input" id="deliverly" name="deliverly" value="1">
											デリバリー
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="special_holiday_lunch">
											<input type="hidden" name="special_holiday_lunch" value="0">
											<input type="checkbox" class="form-check-input" id="special_holiday_lunch" name="special_holiday_lunch" value="1">
											土日特別ランチ
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="e_money">
											<input type="hidden" name="e_money" value="0">
											<input type="checkbox" class="form-check-input" id="e_money" name="e_money" value="1">
											電子マネー利用可
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="caterling">
											<input type="hidden" name="caterling" value="0">
											<input type="checkbox" class="form-check-input" id="caterling" name="caterling" value="1">
											ケータリング
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="breakfast">
											<input type="hidden" name="breakfast" value="0">
											<input type="checkbox" class="form-check-input" id="breakfast" name="breakfast" value="1">
											モーニング
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="bento">
											<input type="hidden" name="bento" value="0">
											<input type="checkbox" class="form-check-input" id="bento" name="bento" value="1">
											お弁当
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="desert_buffet">
											<input type="hidden" name="desert_buffet" value="0">
											<input type="checkbox" class="form-check-input" id="desert_buffet" name="desert_buffet" value="1">
											デザートビュッフェ
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="lunch_buffet">
											<input type="hidden" name="lunch_buffet" value="0">
											<input type="checkbox" class="form-check-input" id="lunch_buffet" name="lunch_buffet" value="1">
											ランチビュッフェ
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="lunch_salad_buffet">
											<input type="hidden" name="lunch_salad_buffet" value="0">
											<input type="checkbox" class="form-check-input" id="lunch_salad_buffet" name="lunch_salad_buffet" value="1">
											ランチサラダバー
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="darts">
											<input type="hidden" name="darts" value="0">
											<input type="checkbox" class="form-check-input" id="darts" name="darts" value="1">
											ダーツ
										</label>
									</div>
								</div>
								<div class="col-6 col-md-12">
									<div class="form-group form-check">
										<label class="form-check-label" for="web_reserve">
											<input type="hidden" name="web_reserve" value="0">
											<input type="checkbox" class="form-check-input" id="web_reserve" name="web_reserve" value="1">
											Web予約可
										</label>
									</div>
								</div>
							</div>
							<div class="text-center">
								<button class="btn btn-success" type="submit">再検索</button>
							</div>
						</form>
					</div>
				</div>
			</div>
	
			<div class="col-md-9">
				{% if restaurant_list %}
					<p class="my-4">検索結果 {{ total_hit_count }} 件</p>
					{% for resutaurant in restaurant_list %}
					<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
						<div class="col-auto">
							{% if resutaurant.11 %}
								<img src="{{ resutaurant.11 }}" alt="{{ resutaurant.2 }}" class="img-rounded img-responsive img-search">
							{% else %}
								<img src="https://placehold.jp/300x300.png?text=No Image" alt="{{ resutaurant.2 }}" class="img-rounded img-responsive img-search">
							{% endif %}
						</div>
						<div class="col p-4 d-flex flex-column position-static">
							<strong class="d-inline-block mb-2 text-success">{{ resutaurant.32 }}</strong>
							<h4 class="mb-2">{{ resutaurant.2 }}</h4>
							<p class="card-text mb-1"><i class="fas fa-subway fa-fw my-icon"></i>{{ resutaurant.21 }}・徒歩{{ resutaurant.23 }}分</p>
							<p class="card-text mb-2"><i class="fas fa-yen-sign fa-fw my-icon"></i>平均{{ resutaurant.33 }}円</p>
							<p class="card-text mb-auto">{{ resutaurant.26 }}</p>
							<a href="" class="stretched-link"></a>
						</div>
					</div>
					{% endfor %}
				{% else %}
					<h4 class="mt-5">該当するものはありません。</h4>
				{% endif %}
			</div>
		</div>
	{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6201 = () => {
    const test = `
    def ShopInfo(request, restid):
    query = get_gnavi_data(
        restid,
        "",
        "",
        "",
        1
    )
    result = gnavi_api(query)
    restaurants_info = get_restaurant_info(result)

    if request.method == 'GET':
        params = {
            'restaurants_info': restaurants_info,
        }
        return render(request, 'foodie/shop_info.html', params)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6211 = () => {
    const test = `
    from django.urls import path
from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('search', views.Search, name='search'),
    path('shop_info/<str:restid>', views.ShopInfo, name='shop_info') # 追加
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6221 = () => {
    const test = `
    {% extends 'foodie/base.html' %}
    {% load static %}
    
    {% block content %}
        <div class="row align-items-center my-3">
            <div class="col-md-4">
                <div id="carouselControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {% if restaurants_info.0.11 %}
                                <img src="{{ restaurants_info.0.11 }}" class="d-block img-carousel" alt="{{ restaurants_info.0.2 }}">
                            {% else %}
                                <img src="https://placehold.jp/400x400.png?text=No Image" class="d-block img-carousel" alt="{{ restaurants_info.0.2 }}">
                            {% endif %}
                        </div>
                        {% if restaurants_info.0.12 %}
                            <div class="carousel-item">
                                <img src="{{ restaurants_info.0.12 }}" class="d-block img-carousel" alt="{{ restaurants_info.0.2 }}">
                            </div>
                        {% endif %}
                    </div>
                    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">前</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">次</span>
                    </a>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <strong class="d-inline-block mb-2 text-success">{{ restaurants_info.0.32 }}</strong>
                    <h3 class="mb-2">{{ restaurants_info.0.2 }}</h3>
                    <hr>
                    <p class="card-text mb-1"><i class="fas fa-map-marker-alt fa-fw my-icon"></i>{{ restaurants_info.0.14 }}</p>
                    <p class="card-text mb-3"><i class="fas fa-subway fa-fw my-icon"></i>{{ restaurants_info.0.21 }}・徒歩{{ restaurants_info.0.23 }}分</p>
                    <p class="card-text mb-auto">{{ restaurants_info.0.27|linebreaksbr }}</p>   
                </div>
            </div>
    
            <div class="col-12 mt-3">
                <p><i class="fas fa-store-alt fa-fw my-icon2"></i> お店情報</p>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td class="bg-light text-center" style="width:20%">お店</td>
                            <td><a href="{{ restaurants_info.0.7 }}">{{ restaurants_info.0.2 }}</a></td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">住所</td>
                            <td><a href="https://www.google.com/maps?q={{ restaurants_info.0.4 }},{{ restaurants_info.0.5 }}" target="_blank">{{ restaurants_info.0.14 }}</a></td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">アクセス</td>
                            <td>{{ restaurants_info.0.20 }} {{ restaurants_info.0.21 }} {{ restaurants_info.0.22 }} 徒歩{{ restaurants_info.0.23 }}分</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">電話番号</td>
                            <td>
                                <a href="tel:{{ restaurants_info.0.15 }}">{{ restaurants_info.0.15 }}</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">営業時間</td>
                            <td>{{ restaurants_info.0.18|linebreaksbr }}</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">定休日</td>
                            <td>{{ restaurants_info.0.19 }}</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">平均予算</td>
                            <td>{{ restaurants_info.0.33 }}円</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">駐車場</td>
                            <td>{{ restaurants_info.0.25 }}</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">クレジットカード</td>
                            <td>{{ restaurants_info.0.36 }}</td>
                        </tr>
                        <tr>
                            <td class="bg-light text-center">電子マネー</td>
                            <td>{{ restaurants_info.0.37 }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    {% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6222 = () => {
    const test = `
    <p class="card-text mb-auto">{{ resutaurant.26 }}</p>
    <a href="{% url 'shop_info' resutaurant.0 %}" class="stretched-link"></a> <!-- url追加 -->
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6231 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py startapp accounts
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6232 = () => {
    const test = `
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'foodie.apps.FoodieConfig',
        'accounts.apps.AccountsConfig', # 追加
        'django.contrib.sites', # 追加
        'allauth',  # 追加
        'allauth.account', # 追加
    ]
    
    # 一番下に追加
    SITE_ID = 1
    LOGIN_REDIRECT_URL = '/'
    ACCOUNT_LOGOUT_REDIRECT_URL = '/'
    # SignUpした時に確認Emailアドレスを送信しない場合
    ACCOUNT_EMAIL_VERIFICATION = 'none'
    # SignUpした時に確認Emailアドレスを送信する場合
    # EMAIL_HOST = 'smtp.gmail.com'
    # EMAIL_PORT = 587
    # EMAIL_HOST_USER = 'gmail adress'
    # EMAIL_HOST_PASSWORD = 'gmail password'
    # EMAIL_USE_TLS = True
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6233 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('foodie.urls')),
        path('accounts/', include('allauth.urls')), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6234 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6241 = () => {
    const test = `
    accounts
└───templates
    └───account
        └───login.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6242 = () => {
    const test = `
    {% extends "foodie/base.html" %}

    {% block header %}
        <header class="py-5 mb-3 bg-image-full">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    {% endblock header %}
    
    {% block content %}
        <p class="text-center mb-4">
            アカウントをまだお持ちでなければ、こちらから<a href="{% url 'account_signup' %}">ユーザー登録</a>して下さい。
        </p>
        <div class="row justify-content-center mb-4">
            <form method="post" action="{% url 'account_login' %}">
                {% csrf_token %}
                <table class="table">{{ form.as_table }}</table>
                {% if redirect_field_value %}
                <input type="hidden" name="{{ redirect_field_name }}" value="{{ redirect_field_value }}" />
                {% endif %}
                <!-- Email設定が必要 -->
                <!--
                <p class="text-center">
                    <a class="button secondaryAction" href="{% url 'account_reset_password' %}">パスワードをお忘れですか？</a>
                </p>
                -->
                <div class="text-center">
                    <button type="submit" class="save btn btn-success" role="button">ログイン</button>
                </div>
            </form>
        </div>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6251 = () => {
    const test = `
    accounts
    └───templates
        └───account
            └───logout.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6252 = () => {
    const test = `
    {% extends "foodie/base.html" %}

    {% block header %}
        <header class="py-5 mb-3 bg-image-full">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Log out</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    {% endblock header %}
    
    {% block content %}
        <div class="row justify-content-center">
            <form method="post" action="{% url 'account_logout' %}">
            {% csrf_token %}
            {% if redirect_field_value %}
                <input type="hidden" name="{{ redirect_field_name }}" value="{{ redirect_field_value }}"/>
            {% endif %}
            <div class="text-center">
                <p>ログアウトしますか？</p>
                <button type="submit" class="save btn btn-success" role="button">ログアウト</button>
            </div>
            </form>
        </div>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6261 = () => {
    const test = `
    accounts
    └───templates
        └───account
            └───signup.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6262 = () => {
    const test = `
    {% extends "foodie/base.html" %}

    {% block header %}
        <header class="py-5 mb-3 bg-image-full">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Sign Up</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    {% endblock header %}
    
    {% block content %}
        <div class="row justify-content-center mb-4">
            <form method="post" action="{% url 'account_signup' %}">
            {% csrf_token %}
            <table class="table">{{ form.as_table }}</table>
    
            {% if redirect_field_value %}
                <input type="hidden" name="{{ redirect_field_name }}" value="{{ redirect_field_value }}" />
            {% endif %}
    
            <div class="text-center">
                <button type="submit" class="save btn btn-success" role="button">サインアップ</button>
            </div>
            </form>
        </div>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6271 = () => {
    const test = `
    <ul class="navbar-nav ml-auto">
    {% if user.is_authenticated %}
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
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6281 = () => {
    const test = `
    from django.contrib.auth.models import User # 追加

    class Review(models.Model): # 追加
        SCORE_CHOICES = [
            (1, '★'),
            (2, '★★'),
            (3, '★★★'),
            (4, '★★★★'),
            (5, '★★★★★'),
        ]
    
        shop_id = models.CharField('レストランID', max_length=10, blank=False)
        shop_name = models.CharField('レストラン名', max_length=200, blank=False)
        user = models.ForeignKey(User, on_delete=models.PROTECT)
        comment = models.TextField(verbose_name='口コミ', blank=False)
        score = models.PositiveSmallIntegerField(verbose_name='スコア', choices=SCORE_CHOICES, default='3')
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
    
        def get_score_percent(self):
            score_percent = round(self.score / 5 * 100)
            return score_percent
    
        class Meta:
            unique_together = ('shop_id', 'user')
    
        def __str__(self):
            return str(self.shop_id)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6282 = () => {
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

const Tutorial6291 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6301 = () => {
    const test = `
    from django.shortcuts import render, redirect # 追加
    from django.views.generic import TemplateView
    from .models import Pref, Category, Review # 追加
    from .forms import SearchForm, ReviewForm # 追加
    from django.db.models import Avg # 追加
    from django.contrib import messages
    import json
    import requests
    
    def ShopInfo(request, restid):
        query = get_gnavi_data(
            restid,
            "",
            "",
            "",
            1
        )
        result = gnavi_api(query)
        restaurants_info = get_restaurant_info(result)
    
        if request.method == 'GET':
            review_count = Review.objects.filter(shop_id=restid).count()
            score_ave = Review.objects.filter(shop_id=restid).aggregate(Avg('score'))
            average = score_ave['score__avg']
            if average:
                average_rate = average / 5 * 100
            else:
                average_rate = 0
            review_form = ReviewForm()
            review_list = Review.objects.filter(shop_id=restid)
    
            params = {
                'review_count': review_count,
                'restaurants_info': restaurants_info,
                'review_form': review_form,
                'review_list': review_list,
                'average': average,
                'average_rate': average_rate,
            }
            return render(request, 'foodie/shop_info.html', params)
        else:
            form = ReviewForm(data=request.POST)
    
            if form.is_valid():
                review = Review()
                review.shop_id = restid
                review.shop_name = restaurants_info[0][2]
                review.user = request.user
                review.score = request.POST['score']
                review.comment = request.POST['comment']
                is_exist = Review.objects.filter(shop_id = review.shop_id).filter(user = review.user).count()
                
                if is_exist:
                    messages.error(request, '口コミを投稿済みです')
                else:
                    review.save()
                    messages.success(request, '口コミを投稿しました')
            else:
                messages.error(request, 'エラーがあります')
    
            return redirect('shop_info', restid)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6311 = () => {
    const test = `
    <div class="col-md-8">
    <div class="card-body">
        <strong class="d-inline-block mb-2 text-success">{{ restaurants_info.0.32 }}</strong>
        <h3 class="mb-2">{{ restaurants_info.0.2 }}</h3>
        {% if not average_rate == 0 %}
        <div class="d-flex flex-row">
            <div class="star-rating">
                <div class="star-rating-front" style="width: {{ average_rate }}%">★★★★★</div>
                <div class="star-rating-back">★★★★★</div>
            </div>
            <div class="average ml-2">
                {{ average|floatformat:2 }}
            </div>
            <div class="d-flex align-items-center ml-2">
                <i class="fas fa-comment-dots fa-fw"></i>{{ review_count }}件
            </div>
        </div>
        {% else %}
            <p>まだ口コミはありません。</p>
        {% endif %}
        <hr>
        <p class="card-text mb-1"><i class="fas fa-map-marker-alt fa-fw my-icon"></i>{{ restaurants_info.0.14 }}</p>
        <p class="card-text mb-3"><i class="fas fa-subway fa-fw my-icon"></i>{{ restaurants_info.0.21 }}・徒歩{{ restaurants_info.0.23 }}分</p>
        <p class="card-text mb-auto">{{ restaurants_info.0.27|linebreaksbr }}</p>   
    </div>
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6312 = () => {
    const test = `
    <tr>
    <td class="bg-light text-center">電子マネー</td>
    <td>{{ restaurants_info.0.37 }}</td>
</tr>
</table>
</div>
</div>

<div class="col-md-12">
<p><i class="fas fa-store-alt fa-fw my-icon2"></i> 口コミ情報</p>
<div class="card card-outline-secondary mb-3">
<div class="card-header">
口コミ一覧
</div>
<div class="card-body">
{% if review_list %}
    {% for item in review_list %}
        <div class="d-flex flex-row">
            <div class="star-rating mb-2">
                <div class="star-rating-front" style="width: {{ item.get_score_percent }}%">★★★★★</div>
                <div class="star-rating-back">★★★★★</div>
            </div>
        </div>
        <p>{{ item.comment }}</p>
        <small class="text-muted">Posted by {{ item.user }} on {{ item.created_at }}</small>
        <hr>
    {% endfor %}
{% else %}
    <p>まだ口コミはありません。</p>
{% endif %}
</div>
</div>
<div class="card card-outline-secondary">
<div class="card-header">
口コミを投稿する
</div>
<div class="card-body">
{% if user.is_authenticated %}
    <form class="login-form" action="" method="POST">
        {{ review_form.non_field_errors }}
        <div class="evaluation">
            <input type="hidden" name="score" value="3">
            <input id="score1" type="radio" name="score" value="5" />
            <label for="score1"><span class="text">最高</span>★</label>
            <input id="score2" type="radio" name="score" value="4" />
            <label for="score2"><span class="text">良い</span>★</label>
            <input id="score3" type="radio" name="score" value="3" />
            <label for="score3"><span class="text">普通</span>★</label>
            <input id="score4" type="radio" name="score" value="2" />
            <label for="score4"><span class="text">悪い</span>★</label>
            <input id="score5" type="radio" name="score" value="1" />
            <label for="score5"><span class="text">最悪</span>★</label>
        </div>

        <div class="form-group text-center" type="text">
            {{ review_form.comment }}
        </div>

        {% csrf_token %}
        <div class="text-center">
            <button type="submit" class="btn btn-success">投稿</button>
        </div>

        {% if form.errors %}
            <br>
            <p>エラー内容</p>
            {% for field in form %}
                {% for error in field.errors %}
                    <p>{{ error }}</p>
                {% endfor %}
            {% endfor %}
        {% endif %}
    </form>
{% else %}
    <p class="mb-3">口コミを投稿するには、ログインして下さい。</p>
    <a class="btn btn-success" href="{% url 'account_signup' %}">サインアップ</a>
    <a class="btn btn-success" href="{% url 'account_login' %}">ログイン</a>
{% endif %}
</div>
</div>
</div>
</div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6321 = () => {
    const test = `
    <main>
    <div class="container">
        <!-- 通知メッセージ -->
        {% if messages %}
            <div class="row align-items-center my-3">
                <div class="col-12">
                    <div class="message text-center">
                        {% for message in messages %}
                            <div class="alert{% if message.tags %} alert-{{ message.tags }}{% endif %} alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                                {{ message }}
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        {% endif %}

        <!-- メイン -->
        {% block content %}
        {% endblock content %}
    </div>
</main>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6331 = () => {
    const test = `
    # おすすめレストラン
category_l = "RSFST09000" # 居酒屋
pref = "PREF13" # 東京都
freeword = "歓送迎会"
num = 6
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6332 = () => {
    const test = `
    class IndexView(TemplateView):
    template_name = 'foodie/index.html'

    def get_context_data(self, *args, **kwargs):
        searchform = SearchForm()

        # おすすめレストラン
        category_l = "RSFST09000" # 居酒屋
        pref = "PREF13" # 東京都
        freeword = "歓送迎会"
        num = 6

        query = get_gnavi_data(
            "",
            category_l,
            pref,
            freeword,
            num
        )

        result = gnavi_api(query)
        pickup_restaurant = get_restaurant_info(result)

        params = {
            'searchform': searchform,
            'pickup_restaurant': pickup_restaurant,
            }
        return params
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6341 = () => {
    const test = `
    <div class="text-center">
                <button class="btn btn-success" type="submit">この条件で絞り込む</button>
            </div>
        </form>
    </div>

    <h2 class="mb-4">歓送迎会 おすすめのお店 <i class="fas fa-beer my-icon2"></i></h2>

    <div class="row">
        {% for restaurant in pickup_restaurant %}
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                {% if restaurant.11 %}
                    <img class="card-img-top" src="{{ restaurant.11 }}" alt="{{ restaurant.2 }}">
                {% else %}
                    <img class="card-img-top" src="https://placehold.jp/300x300.png?text=No Image" alt="{{ restaurant.2 }}">
                {% endif %}
                <div class="card-body">
                    <strong class="d-inline-block mb-2 text-success">{{ restaurant.32 }}</strong>
                    <h4 class="mb-2">{{ restaurant.2 }}</h4>
                    <p class="card-text mb-1"><i class="fas fa-subway fa-fw my-icon"></i>{{ restaurant.21 }}・徒歩{{ restaurant.23 }}分</p>
                    <p class="card-text mb-2"><i class="fas fa-yen-sign fa-fw my-icon"></i>平均{{ restaurant.33 }}円</p>
                    <p class="card-text mb-auto">{{ restaurant.26|linebreaksbr }}</p>
                </div>
                <a href="{% url 'shop_info' restaurant.0 %}" class="stretched-link"></a>
            </div>
        </div>
        {% endfor %}
    </div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6351 = () => {
    const test = `
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger # 追加

    def Search(request):
        ...
                result = gnavi_api(query)
                total_hit_count = len(result)
                restaurant_list = get_restaurant_info(result)
                page_obj = paginate_queryset(request, restaurant_list, 10) # 追加
    
            context = {
                'total_hit_count': total_hit_count,
                'restaurant_list': page_obj.object_list, # 追加
                'page_obj': page_obj, # 追加
            }
    
            return render(request, 'foodie/search.html', context)
    
    def paginate_queryset(request, queryset, count): # 追加
        paginator = Paginator(queryset, count)
        page = request.GET.get('page')
        try:
            page_obj = paginator.page(page)
        except PageNotAnInteger:
            page_obj = paginator.page(1)
        except EmptyPage:
            page_obj = paginator.page(paginator.num_pages)
        return page_obj
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6361 = () => {
    const test = `
    foodie
    └───templatetags
    　　└───__init__.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6362 = () => {
    const test = `
    # 中身なし
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6363 = () => {
    const test = `
    foodie
    └───templatetags
    　　└───__init__.py
    　　└───utils.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6364 = () => {
    const test = `
    from django import template

    register = template.Library()
    
    @register.simple_tag
    def url_replace(request, field, value):
        url_dict = request.GET.copy()
        url_dict[field] = value
        return url_dict.urlencode()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6371 = () => {
    const test = `
    {% load utils %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6372 = () => {
    const test = `
    {% extends 'foodie/base.html' %}
{% load static %}
<!-- 追加 -->
{% load utils %}

		<div class="col-md-9">
            {% if restaurant_list %}
                <!-- 追加 -->
				<p class="my-4">検索結果 {{ total_hit_count }} 件 <small>{{ page_obj.start_index }}～{{ page_obj.end_index }}件を表示</small></p>
				{% for resutaurant in restaurant_list %}
                ...
				{% endfor %}

                <!-- 追加 -->
				<ul class="pagination justify-content-center">
					{% if page_obj.has_previous %}
						<li class="page-item">
							<a class="page-link" href="?{%  url_replace request 'page' page_obj.previous_page_number %}">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
					{% endif %}
				
					{% for num in page_obj.paginator.page_range %}
						{% if page_obj.number == num %}
							<li class="page-item active">
								<a class="page-link" href="#!">
									{{ num }}
								</a>
							</li>
						{% else %}
							<li class="page-item">
								<a class="page-link" href="?{%  url_replace request 'page' num %}">
									{{ num }}
								</a>
							</li>
						{% endif %}
					{% endfor %}
				
					{% if page_obj.has_next %}
						<li class="page-item">
							<a class="page-link" href="?{%  url_replace request 'page' page_obj.next_page_number %}">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					{% endif %}
				</ul>
			{% else %}
				<h4 class="mt-5">該当するものはありません。</h4>
			{% endif %}
		</div>
	</div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};