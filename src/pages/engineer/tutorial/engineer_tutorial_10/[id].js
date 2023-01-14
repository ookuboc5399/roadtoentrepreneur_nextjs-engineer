import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_10 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_10>
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
                       
                        <p>LINE風チャット機能構築</p>
                        
                        <p>Vue.js + Firebaseを使用して、LINE風チャットを構築する方法を学習します。</p>
                  
                        <p>目標</p>
                        <p>Firebaseのデータベース(Firestore)を使用する方法を学習</p>
                        <p>機能</p>
                        <p>リアルタイムチャット</p>
                        <p>エラーが発生した場合</p>
                      
                        <p>参照コード</p>
                        <p>前提知識</p>
                        <p>Vue.jsを始める前に、JavaScriptは学習しておいて下さい。</p>
                        <p>JavaScript</p>
                        <p>では、始めて行きましょう！！</p>
                    </div>
                </div>
        
                </Layout_tutorial_10>
                ) : id == 2 ? (
                    <Layout_tutorial_10>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備</p>
                        <p>認証機能を使用しますので、認証機能チュートリアルを済ませて、サインアップ、ログイン、ログアウト機能を構築しておいてください。</p>
                        <p>認証機能(Firebase)構築</p>
                                              
                        <p>認証機能構築チュートリアル</p>
                        
                        <p>インストール</p>
                  
                        <p>チャット機能で使用するプラグインをインストールします</p>
                        <Tutorial1021 />
                        <p>Firebase設定</p>
                        <p>Firebaseのデータベース(Firestore)を使用するので、init.jsを変更します。</p>
                        <p>Firebaseの設定はまとめて、init.jsファイルに記載することにします。</p>
                        <Tutorial1022 />
                      
                        <p>コード解説</p>
                        <p>firebaseの設定は、init.jsにまとめておきます。</p>
                        <p>スクロールプラグイン設定</p>
                        <p>チャット画面のスクロールで便利なプラグインvue-chat-scrollを使用できるようにしておきます。</p>
                        <p>vue-chat-scrollは自動的にスクロールしてくれるプラグインです。</p>
                        <Tutorial1023 />
                      
                        <p>コード解説</p>
                        <p>Vue.use関数を使用することでVueでプラグインが使用できるようになります。</p>
                        <Tutorial1024 />
                    </div>
                </div>
                </Layout_tutorial_10>
                ) : id == 3 ? (
                    <Layout_tutorial_10>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Signup変更</p>
                        <p>Signupした時に、ユーザー名も同時に登録するように修正します。</p>
                        <p>FirebaseのAuthenticationにメールアドレスとパスワードが保存されて、ユーザー名はデータベース(Firestore)に保存されます</p>
                                              
                        <p>データベース(Firestore)構成</p>
                        <li>
                        コレクション名：users
                        ドキュメント名：メールアドレス
                        フィールド：name、user_id
                        </li>
              
                        <p>Singup</p>
                        <p>サインアップコンポーネントを修正します。</p>
                        <Tutorial1031 />
                        <p>コード解説</p>
                        <p>フィールドにユーザー名を追加します。</p>
                        <Tutorial1032 />
                      
                        <p>db.collection("users").doc(this.email)でデータベースのドキュメントを指定します。</p>
                        <Tutorial1033 />
                        <p>ref.get().then(docでデータベースのドキュメント情報を取得します。</p>
                          <Tutorial1034 />
                        <p>メールアドレスとパスワードを登録した後に、ref.setでフィールドを登録します。</p>
                        <p>名前とcred.user.uidでユーザー毎に生成されたIDを設定します。</p>
                       
                        <Tutorial1035 />
                      
                    </div>
                </div>
                </Layout_tutorial_10>
                ) : id == 4 ? (
                    <Layout_tutorial_10>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>メインコンテンツ</p>
                        <p>LINE風のチャットを構築します。</p>
                        <p>Home</p>
                                              
                        <p>ホームコンポーネントを修正します。</p>
                      
                        <Tutorial1041 />
                        <p>コード解説</p>
                        <p>v-chat-scrollを設定することにより、自動的にスクロールされるようになります。</p>
                        <Tutorial1042 />
                      
                        <p>データベースから取得したmessagesをループさせて、messageを表示させます。</p>
                        <Tutorial1043 />
                        <p>自分のチャットか相手のチャットを判定しています。</p>
                          <Tutorial1044 />
                        <p>相手のチャットには画像を表示するようにしています。</p>
                        <Tutorial1045 />
                        <p>メッセージコンポーネントを呼び出しています。</p>
                        <p>メッセージを投稿した時の処理は、Messageコンポーネントで行います。</p>
                        <p>:nameで名前をメッセージコンポーネントに渡しています。</p>
                        <Tutorial1046 />
                        <p>サインアップ時に、user_idを登録したので、現在のid(uid)と合っているフィールドを検索し、そのnameを取得しています</p>
                        <Tutorial1047 />
                        <p>Messageコレクションを取得し、時間順に並べます。</p>
                        <Tutorial1048 />
                        <p>onSnapshot関数で常に変更を監視するようにしています。</p>
                        <Tutorial1049 />
                        <p>データベースに変更があれば、this.messageにidと名前と内容を追加されるようにしています。</p>
                        <Tutorial10410 />
                        <p>時間の表示はmomentプラグインを使用しています。</p>
                        <p>Moment.js</p>
                        <Tutorial10411 />
                    </div>
                </div>
                </Layout_tutorial_10>
                ) : id == 5 ? (
                    <Layout_tutorial_10>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>メッセージ投稿</p>
                        <p>メッセージの投稿はメッセージコンポーネントで処理をします。</p>
                        <p>Message</p>
                                              
                        <p>メッセージコンポーネントを追加します。</p>
                      
                        <Tutorial1051 />
                        <p>コード解説</p>
                        <p>v-on:keydown.enter.alt.exact="addMessage"でAlt + Enterを押した時にaddMessage関数がコールされるようにしています。</p>
                        <p>メッセージは、Alt + Enterで送信されます。</p>
                        <Tutorial1052 />
                      
                        <p>ホームコンポーネントからメッセージコンポーネントを呼び出すときに、名前も一緒に渡しているので、propsで取得します。</p>
                        <Tutorial1053 />
                        <p>Alt + EnterでaddMessage関数がコールされます。</p>
                 
                        <p>もしメッセージが入力されていたら、処理をします。</p>
                        <Tutorial1054 />
                        <p>messagesコレクションを作成し、メッセージ、ユーザー名、時間フィールドを格納していきます。。</p>
                        <Tutorial1055 />
                        <p>フィールドが作成したら、this.Message = nullでメッセージフォームの内容を空にします。</p>
                        <Tutorial1056 />
                        <p>確認</p>
                       
                        <p>LINE風チャット機能を構築することができました。</p>
          
                        <p>サーバーを起動させて、別々のアカウントで、チャットをしてみましょう。</p>
                     
                    </div>
                </div>
                </Layout_tutorial_10>
                ) : id == 6 ? (
                    <Layout_tutorial_10>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                    <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>LINE風チャット機能チュートリアルはここまでで終わりとなります。 </p>
                        <p>データベースの使い方 </p>
                        <p>Firebaseのデータベース(Firestore)を使った実装方法が理解出来ましたでしょうか？ </p>
                        <p>Firebaseはとても便利なバックエンドサービスなので、ぜひ活用してオリジナルアプリを作ってみてください。</p>
                       
                  
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。。</p>
                        <p>Vuetify</p>
             

                        <p>Cloud Firestore</p>
                    </div>
                </div>
                </Layout_tutorial_10>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post

const Tutorial1021 = () => {
  const test = `
  $ npm install vue-chat-scroll moment
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1022 = () => {
  const test = `
  import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
apiKey: "xxx",
authDomain: "xxx",
databaseURL: "xxx",
projectId: "xxx",
storageBucket: "xxx",
messagingSenderId: "xxx",
appId: "xxx"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1023 = () => {
  const test = `
  import Vue from "vue";
  import App from "./App";
  import router from "./router";
  import vuetify from "./plugins/vuetify";
  import firebase from "firebase";
  import VueChatScroll from "vue-chat-scroll"; // 追加
  
  Vue.use(VueChatScroll); // 追加
  
  Vue.config.productionTip = false;
  
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


const Tutorial1024 = () => {
  const test = `
  Vue.use(VueChatScroll);
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1031 = () => {
  const test = `
  <template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">サインアップ</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="mdi-account"
          type="text"
          label="ユーザー名"
          v-model="name"
        />
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
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      feedback: null,
      showPassword: false,
    };
  },
  methods: {
    signup() {
      if (this.name && this.email && this.password) {
        this.feedback = null;
        let ref = db.collection("users").doc(this.email);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "このメールアドレスは既に使用されています";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  name: this.name,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "Home" });
              })
              .catch(() => {
                this.feedback =
                  "メールアドレスまたはパスワードが正しくありません";
              });
          }
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


const Tutorial1032 = () => {
  const test = `
  <v-text-field
  prepend-icon="mdi-account"
  type="text"
  label="ユーザー名"
  v-model="name"
/>

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1033 = () => {
  const test = `
  let ref = db.collection("users").doc(this.email);
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1034 = () => {
  const test = `
  ref.get().then(doc => {
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1035 = () => {
  const test = `
  .then(cred => {
    ref.set({
      name: this.name,
      user_id: cred.user.uid
    });
  })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1041 = () => {
  const test = `
  <template>
  <v-card width="800px" class="mx-auto mt-5">
    <div class="message">
      <v-card-title>
        <h1 class="display-1">チャット</h1>
      </v-card-title>
      <v-card-text class="content" v-chat-scroll>
        <div v-for="message in messages" :key="message.id">
          <div class="chat" v-if="message.name != name">
            <div class="chat__profile">
              <img src="https://placehold.jp/50x50.png?text=Vue" />
            </div>
            <div class="chat__main">
              <div class="chat__main--name">{{ message.name }}</div>
              <div class="chat__main--message">
                <p class="space">
                  {{ message.content }}
                </p>
              </div>
              <span class="chat__time">{{ message.timestamp }}</span>
            </div>
          </div>
          <div class="mychat" v-if="message.name == name">
            <span class="mychat__time">{{ message.timestamp }}</span>
            <p class="space">
              {{ message.content }}
            </p>
          </div>
        </div>
      </v-card-text>
    </div>
    <Message :name="name" />
  </v-card>
</template>

<script>
import Message from "@/components/Message";
import db from "@/firebase/init";
import firebase from "firebase";
import moment from "moment";
export default {
  name: "Home",
  components: {
    Message
  },
  data() {
    return {
      name: "",
      messages: []
    };
  },
  created() {
    db.collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.name = doc.data().name;
        });
      });

    db.collection("messages")
      .orderBy("timestamp")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            let doc = change.doc;
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              content: doc.data().content,
              timestamp: moment(doc.data().timestamp).format("LT")
            });
          }
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.message {
  padding: 20px 10px;
  margin: 0 auto;
  text-align: right;
  background: #7da4cd;
}

.content {
  height: 550px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
  }

  &::-webkit-scrollbar-thumb {
    background: #aaa;
  }
}

.chat {
  width: 100%;
  margin: 10px 0;
  overflow: hidden;

  &__profile {
    float: left;
    margin-right: -50px;
    width: 40px;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }

  &__main {
    width: 100%;
    text-align: left;

    &--name {
      color: #edf1ee;
      margin: 0 0 0 50px;
    }

    &--message {
      display: inline-block;
      position: relative;
      margin: 0 0 0 50px;
      padding: 10px;
      max-width: 250px;
      border-radius: 30px;
      background: #edf1ee;

      &:after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 3px;
        left: -19px;
        border: 8px solid transparent;
        border-right: 18px solid #edf1ee;
        -webkit-transform: rotate(35deg);
        transform: rotate(35deg);
      }

      p {
        margin: 0;
        padding: 0;
      }
    }
  }

  &__time {
    font-size: 0.8em;
    margin-left: 10px;
    color: #edf1ee;
  }
}

.mychat {
  margin: 10px 0;

  p {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0;
    padding: 8px;
    max-width: 250px;
    border-radius: 30px;
    background: #30e852;
    font-size: 15px;

    &:after {
      content: "";
      position: absolute;
      top: 3px;
      right: -19px;
      border: 8px solid transparent;
      border-left: 18px solid #30e852;
      -webkit-transform: rotate(-35deg);
      transform: rotate(-35deg);
    }
  }

  &__time {
    font-size: 0.8em;
    margin-right: 10px;
    color: #edf1ee;
  }
}

.space {
  white-space: pre-line;
}
</style>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1042 = () => {
  const test = `
  <v-card-text class="content" v-chat-scroll>

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1043 = () => {
  const test = `
  <div v-for="message in messages" :key="message.id">
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1044 = () => {
  const test = `
  <div class="chat" v-if="message.name != name">
...
<div class="mychat" v-if="message.name == name">
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1045 = () => {
  const test = `
  <div class="chat__profile">
  <img src="https://placehold.jp/50x50.png?text=Vue" />
</div>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1046 = () => {
  const test = `
  <Message :name="name" />
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1047 = () => {
  const test = `
  db.collection("users")
  .where("user_id", "==", firebase.auth().currentUser.uid)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      this.name = doc.data().name;
    });
  });
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};
         

