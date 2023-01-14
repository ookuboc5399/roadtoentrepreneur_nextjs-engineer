import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_17>
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
            </Layout_tutorial_17>



    )
}

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