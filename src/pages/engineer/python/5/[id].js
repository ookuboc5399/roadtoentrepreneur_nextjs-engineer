import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Python5 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "streamlit_detail" ? (
                    <Python5>
<h3>streamlitインストール </h3>

                        <Code1 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Text elements</div>
                        <Code2 />
                        <p></p>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Data display elements</div>
                        <p>print 関数を使うとき、カンマ区切りで複数の文字列を指定すると、それらの文字列が半角スペース区切りで出力される</p>
                        <Code3 />
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>multiselect</div>
                        <Code4 />
                       
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>コメント</div>
                        <p>コメントとはプログラミングの処理に影響を及ぼさない。コードの意図を説明したり、メモを残したり、コードを実行処理から除外したりしたいときに使います</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>

                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>

                            </div>
                        </div>

                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>数値の型</div>
                        <p>Pythonでは様々なデータに型が用意されています。整数には整数型が浮動小数点数には浮動小数点数型が</p>
                        <p>1と1.0は別の型として区別される</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>

                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>

                            </div>
                        </div>
                        <p>int関数は小数点以下を切り捨てて整数としている</p>
                        <p>end=""は末尾に何も出力しない</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>

                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>

                            </div>
                        </div>


                    </Python5 >
                ) : id == "" ? (
                    <Python>

                        <div>
                            <h2 className='text-center'>mutableとimmutable</h2>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>mutable</h3>
                        <p>変更可能なオブジェクト</p>
                        <li>list</li>
                        <li>dist</li>
                        <li>set</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code14 />
                            </div>
                            <p>オブジェクトの参照先が渡される</p>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code15 />
                            </div>
                        </div>
                        <h3>immutable </h3>
                        <p>変更不可能なオブジェクト</p>
                        <li>integer</li>
                        <li>float</li>
                        <li>bool</li>
                        <li>string</li>
                        <li>tuple</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code16 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                                <Code17 />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-center'>mutableとimmutable</h2>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                        <p></p>
                        <h3>mutable</h3>
                        <p>変更可能なオブジェクト</p>
                        <li>list</li>
                        <li>dist</li>
                        <li>set</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code14 />
                            </div>
                            <p>オブジェクトの参照先が渡される</p>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code15 />
                            </div>
                        </div>
                        <h3>immutable </h3>
                        <p>変更不可能なオブジェクト</p>
                        <li>integer</li>
                        <li>float</li>
                        <li>bool</li>
                        <li>string</li>
                        <li>tuple</li>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code29 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                                <Code30 />
                            </div>
                        </div>
                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>演算子とはなにか</div>
                        <p></p>
                        <h3>足し算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code27 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code28 />
                            </div>
                        </div>
                        <h3>引き算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code29 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code30 />
                            </div>
                        </div>
                        <h3>掛け算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code31 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code32 />
                            </div>
                        </div>
                        <h3>割り算</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>余りを求める</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>べき乗を求める</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>数値演算の優先順位</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code33 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code34 />
                            </div>
                        </div>
                        <h3>絶対値</h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code39 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code40 />
                            </div>
                        </div>
                        <h3></h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code35 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code36 />
                            </div>
                        </div>
                        <h3></h3>
                        <p>同じメモリの場所ではないのでa is b はFalseになる</p>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code37 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code38 />
                            </div>
                        </div>
                        <h3></h3>
                        <div className='flex'>
                            <div className='m-6'>
                                <p>コード入力</p>
                                <Code35 />
                            </div>
                            <div className='m-6'>
                                <p>出力結果</p>
                                <Code36 />
                            </div>
                        </div>
                    </Python >
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
    pip3 install streamlit
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    import streamlit as st 

    # Title 
    st.title('This is a title') 
    st.write('Sample App') 

    # Markdown 
    st.markdown('Streamlit is **_really_ cool**.') 

    # Code block 
    code = '''def hello(): 
        print("Hello, Streamlit!")''' 
    st.code(code, language='python') 

    # LaTex 
    st.latex(r''' 
        a + ar + a r^2 + a r^3 + \cdots + a r^{n-1} = 
        \sum_{k=0}^{n-1} ar^k = 
        a \left(\frac{1-r^{n}}{1-r}\right) 
        ''')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code3 = () => {
    const test = `
    import streamlit as st 
    import pandas as pd  
    import numpy as np 
    df = pd.DataFrame( 
         np.random.randn(20,3), 
     columns=['a', 'b', 'c']) 
    # line_chart 
    st.line_chart(df) 
    # area_chart 
    st.area_chart(df)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    # button 
    if st.button('Say hello'): 
        st.write('Why hello there') 
    # multiselect 
    options = st.multiselect( 
        'What are your favorite colors', 
        ['Green', 'Yellow', 'Red', 'Blue'], 
        ['Yellow', 'Red']) 
    st.write('You selected:', options) 
    # slider 
    age = st.slider('How old are you?', 0, 130, 25) 
    st.write("I'm ", age, 'years old')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};