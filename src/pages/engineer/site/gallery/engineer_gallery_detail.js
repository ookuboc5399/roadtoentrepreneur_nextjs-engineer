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
import ChapterGallery from '../../../../components/chapter/programing/site/chapter_gallery';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className='float-left' >
                <ChapterGallery/>
            </div>
            <div className='' >
                <div className='inline-block'>
                    <div className="">
                        <div className="m-4 flex">
                            <div className="flex-auto">
                                <Link href="/engineer/engineer_site_chapter">
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
        </div>


    )
}

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


