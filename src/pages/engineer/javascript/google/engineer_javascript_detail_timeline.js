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
                                    <Link href="https://colab.research.google.com/drive/1aEvAdeTICN8bv0zpq1PU1ILeNDrMdPTD?usp=sharing">
                                        <div className="text-4xl">
                                        <Image
                                            src="/images/googlecolabora.png"
                                            alt=""
                                            width={48}
                                            height={48}
                                        />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="border-2 border-pink-50 inline-block">
                                <div></div>
                                <div>
                                    <p>??????????????????????????????</p>
                                    <Code2 />
                                    <p></p>
                                    <p className='text-xl border-b-4 border-blue-400'>????????????????????????????????????????????????????????????</p>
                                    <p>???????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                    <Code3 />
                                    <p></p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                    <p></p>
                                    <Code4 />
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

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    google.charts.load('current', {packages: ['timeline'], language: 'ja'});
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    %%html
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {packages: ['timeline'], language: 'ja'});
    google.charts.setOnLoadCallback(drawChart);
    
    const data = [
      ['??????????????????', '?????????', '??????', '??????'],
      [ '????????????', '??????', new Date(2021, 10, 1), new Date(2021, 11, 30) ],
      [ '????????????',  '????????????', new Date(2021, 10, 15),  new Date(2021, 11, 15) ],
      [ '????????????',  '??????', new Date(2021, 11, 10),  new Date(2021, 11, 25) ],
      [ '??????',  '?????????????????????', new Date(2021, 11, 1),  new Date(2021, 11, 31) ],
      [ '??????',   '?????????????????????', new Date(2021, 12, 1),  new Date(2022, 2, 31) ],
      [ '?????????',  '?????????', new Date(2022, 2, 1),  new Date(2022, 2, 30) ],
    ];
    
    function drawChart() {
      const div = document.querySelector('#chart');
      const chart = new google.visualization.Timeline(div);
      const dataTable = new google.visualization.arrayToDataTable(data);
      chart.draw(dataTable);
    }
    </script>
    
    <div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    %%html
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    google.charts.load('current', {packages:["orgchart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    const ob = [
      ['??????', '??????', '??????'],
      ['????????????', '', '??????'],
      ['????????????', '????????????', '??????'],
      ['????????????', '????????????', '??????'],
      ['????????????', '????????????', '??????'],
      ['????????????', '????????????', '??????'],
    ]
    
    function drawChart() {
      const  data = google.visualization.arrayToDataTable(ob);
      const div = document.querySelector('#chart')
      const chart = new google.visualization.OrgChart(div);
      chart.draw(data);
      
      google.visualization.events.addListener(chart, 'select', (event)=> {
        const target = chart.getSelection();
        const row = target[0].row;
        const nodes = chart.getCollapsedNodes();
        for(let i in nodes) {
          if (nodes[i] == row) {
            chart.collapse(row, false);
            chart.setSelection(row);
            return;
          }
        }
        chart.collapse(row, true);
        chart.setSelection(row);
      });
    }
    </script>
    <div id="chart"></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    google.visualization.events.addListener(????????????, ???????????????, (event)=> {
        ??????????????????
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};





