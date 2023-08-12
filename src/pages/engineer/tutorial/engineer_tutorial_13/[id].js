import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_13 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>VPSデプロイ </p>
                                <p>VPSを契約してDjangoをデプロイする方法を学習します。 </p>
                                <p> VPSとは？</p>
                                <p>VPSはVirtual Private Serverの略です。</p>
                                <p>仮想専用サーバーになります </p>
                                <p>ユーザー毎の専用領域を作成して使用します</p>
                                <p>一からサーバーを構築するので、インフラの知識が必要になってきます</p>

                                <p>VPSはVultrを利用します</p>
                                <p>Vultr</p>
                                <p>今なら$100無料です。</p>

                                <p>目標</p>
                                <p>下記を学習していきます</p>
                                <li>
                                    VPS契約
                                    サーバー構築方法
                                    公開方法
                                    ドメイン取得

                                </li>
                                <p>前提知識</p>
                                <p>デプロイを始める前に、下記は学習しておいて下さい</p>
                                <li>
                                    Linuxコマンド
                                    インフラ
                                    サーバー構築

                                </li>
                            </div>
                        </div>

                    </Layout_tutorial_13>
                ) : id == 2 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Vultrサーバー構築</p>
                                <p>Vultrでサーバーを構築する準備をします </p>
                                <p>Vultrとは？ </p>
                                <p>Vultrはオーストラリアの会社が運営している格安VPSになります。 </p>
                                <p>安くて高性能なので多くの人が利用しています。</p>
                                <p>Vultrの特徴</p>
                                <li>
                                    初期費用がない
                                    東京リージョンがある
                                    コントロールパネルが使いやすい
                                    ファイヤーウォールの設定が可能
                                    料金が安い
                                    高性能
                                </li>
                                <p>アカウント登録 </p>
                                <p>Vultrでアカウントを作成します </p>
                                <p>Vultr </p>
                                <p>Vultrを使用するには、クレジットカードを登録する必要があります</p>
                                <p>登録しても勝手に課金されることはないので安心してください徴</p>
                                <p>メールアドレスの認証もしておいてください</p>
                                <p>sshキー作成</p>
                                <p>ローカルでsshキーを作成します</p>
                                <Tutorial1321 />
                                <p>sshキーをcatコマンドで表示できるので、コピーします</p>

                                <Tutorial1322 />
                                <p>sshキー登録</p>
                                <p>vultrにログインして、コピーしたsshキーを登録します。</p>
                                <p>ファイヤーウォール設定</p>
                                <p>ProductsのFirewall画面に遷移して、プラスボタンをクリックします。</p>

                                <p>Descriptionに適当な名前を入力します</p>
                                <p>下記のように登録します。</p>
                                <li>
                                    ssh：22番
                                    http：80番
                                    https：443番
                                    mysql：3306番
                                </li>
                                <p>VPSレンタル</p>
                                <p>VPSをレンタルします</p>
                                <p>ProductsのInstances画面に遷移して、プラスボタンをクリックします</p>
                                <p>インスタンスの種類を順番に選択していきます。</p>
                                <li>
                                    Choose Server：Cloud Compute
                                    Server Location：Tokyo
                                </li>

                                <li>
                                    Server Type：Ubuntu 18.04
                                    Server Size：$5
                                </li>

                                <li>
                                    SSH Keys：先ほど登録したsshキー
                                    Firewall Group：先ほど登録したfirewall
                                </li>
                                <p>Deploy Nowをクリックすると、インスタンスが作成されます。</p>

                                <p>インスタンスができると、サーバーの情報を表示することができます。</p>
                                <p>IPアドレスと管理パスワードはメモしておきます。</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 3 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>Vultrサーバー構築</p>
                                <p>Vultrでサーバーを構築する準備をします </p>
                                <p>Vultrとは？ </p>
                                <p>Vultrはオーストラリアの会社が運営している格安VPSになります。 </p>
                                <p>安くて高性能なので多くの人が利用しています。</p>
                                <p>Vultrの特徴</p>
                                <li>
                                    初期費用がない
                                    東京リージョンがある
                                    コントロールパネルが使いやすい
                                    ファイヤーウォールの設定が可能
                                    料金が安い
                                    高性能
                                </li>
                                <p>アカウント登録 </p>
                                <p>Vultrでアカウントを作成します </p>
                                <p>Vultr </p>
                                <p>Vultrを使用するには、クレジットカードを登録する必要があります</p>
                                <p>登録しても勝手に課金されることはないので安心してください徴</p>
                                <p>メールアドレスの認証もしておいてください</p>
                                <p>sshキー作成</p>
                                <p>ローカルでsshキーを作成します</p>
                                <Tutorial1321 />
                                <p>sshキーをcatコマンドで表示できるので、コピーします</p>

                                <Tutorial1322 />
                                <p>sshキー登録</p>
                                <p>vultrにログインして、コピーしたsshキーを登録します。</p>
                                <p>ファイヤーウォール設定</p>
                                <p>ProductsのFirewall画面に遷移して、プラスボタンをクリックします。</p>

                                <p>Descriptionに適当な名前を入力します</p>
                                <p>下記のように登録します。</p>
                                <li>
                                    ssh：22番
                                    http：80番
                                    https：443番
                                    mysql：3306番
                                </li>
                                <p>VPSレンタル</p>
                                <p>VPSをレンタルします</p>
                                <p>ProductsのInstances画面に遷移して、プラスボタンをクリックします</p>
                                <p>インスタンスの種類を順番に選択していきます。</p>
                                <li>
                                    Choose Server：Cloud Compute
                                    Server Location：Tokyo
                                </li>

                                <li>
                                    Server Type：Ubuntu 18.04
                                    Server Size：$5
                                </li>

                                <li>
                                    SSH Keys：先ほど登録したsshキー
                                    Firewall Group：先ほど登録したfirewall
                                </li>
                                <p>Deploy Nowをクリックすると、インスタンスが作成されます。</p>

                                <p>インスタンスができると、サーバーの情報を表示することができます。</p>
                                <p>IPアドレスと管理パスワードはメモしておきます。</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 4 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="ml-80">
                                <p>デプロイ設定
                                    デプロイに必要な設定をします。

                                    ローカルで開発しているだけでは設定を変える必要はないですが、デプロイするとなると、セキュリティ面を考慮して設定を変更する必要があります。 </p>
                                <p>#.gitignore</p>
                                <p> GitHubにコミットしないように、追加します。</p>
                                <p className='text-red-400'>.gitignore</p>
                                <Tutorial1341 />
                                <p> #requirements.txt</p>
                                <p>django-environとgunicornを追加します。</p>

                                <p className='text-red-400'>requirements.txt</p>
                                <Tutorial1342 />

                                <p>settings</p>
                                <p>setting.pyを変更します。</p>
                                <p className='text-red-400'>mysite/settings.py</p>
                                <Tutorial1343 />


                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 5 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="ml-80">
                                <p>デプロイ用の設定が完了したので、デプロイしていきます。 </p>
                                <p>サーバーの構成は、クライアント → Nginx → gnicorn → djangoとなります。 </p>
                                <h2>クローン</h2>
                                <p>アプリケーションをGitHubからクローンします。 </p>
                                <Tutorial1351 />
                                <p>ここでは、Cloudinaryを使用します </p>
                                <p>Cloudinaryとは？</p>
                                <p>Cloudinaryは、メディアファイルのアップロードやクラウド上のストレージへの保管ができるサービスです。</p>

                                <p>アカウントの作成</p>
                                <p>Cloudinary</p>
                                <p>右上ボタンの「SING UP FOR FREE」ボタンを押して、アカウントを作成して下さい</p>
                                <p>Account Detailにユーザー情報が表示されますす</p>
                                

                                <p>cloudinaryをインストール</p>
                                <p>cloudinaryをインストールします。</p>
                              


                                <p>設定変更</p>
                                <p>Account Detailに表示された情報をCLOUDINARY_STORAGEに追加しますす</p>
                                
                                <p>確認</p>
                                <p>ローカルでcloudinaryに画像がアップロードできるか試してみましょう</p>
                                
                                <p>パッケージ定義</p>
                                <p>新しいパッケージをインストールしたので、requirements.txtにパッケージをまとめます</p>
                                
                                <p>GitHubにコミット</p>
                                <p>GitHubにコミットします</p>
                                <p>Herokuにcloudinaryをインストール</p>
                                <p>Herokuにcloudinaryのaddonをインストールします</p>
                                <p>addonインストール</p>
                                <p>addonはクレジットカードをHerokuに登録する必要があります</p>
                                
                                <p>Herokuにデプロイ</p>
                                <p>Herokuにデプロイします</p>
                              
                                <p>本番環境でcloudinaryに画像がアップロードできるか試してみましょう。</p>

                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 6 ? (
                    <Layout_tutorial_13>
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

                                

                                <p>紐づけ</p>
                                <p>GitHubリポジトリに移動して、下記コマンドを実行して、GitHubとHerokuアプリを紐づけします。</p>
                               


                                <p>xxxは既存のHerokuアプリ名</p>
                                <p>Herokuにデプロイ</p>
                                <p>Herokuアプリを登録できたら、Herokuにデプロイします</p>
                                

                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : id == 7 ? (
                    <Layout_tutorial_13>
                        <div className="w-3/4">
                            <div className="text-3xl m-4">
                                TOYOTA
                            </div>
                            <div className="ml-80">
                                <p>おわりに </p>
                                <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                                <p>Herokuデプロイのチュートリアルはここまでで終わりとなります。</p>
                                <p>デプロイ方法</p>
                                <p>本番環境へのデプロイ方法が理解できましたでしょうか！？</p>
                                <p>どんどんWebアプリケーションを開発して、全世界に公開していきましょう。</p>
                                <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                                <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                                <p>Djangoドキュメント</p>
                            </div>
                        </div>
                    </Layout_tutorial_13>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post
const Tutorial1321 = () => {
    const test = `
    $ ssh-keygen -t rsa
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1322 = () => {
    const test = `
    $ cat ~/.ssh/id_rsa.pub
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1341 = () => {
    const test = `
    myvenv
                        db.sqlite3
                        .vscode
                        __pycache__
                        *.pyc
                        .DS_Store
                        images
                        media
                        local_settings.py
                        .env
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1342 = () => {
    const test = `
    Django~=3.1.4
    Pillow~=8.1.0
    django-widget-tweaks~=1.4.8
    django-environ~=0.4.5
    gunicorn~=20.0.4
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1343 = () => {
    const test = `
    import os

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app',
    'widget_tweaks',
    ]

    MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ]

    ROOT_URLCONF = 'mysite.urls'

    TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': True,
    'OPTIONS': {
        'context_processors': [
    'django.template.context_processors.debug',
    'django.template.context_processors.request',
    'django.contrib.auth.context_processors.auth',
    'django.contrib.messages.context_processors.messages',
    ],
},
},
    ]

    WSGI_APPLICATION = 'mysite.wsgi.application'

    DATABASES = {
        'default': {
        'ENGINE': 'django.db.backends.sqlite3',
    'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
}

    AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
},
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
},
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
},
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
},
    ]

    LANGUAGE_CODE = 'ja'

    TIME_ZONE = 'Asia/Tokyo'

    USE_I18N = True

    USE_L10N = True

    USE_TZ = True

    STATIC_URL = '/static/'
    MEDIA_URL = '/media/'
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1344 = () => {
    const test = `

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1351 = () => {
    const test = `
    cd
    mkdir src
    cd src
    git clone https://github.com/xxxx/deploytest.git
    cd deploytest
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1352 = () => {
    const test = `
    haruyasu@vultr:~/src/deploytest$ python3 -m venv myvenv
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1353 = () => {
    const test = `
    haruyasu@vultr:~/src/deploytest$ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1354 = () => {
    const test = `
    (myvenv) haruyasu@vultr:~/src/deploytest$ pip3 install --upgrade pip setuptools
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1355 = () => {
    const test = `
    (myvenv) haruyasu@vultr:~/src/deploytest$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1356 = () => {
    const test = `
    $ sudo mkdir /usr/share/nginx/html/static
    $ sudo mkdir /usr/share/nginx/html/media
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1357 = () => {
    const test = `
    (myvenv) haruyasu@vultr:~/src/deploytest$ sudo python3 manage.py collectstatic
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1358 = () => {
    const test = `
    (myvenv) haruyasu@vultr:~/src/deploytest$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial1359 = () => {
    const test = `
    $ sudo nano /etc/nginx/sites-available/default
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial13510 = () => {
    const test = `
    server {
        listen 80;
    server_name xxx.xxx.xxx.xxx;

    location /static {
        alias / usr / share / nginx / html / static;
}

    location /media {
        alias / usr / share / nginx / html / media;
}

    location / {
        proxy_pass http://127.0.0.1:8000;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_set_header X-Forwarded-Proto $scheme;
}
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};