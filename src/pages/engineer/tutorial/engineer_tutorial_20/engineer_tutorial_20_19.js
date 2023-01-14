import React from 'react'
import Layout_tutorial_20 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_20';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_17>
            <p>投稿コンポーネント作成</p>
            <p className='border-b-4 border-blue-400'>トップページに表示する投稿一覧のコンポーネントを作成していきます。</p>
            <p>components フォルダの中に post フォルダを作成し、post.js ファイルを作成します。</p>
            <p className='text-red-400'>components/post/post.js</p>
            <Tutorial16191 />
            </Layout_tutorial_17>


    )
}



const Tutorial16191 = () => {
    const test = `
    import Link from "next/link";

    export default function Post({ post }) {
      return (
        <Link href=>
          <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
            <img alt="post" className="object-cover" src={post.image} />
            <div className="text-center my-4">
              <p>{post.title}</p>
            </div>
          </div>
        </Link>
      );
    }
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
