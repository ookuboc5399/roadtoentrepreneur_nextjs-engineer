import React from 'react'
import Image from 'next/image';
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Webdesign_4 from '../../../../components/layout/web_design4';


export default function Home() {
    return (
        <Webdesign_4>
            <div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>横並び1行レイアウト</div>
                <p>文章は要素の中におさめつつ、写真だけ画面横サイズいっぱいに広げたいときに使えるレイアウト</p>
                <p>文章と写真を同じ要素内にまとめても写真だけをサイズ変更できるので要素ごとに横サイズ調整しなくても大丈夫です。</p>
                <p>親要素(.contents)の中に写真と文章が包括されているので写真も本来は横幅600pxで表示されるのですが写真にだけcalc(50% -50vw)を指定することで全画面表示にできます</p>
                <p>テキスト部分の外側にある余白の値を計算して写真をその分左右に広げることにより親要素の横幅を無視して全画面表示させています。</p>
                <p>-1をかけているのはネガティブマージンの値をあえて出し、マイナスの値で写真を左右に広げられるからです。</p>
                <div class="">
                    <Image
                        src="/images/programing/design/image.png"
                        alt="01:Pythonとは？"
                        width={760}
                        height={428}
                    />
                </div>
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
              
            </div>

        </Webdesign_4>

    )
}

const Code1 = () => {
    const test = `
<div class="container">
    <div class="contents">
       <div class="image"><img src="picture.jpg" alt="スマホを見ながらPCを操作する写真"></div>
 
       <p>テキストの横幅は固定、画像だけを左右画面いっぱいに広げるレイアウトを使う機会は少なくないです。これを実装する際はマークアップで対処していましたが、これからはCSSで実装できます。一括指定できるのでかなり便利ですよ。</p>
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
    .contents {
        margin-right: auto;
        margin-left: auto;
        width: 600px;
     }
     
     .contents p {
        margin-bottom: 50px;
     }
     
     .image {
        margin-right: calc(50% - 50vw);/*要素横幅50%から画面横幅50vwを差し引く計算式*/
        margin-left: calc(50% - 50vw);/*要素横幅50%から画面横幅50vwを差し引く計算式*/
        margin-bottom: 50px;
     }
     
     .image img {
        display: block;
        width: 100%;
        height: auto;
     }
     
     .container {
        overflow-x: hidden; /*横スクロールを防ぐ*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




