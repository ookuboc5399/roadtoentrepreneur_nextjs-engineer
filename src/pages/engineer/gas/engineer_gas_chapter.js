import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const engineer_detail = () => {
    return (
        <div>

            <div class="bg-gray-200 ">
                <div class="sticky top-0">
                <Image
                    src="/svg/road to entrepreneur.svg"
                    alt="01:Pythonとは？"
                    width={150}
                    height={150}
                /> 
                </div>
                <div class="">
                    <div class="language-show__header text-center">
                    <h1>Google Apps Script</h1>
                    <p>Webページの
                    見た目をつくる言語
                    </p>
                    </div>
                    <div className="flex">
                        <div className="flex-1 max-w-5xl m-auto ">
                            <div className="pt-40">
                                <div className="block">
                                    <div className="box-border">
                                        <div className="inline-block bg-white">
                                            <div className="float-left bg-green-300 h-full items-center">
                                                <div>
                                                    <Image
                                                    src="/svg/20.svg"
                                                    alt="01:Pythonとは？"
                                                    width={100}
                                                    height={100}

                                                    />
                                                </div>
                                                <div>
                                                    <div>

                                                    </div>
                                                </div>
                                                <p></p>
                                            </div>
                                            <div className="relative float-right m-10">
                                                <p className="rounded-3xl border-l border-green-300 p-3 text-green-300">学習コース</p>
                                                <div></div>
                                                <span className="border-r-2 p-4 text-2xl">Google Apps Scriptの紹介</span>
                                                <span className="pl-4">
                                                    <Image
                                                        src="/svg/time.svg"
                                                        alt="01:Pythonとは？"
                                                        width={20}
                                                        height={20}

                                                    />
                                                    <span>目安時間　3h50m</span>
                                                </span>
                                                <div>
                                                    <div>
                                                        <div>

                                                        </div>
                                                        <p></p>
                                                    </div>
                                                    <div class="p-4">
                                                        WEBページはHTML、CSSという言語によってその見た目が作られています。実際にWEBページを作りながら学んでみましょう！
                                                    </div>
                                                    <div className="float-right">
                                                        <div className="text-green-300">
                                                        <Link href="./1/engineer_gas_detail">
                                                            <div>
                                                                <button className="w-36 bg-green-300 text-white">
                                                                レッスン詳細へ
                                                                </button>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-10 bg-gray-300 rounded ml-12 mt-10"></div>
                                        <div className=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-1 max-w-5xl m-auto ">
                            <div className="pt-10">
                                <div className="block">
                                    <div className="box-border">
                                        <div className="inline-block bg-white">
                                            <div className="float-left bg-green-300 h-full items-center">
                                                <div>
                                                    <Image
                                                    src="/svg/20.svg"
                                                    alt="01:Pythonとは？"
                                                    width={100}
                                                    height={100}

                                                    />
                                                </div>
                                                <div>
                                                    <div>

                                                    </div>
                                                </div>
                                                <p></p>
                                            </div>
                                            <div className="relative float-right m-10">
                                                <p className="rounded-3xl border-l border-green-300 p-3 text-green-300">学習コース</p>
                                                <div></div>
                                                <span className="border-r-2 p-4 text-2xl">Google Apps Script初級編</span>
                                                <span className="pl-4">
                                                    <Image
                                                        src="/svg/time.svg"
                                                        alt="01:Pythonとは？"
                                                        width={20}
                                                        height={20}

                                                    />
                                                    <span>目安時間　3h50m</span>
                                                </span>
                                                <div>
                                                    <div>
                                                        <div>

                                                        </div>
                                                        <p></p>
                                                    </div>
                                                    <div class="p-4">
                                                        WEBページはHTML、CSSという言語によってその見た目が作られています。実際にWEBページを作りながら学んでみましょう！
                                                    </div>
                                                    <div className="float-right">
                                                        <div className="text-green-300">
                                                        <Link href="./2/engineer_gas_detail_script">
                                                            <div>
                                                                <button className="w-36 bg-white text-green-300">
                                                                    レッスン詳細へ
                                                                </button>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-2.5 h-10 bg-gray-300 rounded ml-12 mt-10"></div>
                                        <div className=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default engineer_detail
