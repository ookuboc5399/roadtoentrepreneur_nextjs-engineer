import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>TailwindCSS導入</h3>
            <p>TailwindCSS を導入していきます。</p>
            <p>TailwindCSS とは？ </p>

            <p>TailwindCSS は utility class を活用した CSS フレームワークです。 </p>
            <p>Bootstrap などのフレームワークでは、ボタンなどのコンポーネントを活用してデザインをしていきます。 </p>
            <p>TailwindCSS では、コンポーネントは用意されておらず、utility class を使用してデザインを行っていきます。</p>
            <p>TailwindCSS の方がどんなデザインでも対応できます</p>

            <h3>TailwindCSS インストール </h3>
            <p>TailwindCSS は下記の公式ドキュメントを参考にインストールをしていきます。 </p>
            <div className='flex items-center justify-center shadow cursor-pointer'>
                <div>
                    <Link href="https://tailwindcss.com/docs/guides/nextjs">
                        <div className="">
                            <div class="text-xl">Install Tailwind CSS with Next.js - Tailwind CSS</div>
                            <div class="text-xl">Documentation for the Tailwind CSS framework.</div>
                        </div>
                    </Link>
                </div>
                <div class="">
                    <Image
                        className='m-2'
                        src="/images/programing/django/tail.jpg"
                        alt="tailwindcss.com thumbnail image"
                        width={256}
                        height={128}
                    />
                </div>
            </div>
            <Tutorial16111 />
            <p className='text-red-400'>tailwind.config.js</p>
            <Tutorial16112 />
            <p>元の CSS はすべて削除して、置き換えます。 </p>
            <p className='text-red-400'>styles/global.css</p>
            <Tutorial16113 />
            <p>不要ファイル削除 </p>
            <p>下記は不要なので削除します</p>

            <p>Home.module.css を削除します</p>
            <p>api フォルダを削除します。</p>
            </Layout_tutorial_17>
    )
}


const Tutorial16111 = () => {
    const test = `
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
$ npx tailwindcss init -p
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16112 = () => {
    const test = `
    module.exports = {
        purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
        darkMode: false, // or 'media' or 'class'
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16113 = () => {
    const test = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
