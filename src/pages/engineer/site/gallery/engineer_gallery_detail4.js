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
                            <div>マルチカラムレイアウト2</div>
                            <div>
                                <p>全ての要素を同じ大きさで並べるのではなく目立たせたい要素のみ大きく表示しましょう。</p>
                                <p>サイズを変更したい2つの要素に対し新たに「grid-big-top」と「grid-big-bottom」のクラスを追加します。</p>
                                <Code1 />
                                <p>縦・横に並ぶグリッドラインをベースに範囲を指定します。</p>
                                <p>使用するプロパティは横の範囲を「grid-column」、横の範囲を「grid-row」で指定します。</p>
                                <p>大きく表示する要素の画像は横の範囲をグリッドラインの1~3番目を指定するので「始まりのライン/終わりのライン」というようにスラッシュで区切って「grid-column:1/3;」と記述します。</p>
                                <p>縦のグリッドラインは2~3番目を指定するのでgrid-rowプロパティを使って「grid-row:2/3;」と記述します。</p>
                                <p>もう1つの大きいサイズの要素は横のグリッドラインが1~3番目を指定、縦のグリッドラインは6~7番目を指定します。</p>
                                <Code2 />
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>デスクトップサイズの表示調整</div>
                                <p></p>デスクトップサイズでは「grid-big-bottom」の要素の位置が変わるのでメディアクエリの中に同じく指定します。
                                <Code3 />
                                <p></p>
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
<main class="grid">
   (・・・コンテンツ内容省略・・・)
    <a class="grid-big-top grid-gallery" href="images/img4-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img4-400.jpg"
            srcset="images/img4-400.jpg 400w,
                    images/img4-800.jpg 800w"
            alt="Rainbow Colored Ocean">
    </a>
    (・・・コンテンツ内容省略・・・)
    <a class="grid-big-bottom grid-gallery" href="images/img10-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img10-400.jpg"
            srcset="images/img10-400.jpg 400w,
                    images/img10-800.jpg 800w"
            alt="Nago City Hall">
    </a>
    (・・・コンテンツ内容省略・・・)
</main>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    .grid-big-top {
        grid-column: 1/3;
        grid-row: 2/3;
    }
    .grid-big-bottom {
        grid-column: 1/3;
        grid-row: 6/7;
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
    /*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
    .grid-big-bottom {
        grid-column: 2/4;
        grid-row: 4/5;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


