import React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from "../../../../../components/header/header_engineer";
import Chaptertutorial15 from "../../../../../components/chapter/programing/tutorial/chapter_programing_tutorial15";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Tutorial_15_1() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial15 />
                </div>
                <div className="w-3/4">
                    <div className="ml-80">
                        <p>はじめに </p>
                        <p>Django REST Framework と Next.js でインスタ風の画像投稿サイトを構築していきます。</p>
                        <p>サブスク有料会員サイトチュートリアルのアカウント認証システムのプロジェクトを使用していきます </p>
                        <p>バックエンドはDjango、フロントエンドは Next.js と TailwindCSS を使用し、状態管理は Redux を使用します。</p>
                        <p>SSG(Static Site Generation) + ISR(Incremental Static Regeneration) の仕組みを採用して、画像の投稿、編集、削除の構築方法を学習していきます。</p>

                        <p>目標</p>
                        <p>下記を学習していきます。 </p>
                        <li>
                            SSG + ISRの仕組み
                            画像の投稿、編集、削除の構築方法
                        </li>
                        <p>本プロジェクトは下記のアカウント認証編が完了したプロジェクトを使用していきます。</p>
                        <p>アカウント認証編を実施していない方は、下記動画を参考にプロジェクトをご用意下さい。</p>
                        <p>機能。</p>
                        <li>
                            画像投稿
                            画像編集
                            画像削除
                        </li>


                        <p>#エラーが発生した場合</p>
                        <p>詳しいコードの解説は、Django REST Framework、NextJS、Stripe の公式ページを参考にして下さい。</p>

                        <p>Django REST Framework 公式ドキュメント</p>
                        <p>Next.js 公式ドキュメント</p>
                        <p>Stripe 公式ドキュメント</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>DRF 参照コード</p>
                        <p>Next.js 参照コード</p>
                        <p>#前提知識</p>

                        <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
                        <li>
                            HTML
                            CSS
                            JavaScript
                            NextJS
                            Redux
                            React
                            Django
                        </li>
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
                            <Link href="./engineer_tutorial_14_2">
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

