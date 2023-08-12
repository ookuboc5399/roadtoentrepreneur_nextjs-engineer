import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_12 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_12>
            <div className="">
              <div className="">
                <p>Herokuデプロイ </p>
                <p>Herokuにデプロイする方法を学習します。 </p>
                <p>デプロイとは？</p>
                <p>デプロイとは、特定の環境下でアプリケーションやシステムを使えるようにすることです。</p>
                <p>デプロイして、世界中にあなたのWebアプリケーションを公開しましょう </p>
                <p>多くの人にあなたのWebアプリケーションを使ってもらえるようになります </p>
                <p>Herokuは無料で使うことができます。</p>

                <p>無料版はロード時間に時間がかかりますが、テストでWebアプリケーションを公開したい時には便利です。</p>
                <p>本番環境で使用するには、月額の料金が発生します</p>

                <p>Heroku</p>
                <p>構成</p>

                <p>Herokuの構成です。</p>
                <p>目標</p>
                <p>下記を学習していきます</p>
                <p>Herokuにデプロイする</p>

                <p>前提知識</p>
                <p>デプロイを始める前に、下記は学習しておいて下さい。</p>
                <li>
                  Linuxコマンド
                  インフラ
                  サーバー構築

                </li>
                <p>では、始めて行きましょう！！</p>
              </div>
            </div>

          </Layout_tutorial_12>
        ) : id == 2 ? (
          <Layout_tutorial_12>
            <div className="">
              <div className="">
                <p>準備 </p>
                <p>Herokuへデプロイするための準備をします </p>
                <p>環境準備 </p>
                <p>環境を準備するのに下記のコマンドを入力してください </p>

                <p>Macの場合</p>
                <Tutorial1221 />
                <p>もしbrewコマンドが認識されない場合は、brewをインストールしてください。</p>
                <p>Homebrew</p>
                <p>Linuxの場合</p>
                <Tutorial1222 />

                <p>requirements</p>
                <p>requirements.txtに追記します。</p>
                <Tutorial1223 />


                <p>django-heroku</p>
                <p>django-herokuはHerokuにデプロイする時に必要なパッケージです</p>
                <p>インストール</p>
                <Tutorial1224 />
                <p>django-herokuをインストールすると、他のパッケージも複数同時にインストールされます</p>
                <p>インストールが失敗する場合(Mac)</p>
                <p>Macでpsycopg2をインストールする時にエラーが発生して、どうしても先へ進めない場合は、下記のようにrequirements.txtを設定して試してみてください。</p>
                <p>django-herokuインストールする時に、psycopg2がインストールに失敗するのが原因です</p>
                <Tutorial1225 />
                <Tutorial1226 />
                <Tutorial1227 />
                <Tutorial1228 />
                <p>設定変更</p>
                <p>django_herokuプラグインを使うことで、簡単にデプロイすることができます</p>
                <Tutorial1229 />
                <p>Procfile作成</p>
                <p>Procfileをルートディレクトリに作成します。</p>
                <p>Procfileは、アプリのプロセスタイプやエントリーポイントを宣言するファイルです</p>
                <Tutorial12210 />
                <p>コード解説</p>
                <p>mysiteの部分はあなたが作成したアプリのプロジェクト名を指定します。</p>
                <p>gunicornは、HerokuでDjangoをデプロイするときに必要なWebサーバーの名前です</p>
                <p>runtime.txt作成</p>
                <p>runtime.txtを作成します</p>
                <p>runtime.txtにはプログラム実行時に必要なものを定義します。</p>
                <p>ここではPythonが必要なのでPythonのバージョンを指定します</p>
                <Tutorial12211 />
              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 3 ? (
          <Layout_tutorial_12>
            <div className="">
              <div className="">
                <p>デプロイ </p>
                <p>Herokuにデプロイしていきます。 </p>
                <p>Herokuアカウント作成 </p>
                <p>まずはHerokuのアカウントを作成します。 </p>

                <p>Macの場合</p>
                <Tutorial1221 />
                <p>もしbrewコマンドが認識されない場合は、brewをインストールしてください。</p>
                <p>Homebrew</p>
                <p>Linuxの場合</p>
                <Tutorial1222 />

                <p>requirements</p>
                <p>requirements.txtに追記します。</p>
                <Tutorial1223 />


                <p>django-heroku</p>
                <p>django-herokuはHerokuにデプロイする時に必要なパッケージです</p>
                <p>インストール</p>
                <Tutorial1224 />
                <p>django-herokuをインストールすると、他のパッケージも複数同時にインストールされます</p>
                <p>インストールが失敗する場合(Mac)</p>
                <p>Macでpsycopg2をインストールする時にエラーが発生して、どうしても先へ進めない場合は、下記のようにrequirements.txtを設定して試してみてください。</p>
                <p>django-herokuインストールする時に、psycopg2がインストールに失敗するのが原因です</p>
                <Tutorial1225 />
                <Tutorial1226 />
                <Tutorial1227 />
                <Tutorial1228 />
                <p>設定変更</p>
                <p>django_herokuプラグインを使うことで、簡単にデプロイすることができます</p>
                <Tutorial1229 />
                <p>Procfile作成</p>
                <p>Procfileをルートディレクトリに作成します。</p>
                <p>Procfileは、アプリのプロセスタイプやエントリーポイントを宣言するファイルです</p>
                <Tutorial12210 />
                <p>コード解説</p>
                <p>mysiteの部分はあなたが作成したアプリのプロジェクト名を指定します。</p>
                <p>gunicornは、HerokuでDjangoをデプロイするときに必要なWebサーバーの名前です</p>
                <p>runtime.txt作成</p>
                <p>runtime.txtを作成します</p>
                <p>runtime.txtにはプログラム実行時に必要なものを定義します。</p>
                <p>ここではPythonが必要なのでPythonのバージョンを指定します</p>
                <Tutorial12211 />
              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 4 ? (
          <Layout_tutorial_12>
            <div className="">
              <div className="">
                <p>セキュリティ対策 </p>
                <p>デプロイは成功しましたが、セキュリティ上に問題があります。 </p>
                <p>現在、Debug機能が有効になっているため、もしエラーが発生した場合、詳細な情報が表示されてしまいます </p>
                <p>ローカルではいいのですが、本番環境で詳細な情報は表示されたくありません </p>
                <p>gitignore</p>
                <p>.gitignoreファイルに、local_settings.pyを追記します。</p>
                <Tutorial1241 />
                <p>local_settings</p>
                <p>local_settings.pyファイルを作成します。</p>
                <p>ローカルのみDEBUG機能を有効にします</p>
                <Tutorial1242 />

                <p>settings</p>
                <p>setting.pyを変更します。</p>
                <Tutorial1243 />


                <p>GitHubにコミット</p>
                <p>GitHubにコミットします</p>
                <p>Herokuにデプロイ</p>
                <p>Herokuにデプロイしていきます</p>
               
                <p>これで本番環境でデバッグ機能が無効になり、詳細な情報が表示されなくなりました</p>
                <p>SECRET KEYがハードコーディングされている</p>
                <p>セキュリティ上、SECRET KEYを直接書くのは良くありません</p>
                <p>local_settings</p>
                <p>先ほど作成した、local_settings.pyにSECRET_KEYを移動させましょう。</p>
             
                <p>settings</p>
                <p>settings.pyのSECRET_KEYは削除します。</p>
             
                <p>環境設定</p>
                <p>本番環境でSECRET_KEYを設定するには、heroku config:setコマンドで環境設定を登録します。</p>
                <p>実際のSECRET_KEYに置き換えて実行しましょう。</p>
              
                <p>環境設定確認</p>
                <p>heroku configコマンドでHerokuの環境変数を見ることができます</p>
            
                <p>SECRET_KEYが表示されていれば成功です</p>
                <p>GitHubにコミット</p>
                <p>GitHubにコミットします</p>
                <p>Herokuにデプロイ</p>
                <p>Herokuにデプロイしていきます。</p>
          
                <p>Procfile作成</p>
              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 5 ? (
          <Layout_tutorial_12>
            <div className="w-3/4">
              <div className="text-3xl m-4">
                TOYOTA
              </div>
              <div className="ml-80">
                <p>Herokuで画像を使用する場合 </p>
                <p>Herokuは画像、動画のアップロードに対応していません </p>
                <p>Herokuで画像、動画のアップロードをするには、クラウドサービスを使用する必要があります。 </p>
                <p>ここでは、Cloudinaryを使用します </p>
                <p>Cloudinaryとは？</p>
                <p>Cloudinaryは、メディアファイルのアップロードやクラウド上のストレージへの保管ができるサービスです。</p>

                <p>アカウントの作成</p>
                <p>Cloudinary</p>
                <p>右上ボタンの「SING UP FOR FREE」ボタンを押して、アカウントを作成して下さい</p>
                <p>Account Detailにユーザー情報が表示されますす</p>
                <Tutorial1251 />

                <p>cloudinaryをインストール</p>
                <p>cloudinaryをインストールします。</p>
                <Tutorial1252 />


                <p>設定変更</p>
                <p>Account Detailに表示された情報をCLOUDINARY_STORAGEに追加しますす</p>
                <Tutorial1253 />
                <p>確認</p>
                <p>ローカルでcloudinaryに画像がアップロードできるか試してみましょう</p>
                <Tutorial1254 />
                <p>パッケージ定義</p>
                <p>新しいパッケージをインストールしたので、requirements.txtにパッケージをまとめます</p>
                <Tutorial1255 />
                <p>GitHubにコミット</p>
                <p>GitHubにコミットします</p>
                <p>Herokuにcloudinaryをインストール</p>
                <p>Herokuにcloudinaryのaddonをインストールします</p>
                <p>addonインストール</p>
                <p>addonはクレジットカードをHerokuに登録する必要があります</p>
                <Tutorial1256 />
                <p>Herokuにデプロイ</p>
                <p>Herokuにデプロイします</p>
                <Tutorial1257 />
                <p>本番環境でcloudinaryに画像がアップロードできるか試してみましょう。</p>

              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 6 ? (
          <Layout_tutorial_12>
            <div className="w-3/4">
              <div className="text-3xl m-4">
                TOYOTA
              </div>
              <div className="ml-80">
                <p>Herokuテクニック </p>
                <p>既存のGitリポジトリを既存のHerokuアプリとして登録する方法です。 </p>
                <p>パソコンを変えたときや、今まで使用していたフォルダが消えた時にやるテクニックです </p>
                <p>GitHubとHerokuアプリを紐づけていきます</p>
                <p>アプリ確認</p>
                <p>Herokuにログインしてから、下記コマンドでHerokuに登録されているアプリを確認します。</p>

                <Tutorial1261 />

                <p>紐づけ</p>
                <p>GitHubリポジトリに移動して、下記コマンドを実行して、GitHubとHerokuアプリを紐づけします。</p>
                <Tutorial1262 />


                <p>xxxは既存のHerokuアプリ名</p>
                <p>Herokuにデプロイ</p>
                <p>Herokuアプリを登録できたら、Herokuにデプロイします</p>
                <Tutorial1253 />

              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 7 ? (
          <Layout_tutorial_12>
            <div className="">

              <div className="">
               
              </div>
            </div>
          </Layout_tutorial_12>
        ) : id == 8 ? (
          <Layout_tutorial_12>
            <div className="">
              <div className="">
                <h2>準備</h2>
                <p>Amazon EC2: サーバー </p>
                <p className='text-red-400'>deploy_api/deploy_api/main.py</p>
                <Tutorial1281 />

                <p className='text-red-400'>deploy_api/sample.py</p>
                <Tutorial1282 />
                <p>Herokuデプロイのチュートリアルはここまでで終わりとなります。</p>
               <h4>requirements.txt</h4>
               <p className='text-red-400'>deploy_api/requirements.txt</p>
               <Tutorial1283 />
               <h4>Deta CLIインストール</h4>
               <p>インストールの際にunzipがインストールされている必要があります。</p>
                <Tutorial1284 />
                <p>インストールが完了したらきちんとインストールされているか確認します。</p>
                <Tutorial1285 />
                <p>deta: command not foundが表示された場合は環境PATHに追加されていないので下記のコマンドを実行します。</p>
                <Tutorial1286 />
                <h4>デプロイ</h4>
                <p>main.pyを含むフォルダにおいて下記コマンドを実行</p>
                <Tutorial1287 />

                <Tutorial1288 />
                <p>デプロイされエンドポイントも記載されています。sample.pyに記載されているエンドポイントをDetaのものに変更しましょう</p>
                <p className='text-red-400'>deploy_api/sample.py</p>
                <Tutorial1289 />
                <p>これでpython3 sample.pyを実行すると結果が返ってきて</p>
              </div>
            </div>
          </Layout_tutorial_12>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post

const Tutorial1221 = () => {
  const test = `
  (myvenv) ~$ brew install postgresql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1222 = () => {
  const test = `
  sudo apt-get install python3-dev libpq-dev
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1223 = () => {
  const test = `
  django-heroku==0.3.1
gunicorn==20.0.4
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1224 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1225 = () => {
  const test = `
  $ brew install postgresql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1226 = () => {
  const test = `
  $ brew install openssl
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1227 = () => {
  const test = `
  $ export LDFLAGS="-L/usr/local/opt/openssl/lib"
$ export CPPFLAGS="-I/usr/local/opt/openssl/include"
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1228 = () => {
  const test = `
  $ pip3 install psycopg2
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1229 = () => {
  const test = `
  import django_heroku　# 追加

  # 一番下に追加
  django_heroku.settings(locals())
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial12210 = () => {
  const test = `
  web: gunicorn mysite.wsgi
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial12211 = () => {
  const test = `
  python-3.8.5
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1241 = () => {
  const test = `
  (myvenv) ~$ brew install postgresql
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1242 = () => {
  const test = `
  sudo apt-get install python3-dev libpq-dev
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1243 = () => {
  const test = `
  django-heroku==0.3.1
gunicorn==20.0.4
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};


const Tutorial1251 = () => {
  const test = `
  Cloud name:	xxx
API Key: xxx
API Secret:	xxx
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1252 = () => {
  const test = `
  $ pip3 install django-cloudinary-storage
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1253 = () => {
  const test = `
  INSTALLED_APPS = [
      ...
      'cloudinary', # 追加
      'cloudinary_storage',# 追加
  ]
  
  # 追加
  DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
  # 追加
  CLOUDINARY_STORAGE = {
      'CLOUD_NAME': 'xxx',
      'API_KEY': 'xxx',
      'API_SECRET': 'xxx'
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1254 = () => {
  const test = `
  (myvenv) ~$ python3 manage.py runserver
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1255 = () => {
  const test = `
  (myvenv) ~$ pip3 freeze > requirements.txt
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1256 = () => {
  const test = `
  heroku addons:add cloudinary:starter
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1257 = () => {
  const test = `
  $ git push heroku master
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1261 = () => {
  const test = `
  heroku apps
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1262 = () => {
  const test = `
  $ heroku git:remote --app xxx
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1263 = () => {
  const test = `
  $ git push heroku master
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial1281 = () => {
  const test = `
  from fastapi import FastAPI 
  from pydantic import BaseModel 
  class Data(BaseModel): 
      x:int 
      y:int 
  app = FastAPI() 
  @app.get('/') 
  def index(): 
      return {'message': 'Hello'} 
  @app.post('/') 
  def calc(data: Data): 
      z = data.x*data.y 
      return {'result': z}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1282 = () => {
  const test = `
  import requests 
  import json 
  def main(): 
      url = 'http://127.0.0.1:8000' 
      data = { 
          'x': 3, 
          'y': 4 
      } 
      res = requests.post(url, json.dumps(data)) 
      print(res.json()) 
  if __name__ == '__main__': 
      main()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1283 = () => {
  const test = `
  fastapi 
  uvicorn
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1284 = () => {
  const test = `
  curl -fsSL https://get.deta.dev/cli.sh | sh
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1285 = () => {
  const test = `
  deta --help
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1286 = () => {
  const test = `
  export PATH=$PATH:/home/ookuboc5399/.deta/bin/
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1287 = () => {
  const test = `
  deta new
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1288 = () => {
  const test = `
  Successfully created a new micro 
  { 
          "name": "deploy_api", 
          "id": "af4e8b50-2ba9-4e34-90a6-c38bf656b5d4", 
          "project": "c0ixppsz", 
          "runtime": "python3.9", 
          "endpoint": "https://4wzj3y.deta.dev", 
          "region": "ap-southeast-1", 
          "visor": "disabled", 
          "http_auth": "disabled" 
  } 
  Adding dependencies...
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial1289 = () => {
  const test = `
  import requests 
  import json 
  def main(): 
      url = 'https://4wzj3y.deta.dev' 
      data = { 
          'x': 3, 
          'y': 4 
      } 
      res = requests.post(url, json.dumps(data)) 
      print(res.json()) 
  if __name__ == '__main__': 
      main()
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};