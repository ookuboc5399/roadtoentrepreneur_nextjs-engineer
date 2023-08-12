import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_1 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_1>
            <h3>ブログシステム構築 </h3>
            <p>Djangoを初めて触る方向けのチュートリアルです。 </p>
            <p>Djangoでシンプルなブログサイトを構築します。 </p>
            <p>Djangoの使い方を学習していきましょう。 </p>
            <h3>目標 </h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
              <li>Djangoとは？</li>
              <li>モデルの作り方</li>
              <li>URLの作り方</li>
              <li>ビューの作り方</li>
              <li>フォームの作り方</li>
              <li>テンプレートの作り方</li>
            </ul>
            <h3>機能 </h3>
            <ul className='list-disc'>
              <li>ブログ投稿</li>
              <li>ブログ編集</li>
              <li>ブログ削除</li>
              <li>ログイン</li>
              <li>ログアウト</li>
              <li>サインアップ</li>
            </ul>
            <h3>エラーが発生した場合 </h3>
            <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。。 </p>
            <p>公式ドキュメント </p>
            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。 </p>
            <p>参照コード </p>

            <h3>前提知識 </h3>
            <p>Djangoを始める前に、下記の言語は学習しておいて下さい。 </p>
            <ul className='list-disc'>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_1>
        ) : id == 2 ? (
          <Layout_tutorial_1>
            <h3>準備 </h3>
            <p>GitHub </p>
            <p>GitHubのアカウントを取得して下さい。 </p>
            <p>GitHub </p>
            <p>「New repository」をクリックして、好きな名前でGitHubのリポジトリを作成します。 </p>
            <p>ローカルにリポジトリ名と同じフォルダを作成します。 </p>
            <p>ローカルフォルダとGitHubのリポジトリを連携させます。 </p>
            <Tutorial121 />
            <p>この時点でREADME.mdだけコミットされていると思います。 </p>
            <h3>gitignoreファイルを追加 </h3>
            <p>ルートディレクトリに.gitignoreファイルを作成します。 </p>
            <Tutorial122 />
            <p>記述されたファイルは、git管理下から除外されてコミットされなくなります。 </p>
            <Tutorial123 />
            <h3>仮想環境 </h3>
            <p>仮想環境を作成します。 </p>
            <p>仮想環境とは </p>
            <p>開発を行うときは、用途に応じて専用の実行環境を作成し、切り替えて使用するのが一般的です。 </p>
            <p>一時的に作成する実行環境を「仮想環境」と言います。</p>
            <h4>仮想環境作成</h4>
            <p>仮想環境はpythonに標準搭載されている仮想環境プログラムの「venv」を使用します。</p>
            <p>ルートディレクトリで下記コマンドを入力します。(django-blogフォルダの中)</p>
            <Tutorial124 />
            <p>コマンドを実行すると、myvenvフォルダが作成されます。</p>
            <p>VS Codeを使用している方は、エクスプローラーをリフレッシュすると、フォルダが表示されます。</p>
            <Tutorial125 />
            <h4>仮想環境実行</h4>
            <p>sourceコマンドで仮想環境が実行できます。</p>
            <p>ルートディレクトリで下記コマンドを入力します。</p>
            <p className='text-red-400'>Linux、Mac</p>
            <Tutorial126 />
            <p className='text-red-400'>Windows</p>
            <Tutorial128 />
            <p>実行できない場合、実行ポリシーを確認する</p>
            <Tutorial129 />
            <h3>最新pipコマンド</h3>
            <p>現在、古いコマンドがインストールされています。</p>
            <p>アップデートしておきましょう。</p>
            <Tutorial1210 />
            <h3>パッケージ設定</h3>
            <p>requirements.txtを作成し、開発に必要なパッケージをインストールします。</p>
            <Tutorial1211 />
            <p>requirements.txtに、アプリに必要なパッケージを記載します。</p>
            <p className='text-red-400'>requirements.txt</p>
            <Tutorial127 />
            <h3>インストール</h3>
            <p>仮想環境にパッケージをインストールします。</p>
            <Tutorial1212 />
          </Layout_tutorial_1>
        ) : id == 3 ? (
          <Layout_tutorial_1>
            <h3>プロジェクト作成 </h3>
            <p>#Djangoの仕組み</p>
            <p>DjangoはMTVモデルを採用しています。 </p>
            <p>下記のイニシャルを取ったものです。 </p>

            <h3>#プロジェクト作成 </h3>
            <p>Djangoは1つのプロジェクトと1つ以上のアプリケーションで構築します。</p>
            <p>複数のアプリケーションを作成して、互いに依存しないようにすると、管理が楽になります。</p>

            <p>django-admin startprojectコマンドでプロジェクトを作成します。</p>
            <p>最後に.(ドット)をつけることで、ディレクトリ直下に作成します。</p>
            <Tutorial131 />
            <h3>#環境設定変更</h3>
            <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
            <Tutorial132 />
            <h3>#データベースのセットアップ</h3>
            <p>migrateコマンドを実行することで、データベースがセットアップされます。</p>
            <Tutorial133 />
            <h3>#Webサーバーを起動する</h3>
            <Tutorial134 />
            <p>URLにアクセスすると、Webページが表示されます。</p>
            <p>http://127.0.0.1:8000/</p>
            <p>Webサーバーを停止するには、Ctrl + Cを同時に押すと停止します。</p>
          </Layout_tutorial_1>
        ) : id == 4 ? (
          <Layout_tutorial_1>
            <h3>アプリケーション作成 </h3>
            <p>アプリケーションを作成していきます。</p>
            <p>startappコマンドでアプリケーションを追加できます。 </p>
            <p>アプリケーション名はappにします。 </p>

            <Tutorial141 />

            <Tutorial142 />
            <p>このようなディレクトリが自動的に生成されます。</p>
            <h3>#Djangoでアプリケーションを使えるように設定</h3>
            <p>アプリケーションを使えるようにするには、プロジェクトの設定にアプリケーションを追加する必要があります。</p>
            <p>INSTALLED_APPSに追加します。</p>
            <Tutorial143 />
          </Layout_tutorial_1>
        ) : id == 5 ? (
          <Layout_tutorial_1>
            <h3>モデル </h3>
            <p>Djangoではモデルをとおして、データベースを構築します。</p>
            <p>モデルを使用することで、SQLを意識することなくデータベースを操作することができます。 </p>
            <p>モデルを定義するにはmodels.pyに追加します。 </p>
            <p>クラスを追加し、各プロパティを定義していきます。 </p>
            <h4>#フィールドクラス</h4>

            <h4>#フィールドオプション</h4>
            <p>フィールドクラスで使えるオプションです。</p>
            <h4>リレーションフィールドクラス</h4>
            <p>リレーションフィールドクラスを使用すると、モデルクラス間で関連付けをすることができます。</p>
            <h4>on_deleteオプション</h4>
            <div className="text-center">
              <div className="text-3xl m-4">
                関連記事
              </div>

              <div>
                <div class="flex justify-center">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">フィールドクラス</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2021/04/17/django%e3%83%95%e3%82%a3%e3%83%bc%e3%83%ab%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">フィールドオプション</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2022/05/10/%e3%83%95%e3%82%a3%e3%83%bc%e3%83%ab%e3%83%89%e3%82%aa%e3%83%97%e3%82%b7%e3%83%a7%e3%83%b3/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex justify-center">

                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">リレーションフィールドクラス</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2022/05/10/1856/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">on_deleteオプション</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      <a href="http://www.agile-software.site/2022/05/10/on_delete%e3%82%aa%e3%83%97%e3%82%b7%e3%83%a7%e3%83%b3/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        記事を読む
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4>models</h4>
            <p>投稿機能のモデルを作成していきます。</p>
            <p>Postモデルを追加します。</p>
            <p className='text-red-400'>app/models.py</p>
            <Tutorial151 />
            <h3>コード解説</h3>
            <p>authorは、ForeignKeyを使用して、ログインしているユーザーに紐づけます。</p>
            <Tutorial152 />
            <p>titleは、CharFieldを使用して、テキストボックスを入力項目にします。</p>
            <p>CharFieldはmax_lengthを指定する必須があります。</p>
            <Tutorial153 />
            <p>contentは、TextFieldを使用して、テキストエリアを入力項目にします。</p>
            <Tutorial154 />
            <p>日付は、DateTimeFieldを使用します。</p>
            <Tutorial155 />
            <p>def __str__(self)で、管理画面などで表示される文字列の定義をすることができます。</p>
            <Tutorial156 />
          </Layout_tutorial_1>
        ) : id == 6 ? (
          <Layout_tutorial_1>
            <h3>管理画面 </h3>
            <p>Djangoには管理画面が存在します。</p>
            <p>管理画面では投稿や編集、削除などweb上でデータベースを操作することができる便利な画面です。 </p>
            <p>管理画面でデータを操作できるようにします。 </p>
            <p>Admin </p>

            <Tutorial161 />
            <h3>コード解説</h3>
            <p>admin.site.register関数の引数にモデルを指定するだけで、管理画面からデータベースを操作できるようになります。</p>
            <Tutorial162 />
            <h3>マイグレーション実行</h3>
            <p>モデルを変更したら、下記コマンドで必ずデータベースの再構築が必要になります。</p>
            <p>マイグレーションをするのを忘れて起動させると、エラーが発生しますので、必ずマイグレーションをしましょう。</p>
            <Tutorial163 />
            <h3>管理ユーザー作成</h3>
            <p>createsuperuserコマンドで管理ユーザーを作成することができます。</p>
            <Tutorial164 />
            <p>ユーザー名、メールアドレス、パスワードを入力します。</p>
            <h3>Webサーバー開始</h3>
            <Tutorial165 />
            <p>ユーザー名とパスワードを入力すると、管理画面が表示されます。</p>
            <h3>データ追加</h3>
            <p>管理画面でPostモデルのデータを追加します。。</p>
            <p>何件か登録しておくと、レイアウトがしやすくなります。。</p>
            <p>中身はとりあえずダミー文字でOKです。</p>
          </Layout_tutorial_1>
        ) : id == 7 ? (
          <Layout_tutorial_1>
            <h3>URL </h3>
            <p>ルーティングを設定します。</p>
            <p>ルーティングはurls.pyに定義します。 </p>
            <p>ルーティングはプロジェクト用とアプリケーション用が存在します。</p>
            <h4>プロジェクト用ルーティング </h4>
            <p>プロジェクト用ルーティングは、管理サイト用のルーティングとアプリケーション用のルーティングを指定します。</p>
            <p>include関数でアプリケーションのurlsを指定します。</p>

            <h4>アプリケーション用ルーティング</h4>
            <p>アプリケーション用のルーティングは、URLとビューのマッチングをします。</p>
            <p>このファイルは自動生成されないので、作成する必要があります。。</p>
            <h4>プロジェクトURL</h4>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial171 />
            <h3>コード解説</h3>
            <p>urlpatternsを使用して、path関数の引数を順番にチェックしています。</p>
            <p>第一引数が一致したら、第二引数の処理を行います。</p>
            <h4>#アプリケーションURL</h4>
            <p>アプリケーション用のurls.pyを作成します。</p>
            <Tutorial172 />
            <p className='text-red-400'>app/urls.py</p>
            <Tutorial173 />
            <h3>コード解説</h3>
            <p>トップページ(&apos;&apos;)にviewのIndexView関数を割り当てます。</p>
            <p>トップページにアクセスした時に、IndexView関数の処理をすることになります。</p>
            <p className='border-b-4 border-blue-400'>as_viewメソッドは、クラス汎用ビューをビュー関数化する働きをします。</p>
            <p>次のページで説明しますが、IndexViewはクラス汎用ビューと言って、Djangoが用意した関数を継承して作ります。</p>
            <p>クラス汎用ビューを使用する場合は必須になります。</p>
            <p>第三引数のnameは、ルーティングに名前をつけています。</p>
            <p>ルーティングに名前をつけることで、名前からURLを逆引きすることができるようになります。</p>
            <p>便利なので必ず指定します。</p>
            <Tutorial174 />
          </Layout_tutorial_1>
        ) : id == 8 ? (
          <Layout_tutorial_1>
          <h3>フォーム </h3>
          <p>フォームは、フォーム画面で入力された値をフォームオブジェクトに変換、保持します。</p>
          <p>入力値のチェックもおこないます。 </p>
          <h4>#フォームの定義 </h4>
          <p>フォームは<a className='underline decoration-sky-500 text-xl'>ModelFormクラスを継承する</a>方法と、<a className='underline decoration-sky-500 text-xl'>Formクラスを継承する</a>方法があります。</p>
          <p>このチュートリアルでは、Formクラスを継承する方法で実装します。</p>
          <h4> #シンプルなフォーム処理をする場合</h4>

          <p className='text-xl text-blue-500'> ModelFormクラスを継承</p>
          <p>簡単に書ける。</p>
          <p>デフォルトでバリデーションをしてくれる。</p>
          <h4>#複雑なフォーム処理をする場合</h4>
          <p className='text-xl text-blue-500'>Formクラスを継承</p>
          <p>フィールドを1つずつ定義する</p>
          <p>バリデーションは定義する</p>
          <h4>#フォームのフィールドクラス</h4>
          <p>フィールドクラスにはウィジェットが設定されています。</p>
          <p>ウィジェットはフィールドのタイプやデザインをまとめたものです。</p>
          <div>
              <div class="flex justify-center">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                      <a href="#">
                          <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">フィールドクラス</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <a href="http://www.agile-software.site/2021/04/17/django%e3%83%95%e3%82%a3%e3%83%bc%e3%83%ab%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              記事を読む
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>


              </div>
          </div>
          <h4>#バリデーション追加</h4>
          <p>validatorsを使用</p>
          <p>clean_[フィールド名]メソッドを使用</p>
          <p>cleanメソッドを使用</p>
          <h4>#フォームを作成</h4>
          <p>forms.pyファイルを追加します。</p>
          <Tutorial181 />

          <Tutorial182 />
          <h4>#コード解説</h4>
          <p>一行のフォームを想定する場合は、CharFieldを使用します。</p>
          <p>max_lengthで最大文字数を指定します。</p>
          <Tutorial183 />
          <p><a className='underline decoration-sky-500 text-xl'>複数行のフォームを想定する場合</a>は、CharFieldの引数にwidget=forms.Textarea()のウィジェットを追加します。</p>
          <Tutorial184 />
      </Layout_tutorial_1>
        ) : id == 9 ? (
          <Layout_tutorial_1>
          <h3>ビュー </h3>
          <p>ビューは、ルーティングからの情報を受け取ってレスポンスの情報を作ります。</p>
          <p>ビューはアプリケーションの司令塔となり、フォーム、モデル、テンプレートとやりとりをします。 </p>
          <h4>#ビューの機能 </h4>
          <li>フォームに処理を依頼 </li>
          <li>モデルにデータベースの操作を依頼</li>
          <li>テンプレートにHTMLの生成を依頼</li>

          <li>画面遷移先の判断</li>
          <h4>ビューの種類</h4>
          <p>ビューの種類は、クラスベース汎用ビューと関数ベースビューがあります。</p>
          <h5>シンプルな処理の場合</h5>
          <p>クラスベース汎用ビューを使用</p>
          <h5>複雑な処理の場合</h5>
          <p>関数ベースビューを使用</p>

          <h4>クラスベース汎用ビューとは？</h4>
          <p>クラスベース汎用ビューは、すでにビューとしての機能を備えていて、クラスを継承します。</p>
          <p>これを使用すると、記述する量が減り、簡単なプログラムでViewを作成することができます。</p>
          <p>このチュートリアルでは、主にクラスベース汎用ビューを使用していきます。</p>
          <p>クラスベース汎用ビューの種類</p>
          <p>django.views.genericに、それぞれのビューが準備されているので、importして継承します。</p>
          <div>
              <div class="flex justify-center">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                      <a href="#">
                          <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django_view</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <a href="http://www.agile-software.site/2021/04/17/django%e3%83%95%e3%82%a3%e3%83%bc%e3%83%ab%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              記事を読む
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>


              </div>
          </div>
          <p>このチュートリアルでは主にViewを継承してビューを作成します。</p>
          <p>Viewを継承する理由は、処理の内容を把握しやすいからです。</p>
          <p>設定した変数を使用</p>
          <p>設定した変数を使用したい場合には、汎用ビューで定義されている関数をオーバーライドします。</p>
          <p>get_context_data関数を使用すると、使用したい変数に変えることができます。</p>
          <p>普段はデフォルト値を使用して、変更したい時だけ値をオーバーライドします。</p>
          <p>独自のテンプレートの名前を使用したい場合は、template_nameをオーバーライドします。</p>
          <div className='flex justify-center'>
              <div className='text-center'>
                  <p className='text-xl'>オーバーライドするクラス変数</p>
                  <div class="relative sm:rounded-lg m-10">
                      <table class="shadow text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="px-6 py-3">
                                      クラス変数
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      説明
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      template_name
                                  </th>
                                  <td class="px-6 py-4">
                                  テンプレート名を指定する
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      model
                                  </th>
                                  <td class="px-6 py-4">
                                  モデルを指定する
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      paginate_by
                                  </th>
                                  <td class="px-6 py-4">
                                  1ページに表示する件数を指定する
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      queryset
                                  </th>
                                  <td class="px-6 py-4">
                                  テンプレートにクエリセットを渡す
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      form_class
                                  </th>
                                  <td class="px-6 py-4">
                                  フォームクラス名を指定する
                                  </td>
                              </tr>
                                                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      success_url
                                  </th>
                                  <td class="px-6 py-4">
                                  処理成功時にリダイレクトURLを指定する
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                      fields
                                  </th>
                                  <td class="px-6 py-4">
                                  ビューで使うフォームのフィールドを指定する
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <div className='text-center'>
                  <p className='text-xl'>オーバーライドするメソッド</p>
                  <div class="relative sm:rounded-lg m-10">
                      <table class="shadow text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" class="px-6 py-3">
                                      メソッド
                                  </th>
                                  <th scope="col" class="px-6 py-3">
                                      説明
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  get_context_data
                                  </th>
                                  <td class="px-6 py-4">
                                  テンプレートに辞書データを渡す
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  get_queryset
                                  </th>
                                  <td class="px-6 py-4">
                                  テンプレートにクエリセットを渡す
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  form_valid
                                  </th>
                                  <td class="px-6 py-4">
                                  フォームのバリデーションに問題がない場合の処理
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  form_invalid
                                  </th>
                                  <td class="px-6 py-4">
                                  フォームのバリデーションに問題があった場合の処理
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  get_success_url
                                  </th>
                                  <td class="px-6 py-4">
                                  処理成功時のリダイレクトURLを指定
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  delete
                                  </th>
                                  <td class="px-6 py-4">
                                  削除処理時の処理を追加
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  get
                                  </th>
                                  <td class="px-6 py-4">
                                  独自のGET通信時の処理を記述
                                  </td>
                              </tr>
                              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                  post
                                  </th>
                                  <td class="px-6 py-4">
                                  独自のPOS通信時の処理を記述
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>

          <h4>関数ベースビュー</h4>
          <p>関数ベースビューは、レスポンスを返すreturn処理まで記述する必要があります。</p>
          <p>必ず何を表示させるかのreturnが必要になり、ない場合はエラーになります。</p>
          <p>関数ベースビューは、requestオブジェクトを引数で受け取ります。</p>
          <p>requestオブジェクトから、リクエスト情報を取得することができます</p>
          <h4>Viewを作成</h4>

          <p>トップページのビューを作成します。</p>
          <Tutorial191 />
          <h4>コード解説</h4>
          <p>Viewを継承して、クラスベース汎用ビューを作成します。</p>
          <Tutorial192 />
          <p>get関数は、画面が表示されたら必ず最初に呼ばれます。</p>

          <Tutorial193 />
          <p>Postモデルを呼び出し、降順に並び変えています</p>
          <Tutorial194 />
          <p>render関数を使用して、テンプレートにデータを渡します。</p>
          <p>&apos;post_data&apos;: post_dataは</p>
          <Tutorial195 />
      </Layout_tutorial_1>
        ) : id == 10 ? (
          <Layout_tutorial_1>
          <p> テンプレート </p>
          <p>テンプレートを作成していきます。</p>
          <p>appフォルダの下にtemplatesフォルダとappフォルダを作成します。</p>
          <p>appはアプリケーションの名前になります。 </p>
          <Tutorial1101 />
          <p>DjangoはHTMLの中にテンプレート言語という記述を用いて、データベースの値を表示したり、条件分岐やループなどの制御をすることができます。</p>
          <p>テンプレートは、templatesというディレクトリに.html拡張子で作成する必要があります。</p>
          <p>#変数を表示</p>

          <p>変数を表示するためには、下記を使用します。</p>

          <Tutorial1102 />
          <p>#制御処理</p>
          <p>条件分岐やループなどの制御処理は、下記を使用します。</p>
          <Tutorial1103 />
          <p>デフォルトで使用可能な変数</p>
          <p>組み込みフィルタ</p>
          <p>変数にフィルタを使用することができます。</p>
          <Tutorial1104 />
          <p>組み込みタグ</p>
          <p>form変数オプション</p>
          <p>テンプレート作成</p>
          <p>画面を作成するためのテンプレートを作成します。</p>
          <p>CSSフレームワークのBootstrapを使用して、レイアウトをしていきます。</p>
          <p>base</p>
          <p>base.htmlファイルを作成します。</p>
          <p>主にヘッダーやフッター、ナビゲーションはbaseファイルに書くことが多いです。</p>


          <Tutorial1105 />
          <p>コード解説</p>
          {/* <p>静的ファイルを読み込む場合は、{% load static %}を書く必要があります。</p>
                      <p>Wcssを読み込む場合は、{% static 'css/style.css' %}と書きます。。</p> */}
          <Tutorial1106 />
          <Tutorial1107 />
          <Tutorial1108 />
          <Tutorial1109 />
          <Tutorial1110 />
          <Tutorial1111 />
          <Tutorial1112 />
          <Tutorial1113 />
          <Tutorial1114 />
      </Layout_tutorial_1>
        ) : id == 11 ? (
          <Layout_tutorial_1>
          <h3>CSS</h3>
          <p>CSSを適応して、装飾していきます。</p>
          <p>appフォルダの下に、static、cssフォルダを作成し、style.cssファイルを作成します。 </p>
          <Tutorial1111 />
          <h4>CSS追加</h4>
          <Tutorial1112 />
          <p>確認</p>
          <p>Webサーバーを開始して、ブログのリストが表示されることを確認します。</p>
          <Tutorial1113 />
      </Layout_tutorial_1>
        ) : id == 12 ? (
          <Layout_tutorial_1>
          <h3>投稿詳細 </h3>
          <p>ブログの詳細画面を作成します。</p>
          <p>ここからは、今までの基礎をもとに解説していきます。 </p>
          <p>何をしているのかよく分からない場合は、前のページに戻って復習して下さい。 </p>
          <p>詳細画面用のURLが必要なので、追加します。 </p>
          <p className='text-red-400'>app/urls.py</p>
          <Tutorial1121 />
          <p>コード解説</p>
          {/* <p><int:pk>には投稿のIDが入ります。。</p> */}

          <p>URLにIDがないと、どの投稿の詳細画面を開いているかが分からなくなります</p>
          <Tutorial1122 />
          <p>コード解説</p>
          <p>self.kwargs[&apos;pk&apos;]でURLのIDを取得することができます。</p>
          <p>取得したIDでモデルデータのフィルターをかけて、データを取得します。</p>
          <p className='text-red-400'>app/views.py</p>
          <Tutorial1123 />
          <p>取得したデータをテンプレートに渡します。</p>

          <Tutorial1124 />
          <h4>テンプレート</h4>
          <p>index</p>
          <p>詳細画面へのリンクを追加します。</p>
          <p className='text-red-400'>app/templates/app/index.html</p>
          <Tutorial1125 />
          <p>post_detail</p>
          <p>詳細画面のテンプレートを作成します。</p>
          <p>ビューから渡されたデータを表示するだけです。</p>
          <p className='text-red-400'>app/templates/app/post_detail.html</p>
          <Tutorial1126 />
          <h4>コード解説</h4>
          <p>ユーザーがログイン状態であれば、ボタンを表示します。</p>
          <p>もし、ログアウト状態であれば、ボタンは表示されません。</p>
          <Tutorial1127 />
          <p>確認</p>
          <p>投稿リストをクリックして、詳細画面に遷移することを確認します。</p>
          <p>ログイン状態</p>
      </Layout_tutorial_1>
        ) : id == 13 ? (
          <Layout_tutorial_1>
          <h4>投稿 </h4>
          <p>新規投稿機能を追加します</p>
          <p>アプリケーションURL </p>
          <p>新規投稿用のURLを作成します。 </p>
          <p className='text-red-400'>app/urls.py</p>
          <Tutorial1131 />
          <p>postとget </p>
          <p>Viewクラスを継承し、get関数をpost関数を用意します。</p>
          <Tutorial1132 />
          <p>postとgetは、ブラウザがサーバーにリクエストを送るときに使えるmethodの種類です。</p>

          <p>リクエストを送ると一緒にmethodの情報も送られます。</p>
          <p>リクエストはDjangoに送られ、Djangoの中でmethodに応じた処理が行われます。</p>
          <p>getは、ページが表示された時にコールされる関数です。</p>
          <p>どのビュークラスも必ず最初にget関数がコールされます。</p>
          <p>postは、フォーム送信など、何かの情報をサーバーに送る時にコールされる関数です。</p>
          <p>フォームのmethodはpostにします。</p>
          <p>ユーザーがフォームに何か入力して、送信ボタンなどのボタンを押したときにコールされます。</p>
          <p>ユーザーが入力された内容を使って、処理をしたい時に使用します。</p>
          <p>ビュー</p>
          <p>新規投稿用のビューを作成します。</p>
          <p className='text-red-400'>app/views.py</p>
          <Tutorial1133 />
          <p>コード解説</p>
          <p>PostFormからフォームデータを取得し、テンプレートに渡します。</p>
          <Tutorial1134 />
          <p>送信ボタンを押した時に、post関数がコールされます。</p>

          <Tutorial1135 />
          <p>PostFormからフォームデータを取得し、バリデーションをします。</p>
          <Tutorial1136 />
          <p>入力されたフォームデータを取得して、新規データとしてデータベースに書き込みます。</p>
          <Tutorial1137 />
          <p>送信後は、リダイレクトして詳細画面に遷移します。</p>
          <Tutorial1137 />
          <p>テンプレート</p>
          <p>base</p>
          <p>新規投稿のリンクを追加します。</p>
          <Tutorial1138 />
          <p>post_form</p>
          <p>新規投稿用のテンプレートを作成します。</p>
          <Tutorial1139 />
          <p>コード解説</p>
          <p>widget_tweaksはフォームをレンダリングする時に、CSSクラスやHTML属性を変更できるモジュールです。</p>
          <p>フォームを作る時はほぼ必須のモジュールになります。</p>
          <Tutorial11310 />
          <p>フォームの中に必ずcsrf_tokenを記載してください。</p>
          <p>これは、フォームでデータが改ざんされることを防ぐための記載になります。</p>
          <Tutorial11311 />
          <p>フォームにクラスとplaceholderも追加しています。</p>
          <p>こうすることで、CSSでカスタマイズしやすくなります。</p>
          <Tutorial11312 />
          <p>CSS</p>
          <p>CSSでフォームを装飾します。</p>
          <Tutorial11313 />
          <p>確認</p>
          <p>新規投稿ができるか確認します。</p>
      </Layout_tutorial_1>
        ) : id == 14 ? (
          <Layout_tutorial_1>
          <h4>投稿編集 </h4>
          <p>投稿を編集できる機能を作成します。</p>
          <p>#アプリケーションURL </p>
          <p>編集用のURLを作成します。 </p>
          <Tutorial1141 />
          <p>コード解説 </p>
          {/* <p>新規投稿と同様に、<int:pk>でどの投稿なのか判定します。</p> */}
          <Tutorial1142 />

          <p>ビュー</p>
          <p>投稿用のビューを作成します。</p>
          <Tutorial1143 />
          <p>コード解説</p>
          <p>編集画面のフォームでは、データをフォームに表示する必要があります。</p>
          <p>初期データをinitialオプションを使用することで、設定できます。</p>
          <Tutorial1144 />
          <p>新規投稿と同様に、編集画面で投稿ボタンを押すと、post関数がコールされます。</p>
          <p>データをバリデーションして、フォームの内容をデータベースに書き込みます。</p>
          <Tutorial1145 />
          <p>テンプレート</p>
          <p>post_detail</p>
          <p>編集ボタンのリンクを追加します。</p>
          <Tutorial1146 />
          <p>確認</p>
          <p>編集ボタンを押して、投稿を編集できるか確認します。</p>
      </Layout_tutorial_1>
        ) : id == 15 ? (
          <Layout_tutorial_1>
          <p>投稿削除 </p>
          <p>投稿を削除する機能を追加します。</p>
          <p>アプリケーションURL </p>
          <p>削除用のURLを作成します。。 </p>

          <Tutorial1151 />
          <p>ビュー</p>
          <p>削除用のビューを作成します。</p>
          <Tutorial1152 />
          <p>コード解説</p>
          <p>削除ボタンをクリックしたら、削除確認画面に遷移するようにします。</p>
          <Tutorial1153 />
          <p>deleteを使用することで、データベースからデータを削除できます。</p>
          <Tutorial1154 />
          <p>テンプレート</p>
          <p>post_detail</p>
          <p>削除ボタンのリンクを追加します。</p>
          <Tutorial1155 />
          <p>post_delete</p>
          <p>削除確認のテンプレートを作成します。</p>
          <Tutorial1156 />
          <p>確認</p>
          <p>削除ボタンをクリックして、投稿が削除できることを確認します。</p>
      </Layout_tutorial_1>
        ) : id == 16 ? (
          <Layout_tutorial_1>
          <p>認証機能 </p>
          <p>会員制のWebアプリケーションを構築するには、認証機能が必須となります。</p>
          <p>今回は、ログイン、ログアウト、サインイン機能を実装します。 </p>
          <p>メンテナンスがしやすいように、認証用のアプリケーションを作成します。 </p>
          <p>アプリケーション追加 </p>
          <p>accountsアプリケーションを作成します。</p>

          <Tutorial1161 />
          <p>作成したaccountsアプリケーションをmysiteプロジェクトに登録します。</p>
          <p>settings.pyにaccountsを追加します。</p>
          <Tutorial1162 />

          <p>django-allauthをインストール</p>
          <p>認証機能を提供するdjango-allauthパッケージをインストールします。</p>
          <p>Djangoのローカル認証だけではなく、ソーシャル認証も可能になります</p>
          <p>GoogleアカウントやFacebookアカウントなどを使用してログインできます。</p>
          <li>
              サインアップ
              ログイン
              ログアウト
              パスワードリセット
              メールアドレス認証
          </li>
          <p>など、色々なことができます。</p>
          <p>公式ドキュメントを読んで、色々な機能を追加してみてください。。</p>
          <p>django-allauthはすでにインストールしていますので、設定していきます。</p>
          <p>django-allauthをアプリケーションで使用するため、プロジェクト設定を編集します。</p>
          <Tutorial1163 />
          <p>コード解説</p>
          <p>リダイレクト先を指定します</p>
          <p>トップページにリダイレクトするようにしていますが、自由に変更できます。</p>
          <Tutorial1164 />
          <p>アカウントを作る際のメールアドレス認証を設定します。</p>
          <p>noneに設定すると、メールアドレス認証をしなくなります。</p>
          <p>もしメールアドレス認証機能を追加する場合は、mandatoryに変更する必要があります。</p>
          <Tutorial1165 />
          <p>マイグレーション実行</p>
          <p>アプリケーションを追加したら、マイグレーションが必要になります。</p>
          <Tutorial1166 />
          <p>プロジェクトURL</p>

          <Tutorial1167 />
      </Layout_tutorial_1>
        ) : id == 17 ? (
          <Layout_tutorial_1>
          <h3>ログイン </h3>
          <p>ログイン機能を追加します。</p>
          <p>アプリケーションURL </p>
          <p>ログイン用のURLを作成します。 </p>
          <p className='text-red-400'>accounts/urls.py</p>
          <Tutorial1171 />
          <p>ビュー</p>
          <p>ログイン用のビューを作成します。</p>
          <p className='text-red-400'>accounts/views.py</p>
          <Tutorial1172 />
          <p>コード解説</p>
          <p>allauthのLoginViewクラスを継承します。</p>
          <p>template_nameを指定するだけで、簡単にログイン機能が使用できます。</p>
          <Tutorial1173 />
          <p>テンプレート</p>
          <p>base</p>
          <p>ログインのリンクを追加します。</p>
          <Tutorial1174 />
          <p>login</p>
          <p>ログインのテンプレートを作成します。</p>

          <Tutorial1175 />
          <p>CSS</p>
          <p>CSSでログインフォームを装飾します。</p>
          <Tutorial1176 />
          <p>確認</p>
          <p>ログイン画面に遷移して、ログインできるか確認します。</p>
          <p>すでにログイン状態である場合は、admin画面でログアウトします。</p>
      </Layout_tutorial_1>
        ) : id == 18 ? (
          <Layout_tutorial_1>
          <p>ログアウト </p>
          <p>ログアウト機能を追加します。</p>
          <p>アプリケーションURL </p>
          <p>ログアウト用のURLを作成します。 </p>
          <p className='text-red-400'>accounts/urls.py</p>
          <Tutorial1181 />
          <p>ビュー </p>
          <p>ログアウト用のビューを作成します。</p>
          <p className='text-red-400'>accounts/views.py</p>
          <Tutorial1182 />
          <p>コード解説</p>
          <p>self.logoutでログアウトできます。</p>
          <Tutorial1183 />
          <p>テンプレート</p>
          <p>base</p>
          <p>ログアウトのリンクを追加します。</p>
          <Tutorial1184 />
          <p>logout</p>
          <p>ログアウトのテンプレートを作成します。</p>
          <p className='text-red-400'>accounts/templates/accounts/logout.html</p>
          <Tutorial1185 />
          <p>確認</p>
          <p>ログアウトできることを確認します。</p>
      </Layout_tutorial_1>
        ) : id == 19 ? (
          <Layout_tutorial_1>
          <p>サインアップ </p>
          <p>サインアップ機能を追加します。</p>
          <p>アプリケーションURL </p>
          <p>サインアップ用のURLを作成します。 </p>
          <Tutorial1191 />
          <p>ビュー </p>
          <p>サインアップ用のビューを作成します。</p>
          <p>allauthのSignupViewクラスを継承するので、templateを指定するだけです。</p>
          <Tutorial1192 />
          <p>テンプレート</p>
          <p>base</p>
          <p>サインアップのリンクを追加します。</p>
          <Tutorial1193 />
          <p>signup</p>
          <p>サインアップのテンプレートを作成します。</p>
          <Tutorial1194 />
          <p>コード解説</p>
          <p>allauthのSignupViewクラスを継承することで、formがテンプレートに渡されます。</p>
          <Tutorial1195 />
          <p>確認</p>

          <p>サインアップができることを確認します。</p>
      </Layout_tutorial_1>
        ) : id == 20 ? (
          <Layout_tutorial_1>
          <h3>おわりに </h3>
          <p> チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
          <p>ブログ構築チュートリアルはここまでで終わりとなります。 </p>
          <p>  Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
          <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。 </p>
          <p>これまでの知識で基本的なWebアプリケーションを開発できます。。</p>

          <p>ぜひオリジナルのアプリケーションを開発してみてください。。</p>
          <div className="text-center">
              <div className="text-3xl m-4">
                  関連記事
              </div>
              <div class="flex flex-nowrap">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                      <a href="#">
                          <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                      </a>
                      <div class="p-5">
                          <a href="#">
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">django-summernote</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <a href="http://www.agile-software.site/2021/07/10/django-summernote/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
                          </a>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              記事を読む
                              <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                      </div>
                  </div>
              </div>

          </div>
      </Layout_tutorial_1>
        ): (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial121 = () => {
  const test = `
  echo "# django-blog" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git remote add origin https://github.com/haruyasu/django-blog.git
  git push -u origin master
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial122 = () => {
  const test = `
  django-blog
  ├── README.md
  └───.gitignore
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial123 = () => {
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



const Tutorial124 = () => {
  const test = `
  $ python3 -m venv myvenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial125 = () => {
  const test = `
  django-blog
  ├── README.md
  ├── .gitignore
  └───myvenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial126 = () => {
  const test = `
  $ source myvenv/bin/activate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial127 = () => {
  const test = `
  Django~=3.1.4
  django-widget-tweaks~=1.4.8
  django-allauth~=0.41.0
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial128 = () => {
  const test = `
  $ myvenv\Scripts\activate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial129 = () => {
  const test = `
  # 実行ポリシーを確認する
  PS C:> Get-ExecutionPolicy
  Restricted
  
  # (書き方)Set-ExecutionPolicy -ExecutionPolicy <実行ポリシー> -Scope <スコープ>
  PS C:> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
  
  # 確認してみる
  PS C:> Get-ExecutionPolicy
  RemoteSigned
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1210 = () => {
  const test = `
  (myvenv) ~$ pip3 install --upgrade pip setuptools
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1211 = () => {
  const test = `
  django-blog
  ├── README.md
  ├── .gitignore
  ├── myvenv
  │   └── ...
  └───requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1212 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1213 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial131 = () => {
  const test = `
  (myvenv) ~$ django-admin startproject mysite .
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial132 = () => {
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



const Tutorial133 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial134 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial141 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py startapp app
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial142 = () => {
  const test = `
  ├── app // アプリケーションディレクトリ
│   ├── admin.py // 管理サイト設定ファイル
│   ├── apps.py // アプリケーション構成設定ファイル
│   ├── __init__.py
│   ├── migrations // マイグレーションファイルを格納するディレクトリ
│   │   └── __init__.py
│   ├── models.py // モデル定義ファイル
│   ├── tests.py // テストコードファイル
│   └── views.py // ビュー定義ファイル
├── db.sqlite3 // データベース
├── manage.py　// コマンド実行ファイル
├── mysite // プロジェクトディレクトリ
│   ├── __init__.py
│   ├── settings.py // プロジェクト設定ファイル
│   ├── urls.py // プロジェクト用ルーティング定義ファイル
│   └── wsgi.py // デプロイ用ファイル
├── myvenv // 仮想環境
│   └── ...
└── requirements.txt // インストールファイル
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial143 = () => {
  const test = `
  # Application definition

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


const Tutorial151 = () => {
  const test = `
from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
title = models.CharField("タイトル", max_length=200)
content = models.TextField("本文")
created = models.DateTimeField("作成日", default=timezone.now)

def __str__(self):
  return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial152 = () => {
  const test = `
  author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};




const Tutorial153 = () => {
  const test = `
  title = models.CharField("タイトル", max_length=200)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial154 = () => {
  const test = `
  content = models.TextField("本文")
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial155 = () => {
  const test = `
  created = models.DateTimeField("作成日", default=timezone.now)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial156 = () => {
  const test = `
  def __str__(self):
    return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial161 = () => {
  const test = `
  from django.contrib import admin
  from .models import Post
  
  admin.site.register(Post)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial162 = () => {
  const test = `
  admin.site.register(Post)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial163 = () => {
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



const Tutorial164 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py createsuperuser
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial165 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial171 = () => {
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



const Tutorial172 = () => {
  const test = `
app
 └── urls.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial173 = () => {
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



const Tutorial174 = () => {
  const test = `
  path('', views.IndexView.as_view(), name='index'),
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial181 = () => {
  const test = `
app
 └── forms.py
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial182 = () => {
  const test = `
from django import forms


class PostForm(forms.Form):
  title = forms.CharField(max_length=30, label='タイトル')
  content = forms.CharField(label='内容', widget=forms.Textarea())
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial183 = () => {
  const test = `
  title = forms.CharField(max_length=30, label='タイトル')
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial184 = () => {
  const test = `
  content = forms.CharField(label='内容', widget=forms.Textarea())
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial191 = () => {
  const test = `
  from django.views.generic import View
  from django.shortcuts import render
  from .models import Post
  
  
  class IndexView(View):
      def get(self, request, *args, **kwargs):
          post_data = Post.objects.order_by("-id")
          return render(request, 'app/index.html', {
              'post_data': post_data,
          })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial192 = () => {
  const test = `
  class IndexView(View):
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial193 = () => {
  const test = `
  def get(self, request, *args, **kwargs):
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial194 = () => {
  const test = `
  post_data = Post.objects.order_by("-id")
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial195 = () => {
  const test = `
  return render(request, 'app/index.html', {
      'post_data': post_data,
  })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1101 = () => {
  const test = `
  app
  └───templates
      └───app
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1102 = () => {
  const test = `
  {{ 変数名 }}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1103 = () => {
  const test = `
  {% タグ名 %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1104 = () => {
  const test = `
  {{ var|default:''}}
  {{ var|default_if_none:''}}
  {{ var|linebreaksbr }}
  {{ var|safe }}
  {{ var|truncatechars:100 }}
  {{ var|urlize }}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1105 = () => {
  const test = `
  {% load static %}

  <!DOCTYPE html>
  <html lang="ja">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="{% static 'css/style.css' %}">
      <title>ブログチュートリアル</title>
  </head>
  
  <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
              <a class="navbar-brand" href="/">ブログ</a>
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="/">ホーム</a>
                  </li>
                  {% if user.is_authenticated %}
                      <li class="nav-item">
                          <a class="nav-link" href="">投稿</a>
                      </li>
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


const Tutorial1106 = () => {
  const test = `
  {% load static %}

  <link rel="stylesheet" href="{% static 'css/style.css' %}">
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1107 = () => {
  const test = `
  {% if user.is_authenticated %}
  ...
  {% else %}
  ...
  {% endif %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1108 = () => {
  const test = `
  {% block content %}
  {% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1109 = () => {
  const test = `
  {% block extra_js %}
  {% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1110 = () => {
  const test = `
  {% extends "app/base.html" %}

  {% block content %}
  
  <div class="row my-4">
      <div class="col-md-8">
          {% for post in post_data %}
              <div class="card mb-4">
                  <div class="card-body">
                      <h2 class="card-title">{{ post.title }}</h2>
                      <p class="card-text">{{ post.content|truncatechars:100 }}</p>
                      <div class="btn btn-warning">詳細</div>
                  </div>
                  <div class="card-footer text-muted">
                      {{ post.created|date }} by {{ post.author }}
                  </div>
                  <a class="stretched-link" href=""></a>
              </div>
          {% endfor %}
      </div>
  
      <div class="col-md-4">
          <div class="card">
              <h5 class="card-header">このチュートリアルについて</h5>
              <div class="card-body">
                  <p>ステップ1</p>
                  <p class="mb-0">
                      初めてDjangoを触る方向けのチュートリアルです。
                      最小限の機能を構築してDjangoを学習しましょう。
                  </p>
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

const Tutorial1111 = () => {
  const test = `
  {% extends "app/base.html" %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1112 = () => {
  const test = `
  {% block content %}
  ...
  {% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1113 = () => {
  const test = `
  {% for post in post_data %}
  ...
  {% endfor %
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1114 = () => {
  const test = `
  <h2 class="card-title">{{ post.title }}</h2>
  <p class="card-text">{{ post.content|truncatechars:100 }}</p>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1121 = () => {
  const test = `
  from django.urls import path
  from app import views
  
  urlpatterns = [
      path('', views.IndexView.as_view(), name='index'),
      path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'), # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1122 = () => {
  const test = `
  path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail')
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1123 = () => {
  const test = `
  class PostDetailView(View):
  def get(self, request, *args, **kwargs):
      post_data = Post.objects.get(id=self.kwargs['pk'])
      return render(request, 'app/post_detail.html', {
          'post_data': post_data
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1124 = () => {
  const test = `
  post_data = Post.objects.get(id=self.kwargs['pk'])
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1125 = () => {
  const test = `
  return render(request, 'app/post_detail.html', {
      'post_data': post_data
  })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1126 = () => {
  const test = `
  <a class="stretched-link" href="{% url 'post_detail' post.id %}"></a>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1127 = () => {
  const test = `
  {% extends "app/base.html" %}

{% block content %}

<h2 class="my-4">{{ post_data.title }}</h2>
<hr>
<p>{{ post_data.created }} by {{ post_data.author }}</p>
<hr>
<p>{{ post_data.content|linebreaksbr }}</p>
{% if user.is_authenticated %}
  <hr>
  <div class="d-flex mb-5">
      <a class="btn btn-warning mr-2" href="">編集する</a>
      <a class="btn btn-danger" href="">削除する</a>    
  </div>
{% endif %}

{% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1128 = () => {
  const test = `
  {% if user.is_authenticated %}
  <hr>
  <div class="d-flex mb-5">
      <a class="btn btn-warning mr-2" href="">編集する</a>
      <a class="btn btn-danger" href="">削除する</a>    
  </div>
{% endif %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1131 = () => {
  const test = `
from django.urls import path
from app import views

urlpatterns = [
  path('', views.IndexView.as_view(), name='index'),
  path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'),
  path('post/new/', views.CreatePostView.as_view(), name='post_new'), # 追加
]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1132 = () => {
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

const Tutorial1133 = () => {
  const test = `
from django.views.generic import View
from django.shortcuts import render, redirect
from .models import Post
from .forms import PostForm
from django.contrib.auth.mixins import LoginRequiredMixin


class CreatePostView(LoginRequiredMixin, View):
  def get(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      return render(request, 'app/post_form.html', {
          'form': form
      })
  
  def post(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      if form.is_valid():
          post_data = Post()
          post_data.author = request.user
          post_data.title = form.cleaned_data['title']
          post_data.content = form.cleaned_data['content']
          post_data.save()
          return redirect('post_detail', post_data.id)

      return render(request, 'app/post_form.html', {
          'form': form
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1134 = () => {
  const test = `
  def get(self, request, *args, **kwargs):
  form = PostForm(request.POST or None)

  return render(request, 'app/post_form.html', {
      'form': form
  })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1135 = () => {
  const test = `
  def post(self, request, *args, **kwargs):
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1136 = () => {
  const test = `
form = PostForm(request.POST or None)

if form.is_valid():
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1137 = () => {
  const test = `
post_data = Post()
post_data.author = request.user
post_data.title = form.cleaned_data['title']
post_data.content = form.cleaned_data['content']
post_data.save()
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1138 = () => {
  const test = `
  return redirect('post_detail', post_data.id)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1139 = () => {
  const test = `
  <a class="nav-link" href="{% url 'post_new' %}">投稿</a>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11310 = () => {
  const test = `
{% extends "app/base.html" %}
{% load widget_tweaks %}

{% block content %}

<div class="my-4">
  <h2>投稿</h2>
</div>

<form method="post">
  {% csrf_token %}
  <div class="formpost">
      {% render_field form.title class="form-control" placeholder="タイトルを入力" %}
  </div>
  <div class="formpost">
      {% render_field form.content class="form-control" placeholder="本文を入力" %}
  </div>
  <button class="btn btn-warning" type="submit">投稿する</button>
</form>

{% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11311 = () => {
  const test = `
  {% load widget_tweaks %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11312 = () => {
  const test = `
  <form method="post">
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11313 = () => {
  const test = `
  {% csrf_token %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11314 = () => {
  const test = `
  {% render_field form.title class="form-control" placeholder="タイトルを入力" %}
{% render_field form.content class="form-control" placeholder="本文を入力" %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial11315 = () => {
  const test = `
  /* 投稿 */
.formpost {
  margin-bottom: 1rem;
}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1141 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py startapp accounts
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1142 = () => {
  const test = `
  INSTALLED_APPS = [
      ...
      'app',
      'accounts', # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1143 = () => {
  const test = `
  INSTALLED_APPS = [

      'accounts',
      'django.contrib.sites', # 追加
      'allauth',  # 追加
      'allauth.account', # 追加
      'allauth.socialaccount', # 追加
  ]
  
  # 一番下に追加
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


const Tutorial1144 = () => {
  const test = `
LOGIN_REDIRECT_URL = '/'
ACCOUNT_LOGOUT_REDIRECT_URL = '/'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1145 = () => {
  const test = `
  ACCOUNT_EMAIL_VERIFICATION = 'none'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1146 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1151 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py startapp accounts

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1152 = () => {
  const test = `
  INSTALLED_APPS = [
      ...
      'app',
      'accounts', # 追加
  ]

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

      'accounts',
      'django.contrib.sites', # 追加
      'allauth',  # 追加
      'allauth.account', # 追加
      'allauth.socialaccount', # 追加
  ]
  
  # 一番下に追加
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


const Tutorial1154 = () => {
  const test = `
  LOGIN_REDIRECT_URL = '/'
ACCOUNT_LOGOUT_REDIRECT_URL = '/'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1155 = () => {
  const test = `
  ACCOUNT_EMAIL_VERIFICATION = 'none'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1156 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1161 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py startapp accounts

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1162 = () => {
  const test = `
  INSTALLED_APPS = [
      ...
      'app',
      'accounts', # 追加
  ]

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1163 = () => {
  const test = `
  INSTALLED_APPS = [

      'accounts',
      'django.contrib.sites', # 追加
      'allauth',  # 追加
      'allauth.account', # 追加
      'allauth.socialaccount', # 追加
  ]
  
  # 一番下に追加
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


const Tutorial1164 = () => {
  const test = `
  LOGIN_REDIRECT_URL = '/'
ACCOUNT_LOGOUT_REDIRECT_URL = '/'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1165 = () => {
  const test = `
  ACCOUNT_EMAIL_VERIFICATION = 'none'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1166 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1167 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('', include('app.urls')),
      path('accounts/', include('accounts.urls')),
      path('accounts/', include('allauth.urls')),
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1171 = () => {
  const test = `
from django.urls import path
from accounts import views

urlpatterns = [
  path('login/', views.LoginView.as_view(), name='account_login'),
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
from django.shortcuts import render, redirect
from allauth.account import views


class LoginView(views.LoginView):
  template_name = 'accounts/login.html'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1173 = () => {
  const test = `
  class LoginView(views.LoginView):
  template_name = 'accounts/login.html'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1174 = () => {
  const test = `
  <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1175 = () => {
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
              {% render_field form.login class="form-control" placeholder="ユーザー名" %}
          </div>
          <div class="form-label-group">
              {% render_field form.password class="form-control" placeholder="パスワード" %}
          </div>
          <div class="text-center">
              <button class="btn btn-primary" type="submit">ログイン</button>
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

const Tutorial1176 = () => {
  const test = `
  /* 認証画面 */

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


const Tutorial1181 = () => {
  const test = `
  from django.urls import path
from accounts import views

urlpatterns = [
  path('login/', views.LoginView.as_view(), name='account_login'),
  path('logout/', views.LogoutView.as_view(), name='account_logout'),
]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1182 = () => {
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

const Tutorial1183 = () => {
  const test = `
  self.logout()
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1184 = () => {
  const test = `
  <a class="nav-link" href="{% url 'account_logout' %}">ログアウト</a>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1185 = () => {
  const test = `
  {% extends "app/base.html" %}

{% block content %}

<div class="card card-auth my-5 mx-auto">
  <div class="card-body">
      <p class="card-title text-center">ログアウトしますか？</p>
      <form method="post" class="form-auth">
          {% csrf_token %}
          <div class="text-center">
              <button class="btn btn-warning" type="submit">ログアウト</button>
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


const Tutorial1191 = () => {
  const test = `
  from django.urls import path
from accounts import views

urlpatterns = [
  path('login/', views.LoginView.as_view(), name='account_login'),
  path('logout/', views.LogoutView.as_view(), name='account_logout'),
  path('signup/', views.SignupView.as_view(), name='account_signup'),
]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1192 = () => {
  const test = `
  class SignupView(views.SignupView):
  template_name = 'accounts/signup.html'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1193 = () => {
  const test = `
  <a class="nav-link" href="{% url 'account_signup' %}">サインアップ</a>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1194 = () => {
  const test = `
  {% extends "app/base.html" %}
  {% load widget_tweaks %}
  
  {% block content %}
  
  <div class="card card-auth my-5 mx-auto">
      <div class="card-body">
          <h5 class="card-title text-center">サインアップ</h5>
          <form method="post" class="form-auth">
              {% csrf_token %}
              <div class="form-label-group">
                  {% render_field form.username class="form-control" placeholder="ユーザー名" %}
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
              <div class="text-center">
                  <button class="btn btn-primary" type="submit">サインアップ</button>
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


const Tutorial1195 = () => {
  const test = `
  {% render_field form.username class="form-control" placeholder="ユーザー名" %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

