import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Design4 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "design4_detail" ? (
                    <Design4>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Design4>
                ) : id == "design4_2_detail" ? (
                    <Design4>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Design4>
                ) : id == "design4_3_detail" ? (
                    <Design4>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Design4>
                ) : id == "design4_4_detail" ? (
                    <Design4>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Design4>
                ) : id == "design4_5_detail" ? (
                    <Design4>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Design4>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


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



const Code4 = () => {
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

const Code5 = () => {
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


const Code6 = () => {
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

const Code7 = () => {
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


const Code8 = () => {
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

const Code9 = () => {
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

const Code10 = () => {
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



const Code11 = () => {
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

const Code12 = () => {
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












