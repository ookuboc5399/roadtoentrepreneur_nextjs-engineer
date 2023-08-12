import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_9 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_9>
                            <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>認証機能構築 </p>
                        <p>Vue.js + Firebaseを使用して、認証機能を構築する方法を学習します。</p>
                        <p>目標 </p>
                        <li>
                        Vue.js、Vuetifyを導入方法を学習
                        Firebaseの導入方法を学習
                        認証機能の構築方法を学習
                        </li>
                       
                        <p>機能</p>
                        <li>
                        サインアップ
                        ログイン
                        ログアウト
                        ログイン必須のメインコンテンツ
                        </li>
                        <p>エラーが発生した場合</p>
                  
                        <p>詳しいコードの解説は、Vue.jsの公式ページを参考にして下さい。</p>
                        <p>公式ドキュメント</p>
                        <p>Vue.js</p>
                        <p>Vuetify</p>
                        <p>Firebase Authentication</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>参照コード。</p>
                        <p>前提知識</p>
                        <p>Vue.jsを始める前に、JavaScriptは学習しておいて下さい。</p>
                        <p>JavaScript</p>
                        <p>では、始めて行きましょう！！</p>
                    </div>
                </div>
        
                </Layout_tutorial_9>
                ) : id == 2 ? (
                    <Layout_tutorial_9>
                  <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備 </p>
                        <p>Vue.jsを導入する準備をしていきます。</p>
                        <p> Vue.jsとは？ </p>
                        <p>Vue.jsは、Webアプリケーションにおけるユーザーインターフェイスを構築するためのJavaScriptフレームワークです。 </p>
                        <p>SPA(Single Page Application)開発に使われていることが多いです </p>
                        <p>特徴</p>
                       <li>
                       学習コストが低い
                       コードの記述量が少なく、開発スピードが早くなる
                       コンポーネント化することで、再利用することができる
                       </li>
                      
                        <p>公式ドキュメント - Vue.js</p>
                        <p>node/npmインストール</p>
                        <p>nodeとnpmがインストールされていることを確認します。</p>
                        <Tutorial921 />
                        <p>まだインストールされていない方は、インストールしてください。</p>
                        <p>nodeインストール</p>
                        <p>vue-cliインストール</p>
                        <Tutorial922 />
                        <p>vue.jsインストール</p>
                        <p>ルートディレクトリでvue createコマンドでインストールできます。</p>
                        <p>フォルダ名はvue-firebase-authにします。</p>
                        <Tutorial923 />
                        <p>順番に選択していきます。</p>
                        <li>
                        Manually select featuresを選択
                        Babel、Router、Linterをスペースを押して選択
                        Use history mode for router? Yを入力
                        ESLint + Prettierを選択
                        Lint on saveを選択
                        In package.jsonを選択
                        Save this as a preset for feature projects? Nを入力
                        </li>
                        <p>vuetifyインストール</p>
                        <Tutorial924 />
                        <p>fireabseインストール</p>
                        <Tutorial925 />
                        <p>設定変更。</p>
                        <p>ソースコードを変更したら、自動的にコンパイルされるように修正します。</p>
                        <Tutorial926 />
                        <p>開始</p>
                        <Tutorial927 />
                        <p>URLをクリックすると、Vuetifyの初期画面が表示されます。</p>
            
                        <p>http://localhost:8080/</p>
                     
                    </div>
                </div>
                </Layout_tutorial_9>
                ) : id == 3 ? (
                    <Layout_tutorial_9>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Firebase設定 </p>
                        <p>Firebaseを設定します。</p>
                        <p> Firebaseとは？ </p>
                        <p>FirebaseはGoogleが提供しているモバイルおよびウェブアプリケーション開発プラットフォームです。 </p>
                        <p>ここではFirebase Authenticationという認証機能を実装するためのサービスを使用していきます。 </p>
                     

                        <p>プロジェクト作成</p>
                        <p>Firebaseにアクセスしてプロジェクトを作成します。</p>
                        <p>コンソール</p>
                        <p>Firebase</p>
                        <p>公式ドキュメント</p>
                        <p>Firebase Authentication</p>
                        <p>使い方</p>
                        
                        <p>ウェブアプリにFirebaseを追加</p>
                        <p>アプリ名を登録して、Firebase SDKをコピーしてinit.jsに貼り付けます。</p>
                        <p>firebaseフォルダを作成し、init.jsファイルを追加します。</p>
                        <Tutorial931 />
                        <p>ログイン方法設定</p>
                        <p>Authenticationをクリックして、ログイン方法を設定します。</p>
                        <p>メール/パスワードを有効にします。</p>
                        <p>これで、Firebaseの認証機能を使用することができます。</p>
                    </div>
                </div>
                </Layout_tutorial_9>
                ) : id == 4 ? (
                    <Layout_tutorial_9>
                    <div className="w-3/4">
                  <div className="text-3xl m-4">
                      TOYOTA
                  </div>
                  <div className="ml-80">
                      <p>ナビゲーション追加 </p>
                      <p>ナビゲーションを追加していきます。</p>
                      <p>App.vue </p>
                      <p>メインファイルであるApp.vueにコンポーネントを組み込んでいきます。 </p>
                      <p>vuetifyを使うことで簡単にデザインすることができます。 </p>
                     
                     
                      <Tutorial941 />
                      <p>コード解説</p>
                      <p>＜Navbar /＞と記載することで、Navbarコンポーネントを設置します。</p>
                      <Tutorial942 />

                      <p>メインコンテンツは、＜router-view /＞を設定することにより、表示することができます。</p>
                      <Tutorial943 />
                      <p><v-footer></v-footer>でフッターを表示しています。</p>
                      <Tutorial944 />
                      <p>router</p>
                      <p>routerを使用して、URLとコンポーネントのマッピングをすることができます。</p>
                      <Tutorial945 />
                      <p>コード解説</p>
                      <p>URLは、routesに追加していきます。</p>
                      <Tutorial946 />
                    
                      <p>main.js</p>
                      <p>main.jsにFirebaseを使用できるように設定します。</p>
                      <Tutorial947 />
                      <p>コード解説</p>
                      <p>firebase.auth().onAuthStateChangedメソッドを使用することにより、ユーザーのログイン状態を監視することができます。</p>
                      <p>ログインユーザーが切り替わった瞬間に、データもログインユーザーのものに変更されます。</p>
                      <p>ウェブサイトで Firebase Authentication を使ってみる</p>
                      <Tutorial948 />
                      <p>Navbar</p>
                      <p>ナビゲーションを追加します。</p>
                      <Tutorial949 />
                      <p>コード解説</p>
                      <p>＜v-toolbar-title＞でタイトルを追加します。</p>
                      <Tutorial9410 />
                      <p>＜v-spacer＞でタイトルとナビゲーションの間にスペースを追加します。</p>
                      <Tutorial9411 />
                      <p>＜v-toolbar-items＞の中にナビゲーションを追加します。</p>
                      <Tutorial9412 />
                      <p>textで文字のみを表示し、v-if=&quot;!user&quot;でuserがFalseの時に表示されます。</p>
                      <p>:to=でクリックした時のリンク先を設定します。</p>
                      <Tutorial9413 />
                      <p>@clickでクリックした時の関数を呼び出すことができます。</p>
                      <Tutorial9414 />
                      <p>dataにコンポーネントで使用する変数を設定します。</p>
                      <p>今回はuserを使用するので、初期値をnullにします。</p>
                      <Tutorial9415 />
                      <p>firebase.auth().onAuthStateChangedメソッドでユーザー情報を取得できます。</p>
                      <p>取得したユーザー情報をthis.userに格納します。</p>
                    
                      <Tutorial9416 />
                      <p>ログアウトボタンをクリックした時の関数です。</p>
                      <p>firebase.auth().signOut()をコールすることにより、ログアウトすることができます。</p>
                      <p>ログアウトしたら、this.$router.pushでログイン画面に遷移します。</p>
                      <Tutorial9417 />
                      <p>Home</p>
                      <p>メインコンテンツのHome.vueです。</p>
                      <p>最小限の構成で作成しておきます。</p>
                      <Tutorial9418 />
                      <p>確認</p>
                      <p>メインコンテンツとナビゲーションが表示されます。</p>
                  </div>
              </div>
                </Layout_tutorial_9>
                ) : id == 5 ? (
                    <Layout_tutorial_9>
              <div className="w-3/4">
                  <div className="text-3xl m-4">
                      TOYOTA
                  </div>
                  <div className="ml-80">
                      <p>サインアップ追加 </p>
                      <p>サインアップ画面を追加していきます。</p>
                      <p>router </p>
                      <p>routerにSignupコンポーネントを追加します。 </p>
                      <Tutorial951 />
                      <p>Signup</p>
                      <p>Signupコンポーネントを追加します。</p>
                      <Tutorial952 />
                      
                      <p>コード解説</p>
                      <p>vuetifyの<v-card></v-card>を使用することにより、綺麗にデザインすることができます。。</p>
                      <Tutorial953 />

                      <p>v-bind:type=&quot;showPassword ? &apos;text&apos; : &apos;password&apos;はshowPasswordがtrueであればフィールドのtypeがtext、falseであればpasswordとなります。</p>
                      <p>このように1行で判定できるのでかなり便利です。</p>
                      <Tutorial954 />
                      <p>サインアップボタンがクリックされた時の関数です。</p>
                      <p>メールアドレスとパスワードが入力されたときのみ実行されます。</p>
                      <Tutorial955 />
                   
                      <p>firebase.auth().createUserWithEmailAndPassword(this.email, this.password)をコールすることで、Firebaseにアカウントを登録することができます。。</p>
                      <Tutorial956 />
                      <p>アカウント登録に成功したら、this.$router.push(｛ name: &quot;Home&quot; ｝)でホーム画面に遷移します。</p>
                      <Tutorial957 />
                      <p>確認</p>
                      <p>サインアップ画面が表示されます。</p>
                  
                  </div>
              </div>
                </Layout_tutorial_9>
                ) : id == 6 ? (
                    <Layout_tutorial_9>
                <div className="w-3/4">
                  <div className="text-3xl m-4">
                      TOYOTA
                  </div>
                  <div className="ml-80">
                      <p>ログイン追加 </p>
                      <p>ログイン画面を追加していきます。</p>
                      <p>router </p>
                      <p>routerにLoginコンポーネントを追加します。 </p>
                    
                     
                      <Tutorial961 />
                      <p>Login</p>
                      <p>Signupコンポーネントと同様にデザインします。</p>
                      <Tutorial962 />

                      <p>コード解説</p>
                      <p>ログインボタンをクリックした時は、firebase.auth().signInWithEmailAndPassword(this.email, this.password)をコールすることで、Firebaseにログインすることができます。。</p>
                      <Tutorial963 />
                      <p>ログインが成功したら、this.$router.push(｛ name: &quot;Home&quot; ｝)でホーム画面を表示させます。</p>
                      <Tutorial964 />
                      <p>確認</p>
                    
                      <p>ログイン画面が表示されます。</p>
                
                  
                  </div>
              </div>
                </Layout_tutorial_9>
                ) : id == 7 ? (
                    <Layout_tutorial_9>
                   <div className="w-3/4">
                  <div className="text-3xl m-4">
                      TOYOTA
                  </div>
                  <div className="ml-80">
                      <p>ナビゲーションガード</p>
                      <p>メインコンテンツは、ログイン状態のみ表示するように設定します。</p>
                      <p>ログインしていない場合は、自動的にログイン画面へ遷移します。 </p>
                      <p>ログイン状態 </p>
                      <p>メインコンテンツに遷移 </p>
                      <p>ログアウト状態</p>
                      <p>ログイン画面に遷移</p>
                      <p>router</p>
                      <p>ルーターを変更することにより、実装できます。</p>
                      <Tutorial971 />
                      <p>コード解説</p>
                      <p>router.beforeEachを使って、コンポーネントに遷移する前に処理を追加することができます。</p>
                      <Tutorial972 />

                      <p>firebase.auth().currentUserで現在のログイン情報が取得できます。</p>
                      <p>ログイン情報が取得できたら、next関数で遷移を可能にして、もしログイン情報を取得できない場合は、ログイン画面に遷移します。</p>
                      <Tutorial973 />
                      <p>詳しい説明は下記にあります。</p>
                      <p>ナビゲーションガード</p>
                    
                      <p>確認</p>
                      <p>認証機能を構築することができました。</p>
                      <p>サーバーを起動させて、サインアップ、ログイン、ログアウトを確認してみましょう。</p>
                    
                  </div>
              </div>
                </Layout_tutorial_9>
                ) : id == 8 ? (
                    <Layout_tutorial_9>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>認証機能チュートリアルはここまでで終わりとなります。 </p>
                        <p>認証機能の実装方法 </p>
                        <p>Vue.js + Firebaseを使用した認証機能の実装方法が理解出来ましたでしょうか？ </p>
                        <p>Firebaseはとても便利なバックエンドサービスなので、ぜひ活用してオリジナルアプリを作ってみてください。</p>
                       
                  
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。。</p>
                        <p>Vuetify</p>
             

                        <p>Firebase Authentication</p>
                      
                    </div>
                </div>
                </Layout_tutorial_9>
                )  : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial921 = () => {
    const test = `
    $ node -v
    $ npm -v

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial922 = () => {
    const test = `
    $ sudo npm i -g @vue/cli

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial923 = () => {
    const test = `
    $ vue create vue-firebase-auth
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial924 = () => {
    const test = `
    $ cd vue-firebase-auth
$ vue add vuetify
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial925 = () => {
    const test = `
    $ npm install firebase
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial926 = () => {
    const test = `
    module.exports = {
        transpileDependencies: ["vuetify"],
        devServer: {
          watchOptions: {
            poll: true
          }
        }
      };
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial927 = () => {
    const test = `
    $ npm run serve
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
  
const Tutorial931 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py startapp accounts

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial941 = () => {
    const test = `
    <template>
    <v-app>
      <Navbar />
      <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>
      <v-footer app color="primary" dark class="justify-center">
        Vue Firebase Auth
      </v-footer>
    </v-app>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar";
  
  export default {
    name: "App",
  
    components: {
      Navbar
    }
  };
  </script>
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial942 = () => {
    const test = `
    <template>
    <v-app>
      <Navbar />
      ...
  
  
  <script>
  import Navbar from "@/components/Navbar";
  
  export default {
    name: "App",
  
    components: {
      Navbar
    }
  };
  </script>
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial943 = () => {
    const test = `
    <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial944 = () => {
    const test = `
    <v-footer app color="primary" dark class="justify-center">
        Vue Firebase Auth
      </v-footer>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial945 = () => {
    const test = `
    import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/components/Home";
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial946 = () => {
    const test = `
    const routes = [
      {
        path: "/",
        name: "Home",
        component: Home,
      }
    ];
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial947 = () => {
    const test = `
    import Vue from "vue";
    import App from "./App";
    import router from "./router";
    import vuetify from "./plugins/vuetify";
    import firebase from "firebase";
    import firebaseConfig from "./firebase/init";
    
    Vue.config.productionTip = false;
    
    firebase.initializeApp(firebaseConfig);
    
    let app = null;
    
    firebase.auth().onAuthStateChanged(() => {
      if (!app) {
        app = new Vue({
          router,
          vuetify,
          render: h => h(App)
        }).$mount("#app");
      }
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial948 = () => {
    const test = `
    firebase.auth().onAuthStateChanged(() => {
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial949 = () => {
    const test = `
    <template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Vue Firebase Auth
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-if="!user" :to="{ name: 'Signup' }">
          サインアップ
        </v-btn>
        <v-btn text v-if="!user" :to="{ name: 'Login' }">
          ログイン
        </v-btn>
        <v-btn text v-if="user">
          {{ user.email }}
        </v-btn>
        <v-btn text v-if="user" @click="logout">
          ログアウト
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </template>
  
  <script>
  import firebase from "firebase";
  export default {
    name: "Navbar",
    data() {
      return {
        user: null
      };
    },
    created() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push({ name: "Login" });
          });
      }
    }
  };
  </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9410 = () => {
    const test = `
    <v-toolbar-title>
    Vue Firebase Auth
  </v-toolbar-title>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9411 = () => {
    const test = `
    <v-spacer></v-spacer>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9412 = () => {
    const test = `
    <v-toolbar-items>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9413 = () => {
    const test = `
    <v-btn text v-if="!user" :to="{ name: 'Signup' }">
    サインアップ
  </v-btn>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9414 = () => {
    const test = `
    <v-btn text v-if="user" @click="logout">
    ログアウト
  </v-btn>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9415 = () => {
    const test = `
    data() {
      return {
        user: null
      };
    },
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9416 = () => {
    const test = `
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9417 = () => {
    const test = `
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial9418 = () => {
    const test = `
    <template>
    <div>
      <h1>メインコンテンツ</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home"
  };
  </script>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };

  const Tutorial951 = () => {
    const test = `
    import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/components/Home";
  import Signup from "@/components/Signup";　// 追加
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup", // 追加
      name: "Signup",
      component: Signup
    },
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial952 = () => {
    const test = `
    <template>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">サインアップ</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email"
            type="email"
            label="メールアドレス"
            v-model="email"
          />
          <v-text-field
            prepend-icon="mdi-lock"
            label="パスワード"
            v-model="password"
            v-bind:type="showPassword ? 'text' : 'password'"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <div v-if="feedback" class="text-center">
            <p class="red--text">{{ feedback }}</p>
          </div>
          <v-card-actions>
            <v-btn class="primary" v-on:click="signup">サインアップ</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import firebase from "firebase";
  export default {
    name: "Signup",
    data() {
      return {
        email: null,
        password: null,
        feedback: null,
        showPassword: false
      };
    },
    methods: {
      signup() {
        if (this.email && this.password) {
          this.feedback = null;
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push({ name: "Home" });
            })
            .catch(() => {
              this.feedback = "メールアドレスまたはパスワードが正しくありません";
            });
        } else {
          this.feedback = "メールアドレスとパスワードを入力してください";
        }
      }
    }
  };
  </script>
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial953 = () => {
    const test = `
    <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">サインアップ</h1>
    </v-card-title>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial954 = () => {
    const test = `
    <v-text-field
    prepend-icon="mdi-lock"
    label="パスワード"
    v-model="password"
    v-bind:type="showPassword ? 'text' : 'password'"
    v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
  />
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial955 = () => {
    const test = `
    signup() {
      if (this.email && this.password) {
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial956 = () => {
    const test = `
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.email, this.password)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial957 = () => {
    const test = `
    .then(() => {
      this.$router.push({ name: "Home" });
    })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };

  const Tutorial961 = () => {
    const test = `
    import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/components/Home";
  import Signup from "@/components/Signup";
  import Login from "@/components/Login"; // 追加
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login", // 追加
      name: "Login",
      component: Login
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial962 = () => {
    const test = `
    <template>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-email"
            type="email"
            label="メールアドレス"
            v-model="email"
          />
          <v-text-field
            prepend-icon="mdi-lock"
            label="パスワード"
            v-model="password"
            v-bind:type="showPassword ? 'text' : 'password'"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <div v-if="feedback" class="text-center">
            <p class="red--text">{{ feedback }}</p>
          </div>
          <v-card-actions>
            <v-btn class="primary" v-on:click="login">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import firebase from "firebase";
  export default {
    name: "Login",
    data() {
      return {
        email: null,
        password: null,
        feedback: null,
        showPassword: false
      };
    },
    methods: {
      login() {
        if (this.email && this.password) {
          this.feedback = null;
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push({ name: "Home" });
            })
            .catch(() => {
              this.feedback = "メールアドレスまたはパスワードが正しくありません";
            });
        } else {
          this.feedback = "メールアドレスとパスワードを入力してください";
        }
      }
    }
  };
  </script>
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial963 = () => {
    const test = `
    firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial964 = () => {
    const test = `
    .then(() => {
      this.$router.push({ name: "Home" });
    })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };

  const Tutorial971 = () => {
    const test = `
    import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "@/components/Home";
  import Signup from "@/components/Signup";
  import Login from "@/components/Login";
  import firebase from "firebase";
  
  Vue.use(VueRouter);
  
  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.requiresAuth)) {
      let user = firebase.auth().currentUser;
      if (user) {
        next();
      } else {
        next({
          name: "Login"
        });
      }
    } else {
      next();
    }
  });
  
  export default router;
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  
  const Tutorial972 = () => {
    const test = `
    router.beforeEach((to, from, next) => {
  
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };
  
  const Tutorial973 = () => {
    const test = `
    let user = firebase.auth().currentUser;
      if (user) {
        next();
      } else {
        next({
          name: "Login"
        });
      }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
  };

  
