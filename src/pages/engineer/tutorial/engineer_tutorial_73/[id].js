import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_73 } from '../../../../components/layout/engineer/tutorial';
import { File, Pathname } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_73>
            <h3>はじめに </h3>
            <p></p>
            <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
            <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
            <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/QcEY73FX9go" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


          </Layout_tutorial_73>
        ) : id == 2 ? (
          <Layout_tutorial_73>
            <h3>準備 </h3>
            <p>プロジェクトを作成します</p>
            <Tutorial7321 />
            <p>プロジェクト直下にappフォルダを作成します。</p>
            <p>page.tsxを作成します。</p>
            <p className='text-red-400'>app/page.tsx</p>

            <p>next.config.jsにappディレクトリの設定を追加します。</p>
            <p className='text-red-400'>next.config.js</p>

            <Tutorial7322 />
            <p>変更を適用するためnpm run devを再度実行します。</p>
            <p>appフォルダに新しくhead.tsxとlayout.tsxが作成されます。</p>
            <p>global.cssを適用させます。</p>
            <p className='text-red-400'>app/layout.tsx</p>
            <Tutorial7323 />
            <h4>Headerコンポーネント</h4>
            <p>Header.tsxを作成します</p>
            <p className='text-red-400'>app/Header.tsx</p>
            <Tutorial7324 />
            <h4>heroiconsインストール</h4>
            <Tutorial7325 />
            <h4>NavLinksコンポーネント</h4>
            <p>NavLinks.tsxを作成します</p>
            <p className='text-red-400'>app/NavLinks.tsx</p>
            <Tutorial7326 />
            <h4>catogory</h4>
            <p>constants.ts作成</p>
            <p className='text-red-400'>constants.ts</p>
            <Tutorial7327 />
            <h4>型</h4>
            <p>typings.d.ts作成</p>
            <p className='text-red-400'>typings.d.ts</p>
            <Tutorial7328 />
            <h4>NavLinkコンポーネント</h4>
            <p>NavLink.tsxを作成します</p>
            <p className='text-red-400'>app/NavLink.tsx</p>
            <Tutorial7329 />
            <h4>NavLinkスタイル</h4>
            <p>Navバーに適用させるスタイルを作成します</p>
            <p className='text-red-400'>styles/globals.css</p>
            <Tutorial73210 />
            <h4>pathname</h4>
            <p>urlの末尾の</p>
            <p className='text-red-400'>app/NavLinks.tsx</p>
            <Tutorial73211 />
            <p>取得したurlを/区切りにし、末尾の値のみをpop関数で取り出しpathとして返す</p>
            <p className='text-red-400'>app/NavLinks.tsx</p>
            <Tutorial73212 />
            <p>pathがgeneralでcategoryもgeneralだった場合</p>
            <p className='text-red-400'>app/NavLinks.tsx</p>
            <Tutorial73212 />
            <Pathname />


          </Layout_tutorial_73>
        ) : id == 3 ? (
          <Layout_tutorial_73>
            <div className='flex'>
              <div className=''>
                <h4>検索</h4>

                <h4></h4>
                <p>検索窓に入力した値はinputに格納されます</p>
                <Tutorial7331 />
                <p>検索窓に入力されていない場合はボタンを押すことができないようにdisabled属性を設定します。</p>
                <p className='text-red-400'>app.module.ts</p>
                <Tutorial7332 />
                <h4>Configモジュールのインポート</h4>
                <p>isGlobalをtrueにすることでConfigModuleをプロジェクト全体で使うことができる</p>
                <p className='text-red-400'>app.module.ts</p>


              </div>

            </div>
          </Layout_tutorial_73>
        ) : id == 4 ? (
          <Layout_tutorial_73>
            <div className='flex'>
              <div className=''>
                <h3>API</h3>
                <p></p>

                <p>こうした使い方をした際の個々の領域のことを「パーティション」と呼びます。</p>
                <h4>lib</h4>
                <p>libフォルダを作成。</p>
                <p>また、あるファイルの内容が広大な容量を持つハードディスクの中のどの位置に記録されているかを示す情報がなければ、ファイルにアクセスすることはできません。</p>
                <h4>graphql-requestインストール</h4>
                <Tutorial7342 />
                <p>ボリューム内の記憶領域をどのように利用し、ファイルに付随する様々な情報をどのように記録するのか、それらの事柄に関する取り決めをファイルシステムといいます。</p>

                <h4>.env.local</h4>
                <p>.env.localを作成し</p>
                <Tutorial7343 />
                <h4>stepzen</h4>
                <p>stepzenをインストールする</p>
                <Tutorial7344 />
                <p>API endpointのインポート</p>
                <Tutorial7345 />
                <p>5TBの記憶域スペースから2.5TB分の仮想ディスク2台を作成すると実際には3台の物理ディスクがあるにもかかわらずWindowsのディスク管理からは
                  あたかも2.5TB容量の2台のディスクが接続されているように見えます。
                </p>
                <p></p>
                <p>この機能により、単体ハードディスクの容量からくる制限はなくなります。</p>
              </div>
            </div>

          </Layout_tutorial_73>
        ) : id == 5 ? (
          <Layout_tutorial_73>
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

          </Layout_tutorial_73>
        ) : id == 6 ? (
          <Layout_tutorial_73>
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

          </Layout_tutorial_73>
        ) : id == 7 ? (
          <Layout_tutorial_73>
            <div className='flex'>
              <div className=''>
                <h3>準備 </h3>
                <p>プロジェクトを作成します</p>
                <Tutorial7371 />
                <h3>MiniProfile</h3>
                <p>pagesフォルダのindex.tsxと_app.tsxを削除します。</p>
                <p>プロジェクト直下にappフォルダを作成します。</p>
                <p>page.tsxを作成します。</p>
                <p className='text-red-400'>app/page.tsx</p>
                <Tutorial7373 />
                <p>next.config.jsにappディレクトリの設定を追加します。</p>
                <p className='text-red-400'>next.config.js</p>
                <Tutorial7373 />

                <p>変更を適用するためnpm run devを再度実行します。</p>
                <p>appフォルダに新しくhead.tsxとlayout.tsxが作成されます。</p>
                <h3>Sanityインストール</h3>
                <Tutorial7374 />
                <Tutorial7375 />
                <h3>next-sanityインストール</h3>
                <Tutorial7376 />
                <p>作成したnextjs13-sanity-blogのpackage.jsonからプロジェクトのpackage.jsonにdependenciesの@sanity/vision、sanity、styled-componentsをコピーします。</p>
                <p>また、devDependenciesの@sanity/eslint-config-studioも追加します。            </p>
                <p>sanityのプロジェクトからschemasフォルダ、sanity.cli.ts、sanity.config.tsもプロジェクト直下に移動させます。</p>
                <p>sanityプロジェクトを削除します。</p>
                <h4></h4>
                <p>変更を反映させます。</p>
                {/* <Tutorial73710 /> */}
                <h3>.env.localファイル作成</h3>
                {/* <Tutorial7377 /> */}
                <p className='text-red-400'>sanity.config.ts</p>
                {/* <Tutorial7378 /> */}
                <p className='text-red-400'>sanity.cli.ts</p>
                {/* <Tutorial7379 /> */}
                <p>appフォルダ直下にstudio/[[...index]]/page.tsxを作成します  </p>
                <p className='text-red-400'>page.tsx</p>
                {/* <Tutorial73711 /> */}
                <p></p>
                <p className='text-red-400'>head.tsx</p>
                {/* <Tutorial73712 /> */}
                <p></p>
                <p className='text-red-400'>loading.tsx</p>
                {/* <Tutorial73713 /> */}
                <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>Feed.jsにPostコンポーネントを読み込ませる</p>
              </div>
            </div>

          </Layout_tutorial_73>
        ) : id == 8 ? (
          <Layout_tutorial_73>
            <div className='flex'>
              <div className=''>
                <h3>準備 </h3>
                <p>プロジェクトを作成します</p>
                {/* <Tutorial7381 /> */}
                <h3>MiniProfile</h3>
                <p>pagesフォルダのindex.tsxと_app.tsxを削除します。</p>
                <p>プロジェクト直下にtheme.tsxを作成します。</p>
                <p className='text-red-400'>theme.tsx</p>
                {/* <Tutorial7382 /> */}
                <p>sanity.config.tsに設定を追加します。</p>
                <p className='text-red-400'>next.config.js</p>
                {/* <Tutorial7383 /> */}
                <h4></h4>
                <p>componentsフォルダを作成し、StudioNavbar.tsxファイルを作ります。</p>
                <p className='text-red-400'>StudioNavbar.tsx</p>
                <Tutorial7384 />
                <p>rfceでreactコンポーネントを作成 </p>
                <h4>heroiconsインストール</h4>
                <Tutorial7385 />
              </div>
            </div>

          </Layout_tutorial_73>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial7321 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss news-app-yt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7322 = () => {
  const test = `
  module.exports = { 
    reactStrictMode: true, 
    experimental: { 
      appDir: true 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7323 = () => {
  const test = `
  import '../styles/globals.css'
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial7324 = () => {
  const test = `
  sanity init --coupon sonny2022
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7325 = () => {
  const test = `
  npm install @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7326 = () => {
  const test = `
  npm install react-bootstrap bootstrap
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial7327 = () => {
  const test = `
  export const categories: Category[] = [ 
    "general", 
    "business", 
    "entertainment", 
    "health", 
    "science", 
    "sports", 
    "technology", 
  ];
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7328 = () => {
  const test = `
  import React from "react"; 
  import Row from "react-bootstrap/Row"; 
  import Col from "react-bootstrap/Col"; 
  import Card from "react-bootstrap/Card"; 
  import Image from "next/image"; 
  const AuthorIntro = () => { 
    return ( 
      <Row> 
        <Col md="8"> 
          {/* AUTHOR INTRO STARTS */} 
          <Card className="mb-4 admin-intro"> 
            <Image 
              roundedCircle 
              width={64} 
              height={64} 
              className="mr-3" 
              src="" 
              alt="Generic placeholder" 
            /> 
            <Card.Body> 
              <h5 className="font-weight-bold mb-0">Hello Friends,</h5> 
              <p className="welcome-text"> 
                My name is Filip Jerga and I am an experienced software engineer 
                and freelance developer. and this is my blog page. 
              </p> 
            </Card.Body> 
          </Card> 
          {/* AUTHOR INTRO ENDS */} 
        </Col> 
      </Row> 
    ); 
  }; 
  export default AuthorIntro;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7329 = () => {
  const test = `
  import React from "react"; 
  import Card from "react-bootstrap/Card"; 
  const CardListItem = () => { 
    return ( 
      <Card className={'fj-card fj-card-list'}> 
        <div className="card-body-wrapper"> 
          <Card.Header className="d-flex flex-row"> 
            <img 
              src={"https://via.placeholder.com/150"} 
              className="rounded-circle mr-3" 
              height="50px" 
              width="50px" 
              alt="avatar" 
            /> 
            <div> 
              <Card.Title className="font-weight-bold mb-1"> 
                Placeholder Author 
              </Card.Title> 
              <Card.Text className="card-date">Placeholder Date</Card.Text> 
            </div> 
          </Card.Header> 
          <Card.Body> 
            <Card.Title className="card-main-title">Placeholder Title</Card.Title> 
            <Card.Text>Placehodler Subtitle</Card.Text> 
          </Card.Body> 
        </div> 
        <a href="#" className="card-button"> 
          Read More 
        </a> 
      </Card> 
    ); 
  }; 
  export default CardListItem;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial73210 = () => {
  const test = `
  @layer components { 
    .navLink { 
        @apply hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out; 
    } 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial73211 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss sanity-v3-blog-nextjs13
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial73212 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss sanity-v3-blog-nextjs13
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial73213 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss sanity-v3-blog-nextjs13
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7331 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss sanity-v3-blog-nextjs13
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7332 = () => {
  const test = `
  <button type='submit' disabled={!input} className="text-orange-400 disabled:text-gray-400">Search</button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7342 = () => {
  const test = `
  npm add graphql-request graphql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7343 = () => {
  const test = `
  npm add graphql-request graphql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7344 = () => {
  const test = `
  npm add graphql-request graphql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7345 = () => {
  const test = `
  stepzen init
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7346 = () => {
  const test = `
  stepzen i
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7347 = () => {
  const test = `
  stepzen init
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7371 = () => {
  const test = `

  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7373 = () => {
  const test = `

  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7374 = () => {
  const test = `
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7375 = () => {
  const test = `
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7376 = () => {
  const test = `
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7384 = () => {
  const test = `

  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7385 = () => {
  const test = `

  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};