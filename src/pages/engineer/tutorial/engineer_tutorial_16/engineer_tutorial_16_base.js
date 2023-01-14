import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from "../../../../../components/header/header_engineer";
import Chaptertutorial16 from "../../../../../components/chapter/programing/tutorial/chapter_programing_tutorial16";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial16 />
                </div>
                <div className="w-3/4">
                    <div className="w-10/12 m-auto">
                        <h3>はじめに </h3>
                        <p>Django REST Framework と Next.js でシンプルなブログサイトを作成していきます。</p>
                        <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
                        <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
                        <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>


                        <h3>目標</h3>
                        <p>下記を学習していきます。 </p>
                        <ul className='list-disc'>
                            <li>Django REST Framework で API 構築方法</li>
                            <li>Next.js でサイト構築方法</li>
                            <li>Django REST Framework と Next.js の連携方法</li>
                            <li>TailwindCSS の使い方</li>
                        </ul>

                        <h3>機能 </h3>
                        <ul className='list-disc'>
                            <li>投稿一覧</li>
                            <li>投稿詳細</li>
                            <li>About</li>
                        </ul>



                        <h3>#エラーが発生した場合</h3>
                        <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

                        <p>Django REST Framework 公式ドキュメント</p>
                        <p>Next.js 公式ドキュメント</p>

                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>DRF 参照コード</p>
                        <p>Next.js 参照コード</p>
                        <h3>#前提知識</h3>

                        <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
                        <ul className='list-disc'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Django</li>
                        </ul>

                        <p>では、始めて行きましょう！！</p>
                    </div>
                    <div class="w-44 rounded overflow-hidden shadow-2xl bg-blue-300 text-center flex float-right mr-20">
                        <div class="inline-block flex-1">
                            <div class="">
                                NEXT
                            </div>
                            <div class="">
                                準備
                            </div>
                        </div>
                        <div className="inline-block align-middle cursor-pointer">
                            <Link href="./engineer_tutorial_16_2">
                                <div className="inline-block align-middle h-full">
                                    <FontAwesomeIcon icon={faArrowRight} size="3x" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

