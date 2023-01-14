import React from 'react'
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Python from '../../../../components/layout/engineer/python';

export default function Home() {
    return (
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
                    <Code1 />
                </div>
                <p>オブジェクトの参照先が渡される</p>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code2 />
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
                    <Code3 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                    <Code4 />
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
                    <Code1 />
                </div>
                <p>オブジェクトの参照先が渡される</p>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code2 />
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
                    <Code3 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <p>基本的にオブジェクトの参照先が渡されるがimmutableの場合値渡しのような挙動をする</p>
                    <Code4 />
                </div>
            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>演算子とはなにか</div>
            <p></p>
            <h3>足し算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code14 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code15 />
                </div>
            </div>
            <h3>引き算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code16 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code17 />
                </div>
            </div>
            <h3>掛け算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code18 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code19 />
                </div>
            </div>
            <h3>割り算</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>余りを求める</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>べき乗を求める</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>数値演算の優先順位</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code20 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code21 />
                </div>
            </div>
            <h3>絶対値</h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code26 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code27 />
                </div>
            </div>
            <h3></h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code22 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code23 />
                </div>
            </div>
            <h3></h3>
            <p>同じメモリの場所ではないのでa is b はFalseになる</p>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code24 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code25 />
                </div>
            </div>
            <h3></h3>
            <div className='flex'>
                <div className='m-6'>
                    <p>コード入力</p>
                    <Code22 />
                </div>
                <div className='m-6'>
                    <p>出力結果</p>
                    <Code23 />
                </div>
            </div>
        </Python >


    )
}

const Code1 = () => {
    const test = `
    print("Hello World")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    list_a = [1,2,3]
    list_b = 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    print(re.search('a*b','aaaaab')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    num_a = 4
    num_b = add_num(num_a, num=3)

    def add_num(param, num=0):
        param += num
        return param 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code5 = () => {
    const test = `
    print(re.search('a+b','ab')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    print("Hello", end="")
    print("World")
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code7 = () => {
    const test = `
    print(re.search('abc|012','012')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    # print("Hello World") この行は実行されない
    print("Hello paiza")  # "Hello paiza" を出力
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    print(re.search('[0-9]{2}$','2021/3/1')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code10 = () => {
    const test = `
    print(1) 
    print(1.0) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code11 = () => {
    const test = `
    print(re.search('h\.t','h.t'))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code12 = () => {
    const test = `
    print(int(3.14)) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Code13 = () => {
    const test = `
    print(re.search('^[0-9]{4}','21/3/31')) 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code14 = () => {
    const test = `
    print(6+2)
    print(3.14+2.71)
    print(8+3.13)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code15 = () => {
    const test = `
    8
    5.85
    11.12999999999
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code16 = () => {
    const test = `
    print(6-2)
    print(2-6)

    print(3.8-1.3)
    print(1.5-3.3)

    print(8-3.13)
    print(3.19-8)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code17 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code18 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code19 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code20 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code21 = () => {
    const test = `
    4
    -4
    2.5
    -1.7999999999999998
    4.87
    -4.8100000000000005
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code22 = () => {
    const test = `
    3 == 4
    3 != 4
    True or False
    True and False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code23 = () => {
    const test = `
    False
    True
    False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code24 = () => {
    const test = `
    a = [1,2]
    b = [1,2]

    a == b
    a is b
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code25 = () => {
    const test = `
    True
    False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code26 = () => {
    const test = `
    abs
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code27 = () => {
    const test = `
    True
    False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};