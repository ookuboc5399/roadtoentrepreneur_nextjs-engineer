import React from 'react'
import Image from 'next/image';
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Webdesign_5 from '../../../../components/layout/web_design5';


export default function Home() {
    return (
        <Webdesign_5>
            <div>
                <p>カードを横にスライドさせて限られたスペースで複数の画像を表示させられるカルーセルスライダー</p>

                <div className='flex'>
                    <div className='border-2 border-red-400 m-2'>
                        <p>.item｛display:inline-block｝で子要素を横並びにします。</p>
                        <Image
                            src="/images/programing/design/carousel1.png"
                            alt="01:Pythonとは？"
                            width={380}
                            height={214}
                        />
                    </div>
                    <div className='border-2 border-red-400 m-2'>
                        <p>.wrap｛white-space:nowrap｝で行の折り返しをさせないように指定</p>
                        <Image
                            src="/images/programing/design/carousel2.png"
                            alt="01:Pythonとは？"
                            width={380}
                            height={214}
                        />
                    </div>
                    <div className='border-2 border-red-400 m-2'>
                        <p>.wrap｛overflow-x:scroll｝で親要素を超えた子要素をスクロールできるように指定</p>
                        <Image
                            src="/images/programing/design/carousel3.png"
                            alt="01:Pythonとは？"
                            width={380}
                            height={214}
                        />
                    </div>
                </div>
                <p>scro;;-snap-typeでスナップ方向を指定します。scroll-snap-type:x mandatoryのときスクロールコンテナの軸は水平(x軸)debug</p>
                <p>scroll-snap-align:centerでスナップされた後の止まる位置を中央に指定しています。</p>
                <div className='flex'>
                    <div className='mr-6 w-1/2'><Code1 /></div>
                    <div className='ml-6 w-1/2'><Code2 /></div>
                </div>

                <div class="flex flex-nowrap">
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                        <a href="#">
                            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flexbox</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="http://www.agile-software.site/2021/06/05/tailwindcss%e3%83%81%e3%83%bc%e3%83%88%e3%82%b7%e3%83%bc%e3%83%88%e8%a7%a3%e8%aa%acflexbox/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                記事を読む
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                        <a href="#">
                            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Flexbox</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="http://www.agile-software.site/2021/06/05/tailwindcss%e3%83%81%e3%83%bc%e3%83%88%e3%82%b7%e3%83%bc%e3%83%88%e8%a7%a3%e8%aa%acflexbox/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                記事を読む
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div>参考</div>
                <div class="flex flex-nowrap">
                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                        <a href="#">
                            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Masonry</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="https://masonry.desandro.com/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                記事を読む
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            </Webdesign_5>

    )
}

const Code1 = () => {
    const test = `
<div class="wrap">
    <div class="item">
       <img src="picture01.jpg" alt="横を向く女性の写真">
       <p>Sun</p>
    </div>
    <div class="item">
       <img src="picture02.jpg" alt="PCを操作する女性の写真">
       <p>Mon</p>
    </div>
    <div class="item">
       <img src="picture03.jpg" alt="資料を確認する男性の写真">
       <p>Tue</p>
    </div>
 </div>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    .wrap {
        scroll-snap-type: x mandatory; /*X軸にスクロールし、スクロールアクション終了後にスナップ位置に合わせる*/
        margin: 0 auto;
        padding: 30px 0;
        max-width: 800px;
        white-space: nowrap; /*行の折り返しをさせない*/
        overflow-x: scroll; /*X軸方向にスクロールさせる*/
     }
     
     .item {
        scroll-snap-align: center; /*スナップ位置を中央に指定*/
        display: inline-block;
        margin: 0 20px;
        width: 40%;
        white-space: normal; /*.wrapのwhite-space指定を解除*/
        background-color: #f4f4f4;
        overflow: hidden;
     }
     
     img {
        display: block;
        width: 100%;
        height: auto;
     }
     
     p {
        margin: 0;
        padding: 20px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};





