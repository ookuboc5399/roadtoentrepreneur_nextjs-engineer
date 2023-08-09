import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_8 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_8>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約サイトシステム構築 </p>
                        <p>Djangoで予約サイトを構築します。</p>
                        <p>これからネットで予約する需要がどんどん増えてきます。 </p>
                        <p>営業時間に関わらず、お客様が予約を入れられる状態を作ることで、機会損失を防ぐことができます</p>
                        <p>電話やメールのやりとりをする必要がないので、人的コストを削減できます。 </p>
                        <p>スタッフも予約の一覧をネットで確認が出来るようになります</p>
                        <p>ぜひ予約サイトを作れるようになりましょう</p>

                        <p>メリット</p>
                        <li>
                        機会損失防止
                        コスト削減
                        管理が簡単
                        </li>
                        <p>目標</p>
                        <p>下記を学習していきます。</p>
                        <li>
                        カレンダーの表示方法を学習
                        予約の仕組みを学習
                        スタッフが予約を確認する方法を学習
                        スタッフが休日を設定する方法を学習
                        </li>
                        <p>機能</p>                      

                        <li>
                        店舗リスト
                        スタッフリスト
                        カレンダー
                        予約
                        予約確認
                        休日設定
                        </li>
                        <p>エラーが発生した場合</p>

                    </div>
                </div>
        
                </Layout_tutorial_8>
                ) : id == 2 ? (
                    <Layout_tutorial_8>
                                 <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備 </p>
                        <p>予約サイト構築チュートリアルは、認証機能を使用します。</p>
                        <p>カスタムユーザー構築チュートリアルで認証機能を構築した後に、実施して下さい。 </p>
                        <p>カスタムユーザー構築チュートリアル </p>
                        <p>カスタムユーザーを構築したフォルダは他のアプリケーションでも使えますので、すぐに使えるようにバックアップしておくとよいです</p>
                        <p>仮想環境</p>
                        <p>仮想環境に入ります。</p>
                        <Tutorial821 />
                
                        <p>requirements.txt作成</p>
                        <p>開発で必要なstripeとPillowパッケージを追記します</p>
                        <Tutorial822 />
                        <p>パッケージのインストール</p>
                        <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
                        <Tutorial823/>
                        <p>設定変更</p>
                        <p>画像を使用できるように設定しておきます。</p>
                        <Tutorial824/>
                        <Tutorial825/>
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 3 ? (
                    <Layout_tutorial_8>
                                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>プロフィール情報変更 </p>
                        <p>プロフィール情報を変更します。</p>
                        <p>自己紹介とプロフィール画像を追加します</p>
                        <p>モデル。</p>
                        <p>モデルにプロフィールとプロフィール画像を追加します</p>
                        <Tutorial831 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial832 />
                        <p>データ追加 </p>
                        <p>管理画面で自己紹介とプロフィール画像が設定できるか試してみてください</p>
                        <p>フォーム </p>
                        <p>フォームに自己紹介とプロフィール画像を追加します</p>
                        <Tutorial833 />
                        <p>ビュー</p>
                        <p>ビューに自己紹介とプロフィール画像を追加します。</p>
                        <Tutorial834 />
                        <p>テンプレート</p>
                        <p>profile</p>
                        <p>プロフィールのテンプレートを変更します</p>
                        <Tutorial835 />
                        <p>profile_edit</p>
                        <p>プロフィール編集のテンプレートを変更します。</p>
                        <Tutorial836 />
                        <p>確認</p>
                        <p>プロフィール情報に自己紹介とプロフィール画像が表示されていることを確認してください。</p>
                        <p>http://127.0.0.1:8000/accounts/profile/</p>
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 4 ? (
                    <Layout_tutorial_8>
                                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>店舗リスト </p>
                        <p>トップページに店舗リストを作成します。</p>
                        <p>モデル</p>
                        <p>店舗モデルを作成します。</p>
                        <p>前、住所、電話番号、説明、イメージ画像のフィールドを追加していきます</p>
                        <Tutorial841 />
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします。 </p>
                        <Tutorial842 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial843 />
                        <p>データ追加 </p>
                        <p>管理画面でstoreモデルに店舗データを追加します。</p>
                        <p>何件か登録しておくとレイアウトがしやすくなります </p>
                        <p>URL</p>
                        <p>トップページのURLを作成します。</p>
                        <Tutorial844 />
                        <p>ビュー</p>
                        <p>店舗リストはすべての店舗を表示させます。</p>
                        <Tutorial845 />
                        <p>コード解説</p>
                        <p>.all()を使用することで、すべてのデータを取得することができます。</p>
                        <Tutorial846 />
                        <p>テンプレート</p>
                        <p>base</p>
                        <p>ベースのテンプレートを作成します</p>
                        <p>レイアウトはBootstrap、アイコンはFontAwesomeを使用しています。</p>
                        <Tutorial847 />
                        <p>store</p>
                        <p>店舗リストのテンプレートを作成します。</p>
                        <p>データベースから店舗データを表示します。</p>
                        <Tutorial848 />
                        <p>CSS</p>
                        <p>CSSで店舗リスト画面を装飾します。</p>
                        <Tutorial849 />
                        <p>確認</p>
                        <p>トップページを表示すると、このような画面になりますので、確認してください</p>
                        <p>http://127.0.0.1:8000/accounts/profile/</p>
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 5 ? (
                    <Layout_tutorial_8>
                                   <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>スタッフリスト </p>
                        <p>店舗をクリックすると、スタッフリストが表示されるようにします。</p>
                        <p>モデル</p>
                        <p>スタッフモデルを追加します。</p>
                        <p>スタッフはログインユーザーと連携するようにしています。</p>
                        <Tutorial851 />
                        <p>コード解説 </p>
                        <p>CustomUserと連携させることによって、ログインユーザーがスタッフとなります </p>
                        <p>OneToOneFieldを使うことによって、スタッフと店舗をユニークにすることができます </p>
                        <p>スタッフは店舗の掛け持ちができなくなります。</p>
                        <Tutorial852 />
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします</p>
                        <Tutorial853 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial854/>
                        <p>データ追加</p>
                        <p>管理画面でstaffモデルにスタッフデータを追加します。</p>
                        <p>現在は、管理ユーザーのみしかないので、ナビゲーションのスタッフから新しいアカウントを作りましょう。</p>
                        <p>何件かアカウントを作成してスタッフ登録しておくとレイアウトがしやすくなります。</p>
                        <p>URL</p>
                        <p>スタッフリストのURLを作成します。</p>
                        <Tutorial855 />
                        <p>ビュー</p>
                        <p>スタッフリストのビューを作成します。</p>
                        <Tutorial856 />
                        <p>コード解説</p>
                        <p>get_object_or_404関数を使用することで、店舗データがひとつもない場合に、404エラーを返してくれます。</p>
                        <p>self.kwargs['pk']でURLの店舗IDを取得することができます。説</p>
                        <Tutorial857 />
                        <p>テンプレート</p>
                        <p>staff</p>
                        <p>店舗情報とスタッフリストを表示するテンプレートを作成します。</p>
                        <Tutorial858 />
                        <p>store</p>
                        <p>店舗をクリックするとスタッフリストに遷移したいので、リンクを追加します。</p>
                        <Tutorial859 />
                        <p>CSS</p>
                        <p>CSSでスタッフリスト画面を装飾します。</p>
                        <Tutorial8510 />
                        <p>確認</p>
                        <p>店舗をクリックして、スタッフリスト画面がこのように表示されるか確認してください。</p>
                     
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 6 ? (
                    <Layout_tutorial_8>
                                    <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>カレンダー </p>
                        <p>カレンダー画面を作成します。</p>
                        <p>ここがこのチュートリアルのメインとなります</p>
                        <p>モデル</p>
                        <p>予約モデルを作成します。</p>
                        <Tutorial861 />
                       
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします</p>
                        <Tutorial862 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial863/>
                        <p>URL</p>
                        <p>カレンダー画面は、日程を指定しない場合と指定した場合の2つのURLを用意します。</p>
                        <Tutorial864 />
                        <p>コード解説</p>
                        <p>別のURLで、同じビューを使用するテクニックです。。</p>
                        <p>ビューでURLがある場合とない場合で、判定して処理をすることができます。</p>
                        <Tutorial865 />
                        <p>ビュー</p>
                        <p>カレンダーを表示するためのビューを作成します。</p>
                        <p>日付と時間で2次元配列を使用しますので、少し複雑になっています。</p>
                        <Tutorial866 />
                        <p>コード解説</p>
                        <p>select_relatedを使用することで、SQLを実行する回数を減らすことができます。</p>
                        <p>SQLが実行される分だけ表示するスピードが遅くなります</p>
                        <p>この場合、スタッフモデルからユーザー情報や店舗情報を取得するときに、select_relatedを使用することによって、SQLの実行を一度にしています。</p>
                        <p>効率的にQueryを取り出す方法</p>
                        <Tutorial867 />
                        <p>2通りURLを作成しました。</p>
                        <p>year、month、dayのあるURLとないURLです。</p>
                        <p>もしURLにyear、month、dayがある場合は、その日をカレンダーの始めの日とします。</p>
                        <p>もし日程に指定がない場合は、本日をカレンダーの始めの日とします。</p>
                        <Tutorial868 />
                        <p>週の始めの日から7日間をリストとして格納しています。</p>
                        <p>days[0]で週の始め、days[-1]で週の終わりを指定しています。</p>
                        <Tutorial869 />
                        <p>calendarは日付と時間で2次元配列になっています。</p>
                        <p>予約前の変数はTrueをしておきます。</p>
                        <p>予約がされたら、この変数をFalseにします。</p>
                        <Tutorial8610 />
                        <p>combineを使用することによって、日付と時間を合わせることができます。</p>
                        <p>そして、make_aware関数を使用することによって、設定したでタイムゾーンに変更します。</p>
                        <p>タイムゾーンはきちんと意識をしないとバグの原因になりますので、気をつけてください。</p>
                        <p>native timeはタイムゾーンを意識しない時間</p>
                        <p>aware time はタイムゾーンを意識した時間</p>
                        <Tutorial8611 />
                        <p>Qオブジェクトを使用することによって、OR検索することができます。</p>
                        <p>よく使いますので、覚えておいて下さい</p>
                        <li>
                        __gt：より大きい
                        __gte：以上
                        __lt：より小さい
                        __lte：以下
                        </li>
                        <Tutorial8612 />
                        <p>localtime関数を使用することによって、現地のタイムゾーンに変更します。</p>
                        <Tutorial8613 />
                        <p>予約がある場合は、変数をFalseに設定します。</p>
                        <Tutorial8614 />
                        <p>テンプレート</p>
                        <p>calendar</p>
                        <p>カレンダーのテンプレートを作成します。</p>
                        <Tutorial8615 />
                        <p>コード解説</p>
                        <p>calendarは2次元配列になっているので、横軸は日付、縦軸は時間となり表示しています。</p>
                        <Tutorial8616 />
                        <p>staff</p>
                        <p>スタッフをクリックするとカレンダーが表示されるようにリンクを作成します。</p>
                        <Tutorial8617 />
                        <p>CSS</p>
                        <p>CSSでカレンダー画面を装飾します。</p>
                        <Tutorial8618 />
                        <p>確認</p>
                        <p>店舗をクリックして、スタッフリスト画面がこのように表示されるか確認してください。</p>
                     
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 7 ? (
                    <Layout_tutorial_8>
                                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約機能 </p>
                        <p>カレンダーをクリックして、予約する機能を作成します</p>
                        <p>URL</p>
                        <p>予約のURLを作成します。</p>
                        <Tutorial871 />
                        <p>フォーム </p>
                        <p>約フォームを作成するために、フォームを追加します。 </p>
                        <Tutorial872 />
                        <p>ビュー</p>
                        <p>予約のビューを作成します。</p>
                        <Tutorial873 />
                        <p>コード解説 </p>
                        <p>予約情報にスタッフと時間でフィルターをして、データが存在していたら、ワーニングを出します。 </p>
                        <p>予約確定ボタンを押さないと予約されないため、別の人が同じ時間に予約確定ボタンを押した時に発生します。</p>
                        <Tutorial874/>
                        <p>予約確定ボタンを押したら、ユーザーデータをデータベースに保存します。</p>
                        <Tutorial875/>
                        <p>テンプレート</p>
                        <p>booking</p>
                        <p>予約情報を表示するテンプレートを作成します。</p>
                        <Tutorial876 />
                        <p>コード解説</p>
                        <p>予約の入れ違いがあった時に、表示されます</p>
                        <Tutorial877 />
                        <p>widget_tweaksを使用することで、フォームにクラスを付けることができます。</p>
                        <Tutorial878 />
                        <p>calendar</p>
                        <p>カレンダーをクリックすると、予約画面に遷移するリンクを作成します。</p>
                        <Tutorial879 />
                        <p>CSS</p>
                        <p>CSSで予約フォームを装飾します。</p>
                        <Tutorial8710 />
                        <p>確認</p>
                        <p>カレンダーをクリックすると、予約画面が表示され、予約ができるか確かめてください</p>
                        <p>予約が確定すると、×マークが表示されます。</p>
                     
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 8 ? (
                    <Layout_tutorial_8>
                                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約完了 </p>
                        <p>予約完了ページを作成します</p>
                        <p>URL</p>
                        <p>予約完了URLを作成します</p>
                        <Tutorial881 />
                        <p>ビュー</p>
                        <p>予約完了画面に遷移したいので、リダイレクトを書き換えます。</p>
                        <p>TemplateViewクラスを使用して、文字だけを表示します。</p>
                        <Tutorial882 />
                        <p>テンプレート</p>
                        <p>thanks</p>
                        <p>予約完了のテンプレートを作成します</p>
                        <Tutorial883 />
                        <p>確認</p>
                        <p>予約が完了すると、このような画面に遷移することを確定してください。</p>
                     
                    </div>
                </div>
                </Layout_tutorial_8>
                ) : id == 9 ? (
                    <Layout_tutorial_8>
                                   <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>スタッフ専用 </p>
                        <p>スタッフ専用ページを作成します。</p>
                        <p>スタッフが予約の確認や休日の設定、予約の削除をすることができます。 </p>
                        <p>このページは、ログインが必須になります。</p>
                        <p>URL</p>
                        <p>スタッフ専用ページのURLを追加します。</p>
                        <Tutorial891 />
                        <p>ビュー</p>
                        <p>スタッフ専用ページのビューを作成します。</p>
                        <Tutorial892 />
                        <p>コード解説</p>
                        <p>request.user.is_authenticatedでログインしているかの判定をすることができます。</p>
                        <p>ログインしていたら、今週の日曜日からカレンダーを表示します。</p>
                        <Tutorial893 />
                        <p>MyPageViewクラスはCalendarViewクラスとほぼ同じです。</p>
                        <p>ここでは予約した人の名前をcalendar変数に設定しています。</p>
                        <p>設定しておくことで、カレンダーで名前を表示することができます。</p>
                        <Tutorial894 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>カレンダーと予約一覧を表示するテンプレートを作成します。</p>
                        <Tutorial895 />
                        <p>コード解説</p>
                        <p>カレンダーと予約一覧を表示するテンプレートを作成します。</p>
                        <Tutorial896 />
                        <p>CSS</p>
                        <p>CSSでスタッフ専用ページを装飾します。</p>
                        <Tutorial897 />
                        <p>確認</p>
                        <p>ログインすると、このような画面が表示されるか確認してください。</p>
                     
                    </div>
                </div>
                    </Layout_tutorial_8>
                ) : id == 10 ? (
                    <Layout_tutorial_8>
                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>休日設定 </p>
                        <p>スタッフがカレンダーで休日を設定できるようにします。</p>
                        <p>URL </p>
                        <p>休日設定のURLを作成します。</p>
                        <Tutorial8101 />
                        <p>ビュー</p>
                        <p>休日設定のビューを作成します。</p>
                        <Tutorial8102 />
                        <p>コード解説</p>
                        <p>ボタンをクリックした時のみに動作するように、加えておきます。</p>
                        <Tutorial8103 />
                        <p>引数で渡された日付と時間で休日を設定します。</p>
                        <p>れは自分の名前で、その時間を予約するということです。</p>
                        <p>こうすると、ユーザーからはすでに予約済みとなるので、予約できなくなります。</p>
                        <Tutorial8104 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>出勤ボタンをクリックすると、休日が設定されるようにします。</p>
                        <p>休日が設定されたら、休みと表示されます</p>
                        <Tutorial8105 />
                        <p>確認</p>
                        <p>出勤ボタンをクリックして、休日が設定されるか確認してください。</p>
                     
                    </div>
                </div>
                    </Layout_tutorial_8>
                ) : id == 11 ? (
                    <Layout_tutorial_8>
                   <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約削除 </p>
                        <p>予約を削除できる機能を追加します。</p>
                        <p>URL </p>
                        <p>予約削除のURLを追加します。</p>
                        <Tutorial8111 />
                        <p>ビュー</p>
                        <p>予約削除のビューを作成します。</p>
                        <Tutorial8112 />
                        <p>コード解説</p>
                        <p>delete関数を使用することで、データを削除することができます。</p>
                        <Tutorial8113 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>カレンダーに削除ボタンを追加します。</p>
                        <Tutorial8114 />
                        <p>確認</p>
                        <p>カレンダーに削除ボタンが表示されるので、予約を削除できるか試してみてください。</p>
                     
                    </div>
                </div>
                    </Layout_tutorial_8>
                ) : id == 12 ? (
                    <Layout_tutorial_8>
                                   <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>予約サイト構築のチュートリアルはここまでで終わりとなります。</p>
                        <p>予約システムの構築方法</p>
                        <p>予約システムの構築方法が理解できましたでしょうか！？ </p>
                        <p>カレンダーや予約機能、スタッフ専用ページをさらに充実してみて下さい。</p>
                        <p>ぜひ予約サイトを作れるようになって、案件を獲得しましょう。</p>

                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                    
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                        <p>Djangoドキュメント</p>
                    </div>
                </div>
                    </Layout_tutorial_8>
                )  : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial821 = () => {
    const test = `
    $ source myvenv/bin/activate

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial822 = () => {
    const test = `
    Django~=3.1.4
django-allauth~=0.41.0
django-widget-tweaks~=1.4.8
Pillow~=8.1.0
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial823 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial824 = () => {
    const test = `
    # 追加
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial825 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    from django.conf.urls.static import static # 追加
    from django.conf import settings # 追加
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('app.urls')),
        path('accounts/', include('accounts.urls')),
        path('accounts/', include('allauth.urls')),
    ]
    
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 追加
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial831 = () => {
    const test = `
    class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('メールアドレス', unique=True)
    first_name = models.CharField(('姓'), max_length=30)
    last_name = models.CharField(('名'), max_length=30)
    description = models.TextField('自己紹介', default="", blank=True)
    image = models.ImageField(upload_to='images', verbose_name='プロフィール画像', null=True, blank=True)

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial832 = () => {
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

const Tutorial833 = () => {
    const test = `
    class ProfileForm(forms.Form):
    first_name = forms.CharField(max_length=30, label='姓')
    last_name = forms.CharField(max_length=30, label='名')
    description = forms.CharField(label='自己紹介', widget=forms.Textarea(), required=False)
    image = forms.ImageField(required=False, )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial834 = () => {
    const test = `
    class ProfileEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user_data = CustomUser.objects.get(id=request.user.id)
        form = ProfileForm(
            request.POST or None,
            initial={
                'first_name': user_data.first_name,
                'last_name': user_data.last_name,
                'description': user_data.description,
                'image': user_data.image
            }
        )

        return render(request, 'accounts/profile_edit.html', {
            'form': form,
            'user_data': user_data
        })

    def post(self, request, *args, **kwargs):
        form = ProfileForm(request.POST or None)
        if form.is_valid():
            user_data = CustomUser.objects.get(id=request.user.id)
            user_data.first_name = form.cleaned_data['first_name']
            user_data.last_name = form.cleaned_data['last_name']
            user_data.description = form.cleaned_data['description']
            if request.FILES.get('image'):
                user_data.image = request.FILES.get('image')
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


const Tutorial835= () => {
    const test = `
    <tr>
    <th class="header">プロフィール画像</th>
    <td class="data">
        {% if user_data.image %}
            <img src='/{{ user_data.image.url }}' width=100px>
        {% endif %}
    </td>
</tr>
<tr>
    <th class="header">名前</th>
    <td class="data">{{ user_data.first_name }} {{ user_data.last_name }}</td>
</tr>
<tr>
    <th class="header">メールアドレス</th>
    <td class="data">{{ user_data.email }}</td>
</tr>
<tr>
    <th class="header">自己紹介</th>
    <td class="data">{{ user_data.description }}</td>
</tr>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial836= () => {
    const test = `
    <form method="post" enctype="multipart/form-data">
    {% csrf_token %}
    <table class="profile_table mb-4">
        <tbody>
            <tr>
                <th class="header">プロフィール画像</th>
                <td class="data">
                    {{ form.image }}
                </td>
            </tr>
            <tr>
                <th class="header">名前</th>
                <td class="data form_wrap form_wrap-2">
                    {% render_field form.first_name class="form-control" placeholder="姓" %}
                    {% render_field form.last_name class="form-control" placeholder="名" %}
                </td>
            </tr>
            <tr>
                <th class="header">自己紹介</th>
                <td class="data">
                    {% render_field form.description class="form-control" placeholder="自己紹介" %}
                </td>
            </tr>
        </tbody>
    </table>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial841 = () => {
    const test = `
    from django.db import models


    class Store(models.Model):
        name = models.CharField('店舗', max_length=100)
        address = models.CharField('住所', max_length=100, null=True, blank=True)
        tel = models.CharField('電話番号', max_length=100, null=True, blank=True)
        description = models.TextField('説明', default="", blank=True)
        image = models.ImageField(upload_to='images', verbose_name='イメージ画像', null=True, blank=True)
    
        def __str__(self):
            return self.name

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial842 = () => {
    const test = `
    from django.contrib import admin
    from .models import Store
    
    admin.site.register(Store)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial843 = () => {
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

const Tutorial844 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial845= () => {
    const test = `
    from app.models import Store
    from django.views.generic import View
    from django.shortcuts import render
    
    
    class StoreView(View):
        def get(self, request, *args, **kwargs):
            store_data = Store.objects.all()
    
            return render(request, 'app/store.html', {
                'store_data': store_data,
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial846= () => {
    const test = `
    store_data = Store.objects.all()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial847= () => {
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
        <title>予約サイトチュートリアル</title>
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">予約サイト</a>
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
                            <a class="nav-link" href="{% url 'account_signup' %}">スタッフ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
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


const Tutorial848= () => {
    const test = `
    {% extends "app/base.html" %}

{% block content %}

<div class="text-center my-5">
    <div class="mb-5">
        <h1>店舗一覧</h1>
    </div>
    <div class="row">
        {% for store in store_data %}
            <div class="col-lg-3 col-md-6">
                <div class="card img-thumbnail storelist mb-3">
                    <img class="card-img-top card-thum" src="/{{ store.image.url }}" alt="">
                    <div class="card-body text-center px-2 py-3">
                        <h5 class="font-weight-bold">{{ store.name }}店</h5>
                        <p>{{ store.address }}</p>
                    </div>
                    <a class="stretched-link" href=""></a>
                </div>
            </div>
        {% empty %}
            <p>まだ店舗がありません</p>
        {% endfor %}
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


const Tutorial849= () => {
    const test = `
    /* base */

    body {
        background: #F1F1F1;
        display: flex;
        flex-flow: column;
        min-height: 100vh;
    }
    
    main {
        flex: 1;
    }
    
    /* store */
    
    .storelist img {
        height: 150px;
        object-fit: contain;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial851 = () => {
    const test = `
    from accounts.models import CustomUser


    class Staff(models.Model):
        user = models.OneToOneField(CustomUser, verbose_name='スタッフ', on_delete=models.CASCADE)
        store = models.ForeignKey(Store, verbose_name='店舗', on_delete=models.CASCADE)
    
        def __str__(self):
            return f'{self.store}：{self.user}'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial852 = () => {
    const test = `
    user = models.OneToOneField(CustomUser, verbose_name='スタッフ', on_delete=models.CASCADE)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial853 = () => {
    const test = `
    from django.contrib import admin
    from .models import Store, Staff
    
    admin.site.register(Store)
    admin.site.register(Staff)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial854 = () => {
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


const Tutorial855= () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial856= () => {
    const test = `
    from django.shortcuts import get_object_or_404, render
    from app.models import Store, Staff
    
    
    class StaffView(View):
        def get(self, request, *args, **kwargs):
            store_data = get_object_or_404(Store, id=self.kwargs['pk'])
            staff_data = Staff.objects.filter(store=store_data).select_related('user')
    
            return render(request, 'app/staff.html', {
                'store_data': store_data,
                'staff_data': staff_data,
            })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial857= () => {
    const test = `
    store_data = get_object_or_404(Store, id=self.kwargs['pk'])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial858= () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <div class="row">
            <div class="col-md-6 mb-4 text-center stafflist">
                <img src="/{{ store_data.image.url }}" class="img-fluid" alt="">
            </div>
    
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4 text-left">
                            <h3>{{ store_data.name }}店</h3>
                            <hr>
                            <p>住所：{{ store_data.address }}</p>
                            <p>TEL：{{ store_data.tel }}</p>
                            <p>{{ store_data.description|linebreaksbr }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="mb-5">
            <h1>スタッフ一覧</h1>
        </div>
        <div class="row">
            {% for staff in staff_data %}
                <div class="col-lg-3 col-md-6">
                    <div class="card img-thumbnail storelist mb-3">
                        <img class="card-img-top card-thum" src="/{{ staff.user.image.url }}" alt="">
                        <div class="card-body text-center px-2 py-3">
                            <h5 class="font-weight-bold">{{ staff.user.first_name }} {{ staff.user.last_name }}</h5>
                        </div>
                        <a class="stretched-link" href=""></a>
                    </div>
                </div>
            {% empty %}
                <p>まだスタッフがいません</p>
            {% endfor %}
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


const Tutorial859= () => {
    const test = `
    <a class="stretched-link" href="{% url 'staff' store.pk %}"></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8510= () => {
    const test = `
    /* staff */

    .stafflist img {
        height: 250px;
        object-fit: contain;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial861 = () => {
    const test = `
    from django.utils import timezone


class Booking(models.Model):
    staff = models.ForeignKey(Staff, verbose_name='スタッフ', on_delete=models.CASCADE)
    first_name = models.CharField('姓', max_length=100, null=True, blank=True)
    last_name = models.CharField('名', max_length=100, null=True, blank=True)
    tel = models.CharField('電話番号', max_length=100, null=True, blank=True)
    remarks = models.TextField('備考', default="", blank=True)
    start = models.DateTimeField('開始時間', default=timezone.now)
    end = models.DateTimeField('終了時間', default=timezone.now)

    def __str__(self):
        start = timezone.localtime(self.start).strftime('%Y/%m/%d %H:%M')
        end = timezone.localtime(self.end).strftime('%Y/%m/%d %H:%M')
        return f'{self.first_name}{self.last_name} {start} ~ {end} {self.staff}'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial862 = () => {
    const test = `
    from django.contrib import admin
    from .models import Store, Staff, Booking
    
    admin.site.register(Store)
    admin.site.register(Staff)
    admin.site.register(Booking)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial863 = () => {
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

const Tutorial864 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'), # 追加
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial865= () => {
    const test = `
    path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
    path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial866= () => {
    const test = `
    from datetime import datetime, date, timedelta, time
from django.db.models import Q
from django.shortcuts import get_object_or_404, render
from django.utils.timezone import localtime, make_aware
from django.views.generic import View
from app.models import Store, Staff, Booking


class CalendarView(View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
        today = date.today()
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        if year and month and day:
            # 週始め
            start_date = date(year=year, month=month, day=day)
        else:
            start_date = today
        # 1週間
        days = [start_date + timedelta(days=day) for day in range(7)]
        start_day = days[0]
        end_day = days[-1]

        calendar = {}
        # 10時～20時
        for hour in range(10, 21):
            row = {}
            for day in days:
                row[day] = True
            calendar[hour] = row
        start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
        end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
        booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
        for booking in booking_data:
            local_time = localtime(booking.start)
            booking_date = local_time.date()
            booking_hour = local_time.hour
            if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
                calendar[booking_hour][booking_date] = False

        return render(request, 'app/calendar.html', {
            'staff_data': staff_data,
            'calendar': calendar,
            'days': days,
            'start_day': start_day,
            'end_day': end_day,
            'before': days[0] - timedelta(days=7),
            'next': days[-1] + timedelta(days=1),
            'today': today,
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial867= () => {
    const test = `
    staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial868= () => {
    const test = `
    today = date.today()
year = self.kwargs.get('year')
month = self.kwargs.get('month')
day = self.kwargs.get('day')
if year and month and day:
    # 週始め
    start_date = date(year=year, month=month, day=day)
else:
    start_date = today
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial869= () => {
    const test = `
    # 1週間
days = [start_date + timedelta(days=day) for day in range(7)]
start_day = days[0]
end_day = days[-1]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8610= () => {
    const test = `
    calendar = {}
    # 10時～20時
    for hour in range(10, 21):
        row = {}
        for day in days:
            row[day] = True
        calendar[hour] = row
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8611= () => {
    const test = `
    start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
    end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8612= () => {
    const test = `
    booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8613= () => {
    const test = `
    for booking in booking_data:
    local_time = localtime(booking.start)
    booking_date = local_time.date()
    booking_hour = local_time.hour
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8614= () => {
    const test = `
    if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
    calendar[booking_hour][booking_date] = False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8615= () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <div class="row">
            <div class="col-md-6 mb-4 text-center calendar">
                <img src="/{{ staff_data.user.image.url }}" class="img-fluid" alt="">
            </div>
    
            <div class="col-md-6 mb-5">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4 text-left">
                            <h3>{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</h3>
                            <hr>
                            <p>店舗：{{ staff_data.store.name }}店</p>
                            <p>{{ staff_data.user.description|linebreaksbr }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="mb-3">
            <h1>予約カレンダー</h1>
            <p>{{ start_day }}～{{ end_day }}</p>
        </div>
    
        <div class="d-flex mb-2">
            <div class="mx-3 mr-auto">
                <a class="btn btn-warning" href="{% url 'calendar' staff_data.pk before.year before.month before.day %}">前週</a>
            </div>
            <div class="mx-3">
                <a class="btn btn-warning" href="{% url 'calendar' staff_data.pk next.year next.month next.day %}">次週</a>
            </div>
        </div>
        <div class="">
            <table class="table table-bordered bg-light">
                <thead class="thead-light">
                    <tr>
                        <th></th>
                        {% for day in days %}
                            {% if day.weekday == 5 %}
                                <th scope="col" class="text-primary">{{ day | date:"d(D)" }}</th>
                            {% elif day.weekday == 6 %}
                                <th scope="col" class="text-danger">{{ day | date:"d(D)" }}</th>
                            {% else %}
                                <th scope="col">{{ day | date:"d(D)" }}</th>
                            {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for hour, schedules in calendar.items %}
                        <tr>
                            <td scope="row">{{ hour }}:00</td>
                            {% for datetime, book in schedules.items %}
                                <td>
                                    {% if datetime <= today %}
                                        -
                                    {% elif book %}
                                        <a href="">
                                            <i class="far fa-circle text-info"></i>
                                        </a>
                                    {% else %}
                                        <i class="fas fa-times text-danger"></i>
                                    {% endif %}
                                </td>
                            {% endfor %}
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
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

const Tutorial8616= () => {
    const test = `
    {% for hour, schedules in calendar.items %}
    <tr>
        <td scope="row">{{ hour }}:00</td>
        {% for datetime, book in schedules.items %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8617= () => {
    const test = `
    <a class="stretched-link" href="{% url 'calendar' staff.pk %}"></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8618= () => {
    const test = `
    /* calendar */

    .calendar img {
        height: 150px;
        object-fit: contain;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial871 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'), # 追加
    ]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial872 = () => {
    const test = `
    from django import forms


    class BookingForm(forms.Form):
        first_name = forms.CharField(max_length=30, label='姓')
        last_name = forms.CharField(max_length=30, label='名')
        tel = forms.CharField(max_length=30, label='電話番号')
        remarks = forms.CharField(label='備考', widget=forms.Textarea())
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial873 = () => {
    const test = `
    from datetime import datetime, date, timedelta, time
from django.db.models import Q
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.timezone import localtime, make_aware
from django.views.generic import View
from app.models import Store, Staff, Booking
from app.forms import BookingForm


class BookingView(View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        hour = self.kwargs.get('hour')
        form = BookingForm(request.POST or None)

        return render(request, 'app/booking.html', {
            'staff_data': staff_data,
            'year': year,
            'month': month,
            'day': day,
            'hour': hour,
            'form': form,
        })

    def post(self, request, *args, **kwargs):
        staff_data = get_object_or_404(Staff, id=self.kwargs['pk'])
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        hour = self.kwargs.get('hour')
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        end_time = make_aware(datetime(year=year, month=month, day=day, hour=hour + 1))
        booking_data = Booking.objects.filter(staff=staff_data, start=start_time)
        form = BookingForm(request.POST or None)
        if booking_data.exists():
            form.add_error(None, '既に予約があります。\n別の日時で予約をお願いします。')
        else:
            if form.is_valid():
                booking = Booking()
                booking.staff = staff_data
                booking.start = start_time
                booking.end = end_time
                booking.first_name = form.cleaned_data['first_name']
                booking.last_name = form.cleaned_data['last_name']
                booking.tel = form.cleaned_data['tel']
                booking.remarks = form.cleaned_data['remarks']
                booking.save()
                return redirect('store') # あとで変更

        return render(request, 'app/booking.html', {
            'staff_data': staff_data,
            'year': year,
            'month': month,
            'day': day,
            'hour': hour,
            'form': form,
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial874 = () => {
    const test = `
    booking_data = Booking.objects.filter(staff=staff_data, start=start_time)
form = BookingForm(request.POST or None)
if booking_data.exists():
    form.add_error(None, '既に予約があります。\n別の日時で予約をお願いします。')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial875= () => {
    const test = `
    booking = Booking()
    booking.staff = staff_data
    booking.start = start_time
    booking.end = end_time
    booking.first_name = form.cleaned_data['first_name']
    booking.last_name = form.cleaned_data['last_name']
    booking.tel = form.cleaned_data['tel']
    booking.remarks = form.cleaned_data['remarks']
    booking.save()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial876= () => {
    const test = `
    {% extends "app/base.html" %}
    {% load widget_tweaks %}
    
    {% block content %}
    <div class="card card-booking my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">予約内容</h5>
            <table class="booking_table mb-4">
                <tbody>
                    <tr>
                        <th class="header">店舗</th>
                        <td class="data">{{ staff_data.store.name }}店</td>
                    </tr>
                    <tr>
                        <th class="header">スタッフ</th>
                        <td class="data">{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</td>
                    </tr>
                    <tr>
                        <th class="header">日程</th>
                        <td class="data">
                            {% for error in form.non_field_errors %}
                                <h5 class="text-danger">{{ error|linebreaksbr }}</h5>
                            {% endfor %}
                            {{ year }}年{{ month }}月{{ day }}日 {{ hour }}:00
                        </td>
                    </tr>
                </tbody>
            </table>
            <h5 class="card-title text-center">予約情報</h5>
            <form method="post">
                {% csrf_token %}
                <table class="booking_table mb-4">
                    <tbody>
                        <tr>
                            <th class="header">お名前</th>
                            <td class="data form_wrap form_wrap__2col">
                                {% render_field form.first_name class="form-control" placeholder="姓" %}
                                {% render_field form.last_name class="form-control" placeholder="名" %}
                            </td>
                        </tr>
                        <tr>
                            <th class="header">電話番号</th>
                            <td class="data">
                                {% render_field form.tel class="form-control" placeholder="080-1234-5678" %}
                            </td>
                        </tr>
                        <tr>
                            <th class="header">その他備考</th>
                            <td class="data">
                                {% render_field form.remarks class="form-control" %}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="button mx-auto">
                    <button class="btn btn-lg btn-warning btn-block" type="submit">予約確定</button>
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



const Tutorial877= () => {
    const test = `
    {% for error in form.non_field_errors %}
    <h5 class="text-danger">{{ error|linebreaksbr }}</h5>
{% endfor %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial878= () => {
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


const Tutorial879= () => {
    const test = `
    <a href="{% url 'booking' staff_data.pk datetime.year datetime.month datetime.day hour %}">
    <i class="far fa-circle text-info"></i>
</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8710= () => {
    const test = `
    /* booking */

.card-booking {
    max-width: 800px;
}

.booking_table {
    width: 100%;
    border: 1px solid #D1DBEB;
    border-radius: 8px;
    border-collapse: separate;
    overflow: hidden;
}

.booking_table .header {
    width: 200px;
    padding: 16px 24px;
    text-align: left;
    background: #F1F5FA;
}

.booking_table .data {
    padding: 16px 24px;
}

.form_wrap {
    display: grid;
    gap: 16px;
}

.form_wrap__2col {
    grid-template-columns: repeat(2, 1fr);
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial881 = () => {
    const test = `
    from django.urls import path
from app import views

urlpatterns = [
    path('', views.StoreView.as_view(), name='store'),
    path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
    path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
    path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
    path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
    path('thanks/', views.ThanksView.as_view(), name='thanks'), # 追加
]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial882 = () => {
    const test = `
    from django.views.generic import View, TemplateView

class BookingView(View):
    ...

    def post(self, request, *args, **kwargs):
        ...
                return redirect('thanks')


class ThanksView(TemplateView):
    template_name = 'app/thanks.html'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial883 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <h1 class="mb-5">ご予約ありがとうございました。</h1>
        <p class="mb-2">担当より予約確定のお電話がありますので、少々お待ちください。</p>
        <p class="mb-4">お客様のご来店をスタッフ一同心よりお待ちしております。</p>
        <a class="btn btn-primary" href="/">ホームに戻る</a>
    </div>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial891 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'),
        path('mypage/<int:year>/<int:month>/<int:day>/', views.MyPageView.as_view(), name='mypage'), # 追加
    ]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial892 = () => {
    const test = `
    from django.contrib.auth.mixins import LoginRequiredMixin


class StoreView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            start_date = date.today()
            weekday = start_date.weekday()
            # カレンダー日曜日開始
            if weekday != 6:
                start_date = start_date - timedelta(days=weekday + 1)
            return redirect('mypage', start_date.year, start_date.month, start_date.day)

        store_data = Store.objects.all()

        return render(request, 'app/store.html', {
            'store_data': store_data,
        })


class MyPageView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=request.user.id).select_related('user').select_related('store')[0]
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        start_date = date(year=year, month=month, day=day)
        days = [start_date + timedelta(days=day) for day in range(7)]
        start_day = days[0]
        end_day = days[-1]

        calendar = {}
        # 10時～20時
        for hour in range(10, 21):
            row = {}
            for day_ in days:
                row[day_] = ""
            calendar[hour] = row
        start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
        end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
        booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
        for booking in booking_data:
            local_time = localtime(booking.start)
            booking_date = local_time.date()
            booking_hour = local_time.hour
            if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
                calendar[booking_hour][booking_date] = booking.first_name

        return render(request, 'app/mypage.html', {
            'staff_data': staff_data,
            'booking_data': booking_data,
            'calendar': calendar,
            'days': days,
            'start_day': start_day,
            'end_day': end_day,
            'before': days[0] - timedelta(days=7),
            'next': days[-1] + timedelta(days=1),
            'year': year,
            'month': month,
            'day': day,
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial893 = () => {
    const test = `
    if request.user.is_authenticated:
    start_date = date.today()
    weekday = start_date.weekday()
    # カレンダー日曜日開始
    if weekday != 6:
        start_date = start_date - timedelta(days=weekday + 1)
    return redirect('mypage', start_date.year, start_date.month, start_date.day)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial894 = () => {
    const test = `
    if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
    calendar[booking_hour][booking_date] = booking.first_name
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial895 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    <div class="text-center my-5">
        <div class="mb-3">
            <h1>予約カレンダー</h1>
            <p>{{ start_day }}～{{ end_day }}</p>
        </div>
    
        <div class="d-flex mb-2">
            <div class="mx-3 mr-auto">
                <a class="btn btn-warning" href="{% url 'mypage' before.year before.month before.day %}">前週</a>
            </div>
            <div class="mx-3">
                <a class="btn btn-warning" href="{% url 'mypage' next.year next.month next.day %}">次週</a>
            </div>
        </div>
        <div class="mb-3">
            <table class="table table-bordered bg-light">
                <thead class="thead-light">
                    <tr>
                        <th></th>
                        {% for day in days %}
                            {% if day.weekday == 5 %}
                                <th scope="col" class="text-primary">{{ day | date:"d(D)" }}</th>
                            {% elif day.weekday == 6 %}
                                <th scope="col" class="text-danger">{{ day | date:"d(D)" }}</th>
                            {% else %}
                                <th scope="col">{{ day | date:"d(D)" }}</th>
                            {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for booking_hour, booking_date in calendar.items %}
                    <tr>
                        <td scope="row">{{ booking_hour }}:00</td>
                        {% for datetime, book in booking_date.items %}
                        <td>
                            {% if book == "" %}
                                出勤
                            {% else %}
                                <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
                            {% endif %}
                        </td>
                        {% endfor %}
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    
        <div class="row">
            <div class="col-md-3 mb-4 text-center mypage">
                <img class="mb-3" src="/{{ staff_data.user.image.url }}" class="img-fluid" alt="">
                <p>{{ staff_data.store.name }}店：{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</p>
            </div>
    
            <div class="col-md-9 mb-4">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4 text-left">
                            <h3>今週の予約</h3>
                            <hr>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>お客様</th>
                                        <th>開始時刻</th>
                                        <th>終了時刻</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {% for booking in booking_data %}
                                        {% if booking.first_name != None %}
                                            <tr>
                                                <td>{{ booking.first_name }} {{ booking.last_name }}様</td>
                                                <td>{{ booking.start }}</td>
                                                <td>{{ booking.end }}</td>
                                            </tr>
                                        {% endif %}
                                    {% endfor %}                
                                </tbody>
                            </table>
                        </div>
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

const Tutorial896 = () => {
    const test = `
    {% if book == "" %}
    出勤
{% else %}
    <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
{% endif %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial897 = () => {
    const test = `
    /* mypage */

.mypage img {
    height: 150px;
    object-fit: contain;
}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8101 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'),
        path('mypage/<int:year>/<int:month>/<int:day>/', views.MyPageView.as_view(), name='mypage'),
        path('mypage/holiday/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Holiday, name='holiday'), # 追加
    ]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial8102 = () => {
    const test = `
    from django.views.decorators.http import require_POST


    @require_POST
    def Holiday(request, year, month, day, hour):
        staff_data = Staff.objects.get(id=request.user.id)
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        end_time = make_aware(datetime(year=year, month=month, day=day, hour=hour + 1))
    
        # 休日追加
        Booking.objects.create(
            staff=staff_data,
            start=start_time,
            end=end_time,
        )
    
        start_date = date(year=year, month=month, day=day)
        weekday = start_date.weekday()
        # カレンダー日曜日開始
        if weekday != 6:
            start_date = start_date - timedelta(days=weekday + 1)
        return redirect('mypage', year=start_date.year, month=start_date.month, day=start_date.day)
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8103 = () => {
    const test = `
    @require_POST
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8104 = () => {
    const test = `
    Booking.objects.create(
        staff=staff_data,
        start=start_time,
        end=end_time,
    )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8105 = () => {
    const test = `
    <td>
    {% if book == "" %}
        <form method="POST" action="{% url 'holiday' datetime.year datetime.month datetime.day booking_hour %}">
            {% csrf_token %}
            <button class="btn btn-light" type="submit">出勤</button>
        </form>
    {% else %}
        {% if book == None %}
            <p class="mb-0">休み</p>
        {% else %}
            <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
        {% endif %}
    {% endif %}
</td>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8111 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'),
        path('mypage/<int:year>/<int:month>/<int:day>/', views.MyPageView.as_view(), name='mypage'),
        path('mypage/holiday/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Holiday, name='holiday'),
        path('mypage/delete/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Delete, name='delete'), # 追加
    ]
    
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial8112 = () => {
    const test = `
    @require_POST
    def Delete(request, year, month, day, hour):
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        booking_data = Booking.objects.filter(start=start_time)
    
        # 予約削除
        booking_data.delete()
    
        start_date = date(year=year, month=month, day=day)
        weekday = start_date.weekday()
        # カレンダー日曜日開始
        if weekday != 6:
            start_date = start_date - timedelta(days=weekday + 1)
        return redirect('mypage', year=start_date.year, month=start_date.month, day=start_date.day)
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8113 = () => {
    const test = `
    booking_data.delete()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8114 = () => {
    const test = `
    <tr>
    <td scope="row">{{ booking_hour }}:00</td>
    {% for datetime, book in booking_date.items %}
    <td>
        {% if book == "" %}
            <form method="POST" action="{% url 'holiday' datetime.year datetime.month datetime.day booking_hour %}">
                {% csrf_token %}
                <button class="btn btn-light" type="submit">出勤</button>
            </form>
        {% else %}
            {% if book == None %}
                <p class="mb-0">休み</p>
            {% else %}
                <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
            {% endif %}
            <form method="POST" action="{% url 'delete' datetime.year datetime.month datetime.day booking_hour %}">
                {% csrf_token %}
                <button class="btn btn-danger" type="submit">取消</button>
            </form>
        {% endif %}
    </td>
    {% endfor %}
</tr>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};