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
                <p>Flexboxの基本的な書き方はFlexコンテナーと呼ばれる親要素の中にFlexアイテムと呼ばれる子要素を入れてHTMLを作成します。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>横並び1行レイアウト</div>
                <p>同じ横幅のカードを等間隔で配置するもので間の余白も等間隔</p>
                <p>justify-centerで子要素の水平方向の配置を指定できます。space-betweenは親要素の両端を基準に等間隔で要素を配置します。</p>
                <div class="">
                    <Image
                        src="/images/programing/design/flexbox_row.png"
                        alt="01:Pythonとは？"
                        width={760}
                        height={428}
                    />
                </div>
                <div className='flex'>
                    <div className='mr-6'><Code1 /></div>
                    <div className='ml-6'><Code2 /></div>
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
                <p>背景色付きボックスは要素と同じサイズになるためもし要素のサイズではなく自由に変更したい場合にはbox-shadowではなく疑似要素を利用することになります。</p>
            </div>

        </Webdesign_4>

    )
}

const Code1 = () => {
    const test = `
    <div class="wrap">
    <div class="item">
       <img src="picture01.jpg" alt="パソコンを前に談笑している写真">
       <h2>横並び見出し</h2>
       <p>横並びレイアウトをFlexboxで実装します。</p>
    </div>
    <div class="item">
       <img src="picture01.jpg" alt="パソコンを前に談笑している写真">
       <h2>横並び見出し</h2>
       <p>横並びレイアウトをFlexboxで実装します。</p>
    </div>
    <div class="item">
       <img src="picture01.jpg" alt="パソコンを前に談笑している写真">
       <h2>横並び見出し</h2>
       <p>横並びレイアウトをFlexboxで実装します。</p>
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
        display: flex; /*横並び*/
        justify-content: space-between; /*左右両端揃え*/
     }
     
     .item {
        padding: 30px;
        width: 32%;
        background-color: #d6d6d6;
        border-radius: 10px;
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


