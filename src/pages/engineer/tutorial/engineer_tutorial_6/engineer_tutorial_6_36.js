import Link from 'next/link'
import Layout from '../../components/Layout'
import Header_engineer from '../../../components/header/header_engineer';
import Chaptertutorial4 from '../../../components/chapter/programing/chapter_programing_tutorial4';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial6 />
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>templatetags追加</p>
                        <p>カスタムテンプレートタグを作成します。</p>
                        <p>カスタムテンプレートタグとは？</p>
                        <p>Djangoには、テンプレートで使用する{% if ... %}や{% for ... in ... %}などの、ビルトイン・テンプレートフィルタやタグが用意されています。</p>
                        <p>これらのビルトイン・テンプレートフィルタやタグで十分ですが、Webアプリケーションが複雑になってくると、自作したフィルタやタグが必要な時があります。</p>
                        <p>自分でタグやフィルタを作ることができる機能を、カスタムテンプレートタグ/フィルタといいます。</p>
                        <p>カスタムテンプレートタグは、templatetagsフォルダを作成し、__init__.pyを追加します</p>
                        <Tutorial6361 />
                        <Tutorial6362 />
                        <p>utils.pyファイルを追加して、カスタムテンプレートタグを作成します</p>
                        <p>今回は、ページネーション機能を追加するために、GETパラメータを一部を置き換えるタグを用意します。</p>
                        <Tutorial6363 />
                        <Tutorial6364 />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6361 = () => {
    const test = `
    foodie
    └───templatetags
    　　└───__init__.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6362 = () => {
    const test = `
    # 中身なし
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6363 = () => {
    const test = `
    foodie
    └───templatetags
    　　└───__init__.py
    　　└───utils.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6364 = () => {
    const test = `
    from django import template

    register = template.Library()
    
    @register.simple_tag
    def url_replace(request, field, value):
        url_dict = request.GET.copy()
        url_dict[field] = value
        return url_dict.urlencode()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};