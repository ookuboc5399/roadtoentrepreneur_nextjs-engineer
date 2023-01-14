import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
  return (
   <Layout_tutorial_17>
      <h3>ナビゲーション作成</h3>
      <p>ナビゲーションコンポーネントを作成していきます。</p>
      <p>layout フォルダに navigation.js ファイルを作成します。</p>
      <p className='text-red-400'>components/layout/navigation.js</p>
      <Tutorial16141 />
      </Layout_tutorial_17>


  )
}



const Tutorial16141 = () => {
  const test = `
    import Link from "next/link";

    export default function Navigation() {
      return (
        <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
          <Link href="/">
            <a className="text-4xl font-bold text-red-300">NextJS Startup</a>
          </Link>
          <nav className="ml-auto">
            <Link href="/about">
              <a className="mr-5">About</a>
            </Link>
          </nav>
        </header>
      );
    }
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
