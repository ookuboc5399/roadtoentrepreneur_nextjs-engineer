import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ChapterJspreadsheet from '../../../../components/chapter/programing/javascript/chapter_jspreadsheet';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className='float-left' >
                <ChapterJspreadsheet />
            </div>
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
                            <div></div>
                            <div>
                                <p>「Jspreadsheet」というJavaScriptライブラリはデータをスプレッドシートのような一覧データにまとめることができます</p>
                                <p></p>このJspreadsheetはHTMLのコードに以下のタグを書くことで使えるようになります
                                <Code0 />
                                <div class="p-10">

                                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-red-200">

                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-red-500">JavaScriptライブラリとCDN</div>
                                            <p class="text-gray-700 text-base">
                                                Jspreadsheetを利用するために使っている＜script＞タグは「CDN」と呼ばれるサービスを利用しています。これはContent Delivery Networkの略で
                                                各種オープンソースのコンテンツを無料で配信するサービスです。
                                                ＜script＞でこのCDNで公開しているライブラリのURLを指定するだけでそのコンテンツを読み込み利用できるようになる
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">Jspreadsheet関数</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            <Code5 />
                                        </div>
                                        <div class="p-2 inline-block">
                                          第1引数には＜div＞要素が代入されている変数target、第2引数にはdataとcolumns
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

                    </div>
                </div>


            </div>
        </div>


    )
}

const Code0 = () => {
    const test = `
    %%html
    <script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
    <link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
     
    <script src="https://jsuites.net/v4/jsuites.js"></script>
    <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code1 = () => {
    const test = `
    %%html
    <script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
    <link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
     
    <script src="https://jsuites.net/v4/jsuites.js"></script>
    <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
    
    <h3>Jspreadsheet spreadsheet!</h3>
    <div id="spreadsheet"></div>
    
    <script>
    const data = [
      ['taro', 'taroyamada', 39],
      ['hanako', 'hanako@flower', 28],
      ['sachiko', 'sachiko@happy', 17],
    ];
    const target = document.getElementById('spreadsheet');
    
    jspreadsheet(target, {
      data:data,
      columns: [
        {
          type: 'text',
          title:'Name',
          width:100
        },
        {
          type: 'text',
          title:'Mail',
          width:200
        },
        {
          type: 'numeric',
          title:'Age',
          width:50
        },
      ],
    });
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    const data = [
        ['taro', 'taroyamada', 39],
        ['hanako', 'hanako@flower', 28],
        ['sachiko', 'sachiko@happy', 17],
      ];
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
