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
                            <div>背景に動画を設置する</div>
                            <div>
                                <p>動画を設置するには'＜video＞タグを使用します</p>
                                <p></p>src属性で動画ファイルを指定し「autoplay」で自動再生、「loop」で繰り返し再生します。
                                <p></p>
                                <Code1 />
                                <p></p>CSSでは指定したサイズで表示されるよう「object-fit:cover;」でサイズからはみ出した部分をトリミングする
                                <Code2 />
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>動画に文字を重ねる</div>
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
    <header>
        <video src="images/photo-movie.mp4" autoplay loop muted>
    </header>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    header video{
        object-fit:cover;
        object-position:center top;
        opacity:var(--video-opacity);
        width:100vw;
        height:90vh;
    }
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


