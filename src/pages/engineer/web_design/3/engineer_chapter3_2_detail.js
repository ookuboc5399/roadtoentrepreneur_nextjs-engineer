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
                                    <p>aタグにボタンのベースの形状を指定し、疑似要素::beforeでボタンの形状に合わせた枠線を表現します。</p>
                                    <p>さらにtop:-8pxとleft:-8pxで位置をずらします。</p>
                                    <Code1 />
                                    <p>widthとheightをcalc(100% -4px)としているのはbackgroundとborderのサイズ違いが理由です。</p>
                                    <p>サイズの違う2つの要素を組み合わせてずらすと違和感が出てしまうのでボタンと枠のサイズを合わせます。</p>
                                    <Code2 />
                                </div>
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
    <a href="">私たちについて</a>
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
        position: relative; /*枠線の基準*/
        padding: 30px 10px;
        width: 260px;
        color: #333;
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        background-color: #90be70;
     }
     
     a::before { /*枠線を擬似要素で表現*/
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        width: calc(100% - 4px); /*疑似要素の左右枠線サイズx2の分を差し引く計算式*/
        height: calc(100% - 4px); /*疑似要素の上下枠線サイズx2の分を差し引く計算式*/
        background-color: rgba(0 0 0 / 0); /*透明にする*/
        border: 2px solid #2b550e; /*枠線のスタイル*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

