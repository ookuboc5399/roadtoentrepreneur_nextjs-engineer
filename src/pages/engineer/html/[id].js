import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { HTML } from '../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "engineer_html_detail" ? (
                    <HTML>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="m-4">
                                    <div className="border border-pink-50 border-green-200 inline-block  w-2/4 h-2/4">
                                        {/* <PdfPage/> */}
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block  w-2/4 h-2/4">
                                        <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe>
                                    </div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Web3層アーキテクチャ</div>
                                </div>
                            </div>
                        </div>
                    </HTML>
                ) : id == "engineer_html_detail_2" ? (
                    <HTML>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="m-4">
                                    <div className="border border-pink-50 border-green-200 inline-block  w-2/4 h-2/4">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="bg-yellow-100 inline-block">

                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <div className="m-4 border border-green-100 inline-block w-2/4 h-2/4">
                                    <Swiper>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide1.PNG"
                                                alt="1"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide2.PNG"
                                                alt="2"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide3.PNG"
                                                alt="3"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="inline-block">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </HTML>
                ) : id == "engineer_html_detail3" ? (
                    <HTML>
                        <div className=''>

                            <div className="block clear-both">
                                <div className="border border-green-200 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="border border-green-200 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                </div>

                            </div>

                            <div className="boxA">
                                <div className="border border-green-100 float-left w-2/4 h-2/4">
                                    <Swiper>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide1.PNG"
                                                alt="1"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide2.PNG"
                                                alt="2"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide3.PNG"
                                                alt="3"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="border bborder-green-100 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </HTML>
                ) : id == "engineer_html2_detail" ? (
                    <HTML>
                        <div className='' >
                            <div className='inline-block'>
                                <p>HTMLにおける要素に相当します</p>
                                <Code1 />
                            </div>


                        </div>
                    </HTML>
                ) : id == "engineer_html2_detail2" ? (
                    <HTML>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="m-4">
                                    <div className="border border-pink-50 border-green-200 inline-block  w-2/4 h-2/4">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div className="bg-yellow-100 inline-block">

                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <div className="m-4 border border-green-100 inline-block w-2/4 h-2/4">
                                    <Swiper>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide1.PNG"
                                                alt="1"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide2.PNG"
                                                alt="2"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide3.PNG"
                                                alt="3"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="inline-block">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </HTML>
                ) : id == "engineer_html2_detail3" ? (
                    <HTML>
                        <div className=''>

                            <div className="block clear-both">
                                <div className="border border-green-200 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className="border border-green-200 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                </div>

                            </div>

                            <div className="boxA">
                                <div className="border border-green-100 float-left w-2/4 h-2/4">
                                    <Swiper>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide1.PNG"
                                                alt="1"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide2.PNG"
                                                alt="2"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Image
                                                src="/images/programing/python/slide3.PNG"
                                                alt="3"
                                                width={600}
                                                height={400}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="border bborder-green-100 float-left w-2/4 h-2/4">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4ZVmEFcOt0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </HTML>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Code1 = () => {
    const test = `
    <span></span>
    <div></div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};