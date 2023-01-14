import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header_engineer from '../../../../components/header/header_engineer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Chapterjavascript from '../../../../components/chapter/programing/javascript/chapter_programing_javascript';

export default function Home() {
    return (
        <div className=''>
            <Header_engineer />
            <div className='flex'>
                <div className="w-1/4">
                    <Chapterjavascript />
                </div>
                <div className='' >
                    <div className=''>
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
                            <div className="border-4 border-pink-50 inline-block  h-2/4 m-8">
                                <div>
                                    <div>
                                        <h2 className="text-center">演算子</h2>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>同期処理</div>
                                        <p>重い処理があると画面が更新されなくなる。</p>
                                        <p>javaScriptではある処理が行われていた場合にはその処理が終わってから次の処理が実行される</p>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>非同期処理</div>
                                        <p>非同期処理は一時的にメインスレッドから処理が切り離される</p>
                                        <p></p>
                                        <div>
                                            <li>setTime</li>
                                        </div>


                                        <h3>タスクキュー</h3>
                                        <p>タスクキューに入った処理が非同期で実行される</p>
                                        <Code1 />
                                        <p>trueまたはfalseを代入すると論理型になり、newというキーワードを付けてオブジェクトの名前の後ろに()を付けたものを代入するとオブジェクト型になります。</p>
                                        <Code2 />
                                    </div>

                                    <div>
                                        <h2 className="text-center">オブジェクト</h2>

                                        <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code3 />
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Reflect</div>

                                        <p>obj1にcがあればtrueが返される</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code4 />
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>JSON</div>
                                        <p>JSONは文字列</p>
                                        <div className='flex'>
                                            <div>
                                                <h3>JSON.parse</h3>
                                                <p>JSON → Object</p>
                                                <Code5 />
                                            </div>
                                            <div>
                                                <h3>JSON.stringify</h3>
                                                <p>Object → JSON</p>
                                                <Code6 />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                        <p>obj1にcがあればtrueが返される</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code4 />
                                    </div>

                                    <div>
                                        <h2 className="text-center">配列</h2>

                                        <p>プログラムの入り口から出口までの間ずっと変わらない定数</p>
                                        <p>一方、ジュースの値段は固定なので定数です。</p>
                                        <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                        <Code8 />
                                    </div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Storage</div>

                                    <p>obj1にcがあればtrueが返される</p>
                                    <p>一方、ジュースの値段は固定なので定数です。</p>
                                    <p>150円のジュースはプログラムの入り口から出口までの間変わることなくずっと150円です。</p>
                                    <Code9 />
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>forEach</div>
                                    <div className='flex'>
                                        <div>
                                            <h3>forEach</h3>
                                            <p>配列の1つずつの要素に対して</p>
                                            <Code5 />
                                        </div>
                                        <div>
                                            <h3>map</h3>
                                            <p>Object → JSON</p>
                                            <Code6 />
                                        </div>
                                        <div>
                                            <h3>filter</h3>
                                            <p>Object → JSON</p>
                                            <Code6 />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>reduce</div>
                                    <div className='flex'>
                                        <div>
                                            <h3>forEach</h3>
                                            <p>配列の1つずつの要素に対して</p>
                                            <Code5 />
                                        </div>
                                        <div>
                                            <h3>map</h3>
                                            <p>Object → JSON</p>
                                            <Code6 />
                                        </div>
                                        <div>
                                            <h3>filter</h3>
                                            <p>Object → JSON</p>
                                            <Code6 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        // </div >


    )
}


const Code1 = () => {
    const test = `
    const price = 150;                //数値型のデータを代入
    const name = "りんごジュース";     //文字列型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    let change = false;                //論理型のデータを代入
    let today = new Date();     //オブジェクト型のデータを代入
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
    let obj = { 
        prop1: 'value1', 
        prop2: 'value2', 
        prop3: function() { 
            console.log('value3'); 
        }, 
        prop4: { 
            prop5: 'value5' 
        } 
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    console.log('c' in obj1); 
    console.log(Reflect.has(obj1, 'b'));
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
    const obj = {a: 0, b: 1, c: 2};
    const json = JSON.stringify(obj); 
    console.log(json); 
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    const obj2 = JSON.parse(json); 
    console.log(obj2);
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code8 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code9 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code10 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code11 = () => {
    const test = `
    const arry = [1,2,3,4,5];

    arry.push(6)
    arry.pop
    arry.splice(0,3,1,2)
    指定した長さ分配列から切り取り
    arry.pop
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};