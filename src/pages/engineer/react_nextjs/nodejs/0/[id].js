import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Nodejs_0 } from '../../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "nodejs_detail" ? (
                    <Nodejs_0>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>NodejsはJavaScriptでサーバープログラムの開発を行うのに多用されているJavascriptの実行環境です。</p>
                                    <p>これに用意されているパッケージ管理ソフトを使い、様々なJavaScriptのソフトウェアのインストール等を行います。</p>

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
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Webサイトの仕組み</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="http://www.agile-software.site/2022/04/23/web%e3%82%b5%e3%82%a4%e3%83%88%e3%81%ae%e4%bb%95%e7%b5%84%e3%81%bf/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                    </Nodejs_0>
                ) : id == "nodejs_detail_project" ? (
                    <Nodejs_0>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>今回はhellowworldprojectというプロジェクト名でを作成します。</p>
                                    <Code1 />
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>startprojectコマンドとは？</div>
                                    <p>startprojectコマンドとはDjangoで新しいプロジェクトの作成を始める際に実行するコマンドです。</p>
                                    <p>startprojectコマンドを実行することによってアプリケーションを効率的に作成するうえで必要な一連のディレクトリやファイルをコピーすることができます。</p>
                                    <p>今回はhellowworldprojectというプロジェクト名でを作成します。</p>
                                </div>
                            </div>
                            <div className="text-3xl m-4 text-center">
                                作成されたファイル
                            </div>
                            <p>startprojectコマンドによって作成されたファイルの中身について見ていきます。</p>

                            <div class="flex content-between">
                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">_init_.pyファイル</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Her.</p>
                                        <a href="http://www.agile-software.site/2022/04/23/init_-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>

                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">manage.pyファイル</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Herer.</p>
                                        <a href="http://www.agile-software.site/2022/04/23/manage-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">asgi.pyファイル</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here .</p>
                                        <a href="http://www.agile-software.site/2021/04/04/django/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">settings.pyファイル</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here</p>
                                        <a href="http://www.agile-software.site/2021/04/24/django-mysite-setting-py/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 w-1/5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                    </a>
                                    <div class="p-3">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">wsgi.pyファイル</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here.</p>
                                        <a href="http://www.agile-software.site/2022/04/23/wsgi-py%e3%83%95%e3%82%a1%e3%82%a4%e3%83%ab/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Nodejs_0>
                ) : id == "nodejs_detail_development" ? (
                    <Nodejs_0>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>以下の関連記事においてNode.jsの開発環境構築してください。</p>

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
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">エラー集2 nodejsインストール時unable to locate package</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        <a href="http://www.agile-software.site/2022/03/21/%e3%82%a8%e3%83%a9%e3%83%bc%e9%9b%862-nodejs%e3%82%a4%e3%83%b3%e3%82%b9%e3%83%88%e3%83%bc%e3%83%ab%e6%99%82unable-to-locate-package/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            記事を読む
                                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        </div>
                    </Nodejs_0>
                ) : (
                    <></>
                )
            }
        </div >
    )
}

export default Post

const Code1 = () => {
    const test = `
  django-admin startproject hellowworldproject
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};