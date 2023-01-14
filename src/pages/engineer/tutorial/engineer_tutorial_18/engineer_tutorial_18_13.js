import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_17>
            <h3>レイアウト作成</h3>
            <p>レイアウトコンポーネントを作成していきます。</p>
            <p>components フォルダを作成し、その中に layout フォルダを作成します</p>
            <p>layout フォルダを作成したら、layout.js ファイルを作成します</p>
            <p>layout.js ファイルには、共通のヘッダーやフッターを書いていきます </p>
            <p className='text-red-400'>components/layout/layout.js</p>
            <Tutorial16131 />
            <p>｛props.children｝の中に、各画面のデータが入っていきます。</p>
            </Layout_tutorial_17>

    )
}



const Tutorial16131 = () => {
    const test = `
import Navigation from "./navigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
        {props.children}
      </main>
      <footer className="flex items-center justify-center w-full h-20 text-sm border-t">
        © 2021 NextJS Startup
      </footer>
    </div>
  );
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
