import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Typescript } from '../../../components/layout/engineer/engineer';
import { Nodejs, VSCode } from '../../../components/Blog_comp';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == "1" ? (
                    <Typescript >
                        <p>TypeScriptはJavaScriptにデータ型の概念を持ち込んだ言語といえます。</p>
                        <p>TypeScriptコードはそのままではブラウザ上で動作しません。TypeScriptをパソコン上で実行させるためにはいくつかツールをインストールする必要があります。</p>
                        <p></p>
                        <h4>VS Code、Node.jsをインストール</h4>
                        <div className='flex'>
                        <VSCode />
                        <Nodejs />
                        </div>
                        <h4>JavaScriptへ変換</h4>
                        <p>TypeScriptコードはそのままでは実行できません。</p>
                        <p>一度JavaScriptコードへの変換、つまりコンパイルが必要です。</p>
                        <p>tsファイルのコンパイルはコマンドで行います。そのコマンドは対象tsファイルが含まれているフォルダー上で実行する必要があります。</p>
                        <p>コンパイルは次のコマンドです。</p>
                        <Code1 />
                        <p>コンパイルが成功すると今までなかったhelloworld.jsというファイルが増えています。</p>
                        <p>コンパイルによって生成されたjsファイルをブラウザに読み込ませることで実行させることができます。</p>
                        <Code2 />
                        <p>TypeScriptではデータや機能をひとまとまりとして扱うことができ、これをオブジェクトと呼んでいます。</p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </Typescript>
                ) : id == "2" ? (
                    <Typescript >

                    </Typescript>
                ) : id == "3" ? (
                    d
                ) : id == "4" ? (
                    <HTML>
                        <div className='' >
                            <div className='inline-block'>
                                <p>HTMLにおける要素に相当します</p>
                                <Code1 />
                            </div>


                        </div>
                    </HTML>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Code1 = () => {
    const test = `
  tsc ファイル名
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Code2 = () => {
    const test = `
  node ファイル名
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};