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
                <ChapterGallery />
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
                            <div>要素に影をつける</div>
                            <div>
                                <p>要素に影を加えるのはとても簡単です。</p>
                                <p>「box-shadow:横の距離　縦の距離　ぼかしの大きさ　影の色;」の指定</p>
                                <p>「rgba(0,0,0,.5)」と指定し黒い影を半透明にして加えています</p>
                                <Code1 />
                         
                                <Code2 />
                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">box-shadowとフィルターのdrop-shadowの違い</h2>
                                        </div>
                                        <div class="p-2">
                                            一番の違いはSVGやPNG形式の画像を使ったときの影の位置です。<br/>
                                            「box-shadow」では要素の周りに影が加えられますが「filter:drop-shadow();」では画像の中にあるイラストなどの物体自体に影ができます。
                                        </div>
                                        
                                    </div>
                               
                            </div>
                        </div>
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>

                    </div>
                </div>


            </div>
            <div className="text-center">
        <div className="text-3xl m-4">
          関連記事
        </div>


        <div class="flex flex-nowrap">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
              <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">フィルターの一覧</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="http://www.agile-software.site/2022/04/09/%e3%83%95%e3%82%a3%e3%83%ab%e3%82%bf%e3%83%bc%e3%81%ae%e4%b8%80%e8%a6%a7/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD爆上げの兆候はあったのか!?</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd%e7%88%86%e4%b8%8a%e3%81%92%e3%81%ae%e5%85%86%e5%80%99%e3%81%af%e3%81%82%e3%81%a3%e3%81%9f%e3%81%ae%e3%81%8b/141/">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/">
                記事を読む
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
        </div>


    )
}


const Code1 = () => {
    const test = `
/*
DESKTOP SIZE
================================================ */
@media (min-width: 600px) {
    .grid-item {
        transition: .3s;
    }
    .grid-item:hover {
        filter: grayscale(0);
        box-shadow: 0 0 2rem rgba(0, 0, 0, .5);
        transform: scale(1.1);
        z-index: 3;
        position: relative;
    }
}    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `

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


