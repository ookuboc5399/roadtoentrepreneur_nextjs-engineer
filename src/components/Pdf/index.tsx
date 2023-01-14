import { NextPage } from 'next';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Header_invester from '../header/header_invester';
import pdfjsWorkerSrc from '../../pdf-worker';
import Link from 'next/link';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

const PdfPage: NextPage = () => {
  const url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';
  const [numPages, setNumPages] = React.useState(1);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div>
            <Header_invester />
            <div className="flex">
                <div className="w-3/12">
                    <div className="bg-gray-900">
                        <div>
                            <div className="flex items-center justify-center">
                                <div className="flex items-center">
                                    <svg className="h-20 w-20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z" fill="#4C51BF" stroke="#4C51BF" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"></path>
                                        <path d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z" fill="white"></path>
                                    </svg>
                                    <span className="text-white text-3xl mx-2 font-semibold">Dashboard</span>
                                </div>
                            </div>
                            <nav className="">
                                <Link href="./fx/fx">
                                    <div className="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                        </svg>
                                        <span className="mx-3 text-2xl text-white">chapter1</span>
                                    </div>
                                </Link>
                                <Link href="./cryptocurrency/cryptocurrency">
                                    <div className="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                                        </svg>
                                        <span className="mx-3 text-2xl text-white">chapter2</span>
                                    </div>
                                </Link>
                                <Link href="./stock/stock">
                                    <div className="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                        </svg>
                                        <span className="mx-3 text-2xl text-white">chapter3</span>
                                    </div>
                                </Link>
                                <Link href="./engel_investment/engel_investment">
                                    <div className="flex items-center justify-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                        <span className="mx-3 text-2xl text-white">chapter4</span>
                                    </div>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="w-4/12">
                    <div className="text-center">
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k57V9FVvtho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
                <div className="w-5/12">
                    Hello world.pdf
                    <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                        <div style={{ border: 'solid 1px gray', width: 300, height: 300 }}>
                            <Page pageNumber={numPages} />
                        </div>
                    </Document>
                </div>
            </div>
        </div>
  );
};

export default PdfPage;