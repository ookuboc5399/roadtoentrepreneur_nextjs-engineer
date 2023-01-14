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
                ドメイン設定
ドメインは、お名前ドットコムで取得します。

お名前.com

ドメインを取得したら、ネームサーバーの設定からネームサーバーの変更を選択します。

変更するドメインを選択します。

下記のように設定します。

ネームサーバー1  ns1.vultr.com
ネームサーバー2  ns2.vultr.com
お名前

#Vultr側のDNS設定
Vultr側でも設定する必要があります。

DNS画面でプラスボタンを押して、ドメイン名とIPアドレスを入力します。

DNS

ADD

#環境設定変更
ALLOWED_HOSTSにドメイン名を追加します。

mysite/settings.py
ALLOWED_HOSTS = ['xxx.xxx.xxx.xxx', 'deploytest.com']
#サーバー再起動
サーバーを再起動させます。

sudo systemctl restart deploytest
#確認
ネームサーバー変更は時間がかかります。

お名前.comからネームサーバー変更のメールが通知されるので、それまでしばらくお待ちください。

[お名前.com]ネームサーバー情報変更 完了通知

メールが届いたら、ブラウザでドメイン名を入力してページが表示されることを確認します。

もし表示されない場合は、設定を見直してください。

サーバーが立ち上がっているか
ファイヤーウォールは設定しているか
ポート番号はあっているか
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