import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { Layout_tutorial_75 } from "../../../../components/layout/engineer/tutorial";
import {
  File,
  Pathname,
  styled_components,
} from "../../../../components/Blog_comp";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id == 1 ? (
        <Layout_tutorial_75>
          <h3>はじめに </h3>
          <p>
            ユーザー認証を必要とするページなど、ユーザーごとに個別に表示するコンテンツが異なる場合はSSGですべて補うことはできません。この対策としてSSGとCSR(クライアントサイドレンダリング)を併用します。
            静的コンテンツで配信できる部分はビルド時に生成(SSG)し、個別のコンテンツに関してはクライアントサイドからAPIを用いて動的にページを表示(CSR)していきます
          </p>
          <Image
            className="cursor-pointer"
            src="/images/programing/tutorial/SSG+CSR.png"
            alt="top"
            width={300}
            height={150}
          />

          <p>
            SSRのケースではユーザーの情報も含めてサーバーサイドですべての処理を行い、完成されたHTMLを生成しレスポンスとして送信します。
          </p>
          <p>
            一方でSSG+CSRのケースではあらかじめSSGでページをビルドしておき、クライアントサイドからのリクエストで全ユーザーに対して共通で使用する部分のみ入ったページをまずレスポンスとして送信します。
            その後、CSRで各ユーザーに個別の内容を表示します。
          </p>
          <p>
            つまり、ビルド時に全コンテンツを乗せるのではなく、レスポンスがクライアントのブラウザへ返却された後でユーザー個別のコンテンツを非同期で取得し、レンダリングを行います。{" "}
          </p>
          <p>
            SSRは一見シンプルですが、ユーザーごとにHTMLを生成する必要があり大量のHTMLをキャッシュさせるのが難しいです。
          </p>
          <p>
            初期表示においてゼロからHTMLを構築していくSPAと違い、SSG+CSRはすでに共通部分がHTMLとして構築されているので初期表示のコストを抑えることができます。
          </p>
        </Layout_tutorial_75>
      ) : id == 2 ? (
        <Layout_tutorial_75>
          <h3>準備 </h3>
          <p>プロジェクトを作成します</p>
          <Tutorial7521 />
          <p>
            srcフォルダをプロジェクト直下に作成し、pagesフォルダとstylesフォルダをsrcフォルダの中に格納します
          </p>

          <p>
            tsconfig.jsonを編集します。
            baseUrlオプションにsrcを指定し、基準となるディレクトリをsrcに変更します。
          </p>

          <p>
            includeオプションに"src//.ts",
            "src//.tsx"を指定し、コンパイル対象とします。
          </p>
          <p>
            TypeScriptの厳格な型チェックを行うためにstrictオプションをオンにします。
          </p>
          <p className="text-red-400">tsconfig.json</p>
          <Tutorial7522 />
          <h4>styled-components</h4>
          <styled_component />
          <Tutorial7523 />

          <h4>_document.tsx</h4>
          <p>
            SSRやSSG使用時にサーバーサイドでスタイルを適用させるための設定をします。
          </p>
          <p>
            pages/_document.tsxはカスタムドキュメントと呼ばれる仕組みで、デフォルトで生成されるページの設定のうち、
            htmlやhead、body要素に関わる部分を上書きするためのものです。
          </p>
          <p>ここではスタイルを差し込む処理を追加しています。</p>
          <Tutorial7524 />
          <p>
            next.config.jsのcompilerオプションのstyledComponentsを有効化します。
          </p>
          <p className="text-red-400">next.config.js</p>
          <Tutorial7525 />
          <h4></h4>
          <p>createGlobalStyleを使ってグローバルにスタイルを適用させます。</p>
          <p className="text-red-400">app/NavLinks.tsx</p>
          <Tutorial7526 />
          <h4>ESLintの設定</h4>
          <p>
            リントツールのESLintとフォーマッターのPrettier、その他のプラグインをインストールします。これらのツールはソースコードの標準化や自動フォーマットを行い、ソースコードの品質を保つのに役に立ちます。
          </p>
          <Tutorial7527 />
          <p>
            prettierのルールであるシングルクォートのsingleQuoteオプションや列のサイズを設定するprintWidthオプションを追加します。
          </p>
          <p>
            import React from
            'react'はReact17から不必要になったので、"react/react-in-jsx-scopeのルールをオフにしてあります。
          </p>
          <p>
            import/orderはimportの順番をアルファベット順に昇順で並べる設定にします
          </p>
          <p className="text-red-400">.eslintrc.json</p>
          <Tutorial7528 />

          <h4>npmスクリプトにlintとformat追加</h4>
          <p>
            next
            lintはデフォルトではpages,components,lib以下のファイルに適用されます。--dirオプションを追加することでsrc以下に適用されます。
          </p>
          <p>lintコマンドを実行することで多数のリントエラーを検出できます。</p>
          <p>
            このエラーを自動フォーマットを行うformatコマンドを実行することで修正します。
          </p>
          <p className="text-red-400">package.json</p>
          <Tutorial7529 />
          <h4>Storybookの設定</h4>
          <p>Storybookのインストール</p>
          <Tutorial75210 />
          <h4>プラグインなどのライブラリを導入</h4>
          <Tutorial75211 />
          <p>Storybookに対してアセットを配置するために.storybookにpublicフォルダを作成します。</p>
          <p>静的ファイルを配置するディレクトリを指定するためにmain.jsにstaticDirsオプションを追加します。</p>
          <h4>Themaの設定</h4>
          <p>
            Themeはフォントサイズ、文字列スペース、行の高さ、カラー、スペーシングをアプリケーション全体で統一するのに役立ちます。
          </p>
          <p className="text-red-400">src/themes/fontSizes.ts</p>
          <Tutorial75212 />
          <p className="text-red-400">src/themes/letterSpacings.ts</p>
          <Tutorial75213 />
          <p className="text-red-400">src/themes/lineHeights.ts</p>
          <Tutorial75214 />
          <p className="text-red-400">src/themes/space.ts</p>
          <Tutorial75215 />
          <p className="text-red-400">src/themes/colors.ts</p>
          <Tutorial75216 />
          <p className="text-red-400">src/themes/index.ts</p>
          <Tutorial75217 />
          <Pathname />
        </Layout_tutorial_75>
      ) : id == 3 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h4>検索</h4>

              <h4></h4>
              <p>検索窓に入力した値はinputに格納されます</p>
              <Tutorial7531 />
              <p>
                検索窓に入力されていない場合はボタンを押すことができないようにdisabled属性を設定します。
              </p>
              <p className="text-red-400">app.module.ts</p>
              <Tutorial7532 />
              <h4>Configモジュールのインポート</h4>
              <p>
                isGlobalをtrueにすることでConfigModuleをプロジェクト全体で使うことができる
              </p>
              <p className="text-red-400">app.module.ts</p>
            </div>
          </div>
        </Layout_tutorial_75>
      ) : id == 4 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h3>API</h3>
              <p></p>

              <p>
                こうした使い方をした際の個々の領域のことを「パーティション」と呼びます。
              </p>
              <h4>lib</h4>
              <p>libフォルダを作成。</p>
              <p>
                また、あるファイルの内容が広大な容量を持つハードディスクの中のどの位置に記録されているかを示す情報がなければ、ファイルにアクセスすることはできません。
              </p>
              <h4>graphql-requestインストール</h4>
              <Tutorial7542 />
              <p>
                ボリューム内の記憶領域をどのように利用し、ファイルに付随する様々な情報をどのように記録するのか、それらの事柄に関する取り決めをファイルシステムといいます。
              </p>

              <h4>.env.local</h4>
              <p>.env.localを作成し</p>
              <Tutorial7543 />
              <h4>stepzen</h4>
              <p>stepzenをインストールする</p>
              <Tutorial7544 />
              <p>API endpointのインポート</p>
              <Tutorial7545 />
              <p>
                5TBの記憶域スペースから2.5TB分の仮想ディスク2台を作成すると実際には3台の物理ディスクがあるにもかかわらずWindowsのディスク管理からは
                あたかも2.5TB容量の2台のディスクが接続されているように見えます。
              </p>
              <p></p>
              <p>
                この機能により、単体ハードディスクの容量からくる制限はなくなります。
              </p>
            </div>
          </div>
        </Layout_tutorial_75>
      ) : id == 5 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h3></h3>
              <h4>ドライバー</h4>
              <li>1.</li>
              <p>
                Windows Server
                2022のセットアップメディアにはじめからドライバーが収録されている。
              </p>
              <p>
                ハードウェアを取り付けた時点で自動的にドライバーが組み込まれる。
              </p>
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
        </Layout_tutorial_75>
      ) : id == 6 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h3>MiniProfile</h3>
              <p>create.tsxファイルを作ります。</p>
              <p></p>
              <p>
                grid
                grid-cols-2にすることでlabelとinputを横並びにさせることができる
              </p>
              <p className="text-red-400">create.tsx</p>

              <h3>Suggestions</h3>
              <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
              <p>rfceでreactコンポーネントを作成 </p>
              <p>Feed.jsにPostコンポーネントを読み込ませる</p>
            </div>
          </div>
        </Layout_tutorial_75>
      ) : id == 7 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h3>準備 </h3>
              <p>プロジェクトを作成します</p>
              <Tutorial7571 />
              <h3>MiniProfile</h3>
              <p>pagesフォルダのindex.tsxと_app.tsxを削除します。</p>
              <p>プロジェクト直下にappフォルダを作成します。</p>
              <p>page.tsxを作成します。</p>
              <p className="text-red-400">app/page.tsx</p>
              <Tutorial7575 />
              <p>next.config.jsにappディレクトリの設定を追加します。</p>
              <p className="text-red-400">next.config.js</p>
              <Tutorial7575 />

              <p>変更を適用するためnpm run devを再度実行します。</p>
              <p>appフォルダに新しくhead.tsxとlayout.tsxが作成されます。</p>
              <h3>Sanityインストール</h3>
              <Tutorial7574 />
              <Tutorial7575 />
              <h3>next-sanityインストール</h3>
              <Tutorial7576 />
              <p>
                作成したnextjs13-sanity-blogのpackage.jsonからプロジェクトのpackage.jsonにdependenciesの"@sanity/vision"、"sanity"、"styled-components"をコピーします。
              </p>
              <p>
                また、"devDependencies"の"@sanity/eslint-config-studio"も追加します。{" "}
              </p>
              <p>
                sanityのプロジェクトからschemasフォルダ、sanity.cli.ts、sanity.config.tsもプロジェクト直下に移動させます。
              </p>
              <p>sanityプロジェクトを削除します。</p>
              <h4></h4>
              <p>変更を反映させます。</p>
              <Tutorial75710 />

              <p>componentsフォルダにSuggestions.jsファイルを作ります。</p>
              <p>rfceでreactコンポーネントを作成 </p>
              <p>Feed.jsにPostコンポーネントを読み込ませる</p>
            </div>
          </div>
        </Layout_tutorial_75>
      ) : id == 8 ? (
        <Layout_tutorial_75>
          <div className="flex">
            <div className="">
              <h3>準備 </h3>
              <p>プロジェクトを作成します</p>
              <Tutorial7581 />
              <h3>MiniProfile</h3>
              <p>pagesフォルダのindex.tsxと_app.tsxを削除します。</p>
              <p>プロジェクト直下にtheme.tsxを作成します。</p>
              <p className="text-red-400">theme.tsx</p>
              <Tutorial7582 />
              <p>sanity.config.tsに設定を追加します。</p>
              <p className="text-red-400">next.config.js</p>
              <Tutorial7583 />
              <h4></h4>
              <p>
                componentsフォルダを作成し、StudioNavbar.tsxファイルを作ります。
              </p>
              <p className="text-red-400">StudioNavbar.tsx</p>
              <Tutorial7584 />
              <p>rfceでreactコンポーネントを作成 </p>
              <h4>heroiconsインストール</h4>
              <Tutorial7585 />
            </div>
          </div>
        </Layout_tutorial_75>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;

const Tutorial7521 = () => {
  const test = `
  npx create-next-app@latest --ts
  ✔ What is your project named? … nextjs-gihyo-book 
  ✔ Would you like to use ESLint with this project? … No / Yes
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7522 = () => {
  const test = `
  { 
    "compilerOptions": { 
      "target": "es5", 
      "lib": ["dom", "dom.iterable", "esnext"], 
      "allowJs": true, 
      "skipLibCheck": true, 
      "strict": true, 
      "forceConsistentCasingInFileNames": true, 
      "noEmit": true, 
      "esModuleInterop": true, 
      "module": "esnext", 
      "moduleResolution": "node", 
      "resolveJsonModule": true, 
      "isolatedModules": true, 
      "jsx": "preserve", 
      "incremental": true, 
      "baseUrl": "src" 
    }, 
    "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"], 
    "exclude": ["node_modules"] 
  }
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7523 = () => {
  const test = `
  npm install styled-components
  npm install --save-dev @types/styled-components
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7524 = () => {
  const test = `
  import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
  import { ServerStyleSheet } from 'styled-components'
  
  export default class MyDocument extends Document {
    static async getInitialProps(
      ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
  
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          })
  
        const initialProps = await Document.getInitialProps(ctx)
  
        return {
          ...initialProps,
          styles: [
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>,
          ],
        }
      } finally {
        sheet.seal()
      }
    }
  }
  
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7525 = () => {
  const test = `
  const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    }
  }
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7526 = () => {
  const test = `
  npm install react-bootstrap bootstrap
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7527 = () => {
  const test = `
  npm install --save-dev prettier eslint typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7528 = () => {
  const test = `
{
  "extends": [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/order": [2, { "alphabetize": { "order": "asc" } }],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": true,
        "printWidth": 80,
        "tabWidth": 2
      }
    ]
  }
}
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7529 = () => {
  const test = `
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --dir src",
    "format": "next lint --fix --dir src",
    "test": "jest"
  },
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75210 = () => {
  const test = `
  npx sb init
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75211 = () => {
  const test = `
  npm install --save-dev @storybook/addon-postcss tsconfig-paths-webpack-plugin @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object tsconfig-paths-webpack-plugin @mdx-js/react
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75212 = () => {
  const test = `
  const fontSizes = {
    extraSmall: '12px',
    small: '14px',
    medium: '16px',
    mediumLarge: '20px',
    large: '24px',
    extraLarge: '32px',
  }
  
  export default fontSizes
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75213 = () => {
  const test = `
  const letterSpacings: string[] = [
    '0.06px',
    '0.07px',
    '0.08px',
    '0.09px',
    '0.1px',
    '0.1px',
  ]
  
  export default letterSpacings
  
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75214 = () => {
  const test = `
  const lineHeights: string[] = ['17px', '19px', '22px', '26px', '28px', '37px']

  export default lineHeights
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75215 = () => {
  const test = `
  const space: string[] = ['0px', '8px', '16px', '32px', '64px']

  export default space
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75216 = () => {
  const test = `
  const colors = {
    primary: '#3f51b5',
    primaryDark: '#2c387e',
    primaryLight: '#6573c3',
    secondary: '#f50057',
    secondaryDark: '#ab003c',
    secondaryLight: '#f73378',
    border: '#cdced2',
    danger: '#ed1c24',
    dangerDark: '#a50d12',
    gray: '#6b6b6b',
    black: '#000000',
    white: '#ffffff',
    text: '#000000',
  } as const
  
  export default colors
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial75217 = () => {
  const test = `
  import colors from './colors'
  import fontSizes from './fontSizes'
  import letterSpacings from './letterSpacings'
  import lineHeights from './lineHeights'
  import space from './space'
  
  export const theme = {
    space,
    fontSizes,
    letterSpacings,
    lineHeights,
    colors,
  } as const
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7532 = () => {
  const test = `
  <button type='submit' disabled={!input} className="text-orange-400 disabled:text-gray-400">Search</button>
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7542 = () => {
  const test = `
  npm add graphql-request graphql
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7543 = () => {
  const test = `
  npm add graphql-request graphql
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7544 = () => {
  const test = `
  npm add graphql-request graphql
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7545 = () => {
  const test = `
  stepzen init
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7546 = () => {
  const test = `
  stepzen i
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial7547 = () => {
  const test = `
  stepzen init
  `;
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle}>
      {test}
    </SyntaxHighlighter>
  );
};
