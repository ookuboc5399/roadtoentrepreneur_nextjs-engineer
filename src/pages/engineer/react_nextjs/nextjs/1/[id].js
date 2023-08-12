import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import {Nextjs_1 } from "../../../../../components/layout/engineer/engineer";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id == "nextjs_detail" ? (
        <Nextjs_1>

          <div className="border-2 border-pink-50 inline-block  h-2/4">
            <div></div>
            <div>
              <p>Nuxt.jsだとmiddlewareという機能を使うことで、ページの遷移ごとに特定の処理をはさむことができます。</p>
              <p>Next.jsで全ページで特定の処理をはさむためには、Appコンポーネント（_app.tsx）にその処理を書くことになります。</p>
              <p></p>
              <p></p>
              <p></p>

            </div>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>Next.jsの_app.tsxに全ページ共通の処理を書く</div>
            <Code1 />
            <p>useEffectの第2引数を空（[]）にすると、初回のみ（クライアントでアプリがマウントされたとき）のみ実行されます。</p>
            <p>第2引数に、propsから受け取ったrouter.pathnameを指定すると、ページの遷移ごとに実行されるようになります。</p>
            <p></p>
            <p>ひとつ注意したいのが、useEffectがコンポーネントのマウント後に実行されるという点です。例えばリダイレクトの処理を書く場合、一瞬そのページが表示されることがあります。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>特定のページでのみ処理を行うには</div>
            <p>除きたいページが多く、必要になったページでのみ処理を行いたい場合には、カスタムフックを作ると使いまわしやすくて良いかもしれません。カスタムフックは_app.tsxではなく、必要なページでのみ読み込みます。</p>
            <p>カスタムフックをを作成し</p>
            <Code2 />
            <p> 必要なページで読み込みます</p>
            <Code3 />
            <p>これでカスタムフックが読み込まれたページで処理が行われるようになります。</p>
            <div className='text-2xl text-center m-4 border-b-4 border-blue-400'>未ログインならリダイレクトするサンプル</div>
            <p>よくありそうな「ログインの有無によって、リダイレクトする」というケースについて考えてみます。</p>
            <h3>アプリのマウント時にログインユーザーの情報を取得して、グローバルステートにセット</h3>
            <p>ログインユーザーの情報をRecoilにもたせるために、少し準備します。ここはRecoil特有の部分なので詳しくはドキュメントを読んでください。</p>
            <Code4 />
            <p>そして、_app.tsxでアプリがマウントされたタイミングで、サーバーへリクエストを送ってログインユーザーの情報を取得します。当たり前ですが、一度だけ取得ができれば良いので、useEffectの第2引数は空（[]）にします。</p>
            <Code5 />
            <h3>ログインユーザー情報にどこからでもアクセスできるようにカスタムフックを作る</h3>
            <p>どのコンポーネントからもログイン有無やログインユーザーの情報を楽に取得できるようにカスタムフックを作ります。</p>
            <Code6 />
            <p>これでコンポーネントから以下のようにログインユーザー情報にアクセスできます。</p>
            <Code7 />
            <h3>ログインが必要なページ用のカスタムフックを作る</h3>
            <p>もう少し進んで「ログインしていない場合はログインページへリダイレクトする」カスタムフックを作ります。</p>
            <Code8 />
            <p>このカスタムフックをログインが必要なページで読み込みます。</p>

          </div>
          <div className="text-3xl m-4">
            関連記事
          </div>


          <div class="flex flex-nowrap">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
              <a href="#">
                <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="http://www.agile-software.site/2021/05/08/react/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  記事を読む
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
              <a href="#">
                <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Django</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="http://www.agile-software.site/2021/04/04/django/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  記事を読む
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
              <a href="#">
                <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD20000ドル突破</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="https://perpetualtravelerchoja.com/btcusd20000%e3%83%89%e3%83%ab%e7%aa%81%e7%a0%b4/509/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  記事を読む
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
              <a href="#">
                <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BTCUSD(1月前半相場)</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="https://perpetualtravelerchoja.com/btcusd1%e6%9c%88%e5%89%8d%e5%8d%8a%e7%9b%b8%e5%a0%b4/474/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  記事を読む
                  <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </Nextjs_1>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;

const Code1 = () => {
  const test = `
  import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps) {

+  useEffect(() => {
+	  // ここに全ページ共通で行う処理
+  },[router.pathname])

 return <Component {...pageProps} />
}

export default MyApp
   `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code2 = () => {
  const test = `
  import { useEffect } from 'react';

  export function useRequireLogin() {
    useEffect(()=>{
        // ここに処理
    },[])
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code3 = () => {
  const test = `
  import { NextPage } from 'next'
  + import { useRequireLogin } from "./hooks/useRequireLogin"
  
    const Page: NextPage = () => {
  
  +   useRequireLogin();
    
      return (<div>...ページの内容...</div>)
    }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Code4 = () => {
  const test = `
  import { atom } from 'recoil';
  import { CurrentUser } from '../types/user'; // ログインユーザーの型定義
  
  // undefined : まだログイン確認が完了していない状態とする
  // null      : ログイン確認をした結果、ログインしていなかった状態とする
  export const currentUserState = atom<undefined | null | CurrentUser>({
    key: 'CurrentUser',
    default: undefined,
  });
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code5 = () => {
  const test = `
  import type { AppProps } from 'next/app'
  import { useEffect } from 'react';
  import { useSetRecoilState, RecoilRoot } from 'recoil';
  import { currentUserState } from '../states/user';
  import { fetchCurrentUser } from '../requests/currentUser';
  
  // useSetRecoilStateは <RecoilRoot> の子コンポーネントで呼び出さないとエラーになる
  // => マウント後に処理を行うだけのコンポーネントを作り、MyAppから呼び出す
  function AppInit() {
    // グローバルステートにユーザー情報をセットするためのもの
    const setCurrentUser = useSetRecoilState(currentUserState);
  
    useEffect(() => {
      (async function () {
        try {
          const { currentUser } = await fetchCurrentUser(); // サーバーへのリクエスト（未ログインの場合は401等を返すものとする）
      // ログインユーザーの情報が取得できたのでグローバルステートにセット
          setCurrentUser(currentUser);
        } catch {
          // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
          setCurrentUser(null);
        }
      })();
    },[])
    
    return null;
  }
  
  function MyApp({ Component, pageProps, router }: AppProps) {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
        <AppInit />
      </RecoilRoot>
    );
  }
  
  export default MyApp
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Code6 = () => {
  const test = `
  import { useRecoilValue } from 'recoil';
  import { currentUserState } from 'states/currentUser'
  
  export function useCurrentUser() {
    const currentUser = useRecoilValue(currentUserState); // グローバルステートからcurrentUserを取り出す
    const isAuthChecking = currentUser === undefined; // ログイン情報を取得中かどうか
  
    return {
      currentUser,
      isAuthChecking
    };
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code7 = () => {
  const test = `
  import { NextPage } from 'next'
  import { useCurrentUser } from "./hooks/useCurrentUser"
  
  const Page: NextPage = () => {
    const { authChecking, currentUser } = useCurrentUser();
    
    if(authChecking) return (<div>ログイン情報を確認中…</div>);
    
    if(!currentUser) return (<div>ログインしていません</div>);
    
    return (<div>あなたのユーザー名は{currentUser.name}です</div>);
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Code8 = () => {
  const test = `
  import { useEffect } from 'react';
  import { useRouter } from 'next/router';
  import { useCurrentUser } from "./useCurrentUser"
  
  export function useRequireLogin() {
    const { authChecking, currentUser } = useCurrentUser();
    const router = useRouter();
    
    userEffect(()=>{
      if(authChecking) return; // まだ確認中
      if(!currentUser) router.push("/login"); // 未ログインだったのでリダイレクト
    },[authChecking, currentUser])
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};