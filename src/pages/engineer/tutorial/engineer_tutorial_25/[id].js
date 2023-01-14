import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_25 } from '../../../../components/layout/engineer/tutorial';
import { JWT, Nextauth, Recoil } from '../../../../components/Blog_comp';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_25>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3xrko3GpYoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_25>
        ) : id == 2 ? (
          <Layout_tutorial_25>
            <h3>準備 </h3>
            <p>Linux環境でプロジェクトを作成します</p>
            <Tutorial2521 />
            <p></p>
            <p></p>
            <h4>APIキーの発行</h4>
            <p>Spotify for DevelopersでAPIキーを発行します</p>

            <p>index.jsの中身を変更する</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial2522 />
            <p>サーバーを立ち上げて表示を確認しましょう</p>
          </Layout_tutorial_25>
        ) : id == 3 ? (
          <Layout_tutorial_25>
            <div className='flex'>
              <div className=''>
                <h3>Sidebar.js作成</h3>
                <p>componentsフォルダを作成し、その中にSidebar.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <p>水平線を作成</p>
                <p className='text-red-400'>components/Sidebar.js</p>
                <Tutorial2531 />
                <p>index.jsにSidebarコンポーネントを読み込ませておきます</p>
                <h4>heroiconsインストール</h4>
                <p>アイコンを実現するためにheroiconsを使用します</p>
                <p>下記コマンドでインストールします</p>
                <Tutorial2532 />
                <h4></h4>
                <p></p>
                <p className='text-red-400'>index.js</p>
                <Tutorial2533 />
                {/* <h4>SmallCard作成</h4>
                <p></p>
                <p>jsonファイルに格納されているimg,distance,locationをmap関数で取り出してSmallCardコンポーネントで表示。</p>
                <p>scrillbarをインストールします。</p>
                <Tutorial2534 />
                <p>scrillbarをtailwind.config.jsのpluginsに設定します。</p>

                <p className='text-red-400'>index.js</p>

                <p>index.jsからMediumCard.jsにpropsでデータを渡す</p>
                <p className='text-red-400'>components/MediumCard.js</p> */}



              </div>
            </div>
          </Layout_tutorial_25>
        ) : id == 4 ? (
          <Layout_tutorial_25>
            <div className='flex'>
              <div className=''>
                <h3>ログインページ作成</h3>
                <h4>Nextauth</h4>
                <p>pagesフォルダにlogin.jsファイルを作ります。</p>
                <p>rfceでreactコンポーネントを作成 </p>
                <h4>Nextauthのインポート</h4>
                <Tutorial2540 />
                <div className='flex'>
                  <Nextauth />
                  <JWT />
                </div>

                <p>apiフォルダの直下にauthフォルダを追加。authフォルダの直下に[...nextauth].jsを作成</p>
                <p>認証プロバイダーやセッション保存方法を指定するために必要</p>
                <p className='text-red-400'>api/auth/[...nextauth].js</p>
                <Tutorial2541 />
                <h4>.env.localファイル作成</h4>
                <p>SpotifyforDevelopersで作成したClient IDとClient Secretを入力します。</p>
                <p className='text-red-400'>.env.local</p>
                <Tutorial2542 />

                <h4>spotify-web-api-nodeインストール</h4>
                <p>spotify-web-api-nodeはnode.jsからSpotify Web APIにアクセスするためのライブラリです</p>
                <p>https://github.com/thelinmichael/spotify-web-api-nodeからインストールしましょう。</p>
                <Tutorial2544 />
                <h4>libフォルダ作成</h4>
                <p>libフォルダを作成し、spotify.jsファイルを作成します。</p>
                <p>scopesとはクエリをリストで格納。</p>
                <p className='text-red-400'>lib/spotify.js</p>
                <Tutorial2543 />
                <p>paramsはキーと値のペアを格納している。</p>
                <p className='text-red-400'>lib/spotify.js</p>
                <Tutorial2545 />
                <p>exportしたspotifyApiとLOGIN_URLはapi/auth/[...nextauth].jsで使用します。</p>
                <p className='text-red-400'>lib/spotify.js</p>
                <Tutorial2546 />
                <h4>ログイン時のcallbacks設定</h4>
                <p>始めてログインした時はします。</p>
                <p>2回目にログインした時にトークンが失効していなかった場合はトークンを返し、失効していた場合はトークンを新しくします。</p>
                <p className='text-red-400'>api/auth/[...nextauth].js</p>
                <Tutorial2547 />
                <p>Access tokenの期限が切れていた場合、更新するrefresh tokenを取得するためのrefreshAccessToken関数を作成。</p>
                <p className='text-red-400'>api/auth/[...nextauth].js</p>
                <Tutorial2548 />
                <h4></h4>
                <p>。</p>
                <p className='text-red-400'>login.js</p>
                <Tutorial25415 />
                <h4>Redirect URIs</h4>
                <p>SpotifyforDevelopersでRedirect URIsにhttp://localhost:3000/api/auth/callback/spotifyとを入力します。</p>
                <h4>_app.js</h4>
                <p>SessionProviderでComponentを囲みます。</p>
                <p className='text-red-400'>_app.js</p>
                <Tutorial25413 />
                <h4>_middleware.js</h4>
                <p>/pagesディレクトリ直下に_middleware.jsファイルを配置した場合、/pagesディレクトリ以下の全てのページでリクエスト完了前に_middleware.jsのコードが実行されます。</p>
                <p>tokenがある場合は、ない場合はloginページに遷移するように                </p>
                <p className='text-red-400'>_middleware.js</p>
                <Tutorial25414 />
              </div>

            </div>
          </Layout_tutorial_25 >
        ) : id == 5 ? (
          <Layout_tutorial_25>
            <div className='flex'>
              <div className=''>
                <h3>Center作成</h3>
                <p> </p>
                <p>index.jsにCenterコンポーネントを読み込ませておきます</p>
                <p className='text-red-400'>index.tsx</p>
                <Tutorial2552 />

                <h4>tailwind-scrollbar-hideをインストール</h4>
                <Tutorial2553 />


                <h4>headerの背景色をシャッフル</h4>
                <h4>loadashをインストール</h4>
                <p></p>
                <Tutorial2554 />
                <p>pop()は配列から最後の要素を削除し、その値を返す</p>
                <Tutorial2555 />
                <h4>ユーザー</h4>
                <p>absoluteで絶対位置に固定しています。</p>
                <p className='text-red-400'>components/Center.js</p>
                <Tutorial2556 />
                <h4>section</h4>
                <p>。</p>
                <p className='text-red-400'>components/Center.js</p>
                <Tutorial2557 />
                <p>flex-growにすると横幅いっぱいに広がる</p>
                <p className='text-red-400'>components/Center.js</p>
                <Tutorial2558 />
              </div>

            </div>
          </Layout_tutorial_25>
        ) : id == 6 ? (
          <Layout_tutorial_25>
            <h3></h3>
            <p>hooksフォルダを作成しuseSpotify.jsを作成</p>
            <p>refreshaccesstokenがerrorだった場合にsigninページに遷移する</p>
            <h4>hooks</h4>
            <p className='text-red-400'>hooks/useSpotify.js</p>
            <Tutorial2561 />
            <h4>playlistの表示</h4>
            <p className='text-red-400'>components/Sidebar.js</p>

            <p>クリックしたときにsetPlaylistIdにplaylistのidを渡す</p>
            <Tutorial2563 />
            <h4>Recoilのインストール</h4>
            <Tutorial2564 />
            <Recoil />
            <p>RecoilRootで囲みます</p>
            <p className='text-red-400'>app.js</p>
            <Tutorial2565 />
            <h4>atomsフォルダを作成</h4>
            <p>playlistAtom.jsファイルを作成</p>
            <p>playlistIdStateにdefaultで表示するplaylistを設定している</p>
            <p className='text-red-400'>atoms/playlistAtom.js</p>
            <Tutorial2566 />
            <h4></h4>
            <p>getPlaylistにplaylistIdを渡すことでdataを受け取る</p>
            <p>setPlaylistにdataのbodyを            </p>
            <p className='text-red-400'>components/Center.js</p>
            <Tutorial2567 />

          </Layout_tutorial_25>
        ) : id == 7 ? (
          <Layout_tutorial_25>
            <h4>Songs.js作成</h4>
            <p>Center.jsに追加します</p>
            <p className='text-red-400'>components/Center.js</p>
            <Tutorial2571 />
            <h4>Songs.js作成</h4>
            <p>Songコンポーネントにtrackとorderを渡します</p>
            <p className='text-red-400'>components/Songs.js</p>
            <Tutorial2572 />
            <p></p>
            <p className='text-red-400'>components/Song.js</p>
            <Tutorial2576 />
            <h4>time.js</h4>
            <p className='text-red-400'>lib/time.js</p>
            <Tutorial2573 />
            <p className='text-red-400'>components/Song.js</p>
            <Tutorial2577 />
            <p></p>
            <h4>songAtom</h4>
            <p className='text-red-400'>atom/songAtom.js</p>
            <Tutorial2574 />
            <p></p>
            <p className='text-red-400'>components/Song.js</p>
            <Tutorial2575 />

          </Layout_tutorial_25>
        ) : id == 8 ? (
          <Layout_tutorial_25>
             <h4>Player.js</h4>
            <p>rfceでreactコンポーネントを作成 </p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2582 />
            <p>index.jsにPlayerコンポーネントを読み込ませておきます</p>
            <p className='text-red-400'>index.js</p>
            <Tutorial2583 />
            <p>それを継承することで、簡単に開発をすることができます </p>
            <h4>useSongInfo.js</h4>
            <p className='text-red-400'>hooks/useSongInfo.js</p>
            <Tutorial2581 />
            <p>currentTrackIdは現在のid、isPlayingは現在再生されている</p>
            <p>songInfoがなかった場合にsetCurrentIdTrackにdata.body.item.idを渡す</p>
            <p>setIsPlayingにdata.body.is_playingを渡す</p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2584 />
            <p></p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2584 />
            <h4>grid left</h4>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2586 />
            <h4>独自のユーティリティクラス</h4>
            <p className='text-red-400'>styles/globals.css</p>
            <Tutorial2587 />
            <h4>grid center</h4>
            <p>再生中はpauseボタンを表示し停止中はplayボタンを表示する            </p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2588 />
            <p>もしdata.body.is_playingだった場合はsetIsPlayingをfalse、is_playingではなかった場合はsetIsPlayingをtrueにする</p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial2589 />
            <h4>grid right</h4>
            <p>VolumeDownアイコンをクリックしたときはvolumeの値から10引きます。反対にVolumeUpアイコンをクリックしたときはvolumeの値から10引きます</p>
            <p className='text-red-400'>components/Player.js</p>
            <Tutorial25810 />
          </Layout_tutorial_25>
        ) : id == 9 ? (
          <Layout_tutorial_25>

          </Layout_tutorial_25>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial2521 = () => {
  const test = `
    npx create-next-app -e with-tailwindcss spotify-2-yt
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2522 = () => {
  const test = `
    import Head from 'next/head'
    import Header from '../components/Header'
    
    export default function Home() {
      return (
        <div>
          <Head>
            <title>Spotify 2.0</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>Lets build Spotify 2.0</h1>
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


const Tutorial2531 = () => {
  const test = `
  <hr className="border-t-[0.1px] border-gray-900" />
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2532 = () => {
  const test = `
npm i @heroicons/react
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2533 = () => {
  const test = `
  <div className="bg-black h-screen overflow-hidden">
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2534 = () => {
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


const Tutorial2539 = () => {
  const test = `
  import {
      HomeIcon,
      SearchIcon,
      LibraryIcon,
      PlusCircleIcon,
    } from "@heroicons/react/outline";

  import { HeartIcon, RssIcon } from "@heroicons/react/solid";

  function Sidebar() {
      return (
          <div className="text-gray-500 p-5 text-xs lg:text-sm overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] h-screen scrollbar-hide hidden md:inline-flex border-r border-gray-900 pb-36">
            <div className="space-y-4">
              <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5" />
                <p>Home</p>
              </button>
              <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5" />
                <p>Search</p>
              </button>
              <button className="flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5" />
                <p>Your Library</p>
              </button>
              <hr className="border-t-[0.1px] border-gray-900" />
      
              <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5 text-gray-400" />
                <p>Create Playlist</p>
              </button>
      
              <button className="flex items-center space-x-2 hover:text-white">
                <HeartIcon className="h-5 w-5 text-blue-700" />
                <p>Liked Songs</p>
              </button>
      
              <button className="flex items-center space-x-2 hover:text-white">
                <RssIcon className="h-5 w-5 text-green-700" />
                <p>Your Episodes</p>
              </button>
              <hr className="border-t-[0.1px] border-gray-900" />
      
              {playlists.map((playlist) => (
                <p
                  key={playlist.id}
                  onClick={() => setPlaylistId(playlist.id)}
                  className="cursor-pointer hover:text-white"
                >
                  {playlist.name}
                </p>
              ))}
            </div>
          </div>
        );
      }
      
      export default Sidebar;
`
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial25310 = () => {
  const test = `
  export default function Home() {
    
      return (
        <div className="bg-black h-screen overflow-hidden">
          <main className="overflow-hidden scrollbar-hide flex">
            <Sidebar />
          </main>
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


const Tutorial2540 = () => {
  const test = `
    npm i next-auth
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2541 = () => {
  const test = `
    import NextAuth from "next-auth" 
    import SpotifyProvider from "next-auth/providers/spotify" 
    export default NextAuth({ 
      // Configure one or more authentication providers 
      providers: [ 
        SpotifyProvider({ 
          clientId: process.env.NEXT_PUBLIC_CLIENT_ID, 
          clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET, 
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

const Tutorial2542 = () => {
  const test = `
    NEXTAUTH_URL=http://localhost:3000
    NEXT_PUBLIC_CLIENT_SECRET=0e65f5a4a03b440ebb068601a952f640
    NEXT_PUBLIC_CLIENT_ID=d3ee8452c4954656a2234983ce8b24f7
    JWT_SECRET=
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2543 = () => {
  const test = `
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  // "user-library-modify",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
].join(",");
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2544 = () => {
  const test = `
    npm install spotify-web-api-node
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2545 = () => {
  const test = `
  const params = {
    scope: scopes,
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2546 = () => {
  const test = `
  export default spotifyApi;

  export { LOGIN_URL };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2547 = () => {
  const test = `
  callbacks: {
    async jwt({ token, account, user }) {
      // Initial sign in...
      if (account && user) {
        return {
          //jwtが作成・更新されたときに実行する処理を記述
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // we are handling expiry times in Milliseconds hence * 1000
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING ACCESS TOKEN IS VALID");
        return token;
      }

      // Access token has expired, try to update it
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2548 = () => {
  const test = `
  async function refreshAccessToken(token) { 
    try{ 
      spotifyApi.setAccessToken(token.accessToken); 
      spotifyApi.setRefreshToken(token.refreshToken); 
      const {body:refreshedToken} = await spotifyApi.refreshAccessToken(); 
      console.log("REFRESHED TOKEN IS", refreshedToken) 
      return{ 
        ...token, 
        accessToken: refreshedToken.access_token, 
        accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, 
        refreshToken: refreshedToken.refresh_token ?? token.refreshToken, 
      } 
    } catch(error){ 
      console.log(error); 
      return { 
        ...token, 
        error: "RefreshAccessTokenError", 
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

const Tutorial2549 = () => {
  const test = `
    function Login({ providers }) {
        return (
          <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-5 bg-[#18D860] rounded-lg text-white"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Login with {provider.name}
                </button>
              </div>
            ))}
          </div>
        );
      }
      
      export default Login;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25410 = () => {
  const test = `
    function Login({ providers }) {
        return (
          <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-5 bg-[#18D860] rounded-lg text-white"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Login with {provider.name}
                </button>
              </div>
            ))}
          </div>
        );
      }
      
      export default Login;
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial25411 = () => {
  const test = `
import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
"user-read-email",
"playlist-read-private",
"playlist-read-collaborative",
"user-read-email",
"streaming",
"user-read-private",
"user-library-read",
// "user-library-modify",
"user-top-read",
"user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"user-read-recently-played",
"user-follow-read",
].join(",");

const params = {
scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL =
"https://accounts.spotify.com/authorize?" + queryParamString.toString();

const spotifyApi = new SpotifyWebApi({
clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
redirectUri: process.env.REDIRECT_URI,
});

export default spotifyApi;

export { LOGIN_URL };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25412 = () => {
  const test = `
  import NextAuth from "next-auth";
  import SpotifyProvider from "next-auth/providers/spotify";
  import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";
  
  async function refreshAccessToken(token) {
    try {
      spotifyApi.setAccessToken(token.accessToken);
      spotifyApi.setRefreshToken(token.refreshToken);
  
      const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
      console.log("REFRESHED TOKEN IS", refreshedToken);
  
      return {
        ...token,
        accessToken: refreshedToken.access_token,
        accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // = 1 hour as 3600 returns from spotify API
        refreshToken: refreshedToken.refresh_token ?? token.refreshToken, // Replace if new one came back elese fall back to old refresh token
      };
    } catch (error) {
      console.log(error);
  
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
  }
  
  export default NextAuth({
    providers: [
      SpotifyProvider({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        authorization: LOGIN_URL,
      }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
      signIn: "/login",
    },
    callbacks: {
      async jwt({ token, account, user }) {
        // Initial sign in...
        if (account && user) {
          return {
            ...token,
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            username: account.providerAccountId,
            accessTokenExpires: account.expires_at * 1000, // we are handling expiry times in Milliseconds hence * 1000
          };
        }
  
        // Return previous token if the access token has not expired yet
        if (Date.now() < token.accessTokenExpires) {
          console.log("EXISTING ACCESS TOKEN IS VALID");
          return token;
        }
  
        // Access token has expired, try to update it
        console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
        return await refreshAccessToken(token);
      },
  
      async session({ session, token }) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;
  
        return session;
      },
    },
  });
  
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial25413 = () => {
  const test = `
  function MyApp({ Component, pageProps:{session, ...pageProps} }) { 
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

const Tutorial25414 = () => {
  const test = `
  import { getToken } from "next-auth/jwt";
  import { NextResponse } from "next/server";
  
  export async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    const { pathname } = req.nextUrl;
  
    //   Allow requests if the following is true...
  
    // 1) A token exists
    if (pathname.includes("/api/auth") || token) {
      return NextResponse.next();
    }
  
    //   2) Its a request for next-auth session & provider fetching
    //   Redirect them to login if they dont have token AND are requesting a protected route
    if (!token && pathname !== "/login") {
      return NextResponse.redirect("/login");
    }
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25415 = () => {
  const test = `
  import { getProviders ,signIn} from "next-auth/react" 
  function login({providers}) { 
      return ( 
          <div> 
              <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" /> 
              {Object.values(providers).map((provider) =>( 
                  <div key={provider.name}> 
                      <button 
                      className="" 
                      onClick={() => signIn(provider.id,{callbackurl:"/"})}> 
                          Login with {provider.name} 
                      </button> 
                  </div> 
              ))} 
          </div> 
      ) 
  } 
  export default login; 
  export async function getServerSideProps() { 
      const providers = await getProviders(); 
      return { 
          props: { 
              providers, 
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


const Tutorial2551 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2552 = () => {
  const test = `
<main className='flex'> 
  <Sidebar /> 
  <Center /> 
</main>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2553 = () => {
  const test = `
  npm i tailwind-scrollbar-hide
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};





const Tutorial2554 = () => {
  const test = `
  npm i lodash
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2555 = () => {
  const test = `
  import { shuffle } from "lodash";

  const colors = [ 
    "from-indigo-500", 
    "from-blue-500", 
    "from-green-500", 
    "from-red-500", 
    "from-yellow-500", 
    "from-pink-500", 
    "from-purple-500", 
  ];
  
    const [color, setColor] = useState(null);

    useEffect(() => { 
      setColor(shuffle(colors).pop()); 
    }, [playlist]);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2556 = () => {
  const test = `
<header className="absolute top-5 right-8"> 
  <div onClick={signOut} className="flex items-center space-x-3 text-white opacity-90 rounded-full p-1 pr-2 hover:opacity-80 cursor-pointer"> 
    <img 
      className="rounded-full w-10 h-10" 
      src={session?.user.image} 
      alt="" 
    /> 
    <h2>{session?.user.name}</h2> 
    <ChevronDownIcon className="h-5 w-5" /> 
  </div> 
</header>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2557 = () => {
  const test = `
<section 
  className={'flex items-end h-80 space-x-7 bg-gradient-to-b  to-black  ＄{color} text-white p-8'} 
> 
  <img 
    src={playlist?.images?.[0]?.url} 
    className="h-44 w-44 shadow-2xl" 
  /> 
  <div> 
    <p>PLAYLIST</p> 
    <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold"> 
      {playlist?.name} 
    </h1> 
  </div> 
</section>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2558 = () => {
  const test = `
  <div className="bg-black  flex-grow col-span-full relative h-screen overflow-y-scroll scrollbar-hide">
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
const Tutorial2561 = () => {
  const test = `
  useEffect(() => { 
    if (session) { 
      if (session.error === "RefreshAccessTokenError") { 
        signIn(); 
      } 
      spotifyApi.setAccessToken(session.user.accessToken); 
    } 
  }, [session]);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial2562 = () => {
  const test = `
  useEffect(() => { 
    if (spotifyApi.getAccessToken()) { 
      spotifyApi.getUserPlaylists().then((data) => { 
        setPlaylists(data.body.items); 
      }); 
    } 
  }, [spotifyApi, session]);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2563 = () => {
  const test = `
  const [playlists, setPlaylists] = useState([]);

  {playlists.map((playlist) => ( 
    <p 
      key={playlist.id} 
      onClick={() => setPlaylistId(playlist.id)} 
      className="cursor-pointer hover:text-white" 
    > 
      {playlist.name} 
    </p> 
  ))}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2564 = () => {
  const test = `
  npm install recoil
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2565 = () => {
  const test = `
  import { RecoilRoot } from "recoil";

  <RecoilRoot> 
    <Component {...pageProps} /> 
  </RecoilRoot>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2566 = () => {
  const test = `
  import { atom } from "recoil"; 
  export const playlistState = atom({ 
    key: "playlistState", // unique ID (with respect to other atoms/selectors) 
    default: null, // default value (aka initial value) 
  }); 
  export const playlistIdState = atom({ 
    key: "playlistIdState", // unique ID (with respect to other atoms/selectors) 
    default: "4LnTQT9pZuyXG96WS9RNzU", // default value (aka initial value) 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2567 = () => {
  const test = `
  useEffect(() => { 
    spotifyApi.getPlaylist(playlistId).then( 
      function (data) { 
        console.log("Some information about this playlist", data.body); 
        setPlaylist(data.body); 
      }, 
      function (err) { 
        console.log("Something went wrong!", err); 
      } 
    ); 
  }, [spotifyApi, playlistId]);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial2571 = () => {
  const test = `
<div> 
  <Songs /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2572 = () => {
  const test = `
<div className="px-8 flex flex-col space-y-1 pb-28"> 
  {playlist?.tracks?.items.map((track, i) => ( 
    <Song key={track.track.id} track={track} order={i} /> 
  ))} 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};





const Tutorial2573 = () => {
  const test = `
  export function millisToMinutesAndSeconds(millis) { 
    const minutes = Math.floor(millis / 60000); 
    const seconds = ((millis % 60000) / 1000).toFixed(0); 
    return seconds == 60 
      ? minutes + 1 + ":00" 
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds; 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2574 = () => {
  const test = `
  import {atom} from "recoil"; 
  export const currentTrackIdState = atom({ 
      key: "currentTrackIdState", // unique ID (with respect to other atoms/selectors) 
      default: null, // default value (aka initial value) 
    }); 
     
    export const isPlayingState = atom({ 
      key: "isPlayingState", 
      default: false, 
    });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2575 = () => {
  const test = `
  import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState); 
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2576 = () => {
  const test = `
  function Song({track, order}) {
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2577 = () => {
  const test = `
  <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2578 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2581 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2582 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2583 = () => {
  const test = `
<div className="sticky bottom-0"> 
  <Player /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2584 = () => {
  const test = `
  import { currentTrackIdState,isPlayingState } from "../atoms/songAtom";

  const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const fetchCurrentSong = () => { 
    if (!songInfo) { 
      spotifyApi.getMyCurrentPlayingTrack().then((data) => { 
        console.log("Now playing:", data.body?.item); 
        setCurrentIdTrack(data.body?.item?.id); 
        spotifyApi 
          .getMyCurrentPlaybackState() 
          .then((data) => setIsPlaying(data.body?.is_playing)) 
          .catch(() => {}); 
      }); 
    } 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2585 = () => {
  const test = `
  const [volume, setVolume] = useState(50);

  useEffect(() => { 
    if (spotifyApi.getAccessToken() && !currentTrackId) { 
      fetchCurrentSong(); 
      setVolume(50); 
    } 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2586 = () => {
  const test = `
<div className="flex items-center space-x-4"> 
  <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt="" /> 
  <div> 
    <h3>{songInfo?.name}</h3> 
    <p>{songInfo?.artists?.[0].name}</p> 
  </div> 
  <HeartIcon className="hidden md:inline h-5 w-5" /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2587 = () => {
  const test = `
  @tailwind base; 
  @tailwind components; 
  @tailwind utilities; 

  @layer components { 
      .button { 
        @apply w-5 h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out; 
      } 
    }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2588 = () => {
  const test = `
  {isPlaying ? ( 
    <PauseIcon className="button w-10 h-10" onClick={handlePlayPause} /> 
  ) : ( 
    <PlayIcon onClick={handlePlayPause} className="button w-10 h-10" /> 
  )}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial2589 = () => {
  const test = `
  const handlePlayPause = () => { 
    spotifyApi.getMyCurrentPlaybackState().then((data) => { 
      if (data.body.is_playing) { 
        spotifyApi.pause(); 
        setIsPlaying(false); 
      } else { 
        spotifyApi.play(); 
        setIsPlaying(true); 
      } 
    }); 
  };
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25810 = () => {
  const test = `
  <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5"> 
  <VolumeDownIcon 
    onClick={() => volume > 0 && setVolume(volume - 10)} 
    className="button" 
  /> 
  <input 
    type="range" 
    className="w-14 md:w-28" 
    value={volume} 
    onChange={(e) => setVolume(Number(e.target.value))} 
    min={0} 
    max={100} 
  /> 
  <VolumeUpIcon 
    onClick={() => volume < 100 && setVolume(volume + 10)} 
    className="button" 
  /> 
</div>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25811 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial25812 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};