import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_21 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                  <Layout_tutorial_21>
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
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/R_OERlafbmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <h3>#エラーが発生した場合</h3>
                  <p>詳しいコードの解説は、Django REST Framework、NextJS の公式ページを参考にして下さい。</p>
      
                  <p>Django REST Framework 公式ドキュメント</p>
                  <p>Next.js 公式ドキュメント</p>
      
                  <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                  <p>DRF 参照コード</p>
                  <p>Next.js 参照コード</p>
                  <h3>#前提知識</h3>
      
                  <p>このチュートリアルを始める前に、下記は学習しておいて下さい。</p>
                  <ul className='list-disc'>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Django</li>
                  </ul>
      
                  <p>では、始めて行きましょう！！</p>
              </Layout_tutorial_21>
                ) : id == 2 ? (
                  <Layout_tutorial_21>
                  <h3>準備 </h3>
                  
                  <p>Linux環境でプロジェクトを作成します</p>
                  <p></p>
                  <p></p>
                 
                  <Tutorial2121 />
                  <p>必要ないファイルを削除します。(App.test.js、logo.svg、reportWebVitals.js、setupTests.js) </p>
      
                  <Tutorial2122 />
                  <p>index.jsを修正</p>
                  <Tutorial2123 />
                  <p>作成したcoinnmarketcap-clone-blockchainフォルダに移動します。</p>
                  <Tutorial2124 />
                  <p>tailwind.config.jsがすでにインストールされています</p>
                  <p>yarn devでサーバーを立ち上げましょう。Next.jsが表示されました。</p>
      
                   <h4>Netlify連携</h4>
                   <p></p>
                   <Tutorial2125 />
                  <p>下記コマンドでサーバーを立ち上げるとhttp://localhost:8888</p>
                  
                  <Tutorial2026 />
      
                  <Tutorial2027 />
                  <h4>Moralis連携</h4>
                  </Layout_tutorial_21>
                ) : id == 3 ? (
                  <Layout_tutorial_21>
                  <h3></h3>
                  <h4>index.css</h4>
                  <Tutorial2131/>
                  <h4>styled-componentsのインポート</h4>
                  <Tutorial2132/>
                  <h3>react-router-domのインポート</h3>
                  <Tutorial2133/>
                  <h3>ログインページへのルーターを作成</h3>
                  <Tutorial2134/>
                  <h3>Loginコンポーネントの作成</h3>
                  <Tutorial2135/>
                  <h3>背景画像の作成</h3>
                  <p>publicフォルダにimagesフォルダを作成し、そこに画像を入れていきます。</p>
                  <Tutorial2135/>
                  <p>サーバーを起動して表示を確認しましょう。</p>
      
              </Layout_tutorial_21>
                ) : id == 4 ? (
                  <Layout_tutorial_21>
                  <div className='flex'>
                      <div>
                          <h3>UseState </h3>
                          <p>アプリケーションを作成してきます。 </p>
                          <p>useStateをインポート</p>
                          <Tutorial2141 />
      
                          <p>App.jsにHeaderコンポーネントを追加します</p>
                          <Tutorial2142 />
                          <p>ボタンを押したら状態のcountが1ずつ増えていくように</p>
                          <div class="flex flex-nowrap">
                              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
                                  <a href="#">
                                      <Image class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                                  </a>
                                  <div class="p-5">
                                      <a href="#">
                                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">疑似要素</h5>
                                      </a>
                                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      <a href="http://www.agile-software.site/2022/07/23/%e6%93%ac%e4%bc%bc%e8%a6%81%e7%b4%a0%e3%81%a8%e3%81%af/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">display:block</h5>
                                      </a>
                                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                      <a href="http://www.agile-software.site/2021/07/03/displayblock/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                          記事を読む
                                          <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
      
                          <p>ボタンに増えていく数を表示するためにCount｛count｝。 setCountを使って値を増やしていく。</p>
                          <Tutorial2143 />
                          <p></p>
                          <h4>Formに入力された値を動的に管理</h4>
                          <Tutorial2144 />
      
                          <p>setProductsを使ってproductのstateを変更する</p>
                          <p>evtはhtmlのハンドラー情報を受け取って関数の処理に渡す</p>
                          <Tutorial2145 />
                          <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                              <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                              <div>
                                  <span class="font-medium">...product</span> オブジェクトとしてnameとpriceがあります。nameだけ書き換えてしまうとpriceの情報が消されてしまう。...をつけることによってオブジェクトの中身を分解して新しい値を設定している
                              </div>
                          </div>
                      </div>
                      <div>
                          <p className='text-red-400'>Header.js</p>
                          <Tutorial2149 />
                          <p></p>
                      </div>
                  </div>
              </Layout_tutorial_21>
                ) : id == 5 ? (
                  <Layout_tutorial_21>
                  <h3>Model追加</h3>
                  <p>ブログに必要な項目をモデルに追加します。 </p>
                  <p className='text-red-400'>app/models.py</p>
                  <Tutorial1651 />
                  <div class="flex p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                      <svg class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <div>
                          <span class="font-medium">verbose_name:</span> モデルのフィールドにverbose_nameを指定することで管理画面でフィールドの名前を指定することができる
                      </div>
                  </div>
                  <h3>管理画面追加 </h3>
                  <p>Post モデルを管理画面で操作できるようにします。</p>
                  <p className='text-red-400'>app/admin.py</p>
                  <Tutorial1652 />
                  <h3>データベース構築</h3>
                  <p>モデルを変更したら、下記コマンドで必ずデータベースの構築が必要になります。。</p>
      
                  <Tutorial1653 />
                  <p>サーバー起動</p>
      
                  <Tutorial1654 />
                  <p>データベース登録 </p>
                  <p>管理画面に遷移して、Post データを登録してみましょう </p>
                  <p>イメージ画像は正方形の画像をアップロードしてください。 </p>
                  <div className='flex'>
                      <Image
                          className='m-2'
                          src="/images/programing/django/1.png"
                          alt=""
                          width={250}
                          height={250}
                      />
                      <Image
                          className='m-2'
                          src="/images/programing/django/2.png"
                          alt=""
                          width={250}
                          height={250}
                      />
                      <Image
                          className='m-2'
                          src="/images/programing/django/3.png"
                          alt=""
                          width={250}
                          height={250}
                      />
                  </div>
                  </Layout_tutorial_21>
                ) : id == 6 ? (
                  <Layout_tutorial_21>
                  <h3>URL追加</h3>
                  <p>ルーティングを設定します。</p>
                  <p>プロジェクト用 URL を作成 </p>
                  <p>プロジェクト用ルーティングを作成 </p>
                  <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
                  <p className='text-red-400'>mysite/urls.py</p>
                  <Tutorial1661 />
                  <p>アプリケーション用ルーティングを作成</p>
                  <p>app フォルダの下に、urls.py ファイルを作成します。</p>
                  <p className='text-red-400'>app/urls.py</p>
                  <Tutorial1662 />
                  </Layout_tutorial_21>
                ) : id == 7 ? (
                  <Layout_tutorial_21>
                  <h3>Serializer追加</h3>
                  <p>Serializer とは？</p>
                  <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
                  <p>serializers.py ファイルを作成します</p>
                  <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
                  <p className='text-red-400'>app/serializers.py</p>
                  <Tutorial1671 />
                  </Layout_tutorial_21>
                ) : id == 8 ? (
                  <Layout_tutorial_21>
                  <h3>Views追加</h3>
                  <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                  <p>それを継承することで、簡単に開発をすることができます </p>
                  
                  <p className='text-red-400'>app/views.py</p>
                  <Tutorial1681 />
                  <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
                  <p>公式ドキュメント - Generic views </p>
                  </Layout_tutorial_21>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial2121 = () => {
  const test = `
npx create-react-app youtube-disney-clone
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2122 = () => {
  const test = `
Need to install the following packages:
  create-next-app@latest
Ok to proceed? (y)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2123 = () => {
  const test = `
  import React from 'react'; 
  import ReactDOM from 'react-dom/client'; 
  import './index.css'; 
  import App from './App'; 
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render( 
    <React.StrictMode> 
      <App /> 
    </React.StrictMode> 
  );
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2124 = () => {
  const test = `
  cd coinmarketcap-clone-blockchain
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2125 = () => {
  const test = `
npm install netlify-cli -g
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2026 = () => {
  const test = `
ntl dev
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2027 = () => {
  const test = `
ntl init
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial2131 = () => {
  const test = `
  html { 
    scroll-behavior: smooth; 
  } 
  * { 
    box-sizing: border-box; 
  } 
  body { 
    background-color: #040714; 
    color: #f9f9f9; 
    font-family: Avenir-Roman, sans-serif; 
    margin: 0; 
    padding: 0; 
  } 
  a { 
    color: #f9f9f9; 
    text-decoration: none; 
  } 
  @media only screen and (min-width: 768px) { 
    body { 
      font-size: 16px; 
    } 
  } 
  @media only screen and (min-width: 480px) and (max-width: 768px) { 
    body { 
      font-size: 15px; 
    } 
  } 
  @media only screen and (max-width: 479px) { 
    body { 
        font-size: 14px; 
    } 
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2132 = () => {
  const test = `
  npm install --save styled-components
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2133 = () => {
  const test = `
  npm i react-router-dom@5
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2134 = () => {
const test = `
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css'; 
function App() { 
return ( 
  <div className="App"> 
   <Router> 
    <Switch> 
      <Route exact path="/"> 
        <Login /> 
      </Route> 
    </Switch> 
   </Router> 
  </div> 
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

const Tutorial2135 = () => {
const test = `
import styled from "styled-components";
const Login = (props) => {
  return (
      <Container>
          <Content>
              Content
          </Content>
      </Container>
  )
};
export default Login;
const Container = styled.section'
overflow: hidden;
display: flex;
flex-direction: column;
height: 100vh;
'
const Content = styled.div'
width: 100%;
position: relative;
min-height: 100vh;
display: flex;
justify-content: center;
align-items:center;
flex-direction: column;
`
return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
        {test}
    </SyntaxHighlighter>
);
};


const Tutorial2141 = () => {
  const test = `
  import React,{useState} from 'react'
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2142 = () => {
  const test = `
const [count, setCount] = usestate(0)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2143 = () => {
  const test = `
 <button onClick={() => setCount(count+1)}>Count {count}</button>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2144 = () => {
  const test = `
 import React, {useState} from 'react'

 const Basic1 = () => {
     const [product, setProducts] = useState({name:'',price:''})

     return(
         <>
             <form>
                 <input type='text' value={product.name}
                 onChange={evt=>setProduct({...product, name: evt.target.value})}/>

                 <input type='text' value={product.price}
                 onChange={evt=>setProduct({...product, price: evt.target.value})}/>

             </form>

             <h1>Product name is {product.name}</h1>
              <h1>Product name is {product.price}</h1>
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

const Tutorial2145 = () => {
  const test = `
  import React, {useState} from 'react'

  const Basic2 = () => {
      const [products, setProducts] = useState([])
      const newProducts = () => {
          setProducts([...products,{
              id:products.length,
              name: "Hello React"
          }])
      }

      return(
          <div>
              <button onClick={newProducts}>Add New Product</button>
              <ul>
                  {products.map(product => (
                      <li key={product.id}>{product.name} id:{product.id}</li>
                  ))}

              </ul>
          </div>
      )
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial2149 = () => {
  const test = `
  import { useEffect } from "react";
  import styled from "styled-components";
  import { useDispatch, useSelector } from "react-redux";
  import { useHistory } from "react-router-dom";
  import { auth, provider } from "../firebase";
  import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice";
  const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          setUser(user);
          history.push("/home");
        }
      });
    }, [userName]);
    const handleAuth = () => {
      if (!userName) {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            setUser(result.user);
          })
          .catch((error) => {
            alert(error.message);
          });
      } else if (userName) {
        auth
          .signOut()
          .then(() => {
            dispatch(setSignOutState());
            history.push("/");
          })
          .catch((err) => alert(err.message));
      }
    };
    const setUser = (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    };
    return (
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="Disney+" />
        </Logo>
        {!userName ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <NavMenu>
              <a href="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
              </a>
              <a>
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" alt="ORIGINALS" />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" alt="MOVIES" />
                <span>MOVIES</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <DropDown>
                <span onClick={handleAuth}>Sign out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Nav>
    );
  };
  const Nav = styled.nav'
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
  ';
  const Logo = styled.a'
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
      display: block;
      width: 100%;
    }
  ';
  const NavMenu = styled.div'
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a {
      display: flex;
      align-items: center;
      padding: 0 12px;
      img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
      }
      span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          bottom: -6px;
          content: "";
          height: 2px;
          left: 0px;
          opacity: 0;
          position: absolute;
          right: 0px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
          width: auto;
        }
      }
      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
    /* @media (max-width: 768px) {
      display: none;
    } */
  ';
  const Login = styled.a'
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
    }
  ';
  const UserImg = styled.img'
    height: 100%;
  ';
  const DropDown = styled.div'
    position: absolute;
    top: 48px;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
  ';
  const SignOut = styled.div'
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ＄{UserImg} {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    &:hover {
      ＄{DropDown} {
        opacity: 1;
        transition-duration: 1s;
      }
    }
  ';
  export default Header;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1651 = () => {
  const test = `
  from django.db import models


  class Post(models.Model):
      title = models.CharField('タイトル', max_length=50)
      image = models.ImageField(upload_to='images', verbose_name='イメージ画像')
      content = models.TextField('本文')
      created_at = models.DateTimeField('作成日', auto_now_add=True)
  
      def __str__(self):
          return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1652 = () => {
  const test = `
  from django.contrib import admin
  from .models import Post
  
  admin.site.register(Post)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1653 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py makemigrations
  (myvenv) ~$ python3 manage.py migrate
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial1654 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1661 = () => {
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



const Tutorial1662 = () => {
  const test = `
  from django.urls import path
  from app import views
  
  
  urlpatterns = [
      path('post/', views.PostView.as_view(), name='post'),
      path('post/<str:pk>/', views.PostDetailView.as_view(), name='post-detail'),
  ]
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1671 = () => {
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


