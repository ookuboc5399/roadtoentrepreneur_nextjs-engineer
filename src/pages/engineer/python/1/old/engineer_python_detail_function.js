import React from 'react'
import PdfPage from '../../../../components/pdf/test';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Python from '../../../../components/layout/engineer/python';

export default function Home() {
    return (
        <Python>
            <div>
                <p>関数とはあるまとまった処理を実行するための仕組みです。</p>
                <p></p>処理があらかじめ1つにまとめられているため1つの命令文を記述するだけで目的の処理を実行できるのが利点です
                <p></p>printは一般的には「print関数」と呼ばれ数値や文字を出力するという処理の関数になります。
                <p></p>

                <p></p>引数とは関数の処理の内容を細かく設定するための仕組みです
                <p></p>指定する引数によって関数の実行結果を自由に変えることが可能となります。
                <p></p>

                <p></p>戻り値とは関数の実行結果の値を返す仕組みです。
                <p></p>

                <p></p>ライブラリの関数は使う前に読み込むことが必要となります。読み込むためのコードを先に別途書かなければなりません。
                <p></p>一方print関数のような関数は読み込む必要はなく、いきなり使うことができます
                <p></p>ライブラリの読み込みは「モジュール」と呼ばれる単位で行うよう決められています。
                <Code1 />
                <p></p>これで読み込むことができそのライブラリの各種関数が使えるようになります。
                <Code2 />
                <p></p>モジュール名のあとに「.」を挟み、目的の関数名を記述
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'></div>
                <p>関数に戻り値がない場合はNoneが返ってくる。</p>

                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>map関数</div>
                <p>map関数を使うことによってfor文などの繰り返し処理を使わずとも全ての要素にアクセスすることができる。</p>
                <Code3 />
                <div class="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300" role="alert">
                    <span class="font-medium">イテラブル</span> イテラブルとはlistやrange関数のようなfor文のinの後に書けるオブジェクト。イテラブルのすべての要素に第一引数で設定した関数を適応させることができる。
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>スコープ</div>
                <p></p>
                <div className='m-6'>
                    <p>ローカル変数</p>
                    <Code4 />
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>関数のネスト</div>
                <p>関数の中で関数を定義。</p>
                <p>outerで定義された変数はinnerで。</p>
                <div className='flex'>
                    <div className='m-6'>
                        <p>ローカル変数</p>
                        <Code5 />
                    </div>
                </div>
                <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>ラムダ関数</div>
                <p>関数の中で関数を定義。</p>
                <p>outerで定義された変数はinnerで。</p>
                <div className='flex'>
                    <div className='m-6'>
                        <p>通常関数</p>
                        <Code6 />
                    </div>
                    <div className='m-6'>
                        <p>ラムダ関数</p>
                        <Code7 />
                    </div>
                </div>
            </div>
        </Python >


    )
}

const Code1 = () => {
    const test = `
                import モジュール名
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
                モジュール名.関数名
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
                map(関数、イテラブル)
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
                # グローバル変数
                age = 30

                def print_age():
                age = 20 #ローカル変数
                print(f"I'm{age}years old")
                print_age()
                print(age)
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code5 = () => {
    const test = `
                map(関数、イテラブル)
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code6 = () => {
    const test = `
    def func(a):
        return a+1

    func(3)
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code7 = () => {
    const test = `
    x = lambda a: a+1

    x(3)
                `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};