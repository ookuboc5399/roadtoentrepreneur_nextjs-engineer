import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_59 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_59>
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
              <iframe width="560" height="315" src="https://www.youtube.com/embed/a6Xs2Ir40OI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          </Layout_tutorial_59>
        ) : id == 2 ? (
          <Layout_tutorial_59>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>準備 </h3>
                <p>開発の準備をします。 </p>
                <h4>インストール</h4>
                <Tutorial5921 />
                <h3>ベース</h3>
                <p className='text-red-400'>/app.js</p>
                <Tutorial5923 />
                <h3>確認</h3>
                <p>ポート3000でブラウザに表示されるか確認します。 </p>
                <Tutorial5922 />
                <h3>ejs確認</h3>
                <p>viewsフォルダを作り、home.ejsファイルを作成する。 </p>
                <p className='text-red-400'>views/home.ejs</p>
                <Tutorial5924 />
                <p>renderでhome.ejsを表示させる。 </p>
                <Tutorial5925 />
              </div>
              <div className='w-1/2'>

              </div>
            </div>
          </Layout_tutorial_59>
        ) : id == 3 ? (
          <Layout_tutorial_59>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>model作成 </h3>
                <p>modelsフォルダを作成し、campground.jsを作成。</p>
                <p className='text-red-400'>models/campground.js</p>
                <Tutorial5931 />
                <h3>mongooseでmongoに接続</h3>
                <p>settings.pyを修正してプロジェクトの設定を変更します。</p>
                <p className='text-red-400'>/app.js</p>
                <Tutorial5932 />
                <h3>seedsデータ</h3>
                <p className='text-red-400'>seeds/index.js</p>
                <Tutorial5933 />
                <p>。 </p>

                <h3>キャンプ場新規登録</h3>
                <p>。</p>
                <h3>sidebar</h3>
                <p>。</p>



              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>pages/_document.tsx</p>


              </div>

            </div>
          </Layout_tutorial_59>
        ) : id == 4 ? (
          <Layout_tutorial_59>
            <div className='flex'>
              <div className='w-1/2 mr-2'>
                <h3>Youtube </h3>
                <p>アプリケーションを作成してきます。 </p>
                <p>app という名前のアプリケーションを作成します。</p>

                <h3>ejs-mateインストール</h3>
                <p></p>

                <Tutorial5941 />
                <p className='text-red-400'>views/campgrounds/index.ejs</p>
                <Tutorial5942 />
                <p className='text-red-400'>views/campgrounds/new.ejs</p>
                <Tutorial5943 />
                <p className='text-red-400'>views/campgrounds/show.ejs</p>
                <Tutorial5944 />
                <p className='text-red-400'>views/layouts/boilerplate.ejs</p>
                <Tutorial5945 />
                <h3>Bootstrap</h3>
                <h4>Bootstrapインストール</h4>
                <p>head内にlinkタグを、bodyタグ内にscriptを追加する</p>
                <p className='text-red-400'>views/layouts/boilerplate.ejs</p>
                <Tutorial5946 />
                <h4>navbar追加</h4>
                <p className='text-red-400'>views/partials/navbar.ejs</p>
                <Tutorial5947 />
                <p>navbarをboilerplate.ejsに追加する</p>
                <p className='text-red-400'>views/layouts/boilerplate.ejs</p>
                <Tutorial5948 />
                <h4>footer追加</h4>
                <p className='text-red-400'>views/partials/footer.ejs</p>
                <Tutorial5949 />
                <p>footerをboilerplate.ejsに追加する</p>
                <p className='text-red-400'>views/layouts/boilerplate.ejs</p>
                <Tutorial59410 />

              </div>
              <div className='w-1/2'>

              </div>

            </div>

          </Layout_tutorial_59>
        ) : id == 5 ? (
          <Layout_tutorial_59>
            <h3>unsplashAPI</h3>
            <p>imageを追加する</p>
            <p className='text-red-400'>models/campground.js</p>
            <Tutorial5951 />
            <p>imageを追加する</p>
            <p className='text-red-400'>seeds/index.js</p>
            <Tutorial5952 />
            <h3>管理画面追加 </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <p className='text-red-400'>app/admin.py</p>
          
          </Layout_tutorial_59>
        ) : id == 6 ? (
          <Layout_tutorial_59>

            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
        
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <p className='text-red-400'>api/urls.py</p>
      

          </Layout_tutorial_59>
        ) : id == 7 ? (
          <Layout_tutorial_59>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>api/serializers.py</p>
          

          </Layout_tutorial_59>
        ) : id == 8 ? (
          <Layout_tutorial_59>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                <p>それを継承することで、簡単に開発をすることができます </p>
                <p className='text-red-400'>api/views.py</p>
            

              </div>
              <div className='w-1/2'>
                <p className='text-red-400'>components/AuthenForm.tsx</p>

                <p className='text-red-400'>modal.tsx</p>

              </div>
            </div>

          </Layout_tutorial_59>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial5921 = () => {
  const test = `
  npm i express mongoose ejs
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5922 = () => {
  const test = `
  nodemon app.js
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5923 = () => {
  const test = `
  const express = require('express') 
  const app = express(); 
  app.get('/', (req,res) =>{ 
      res.send('Yelp') 
  }) 
  app.listen(3000,()=>{ 
      console.log('ポート3000') 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5924 = () => {
  const test = `
  <!DOCTYPE html> 
  <html> 
    <head> 
      <meta charset="UTF-8" /> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <title>ホーム</title> 
    </head> 
    <body> 
      <h1>ホーム</h1> 
    </body> 
  </html>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5925 = () => {
  const test = `
  const express = require("express"); 
  const app = express(); 
  const path = require("path"); 
  app.set("view engine", "ejs"); 
  app.set("views", path.join(__dirname, "views")); 
  app.get("/", (req, res) => { 
    res.render("home"); 
  }); 
  app.listen(3000, () => { 
    console.log("ポート3000"); 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5931 = () => {
  const test = `
  const mongoose = require('mongoose'); 
  const Schema = mongoose.Schema; 
  const campgroundSchema = new Schema({ 
      title: String, 
      price: String, 
      description: String, 
      location: String 
  }) 
  module.exports = mongoose.model('Campground', campgroundSchema)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5932 = () => {
  const test = `
  const Campground = require("./models/campground");

  app.get('/makecampground', async (req, res) => { 
      const camp = new Campground({title:'私の庭', description:'気軽に'}) 
      await camp.save(); 
      res.send(camp) 
  })
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5933 = () => {
  const test = `
  const mongoose = require('mongoose'); 
  const cities = require('./cities'); 
  const { descriptors, places } = require('./seedHelpers'); 
  const Campground = require('../models/campground'); 
  mongoose.connect('mongodb://localhost:27017/yelp-camp', 
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) 
      .then(() => { 
          console.log('MongoDBコネクションOK！！'); 
      }) 
      .catch(err => { 
          console.log('MongoDBコネクションエラー！！！'); 
          console.log(err); 
      }); 
       
  const sample = array => array[Math.floor(Math.random() * array.length)]; 
  const seedDB = async () => { 
      await Campground.deleteMany({}); 
      for (let i = 0; i < 50; i++) { 
          const randomCityIndex = Math.floor(Math.random() * cities.length); 
          const camp = new Campground({ 
              location: '＄{cities[randomCityIndex].prefecture}＄{cities[randomCityIndex].city}', 
              title: '＄{sample(descriptors)}・＄{sample(places)}'' 
          }); 
          await camp.save(); 
      } 
  } 
  seedDB().then(() => { 
      mongoose.connection.close(); 
  });
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5941 = () => {
  const test = `
  npm i ejs-mate
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5942 = () => {
  const test = `
  <% layout('layouts/boilerplate') %> 
  <h1>キャンプ場一覧</h1> 
  <div> 
      <a href="/campgrounds/new">新規登録</a> 
  </div> 
  <ul> 
    <% for(let campground of campgrounds){ %> 
    <li><a href="/campgrounds/<% campground._id %>"><%= campground.title =%></a></li> 
    <% } %> 
  </ul>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5943 = () => {
  const test = `
  <% layout('layouts/boilerplate') %> 
  <form action="/campgrounds" method="post"> 
    <div> 
      <label for="title">タイトル</label> 
      <input type="text" name="campground[title]" id="title" /> 
    </div> 
    <div> 
      <label for="title">場所</label> 
      <input type="text" name="campground[location]" id="location" /> 
    </div> 
    <button>登録する</button> 
  </form> 
  <a href="/campgrounds">一覧に戻る</a>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5944 = () => {
  const test = `
  <% layout('layouts/boilerplate') %> 
  <h1><%= campground.title %></h1> 
  <h1><%= campground.location %></h1> 
  <p> 
      <a href="/campgrounds/<%= campground._id %>/edit">編集する</a> 
  </p> 
  <p> 
      <form action="/campgrounds/<%= campground._id %>?_method=DELETE" method="POST"> 
          <button>削除する</button> 
      </form> 
  </p> 
  <footer> 
      <a href="/campgrounds">一覧に戻る</a> 
  </footer>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5945 = () => {
  const test = `
  <!DOCTYPE html> 
  <html> 
    <head> 
      <meta charset="UTF-8" /> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <title>Document</title> 
    </head> 
    <body> 
      <%- body -%> 
    </body> 
  </html>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5946 = () => {
  const test = `
  <link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
  crossorigin="anonymous" 
/>


  <script 
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
    crossorigin="anonymous" 
  ></script>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5947 = () => {
  const test = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
  <div class="container-fluid"> 
    <a class="navbar-brand" href="#">YelpCamp</a> 
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation" 
    > 
      <span class="navbar-toggler-icon"></span> 
    </button> 
    <div class="collapse navbar-collapse" id="navbarNav"> 
      <ul class="navbar-nav"> 
        <li class="nav-item"> 
          <a class="nav-link" href="/">ホーム</a> 
        </li> 
        <li class="nav-item"> 
          <a class="nav-link" href="/campgrounds">キャンプ場</a> 
        </li> 
        <li class="nav-item"> 
          <a class="nav-link" href="/campgrounds/new">新規登録</a> 
        </li> 
        <li class="nav-item"> 
          <a 
            class="nav-link disabled" 
            href="#" 
            tabindex="-1" 
            aria-disabled="true" 
            >Disabled</a 
          > 
        </li> 
      </ul> 
    </div> 
  </div> 
</nav>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5948 = () => {
  const test = `
  <body> 
    <%- include('../partials/navbar') -%> 
    <main class="container mt-5"><%- body -%></main> 
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
      crossorigin="anonymous" 
    ></script> 
  </body>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5949 = () => {
  const test = `
  <footer class="footer bg-dark"> 
  <div class="container"> 
      <span>YelpCamp</span> 
  </div> 
</footer>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial59410 = () => {
  const test = `
  <body> 
    <%- include('../partials/navbar') -%> 
    <main class="container mt-5"><%- body -%></main> 
    <%- include('../partials/footer') -%> 
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
      crossorigin="anonymous" 
    ></script> 
  </body>
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5951 = () => {
  const test = `
  const mongoose = require('mongoose'); 
  const Schema = mongoose.Schema; 
  const campgroundSchema = new Schema({ 
      title: String, 
      image: String, 
      price: Number, 
      description: String, 
      location: String 
  }) 
  module.exports = mongoose.model('Campground', campgroundSchema)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial5952 = () => {
  const test = `
  const seedDB = async () => { 
    await Campground.deleteMany({}); 
    for (let i = 0; i < 50; i++) { 
        const randomCityIndex = Math.floor(Math.random() * cities.length); 
        const camp = new Campground({ 
            location: '＄{cities[randomCityIndex].prefecture}＄{cities[randomCityIndex].city}', 
            title: '＄{sample(descriptors)}・＄{sample(places)}', 
            image: 'https://source.unsplash.com/collection/483251' 
        }); 
        await camp.save(); 
    } 
}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};