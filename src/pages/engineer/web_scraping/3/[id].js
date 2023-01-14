import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { LayoutWebscraping3 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "1" ? (
                    <LayoutWebscraping3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Beautiful Soup</div>
                                <p>Beautiful SoupはシンプルなAPIが特徴のライブラリです。</p>
                                <p>す。</p>
                                <h4>Beautiful Soup4のインストール </h4>
                                <Code1 />
                                <p>Beautiful SoupでHTMLのなかからHTML要素を取得するには「find系」と「select系」の2つのメソッドを使う。</p>
                                <p>異なるのは「検索条件の指定方法」。find_all()メソッドは「要素名」に続いて</p>
                                <p>HTML文書の解析ができるものを総称してHTMLパーサーという。HTMLパーサーはHTMLを解析してプログラム内で扱いやすいデータに置き換える処理を行う</p>
                                <p className='text-red-400'>scrape_by_bs4.py</p>
                                <Code2 />
                                <h4>pyqueryによるスクレイピング</h4>
                                <p>pyqueryはjQueryと同じような使い方でHTMLからスクレイピングできるライブラリ。</p>
                                <Code3 />
                                <p className='text-red-400'>scrape_by_pyquery.py</p>
                                <Code4 />
                                <h4>データベースに保存</h4>
                                <p>データベースはリレーショナルデータベースとNoSQLの大きく2つに分けられる。</p>
                                <p>リレーショナルデータベースはリレーショナルモデルやトランザクションによってデータの整合性を保つことができ、標準化されたSQL文によって柔軟にデータをクエリできる。</p>

                            </div>
                        </div>
                    </LayoutWebscraping3>
                ) : id == "2" ? (
                    <LayoutWebscraping3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Beautiful Soup</div>
                                <p>lxmlを使ってRSSからスクレイピングをする。</p>
                                <p>す。</p>
                                <h4>RSS </h4>
                                <p>ブログやニュースサイトなどのWebサイトでは更新情報がRSSと呼ばれるXMLフォーマットで提供されていることがある</p>
                                <p>RSSはXMLをもとに標準化されていてHTMLよりも簡単かつ確実にパースできる</p>
                                <h4>RSSをダウンロード </h4>
                                <Code11 />
                                <p>rss要素をルートとする木構造でその中にフィードを表すchannel要素がある。</p>
                                <p>gihyo.jpのRSSをパースして最新の記事のタイトルとURLを取得する</p>
                                <p>lxml.etreeモジュールを使ってRSSをパースします</p>
                                <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                                    <span class="font-medium text-xl">XPath(XML Path Language):ツリー構造となっているXML/HTMLドキュメントからの要素や属性値などを指定するための言語<br />
                                        /で区切りながら階層を記述し、基準となるノードから別のノードを指定できる
                                    </span>
                                </div>
                                <p className='text-red-400'>scrape_rss_by_lxml.py</p>
                                <Code12 />
                                <h4>RSSのスクレイピング</h4>
                                <p>feedparserを使うとRSSのフォーマットを意識せずにスクレイピングできる。</p>
                                <h4>feedparserのインポート</h4>
                                <Code13 />
                                <p className='text-red-400'>scrape_by_pyquery.py</p>
                                <Code14 />
                                <h4>データベースに保存</h4>
                                <p>データベースはリレーショナルデータベースとNoSQLの大きく2つに分けられる。</p>
                                <p>リレーショナルデータベースはリレーショナルモデルやトランザクションによってデータの整合性を保つことができ、標準化されたSQL文によって柔軟にデータをクエリできる。</p>

                            </div>
                        </div>
                    </LayoutWebscraping3>
                ) : id == "3" ? (
                    <LayoutWebscraping3>
                        <div className="border-2 border-pink-50 inline-block  h-2/4">
                            <div></div>
                            <div>
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Beautiful Soup</div>
                                <p>データベースはリレーショナルデータベースとNoSQLの大きく2つに分けられる。</p>
                                <p>リレーショナルデータベースはリレーショナルモデルやトランザクションによってデータの整合性を保つことができ、標準化されたSQL文によって柔軟にデータをクエリできる</p>
                                <p>リレーショナルデータベースの例としてファイルベースのSQLite3とクライアント/サーバー型のリレーショナルデータベースのMySQL</p>
                                <p>NoSQLの例としてドキュメント型のMongoDB</p>
                                <h4>SQLite3への保存 </h4>
                                <p>SQLiteは手軽に使えるリレーショナルデータベースですがファイルの書き込みに時間がかかる。</p>
                                <p>あるプログラムがファイルに書き込んでいる間は他のプログラムからは同じファイルに書き込めないようロックされる</p>
                                <Code21 />
                                <h4>MySQLへの保存 </h4>
                                <p>MySQLはクライアント/サーバー型のアーキテクチャーを採用している。</p>
                                <p>クライアント/サーバー型とはサービスを提供するサーバーとサービスをリクエストするクライアントで役割を分担したシステム</p>
                                <Code21 />

                            </div>
                        </div>
                    </LayoutWebscraping3>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
   pip install beautifulsoup4
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    from urllib.parse import urljoin
    from bs4 import BeautifulSoup
    
    # HTMLファイルを読み込んでBeautifulSoupオブジェクトを得る。
    with open('dp.html') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    # select()メソッドで、セレクターに該当するa要素のリストを取得して、個々のa要素に対して処理を行う。
    for a in soup.select('#listBook > li > a[itemprop="url"]'):
        # a要素のhref属性から書籍のURLを取得する。
        url = urljoin('https://gihyo.jp/dp', a.get('href'))
    
        # 書籍のタイトルは itemprop="name" という属性を持つp要素から取得する。
        p = a.select('p[itemprop="name"]')[0]
        title = p.text  # wbr要素などが含まれるのでstringではなくtextを使う。
    
        # 書籍のURLとタイトルを出力する。
        print(url, title)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    pip install pyquery
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    from pyquery import PyQuery as pq

    # HTMLファイルを読み込んでPyQueryオブジェクトを得る。
    d = pq(filename='dp.html')
    d.make_links_absolute('https://gihyo.jp/dp')  # すべてのリンクを絶対URLに変換する。
    
    # d()でセレクターに該当するa要素のリストを取得して、個々のa要素に対して処理を行う。
    for a in d('#listBook > li > a[itemprop="url"]'):
        # a要素のhref属性から書籍のURLを取得する。
        # 変数aで取得できるのはlxmlのElementなので、d(a)としてPyQueryオブジェクトを取得している。
        url = d(a).attr('href')
    
        # 書籍のタイトルは itemprop="name" という属性を持つp要素から取得する。
        p = d(a).find('p[itemprop="name"]').eq(0)
        title = p.text()
    
        # 書籍のURLとタイトルを出力する。
        print(url, title)
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

const Code11 = () => {
    const test = `
    wget http://gihyo.jp/feed/rss2 -O rss2.xml
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code12 = () => {
    const test = `
    import lxml.etree  # lxml.etreeモジュールをインポートする。

    # parse()関数でファイルを読み込んでElementTreeオブジェクトを得る。
    tree = lxml.etree.parse('rss2.xml')
    # getroot()メソッドでXMLのルート要素（この例ではrss要素）に対応するElementオブジェクトを得る。
    root = tree.getroot()
    
    # xpath()メソッドでXPathにマッチする要素のリストを取得する。
    # channel/item はchannel要素の子要素であるitem要素を表す。
    for item in root.xpath('channel/item'):
        title = item.xpath('title')[0].text  # item要素内にあるtitle要素の文字列を取得する。
        url = item.xpath('link')[0].text     # item要素内にあるlink要素の文字列を取得する。
        print(url, title)  # URLとタイトルを表示する。
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    pip install feedparser
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    browser = webdriver.Chrome('chromedriver')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21= () => {
    const test = `
    import sqlite3

    conn = sqlite3.connect('top_cities.db')  # top_cities.dbファイルを開き、コネクションを取得する。
    
    c = conn.cursor()  # カーソルを取得する。
    # execute()メソッドでSQL文を実行する。
    # このスクリプトを何回実行しても同じ結果になるようにするため、citiesテーブルが存在する場合は削除する。
    c.execute('DROP TABLE IF EXISTS cities')
    # citiesテーブルを作成する。
    c.execute("""
        CREATE TABLE cities (
            rank integer,
            city text,
            population integer
        )
    """)
    
    # execute()メソッドの第2引数にはSQL文のパラメーターのリストを指定できる。
    # パラメーターで置き換える場所（プレースホルダー）は?で指定する。
    c.execute('INSERT INTO cities VALUES (?, ?, ?)', (1, '上海', 24150000))
    
    # パラメーターが辞書の場合、プレースホルダーは :キー名 で指定する。
    c.execute('INSERT INTO cities VALUES (:rank, :city, :population)',
              {'rank': 2, 'city': 'カラチ', 'population': 23500000})
    
    # executemany()メソッドでは、複数のパラメーターをリストで指定できる。
    # パラメーターの数（ここでは3つ）のSQLを順に実行できる。
    c.executemany('INSERT INTO cities VALUES (:rank, :city, :population)', [
        {'rank': 3, 'city': '北京', 'population': 21516000},
        {'rank': 4, 'city': '天津', 'population': 14722100},
        {'rank': 5, 'city': 'イスタンブル', 'population': 14160467},
    ])
    
    conn.commit()  # 変更をコミット（保存）する。
    
    c.execute('SELECT * FROM cities')  # 保存したデータを取得するSELECT文を実行する。
    for row in c.fetchall():  # クエリの結果はfetchall()メソッドで取得できる。
        print(row)  # 保存したデータを表示する。
    
    conn.close()  # コネクションを閉じる。
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    browser = webdriver.Chrome('chromedriver')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};