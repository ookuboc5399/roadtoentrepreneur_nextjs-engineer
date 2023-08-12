import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Python2 } from '../../../../components/layout/engineer/engineer';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "python_detail_example" ? (
                    <Python2>
                        <div>
                            <div className="border-2 border-pink-50 inline-block  h-2/4">
                                <div></div>
                                <div>
                                    <p>Pythonでフォルダーを作成するには専用のライブラリの関数を使います。関数名は「makedirs」です。</p>
                                    <p></p>このmakedirs関数は「os」というライブラリに含まれています。ファイルの作成やコピーなどOS関連のライブラリになります。
                                    <Code1 />
                                    <p></p>そしてこのosモジュールのmakedirs関数は関数名はモジュール名「os」に続けて「.」を挟み「os.makedirs」と書くことになります
                                    <Code2 />

                                    <p></p>引数には作成したいフォルダー名を文字列として記述します
                                    <Code3 />
                                    <p></p>これでosモジュールを読み込むコード、およびos.makedirs関数によってフォルダー「test」をカレントディレクトリに作成するコードの書き方が分かりました
                                    <Code4 />
                                    <p></p>

                                </div>
                            </div>
                            <div className="border border-pink-50 border-green-200 inline-block h-2/4">
                                {/* <iframe src="https://colab.research.google.com/drive/1VHKJAEnNPI7SvXIH3wN3JfIA3QB5ELev?hl=ja" width="750" height="600" frameboader="0"></iframe> */}
                            </div>
                        </div>


                    </Python2 >
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Code1 = () => {
    const test = `
   import os
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
    os.makedirs(フォルダー名)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code3 = () => {
    const test = `
   os.makedirs('test')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code4 = () => {
    const test = `
    import os
    
    os.makedirs('test')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
