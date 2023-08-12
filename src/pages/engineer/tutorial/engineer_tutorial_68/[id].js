import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_68 } from '../../../../components/layout/engineer/tutorial';
import { File } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_68>
            <h3>はじめに </h3>
            <p></p>
            <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
            <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
            <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>


            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
              <li>Django REST Framework で API 構築方法</li>
              <li>Next.js でサイト構築方法</li>
              <li>Django REST Framework と Next.js の連携方法</li>
              <li>TailwindCSS の使い方</li>
            </ul>
            <div className="text-3xl m-4">
              Youtube
            </div>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3NpZ05sDTQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Layout_tutorial_68>
        ) : id == 2 ? (
          <Layout_tutorial_68>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial6821 />
            <h4>componentsフォルダ作成</h4>
            <p> その直下にLogin.jsを作ります。</p>
            <p>index.tsxにLoginコンポーネントを読み込ませておきます</p>
            <p>LoginコンポーネントはisAuthenticatedがfalseの場合に表示するようにします</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial6824 />
            <h4>next.config.js変更</h4>
            <Tutorial6822 />
            <h4>moralisインストール</h4>
            <Tutorial6823 />

          </Layout_tutorial_68>
        ) : id == 3 ? (
          <Layout_tutorial_68>
            <div className='flex'>
              <div className=''>
                <h4>nftフォルダ作成</h4>
                <p> MoralisProviderでwrapします。</p>
                <p className='text-red-400'>_app.js</p>
                <Tutorial6831 />
                <h4>env.localファイル作成</h4>
                <p className='text-red-400'>env.local</p>
                <Tutorial6832 />
                <h4></h4>
                <p>Providerで囲みます</p>
                <p className='text-red-400'>pages/_app.tsx</p>

                <h4>独自のユーティリティクラス</h4>
                <p>globals.cssに以下のコードを追加することで独自のユーティリティクラスを使用できます。</p>
                <p className='text-red-400'>globals.css</p>


              </div>

            </div>
          </Layout_tutorial_68>
        ) : id == 4 ? (
          <Layout_tutorial_68>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <p>Header.js作成</p>
                <p className='text-red-400'>_app.tsx</p>
                <Tutorial6841 />
                <h3></h3>
                <p>Avatar.js作成</p>
                <p></p>
                <p></p>
                <Tutorial6842 />
                <p>ChangeUsername.js作成</p>
                <p>Change your Usernameをクリックしたときにプロンプトが動作し新しい名前を入力する</p>
                <Tutorial6843 />
                <p>Messages.js作成</p>
                <p></p>
                <Tutorial6844 />
                <p>SendMessages.js作成</p>
                <p></p>
                <Tutorial6845 />
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>

          </Layout_tutorial_68>
        ) : id == 5 ? (
          <Layout_tutorial_68>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <h4>timeago-reactインストール</h4>
                <Tutorial6851 />
                

                <h5></h5>
                <p></p>
                <p>。</p>
              </div>
            </div>

          </Layout_tutorial_68>
        ) : id == 6 ? (
          <Layout_tutorial_68>
            <div className='flex'>
              <div className=''>

                <h3>MiniProfile</h3>
                <p>create.tsxファイルを作ります。</p>
                <p></p>
                <p>grid grid-cols-2にすることでlabelとinputを横並びにさせることができる</p>
                <p className='text-red-400'>create.tsx</p>
           
                <h3>Suggestions</h3>
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_68>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial6821 = () => {
  const test = `
  npx create-next-app --example with-tailwindcss metaverse-challenge-yt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6822 = () => {
  const test = `
  /** @type {import('next').NextConfig} */ 
  module.exports = { 
    reactStrictMode: true, 
    images: { 
      domains: ["avators.dicebear.com", "links.papareact.com"], 
    }, 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6823 = () => {
  const test = `
  npm install react-moralis
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6824 = () => {
  const test = `
  const { isAuthenticated } = useMoralis(); 
  if (!isAuthenticated) return <Login />;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6825 = () => {
  const test = `
  npm install react-moralis
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6831 = () => {
  const test = `
  import { MoralisProvider } from "react-moralis"; 
  function MyApp({ Component, pageProps }) { 
    return ( 
      <MoralisProvider 
        appId={process.env.NEXT_PUBLIC_APP_ID} 
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} 
      > 
        <Component {...pageProps} /> 
      </MoralisProvider> 
    ); 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6832 = () => {
  const test = `
  NEXT_PUBLIC_APP_ID=MTcChMUWGctde1eReMNNiJ4yNyJBVwuasG6DBIzE 
  NEXT_PUBLIC_SERVER_URL=https://uvzu0hfnukwk.grandmoralis.com:2053/server
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6841 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6842 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6843 = () => {
  const test = `
  const setUsername = () => { 
    const username = prompt( 
      'Enter your new Username (current: ＄{user.getUsername()})'
    ); 
  };
 <button 
        disabled={isUserUpdating} 
        onClick={setUsername} 
        className="hover:text-pink-700" 
      > 
        ChangeUsername 
      </button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6844 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6845 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6851 = () => {
  const test = `
  npm i timeago-react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};