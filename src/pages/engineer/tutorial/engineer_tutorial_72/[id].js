import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_72 } from '../../../../components/layout/engineer/tutorial';
import { File } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_72>
            <h3>はじめに </h3>
            <p></p>
            <p>バックエンドは Django REST Framework を使用して API サーバーを構築します。</p>
            <p>フロントエンドは Next.js と TailwindCSS を使用します。</p>
            <p>Django REST Framework と Next.js の使い方を学習していきましょう。 </p>
           


          </Layout_tutorial_72>
        ) : id == 2 ? (
          <Layout_tutorial_72>
            <h3>準備 </h3>
            <p>プロジェクトを作成します</p>
            <Tutorial7221 />
            <Tutorial7222 />
            <p className='text-red-400'>tsconfig.json</p>
            <h4>sanityインストール</h4>
            <Tutorial7223 />
            <p>sanityのプロジェクトを作成します。</p>
            <Tutorial7224 />
            <p>プロジェクト名はfilip-blog-sanityとします。</p>
            <h4>React Bootstrapインストール</h4>
            <Tutorial7225 />
            <h4>Prismaのインストール</h4>
            <Tutorial7226 />
            <h4>index.scssファイル作成</h4>
            <p className='text-red-400'>index.scss</p>
            <p></p>
            <h4>componentsフォルダ作成</h4>
            <p>。</p>
            <p className='text-red-400'>Navnar.js</p>
            <p></p>
            <Tutorial7227 />
            <p className='text-red-400'>AuthorIntro.js</p>
            <p></p>
            <Tutorial7228 />
            <p className='text-red-400'>CardListItem.js</p>
            <p></p>
            <Tutorial7229 />
            <p className='text-red-400'>CardItem.js</p>
            <p></p>
            <Tutorial72210 />
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              yaml:プログラムが内部で扱うオブジェクトなどを保存や送受信などのためにデータ化する「シリアライズ」のための形式
            </div>
            <h4>docker-compose.ymlファイル作成</h4>
            <p></p>

            <p>.envbベースの管理機能であるため、Webブラウザーさえあればネットワークが接続されていればどこからでもWindows Server2022の管理が行えるよう設計されている</p>

            <p></p>
            <p></p>

          </Layout_tutorial_72>
        ) : id == 3 ? (
          <Layout_tutorial_72>
            <div className='flex'>
              <div className=''>
                <h4>パッケージのインストール</h4>
             
                <h4></h4>
                <p>認証関係を実装するためのauthモジュール、ユーザーを管理するためのuserモジュール、タスクを管理するためのtodoモジュール、prismaの機能を提供するprismaモジュール</p>
          
                <p>アプリケーションにおいて各モジュールを使用するためにはapp.moduleにインポートしておく必要があります</p>
                <p className='text-red-400'>app.module.ts</p>
      
                <h4>Configモジュールのインポート</h4>
                <p>isGlobalをtrueにすることでConfigModuleをプロジェクト全体で使うことができる</p>
                <p className='text-red-400'>app.module.ts</p>
           

              </div>

            </div>
          </Layout_tutorial_72>
        ) : id == 4 ? (
          <Layout_tutorial_72>
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

          </Layout_tutorial_72>
        ) : id == 5 ? (
          <Layout_tutorial_72>
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

          </Layout_tutorial_72>
        ) : id == 6 ? (
          <Layout_tutorial_72>
            <div className='flex'>
              <div className=''>
              <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x3fCEPFgUSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              </div>
            </div>

          </Layout_tutorial_72>
        ) : id == 7 ? (
          <Layout_tutorial_72>
            <div className='flex'>
              <div className=''>
                <h3>準備 </h3>
                <p>プロジェクトを作成します</p>
                <Tutorial7271 />
                <h3>MiniProfile</h3>
                <p>pagesフォルダのindex.tsxと_app.tsxを削除します。</p>
                <p>プロジェクト直下にappフォルダを作成します。</p>
                <p>page.tsxを作成します。</p>
                <p className='text-red-400'>app/page.tsx</p>
                <Tutorial7272 />
                <p>next.config.jsにappディレクトリの設定を追加します。</p>
                <p className='text-red-400'>next.config.js</p>
                <Tutorial7273 />
                
                <p>変更を適用するためnpm run devを再度実行します。</p>
                <p>appフォルダに新しくhead.tsxとlayout.tsxが作成されます。</p>
                <h3>Sanityインストール</h3>
                <Tutorial7274 />
                <Tutorial7275 />
                <h3>next-sanityインストール</h3>
                <Tutorial7276 />
                <p>作成したnextjs13-sanity-blogのpackage.jsonからプロジェクトのpackage.jsonにdependenciesの@sanity/vision、sanity、styled-componentsをコピーします。</p>
                <p>また、devDependenciesの@sanity/eslint-config-studioも追加します。            </p>
                <p>sanityのプロジェクトからschemasフォルダ、sanity.cli.ts、sanity.config.tsもプロジェクト直下に移動させます。</p>
                <p>sanityプロジェクトを削除します。</p>
                <h4></h4>
                <p>変更を反映させます。</p>
                <Tutorial72710 />
                <h3>.env.localファイル作成</h3>
                <Tutorial7277 />
                <p className='text-red-400'>sanity.config.ts</p>
                <Tutorial7278 />
                <p className='text-red-400'>sanity.cli.ts</p>
                <Tutorial7279 />
                <p>appフォルダ直下にstudio/[[...index]]/page.tsxを作成します  </p>
                <p className='text-red-400'>studio/[[...index]]/page.tsx</p>
                <Tutorial72711 />
                <p>appフォルダ直下にstudio/[[...index]]/head.tsxを作成します  </p>
                <p className='text-red-400'>studio/[[...index]]/head.tsx</p>
                <Tutorial72712 />
                <p>appフォルダ直下にstudio/[[...index]]/loading.tsxを作成します  </p>
                <p className='text-red-400'>studio/[[...index]]/loading.tsx</p>
                <Tutorial72713 />
                <p>http://localhost:3000/studioでsanityにログインすることができる</p>
               
              </div>
            </div>

          </Layout_tutorial_72>
        ) : id == 8 ? (
          <Layout_tutorial_72>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <h3></h3>
                <p></p>
                <p>プロジェクト直下にtheme.tsxを作成します。</p>
                <p className='text-red-400'>theme.tsx</p>
                <Tutorial7282 />
                <h4>Sanity Studio変更</h4>
                <p>theme.tsのテーマを追加します</p>
                <p className='text-red-400'>next.config.js</p>
                <Tutorial7281 />
                <p>StudioにおいてNavbarを作成します。</p>
                <p>sanity.config.tsに設定を追加します。</p>
                <p className='text-red-400'>next.config.js</p>
                <Tutorial7283 />
                
                <p>componentsフォルダを作成し、StudioNavbar.tsxファイルを作ります。</p>
                <p className='text-red-400'>StudioNavbar.tsx</p>
                <Tutorial7284 />
                <p>rfceでreactコンポーネントを作成 </p>
                <h4>heroiconsインストール</h4>
                <Tutorial7285 />
                <p>componentsにLogo.tsxファイルを作ります。</p>
                <p className='text-red-400'>Logo.tsx</p>
                <Tutorial7284 />
                <h4>ホワイトリストにpapareact</h4>
                <p>ホワイトリストにpapareact追加</p>
                <p className='text-red-400'>next.config.js</p>
                <Tutorial7286 />
                <p>appディレクトリの直下に(admin)フォルダ、(user)フォルダを作成し、studioフォルダを(admin)フォルダにpage.tsxを(user)フォルダの中に移動させます。</p>
                <p>componentsにHeader.tsxファイルを作ります。</p>
               
                <p className='text-red-400'>(user)/layout.tsx</p>
                <p>Header.tsxを追加します。</p>
                <Tutorial7288 />
                <p className='text-red-400'>Banner.tsx</p>
                <p>componentsにBanner.tsxファイルを作ります。</p>
                <Tutorial7289 />
                <h4>libフォルダ作成</h4>
                <p>sanity.client.ts作成</p>
                <p className='text-red-400'>lib/sanity.client.ts</p>
                <Tutorial72811 />
                <p className='text-red-400'>lib/sanity.preview.ts</p>
                <Tutorial72812 />
                <h4></h4>
                <p></p>
                <p className='text-red-400'>pages/api/preview.ts</p>
                <Tutorial72813 />
                <p className='text-red-400'>pages/api/exit-preview.ts</p>
                <Tutorial72814 />
                <p className='text-red-400'>components/BlogList.tsx</p>
                <Tutorial72815 />
                <p className='text-red-400'>typings.d.ts</p>
                <Tutorial72816 />
              </div>
            </div>

          </Layout_tutorial_72>
        ) : id == 9 ? (
          <Layout_tutorial_72>
            <div className='flex'>
              <div className=''>
                <h3></h3>
                <h4>プレビュー</h4>
                <p></p>
                <Tutorial7292 />
                <p>プロジェクト直下にtheme.tsxを作成します。</p>
                <p className='text-red-400'>structure.ts</p>
                <Tutorial7293 />
                
                <p>componentsフォルダを作成し、StudioNavbar.tsxファイルを作ります。</p>
                <p className='text-red-400'>StudioNavbar.tsx</p>
               
                <p>appディレクトリの直下に(admin)フォルダ、(user)フォルダを作成し、studioフォルダを(admin)フォルダにpage.tsxを(user)フォルダの中に移動させます。</p>
                <p>componentsにHeader.tsxファイルを作ります。</p>
               
                <p className='text-red-400'>(user)/layout.tsx</p>
                <p>Header.tsxを追加します。</p>
                
              </div>
            </div>

          </Layout_tutorial_72>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial7221 = () => {
  const test = `
  npx create-next-app filip-blog
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7222 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7223 = () => {
  const test = `
  npm install -g @sanity/cli
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial7224 = () => {
  const test = `
  sanity init --coupon sonny2022
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7225 = () => {
  const test = `
  npm install react-bootstrap bootstrap
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7226 = () => {
  const test = `
  npm install react-bootstrap bootstrap
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial7227 = () => {
  const test = `
  import React from "react"; 
  import Navbar from 'react-bootstrap/Navbar'; 
  import Nav from "react-bootstrap/Nav"; 
  const BlogNavbar = () => { 
    return ( 
      <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg"> 
        <Navbar.Brand className="fj-navbar-brand"> 
          <a href="#">Filip-Jerga</a> 
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="ml-auto"> 
            <Nav.Link className="fj-navbar-item fj-navbar-link" href="/"> 
              Home 
            </Nav.Link> 
          </Nav> 
        </Navbar.Collapse> 
      </Navbar> 
    ); 
  }; 
  export default BlogNavbar;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7228 = () => {
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

const Tutorial7229 = () => {
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

const Tutorial72210 = () => {
  const test = `
  import React from "react"; 
  import Card from "react-bootstrap/Card"; 
  const CardItem = () => { 
    return ( 
      <Card className={'fj-card'}> 
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
          <div className="view overlay"> 
            <Card.Img 
              src="https://via.placeholder.com/250" 
              alt="Card image cap" 
            /> 
          </div> 
          <Card.Body> 
            <Card.Title className="card-main-title">Placeholder Title</Card.Title> 
            <Card.Text>Placehodler Subtitle</Card.Text> 
          </Card.Body> 
        </div> 
        <a className="card-button">Read More</a> 
      </Card> 
    ); 
  }; 
  export default CardItem;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72211 = () => {
  const test = `
  npm i next-sanity @portabletext/react @sanity/image-url
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7271 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss sanity-v3-blog-nextjs13
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7272 = () => {
  const test = `
  import React from 'react' 
  export default function page() { 
    return ( 
      <div>page</div> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7273 = () => {
  const test = `
  /** @type {import('next').NextConfig} */ 
  module.exports = { 
    reactStrictMode: true, 
    experimental: { 
      appDir:true 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7274 = () => {
  const test = `
  npm create sanity@latest -- --coupon sonny2022
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7275 = () => {
  const test = `
  ✔ Fetching existing projects 
  ? Project name: nextjs13 sanity blog 
  Your content will be stored in a dataset that can be public or private, depending on 
  whether you want to query your content with or without authentication. 
  The default dataset configuration has a public dataset named "production". 
  ? Use the default dataset configuration? Yes 
  ✔ Creating dataset 
  ? Project output path: C:\Users\ankle\OneDrive\デスクトップ\src\Youtube\sanity-v3-blog-nextjs13\ookubo\sanity-v3-blog-nextjs13\nextjs13-sanity-blog 
  ? Select project template Blog (schema) 
  ? Do you want to use TypeScript? Yes 
  ✔ Bootstrapping files from template 
  ✔ Resolving latest module versions 
  ✔ Creating default project files 
  ? Package manager to use for installing dependencies? npm
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7276 = () => {
  const test = `
  npm install next-sanity @portabletext/react @sanity/image-url
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7277 = () => {
  const test = `
  NEXT_PUBLIC_SANITY_PROJECT_ID=sgbn2xx1 
  NEXT_PUBLIC_SANITY_DATASET=production 
  NEXT_PUBLIC_SANITY_API_VERSION=2022-11-15
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7278 = () => {
  const test = `
  import {defineConfig} from 'sanity' 
  import {deskTool} from 'sanity/desk' 
  import {visionTool} from '@sanity/vision' 
  import {schemaTypes} from './schemas' 

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; 
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; 

  export default defineConfig({ 
    name: 'default', 
    title: 'nextjs13 sanity blog', 
    projectId, 
    dataset, 
    plugins: [deskTool(), visionTool()], 
    schema: { 
      types: schemaTypes, 
    }, 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7279 = () => {
  const test = `
  import {defineCliConfig} from 'sanity/cli' 
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; 
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!; 
  export default defineCliConfig({ 
    api: { 
      projectId, 
      dataset 
    } 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72710 = () => {
  const test = `
  npm i
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72711 = () => {
  const test = `
  'use client' 
  import {NextStudio} from 'next-sanity/studio' 
  import config from '../../../sanity.config' 
  export default function StudioPage() { 

    return <NextStudio config={config} /> 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72712 = () => {
  const test = `
  export {NextStudioHead} from 'next-sanity/studio/head' 

  import {NextStudioHead} from 'next-sanity/studio/head' 
  export default function CustomStudioHead() { 
    return ( 
      <> 
        <NextStudioHead favicons={false} /> 
        <link 
          rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="https://www.sanity.io/static/images/favicons/favicon-32x32.png" 
        /> 
      </> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72713 = () => {
  const test = `
  'use client' 
  import config from '../../../sanity.config' 
  import NextStudioLoading from 'next-sanity/studio/loading' 
  export default function Loading() { 
    return <NextStudioLoading config={config} /> 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7281 = () => {
  const test = `
  theme: myTheme,
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7282 = () => {
  const test = `
  import { buildLegacyTheme, defineConfig } from "sanity"; 
  const props = { 
    "--my-white": "#fff", 
    "--my-black": "#1a1a1a", 
    "--papafam-brand": "#F7AB0A", 
    "--my-red": "#db4437", 
    "--my-yellow": "#f4b400", 
    "--my-green": "#0f9d58", 
  }; 
  export const myTheme = buildLegacyTheme({ 
      /* Base theme colors */ 
      "--black": props["--my-black"], 
      "--white": props["--my-white"], 
     
      "--gray": "#666", 
      "--gray-base": "#666", 
     
      "--component-bg": props["--my-black"], 
      "--component-text-color": props["--my-white"], 
     
      /* Brand */ 
      "--brand-primary": props["--papafam-brand"], 
     
      // Default button 
      "--default-button-color": "#666", 
      "--default-button-primary-color": props["--papafam-brand"], 
      "--default-button-success-color": props["--my-green"], 
      "--default-button-warning-color": props["--my-yellow"], 
      "--default-button-danger-color": props["--my-red"], 
     
      /* State */ 
      "--state-info-color": props["--papafam-brand"], 
      "--state-success-color": props["--my-green"], 
      "--state-warning-color": props["--my-yellow"], 
      "--state-danger-color": props["--my-red"], 
     
      /* Navbar */ 
      "--main-navigation-color": props["--my-black"], 
      "--main-navigation-color--inverted": props["--my-white"], 
     
      "--focus-color": props["--papafam-brand"], 
    });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7283 = () => {
  const test = `
  studio: { 
    components: { 
      logo:Logo, 
      navbar: StudioNavbar 
    } 
  },
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7284 = () => {
  const test = `
  function StudioNavbar(props: any) { 
    return ( 
      <div> 
        <div className="flex items-center justify-between p-5"> 
          <Link href="/" className="text-[#F7AB0A] flex items-center"> 
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" /> 
            Go To Website 
          </Link> 
          <>{props.renderDefault(props)}</> 
        </div> 
      </div> 
    ); 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7285 = () => {
  const test = `
  npm install @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7286 = () => {
  const test = `
  module.exports = { 
    reactStrictMode: true, 
    experimental: { 
      appDir: true, 
    }, 
    images: { 
      domains: ["links.papareact.com"], 
    } 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7287 = () => {
  const test = `
  npm i
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7288 = () => {
  const test = `
  return ( 
    <html> 
      <Header /> 
      <body>{children}</body> 
    </html> 
  )
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7289 = () => {
  const test = `
  npm i
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72810 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72811 = () => {
  const test = `
  import { createClient } from "next-sanity"; 
  export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp" 
  export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production" 
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16" 
  export const client = createClient({ 
    projectId, 
    dataset, 
    apiVersion, 
    useCdn: false, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72812 = () => {
  const test = `
  "use client"; 
  import { definePreview } from "next-sanity/preview"; 
  import { projectId, dataset } from "./sanity.client"; 
  function onPublicAccessOnly() { 
    throw new Error(Unable to load preview as you're not logged in); 
  } 
  if (!projectId || !dataset) { 
    throw new Error( 
      Missing projectId or dataset. Check your sanity.json or .env 
    ); 
  } 
  export const usePreview = definePreview({ 
    projectId, 
    dataset, 
    onPublicAccessOnly, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72813 = () => {
  const test = `
  "use client"; 
  import { definePreview } from "next-sanity/preview"; 
  import { projectId, dataset } from "./sanity.client"; 
  function onPublicAccessOnly() { 
    throw new Error(Unable to load preview as you're not logged in); 
  } 
  if (!projectId || !dataset) { 
    throw new Error( 
      Missing projectId or dataset. Check your sanity.json or .env 
    ); 
  } 
  export const usePreview = definePreview({ 
    projectId, 
    dataset, 
    onPublicAccessOnly, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72814 = () => {
  const test = `
  "use client"; 
  import { definePreview } from "next-sanity/preview"; 
  import { projectId, dataset } from "./sanity.client"; 
  function onPublicAccessOnly() { 
    throw new Error(Unable to load preview as you're not logged in); 
  } 
  if (!projectId || !dataset) { 
    throw new Error( 
      Missing projectId or dataset. Check your sanity.json or .env 
    ); 
  } 
  export const usePreview = definePreview({ 
    projectId, 
    dataset, 
    onPublicAccessOnly, 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72815 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial72816 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7291 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7292 = () => {
  const test = `
  npm install --save sanity-plugin-iframe-pane
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7293 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};