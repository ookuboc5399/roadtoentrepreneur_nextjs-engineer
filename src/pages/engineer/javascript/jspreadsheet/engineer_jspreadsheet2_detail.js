import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NextPage } from 'next';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfPage from '../../../components/pdf/test';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ChapterJspreadsheet from '../../../components/chapter/programing/html/chapter_jspreadsheet';

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className='float-left' >
                <ChapterJspreadsheet />
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
                                <p>テーブルの保存はJspreadsheetの「download」というメソッドを使います</p>
                                <p></p>このdownloadを実行するとその場で保存ダイアログが開き、ファイルを保存できるようになります
                                <Code1 />
                            </div>
                        </div>
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>

                    </div>
                </div>


            </div>
        </div>


    )
}

const Code0 = () => {
    const test = `
    %%html
    <script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
    <link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
     
    <script src="https://jsuites.net/v4/jsuites.js"></script>
    <link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code1 = () => {
    const test = `
    %%html
<script src="https://bossanova.uk/jspreadsheet/v4/jexcel.js"></script>
<link rel="stylesheet" href="https://bossanova.uk/jspreadsheet/v4/jexcel.css" type="text/css" />
 
<script src="https://jsuites.net/v4/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v4/jsuites.css" type="text/css" />

<h3>Jspreadsheet spreadsheet!</h3>
<div id="spreadsheet"></div>
<div><button onclick="save();">Save</button></div>

<script>
const target = document.getElementById('spreadsheet');

const table = jspreadsheet(target, {
  data: [[],[],[],[],[],[],[],[],[],[],],
  columns: [[],[],[],[],[],[],[],[],[],[],],
});

function save() {
  table.download();
}
</script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
