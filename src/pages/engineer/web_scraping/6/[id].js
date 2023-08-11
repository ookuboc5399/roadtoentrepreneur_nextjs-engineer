import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { LayoutWebscraping6 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
            <LayoutWebscraping6>
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
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>

                    </div>
                </div>

            </div>
        </LayoutWebscraping6>
        ) : id == 2 ? (
            <LayoutWebscraping6>
o
        </LayoutWebscraping6>
        ) : id == 3 ? (
            <LayoutWebscraping6>
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
                            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>抜き出したデータの処理</div>
                                <p>Spiderが抜き出したItemはファイルに出力できますが、Item Pipelineという機能を使うとその前に任意の処理を行えます。</p>
                                <p>Itemのフィールドが想定通りに埋められているかを検証(バリデーション)したり、Itemをデータベースに保存したりできます。</p>
                                <h4>Item Pipelineの概要</h4>
                                <p>Item PipelineはSpiderから抽出したItemに対して任意の処理を行うためのコンポーネントですSpiderのコールバック関数でyieldしたItemはプロジェクトで使用されるすべてのPipelineを通過した後、出力先のファイルパスが指定されていればファイルに出力されます。</p>
                                <p>Pipelineでは送られてきたItemを処理するためのprocess_item()メソッドを定義する必要があります。</p>
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
                        <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                            {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                        </div>

                    </div>
                </div>

            </div>
        </LayoutWebscraping6>
        ) : id == 4 ? (
            <LayoutWebscraping6>
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
                                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>抜き出したデータの処理</div>
                                <p>Spiderが抜き出したItemはファイルに出力できますが、Item Pipelineという機能を使うとその前に任意の処理を行えます。</p>
                                <p>Itemのフィールドが想定通りに埋められているかを検証(バリデーション)したり、Itemをデータベースに保存したりできます。</p>
                                <h4>Item Pipelineの概要</h4>
                                <p>Item PipelineはSpiderから抽出したItemに対して任意の処理を行うためのコンポーネントですSpiderのコールバック関数でyieldしたItemはプロジェクトで使用されるすべてのPipelineを通過した後、出力先のファイルパスが指定されていればファイルに出力されます。</p>
                                <p>Pipelineでは送られてきたItemを処理するためのprocess_item()メソッドを定義する必要があります。</p>
                                <Code1 />
                                <p>process_item()メソッドは引数のItemに対して何らかの処理を行い、Itemを返すか、例外DropItemを発生させます。</p>
                                <p>Itemを返した場合はそのItemが次のPipelineに送られ、最終的にFeed Exportsに送られます。</p>
                                <p>例外DropItemを発生させた場合、Itemは破棄されそれ以降のPipelineには送られません。</p>
                                <div class="bg-white border-transparent rounded-lg shadow-xl">
                                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                        <h2 class=" text-gray-600">メソッド</h2>
                                    </div>
                                    <div class="p-2">
                                        <table class="w-full p-5 text-gray-700">
                                            <tbody>
                                                <tr>
                                                    <td>open_spider(self,spider)</td>
                                                    <td>Spiderの開始時に呼ばれる。引数のspiderはSpiderオブジェクト。</td>
                                                </tr>
                                                <tr>
                                                    <td>close_spider(self,spider)</td>
                                                    <td>Spiderの終了時に呼ばれる。引数のspiderはSpiderオブジェクト</td>
                                                </tr>
                                                <tr>
                                                    <td>from_crawler(cls,crawler)</td>
                                                    <td>このクラスメソッドが存在する場合、Pipelineがインスタンス化されるタイミングで呼ばれるのでPipelineのインスタンスを作成して返す。
                                                        <br />引数のCrawlerオブジェクト経由でクローラーのコンポーネントにアクセスできる。
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <h4>データの検証</h4>
                                <Code2 />
                                <h4>MongoDBへのデータの保存</h4>
                                <p>Webページから抜き出したItemをMongoDBに保存するPipeline。</p>
                                <p>このクラスをpipelines.py内に作成し、同じくプロジェクトのsettings.pyに設定を追加する。</p>
                                <p>MongoDBへのデータの保存にはPyMongoを使用する。</p>
                                <Code3 />
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
        </LayoutWebscraping6>
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
   class MyprojectPipeline(object):
       def process_item(self,item,spider):
           return item
     `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    scrapy version
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    from pymongo import MongoClient

    class MongoPipeline:
        #ItemをMongoDBに保存するPipeline
        def open_spider(self,spider)
        #Spiderの開始時にMongoDBに接続する
            #ホストとポートを指定してクライアントを作成
            self.client = MongoClient('localhost',27017)
            #scraping-bookデータベースを取得
            self.db = self.client['scraping-book']
            #itemsコレクションを取得
            self.collection = self.db['items']

        def close_spider(self,spider):
        #Spiderの終了時にMongoDBへの接続を切断する
            self.client.close()

        def process_item(self,item,spider):
        #Itemをコレクションに追加する
            #insert_one()の引数は書き換えられるので、コピーしたdictを渡す
            self.collection.insert_one(dict(item))
            return item
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

