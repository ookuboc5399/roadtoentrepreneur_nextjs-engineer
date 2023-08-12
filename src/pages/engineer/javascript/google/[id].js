import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { JavaScript_google } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "chartjs_detail" ? (
                    <JavaScript_google>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <p>Google Chartには業務などで使える便利なチャートが多数揃っているのです。</p>
                                <ul>
                                    <li>一般的なグラフ</li>
                                    <p>データをもとに作成する一般的なグラフは一通り対応しています。棒グラフ、折れ線グラフ、円グラフといった基本的なものの他、ヒストグラムや散布図なども用意されています。</p>
                                    <li>組織図</li>
                                    <p>組織の階層的な構造を表す組織図や単語のつながりを表すワードツリーなど組織的なものの階層構造を表すようなチャートも用意されています。</p>
                                    <li>プロジェクト管理 </li>
                                    <p>プロジェクトの進行を管理するガントチャートやスケジュール管理などで用いられるタイムラインなどのチャートも作成できます。</p>
                                </ul>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">Google Chartの利用手順</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            <p className='text-xl border-b-4 border-blue-400'>ローダーを読み込む</p>
                                            <p></p>
                                            <Code10 />
                                            <p className='text-xl border-b-4 border-blue-400'>パッケージのロード</p>
                                            <p>現行バージョンを使う場合第1引数は&apos;current&apos;</p>
                                            <Code11 />
                                            <p className='text-xl border-b-4 border-blue-400'>ローダーを読み込む</p>
                                            <p>読み込んでから自動的にチャートを表示したい場合はsetLoadCallbackメソッドを使ってロード完了後に実行する関数を設定</p>
                                            <Code12 />
                                            <p className='text-xl border-b-4 border-blue-400'>DataTableオブジェクトの作成</p>
                                            <p>チャートで使うデータはDataTableオブジェクトとして用意します。</p>
                                            <p>newDataTableで作成する他、arrayToDataTableというメソッドを呼び出して2次元配列からDataTableを作成することもできます。</p>
                                            <Code13 />
                                            <Code14 />
                                            <p className='text-xl border-b-4 border-blue-400'>チャートのオブジェクトを作成</p>
                                            <Code15 />
                                            <p>チャートで使うデータはDataTableオブジェクトとして用意します。</p>
                                            <p>引数にはチャートを表示する
                                                <Link href='/engineer/html/html2/engineer_html2_detail'>エレメント</Link>を指定します。</p>
                                            <p className='text-xl border-b-4 border-blue-400'>チャートを描く</p>
                                            <p>チャートのオブジェクトにあるdrawメソッドを呼び出してチャートを描きます。</p>
                                            <Code16 />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl">仮想DOMのイメージ</p>
                                <div className='flex justify-center'>

                                    <Image
                                        src="/images/dom.png"
                                        alt=""
                                        width={600}
                                        height={200}
                                    />
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
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>
                    </JavaScript_google>
                ) : id == "chartjs2_detail" ? (
                    <JavaScript_google>
                        <div className='' >
                          
                        <div className="border-2 border-pink-50 inline-block">
                                <div></div>
                                <div>
                                    <p></p>
                                    <Code17 />
                                    <p>クリック時の処理はgoogle.visualization.eventsというオブジェクトにある「addListener」というメソッドを使って作成します。</p>
                                    <Code21 />
                                    <p>addListenerの第1引数にはイベントを設定するチャートのオブジェクト、第2引数には処理を割り当てるイベント名</p>
                                    <p className='text-xl border-b-4 border-blue-400'>選択された項目を調べる</p>
                                    <p></p>項目をクリックするとそれ以降の項目が折り畳まれて、再度クリックすると再表示することができます。
                                    <p>これはチャートの「collapse」というメソッドで行います。</p>
                                    <p>第1引数には操作する項目の行番号、第2引数は真偽値でtrueにすると折り畳み、falseにすると展開表示します。</p>
                                    <Code18 />
                                    <p className='text-xl border-b-4 border-blue-400'>現在折り畳まれている項目の行番号を調べる</p>
                                    <p>これで現在折り畳まれている項目の行番号をまとめた配列が得られます。</p>
                                    <Code19 />
                                    <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                                    <p></p>
                                    <Code21 />
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                        </div>
                    </JavaScript_google>
                ) : id == "google_timeline" ? (
                    <JavaScript_google>
                        <div className="border-2 border-pink-50 inline-block">
                                <div></div>
                                <div>
                                    <p>タイムラインのロード</p>
                                    <Code22 />
                                    <p></p>
                                    <p className='text-xl border-b-4 border-blue-400'>現在折り畳まれている項目の行番号を調べる</p>
                                    <p>これで現在折り畳まれている項目の行番号をまとめた配列が得られます。</p>
                                    <Code23 />
                                    <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                                    <p></p>
                                    <Code24 />
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                    </JavaScript_google>
                ): (
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

const Code10 = () => {
    const test = `
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    google.charts.load('current', {packages:["orgchart"]});
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
google.charts.setOnLoadCallback(関数);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
変数 = new google.visualization.DataTable();
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
変数 = google.visualization.arrayToDataTable(データ);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code15 = () => {
    const test = `
const chart = new google.visualization.チャート(エレメント);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code16 = () => {
    const test = `
チャート.draw(DataTable);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code17 = () => {
    const test = `
%%html
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

const ob = [
  ['名前', '上司', '役職'],
  ['山田太郎', '', '課長'],
  ['田中花子', '山田太郎', '係長'],
  ['中野幸子', '山田太郎', '係長'],
  ['鈴木一郎', '田中花子', '社員'],
  ['佐藤次郎', '田中花子', '社員'],
]

function drawChart() {
  const data = new google.visualization.arrayToDataTable(ob);
  const div = document.querySelector('#chart')
  const chart = new google.visualization.OrgChart(div);
  chart.draw(data);
}
</script>
<div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    チャート.collapse(行番号,真偽値);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
変数 = チャート.getCollapsedNodes();
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    %%html
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {packages:["orgchart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    const ob = [
      ['名前', '上司', '役職'],
      ['山田太郎', '', '課長'],
      ['田中花子', '山田太郎', '係長'],
      ['中野幸子', '山田太郎', '係長'],
      ['鈴木一郎', '田中花子', '社員'],
      ['佐藤次郎', '田中花子', '社員'],
    ]
    
    function drawChart() {
      const  data = google.visualization.arrayToDataTable(ob);
      const div = document.querySelector('#chart')
      const chart = new google.visualization.OrgChart(div);
      chart.draw(data);
      
      google.visualization.events.addListener(chart, 'select', (event)=> {
        const target = chart.getSelection();
        const row = target[0].row;
        const nodes = chart.getCollapsedNodes();
        for(let i in nodes) {
          if (nodes[i] == row) {
            chart.collapse(row, false);
            chart.setSelection(row);
            return;
          }
        }
        chart.collapse(row, true);
        chart.setSelection(row);
      });
    }
    </script>
    <div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    google.visualization.events.addListener(チャート, イベント名, (event)=> {
        ・・処理・・
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code22 = () => {
    const test = `
    google.charts.load('current', {packages: ['timeline'], language: 'ja'});
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
    %%html
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {packages: ['timeline'], language: 'ja'});
    google.charts.setOnLoadCallback(drawChart);
    
    const data = [
      ['プロジェクト', 'ラベル', '開始', '終了'],
      [ '企画立案', '企画', new Date(2021, 10, 1), new Date(2021, 11, 30) ],
      [ '市場調査',  '市場調査', new Date(2021, 10, 15),  new Date(2021, 11, 15) ],
      [ '予算策定',  '予算', new Date(2021, 11, 10),  new Date(2021, 11, 25) ],
      [ '設計',  'プログラム設計', new Date(2021, 11, 1),  new Date(2021, 11, 31) ],
      [ '開発',   'プログラム開発', new Date(2021, 12, 1),  new Date(2022, 2, 31) ],
      [ 'テスト',  'テスト', new Date(2022, 2, 1),  new Date(2022, 2, 30) ],
    ];
    
    function drawChart() {
      const div = document.querySelector('#chart');
      const chart = new google.visualization.Timeline(div);
      const dataTable = new google.visualization.arrayToDataTable(data);
      chart.draw(dataTable);
    }
    </script>
    
    <div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code24 = () => {
    const test = `
    %%html
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {packages:["orgchart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    const ob = [
      ['名前', '上司', '役職'],
      ['山田太郎', '', '課長'],
      ['田中花子', '山田太郎', '係長'],
      ['中野幸子', '山田太郎', '係長'],
      ['鈴木一郎', '田中花子', '社員'],
      ['佐藤次郎', '田中花子', '社員'],
    ]
    
    function drawChart() {
      const  data = google.visualization.arrayToDataTable(ob);
      const div = document.querySelector('#chart')
      const chart = new google.visualization.OrgChart(div);
      chart.draw(data);
      
      google.visualization.events.addListener(chart, 'select', (event)=> {
        const target = chart.getSelection();
        const row = target[0].row;
        const nodes = chart.getCollapsedNodes();
        for(let i in nodes) {
          if (nodes[i] == row) {
            chart.collapse(row, false);
            chart.setSelection(row);
            return;
          }
        }
        chart.collapse(row, true);
        chart.setSelection(row);
      });
    }
    </script>
    <div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code25 = () => {
    const test = `
    google.visualization.events.addListener(チャート, イベント名, (event)=> {
        ・・処理・・
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




