import Link from 'next/link'
import Layout from '../../components/Layout'
import Header_engineer from '../../components/header_engineer';

export default function Home() {
  return (
    <div class="">
        <Header_engineer/>
        <div class="flex-1 mt-10">

            <div class="float-left w-1/5 text-center text-xl ">
                <ul class="">
                    <li class="py-4">
                        <Link href="/blog/">
                            01はじめに
                        </Link>
                    </li>
                    <li class="py-4">
                        <Link href="/blog/">
                            02Python
                        </Link>
                    </li>
                    <li class="py-4">
                        <Link href="/blog/">
                            03ブログシステム構築
                        </Link>
                    </li>
                    <li class="py-4">
                        <Link href="/blog/">
                            04ブログシステム構築
                        </Link>
                    </li>
                    <li class="py-4">
                        <Link href="/blog/">
                            05案件獲得
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="float-right w-4/5 text-center">
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <p>これが5つ目のブログ記事です。 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec </p>
                <div>
                おわりに
チュートリアルを最後まで読んでいただき、誠にありがとうございました。

VPSデプロイのチュートリアルはここまでで終わりとなります。

 デプロイ方法

サーバー構築と本番環境へのデプロイ方法が理解できましたでしょうか！？

どんどんWebアプリケーションを開発して、全世界に公開していきましょう。

Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。

公式ドキュメントを参考にして、さらに理解を深めていきましょう。

Djangoドキュメント

ぜひオリジナルのアプリケーションを開発してみてください。

#フィードバック
チュートリアルのフィードバックは、Twitter(@hathle)までお願いいたします。

どんどんDjangoチュートリアルを作成していきますので、楽しみにしていてください。

ではまた！！
                <div>
                    <div class="">
                        <pre class="">
                            <code>app
                                    └───templates
                                                └───app
                            </code>
                        </pre>
                        <div class="">
                            <span class="">1</span>
                            <span class="">2</span>
                            <span class="">3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <Link href="" >
                    <a className="text-right">ビュー</a>
                </Link>
                <Link href="" >
                    <a className="text-right">ビュー</a>
                </Link>
            </div>
        </div>
    </div>
  )
}