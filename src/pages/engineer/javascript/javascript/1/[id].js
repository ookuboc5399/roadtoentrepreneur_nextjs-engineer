import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { JavaScript } from '../../../../../components/layout/engineer/engineer';


const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "javascript_detail" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div>
                                    <h2 className="text-center">JavaScriptでできること</h2>
                                    <div className="text-xl">動きのあるウェブページが作れる</div>
                                    <p>JavaScriptはブラウザで動作するのでページに動きを与えることができます</p>
                                    <p>自動で画像を切り替えたり、画像をクリックすると拡大したり、お問い合わせフォームに記入漏れがあるとメッセージを表示してユーザーに注意を促すなど<br />
                                        ページの見た目に何らかの変化を生み出す多くの仕掛けがJavaScriptで行われています</p>
                                    <div className="text-xl">サーバーと通信できる</div>
                                    <p>JavaScriptでサーバー上のファイルやデータにアクセスすることはできませんがサーバーにリクエストを送り、サーバーからのレスポンスを受け取ってページに反映することができます。</p>
                                    <p>たとえば地図・位置検索サービスのGoogleマップはマウスで画面を動かすと次々と新しい範囲の地図が表示されます。その裏では表示する範囲が変わるたびにJavaScriptのプログラムが
                                        サーバーと通信を行って必要な範囲の地図をダウンロードして画面に表示しています
                                    </p>
                                    <div className="text-xl">アクセス解析ツールなどの設置ができる</div>
                                    <p>アクセス解析のコードをウェブサイトに設置するとウェブサイトの詳しいアクセス情報を専用の管理画面から見ることができます。</p>
                                    <p>ページのスクロールやボタンのクリックなどブラウザの中で何かが起こったタイミングを検知し、検知した情報はJavaScriptによってサーバーに送られサーバーに情報が記録されます。</p>
                                    <div className="text-xl">HTMLの階層構造(DOM)にアクセスできる</div>
                                    <p>HTMLタグのツリー構造をDOMと呼び、ツリーの節をノードと呼びます。</p>
                                    <p>JavaScriptを使うとDOMにアクセスしてノードの追加・削除・移動・内容の書き換えなどの操作が行えます。</p>
                                    <Image
                                        src="/images/programing/javascript/dom.png"
                                        alt=""
                                        width={600}
                                        height={200}
                                    />
                                </div>
                                <div>
                                    <h2 className="text-center">JavaScriptを書く3つの場所</h2>
                                    <div className="text-xl">HTMLファイルの中に書く</div>
                                    <p>HTMLファイルの中にJavaScriptのコードを書く場合はコードの全体を＜script＞と＜/script＞で囲みます。</p>
                                    <div className="text-xl">JSファイルの中に書く</div>
                                    <p>JavaScriptのコードを書いたファイルをHTMLファイルからscriptタグで読み込むことができます。</p>
                                    <div className="text-xl">ブラウザのコンソールに書く</div>
                                    <p>ブラウザのコンソール画面に直接JavaScriptのコードを書くとその場ですぐ実行されます。</p>
                                    <p></p>
                                </div>
                                <div>
                                    <h2 className="text-center">仮想DOMとは</h2>
                                    <p>仮想DOMとはJavaScriptのオブジェクトで作られた仮想的なDOMのことです。</p>
                                    <p></p>これを用い実際のDOMとの差分を比較し変更箇所のみを実際のDOMに反映することでDOMへの操作を最小限に抑えることが可能になります
                                    <p className="text-xl">仮想DOMのイメージ</p>
                                    <div className='flex justify-center'>

                                        <Image
                                            src="/images/dom.png"
                                            alt=""
                                            width={600}
                                            height={200}
                                        />
                                    </div>
                                </div>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">パッケージマネージャー(npm/yarn)</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            バックエンド、フロントエンドを問わずどのプログラミングで開発するにしても基本的には外部で公開されている様々なパッケージを利用して開発してくことになります<br />
                                            npmの場合
                                            <Code1 />
                                            yarnの場合
                                            <Code2 />
                                            たったこれだけのコマンドで世界中の人が公開している便利なパッケージが使えるようになります
                                            上記のコマンド実行時にローカルファイルのpackage.jsonが更新されパッケージの情報が追記されます<br />
                                            それと同時にnpmでインストールした場合はpackage-lock.json、yarnでインストールした場合はyarn.lockファイルが生成されます<br />
                                            lockファイルにはパッケージが内部で使用している別パッケージ等のバージョン情報や依存関係が記載されています<br />
                                            package.jsonとpackage-lock.jsonの2つのファイルがあればどの環境でも同じnode_modulesを再現できます
                                            実施にプログラムを実行するときにはこのnode_modulesの中を参照して便利なパッケージを動かすことができています
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">dataの書き方</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            <Code3 />
                                        </div>
                                        <div class="p-2 inline-block">

                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">columnsの書き方</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            <Code4 />
                                        </div>
                                        <div class="p-2 inline-block">
                                            名前とメールアドレスにはtextが、そして年齢にはnumericとして利用します
                                        </div>
                                    </div>
                                </div>
                                <p></p>以下のコードを実行すると「Name」「Mail」「Age」という列からなる表が作成されます
                                <Code1 />
                                <p></p>また、この表はその場で内容を編集することができるのです。
                                <p></p>テーブルの行や列を追加・削除することもできます
                                <p></p>データの内容をチェックします
                                <p></p>data配列の中には3つの配列がまとめられています
                                <p></p>そして各配列の中には名前・メールアドレス・年齢といったデータが用意されています
                                <Code2 />
                                <p></p>&lt;div&gt;ではstyle属性にwidthとheightを使って大きさを指定します
                                <p></p>
                                <Code3 />
                                <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "python_detail_basic" ? (
                    <JavaScript>
                        <div className="border-4 border-pink-50 inline-block  h-2/4 m-8">
                            <div>
                                <div>
                                    <h2 className="text-center">データ型とは？</h2>

                                    <p>JavaScriptで扱うデータには数値や文字列、日付などの種類があり、これをデータ型と呼びます。</p>
                                    <p>データ型はプリミティブ型とオブジェクト型に分類されます。</p>
                                    <div className='border-collapse'>
                                        <table className='border-collapse'>
                                            <tr>
                                                <th>分類</th> <th>データ型</th><th>特徴</th>
                                            </tr>
                                            <tr>
                                                <th>プリミティブ型</th> <td>数値型</td> <td>9007199254740991までの数値を表現できる</td>
                                            </tr>
                                            <tr>
                                                <th>2</th> <td>文字列型</td> <td>テキストを表す連続した文字</td>
                                            </tr>
                                            <tr>
                                                <th>3</th> <td>論理型</td> <td>trueかfalseのどちらかを表す</td>
                                            </tr>
                                            <tr>
                                                <th>4</th> <td>任意精度の整数型</td> <td>数値型の最大値を超える大きな数値を表現できる</td>
                                            </tr>
                                            <tr>
                                                <th>5</th> <td>undefined</td> <td>データが割り当てられていない状態を示す値</td>
                                            </tr>
                                            <tr>
                                                <th>6</th> <td>Symbol</td> <td>固有の識別子を表す</td>
                                            </tr>
                                            <tr>
                                                <th>7</th> <td>Object</td> <td>データとそのデータをやり取りする命令が入っている</td>
                                            </tr>
                                        </table>
                                    </div>

                                    <p>変数(または定数)のデータ型は宣言した時点では決まっておらずデータを代入した時点で決まります。</p>
                                    <p>数値を代入すると数値型になり、文字の範囲を&quot;または&apos;で囲ったものを代入すると文字列型になります</p>
                                    <Code6 />
                                    <p>trueまたはfalseを代入すると論理型になり、newというキーワードを付けてオブジェクトの名前の後ろに()を付けたものを代入するとオブジェクト型になります。</p>
                                    <Code7 />
                                </div>

                                <div>
                                    <h2 className="text-center">定数を宣言する</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>自動販売機のプログラムでいうと投入金額とお釣りの金額は変数です。150円のジュースを買うのに100円を2枚入れると投入金額は100,200と変化し
                                        お釣りも投入金額によって変化するからです。
                                    </p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code8 />
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_for" ? (
                    <JavaScript>
                        <div className="border-4 border-pink-50 inline-block  h-2/4 m-8">
                            <div>
                                <div>
                                    <h2 className="text-center">演算子</h2>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>for</div>
                                    <p>。</p>
                                    <Code9 />
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>while</div>
                                    <p></p>
                                    <Code10 />
                                </div>

                                <div>
                                    <h2 className="text-center">オブジェクト</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code11 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Reflect</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code12 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSON</div>
                                    <p>JSONは文字列</p>
                                    <div className='flex'>
                                        <div>
                                            <h3>JSON.parse</h3>
                                            <p>JSON → Object</p>
                                            <Code13 />
                                        </div>
                                        <div>
                                            <h3>JSON.stringify</h3>
                                            <p>Object → JSON</p>
                                            <Code14 />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code12 />
                                </div>

                                <div>
                                    <h2 className="text-center">配列</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code16 />
                                </div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                <p>obj1にcがあればtrueが返される</p>
                                <p>一方、ジュースの値段は固定なので定数です。</p>
                                <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                <Code17 />
                            </div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>forEach</div>
                                <div className='flex'>
                                    <div>
                                        <h3>forEach</h3>
                                        <p>配列の1つずつの要素に対して</p>
                                        <Code13 />
                                    </div>
                                    <div>
                                        <h3>map</h3>
                                        <p>Object → JSON</p>
                                        <Code14 />
                                    </div>
                                    <div>
                                        <h3>filter</h3>
                                        <p>Object → JSON</p>
                                        <Code14 />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>reduce</div>
                                <div className='flex'>
                                    <div>
                                        <h3>forEach</h3>
                                        <p>配列の1つずつの要素に対して</p>
                                        <Code13 />
                                    </div>
                                    <div>
                                        <h3>map</h3>
                                        <p>Object → JSON</p>
                                        <Code14 />
                                    </div>
                                    <div>
                                        <h3>filter</h3>
                                        <p>Object → JSON</p>
                                        <Code14 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_function" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div>
                                    <h2 className="text-center">関数</h2>
                                    <h3>グローバルスコープ</h3>
                                    <p>windowオブジェクト</p>
                                    <div className='flex'>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code20 />
                                        </div>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code21 />
                                        </div>
                                    </div>
                                    <h3>スクリプトスコープ</h3>
                                    <p className='text-red-400'>html</p>
                                    <Code22 />
                                    <h3>関数スコープ</h3>
                                    <p>letで定義されたb=0は関数内でしか利用できない。</p>

                                    <div className='flex'>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code23 />
                                        </div>
                                        <div>
                                            <p>エラー発生</p>
                                            <p className='text-red-400'>main.js</p>
                                            <Code24 />
                                        </div>
                                    </div>

                                </div>
                                <p>インスタンス化とはnew演算子を用いてコンストラクター関数からオブジェクトを生成</p>
                                <p>このオブジェクトをインスタンスという</p>
                                <p>コンストラクター関数とはオブジェクトを生成するための関数</p>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>prototype</div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_let" ? (
                    <JavaScript>
                        <div className="border-4 border-pink-50 inline-block  h-2/4 m-8">
                            <div>
                                <div>
                                    <h2 className="text-center">変数を宣言する</h2>

                                    <p>変数はデータを保持しておく箱のようなものです。</p>
                                    <p>プログラムの中ではたくさんの箱を使うので一つ一つの箱に名前を付けて区別できるようにしておく必要があります。</p>
                                    <p>JavaScriptで変数を使うときはletというキーワードに続けて変数名を書きます。</p>
                                    <Code27 />
                                    <p>このままでは変数の中は空っぽなので使えません。</p>
                                    <p>変数にデータを入れることを代入と呼び次のように書きます。</p>
                                    <Code28 />
                                </div>

                                <div>
                                    <h2 className="text-center">定数を宣言する</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>自動販売機のプログラムでいうと投入金額とお釣りの金額は変数です。150円のジュースを買うのに100円を2枚入れると投入金額は100,200と変化し
                                        お釣りも投入金額によって変化するからです。
                                    </p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code29 />
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_operator" ? (
                    <JavaScript>
                        <div className="border-4 border-pink-50 inline-block  h-2/4 m-8">
                            <div>
                                <div>
                                    <h2 className="text-center">演算子</h2>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>new演算子</div>
                                    <p>インスタンスを作成するときにnew演算子は使われる。</p>
                                    <p>JavaScriptに限らずオブジェクト指向のプログラムはあらかじめ用意されている「オブジェクト」をそのまま扱うことはありません。</p>
                                    <p>例えば目的が違う「A」「B」という2つのプログラムがあったとします。両方のプログラムがまったく同じオブジェクトに対してデータを読み書きしてしまうと互いに干渉してしまって正しく動作しない</p>
                                    <Image
                                        src="/images/programing/javascript/new1.png"
                                        alt="01:Pythonとは？"
                                        width={700}
                                        height={300}
                                    />
                                    <p>このような場合、通常はオブジェクトの本体からコピーしたものを利用する。こうすれば両方のプログラムが干渉することは無くなる</p>
                                    <Image
                                        src="/images/programing/javascript/new2.png"
                                        alt="01:Pythonとは？"
                                        width={700}
                                        height={300}
                                    />
                                    <p>このコピーするという行為がインスタンス化であり、コピーされた「オブジェクト」をインスタンスと呼ぶ</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>


                                    <p>変数(または定数)のデータ型は宣言した時点では決まっておらずデータを代入した時点で決まります。</p>
                                    <p>数値を代入すると数値型になり、文字の範囲を&quot;または&apos;で囲ったものを代入すると文字列型になります</p>
                                    <Code31 />
                                    <p>trueまたはfalseを代入すると論理型になり、newというキーワードを付けてオブジェクトの名前の後ろに()を付けたものを代入するとオブジェクト型になります。</p>
                                    <Code32 />
                                </div>

                                <div>
                                    <h2 className="text-center">オブジェクト</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code33 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Reflect</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code34 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSON</div>
                                    <p>JSONは文字列</p>
                                    <div className='flex'>
                                        <div>
                                            <h3>JSON.parse</h3>
                                            <p>JSON → Object</p>
                                            <Code35 />
                                        </div>
                                        <div>
                                            <h3>JSON.stringify</h3>
                                            <p>Object → JSON</p>
                                            <Code36 />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code34 />
                                </div>

                                <div>
                                    <h2 className="text-center">配列</h2>

                                    <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code38 />
                                </div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                <p>obj1にcがあればtrueが返される</p>
                                <p>一方、ジュースの値段は固定なので定数です。</p>
                                <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                <Code39 />
                            </div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>forEach</div>
                                <div className='flex'>
                                    <div>
                                        <h3>forEach</h3>
                                        <p>配列の1つずつの要素に対して</p>
                                        <Code35 />
                                    </div>
                                    <div>
                                        <h3>map</h3>
                                        <p>Object → JSON</p>
                                        <Code36 />
                                    </div>
                                    <div>
                                        <h3>filter</h3>
                                        <p>Object → JSON</p>
                                        <Code36 />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>reduce</div>
                                <div className='flex'>
                                    <div>
                                        <h3>forEach</h3>
                                        <p>配列の1つずつの要素に対して</p>
                                        <Code35 />
                                    </div>
                                    <div>
                                        <h3>map</h3>
                                        <p>Object → JSON</p>
                                        <Code36 />
                                    </div>
                                    <div>
                                        <h3>filter</h3>
                                        <p>Object → JSON</p>
                                        <Code36 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_rest" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div>
                                    <h2 className="text-center">JavaScript記述</h2>
                                    <h3>GET</h3>
                                    <p></p>
                                    <div className='flex'>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code42 />
                                        </div>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code43 />
                                        </div>
                                    </div>
                                    <h3>POST</h3>
                                    <p></p>
                                    <h4>URL</h4>
                                    <Code44 />
                                    <h4>JSON</h4>
                                    <Code45 />
                                    <p className='text-red-400'>html</p>
                                    <Code45 />
                                    JavaScriptは実行する環境で使える機能が変わってくる。
                                    るときにはこのnode_modulesの中を参照して便利なパッケージを動かすことができています
                                    <h2 className="text-center">REST</h2>
                                    <p>同じURLに対して異なるHTTPメソッドを使うことでリソースに対してCRUD操作ができるように</p>
                                    <p>同じURLに対して</p>
                                    <div>
                                        <table class="table-auto border-2 border-green-400">
                                            <thead>
                                                <tr>
                                                    <th class="px-4 py-2"></th>
                                                    <th class="px-4 py-2">パス</th>
                                                    <th class="px-4 py-2">メソッド</th>
                                                    <th class="px-4 py-2">用途</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Index</td>
                                                    <td className='border px-4 py-2'>/comments</td>
                                                    <td className='border px-4 py-2'>GET</td>
                                                    <td className='border px-4 py-2'>コメント一覧を表示</td>
                                                </tr>
                                                <tr>
                                                    <td>New</td>
                                                    <td className='border px-4 py-2'>/comments/new</td>
                                                    <td className='border px-4 py-2'>GET</td>
                                                    <td className='border px-4 py-2'>新しいコメントを作成するためのフォーム</td>
                                                </tr>
                                                <tr>
                                                    <td>Create</td>
                                                    <td className='border px-4 py-2'>/comments</td>
                                                    <td className='border px-4 py-2'>POST</td>
                                                    <td className='border px-4 py-2'>新しいコメントをサーバー側で作成</td>
                                                </tr>
                                                <tr>
                                                    <td>Show</td>
                                                    <td className='border px-4 py-2'>/comments/:id</td>
                                                    <td className='border px-4 py-2'>GET</td>
                                                    <td className='border px-4 py-2'>特定のコメントを表示</td>
                                                </tr>
                                                <tr>
                                                    <td>Edit</td>
                                                    <td className='border px-4 py-2'>/comments/:id/edit</td>
                                                    <td className='border px-4 py-2'>GET</td>
                                                    <td className='border px-4 py-2'>特定のコメントを編集するためのフォーム</td>
                                                </tr>
                                                <tr>
                                                    <td>Update</td>
                                                    <td className='border px-4 py-2'>/comments/:id</td>
                                                    <td className='border px-4 py-2'>PATCH</td>
                                                    <td className='border px-4 py-2'>特定のコメントをサーバー側で更新</td>
                                                </tr>
                                                <tr>
                                                    <td>Destroy</td>
                                                    <td className='border px-4 py-2'>/comments/:id</td>
                                                    <td className='border px-4 py-2'>DELETE</td>
                                                    <td className='border px-4 py-2'>特定のコメントをサーバー側で削除</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_script" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div>
                                    <h2 className="text-center">JavaScript記述</h2>
                                    <h3>外部ファイル</h3>
                                    <div className='flex'>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code47 />
                                        </div>
                                        <div>
                                            <p className='text-red-400'>main.js</p>
                                            <Code48 />
                                        </div>
                                    </div>
                                    <h3>html</h3>
                                    <p className='text-red-400'>html</p>
                                    <Code49 />
                                    JavaScriptは実行する環境で使える機能が変わってくる。
                                    るときにはこのnode_modulesの中を参照して便利なパッケージを動かすことができています
                                </div>
                            </div>
                        </div>
                    </JavaScript>
                ) : id == "javascript_detail_trans" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div>
                                    <h2 className="text-center">(ES5とES2015+))</h2>

                                    <p>JavaScriptの言語仕様であるECMAScriptには</p>
                                    <p>ES2015+はES2015以降の総称です</p>
                                    <p>インターネットエクスプローラーなど一部のブラウザがES2015+に対応していないことから制作の段階ではES2015+の文法を使い、実際にサーバーに公開するときは全てのブラウザに対応しているES5の文法に変換するのが一般的です。</p>
                                    <p>この変換作業をトランスパイルといい、変換に使うツールをトランスパイラといいます。</p>

                                </div>

                                <div>
                                    <h2 className="text-center">(コンソール)</h2>

                                    <p>開発ツールには多くの機能が付いており、タブで画面を切り替えられるようになっています</p>
                                    <p>HTMLのツリー構造を直接見ることができるElementsタブ、ページに読み込まれているJavaScriptの任意の場所にブレークポイントと呼ばれるマークを
                                        つけて一時停止できるSourcesタブ、そしてJavaScriptのコードを直接書いて即時実行したり、JavaScriptでコンソールに出力した内容が表示される
                                        Consoleタブの3つです。
                                    </p>
                                    <p>インターネットエクスプローラーなど一部のブラウザがES2015+に対応していないことから制作の段階ではES2015+の文法を使い、実際にサーバーに公開するときは全てのブラウザに対応しているES5の文法に変換するのが一般的です。</p>
                                    <p>この変換作業をトランスパイルといい、変換に使うツールをトランスパイラといいます。</p>

                                </div>
                            </div>
                        </div>
                    </JavaScript>
                )  : id == "javascript_detail_promise" ? (
                    <JavaScript>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div>
                                    <div>
                                        <h2 className="text-center">演算子</h2>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>同期処理</div>
                                        <p>重い処理があると画面が更新されなくなる。</p>
                                        <p>javaScriptではある処理が行われていた場合にはその処理が終わってから次の処理が実行される</p>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>非同期処理</div>
                                        <p>非同期処理は一時的にメインスレッドから処理が切り離される</p>
                                        <p></p>
                                        <div>
                                            <li>setTime</li>
                                        </div>


                                        <h3>タスクキュー</h3>
                                        <p>タスクキューに入った処理が非同期で実行される</p>
                                        <Code50 />
                                        <p>trueまたはfalseを代入すると論理型になり、newというキーワードを付けてオブジェクトの名前の後ろに()を付けたものを代入するとオブジェクト型になります。</p>
                                        <Code51 />
                                    </div>

                                    <div>
                                        <h2 className="text-center">オブジェクト</h2>

                                        <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code52 />
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Reflect</div>

                                        <p>obj1にcがあればtrueが返される</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code53 />
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSON</div>
                                        <p>JSONは文字列</p>
                                        <div className='flex'>
                                            <div>
                                                <h3>JSON.parse</h3>
                                                <p>JSON → Object</p>
                                                <Code54 />
                                            </div>
                                            <div>
                                                <h3>JSON.stringify</h3>
                                                <p>Object → JSON</p>
                                                <Code55 />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                        <p>obj1にcがあればtrueが返される</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code53 />
                                    </div>

                                    <div>
                                        <h2 className="text-center">配列</h2>

                                        <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code57 />
                                    </div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code58 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>forEach</div>
                                    <div className='flex'>
                                        <div>
                                            <h3>forEach</h3>
                                            <p>配列の1つずつの要素に対して</p>
                                            <Code54 />
                                        </div>
                                        <div>
                                            <h3>map</h3>
                                            <p>Object → JSON</p>
                                            <Code55 />
                                        </div>
                                        <div>
                                            <h3>filter</h3>
                                            <p>Object → JSON</p>
                                            <Code55 />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>reduce</div>
                                    <div className='flex'>
                                        <div>
                                            <h3>forEach</h3>
                                            <p>配列の1つずつの要素に対して</p>
                                            <Code54 />
                                        </div>
                                        <div>
                                            <h3>map</h3>
                                            <p>Object → JSON</p>
                                            <Code55 />
                                        </div>
                                        <div>
                                            <h3>filter</h3>
                                            <p>Object → JSON</p>
                                            <Code55 />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </JavaScript>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Code1 = () => {
    const test = `
    npm install [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    yarn add [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    [
        [値1, 値2, 値3],
        [値1, 値2, 値3],
       ......
      ];
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    {
        type: データの種類,
        title:タイトル,
        width:横幅,
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    jspreadsheet(target, {
        data:data,
        columns: [...],
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code6 = () => {
    const test = `
    const price = 150;                //数値型のデータを代入
    const name = "りんごジュース";     //文字列型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    let change = false;                //論理型のデータを代入
    let today = new Date();     //オブジェクト型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    const 定数名=初期値;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code9 = () => {
    const test = `
    for(let i = 0; i < 10; i++) { 
        console.log(i); 
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    let change = false;                //論理型のデータを代入
    let today = new Date();     //オブジェクト型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    let obj = { 
        prop1: 'value1', 
        prop2: 'value2', 
        prop3: function() { 
            console.log('value3'); 
        }, 
        prop4: { 
            prop5: 'value5' 
        } 
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    console.log('c' in obj1); 
    console.log(Reflect.has(obj1, 'b'));
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    const obj = {a: 0, b: 1, c: 2};
    const json = JSON.stringify(obj); 
    console.log(json); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code20 = () => {
    const test = `
    alert
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    yarn add [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    [
        [値1, 値2, 値3],
        [値1, 値2, 値3],
       ......
      ];
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
    function a() { 
        let b = 0; 
        console.log(b); 
    } 
    a(); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code24 = () => {
    const test = `
    function a() { 
        let b = 0; 
    } 
    console.log(b); 
    a(); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code25 = () => {
    const test = `
    function a() { 
        let b = 0; 
        console.log(b); 
    } 
    a(); 
    if(true) { 
        let c = 1; 
         
        let d = function() { 
            console.log('d is called'); 
        } 
    } 
    d(); 
    console.log(c);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code26 = () => {
    const test = `
    function a() { 
        let b = 0; 
        console.log(b); 
    } 
    a(); 
    if(true) { 
        let c = 1; 
         
        let d = function() { 
            console.log('d is called'); 
        } 
    } 
    d(); 
    console.log(c);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code27 = () => {
    const test = `
    let 変数名;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code28 = () => {
    const test = `
    let 変数名=初期値;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code29 = () => {
    const test = `
    const 定数名=初期値;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code31 = () => {
    const test = `
    const price = 150;                //数値型のデータを代入
    const name = "りんごジュース";     //文字列型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code32 = () => {
    const test = `
    let change = false;                //論理型のデータを代入
    let today = new Date();     //オブジェクト型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code33 = () => {
    const test = `
    let obj = { 
        prop1: 'value1', 
        prop2: 'value2', 
        prop3: function() { 
            console.log('value3'); 
        }, 
        prop4: { 
            prop5: 'value5' 
        } 
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code34 = () => {
    const test = `
    console.log('c' in obj1); 
    console.log(Reflect.has(obj1, 'b'));
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code35 = () => {
    const test = `
    const obj = {a: 0, b: 1, c: 2};
    const json = JSON.stringify(obj); 
    console.log(json); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code36 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code37 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code38 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code39 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code40 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code41 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code42 = () => {
    const test = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Document</title> 
    </head> 
    <body> 
        <script src="main.js"></script> 
    </body> 
    </html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code43 = () => {
    const test = `
    yarn add [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code44 = () => {
    const test = `
    app.use(express.urlencoded({extended:true})) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code45 = () => {
    const test = `
    app.use(express.json())
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code46 = () => {
    const test = `
    jspreadsheet(target, {
        data:data,
        columns: [...],
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code47 = () => {
    const test = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>Document</title> 
    </head> 
    <body> 
        <script src="main.js"></script> 
    </body> 
    </html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code48 = () => {
    const test = `
    yarn add [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code49 = () => {
    const test = `
    [
        [値1, 値2, 値3],
        [値1, 値2, 値3],
       ......
      ];
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code50 = () => {
    const test = `
    const price = 150;                //数値型のデータを代入
    const name = "りんごジュース";     //文字列型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code51 = () => {
    const test = `
    let change = false;                //論理型のデータを代入
    let today = new Date();     //オブジェクト型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code52 = () => {
    const test = `
    let obj = { 
        prop1: 'value1', 
        prop2: 'value2', 
        prop3: function() { 
            console.log('value3'); 
        }, 
        prop4: { 
            prop5: 'value5' 
        } 
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code53 = () => {
    const test = `
    console.log('c' in obj1); 
    console.log(Reflect.has(obj1, 'b'));
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code54 = () => {
    const test = `
    const obj = {a: 0, b: 1, c: 2};
    const json = JSON.stringify(obj); 
    console.log(json); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code55 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code56 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code57 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code58 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code59 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code60 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

