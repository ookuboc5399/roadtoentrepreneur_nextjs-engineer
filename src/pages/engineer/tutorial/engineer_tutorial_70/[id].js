import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_70 } from '../../../../components/layout/engineer/tutorial';
import { File } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_70>
            <h3>はじめに </h3>
            <p></p>
            <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
            <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
            <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>



          </Layout_tutorial_70>
        ) : id == 2 ? (
          <Layout_tutorial_70>
            <h3>準備 </h3>
            <p>ドライバーが組み込まれていないデバイスが存在する場合はツリーで他のデバイスの下に一覧が表示される</p>
            <Tutorial7021 />
            <p> ReactDOMのrender関数は第一引数に関数コンポーネント、第二引数にindex.htmlのrootを指定している。</p>
            <p>StrictModeでエラーを出力される</p>
            <h4></h4>
            <p>App.css、App.test.js、logo.svg、setupTest.jsを削除。index.cssの中身を削除</p>
            <p>            </p>
            <h4></h4>
            <p>componentsフォルダを作成し、Header.jsxファイルを作成。</p>
            <h4>css</h4>
            <p>index.cssに記述していきます。</p>
            <p className='text-red-400'>index.css</p>
            <Tutorial7023 />
            <p></p>
            
            <h4>image</h4>
            <p>imagesフォルダを作成</p>
            <h4>TaskCardTitle</h4>
            <p>Windows Admin CenterはWebベースの管理機能であるため、Webブラウザーさえあればネットワークが接続されていればどこからでもWindows Server2022の管理が行えるよう設計されている</p>

            <p>TaskCard作成</p>
            <p>TaskCardTitle、TaskCardDeleteButton、TaskAddInput、Tasksファイルを作成</p>
            <p>入力された値を保持するためinputCardTitleを用意します。</p>
            <h4>TaskCardTitle</h4>
            <p className='text-red-400'>TaskCardTitle.jsx</p>
            <Tutorial7024 />
            <p>inputに文字が入力されるたびにhandleChangeが呼ばれます。</p>
            <p>handleChangeではsetInputCardTitleによってinputCardTitleの値を更新している</p>
            <p>onSubmintで入力フォームでエンターを押したらhandleSubmitが実行される</p>
            <p>e.preventDefaultでエンターを押したら更新されるのを</p>
            <p>onBlurはinputから外れたときに</p>
            <h4>Tasks</h4>
            <p></p>
            <p>inputTextの内容をtaskListに格納する</p>
            <p>...taskListは以前の配列の中身を表しており、その配列にinputTextを追加している</p>
            <Tutorial7026 />
            <p></p>
            <h4>Task</h4>
            <p></p>
            <Tutorial7028 />
            <p></p>
            <h4>Taskの削除</h4>
            <p>task.idは作成した1からtask.lengthまでの値、idは削除ボタンを押したときのidの値</p>
            <p>削除ボタンを押したidが3だった場合、taskのidが1のものとは!==なのでtrueになりtaskのidの1が残ることになります。</p>
            <Tutorial7029 />
            <p></p>
          </Layout_tutorial_70>
        ) : id == 3 ? (
          <Layout_tutorial_70>
            <div className='flex'>
              <div className=''>
                <h4></h4>
                <h4>マルチユーザー</h4>

                <p></p>


              </div>

            </div>
          </Layout_tutorial_70>
        ) : id == 4 ? (
          <Layout_tutorial_70>
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

          </Layout_tutorial_70>
        ) : id == 5 ? (
          <Layout_tutorial_70>
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

          </Layout_tutorial_70>
        ) : id == 6 ? (
          <Layout_tutorial_70>
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

          </Layout_tutorial_70>
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

const Tutorial7021 = () => {
  const test = `
  npx create-react-app trello-clone
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7022 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7023 = () => {
  const test = `
* { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7024 = () => {
  const test = `
  const [inputCardTitle, setInputCardTitle] = useState("Today")
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7025 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7026 = () => {
  const test = `
  <div onClick={handleClick}>
  setTaskList([ 
    ...taskList, 
    { 
      text: inputText, 
    }, 
  ]);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7027 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7028 = () => {
  const test = `
<link 
  rel="stylesheet" 
  href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
  integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
  crossorigin="anonymous" 
/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7029 = () => {
  const test = `
  const handleDelete = (id) => { 
    setTaskList(taskList.filter((task) => task.id !== id)); 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};