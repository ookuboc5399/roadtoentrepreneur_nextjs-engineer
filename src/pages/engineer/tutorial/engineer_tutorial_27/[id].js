import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_27 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_27>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BbilqOBOfg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_27>
        ) : id == 2 ? (
          <Layout_tutorial_27>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <p>下記のコードでtailwindcssの設定がされたプロジェクトが作成されます。</p>
            <p></p>

            <Tutorial2721 />
            <p>index.jsの中身を変更する</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial2722 />
            <p>サーバーを立ち上げて表示を確認しましょう</p>
          </Layout_tutorial_27>
        ) : id == 3 ? (
          <Layout_tutorial_27>
            <h3>ヘッダー作成</h3>
            <p>componentsフォルダを作成し、その中にHeader.jsファイルを作ります。</p>
            <p>rfceでreactコンポーネントを作成 </p>
            <p className='text-red-400'>components/Header.js</p>
            <Tutorial2731 />
            <p>index.jsにHeaderコンポーネントを読み込ませておきます</p>
            <p>ヘッダーはLeft,Center,Rightの3つに分けます</p>
            <h4>next.config.js変更</h4>
            <Tutorial2732 />
            <p>サーバーを再起動</p>
            <h4>heroiconsインストール</h4>
            <p> Facebookrのサイドバーで使われているアイコンを実現するためにheroiconsを使用します</p>
            <p>ver1.0をインストールしてください。ver2.0だとエラーが出ます。</p>
            <p>下記コマンドでインストールします</p>
            <Tutorial2733 />
            <h4>Left</h4>
            <p></p>
            <p></p>
            <Tutorial2734 />
            <h4>Center</h4>
            <p></p>
            <p></p>
            <Tutorial2735 />
            <h4>Right</h4>
            <p></p>
            <p></p>
            <Tutorial2736 />
          </Layout_tutorial_27>
        ) : id == 4 ? (
          <Layout_tutorial_27>
            <h3>Banner.js作成</h3>
            <p>componentsフォルダにBanner.jsファイルを作ります。</p>
            <p>rafceでreactコンポーネントを作成 </p>
            <p className='text-red-400'>components/Banner.js</p>
            <Tutorial2741 />
            <p>index.jsにBannerコンポーネントを読み込ませておきます</p>
            <p>ボタンを押した際に縮小するようにactive:scale-90、その動きをゆっくりにするためにtransition duration-150</p>
          </Layout_tutorial_27>
        ) : id == 5 ? (
          <Layout_tutorial_27>
            <div className='flex'>
              <div className='mr-4'>

                <h3>Explore Nearbyセクション</h3>
                <p>左右に余白を作り、中央に要素を表示させるためにmainに以下のCSSを適用 </p>
                <Tutorial2751 />
                <p className='text-red-400'>index.js</p>
                <h4>getStaticProps</h4>
                <p>https://links.papareact.com/pypにはJSON形式のデータ </p>
                <p>exploreDataにJSON形式のデータを格納しpropsで</p>
                <p>Serverからjsonファイルを取ってくる。exploreDataをpropsとして使うことができる。                    </p>

                <h4>SmallCard作成</h4>

                <p>jsonファイルに格納されているimg,distance,locationをmap関数で取り出してSmallCardコンポーネントで表示。</p>
                <p className='text-red-400'>index.js</p>
                <Tutorial2752 />
                <p>index.jsからSmallCard.jsにpropsでデータを渡す</p>
                <p className='text-red-400'>components/SmallCard.js</p>
                <Tutorial2753 />


              </div>
              <div>
                <p className='text-red-400'>index.js</p>
                <Tutorial2759 />
                <p className='text-red-400'>index.js</p>
                <Tutorial27510 />
                <p className='text-red-400'>components/SmallCard.js</p>
                <Tutorial27511 />
              </div>
            </div>
          </Layout_tutorial_27>
        ) : id == 6 ? (
          <Layout_tutorial_27>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>Live Anywhereセクション</h3>
                <h4>getStaticProps</h4>
                <p>https://links.papareact.com/zp1にはJSON形式のデータ </p>
                <p>cardsDataにJSON形式のデータを格納しpropsで</p>
                <p>Serverからjsonファイルを取ってくる。cardsDataをpropsとして使うことができる。                    </p>
                <p className='text-red-400'>index.js</p>
                <Tutorial2761 />


                <h4>SmallCard作成</h4>

                <p>jsonファイルに格納されているimg,distance,locationをmap関数で取り出してSmallCardコンポーネントで表示。</p>
                <p>scrillbarをインストールします。</p>
                <Tutorial2764 />
                <p>scrillbarをtailwind.config.jsのpluginsに設定します。</p>
                <Tutorial2765 />
                <p className='text-red-400'>index.js</p>
                <Tutorial2762 />
                <p>index.jsからMediumCard.jsにpropsでデータを渡す</p>
                <p className='text-red-400'>components/MediumCard.js</p>
                <Tutorial2763 />


              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>index.js</p>
                <Tutorial2769 />
                <p className='text-red-400'>index.js</p>
                <Tutorial27610 />
                <p className='text-red-400'>components/MediumCard.js</p>
                <Tutorial27611 />
              </div>
            </div>

          </Layout_tutorial_27>
        ) : id == 7 ? (
          <Layout_tutorial_27>
            <div className='flex'>
              <div className='mr-4 w-1/2'>

                <h3>LargeCard.js</h3>
                <p>LargeCard.jsにimg、title、description、butonTextを渡しています。</p>
                <p className='text-red-400'>index.js</p>
                <Tutorial2771 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>LargeCard.js</p>
                <Tutorial2779 />
                <p className='text-red-400'>index.js</p>
                {/* <Tutorial27610 /> */}
                <p className='text-red-400'>components/MediumCard.js</p>
                {/* <Tutorial27611 /> */}
              </div>
            </div>
          </Layout_tutorial_27>
        ) : id == 8 ? (
          <Layout_tutorial_27>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Footer.js</h3>
                <p>LargeCard.jsにimg、title、description、butonTextを渡しています。</p>
                <p className='text-red-400'>index.js</p>
                <Tutorial2781 />
              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>LargeCard.js</p>
                <Tutorial2789 />
                <p className='text-red-400'>index.js</p>
                {/* <Tutorial27610 /> */}
                <p className='text-red-400'>components/MediumCard.js</p>
                {/* <Tutorial27611 /> */}
              </div>
            </div>
          </Layout_tutorial_27>
        ) : id == 9 ? (
          <Layout_tutorial_27>
            <h3>API確認</h3>

            <h4>カレンダー実装</h4>
            <p>カレンダーを実装します。 </p>
            <p>https://github.com/hypeserver/react-date-range</p>
            <Tutorial2791 />
            <h4>詳細 </h4>
            <p>http://127.0.0.1:8000/api/post/1/</p>
            <p>Json</p>
            <p>API をコールすると、下記のような Json 形式でデータを取得することになります。</p>
            <Tutorial1692 />
            <p>フロントエンドからのリクエスト</p>
            <p>フロントエンドから GET、PUT、PUT/PATCH、DELETE などのメソッドを使うことで、データの取得や作成、更新、削除が用意になり、設計がしやすくなります。 </p>
            <p>ぜひ API を活用した設計にしてみましょう。</p>
            <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
          </Layout_tutorial_27>
        ) : id == 10 ? (
          <Layout_tutorial_27>
            <h3>Search.js作成</h3>

            <h4>カレンダー実装</h4>
            <p>カレンダーを実装します。 </p>
            <p>https://github.com/hypeserver/react-date-range</p>
            <Tutorial27101 />
            <h4>共通のCSSを適用</h4>
            <p>それぞれのpタグに対して共通のCSSを適用させたいときには、global.css修正します。</p>
            <p className='text-red-400'>search.js</p>
            <Tutorial27102 />
            <p></p>
            <p>_app.jsにglobal.cssがインポートされているか確認しておきましょう。</p>
            <p className='text-red-400'>global.css</p>
            <Tutorial27103 />
            <h4>airbnbロゴ</h4>
            <p>airbnbロゴをクリックしたときにホームに戻るようにrouterを設定。</p>
            <p className='text-red-400'>Header.js</p>
            <Tutorial27106 />
            <p className='text-red-400'>Header.js</p>
            <Tutorial27107 />
            <h4>Searchボタン</h4>
            <p>Searchボタンを押したときにsearch.jsに遷移するようにします。
              <Tutorial27104 />
            </p>
            <p>下記のように記述することでsearch.jsにqueryとして値を渡すことができます。</p>
            <Tutorial27105 />
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">日付を文字列に変換する</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/07/13/%e6%97%a5%e4%bb%98%e3%82%92%e6%96%87%e5%ad%97%e5%88%97%e3%81%ab%e5%a4%89%e6%8f%9b%e3%81%99%e3%82%8b/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <p>Searchボタンを押してsearch.jsに遷移した時のURLを確認するとlocationやDateの情報が渡されて理うことが分かります。</p>
            <p>localhost:3000/search?location=London&startDate=2022-07-12T15%3A00%3A00.000Z&endDate=2022-07-20T15%3A00%3A00.000Z&noOfGuests=3</p>
            <h4>location、の反映</h4>
            <p>計がしやすくなります。 </p>
            <Tutorial27108 />
            <h4>日付のフォーマット</h4>
            <p>ぜひ API を活用した設計にしてみましょう。</p>
            <Tutorial27109 />
            <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
          </Layout_tutorial_27>
        ) : id == 11 ? (
          <Layout_tutorial_27>
            <p className='text-red-400'>search.js</p>
            <Tutorial27111 />
            <p></p>
            <p>_app.jsにglobal.cssがインポートされているか確認しておきましょう。</p>
            <p className='text-red-400'>global.css</p>
            <Tutorial27103 />
            <h4>InfoCard.js作成</h4>
            <p>search.jsから。</p>
            <p className='text-red-400'>Header.js</p>
            <Tutorial27106 />
            <p className='text-red-400'>Header.js</p>
            <Tutorial27107 />
            <h4>Searchボタン</h4>
            <p>Searchボタンを押したときにsearch.jsに遷移するようにします。
              <Tutorial27104 />
            </p>
            <p>下記のように記述することでsearch.jsにqueryとして値を渡すことができます。</p>
            <Tutorial27105 />
            <div class="flex flex-nowrap">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                <a href="#">
                  <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">日付を文字列に変換する</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="http://www.agile-software.site/2022/07/13/%e6%97%a5%e4%bb%98%e3%82%92%e6%96%87%e5%ad%97%e5%88%97%e3%81%ab%e5%a4%89%e6%8f%9b%e3%81%99%e3%82%8b/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    記事を読む
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <p>Searchボタンを押してsearch.jsに遷移した時のURLを確認するとlocationやDateの情報が渡されて理うことが分かります。</p>
            <p>localhost:3000/search?location=London&startDate=2022-07-12T15%3A00%3A00.000Z&endDate=2022-07-20T15%3A00%3A00.000Z&noOfGuests=3</p>
            <h4>location、の反映</h4>
            <p>計がしやすくなります。 </p>
            <Tutorial27108 />
            <h4>日付のフォーマット</h4>
            <p>ぜひ API を活用した設計にしてみましょう。</p>
            <Tutorial27109 />
            <p>次は Next.js を構築して、Django で構築した API をコールしていきます。</p>
          </Layout_tutorial_27>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2721 = () => {
  const test = `
  npx create-next-app -e with-tailwindcss airbnb-yt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial2722 = () => {
  const test = `
  import Head from 'next/head'
  import Header from '../components/Header'
  
  export default function Home() {
    return (
      <div>
        <Head>
          <title>airbnb</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Lets build airbnb</h1>
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


const Tutorial2731 = () => {
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



const Tutorial2732 = () => {
  const test = `
  module.exports = {
      images: {
        domains: ["links.papareact.com", "image.tmdb.org"],
      },
    };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2733 = () => {
  const test = `
npm add @heroicons/react  
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2734 = () => {
  const test = `
<div className='relative flex items-center h-10 cursor-pointer my-auto'>
  <Image
      src="https://links.papareact.com/qd3"
      layout="fill"
      objectFit="contain"
      objectPosition="left"
  />
</div>
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2735 = () => {
  const test = `
<div className='flex items-center md:border-2 rouded-full py-2 md:shadow-sm'>
  <input className='flex-grow pl-5 bg-transparent outline-none' type='text' placeholder="Start your search" />
  <SearchIcon className="h-8 hidden md:inline-flex p-2 mx-auto cursor-pointer md:mx-2 bg-red-400 rounded-full text-white" />
</div>
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2736 = () => {
  const test = `
  <div className='flex items-center space-x-4 justify-end text-gray-500'>
      <p className='cursor-pointer hidden md:inline'>Become a host</p>
      <GlobeAltIcon className='h-6 cursor-pointer hidden sm:inline'/>
      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer'/>
      </div>
  </div> 
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2741 = () => {
  const test = `
<div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
  <Image
      src="https://links.papareact.com/0fm"
      layout="fill"
      objectFit="cover"
  />
  <div className='absolute top-1/2 w-full text-center'>
      <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
      <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 active:scale-90 transition duration-150'>I'm flexible</button>
  </div>
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2751 = () => {
  const test = `
  mx-auto px-8 sm:px-16 max-w-7xl
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2752 = () => {
  const test = `
  {exploreData.map(({ img, distance, location }) => (
      <SmallCard
        key={img}
        img={img}
        distance={distance}
        location={location}
      />
    ))}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2753 = () => {
  const test = `
  function SmallCard({ img, location, distance }) {
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};




const Tutorial2759 = () => {
  const test = `
<main className="mx-auto px-8 sm:px-16 max-w-7xl">
  <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {exploreData.map(({ img, distance, location }) => (
          <SmallCard
          key={img}
          img={img}
          distance={distance}
          location={location}
          />
      ))}
      </div>
  </section>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27510 = () => {
  const test = `
  export async function getStaticProps() {
      const exploreData = await fetch("https://links.papareact.com/pyp").then(
        (res) => res.json()
      );
    
      return {
        props: {
          exploreData,
        },
      };
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27511 = () => {
  const test = `
  import Image from "next/image";

  function SmallCard({ img, location, distance }) {
    return (
      <div className="flex items-center m-2 space-x-4 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-16 w-16">
          <Image src={img} layout="fill" className="rounded-lg" />
        </div>
        <div>
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
        </div>
      </div>
    );
  }
  
  export default SmallCard;
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2761 = () => {
  const test = `
const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
  res.json()
);

return {
  props: {
    exploreData,
    cardsData,
  },
};
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2762 = () => {
  const test = `
<section>
  <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

  <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
    {cardsData.map(({ img, title }) => (
      <MediumCard key={img} img={img} title={title} />
    ))}
  </div>
</section>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2763 = () => {
  const test = `
  function MediumCard({ img, title }) {
      return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
          <div className="relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl" />
          </div>
          <h3 className="text-2xl mt-3">{title}</h3>
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

const Tutorial2764 = () => {
  const test = `
  npm i tailwind-scrollbar-hide
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2765 = () => {
  const test = `
  module.exports = {
      mode: "jit",
      purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
      darkMode: false, // or 'media' or 'class'
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [require("tailwind-scrollbar-hide")],
    };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2769 = () => {
  const test = `
<section>
  <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

  <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
    {cardsData.map(({ img, title }) => (
      <MediumCard key={img} img={img} title={title} />
    ))}
  </div>
</section>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27610 = () => {
  const test = `
  export async function getStaticProps() {
      const exploreData = await fetch("https://links.papareact.com/pyp").then(
        (res) => res.json()
      );
    
      const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
        res.json()
      );
    
      return {
        props: {
          exploreData,
          cardsData,
        },
      };
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27611 = () => {
  const test = `
  <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2771 = () => {
  const test = `
<LargeCard
  img="https://links.papareact.com/4cj"
  title="The Greatest Outdoors"
  description="Wishlists curated by Airbnb."
  buttonText="Get Inspired"
/>    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2779 = () => {
  const test = `
  import Image from "next/image";

  function LargeCard({ img, title, description, buttonText }) {
    return (
      <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
          <Image
            src={img}
            layout="fill"
            className="rounded-2xl"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{description}</p>
  
          <button className="text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-5">
            {buttonText}
          </button>
        </div>
      </section>
    );
  }
  
  export default LargeCard;
     
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2781 = () => {
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

const Tutorial2789 = () => {
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


const Tutorial2791 = () => {
  const test = `
  npm install --save react-date-range
  
  npm install --save react date-fns
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


const Tutorial27101 = () => {
  const test = `
  npm install --save react-date-range
  
  npm install --save react date-fns
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27102 = () => {
  const test = `
  <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      <p className="button">Cancellation Flexibility</p>
      <p className="button">Type of place</p>
      <p className="button">Price</p>
      <p className="button">Rooms and Beds</p>
      <p className="button">More filters</p>
  </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27103 = () => {
  const test = `
  @tailwind components;
  @tailwind base;
  @tailwind utilities;
  @layer components {
    .button {
      @apply px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out;
    }
  }    
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27104 = () => {
  const test = `
<button onClick={search} className="flex-grow text-red-400">
  Search
</button> 
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27105 = () => {
  const test = `
  function search() {
      if (!searchInput) return;
  
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        },
      });
  
      setSearchInput("");
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27106 = () => {
  const test = `
  import { useRouter } from "next/dist/client/router";

  const router = useRouter();
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27107 = () => {
  const test = `
  <div
      onClick={() => router.push("/")}
      className="relative flex items-center h-10 my-auto cursor-pointer"
  >
      <Image
      src="https://links.papareact.com/qd3"
      layout="fill"
      objectFit="contain"
      objectPosition="left"
      />
  </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27108 = () => {
  const test = `
  <h1 className="text-3xl font-semibold mt-2 mb-6">
      Stays in {location}
  </h1>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27109 = () => {
  const test = `
  import { format } from "date-fns";

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = '＄{formattedStartDate} - ＄{formattedEndDate}';
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial27111 = () => {
  const test = `
  export async function getServerSideProps() {
      const searchResults = await fetch("https://links.papareact.com/isz").then(
        (res) => res.json()
      );
    
      return {
        props: {
          searchResults,
        },
      };
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial27112 = () => {
  const test = `
  <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      <p className="button">Cancellation Flexibility</p>
      <p className="button">Type of place</p>
      <p className="button">Price</p>
      <p className="button">Rooms and Beds</p>
      <p className="button">More filters</p>
  </div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

