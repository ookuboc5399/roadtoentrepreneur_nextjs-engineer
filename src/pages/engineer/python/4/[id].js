import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Python } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "python_detail" ? (
                    <Python>

                        <div>

                            <p>Pythonは、AI、データサイエンス、Webアプリケーション、3Dモデリング、数式処理など幅広い分野で使われているプログラミング言語で、読みやすく簡単に効率の良いプログラムを書くことが可能です</p>
                            <li>「読みやすさ」「分かりやすさ」が重視された言語設計</li>
                            <li>豊富でかつ優れた拡張要素</li>
                            <p>Pythonには「バージョン2系統」と「バージョン3系」の2種類があります。</p>
                            <p>2種類ある理由は「バージョン3.0」において言語仕様の大幅な整理と改修が行われたためバージョン2のプログラムがそのままでは動かなくなてしまったためです。</p>
                            <p>そうした理由から古い言語仕様でないと困る人たちのためにバージョン2系の「バージョン2.7.13」も未だ正式版として残っています</p>

                            <p>プログラミングの実行方式は作成されたコードが実行前にコンパイルされるかされないかで2分されます</p>
                            <p>事前にコンパイルが必要な方式のことをコンパイル方式といい、コンパイルが必要ない方式のことをインタプリタ方式</p>
                            <p>コンパイルは私たちが書いたコードを機械が理解し実行できる内容に変換する作業のことです。</p>

                            <p>このコンパイルをインタプリタ方式ではコードの実行時に逐次おこなわれる</p>
                            <p>スクリプト言語とは「コードの理解がしやすい言語」を指す</p>
                            <p>スクリプト言語の特徴は事前コンパイルが必要ないため、簡単に実行結果を確認できる</p>
                            <p>コンパイルが必要ないということはコードを書く、実行して確認する、修正案を考えるというサイクルを素早く回すことができ迅速な開発が可能となります。</p>
                            <p>一方実行時に逐次コンパイルするので実行速度が遅くなる</p>
                            <p>Pythonはこのスクリプト言語にあたります</p>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Pythonの強み</div>
                        <p>一般的にその出力先として標準出力が使われます。この標準出力に出力されたデータはディスプレイに表示されたり、テキストファイルに書き出されたり、他のプログラムに利用されたり</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>PrintでHello World</div>
                        <p>標準出力に出力するとはある計算をするプログラムがあったときに私たちが答えを知るためにプログラムは出力する必要があります</p>
                        <p>Pyhonではprint関数を使うと標準出力に出力することができます</p>
                        <p>ダブルクォーテーションやシングルクォーテーションで囲んで表記する</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code1 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code3 />
                            </div>
                        </div>
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Printで複数の文字列を出力</div>
                        <p>print 関数を使うとき、カンマ区切りで複数の文字列を指定すると、それらの文字列が半角スペース区切りで出力される</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code2 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code3 />
                            </div>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Printで複数の文字列を出力</div>
                        <p>print 関数を使うとデフォルトで末尾に改行が入る</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code4 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code5 />
                            </div>
                        </div>
                        <p>end= で文字列を指定することで末尾を変更できる</p>
                        <p>end=&quot;&quot;は末尾に何も出力しない</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code6 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code7 />
                            </div>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>コメント</div>
                        <p>コメントとはプログラミングの処理に影響を及ぼさない。コードの意図を説明したり、メモを残したり、コードを実行処理から除外したりしたいときに使います</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code8 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code9 />
                            </div>
                        </div>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>数値の型</div>
                        <p>Pythonでは様々なデータに型が用意されています。整数には整数型が浮動小数点数には浮動小数点数型が</p>
                        <p>1と1.0は別の型として区別される</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code10 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code11 />
                            </div>
                        </div>
                        <p>int関数は小数点以下を切り捨てて整数としている</p>
                        <p>end=&quot;&quot;は末尾に何も出力しない</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code12 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code13 />
                            </div>
                        </div>


                    </Python >
                ) : id == "python_detail_basic" ? (
                    <Python>

                        <div>
                            <h2 className='text-center'>mutableとimmutable</h2>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>mutable</h3>
                        <p>変更可能なオブジェクト</p>
                        <li>list</li>
                        <li>dist</li>
                        <li>set</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code14 />
                            </div>
                            <p>オブジェクトの参照先が渡される</p>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code15 />
                            </div>
                        </div>
                        <h3>immutable </h3>
                        <p>変更不可能なオブジェクト</p>
                        <li>integer</li>
                        <li>float</li>
                        <li>bool</li>
                        <li>string</li>
                        <li>tuple</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code16 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                                <Code17 />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center'>mutableとimmutable</h2>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>mutable</h3>
                        <p>変更可能なオブジェクト</p>
                        <li>list</li>
                        <li>dist</li>
                        <li>set</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code14 />
                            </div>
                            <p>オブジェクトの参照先が渡される</p>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code15 />
                            </div>
                        </div>
                        <h3>immutable </h3>
                        <p>変更不可能なオブジェクト</p>
                        <li>integer</li>
                        <li>float</li>
                        <li>bool</li>
                        <li>string</li>
                        <li>tuple</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code29 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                                <Code30 />
                            </div>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>演算子とはなにか</div>
                        <p></p>
                        <h3>足し算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code27 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code28 />
                            </div>
                        </div>
                        <h3>引き算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code29 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code30 />
                            </div>
                        </div>
                        <h3>掛け算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code31 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code32 />
                            </div>
                        </div>
                        <h3>割り算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>余りを求める</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>べき乗を求める</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>数値演算の優先順位</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>絶対値</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code39 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code40 />
                            </div>
                        </div>
                        <h3></h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code35 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code36 />
                            </div>
                        </div>
                        <h3></h3>
                        <p>同じメモリの場所ではないのでa is b はFalseになる</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code37 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code38 />
                            </div>
                        </div>
                        <h3></h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code35 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code36 />
                            </div>
                        </div>
                    </Python >
                ) : id == "python_detail_error" ? (
                    <Python>

                        <div>
                            <h2 className='text-center'>error</h2>
                            <p>が可能です</p>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>足し算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code41 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code42 />
                            </div>
                        </div>
                        <h3>左のパターンを0回以上繰り返す </h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code43 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code44 />
                            </div>
                        </div>
                        <h3>左のパターンを1回以上繰り返す </h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code45 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code46 />
                            </div>
                        </div>
                        <h3>or</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code47 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code48 />
                            </div>
                        </div>
                        <h3>最後の文字 </h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code49 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code50 />
                            </div>
                        </div>
                        <h3>任意の一文字 </h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code51 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code52 />
                            </div>
                        </div>
                        <h3></h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code53 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code54 />
                            </div>
                        </div>
                        <h3>余りを求める</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code60 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code61 />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center'>正規表現</h2>
                            <p>が可能です</p>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>足し算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code41 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code42 />
                            </div>
                        </div>

                    </Python >
                ) : id == "python_detail_function" ? (
                    <Python>
                        <div>
                            <p>関数とはあるまとまった処理を実行するための仕組みです。</p>
                            <p></p>処理があらかじめ1つにまとめられているため1つの命令文を記述するだけで目的の処理を実行できるのが利点です
                            <p></p>printは一般的には「print関数」と呼ばれ数値や文字を出力するという処理の関数になります。
                            <p></p>

                            <p></p>引数とは関数の処理の内容を細かく設定するための仕組みです
                            <p></p>指定する引数によって関数の実行結果を自由に変えることが可能となります。
                            <p></p>

                            <p></p>戻り値とは関数の実行結果の値を返す仕組みです。
                            <p></p>

                            <p></p>ライブラリの関数は使う前に読み込むことが必要となります。読み込むためのコードを先に別途書かなければなりません。
                            <p></p>一方print関数のような関数は読み込む必要はなく、いきなり使うことができます
                            <p></p>ライブラリの読み込みは「モジュール」と呼ばれる単位で行うよう決められています。
                            <Code62 />
                            <p></p>これで読み込むことができそのライブラリの各種関数が使えるようになります。
                            <Code63 />
                            <p></p>モジュール名のあとに「.」を挟み、目的の関数名を記述
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                            <p>関数に戻り値がない場合はNoneが返ってくる。</p>

                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>map関数</div>
                            <p>map関数を使うことによってfor文などの繰り返し処理を使わずとも全ての要素にアクセスすることができる。</p>
                            <Code64 />
                            <div class="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                                <span class="font-medium">イテラブル</span> イテラブルとはlistやrange関数のようなfor文のinの後に書けるオブジェクト。イテラブルのすべての要素に第一引数で設定した関数を適応させることができる。
                            </div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スコープ</div>
                            <p></p>
                            <div className='m-6'>
                                <p>ローカル変数</p>
                                <Code65 />
                            </div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>関数のネスト</div>
                            <p>関数の中で関数を定義。</p>
                            <p>outerで定義された変数はinnerで。</p>
                            <div className='flex'>
                                <div className='m-6'>
                                    <p>ローカル変数</p>
                                    <Code66 />
                                </div>
                            </div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ラムダ関数</div>
                            <p>関数の中で関数を定義。</p>
                            <p>outerで定義された変数はinnerで。</p>
                            <div className='flex'>
                                <div className='m-6'>
                                    <p>通常関数</p>
                                    <Code67 />
                                </div>
                                <div className='m-6'>
                                    <p>ラムダ関数</p>
                                    <Code68 />
                                </div>
                            </div>
                        </div>
                    </Python >
                ) : id == "python_detail_jupyter" ? (
                    <Python>
                        <div>
                            <p>Jupyter Notebookは記述したプログラムは随時自動で保存されます</p>
                            <p></p>
                            <p></p>print(&apos;こんにちは&apos;)の文字列の部分「&apos;こんにちは&apos;」のみ赤色で表示されています。
                            <p></p>これはJupyter Notebookの機能によるものであり「&apos;」で囲まれた文字列の部分は自動で赤色になります

                            <p></p>この機能によってコードがより読みやすく編集しやすくなります。
                            <p></p>
                            <p></p>Pythonでは大文字と小文字が厳格に区別されるので小文字で書くべき箇所に大文字を使ってしまうとエラーになります

                            <p></p>&lt;div&gt;ではstyle属性にwidthとheightを使って大きさを指定します
                            <p></p>
                            <Code71 />
                            <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </Python >
                ) : id == "python_detail_fx" ? (
                    <Python>
                        <div>
                            <p>Pythonを使って次の4つのETFの株価を取得しチャートを表示</p>
                            <ul className='list-disc'>
                                <li> Small Growth：VBK</li>
                                <li>Small Value：VBR</li>
                                <li>Large Growth：VUG</li>
                                <li>Large Value：VTV</li>
                                <li>S&P500：^GSPC</li>
                                <li>NASDAQ：^IXIC</li>
                                <li>10年国債：^TNX</li>
                            </ul>

                            <p>Pythonのyfinanceモジュールを使い</p>
                            <Code72 />
                            <Code74 />
                            <p>上記で指定したティッカー、開始、終了のパラメータからデータをダウンロードしています。</p>
                            <Code75 />
                            <p></p>

                            <h3>グラフ化した時に分かりやすいようにカラム名を変更</h3>
                            <Code76 />
                            <p>下記のコードでグラフ化をしているのですが、「subplots=True」を指定すると、グラフが複数に分かれて表示されます。</p>
                            <Code77 />
                            <p>このパラメータは凄く便利で、たとえば、
                                subplots=True,layout=(2, 2)の様に（行、列）を指定すれば、
                                下記の様に複数のチャートを並べる事も出来ます。</p>
                            <Code78 />
                            <Code79 />
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                        </div>
                    </Python >
                ) : id == "python_detail_industry" ? (
                    <Python>
                                                   <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p></p>
                                    <Code72 />
                                    <h3>業種別の株価を表示する関数</h3>
                                    <p></p>
                                    <Code80 />


                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                    </Python >
                ) : id == "python_detail_settlement" ? (
                    <Python>
                            
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>edgarのデータを取得できるpackageのインストール</p>
                                    <Code80 />
                                 
                                    <h3>edgarから決算を情報を取得して、html表示する関数</h3>
                                    <p></p>
                                    <Code81 />

                                    <p>取得したい会社のticker、決算資料名、いつからのデータを取得するかdateを設定してください</p>

                                    <Code82 />
                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                    </Python >
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
  print("Hello World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
  print("Hello", "World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
  Hello World
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
  print("Hello")
  print("World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code5 = () => {
    const test = `
  Hello
  World
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
  print("Hello", end="")
  print("World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
  HelloWorld
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
  # print("Hello World") この行は実行されない
  print("Hello paiza")  # "Hello paiza" を出力
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
  print("Hello paiza") 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code10 = () => {
    const test = `
  print(1) 
  print(1.0) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
  1
  1.0 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
  print(int(3.14)) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code13 = () => {
    const test = `
  3
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code14 = () => {
    const test = `
  print("Hello World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
  list_a = [1,2,3]
  list_b = 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
  print(re.search('a*b','aaaaab')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
  num_a = 4
  num_b = add_num(num_a, num=3)

  def add_num(param, num=0):
      param += num
      return param 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code18 = () => {
    const test = `
  print(re.search('a+b','ab')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
  print("Hello", end="")
  print("World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code20 = () => {
    const test = `
  print(re.search('abc|012','012')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
  # print("Hello World") この行は実行されない
  print("Hello paiza")  # "Hello paiza" を出力
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
  print(re.search('[0-9]{2}$','2021/3/1')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code23 = () => {
    const test = `
  print(1) 
  print(1.0) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code24 = () => {
    const test = `
  print(re.search('h\.t','h.t'))
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code25 = () => {
    const test = `
  print(int(3.14)) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code26 = () => {
    const test = `
  print(re.search('^[0-9]{4}','21/3/31')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code27 = () => {
    const test = `
  print(6+2)
  print(3.14+2.71)
  print(8+3.13)
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code28 = () => {
    const test = `
  8
  5.85
  11.12999999999
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code29 = () => {
    const test = `
  print(6-2)
  print(2-6)

  print(3.8-1.3)
  print(1.5-3.3)

  print(8-3.13)
  print(3.19-8)
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code30 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code31 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code32 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code33 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code34 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code35 = () => {
    const test = `
  3 == 4
  3 != 4
  True or False
  True and False
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code36 = () => {
    const test = `
  False
  True
  False
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code37 = () => {
    const test = `
  a = [1,2]
  b = [1,2]

  a == b
  a is b
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code38 = () => {
    const test = `
  True
  False
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code39 = () => {
    const test = `
  abs
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code40 = () => {
    const test = `
  True
  False
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code41 = () => {
    const test = `
  print("Hello World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code42 = () => {
    const test = `
  print("Hello", "World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code43 = () => {
    const test = `
  print(re.search('a*b','aaaaab')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code44 = () => {
    const test = `
  print(re.search('a+b','ab')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code45 = () => {
    const test = `
  print(re.search('a+b','ab')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code46 = () => {
    const test = `
  print("Hello", end="")
  print("World")
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code47 = () => {
    const test = `
  print(re.search('abc|012','012')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code48 = () => {
    const test = `
  # print("Hello World") この行は実行されない
  print("Hello paiza")  # "Hello paiza" を出力
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code49 = () => {
    const test = `
  print(re.search('[0-9]{2}$','2021/3/1')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code50 = () => {
    const test = `
  print(1) 
  print(1.0) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code51 = () => {
    const test = `
  print(re.search('h\.t','h.t'))
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code52 = () => {
    const test = `
  print(int(3.14)) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code53 = () => {
    const test = `
  print(re.search('^[0-9]{4}','21/3/31')) 
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code54 = () => {
    const test = `
  print(6+2)
  print(3.14+2.71)
  print(8+3.13)
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code55 = () => {
    const test = `
  8
  5.85
  11.12999999999
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code56 = () => {
    const test = `
  print(6-2)
  print(2-6)

  print(3.8-1.3)
  print(1.5-3.3)

  print(8-3.13)
  print(3.19-8)
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code57 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code58 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code59 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code60 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code61 = () => {
    const test = `
  4
  -4
  2.5
  -1.7999999999999998
  4.87
  -4.8100000000000005
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code62 = () => {
    const test = `
              import モジュール名
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code63 = () => {
    const test = `
              モジュール名.関数名
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code64 = () => {
    const test = `
              map(関数、イテラブル)
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code65 = () => {
    const test = `
              # グローバル変数
              age = 30

              def print_age():
              age = 20 #ローカル変数
              print(f"I'm{age}years old")
              print_age()
              print(age)
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code66 = () => {
    const test = `
              map(関数、イテラブル)
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code67 = () => {
    const test = `
  def func(a):
      return a+1

  func(3)
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code68 = () => {
    const test = `
  x = lambda a: a+1

  x(3)
              `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code69 = () => {
    const test = `
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code70 = () => {
    const test = `
  <div style="width: 横幅px; height: 高さpx;">
    <canvas width="横幅" height="高さ"></canvas>
  </div>
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code71 = () => {
    const test = `
  %%html
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
  
  <h3>Chart.js sample.</h3>
  <div style="width:400px; height: 400px;">
    <canvas id="chart" width="400" height="400"></canvas>
  </div>
  <script>
  const ctx = document.querySelector('#chart');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
      datasets: [{
        label: '支店名',
        data: [9630, 8520, 7410, 4560, 3690],
      }]
    },
  });
  </script>
  `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code72 = () => {
    const test = `
    pip install yfinance
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code73 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code74 = () => {
    const test = `
    #対象ティッカーシンボルのデータを取得
    codelist = ["VUG","VTV","VBK","VBR","^TNX"]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code75 = () => {
    const test = `
    data = yf.download(codelist, start=start, end=end)["Adj Close"]
    df_all=(data.pct_change(60))#期間の変化率
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code76 = () => {
    const test = `
    df_all.rename(columns={'VBR':'Small Value','VTV':'Large Value',
    'VBK':'Small Growth','VUG':'Large Growth','^TNX':'10 Years Yield'},inplace=True)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code77 = () => {
    const test = `
    df_all2.plot(figsize=(16,9),fontsize=20,linewidth=2,alpha=0.5,subplots=True,grid=True)
    plt.xlabel(xlabel="")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code78 = () => {
    const test = `
    df_all.plot(figsize=(16,9),fontsize=10,linewidth=5,alpha=0.5,
    subplots=True,layout=(2, 2))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code79 = () => {
    const test = `
import yfinance as yf
import datetime
import matplotlib.pyplot as plt
%matplotlib inline

start = datetime.date(2020,3,23)#コロナ底
end = datetime.date.today()

codelist = ["VUG","VTV","VBK","VBR"]

data = yf.download(codelist, start=start, end=end)["Adj Close"]
df_all=(1+data.pct_change()).cumprod()
df_all.rename(columns={'VBR':'Small Value','VTV':'Large Value','VBK':'Small Growth','VUG':'Large Growth'},inplace=True)

df_all.plot(figsize=(16,9),fontsize=30,linewidth=5,alpha=0.5)
plt.legend(fontsize=18)  

x1 = "2020-10-29" #転換点１
plt.axvline(x1,color='gray',linewidth=2 )
x1 = "2021-02-13" #転換点２
plt.axvline(x1,color='gray',linewidth=2 )
x1 = "2021-03-29" #転換点３
plt.axvline(x1,color='gray',linewidth=2 )

plt.title("Growth vs Value  ,  Small vs Large",color='gray', fontsize=50)
plt.show()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code80 = () => {
    const test = `
    import datetime
import yfinanceas yf
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

#開始・終了日の設定
start = datetime.date.today() - datetime.timedelta(days=100)
end = datetime.date.today()

#対象ティッカーシンボルのデータを取得
codelist = ["VDE","VFH","VAW","VIS","IYR","VOX","VDC","VCR","VHT","VGT","VPU","^TNX"]
data = yf.download(codelist, start=start, end=end)["Adj Close"]
df_all=(1+data.pct_change()).cumprod()

#'VDE'：'エネルギー','VFH'：'金融','VAW'：'素材','VIS'：'資本財','IYR'：'不動産',
#'VOX'：'通信','VDC'：'生活必需品','VCR'：'一般消費財',
#'VHT'：'ヘルスケア','VGT'：'情報通信','VPU'：'公共事業'

df_all.rename(columns={'VDE':'Energy',
                      'VFH':'Finance',
                      'VAW':'Material',
                      'VIS':'Industrials',
                      'IYR':'Real Estate',
                      'VOX':'Telecommunication Services',
                      'VDC':'Consumer Staples',
                      'VCR':'Consumer Discretionary',
                      'VHT':'Health Care',
                      'VGT':'Information Technology',
                      'VPU':'Utilities',
                      '^TNX':'10 Year Treasury'},inplace=True)
#グラフ化 3パターン
df_all.plot(figsize=(16,9),fontsize=10,linewidth=2,alpha=0.5,subplots=True,layout=(4,4),grid=True)
df_all.iloc[:,[0,1,2,3,4,5,6,7,8,9,10]].plot(figsize=(16,9),fontsize=10,linewidth=2,alpha=0.5,grid=True)
df_all.plot(figsize=(9,20),fontsize=10,linewidth=2,alpha=0.5,subplots=True,grid=True)
plt.show()

#ここまで
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code81 = () => {
    const test = `
    pip install sec-edgar-downloader
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code82 = () => {
    const test = `
    import pandas as pd
    from IPython.display import display, HTML
    from sec_edgar_downloader import Downloader
    import glob
    
    
    #　20201208更新　⭐️これ追加。
    from bs4 import BeautifulSoup

    #エドガーのデータを格納するためのファイルパスを設定
    save_path = "/Users/XXXXXX/Desktop/edgar"
    
    #取得したい会社のticker、決算資料名、いつからのデータを取得するかdateを引数とする
    
    def get_edgar(ticker,file,after_date):
    
       dl = Downloader(save_path)
       
       #取得実行
       file_count = dl.get(file, ticker ,after_date=after_date)
       
       if file_count == 0:
           print('取得ファイルなし')
           return 
    
       #最新決算を取得(⭐️txtデータのみを取得、20201208更新)
       #print(save_path + "/edgar/sec_edgar_filings/" + ticker +"/8-K/*.txt")
       kessan_list = glob.glob(save_path + "/sec_edgar_filings/" + ticker +"/"+file+"/"+"*")
       #ファイルをソート
       kessan_list.sort()
       #最新の決算情報を取得
       ticker_file_path = kessan_list[-1]
       
       #一旦開いてゴミを削除
       #-----------------------------------------------------------
       with open(ticker_file_path) as f:
           txt = f.read()
    
           if file == 'S-1':
               txt = txt.split('XBRL INSTANCE DOCUMENT')[0]
                      
           txt = txt.split('XBRL TAXONOMY EXTENSION SCHEMA DOCUMENT')[0]  
           #txt = txt.split('@(" @("')[0]    
           txt = txt.split('EXCEL')[0]        
       #-----------------------------------------------------------
       
       # HTMLで保存し直す　20201208更新　⭐️これ追加。
       #---------------------------------------------------
       # txtから BeautifulSoup オブジェクトを作る
       soup = BeautifulSoup(txt, 'html.parser')
       #print(soup.prettify()) 
    
       #HTMLを整形
       soup_txt = soup.prettify()
       #保存するファイル名作成
       path_w = ticker_file_path + '.html'
    
       #HTMLファイル出力
       with open(path_w, mode='w') as f:
           f.write(soup_txt)
       #----------------------------------------------------
       
       # HTMLを返す
       return display(HTML(txt))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code83 = () => {
    const test = `
    get_edgar('ZM',"10-Q",20201001)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

