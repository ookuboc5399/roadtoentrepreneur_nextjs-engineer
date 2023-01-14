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
                <p>見てほしい写真や画像を中央配置にしてアピールしやすくするレイアウト。margin:autoやpositionとtransformを使った方法が一般的ですがどうしてもコードが長くなってしまいます</p>
                <p>そんなときにFlexboxとGridを使うことで数行で実装できます。</p>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Flexbox</div>
                <p>Flexboxでの実装はjustify-contentとalign-itemsをそれぞれcenterの値を指定することで上下左右から中央に配置されます</p>

                <div className='flex'>
                    <div className='mr-6 w-1/2'><Code1 /></div>
                    <div className='ml-6 w-1/2'><Code2 /></div>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Grid</div>
                <p>Gridでの実装はplace-itemsにcenterと2行で実装が可能となります。</p>
                <div className='flex'>
                    <div className='mr-6 w-1/2'><Code1 /></div>
                    <div className='ml-6 w-1/2'><Code3 /></div>
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

        </Webdesign_4>

    )
}

const Code1 = () => {
    const test = `
<div class="image">
    <img src="flexbox.png" alt=”Flexboxで上下左右中央配置のコードを説明する画像”>
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
    .image {
        display: flex; /*横並び*/
        justify-content: center; /*左右中央揃え*/
        align-items: center; /*上下中央揃え*/
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
    .image {
        display: grid; /*子要素をグリッドアイテムにする*/
        place-items: center; /*中央揃え*/
     }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



