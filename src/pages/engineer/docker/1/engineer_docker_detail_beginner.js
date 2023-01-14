import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../components/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Chapterdocker from '../../../../components/chapter/programing/docker/chapter_programing_docker';

export default function Home() {
    return (
        <div>
            <Header_engineer />
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

    )
}

