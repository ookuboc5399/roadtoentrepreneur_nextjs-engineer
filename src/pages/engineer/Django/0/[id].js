import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Django } from '../../../../components/layout/engineer/engineer';


const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "django_detail" ? (
                    <Django>
                        <div className="">

                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>DjangoはPythonによるWebアプリケーションフレームワークと呼ばれています。</p>
                                    <p>フレームワークWebアプリを開発するために便利な部品やツールをひとまとめにしたもので効率的にアプリケーションを作ることができるようになる</p>
                                    <li>テンプレートエンジン</li>
                                    <li> データベース(O/Rマッパー)</li>
                                    <li>管理画面</li>
                                    <li>ユーザー認証</li>
                                    <p></p>
                                    <p>文字起こしをするスマートフォン用アプリを作成したりなど、多種多様なシステムを開発することが可能です。</p>
                                    <p>200種類ものサービスには仮想的なサーバーを提供するサービスやストレージを提供するサービス、データベースシステムを提供するサービス、人工知能を提供するサービスなど様々です。</p>
                                </div>
                            </div>
                            <div className="text-3xl m-4">
                                関連記事
                            </div>


                            <div class="flex flex-nowrap">
                                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                    <a href="#">
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                    </Django>
                ) : id == "django_detail_views" ? (
                    <Django>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>クラウドとは雲のように実態が見えないネットワーク上のサービスを表すものであり、IT用語のバズワードの1つです。</p>
                                    <p>クラウドの対義語はオンプレミスです。オンプレミスとはサーバーなどのインフラ設備を自社内で構築することを言います。</p>
                                    <p>クラウドサービスを提供するAWSのような大企業のセキュリティの管理下に機密データを保管しておいた方が自社でサーバーを構築して機密データを保管しておくより安全と言えます</p>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>クラウドサービス</div>
                                    <div>
                                        Saas(Software as a Service)
                                        <p>完成されたソフトウェアやアプリケーションをクラウドで提供すること。</p>
                                    </div>
                                    <div>
                                        Paas(Platform as a Service)
                                        <p>オペレーティングシステムや開発環境、ネットワーク環境等をクラウドで提供すること。</p>
                                    </div>
                                    <div>
                                        Iaas(Infrastructure as a Service)
                                        <p>ソフトウェアを稼働させるために必要となる基盤をクラウドで提供すること。クラウドのストレージサービスやネットワークサーバー等が該当します</p>
                                    </div>
                                    <p>AWSはPaaSやIaaSに該当し、サービスとして提供されるミドルウェアに開発者が自らシステムを構築する</p>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想化技術</div>

                                    <p>AWSのサービスにはサーバーをレンタルするサービスがあります。また、ストレージをレンタルしたりすることもできます。</p>

                                    <p>これは仮想化という技術によって成り立っています。</p>
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

                        </div>
                    </Django>
                ) : id == "django_detail_urls" ? (
                    <Django>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>クラウドとは雲のように実態が見えないネットワーク上のサービスを表すものであり、IT用語のバズワードの1つです。</p>
                                    <p>クラウドの対義語はオンプレミスです。オンプレミスとはサーバーなどのインフラ設備を自社内で構築することを言います。</p>
                                    <p>クラウドサービスを提供するAWSのような大企業のセキュリティの管理下に機密データを保管しておいた方が自社でサーバーを構築して機密データを保管しておくより安全と言えます</p>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>クラウドサービス</div>
                                    <div>
                                        Saas(Software as a Service)
                                        <p>完成されたソフトウェアやアプリケーションをクラウドで提供すること。</p>
                                    </div>
                                    <div>
                                        Paas(Platform as a Service)
                                        <p>オペレーティングシステムや開発環境、ネットワーク環境等をクラウドで提供すること。</p>
                                    </div>
                                    <div>
                                        Iaas(Infrastructure as a Service)
                                        <p>ソフトウェアを稼働させるために必要となる基盤をクラウドで提供すること。クラウドのストレージサービスやネットワークサーバー等が該当します</p>
                                    </div>
                                    <p>AWSはPaaSやIaaSに該当し、サービスとして提供されるミドルウェアに開発者が自らシステムを構築する</p>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>仮想化技術</div>

                                    <p>AWSのサービスにはサーバーをレンタルするサービスがあります。また、ストレージをレンタルしたりすることもできます。</p>

                                    <p>これは仮想化という技術によって成り立っています。</p>
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

                        </div>
                    </Django>
                ) : id == "django_detail_project" ? (
                    <Django>
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                                        <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
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
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>startappコマンドとは？</div>
                            <p>Djangoでは1つのプロジェクトの中に機能に応じて複数のアプリケーションを作っていきます。</p>
                            <Code2 />
                            <p>hellowworldprojectの中にhellowworldprojectとbbsの2つのディレクトリができました。、中にあるhellowworldprojectでプロジェクト全体を管理してbbsで掲示板アプリケーションを作っていきます</p>
                            <p>startappコマンドのおかげでアプリケーションに必要なファイルが自動的に生成されている
                            </p>
                            <p>ウェブサーバーへのリクエストに応じてインデックス関数を呼び出してHello worldを返します</p>
                            <Code3 />
                            <p>ルーティングはウェブサーバーのURLとプログラムを紐づける役割</p>
                            <p>Djangoではプロジェクトとアプリケーションの2段階でルーティングを設定します。</p>
                            <h3>bbsアプリケーション側のルーティング設定</h3>
                            <Code4/>
                            <p>urlpatternsのリストの中でpath関数を呼び出してURLとコードを紐づけします。サーバーアドレスの後にbbsがある場合bbsアプリケーションのurls.pyを利用する</p>
                            <h3>bbsアプリケーション側のルーティング設定</h3>
                            <Code4/>
                            <h3>アプリケーション登録</h3>
                            <p>bbsアプリケーションをプロジェクトに登録するためhellowworldprojectのsettings.pyに追記します</p>
                            <p>bbsディレクトリのapp.pyに自動生成されたBbsConfigクラスを登録しています。</p>
                            <Code5/>
                        </div>
                    </Django>
                ) : (
                    <></>
                )}
        </div>
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

const Code2 = () => {
    const test = `
    python manage.py startapp bbs
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
    from django.urls import path
    from . import views
    
    urlpatterns = [
        path('', views.index, name='index'),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    INSTALLED_APPS = [
        'bbs.apps.BbsConfig',
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
