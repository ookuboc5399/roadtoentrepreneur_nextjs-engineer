import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Datascience } from '../../../../components/layout/engineer/engineer';


const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "datascience" ? (
                    <Datascience>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>PrintでHello World</div>
                        <h4></h4>
                        <p>統計学の世界で「相関」といった場合、通常はデータが直線状に並んでいることを表します。</p>

                        <Code1 />
                        <h4>データエンジニア</h4>
                        <p>分析するためのデータを加工して整形するだけでなく、サーバーなどのインフラの構築やクラウドを活用したデータ分析の基盤を整えることでデータサイエンティスト
                            が分析しやすい環境を用意することが主な業務。</p>
                        <Code2 />
                        <h4>構造化データと非構造化データ</h4>
                        <p>ファイルの中にデータがどのように格納されているのか、その構造を事前に定めてある、コンピュータが処理しやすいデータを構造化データという。</p>
                        <p>住所録のような表形式以外にもXML形式やJSON形式などさまざまなフォーマット(ファイル形式)が考えられます。</p>
                        <p>一方でメモや日記のように単純な文章が並んでいるようなデータを非構造化データという</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ビッグデータ</div>
                        <p>ビッグデータは大量のデータであり(Volume)、そのデータは頻繁に更新されるため貯めてから処理するのではなくリアルタイムでの処理が求められます。(Velocity)</p>
                        <p>また、扱うデータには構造化データだけでなく、非構造化データも含まれる。(Variety)</p>
                        <h4>メタデータ</h4>
                        <p>画像、音声、動画といったファイルにはファイルの先頭にメタデータを格納する領域が用意されており、データと合わせて1つのファイルに保存されている。</p>
                        <h4>モデリング</h4>
                        <p>モデルを作り、それを観測されたデータに当てはめて現象を理解することをモデリングという。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>DX</div>
                        <p>デジタイゼーション:アナログに人間が行っている作業をITでデジタル情報として扱うデジタル化。例えば紙とハンコでの業務をPDFでペーパーレス化することなど</p>
                        <p>デジタライゼーション:ITなどのデジタル技術を活用して、製品やサービスに付加価値をつけたり利便性を高めたりする。例えばPOSなどで集めた売上データを分析し、それをビジネスに生かす</p>
                        <p>DX:これまでレジで行っていた会計を店内で商品を手に取って店を出るときに自動的に決済されるようにする</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>統計学仮説検定</div>
                        <h4>帰無仮説</h4>
                        <p>デジタイゼーション:アナログに人間が行っている作業をITでデジタル情報として扱うデジタル化。例えば紙とハンコでの業務をPDFでペーパーレス化することなど</p>
                        <h4>対立仮説</h4>
                        <p>デジタライゼーション:ITなどのデジタル技術を活用して、製品やサービスに付加価値をつけたり利便性を高めたりする。例えばPOSなどで集めた売上データを分析し、それをビジネスに生かす</p>
                        <p>DX:これまでレジで行っていた会計を店内で商品を手に取って店を出るときに自動的に決済されるようにする</p>
                        <div className='bg-green-200 font-bold'>
                            <div className='text-2xl'>例　薬Aと薬Bで効果の差はあるか？</div>
                            <p className='text-xl'>1.帰無仮説と対立仮説を立てる</p>
                            <p>帰無仮説:薬Aと薬Bで効果の差はない</p>
                            <p>対立仮説:薬Aと薬Bで効果の差はある</p>
                            <p className='text-xl'>2.帰無仮説が正しいと仮定のもと標本観察を行う</p>
                            <p>薬Aと薬Bで効果の差はないと仮定して薬の効果の平均値の差(=検定統計量)を算出する</p>
                            <p className='text-xl'>3.標本観察の結果、帰無仮説を否定できるかを確認する</p>
                            <p>検定統計量をみたところ「差はない」という仮定では滅多に見られない値だったので帰無仮説を棄却し対立仮説を採択する</p>
                        </div>
                    </Datascience>
                ) : id == "datascience2" ? (
                    <Datascience>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>PrintでHello World</div>
                        <h4></h4>
                        <p>統計学の世界で「相関」といった場合、通常はデータが直線状に並んでいることを表します。</p>

                        <Code4 />
                        <h4>データエンジニア</h4>
                        <p>分析するためのデータを加工して整形するだけでなく、サーバーなどのインフラの構築やクラウドを活用したデータ分析の基盤を整えることでデータサイエンティスト
                            が分析しやすい環境を用意することが主な業務。</p>
                        <Code5 />
                        <h4>構造化データと非構造化データ</h4>
                        <p>ファイルの中にデータがどのように格納されているのか、その構造を事前に定めてある、コンピュータが処理しやすいデータを構造化データという。</p>
                        <p>住所録のような表形式以外にもXML形式やJSON形式などさまざまなフォーマット(ファイル形式)が考えられます。</p>
                        <p>一方でメモや日記のように単純な文章が並んでいるようなデータを非構造化データという</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ビッグデータ</div>
                        <p>ビッグデータは大量のデータであり(Volume)、そのデータは頻繁に更新されるため貯めてから処理するのではなくリアルタイムでの処理が求められます。(Velocity)</p>
                        <p>また、扱うデータには構造化データだけでなく、非構造化データも含まれる。(Variety)</p>
                        <h4>メタデータ</h4>
                        <p>画像、音声、動画といったファイルにはファイルの先頭にメタデータを格納する領域が用意されており、データと合わせて1つのファイルに保存されている。</p>
                        <h4>モデリング</h4>
                        <p>モデルを作り、それを観測されたデータに当てはめて現象を理解することをモデリングという。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>DX</div>
                        <p>デジタイゼーション:アナログに人間が行っている作業をITでデジタル情報として扱うデジタル化。例えば紙とハンコでの業務をPDFでペーパーレス化することなど</p>
                        <p>デジタライゼーション:ITなどのデジタル技術を活用して、製品やサービスに付加価値をつけたり利便性を高めたりする。例えばPOSなどで集めた売上データを分析し、それをビジネスに生かす</p>
                        <p>DX:これまでレジで行っていた会計を店内で商品を手に取って店を出るときに自動的に決済されるようにする</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>記述統計・推測統計</div>
                        <p>記述統計:</p>
                        <p>推測統計:標本から母集団の特徴を推測する</p>
                        <h4>平均値(mean)</h4>
                        <p>標本平均を母集団の平均をμ</p>
                        <p>平均値は各値からの平方和は平均値からの平方和が最も小さい</p>
                        <Code8 />
                        <h4>中央値</h4>
                        <p>平均値より外れ値の影響を受けにくい</p>
                        <p></p>
                        <Code9 />

                        <h4>範囲</h4>
                        <p></p>
                        <Code10 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>記述変数</div>
                        <h4>ヒストグラム</h4>
                        <p>連続変数の場合はヒストグラムを使う。</p>
                        <Code6 />
                        <h4>棒グラフ</h4>
                        <p>ネスに生かす</p>
                        <Code7 />
                        <div className='bg-green-200 font-bold'></div>
                    </Datascience>
                ) : id == "datascience3" ? (
                    <Datascience>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>確率</div>
                        <h4>確率変数</h4>
                        <p>統計学の世界で「相関」といった場合、通常はデータが直線状に並んでいることを表します。</p>

                        <Code12 />
                        <h4>確率分布</h4>
                        <p>分析するためのデータを加工して整形するだけでなく、サーバーなどのインフラの構築やクラウドを活用したデータ分析の基盤を整えることでデータサイエンティスト
                            が分析しやすい環境を用意することが主な業務。</p>
                        <div className='bg-yellow-300 font-bold flex'>
                            <div className=''>
                                <h3>確率分布</h3>
                                <ul className='p-2'>
                                    <li>
                                        norm：学習・予測対象とするデータ
                                    </li>
                                    <li>
                                        uniform：ランダムな値を生成
                                    </li>
                                    <li>
                                        randint：整数を生成
                                    </li>
                                    <li>
                                        binorm：連続的に繋がり無限に中間値がある変数のこと
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3>メソッド</h3>
                                <ul className='p-2'>
                                    <li>
                                        rvs(random variates)：確率変量
                                    </li>
                                    <li>
                                        mean：
                                    </li>
                                    <li>
                                        std：標準偏差
                                    </li>
                                    <li>
                                        binorm：連続的に繋がり無限に中間値がある変数のこと
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Code13 />
                        <h4>構造化データと非構造化データ</h4>
                        <p>ファイルの中にデータがどのように格納されているのか、その構造を事前に定めてある、コンピュータが処理しやすいデータを構造化データという。</p>
                        <p>住所録のような表形式以外にもXML形式やJSON形式などさまざまなフォーマット(ファイル形式)が考えられます。</p>
                        <p>一方でメモや日記のように単純な文章が並んでいるようなデータを非構造化データという</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ビッグデータ</div>
                        <p>ビッグデータは大量のデータであり(Volume)、そのデータは頻繁に更新されるため貯めてから処理するのではなくリアルタイムでの処理が求められます。(Velocity)</p>
                        <p>また、扱うデータには構造化データだけでなく、非構造化データも含まれる。(Variety)</p>
                        <h4>メタデータ</h4>
                        <p>画像、音声、動画といったファイルにはファイルの先頭にメタデータを格納する領域が用意されており、データと合わせて1つのファイルに保存されている。</p>
                        <h4>モデリング</h4>
                        <p>モデルを作り、それを観測されたデータに当てはめて現象を理解することをモデリングという。</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>DX</div>
                        <p>デジタイゼーション:アナログに人間が行っている作業をITでデジタル情報として扱うデジタル化。例えば紙とハンコでの業務をPDFでペーパーレス化することなど</p>
                        <p>デジタライゼーション:ITなどのデジタル技術を活用して、製品やサービスに付加価値をつけたり利便性を高めたりする。例えばPOSなどで集めた売上データを分析し、それをビジネスに生かす</p>
                        <p>DX:これまでレジで行っていた会計を店内で商品を手に取って店を出るときに自動的に決済されるようにする</p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>記述統計・推測統計</div>
                        <p>記述統計:</p>
                        <p>推測統計:標本から母集団の特徴を推測する</p>
                        <h4>平均値(mean)</h4>
                        <p>標本平均を母集団の平均をμ</p>
                        <p>平均値は各値からの平方和は平均値からの平方和が最も小さい</p>
                        <Code16 />
                        <h4>中央値</h4>
                        <p>平均値より外れ値の影響を受けにくい</p>
                        <p></p>
                        <Code17 />

                        <h4>範囲</h4>
                        <p></p>
                        <Code18 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>記述変数</div>
                        <h4>ヒストグラム</h4>
                        <p>連続変数の場合はヒストグラムを使う。</p>
                        <Code14 />
                        <h4>棒グラフ</h4>
                        <p>ネスに生かす</p>
                        <Code15 />
                        <div className='bg-green-200 font-bold'></div>
                    </Datascience>
                ) : id == "datascience_detail" ? (
                    <Datascience>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>PrintでHello World</div>
                        <h4>Login</h4>
                        <p>標準出力に出力するとはある計算をするプログラムがあったときに私たちが答えを知るためにプログラムは出力する必要があります</p>

                        <Code20 />
                        <h4>Docker image</h4>
                        <p>dockerhubからimageを取ってきます。</p>
                        <Code21 />
                        <h4>Docker image</h4>
                        <p>マウントされた。</p>
                        <Code22 />
                        <h4>Docker restart</h4>
                        <p>マウントされた。</p>
                        <Code23 />
                    </Datascience>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
    docker login
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    docker pull datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    docker run -v C:\Users\ankle\OneDrive\デスクトップ\src\Udemy\Python\datascience:/datascience -p 7777:8888 --name datascience-env datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code4 = () => {
    const test = `
    docker login
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    docker pull datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    sns.displot(df['tip'],kde=False)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    np.mean(df['tip'])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    np.min(df['tip']) //最小値
    np.max(df['tip']) //最大値
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
    docker login
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `
    docker pull datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    sns.displot(df['tip'],kde=False)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    np.mean(df['tip'])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    np.min(df['tip']) //最小値
    np.max(df['tip']) //最大値
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    sns.catplot(x='time',data=df,kind='count')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code20 = () => {
    const test = `
    docker login
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    docker pull datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    docker run -v C:\Users\ankle\OneDrive\デスクトップ\src\Udemy\Python\datascience:/datascience -p 7777:8888 --name datascience-env datascientistus/ds-python-env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
    docker restart <container>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};