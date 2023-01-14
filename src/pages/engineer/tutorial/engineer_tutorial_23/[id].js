import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_23 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_23>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/rCselwxbUgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h3>#エラーが発生した場合</h3>
            <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>

            <p>Django REST Framework 公式ドキュメント</p>
            <p>Next.js 公式ドキュメント</p>

            <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
            <p>DRF 参照コード</p>
            <p>Next.js 参照コード</p>
            <h3>#前提知識</h3>

            <p>では、始めて行きましょう！！</p>
          </Layout_tutorial_23>
        ) : id == 2 ? (
          <Layout_tutorial_23>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <p></p>
            <p></p>

            <Tutorial2321 />
            <h4>index.tsx</h4>
            <p>必要ないコードは削除します。</p>
            <p>TwitterはSidebar、Feed、Widgetsの3つのエリアに分けられます。 </p>
            <p className='text-red-400'>index.tsx</p>
            <Tutorial2322 />

          </Layout_tutorial_23>
        ) : id == 3 ? (
          <Layout_tutorial_23>
            <h3>Sidebar.js作成</h3>
            <p>componentsフォルダを作成し、その中にSidebar.tsxファイルを作ります。</p>
            <p>rafceでreactコンポーネントを作成 </p>
            <p className='text-red-400'>components/Sidebar.tsx</p>
            <Tutorial2331 />
            <h3>heroiconのインストール</h3>
            <p> Twitterのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
            <p>下記コマンドでインストールします</p>

            <Tutorial2332 />
            <h3>アイコンの表示</h3>
            <p className='text-red-400'>components/Sidebar.tsx</p>
            <Tutorial2333 />

            <h3>SidebarRow.tsx</h3>
            <p>SidebarRow.tsxファイルを作成</p>
            <p className='text-red-400'>components/SidebarRow.js</p>
            <Tutorial2334 />
            <p>Sidebar.tsxからpropsを使ってIconとtitleを渡せるようにしています</p>


            <p>サーバーを起動して表示を確認しましょう。</p>
            <h3>アイコンのCSS</h3>
            <p>SidebarRow.jsにCSSを適用していきます</p>
            <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <div>
                <span class="font-medium">max-w-fit</span>hoverした時のエリアが
              </div>
            </div>
            <p>max-w-fit</p>
            <p className='text-red-400'>components/SidebarRow.js</p>
            <Tutorial2335 />
            <h4>tailwind.config.js</h4>
            <p>マウスをhoverした時にテキストがtwitterと同じ色に設定できます</p>
            <p className='text-red-400'>tailwind.config.js</p>
            <Tutorial2336 />
          </Layout_tutorial_23>
        ) : id == 4 ? (
          <Layout_tutorial_23>
            <div className='flex'>
              <div className='w-1/2'>
                <h3>Feed.tsx作成</h3>
                <p>クリックしたときにscaleが大きくなるようにしています。</p>
                <p className='text-red-400'>components/Feed.tsx</p>
                <Tutorial2341 />


                <h4>app.jsファイルに作成したAmazonContextを適用</h4>
                <Tutorial2342 />

                <p className='text-xl border-b-4 border-blue-400'>useState</p>
                <p></p>
                <Tutorial2343 />
                <p className='text-xl border-b-4 border-blue-400'>useEffect</p>
                <p></p>
                <Tutorial2344 />
                <h4>set Nicknameボタンをクリックしたとき関数</h4>
                <p>ユーザーかつnicknameがあるなら設定、nicknameがない場合「Can't set empty nickname」と表示する。</p>
                <p>ユーザー出ない場合「No user」と表示する</p>
                <Tutorial2345 />
              </div>
              <div className='w-1/2'>
                <Tutorial2349 />
              </div>
            </div>
          </Layout_tutorial_23>
        ) : id == 5 ? (
          <Layout_tutorial_23>
            <div className='flex'>
              <div className=''>
                <h3>Widgets.tsx</h3>
                <p>ブログに必要な項目をモデルに追加します。 </p>
                <p className='text-red-400'>components/Widgets.tsx</p>
                <Tutorial2351 />
                <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                  <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <div>
                    <span class="font-medium">items-center:</span> Iconとinputフォームの高さを中心に揃える
                  </div>
                </div>
                <h3>twitterタイムラインの挿入 </h3>
                <div>
                  <Link href="https://github.com/saurabhnemade/react-twitter-embed">
                    <div className="cursor-pointer text-blue-500">
                      <div class="text-xl">react-twitter-embed</div>
                    </div>
                  </Link>
                </div>
                <Tutorial2352 />
                <p className='text-red-400'>components/Widgets.tsx</p>
                <Tutorial2353 />
              </div>
            </div>
          </Layout_tutorial_23>
        ) : id == 6 ? (
          <Layout_tutorial_23>
            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <h4>SideBar.tsx</h4>
            <p className='text-red-400'>components/SideBar.tsx</p>
            <Tutorial2361 />
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <h4>Feed.tsx</h4>
            <p className='text-red-400'>components/Feed.tsx</p>
            <Tutorial2362 />
            <h4>Widgets.tsx</h4>
            <p>アプリケーション用ルーティングを作成</p>
            <p className='text-red-400'>components/Widgets.tsx</p>
            <Tutorial2363 />
            <h4>SideBarRow.tsx</h4>
            <p>md以上の時はtitleをinline-flexで横並びに、md以下の時はtitleを隠すようにhiddenを設定。</p>
            <p className='text-red-400'>components/SideBarRow.tsx</p>
            <Tutorial2364 />
          </Layout_tutorial_23>
        ) : id == 7 ? (
          <Layout_tutorial_23>
            <div className='flex'>
              <div className=''>
                <h3>Tweetbox作成</h3>
                <p>Tweetboxコンポーネントを作成</p>
                <p>テキストが入力されていないとボタンを押せないようにdisabled</p>
                <p className='text-red-400'>components/Tweetbox.tsx</p>
                <Tutorial2371 />
              </div>

            </div>
          </Layout_tutorial_23 >
        ) : id == 8 ? (
          <Layout_tutorial_23>
            <h3>sanity</h3>
            <h4>Contentの内容を変更</h4>
            <Tutorial2380 />
            <h5>post.js変更</h5>
            <div className='flex items-center'>
              <Tutorial2381 />

            </div>
            <p>schemasのpost.jsをtweet.jsに変更</p>
            <h5>category.js変更</h5>
            <p>schemasのcategory.jsをcomment.jsに変更 </p>
            <div className='flex items-center'>
              <Tutorial2382 />

            </div>
            <p>blockContent.jsは削除</p>

            <h5>schema.js変更</h5>
            <h4>nextインストール</h4>

            <Tutorial2383 />
            <p>sanity.jsをプロジェクト直下に作成します</p>
            <p className='text-red-400'>sanity.js</p>
            <Tutorial2384 />
            <p>.env.lovalをプロジェクト直下に作成します</p>
            <p className='text-red-400'>.env.loval</p>
            <Tutorial2385 />
          </Layout_tutorial_23>
        ) : id == 9 ? (
          <Layout_tutorial_23>
            <div className='flex'>
              <div className=''>
                <h3>getServerSideProps</h3>
                <p>サーバー起動</p>
                <p>サーバーを起動させます</p>
                <p className='text-red-400'>index.tsx</p>
                <Tutorial2391 />

                <p>apiフォルダにgetTweets.tsを作ります。</p>

                <p>sanityから取ってきたデータに対して型定義をします。</p>
                <p className='text-red-400'>api/getTweets.tsx</p>
                <Tutorial2393 />
                <p></p>
                <p>プロジェクト直下にtypings.d.tsを作ります。</p>
                <p>Tweetに入力される項目はtext、username、profileImg、imageになります</p>
                <p className='text-red-400'>api/fetchTweets.tsx</p>
                <Tutorial2394 />
                <p>TweetBosyに指定した他にsanityから受け取るデータに含まれる型を定義します。</p>
                <p>Tweetに入力される項目はtext、username、profileImg、imageになります</p>
                <p className='text-red-400'>api/fetchTweets.tsx</p>
                <Tutorial2395 />
                <h3>getTweets.ts</h3>
                <p>next-sanityからgroqをインポートしています。</p>
                <p>groqはgraph-Relational Object Queriesの略でクエリを</p>
                <Tutorial2396 />
                <p>http://localhost:3000/api/getTweetsにアクセスするとjsonデータが取得できています。</p>
                <div class="">
                  <Image
                    className=''
                    src="/images/programing/tutotial/sanity_twitter_get.png"
                    alt="01:Pythonとは？"
                    width={950}
                    height={450}
                  />
                </div>
                <h3>fetchTweets.tsx作成</h3>
                <p>プロジェクト直下にutilsフォルダを作成しfetchTweets.tsxを作ります。</p>
                <p>getTweetsに格納されたデータをresに格納しjson形式に</p>
                <p className='text-red-400'>utils/fetchTweets.tsx</p>
                <Tutorial2392 />
                <h3>データの表示</h3>
                <p>Feed.tsxにおいてTweetを表示します </p>
                <h3>react-timeagoのインストール</h3>
                <Tutorial2397 />
                <h3>fetchComments.ts作成</h3>
                <Tutorial2398 />
                <p>コメントの型定義をします。 </p>
                <Tutorial23915 />
                <h3>getComments.ts作成</h3>
                <p className='text-red-400'>api/getComments.ts</p>
                <Tutorial23916 />
                <h3>コメントの表示</h3>
                <p className='text-red-400'>components/Tweet.tsx</p>
                <Tutorial23917 />
              </div>
            </div>
          </Layout_tutorial_23>
        ) : id == 10 ? (
          <Layout_tutorial_23>

            <h3>fetchTweets.tsx作成</h3>
            <p>プロジェクト直下にutilsフォルダを作成しfetchTweets.tsxを作ります。</p>
            <p>。</p>
            <Tutorial23101 />
            <p>apiフォルダにauthフォルダを作成し、[...nextauth].jsを作ります。</p>
            <p className='text-red-400'>auth/[...nextauth].js</p>
            <Tutorial23102 />
            <p>SessionProviderでComponentを囲みます。</p>
            <p className='text-red-400'>_app.js</p>
            <Tutorial23103 />
            <Tutorial23104 />
            <h3>画像投稿</h3>
            <p></p>
            <p>。</p>
            <p className='text-red-400'>TweetBox.tsx</p>
            <Tutorial23105 />
            <p>PhotographIconをクリックしたときにtrueになり下記のコードが有効になります。</p>
            <p className='text-red-400'>TweetBox.tsx</p>
            <Tutorial23106 />
          </Layout_tutorial_23>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2321 = () => {
  const test = `
npx create-next-app -e with-tailwindcss twitter-2-yt-clone
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2322 = () => {
  const test = `
  import type { NextPage } from 'next'
  import Head from 'next/head'
  const Home: NextPage = () => {
    return (
      <div className="">
        <Head>
          <title>Twitter 2.0</title>
        </Head>
        <main>
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </main>
      </div>
    )
  }
  export default Home
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2323 = () => {
  const test = `
npx create-next-app@latest .
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2324 = () => {
  const test = `
  npm add -D tailwindcss postcss autoprefixer
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2325 = () => {
  const test = `
npx tailwindcss init -p
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2326 = () => {
  const test = `
  module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2327 = () => {
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



const Tutorial2328 = () => {
  const test = `
  npm add moralis react-moralis
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2229 = () => {
  const test = `
  npm add react-icons react-spinners react-simple-hook-modal
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22210 = () => {
  const test = `
  npm add @walletconnect/web3-provider @web3auth/web3auth ethers
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22211 = () => {
  const test = `
  npm add magic-sdk moment web3uikit
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial22212 = () => {
  const test = `
  const styles = {
      container: ’h-full w-full flex bg-[#fff]’,
    }
    
    export default function Home() {
      return (
        <div className={styles.container}>
          <Sidebar />
          <Main />
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


const Tutorial2331 = () => {
  const test = `
  import React from 'react' 
  const Sidebar = () => { 
    return ( 
      <div>Sidebar</div> 
    ) 
  } 
  export default Sidebar
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2332 = () => {
  const test = `
npm add @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2333 = () => {
  const test = `
  import React from 'react' 
  import SidebarRow from './SidebarRow'
  import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
  } from '@heroicons/react/outline'
  
    return (
      <div>
        <img src="https://links.papareact.com/drq" className="m-3 h-10 w-10" />
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} title="Lists" />
      </div>
    )
  }
  
  export default Sidebar
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2334 = () => {
  const test = `
import { MouseEventHandler, SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div>
      <Icon className="h-6 w-6" />
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2335 = () => {
  const test = `
import { MouseEventHandler, SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">{title}</p>
    </div>
  )
}

export default SidebarRow
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2336 = () => {
  const test = `
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
      },
    },
  },
  plugins: [],
}
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2341 = () => {
  const test = `
active:scale-125"
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2342 = () => {
  const test = `
    import '../styles/globals.css'
    import { MoralisProvider } from 'react-moralis'
    import { AmazonProvider } from '../context/AmazonContext'
    
    function MyApp({ Component, pageProps }) {
      return (
        <MoralisProvider
          serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
          appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
        >
          <AmazonProvider>
              <Component {...pageProps} />
          </AmazonProvider>
        </MoralisProvider>
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

const Tutorial2343 = () => {
  const test = `
    const [nickname, setNickname] = useState('')
    const [username, setUsername] = useState('')

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
      } = useMoralis()
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2344 = () => {
  const test = `
    useEffect(async () => {
           
        if (isAuthenticated) {
            const currentUsername = await user?.get('nickname')
            setUsername(currentUsername)
        }
    })()
},[isAuthenticated,user,username,])
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2345 = () => {
  const test = `
    const handleSetUsername = () => {
        if (user) {
          if (nickname) {
            user.set('nickname', nickname)
            user.save()
            setNickname('')
          } else {
            console.log("Can't set empty nickname")
          }
        } else {
          console.log('No user')
        }
      }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2349 = () => {
  const test = `
  function Feed() {
    return (
      <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
        <div className="flex items-center justify-between">
          <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
          <RefreshIcon
            className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
          />
        </div>
      </div>
    )
  }
  
  export default Feed
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2351 = () => {
  const test = `
  import { SearchIcon } from '@heroicons/react/outline'
  
  
  function Widgets() {
    return (
      <div className="col-span-2 mt-2 hidden items-start px-2 lg:inline">
        {/* Search */}
        <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
          <SearchIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    )
  }
  
  export default Widgets
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2352 = () => {
  const test = `
npm add react-twitter-embed
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2353 = () => {
  const test = `
import { TwitterTimelineEmbed } from 'react-twitter-embed'

<TwitterTimelineEmbed
  sourceType="profile"
  screenName="sonnysangha"
  options={{ height: 1000 }}
/>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2359 = () => {
  const test = `
import { SearchIcon } from '@heroicons/react/outline' 
import { TwitterTimelineEmbed } from 'react-twitter-embed' 
function Widgets() { 
return ( 
  <div className="col-span-2 mt-2 hidden items-start px-2 lg:inline"> 
    {/* Search */} 
    <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3"> 
      <SearchIcon className="h-5 w-5 flex-shrink-0 text-gray-400" /> 
      <input 
        className="bg-transparent outline-none" 
        type="text" 
        placeholder="Search Twitter" 
      /> 
    </div> 
    <TwitterTimelineEmbed 
      sourceType="profile" 
      screenName="sonnysangha" 
      options={{ height: 1000 }} 
    /> 
  </div> 
) 
} 
export default Widgets
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2361 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include
  
  from django.conf.urls.static import static
  from django.conf import settings
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('api/', include('app.urls')),
  ]
  
  if settings.DEBUG:
      urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2362 = () => {
  const test = `
  <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2363 = () => {
  const test = `
  <div className="col-span-2 mt-2 hidden items-start px-2 lg:inline">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2364 = () => {
  const test = `
  <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2371 = () => {
  const test = `
<button 
  disabled={!input || !session} 
  onClick={handleSubmit} 
  className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40" 
> 
  Tweet 
</button> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2379 = () => {
  const test = `
  import { 
      CalendarIcon, 
      EmojiHappyIcon, 
      LocationMarkerIcon, 
      PhotographIcon, 
      SearchCircleIcon, 
    } from '@heroicons/react/outline' 
    import { useSession } from 'next-auth/react' 
    import { 
      Dispatch, 
      FormEvent, 
      MouseEvent, 
      SetStateAction, 
      useRef, 
      useState, 
    } from 'react' 
    import toast from 'react-hot-toast' 
    import { Tweet, TweetBody } from '../typings' 
    import { fetchTweets } from '../utils/fetchTweets' 
    interface Props { 
      setTweets: Dispatch<SetStateAction<Tweet[]>> 
    } 
    function TweetBox({ setTweets }: Props) { 
      const [input, setInput] = useState<string>('') 
      const [image, setImage] = useState<string>('') 
      const imageInputRef = useRef<HTMLInputElement>(null) 
      const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false) 
      const { data: session } = useSession() 
      async function postTweet() { 
        const tweetInfo: TweetBody = { 
          text: input, 
          username: session?.user?.name || 'Unknown User', 
          profileImg: session?.user?.image || 'https://links.papareact.com/gll', 
          image: image, 
        } 
        const result = await fetch('/api/addTweet', { 
          body: JSON.stringify(tweetInfo), 
          method: 'POST', 
        }) 
        const json = await result.json() 
        const newTweets = await fetchTweets() 
        setTweets(newTweets) 
        toast('Tweet Posted!', { 
          icon: '🚀', 
        }) 
        return json 
      } 
      const handleSubmit = ( 
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> 
      ) => { 
        e.preventDefault() 
        postTweet() 
        setInput('') 
        setImage('') 
        setImageUrlBoxIsOpen(false) 
      } 
      const addImageToTweet = ( 
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> 
      ) => { 
        e.preventDefault() 
        if (!imageInputRef.current?.value) return 
        setImage(imageInputRef.current.value) 
        imageInputRef.current.value = '' 
        setImageUrlBoxIsOpen(false) 
      } 
      return ( 
        <div className="flex space-x-2 p-5"> 
          <img 
            src={session?.user?.image || 'https://links.papareact.com/gll'} 
            alt="" 
            className="mt-4 h-14 w-14 rounded-full" 
          /> 
          <div className="flex flex-1 items-center pl-2"> 
            <form className="flex flex-1 flex-col"> 
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className="h-24 w-full text-xl outline-none placeholder:text-xl" 
                type="text" 
                placeholder={session ? "What's Happening?" : 'Sign in to Tweet...'} 
              /> 
              <div className="flex"> 
                <div className="flex flex-1 space-x-2 text-twitter"> 
                  <PhotographIcon 
                    onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} 
                    className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" 
                  /> 
                  <SearchCircleIcon className="h-5 w-5" /> 
                  <EmojiHappyIcon className="h-5 w-5" /> 
                  <CalendarIcon className="h-5 w-5" /> 
                  <LocationMarkerIcon className="h-5 w-5" /> 
                </div> 
                <button 
                  disabled={!input || !session} 
                  onClick={handleSubmit} 
                  className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40" 
                > 
                  Tweet 
                </button> 
              </div> 
              {imageUrlBoxIsOpen && ( 
                <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4"> 
                  <input 
                    ref={imageInputRef} 
                    className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" 
                    placeholder="Enter Image URL..." 
                    type="text" 
                  /> 
                  <button 
                    type="submit" 
                    onClick={addImageToTweet} 
                    className="font-bold text-white" 
                  > 
                    Add Image 
                  </button> 
                </form> 
              )} 
              {image && ( 
                <img 
                  className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg" 
                  src={image} 
                  alt="" 
                /> 
              )} 
            </form> 
          </div> 
        </div> 
      ) 
    } 
    export default TweetBox
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2380 = () => {
  const test = `
  ? Continue creating a Sanity Studio v3 project? Yes 
  Coupon "sonny2022" validated! 
  You're setting up a new project! 
  We'll make sure you have an account with Sanity.io. Then we'll 
  install an open-source JS content editor that connects to 
  the real-time hosted API on Sanity.io. Hang on. 
  Press ctrl + C at any time to quit. 
  Prefer web interfaces to terminals? 
  You can also set up best practice Sanity projects with 
  your favorite frontends on https://www.sanity.io/templates 
  Looks like you already have a Sanity-account. Sweet! 
  ✔ Fetching existing projects 
  ? Project name: twitter-2-yt-nextjs-clone 
  Your content will be stored in a dataset that can be public or private, depending on 
  whether you want to query your content with or without authentication. 
  The default dataset configuration has a public dataset named "production". 
  ? Use the default dataset configuration? Yes 
  ✔ Creating dataset 
  ? Project output path: /home/ookuboc5399/src/youtube/ookubo/twitter-2-yt-clone/sanity 
  ? Select project template Blog (schema) 
  ? Do you want to use TypeScript? No 
  ✔ Bootstrapping files from template 
  ✔ Resolving latest module versions 
  ✔ Creating default project files 
  ? Package manager to use for installing dependencies? npm 
  Running 'npm install --legacy-peer-deps' 
  npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead 
  added 883 packages, and audited 884 packages in 1m 
  132 packages are looking for funding 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2381 = () => {
  const test = `
  export default {
      name: 'tweet',
      title: 'Tweet',
      type: 'document',
      fields: [
        {
          name: 'text',
          title: 'Text in tweet',
          type: 'string',
        },
        {
          name: 'blockTweet',
          title: 'Block Tweet',
          description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
          type: 'boolean',
        },
        {
          name: 'username',
          title: 'Username',
          type: 'string',
        },
        {
          name: 'profileImg',
          title: 'Profile Image',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Tweet image',
          type: 'string',
        },
      ],
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2382 = () => {
  const test = `
  export default { 
      name: 'comment', 
      title: 'Comment', 
      type: 'document', 
      fields: [ 
        { 
          name: 'comment', 
          title: 'Comment', 
          type: 'string', 
        }, 
        { 
          name: 'username', 
          title: 'Username', 
          type: 'string', 
        }, 
        { 
          name: 'profileImg', 
          title: 'Profile Image', 
          type: 'string', 
        }, 
        { 
          name: 'tweet', 
          title: 'Tweet', 
          description: 'Reference the Tweet the comment is associated to:', 
          type: 'reference', 
          to: { type: 'tweet' }, 
        }, 
      ], 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2383 = () => {
  const test = `
npm install next-sanity @portabletext/react @sanity/image-url
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2384 = () => {
  const test = `
  import { 
      createImageUrlBuilder, 
      createClient, 
    } from 'next-sanity' 
    export const config = { 
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', 
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
      apiVersion: '2021-03-25', 

      useCdn: process.env.NODE_ENV === 'production', 
    } 
    // Set up the client for fetching data in the getProps page functions 
    export const sanityClient = createClient(config) 

    export const urlFor = (source) => createImageUrlBuilder(config).image(source)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2385 = () => {
  const test = `
  NEXT_PUBLIC_BASE_URL=http://localhost:3000/ 
  NEXTAUTH_URL=http://localhost:3000 
  NEXT_PUBLIC_SANITY_DATASET=production 
  NEXT_PUBLIC_SANITY_PROJECT_ID=youridhere 
  NEXTAUTH_SECRET=supersecretpassword 
  SANITY_API_TOKEN=xxx 
  GOOGLE_CLIENT_ID=xxx 
  GOOGLE_CLIENT_SECRET=xxx 
  TWITTER_CLIENT_ID=xxxx 
  TWITTER_CLIENT_SECRET=xxx
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2391 = () => {
  const test = `
  export const getServerSideProps:GetServerSideProps = async (context)  =>{ 
      const tweets: Tweet[] = await fetchTweets() ; 
      return { 
        props: { 
          tweets 
        } 
      } 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2392 = () => {
  const test = `
  import { Tweet } from '../typings' 
  export const fetchTweets = async () => { 
    const res = await fetch('＄{process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets') 
    const data = await res.json() 
    const tweets: Tweet[] = data.tweets 
    console.log('fetching', tweets) 
    return tweets 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2393 = () => {
  const test = `
  type Data = { 
      tweets: Tweet[] 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2394 = () => {
  const test = `
  export type TweetBody = { 
      text: string 
      username: string 
      profileImg: string 
      image?: string 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2395 = () => {
  const test = `
  export interface Tweet extends TweetBody { 
      _createdAt: string 
      _id: string 
      _rev: string 
      _type: 'tweet' 
      _updatedAt: string 
      blockTweet: boolean 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2396 = () => {
  const test = `
  const feedQuery = groq' 
  *[_type == "tweet" && !blockTweet] { 
    _id, 
    ..., 
  } | order(_createdAt desc) 
  '
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2397 = () => {
  const test = `
  npm add react-timeago
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2398 = () => {
  const test = `
  import { Comment } from '../typings' 
export const fetchComments = async (tweetId: string) => { 
const res = await fetch('/api/getComments?tweetId=＄{tweetId}') 
const comments: Comment[] = await res.json() 
return comments 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2399 = () => {
  const test = `
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import { groq } from 'next-sanity' 
  import { sanityClient } from '../../sanity' 
  import { Tweet } from '../../typings' 
  const feedQuery = groq' 
    *[_type == "tweet" && !blockTweet] { 
      _id, 
      ..., 
    } | order(_createdAt desc) 
  ' 
  type Data = { 
    tweets: Tweet[] 
  } 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery) 
    res.status(200).json({ tweets }) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23910 = () => {
  const test = `
  export interface Tweet extends TweetBody { 
      _createdAt: string 
      _id: string 
      _rev: string 
      _type: 'tweet' 
      _updatedAt: string 
      blockTweet: boolean 
    } 
    export type TweetBody = { 
      text: string 
      username: string 
      profileImg: string 
      image?: string 
    } 
    export interface Comment extends CommentBody { 
      _createdAt: string 
      _id: string 
      _rev: string 
      _type: 'comment' 
      _updatedAt: string 
      tweet: { 
        _ref: string 
        _type: 'reference' 
      } 
    } 
    export type CommentBody = { 
      comment: string 
      tweetId: string 
      username: string 
      profileImg: string 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23911 = () => {
  const test = `
  export default { 
      name: 'tweet', 
      title: 'Tweet', 
      type: 'document', 
      fields: [ 
        { 
          name: 'title', 
          title: 'Text in Tweet', 
          type: 'string', 
        }, 
        { 
          name: 'blockTweet', 
          title: 'Block Tweet', 
          description: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate', 
          type: 'boolean', 
        }, 
        { 
          name: 'username', 
          title: 'Username', 
          type: 'string', 
        }, 
        { 
          name: 'profileImg', 
          title: 'Profile Image', 
          type: 'string', 
        }, 
        { 
          name: 'image', 
          title: 'Tweet image', 
          type: 'string', 
        }, 
      ], 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23912 = () => {
  const test = `
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
import type { NextApiRequest, NextApiResponse } from 'next' 
import { groq } from 'next-sanity' 
import { sanityClient } from '../../sanity' 
import { Tweet } from '../../typings' 
const feedQuery = groq' 
*[_type == "tweet" && !blockTweet] { 
  _id, 
  ..., 
} | order(_createdAt desc) 
'
type Data = { 
tweets: Tweet[] 
} 
export default async function handler( 
req: NextApiRequest, 
res: NextApiResponse<Data> 
) { 
const tweets: Tweet[] = await sanityClient.fetch(feedQuery) 
res.status(200).json({ tweets }) 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23915 = () => {
  const test = `
  export interface Comment extends CommentBody {
      _createdAt: string
      _id: string
      _rev: string
      _type: 'comment'
      _updatedAt: string
      tweet: {
        _ref: string
        _type: 'reference'
      }
    }
    export type CommentBody = {
      comment: string
      tweetId: string
      username: string
      profileImg: string
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23916 = () => {
  const test = `
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction 
  import type { NextApiRequest, NextApiResponse } from 'next' 
  import { groq } from 'next-sanity' 
  import { sanityClient } from '../../sanity' 
  const commentQuery = groq' 
    *[_type == "comment" && references(*[_type == 'tweet' && _id == $tweetId]._id)] { 
    _id, 
    ... 
  } | order(_createdAt desc) 
  ' 
  type Data = Comment[] 
  export default async function handler( 
    req: NextApiRequest, 
    res: NextApiResponse<Data> 
  ) { 
    const { tweetId } = req.query 
    const comments: Comment[] = await sanityClient.fetch(commentQuery, { 
      tweetId, 
    }) 
    console.log('Comments >>> ', comments) 
    res.status(200).json(comments) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23917 = () => {
  const test = `
  {comments?.length > 0 && ( 
      <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5"> 
        {comments.map((comment) => ( 
          <div key={comment._id} className="relative flex space-x-2"> 
            <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" /> 
            <img 
              src={comment.profileImg} 
              className="mt-2 h-7 w-7 rounded-full object-cover" 
              alt="" 
            /> 
            <div> 
              <div className="flex items-center space-x-1"> 
                <p className="mr-1 font-bold">{comment.username}</p> 
                <p className="hidden text-sm text-gray-500 lg:inline"> 
                  @{comment.username.replace(/\s+/g, '').toLowerCase()} · 
                </p> 
                <TimeAgo 
                  className="text-sm text-gray-500" 
                  date={comment._createdAt} 
                /> 
              </div> 
              <p>{comment.comment}</p> 
            </div> 
          </div> 
        ))} 
      </div> 
    )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial23101 = () => {
  const test = `
  npm install next-auth
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23102 = () => {
  const test = `
  import NextAuth from 'next-auth' 
  import GoogleProvider from 'next-auth/providers/google' 
  import TwitterProvider from 'next-auth/providers/twitter' 
  export default NextAuth({ 
    // Configure one or more authentication providers 
    providers: [ 
      GoogleProvider({ 
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
      }), 
      TwitterProvider({ 
        clientId: process.env.TWITTER_CLIENT_ID, 
        clientSecret: process.env.TWITTER_CLIENT_SECRET, 
        version: '2.0', // opt-in to Twitter OAuth 2.0 
      }), 
      // ...add more providers here 
    ], 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23103 = () => {
  const test = `
  import '../styles/globals.css' 
  import type { AppProps } from 'next/app' 
  import { SessionProvider} from "next-auth/react" 
  export default function App({ Component,  pageProps: { session, ...pageProps } }: AppProps) { 
    return ( 
      <SessionProvider session={session}> 
      <Component {...pageProps} /> 
    </SessionProvider> 
    ) 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23104 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23105 = () => {
  const test = `
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)

              <PhotographIcon 
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} 
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" 
              />
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial23106 = () => {
  const test = `
  {imageUrlBoxIsOpen && ( 
    <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4"> 
      <input 
        ref={imageInputRef} 
        className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" 
        placeholder="Enter Image URL..." 
        type="text" 
      /> 
      <button 
        type="submit" 
        onClick={addImageToTweet} 
        className="font-bold text-white" 
      > 
        Add Image 
      </button> 
    </form> 
  )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};