import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
  return (
 <Layout_tutorial_17>
      <h2>投稿一覧表示</h2>
      <p>トップページに投稿一覧を表示させていきます</p>
      <p className='text-red-400'>pages/index.js</p>
      <Tutorial16201 />
      <h3>SSG</h3>

      <p>SSG はStatic Site Generationの略で、静的サイト生成です。</p>
      <p>ビルド時に HTML ファイルを生成して、リクエストがあったら、生成された HTML ファイルを返します。</p>
      <p>静的ファイルなので、とても早く表示させることができます。</p>
      <p>Next.js は SSG 用にgetStaticProps関数が用意されています。</p>

      <p>getStaticProps 内に外部データをコールする処理を書くと、ビルド時にサーバー側でデータを取得して HTML ファイルが生成されます。</p>
      <h3>ISR</h3>
      <p>ISR はIncremental Static Regenerationの略で、段階的な静的サイト生成です。</p>
      <p>ビルド時に HTML ファイルを生成して、stale-while-revalidate というキャッシュの仕組みを使用して、指定時間経過後にリクエストがあった場合は裏側で HTML を再生成し次のリクエスト時にはそれを返すといった仕組みです。</p>
      <p>Next.js では getStaticProps 関数でrevalidate: ＜秒数＞のオプションを指定することで使用することができます。</p>

      <p>今回は 3 秒としています。</p>
      <p>Django で登録した Post データが表示されました。</p>
      </Layout_tutorial_17>



  )
}



const Tutorial16201 = () => {
  const test = `
    import Image from "next/image";
    import Head from "next/head";
    
    import Post from "../components/post/post";
    import { getAllPostsData } from "../lib/posts";
    
    export default function Home({ posts }) {
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
          <div className="flex flex-wrap -m-4 mb-5">
            {posts && posts.map((post) => <Post key={post.id} post={post} />)}
          </div>
        </div>
      );
    }
    
    export async function getStaticProps() {
      const posts = await getAllPostsData();
    
      return {
        props: { posts },
        revalidate: 3,
      };
    }
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
