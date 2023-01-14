import { useRouter } from 'next/router'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_5 } from '../../../../components/layout/engineer/tutorial';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {
                id == 1 ? (
                    <Layout_tutorial_5>
                    <h3>書籍検索システム構築 </h3>
                    <p>Djangoで楽天ブックス書籍APIを使用したシステムを構築します。。 </p>
                    <p>APIの使い方を学習すると、楽天だけではなく、色々なAPIを使用してオリジナルのアプリケーションを構築することができます。 </p>
                    <p>ぜひAPIの使い方を学習しましょう。</p>
                    <p>目標 </p>
                    <p>下記を学習していきます。 </p>
        
                    <li>  APIの使い方を学習  </li>
                    <li>  検索方法を学習  </li>
                    <li>  書籍リストの表示を学習  </li>
                    <li>   書籍詳細の表示を学習  </li>
        
                    <h3>API </h3>
        
                    <p>楽天ブックス書籍APIを使用して書籍データを取得します。</p>
                    <p>楽天ブックス書籍検索API </p>
                    <p>APIテストフォーム </p>
        
                    <p>楽天API </p>
        
                    <p>楽天市場APIや楽天トラベルAPI、楽天レシピAPIなど、APIの種類はたくさんあります。</p>
                    <p>APIの使い方が分かれば、これらのAPIを使用してオリジナルアプリに取り込むことができます。</p>
        
                    <Link href="https://webservice.rakuten.co.jp/">
                        Rakuten Developers
                    </Link>
        
                    <p>ご利用ガイド</p>
                    <Link href="https://webservice.rakuten.co.jp/documentation">
                        API一覧
                    </Link>
        
                    <h3>機能</h3>
                    <li>書籍検索  </li>
                    <li>  書籍リスト  </li>
                    <li>   書籍詳細</li>
        
        
                    <h3>#エラーが発生した場合</h3>
                    <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。</p>
        
                    <p>Djangoドキュメント</p>
                    <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                    <p>参照コード</p>
        
                </Layout_tutorial_5>
                ) : id == 2 ? (
                    <Layout_tutorial_5>
                    <h3>準備 </h3>
                    <p>書籍検索システム構築チュートリアルは、カスタムユーザー構築プロジェクトをベースにしています。 </p>
                    <p>先に、カスタムユーザー構築チュートリアルを実施して下さい。 </p>
                    <Link href="./engineer_tutorial_4/engineer_tutorial_4_1/">
                    カスタムユーザー構築チュートリアル
                    </Link>
        
                    <p>カスタムユーザーを構築したフォルダは他のアプリケーションでも使えますので、すぐに使えるようにバックアップしておくとよいです。 </p>
                    <h3>仮想環境 </h3>
        
                    <p>仮想環境に入ります。</p>
                    <Tutorial521 />
                    <h3>パッケージのインストール </h3>
                    <p>このコマンドで、requirements.txtに記載されたパッケージがインストールされます。 </p>
                    <Tutorial522 />
                </Layout_tutorial_5>
                ) : id == 3 ? (
                    <Layout_tutorial_5>
                    <h3>楽天アプリID発行</h3>
                    <p>Rakuten Developersにアクセスして、APIを使用するための登録をします。 </p>
                    <p>Rakuten Developers </p>
                    <p>APIとは？</p>
                    <p>APIとは、「Application Programming Interface」の頭文字です。</p>
                    <p>APIは、ソフトウェアの一部を一般に公開しているので、他のソフトウェアでもその機能を使用することができます。</p>
        
                    <p>誰でも外部から利用することができるようになります。</p>
                    <p>そのため、オリジナルアプリケーションでも、APIを使用すると、その情報を使うことができます。 </p>
                    <p>楽天のAPIを使用すると、あなたのオリジナルアプリケーションで、楽天の商品情報を取得することができます。 </p>
        
                    <h3>#新規アプリ登録 </h3>
                    <p>アプリID発行ボタンをクリックして、新規アプリを登録します。 </p>
                    <div className='flex'>
                        <Image
                            className='m-2'
                            src="/images/programing/django/app1.png"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                    <p>アプリ新規作成フォームを入力します。 </p>
                    <p>アプリURLはGitHubのアドレスを入力しておきましょう。 </p>
                    <div className='flex'>
                        <Image
                            className='m-2'
                            src="/images/programing/django/app2.png"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                    <p>新規アプリを作成すると、アプリIDが発行されます。 </p>
                    <p>後で使用しますので、メモしておきましょう。 </p>
                    <div className='flex'>
                        <Image
                            className='m-2'
                            src="/images/programing/django/app3.png"
                            alt=""
                            width={250}
                            height={250}
                        />
                    </div>
                </Layout_tutorial_5>
                ) : id == 4 ? (
                    <Layout_tutorial_5>
                    <h3>検索システム </h3>
                    <p>書籍タイトルを検索するフォームを作成していきます。 </p>
                    <h3>URL </h3>
                    <p>トップページのURLを作成します。</p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial541 />
                    <h3>フォーム </h3>
        
                    <p>フォームを作成し、タイトルを入力できるようにします。 </p>
                    <p className='text-red-400'>app/forms.py</p>
                    <Tutorial542 />
                    <h3>ビュー</h3>
                    <p>ビューを作成します。</p>
                    <p>トップページは検索フォームだけにするので、フォームをテンプレートに渡します。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial543 />
                    <p>コード解説 </p>
                    <p>フォーム作成したら、このように書くことでフォームの内容を取得できます。 </p>
                    <Tutorial544 />
                    <h3>テンプレート </h3>
                    <h4>base </h4>
                    <p>ベースのテンプレートです。</p>
                    <Tutorial545 />
                    <h4>index </h4>
                    <p>トップページのテンプレートです</p>
                    <p>検索フォームとボタンのみとなります</p>
                    <p className='text-red-400'>app/templates/app/index.html</p>
                    <Tutorial546 />
                    <p>コード解説</p>
                    <p>widget_tweaksを使用することで、フォームにクラスを付けることができます。</p>
                    <Tutorial547 />
                    <p>確認</p>
                    <p>トップページはこのように表示されることを確認します。</p>
        
                </Layout_tutorial_5>
                ) : id == 5 ? (
                    <Layout_tutorial_5>
                    <h3>書籍リスト </h3>
                    <p>検索ボタンをクリックしたら、書籍のリストが表示されるようにします。 </p>
                    <h3>ビュー </h3>
                    <p>ビューを作成します。</p>
        
                    <p>SEARCH_URLのapplicationId=を、先ほど発行したアプリIDに変更します。 </p>
                    <p>APIに渡すパラメータは下記のページに詳しく書いてあるので、確認してください。 </p>
        
                    <p>API詳細</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial551 />
                    <p>コード解説</p>
                    <p>requests.getを使用することで、APIから情報を取得することができます。</p>
                    <p>パラメータを渡すとこのようなURLになります。。</p>
                    <p>https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?[parameter]=[value]…</p>
                    <p>？で仕切ることによってパラメータと認識します。</p>
                    <Tutorial552 />
                    <p>その結果を、json形式でロードし直しています。 </p>
                    <p>楽天APIの場合は、情報がItemsの中にあります。 </p>
                    <Tutorial553 />
                    <p>フォームのバリデーションが通ったら、form.cleaned_dataでフォームに入力したデータを取得することができます。 </p>
        
                    <Tutorial554 />
                    <p>APIに送るパラメータが決まったら、APIをコールしてJson形式でデータを取得します </p>
                    <p>リストになっているので、ループで回して必要なデータをbook_dataに格納しています。</p>
        
                    <Tutorial555 />
                    <p>テンプレート </p>
                    <p>book</p>
                    <p>ビューから渡されたデータをループで回して表示させます</p>
                    <Tutorial556 />
                    <p>CSS</p>
                    <p>CSSで書籍リストを装飾しています。</p>
                    <Tutorial557 />
                    <p>確認</p>
                    <p>フォームで検索すると、書籍リストが表示されることを確認します。</p>
                </Layout_tutorial_5>
                ) : id == 6 ? (
                    <Layout_tutorial_5>
                    <h3>書籍詳細 </h3>
                    <p>書籍をクリックしたら詳細画面を表示するようにします。 </p>
                    <p>URL </p>
                    <p>詳細画面のURLを作成します。</p>
                    <p className='text-red-400'>app/urls.py</p>
                    <Tutorial561 />
        
                    <h3>ビュー</h3>
                    <p>詳細画面のビューを作成します。</p>
                    <p className='text-red-400'>app/views.py</p>
                    <Tutorial562 />
                    <p>コード解説 </p>
                    <p>URLにisbnが渡されるので、self.kwargsで取得します。 </p>
                    <p>取得したisbnをパラメータにセットします。 </p>
                    <Tutorial563 />
                    <p>パラメータを引数としてAPIを実行します。 </p>
                    <p>表示に必要なデータを取得して、各変数に格納していきます </p>
                    <Tutorial564 />
                    <p>reviewAverageは5点満点のデータとなります。 </p>
                    <p>パーセンテージにしたいので、20倍しておきます。</p>
                    <Tutorial565 />
                    <p>テンプレート </p>
                    <p>detail </p>
                    <p>詳細画面のテンプレートを作成します。</p>
                    <Tutorial566 />
                    <p>コード解説 </p>
                    <p>レビューの点数が星で分かるようにしています</p>
                    <p>点数がパーセンテージでビューからもらえるので、widthをパーセンテージで指定すると、視覚的に分かります。</p>
                    <Tutorial567 />
                    <p>book</p>
                    <p>書籍をクリックしたら、詳細画面に遷移するようにリンクをはります。</p>
                    <Tutorial568 />
                    <p>CSS</p>
                    <p>レビュー点数の星の部分をCSSで装飾します。</p>
                    <Tutorial569 />
                    <p>確認</p>
                    <p>詳細画面が表示されることを確認してください。</p>
        
                </Layout_tutorial_5>
                ) : id == 7 ? (
                    <Layout_tutorial_5>

                    <h3>おわりに </h3>
                    <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                    <p>書籍検索システム構築のチュートリアルはここまでで終わりとなります </p>
                    <p> APIの使用方法</p>
                    <p>APIの使用方法が理解できましたでしょうか！？</p>
                    <p> 使い方さえ分かってしまえば、難しくありません</p>
                    <p>色々なAPIを使ってみてください。</p>
                    <p>APIを使用するとアイデアが一気に広がります。</p>
                    <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                    <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                </Layout_tutorial_5>
                ) : (
                    <></>
                )}
        </div>
    )
}

