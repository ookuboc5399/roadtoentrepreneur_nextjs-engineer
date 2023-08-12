import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_7 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_7>
                    <h3> ECサイトシステム構築 </h3>
                    <p>Djangoで自社ECサイトを構築します。</p>
                    <p>今後、ネットでお買い物する機会がどんどん増え、自社ECサイトを構築する需要が増えてきます。 </p>
                    <p>ぜひ今のうちにECサイトを構築できるようにしておきましょう。</p>
                    <p>決済システムはStripeを使用しています。 </p>
                    <p>Stripe</p>
                    <p>開発時は、テスト用のクレジットカードでテストをします。</p>
                    <p>本番環境は、本物のクレジットカードで決済できます。</p>
                    <p>目標</p>
                    <p>下記を学習していきます。</p>
                    <li>ショッピングリストの作り方</li>
                    <li>  ショッピングカートの作り方</li>
                    <li> 決済システム(Stripe)の構築方法</li>
                    <li> 認識情報との連携</li>
                    <p>Stripeダッシュボード</p>
                    <p>Stripeダッシュボード</p>
                    <h4>機能</h4>
                    <li>ショッピングカート </li>
                    <li> クレジットカード決済 </li>
                    <li> 認識機能</li>
                    <p>エラーが発生した場合</p>
                    <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。</p>
                    <p>Djangoドキュメント</p>
        
                </Layout_tutorial_7>
                ) : id == 2 ? (
                    <Layout_tutorial_7>
                    <h3>準備 </h3>
                    <p>ECサイト構築チュートリアルは、認証機能を使用します。</p>
                    <p>カスタムユーザー構築チュートリアルで認証機能を構築した後に、実施して下さい。 </p>
                    <p>カスタムユーザー構築チュートリアル </p>
                    <p>カスタムユーザーを構築したフォルダは他のアプリケーションでも使えますので、すぐに使えるようにバックアップしておくとよいです。</p>
                    <h4>仮想環境</h4>
                    <p>仮想環境に入ります。</p>
                    <Tutorial721 />
                    <h4>requirements.txt変更</h4>
                    <p>開発で必要なstripeとPillowパッケージを追記します。</p>
                    <Tutorial722 />
                    <p>パッケージのインストール</p>
                    <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。</p>
        
                    <Tutorial723 />
                    <p>設定変更</p>
                    <p>画像を使用できるように設定しておきます。</p>
                    <Tutorial724 />
                    <Tutorial725 />
                    <p>これで準備ができました。</p>
                </Layout_tutorial_7>
                ) : id == 3 ? (
                    <Layout_tutorial_7>
                    <h3>プロフィール情報変更</h3>
                    <p>決済ページでユーザーの住所や電話番号も表示したいので、プロフィール情報を変更します。</p>
                    <p>所属の代わりに、住所と電話番号を追加します。 </p>
                    <h4>モデル </h4>
                    <p>モデルにaddressとtelを追加します。</p>
                    <p className='text-red-400'>accounts/models.py</p>
                    <Tutorial731 />
                    <h4>フォーム</h4>
                    <p>フォームにaddressとtelを追加します。</p>
                    <p className='text-red-400'>accounts/forms.py</p>
                    <Tutorial732 />
                    <h4>ビュー</h4>
                    <p>ビューにaddressとtelを追加します。</p>
                    <p className='text-red-400'>accounts/views.py</p>
                    <Tutorial733 />
                    <h4>テンプレート</h4>
                    <h5>プロフィール</h5>
                    <p>プロフィール画面に住所と電話番号を追加します。</p>
                    <p className='text-red-400'>accounts/templates/accounts/profile.html</p>
                    <Tutorial734 />
                    <h5>プロフィール編集</h5>
                    <p>プロフィール編集画面に住所と電話番号を追加します。</p>
                    <p className='text-red-400'>accounts/templates/accounts/profile_edit.html</p>
                    <Tutorial735 />
                    <p>確認</p>
                    <p>プロフィール画面が表示して、住所と電話番号を追加しましょう。</p>
                    <p>http://127.0.0.1:8000/accounts/profile/</p>
                </Layout_tutorial_7>
                ) : id == 4 ? (
                    <Layout_tutorial_7>
                    <h3>商品リスト</h3>
                    <p>商品リスト画面を作成します。</p>
                    <h4>モデル </h4>
                    <p>Itemモデルを追加します。 </p>
                    <p>内容は、タイトル、値段、カテゴリ、スラッグ、説明、画像です。</p>
                    <p className='text-red-400'>app/models.py</p>
                    <Tutorial741 />
                    <p>コード解説</p>
                    <p>画像のアップロード先は、settings.pyで設定したMEDAI_URLのmediaフォルダになります。</p>
                    <Tutorial742 />
                    <p>スラッグとは？</p>
                    <p>スラッグは文字、ハイフン、数字、アンダースコアだけを含んだ文字列です。</p>
                    <p>SlugFieldフィールドを使用して、URLの一部になります。</p>
                    <p>スラッグを使用しないと、商品詳細画面のURLは下記のようになります。</p>
                    <li>
                        http://www.xxxx.com/product/1
                        http://www.xxxx.com/product/2
                        http://www.xxxx.com/product/3
                    </li>
                    <p>スラッグを使用すると、下記のように商品ごとに割り当てたURLを使用することができます。</p>
                    <li>
                        http://www.xxxx.com/product/tv
                        http://www.xxxx.com/product/pc
                        http://www.xxxx.com/product/camera
                    </li>
                    <Tutorial743 />
                    <p>Admin</p>
                    <p>管理画面で操作できるように設定します。</p>
                    <p className='text-red-400'>app/admin.py</p>
                    <Tutorial744 />
                    <p>マイグレーション実行</p>
                    <p>モデルを追加したので、マイグレーションが必要になります</p>
                    <Tutorial745 />
                    <p>管理画面</p>
                    <p>管理画面で商品リストを登録します。</p>
                    <p>複数個商品を登録しておくと、レイアウトがしやすくなります。</p>
                    <p>私は家電を8個登録しました。</p>
                </Layout_tutorial_7>
                ) : id == 5 ? (
                    <Layout_tutorial_7>
                    <h3>商品詳細</h3>
                    <p>商品詳細画面を作成します。</p>
                    <h4>URL</h4>
                    <p>詳細画面のURLを追加します。 </p>
                    <p>slugをURLをとして使用します。</p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial751 />
                    <p>ビュー</p>
                    <p>詳細画面のビューを作成します。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial752 />
                    <h4>テンプレート</h4>
                    <p>product</p>
                    <p>詳細画面のテンプレートを作成します。</p>
                    <p className='text-red-400'>app/templates/app/product.html</p>
                    <Tutorial753 />
                    <p>コード解説</p>
                    <p>objectでアイテム情報を取得します</p>
                    <p>linebreaksbrで改行を認識するようにします。</p>
                    <Tutorial754 />
                    <p>index</p>
                    <p>詳細画面へのリンクをはります。</p>
                    <Tutorial755 />
                    <p>CSS</p>
                    <p>CSSで詳細画面を装飾します。</p>
                    <Tutorial756 />
                    <p>確認</p>
                    <p>商品リストで商品をクリックすると詳細画面が表示されます。</p>
                </Layout_tutorial_7>
                ) : id == 6 ? (
                    <Layout_tutorial_7>
                    <h3>商品追加</h3>
                    <p>詳細画面でカートに入れるボタンをクリックしたときの処理を作成します。</p>
                    <p>モデル</p>
                    <p>注文アイテムと注文のモデルを作成します。 </p>
                    <p className='text-red-400'>app/models.py</p>
                    <Tutorial761 />
                    <p>コード解説</p>
                    <p>get_total_item_price関数を作ることにより、注文アイテムの金額を取得することができます。</p>
                    <p>モデルで設定しておくと、テンプレートで容易に取得することができます。</p>
                    <Tutorial762 />
                    <p>get_total関数を作ることにより、注文の合計金額を取得することができます</p>
                    <Tutorial763 />
                    <p>注文が完了すると、orderedがTrueになります。</p>
                    <Tutorial764 />
                    <p>Admin</p>
                    <p>管理画面で操作できるように設定します。</p>
                    <p className='text-red-400'>app/admin.py</p>
                    <Tutorial765 />
                    <p>マイグレーション実行</p>
                    <p>モデルを追加したので、マイグレーションが必要になります。</p>
                    <Tutorial766 />
                    <p>URL</p>
                    <p>商品追加のURLを作成します。</p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial767 />
                    <p>ビュー</p>
                    <p>商品追加のビューを作成します。。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial768 />
                    <p>コード解説</p>
                    <p>get_object_or_404関数は、指定したモデルを取得し、モデルが存在しない場合はHttp404を送出します。</p>
                    <Tutorial769 />
                    <p>get_or_createメソッドは、よく使います。</p>
                    <p>データベースが存在する場合</p>
                    <p>データを取得</p>
                    <p>データベースが存在しない場合</p>
                    <p>データを登録</p>
                    <Tutorial7610 />
                    <p>filterを使用すると、データをリストで取得できます</p>
                    <p>[0]を使用して、リストの最初を取得することにより、最新の注文を取得しています。</p>
                    <Tutorial7611 />
                    <p>すでに商品がある場合は、数量をプラスして、商品がない場合は、新たに追加します。</p>
                    <Tutorial7612 />
                    <p>テンプレート</p>
                    <p>product</p>
                    <p>カートに入れるボタンのURLを追加します。</p>
                    <p className='text-red-400'>app/templates/app/product.html</p>
                    <Tutorial7613 />
                </Layout_tutorial_7>
                ) : id == 7 ? (
                    <Layout_tutorial_7>
                    <h3>ショッピングカート</h3>
                    <p>カートを入れるボタンをクリックした後のショッピングカート画面を作成します。</p>
                    <h4>URL</h4>
                    <p>ショッピングカートのURLを追加します。 </p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial771 />
                    <h4>ビュー</h4>
                    <p>ショッピングカートのビューを作成します。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial772 />
                    <p>コード解説</p>
                    <p>LoginRequiredMixinクラスを継承することにより、ログインユーザーのみショッピングカートが表示できます。</p>
                    <Tutorial773 />
                    <p>注文がない場合に、ショッピングカート画面を表示したときの動作です。。</p>
                    <Tutorial774 />
                    <p>テンプレートタグ</p>
                    <p>Djangoはタグやフィルターを自作することができます。</p>
                    <p>タグを作成すると、自由にテンプレートからタグを使用して情報を取得することができます。</p>
                    <p>この場合は、注文したアイテムの数量を取得しています。</p>
                    <p className='text-red-400'>app/templatetags/cart_tags.py</p>
                    <Tutorial775 />
                    <p>コード解説</p>
                    <p>注文完了していない注文をすべて取得します。</p>
                    <Tutorial776 />
                    <p>最新の注文を取得して、数量をカウントします。</p>
        
                    <Tutorial777 />
                    <h4>テンプレート</h4>
                    <p>order</p>
                    <p>ショッピングカート画面のテンプレートを作成します</p>
                    <Tutorial778 />
                    <p>コード解説</p>
                    <p>注文したアイテム毎に表示します。</p>
                    <Tutorial779 />
                    <p>プラスボタンをクリックすると、商品の数量が追加されるようにしています。。</p>
        
                    <Tutorial7710 />
                    <p>モデルで設定したget_total_item_price関数を呼び出すことで、注文アイテム毎に値段を取得することができます</p>
        
                    <Tutorial7711 />
                    <p>｛% empty %｝を使用することで、注文アイテムがない時の処理を追加することができます</p>
                    <Tutorial7712 />
                    <p>モデルで設定したしたget_total関数を呼び出すことで、注文合計の値段を取得することができます。</p>
                    <Tutorial7713 />
                    <p>base</p>
                    <p>ナビゲーションにカートを追加します</p>
                    <Tutorial7714 />
                    <p>コード解説</p>
                    <p>テンプレートタグで作成したitemCount関数を呼び出すことで、注文アイテムの個数を取得することができます。</p>
                    <Tutorial7715 />
                    <p>CSS</p>
                    <p>CSSでショッピングカート画面を装飾します</p>
                    <Tutorial7716 />
                    <p>確認</p>
                    <p>カートに入れるボタンをクリックして、商品がショッピングカートに追加されるか試してみて下さい。</p>
                    <p>注文がないもない場合は、このように表示されます</p>
                </Layout_tutorial_7>
                ) : id == 8 ? (
                    <Layout_tutorial_7>
                    <h3>商品削除</h3>
                    <p>ショッピングカートで削除ボタンをクリックした時の動作を追加します。</p>
                    <p>URL</p>
                    <p>削除処理のURLを追加します。 </p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial781 />
                    <p>ビュー</p>
                    <p>削除処理のビューを作成します。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial782 />
                    <p>コード解説。</p>
                    <p>[0]でリストの最初を取得することにより、最新の注文を取得しています</p>
                    <Tutorial783 />
                    <p>最新の注文でslugで検索をして、ヒットした最新の注文アイテムを削除しています。</p>
                    <Tutorial784 />
                    <p>テンプレート</p>
                    <p>order</p>
                    <p>削除ボタンのURLを追加します。</p>
                    <Tutorial785 />
                    <p>確認</p>
                    <p>ショッピングカートで削除ボタンをクリックして、商品が削除されることを試してみて下さい</p>
                </Layout_tutorial_7>
                ) : id == 9 ? (
                    <Layout_tutorial_7>
                    <p>商品減量</p>
                    <p>ショッピングカートでマイナスボタンをクリックした時に、商品の個数が減る処理を追加します。</p>
                    <p>URL</p>
                    <p>商品減量のURLを追加します。 </p>
                   
                    <Tutorial791 />
                    <p>ビュー</p>
                    <p>商品減量のビューを作成します。</p>
                    <Tutorial792 />
                    <p>コード解説。</p>
                    <p>商品が1つ以上であれば、数量を1つ減らします。</p>
                    <p>もし商品が1つであれば、商品を削除します。</p>
                    <Tutorial793 />
                    <p>テンプレート</p>
                    <p>order</p>
                    <p>マイナスボタンのURLを追加します。</p>
                    <Tutorial794 />
                    <p>確認</p>
                    <p>マイナスボタンをクリックした時に、商品の個数が減ることを試してみて下さい</p>
                    </Layout_tutorial_7>
                ) : id == 10 ? (
                    <Layout_tutorial_7>
                    <p>注文確定</p>
                    <p>注文を確定する画面を作成します。</p>
                    <p>モデル</p>
                    <p>Paymentモデルを作成し、Orderモデルに関連付けておきます。 </p>
                   
                    <Tutorial7101 />
                    <p>Admin</p>
                    <p>管理画面で操作できるように設定します。</p>
                    <Tutorial7102 />
                    <p>マイグレーション実行</p>
                    <p>モデルを追加したので、マイグレーションが必要になります。</p>
                    <Tutorial7103 />
                    <p>URL</p>
                    <p>注文確定画面のURLを作成します。</p>
                    <Tutorial7104 />
                    <p>ビュー</p>
                    <p>支払い確定のビューを作成します。</p>
                    <Tutorial7105 />
                    <p>コード解説</p>
                    <p>ユーザー情報を表示したいので、CustomUserモデルから情報を取得します。</p>
                    <Tutorial7106 />
                    <p>Paymentモデルに、stripeのidと合計金額を保存します</p>
                    <p>決済処理は別の項目で実装するので、ここでは仮のidを設定しておきます。</p>
                    <Tutorial7107 />
                    <p>注文が確定したら、orderedをTrueにして注文が確定されたフラグを立てます。</p>
                    <Tutorial7106 />
                    <p>テンプレート</p>
                    <p>payment</p>
                    <p>注文確定画面のテンプレートを作成します。</p>
                    <Tutorial7108 />
                    <p>コード解説</p>
                    <p>ユーザー情報を表示しています</p>
                    <p>プロフィール画面で、ユーザー情報を編集すると、この表示も変わります</p>
                    <Tutorial7109 />
                    <p>order.get_totalで合計金額を取得します。</p>
                    <Tutorial71010 />
                    <p>order</p>
                    <p>注文確定画面へのリンクを作成します</p>
                    <Tutorial71011 />
                    <p>確認</p>
                    <p>レジに進むボタンをクリックした時に、注文確定画面に遷移することを試してみて下さい。</p>
                    </Layout_tutorial_7>
                ) : id == 11 ? (
                    <Layout_tutorial_7>
                    <p>注文完了</p>
                    <p>注文が完了したときの画面を作成します。</p>
                    <p>URL</p>
                    <p>注文が完了したときのURlを作成します。 </p>
                   
                    <Tutorial7101 />
                    <p>ビュー</p>
                    <p>注文が完了したときのビューを作成します。</p>
                    <p>文字だけの表示になるので、TemplateViewクラス汎用ビューを使用します</p>
                    <Tutorial7102 />
                    <p>テンプレート</p>
                    <p>thanks</p>
                    <p>注文完了画面のテンプレートを作成します</p>
                    <p>文字だけの表示になります</p>
                    <Tutorial7103 />
                    <p>確認</p>
                    <p>レジに進むボタンをクリックした時に、注文確定画面に遷移することを試してみて下さい。</p>
                    </Layout_tutorial_7>
                ) : id == 12 ? (
                    <Layout_tutorial_7>
                    <p>決済システム(Stripe)</p>
                    <p>決済システムを実装します。</p>
                    <p>Stripeとは？</p>
                    <p>サンフランシスコに本社を置くStripe社が提供するオンライン決済サービスです </p>
                    <p>Stripe</p>
                    <p>イーロン・マスクからも出資を得ている有名企業です。</p>
                    <p>詳細な開発ドキュメントがあり、とても使いやすいサービスになります。</p>
                    <p>Stripe導入メリット</p>
                    <p>初期費用なしで事前審査もないので、手軽に導入できる</p>
                    <p>手数料が安い</p>
                    <p>詳細な開発ドキュメント</p>
                    <p>シンプルなUI</p>
                    <p>Stripeの使い方</p>
                    <p>アカウント登録</p>
                    <p>APIキー取得</p>
                    <p>アカウント登録</p>
                    <p>いますぐ始めるボタンをクリックして、アカウントを登録しましょう。</p>
                    <p>Stripe</p>
                    <p>APIキー取得</p>
                    <p>ログインしてダッシュボードを開き、開発者-APIキー画面を開きます</p>
                    <p>ダッシュボード</p>
                    <p>公開可能キーとシークレットキーが表示されますので、メモしておきます</p>
                    <p>APIキー</p>
                    <p>設定追加</p>
                    <p>settings.pyにメモしたシークレットキーを記載します</p>
                    <p>APIキー</p>
                    <p>本来は、環境変数やlocal_settings.pyを作成して、APIキーは公開しないようにしてください。</p>
                    <Tutorial7121 />
                    <p>Stripe設定</p>
                    <p>Stripeの設定をします。</p>
                    <p>Stripe公式ドキュメント</p>
                    <p>公式ドキュメントに決済に必要なコードが記載されています</p>
                    <p>stripe.jsファイルを作成して、コーディングしていきます。</p>
                    <Tutorial7122 />
                    <p>コード解説</p>
                    <p>このAPIキーは公開可能キーです。</p>
                    <Tutorial7123 />
                    <p>ビュー</p>
                    <p>決済システムの処理を、PaymentViewビューに追加します</p>
                    <Tutorial7124 />
                    <p>コード解説</p>
                    <p>Stripeの処理を追加します。</p>
                    <p>本番運用するためには、Stripeにユーザー情報を渡します。</p>
                    <p>今は分かりやすくするために合計金額と商品説明のみStripeに渡しています</p>
                    <Tutorial7125 />
                    <p>テンプレート</p>
                    <p>payment</p>
                    <p>クレジットカードの部分のテンプレートを作成します。</p>
                    <Tutorial7126 />
                    <p>コード解説</p>
                    <p>クレジットカードのテンプレートです。</p>
                    <p>JavaScriptで設定しているので、id=card-elementエリアにクレジットカードが表示されます。</p>
                    <Tutorial7127 />
                    <p>Stripeの設定をここで読み込みます。</p>
                    <Tutorial7128 />
                    <p>CSS</p>
                    <p>CSSでクレジットカードエリアの装飾をします。</p>
                    <p>クラス名はStripe側で決まっているので、中身を修正するとデザインできます。</p>
                    <Tutorial7128 />
                    <p>確認</p>
                    <p>実際に、商品を購入してみましょう。</p>
                    <p>Stripeにはテスト用のクレジットカードが用意されています</p>
                    <p>テスト用クレジットカード</p>
                    <p>テスト用のクレジットカードは4242 4242 4242 4242を入力するとテストで決済できます。</p>
                    <p>番号以降は適当の日付で大丈夫です。</p>
                    <p>決済が完了したら、Stripeダッシュボードの支払い画面を確認すると商品が購入さていることが分かります。</p>
                    <p>試してみて下さい</p>
                    <p>完成</p>
                    <p>これで、ECサイト構築のチュートリアルが完了しました。</p>
                    </Layout_tutorial_7>
                ) : id == 13 ? (
                    <Layout_tutorial_7>
                    <p>おわりに </p>
                    <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                    <p>ECサイト構築のチュートリアルはここまでで終わりとなります。 </p>
                    <p> 決済システムの構築方法</p>
                    <p>Stripeを使用したECサイトの作り方が理解出来ましたでしょうか！？ </p>
                    <p>本番で運用するには、エラー処理を追加する必要はありますが、実用化できます。</p>
                    <p>ぜひECサイトを作れるようになって、案件を獲得しましょう。</p>
        
                    <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
        
                    <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                    <p>Djangoドキュメント</p>
        
                    <p>Stripeドキュメント</p>
                    <p>ぜひオリジナルのアプリケーションを開発してみてください。</p>
        
                </Layout_tutorial_7>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial721 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial722 = () => {
    const test = `
Django~=3.1.4
django-allauth~=0.41.0
django-widget-tweaks~=1.4.8
stripe~=2.27.0
Pillow~=8.1.0
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial723 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial724 = () => {
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

const Tutorial725 = () => {
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

const Tutorial731 = () => {
    const test = `
    class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('メールアドレス', unique=True)
    first_name = models.CharField(('姓'), max_length=30)
    last_name = models.CharField(('名'), max_length=30)
    address = models.CharField(('住所'), max_length=30, blank=True) # 追加
    tel = models.CharField(('電話番号'), max_length=30, blank=True) # 追加
    created = models.DateTimeField(('入会日'), default=timezone.now)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial732 = () => {
    const test = `
    class ProfileForm(forms.Form):
    first_name = forms.CharField(max_length=30, label='姓')
    last_name = forms.CharField(max_length=30, label='名')
    address = forms.CharField(max_length=30, label='住所', required=False) # 追加
    tel = forms.CharField(max_length=30, label='電話番号', required=False) # 追加
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial733 = () => {
    const test = `
class ProfileEditView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        user_data = CustomUser.objects.get(id=request.user.id)
        form = ProfileForm(
            request.POST or None,
            initial={
                'first_name': user_data.first_name,
                'last_name': user_data.last_name,
                'address': user_data.address, # 追加
                'tel': user_data.tel # 追加
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
            user_data.address = form.cleaned_data['address'] # 追加
            user_data.tel = form.cleaned_data['tel'] # 追加
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

const Tutorial734 = () => {
    const test = `
<tr>
    <th class="header">名前</th>
    <td class="data">{{ user_data.first_name }} {{ user_data.last_name }}</td>
</tr>
<tr>
    <th class="header">メールアドレス</th>
    <td class="data">{{ user_data.email }}</td>
</tr>
<tr>
    <th class="header">住所</th>
    <td class="data">{{ user_data.address }}</td>
</tr>
<tr>
    <th class="header">電話番号</th>
    <td class="data">{{ user_data.tel }}</td>
</tr>
<tr>
    <th class="header">入会日</th>
    <td class="data">{{ user_data.created }}</td>
</tr>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial735 = () => {
    const test = `
<tr>
    <th class="header">名前</th>
    <td class="data form_wrap form_wrap-2">
        {% render_field form.first_name class="form-control" placeholder="姓" %}
        {% render_field form.last_name class="form-control" placeholder="名" %}
    </td>
</tr>
<tr>
    <th class="header">住所</th>
    <td class="data">
        {% render_field form.address class="form-control" placeholder="住所" %}
    </td>
</tr>
<tr>
    <th class="header">電話番号</th>
    <td class="data">
        {% render_field form.tel class="form-control" placeholder="電話番号" %}
    </td>
</tr>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial741 = () => {
    const test = `
    from django.db import models


    class Item(models.Model):
        title = models.CharField(max_length=100)
        price = models.IntegerField()
        category = models.CharField(max_length=100)
        slug = models.SlugField()
        description = models.TextField()
        image = models.ImageField(upload_to='images')
    
        def __str__(self):
            return self.title
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial742 = () => {
    const test = `
    image = models.ImageField(upload_to='images')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial743 = () => {
    const test = `
    slug = models.SlugField()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial744 = () => {
    const test = `
    from django.contrib import admin
    from .models import Item
    
    admin.site.register(Item)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial745 = () => {
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

const Tutorial751 = () => {
    const test = `
from django.urls import path
from app import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('product/<slug>', views.ItemDetailView.as_view(), name='product'), # 追加
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial752 = () => {
    const test = `
    class ItemDetailView(View):
    def get(self, request, *args, **kwargs):
        item_data = Item.objects.get(slug=self.kwargs['slug'])
        return render(request, 'app/product.html', {
            'item_data': item_data
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial753 = () => {
    const test = `
{% extends 'app/base.html' %}

{% block content %}
<div class="my-5">
    <div class="row product">
        <div class="col-md-6 mb-4 text-center">
            <img src="{{ item_data.image.url }}" alt="" class="img-fluid">
        </div>

        <div class="col-md-6 mb-4">
            <div class="card">
                <div class="card-body px-2 py-1">
                    <h3>{{ item_data.title }}</h3>
                    <p class="mb-3">{{ item_data.category }}</p>
                    <hr>
                    <p>価格：<span class="text-danger font-weight-bold">{{ item_data.price }}円</span></p>
                    <p class="font-weight-bold">商品説明</p>
                    <p>{{ item_data.description|linebreaksbr }}</p>
                    <a href="" class="btn btn-primary">カートに入れる</a>
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

const Tutorial754 = () => {
    const test = `
    <p>{{ object.description|linebreaksbr }}</p>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial755 = () => {
    const test = `
    <a class="stretched-link" href="{% url 'product' item.slug %}"></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial756 = () => {
    const test = `
    /* product */

    .product img {
        height: 350px;
        object-fit: contain;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial761 = () => {
    const test = `
    from django.conf import settings
    from django.db import models
    
    
    class OrderItem(models.Model):
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
        ordered = models.BooleanField(default=False)
        item = models.ForeignKey(Item, on_delete=models.CASCADE)
        quantity = models.IntegerField(default=1)
    
        def get_total_item_price(self):
            return self.quantity * self.item.price
    
        def __str__(self):
            return f"{self.item.title}：{self.quantity}"
    
    
    class Order(models.Model):
        user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
        items = models.ManyToManyField(OrderItem)
        start_date = models.DateTimeField(auto_now_add=True)
        ordered_date = models.DateTimeField()
        ordered = models.BooleanField(default=False)
    
        def get_total(self):
            total = 0
            for order_item in self.items.all():
                total += order_item.get_total_item_price()
            return total
    
        def __str__(self):
            return self.user.email
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial762 = () => {
    const test = `
    def get_total_item_price(self):
    return self.quantity * self.item.price
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial763 = () => {
    const test = `
    def get_total(self):
    total = 0
    for order_item in self.items.all():
        total += order_item.get_total_item_price()
    return total
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial764 = () => {
    const test = `
    ordered = models.BooleanField(default=False)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial765 = () => {
    const test = `
    from django.contrib import admin
from .models import Item, OrderItem, Order

admin.site.register(Item)
admin.site.register(OrderItem)
admin.site.register(Order)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial766 = () => {
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



const Tutorial767 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
        path('additem/<slug>', views.addItem, name='additem'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial768 = () => {
    const test = `
    from django.contrib.auth.decorators import login_required
    from django.views.generic import ListView, DetailView, View
    from .models import Item, OrderItem, Order
    from django.shortcuts import render, get_object_or_404, redirect
    from django.utils import timezone
    
    
    @login_required
    def addItem(request, slug):
        item = get_object_or_404(Item, slug=slug)
        order_item, created = OrderItem.objects.get_or_create(
            item=item,
            user=request.user,
            ordered=False
        )
        order = Order.objects.filter(user=request.user, ordered=False)
    
        if order.exists():
            order = order[0]
            if order.items.filter(item__slug=item.slug).exists():
                order_item.quantity += 1
                order_item.save()
            else:
                order.items.add(order_item)
        else:
            order = Order.objects.create(user=request.user, ordered_date=timezone.now())
            order.items.add(order_item)
    
        return redirect('order')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial769 = () => {
    const test = `
    item = get_object_or_404(Item, slug=slug)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7610 = () => {
    const test = `
    order_item, created = OrderItem.objects.get_or_create(
        item=item,
        user=request.user,
        ordered=False
    )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7611 = () => {
    const test = `
    order = order[0]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7612 = () => {
    const test = `
    if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
        else:
            order.items.add(order_item)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7613 = () => {
    const test = `
    <a class="btn btn-primary" href="{% url 'additem' item_data.slug %}">カートに入れる</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial771 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
        path('additem/<slug>', views.addItem, name='additem'),
        path('order/', views.OrderView.as_view(), name='order'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial772 = () => {
    const test = `
    from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.mixins import LoginRequiredMixin


class OrderView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        try:
            order = Order.objects.get(user=request.user, ordered=False)
            context = {
                'order': order
            }
            return render(request, 'app/order.html', context)
        except ObjectDoesNotExist:
            return render(request, 'app/order.html')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial773 = () => {
    const test = `
    class OrderView(LoginRequiredMixin, View):
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial774 = () => {
    const test = `
    except ObjectDoesNotExist:
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial775 = () => {
    const test = `
    from django import template
    from app.models import Order
    
    register = template.Library()
    
    @register.filter
    def itemCount(user):
        if user.is_authenticated:
            order = Order.objects.filter(user=user, ordered=False)
            if order.exists():
                return order[0].items.count()
        return 0
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial776 = () => {
    const test = `
    order = Order.objects.filter(user=user, ordered=False)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial777 = () => {
    const test = `
    return order[0].items.count()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial778 = () => {
    const test = `
{% extends "app/base.html" %}

{% block content %}

<div class="my-5">
    <h3>ショッピングカート</h3>
</div>

<div class="row order">
    <div class="col-md-9 mb-5">
        <div class="card">
            <div class="card-body px-4 py-3">
                {% for order_item in order.items.all %}
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <img src="/{{ order_item.item.image.url }}" class="img-fluid" alt="{{ order_item.item.title }}">
                        </div>
                        <div class="col-md-6">
                            <h5>{{ order_item.item.title }}</h5>
                            <p class="mb-1">
                                数量：
                                <a href=""><span class="badge badge-warning">-</span></a>
                                {{ order_item.quantity }}
                                <a href="{% url 'additem' order_item.item.slug %}"><span class="badge badge-warning">+</span></a>
                            </p>
                            <a href="">
                                <span class="badge badge-danger">削除</span>
                            </a>
                        </div>
                        <div class="col-md-3 text-right">
                            <p>
                                価格：
                                <span class="text-danger font-weight-bold">
                                    {{ order_item.get_total_item_price }}円
                                </span>
                            </p>
                        </div>
                    </div>
                    {% if not forloop.last %}
                        <hr>
                    {% endif %}

                    {% empty %}
                    <p class="mb-3">カートは空です</p>
                {% endfor %}
            </div>
        </div>
    </div>

    <div class="col-md-3">
        <div class="card">
            <div class="card-body text-center px-2 py-3">
                {% if order.get_total %}
                    <p>小計：<span class="font-weight-bold">{{ order.get_total }}</span>円</p>
                    <div class="mb-3">
                        <a class="btn btn-warning" href="">レジに進む</a>
                    </div>
                {% endif %}
                <a class="btn btn-primary" href="/">買い物を続ける</a>
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

const Tutorial779 = () => {
    const test = `
    {% for order_item in order.items.all %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7710 = () => {
    const test = `
    <a href="{% url 'additem' order_item.item.slug %}"><span class="badge badge-warning">+</span></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7711 = () => {
    const test = `
    {{ order_item.get_total_item_price }}円
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7712 = () => {
    const test = `
    {% empty %}
    <p class="mb-3">カートは空です</p>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7713 = () => {
    const test = `
    <p>小計：<span class="font-weight-bold">{{ order.get_total }}</span>円</p>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7714 = () => {
    const test = `
    {% load cart_tags %}
    {% load static %}
    
    
                        <li class="nav-item">
                            <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{% url 'order' %}">
                                カート
                                <span class="badge badge-pill badge-warning">
                                    {{ request.user|itemCount }}
                                </span>
                            </a>
                        </li>
    
                        <li class="nav-item">
                            <a class="nav-link" href="{% url 'account_logout' %}">ログアウト</a>
                        </li>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7715 = () => {
    const test = `
    {{ request.user|itemCount }}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7716 = () => {
    const test = `
    /* order */

.order img {
    height: 100px;
    object-fit: contain;
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial781 = () => {
    const test = `
    from django.urls import path
from app import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
    path('additem/<slug>', views.addItem, name='additem'),
    path('order/', views.OrderView.as_view(), name='order'),
    path('removeitem/<slug>', views.removeItem, name='removeitem'), # 追加
]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial782 = () => {
    const test = `
    @login_required
    def removeItem(request, slug):
        item = get_object_or_404(Item, slug=slug)
        order = Order.objects.filter(
            user=request.user,
            ordered=False
        )
        if order.exists():
            order = order[0]
            if order.items.filter(item__slug=item.slug).exists():
                order_item = OrderItem.objects.filter(
                    item=item,
                    user=request.user,
                    ordered=False
                )[0]
                order.items.remove(order_item)
                order_item.delete()
                return redirect("order")
    
        return redirect("product", slug=slug)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial783 = () => {
    const test = `
    order = Order.objects.filter(
        user=request.user,
        ordered=False
    )
    if order.exists():
        order = order[0]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial784 = () => {
    const test = `
    if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item,
                user=request.user,
                ordered=False
            )[0]
            order.items.remove(order_item)
            order_item.delete()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial785 = () => {
    const test = `
    <a href="{% url 'removeitem' order_item.item.slug %}">
    <span class="badge badge-danger">削除</span>
</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial791 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
        path('additem/<slug>', views.addItem, name='additem'),
        path('order/', views.OrderView.as_view(), name='order'),
        path('removeitem/<slug>', views.removeItem, name='removeitem'),
        path('removesingleitem/<slug>', views.removeSingleItem, name='removesingleitem'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial792 = () => {
    const test = `
    @login_required
    def removeSingleItem(request, slug):
        item = get_object_or_404(Item, slug=slug)
        order = Order.objects.filter(
            user=request.user,
            ordered=False
        )
        if order.exists():
            order = order[0]
            if order.items.filter(item__slug=item.slug).exists():
                order_item = OrderItem.objects.filter(
                    item=item,
                    user=request.user,
                    ordered=False
                )[0]
                if order_item.quantity > 1:
                    order_item.quantity -= 1
                    order_item.save()
                else:
                    order.items.remove(order_item)
                    order_item.delete()
                return redirect("order")
    
        return redirect("product", slug=slug)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial793 = () => {
    const test = `
    if order_item.quantity > 1:
    order_item.quantity -= 1
    order_item.save()
else:
    order.items.remove(order_item)
    order_item.delete()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial794 = () => {
    const test = `
    <a href="{% url 'removesingleitem' order_item.item.slug %}"><span class="badge badge-warning">-</span></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7101 = () => {
    const test = `
    class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    payment = models.ForeignKey('Payment', on_delete=models.SET_NULL, blank=True, null=True) # 追加

    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_total_item_price()
        return total

    def __str__(self):
        return self.user.email


class Payment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, blank=True, null=True)
    stripe_charge_id = models.CharField(max_length=50)
    amount = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.email
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7102 = () => {
    const test = `
    from django.contrib import admin
    from .models import Item, OrderItem, Order, Payment
    
    admin.site.register(Item)
    admin.site.register(OrderItem)
    admin.site.register(Order)
    admin.site.register(Payment)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7103 = () => {
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

const Tutorial7104 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
        path('additem/<slug>', views.addItem, name='additem'),
        path('order/', views.OrderView.as_view(), name='order'),
        path('removeitem/<slug>', views.removeItem, name='removeitem'),
        path('removesingleitem/<slug>', views.removeSingleItem, name='removesingleitem'),
        path('payment/', views.PaymentView.as_view(), name='payment'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7105 = () => {
    const test = `
    from django.conf import settings
    from accounts.models import CustomUser
    from .models import Item, OrderItem, Order, Payment
    
    
    class PaymentView(LoginRequiredMixin, View):
        def get(self, request, *args, **kwargs):
            order = Order.objects.get(user=request.user, ordered=False)
            user_data = CustomUser.objects.get(id=request.user.id)
            context = {
                'order': order,
                'user_data': user_data
            }
            return render(request, 'app/payment.html', context)
    
        def post(self, request, *args, **kwargs):
            order = Order.objects.get(user=request.user, ordered=False)
            order_items = order.items.all()
            amount = order.get_total()
    
            payment = Payment(user=request.user)
            payment.stripe_charge_id = 'test_stripe_charge_id'
            payment.amount = amount
            payment.save()
    
            order_items.update(ordered=True)
            for item in order_items:
                item.save()
    
            order.ordered = True
            order.payment = payment
            order.save()
            return redirect('thanks')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7106 = () => {
    const test = `
    user_data = CustomUser.objects.get(id=request.user.id)
    context = {
        'order': order,
        'user_data': user_data
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7107 = () => {
    const test = `
    payment = Payment(user=request.user)
    payment.stripe_charge_id = 'test_stripe_charge_id'
    payment.amount = amount
    payment.save()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7108 = () => {
    const test = `
    order.ordered = True
order.payment = payment
order.save()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7109 = () => {
    const test = `
    {% extends "app/base.html" %}
{% load static %}

{% block content %}
<div class="my-5">
    <h3>注文内容を確認する</h3>
</div>

<form action="." method="POST" id="payment-form">
    <div class="row order">
        <div class="col-md-9">
            <div class="card px-4">
                <div class="card-body px-2 py-3">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="font-weight-bold">お届け先住所</p>
                            <p>名前：{{ user_data.first_name }} {{ user_data.last_name }}</p>
                            <p>住所：{{ user_data.address }}</p>
                            <p>電話番号：{{ user_data.tel }}</p>
                        </div>
                        <div class="col-md-6">
                            <p class="font-weight-bold">お支払い方法</p>
                            {% csrf_token %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
                <div class="card-body text-center px-2 py-3">
                    <div class="mb-3">
                        <button class="btn btn-warning" type="submit">注文を確定する</button>
                    </div>
                    <p class="font-weight-bold">注文内容</p>
                    <p>商品の小計：{{ order.get_total }}円</p>
                    <p>配送料：0円</p>
                    <hr>
                    <p class="font-weight-bold text-danger">ご請求金額：{{ order.get_total }}円</p>
                </div>
            </div>
        </div>
    </div>
</form>
{% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial71010 = () => {
    const test = `
    <p>名前：{{ user_data.first_name }} {{ user_data.last_name }}</p>
    <p>住所：{{ user_data.address }}</p>
    <p>電話番号：{{ user_data.tel }}</p>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial71011 = () => {
    const test = `
    <p class="font-weight-bold">注文内容</p>
    <p>商品の小計：{{ order.get_total }}円</p>
    <p>配送料：0円</p>
    <hr>
    <p class="font-weight-bold text-danger">ご請求金額：{{ order.get_total }}円</p>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
         
const Tutorial71012 = () => {
    const test = `
    <a class="btn btn-warning" href="{% url 'payment' %}">レジに進む</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7111 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
        path('product/<slug>', views.ItemDetailView.as_view(), name='product'),
        path('additem/<slug>', views.addItem, name='additem'),
        path('order/', views.OrderView.as_view(), name='order'),
        path('removeitem/<slug>', views.removeItem, name='removeitem'),
        path('removesingleitem/<slug>', views.removeSingleItem, name='removesingleitem'),
        path('payment/', views.PaymentView.as_view(), name='payment'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
               

const Tutorial7112 = () => {
    const test = `
    class ThanksView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        return render(request, 'app/thanks.html')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7113 = () => {
    const test = `
    {% extends "app/base.html" %}

{% block content %}

<div class="text-center my-5">
    <h1 class="mb-5">ご注文ありがとうございました。</h1>
    <p class="mb-4">今後ともご愛顧賜りますようお願い申し上げます。</p>
    <a class="btn btn-primary" href="/">買い物を続ける</a>
</div>
{% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial7121 = () => {
    const test = `
    # テストが完了したら、環境変数にする
    STRIPE_SECRET_KEY = 'sk_test_xxx'
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
               

const Tutorial7122 = () => {
    const test = `
    const stripe = Stripe('pk_test_xxxx');
const elements = stripe.elements();

const style = {
    base: {
        fontSize: '16px',
        color: '#32325d',
    },
};

const card = elements.create('card', { style: style });
card.mount('#card-element');
card.addEventListener('change', function (event) {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

const form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    stripe.createToken(card).then(function (result) {
        if (result.error) {
            const errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            stripeTokenHandler(result.token);
        }
    });
});

function stripeTokenHandler(token) {
    const form = document.getElementById('payment-form');
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    form.submit();
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7123 = () => {
    const test = `
    const stripe = Stripe('pk_test_xxxx');
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
                

// const Tutorial7121 = () => {
//     const test = `
//     import stripe


// class PaymentView(LoginRequiredMixin, View):
//     def get(self, request, *args, **kwargs):
//         order = Order.objects.get(user=request.user, ordered=False)
//         user_data = CustomUser.objects.get(id=request.user.id)
//         context = {
//             'order': order,
//             'user_data': user_data
//         }
//         return render(request, 'app/payment.html', context)

//     def post(self, request, *args, **kwargs):
//         stripe.api_key = settings.STRIPE_SECRET_KEY
//         order = Order.objects.get(user=request.user, ordered=False)
//         token = request.POST.get('stripeToken')
//         amount = order.get_total()
//         order_items = order.items.all()
//         item_list = []
//         for order_item in order_items:
//             item_list.append(str(order_item.item) + '：' + str(order_item.quantity))
//         description = ' '.join(item_list)

//         charge = stripe.Charge.create(
//             amount=amount,
//             currency='jpy',
//             description=description,
//             source=token,
//         )

//         payment = Payment(user=request.user)
//         payment.stripe_charge_id = charge['id']
//         payment.amount = amount
//         payment.save()

//         order_items.update(ordered=True)
//         for item in order_items:
//             item.save()

//         order.ordered = True
//         order.payment = payment
//         order.save()
//         return redirect('thanks')
//     `
//     return (
//         <SyntaxHighlighter language="js" style={syntaxStyle} >
//             {test}
//         </SyntaxHighlighter>
//     );
// };
               

const Tutorial7124 = () => {
    const test = `
    stripe.api_key = settings.STRIPE_SECRET_KEY
token = request.POST.get('stripeToken')

charge = stripe.Charge.create(
    amount=amount,
    currency='jpy',
    description=description,
    source=token,
)

payment.stripe_charge_id = charge['id']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7125 = () => {
    const test = `
    {% extends "app/base.html" %}
{% load static %}

{% block content %}
<div class="my-5">
    <h3>注文内容を確認する</h3>
</div>

<form action="." method="POST" id="payment-form">
    <div class="row order">
        <div class="col-md-9">
            <div class="card px-4">
                <div class="card-body px-2 py-3">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="font-weight-bold">お届け先住所</p>
                            <p>名前：{{ user_data.first_name }} {{ user_data.last_name }}</p>
                            <p>住所：{{ user_data.address }}</p>
                            <p>電話番号：{{ user_data.tel }}</p>
                        </div>
                        <div class="col-md-6">
                            <p class="font-weight-bold">お支払い方法</p>
                            {% csrf_token %}
                            <div class="form-row">
                                <div id="card-element"></div>
                                <div id="card-errors" role="alert"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card">
                <div class="card-body text-center px-2 py-3">
                    <div class="mb-3">
                        <button class="btn btn-warning" type="submit">注文を確定する</button>
                    </div>
                    <p class="font-weight-bold">注文内容</p>
                    <p>商品の小計：{{ order.get_total }}円</p>
                    <p>配送料：0円</p>
                    <hr>
                    <p class="font-weight-bold text-danger">ご請求金額：{{ order.get_total }}円</p>
                </div>
            </div>
        </div>
    </div>
</form>
{% endblock %}

{% block extra_js %}
<script type="text/javascript" src="https://js.stripe.com/v3/"></script>
<script type="text/javascript" src="{% static 'js/stripe.js' %}"></script>
{% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
            


const Tutorial7126 = () => {
    const test = `
    <div class="form-row">
    <div id="card-element"></div>
    <div id="card-errors" role="alert"></div>
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
               

const Tutorial7127 = () => {
    const test = `
    {% block extra_js %}
    <script type="text/javascript" src="https://js.stripe.com/v3/"></script>
    <script type="text/javascript" src="{% static 'js/stripe.js' %}"></script>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial7128 = () => {
    const test = `
    /* stripe */

    .StripeElement {
        background-color: #F1F1F1;
        height: 40px;
        width: 100%;
        padding: 10px 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }
    
    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }
    
    .StripeElement--invalid {
        border-color: #fa755a;
    }
    
    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

