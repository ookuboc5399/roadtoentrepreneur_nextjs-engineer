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
import ChapterDesign3 from '../../../../components/chapter/programing/design/chapter_design3';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <ChapterDesign3/>
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
                                    <p>枠線を斜線で表現するデザイン。</p>
                                    <p>border-image-sourceはborder部分に画像を設定するプロパティでここに線形グラデーションrepeating-linear-gradientを記述。</p>
                                    <Code1 />
                                    <p>border-image-slice:3でborderの4辺の使用範囲を指定、border-image-repeat:roundでタイル状に繰り返して表示させます。</p>
                                    <Code2 />
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
    <a href=""><span>私たちについて</span></a>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    a {
        display: block;
        position: relative; /*斜線背景の基準*/
        color: #333;
        text-decoration: none;
     }
     
     a span {
        display: flex;
        justify-content: center; /*左右中央揃え*/
        align-items: center; /*上下中央揃え*/
        position: relative; /*z-indexを適用するために必要*/
        padding: 30px 10px;
        width: 260px;
        font-size: 18px;
        font-weight: 700;
        background-color: #90be70;
        z-index: 2; /*重なり順指定*/
     }
     
     a::before { /*斜線背景の指定*/
        content: '';
        position: absolute;
        bottom: -5px; /*基準の下側から-5px移動させる*/
        right: -5px; /*基準の右側から-5px移動させる*/
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient( /*斜線を線形グラデーションで表現*/
           -45deg, /*線形グラデーションを-45°回転させる*/
           #2b550e 0px, #2b550e 2px, /*色の付いた線を表現*/
           rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50% /*余白（透明）部分を表現*/
        );
        background-size: 8px 8px; /*background-imageを表現するサイズを指定*/
        z-index: 1; /*重なり順を指定*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

