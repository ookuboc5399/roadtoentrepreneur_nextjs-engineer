import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Python3 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "python_detail_matplotlib" ? (
                    <Python3>
                        <div className='' >
                            <div className='inline-block'>
                                <div className="">
                                    <div className="border-2 border-pink-50 inline-block  h-2/4">
                                        <div></div>
                                        <div>
                                            <p>DataFrameはSeriesの集まり</p>

                                            <p>axisどの軸に対して次元を増やしていくか</p>
                                            <Code1 />
                                            <h3>Numpy arrayから作成</h3>
                                            <div className='flex'>
                                                <div>
                                                    <Code4 />
                                                </div>
                                                <div>
                                                    <Code5 />
                                                </div>
                                            </div>

                                            <h3>Dictionaryから作成</h3>

                                            <h3>csvから作成</h3>
                                            <p>全てのデータを表示。</p>
                                            <Code6 />
                                            <p>下分かれて表示されます。</p>
                                            <Code7 />

                                            <h3>slicing</h3>
                                            <p>1以上3未満</p>
                                            <p>［行:列:］</p>
                                            <div className='flex'>
                                                <div>
                                                    <Code8 />
                                                </div>
                                                <div>
                                                    <Code9 />
                                                </div>
                                            </div>

                                            <h3>squeeze</h3>
                                            <p>特定の行のSeriesを</p>
                                            <Code10 />
                                            <h3>行列生成</h3>
                                            <Code11 />
                                        </div>
                                    </div>
                                    <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                        {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Python3>
                ) : id == "python_detail_numpy" ? (
                    <Python3>
                <div className='' >
                    <div className='inline-block'>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>Pythonを使って次の4つのETFの株価を取得しチャートを表示</p>

                                    <p>axisどの軸に対して次元を増やしていくか</p>
                                    <Code12 />
                                    <h3>Broadcasting</h3>
                                    <div className='flex justify-between'>
                                        <div>
                                            <Code14 />
                                        </div>
                                        <div>
                                            <Code15 />
                                        </div>
                                    </div>

                                    <h3>expand</h3>

                                    <h3>squeeze</h3>
                                    <Code16 />
                                    <p>下記のコードでグラフ化をしているのですが、「subplots=True」を指定すると、グラフが複数に分かれて表示されます。</p>
                                    <Code17 />

                                    <h3>slicing</h3>
                                    <p>1以上3未満</p>
                                    <p>［行:列:］</p>
                                    <div className='flex justify-between'>
                                        <div>
                                            <Code18 />
                                        </div>
                                        <div>
                                            <Code19 />
                                        </div>
                                    </div>

                                    <h3>squeeze</h3>
                                    <Code20 />
                                    <h3>行列生成</h3>
                                    <Code21 />
                                    <h3>データの中心化</h3>
                                    <p>y=ax + bだったのがy=axになり、切片を考える必要がなくなる</p>
                                    <div className='flex justify-between'>
                                        <div>
                                            <Code22 />
                                        </div>
                                        <div>
                                            <Code23 />
                                        </div>
                                    </div>
                                    <h3>データの中心化</h3>
                                    <div className='flex justify-between'>
                                        <div>
                                            <Code22 />
                                        </div>
                                        <div>
                                            <Code23 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>

                        </div>
                    </div>
                </div>
                    </Python3>
                ) : id == "python_detail_pandas" ? (
                    <Python3>
                <div className='' >
                    <div className='inline-block'>
                        <div className="">
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>DataFrameはSeriesの集まり</p>

                                    <p>axisどの軸に対して次元を増やしていくか</p>
                                    <Code23 />
                                    <h3>Numpy arrayから作成</h3>

                                    <h3>Dictionaryから作成</h3>

                                    <h3>csvから作成</h3>
                                    <p>全てのデータを表示。</p>
                                    <Code6 />
                                    <p>下分かれて表示されます。</p>
                                    <Code7 />
                                    <div className='flex'>
                                        <div>
                                        <Code8 />
                                        </div>
                                        <div>
                                        <Code9 />
                                        </div>
                                    </div>
                                  
                                    <h3>要素の削除</h3>
                                    <p>drop関数は元のSeriesを変更しない</p>
                                    <div className='flex'>
                                        <div>
                                        <Code27 />
                                        </div>
                                        <div>
                                        <Code28 />
                                        </div>
                                    </div>
                                    
                                    <h3>DataFrame</h3>
                                    <p>インデックスを持つ2次元のデータ構造</p>
                                    <Code11 />
                                    <h3>データの概要を表示</h3>
                                    <Code12 />
                                    <h3>先頭・末尾行の表示</h3>
                                    <p></p>
                                    <div className='flex'>
                                        <div className='mr-4'>
                                        <Code29 />
                                        </div>
                                        <div>
                                        <Code30 />
                                        </div>
                                    </div>
                                    <h3>部分一致・完全一致</h3>
                                    <p></p>
                                    <div className='flex'>
                                        <div className='mr-4'>
                                        <Code31 />
                                        </div>
                                        <div>
                                        <Code32 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>

                        </div>
                    </div>
                </div>
                    </Python3>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
    pip install yfinance
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code4 = () => {
    const test = `
    array1 = np.array([1,2,3]) 
    array2 = np.array([[1,2,3],[4,5,6],[7,8,9]])
    
    array1 + array2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    array([[ 2,  4,  6], 
           [ 5,  7,  9], 
          [ 8, 10, 12]])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code6 = () => {
    const test = `
    pd.set_option('display.max_columns', None)
    pd.set_option('display.max_rows', None)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    df_all2.plot(figsize=(16,9),fontsize=20,linewidth=2,alpha=0.5,subplots=True,grid=True)
    plt.xlabel(xlabel="")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code8 = () => {
    const test = `
    ndarray = np.array([1,2,3,4])
    ndarray[1:3]


    ndarray = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

    ndarray[:3, 2:]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    array([2, 3])



    array([[ 3,  4], 
        [ 7,  8], 
        [11, 12]])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
df.iloc[10]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
import yfinance as yf

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
    pip install yfinance
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code13 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code14 = () => {
    const test = `
    array1 = np.array([1,2,3]) 
    array2 = np.array([[1,2,3],[4,5,6],[7,8,9]])
    
    array1 + array2
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    array([[ 2,  4,  6], 
           [ 5,  7,  9], 
          [ 8, 10, 12]])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code16 = () => {
    const test = `
    df_all.rename(columns={'VBR':'Small Value','VTV':'Large Value',
    'VBK':'Small Growth','VUG':'Large Growth','^TNX':'10 Years Yield'},inplace=True)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    df_all2.plot(figsize=(16,9),fontsize=20,linewidth=2,alpha=0.5,subplots=True,grid=True)
    plt.xlabel(xlabel="")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code18 = () => {
    const test = `
    ndarray = np.array([1,2,3,4])
    ndarray[1:3]


    ndarray = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

    ndarray[:3, 2:]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    array([2, 3])



    array([[ 3,  4], 
        [ 7,  8], 
        [11, 12]])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
import yfinance as yf

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
import yfinance as yf

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    x = np.array([1,2,3])
    x.mean()


    xc = x-x.mean()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
    2.0

    array([-1.,  0.,  1.])
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




const Code24 = () => {
    const test = `
    pd.set_option('display.max_columns', None)
    pd.set_option('display.max_rows', None)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code25 = () => {
    const test = `
df.iloc[10]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code26 = () => {
    const test = `
    df.describe()

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code27 = () => {
    const test = `
    a_dic = {'apple':7, 'banana':8, 'orange':9} 
    s9 = pd.Series(a_dic)

    s9.drop(index='banana')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code28 = () => {
    const test = `
    apple     7 
    orange    9 
    dtype: int64
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code29 = () => {
    const test = `
    df_info.head()

    df_info.tail(2)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code30 = () => {
    const test = `
	age	gender	height	weight 
0	23	M	175	65 
1	31	F	160	40 
2	49	F	156	48 
3	60	M	180	85

age	gender	height	weight 
2	49	F	156	48 
3	60	M	180	85
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code31 = () => {
    const test = `
    df_pref_category[df_pref_category['所定内給与額（万円）'] == '-']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code32 = () => {
    const test = `
        集計年	都道府県コード	都道府県名	産業大分類コード	産業大分類名	年齢	所定内給与額（万円）	年間賞与その他特別給与額（万円）	一人当たり賃金（万円） 
    51	2010	1	北海道	F	電気・ガス・熱供給・水道業	70歳〜	-	-	- 
    129	2010	1	北海道	L	学術研究，専門・技術サービス業	70歳〜	-	-	- 
    157	2010	1	北海道	O	教育，学習支援業	〜19歳	-	-	- 
    194	2010	1	北海道	Q	複合サービス事業	70歳〜	-	-	- 
    219	2010	2	青森県	C	鉱業，採石業，砂利採取業	65〜69歳	-	-	- 
    ...	...	...	...	...	...	...	...	...	... 
    97603	2019	47	沖縄県	F	電気・ガス・熱供給・水道業	70歳〜	-	-	- 
    97655	2019	47	沖縄県	J	金融業，保険業	70歳〜	-	-	- 
    97670	2019	47	沖縄県	L	学術研究，専門・技術サービス業	〜19歳	-	-	- 
    97735	2019	47	沖縄県	Q	複合サービス事業	〜19歳	-	-	- 
    97746	2019	47	沖縄県	Q	複合サービス事業	70歳〜	-	-	-
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};