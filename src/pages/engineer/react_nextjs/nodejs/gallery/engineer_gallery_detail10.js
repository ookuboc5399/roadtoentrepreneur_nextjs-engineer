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
              <div>ダークモードに対応させる</div>
              <div>
                <p>ダークモードとは画面の背景を黒基調にしたデザインのことです。</p>
                <p>パソコンの設定でダークモードに切り替わったときにWebサイトも暗い配色に変わるように設定します。</p>
                <p>CSSファイルで「prefers-color-scheme」というメディア特性を利用し、その中にダークモード時に適用したいCSSを書くだけです</p>
                <Code1 />
                <p>このままだとOSの設定で配色モードを切り替えたときにパッと画面の色が変わるので「transition:.5s;」を加えてふんわり色が変わるよう設定します</p>
                <Code2 />
                
                <p></p>
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
:root {
    --text: #333;
    --bg: #fff;
    --video-opacity: .5;
}
@media (prefers-color-scheme: dark) {
    :root {
        --text: #ddd;
        --bg: #000;
        --video-opacity: .7;
    }
}
        `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
  body {
    color: var(--text);
      background: var(--bg);
      font-family: 'Bree Serif', sans-serif;
      transition: .5s;
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
  /* Fadeup Animation AOS */
  // AOS.init();
  AOS.init({
    duration: 1000
  });
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Code4 = () => {
  const test = `
  <!-- JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/luminous-lightbox/2.3.2/luminous.min.js"></script>
      <script src="js/script.js"></script>
  </body>
</html>
      `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
