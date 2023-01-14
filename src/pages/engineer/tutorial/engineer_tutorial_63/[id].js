import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_63 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_63>
            <div className='flex'>
              <div className='w-2/3 mr-2'>
              <h3>仮想環境の作成 </h3>
                 <p>myvenvという名前で仮想環境を構築します。 </p>
                <Tutorial6311 />
                <h3>fastAPI、uvicornのインストール </h3>
                <p>csrf_protectはセキュリティ関係でcsrfトークンを扱うためのモジュール</p>
                <p>motorはfastAPIとmonggoDBを連携するために必要</p>
                <p>PyJWTはjwt</p>
                <p>passlibはパスワードをハッシュ化するために</p>
                <p>python-decoupleは環境変数を扱うために仕様する</p>
                <Tutorial6312 />
                <p>パスオペレーションデコレーターの直下に関数を定義するとその関数がパスにアクセスがあったときに実行される。</p>
                <p className='text-red-400'>main.py</p>
                <Tutorial6313 />
                
                <h3>サーバー起動 </h3>
                <Tutorial6314 />
                <h4>.envファイル作成</h4>
                <p>mongodbで作成されたkeyを設定する</p>
                <p className='text-red-400'>.env</p>
                <Tutorial6315 />
                <h4></h4>
                <p>database.pyにはmongodbと連携するための処理を記述している。motorパッケージでクライアントを作成</p>
                <p>mongodbで作成したdatabase名とcollectionを設定</p>
                <p className='text-red-400'>database.py</p>
                <Tutorial6316 />
                <h4>関数</h4>
                <p>insert_oneの返り値(InsertOneResultクラスのインスタンス)をtodoに格納</p>
                <p>mongodbからドキュメントを</p>
                <p>new_todoに値が入っている場合は</p>
                <p className='text-red-400'>database.py</p>
                <Tutorial6317 />
                <h4>serializer</h4>
                <p>mongodbのオブジェクト型から辞書型に変換</p>
                <p>辞書型に変換してからreturnで返すことができるようになる</p>
                <Tutorial63110 />
                <Tutorial6318 />
                <p>returnで返す型が辞書型とbooleanの2つが考えられる。Unionで設定できる</p>
                <Tutorial6319 />
               
              </div>
              <div className='w-1/3'>
                <p className='text-red-400'>sample.py</p>
                <Tutorial63119 />
              </div>
            </div>
          </Layout_tutorial_63>
        ) : id == 2 ? (
          <Layout_tutorial_63>
            <div className='flex'>
              <div className=''>
              <h4>requestのデータ型定義</h4>
                <p>schemas.pynにはエンドポイントに渡すデータ型やリクエストのデータ型を定義しています</p>
                <p className='text-red-400'>schemas.py</p>
                <Tutorial6321 />
                <p>エンドポイントが返してくれるデータ型を定義</p>
                <p className='text-red-400'>schemas.py</p>
                <Tutorial6322 />
                <p>5分間のCPU使用率の平均が20%より小さい場合に1台減らす</p>
              </div>
            </div>
          </Layout_tutorial_63>
        ) : id == 3 ? (
          <Layout_tutorial_63>
            <div className=''>
              <div className=''>
                <h4>エンドポイント作成</h4>
                <p>routersフォルダを作成</p>
                <p>/api/todoにアクセスがあった場合</p>
                <p>todoの辞書型を関数db_create_todoに渡す。</p>
                <Tutorial6331 />

                <h3></h3>
                <p>appインスタンスにrouter。</p>
                <p className='text-red-400'>main.py</p>
                <Tutorial6334 />
                <h3>sidebar</h3>
                <p>jsonのデータ</p>
                <p>受け取ったjsonデータをjsonable_encoderによってtodoは辞書型</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>



              </div>


            </div>
          </Layout_tutorial_63>
        ) : id == 4 ? (
          <Layout_tutorial_63>
            <div className=''>
              <div className=''>
                <h3>一覧を取得</h3>
                <p>mongodbから取得するtaskの一覧を格納する空の配列をtodosとして作成。 </p>
                <p>。</p>
               
                <h3>1つのドキュメントを取得 </h3>
                <p className='text-red-400'>database.py</p>
                <Tutorial6341 />
                <p>キャプチャをすると元の仮想マシンは不要になるので仮想マシンを自動的に削除するにチェックを入れる。 </p>
                <h3>イメージから仮想マシンを作成</h3>

                <div className=''>
                  <Image
                    className='object-cover'
                    src="/images/tutorial/image5.png"
                    alt="top"
                    width={1271}
                    height={614}
                  />
                </div>

              </div>

            </div>

          </Layout_tutorial_63>
        ) : id == 5 ? (
          <Layout_tutorial_63>
             
            <h3>インストール</h3>
            <Tutorial6251 />
            <p>仮想ネットワークの作成をクリック</p>
            
            <p>リソースグループ名と名前を設定</p>
           

            <h3>サブネット関連付け </h3>
            <p>Post モデルを管理画面で操作できるようにします。</p>
            <h3>可用性セット作成 </h3>
            
          </Layout_tutorial_63>
        ) : id == 6 ? (
          <Layout_tutorial_62>

            <h3>URL追加</h3>
            <h4>ロードバランサの作成</h4>
            <p>作成時に指定するIPアドレスが接続先になる</p>
            <h4>バックエンドプールの追加</h4>
            <p>負荷分散する対象VMを登録します。</p>
            <h4>負荷分散規則の追加</h4>
            <p>ルーティングを設定します。</p>
            <h4>インバウンドNAT規則</h4>
            <p>VMにパブリックIPアドレスを設定しているため、あるユーザーがVMのIPアドレスに直接アクセスすることができる。</p>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load1.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load2.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load3.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load4.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load5.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load6.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load7.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load8.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load9.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>
            <div className=''>
              <Image
                className='object-cover'
                src="/images/tutorial/load10.png"
                alt="top"
                width={712}
                height={612}
              />
            </div>


          </Layout_tutorial_62>
        ) : id == 7 ? (
          <Layout_tutorial_60>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>


          </Layout_tutorial_60>
        ) : id == 8 ? (
          <Layout_tutorial_59>
            <div className='flex'>
              <div className='mr-4 w-1/2'>
                <h3>Views追加</h3>
                <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
                <p>それを継承することで、簡単に開発をすることができます </p>
                <p className='text-red-400'>api/views.py</p>
                <Tutorial5281 />

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

const Tutorial6311 = () => {
  const test = `
  python3 -m venv env_api
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6312 = () => {
  const test = `
  pip install fastapi==0.70.0
  pip install uvicorn==0.14.0
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6313 = () => {
  const test = `
  from fastapi import FastAPI 
  app=FastAPI() 
  @app.get('/') 
  def read_root(): 
      return {"message": "Welcome"}
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6314 = () => {
  const test = `
  uvicorn main:app --reload
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6315 = () => {
  const test = `
  MONGO_API_KEY=mongodb+srv://ookuboc5399:Tokai@0614@fastapi.dluji1l.mongodb.net/?retryWrites=true&w=majority
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6316 = () => {
  const test = `
  database = client.API_DB 
  collection_todo = database.todo 
  collection_user = database.user
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6317 = () => {
  const test = `
  async def db_create_todo(data: dict) -> Union[dict, bool]: 
  todo = await collection_todo.insert_one(data) 
  new_todo = await collection_todo.find_one({"_id": todo.inserted_id}) 
  if new_todo: 
      return todo_serializer(new_todo) 
  return False
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6318 = () => {
  const test = `
  if new_todo: 
      return todo_serializer(new_todo) 
  return False
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6319 = () => {
  const test = `
  async def db_create_todo(data: dict) -> Union[dict, bool]:
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial63110 = () => {
  const test = `
  def todo_serializer(todo) -> dict: 
  return { 
      "id": str(todo["_id"]), 
      "title": todo["title"], 
      "description": todo["description"] 
  }
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};



const Tutorial63119 = () => {
  const test = `
  from decouple import config 
  from typing import Union 
  import motor.motor_asyncio 
  MONGO_API_KEY = config('MONGO_API_KEY') 
  client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_API_KEY) 
  database = client.API_DB 
  collection_todo = database.todo 
  collection_user = database.user 
  def todo_serializer(todo) -> dict: 
      return { 
          "id": str(todo["_id"]), 
          "title": todo["title"], 
          "description": todo["description"] 
      } 
  async def db_create_todo(data: dict) -> Union[dict, bool]: 
      todo = await collection_todo.insert_one(data) 
      new_todo = await collection_todo.find_one({"_id": todo.inserted_id}) 
      if new_todo: 
          return todo_serializer(new_todo) 
      return False
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6321 = () => {
  const test = `
  class TodoBody(BaseModel): 
  title: str 
  description: str
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6322 = () => {
  const test = `
  class Todo(BaseModel): 
  id: str 
  title: str 
  description: str
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6331 = () => {
  const test = `
  @router.post("/api/todo", response_model=Todo) 
  async def create_todo(request: Request, response: Response, data: TodoBody): 
      todo = jsonable_encoder(data) 
      res = await db_create_todo(todo) 
      response.status_code = HTTP_201_CREATED
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6334 = () => {
  const test = `
  from routers import route_todo
  app.include_router(route_todo.router)
  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};

const Tutorial6341 = () => {
  const test = `

  `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};