const Tutorial1048 = () => {
  const test = `
  db.collection("messages")
  .orderBy("timestamp")
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1049 = () => {
  const test = `
  .onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type == "added") {
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial10410 = () => {
  const test = `
  let doc = change.doc;
  this.messages.push({
    id: doc.id,
    name: doc.data().name,
    content: doc.data().content,
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial10411 = () => {
  const test = `
  timestamp: moment(doc.data().timestamp).format("LT")
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1051 = () => {
  const test = `
  <template>
  <v-textarea
    rows="3"
    label="メッセージ(Alt + Enter)"
    v-model="Message"
    v-on:keydown.enter.alt.exact="addMessage"
    class="ma-2"
  ></v-textarea>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Message",
  props: ["name"],
  data() {
    return {
      Message: null
    };
  },
  methods: {
    addMessage() {
      if (this.Message) {
        db.collection("messages")
          .add({
            content: this.Message,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.Message = null;
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


const Tutorial1052 = () => {
  const test = `
  <v-textarea
    rows="3"
    label="メッセージ(Alt + Enter)"
    v-model="Message"
    v-on:keydown.enter.alt.exact="addMessage"
    class="ma-2"
  ></v-textarea>

  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1053 = () => {
  const test = `
  props: ["name"],
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial1054 = () => {
  const test = `
  addMessage() {
    if (this.Message) {
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1055 = () => {
  const test = `
  db.collection("messages")
      .add({
        content: this.Message,
        name: this.name,
        timestamp: Date.now()
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial1056 = () => {
  const test = `
  this.Message = null;
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

