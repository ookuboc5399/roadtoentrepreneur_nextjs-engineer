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
                <p>サイズの異なるカードをタイル状に敷き詰めて情報を探しやすくするデザイン。SNSのPinterestのようなレイアウトの実装方法です。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>横並び1行レイアウト</div>
                <p>column-countは指定した列数で要素のコンテンツを分割するプロパティです。column-count:3で横3列に並びます。</p>
                <p>break-insideは生成されたボックスをどのように区切るかを指定できるプロパティでbreak-inside:avoidはボックス途中で区切られることを防げます。</p>
                <div class="">
                    <Image
                        src="/images/programing/design/pinterest.png"
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
<ul>
    <li>
       <img src="picture01.jpg" alt="">
       <p>PinterestレイアウトをCSSのみで実装</p>
    </li>
    <li>
       <img src="picture02.jpg" alt="">
       <p>column-countはかなり便利</p>
    </li>
    <li>
       <img src="picture03.jpg" alt="">
       <p>少ないコードで実装できるのは嬉しい</p>
    </li>
 </ul>
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    ul {
        column-count: 3; /*横3列に並べる*/
        padding: 20px;
        list-style: none;
     }
     
     li {
        break-inside: avoid; /*ボックス途中で区切られるのを禁止する*/
     }
     
     img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 30px;
     }
     
     p {
        font-size: 13px;
        text-align: center;
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




