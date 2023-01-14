import Link from 'next/link';
import Image from 'next/image';
import { Header_engineer } from '../../components/header/header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Engineer() {
    const contents = [
        { id: 1, name: "HTML&CSS", title: "多様な可能性を秘めたフロントエンド言語", href: "./engineer_html_chapter" },
        { id: 2, name: "javaScript", title: "Djangoブログ新機能追加", href: "/engineer/engineer_javascript_chapter" },
        { id: 3, name: "jQuery", title: "ポートフォリオ構築", href: "/engineer/tutorial/engineer_tutorial_3/engineer_tutorial_3_1" },
        { id: 4, name: "Ruby", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/engineer_tutorial_4_1" },
        { id: 5, name: "Ruby on Rails", title: "多様な可能性を秘めたフロントエンド言語", href: "./html/engineer_html_chapter" },
        { id: 6, name: "TypeScript", title: "", href: "./engineer_typescript_chapter" },
        { id: 7, name: "Java", title: "ポートフォリオ構築", href: "/engineer/tutorial/engineer_tutorial_3/engineer_tutorial_3_1" },
        { id: 8, name: "", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/engineer_tutorial_4_1" },
        { id: 9, name: "Command Line", title: "多様な可能性を秘めたフロントエンド言語", href: "./html/engineer_html_chapter" },
        { id: 10, name: "PHP", title: "Djangoブログ新機能追加", href: "/engineer/engineer_php_chapter" },
        { id: 11, name: "Java", title: "ポートフォリオ構築", href: "/engineer/tutorial/engineer_tutorial_3/engineer_tutorial_3_1" },
        { id: 12, name: "Python", title: "カスタムユーザー構築", href: "/engineer/engineer_python_chapter" },
        { id: 13, name: "Visual Studio Code", title: "多様な可能性を秘めたフロントエンド言語", href: "./command/command1/engineer_command_detail" },
        { id: 14, name: "Git", title: "Djangoブログ新機能追加", href: "./engineer_git_chapter" },
        { id: 15, name: "SQL", title: "ポートフォリオ構築", href: "./engineer_sql_chapter" },
        { id: 16, name: "", title: "カスタムユーザー構築", href: "/engineer/tutorial/engineer_tutorial_4/engineer_tutorial_4_1" },
        { id: 17, name: "Go", title: "多様な可能性を秘めたフロントエンド言語", href: "./html/engineer_html_chapter" },
        { id: 18, name: "Quest", title: "Djangoブログ新機能追加", href: "/engineer/tutorial/engineer_tutorial_2/engineer_tutorial_2_1" },
        { id: 19, name: "Django", title: "ポートフォリオ構築", href: "./Django/engineer_django_chapter" },
        { id: 20, name: "Google Apps Script", title: "カスタムユーザー構築", href: "./gas/engineer_gas_chapter" },
        { id: 21, name: "React&Next.js&Node.js", title: "カスタムユーザー構築", href: "/engineer/engineer_nodejs_chapter" },
        { id: 22, name: "サイト分析", title: "多様な可能性を秘めたフロントエンド言語", href: "./engineer_site_chapter" },
        { id: 23, name: "クラウド・ネットワーク", title: "Djangoブログ新機能追加", href: "./engineer_aws_chapter" },
        { id: 24, name: "Linux", title: "ポートフォリオ構築", href: "./engineer_linux_chapter" },
        { id: 25, name: "Webデザイン", title: "カスタムユーザー構築", href: "./web_design/engineer_design_chapter" },
        { id: 26, name: "Tutorial", title: "ポートフォリオ構築", href: "./tutorial/engineer_tutorial_chapter" },
        { id: 27, name: "Web Scraping", title: "カスタムユーザー構築", href: "/engineer/web_scraping_chapter" },
        { id: 28, name: "データサイエンス", title: "カスタムユーザー構築", href: "./engineer_datascience_chapter" },
        { id: 29, name: "Docker", title: "多様な可能性を秘めたフロントエンド言語", href: "/engineer/engineer_docker_chapter" },
        { id: 30, name: "", title: "Djangoブログ新機能追加", href: "./engineer_aws_chapter" },
        { id: 31, name: "Linux", title: "ポートフォリオ構築", href: "./Linux/engineer_linux_chapter" },
        { id: 32, name: "Webデザイン", title: "カスタムユーザー構築", href: "./engineer_design_chapter" },
    ];



    return (
        <div>
            <div className="bg-gray-200">
                <div className=" grid grid-cols-4 m-10 mb-5 justify-center text-center">
                    {contents.map((content) => {
                        return (
                            <Link href={content.href}>
                                <div class="shadow-md bg-white m-6">
                                    <h1 className="">{content.name}</h1>
                                    <Image
                                        src="/svg/1.svg"
                                        alt="top"
                                        width={100}
                                        height={100}
                                    />
                                    <div class="">{content.title}</div>
                                    <div class="">
                                        全7レッスン
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}