import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NextPage } from 'next';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfPage from '../../../../components/pdf/test';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Chapterjavascript_google from '../../../../components/chapter/programing/javascript/chapter_programing_javascript_google';

export default function Home() {
    return (
        <div className=''>
            <Header_engineer />
            <div className='flex'>
                <div className="w-1/4">
                    <Chapterjavascript_google />
                </div>
                <div className='' >
                    <div className=''>
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
                                    <Link href="https://colab.research.google.com/drive/1aEvAdeTICN8bv0zpq1PU1ILeNDrMdPTD?usp=sharing">
                                        <div className="text-4xl">
                                        <Image
                                            src="/images/googlecolabora.png"
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="border-2 border-pink-50 inline-block">
                                <div></div>
                                <div>
                                    <p></p>
                                    <Code1 />
                                    <p>クリック時の処理はgoogle.visualization.eventsというオブジェクトにある「addListener」というメソッドを使って作成します。</p>
                                    <Code5 />
                                    <p>addListenerの第1引数にはイベントを設定するチャートのオブジェクト、第2引数には処理を割り当てるイベント名</p>
                                    <p className='text-xl border-b-4 border-blue-400'>選択された項目を調べる</p>
                                    <p></p>項目をクリックするとそれ以降の項目が折り畳まれて、再度クリックすると再表示することができます。
                                    <p>これはチャートの「collapse」というメソッドで行います。</p>
                                    <p>第1引数には操作する項目の行番号、第2引数は真偽値でtrueにすると折り畳み、falseにすると展開表示します。</p>
                                    <Code2 />
                                    <p className='text-xl border-b-4 border-blue-400'>現在折り畳まれている項目の行番号を調べる</p>
                                    <p>これで現在折り畳まれている項目の行番号をまとめた配列が得られます。</p>
                                    <Code3 />
                                    <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
                                    <p></p>
                                    <Code4 />
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
        </div>


    )
}


const Code1 = () => {
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

const Code2 = () => {
    const test = `
    チャート.collapse(行番号,真偽値);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
変数 = チャート.getCollapsedNodes();
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

const Code5 = () => {
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