export default Post


const Tutorial521 = () => {
    const test = `
    $ source myvenv/bin/activate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial522 = () => {
    const test = `
    (myvenv) ~$ pip3 install -r requirements.txt
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial541 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.IndexView.as_view(), name='index'),
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial542 = () => {
    const test = `
from django import forms

class SearchForm(forms.Form):
    title = forms.CharField(label='タイトル', max_length=200, required=True)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial543 = () => {
    const test = `
from django.views.generic import View
from django.shortcuts import render
from .forms import SearchForm


class IndexView(View):
    def get(self, request, *args, **kwargs):
        form = SearchForm(request.POST or None)

        return render(request, 'app/index.html', {
            'form': form
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial544 = () => {
    const test = `
    form = SearchForm(request.POST or None)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial545 = () => {
    const test = `
{% load static %}

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
    <title>楽天ブックス書籍APIチュートリアル</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="/">楽天ブックス書籍API</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">ホーム</a>
                </li>
                {% if user.is_authenticated %}
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'profile' %}">プロフィール</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_logout' %}">ログアウト</a>
                    </li>
                {% else %}
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_signup' %}">サインアップ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{% url 'account_login' %}">ログイン</a>
                    </li>
                {% endif %}
            </ul>
        </div>
    </nav>

    <main>
        <div class="container">
            {% block content %}
            {% endblock %}
        </div>   
    </main>

    <footer class="py-2 bg-dark">
        <p class="m-0 text-center text-white">Copyright &copy; Django Startup 2020</p>
    </footer>

    {% block extra_js %}
    {% endblock %}
</body>

</html>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial546 = () => {
    const test = `
{% extends "app/base.html" %}
{% load widget_tweaks %}

{% block content %}

<div class="text-center my-5">
    <form method="post">
        {% csrf_token %}
        <div class="align-items-center">
            {% render_field form.title class="form-control" placeholder="キーワードから探す" %}
            <button class="btn btn-primary mt-2" type="submit">検索</button>    
        </div>
    </form>
</div>

{% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial547 = () => {
    const test = `
    {% render_field form.title class="form-control" placeholder="キーワードから探す" %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial551 = () => {
    const test = `
from django.views.generic import View
from django.shortcuts import render
import json
import requests
from .forms import SearchForm

SEARCH_URL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&applicationId=1111111' # ID変更


def get_api_data(params):
    api = requests.get(SEARCH_URL, params=params).text
    result = json.loads(api)
    items = result['Items']
    return items


class IndexView(View):
    def get(self, request, *args, **kwargs):
        form = SearchForm(request.POST or None)

        return render(request, 'app/index.html', {
            'form': form
        })

    def post(self, request, *args, **kwargs):
        form = SearchForm(request.POST or None)

        if form.is_valid():
            keyword = form.cleaned_data['title']
            params = {
                'title': keyword,
                'hits': 28,
            }
            items = get_api_data(params)
            book_data = []
            for i in items:
                item = i['Item']
                title = item['title']
                image = item['largeImageUrl']
                isbn = item['isbn']
                query = {
                    'title': title,
                    'image': image,
                    'isbn': isbn
                }
                book_data.append(query)

            return render(request, 'app/book.html', {
                'book_data': book_data,
                'keyword': keyword
            })

        return render(request, 'app/index.html', {
            'form': 'form'
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial552 = () => {
    const test = `
    https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?
        applicationId=[アプリID]
        &title=python
        &booksGenreId=001004008
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial553 = () => {
    const test = `
    def get_api_data(params):
    api = requests.get(SEARCH_URL, params=params).text
    result = json.loads(api)
    items = result['Items']
    return items
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial554 = () => {
    const test = `
    def post(self, request, *args, **kwargs):
    form = SearchForm(request.POST or None)

    if form.is_valid():
        keyword = form.cleaned_data['title']
        params = {
            'title': keyword,
            'hits': 28,
        }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial555 = () => {
    const test = `
    items = get_api_data(params)
book_data = []
for i in items:
    item = i['Item']
    title = item['title']
    image = item['largeImageUrl']
    isbn = item['isbn']
    query = {
        'title': title,
        'image': image,
        'isbn': isbn
    }
    book_data.append(query)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial556 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <div class="mb-5">
            <h3>「{{ keyword }}」の検索結果</h3>
        </div>
        <div class="row">
            {% for book in book_data %}
                <div class="col-3 mb-3">
                    <div class="card img-thumbnail booklist h-100">
                        <img class="card-img-top card-thum" src="{{ book.image }}" alt="">
                        <div class="card-body text-center px-2 py-3">
                            <h5 class="font-weight-bold">{{ book.title }}</h5>
                        </div>
                        <a class="stretched-link" href=""></a>
                    </div>
                </div>
            {% empty %}
                <p>該当するものはありません</p>
            {% endfor %}
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial557 = () => {
    const test = `
    /* book */

    .booklist img {
        height: 200px;
        object-fit: contain;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial561 = () => {
    const test = `
from django.urls import path
from app import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('detail/<str:isbn>', views.DetailView.as_view(), name='detail'), # 追加
]


    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial562 = () => {
    const test = `
    class DetailView(View):
    def get(self, request, *args, **kwargs):
        isbn = self.kwargs['isbn']
        params = {
            'isbn': isbn
        }

        items = get_api_data(params)
        items = items[0]
        item = items['Item']
        title = item['title']
        image = item['largeImageUrl']
        author = item['author']
        itemPrice = item['itemPrice']
        salesDate = item['salesDate']
        publisherName = item['publisherName']
        size = item['size']
        isbn = item['isbn']
        itemCaption = item['itemCaption']
        itemUrl = item['itemUrl']
        reviewAverage = item['reviewAverage']
        reviewCount = item['reviewCount']

        book_data = {
            'title': title,
            'image': image,
            'author': author,
            'itemPrice': itemPrice,
            'salesDate': salesDate,
            'publisherName': publisherName,
            'size': size,
            'isbn': isbn,
            'itemCaption': itemCaption,
            'itemUrl': itemUrl,
            'reviewAverage': reviewAverage,
            'reviewCount': reviewCount,
            'average': float(reviewAverage) * 20,
        }

        return render(request, 'app/detail.html', {
            'book_data': book_data
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial563 = () => {
    const test = `
    isbn = self.kwargs['isbn']
    params = {
        'isbn': isbn
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial564 = () => {
    const test = `
    items = get_api_data(params)
items = items[0]
item = items['Item']
title = item['title']
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial565 = () => {
    const test = `
    'average': float(reviewAverage) * 20,
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial566 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="my-5">
        <div class="row">
            <div class="col-md-6 text-center">
                <img src="{{ book_data.image }}" class="img-fluid" alt="">
            </div>
    
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4">
                            <h3>{{ book_data.title }}</h3>
                            <p class="mb-3">{{ book_data.author }}</p>
                            <hr>
                            {% if not book_data.reviewCount == 0 %}
                            <div class="d-flex flex-row">
                                <div class="star-rating">
                                    <div class="star-rating-front text-warning" style="width: {{ book_data.average }}%">★★★★★</div>
                                    <div class="star-rating-back">★★★★★</div>
                                </div>
                                <div class="average ml-2 text-danger">
                                    {{ book_data.reviewAverage|floatformat:2 }}
                                </div>
                                <div class="d-flex align-items-center ml-2">
                                    {{ book_data.reviewCount }}件
                                </div>
                            </div>
                            {% else %}
                                <p>まだレビューはありません。</p>
                            {% endif %}
                            <p class="mt-3">価格：<span class="text-danger font-weight-bold h3">{{ book_data.itemPrice }}円</span></p>
                            <a class="btn btn-primary" href="{{ book_data.itemUrl }}">買い物かごに入れる</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        {% if book_data.itemCaption %}
            <div class="mb-5">
                <h5>商品説明</h5>
                <hr>
                <p>{{ book_data.itemCaption }}</p>    
            </div>
        {% endif %}
    
        <div class="mb-5">
            <h5>商品情報</h5>
            <hr>
            <p>発売日：{{ book_data.salesDate }}</p>
            <p>著者/編集：{{ book_data.author }}</p>
            <p>出版社：{{ book_data.publisherName }}</p>
            <p>発行形態：{{ book_data.size }}</p>
            <p>ISBNコード：{{ book_data.isbn }}</p>
        </div>
    </div>
    
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial567 = () => {
    const test = `
    <div class="star-rating">
    <div class="star-rating-front text-warning" style="width: {{ book_data.average }}%">★★★★★</div>
    <div class="star-rating-back">★★★★★</div>
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial568 = () => {
    const test = `
    <a class="stretched-link" href="{% url 'detail' book.isbn %}"></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial569 = () => {
    const test = `
    /* detail */

    .star-rating {
        position: relative;
        font-size: 20px;
        word-wrap: normal !important;
    }
    
    .star-rating-front {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    
    .star-rating-back {
        color: #ccc;
    }
    
    .average {
        font-size: 20px;
        font-weight: bold;
    }
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

