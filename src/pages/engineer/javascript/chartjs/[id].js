import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { JavaScript_chartjs } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "chartjs_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p>チャートを表示するJavaScriptライブラリは多数ありますが、中でも使いやすさとビジュアルの美しさで広く利用されているのが「Chart.js」です</p>
                                            <p></p>Chart.jsはオープンソースで公開されているJavaScriptのチャート作成ライブラリです
                                            <p></p>これは以下のサイトで情報公開されています
                                            <p></p>https://www.chartjs.org/
                                            <Code1 />
                                            <p></p>これで、Chart.jsのコードが読み込まれ利用できるようになります
                                            <p></p>&lt;div&gt;などで表示エリアを指定するための要素を用意しておき、その中に&lt;canvas&gt;という要素を用意します
                                            <p></p>基本コードは以下のようになります
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
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs2_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>
                                            <p></p>

                                            <Code4 />
                                            <p></p>これを実行すると「2019年」、「2020年」、「2021年」という3つのデータセットがチャートに表示されます
                                            <p></p>
                                            <p></p>

                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs3_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>複数のデータセットを表示したときにグラフが同じようなグレーで表示されてしまうとそれぞれのデータセットがどれなのか分かりにくくなってしまいます。
                                            <p></p>
                                            <div>
                                                <table class="table-auto border-2 border-green-400">
                                                    <tbody>
                                                        <tr>
                                                            <td>backgroundColor</td>
                                                            <td className='border px-4 py-2'>バーを塗りつぶす背景色を指定します</td>
                                                        </tr>
                                                        <tr>
                                                            <td>borderColor</td>
                                                            <td>バーのボーダー(輪郭線)の色を指定します</td>
                                                        </tr>
                                                        <tr>
                                                            <td>borderWidth</td>
                                                            <td>ボーダーに線の太さを数値で指定します</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p></p>borderColorとborderWidthはバーにボーダー(輪郭線)を表示したい際に使います。
                                            <p></p>単純にバー全体を指定のカラーで塗りつぶすだけならbackgroundColorに表示されます
                                            <p></p>backgroundColorとborderColorの色はスタイルシートのカラー指定と同じく"red"や"blue"のように色名を使った方法、<br />"#ff00aa"というような16進数のテキスト、"rgba(1,1,0,0.1)"というrgbaを使った指定などが利用できます
                                            <Code5 />
                                            <p></p>複数のカラーを配列で用意することで表示されるバー1つ1つに値を設定することができるようになります
                                            <p></p>
                                            <p></p>
                                            <Code6 />

                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs4_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>データセットの値を変更することで2019年のデータが表示されており、必要に応じて2020年、2021年と変わっていく操作ができます。
                                            <p></p>「Update」ボタンをクリックすると2019年から2020へ、さらに2021年へと表示が変わります
                                            <p></p>backgroundColorとborderColorの色はスタイルシートのカラー指定と同じく"red"や"blue"のように色名を使った方法、<br />"#ff00aa"というような16進数のテキスト、"rgba(1,1,0,0.1)"というrgbaを使った指定などが利用できます
                                            <Code7 />
                                            <p></p>複数のカラーを配列で用意することで表示されるバー1つ1つに値を設定することができるようになります
                                            <p></p>
                                            <p></p>
                                            <div class="w-full md:w-1/2 xl:w-1/2 p-6">

                                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                        <h2 class="font-bold uppercase text-gray-600">三項演算子</h2>
                                                    </div>
                                                    <div class="p-2 text-center">
                                                        条件式 ? trueの値: falseの値
                                                    </div>
                                                    最初に条件となる式を用意しておきその結果がtrueの場合は?の後にある値をfalseの場合は:の後にある値を使う
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs5_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="m-4 flex">
                                        <div className="flex-auto">
                                            <Link href="/future_world/AI/ai">
                                                <div className="text-4xl">
                                                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex-auto">
                                            <Link href="/future_world/AI/ai">
                                                <div className="text-4xl">
                                                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>チャートのタイトルや凡例といったものはChartオブジェクトの「option」というところにプロパティとして用意されています。
                                            <p></p>このoptions内にはさらに「plugins」というプロパティが用意されています
                                            <p></p>プラグインに「legend」という項目を用意し、設定内容をオブジェクトにまとめたものを指定すれば凡例を表示させることができます
                                            <div class="w-full p-6">

                                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                        <h2 class=" text-gray-600">legend</h2>
                                                    </div>
                                                    <div class="p-2">
                                                        <table class="w-full p-5 text-gray-700">
                                                            <tbody>
                                                                <tr>
                                                                    <td>display</td>
                                                                    <td>チャートに表示するかどうかを真偽値で指定します。trueにすれば凡例が表示されます</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>position</td>
                                                                    <td>表示場所を指定するものです。「top」「bottom」「left」「right」でチャートの上下左右のどこに表示するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>align</td>
                                                                    <td>表示位置を指定するものです。「start」「center」「end」で開始位置(上または左)、中央、終了位置(下または右)のどこに配置するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>labels</td>
                                                                    <td>ラベルのテキストの表示に関する指定をします。これは設定をオブジェクトとして用意します。このオブジェクトにはfontやcolorなどでラベルのテキスト表示の設定を用意できます</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            </div>
                                            <Code9 />
                                            <p></p>これを実行するとチャート上部の左側に赤いテキストでタイトルとサブタイトルが表示されます。
                                            <p></p>またチャート右上には凡例が表示されます
                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs6_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="m-4 flex">
                                        <div className="flex-auto">
                                            <Link href="/future_world/AI/ai">
                                                <div className="text-4xl">
                                                    <FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: 'red' }} />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex-auto">
                                            <Link href="/future_world/AI/ai">
                                                <div className="text-4xl">
                                                    <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: '' }} />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>チャートのタイトルや凡例といったものはChartオブジェクトの「option」というところにプロパティとして用意されています。
                                            <p></p>このoptions内にはさらに「plugins」というプロパティが用意されています
                                            <p></p>プラグインに「legend」という項目を用意し、設定内容をオブジェクトにまとめたものを指定すれば凡例を表示させることができます
                                            <div class="w-full p-6">

                                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                        <h2 class=" text-gray-600">legend</h2>
                                                    </div>
                                                    <div class="p-2">
                                                        <table class="w-full p-5 text-gray-700">
                                                            <tbody>
                                                                <tr>
                                                                    <td>display</td>
                                                                    <td>チャートに表示するかどうかを真偽値で指定します。trueにすれば凡例が表示されます</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>position</td>
                                                                    <td>表示場所を指定するものです。「top」「bottom」「left」「right」でチャートの上下左右のどこに表示するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>align</td>
                                                                    <td>表示位置を指定するものです。「start」「center」「end」で開始位置(上または左)、中央、終了位置(下または右)のどこに配置するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>labels</td>
                                                                    <td>ラベルのテキストの表示に関する指定をします。これは設定をオブジェクトとして用意します。このオブジェクトにはfontやcolorなどでラベルのテキスト表示の設定を用意できます</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            </div>
                                            <Code11 />
                                            <p></p>これを実行するとチャート上部の左側に赤いテキストでタイトルとサブタイトルが表示されます。
                                            <p></p>またチャート右上には凡例が表示されます
                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs7_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>チャートのタイトルや凡例といったものはChartオブジェクトの「option」というところにプロパティとして用意されています。
                                            <p></p>このoptions内にはさらに「plugins」というプロパティが用意されています
                                            <p></p>プラグインに「legend」という項目を用意し、設定内容をオブジェクトにまとめたものを指定すれば凡例を表示させることができます
                                            <div class="w-full p-6">

                                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                        <h2 class=" text-gray-600">legend</h2>
                                                    </div>
                                                    <div class="p-2">
                                                        <table class="w-full p-5 text-gray-700">
                                                            <tbody>
                                                                <tr>
                                                                    <td>display</td>
                                                                    <td>チャートに表示するかどうかを真偽値で指定します。trueにすれば凡例が表示されます</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>position</td>
                                                                    <td>表示場所を指定するものです。「top」「bottom」「left」「right」でチャートの上下左右のどこに表示するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>align</td>
                                                                    <td>表示位置を指定するものです。「start」「center」「end」で開始位置(上または左)、中央、終了位置(下または右)のどこに配置するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>labels</td>
                                                                    <td>ラベルのテキストの表示に関する指定をします。これは設定をオブジェクトとして用意します。このオブジェクトにはfontやcolorなどでラベルのテキスト表示の設定を用意できます</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            </div>
                                            <Code13 />
                                            <p></p>これを実行するとチャート上部の左側に赤いテキストでタイトルとサブタイトルが表示されます。
                                            <p></p>またチャート右上には凡例が表示されます
                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </JavaScript_chartjs>
                ) : id == "chartjs8_detail" ? (
                    <JavaScript_chartjs>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div>Chart.jsでチャートを表示する</div>
                                        <div>
                                            <p></p>チャートのタイトルや凡例といったものはChartオブジェクトの「option」というところにプロパティとして用意されています。
                                            <p></p>このoptions内にはさらに「plugins」というプロパティが用意されています
                                            <p></p>プラグインに「legend」という項目を用意し、設定内容をオブジェクトにまとめたものを指定すれば凡例を表示させることができます
                                            <div class="w-full p-6">

                                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                        <h2 class=" text-gray-600">legend</h2>
                                                    </div>
                                                    <div class="p-2">
                                                        <table class="w-full p-5 text-gray-700">
                                                            <tbody>
                                                                <tr>
                                                                    <td>display</td>
                                                                    <td>チャートに表示するかどうかを真偽値で指定します。trueにすれば凡例が表示されます</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>position</td>
                                                                    <td>表示場所を指定するものです。「top」「bottom」「left」「right」でチャートの上下左右のどこに表示するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>align</td>
                                                                    <td>表示位置を指定するものです。「start」「center」「end」で開始位置(上または左)、中央、終了位置(下または右)のどこに配置するかを指定します</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>labels</td>
                                                                    <td>ラベルのテキストの表示に関する指定をします。これは設定をオブジェクトとして用意します。このオブジェクトにはfontやcolorなどでラベルのテキスト表示の設定を用意できます</td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            </div>
                                            <Code15 />
                                            <p></p>これを実行するとチャート上部の左側に赤いテキストでタイトルとサブタイトルが表示されます。
                                            <p></p>またチャート右上には凡例が表示されます
                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </JavaScript_chartjs>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Code1 = () => {
    const test = `
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
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

const Code3 = () => {
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



const Code4 = () => {
    const test = `
    %%html
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>

<h3>Chart.js sample.</h3>
<div style="width:600px; height: 400px;">
  <canvas id="chart" width="600" height="400"></canvas>
</div>
<script>
const ctx = document.querySelector('#chart');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
    datasets: [{
      label: '2019年',
      data: [7890, 6780, 5670, 3450, 2340],
    },
    {
      label: '2020年',
      data: [9630, 8520, 7410, 4560, 3690],
    },
    {
      label: '2021年',
      data: [12300, 9870, 8520, 6540, 4320],
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



const Code5 = () => {
    const test = `
    %%html
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>

<h3>Chart.js sample.</h3>
<div style="width:600px; height: 400px;">
  <canvas id="chart" width="600" height="400"></canvas>
</div>
<script>
const ctx = document.querySelector('#chart');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
    datasets: [{
      label: '2019年',
      data: [7890, 6780, 5670, 3450, 2340],
      backgroundColor:['#f003'],
      borderColor:['blue'],
      borderWidth:1,
    },
    {
      label: '2020年',
      data: [9630, 8520, 7410, 4560, 3690],
      backgroundColor:['#0f03'],
      borderColor:['green'],
      borderWidth:1,
    },
    {
      label: '2021年',
      data: [12300, 9870, 8520, 6540, 4320],
      backgroundColor:['#00f3'],
      borderColor:['blue'],
      borderWidth:1,
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

const Code6 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:600px; height: 400px;">
      <canvas id="chart" width="600" height="400"></canvas>
    </div>
    
    <script>
    const alllabels = ['2019年', '2020年', '2021年'];
    const alldata = [
      [7890, 6780, 5670, 3450, 2340],
      [8520, 9630, 4560, 3690, 7410],
      [4320, 6540, 8520, 9870, 12300]
    ];
    var counter = 0;
    
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: alllabels[counter],
          data: alldata[counter],
          backgroundColor:['#f003','#0f03','#00f3','#ff03','#0ff3'],
          borderColor:['#999'],
          borderWidth:1,
        }]
      },
    });
    </script>
    <div><button onclick="update();">Update</button></div>
    <script>
    function update() {
      counter++;
      counter = counter == alldata.length ? 0 : counter;
      chart.data.datasets[0].label = alllabels[counter];
      chart.data.datasets[0].data = alldata[counter];
      chart.update();
    }
    </script>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code9 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:600px; height: 400px;">
      <canvas id="chart" width="600" height="400"></canvas>
    </div>
    
    <script>
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: '2019年',
          data: [7890, 6780, 5670, 3450, 2340],
          backgroundColor:['#f003'],
          borderColor:['blue'],
          borderWidth:1,
        },
        {
          label: '2020年',
          data: [9630, 8520, 7410, 4560, 3690],
          backgroundColor:['#0f03'],
          borderColor:['green'],
          borderWidth:1,
        },
        {
          label: '2021年',
          data: [12300, 9870, 8520, 6540, 4320],
          backgroundColor:['#00f3'],
          borderColor:['blue'],
          borderWidth:1,
        }]
      },
      options:{
        plugins:{
          title: {
            display:true,
            align:'start',
            text:'Sales by branch',
            color:'red',
            font:{ size: 32, style:'italic',  }
          },
          subtitle: {
            display: true,
            align:'start',
            text: '～各支店ごとの売上の推移～',
            color:'red',
            padding: { bottom:30 },
            font:{ size: 16 }
          },
          legend: {
            isplay: true,
            position:'right',
            align:'start',
            labels:{
              font:{ size: 18, weight:'bold' },
              color: '#009',      
            }
          },
        }
      }
    });
    </script>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:600px; height: 400px;">
      <canvas id="chart" width="600" height="400"></canvas>
    </div>
    
    <script>
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: '2019年',
          data: [7890, 6780, 5670, 3450, 2340],
          backgroundColor:['#f003'],
          borderColor:['blue'],
          borderWidth:1,
        },
        {
          label: '2020年',
          data: [9630, 8520, 7410, 4560, 3690],
          backgroundColor:['#0f03'],
          borderColor:['green'],
          borderWidth:1,
        },
        {
          label: '2021年',
          data: [12300, 9870, 8520, 6540, 4320],
          backgroundColor:['#00f3'],
          borderColor:['blue'],
          borderWidth:1,
        }]
      },
      options:{
        plugins:{
          title: {
            display:true,
            align:'start',
            text:'Sales by branch',
            color:'red',
            font:{ size: 32, style:'italic',  }
          },
          subtitle: {
            display: true,
            align:'start',
            text: '～各支店ごとの売上の推移～',
            color:'red',
            padding: { bottom:30 },
            font:{ size: 16 }
          },
          legend: {
            isplay: true,
            position:'right',
            align:'start',
            labels:{
              font:{ size: 18, weight:'bold' },
              color: '#009',      
            }
          },
        }
      }
    });
    </script>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code13 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:600px; height: 400px;">
      <canvas id="chart" width="600" height="400"></canvas>
    </div>
    
    <script>
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: '2019年',
          data: [7890, 6780, 5670, 3450, 2340],
          backgroundColor:['#f003'],
          borderColor:['blue'],
          borderWidth:1,
        },
        {
          label: '2020年',
          data: [9630, 8520, 7410, 4560, 3690],
          backgroundColor:['#0f03'],
          borderColor:['green'],
          borderWidth:1,
        },
        {
          label: '2021年',
          data: [12300, 9870, 8520, 6540, 4320],
          backgroundColor:['#00f3'],
          borderColor:['blue'],
          borderWidth:1,
        }]
      },
      options:{
        plugins:{
          title: {
            display:true,
            align:'start',
            text:'Sales by branch',
            color:'red',
            font:{ size: 32, style:'italic',  }
          },
          subtitle: {
            display: true,
            align:'start',
            text: '～各支店ごとの売上の推移～',
            color:'red',
            padding: { bottom:30 },
            font:{ size: 16 }
          },
          legend: {
            isplay: true,
            position:'right',
            align:'start',
            labels:{
              font:{ size: 18, weight:'bold' },
              color: '#009',      
            }
          },
        }
      }
    });
    </script>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code15 = () => {
    const test = `
    %%html
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js"></script>
    
    <h3>Chart.js sample.</h3>
    <div style="width:600px; height: 400px;">
      <canvas id="chart" width="600" height="400"></canvas>
    </div>
    
    <script>
    const ctx = document.querySelector('#chart');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['東京', '大阪', '名古屋', 'ロンドン', 'パリ'],
        datasets: [{
          label: '2019年',
          data: [7890, 6780, 5670, 3450, 2340],
          backgroundColor:['#f003'],
          borderColor:['blue'],
          borderWidth:1,
        },
        {
          label: '2020年',
          data: [9630, 8520, 7410, 4560, 3690],
          backgroundColor:['#0f03'],
          borderColor:['green'],
          borderWidth:1,
        },
        {
          label: '2021年',
          data: [12300, 9870, 8520, 6540, 4320],
          backgroundColor:['#00f3'],
          borderColor:['blue'],
          borderWidth:1,
        }]
      },
      options:{
        plugins:{
          title: {
            display:true,
            align:'start',
            text:'Sales by branch',
            color:'red',
            font:{ size: 32, style:'italic',  }
          },
          subtitle: {
            display: true,
            align:'start',
            text: '～各支店ごとの売上の推移～',
            color:'red',
            padding: { bottom:30 },
            font:{ size: 16 }
          },
          legend: {
            isplay: true,
            position:'right',
            align:'start',
            labels:{
              font:{ size: 18, weight:'bold' },
              color: '#009',      
            }
          },
        }
      }
    });
    </script>

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    backgroundColor:['#f003','#f005','#f007','#f009','#f00b']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};






