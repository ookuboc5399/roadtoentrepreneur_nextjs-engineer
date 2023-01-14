import React from 'react'
import Layout_tutorial_20 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_20';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_17>
            <h3>_app.js修正</h3>
            <p>Next.js では App コンポーネントを使用して、全てのページを初期化しています</p>
            <p>_app.jsファイルを使用することで、デフォルトの App コンポーネントを上書きすることができます</p>
            <p>先ほど作成した共通レイアウトを持たせていきます</p>
            <p className='text-red-400'>pages/_app.js</p>
            <Tutorial16151 />
            <p>画面確認</p>
            <p>画面を確認すると、ヘッダーとフッターを表示することができました。</p>
            </Layout_tutorial_17>


    )
}



const Tutorial16151 = () => {
    const test = `
    import "../styles/globals.css";

    import Head from "next/head";
    import Layout from "../components/layout/layout";
    
    function MyApp({ Component, pageProps }) {
      return (
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      );
    }
    
    export default MyApp;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
