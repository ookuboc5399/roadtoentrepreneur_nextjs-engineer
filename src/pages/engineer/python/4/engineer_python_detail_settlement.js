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
                                    <p>edgarのデータを取得できるpackageのインストール</p>
                                    <Code1 />
                                 
                                    <h3>edgarから決算を情報を取得して、html表示する関数</h3>
                                    <p></p>
                                    <Code2 />

                                    <p>取得したい会社のticker、決算資料名、いつからのデータを取得するかdateを設定してください</p>

                                    <Code3 />
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
    pip install sec-edgar-downloader
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    import pandas as pd
    from IPython.display import display, HTML
    from sec_edgar_downloader import Downloader
    import glob
    
    
    #　20201208更新　⭐️これ追加。
    from bs4 import BeautifulSoup

    #エドガーのデータを格納するためのファイルパスを設定
    save_path = "/Users/XXXXXX/Desktop/edgar"
    
    #取得したい会社のticker、決算資料名、いつからのデータを取得するかdateを引数とする
    
    def get_edgar(ticker,file,after_date):
    
       dl = Downloader(save_path)
       
       #取得実行
       file_count = dl.get(file, ticker ,after_date=after_date)
       
       if file_count == 0:
           print('取得ファイルなし')
           return 
    
       #最新決算を取得(⭐️txtデータのみを取得、20201208更新)
       #print(save_path + "/edgar/sec_edgar_filings/" + ticker +"/8-K/*.txt")
       kessan_list = glob.glob(save_path + "/sec_edgar_filings/" + ticker +"/"+file+"/"+"*")
       #ファイルをソート
       kessan_list.sort()
       #最新の決算情報を取得
       ticker_file_path = kessan_list[-1]
       
       #一旦開いてゴミを削除
       #-----------------------------------------------------------
       with open(ticker_file_path) as f:
           txt = f.read()
    
           if file == 'S-1':
               txt = txt.split('XBRL INSTANCE DOCUMENT')[0]
                      
           txt = txt.split('XBRL TAXONOMY EXTENSION SCHEMA DOCUMENT')[0]  
           #txt = txt.split('@(" @("')[0]    
           txt = txt.split('EXCEL')[0]        
       #-----------------------------------------------------------
       
       # HTMLで保存し直す　20201208更新　⭐️これ追加。
       #---------------------------------------------------
       # txtから BeautifulSoup オブジェクトを作る
       soup = BeautifulSoup(txt, 'html.parser')
       #print(soup.prettify()) 
    
       #HTMLを整形
       soup_txt = soup.prettify()
       #保存するファイル名作成
       path_w = ticker_file_path + '.html'
    
       #HTMLファイル出力
       with open(path_w, mode='w') as f:
           f.write(soup_txt)
       #----------------------------------------------------
       
       # HTMLを返す
       return display(HTML(txt))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    get_edgar('ZM',"10-Q",20201001)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

