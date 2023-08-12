import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'
import { Header_only } from '../../components/header/header';
import { AWS, DATASCIENCE, DESIGN, Docker, GIT, HTML, JavaScript, LINUX, Nodejs, PHP, Python, SCRAPING, SQL, TypeScript, JQUERY } from '../../components/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const dockers = [
        { id: 1, name: "トレードで大事なこと", title: "Djangoブログシステム構築", href: "./1/engineer_docker_detail" },
        { id: 2, name: "お金持ちになるために", title: "Djangoブログ新機能追加", href: "./money_detail" },
        { id: 3, name: "わが子に教える", title: "ポートフォリオ構築", href: "./child_detail" },
        { id: 4, name: "チュートリアル4", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/engineer_tutorial_4_1" },
        { id: 5, name: "コモディティ", title: "書籍検索システム構築", href: "/engineer/tutorial/engineer_tutorial_5/engineer_tutorial_5_1" }
    ];

    const nodejss = [
        { id: 1, name: "Reactについて", title: "Reactとは　プロジェクト作成　React基礎　React基礎(DOMの仕組み)　React基礎(スクリプト)'React基礎(JSX)'  　'React基礎(CSS)'     'useState・useEffect'", href: "./react_nextjs/react/0/react_detail" },
        { id: 2, name: "React初級編1", title: "", href: "./money_detail" },
        { id: 3, name: "React初級編2", title: "", href: "./child_detail" },
        { id: 4, name: "React初級編3", title: "TypeScript", href: "./react_nextjs/react/3/1" },
        { id: 5, name: "Next.js初級編1", title: "Nextjsとは　Pre-rendering getStaticProps Dynamic routes", href: "./react_nextjs/nextjs/0/nextjs_detail" },
        { id: 6, name: "Next.js中級編1", title: "", href: "./react/nextjs/1/nextjs_detail" },
        { id: 7, name: "Next.js中級編2", title: "", href: "./react_nextjs/nextjs/0/nextjs_detail" },
        { id: 8, name: "Nodejs初級編1", title: "", href: "./react_nextjs/nodejs/0/nodejs_detail" },
        { id: 9, name: "Nodejs初級編2", title: "Express", href: "./react_nextjs/nodejs/1/nodejs_detail_express" },
        { id: 10, name: "", title: "", href: "" },
    ];

    const gas = [
        { id: 1, name: "Google Apps Scriptの紹介", title: "Djangoブログシステム構築", href: "./1/engineer_gas_detail" },
        { id: 2, name: "Google Apps Script初級編", title: "Djangoブログ新機能追加", href: "./2/engineer_gas_detail_script" },
        { id: 3, name: "わが子に教える", title: "ポートフォリオ構築", href: "./child_detail" },
        { id: 4, name: "チュートリアル4", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/engineer_tutorial_4_1" },
        { id: 5, name: "コモディティ", title: "書籍検索システム構築", href: "/engineer/tutorial/engineer_tutorial_5/engineer_tutorial_5_1" }
    ];

    const phps = [
        { id: 1, name: "PHP初級編", title: "", href: "./PHP/1/php_1" },
        { id: 2, name: "Python事例編", title: "", href: "./PHP/2/php_detail" },
        { id: 3, name: "WordPress", title: "", href: "./PHP/3/wordpress_detail" },
    ];

    const pythons = [
        { id: 1, name: "Python初級編", title: "Djangoブログシステム構築", href: "./python/1/python_detail" },
        { id: 2, name: "Python事例編", title: "Djangoブログ新機能追加", href: "./python/2/python_detail_example" },
        { id: 3, name: "Matplotlib,Numpy,Pandas", title: "ポートフォリオ構築", href: "./python/3/python_detail_numpy" },
        { id: 4, name: "チュートリアル4", title: "カスタムユーザー構築", href: "./python/5/streamlit_detail" },
        { id: 5, name: "", title: "Sreamlit", href: "./python/5/streamlit_detail" }
    ];

    const javascripts = [
        { id: 1, name: "JavaScript初級編", title: "", href: "./javascript/javascript/0/javascript_detail" },
        { id: 2, name: "JavaScript中級編", title: "", href: "./javascript/javascript/1/javascript_detail" },
        { id: 3, name: "Chart.js", title: "", href: "./javascript/chartjs/chartjs_detail" },
        { id: 4, name: "Jspreadsheet", title: "", href: "./javascript/jspreadsheet/jspreadsheet_detail" },
        { id: 5, name: "Google Chart", title: "", href: "./javascript/google/javascript_detail_google" },
    ];

    const awss = [
        { id: 1, name: "AWS", title: "Djangoブログシステム構築", href: "./AWS/1/aws_detail" },
        { id: 2, name: "Azure", title: "Djangoブログシステム構築", href: "./AWS/2/azure_detail" },
        { id: 3, name: "Azure2", title: "オンプレミスからAzure", href: "./AWS/3/azure_iaas" },
        { id: 4, name: "ネットワーク", title: "", href: "./AWS/4/1" },
        { id: 5, name: "基礎", title: "", href: "./AWS/5/1" },
        { id: 6, name: "サーバー", title: "", href: "./AWS/6/1" },
    ];

    const htmls = [
        { id: 1, name: "HTML&CSS初級編", title: "Djangoブログシステム構築", href: "./html/engineer_html_detail" },
        { id: 2, name: "HTML&CSS中級編", title: "Djangoブログシステム構築", href: "./html/engineer_html2_detail" },

    ];

    const jquerys = [
        { id: 1, name: "HTML&CSS初級編", title: "Djangoブログシステム構築", href: "./html/engineer_html_detail" },
        { id: 2, name: "HTML&CSS中級編", title: "Djangoブログシステム構築", href: "./html/engineer_html2_detail" },

    ];

    const linuxs = [
        { id: 1, name: "LINUX", title: "Djangoブログシステム構築", href: "./Linux/1/linux_detail" },
        { id: 2, name: "", title: "Djangoブログシステム構築", href: "" },

    ];

    const gits = [
        { id: 1, name: "Git初級編", title: "Djangoブログシステム構築", href: "./git/engineer_git_detail" },
        { id: 2, name: "Git初級編2", title: "Djangoブログシステム構築", href: "./git/engineer_git_detail_2" },
    ];

    const datasciences = [
        { id: 1, name: "環境準備", title: "Djangoブログシステム構築", href: "./datascience/1/datascience_detail" },
        { id: 2, name: "線形回帰", title: "Djangoブログシステム構築", href: "./datascience/2/datascience_detail2" },
    ];

    const designs = [
        { id: 1, name: "Webデザインアイデアレシピ", title: "Djangoブログシステム構築", href: "./web_design/1/engineer_chapter1_1_detail" },
        { id: 2, name: "Webデザインアイデアレシピ2", title: "Djangoブログシステム構築", href: "./web_design/2/engineer_chapter2_1_detail" },
        { id: 3, name: "Webデザインアイデアレシピ3", title: "Djangoブログシステム構築", href: "./web_design/3/engineer_chapter3_1_detail" },
        { id: 4, name: "Webデザインアイデアレシピ2", title: "Djangoブログシステム構築", href: "./web_design/4/engineer_chapter4_1_detail" },
        { id: 5, name: "Webデザインアイデアレシピ3", title: "Djangoブログシステム構築", href: "./web_design/5/engineer_chapter5_1_detail" },
    ];

    const djangos = [
        { id: 1, name: "Djangoについて", title: "Djangoブログシステム構築", href: "./Django/0/engineer_django_detail" },
        { id: 2, name: "Django初級編1", title: "Djangoブログシステム構築", href: "./web_design/2/engineer_chapter2_1_detail" },
        { id: 3, name: "Django初級編2", title: "Djangoブログシステム構築", href: "./web_design/3/engineer_chapter3_1_detail" },
        { id: 4, name: "Django初級編3", title: "Djangoブログシステム構築", href: "./web_design/4/engineer_chapter4_1_detail" },
        { id: 5, name: "Django初級編4", title: "Djangoブログシステム構築", href: "./web_design/5/engineer_chapter5_1_detail" },
        { id: 5, name: "Django REST Framework初級編1", title: "Djangoブログシステム構築", href: "./Django/restframe1/engineer_djangorestframe_detail1" },
    ];

    const scrapings = [
        { id: 1, name: "クローリング・スクレイピングとは", title: "", href: "./web_scraping/1/scraping" },
        { id: 2, name: "クローリング・スクレイピング(Python)", title: "", href: "./web_scraping/2/scrapy" },
        { id: 3, name: "クローリング・スクレイピング(ライブラリ)", title: "", href: "./web_scraping/3/1" },
        { id: 4, name: "", title: "", href: "" },
        { id: 5, name: "クローリング・スクレイピング(実践)", title: "", href: "./web_scraping/5/1" },
        { id: 6, name: "Scrapy", title: "", href: "./web_scraping/6/1" },
    ];

    const sqls = [
        { id: 1, name: "SQL初級編", title: "", href: "./SQL/1/sql_detail" },
        { id: 2, name: "MongoDB", title: "", href: "./SQL/2/mongo_detail" },
        { id: 3, name: "SQLite", title: "", href: "./SQL/3/sqlite_detail" },
    ];

    const typescripts = [
        { id: 1, name: "TypeScript", title: "", href: "./typescript/1" },
        { id: 2, name: "", title: "", href: "./typescript/2" },
        { id: 3, name: "", title: "", href: "./typescript/3" },
    ];

    return (
        <div>
            {
                id == "engineer_docker_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>マインド</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {dockers && dockers.map((docker) => <Docker key={docker.id} docker={docker} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_nodejs_chapter" ? (
                    <div>
                    <Header_only />
                    <div className='flex justify-start'>
                        <Link href="/engineer/engineer">
                            <div className="text-4xl pl-10 pt-4">
                                <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center'>
                        <div className="w-1/2 m-10 ">
                            <div className='text-center'>
                                <h1>React&Next.js&Node.js</h1>
                                <p>Django+React+Nextjs</p>
                            </div>
                            <div className="flex flex-col mb-5">
                                {nodejss && nodejss.map((nodejs) => <Nodejs key={nodejs.id} nodejs={nodejs} />)}
                            </div>
                        </div>
                    </div>
                </div>
                ) : id == "engineer_python_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Python</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {pythons && pythons.map((python) => <Python key={python.id} python={python} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_javascript_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>JavaScript</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {javascripts && javascripts.map((javascript) => <JavaScript key={javascript.id} javascript={javascript} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_aws_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>AWS</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {awss && awss.map((aws) => <AWS key={aws.id} aws={aws} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_html_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>HTML &amp; CSS</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {htmls && htmls.map((html) => <HTML key={html.id} html={html} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_jquery_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>JQuery</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {jquerys && jquerys.map((jquery) => <JQUERY key={jquery.id} jquery={jquery} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_linux_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>LINUX</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {linuxs && linuxs.map((linux) => <LINUX key={linux.id} linux={linux} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_git_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Git</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {gits && gits.map((git) => <GIT key={git.id} git={git} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_datascience_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>機械学習</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {datasciences && datasciences.map((datascience) => <DATASCIENCE key={datascience.id} datascience={datascience} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_design_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Webデザイン</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {designs && designs.map((design) => <DESIGN key={design.id} design={design} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_django_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Django</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {djangos && djangos.map((django) => <django key={django.id} django={django} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_design_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Webデザイン</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {designs && designs.map((design) => <DESIGN key={design.id} design={design} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "web_scraping_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>Web Scraping</h1>
                                    <p>Django+React+Nextjs</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {scrapings && scrapings.map((scraping) => <SCRAPING key={scraping.id} scraping={scraping} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_php_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>PHP</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {phps && phps.map((php) => <PHP key={php.id} php={php} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_sql_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>SQL</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {sqls && sqls.map((sql) => <SQL key={sql.id} sql={sql} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : id == "engineer_typescript_chapter" ? (
                    <div>
                        <Header_only />
                        <div className='flex justify-start'>
                            <Link href="/engineer/engineer">
                                <div className="text-4xl pl-10 pt-4">
                                    <FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />
                                </div>
                            </Link>
                        </div>
                        <div className='flex justify-center'>
                            <div className="w-1/2 m-10 ">
                                <div className='text-center'>
                                    <h1>TypeScript</h1>
                                    <p></p>
                                </div>
                                <div className="flex flex-col mb-5">
                                    {typescripts && typescripts.map((typescript) => <TypeScript key={typescript.id} typescript={typescript} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
