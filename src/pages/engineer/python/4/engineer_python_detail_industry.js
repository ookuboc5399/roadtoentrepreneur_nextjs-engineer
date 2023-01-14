import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NextPage } from 'next';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfPage from '../../../../components/pdf/test';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ChapterPython3 from '../../../../components/chapter/programing/python/chapter_python3';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <ChapterPython3 />
                </div>
                <div className='' >
                    <div className='inline-block'>
                        <div className="">
                            <div className="m-4 flex">
                                <div className="flex-auto">
                                    <Link href="/future_world/AI/ai">
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
                                <div></div>
                                <div>
                                    <p></p>
                                    <Code1 />
                                    <h3>業種別の株価を表示する関数</h3>
                                    <p></p>
                                    <Code2 />


                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

const Code1 = () => {
    const test = `
    pip install yfinance
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    import datetime
import yfinanceas yf
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

#開始・終了日の設定
start = datetime.date.today() - datetime.timedelta(days=100)
end = datetime.date.today()

#対象ティッカーシンボルのデータを取得
codelist = ["VDE","VFH","VAW","VIS","IYR","VOX","VDC","VCR","VHT","VGT","VPU","^TNX"]
data = yf.download(codelist, start=start, end=end)["Adj Close"]
df_all=(1+data.pct_change()).cumprod()

#'VDE'：'エネルギー','VFH'：'金融','VAW'：'素材','VIS'：'資本財','IYR'：'不動産',
#'VOX'：'通信','VDC'：'生活必需品','VCR'：'一般消費財',
#'VHT'：'ヘルスケア','VGT'：'情報通信','VPU'：'公共事業'

df_all.rename(columns={'VDE':'Energy',
                      'VFH':'Finance',
                      'VAW':'Material',
                      'VIS':'Industrials',
                      'IYR':'Real Estate',
                      'VOX':'Telecommunication Services',
                      'VDC':'Consumer Staples',
                      'VCR':'Consumer Discretionary',
                      'VHT':'Health Care',
                      'VGT':'Information Technology',
                      'VPU':'Utilities',
                      '^TNX':'10 Year Treasury'},inplace=True)
#グラフ化 3パターン
df_all.plot(figsize=(16,9),fontsize=10,linewidth=2,alpha=0.5,subplots=True,layout=(4,4),grid=True)
df_all.iloc[:,[0,1,2,3,4,5,6,7,8,9,10]].plot(figsize=(16,9),fontsize=10,linewidth=2,alpha=0.5,grid=True)
df_all.plot(figsize=(9,20),fontsize=10,linewidth=2,alpha=0.5,subplots=True,grid=True)
plt.show()

#ここまで
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


