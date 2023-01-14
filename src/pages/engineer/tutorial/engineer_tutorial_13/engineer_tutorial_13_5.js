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
                デプロイ
デプロイ用の設定が完了したので、デプロイしていきます。

サーバーの構成は、クライアント → Nginx → gnicorn → djangoとなります。

構成

#クローン
アプリケーションをGitHubからクローンします。

cd
mkdir src
cd src
git clone https://github.com/xxxx/deploytest.git
cd deploytest
#仮想環境構築
仮想環境を構築します。

haruyasu@vultr:~/src/deploytest$ python3 -m venv myvenv
#仮想環境実行
仮想環境を実行します。

haruyasu@vultr:~/src/deploytest$ source myvenv/bin/activate
#最新pipコマンド
最新にアップデートしておきます。

(myvenv) haruyasu@vultr:~/src/deploytest$ pip3 install --upgrade pip setuptools
#パッケージのインストール
requirements.txtに記載されたパッケージがインストールされます。

(myvenv) haruyasu@vultr:~/src/deploytest$ pip3 install -r requirements.txt
#Nginxディレクトリ作成
staticとmediaフォルダを作成します。

$ sudo mkdir /usr/share/nginx/html/static
$ sudo mkdir /usr/share/nginx/html/media
#静的ファイル収集
Nginxで静的ファイルを読み込むには、下記コマンドでまとめます。

staticにあるCSSや画像を変更した場合は、必ずこのコマンドが必要になります。

このコマンドを実行するために、仮想環境ではなく直接サーバーにDjangoをインストールして下さい。

(myvenv) haruyasu@vultr:~/src/deploytest$ sudo python3 manage.py collectstatic
#マイグレート
マイグレートをしておきます。

(myvenv) haruyasu@vultr:~/src/deploytest$ python3 manage.py migrate
#Nginx設定
Nginxの設定を修正します。

$ sudo nano /etc/nginx/sites-available/default
デフォルトの設定を下記のように書き換えます。

Ctrl + Xで保存することができます。

server {
    listen 80;
    server_name xxx.xxx.xxx.xxx;

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
#コード解説
server_nameはVultrのIPアドレスを指定します。

server_name xxx.xxx.xxx.xxx
 HTTPS化

HTTPSに対応するには、SSL証明書を取得する必要があります。

Let's Encrypt

Let's EncryptでSSL証明書を取得できます。

証明書が取得できたら、下記をHTTPS用の設定に変更する必要があります。

後で解説します。

#Nginx設定確認
下記コマンドでNginxの設定が正しいかを確認することができます。

$ sudo nginx -t
#Nginx再起動
$ sudo systemctl restart nginx
#Nginx起動確認
ブラウザでVultrのIPアドレスを入力して、Djangoのページが表示されることを確認します。

(myvenv) haruyasu@vultr:~/src/deploytest$ python3 manage.py runserver 0.0.0.0:8000
#Gunicorn起動確認
ブラウザでVultrのIPアドレスを入力して、このコマンドでもDjangoのページが表示されることを確認します。

(myvenv) haruyasu@vultr:~/src/deploytest$ gunicorn --bind 127.0.0.1:8000 mysite.wsgi:application
#コマンド登録
起動・再起動・停止がしやすいように、systemctlコマンドへの登録をします。

deploytest.serviceなど分かりやすい名前にします。

$ sudo nano /etc/systemd/system/deploytest.service
下記のように修正します。

[Unit]
Description=gunicorn
After=network.target

[Service]
WorkingDirectory=/home/haruyasu/src/deploytest
ExecStart=/home/haruyasu/src/deploytest/myvenv/bin/gunicorn --bind 127.0.0.1:8000 mysite.wsgi:application

[Install]
WantedBy=multi-user.target
#コード解説
WorkingDirectoryはDjangoプロジェクトのディレクトリです。

WorkingDirectory=/home/haruyasu/src/deploytest
gunicornの場所は仮想環境の場所になります。

which gunicornでディレクトリを表示できます。

ExecStart=/home/haruyasu/src/deploytest/myvenv/bin/gunicorn --bind 127.0.0.1:8000 mysite.wsgi:application
#起動・再起動・停止
下記コマンドで容易にプロジェクトの起動停止ができます。

#起動
sudo systemctl start deploytest
#再起動
sudo systemctl restart deploytest
#停止
sudo systemctl stop deploytest
#killコマンド
ポート番号8000を強制的終了させたい場合があります。

sudo lsof -i:8000
gunicorn 12902 root 6u IPv4 198206 0t0 TCP localhost:irdmi (LISTEN)

gunicorn 12905 root 6u IPv4 198206 0t0 TCP localhost:irdmi (LISTEN)

''' sudo kill -9 12902 sudo kill -9 12905 '''

killコマンドでポートを終了できます。

#確認
コマンドで起動したら、ブラウザでIPアドレスを入力してDjangoが表示されていることを確認しましょう。
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