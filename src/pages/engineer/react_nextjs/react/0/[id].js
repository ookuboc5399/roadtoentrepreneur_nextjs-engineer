import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import {React_0} from '../../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "react_detail" ? (
                    <React_0>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>普通のWebサイトはただHTMLファイルなどをサーバーに置くだけですが、本格的なWebアプリケーションはサーバー側にプログラムを設置しそこで複雑な処理をしたりデータベースにアクセスしてデータをやり取りしたりします。</p>
                                    <p>数あるフロントエンドフレームワークの中でも注目されているのがReactです。</p>
                                    <p>ReactはFacebookによって開発されたオープンソースのフロントエンドフレームワークです。。</p>

                                    <p>Reactはどのような特徴を持ったソフトウェアなのでしょうか。</p>
                                </div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>リアクティブ・プログラミング</div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想DOM</div>
                            </div>
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
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="http://www.agile-software.site/2021/05/08/react/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="http://www.agile-software.site/2021/04/04/django/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </React_0>
                ) : id == "react_detail_use" ? (
                    <React_0>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>useState</div>
                        <p>関数コンポーネントではReact HooksのuseStateという関数を用いてStateを扱っていく。</p>
                        <p>numは状態を持った変数、setNumは更新する関数。0の値を指定することでstateの初期値を制御できる</p>
                        <Code1 />
                        <h4>カウントアップ機能の実装</h4>
                        <p>ボタン押下時にsetNum関数でstateの値を+1している。</p>
                        <Code4 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>useEffect</div>
                        <p>ある値が変わったときに限りある処理を実行する。なぜこのような機能があるかというとコンポーネントは再レンダリングを何度も繰り返している。</p>
                        <p>Stateの数が多くなってくると再レンダリングの回数も増えて「再レンダリングのたびにこの処理を実行するのはコストが無駄にかかるからこの値が変わったときだけにしたい場面が多々あるため」</p>
                        <p>これがReactの仮想DOMのスクリプトファイルです。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>props</div>
                        <h4>Propsの分割代入</h4>
                        <div className='flex'>
                            <div className='m-4'>
                                <p>通常</p>
                                <Code2 />
                            </div>
                            <div className='m-4'>
                                <p>Propsの分割代入による記述</p>
                                <Code3 />
                            </div>
                        </div>
                        <p>。</p>


                    </React_0>
                ) : id == "react_detail_project" ? (
                    <React_0>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>Reactのアプリケーションを作成するには「Create React App」というプログラムを使います。</p>
                                    <Code5 />
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>プロジェクト操作のコマンドについて</div>
                                    <p className='text-2xl'>npm start(yarn start)</p>
                                    <p>開発用のサーバープログラムを使ってプロジェクトを実行します。その場でWebブラウザでアクセスし、動作を確認できます</p>
                                    <p className='text-2xl'>npm run build(yarn build)</p>
                                    <p>プロジェクトのビルドを行います。これはプロジェクトのファイルから実際にWebサーバーにアップロードして利用するファイル類を生成する作業です。</p>
                                    <p className='text-2xl'>npm test(yarn test)</p>
                                    テストプログラムを実行しアプリケーションのテストを行います。
                                    <p className='text-2xl'>npm run eject(yarn eject)</p>
                                    <p>プロジェクトのイジェクトを行います。これはプロジェクトの様々な依存関係をすべてプロジェクト内に移動し完全に独立した形で扱えるようにする作業です。</p>

                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>プロジェクトの実行</div>
                                    <p>作成されたプロジェクトを動かしてみます</p>
                                    <Code6 />
                                    <p>実行するとWebブラウザが開かれ「http://localhost:3000/」にアクセスします。</p>
                                    <p>これが公開されるアプリケーションのアドレスになります</p>
                                    <p>アクセスするとreactのロゴがゆっくりと回転する画面が表示されます。</p>
                                    <p>動作を確認出来たらCtrlキー+Cでスクリプトの実行を中断します。</p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="text-3xl m-4 text-center">
                                関連記事
                            </div>
                            <p>。</p>

                            <div class="flex content-between">
                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">パッケージインストール</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Her.</p>
                                        <a href="http://www.agile-software.site/2021/07/18/pip%e3%81%a8%e3%81%af/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </React_0>
                ) : id == "react_detail_base_jsx" ? (
                    <React_0>
                        <div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>組み込み用タグの取得</div>
                            <div>
                                <p>ReactにはHTMLのタグを直接JavaScriptのスクリプトに記述する仕組みがあります。</p>
                                <p>「JSX」と呼ばれこれを利用することで複雑なタグの構造をシンプルに記述できるようになります。</p>
                                <p>このJSXを利用するにはそのためのライブラリを読み込む必要があります。</p>
                                <Code8 />
                                <p>JSXを使ってhtmlファイルを作成します。</p>
                                <Code9 />
                                <p>この＜script＞タグに書かれている内容はBabelというコンパイラによってコンパイルされるようになります。</p>
                                <p>JSXはこのtype指定がされていないと文法エラーと判断されてしまいます。</p>
                                <p></p>
                                <Code10 />
                                <div class="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                                    <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <div>
                                        <span class="font-medium">なぜBabel(=トランスコンパイラ)が必要なのか</span>全てのブラウザがES6に対応していないから。そのためES6で書いたJavaScriptをES5に変換してから利用する必要がある
                                    </div>
                                </div>
                                <p>このスクリプトでやっていることはid="root"のElementを取り出してReactDOM.renderで用意したエレメントを表示しているだけです</p>

                                <p>JSXで記述した値はそのまま仮想DOMのElementオブジェクトとして扱うことができます。つまりcreateElementしなくてもいいのです</p>

                                <p>このJSXはただタグをそのまま表示するだけではありません。</p>
                                <p>JSXの中にJavaScriptの値を埋め込むこともできます</p>
                                <Code11 />
                                <p>JSXの値の中で｛title｝｛message｝という値が埋め込まれています。ここにあらかじめ用意しておいたそれぞれの変数の値が埋め込まれ表示されていたのです。</p>

                            </div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSXの記述の違い</div>
                            <div className='flex'>
                                <div className='mr-10'>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>create Element</div>
                                    <Code12 />
                                </div>
                                <div className='ml-10'>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSX</div>
                                    <Code13 />
                                </div>

                            </div>

                        </div>

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
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React(JSX)</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/08/06/reactjsx/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django</h5>
                                    </a>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="http://www.agile-software.site/2021/04/04/django/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                    <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        記事を読む
                                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </React_0>
                ) : id == "react_detail_base" ? (
                    <React_0>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>＜scriptタグ＞</div>
                        <div>
                            <p>Reactのスクリプトをロードします。この2つのスクリプトファイルが最も基本となります。</p>
                            <p className='text-2xl'>react.js(react.development.js)</p>
                            <p>これがReactの本体になります。</p>
                            <p className='text-2xl'>react-dom.js(react-dom.development.js)</p>
                            <p>これがReactの仮想DOMのスクリプトファイルです。</p>
                        </div>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>React組み込み用のタグ</div>

                        <p>HTMLの＜body＞にはReactによる表示を適用するためのタグが用意されています。</p>
                        <Code15 />

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スクリプトの用意</div>
                        <p>Reactの利用はスクリプトを使って行います。</p>
                        ＜script＞～＜/script＞部分に書かれているのがReactのスクリプトです。
                        <Code16 />

                    </React_0>
                ) : id == "react_detail_base_dom" ? (
                    <React_0>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                                <div>
                                    <p>HTMLのタグをスクリプトから利用するためJavaScriptには「DOM」と呼ばれる仕組みが用意されています。</p>
                                    <p>DOMは1つ1つのタグをJavaScriptのオブジェクトとして表します。それぞれのタグにはDOMのオブジェクトが用意されておりそこにタグの表示や属性などの情報がすべて詰まっています。</p>
                                    <p>そしてオブジェクトに用意されている値などを操作するとそのオブジェクトに対応するタグの表示が変更されるようになっているのです。</p>
                                    <p>このDOMに用意されているオブジェクトは「エレメント」と「ノード」があります</p>
                                    <div className='flex'>
                                        <div class="bg-white border-transparent rounded-lg shadow-xl m-2">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">エレメント</h2>
                                            </div>
                                            <div class="p-2">
                                                <p>エレメントというのはHTMLの各タグを扱うオブジェクトです。例えば＜p＞タグとか＜div＞タグとか</p>
                                                <p>このエレメントを操作することでこれらのタグの表示をJavaScriptから操作できるのです。</p>
                                                <p></p>
                                            </div>

                                        </div>
                                        <div class="bg-white border-transparent rounded-lg shadow-xl m-2">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">ノード</h2>
                                            </div>
                                            <div class="p-2">
                                                <p>＜p＞タグというのは実はさらに細かな要素に分けて考えることができます</p>
                                                <p>開始タグ、終了タグ、中に用意されるコンテンツといったものです。</p>
                                                <p>こうした1つ1つの要素を表すオブジェクトがノードというものです。</p>
                                            </div>

                                        </div>
                                    </div>
                                    <p className='text-2xl'></p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </React_0>
                ) : id == "react_detail_base_script" ? (
                    <React_0>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>組み込み用タグの取得</div>
                        <div>
                            <p>Reactの表示を組み込むタグのElementオブジェクトを取得します。</p>
                            <Code18 />
                            <p>ここではquerySelectorというメソッドを使ってid="root"のタグのオブジェクトを取り出しています。</p>


                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想Elementの作成</div>
                            <p>ReactというオブジェクトのcreateElementというメソッドを使ってエレメントを作成しています</p>
                            <Code19 />
                            <p>React.createElementはReactの仮想DOMによるElementを作成するものです。</p>
                            <p>第一引数には作成するタグの名前を指定します。例えば＜p＞タグのエレメントを作るなら'p'とします。</p>
                            <p>第二引数にはそのエレメントに用意される属性のオブジェクトを用意します</p>
                            <p>第三引数には作成するエレメントの内部に組み込まれるものを用意します</p>
                        </div>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>レンダリングの実行</div>

                        <p>作成した仮想DOMのエレメントはレンダリングを行って画面に表示します。</p>
                        <Code20 />
                        <p>レンダリングというのは用意されている情報をもとに実際に画面に表示されるデータを生成する作業のことです。</p>
                        <p>このレンダリング作業を行うのがReactDOMというオブジェクトのrenderメソッドです。</p>
                        <p>第一引数にはcreateElementで作成した仮想DOMのエレメント、そして第二引数にはそれをはめ込むタグのDOMのエレメントを指定しています</p>
                        <p>これで指定した仮想DOMオブジェクトを指定の場所に組み込んで実際のタグとして表示します。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>再レンダリング</div>
                        <p>ボタンを押してStateをカウントアップした時、画面をリロードしているわけでもないのに数値が変わって画面の表示が変更された。</p>
                        <p>これはコンポーネントがレンダリングされているため。</p>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>export</div>
                        <div className='flex'>
                            <div className='m-4'>
                                <p>normal export</p>
                                <Code21 />
                            </div>
                            <div className='m-4'>
                                <p>default export</p>
                                <Code22 />
                            </div>
                        </div>
                    </React_0>
                ) : id == "react_detail_css" ? (
                    <React_0>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>inline Styles</div>
                                <div className='flex justify-center'>
                                    <div className='m-4'>
                                        <p className='text-xl'>直接記述する例</p>
                                        <Code23 />
                                    </div>
                                    <div className='m-4'>
                                        <p className='text-xl'>事前定義してから指定する例</p>
                                        <Code24 />
                                    </div>
                                </div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>CSS Modules</div>

                                <p>従来のWeb開発と比較的近い感覚でCSSを適用できる。</p>

                                <div className='flex justify-center'>
                                    <div className='m-4'>
                                        <p className='text-xl'>CssModules.jsx</p>
                                        <Code25 />
                                    </div>
                                    <div className='m-4'>
                                        <p className='text-xl'>CssModules.nodule.scss</p>
                                        <Code26 />
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='text-center'>
                                        <Image
                                            src="/images/programing/aws/virtual.png"
                                            alt="01:Pythonとは？"
                                            width={600}
                                            height={200}
                                        />
                                        <div className='text-left'>
                                            <p>上の図は物理的なコンピュータ上で仮想的なコンピューターを3台動作させている様子を表しています。</p>
                                            <p>まず物理的なコンピューターが再開に存在し「ホストOS」はそのコンピューター上にインストールされているオペレーティングシステム(OS)を表します</p>
                                            <p>さらにその上には「仮想化ソフトウェア」があります。これは仮想的なコンピューターを動作させる上で必要となるソフトウェアです。</p>
                                            <p>この仮想化ソフトウェアが仮想化技術と呼ばれているものです。</p>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <Image
                                            src="/images/programing/aws/virtual2.png"
                                            alt="01:Pythonとは？"
                                            width={600}
                                            height={200}
                                        />
                                        <div className='text-left'>
                                            <p>ネットワーク仮想化はネットワーク接続に必要なインフラを仮想化することにより物理的な機器を変更することなくネットワークの構成を変更することを可能とする技術です</p>
                                            <p>仮に普段利用している物理的なサーバーに障害が発生した場合でもネットワーク仮想化技術により瞬時にネットワーク接続が別サーバーに切り替わり、継続してサービスを利用することができます。</p>
                                            <p></p>
                                            <p></p>
                                        </div>

                                    </div>
                                </div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Styled JSX</div>

                                <p>Next.jsに標準で組み込まれているライブラリ。</p>
                                <p>StyledJSXはコンポーネント内でstyleタグを使用しその中にCSSを記述していく</p>
                                <p className='text-xl'>StyledJsx.jsx</p>
                                <Code27 />
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>その他クラウドサービス</div>
                                <p>AWS以外のクラウドサービスとしてはMicrosoft社のAzure、Google社のGCP(Google Cloud Platform)などがあります。</p>
                                <div>
                                    Azure
                                    <p>Microsoft社のAzureは2010年にサービスが開始されました。</p>
                                    <p>AzureはMicrosoft製品との親和性が高いのが特徴です。</p>
                                    <p>またMicrosoftはデータベース市場で高いシェアを持つSQLServerの開発元であり、SQL Serverを利用したシステムをオンプレミスからクラウドに移行しやすい</p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div>
                                    GCP
                                    <p>Google社のGCPは2008年にサービスが開始されました。</p>
                                    <p>Googleと言えば検索エンジンの他、GmailやGoogleドキュメント、GoogleマップやGoogleフォトなどのクラウドサービスが有名ですがこれらのクラウドサービスもGCPを基盤として構築されています。</p>
                                    <p>またMicrosoftはデータベース市場で高いシェアを持つSQLServerの開発元であり、SQL Serverを利用したシステムをオンプレミスからクラウドに移行しやすい</p>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>
                    </React_0>
                ) : id == "javascript_detail_trans" ? (
                    <React_0>
                    </React_0>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
    const [num, setNum] = useState(0);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    export const Colored = (props) =>{
        const contentStyle = {
            color: props.color;
            fontSize: "20px"
        };
    return <p Style={contentStyle}>{props.children}</p>;
    };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
export const Colored = (props) =>{
    const {color,children} = props;
const contentStyle = {
    color: color;
    fontSize: "20px"
};
return <p Style={contentStyle}>{children}</p>;
};
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
export [num, setNum] = useState(0);
const onClickButton = () => {
    setNum(num+1);
};
return <p> {num} </p>
};
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Code5 = () => {
    const test = `
 npx create-react-app プロジェクト名
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    npm start
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
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


const Code8 = () => {
    const test = `
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    <body>
    <h1 class="bg-primary text-white display-4">React</h1>
    <div class="container mt-3">
      <div id="root">wait...</div>
    </div>
    <script type="text/babel">
    let dom = document.querySelector('#root')
  
    let el = (
      <div>
        <h2>JSX sample</h2>
        <p>This is sample message.</p>
      </div>
    )
  
    ReactDOM.render(el, dom)
    </script>
  </body>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    <script type="text/babel">
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    <script type="text/babel">
    let dom = document.querySelector('#root')
    
    let title = "新タイトル"
    let message = "新しいメッセージです。"
    
    let el = (
      <div className="alert alert-primary">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    )
    
    ReactDOM.render(el, dom)
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    <script>
    let dom = document.querySelector('#root')
    
    let element = React.createElement(
     'p',{},'Hello.React!'
    )
    
    ReactDOM.render(element, dom)
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    <script type="text/babel">
    let dom = document.querySelector('#root')

    let el = (
      <div>
        <h2>JSX sample</h2>
        <p>This is sample message</p>
      </div>
    )
    
    ReactDOM.render(el, dom)
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code14 = () => {
    const test = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>React</title>
      <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    </head>
    <body>
      <h1>React</h1>
      <div id="root">wait...</div>
      <script>
      let dom = document.querySelector('#root')
      let element = React.createElement(
        'p', {}, 'Hello React!'
      )
      ReactDOM.render(element, dom)
      </script>
    </body>
    </html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    <div id="root">wait...</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    <script>
      実行する処理
    </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    import os
    
    os.makedirs('test')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code18 = () => {
    const test = `
      let dom = document.querySelector('#root')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    let element = React.createElement(
        'p', {}, 'Hello React!'
      )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    ReactDOM.render(element, dom)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    export const SomeComponent = () =>{};    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    const SomeComponent = () => {};

    export default SomeComponent;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
   return (
       <div style={{width:"100%",padding:"19px"}}>
           <p style={{color:"blue",textAlign:"center"}}>Hello World!!</p>
       </div>
   )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code24 = () => {
    const test = `
    const containerStyle = {
        width:"100%",
        padding:"16px",
    };
    const textStyle = {
        color: "blue",
        textAlign: "center",
    };

    return (
        <div style={containerStyle}>
            <p style={textStyle}>Hello World!!</p>
        </div>
    )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code25 = () => {
    const test = `
   export const CssModules = () => {
       return (
           <div>
               <p>Css Modulesです</p>
               <buttoun>ボタン</button>
            </div>
        </div>
       );
   };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code26 = () => {
    const test = `
   .container {
       border: solid 1px #aaa;
       border-radius: 20px;
       padding: 8px;
       margin: 8px;
       display: flex;
       justify-content: space-around;
       align-items: center;
   }

   .title {
       margin:0;
       color:#aaa;
   }

   .button {
       background-color:#ddd;
       border: none;
       padding: 8px;
       border-radius: 8px;
       &:hover {
           background-color: #aaa;
           color: #fff;
           cursor: pointer;
        
       }
   }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code27 = () => {
    const test = `
    export const StyledJsx = () => {
        return (
            <>
                <div className="container" >
                    <p className="title" > Styled JSXです < /p>
                    < button className="button" > ボタン < /button>
                </div>
    
                < style jsx > {'
                    .container {
                        border: solid 1px #aaa;
                        border - radius: 20px;
                        padding: 8px;
                    }
                    .title{
                        margin: 0;
                        color: #aaa;
    }
    '}</style>
             </>
    );
    };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
