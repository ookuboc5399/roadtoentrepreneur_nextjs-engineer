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
                            <div>マルチカラムレイアウト</div>
                            <div>
                                <p>画像を配列させマルチカラムレイアウトを作ります</p>
                                <p></p>「CSSグリッド」を使えば少ないコードで画像をタイル型に並べられます。
                                <p></p>タイル型に並べるように親要素である「grid」クラスに対して「display:grid;」を指定します。
                                <p>これでこの部分の中身をCSSグリッドで表示するという宣言になります。</p>
                                <Code1 />
                                <p></p>幅を「94vw」とし左右の「margin」を「auto」とすることで画面の左右に「3vw」ずつ余白を与え画面中央に表示させます
                                <p>gapプロパティでは画像間の余白を指定できます。ここでは「2vw」としています。</p>
                                <p>タイル状に並べるために子要素のサイズを指定します。横に2つのボックス、縦は8段にするので、横のサイズには「grid-template-columns」、縦のサイズには「grid-template-rows」を利用します。</p>
                                <p></p>「grid-template-columns:46vw 46vw;」、「grid-template-rows:46vw 46vw 46vw 46vw 46vw 46vw 46vw 46vw;」のように何度も同じ値を指定するのは面倒です。
                                <p></p>そこで同じ値を繰り返し指定するときは「repeat関数」を使うとスッキリまとめられます。
                                <p></p>例えば「grid-template-rows:repeat(8,46vw);」を指定すると「46vw」を8回繰り返すという意味になります
                                <Code2 />
                                <p>画像がグリッドの枠に収まるように調整します</p>
                                <p>幅と高さは100%にして枠いっぱいに広がるよう指定します。</p>
                                <p>それだけだと画像の比率がおかしいので「object-fit:cover;」で正方形の枠からはみ出した部分をトリミングします。</p>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>デスクトップサイズの表示調整</div>
                                <p></p>デスクトップサイズでは全体の幅を80vwとしそれぞれの枠は「26vw」としました。
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
<main class="grid">
    <a class="grid-gallery" href="images/img1-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img1-400.jpg"
            srcset="images/img1-400.jpg 400w,
                    images/img1-800.jpg 800w"
            alt="Sainte Chapelle">
    </a>
    <a class="grid-gallery" href="images/img2-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img2-400.jpg"
            srcset="images/img2-400.jpg 400w,
                    images/img2-800.jpg 800w"
            alt="Fushimi Inari Shrine">
    </a>
    <a class="grid-gallery" href="images/img3-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img3-400.jpg"
            srcset="images/img3-400.jpg 400w,
                    images/img3-800.jpg 800w"
            alt="The Ocean in Okinawa">
    </a>
    <a class="grid-big-top grid-gallery" href="images/img4-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img4-400.jpg"
            srcset="images/img4-400.jpg 400w,
                    images/img4-800.jpg 800w"
            alt="Rainbow Colored Ocean">
    </a>
    <a class="grid-gallery" href="images/img5-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img5-400.jpg"
            srcset="images/img5-400.jpg 400w,
                    images/img5-800.jpg 800w"
            alt="Île de la Cité">
    </a>
    <a class="grid-gallery" href="images/img6-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img6-400.jpg"
            srcset="images/img6-400.jpg 400w,
                    images/img6-800.jpg 800w"
            alt="Night View in Otaru">
    </a>
    <a class="grid-gallery" href="images/img7-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img7-400.jpg"
            srcset="images/img7-400.jpg 400w,
                    images/img7-800.jpg 800w"
            alt="English Bay">
    </a>
    <a class="grid-gallery" href="images/img8-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img8-400.jpg"
            srcset="images/img8-400.jpg 400w,
                    images/img8-800.jpg 800w"
            alt="Okinawa Churaumi Aquarium">
    </a>
    <a class="grid-gallery" href="images/img9-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img9-400.jpg"
            srcset="images/img9-400.jpg 400w,
                    images/img9-800.jpg 800w"
            alt="Fushimi Inari Shrine Gate">
    </a>
    <a class="grid-big-bottom grid-gallery" href="images/img10-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img10-400.jpg"
            srcset="images/img10-400.jpg 400w,
                    images/img10-800.jpg 800w"
            alt="Nago City Hall">
    </a>
    <a class="grid-gallery" href="images/img11-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img11-400.jpg"
            srcset="images/img11-400.jpg 400w,
                    images/img11-800.jpg 800w"
            alt="Autumn Colors">
    </a>
    <a class="grid-gallery" href="images/img12-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img12-400.jpg"
            srcset="images/img12-400.jpg 400w,
                    images/img12-800.jpg 800w"
            alt="Palais de Versailles">
    </a>
    <a class="grid-gallery" href="images/img13-1600.jpg" data-aos="fade-up">
        <img class="grid-item"
            src="images/img13-400.jpg"
            srcset="images/img13-400.jpg 400w,
                    images/img13-800.jpg 800w"
            alt="Elizabeth Tower">
    </a>
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
    .grid {
        width: 94vw;
        margin: 0 auto 3vw;
        display: grid;
        gap: 2vw;
        grid-template-columns: repeat(2, 46vw); /* (94 - 2) / 2 */
        grid-template-rows: repeat(8, 46vw);
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
    .grid {
        width: 80vw;
        gap: 1vw;
        grid-template-columns: repeat(3, 26vw); /* (80 - 2) / 3 */
        grid-template-rows: repeat(5, 26vw);
    }
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


