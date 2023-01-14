import React from 'react'
import Layout_tutorial_16 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_16';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
  return (
    <Layout_tutorial_16>
      <h3>トップページ修正</h3>
      <p>トップページを修正していきます。</p>
      <p>トップ画面をtop.pngとして、public ファルダに格納します。</p>
      <p className='text-red-400'>pages/index.js</p>
      <Tutorial16171 />
      <p>画面確認</p>
      <p>トップ画像が表示されました。</p>
    </Layout_tutorial_16>


  )
}



const Tutorial16171 = () => {
  const test = `
    import Image from "next/image";
    import Head from "next/head";
    
    export default function Home() {
      return (
        <div>
          <Head>
            <title>NextJS Startup</title>
          </Head>
          <div className="mb-10 p-3 border rounded">
            <Image
              className="object-cover rounded"
              src="/top.png"
              alt="top"
              width={1280}
              height={500}
            />
          </div>
          <div className="flex justify-center flex-col items-center mb-10">
            <div className="text-lg mb-3">BLOG POSTS</div>
            <div className="border w-14"></div>
          </div>
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
