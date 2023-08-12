import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_38 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_38>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/I2dcpatq54o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_38>
                ) : id == 2 ? (
                  <Layout_tutorial_38>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                  <p></p>
                  <p></p>
      
                  <Tutorial2321 />
                  <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Sanity</div>
                  <div class="flex flex-nowrap">
                      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                          <a href="#">
                              <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                          </a>
                          <div class="p-5">
                              <a href="#">
                                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sanity</h5>
                              </a>
                              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                              <a href="https://www.sanity.io/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  記事を読む
                                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </a>
                          </div>
                      </div>
                  </div>
                  <p>sanityをインストール </p>
                  <Tutorial2322 />
                  <p>sanityのプロジェクトを作成します。 </p>
      
                  <Tutorial2323 />
                  <p>sanityのプロジェクトを作成します。 </p>
                  <p>プロジェクト名はsanityyoutubeとします。 </p>
                  <Tutorial2324 />
                  <p>サーバーを起動して表示を確認しましょう。 </p>
                  <Tutorial2325 />
              </Layout_tutorial_38>
                ) : id == 3 ? (
                  <Layout_tutorial_38>
                  <h3>ヘッダー作成</h3>
                  <p>componentsフォルダを作成し、その中にHeader.tsxファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <p className='text-red-400'>components/Header.tsx</p>
                  <Tutorial3831/>
                  <p>index.tsxにHeaderコンポーネントを読み込ませておきます</p>
                  <Tutorial3832/>
                
              </Layout_tutorial_38>
                ) : id == 4 ? (
                  <Layout_tutorial_38>
                  <h3>作成</h3>
                  <p className='text-red-400'>pages/index.tsx</p>
                  <Tutorial3841 />
                  <div class="sticky top-0">
                    <Image
                      src="/images/programing/tutotial/medium.png"
                      alt="01:Pythonとは？"
                      className='object-cover'
                      width={950}
                      height={500}
                    />
                  </div>
            
            
            
                </Layout_tutorial_38>
                ) : id == 5 ? (
                  <Layout_tutorial_38>
                  <div className='flex'>
                      <div className='w-1/2'>
                          <h3>Post作成</h3>
                          <p>新しくターミナルを開きます </p>
                          <p>sanityyoutubeフォルダに移動しsanity start </p>
                          <p className='text-red-400'>components/Widgets.tsx</p>
                          <Tutorial3851 />
                          <p>ログインに成功するとhttp://localhost:3333/deskに遷移します</p>
                          <p>VISIONのQueryに以下のコマンドを入力すると情報を受け取ることが出来る </p>
                          <Tutorial3853 />
                          <p>package.jsonファイルと同じ階層にsanity.jsを作成する </p>
                          <p>新しくターミナルを開きます </p>
                          <Tutorial3852 />
                          <p className='text-red-400'>sanity-yt-build/sanity.js</p>
                          <Tutorial3854 />
                          <p>.env.localファイルの作成 </p>
                          <p>sanityyoutubeディレクトリの中にあるsanity.jsonのapi情報を.env.localファイルに記載します。 </p>
                          <Tutorial3855 />
                          <p>環境ファイルを適用させるためには一度立ち上げたサーバーを再起動しなければならない </p>
                          <h4>Desccriptionを追加</h4>
                          <p className='text-red-400'>schemas/post.js</p>
      
                          <Tutorial3857 />
                          <h4>APIの確認</h4>
                          <p> ブログの情報がフェッチ出来ているか確認</p>
                          <Tutorial3858 />
                          <h4>index.tsx修正</h4>
                          <p>getServerSidePropsで</p>
                          <p>sanityから取ってくる情報をqueryに格納</p>
                          <p className='text-red-400'>index.tsx</p>
                          <Tutorial3856 />
                          <h4>typings.d.ts</h4>
                          <p>package.jsonファイルと同じ階層にtypings.d.tsを作成する </p>
                          <p className='text-red-400'>sanity-yt-build/typings.d.ts</p>
                          <Tutorial3859 />
                          <h4>ブログ記事の表示</h4>
                          <p className='text-red-400'>index.tsx</p>
                          <Tutorial38510 />
                      </div>
                      <div className='w-1/2'>
                      <Tutorial38511 />
                      </div>
                  </div>
              </Layout_tutorial_38>
                ) : id == 6 ? (
                  <Layout_tutorial_38>
                  <h3>詳細ページ</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                   <h4>SideBar.tsx</h4>
                  <p className='text-red-400'>components/SideBar.tsx</p>
                  <Tutorial3861 />
                
              </Layout_tutorial_38>
                ) : id == 7 ? (
                  <Layout_tutorial_38>
                  <h3>コンタクトフォーム作成</h3>
                  <p></p>
                  <p className='text-red-400'>[slug].tsx</p>
                  <Tutorial3871 />
                  <h4>React Hook formのインストール</h4>
      
                  <p></p>
      
                  </Layout_tutorial_38>
                ) : id == 8 ? (
                  <Layout_tutorial_38>
                  <h3>Views追加</h3>
                  <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                  <p>それを継承することで、簡単に開発をすることができます </p>
      
                  <p className='text-red-400'>app/views.py</p>
                  <Tutorial1681 />
                  <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
                  <p>公式ドキュメント - Generic views </p>
                  </Layout_tutorial_38>
                ) : id == 9 ? (
                  <Layout_tutorial_38>
                  <h3>API確認</h3>
                  <p>サーバー起動</p>
                  <p>サーバーを起動させます</p>
      
                  <Tutorial1691 />
                  <h3>API 画面</h3>
                  <p>Django REST Framework には、API を管理する専用画面が用意されています。</p>
      
                  <h4>一覧 </h4>
                  <p>下記にアクセスすると、Post 一覧が表示されます。 </p>
                  <p>http://127.0.0.1:8000/api/post/</p>
                  <h4>詳細 </h4>
                  <p>http://127.0.0.1:8000/api/post/1/</p>
                  <p>Json</p>
                  <p>API をコールすると、下記のような Json 形式でデータを取得することになります。</p>
                  <Tutorial1692 />
                  <p>フロントエンドからのリクエスト</p>
                  <p>フロントエンドから GET、PUT、PUT/PATCH、DELETE などのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。 </p>
                  <p>ぜひ API を活用した設計にしてみましょう。</p>
                  <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
                  </Layout_tutorial_38>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial2321 = () => {
  const test = `
  npx create-next-app --example with-tailwindcss sanity-yt-build
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2322 = () => {
  const test = `
 npm install -g @sanity/cli
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2323 = () => {
  const test = `
sanity init --coupon sonny2022
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2324 = () => {
  const test = `
  Slelect project to use Create new project
  Your project name: sanityyoutube
  Use the default dataset configuration?(Y/n) Y
  Select project template Blog(schema)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2325 = () => {
  const test = `
  npm run dev
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3831 = () => {
  const test = `
  import React from 'react';
  import Link from 'next/link';
  
  function Header() {
      return (
          <header className="flex justify-between p-5 m-w-7xl mx-auto">
  
  
              <div className="flex items-center space-x-5">
                  <Link href="/">
                      <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
                  </Link>
                  <div className="hidden md:inline-flex items-center space-x-5">
                      <h3>About</h3>
                      <h3>Contact</h3>
                      <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                  </div>
              </div>
              <div className="flex items-center space-x-5 text-green-600">
                  <h3>Sign In</h3>
                  <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
                  
                  </div>
          </header>
      )
  }
  
  export default Header
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3832 = () => {
  const test = `
  import type { NextPage } from 'next'
  import Head from 'next/head'
  import Image from 'next/image'
  import Header from "../components/Header";
  const Home: NextPage = () => {
    return (
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
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


const Tutorial3841 = () => {
  const test = `
    <div className='flex justity-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
    <div className='px-10 space-y-5'>
      <h1 className='text-6xl max-w-xl font-serif'>
        <span className='underline decoration-black decoration-4'>Medium</span> is a place to write, read, and connect
      </h1>
      <h2>
        It's easy and free to post your thinking on any topic and connect with millions of readers.
      </h2>
    </div>
    <img className='hidden md:inline-flex h-32 lg:h-full' src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
  </div>
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial3851 = () => {
  const test = `
  sanity start
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3852 = () => {
  const test = `
  npm i next-sanity
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3853 = () => {
  const test = `
  *[_type == "post"]{
      _id,
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};





const Tutorial3854 = () => {
  const test = `
  import {
      createImageUrlBuilder,
      createCurrentUserHook,
      createClient,
  } from "next-sanity";
  
  export const config = {
      /**
       * Find your project ID and dataset in ’sanity.json’ in your studio project.
       * These are considered “public”, but you can use environment variables
       * if you want differ between local dev and production.
       *
       * https://nextjs.org/docs/basic-features/environment-variables
       **/
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
      /**
       * Set useCdn to ’false’ if your application require the freshest possible
       * data always (potentially slightly slower and a bit more expensive).
       * Authenticated request (like preview) will always bypass the CDN
       **/
      useCdn: process.env.NODE_ENV === 'production',
    }
  
    // Set up the client for fetching data in the getProps page functions
  export const sanityClient = createClient(config)
  
  /**
   * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
   * Read more: https://www.sanity.io/docs/image-url
   **/
   export const urlFor = (source) => createImageUrlBuilder(config).image(source)
  
   // Helper function for using the current logged in user account
  export const useCurrentUser = createCurrentUserHook(config)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3855 = () => {
  const test = `
  NEXT_PUBLIC_SANITY_DATASET=production
  NEXT_PUBLIC_SANITY_PROJECT_ID=f545ruvs
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3856 = () => {
  const test = `
import {sanityClient,urlFor} from "../../sanity";


export const getServerSideProps = async ()=>{
  const query = 
  '*[_type == "post"]{
      _id,
      title,
      author->{
      name,
      image
    },
    description,
    mainImage,
    slug
  };

  const posts = await sanityClient.fetch(query);

  return {
      props:{
        posts,
      },
    };
};
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3857 = () => {
  const test = `
  {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3858 = () => {
  const test = `
  *[_type == "post"]{
      _id,
      title,
      author->{
      name,
      image
    },
    description,
    mainImage,
    slug
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial3859 = () => {
  const test = `
  export interface Post{
      _id: string;
      _createAt: string;
      title: string;
      author: {
          name: string;
          image: string;
      };
      description: string;
      mainImage:{
          asset:{
              url: string;
          };
      };
      slug:{
          current: string;
      };
      body: [object];
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial38510 = () => {
  const test = `
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6"> 
  {posts.map((post) => ( 
    <Link key={post._id} href={'/post/＄{post.slug.current}'}> 
      <div className="border rounded-lg group cursor-pointer overflow-hidden"> 
        <img 
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
          src={urlFor(post.mainImage).url()!} 
          alt="" 
        /> 
        <div className="flex justify-between p-5 bg-white"> 
          <div> 
            <p className="text-lg font-bold">{post.title}</p> 
            <p className="text-xs"> 
              {post.description} by {post.author.name} 
            </p> 
          </div> 
          <img 
            className="h-12 w-12 rounded-full" 
            src={urlFor(post.author.image).url()!} 
            alt="" 
          /> 
        </div> 
      </div> 
    </Link> 
  ))} 
</div> 
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial38511 = () => {
  const test = `
  import Head from "next/head"; 
  import Link from "next/link"; 
  import Header from "../components/Header"; 
  import { sanityClient, urlFor } from "../sanity"; 
  import { Post } from "../typings"; 
  interface Props { 
    posts: [Post]; 
  } 
  export default function Home({ posts }: Props) { 
    return ( 
      <div className="max-w-7xl mx-auto"> 
        <Head> 
          <title>Medium Blog</title> 
          <link rel="icon" href="/favicon.ico" /> 
        </Head> 
        <Header /> 
        <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0"> 
          <div className="px-10 space-y-5"> 
            <h1 className="text-6xl max-w-xl font-serif"> 
              <span className="underline decoration-black decoration-4"> 
                Medium 
              </span>{" "} 
              is a place to write, read, and connect 
            </h1> 
            <h2> 
              It's easy and free to post your thinking on any topic and connect 
              with millions of readers. 
            </h2> 
          </div> 
          <img 
            className="hidden md:inline-flex h-32 lg:h-full" 
            src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" 
            alt="" 
          /> 
        </div> 
        {/* Posts */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6"> 
          {posts.map((post) => ( 
            <Link key={post._id} href={'/post/＄{post.slug.current}'}> 
              <div className="border rounded-lg group cursor-pointer overflow-hidden"> 
                <img 
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
                  src={urlFor(post.mainImage).url()!} 
                  alt="" 
                /> 
                <div className="flex justify-between p-5 bg-white"> 
                  <div> 
                    <p className="text-lg font-bold">{post.title}</p> 
                    <p className="text-xs"> 
                      {post.description} by {post.author.name} 
                    </p> 
                  </div> 
                  <img 
                    className="h-12 w-12 rounded-full" 
                    src={urlFor(post.author.image).url()!} 
                    alt="" 
                  /> 
                </div> 
              </div> 
            </Link> 
          ))} 
        </div> 
      </div> 
    ); 
  } 
  export const getServerSideProps = async () => { 
    const query = '*[_type == "post"]{ 
      _id, 
      title, 
      author-> { 
        name, 
        image 
    }, 
      description, 
      mainImage, 
      slug 
    }'; 
    const posts = await sanityClient.fetch(query); 
    return { 
      props: { 
        posts, 
      }, 
    }; 
  };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3861 = () => {
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


const Tutorial3871 = () => {
  const test = `
  from rest_framework import serializers
  from .models import Post
  
  
  class PostSerializer(serializers.ModelSerializer):
      created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
  
      class Meta:
          model = Post
          fields = ('id', 'title', 'image', 'content', 'created_at')
  
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1681 = () => {
  const test = `
  from rest_framework import generics
  from .serializers import PostSerializer
  from .models import Post
  
  
  class PostView(generics.ListAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
  
  
  class PostDetailView(generics.RetrieveAPIView):
      queryset = Post.objects.all()
      serializer_class = PostSerializer
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1691 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1692 = () => {
  const test = `
  {
      "id": 1,
      "title": "xxxxxxx",
      "image": "http://127.0.0.1:8000/media/images/xxxx.png",
      "content": "xxxxxxxxxxxxxxxxxxxxxxx",
      "created_at": "2021-03-31 18:17"
      }
      
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};