import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_11 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>APIシステム構築 </p>
                        <p>Django REST Frameworkを使って、APIの実装方法を学習します </p>
                        <p>フロントエンドは、Vue.jsを使用します。</p>
                        <p>目標</p>
                        <p>DjangoでAPIを実装する方法を学習します。 </p>
                        <p>Djangoを使用して、求人情報APIを作ります。 </p>
                        <p>機能 </p>
                        <li>
                            求人情報API
                            求人情報詳細API
                        </li>
                        <p>バックエンド</p>
                        <p>フロントエンド </p>

                        <p>#エラーが発生した場合</p>
                        <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。</p>

                        <p>Djangoドキュメント</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>参照コード</p>
                        <p>#前提知識</p>

                        <p>Djangoを始める前に、下記の言語は学習しておいて下さい。</p>
                        <p>Django</p>
                        <p>Vue.js</p>
                        
                        <p>では、始めて行きましょう！！</p>
                    </div>
                </div>
        
                </Layout_tutorial_11>
                ) : id == 2 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Django REST Frameworkとは？ </p>
                        <p> Django REST Frameworkとは？ </p>
                        <p>Django REST Frameworkとは、DjangoでAPIを開発するライブラリです。</p>
                        <p>公式ドキュメント </p>
                        
                        <p>Django REST framework</p>
                   
                        <p>RESTfulなAPI開発を標準としてサポートしています </p>
                        <p>APIの動作を確認するWebコンソールが使用できるので、簡単にAPIパラメータの確認ができます </p>
                       
                        <p>RESTful API</p>
                        <p>RESTful API(REST API)とは？</p>
                       
                        <p>RESTful API(REST API)とは、Webシステムを外部から利用するためのAPIの種類の一つで、RESTと呼ばれる設計に従ったインターフェースです。</p>
                        <p>メソッド</p>
                        <p>GET、POST、PUT、DELETE等メソッドを使うことで、一貫性のあるリクエストで開発が楽になります。</p>
                        <p>データを取得、作成、更新、削除するのか一目でわかります。</p>
                        <p>ステータスコード</p>
                        
                        <p>HTTPメソッドを利用したAPIなので、下記のステータスコードが返ってくるように設計します。</p>
                        <p>ステータスコードグループ</p>
                        <p>ステータスコードはグループになっています</p>
                        <p>API例</p>
                        <p>Django REST Framework</p>
                        <p>Django REST Frameworkは、今までのDjangoにserializer.pyが追加されます。</p>
                        <p>serializer.pyはJson形式に変換する役割をします。。</p>
              
                    </div>
                </div>
                </Layout_tutorial_11>
                ) : id == 3 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備 </p>
                        <p>開発の準備をします。 </p>
                        <p>GitHub準備 </p>
                        <p>GitHubのリポジトリを作成します。 </p>
                        
                        <p>.gitignore作成 </p>
                        <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
                        <Tutorial1131 />
                
                        <p>仮想環境の作成 </p>
                        <p>myvenvという名前で仮想環境を構築します。 </p>
                       
                        <Tutorial1132 />
                        <p>仮想環境実行</p>
                        <p>sourceコマンドで仮想環境を実行します。</p>
                        <p>ターミナルを再起動したときなど、必ずこのコマンドを実行して、仮想環境に入って下さい。</p>
                        <p>仮想環境に入ると、ターミナルに(myvenv)という印が付きます。</p>
                        <p>これがあると、仮想環境に入っていることになります。</p>
                        <Tutorial1133 />
                
                        <p>#requirements.txt作成</p>
                        <p>開発で必要なパッケージを記載します。</p>
                        <Tutorial1134 />
                      
                       
                        <p>パッケージのインストール</p>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                        <Tutorial1135 />
                        <p>これで、Djangoで開発する準備ができました。</p>
                       
                    </div>
                </div>
                </Layout_tutorial_11>
                ) : id == 4 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>プロジェクト作成 </p>
                        <p>プロジェクトを作成します。</p>
                        <p>最後の.はディレクトリ直下にプロジェクトを作成するという意味です。</p>
                        <Tutorial1141 />
                        <p>#環境設定変更</p>
                        <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                     
                        <Tutorial1142 />
             
                        <p>#データベースのセットアップ </p>
                        <p>migrateコマンドをすることでデータベースがセットアップされます。 </p>
                     
                        <Tutorial1143 />
                        <p>#Webサーバーを起動する</p>
                        <p>Djangoが起動できるか確認しましょう。</p>
                        <Tutorial1144 />
                        <p>URLにアクセスすると、Webページが表示されます。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
                    </div>
                </div>
                </Layout_tutorial_11>
                ) : id == 5 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>アプリケーション作成 </p>
                        <p>アプリケーションを作成してきます。 </p>
                       
                        <p>今回は、求人情報APIを構築するので、名前はjobsにします。</p>
                        <Tutorial1151 />
                        <p>管理ユーザー作成 </p>
                       
                        <p>管理ユーザーを作成しておきましょう。</p>
                        <Tutorial1152 />
                        <p>ユーザー名、メールアドレス、パスワードを入力します。</p>
                        <p>パスワード</p>
                       <p>パスワードは見えないので、間違えずに入力して下さい。</p>
                        <p>#アプリケーションを使えるように設定 </p>
                        <p>アプリケーションを使えるようにするには、プロジェクト設定にアプリケーションを追加する必要があります。 </p>
                        <p>APIを構築するにはDjango REST Frameworkを使用するので、同時に追加します </p>
                        <p>INSTALLED_APPSに追加します。 </p>
                        <Tutorial1153 />
                       
                      
                    </div>
                </div>
                </Layout_tutorial_11>
                ) : id == 6 ? (
                    <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Model追加</p>
                        <p>求人情報に必要な項目をモデルに追加します </p>
                        <Tutorial1161 />
                        <p>データベース構築 </p>
                       
                        <p>モデルを作成したら、下記コマンドで必ずデータベースの構築が必要になります。</p>
                        <Tutorial1162 />
                        
                    </div>
                </div>
                </Layout_tutorial_11>
                ) : id == 7 ? (
                  <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>URL追加</p>
                        <p>ルーティングを設定します </p>
                        <p>プロジェクト用ルーティングを作成 </p>
                        <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します </p>
                        <Tutorial1171 />
                        <p>アプリケーション用ルーティングを作成 </p>
                        <p>API専用フォルダを作り、管理しやすくします。 </p>
                        <p>jobsフォルダの下にapiフォルダを作成して、urls.pyファイルを作成します。</p>
                        <Tutorial1172 />
                        <Tutorial1173 />
                    </div>
                </div>
              </Layout_tutorial_11>
              ) : id == 8 ? (
                  <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Serializer追加</p>
                        <p>Serializerとは？ </p>
                        <p>Serializerとは、クエリセットやモデルインスタンスのような複雑なデータを、Json形式のフォーマットに変換することを役割としています。 </p>
                        <p>serializers.pyファイルを作成します。 </p>
                        <p>serializersのModelSerializerクラスを継承すことにより、簡単に書くことができます。 </p>
                        <Tutorial1181 />
                        <Tutorial1182 />
                    </div>
                </div>
              </Layout_tutorial_11>
              ) : id == 9 ? (
                  <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Permissions追加</p>
                        <p>Django REST Frameworkが提供するパーミッションシステムを使用して、APIを安全にします。</p>
                        <p>機能 </p>
                        <p>認証されたユーザーのみにAPIへのアクセスを許可する </p>
                        <p>許可されたユーザーのみに書き込み権限を与える</p>
                        <p>permissions.pyファイルを作成します。 </p>
                        <Tutorial1191 />
                        <Tutorial1192 />
                    </div>
                </div>
              </Layout_tutorial_11>
              ) : id == 10 ? (
                  <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Views追加</p>
                        <p>Django REST Frameworkは、GenericAPIViewの中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                        <p>それを継承することで、簡単に開発をすることができます。</p>
                        <p>APIのCRUD操作はどの場合においても必要なため、すでに用意されています</p>
                        <p> CRUDとは?</p>
                        <li>
                        Create(生成)
                        Read(読み取り)
                        Update(更新)
                        Delete(削除)
                            </li>
                        <p>views.pyファイルを作成します。 </p>
                        <Tutorial11101 />
                        <Tutorial11102 />
                        <p>Django REST Frameworkには多くの汎用ビューが存在しますので、どんどん活用していきましょう。</p>
                        <p>公式ドキュメント - Generic views</p>
                    </div>
                </div>
              </Layout_tutorial_11>
              ) : id == 11 ? (
                  <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Pagination追加</p>
                        <p>ページネーションを追加するには、下記の設定をsettings.pyに追加します。</p>
                        
                        <Tutorial11111 />
                  
                    </div>
                </div>
              </Layout_tutorial_11>
              ) : id == 12 ? (
                <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>API確認</p>
                        <p>サーバー起動</p>
                        <p>サーバー起動</p>
                        <Tutorial11121 />
                        <p>管理ユーザー</p>
                        <p>管理ユーザーでログインをしておきます</p>
                        <p>http://127.0.0.1:8000/admin/</p>
                        <p>API画面</p>
                        <p>Django REST Frameworkには、APIを管理する専用画面が用意されています</p>
                        <p>下記にアクセスすると、画面が表示されます</p>
                        <p>この画面で、データの取得、作成、更新、削除をすることができます</p>
                        <p>http://127.0.0.1:8000/api/jobs/</p>

                        <p>データ作成</p>
                        <p>データの作成をしてみましょう。</p>
                        <p>フォームが予め用意されているので、入力してPOSTボタンを押すだけで、データの作成ができてしまいます。</p>
                        <p>データ更新</p>
                        <p>データの更新もできます</p>
                        <p>下記にアクセスすると、データの詳細画面で、データの編集をすることができます</p>
                        <p>http://127.0.0.1:8000/api/jobs/1/</p>
                        <p>データ削除</p>
                        <p>DELETEボタンを押すと、データの削除をすることができます</p>
                        <p>データ取得</p>
                        <p>フロントエンド側からAPIのURLをコールすると、Json形式でデータを取得することができます。</p>
                        <p>http://127.0.0.1:8000/api/jobs/1/</p>
                        <p>このAPIをコールした場合は、下記のようになJsonが取得できます</p>
                        <Tutorial11122 />
                        <p>フロントエンドからのリクエスト</p>
                        <p>フロントエンドからGET、PUT、PUT/PATCH、DELETEなどのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。</p>
                        <p>ぜひAPIを活用した設計にしてみましょう。</p>
                    </div>
                </div>
            </Layout_tutorial_11>
            ) : id == 13 ? (
                <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Vue.js導入</p>
                        <p>Vue.jsとは？</p>
                        <p>Vue.jsは、Webアプリケーションにおけるユーザーインターフェイスを構築するためのJavaScriptフレームワークです。</p>
                        <p>SPA(Single Page Application)開発に使われていることが多いです。</p>
                        <p>特徴</p>
                        <li>
                        学習コストが低い
                        コードの記述量が少なく、開発スピードが早くなる
                        コンポーネント化することで、再利用することができる
                        </li>
                        <p>公式ドキュメント - Vue.js</p>
                        <p>node/npmインストール</p>
                        <p>nodeとnpmがインストールされていることを確認します</p>
                        <Tutorial11131 />
                        <p>まだインストールされていない方は、インストールしてください。</p>
                        <p>nodeインストール</p>
                        <p>vue-cliインストール</p>
                        <Tutorial11132 />
                        <p>vue.jsインストール</p>
                        <p>ルートディレクトリでvue createコマンドでインストールできます。</p>
                        <p>フォルダ名はfrontendにします</p>
                        <Tutorial11133 />
                        <p>順番に選択していきます。</p>
                        <li>
                        Manually select featuresを選択
                        Babel、Router、Linterをスペースを押して選択
                        Use history mode for router? Yを入力
                        ESLint + Prettierを選択
                        Lint on saveを選択
                        In package.jsonを選択
                        Save this as a preset for feature projects? Nを入力
                        </li>

                        <p>webpack-bundle-tracker</p>
                        <p>frontendフォルダでwebpack-bundle-trackerをインストールします</p>
                        <Tutorial11134 />
                        <p>開始</p>
                        <Tutorial11135 />
                        <p>URLをクリックすると、Vue.jsの初期画面が表示されます</p>
                        <p>http://127.0.0.1:8080/</p>
                        
                    </div>
                </div>
            </Layout_tutorial_11>
            ) : id == 14 ? (
                <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>固定ページ追加</p>
                        <p>urls追加</p>
                        <p>プロジェクトのURLを設定します</p>
                        <Tutorial11141 />
                        <p>トップページのURLを設定します。</p>
                        <Tutorial11142 />
                        <p>views追加</p>
                       
                        <p>TemplateViewを使用して、固定ページを作成します。</p>
                        <Tutorial11143 />
                        <p>template追加</p>
                        <p>テストで、h1タグの文字を入力しておきます</p>
                        <Tutorial11144 />
                        <p>サーバー起動</p>
                        <p>サーバーを起動して、画面が表示されることを確認します。</p>
                        <Tutorial11145 />
                    </div>
                </div>
            </Layout_tutorial_11>
            ) : id == 15 ? (
                <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Webpack導入</p>
                        <p>ルートディレクトリでdjango-webpack-loaderをインストールします。</p>
                        <Tutorial11151 />
                      
                        <p>settings変更</p>
                        <p>webpack_loaderを追加します。</p>
                        <Tutorial11152 />
                        <p>template変更</p>
                        <p>webpack_loaderを使用できるように変更します</p>
                        <p>ポイント</p>
                        <p>render_bundleでフロントエンドからの情報を表示します。</p>
                        <Tutorial11153 />
                        <p>vue.config.js追加</p>
                        <p>Macを使用している場合</p>
                        <p>publicPathを0.0.0.0:8080に変更してください。</p>
                        <Tutorial11154 />
                        <p>フロントエンド起動</p>
                        <p>frontendフォルダでvue.jsを起動させます。</p>
                        <Tutorial11155 />
                        <p>バックエンド起動</p>
                        <p>別ターミナルでDjangoを起動させます。</p>
                        <Tutorial11156 />
                        <p>サーバー起動</p>
                        <p>フロントエンドとバックエンドは別々のターミナルで起動させて、サーバーを起動させます。</p>
                        <p>確認</p>
                        <p>バックエンドの方のURLをクリックします</p>
                        <p>http://127.0.0.1:8000/</p>

                        <p>おめでとうございます！</p>
                        <p>Djangoの方で記載した文字とVue.jsの初期画面の両方が表示されています</p>
                        <p>これで、バックエンドとフロントエンドを共存することができました。</p>
                        <p>Djangoのテンプレートの文字は削除すると、完全にバックエンドとフロントエンドを分けることができます</p>
                        <p>h1タグを削除しておきます。</p>
                        <Tutorial11157 />
                    </div>
                </div>
            </Layout_tutorial_11>
            ) : id == 16 ? (
                <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Vuetify導入</p>
                        <p>Vue.jsはVuetifyというフレームワークを使用することができます。</p>
                        <p>Vuetifyとは？</p>
                        <p>VuetifyとはVue.jsで使えるマテリアルデザインのフレームワークです。</p>
                        <p>Vuetifyにはマージンの調整や文字サイズの変更等デザインをする上で便利なクラスや、マテリアルがデフォルトで備わっています</p>
                        <p>Vuetifyを使うと、カッコイイデザインを簡単に構築することができます</p>
                        <p>現場でもよく使われています</p>
                        <p>こういった画面も簡単に作れます</p>
                        <p>サンプル</p>
                        <p>frontendフォルダでVuetifyをインストールします</p>
                        <p>Vuetify</p>
                        <p>インストール</p>
                        <Tutorial11161 />
                      
                        <p>設定変更</p>
                        <p>Vuetifyをインストールしたので、vue.config.jsが書き変わっています。</p>
                        <p>もとにもどし、transpileDependencies: [&quot;vuetify&quot;],を追加します。</p>
                        <Tutorial11162 />
                        <p>フロントエンド起動</p>
                        <p>frontendフォルダでvue.jsを起動させます。</p>
                      
                        <Tutorial11163 />
                        <p>バックエンドも起動していることを確認してください</p>
                        <p>確認</p>
                        <p>バックエンドの方のURLをクリックします</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Vuetifyの初期画面に変わっていることを確認します。</p>
                        <p>これで、Vuetifyを使って開発ができるようになりました</p>
                    </div>
                </div>
            </Layout_tutorial_11>
            ) : id == 17 ? (
              <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>データ取得</p>
                        <p>ここからは、GET、POST、PUT、DELETEメソッドを使用して、APIにリクエストを送り、データを処理します。</p>
                        <p>GETメソッドを使用して、APIからデータを取得して、画面に表示していきます。</p>
                        <p>App.vue変更</p>
                        <p>App.vueはメインのファイルになります</p>
                        <p>ここで、ルーターを指定しています</p>
                        <p>Vue Router</p>
                        <p>Vue Routerとは？</p>
                        <p>Vue RouterはVue.jsの公式ルータです。</p>
                        <p>Vue.jsのコアと深く統合されており、Vue.jsでシングルページアプリケーションを構築します。</p>
                        <Tutorial11171 />
                      
                        <p>router変更</p>
                        <p>ルーターを修正します。</p>
                        <p>ルーターの書き方は、公式ドキュメントに詳しく記載されています</p>
                        <p>HTML5 History モード</p>
                        <Tutorial11172 />
                        <p>API</p>
                        <p>APIを取得できるように、設定していきます。</p>
                        <p>新規にcommonフォルダを作成し、csrf_token.jsとapi.service.jsファイルを作成します。</p>
                        <Tutorial11173 />
                        <Tutorial11174 />
                        <p>Home.vue変更</p>
                        <p>Homeコンポーネントを修正します。</p>
                        <p>APIから取得するcompany_nameとjob_titleのデータを表示させます。</p>
                        <Tutorial11175 />
                        <p>確認</p>
                        <p>フロントエンドとバックエンドの両方を起動させます。</p>
                        <p>バックエンドのURLをクリックすると、APIの方で入力したデータが表示されていますでしょうか？</p>
                        <p>おめでとうございます！</p>
                        <p>これでフロントエンドでAPI情報を取得することができました。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>APIの方は、3つデータが登録されています。</p>
                        <p>http://127.0.0.1:8000/api/jobs/</p>
                    </div>
                </div>
          </Layout_tutorial_11>
          ) : id == 18 ? (
              <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>詳細データ取得</p>
                        <p>Jobタイトルをクリックしたら、詳細ページに遷移するようにします</p>
                        <p>ルーター変更</p>
                        <p>ルーターを変更します。</p>
                        <Tutorial11181 />
                        <p>トップページ変更</p>
                        <p>Jobタイトルにリンクを貼ります</p>
                        <p>リンクはrouter-linkでtoを指定します</p>
                        <p>＜style scoped＞を使って、装飾することもできます。</p>
                        <p>scopedを指定すると、このページだけにCSSが反映されます。</p>
                        <p>scopedを指定しないと、全体に反映されてしまいます。。</p>
                        <Tutorial11182 />
                      
                        <p>詳細ページ追加</p>
                        <p>詳細ページを追加するために、Job.vueコンポーネントを追加します。</p>
                        <p>apiService関数からdataを取得し、this.jobにデータを格納しています。</p>
                        {/* <Tutorial11183 /> */}
                        <p>確認</p>
                        <p>フロントエンドとバックエンドが起動していることを確認し、バックエンド側のURLで画面を確認します。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>Jobタイトルをクリックしたら、詳細ページに遷移できることを確認してください。</p>
                    </div>
                </div>
          </Layout_tutorial_11>
          ) : id == 19 ? (
              <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>データ作成</p>
                        <p>POSTメソッドを使用して、APIにデータを作成していきます。</p>
                        <p>Vuetifyを使用して、装飾していきます。</p>
                        <p>ルーター変更</p>
                        <p>ルーターを変更します。</p>
                        <Tutorial11191 />
                        <p>APP.vue変更</p>
                        <p>フッターとヘッダーを追加していきます。</p>
                        <p>Vuetifyを使用すると簡単に作ることができます</p>
                        <p>ルーターを変更します。</p>
                        <Tutorial11192 />
                        <p>データ追加画面作成</p>
                        <p>データを追加するために、JobEditor.vueを追加します</p>
                        <p>ポイント</p>
                        <p>methodをPOSTに変更して、APIの処理をしています</p>
                        <Tutorial11193 />
                      
                        <p>権限変更</p>
                        <p>現在、管理ユーザーでしか、APIを更新できないように設定しています。</p>
                        <p>フロントエンドでログイン機能を実装していないので、権限の設定を一旦コメントアウトします</p>
                        <Tutorial11194 />
                        <p>確認</p>
                        <p>サーバーを起動させます。</p>
                        <p>フロントエンドとバックエンドの両方が起動していることを確認してください。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>仕事追加ボタンをおして、データを追加してみましょう</p>
                        <p>これで、APIのデータ取得(GET)、作成(POST)ができるようになりました。</p>
                    </div>
                </div>
          </Layout_tutorial_11>
          ) : id == 20 ? (
              <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>さらにデータ取得</p>
                        <p>バックエンドでページネーションを指定しているので、フロントエンドでボタンを押したら、さらにデータを取得出来るように設定していきます。</p>
                        <p>dataにnextを追加して、処理を追加します。</p>
                        <Tutorial11201 />
                        
                        <p>確認</p>
                        <p>現在ページネーションは4に設定しているので、4つ以上データを登録しましょう。</p>
                        <p>Load Moreボタンを押すとデータが取得されます。。</p>
                        
                    </div>
                </div>
          </Layout_tutorial_11>
          ) : id == 21 ? (
              <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>データ更新</p>
                        <p>PUTメソッドを使用して、APIのデータを更新していきます</p>
                        <p>編集ボタン追加</p>
                        <p>詳細ページに編集ボタンを追加します。</p>
                        <Tutorial11211 />
                        <p>更新処理追加</p>
                        <p>beforeRouteEnter処理を追加します。</p>
                        <p>コンポーネントのガード処理</p>
                        <p>コンポーネント内にガード処理を追加することができます。</p>
                        <p>コンポーネントに遷移する前や後に、処理を追加したいときに使用します</p>
                        <p>ナビゲーションガード</p>
                        <p>データ取得</p>
                        {/* <Tutorial11212 /> */}
                        <p>例</p>
                        <Tutorial11213 />
                      
                        <p>この場合、処理の順序は以下のようになります。</p>
                        <p>beforeRouteEnter Call</p>
                        <p>created Call</p>
                        <p>mounted Call</p>
                        <p>beforeRouteEnter Next</p>
                        <p>ポイント</p>
                        <p>nextに渡したコールバック関数は、moutendよりも後にコールされます。</p>
                        <p>処理追加</p>
                        <p>この場合は、idが定義されていたら、コンポーネントに遷移する前に、フォームの値を入力しておく処理を追加します。</p>
                        {/* <Tutorial11214 /> */}
                        <p>確認</p>
                        <p>フロントエンドとバックエンドの両方が起動していることを確認してください。</p>
    
                        <p>http://127.0.0.1:8000/</p>
                        <p>編集ボタンをクリックして、データを更新してみましょう。</p>
                    </div>
                </div>
          </Layout_tutorial_11>
          ) : id == 22 ? (
            <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>データ削除</p>
                        <p>DELETEメソッドを使用して、APIのデータを削除していきます</p>
                        <p>削除ボタン追加</p>
                        <p>詳細ページに削除ボタンとdeleteJobData関数を追加します。</p>
                        <p>DELETEメソッドを使用して、削除後にトップページに遷移します。</p>
                        {/* <Tutorial11221 /> */}
                        <p>確認</p>
                        <p>フロントエンドとバックエンドの両方が起動していることを確認してください。</p>
                        <p>http://127.0.0.1:8000/</p>
                        <p>削除ボタンをクリックして、データを削除してみましょう。</p>
                    </div>
                </div>
        </Layout_tutorial_11>
        ) : id == 23 ? (
            <Layout_tutorial_11>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                    <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>API実装チュートリアルはここまでで終わりとなります。 </p>
                        <p>APIの作り方</p>
                        <p>Django REST Frameworkを使用したAPIの作り方と、フロントエンドでAPIの処理方法が理解出来ましたでしょうか？ </p>
                        <p>バックエンドは、Django RESR Frameworkにまかせて、フロントエンドは、Vue.jsを使用してアプリを作ってみてください。</p>
                    
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>
                    </div>
                </div>
        </Layout_tutorial_11>
        ) : (
            <></>
        )}
        </div>
    )
}

