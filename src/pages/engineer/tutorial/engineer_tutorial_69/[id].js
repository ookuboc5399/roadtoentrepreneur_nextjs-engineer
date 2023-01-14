import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_69 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';
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



          </Layout_tutorial_68>
        ) : id == 2 ? (
          <Layout_tutorial_69>
            <h3>準備 </h3>
            <p>ドライバーが組み込まれていないデバイスが存在する場合はツリーで他のデバイスの下に一覧が表示される</p>

            <p> コンピュータに付属のドライバーディスクやメーカーのホームページからチップセット用ドライバーのインストールプログラムを入手し、起動する。</p>
            <p></p>
            <h4>IPアドレスの設定</h4>
            <p>Windows ServerのセットアップではIPv4やIPv6のどちらを使うか、あるいはどのIPアドレスを使うかといったネットワーク設定を指定するステップがない</p>
            <p>これらの情報についてはネットワーク内から自動取得する設定になっているが、サーバー機の場合、他のクライアントコンピュータから接続されることが多いため
              、IPアドレスを手動で指定して固定的に運用する
            </p>
            <h4>基本設定情報を入力</h4>
            <p>IPアドレスの設定が終わったら、タイムゾーン、日付と時刻、コンピューター名などの基本情報も併せて確認・設定します。</p>
            <h4>OS更新</h4>
            <p>インターネットに接続されている限り、更新は常にダウンロードされます。インストール自体は管理者の指示があって初めて行うようになっている。</p>
            <p></p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              ライセンス認証とはソフトウェアの不正利用を防ぐために組み込まれた認証の仕組みで,
              それまでのソフトウェアはCDとプロダクトキーさえあれば何台のコンピューターにでもセットアップできてしまっていたため

            </div>
            <h4>サーバーマネージャー</h4>
            <p></p>
            <h4>Windows Admin Center</h4>
            <p>Windows Admin CenterはWebベースの管理機能であるため、Webブラウザーさえあればネットワークが接続されていればどこからでもWindows Server2022の管理が行えるよう設計されている</p>

            <p></p>
            <p></p>

          </Layout_tutorial_69>
        ) : id == 3 ? (
          <Layout_tutorial_69>
            <div className='flex'>
              <div className=''>
                <h4></h4>
                <h4>マルチユーザー</h4>
                <p>Windows Server2022ではコンピューターを使うにあたって最初に「サインイン」という操作が必要です。</p>
                <p>ユーザー名とパスワードを入力することでコンピューターは現在使用中のユーザーを判別するとともにその人の情報をその人以外のユーザーから保護します</p>
                <p></p>


              </div>

            </div>
          </Layout_tutorial_69>
        ) : id == 4 ? (
          <Layout_tutorial_69>
            <div className='flex'>
              <div className=''>
                <h3>ディスク管理</h3>
                <p>パーティション:1台のディスクはその記憶領域を複数の区画に分けて使用することができます。</p>

                <p>こうした使い方をした際の個々の領域のことを「パーティション」と呼びます。</p>
                <h4>ファイルシステム</h4>
                <p>コンピューターが扱うファイルにはファイルの内容そのものの他に作成された日時やサイズなど様々な情報が付随している。</p>
                <p>また、あるファイルの内容が広大な容量を持つハードディスクの中のどの位置に記録されているかを示す情報がなければ、ファイルにアクセスすることはできません。</p>
                <h4></h4>
                <p>ボリューム内の記憶領域をどのように利用し、ファイルに付随する様々な情報をどのように記録するのか、それらの事柄に関する取り決めをファイルシステムといいます。</p>
                <p>Change your Usernameをクリックしたときにプロンプトが動作し新しい名前を入力する</p>

                <p>コンピューターに新しいハードディスクを取り付けた場合、最初にそのディスクを初期化する必要があります。</p>
                <p>初期化が終了したら、その後はパーティション(ボリューム)の確保、ドライブ名やドライブパスの指定、フォーマットという手順を経て、始めて
                  そのディスクをWindowsから利用できるようになります。
                </p>
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  シンプルボリューム:ミラーリングやストライピングなどのいわゆるRAID機能を用いずに構成されたボリューム

                </div>
                <h4>記憶域スペース</h4>
                <p>記憶域スペース機能ではまず、コンピューターに接続されている物理ディスクを一括して1つの「記憶域プール」を作成します</p>
                <p>例えば1TBを1台、2TBを2台の計3台の物理ディスクがコンピューターに接続されているとき、これらを1つにまとめて合計5TBの容量を持つ記憶域プールを作成します</p>
                <p>Windowsがディスク領域を使用する場合には、この記憶域プールから容量を指定してあたかも1台の物理ディスクが存在するようにして扱える「仮想ディスク」を作成する</p>
                <p>5TBの記憶域スペースから2.5TB分の仮想ディスク2台を作成すると実際には3台の物理ディスクがあるにもかかわらずWindowsのディスク管理からは
                  あたかも2.5TB容量の2台のディスクが接続されているように見えます。
                </p>
                <p></p>
                <p>この機能により、単体ハードディスクの容量からくる制限はなくなります。</p>
              </div>
            </div>

          </Layout_tutorial_69>
        ) : id == 5 ? (
          <Layout_tutorial_69>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <h4>ドライバー</h4>
              <li>1.</li>
                <p>Windows Server 2022のセットアップメディアにはじめからドライバーが収録されている。</p>
                <p>ハードウェアを取り付けた時点で自動的にドライバーが組み込まれる。</p>
                <li>2.Windows Updateによりドライバーが組み込まれる</li>
                <p></p>
                <li>3.ハードウェア製品の側にドライバーディスクが付属</li>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>

          </Layout_tutorial_69>
        ) : id == 6 ? (
          <Layout_tutorial_69>
            <div className='flex'>
              <div className=''>

                <h3>MiniProfile</h3>
                <p>create.tsxファイルを作ります。</p>
                <p></p>
                <p>grid grid-cols-2にすることでlabelとinputを横並びにさせることができる</p>
                <p className='text-red-400'>create.tsx</p>
                <Tutorial6561 />
                <h3>Suggestions</h3>
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_69>
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