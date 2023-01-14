import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_44 } from '../../../../components/layout/engineer/tutorial';
import { Zustand } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_44>


          </Layout_tutorial_44>
        ) : id == 2 ? (
          <Layout_tutorial_44>
            <h3>Supabase</h3>
            <p>新しくプロジェクトを作ります。</p>

            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial4421 />
            <h4>TailwindCSS導入</h4>
            <Tutorial4422 />
            <h3>tailwind.config.js修正</h3>
            <p>tailwindのデフォルトの状態だと全てのクラスユーティリティがデプロイの時に自動で生成されてCSSのファイルを作ってくれる。</p>
            <p>mantineUIとtailwindcssを同時に使用した時にconflictが起きないようにcorePluginsを設定します。</p>
            <Tutorial4423 />
            <h3>global.css修正</h3>
            <Tutorial4424 />
            <h3>mantineインストール</h3>
            <Tutorial4425 />
            <h3>supabase、heroiconインストール</h3>
            <Tutorial4426 />
            <h3>.env.localファイル作成</h3>
            <p>プロジェクト直下に.env.localファイルを作成します。</p>
            <Tutorial4427 />
            <h3>utilsフォルダ</h3>
            <p>utilsフォルダを作成しその中にsupabase.tsファイルを作成</p>
            <p>supabaseのライブラリからcreateClientをimportし、supabaseUrlとsupabaseAnonKeyを引数で渡すことでsupabaseクライアントを作成しています。</p>
            <p className='text-red-400'>utils/supabase.ts</p>
            <Tutorial4428 />
            <h3>componentsフォルダ</h3>
            <p>componentsフォルダを作成しその中にLayout.tsxファイルを作成</p>
            <p>rafcでreactコンポーネントを作成 </p>
            <p className='text-red-400'>components/Layout.tsx</p>
            <Tutorial4429 />
          </Layout_tutorial_44>
        ) : id == 3 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className=''>
                <p>_document.tsxファイルを作ります。</p>
                <p>serversiderenderingに必要</p>
                <h3></h3>
                <p>QueryClientはキャッシュ情報のやりとりに利用されます。</p>
                <p>React QueryはAPIへのフェッチに失敗した場合、3回までフェッチを繰り返すことになります。retryをfalseにすることでその動作を行わないようにしています。</p>
                <p>refetchOnWindowFocusはユーザーがフォーカスした時にフェッチが実行される機能でfalseに設定します。</p>
                <p className='text-red-400'>pages/_app.tsx</p>
                <Tutorial4431 />
                <p className='text-red-400'>pages/_app.tsx</p>
                <p>QueryClientProviderで囲みます。</p>
                <p>ReactQuery専用のdevtoolsが用意されています。propsのinitialIsOpenではdevtoolをアクセスしたときにオープンした状態にするかどうか設定を行うことができます。</p>
                <p>MantineProviderでwrapします。themではプロジェクト全体に適用させたいstyleを設定することができます。</p>
                <Tutorial4432 />
                <h3>button</h3>
                <p>button.tsxファイルを作ります。</p>
                <p>rafceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>pages/button.tsx</p>
                <Tutorial4433 />
                <h4>group</h4>
                <p>group.tsxファイルを作ります。</p>
                <p>rafceでreactコンポーネントを作成 </p>
                <p>Centerコンポーネントで囲むことによって中央寄せすることができます。</p>
                <p className='text-red-400'>pages/group.tsx</p>
                <Tutorial4434 />
                <h4>grid</h4>
                <p>mantineでは1行が12カラムになっています。spanを4にすることで1/3に要素をすることができます。</p>
                <p>propsにgrowを設定することで余った要素を埋めてくれる</p>
                <p>offsetを3とすることで3カラム分空けることができる</p>
                <Tutorial4435 />
                <p>md:992px以上の時は6カラムの幅を持ち、lg:1200px以上の時は3カラムの幅になります。</p>
                <Tutorial4436 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 4 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className=''>
                <h3>useForm</h3>
                <p>typesフォルダにindex.tsファイルを作ります。</p>
                <p>Formのデータ型を定義します。</p>
                <p className='text-red-400'>types/index.ts</p>
                <Tutorial4440 />
                <p>storeフォルダにindex.tsファイルを作ります。</p>
                <p>sessionのデータ型をsupabaseからインポートしている。</p>
                <p className='text-red-400'>store/index.ts</p>
                <Tutorial4442 />
                <p>Stateという新しいデータ型を作成します。</p>
                <p className='text-red-400'>store/index.ts</p>
                <Tutorial44430 />
                <p>受け取ったpayloadの値をsessionのstateに格納する。</p>
                <p className='text-red-400'>store/index.ts</p>
                <Tutorial4443 />
                <p className='text-red-400'>store/index.ts</p>
                <Tutorial4441 />
                <Zustand />
                <h4>componentsフォルダにAuth.tsxファイルを作成</h4>
                <p>rafcでreactコンポーネントを作成 </p>
                <h3>Auth</h3>
                <p>Yapのバリデーションのschemaを作成します。。email、password、ageのバリデーションを行います。</p>
                <p>正しいフォーマットのメール出なかった場合、エラーメッセージとして「Invalid email」が出力されます。</p>
                <p>.requiredを付けることで入力されていなかった場合、エラーメッセージとして「No email provided」が出力されます。</p>
                <p>パスワードは最低8文字、パスワードの中にアルファベットが少なくとも1文字含まれる</p>
                <p>ageのバリデーションでは15歳以上でないと登録できないようにします</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial4444 />
                <p>loginまたはregisterに失敗した時のエラーメッセージを格納させるためのstateを作成します</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial4445 />
                <p>Yupのバリデーションを適用させるために以下のコードが必要です。</p>
                <p>またinitialValuesには初期値を設定</p>
                <p className='text-red-400'>components/Auth.tsx</p>
                <Tutorial4446 />
                <h4>handleSubmit</h4>
                <p>submitボタンが押されたときに実行される関数を作成します。</p>
                <p className="font-bold">isRegisterがtrueのとき新規でユーザーを登録します。</p>
                <p>フォームに入力された値を取得することができる。</p>
                <Tutorial4447 />
                <p>もしエラーが発生した場合はsetErrorにエラーメッセージを格納</p>
                <Tutorial4448 />
                <p>フォームをリセット</p>
                <Tutorial44415 />
                <h4>form作成</h4>
                <p>エラーが発生した場合に表示されるAlertを作成</p>
                <Tutorial44421 />
                <h4>TextInput</h4>
                <p>値の表示と値の更新を行う</p>
                <Tutorial44416 />
                <h4>NumberInput</h4>
                <p>isRegisterがtrueの時だけNumberInputを表示させる</p>
                <Tutorial44417 />
                <h4>Anchor</h4>
                <p>setIsRegisterでトグルさせる。エラーの値をリセットする。</p>
                <Tutorial44418 />
                <p>表示させるテキストの内容としてはisRegisterがtrueの場合は</p>
                <Tutorial44419 />
                <h4>DashBoard作成</h4>
                <p>componentsフォルダにDashBoard.tsxファイルを作成</p>
                <p>rafceでreactコンポーネントを作成 </p>
                <h4>signOut関数作成</h4>
                <p className='text-red-400'>components/DashBoard.tsx</p>
                <Tutorial44420 />
                <h4>ActionIcon</h4>
                <p>ActionIconのonClickにsignOutを指定することでLogoutIconを押したときにsignOut関数が実行されます</p>
                <p className='text-red-400'>components/DashBoard.tsx</p>
                <Tutorial44422 />
                <h4>ActionIcon</h4>
                <p>supabaseのauthのsessionからログインしているユーザーのsession情報を取り出しています</p>
                <p className='text-red-400'>index.tsx</p>
                <Tutorial44423 />
                <h4></h4>
                <p>sessionが存在する場合はDashboardを表示させて、存在しない場合はAuthコンポーネントを表示させる</p>
                <p className='text-red-400'>index.tsx</p>
                <Tutorial44424 />
              </div>


            </div>

          </Layout_tutorial_44>
        ) : id == 5 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Footer</h3>
                <p>ItemをクリックしたときにNextLinkを使ってhrefに設定したurlに遷移します。</p>
                <p className='text-red-400'>components/DashBoard.tsx</p>
                <Tutorial4451 />
                <h3>Multiselect</h3>
                <p>apiフォルダにmulti-select.tsxを作成します。 </p>
                <p>rafceでreactコンポーネントを作成 </p>
                <h3>Radio</h3>
                <p>ラジオボタンに変更があるたびにonChangeが実行されてsetRadioValueの値を更新しています</p>
                <Tutorial4452 />
                <p>clearable と指定するだけで</p>
                <Tutorial4453 />
                <h3>TransferList</h3>
                <p>breakpointにsmを指定することで768pxを下回ると1列になるようにしています</p>
                <Tutorial4454 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>types/index.ts</p>

                <p className='text-red-400'>store/index.ts</p>


                <p className='text-red-400'>components/Auth.tsx</p>

                <p className='text-red-400'>components/DashBoard.tsx</p>

              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 6 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Results.js作成</h3>
                <p>supabaseにおいて新しいテーブルを作成します</p>
                <p>todoのテーブルに対応したデータ型を作成します</p>
                <p className='text-red-400'>types/index.ts</p>
                <Tutorial4461 />
                <h4>delay.ts</h4>
                <p>utilsフォルダにdelay.tsを作成します。 </p>
                <p>setTimeout関数を使ってAPIのレスポンスを遅らせることができる。待機する時間を引数で受け取って指定の時間が経過したらresolve関数が実行されて</p>
                <p className='text-red-400'>utils/delay.ts</p>
                <Tutorial4462 />
                <h4>useQueryTodos.ts</h4>
                <p>新しくhooksフォルダを作成し、useQueryTodos.tsを作成します。 </p>
                <p>rafceでreactコンポーネントを作成 </p>
                <p>supabase.from('todos')でtodosのテーブルから.select('*')で全ての列要素を取得してorder('created_at')で古いものからデータを取得しています</p>
                <p>await delay(2000)とすることで2秒待機</p>
                <p>react-queryはsupabaseから取得したデータをクライアントサイドにキャッシュしてくれる</p>
                <p>キャッシュの格納場所を特定するためのkey</p>
                <p className='text-red-400'>hooks/useQueryTodos.ts</p>
                <Tutorial4463 />
                <h4>FetchTodos.tsx</h4>
                <p>useQueryTodosをインポートしてdataとstatusを使えるようにします</p>
                <p>statusがLoadingの時はLoaderのコンポーネントが表示されます</p>
                <p className='text-red-400'>components/FetchTodos.tsx</p>
                <Tutorial4464 />
                <p>取得したtaskの一覧をmapを使って展開して表示する</p>
                <p className='text-red-400'>components/FetchTodos.tsx</p>
                <Tutorial4465 />
                <h4>fetch-api.tsx</h4>
                <p>pages直下にfetch-api.tsxを作成し、FetchTodosをインポートします。 </p>
                <p className='text-red-400'>components/FetchTodos.tsx</p>
                <Tutorial4465 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>hooks/useQueryTodos.ts</p>
                <Tutorial4469 />
                <p className='text-red-400'>FetchTodos.tsx</p>
                <Tutorial44610 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 7 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <p>pages直下にdialog.tsxを作成します。 </p>
                <p>iconを表示させます。</p>
                <p>dialogのページが表示されてから1.5秒後にsetOpenedがtrueに</p>
                <p className='text-red-400'>dialog.tsx</p>
                <Tutorial4471 />
                <p>withCloseButtonをpropsに追加することでdialogの右上に閉じるボタンを表示できます</p>
                <p className='text-red-400'>dialog.tsx</p>
                <Tutorial4472 />
                <p>SubscribeボタンがクリックされたらsetOpendをfalseにしてdialogを閉じる</p>
                <p className='text-red-400'>dialog.tsx</p>
                <Tutorial4473 />
                <p>Toggle dialogボタンがクリックされたらsetOpendをtrueにしてdialogを開きます</p>
                <p className='text-red-400'>dialog.tsx</p>
                <Tutorial4473 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial4479 />
                <p className='text-red-400'>Mail.css</p>
                <Tutorial44710 />
              </div>
            </div>
          </Layout_tutorial_44>
        ) : id == 8 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>AuthenForm</h3>
                <p>typesフォルダのindex.tsにデータ型を定義します。</p>
                <p>componentsフォルダにAuthenForm.tsxを作成します。 </p>
                <p>rafcでreactコンポーネントを作成 </p>
                <p>Yupのschema</p>
                <p>Yup.ref('password')でpasswordに設定されている値を取得しoneOfで配列内のいずれかに一致しているかどうかバリデーションすることができる</p>
                <p>termsOfService</p>
                <p className='text-red-400'>components/AuthenForm.tsx</p>
                <Tutorial4481 />
                <p>formが表示されたときに自動でカーソルがFirst nameになるようにdata-autofocusを</p>
                <p className='text-red-400'>components/AuthenForm.tsx</p>
                <Tutorial4482 />

                <h3>modal</h3>
                <p>pagesフォルダにmodal.tsxを作成します。 </p>
                <p>rafceでreactコンポーネントを作成 </p>
                <p className='text-red-400'>features/mailSlice.js</p>
                <Tutorial4482 />
                <p className='text-red-400'>features/userSlice.js</p>
                <Tutorial4483 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>
                <Tutorial4489 />
                <p className='text-red-400'>modal.tsx</p>
                <Tutorial44810 />
              </div>
            </div>

          </Layout_tutorial_44>
        ) : id == 9 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>SendMail.js</h3>
                <p>isRegisterのtrue、falseをトグルするため</p>
                <p className='text-red-400'>Mail.js</p>
                <Tutorial4491 />

                <Tutorial4492 />
                <h4>modal.tsx</h4>

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>SendMail.js</p>
                <Tutorial4499 />
                <p className='text-red-400'>SendMail.css</p>
                <Tutorial44910 />
              </div>
            </div>
          </Layout_tutorial_44>
        ) : id == 10 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3></h3>
                <p>supabaseにて新しくpostsテーブルを作成します。</p>
                <p>typeを追加します。</p>
                <p className='text-red-400'>types/index.ts</p>
                <Tutorial44101 />
                <h4></h4>
                <p>hooksフォルダにuseQueryPosts.tsを作成します。</p>
                <p className='text-red-400'>hooks/useQueryPosts.ts</p>
                <Tutorial44102 />
                <h4>supabaseからデータ取得</h4>
                <Tutorial44103 />
                <h4></h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p className='text-red-400'>components/CustomCard.tsx</p>
                <p>Propsのデータ型を定義します</p>
                <Tutorial44104 />
                <p></p>
                <p></p>
                <p></p>
                <Tutorial44105 />
                <h4>supabaseからデータ取得</h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p></p>
                <p className='text-red-400'>pages/card.tsx</p>
                <h5>handleSubmit関数作成</h5>
                <Tutorial44106 />
                <h5>handleSubmit関数作成</h5>
                <Tutorial44107 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 11 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3></h3>
                <p>supabaseにて新しくpostsテーブルを作成します。</p>
                <p>typeを追加します。</p>
                <p className='text-red-400'>types/index.ts</p>
                <Tutorial44101 />
                <h4></h4>
                <p>hooksフォルダにuseQueryPosts.tsを作成します。</p>
                <p className='text-red-400'>hooks/useQueryPosts.ts</p>
                <Tutorial44102 />
                <h4>supabaseからデータ取得</h4>
                <Tutorial44103 />
                <h4></h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p className='text-red-400'>components/CustomCard.tsx</p>
                <p>Propsのデータ型を定義します</p>
                <Tutorial44104 />
                <p></p>
                <p></p>
                <p></p>
                <Tutorial44105 />
                <h4>supabaseからデータ取得</h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p></p>
                <p className='text-red-400'>pages/card.tsx</p>
                <h5>handleSubmit関数作成</h5>
                <Tutorial44106 />
                <h5>handleSubmit関数作成</h5>
                <Tutorial44107 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 12 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Table</h3>
                <p>pagesフォルダにtable.tsxを作成します。</p>
                <p>。</p>
                <p className='text-red-400'>pages/table.tsx</p>
                <Tutorial44101 />
                <h4></h4>
                <p>hooksフォルダにuseQueryPosts.tsを作成します。</p>
                <p className='text-red-400'>hooks/useQueryPosts.ts</p>
                <Tutorial44102 />
                <h4>supabaseからデータ取得</h4>
                <Tutorial44103 />
                <h3>DatePicker</h3>
                <p>coingechoからデータを取得</p>
                <p>pagesフォルダにcrypto.tsxを作成します。</p>
                <p className='text-red-400'>pages/crypto.tsx</p>
                <p>btc、ethの価格のデータ型を定義します</p>
                <Tutorial44123 />
                <p className='text-red-400'>pages/crypto.tsx</p>
                <p>btc、ethのデータ型はCoinまたはnull型を定義します</p>
                <Tutorial44124 />
                <p></p>
                <p></p>
                <p></p>
                <Tutorial44105 />
                <h4>supabaseからデータ取得</h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p></p>
                <p className='text-red-400'>pages/card.tsx</p>
                <h5>handleSubmit関数作成</h5>
                <Tutorial44106 />
                <h5>handleSubmit関数作成</h5>
                <Tutorial44107 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : id == 13 ? (
          <Layout_tutorial_44>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3></h3>
                <p>supabaseにて新しくpostsテーブルを作成します。</p>
                <p>typeを追加します。</p>
                <p className='text-red-400'>types/index.ts</p>
                <Tutorial44101 />
                <h4></h4>
                <p>hooksフォルダにuseQueryPosts.tsを作成します。</p>
                <p className='text-red-400'>hooks/useQueryPosts.ts</p>
                <Tutorial44102 />
                <h4>supabaseからデータ取得</h4>
                <Tutorial44103 />
                <h4></h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p className='text-red-400'>components/CustomCard.tsx</p>
                <p>Propsのデータ型を定義します</p>
                <Tutorial44104 />
                <p></p>
                <p></p>
                <p></p>
                <Tutorial44105 />
                <h4>supabaseからデータ取得</h4>
                <p>componentsフォルダにCustomCard.tsxを作成</p>
                <p></p>
                <p className='text-red-400'>pages/card.tsx</p>
                <h5>handleSubmit関数作成</h5>
                <Tutorial44106 />
                <h5>handleSubmit関数作成</h5>
                <Tutorial44107 />
              </div>

            </div>
          </Layout_tutorial_44>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial4421 = () => {
  const test = `
  npx create-next-app mantine-lesson --ts
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4422 = () => {
  const test = `
npm i -D tailwindcss postcss autoprefixer 
npm i -D prettier prettier-plugin-tailwindcss 
npx tailwindcss init -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4423 = () => {
  const test = `
  /** @type {import('tailwindcss').Config} */ 
module.exports = { 
content: [ 
  './pages/**/*.{js,ts,jsx,tsx}', 
  './components/**/*.{js,ts,jsx,tsx}', 
], 
theme: { 
  extend: {}, 
}, 
plugins: [], 
corePlugins: { 
  preflight: false, 
},
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4424 = () => {
  const test = `
@tailwind base;
@tailwind components;
@tailwind utilities;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4425 = () => {
  const test = `
  npm i dayjs @mantine/core @mantine/hooks @mantine/form @mantine/dates @mantine/next tabler-icons-react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4426 = () => {
  const test = `
  npm i @supabase/supabase-js react-query@4.0.0-beta.10 @heroicons/react date-fns yup axios zustand
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4427 = () => {
  const test = `
  NEXT_PUBLIC_SUPABASE_URL=https://zuikjwamvjfbneyolmeq.supabase.co

  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1aWtqd2FtdmpmYm5leW9sbWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkwMDgxOTMsImV4cCI6MTk3NDU4NDE5M30.jbJn7N9PUAOw1Ybk7o7JP4WeUY-S4dZ0e10vV3jTwP8
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4428 = () => {
  const test = `
  import { createClient } from '@supabase/supabase-js' 

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! 
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4429 = () => {
  const test = `
  import { FC, ReactNode } from 'react' 
  import Head from 'next/head' 
  type Props = { 
    title: string 
    children: ReactNode 
  } 
  export const Layout: FC<Props> = ({ children, title = 'Mantine' }) => { 
    return ( 
      <div className="flex min-h-screen"> 
        <Head> 
          <title>{title}</title> 
        </Head> 
        <header></header> 
        <main className="flex flex-1 flex-col justify-center p-4"> 
          {children} 
        </main> 
        <footer></footer> 
      </div> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4431 = () => {
  const test = `
  const queryClient = new QueryClient({ 
    defaultOptions: { 
      queries: { 
        retry: false, 
        refetchOnWindowFocus: false, 
      }, 
    }, 
  })
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4432 = () => {
  const test = `
<QueryClientProvider client={queryClient}> 
  <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ 
      colorScheme: 'dark', 
      fontFamily: 'Verdana, sans-serif', 
    }} 
  > 
    <NotificationsProvider limit={2}> 
      <Component {...pageProps} /> 
    </NotificationsProvider> 
  </MantineProvider> 
  <ReactQueryDevtools initialIsOpen={false} /> 
</QueryClientProvider> 
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4433 = () => {
  const test = `
    npm install @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4434 = () => {
  const test = `
<Center> 
  <Link href="/"> 
    <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" /> 
  </Link> 
</Center> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4435 = () => {
  const test = `
<Grid.Col 
  className="bg-pink-500 text-center font-bold text-gray-100" 
  span={3} 
  offset={3} 
> 
  10 
</Grid.Col>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4436 = () => {
  const test = `
<Grid.Col 
  className="bg-blue-500 text-center font-bold text-gray-100" 
  md={6} 
  lg={3} 
> 
  14 
</Grid.Col>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2837 = () => {
  const test = `
    npm i react-native-dotenv
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2838 = () => {
  const test = `
    npm install react-native-google-places-autocomplete --save
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4439 = () => {
  const test = `
    import { createGetInitialProps } from '@mantine/next'
    import Document, { Head, Html, Main, NextScript } from 'next/document'
    const getInitialProps = createGetInitialProps()
    export default class _Document extends Document {
      static getInitialProps = getInitialProps
      render() {
        return (
          <Html>
            <Head />
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44310 = () => {
  const test = `
  import '../styles/globals.css' 
  import type { AppProps } from 'next/app' 
  import { MantineProvider } from '@mantine/core' 
  import { NotificationsProvider } from '@mantine/notifications' 
  import { QueryClient, QueryClientProvider } from 'react-query' 
  import { ReactQueryDevtools } from 'react-query/devtools' 
  const queryClient = new QueryClient({ 
    defaultOptions: { 
      queries: { 
        retry: false, 
        refetchOnWindowFocus: false, 
      }, 
    }, 
  }) 
  function MyApp({ Component, pageProps }: AppProps) { 
    return ( 
      <QueryClientProvider client={queryClient}> 
        <MantineProvider 
          withGlobalStyles 
          withNormalizeCSS 
          theme={{ 
            colorScheme: 'dark', 
            fontFamily: 'Verdana, sans-serif', 
          }} 
        > 
          <NotificationsProvider limit={2}> 
            <Component {...pageProps} /> 
          </NotificationsProvider> 
        </MantineProvider> 
        <ReactQueryDevtools initialIsOpen={false} /> 
      </QueryClientProvider> 
    ) 
  } 
  export default MyApp
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44311 = () => {
  const test = `
  import Link from 'next/link' 
  import { Button, Group } from '@mantine/core' 
  import { ReplyIcon } from '@heroicons/react/solid' 
  import { Layout } from '../components/Layout' 
  import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react' 
  const ButtonDemo = () => { 
    return ( 
      <Layout title="Button"> 
        <Group direction="column" position="center"> 
          <Button 
            classNames={{ 
              leftIcon: 'text-pink-500 h-6 w-6', 
              rightIcon: 'text-orange-500 h-6 w-6', 
            }} 
            color="cyan" 
            radius="lg" 
            uppercase 
            leftIcon={<BrandGithub />} 
            rightIcon={<ThreeDCubeSphere />} 
          > 
            Press 
          </Button> 
          <Button mt="md">Click</Button> 
          <Link href="/"> 
            <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" /> 
          </Link> 
        </Group> 
      </Layout> 
    ) 
  } 
  export default ButtonDemo
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44312 = () => {
  const test = `
  import Link from 'next/link' 
import { Group, Button, Center } from '@mantine/core' 
import { ReplyIcon } from '@heroicons/react/solid' 
import { Layout } from '../components/Layout' 
const GroupDemo = () => { 
  return ( 
    <Layout title="Group"> 
      <Group my="md" grow> 
        <Button color="indigo">1</Button> 
        <Button color="teal">2</Button> 
        <Button color="orange">3</Button> 
      </Group> 
      <Group direction="column" my="md" position="right"> 
        <Button color="indigo">1</Button> 
        <Button color="teal">2</Button> 
        <Button color="orange">3</Button> 
      </Group> 
      <Group my="md" align="center"> 
        <Button className="h-10" color="indigo"> 
          1 
        </Button> 
        <Button className="h-20" color="teal"> 
          2 
        </Button> 
        <Button className="h-32" color="orange"> 
          3 
        </Button> 
      </Group> 
      <Center> 
        <Link href="/"> 
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" /> 
        </Link> 
      </Center> 
    </Layout> 
  ) 
} 
export default GroupDemo
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44313 = () => {
  const test = `
  import Link from 'next/link' 
import { Grid, Center } from '@mantine/core' 
import { ReplyIcon } from '@heroicons/react/solid' 
import { Layout } from '../components/Layout' 
const GridDemo = () => { 
  return ( 
    <Layout title="Grid"> 
      <Grid my="md"> 
        <Grid.Col 
          className="bg-blue-500 text-center font-bold text-gray-100" 
          span={4} 
        > 
          1 
        </Grid.Col> 
        <Grid.Col 
          className="bg-green-500 text-center font-bold text-gray-100" 
          span={4} 
        > 
          2 
        </Grid.Col> 
        <Grid.Col 
          className="bg-pink-500 text-center font-bold text-gray-100" 
          span={4} 
        > 
          3 
        </Grid.Col> 
      </Grid> 
      <Grid my="md" grow> 
        <Grid.Col 
          className="bg-blue-500 text-center font-bold text-gray-100" 
          span={6} 
        > 
          4 
        </Grid.Col> 
        <Grid.Col 
          className="bg-green-500 text-center font-bold text-gray-100" 
          span={6} 
        > 
          5 
        </Grid.Col> 
        <Grid.Col 
          className="bg-pink-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          6 
        </Grid.Col> 
        <Grid.Col 
          className="bg-orange-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          7 
        </Grid.Col> 
      </Grid> 
      <Grid my="md"> 
        <Grid.Col 
          className="bg-indigo-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          8 
        </Grid.Col> 
        <Grid.Col 
          className="bg-green-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          9 
        </Grid.Col> 
        <Grid.Col 
          className="bg-pink-500 text-center font-bold text-gray-100" 
          span={3} 
          offset={3} 
        > 
          10 
        </Grid.Col> 
      </Grid> 
      <Grid my="md" justify="center" align="flex-end"> 
        <Grid.Col 
          className="h-24 bg-blue-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          11 
        </Grid.Col> 
        <Grid.Col 
          className="h-36 bg-green-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          12 
        </Grid.Col> 
        <Grid.Col 
          className="h-12 bg-pink-500 text-center font-bold text-gray-100" 
          span={3} 
        > 
          13 
        </Grid.Col> 
      </Grid> 
      <Grid my="md"> 
        <Grid.Col 
          className="bg-blue-500 text-center font-bold text-gray-100" 
          md={6} 
          lg={3} 
        > 
          14 
        </Grid.Col> 
        <Grid.Col 
          className="bg-green-500 text-center font-bold text-gray-100" 
          md={6} 
          lg={3} 
        > 
          15 
        </Grid.Col> 
        <Grid.Col 
          className="bg-pink-500 text-center font-bold text-gray-100" 
          md={6} 
          lg={3} 
        > 
          16 
        </Grid.Col> 
        <Grid.Col 
          className="bg-orange-500 text-center font-bold text-gray-100" 
          md={6} 
          lg={3} 
        > 
          17 
        </Grid.Col> 
      </Grid> 
      <Center> 
        <Link href="/"> 
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" /> 
        </Link> 
      </Center> 
    </Layout> 
  ) 
} 
export default GridDemo
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4440 = () => {
  const test = `
  export type Form = { 
    email: string 
    passeword: string 
    age: number 
}
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4441 = () => {
  const test = `
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4442 = () => {
  const test = `
  import { Session } from '@supabase/supabase-js'
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4443 = () => {
  const test = `
  setSession: (payload) => set({ session: payload }), 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4444 = () => {
  const test = `
  const schema = Yup.object().shape({ 
    email: Yup.string().email('Invalid email').required('No email provided.'), 
    password: Yup.string() 
      .required('No password provided.') 
      .min(8, 'Password should be min 8 chars') 
      .matches(/[a-z]+/, 'One lowercase char missing') 
      .matches(/[A-Z]+/, 'One uppercase char missing') 
      .matches(/[@$!%*#?&]+/, 'One special char missing'), 
    age: Yup.number().min(15, 'Only over 15 for new account'), 
  }) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4445 = () => {
  const test = `
  const [error, setError] = useState('')
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4446 = () => {
  const test = `
  schema: yupResolver(schema), 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4447 = () => {
  const test = `
  email: form.values.email,
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4448 = () => {
  const test = `
  setError(error.message) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial4449 = () => {
  const test = `
  export type Form = { 
    email: string 
    password: string 
    age: number 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44410 = () => {
  const test = `
  import create from 'zustand' 
  import { Session } from '@supabase/supabase-js' 
  type State = { 
    session: Session | null 
    setSession: (payload: Session | null) => void 
  } 
  const useStore = create<State>((set) => ({ 
    session: null, 
    setSession: (payload) => set({ session: payload }), 
  })) 
  export default useStore
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44411 = () => {
  const test = `
  import { useState } from 'react' 
  import * as Yup from 'yup' 
  import { ShieldCheckIcon } from '@heroicons/react/solid' 
  import { ExclamationCircleIcon } from '@heroicons/react/outline' 
  import { useForm, yupResolver } from '@mantine/form' 
  import { 
    Anchor, 
    NumberInput, 
    TextInput, 
    Button, 
    Group, 
    PasswordInput, 
    Alert, 
  } from '@mantine/core' 
  import { supabase } from '../utils/supabase' 
  import { Layout } from '../components/Layout' 
  import { Form } from '../types' 
  const schema = Yup.object().shape({ 
    email: Yup.string().email('Invalid email').required('No email provided.'), 
    password: Yup.string() 
      .required('No password provided.') 
      .min(8, 'Password should be min 8 chars') 
      .matches(/[a-z]+/, 'One lowercase char missing') 
      .matches(/[A-Z]+/, 'One uppercase char missing') 
      .matches(/[@$!%*#?&]+/, 'One special char missing'), 
    age: Yup.number().min(15, 'Only over 15 for new account'), 
  }) 
  export const Auth = () => { 
    const [isRegister, setIsRegister] = useState(false) 
    const [error, setError] = useState('') 
    const form = useForm<Form>({ 
      schema: yupResolver(schema), 
      initialValues: { 
        email: '', 
        password: '', 
        age: 15, 
      }, 
    }) 
    const handleSubmit = async () => { 
      if (isRegister) { 
        const { error } = await supabase.auth.signUp({ 
          email: form.values.email, 
          password: form.values.password, 
        }) 
        if (error) { 
          setError(error.message) 
        } 
        form.reset() 
      } else { 
        const { error } = await supabase.auth.signIn({ 
          email: form.values.email, 
          password: form.values.password, 
        }) 
        if (error) { 
          setError(error.message) 
        } 
        form.reset() 
      } 
    } 
    return ( 
      <Layout title="Auth"> 
        <Group direction="column" position="center"> 
          <ShieldCheckIcon className="h-16 w-16 text-blue-500" /> 
          {error && ( 
            <Alert 
              mt="md" 
              icon={<ExclamationCircleIcon className="text-pink-500" />} 
              title="Authorization Error" 
              color="red" 
              radius="md" 
            > 
              {error} 
            </Alert> 
          )} 
          <form onSubmit={form.onSubmit(handleSubmit)}> 
            <TextInput 
              mt="md" 
              id="email" 
              label="Email*" 
              placeholder="example@gmail.com" 
              {...form.getInputProps('email')} 
            /> 
            <PasswordInput 
              mt="md" 
              id="password" 
              placeholder="password" 
              label="Password*" 
              description="Must include one upper + lower char & special char" 
              {...form.getInputProps('password')} 
            /> 
            {isRegister && ( 
              <NumberInput 
                mt="md" 
                id="age" 
                label="Age" 
                placeholder="Your age" 
                {...form.getInputProps('age')} 
              /> 
            )} 
            <Group mt="lg" position="apart"> 
              <Anchor 
                component="button" 
                type="button" 
                color="gray" 
                onClick={() => { 
                  setIsRegister(!isRegister) 
                  setError('') 
                }} 
                size="sm" 
              > 
                {isRegister 
                  ? 'Have an account? Login' 
                  : "Don't have an account? Register"} 
              </Anchor> 
              <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button> 
            </Group> 
          </form> 
        </Group> 
      </Layout> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44415 = () => {
  const test = `
  form.reset() 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44416 = () => {
  const test = `
  {...form.getInputProps('email')} 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44417 = () => {
  const test = `
  {...form.getInputProps('email')} 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44418 = () => {
  const test = `
  onClick={() => { 
    setIsRegister(!isRegister) 
    setError('') 
}}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44419 = () => {
  const test = `
  {isRegister 
    ? 'Have an account? Login' 
    : "Don't have an account? Register"}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44420 = () => {
  const test = `
  const signOut = () => { 
    supabase.auth.signOut() 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44421 = () => {
  const test = `
  <Alert 
  mt="md" 
  icon={<ExclamationCircleIcon className="text-pink-500" />} 
  title="Authorization Error" 
  color="red" 
  radius="md" 
> 
  {error} 
</Alert>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44422 = () => {
  const test = `
  <ActionIcon my="md" size="lg" onClick={signOut}> 
  <LogoutIcon /> 
</ActionIcon>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44423 = () => {
  const test = `
  <ActionIcon my="md" size="lg" onClick={signOut}> 
  <LogoutIcon /> 
</ActionIcon>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44424 = () => {
  const test = `
  return <>{session ? <DashBoard /> : <Auth />}</>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44430 = () => {
  const test = `
  type State = { 
    session: Session | null 
    setSession: (payload: Session | null) => void 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4451 = () => {
  const test = `
  <Menu trigger="hover" size="xl"> 
  <Menu.Label>UI Components</Menu.Label> 
  <Menu.Item 
    icon={<Settings size={16} />} 
    component={NextLink} 
    href="/button" 
  > 
    Button 
  </Menu.Item> 
</Menu>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4452 = () => {
  const test = `
    function App() {
      return (
        <Router>
          <div className="app">
            <Header />
            <Sidebar />
          </div>
        </Router>
      );
    }
      
      export default App;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4453 = () => {
  const test = `
  <MultiSelect 
  my="lg" 
  value={selectValue} 
  onChange={setSelectValue} 
  data={['Next.js', 'Remix', 'Gatsby.js']} 
  placeholder="Select items" 
  clearable 
/>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4454 = () => {
  const test = `
<TransferList 
  className="text-center" 
  my="lg" 
  value={transferValue} 
  onChange={setTransferValue} 
  searchPlaceholder="Search..." 
  nothingFound="..." 
  titles={['w/o GC', 'w GC']} 
  breakpoint="sm" 
/>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial3355 = () => {
  const test = `
    function App() {
        return (
          <Router>
            <div className="app">
              <Header />
              <div className='app_body'>
                <Sidebar />
                <Switch>
                  <Route path="/mail">
                    <Mail />
                  </Route>
                  <Route path="/">
                    <EmailList />
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        );
      }
      export default App;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutoria4459 = () => {
  const test = `
  npm add react-router-dom@5
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutoria44510 = () => {
  const test = `
  npm add react-router-dom@5
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4461 = () => {
  const test = `
  export type Todo = { 
      id: number 
      created_at: string 
      title: string 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial4462 = () => {
  const test = `
  export const delay = (ms: number) => { 
      return new Promise((resolve) => { 
        setTimeout(resolve, ms) 
      }) 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4463 = () => {
  const test = `
  return useQuery<Todo[]>({ 
      queryKey: ['todos'], 
      queryFn: getTodos, 
    }) 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4464 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4465 = () => {
  const test = `
  {data?.map((todo) => ( 
      <Text my="xs" size="sm" key={todo.id}> 
        {todo.title} 
      </Text> 
    ))}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4469 = () => {
  const test = `
import { useQuery } from 'react-query' 
import { supabase } from '../utils/supabase' 
import { delay } from '../utils/delay' 
import { Todo } from '../types' 
export const useQueryTodos = () => { 
const getTodos = async () => { 
  const { data, error } = await supabase 
    .from('todos') 
    .select('*') 
    .order('created_at', { ascending: true }) 
  await delay(2000) 
  if (error) { 
    throw new Error(error.message) 
  } 
  return data 
} 
return useQuery<Todo[]>({ 
  queryKey: ['todos'], 
  queryFn: getTodos, 
}) 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial44610 = () => {
  const test = `
  import Link from 'next/link' 
import { Center, Grid } from '@mantine/core' 
import { ReplyIcon } from '@heroicons/react/solid' 
import { Layout } from '../components/Layout' 
import { FetchTodos } from '../components/FetchTodos' 
const FetchData = () => { 
return ( 
  <Layout title="Fetch Data"> 
    <Grid> 
      <Grid.Col span={6}> 
        <FetchTodos /> 
      </Grid.Col> 
      <Grid.Col span={6}> 
        <FetchTodos /> 
      </Grid.Col> 
    </Grid> 
    <Center> 
      <Link href="/"> 
        <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" /> 
      </Link> 
    </Center> 
  </Layout> 
) 
} 
export default FetchData
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44611 = () => {
  const test = `
  npm add react-flip-move
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4471 = () => {
  const test = `
  const [opened, setOpened] = useState(false) 
  useEffect(() => { 
    setTimeout(() => { 
      setOpened(true) 
    }, 1500) 
  }, [])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4472 = () => {
  const test = `
  const [opened, setOpened] = useState(false) 
  useEffect(() => { 
    setTimeout(() => { 
      setOpened(true) 
    }, 1500) 
  }, [])
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4473 = () => {
  const test = `
  <Button onClick={() => setOpened(false)}>Subscribe</Button>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
const Tutorial4479 = () => {
  const test = `
  import { IconButton } from '@mui/material' 
  import React from 'react' 
  import "./Mail.css"; 
  import { useHistory } from "react-router-dom"; 
  import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
  import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'; 
  import ErrorIcon from '@mui/icons-material/Error'; 
  import DeleteIcon from '@mui/icons-material/Delete'; 
  import EmailIcon from '@mui/icons-material/Email'; 
  import WatchLaterIcon from '@mui/icons-material/WatchLater'; 
  import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
  import LabelImportantIcon from '@mui/icons-material/LabelImportant'; 
  import MoreVertIcon from '@mui/icons-material/MoreVert'; 
  import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'; 
  import PrintIcon from '@mui/icons-material/Print'; 
  import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
  function Mail() { 
      const history = useHistory(); 
      return ( 
          <div className='mail'> 
              <div className='mail__tools'> 
                  <div className='mail__toolsLeft'> 
                      <IconButton onClick={() => history.push("/")}> 
                          <ArrowBackIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoveToInboxIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ErrorIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <DeleteIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <EmailIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <WatchLaterIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <CheckCircleIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <LabelImportantIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <MoreVertIcon /> 
                      </IconButton> 
                  </div> 
                  <div className='mail__toolsRight'> 
                      <IconButton> 
                          <UnfoldMoreIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <PrintIcon /> 
                      </IconButton> 
                      <IconButton> 
                          <ExitToAppIcon /> 
                      </IconButton> 
                  </div> 
              </div> 
          </div> 
      ) 
  } 
  export default Mail
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44710 = () => {
  const test = `
  .mail {
      flex: 1;
      background-color: whitesmoke;
    }
    
    .mail__tools {
      display: flex;
      justify-content: space-between;
      background-color: white;
    }
    
    .mail__toolsLeft {
      display: flex;
    }
    
    .mail__body {
      display: flex;
      flex-direction: column;
      margin: 30px;
      background-color: white;
      padding: 20px;
      height: 100vh;
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
    }
    
    .mail__bodyHeader {
      display: flex;
      align-items: center;
      border-bottom: 1px solid whitesmoke;
      padding: 20px;
      position: relative;
    }
    
    .mail__important {
      color: #e8ab02 !important;
    }
    
    .mail__bodyHeader > h2 {
      font-weight: 400;
      margin-right: 20px;
    }
    
    .mail__bodyHeader > p {
      margin-left: 20px;
    }
    
    .mail__time {
      position: absolute;
      top: 24px;
      right: 0;
      font-size: 12px;
      color: gray;
    }
    
    .mail__message > p {
      padding: 10px;
      margin-right: 20px;
      overflow-wrap: break-word;
    }
    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4481 = () => {
  const test = `
  confirmPassword: Yup.string() 
    .required() 
    .oneOf([Yup.ref('password')], 'Passwords does not match'),
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4482 = () => {
  const test = `
  <TextInput 
  data-autofocus 
  placeholder="Your first name" 
  label="First name" 
  {...form.getInputProps('firstName')} 
/>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4483 = () => {
  const test = `

    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4489 = () => {
  const test = `
  import { useState } from 'react' 
  import * as Yup from 'yup' 
  import { useForm, yupResolver } from '@mantine/form' 
  import { 
    TextInput, 
    PasswordInput, 
    Group, 
    Checkbox, 
    Button, 
    Paper, 
    LoadingOverlay, 
    Anchor, 
  } from '@mantine/core' 
  import { AuthForm } from '../types' 
  const schema = Yup.object().shape({ 
    firstName: Yup.string().required('No first name provided'), 
    lastName: Yup.string().required('No last name provided'), 
    email: Yup.string().email('Invalid email').required('No email provided.'), 
    password: Yup.string() 
      .required('No password provided.') 
      .min(6, 'Password should be min 6 chars'), 
    confirmPassword: Yup.string() 
      .required() 
      .oneOf([Yup.ref('password')], 'Passwords does not match'), 
    termsOfService: Yup.boolean().required(), 
  }) 
  export const AuthenForm = () => { 
    const [loading, setLoading] = useState(false) 
    const [isRegister, setIsRegister] = useState(true) 
    const toggleAuthMode = () => { 
      setIsRegister(!isRegister) 
    } 
    const form = useForm<AuthForm>({ 
      schema: yupResolver(schema), 
      initialValues: { 
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '', 
        confirmPassword: '', 
        termsOfService: true, 
      }, 
    }) 
    const handleSubmit = (values: AuthForm) => { 
      console.log(values) 
      setLoading(true) 
      setTimeout(() => { 
        setLoading(false) 
        form.reset() 
      }, 3000) 
    } 
    return ( 
      <Paper> 
        <form onSubmit={form.onSubmit(handleSubmit)}> 
          <LoadingOverlay visible={loading} /> 
          {isRegister && ( 
            <Group grow> 
              <TextInput 
                data-autofocus 
                placeholder="Your first name" 
                label="First name" 
                {...form.getInputProps('firstName')} 
              /> 
              <TextInput 
                placeholder="Your last name" 
                label="Last name" 
                {...form.getInputProps('lastName')} 
              /> 
            </Group> 
          )} 
          <TextInput 
            mt="md" 
            placeholder="Your email" 
            label="Email" 
            {...form.getInputProps('email')} 
          /> 
          <PasswordInput 
            mt="md" 
            placeholder="Password" 
            label="Password" 
            {...form.getInputProps('password')} 
          /> 
          {isRegister && ( 
            <PasswordInput 
              mt="md" 
              label="Confirm Password" 
              placeholder="Confirm password" 
              {...form.getInputProps('confirmPassword')} 
            /> 
          )} 
          {isRegister && ( 
            <Checkbox 
              mt="xl" 
              label="I agree to the terms and conditions" 
              {...form.getInputProps('termsOfService', { type: 'checkbox' })} 
            /> 
          )} 
          <Group position="apart" mt="xl"> 
            <Anchor 
              component="button" 
              type="button" 
              color="gray" 
              onClick={toggleAuthMode} 
              size="sm" 
            > 
              {isRegister 
                ? 'Have an account? Login' 
                : "Don't have an account? Register"} 
            </Anchor> 
            <Button color="blue" type="submit"> 
              {isRegister ? 'Register' : 'Login'} 
            </Button> 
          </Group> 
        </form> 
      </Paper> 
    ) 
  }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44810 = () => {
  const test = `
  import { Avatar } from "@material-ui/core"; 
  import React, { forwardRef } from "react"; 
  import "./Post.css"; 
  import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"; 
  import InputOption from "./InputOption"; 
  import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"; 
  import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"; 
  import SendOutlinedIcon from "@material-ui/icons/SendOutlined"; 
  const Post = forwardRef(({ name, description, message, photoUrl }, ref) => { 
    return ( 
      <div ref={ref} className="post"> 
        <div className="post__header"> 
          <Avatar src={photoUrl}>{name[0]}</Avatar> 
          <div className="post__info"> 
            <h2>{name}</h2> 
            <p>{description}</p> 
          </div> 
        </div> 
        <div className="post__body"> 
          <p>{message}</p> 
        </div> 
        <div className="post__buttons"> 
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" /> 
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" /> 
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" /> 
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" /> 
        </div> 
      </div> 
    ); 
  }); 
  export default Post;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4491 = () => {
  const test = `
    (myvenv) ~$ python3 manage.py runserver
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4492 = () => {
  const test = `
    npm add react-hook-form        
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial4499 = () => {
  const test = `
    import React from "react";
    import "./SendMail.css";
    import CloseIcon from "@material-ui/icons/Close";
    import { Button } from "@material-ui/core";
    import { useForm } from "react-hook-form";
    import { useDispatch } from "react-redux";
    import { closeSendMessage } from "./features/mailSlice";
    import { db } from "./firebase";
    import firebase from "firebase";
    
    function SendMail() {
      const { register, handleSubmit, watch, errors } = useForm();
      const dispatch = useDispatch();
    
      const onSubmit = (formData) => {
        console.log(formData);
        db.collection("emails").add({
          to: formData.to,
          subject: formData.subject,
          message: formData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        dispatch(closeSendMessage());
      };
    
      return (
        <div className="sendMail">
          <div className="sendMail__header">
            <h3>New Message</h3>
            <CloseIcon
              onClick={() => dispatch(closeSendMessage())}
              className="sendMail__close"
            />
          </div>
    
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="to"
              placeholder="To"
              type="email"
              ref={register({ required: true })}
            />
            {errors.to && <p className="sendMail__error">To is Required!</p>}
    
            <input
              name="subject"
              placeholder="Subject"
              type="text"
              ref={register({ required: true })}
            />
            {errors.subject && (
              <p className="sendMail__error">Subject is Required!</p>
            )}
    
            <input
              name="message"
              placeholder="Message..."
              type="text"
              className="sendMail__message"
              ref={register({ required: true })}
            />
            {errors.message && (
              <p className="sendMail__error">Message is Required!</p>
            )}
    
            <div className="sendMail__options">
              <Button
                className="sendMail__send"
                variant="contained"
                color="primary"
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      );
    }
    
    export default SendMail;
    
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44910 = () => {
  const test = `
    .sendMail {
        position: absolute;
        bottom: 0px;
        right: 50px;
        background-color: #404040;
        width: 40%;
        height: 40%;
        max-width: 500px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: flex;
        flex-direction: column;
        border: 1px solid whitesmoke;
        box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
      }
      
      .sendMail__header {
        padding: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: gray;
      }
      
      .sendMail__header > h3 {
        color: whitesmoke;
        font-size: 13px;
      }
      
      .sendMail__send {
        background-color: #3079ed !important;
        text-transform: capitalize !important;
        margin: 15px !important;
      }
      
      .sendMail__close {
        cursor: pointer;
      }
      
      .sendMail > form {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
      
      .sendMail__error {
        background-color: white;
        color: red;
        text-align: right;
        padding: 2px;
      }
      
      .sendMail > form > input {
        height: 30px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid whitesmoke;
        outline: none;
      }
      
      .sendMail__message {
        flex: 1;
      }
      
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44101 = () => {
  const test = `
  export type Post = { 
    id:number 
    created_at:string 
    title: string 
    content:string 
    post_url:string 
    status:string 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44102 = () => {
  const test = `
  npm add react-hook-form        
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44103 = () => {
  const test = `
  import React from "react";
  import "./SendMail.css";
  import CloseIcon from "@material-ui/icons/Close";

  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44104 = () => {
  const test = `
  type Props = { 
    title: string; 
    content: string; 
    status: string; 
    postUrl: string; 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44105 = () => {
  const test = `
  <Card shadow="sm" p="lg" radius="md" withBorder> 
  <Card.Section> 
    <Image src={postUrl} height={160} alt="Norway" withPlaceholder /> 
  </Card.Section> 
  <Group position="apart" my="md"> 
    <Text weight={800}>{title}</Text> 
    <Badge color="pink" radius="lg" variant="filled"> 
      {status} 
    </Badge> 
  </Group> 
  <Text size="sm">{content}</Text> 
  <Button mt="md" size="xs" variant="light" color="indigo" fullWidth>Subscribe</Button> 
</Card>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44106 = () => {
  const test = `
  const handleSubmit = async () => { 
    setIsLoading(true) 
    const { data, error } = await supabase.from('posts').insert({ 
      title: form.values.title, 
      content: form.values.content, 
      status: form.values.status, 
      post_url: postUrl, 
    }) 
    if (error) throw new Error(error.message) 
    const cachedPosts = queryClient.getQueryData<Post[]>(['posts']) 
    if (cachedPosts) { 
      queryClient.setQueryData(['posts'], [...cachedPosts, data[0]]) 
    } 
    setIsLoading(false) 
    setPostUrl('') 
    form.reset() 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44107 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44108 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44122 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44123 = () => {
  const test = `
  type Coin = { 
    market_data: { 
        current_price: {jpy: string} 
    } 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial44124 = () => {
  const test = `
  const [btc, setBtc] = useState<Coin | null>(null) 
  const [eth, setEth] = useState<Coin | null>(null)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};