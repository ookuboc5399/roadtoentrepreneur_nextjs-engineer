import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { LayoutWebscraping } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "1" ? (
                    <LayoutWebscraping>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div></div>
                                        <div>

                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </LayoutWebscraping>
                ) : id == "scraping_wget" ? (
                    <LayoutWebscraping>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="border-2 border-pink-50 inline-block  h-2/4">
                                    <div></div>
                                    <div>
                                        <h4>Wgetとは</h4>
                                        <p>WgetとはHTTP通信やFTP通信を使って、サーバーからファイルやコンテンツをダウンロードするためのソフトウェア。</p>
                                        <p>Wgetの特徴として。クローリング機能が挙げられる。</p>
                                        <p>複数のファイルを一度にダウンロードしたり、Webページのリンクをたどって複数のコンテンツをダウンロードしたりできる。</p>
                                        <p>一方、cURLはデフォルトでHTTPレスポンスがコンソールに表示されることやオプションで様々なHTTPリクエストを簡単に送信できることから、WebAPIの呼び出しによく使用される</p>
                                        <h4>Wgetのインストール</h4>
                                        <Code7 />
                                        <h4>Wgetの使い方</h4>
                                        <p>wgetコマンドの引数にURLを指定するとそのURLのコンテンツがダウンロードされ、ファイルとして保存される。</p>
                                        <p>-Oオプションでファイル名を明示的に指定できます。</p>
                                        <p>gihyo_top.htmlという名前でgihyo.jpのトップページのHTMLファイルを保存します。</p>
                                        <Code6 />
                                        <p>再帰的にダウンロードするための-rオプション。</p>
                                        <p>-lオプションでリンクをたどる深さを制限、-wオプションでダウンロード間隔を空ける。</p>
                                        <p>--no-parentは現ディレクトリをクロールしない。--restrict-file-names=nocontrolはURLに日本語が含まれる場合に日本語のファイル名で保存する。</p>

                                        <Code8 />
                                        <p>treeコマンドはディレクトリ構造を表示する。</p>
                                        <p>https://gihyo.jp/dpから深さ1のリンクをたどってダウンロードできていることがわかります。</p>
                                        <Code9 />
                                        <h4>パイプ</h4>
                                        <p>パイプを使うとあるコマンドの標準出力を他のコマンドの標準入力に渡せる</p>
                                        <p>パイプでcatコマンドの標準出力をgrepコマンドの標準入力に渡すことで六甲という文字列を含む行のみが表示されている。</p>
                                        <Code10 />
                                        <h4>コマンド</h4>
                                        <h5>catコマンド</h5>
                                        <p>catコマンドは引数で与えたファイルを出力する。</p>
                                        <div className='flex'>
                                            <div>
                                                <Code11 />
                                            </div>
                                            <div>
                                                <Code12 />
                                            </div>
                                        </div>

                                        <h5>grepコマンド</h5>
                                        <p>引数で指定した文字列を含む行を抜き出す。</p>
                                        <div className='flex'>
                                            <div>
                                                <Code13 />
                                            </div>
                                            <div>
                                                <Code14 />
                                            </div>
                                        </div>
                                        <h5>cutコマンド</h5>
                                        <p>cutコマンドは特定の文字で区切られたテキストの一部の列を抜き出す。</p>
                                        <p>-dオプションで区切り文字を、-fオプションで列の番号を指定する</p>
                                        <p>1列目と2列目のみを出力する</p>
                                        <div className='flex'>
                                            <div>
                                                <Code15 />
                                            </div>
                                            <div>
                                                <Code16 />
                                            </div>
                                        </div>
                                        <h5>sedコマンド</h5>
                                        <p>特定の条件にマッチする行を置換したり、削除したりできる。</p>
                                        <p>カンマをスペースに置き換えて出力</p>
                                        <div className='flex'>
                                            <div>
                                                <Code17 />
                                            </div>
                                            <div>
                                                <Code18 />
                                            </div>
                                        </div>
                                        <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                                            <span class="font-medium text-xl">Wgetではディレクトリ単位での制限しかできず、たどる順序の明示的な制御もできません。<br />
                                            また、ファイルをダウンロードしたタイミングで何らかの処理を行うこともできません。
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                    {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                </div>
                            </div>

                        </div>
                    </LayoutWebscraping>
                ) : id == "scraping" ? (
                    <LayoutWebscraping>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div></div>
                                        <div>
                                            <p>Seleniumはブラウザーを自動操作するためのライブラリです。</p>
                                            <p>Pythonの他にJavaやJavaScript等さまざまな言語に対応しています。</p>
                                            <p>元々はWebアプリケーションの自動テストツールとして発展しました。</p>
                                            <p>ブラウザーベンダーがWebDriver APIを実装するドライバーを用意しており、これを経由して操作します</p>
                                            <p>最初にWgetをインストールします。</p>
                                            <Code3 />
                                            <p>Seleniumをインストールします。</p>
                                            <Code1 />
                                            <p>Windowsの場合、2種類の方法が考えられます。</p>
                                            <p>1.WindowsにChromeとChromeDriverをインストールして、仮想マシンのUbuntuから接続して使用する。</p>
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
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </LayoutWebscraping>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
   pip install selenium
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    sudo apt install -y chromium-browser unzip
    wget https://chromedriver.storage.googleapis.com/$103.0.5060.53/chromedriver_linux64.zip
    unzip chromedriver_linux64.zip
    sudo mv chromedriver /usr/local/bin/
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
    browser = webdriver.Chrome('chromedriver')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    wget http://gihyo.jp/ -O gihyo_top.html
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    sudo apt install -y wget 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    wget -r --no-parent -w 1 -l 1 --restrict-file-names=nocontrol https://gihyo.jp/dp/
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    gihyo.jp/ 
    ├── dp 
    │   ├── assets 
    │   │   ├── gdp-icon.png 
    │   │   ├── js 
    │   │   │   └── gdpFunction0425.min.js 
    │   │   └── style 
    │   │       └── store1013.css 
    │   ├── cart 
    │   ├── catalogs.opds 
    │   ├── ebook 
    │   │   └── 2022 
    │   │       ├── 978-4-297-12738-1 
    │   │       ├── 978-4-297-12935-4 
    │   │       ├── 978-4-297-13003-9 
    │   │       ├── 978-4-297-13011-4 
    │   │       ├── 978-4-297-13037-4 
    .........................
    │   │       ├── 978-4-297-13110-4 
    │   │       ├── 978-4-297-13112-8 
    │   │       ├── 978-4-297-13116-6 
    │   │       ├── 978-4-297-13141-8 
    │   │       └── 978-4-297-13149-4 
    │   ├── genre 
    │   │   ├── Webサイト制作 
    │   │   ├── スマートフォン・タブレット 
    │   │   ├── デザイン・素材集 
    │   │   ├── ネットワーク・UNIX・データベース 
    │   │   ├── パソコン 
    │   │   ├── ビジネス・マネー 
    │   │   ├── プログラミング・システム開発 
    │   │   ├── 理工・サイエンス 
    │   │   ├── 資格試験（IT） 
    │   │   ├── 資格試験（一般）・大学受験 
    │   │   └── 趣味・実用・デジカメ 
    │   ├── help 
    │   ├── index.html 
    │   ├── information 
    │   ├── my-page 
    │   └── subscription 
    └── robots.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    cat yakei_kobe.csv | grep 六甲 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    cat yakei_kobe.csv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    No,スポット名,所在地 
    1,高浜岸壁,神戸市中央区東川崎町1 
    2,中突堤西側,神戸市中央区波止場町 
    3,元町商店街,神戸市中央区元町通4 
    4,西安門前,神戸市中央区元町通2 
    5,乙仲通,神戸市中央区栄町通2～5、海岸通2～5 
    6,明石町筋,神戸市中央区明石町 
    7,三宮センターサウス,神戸市中央区三宮町2 
    8,神戸市役所１号館24階,神戸市中央区加納町6
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    cat yakei_kobe.csv | grep 六甲
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    14,鉢巻天覧台,神戸市灘区六甲山町南六甲 
    15,六甲ケーブル　天覧台,神戸市灘区六甲山町一ヶ谷1-32 
    16,六甲ガーデンテラス,神戸市灘区六甲山町五介山1877-9
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    cat yakei_kobe.csv | cut -d , -f 1,2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    No,スポット名 
    1,高浜岸壁 
    2,中突堤西側 
    3,元町商店街 
    ...
    20,神戸ポートタワー・神戸海洋博物館 / カワサキワールド 
    21,ポートアイランド北公園 
    22,神戸空港マリンエア
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    cat yakei_kobe.csv | sed 's/,/ /g'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    No スポット名 所在地 
    1 高浜岸壁 神戸市中央区東川崎町1 
    2 中突堤西側 神戸市中央区波止場町 
    3 元町商店街 神戸市中央区元町通4
    
    20 神戸ポートタワー・神戸海洋博物館 / カワサキワールド 神戸市中央区波止場町 
    21 ポートアイランド北公園 神戸市中央区港島2-2北公園内 
    22 神戸空港マリンエア 神戸市中央区神戸空港1
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
   
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};