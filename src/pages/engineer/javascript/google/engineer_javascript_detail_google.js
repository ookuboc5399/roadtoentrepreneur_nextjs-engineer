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
import Chapterjavascript_google from '../../../../components/chapter/programing/javascript/chapter_programing_javascript_google';

export default function Home() {
    return (
        <div className=''>
            <Header_engineer />
            <div className='flex'>
                <div className="w-1/4">
                    <Chapterjavascript_google />
                </div>
                <div className='' >
                    <div className=''>
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
                                    <p>Google Chart???????????????????????????????????????????????????????????????????????????????????????</p>
                                    <ul>
                                        <li>?????????????????????</li>
                                        <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                        <li>?????????</li>
                                        <p>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                        <li>???????????????????????? </li>
                                        <p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                    </ul>
                                    <div class="w-full p-6">
                                        <div class="bg-white border-transparent rounded-lg shadow-xl">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">Google Chart???????????????</h2>
                                            </div>
                                            <div class="p-2 inline-block">
                                            <p className='text-xl border-b-4 border-blue-400'>???????????????????????????</p>
                                            <p></p>
                                                <Code10 />
                                                <p className='text-xl border-b-4 border-blue-400'>???????????????????????????</p>
                                                <p>???????????????????????????????????????1?????????'current'</p>
                                                <Code11 />
                                                <p className='text-xl border-b-4 border-blue-400'>???????????????????????????</p>
                                                <p>????????????????????????????????????????????????????????????????????????setLoadCallback????????????????????????????????????????????????????????????????????????</p>
                                                <Code12 />
                                                <p className='text-xl border-b-4 border-blue-400'>DataTable???????????????????????????</p>
                                                <p>?????????????????????????????????DataTable?????????????????????????????????????????????</p>
                                                <p>newDataTable?????????????????????arrayToDataTable???????????????????????????????????????2??????????????????DataTable???????????????????????????????????????</p>
                                                <Code13 />
                                                <Code14 />
                                                <p className='text-xl border-b-4 border-blue-400'>??????????????????????????????????????????</p>
                                                <Code15 />
                                                <p>?????????????????????????????????DataTable?????????????????????????????????????????????</p>
                                                <p>???????????????????????????????????????<a href='/engineer/html/html2/engineer_html2_detail'>???????????????</a>?????????????????????</p>
                                                <p className='text-xl border-b-4 border-blue-400'>?????????????????????</p>
                                                <p>??????????????????????????????????????????draw????????????????????????????????????????????????????????????</p>
                                                <Code16 />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xl">??????DOM???????????????</p>
                                    <div className='flex justify-center'>

                                        <Image
                                            src="/images/dom.png"
                                            alt=""
                                            width={600}
                                            height={200}
                                        />
                                    </div>
                                    <div class="w-full p-6">
                                        <div class="bg-white border-transparent rounded-lg shadow-xl">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">?????????????????????????????????(npm/yarn)</h2>
                                            </div>
                                            <div class="p-2 inline-block">
                                                ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                                                npm?????????
                                                <Code1 />
                                                yarn?????????
                                                <Code2 />
                                                ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                ????????????????????????????????????????????????????????????package.json????????????????????????????????????????????????????????????<br />
                                                ??????????????????npm????????????????????????????????????package-lock.json???yarn????????????????????????????????????yarn.lock?????????????????????????????????<br />
                                                lock??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                                                package.json???package-lock.json???2??????????????????????????????????????????????????????node_modules?????????????????????
                                                ?????????????????????????????????????????????????????????node_modules????????????????????????????????????????????????????????????????????????????????????
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-6">
                                        <div class="bg-white border-transparent rounded-lg shadow-xl">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">data????????????</h2>
                                            </div>
                                            <div class="p-2 inline-block">
                                                <Code3 />
                                            </div>
                                            <div class="p-2 inline-block">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-6">
                                        <div class="bg-white border-transparent rounded-lg shadow-xl">
                                            <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                                <h2 class=" text-gray-600">columns????????????</h2>
                                            </div>
                                            <div class="p-2 inline-block">
                                                <Code4 />
                                            </div>
                                            <div class="p-2 inline-block">
                                                ????????????????????????????????????text???????????????????????????numeric????????????????????????
                                            </div>
                                        </div>
                                    </div>
                                    <p></p>???????????????????????????????????????Name??????Mail??????Age???????????????????????????????????????????????????
                                    <Code1 />
                                    <p></p>????????????????????????????????????????????????????????????????????????????????????
                                    <p></p>?????????????????????????????????????????????????????????????????????
                                    <p></p>??????????????????????????????????????????
                                    <p></p>data??????????????????3??????????????????????????????????????????
                                    <p></p>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                    <Code2 />
                                    <p></p>&lt;div&gt;??????style?????????width???height???????????????????????????????????????
                                    <p></p>
                                    <Code3 />
                                    <p></p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                    <p></p>
                                    <p></p>
                                    <p></p>
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
    npm install [??????????????????]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    yarn add [??????????????????]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    [
        [???1, ???2, ???3],
        [???1, ???2, ???3],
       ......
      ];
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    {
        type: ??????????????????,
        title:????????????,
        width:??????,
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    jspreadsheet(target, {
        data:data,
        columns: [...],
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    google.charts.load('current', {packages:["orgchart"]});
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
google.charts.setOnLoadCallback(??????);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
?????? = new google.visualization.DataTable();
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
?????? = google.visualization.arrayToDataTable(?????????);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code15 = () => {
    const test = `
const chart = new google.visualization.????????????(???????????????);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code16 = () => {
    const test = `
????????????.draw(DataTable);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};