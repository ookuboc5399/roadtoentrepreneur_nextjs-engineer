import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';

export default function Home() {
    return (
        <Layout_tutorial_19>
            <h3>Redux + React Hooks + TypeScript COVID19 </h3>
           
            <h3>目標</h3>
            <p>下記を学習していきます。 </p>
            <ul className='list-disc'>
                <li>Django REST Framework で API 構築方法</li>
                <li>Next.js でサイト構築方法</li>
                <li>Django REST Framework と Next.js の連携方法</li>
                <li>TailwindCSS の使い方</li>
            </ul>

            <h3>機能 </h3>
            <ul className='list-disc'>
                <li>投稿一覧</li>
                <li>投稿詳細</li>
                <li>About</li>
            </ul>
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
            </Layout_tutorial_19>
    )
}

