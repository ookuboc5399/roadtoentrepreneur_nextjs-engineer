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
                HTTPS化
Webアプリケーションを作成したら、HTTPS化は必須となります。

#Let's Encryptをインストール
$ sudo apt-get install letsencrypt
#サーバー証明書取得
Nginxを一度止めておきます。

$ sudo systemctl stop nginx
証明書を取得します。

$ sudo letsencrypt certonly --standalone -d yourdomain.com
#Nginx設定
Nginxの設定をHTTPS用に修正します。

$ sudo nano /etc/nginx/sites-available/default
server {
    listen 80;
    listen [::]:80;
    server_name harusoft.net;
    return 301 https://$host$request_uri;
}


server {
    listen  443 ssl;
    server_name yourdomain.com;
    client_max_body_size 10M;

    ssl on;
    ssl_certificate         /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key     /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location /static {
        alias /usr/share/nginx/html/static;
    }

    location /media {
        alias /usr/share/nginx/html/media;
    }

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_redirect off;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
#設定確認
sudo nginx -t
#Nginx開始
Nginxを開始します。

$ sudo systemctl start nginx
#Gnicorn再起動
プロジェクトを再起動します。

sudo systemctl restart deploytest
#確認
httpsでアプリケーションが表示されることを確認しましょう。

https://yourdomain.com

#自動更新設定
証明書は90日で期限が切れてしまうので、定期的に証明書を更新します。

$ sudo crontab -e
下記を追加します。

00 05 01 * * sudo systemctl stop nginx; sudo letsencrypt renew; sudo systemctl start nginx
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