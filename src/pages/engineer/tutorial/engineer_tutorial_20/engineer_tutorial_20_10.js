import React from 'react'
import Layout_tutorial_20 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_20';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>Next.js導入</h3>
            <p>Next.js とは？</p>
            <p>Next.js は React のライブラリとなります。</p>
            <p>React と組み合わせて開発を行い、サーバーサイドレンダリングを可能にします</p>
            <p>サーバー側で静的ファイルをレンダリングして、画面を表示するので、表示速度があがります</p>
            <p>静的ファイルを生成することができるので、SEO 的にも有利になります</p>
            <p>特徴</p>
            <p>React アプリのサーバーサイドレンダリング(SSR)を実現</p>
            <p>node/npm インストール</p>
            <p>node と npm がインストールされていることを確認します</p>
            <Tutorial16101 />
            <p>まだインストールされていない方は、インストールしてください</p>
            <p>node インストール </p>
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">node.js</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/05/06/node-js/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <p>セットアップ </p>
            <p>Django とは別のフォルダを新規に作成します。 </p>
            <p>今回は、next-blog-tutorial というフォルダを作成しました。</p>
            <Tutorial16102 />
            <p>--use-npmは、npm でインストールするように指定しています </p>
            <p>インストールが完了すると、下記コマンドで Next.js を起動できます。</p>
            <Tutorial16103 />
            <p>下記に遷移すると、Next.js の初期画面が表示されます。</p>
            </Layout_tutorial_17>
    )
}


const Tutorial16101 = () => {
    const test = `
    $ node -v
    $ npm -v
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16102 = () => {
    const test = `
    $ cd next-blog-tutorial
    $ npx create-next-app . --use-npm
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial16103 = () => {
    const test = `
    npm run dev
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

