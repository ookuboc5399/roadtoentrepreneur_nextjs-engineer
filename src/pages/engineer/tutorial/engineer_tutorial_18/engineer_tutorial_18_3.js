import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>React Hooks</h3>
            <p></p>
            <p> </p>
            <h4>Classコンポーネントを使う必要がなくなった</h4>
            <p> コーディングの簡素化　読みやすい</p>
            <h3>Props Drilling問題の解決</h3>
            <p>AからCに何か値を渡したい場合は必ず間のB経由して渡す必要があった。</p>
            <p>reactのHooksにはuseContextを使うとAからCに直接値を渡すことが出来る</p>
            <div class="">
                <Image
                    src="/images/programing/props_drilling.png"
                    alt="01:Pythonとは？"
                    width={760}
                    height={428}
                />
            </div>
            <h3>Redux最小限</h3>
            <p>useContextとuseReducerを組み合わせることによって</p>

            <p>reactにはfunctionalコンポーネントとクラスコンポーネントがあった。</p>

            <p>functionalコンポーネントある値を受け取って処理をして返すことしかできなかった。またpropsの属性は受け取った関数側で変更することが出来ない</p>
          
            <p>より複雑な処理をする場合はクラスコンポーネントを使う。this.propsとthis.stateがあり、値を保持したり変更することが出来る。</p>
            <p>ReactHooksにはuseStateがあり、これを使うとReactの開発でクラスコンポーネントを使う必要がなくなった。</p>


        </Layout_tutorial_17>
    )
}

const Tutorial1731 = () => {
    const test = `
    (myvenv) ~$ django-admin startproject mysite .
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1732 = () => {
    const test = `
    LANGUAGE_CODE = 'ja'

    TIME_ZONE = 'Asia/Tokyo'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};




