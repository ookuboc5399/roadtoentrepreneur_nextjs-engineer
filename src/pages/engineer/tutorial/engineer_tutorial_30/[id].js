import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_30 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_30>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/dBotWYKYYWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
              </Layout_tutorial_30>
                ) : id == 2 ? (
                  <Layout_tutorial_30>
                  <h3>準備 </h3>
                  <p>Linux環境でプロジェクトを作成します</p>
                  <p></p>
                  <p></p>
      
                  <Tutorial3021 />
                  
                  <p>Homemodule.cssを削除 </p>
                  <h3>TailwindCSS導入</h3>
                  <Tutorial3022 />
                  <p>初期化</p>
      
                  <Tutorial2323 />
                  <p className='text-red-400'>tailwind.config.js</p>
                  <Tutorial2324 />
                  <p className='text-red-400'>globals.css</p>
                  <Tutorial2325 />
                  <p>index.jsの中身を変更する</p>
                  <p className='text-red-400'>index.js</p>
                  <Tutorial2326 />
                  <p></p>
              </Layout_tutorial_30>
                ) : id == 3 ? (
                  <Layout_tutorial_30>
                  <h3>ヘッダー作成</h3>
                  <p>componentsフォルダを作成し、その中にHeader.jsファイルを作ります。</p>
                  <p>rfceでreactコンポーネントを作成 </p>
                  <p className='text-red-400'>components/Header.tsx</p>
                  <Tutorial3031/>
                  <p>index.tsxにHeaderコンポーネントを読み込ませておきます</p>
                  <p>ヘッダーはLeft,Center,Rightの3つに分けます</p>
                  <h4>next.config.js変更</h4>
                  <Tutorial3032/>
                  <p>サーバーを再起動</p>
                  <h4>heroiconsインストール</h4>
                  <p> Facebookrのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
                  <p>下記コマンドでインストールします</p>
                    <Tutorial3033/>
                    <h4>Left</h4>
                          <Tutorial3034/>
                    <h4>Center</h4>
                    <p>HeaderIcon.jsを作成</p>
                    <Tutorial3035/>
                    <h4>Right</h4>
                    <Tutorial3036/>
              </Layout_tutorial_30>
                ) : id == 4 ? (
                  <Layout_tutorial_30>
                  <h3>Sidebar.js作成</h3>
                    <p>componentsフォルダを作成し、その中にSidebar.tsxファイルを作ります。</p>
                    <p>rafceでreactコンポーネントを作成 </p>
                    <p className='text-red-400'>components/Sidebar.js</p>
                  
                    <p> Twitterのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
                    <p>下記コマンドでインストールします</p>
                   
                 
                    <h3>アイコンの表示</h3>
                    <p className='text-red-400'>components/Sidebar.js</p>
               
                    
                    
                    <p>SidebarRow.tsxファイルを作成</p>
                    <p className='text-red-400'>components/SidebarRow.js</p> 
                        
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
                  
                    <h4>tailwind.config.js</h4>
                    <p>マウスをhoverした時にテキストがtwitterと同じ色に設定できます</p>
                    <p className='text-red-400'>tailwind.config.js</p>
        
                    
                    
                </Layout_tutorial_30>
                ) : id == 5 ? (
                  <Layout_tutorial_30>
                  <h3>Post作成</h3>
                  <p>新しくターミナルを開きます </p>
                  <p>sanityyoutubeフォルダに移動しsanity start </p>
                  <p className='text-red-400'>components/Widgets.tsx</p>
                  <p>新しくターミナルを開きます </p>
                  <Tutorial3851 />
                  
                  <p>VISIONのQueryに以下のコマンドを入力すると情報を受け取ることが出来る </p>
                  <Tutorial3853 />
                  <p>sanity.jsを作成する </p>
                  <p>新しくターミナルを開きます </p>
                 
                  <Tutorial3852 />
                  <p className='text-red-400'>sanity.js</p>
                  <Tutorial3854 />
                  <p>.env.localファイルの作成 </p>
                  <p>sanityyoutubeの中にあるsanity.jsonの情報を </p>
                  <Tutorial3855 />
                  <p>環境ファイルを適用させるためには一度立ち上げたサーバーを再起動しなければならない </p>
                  <h4>Desccriptionを追加</h4>
                  <p className='text-red-400'>schemas/post.js</p>
               
                  <Tutorial3857 />
                  <h4>APIの確認</h4>
                  <p> ブログの情報がフェッチ出来ているか確認</p>
                  <Tutorial3858 />
                  <h4>index.tsx修正</h4>
                  <p className='text-red-400'>index.tsx</p>
                  <Tutorial3856 />
                  <h4>typings.d.ts</h4>
                  <p className='text-red-400'>typings.d.ts</p>
                  <Tutorial3859 />
                  <h4>ブログ記事の表示</h4>
                  <p className='text-red-400'>index.tsx</p>
                  <Tutorial38510 />
              </Layout_tutorial_30>
                ) : id == 6 ? (
                  <Layout_tutorial_30>
                  <h3>詳細ページ</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                   <h4>SideBar.tsx</h4>
                  <p className='text-red-400'>components/SideBar.tsx</p>
                  <Tutorial3861 />
                
              </Layout_tutorial_30>
                ) : id == 7 ? (
                  <Layout_tutorial_30>
                  <h3>コンタクトフォーム作成</h3>
                  <p></p>
                  <p className='text-red-400'>[slug].tsx</p>
                  <Tutorial3871 />
                  <h4>React Hook formのインストール</h4>
      
                  <p></p>
      
                  </Layout_tutorial_30>
                ) : id == 8 ? (
                  <Layout_tutorial_30>
                  <h3>Views追加</h3>
                  <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                  <p>それを継承することで、簡単に開発をすることができます </p>
      
                  <p className='text-red-400'>app/views.py</p>
                  <Tutorial1681 />
                  <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
                  <p>公式ドキュメント - Generic views </p>
                  </Layout_tutorial_30>
                ) : id == 9 ? (
                  <Layout_tutorial_30>
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
                  </Layout_tutorial_30>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial3021 = () => {
  const test = `
  npx create-next-app fbclone-yt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial3022 = () => {
  const test = `
  npm install -D tailwindcss postcss autoprefixer
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2323 = () => {
  const test = `
npx tailwindcss init -p
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2324 = () => {
  const test = `
  module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
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

const Tutorial2325 = () => {
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

const Tutorial2326 = () => {
  const test = `
  import Head from 'next/head'
  import Header from '../components/Header'
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>Facebook</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
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


const Tutorial3031 = () => {
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



const Tutorial3032 = () => {
  const test = `
  module.exports = {
    images: {
      domains: [
        "links.papareact.com",
        "platform-lookaside.fbsbx.com",
        "firebasestorage.googleapis.com",
      ],
    },
  };
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial3033 = () => {
const test = `
npm add @heroicons/react  
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};



const Tutorial3034 = () => {
const test = `
<div className='flex items-center'>
              <Image
                  src="https://links.papareact.com/5me"
                  width="40"
                  height="40"
                  layout="fixed"
              />
              <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                  <SearchIcon className='h-6 text-gray-600' />
                  <input className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder='Search Facebook' />
              </div>
          </div>
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial3035 = () => {
const test = `
npm add @heroicons/react  
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial3036 = () => {
const test = `
npm add @heroicons/react  
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
