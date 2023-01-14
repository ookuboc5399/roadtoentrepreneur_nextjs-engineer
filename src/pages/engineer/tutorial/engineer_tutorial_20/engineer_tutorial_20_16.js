import React from 'react'
import Layout_tutorial_20 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_20';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_17>
            <h3>aboutページ作成</h3>
            <p>Next.js では pages フォルダの中にファイルを作成するだけで、自動でルーティングが設定されます。</p>
            <p>pages/about.js ファイルを作成します。</p>
            <p>そうすると、/aboutに遷移することができます。</p>
            <p className='text-red-400'>pages/about.js</p>
            <Tutorial16161 />
            <p>画面確認</p>
            <p>about ページを表示することができました。</p>
            </Layout_tutorial_17>


    )
}



const Tutorial16161 = () => {
    const test = `
    export default function About() {
      return <div>about</div>;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
