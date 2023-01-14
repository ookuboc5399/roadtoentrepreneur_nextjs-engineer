import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Tutorial from '../../../components/tutorial';
import {Layout_tutorial_chapter} from '../../../components/layout/engineer/tutorial';
import Tutorial2 from '../../../components/tutorial2';


export default function Home({ tutorials, tutorials2 }) {

    return (
        <Layout_tutorial_chapter>
            <div className='flex justify-start'>
                <Link href="/engineer/engineer">
                    <div className="text-4xl pl-10 pt-4">
                        <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                    </div>
                </Link>
            </div>
            <div className='flex'>
                <div className="w-full m-10">
                    <div className='text-center'>
                        <h1>Totorial</h1>
                        <p>Django+React+Nextjs</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        {tutorials && tutorials.map((tutorial) => <Tutorial key={tutorial.id} tutorial={tutorial} />)}
                    </div>
                </div>
                <div className="w-full m-10">
                    <div className='text-center'>
                        <h1>Totorial</h1>
                        <p>Django+React+Nextjs</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        {tutorials2 && tutorials2.map((tutorial2) => <Tutorial2 key={tutorial2.id} tutorial2={tutorial2} />)}
                    </div>
                </div>
            </div>
        </Layout_tutorial_chapter>
    );
}

export async function getStaticProps() {
    const tutorials = [
        { id: 1, name: "チュートリアル1", title: "Djangoブログシステム構築", href: "/engineer/tutorial/engineer_tutorial/1" },
        { id: 2, name: "チュートリアル2", title: "Djangoブログ新機能追加", href: "/engineer/tutorial/engineer_tutorial_2/1" },
        { id: 3, name: "チュートリアル3", title: "ポートフォリオ構築", href: "/engineer/tutorial/engineer_tutorial_3/1" },
        { id: 4, name: "チュートリアル4", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/1" },
        { id: 5, name: "チュートリアル5", title: "書籍検索システム構築", href: "/engineer/tutorial/engineer_tutorial_5/1" },
        { id: 6, name: "チュートリアル6", title: "レストラン検索システム構築", href: "/engineer/tutorial/engineer_tutorial_6/1" },
        { id: 7, name: "チュートリアル7", title: "ECサイトシステム構築", href: "/engineer/tutorial/engineer_tutorial_7/1" },
        { id: 8, name: "チュートリアル8", title: "予約サイトシステム構築", href: "/engineer/tutorial/engineer_tutorial_8/1" },
        { id: 9, name: "チュートリアル9", title: "認証機能構築", href: "/engineer/tutorial/engineer_tutorial_9/1" },
        { id: 10, name: "チュートリアル10", title: "LINE風チャット機能構築", href: "/engineer/tutorial/engineer_tutorial_10/1" },
        { id: 11, name: "チュートリアル11", title: "APIシステム構築", href: "/engineer/tutorial/engineer_tutorial_11/1" },
        { id: 12, name: "チュートリアル12", title: "Herokuデプロイ", href: "/engineer/tutorial/engineer_tutorial_12/1" },
        { id: 13, name: "チュートリアル13", title: "VPSデプロイ", href: "/engineer/tutorial/engineer_tutorial_13/1" },
        { id: 14, name: "チュートリアル14", title: "Django REST Framework + NextJS + Stripe", href: "/engineer/tutorial/engineer_tutorial_14/1" },
        { id: 15, name: "チュートリアル15", title: "Django REST Framework + NextJS インスタ風画像投稿", href: "/engineer/tutorial/engineer_tutorial_15/1" },
        { id: 16, name: "チュートリアル16", title: "Django REST Framework + NextJS ブログ構築", href: "/engineer/tutorial/engineer_tutorial_16/1" },
        { id: 17, name: "チュートリアル17", title: "Django REST Framework + React Hooks", href: "/engineer/tutorial/engineer_tutorial_17/1" },
        { id: 18, name: "チュートリアル18", title: "Django REST Framework + React Hooks Youtube編", href: "/engineer/tutorial/engineer_tutorial_18/1" },
        { id: 19, name: "チュートリアル19", title: "Redux + React Hooks + TypeScript COVID19", href: "/engineer/tutorial/engineer_tutorial_19/1" },
        { id: 20, name: "チュートリアル20", title: "CoinMarketCap", href: "/engineer/tutorial/engineer_tutorial_20/1" },
        { id: 21, name: "チュートリアル21", title: "Disney+", href: "/engineer/tutorial/engineer_tutorial_21/1" },
        { id: 22, name: "チュートリアル22", title: "Amazon", href: "/engineer/tutorial/engineer_tutorial_22/1" },
        { id: 23, name: "チュートリアル23", title: "Twitter", href: "/engineer/tutorial/engineer_tutorial_23/1" },
        { id: 24, name: "チュートリアル24", title: "Tinder", href: "/engineer/tutorial/engineer_tutorial_24/1" },
        { id: 25, name: "チュートリアル25", title: "spotify", href: "/engineer/tutorial/engineer_tutorial_25/1" },
        { id: 26, name: "チュートリアル26", title: "raddit", href: "/engineer/tutorial/engineer_tutorial_26/1" },
        { id: 27, name: "チュートリアル27", title: "airbnb", href: "/engineer/tutorial/engineer_tutorial_27/1" },
        { id: 28, name: "チュートリアル28", title: "Uber", href: "/engineer/tutorial/engineer_tutorial_28/1" },
        { id: 29, name: "チュートリアル29", title: "Google", href: "/engineer/tutorial/engineer_tutorial_29/1" },
        { id: 30, name: "チュートリアル30", title: "Facebook", href: "/engineer/tutorial/engineer_tutorial_30/1" },
        { id: 31, name: "チュートリアル31", title: "Linkdin", href: "/engineer/tutorial/engineer_tutorial_31/1" },
        { id: 32, name: "チュートリアル32",  title: "Whatapp", href: "/engineer/tutorial/engineer_tutorial_32/1" },
        { id: 33, name: "チュートリアル33",  title: "Gmail", href: "/engineer/tutorial/engineer_tutorial_33/1" },
        { id: 34, name: "チュートリアル34",  title: "Netflix", href: "/engineer/tutorial/engineer_tutorial_34/1" },
        { id: 35, name: "チュートリアル35",  title: "Slack", href: "/engineer/tutorial/engineer_tutorial_35/1" },
        { id: 36, name: "チュートリアル36",  title: "Discord", href: "/engineer/tutorial/engineer_tutorial_36/1" },
        { id: 37, name: "チュートリアル37",  title: "Hulu", href: "/engineer/tutorial/engineer_tutorial_37/1" },
        { id: 38, name: "チュートリアル38",  title: "sanity", href: "/engineer/tutorial/engineer_tutorial_38/1" },
        { id: 39, name: "チュートリアル39",  title: "deliveroo", href: "/engineer/tutorial/engineer_tutorial_39/1" },
        { id: 40, name: "チュートリアル40",  title: "Modern Portfolio", href: "/engineer/tutorial/engineer_tutorial_40/1" },
        { id: 41, name: "チュートリアル41",  title: "Nextjs+Tailwindcss+Django REST Framework", href: "/engineer/tutorial/engineer_tutorial_41/1" },
        { id: 42, name: "チュートリアル42", title: "Uber Eats", href: "/engineer/tutorial/engineer_tutorial_42/1" },
        { id: 43, name: "チュートリアル43", title: "Instagram", href: "/engineer/tutorial/engineer_tutorial_43/1" },
        { id: 44, name: "チュートリアル44", title: "Mantine UI", href: "/engineer/tutorial/engineer_tutorial_44/1" },
        { id: 45, name: "チュートリアル45",  title: "High Performance React Web開発", href: "/engineer/tutorial/engineer_tutorial_45/1" },
        { id: 46, name: "チュートリアル46",  title: "Go", href: "/engineer/tutorial/engineer_tutorial_46/engineer_tutorial_46_1" },
        { id: 47, name: "チュートリアル47",  title: "Nextjs+Supabase", href: "/engineer/tutorial/engineer_tutorial_47/1" },
        { id: 48, name: "チュートリアル48",  title: "React Testing", href: "/engineer/tutorial/engineer_tutorial_48/1" },
        { id: 49, name: "チュートリアル49",  title: "Build a Location-Based Real Estate Website)", href: "/engineer/tutorial/engineer_tutorial_49/1" },
        { id: 50, name: "チュートリアル50",  title: "Web API(楽天API,FastAPI,会議室予約API)", href: "/engineer/tutorial/engineer_tutorial_50/1" },
    ];

    const tutorials2 = [
        { id: 51, name: "チュートリアル51",  title: "Streamlit", href: "/engineer/tutorial/engineer_tutorial_51/1" },
        { id: 52, name: "チュートリアル52",  title: "Complete JavaScript(MAPTY)", href: "/engineer/tutorial/engineer_tutorial_52/1" },
        { id: 53, name: "チュートリアル53",  title: "Twitter App", href: "/engineer/tutorial/engineer_tutorial_53/1" },
        { id: 54, name: "チュートリアル54",  title: "Nextjs + Hasura + Apollo Client", href: "/engineer/tutorial/engineer_tutorial_54/1" },
        { id: 55, name: "チュートリアル55",  title: "GraphQL SNS機能", href: "/engineer/tutorial/engineer_tutorial_55/1" },
        { id: 56, name: "チュートリアル56",  title: "Portfolio", href: "/engineer/tutorial/engineer_tutorial_56/1" },
        { id: 57, name: "チュートリアル57",  title: "機械学習", href: "/engineer/tutorial/engineer_tutorial_57/1" },
        { id: 58, name: "チュートリアル58",  title: "画像認識技術", href: "/engineer/tutorial/engineer_tutorial_58/1" },
        { id: 59, name: "チュートリアル59",  title: "Yelp Camp", href: "/engineer/tutorial/engineer_tutorial_59/1" },
        { id: 60, name: "チュートリアル60",  title: "Azure(IaaS)", href: "/engineer/tutorial/engineer_tutorial_60/1" },
        { id: 61, name: "チュートリアル61",  title: "Azure(PaaS)", href: "/engineer/tutorial/engineer_tutorial_61/1" },
        { id: 62, name: "チュートリアル62",  title: "Web Scraping", href: "/engineer/tutorial/engineer_tutorial_62/1" },
        { id: 63, name: "チュートリアル63",  title: "FastAPI + React", href: "/engineer/tutorial/engineer_tutorial_63/1" },
        { id: 64, name: "チュートリアル64",  title: "Linux", href: "/engineer/tutorial/engineer_tutorial_64/1" },
        { id: 65, name: "チュートリアル65",  title: "ebay", href: "/engineer/tutorial/engineer_tutorial_65/1" },
        { id: 66, name: "チュートリアル66",  title: "T3 Stack", href: "/engineer/tutorial/engineer_tutorial_66/1" },
        { id: 67, name: "チュートリアル67",  title: "NFT DROP", href: "/engineer/tutorial/engineer_tutorial_67/1" },
        { id: 68, name: "チュートリアル68",  title: "Metaverse", href: "/engineer/tutorial/engineer_tutorial_68/1" },
        { id: 69, name: "チュートリアル69",  title: "Windows Server セットアップ", href: "/engineer/tutorial/engineer_tutorial_69/1" },
        { id: 70, name: "チュートリアル70",  title: "Trello", href: "/engineer/tutorial/engineer_tutorial_70/1" },
        { id: 71, name: "チュートリアル71",  title: "NestJS + Next.js", href: "/engineer/tutorial/engineer_tutorial_71/1" },
        { id: 72, name: "チュートリアル72",  title: "Blog(Next.js + Sanity)", href: "/engineer/tutorial/engineer_tutorial_72/1" },
        { id: 72, name: "チュートリアル73",  title: "LIVE NEWS APP", href: "/engineer/tutorial/engineer_tutorial_73/1" },
    ];

    return {
        props: { tutorials, tutorials2 },
        revalidate: 20,
    };
}

