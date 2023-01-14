import React from 'react'
import Layout_tutorial_16 from '../../../../../components/layout/engineer/tutorial/Layout_tutorial_16';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
  return (
    <Layout_tutorial_16>
      <h3>投稿詳細表示</h3>
      <p>投稿詳細画面を作成していきます。</p>
      <p>pages フォルダに posts フォルダを作成し、[id].jsファイルを作成します。</p>
      <p>Next.js ではファイル名に[id].jsとすることで動的なルーティングを設定することができます</p>
      <p>今回は、posts/[id].jsとすることで[id]に post の id が入っていきます。 </p>
      <p>このように、投稿詳細画面を表示することができるようになります。</p>
      <p className='text-red-400'>pages/posts/[id].js</p>
      <Tutorial16211 />
      <h3>getStaticPaths</h3>
      <p>getStaticPaths は SSG(Static Site Generation) 用の関数であり、動的なルーティングの利用時に静的ファイルを生成します。</p>
      <p>getStaticPaths 関数で投稿一覧の ID を取得しています。</p>


      <p>画面確認</p>
      <p>各投稿をクリックすると、詳細画面を表示することができます。</p>
      <p>これで投稿一覧と詳細画面を作成することができました。</p>
    </Layout_tutorial_16>




  )
}



const Tutorial16211 = () => {
  const test = `
    import { useRouter } from "next/router";
    import { getAllPostIds, getPostData } from "../../lib/posts";
    
    export default function PostData({ post }) {
      const router = useRouter();
    
      if (router.isFallback || !post) {
        return <div>Loading...</div>;
      }
    
      return (
        <div className="space-y-5 w-full">
          <div className="flex justify-center flex-col items-center mb-5">
            <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
            <p className="mb-3">{post.created_at}</p>
            <div className="border w-14"></div>
          </div>
          <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
      );
    }
    
    // 投稿一覧の ID を取得
    export async function getStaticPaths() {
      const paths = await getAllPostIds();
    
      return {
        paths,
        fallback: true,
      };
    }
    
    // 投稿詳細のデータを取得
    export async function getStaticProps({ params }) {
      const post = await getPostData(params.id);
      return {
        props: {
          post,
        },
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
