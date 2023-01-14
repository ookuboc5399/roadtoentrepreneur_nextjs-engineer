import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
     <Layout_tutorial_17>
            <h3>APIコール</h3>
            <p>先ほど作成した、Django サーバーを起動して、API をコールできる状態にしておきます。</p>
            <Tutorial16181 />
            <p className='border-b-4 border-blue-400'>Next.js から Django の API をコールしていきます。</p>
            <p>lib フォルダを作成し、posts.js ファイルを作成します。</p>

            <p>ユーザー情報取得関数を追加します。</p>
            <p className='text-red-400'>lib/posts.js</p>
            <div className='flex'>
                <div className='w-1/2'>
                    <Tutorial16182 />
                </div>
                <div className='w-1/2 m-6'>
                    <p>➀は新しいURLオブジェクトを作成する構文</p>
                </div>
            </div>


            <Tutorial16183 />
            <div class="flex flex-nowrap">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                    <a href="#">
                        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">map関数</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="http://www.agile-software.site/2021/09/11/map%e3%83%a1%e3%82%bd%e3%83%83%e3%83%89/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            記事を読む
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            </Layout_tutorial_17>



    )
}



const Tutorial16181 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial16182 = () => {
    const test = `
import fetch from "node-fetch";

// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/";

// 投稿一覧を取得　➀
export async function getAllPostsData() {
  const res = await fetch(new URL());
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL());
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// 投稿詳細を取得
export async function getPostData(id) {
  const res = await fetch(new URL());
  const post = await res.json();
  return post;
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial16183 = () => {
    const test = `
    const res = await fetch(new URL());
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};