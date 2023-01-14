import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { LayoutWebscraping5 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "1" ? (
                    <LayoutWebscraping5>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>データセットの取得</div>
                                <h3>Wikipediaのデータセットのダウンロード</h3>
                                <p>データセットを使うことで構造化されたデータが簡単に手に入り、相手のWebサイトに負荷をかけずに済む。</p>
                                <p>Wikipediaなど一部のWebサイトではコンテンツを一括でダウンロード可能なデータセットとして提供しており、Webサイトをクロールする代わりにそちらを使うように案内しています。</p>
                                
                                <p>Webサイトからのダウンロード処理は非同期に実行されるので、ダウンロードを待つ間にスクレイピングなどの別の処理を実行でき、効率よくクロールできます。</p>
                                <p>Scrapyをインストールします。</p>
                                <Code1 />
                                <p>Scrapyのバージョンを確認します。</p>
                                <Code2 />
                                <h4>Spiderの実行</h4>
                                <p>Scrapyを使うのに主に作成するのがSpyderというクラスです。</p>
                                <p>対象のWebサイトごとにSpiderを作成し、クローリングの設定やスクレイピングの処理を記述します。</p>
                                <p>仮想マシンのUbuntuにChromiumとChromeDriverをインストールして使用する。</p>
                                <p>1の方法は画面を表示してデバッグできるのがメリットです。2の方法は画面を表示せずにヘッドレスモードでスクリプトを実行するときに構成がシンプルになるのがメリットです。</p>
                                <Image
                                    src="/images/programing/Selenium.png"
                                    alt="01:Pythonと560は？"
                                    width={560}
                                    height={315}
                                />
                                <p>WindowsにChromeをインストールし、下記のChromeDriverのWebサイトから最新版のWindows用のファイルをダウンロード</p>
                                <p>Chromeのバージョンは設定のChromeについてから確認することができます</p>
                                <p>今回はChromeDriver 103.0.5060.53（chromedriver_linux64.zip）をインストールします</p>
                                <p>ダウンロードしたchromedriver.exeを作業ディレクトリに配置します。</p>
                                <div>
                                    <Link href="https://chromedriver.chromium.org/downloads">
                                        <div className='text-xl font-bold'>WebDriver for Chrome</div>
                                    </Link>
                                </div>
                                <p>Ubuntu単体の場合、ChromiumとChromeDriverをインストールします。</p>
                                <p>インストールしたChromeDriverは解凍し、/usr/local/binに移動させます。</p>
                                <Code2 />

                                <p>ヘッドレスモードとは画面が表示されない。</p>
                                <Code4 />
                                <p>ブラウザを起動することができる。</p>
                                <Code5 />
                            </div>
                        </div>
                    </LayoutWebscraping5>
                ) : id == "2" ? (
                    <LayoutWebscraping5>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>データセットの取得</div>
                                <h3>Wikipediaのデータセットのダウンロード</h3>
                                <p>データセットを使うことで構造化されたデータが簡単に手に入り、相手のWebサイトに負荷をかけずに済む。</p>
                                <p>Wikipediaなど一部のWebサイトではコンテンツを一括でダウンロード可能なデータセットとして提供しており、Webサイトをクロールする代わりにそちらを使うように案内しています。</p>
                                <p>Wgetで記事ページの最新版のダンプファイルをダウンロードします。</p>
                                <Code5 />
                                <p>bzip2形式のファイルを展開して出力するbzcatコマンドとlessコマンドを組み合わせてダウンロードしたファイル全体を展開することなく中身を閲覧できる</p>
                                <Code6 />
                                <h3>Wikipediaのデータセットから文章を抽出する</h3>
                                 <p></p>
                                 <p>Wikipediaの記事データをダウンロードし、WikiExtractorというツールを使って記事の本文を抜き出します。</p>
                                <p>WikiExtractor.pyを実行するとWikipediaのダンプファイルをテキストに変換できる</p>
                                <p></p>
                                 <Code7 />
                                 <h3>頻出単語の抽出</h3>
                                <p>日本語や英語など人が普段使用する自然言語をコンピューターで処理するための技術を自然言語処理技術と呼びます。</p>
                                <p>形態素解析とは与えられた文を形態素と呼ばれる言語の最小単位に分割し、品詞や読みを判別する作業</p>
                                <h4>MeCabのインストール</h4>
                                <Code7 />
                                <Code7 />
                                <p></p>
                                <p>自然言語処理技術を使い、抜き出した本文から記事内の頻出単語を抽出します。</p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </LayoutWebscraping5>
                ) : id == "3" ? (
                    <LayoutWebscraping5>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>データセットの取得</div>
                                <h3>Wikipediaのデータセットのダウンロード</h3>
                                <p>Unixコマンドと正規表現で実際にgihyo.jpのWebページから情報を抜き出す。</p>

                                <Code30 />
                                
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </LayoutWebscraping5>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
   pip install scrapy
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    scrapy version
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    sudo apt update
    sudo apt install -y wget
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    chromedriver -version
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    wget https://dumps.wikimedia.org/jawiki/20221020/jawiki-20221020-pages-articles1.xml-p1p114794.bz2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    bzcat jawiki-20221020-pages-articles1.xml-p1p114794.bz2 | less
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    wget https://github.com/attardi/wikiextractor/raw/3162bb6/WikiExtractor.py
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    sudo apt install -y mecab mecab-ipadic-utf8 libmecab-dev
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    mecab -v
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code30 = () => {
    const test = `
    cat gihyo.jp/dp/index.html | grep -E 'class="paging-number"'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code31 = () => {
    const test = `
   
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code32 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};