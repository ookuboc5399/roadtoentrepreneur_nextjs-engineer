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
import ChapterDesign2 from '../../../../components/chapter/programing/design/chapter_design2';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <ChapterDesign2/>
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
                                    <p>写真の下に背景色をずらして敷くデザイン。</p>
                                    <p>疑似要素を使って背景色付きの四角を作成して配置する方法もありますがbox-shadowを利用すれば1行で実装できます。</p>
                                    <Code1 />
                                    <p>box-shadowは要素にシャドウ効果を追加するコードとして利用されることが多いのですがぼかし量を0にすることで影ではなく背景色付きのボックスとして表現できます。</p>
                                    <p>サンプルではX軸へ15px、Y軸へ15pxずらすように設定しています。</p>
                                    <Code2 />
                                    <p>X軸、Y軸ともにマイナスの値を指定することで写真の左上にボックスを配置できます。</p>
                                  
                                    <Code3 />
                                   <p>背景色付きボックスは要素と同じサイズになるためもし要素のサイズではなく自由に変更したい場合にはbox-shadowではなく疑似要素を利用することになります。</p>

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
   <img scr="picture.jpg" alt="カフェの写真">
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    img{
        box-shadow:15px 15px 0 #ea987e;
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
   img{
       box-shadow: -15px -15px 0 #ea987e;
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
