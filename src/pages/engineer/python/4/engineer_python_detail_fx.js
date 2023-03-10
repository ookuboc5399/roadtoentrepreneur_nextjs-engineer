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
                                    <p>Python??????????????????4??????ETF??????????????????????????????????????????</p>
                                    <ul className='list-disc'>
                                        <li> Small Growth???VBK</li>
                                        <li>Small Value???VBR</li>
                                        <li>Large Growth???VUG</li>
                                        <li>Large Value???VTV</li>
                                        <li>S&P500???^GSPC</li>
                                        <li>NASDAQ???^IXIC</li>
                                        <li>10????????????^TNX</li>
                                    </ul>

                                    <p>Python???yfinance????????????????????????</p>
                                    <Code1 />
                                    <Code4 />
                                    <p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                    <Code5 />
                                    <p></p>

                                    <h3>????????????????????????????????????????????????????????????????????????</h3>
                                    <Code6 />
                                    <p>??????????????????????????????????????????????????????????????????subplots=True??????????????????????????????????????????????????????????????????????????????</p>
                                    <Code7 />
                                    <p>?????????????????????????????????????????????????????????
                                        subplots=True,layout=(2, 2)?????????????????????????????????????????????
                                        ?????????????????????????????????????????????????????????????????????</p>
                                    <Code8 />
                                    <Code10 />
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

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code4 = () => {
    const test = `
    #??????????????????????????????????????????????????????
    codelist = ["VUG","VTV","VBK","VBR","^TNX"]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    data = yf.download(codelist, start=start, end=end)["Adj Close"]
    df_all=(data.pct_change(60))#??????????????????
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code6 = () => {
    const test = `
    df_all.rename(columns={'VBR':'Small Value','VTV':'Large Value',
    'VBK':'Small Growth','VUG':'Large Growth','^TNX':'10 Years Yield'},inplace=True)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    df_all2.plot(figsize=(16,9),fontsize=20,linewidth=2,alpha=0.5,subplots=True,grid=True)
    plt.xlabel(xlabel="")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code8 = () => {
    const test = `
    df_all.plot(figsize=(16,9),fontsize=10,linewidth=5,alpha=0.5,
    subplots=True,layout=(2, 2))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
import yfinance as yf
import datetime
import matplotlib.pyplot as plt
%matplotlib inline

start = datetime.date(2020,3,23)#????????????
end = datetime.date.today()

codelist = ["VUG","VTV","VBK","VBR"]

data = yf.download(codelist, start=start, end=end)["Adj Close"]
df_all=(1+data.pct_change()).cumprod()
df_all.rename(columns={'VBR':'Small Value','VTV':'Large Value','VBK':'Small Growth','VUG':'Large Growth'},inplace=True)

df_all.plot(figsize=(16,9),fontsize=30,linewidth=5,alpha=0.5)
plt.legend(fontsize=18)  

x1 = "2020-10-29" #????????????
plt.axvline(x1,color='gray',linewidth=2 )
x1 = "2021-02-13" #????????????
plt.axvline(x1,color='gray',linewidth=2 )
x1 = "2021-03-29" #????????????
plt.axvline(x1,color='gray',linewidth=2 )

plt.title("Growth vs Value  ,  Small vs Large",color='gray', fontsize=50)
plt.show()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};