export default Post

const Tutorial1131 = () => {
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



const Tutorial1132 = () => {
  const test = `
  $ python3 -m venv myvenv
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1133 = () => {
  const test = `
  $ source myvenv/bin/activate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1134 = () => {
  const test = `
  Django~=3.1.4
  djangorestframework~=3.11.0
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1135 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1141 = () => {
  const test = `
  (myvenv) ~$ django-admin startproject job_board .
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1142 = () => {
  const test = `
  ALLOWED_HOSTS = ['*']

  LANGUAGE_CODE = 'ja'
  
  TIME_ZONE = 'Asia/Tokyo'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1143 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1144 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1151 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py startapp jobs
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1152 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py createsuperuser
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1153 = () => {
  const test = `
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'rest_framework', # 追加
      'jobs', # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1161 = () => {
  const test = `
  from django.db import models

class JobOffer(models.Model):
  company_name = models.CharField(max_length=100)
  company_email = models.EmailField()
  job_title = models.CharField(max_length=100)
  job_description = models.TextField()
  salary = models.PositiveIntegerField()
  prefectures = models.CharField(max_length=100)
  city = models.CharField(max_length=100)
  created_at = models.DateField(auto_now_add=True)

  def __str__(self):
      return self.company_name
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1162 = () => {
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

const Tutorial1171 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include # 追加
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path("api/", include("jobs.api.urls")) # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1172 = () => {
  const test = `
  ├── jobs
  │   └── api
  │       └── urls.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1173 = () => {
  const test = `
  from django.urls import path
from jobs.api import views

urlpatterns = [
  path("jobs/", views.ListView.as_view(), name="list"),
  path("jobs/<int:pk>/", views.DetailView.as_view(), name="detail"),
]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1181 = () => {
  const test = `
  ├── jobs
  │   └── api
  │       └── serializers.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1182 = () => {
  const test = `
  from rest_framework import serializers
  from jobs.models import JobOffer
  
  
  class JobOfferSerializer(serializers.ModelSerializer):
      class Meta:
          model = JobOffer
          fields = "__all__"
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1191 = () => {
  const test = `
  ├── jobs
  │   └── api
  │       └── permissions.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1192 = () => {
  const test = `
  from rest_framework import permissions


  class IsAdminUserOrReadOnly(permissions.IsAdminUser):
      def has_permission(self, request, view):
          is_admin = super().has_permission(request, view)
  
          return request.method in permissions.SAFE_METHODS or is_admin
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11101 = () => {
  const test = `
  ├── jobs
  │   └── api
  │       └── views.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11102 = () => {
  const test = `
  from rest_framework import generics
  from jobs.models import JobOffer
  from jobs.api.permissions import IsAdminUserOrReadOnly
  from jobs.api.serializers import JobOfferSerializer
  
  
  class ListView(generics.ListCreateAPIView):
      queryset = JobOffer.objects.all().order_by("-id")
      serializer_class = JobOfferSerializer
      permission_classes = [IsAdminUserOrReadOnly]
  
  
  class DetailView(generics.RetrieveUpdateDestroyAPIView):
      queryset = JobOffer.objects.all()
      serializer_class = JobOfferSerializer
      permission_classes = [IsAdminUserOrReadOnly]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11111 = () => {
  const test = `
  REST_FRAMEWORK = {
      'PAGE_SIZE': 4,
      'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination'
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11121 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11122 = () => {
  const test = `
  {"id":1,"company_name":"Google","company_email":"test@gmail.com","job_title":"バックエンドエンジニア","job_description":"Python、Djangoを使用したWeb開発","salary":10000000,"prefectures":"東京","city":"港区","created_at":"2020-04-19"}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11131 = () => {
  const test = `
  (myvenv) ~$ node -v
(myvenv) ~$ npm -v
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11132 = () => {
  const test = `
  (myvenv) ~$ sudo npm i -g @vue/cli
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11133 = () => {
  const test = `
  (myvenv) ~$ vue create frontend
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11134 = () => {
  const test = `
  (myvenv) ~$ cd frontend
  (myvenv) ~/frontend $ npm install webpack-bundle-tracker@0.4.3
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11135 = () => {
  const test = `
  (myvenv) ~/frontend $ npm run serve
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11141 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path("api/", include("jobs.api.urls")),
      path("", include("jobs.urls")) # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11142 = () => {
  const test = `
  from django.urls import re_path
from . import views

urlpatterns = [
  re_path('', views.IndexView.as_view(), name='index'),
]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11143 = () => {
  const test = `
  from django.views.generic import TemplateView

  class IndexView(TemplateView):
      template_name = 'jobs/index.html'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11144 = () => {
  const test = `
  <!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Board</title>
</head>
<body>
  <h1>Vue JS</h1>
</body>
</html>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11145 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11151 = () => {
  const test = `
  (myvenv) ~$ pip3 install django-webpack-loader
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11152 = () => {
  const test = `
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'rest_framework',
      'webpack_loader', # 追加
      'jobs'
  ]
  
  
  # 一番下に追加
  WEBPACK_LOADER = {
      'DEFAULT': {
          'BUNDLE_DIR_NAME': 'dist/',
          'STATS_FILE': os.path.join(BASE_DIR, 'frontend', 'webpack-stats.json')
      }
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11153 = () => {
  const test = `
  {% load render_bundle from webpack_loader %}

  <!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Job Board</title>
  </head>
  <body>
      <h1>Vue JS</h1>
      <!-- 追加 -->
      <div id="app"></div>
      {% render_bundle 'app' %}
  </body>
  </html>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11154 = () => {
  const test = `
  const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  // Mac publicPath: "http://0.0.0.0:8080/"
  publicPath: "http://127.0.0.1:8080/",
  outputDir: "./dist/",

  chainWebpack: config => {
      config.plugin("BundleTracker").use(BundleTracker, [{ filename: "./webpack-stats.json" }]);
      config.output.filename("bundle.js");
      config.optimization.splitChunks(false);
      config.resolve.alias.set("__STATIC__", "static");
      config.devServer
          .hotOnly(true)
          .watchOptions({ poll: 1000 })
          .https(false)
          .disableHostCheck(true)
          .headers({ "Access-Control-Allow-Origin": ["*"] });
  },
};
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11155 = () => {
  const test = `
  (myvenv) ~/frontend $ npm run serve
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11156 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11157 = () => {
  const test = `
  {% load render_bundle from webpack_loader %}

  <!DOCTYPE html>
  <html lang="ja">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Job Board</title>
  </head>
  <body>
      <div id="app"></div>
      {% render_bundle 'app' %}
  </body>
  </html>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11161 = () => {
  const test = `
  (myvenv) ~/frontend $ vue add vuetify
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11162 = () => {
  const test = `
  const BundleTracker = require("webpack-bundle-tracker");

  module.exports = {
      // Mac publicPath: "http://0.0.0.0:8080/"
      publicPath: "http://127.0.0.1:8080/",
      outputDir: "./dist/",
      // 追加
      transpileDependencies: ["vuetify"],
  
      chainWebpack: config => {
          config.plugin("BundleTracker").use(BundleTracker, [{ filename: "./webpack-stats.json" }]);
          config.output.filename("bundle.js");
          config.optimization.splitChunks(false);
          config.resolve.alias.set("__STATIC__", "static");
          config.devServer
              .hotOnly(true)
              .watchOptions({ poll: 1000 })
              .https(false)
              .disableHostCheck(true)
              .headers({ "Access-Control-Allow-Origin": ["*"] });
      },
  };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11163 = () => {
  const test = `
  (myvenv) ~/frontend $ npm run serve
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11171 = () => {
  const test = `
  <template>
<v-app>
  <router-view />
</v-app>
</template>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11172 = () => {
  const test = `
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "../views/Home.vue";
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11173 = () => {
  const test = `
  function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== "") {
          var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              if (cookie.substring(0, name.length + 1) === name + "=") {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
  var CSRF_TOKEN = getCookie("csrftoken");
  
  export { CSRF_TOKEN };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11174 = () => {
  const test = `
  import { CSRF_TOKEN } from "./csrf_token.js";

function handleResponse(response) {
  if (response.status === 204) {
      return "";
  } else if (response.status === 404) {
      return null;
  } else {
      return response.json();
  }
}

function apiService(endpoint, method, data) {
  const config = {
      method: method || "GET",
      body: data !== undefined ? JSON.stringify(data) : null,
      headers: {
          "content-type": "application/json",
          "X-CSRFTOKEN": CSRF_TOKEN
      }
  };
  return fetch(endpoint, config).then(handleResponse);
}

export { apiService };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11175 = () => {
  const test = `
  <template>
<div>
  <v-container>
    <h1>Job Board</h1>
    <div v-for="job in jobs" :key="job.pk">
      <p>{{ job.company_name }}：{{ job.job_title }}</p>
    </div>
  </v-container>
</div>
</template>

<script>
import { apiService } from "../common/api.service.js"
export default {
name: "home",
data() {
  return {
    jobs: []
  }
},
methods: {
  getJobs() {
    let endpoint = "api/jobs/"
    apiService(endpoint).then(data => {
      this.jobs.push(...data.results)
    })	
  }
},
created() {
  this.getJobs()
  console.log(this.jobs)
}
}
</script>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11181 = () => {
  const test = `
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "../views/Home.vue";
  import Job from "../views/Job.vue"; // 追加
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/job/:id", // 追加
      name: "job",
      component: Job,
      props: true
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11182 = () => {
  const test = `
  <template>
<div>
  <v-container>
    <div v-for="job in jobs" :key="job.pk">
      <h2>
        <router-link
          :to="{ name: 'job', params: { id: job.id } }"
          class="job-link"
        >{{ job.company_name }}
        </router-link>
      </h2>
      <p>{{ job.job_title }}</p>
      <hr>
    </div>
  </v-container>
</div>
</template>

<script>
import { apiService } from "../common/api.service.js"
export default {
name: "home",
data() {
  return {
    jobs: []
  }
},
methods: {
  getJobs() {
    let endpoint = "/api/jobs/"
    apiService(endpoint).then(data => {
      this.jobs.push(...data.results)
    })	
  }
},
created() {
  this.getJobs()
  document.title = "Job Board";
}
}
</script>

<style scoped>
.job-link {
font-weight: bold;
color: black;
text-decoration: none;
}

.job-link:hover {
color: #41B883;
}
</style>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



// const Tutorial11183 = () => {
//     const test = 
//     `
//     <template>
//     <div>
//         <v-container>
//             <h2 class="mb-5">{{ job.company_name }}</h2>
//             <p>職種：{{ job.job_title }}</p>
//             <p>内容：{{ job.job_description }}</p>
//             <p>給料：{{ job.salary }}円</p>
//             <p>都道府県：{{ job.prefectures }}</p>
//             <p>市町村：{{ job.city }}</p>
//         </v-container>
//     </div>
// </template>

// <script>
// import { apiService } from "../common/api.service.js"

// export default {
//     name: 'job',
//     props: {
//         id: {
//             type: Number,
//             required: true
//         }
//     },
//     data() {
//         return {
//             job: {}
//         }
//     },
//     methods: {
//         setPageTitle(title) {
//             document.title = title;
//         },
//         getJobData() {
//             let endpoint = `/api/jobs/${this.id}/`;
//             apiService(endpoint).then(data => {
//                 this.job = data;
//                 this.setPageTitle(data.company_name);
//             })
//         }
//     },
//     created() {
// 		this.getJobData()
// 	}
// }
// </script>

// <style>
  
// </style>
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };


const Tutorial11191 = () => {
  const test = `
  import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Job from "../views/Job.vue";
import JobEditor from "../views/JobEditor.vue"; //追加

Vue.use(VueRouter);

const routes = [
{
  path: "/",
  name: "home",
  component: Home
},
{
  path: "/job/:id",
  name: "job",
  component: Job,
  props: true
},
{
  path: "/editor", //追加
  name: "editor",
  component: JobEditor,
  props: true
}
];

const router = new VueRouter({
mode: "history",
routes
});

export default router;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11192 = () => {
  const test = `
  <template>
  <v-app>
      <v-app-bar color="success" dark app>
          <v-toolbar-title>求人情報</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
              <v-btn text to="/">ホーム</v-btn>
              <v-btn text to="/editor">仕事追加</v-btn>
          </v-toolbar-items>
      </v-app-bar>
      <v-content>
          <router-view />
      </v-content>
      <v-footer color="success" dark app class="justify-center">
          Django Startup - Step3
      </v-footer>
  </v-app>
</template>

<script>
export default {

};
</script>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial11193 = () => {
  const test = `
  <template>
  <div>
      <v-container>
          <form @submit.prevent="onSubmit">
              <v-text-field
                  v-model="company_name"
                  label="会社名"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="company_email"
                  label="E-mail"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="job_title"
                  label="職種"
                  required
              ></v-text-field>

              <v-textarea
                  v-model="job_description"
                  label="仕事内容"
                  required
              ></v-textarea>

              <v-text-field
                  v-model="salary"
                  label="給料"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="prefectures"
                  label="都道府県"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="city"
                  label="市町村"
                  required
              ></v-text-field>

              <div class="text-center">
                  <v-btn
                      color="success"
                      type="submit"
                  >送信
                  </v-btn>
              </div>
          </form>
      </v-container>
  </div>
</template>

<script>
import { apiService } from "../common/api.service.js"

export default {
  name: "JobEditor",
  data() {
      return {
          company_name: null,
          company_email: null,
          job_title: null,
          job_description: null,
          salary: null,
          prefectures: null,
          city: null,
          error: null
      }
  },
  methods: {
      onSubmit() {
          let endpoint = "/api/jobs/";
          let method = "POST";
          apiService(endpoint, method, {
              company_name: this.company_name,
              company_email: this.company_email,
              job_title: this.job_title,
              job_description: this.job_description,
              salary: this.salary,
              prefectures: this.prefectures,
              city: this.city,
          }).then(job_data => {
              this.$router.push({
                  name: 'job',
                  params: { id: job_data.id }
              })
          })
      }
  },
  created() {
      document.title = "Editor - Job";
  }
}
</script>

<style scoped>

</style>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial11194 = () => {
  const test = `
  class JobOfferListCreateAPIView(generics.ListCreateAPIView):
  queryset = JobOffer.objects.all().order_by("-id")
  serializer_class = JobOfferSerializer
  # permission_classes = [IsAdminUserOrReadOnly]


class JobOfferDetailAPIview(generics.RetrieveUpdateDestroyAPIView):
  queryset = JobOffer.objects.all()
  serializer_class = JobOfferSerializer
  # permission_classes = [IsAdminUserOrReadOnly]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11201 = () => {
  const test = `
  <template>
<div>
  <v-container>
    <div v-for="job in jobs" :key="job.pk">
      <h2>
        <router-link
          :to="{ name: 'job', params: { id: job.id } }"
          class="job-link"
        >{{ job.company_name }}
        </router-link>
      </h2>
      <p>{{ job.job_title }}</p>
      <hr>
    </div>
    <div class="my-4">
      <p v-show="loadingJobs">...loading...</p>
      <v-btn
        v-show="next"
        @click="getJobs"
        color="success"
      >Load More
      </v-btn>
    </div>
  </v-container>
</div>
</template>

<script>
import { apiService } from "../common/api.service.js"
export default {
name: "home",
data() {
  return {
    jobs: [],
    next: null,
    loadingJobs: false
  }
},
methods: {
  getJobs() {
    let endpoint = "/api/jobs/";
    if (this.next) {
      endpoint = this.next;
    }
    this.loadingJobs = true;
    apiService(endpoint).then(data => {
      this.jobs.push(...data.results)
      this.loadingJobs = false;
      if (data.next) {
        this.next = data.next;
      } else {
        this.next = null;
      }
    })	
  }
},
created() {
  this.getJobs()
  document.title = "Job Board";
}
}
</script>

<style scoped>
.job-link {
font-weight: bold;
color: black;
text-decoration: none;
}

.job-link:hover {
color: #41B883;
}
</style>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11211 = () => {
  const test = `
  <template>
  <div>
      <v-container>
          <h2 class="mb-5">{{ job.company_name }}</h2>
          <p>職種：{{ job.job_title }}</p>
          <p>内容：{{ job.job_description }}</p>
          <p>給料：{{ job.salary }}円</p>
          <p>都道府県：{{ job.prefectures }}</p>
          <p>市町村：{{ job.city }}</p>
          <v-btn
              color="success"
              class="mr-2"
      :to="{ name: 'editor', params: { id: job.id } }"
          >編集
          </v-btn>
      </v-container>
  </div>
</template>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



// const Tutorial11212 = () => {
//     const test = `
//     beforeRouteEnter (to, from, next) {
//         ...
//         next(vm => {  
//             // vm を通じてコンポーネントインスタンスにアクセス  
//         })  
//     }  
  
//     beforeRouteEnterの処理の中では、```this```にアクセスできません。
  
//     nextのコールバック関数の中ではアクセスできます。
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };



const Tutorial11213 = () => {
  const test = `
  beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter Call");
  
      next(component => {
          console.log("beforeRouteEnter Next");
      });
  },
  
  created() {
      console.log("created Call");
  },
  
  mounted() {
      console.log("mounted Call");
  },
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};





// const Tutorial11214 = () => {
//     const test = `
//     <script>
//     import { apiService } from "../common/api.service.js"
  
//     export default {
//         name: "JobEditor",
//           props: {
//             id: {
//                 type: Number,
//                 required: false
//             }
//         },
//         data() {
//             return {
//                 company_name: null,
//                 company_email: null,
//                 job_title: null,
//                 job_description: null,
//                 salary: null,
//                 prefectures: null,
//                 city: null,
//                 error: null
//             }
//         },
//         methods: {
//             onSubmit() {
//                 let endpoint = "/api/jobs/";
//                 let method = "POST";
//                 if (this.id !== undefined) {
//                     endpoint += `${this.id}/`;
//                     method = "PUT";
//                 }
//                 apiService(endpoint, method, {
//                     company_name: this.company_name,
//                     company_email: this.company_email,
//                     job_title: this.job_title,
//                     job_description: this.job_description,
//                     salary: this.salary,
//                     prefectures: this.prefectures,
//                     city: this.city,
//                 }).then(job_data => {
//                     this.$router.push({
//                         name: 'job',
//                         params: { id: job_data.id }
//                     })
//                 })
//             }
//         },
//         async beforeRouteEnter (to, from, next) {
//             if (to.params.id !== undefined) {
//                 let endpoint = `/api/jobs/${ to.params.id }/`;
//                 let data = await apiService(endpoint);
//                 return next(vm => {
//                     (vm.company_name = data.company_name),
//                     (vm.company_email = data.company_email),
//                     (vm.job_title = data.job_title),
//                     (vm.job_description = data.job_description),
//                     (vm.salary = data.salary),
//                     (vm.prefectures = data.prefectures),
//                     (vm.city = data.city)
//                 });
//             } else {
//                 return next();
//             }
//         },
//         created() {
//             document.title = "Editor - Job";
//         }
//     }
//     </script>
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };


// const Tutorial11221 = () => {
//     const test = `
//     <template>
//     <div>
//         <v-container>
//             <h2 class="mb-5">{{ job.company_name }}</h2>
//             <p>職種：{{ job.job_title }}</p>
//             <p>内容：{{ job.job_description }}</p>
//             <p>給料：{{ job.salary }}円</p>
//             <p>都道府県：{{ job.prefectures }}</p>
//             <p>市町村：{{ job.city }}</p>
//             <v-btn
//                 color="success"
//                 class="mr-2"
// 				:to="{ name: 'editor', params: { id: job.id } }"
//             >編集
//             </v-btn>
//             <v-btn
//                 color="error"
//                 @click="deleteJobData"
//             >削除
//             </v-btn>
//         </v-container>
//     </div>
// </template>

// <script>
// import { apiService } from "../common/api.service.js"

// export default {
//     name: 'job',
//     props: {
//         id: {
//             type: Number,
//             required: true
//         }
//     },
//     data() {
//         return {
//             job: {}
//         }
//     },
//     methods: {
//         setPageTitle(title) {
//             document.title = title;
//         },
//         getJobData() {
//             let endpoint = `/api/jobs/${this.id}/`;
//             apiService(endpoint).then(data => {
//                 this.job = data;
//                 this.setPageTitle(data.company_name);
//             });
//         },
//         deleteJobData() {
//             let endpoint = `/api/jobs/${this.id}/`;
//             apiService(endpoint, "DELETE").then(() => {
//                 this.$router.push({
//                     name: 'home'
//                 });
//             });
//         }
//     },
//     created() {
// 		this.getJobData()
// 	}
// }
// </script>
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };

