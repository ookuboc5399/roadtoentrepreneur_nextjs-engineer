import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout_tutorial_17>
      <h3>トップページ作成</h3>
      <p>トップページを修正していきます。</p>
      <Tutorial16121 />
      <p>サーバー起動</p>
      <Tutorial16122 />
      <p>画面を表示すると、TailwindCSSという文字が表示されているはずです。</p>
      <p>TailwindCSS</p>
      <p>ここで少し TailwindCSS でスタイルを適応してみましょう</p>
      <p>このチートシートを使用すると、どのクラス名を使用したらいいのかが分かります。</p>

      <p>TailwindCSS はclassNameを使用してスタイルを適応させます。。 </p>
      <Tutorial16123 />

      <p>この例は、画面の中央にfont-size:128pxのテキストを配置しました。</p>
      <p>TailwindCSSを使用すると簡単にスタイルを適応することができます </p>
      <p>チートシートを使用して、色々なスタイルを適応してみましょう。</p>
      <div className='justify-center flex'>
        <Image
          className='m-2 border border-black '
          src="/images/programing/django/4.png"
          alt="tailwindcss.com thumbnail image"
          width={600}
          height={675 / 2}
        />
      </div>
      </Layout_tutorial_17>


  )
}


const Tutorial16121 = () => {
  const test = `
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Startup</title>
      </Head>
      <h1>TailwindCSS</h1>
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

const Tutorial16122 = () => {
  const test = `
    $ npm run dev
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial16123 = () => {
  const test = `
    import Head from "next/head";

    export default function Home() {
      return (
        <div>
          <Head>
            <title>NextJS Startup</title>
          </Head>
          <h1 className="text-9xl flex justify-center h-screen items-center text-indigo-500">
            TailwindCSS
          </h1>
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
