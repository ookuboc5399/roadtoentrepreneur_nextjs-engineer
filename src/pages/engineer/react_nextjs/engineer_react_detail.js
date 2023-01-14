import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChapterHtml from '../../../components/chapter/programing/html/chapter_html';
import { NextPage } from 'next';
import { Document, Page, pdfjs } from 'react-pdf';
import PdfPage from '../../../components/pdf/test';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <div className='block'>
            <Header_engineer />
            <div className='float-left' >
                <ChapterHtml />
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
                                <p>仮想DOMとはJavaScriptのオブジェクトで作られた仮想的なDOMのことです。</p>
                                <p></p>これを用い実際のDOMとの差分を比較し変更箇所のみを実際のDOMに反映することでDOMへの操作を最小限に抑えることが可能になります
                                <p className="text-xl">仮想DOMのイメージ</p>
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
                                            <h2 class=" text-gray-600">パッケージマネージャー(npm/yarn)</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            バックエンド、フロントエンドを問わずどのプログラミングで開発するにしても基本的には外部で公開されている様々なパッケージを利用して開発してくことになります<br/>
                                            npmの場合
                                            <Code1 />
                                            yarnの場合
                                            <Code2 />
                                            たったこれだけのコマンドで世界中の人が公開している便利なパッケージが使えるようになります
                                            上記のコマンド実行時にローカルファイルのpackage.jsonが更新されパッケージの情報が追記されます<br/>
                                            それと同時にnpmでインストールした場合はpackage-lock.json、yarnでインストールした場合はyarn.lockファイルが生成されます<br/>
                                            lockファイルにはパッケージが内部で使用している別パッケージ等のバージョン情報や依存関係が記載されています<br/>
                                            package.jsonとpackage-lock.jsonの2つのファイルがあればどの環境でも同じnode_modulesを再現できます
                                            実施にプログラムを実行するときにはこのnode_modulesの中を参照して便利なパッケージを動かすことができています
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-6">
                                    <div class="bg-white border-transparent rounded-lg shadow-xl">
                                        <div class="bg-gradient-to-b from-gray-300 to-gray-100 text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                            <h2 class=" text-gray-600">dataの書き方</h2>
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
                                            <h2 class=" text-gray-600">columnsの書き方</h2>
                                        </div>
                                        <div class="p-2 inline-block">
                                            <Code4 />
                                        </div>
                                        <div class="p-2 inline-block">
                                            名前とメールアドレスにはtextが、そして年齢にはnumericとして利用します
                                        </div>
                                    </div>
                                </div>
                                <p></p>以下のコードを実行すると「Name」「Mail」「Age」という列からなる表が作成されます
                                <Code1 />
                                <p></p>また、この表はその場で内容を編集することができるのです。
                                <p></p>テーブルの行や列を追加・削除することもできます
                                <p></p>データの内容をチェックします
                                <p></p>data配列の中には3つの配列がまとめられています
                                <p></p>そして各配列の中には名前・メールアドレス・年齢といったデータが用意されています
                                <Code2 />
                                <p></p>&lt;div&gt;ではstyle属性にwidthとheightを使って大きさを指定します
                                <p></p>
                                <Code3 />
                                <p></p>マウスポインタを棒グラフのバーの上に移動するとその項目のラベルと値がポップアップして表示されます
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


    )
}


const Code1 = () => {
    const test = `
    npm install [パッケージ名]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    yarn add [パッケージ名]
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
        [値1, 値2, 値3],
        [値1, 値2, 値3],
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
        type: データの種類,
        title:タイトル,
        width:横幅,
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





