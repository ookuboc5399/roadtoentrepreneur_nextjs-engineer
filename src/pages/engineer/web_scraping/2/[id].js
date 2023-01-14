import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { LayoutWebscraping2 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "scrapy" ? (
                    <LayoutWebscraping2>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Scrapyの概要</div>
                                <p>Scrapyを使うとどんなWebサイトでも使える共通処理をフレームワークに任せて、Webサイトごとに異なる処理だけを書けばよくなる。</p>
                                <p>Scrapyはクリーリング・スクレイピングのためのPythonのフレームワークです。</p>
                                <p>イベント駆動型のネットワークプログラミングのフレームワークであるTwistedをベースにしています。</p>
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
                    </LayoutWebscraping2>
                ) : id == "python" ? (
                    <LayoutWebscraping2>
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
                                            <h4>Python</h4>
                                            <p>複数のWebサイトから高速にデータを取得するためには非同期処理が有効。</p>
                                            <p>TwistedやTornadoなどの非同期処理のためのフレームワーク。</p>
                                            <p>pandasはNumpyをベースとしてデータの前処理や集計を簡単に行えるライブラリ。</p>
                                            <p>matplotlibは数値データをグラフで可視化できる</p>

                                            <p>3系は2系に比べてより分かりやすい文法への変更、Unicodeサポートの強化、標準ライブラリの整理。</p>
                                            <h3>パッケージ</h3>
                                            <p>パッケージはモジュールを集めたモジュール群</p>
                                            <h3>モジュール</h3>
                                            <p>モジュールには複数のクラスや関数が含まれている</p>
                                            <p>1つのモジュールは1つの.pyファイルに対応</p>
                                            <h3>サードパーティライブラリのインストール</h3>
                                            <p>PyPlで公開されているライブラリのインストールにはpipというツールを使用する</p>
                                            <Code6 />
                                            <p>pip freezeコマンドで仮想環境内にインストールされている全ライブラリのバージョンを確認できる</p>
                                            <Code7 />
                                            <h3>RequestsによるWebページの取得</h3>
                                            <p>Webページを取得するにはサードパーティライブラリのRequestsを使います</p>
                                            <p>Responseオブジェクトのtext属性(r.text)でstr型の文字列を得られる                                            </p>
                                            <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                                                <span class="font-medium text-xl">デコード:エンコードされたデータを元の形式へ戻すこと<br />
                                                    エンコーディング:データを一定の規則に従って目的の情報に変換すること
                                                </span>
                                            </div>
                                            <p>複数のページを連続してクロールする場合は、Sessionオブジェクトを使うのが効果的</p>
                                            <p>Sessionオブジェクトを使うとHTTPヘッダーやBasic認証などの設定を複数のリクエストで使いまわせる。</p>
                                            <p>Sessionオブジェクトを使って同じWebサイトに複数のリクエストを送る時にはHTTP Keep-Aliveと呼ばれる接続方式が使われる。</p>
                                            <Code8 />
                                            <h4>文字コードの扱い</h4>
                                            <p>サーバーから受け取ったHTTPレスポンスに含まれるバイト列から元の文字列を復元するためにはどのエンコーディングでエンコードされたかを知る必要があります。</p>
                                            <h4>HTTPヘッダーからエンコーディングを取得する</h4>
                                            <p>HTTPレスポンスのContent-Typeヘッダーを参照することでそのページで使われているエンコーディングを知ることができる</p>
                                            <p>sysはpythonのインタプリタや実行環境に関する情報を扱うためのライブラリ</p>
                                            <Code9 />
                                            <p>HTTPヘッダーから得られたエンコーディングとデコードされたレスポンスボディが出力される</p>
                                            <Code10 />
                                            <h4>レスポンスボディのバイト列からエンコーディングを推定する</h4>
                                            <p>各エンコーディングでエンコードされたバイト列にはよく出現するパターンなどの特徴があり、この特徴からエンコーディングを推定できる</p>
                                            <Code11 />
                                            <Code12 />
                                            <h4>metaタグからエンコーディングを推定する</h4>
                                            <p>metaタグのエンコーディングはRequestsの機能では取得できない。RequestsはHTTP通信のためのライブラリであり、HTML等の特定の種類のコンテンツに依存したエンコーディングを取得する方法を持っていない</p>
                                            <Code13 />
                                            <h4>正規表現によるスクレイピング</h4>
                                            <p>書籍のURLとタイトルの一覧を表示</p>
                                            <Code14 />
                                            <h4>XPathとCSSセレクター</h4>
                                            <p>XPath(XML Path Language)はXMLの特定の要素を指定するための言語</p>
                                            <p>CSSセレクターはCSSで装飾する要素を指定するための表記方法です</p>
                                            <table class="table-auto border-2 border-black">
                                                <thead className='mb-4'>
                                                    <tr className='mb-4'>
                                                        <th class="px-4 py-2 bg-blue-300 mb-4">探したい要素</th>
                                                        <th class="px-4 py-2 bg-blue-300">XPath</th>
                                                        <th class="px-4 py-2 bg-blue-300">CSSセレクター</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className='border px-4 py-2'>body要素の子孫であるh1要素</td>
                                                        <td className='border px-4 py-2'>//body//h1</td>
                                                        <td>body h1</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='border px-4 py-2'>body要素の子孫であるh1要素</td>
                                                        <td className='border px-4 py-2'>//body/h1</td>
                                                        <td>body ＞ h1</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Code14 />
                                            <h4>lxmlによるスクレイピング</h4>
                                            <p>lxmlはC言語で書かれたXML処理のライブラリであるlibxmml2とlibxsltのPythonバインディング</p>
                                            <h3>データをファイルに保存する</h3>
                                            <h4>CSV形式での保存</h4>
                                            <p>save_csv_join.pyをcsv形式で保存する</p>
                                            <p className='text-red-400'>save_csv_join.py</p>
                                            <Code15 />
                                            <Code16 />
                                            <p>writerow()メソッドは引数としてlistやtuple等の反復可能なオブジェクトを取る</p>
                                            <p className='text-red-400'>save_csv.py</p>
                                            <Code17 />
                                            <h4>辞書のリストをCSV形式で保存</h4>
                                            <p>1行に相当する要素が辞書の場合はcsv.DictWriterを使う</p>
                                            <p className='text-red-400'>save_csv_dict.py</p>
                                            <Code18 />
                                            <p>Pythonのopen()関数でファイルを開いて保存する再、デフォルトエンコーディングはUTF-8</p>
                                            <p>なおCP932とはShift-JISに拡張文字を追加した文字コードです。CP932のほうがShift_JISより多くの文字を扱えます</p>
                                            <h4>JSON形式で保存</h4>
                                            <p>PythonでJSON形式を扱うにはjsonモジュールを使う</p>
                                            <p>json.dumps()関数に引数を追加すると人間にとって読みやすい形式で出力できる。</p>
                                            <p className='text-red-400'>save_json.py</p>
                                            <Code19 />
                                            <p>ensure_ascii=FalseとするとASCⅡ以外の文字を\uxxxxという形式でエスケープせずにそのまま出力する。</p>
                                            <p>--no-parentは現ディレクトリをクロールしない。--restrict-file-names=nocontrolはURLに日本語が含まれる場合に日本語のファイル名で保存する。</p>
                                            <p>-＞はアノテーションといい関数を作る際に引数や返り値の型を明確に記述するための機能。</p>
                                            <p className='text-red-400'>python_scraper.py</p>
                                            <Code20 />
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
                    </LayoutWebscraping2>
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
    pip install ライブラリ名
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    browser = webdriver.Chrome('chromedriver')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    s = requests.Session()

    s.headers.update({'user-agent':'my-crawler/1.0(+foo@example.com)'})

    r = s.get('https://gihyo.jp/')
    r = s.get('https://gihyo.jp/dp')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    import sys
    import requests
    
    url = sys.argv[1]  # 第1引数からURLを取得する。
    r = requests.get(url)  # URLで指定したWebページを取得する。
    print(f'encoding: {r.encoding}', file=sys.stderr)  # エンコーディングを標準エラー出力に出力する。
    print(r.text)  # デコードしたレスポンスボディを標準出力に出力する。
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    python requests_header_encoding.py https://gihyo.jp/dp
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    import sys
    import requests
    
    url = sys.argv[1]  # 第1引数からURLを取得する。
    r = requests.get(url)  # URLで指定したWebページを取得する。
    r.encoding = r.apparent_encoding  # バイト列の特徴から推定したエンコーディングを使用する。
    print(f'encoding: {r.encoding}', file=sys.stderr)  # エンコーディングを標準エラー出力に出力する。
    print(r.text)  # デコードしたレスポンスボディを標準出力に出力する。
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    python requests_apparent_encoding.py https://gihyo.jp/dp
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    import sys
    import re
    import requests
    
    url = sys.argv[1]  # 第1引数からURLを取得する。
    r = requests.get(url)  # URLで指定したWebページを取得する。
    
    # charsetはHTMLの最初のほうに書かれていると期待できるので、
    # レスポンスボディの先頭1024バイトをASCII文字列としてデコードする。
    # ASCII範囲外の文字はU+FFFD（REPLACEMENT CHARACTER）に置き換え、例外を発生させない。
    scanned_text = r.content[:1024].decode('ascii', errors='replace')
    
    # デコードした文字列から正規表現でcharsetの値を抜き出す。
    match = re.search(r'charset=["\']?([\w-]+)', scanned_text)
    if match:
        r.encoding = match.group(1)  # charsetが見つかった場合は、その値を使用する。
    else:
        r.encoding = 'utf-8'  # charsetが明示されていない場合はUTF-8とする。
    
    print(f'encoding: {r.encoding}', file=sys.stderr)  # エンコーディングを標準エラー出力に出力する。
    print(r.text)  # デコードしたレスポンスボディを標準出力に出力する。
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    import re
    from html import unescape
    from urllib.parse import urljoin
    
    # 前節でダウンロードしたファイルを開き、中身を変数htmlに格納する。
    with open('dp.html') as f:
        html = f.read()
    
    # re.findall()を使って、書籍1冊に相当する部分のHTMLを取得する。
    # *?は*と同様だが、なるべく短い文字列にマッチする（non-greedyである）ことを表すメタ文字。
    for partial_html in re.findall(r'<a itemprop="url".*?</ul>\s*</a></li>', html, re.DOTALL):
        # 書籍のURLは itemprop="url" という属性を持つa要素のhref属性から取得する。
        url = re.search(r'<a itemprop="url" href="(.*?)">', partial_html).group(1)
        url = urljoin('https://gihyo.jp/', url)  # 相対URLを絶対URLに変換する。
    
        # 書籍のタイトルは itemprop="name" という属性を持つp要素から取得する。
        title = re.search(r'<p itemprop="name".*?</p>', partial_html).group(0)  # まずはp要素全体を取得する。
        title = title.replace('<br/>', ' ')  # brタグをスペースに置き換える。str.replace()は文字列を置換する。
        title = re.sub(r'<.*?>', '', title)  # タグを取り除く。
        title = unescape(title)  # 文字参照（後のコラムを参照）が含まれている場合は元に戻す。
    
        print(url, title)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    print('rank,city,population')  # 1行目のヘッダーを書き出す。

    # 2行目以降を書き出す。join()メソッドの引数に渡すlistの要素はstrでなければならないことに注意。
    print(','.join(['1', '上海', '24150000']))
    print(','.join(['2', 'カラチ', '23500000']))
    print(','.join(['3', '北京', '21516000']))
    print(','.join(['4', '天津', '14722100']))
    print(','.join(['5', 'イスタンブル', '14160467']))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    python3 save_csv_join.py > top_cities.csv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    import csv

    # ファイルを書き込み用に開く。newline=''として改行コードの自動変換を抑制する。
    with open('top_cities.csv', 'w', newline='') as f:
        writer = csv.writer(f)  # csv.writerはファイルオブジェクトを引数に指定する。
        writer.writerow(['rank', 'city', 'population'])  # 1行目のヘッダーを出力する。
        # writerows()で複数の行を一度に出力する。引数はリストのリスト。
        writer.writerows([
            [1, '上海', 24150000],
            [2, 'カラチ', 23500000],
            [3, '北京', 21516000],
            [4, '天津', 14722100],
            [5, 'イスタンブル', 14160467],
        ])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    import csv

    with open('top_cities.csv', 'w', newline='') as f:
        # 第1引数にファイルオブジェクトを、第2引数にフィールド名のリストを指定する。
        writer = csv.DictWriter(f, ['rank', 'city', 'population'])
        writer.writeheader()  # 1行目のヘッダーを出力する。
        # writerows()で複数の行を一度に出力する。引数は辞書のリスト。
        writer.writerows([
            {'rank': 1, 'city': '上海', 'population': 24150000},
            {'rank': 2, 'city': 'カラチ', 'population': 23500000},
            {'rank': 3, 'city': '北京', 'population': 21516000},
            {'rank': 4, 'city': '天津', 'population': 14722100},
            {'rank': 5, 'city': 'イスタンブル', 'population': 14160467},
        ])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    import json

    cities = [
        {'rank': 1, 'city': '上海', 'population': 24150000},
        {'rank': 2, 'city': 'カラチ', 'population': 23500000},
        {'rank': 3, 'city': '北京', 'population': 21516000},
        {'rank': 4, 'city': '天津', 'population': 14722100},
        {'rank': 5, 'city': 'イスタンブル', 'population': 14160467},
    ]
    
    print(json.dumps(cities))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    import csv
    from typing import List  # 型ヒントのためにインポート
    
    import requests
    import lxml.html
    
    
    def main():
        """
        メインの処理。fetch(), scrape(), save()の3つの関数を呼び出す。
        """
    
        url = 'https://gihyo.jp/dp'
        html = fetch(url)
        books = scrape(html, url)
        save('books.csv', books)
    
    
    def fetch(url: str) -> str:
        """
        引数urlで与えられたURLのWebページを取得する。
        WebページのエンコーディングはContent-Typeヘッダーから取得する。
        戻り値：str型のHTML
        """
    
        r = requests.get(url)
        return r.text  # HTTPヘッダーから取得したエンコーディングでデコードした文字列を返す。
    
    
    def scrape(html: str, base_url: str) -> List[dict]:
        """
        引数htmlで与えられたHTMLから正規表現で書籍の情報を抜き出す。
        引数base_urlは絶対URLに変換する際の基準となるURLを指定する。
        戻り値：書籍 (dict) のリスト
        """
    
        books = []
        html = lxml.html.fromstring(html)
        html.make_links_absolute(base_url)  # すべてのa要素のhref属性を絶対URLに変換する。
    
        # cssselect()メソッドで、セレクターに該当するa要素のリストを取得して、個々のa要素に対して処理を行う。
        # セレクターの意味：id="listBook"である要素 の直接の子である li要素 の直接の子である itemprop="url"という属性を持つa要素 
        for a in html.cssselect('#listBook > li > a[itemprop="url"]'):
            # a要素のhref属性から書籍のURLを取得する。
            url = a.get('href')
    
            # 書籍のタイトルは itemprop="name" という属性を持つp要素から取得する。
            p = a.cssselect('p[itemprop="name"]')[0]
            title = p.text_content()  # wbr要素などが含まれるのでtextではなくtext_content()を使う。
    
            books.append({'url': url, 'title': title})
    
        return books
    
    
    def save(file_path: str, books: List[dict]):
        """
        引数booksで与えられた書籍のリストをCSV形式のファイルに保存する。
        ファイルのパスは引数file_pathで与えられる。
        戻り値：なし
        """
    
        with open(file_path, 'w', newline='') as f:
            # 第1引数にファイルオブジェクトを、第2引数にフィールド名のリストを指定する。
            writer = csv.DictWriter(f, ['url', 'title'])
            writer.writeheader()  # 1行目のヘッダーを出力する。
            # writerows()で複数の行を一度に出力する。引数は辞書のリスト。
            writer.writerows(books)
    
    
    # pythonコマンドで実行された場合にmain()関数を呼び出す。これはモジュールとして他のファイルから
    # インポートされたときに、main()関数が実行されないようにするための、Pythonにおける一般的なイディオム。
    if __name__ == '__main__':
        main()
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};