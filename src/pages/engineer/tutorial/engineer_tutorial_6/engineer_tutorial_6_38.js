import Link from 'next/link'
import Layout from '../../components/Layout'
import Header_engineer from '../../../components/header/header_engineer';
import Chaptertutorial4 from '../../../components/chapter/programing/chapter_programing_tutorial4';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial6 />
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>Herokuデプロイ</p>
                        <p>ステップ1同様にHerokuにデプロイをして、公開します。</p>
                        <p>設定</p>
                        <p>ポイント</p>
                        <p>django-herokuをインポートすることによって、デプロイに必要な設定をしてくれます</p>
                        
                        <Tutorial6381 />
                        <p>Procfile作成</p>
                        <p>Procfileは、アプリのプロセスタイプやエントリーポイントを宣言するファイルです。</p>
                        <p>Procfileを作成します</p>
                        <Tutorial6382 />
                        <Tutorial6383 />
                        <p>mysiteの部分はあなたが作成したプロジェクトのディレクトリ名を指定します。</p>
                        <p>gunicornは、Djangoを動かすWebサーバーです。</p>
                        <p>runtime.txt作成</p>
                        <p>runtime.txtにはプログラム実行時に必要なものを定義します。</p>
                        <p>ここではPythonが必要なのでPythonのバージョンを指定します。</p>
                        <p>runtime.txtを作成します。</p>
                        <Tutorial6384 />
                        <Tutorial6385 />
                        <p>Herokuを操作</p>
                        <p>Herokuにデプロイする準備ができましたので、Herokuを操作していきます。</p>
                        <p>Herokuがインストールされていることを確認してください。</p>
                        <p>WSL</p>
                        <p>WSLを使用している方は、sudoが必要になります。</p>
                        <Tutorial6386 />
                        <p>Herokuにログイン</p>
                        <p>ターミナルからHerokuにログインします。</p>
                        <Tutorial6387 />
                        <p>Herokuプロジェクト作成</p>
                        <p>Herokuにプロジェクトを作成します。</p>
                        <p>好きなプロジェクト名を指定して下さい</p>
                        <p>このプロジェクト名がURLになりますので、既に他の人に使われているプロジェクト名は指定できません。</p>
                        <Tutorial6388 />
                        <p>Herokuにpush</p>
                        <p>GitHub</p>
                        <p>Herokuにpushする前に、GitHubにすべてコミットしておいて下さい</p>
                        <Tutorial6389 />
                        <p>プロセスを起動</p>
                        <p>下記コマンドでgunicornサーバーを起動します。</p>
                        <Tutorial63810 />
                        <p>Herokuのデータベースを構築</p>
                        <p>migrateコマンドをしてデータベースを構築します。</p>
                        <Tutorial63810 />
                        <p>管理ユーザーを作成</p>
                        <p>ローカルと同じようにHerokuでも管理ユーザーを作成することができます。</p>
                        <Tutorial63811 />
                        <p>パスワード</p>
                        <p>ユーザー名、メールアドレス、パスワードを入力します。 パスワードの入力は表示されませんので、間違えずに入力して下さい。</p>
                        <p>これで無事デプロイ完了です。</p>
                        <p>デプロイしたURLにアクセスしてみましょう。</p>
                        <p>ローカルと同じ画面が表示されているはずです</p>
                        <p>データベース</p>
                        <p>最初はデータがない初期状態なので、カテゴリと都道府県のデータを管理画面(/admin/)から登録する必要があります。</p>
                        <p>https://xxxx.herokuapp.com/admin/</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6371 = () => {
    const test = `
    {% load utils %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6372 = () => {
    const test = `
    {% extends 'foodie/base.html' %}
{% load static %}
<!-- 追加 -->
{% load utils %}

		<div class="col-md-9">
            {% if restaurant_list %}
                <!-- 追加 -->
				<p class="my-4">検索結果 {{ total_hit_count }} 件 <small>{{ page_obj.start_index }}～{{ page_obj.end_index }}件を表示</small></p>
				{% for resutaurant in restaurant_list %}
                ...
				{% endfor %}

                <!-- 追加 -->
				<ul class="pagination justify-content-center">
					{% if page_obj.has_previous %}
						<li class="page-item">
							<a class="page-link" href="?{%  url_replace request 'page' page_obj.previous_page_number %}">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
					{% endif %}
				
					{% for num in page_obj.paginator.page_range %}
						{% if page_obj.number == num %}
							<li class="page-item active">
								<a class="page-link" href="#!">
									{{ num }}
								</a>
							</li>
						{% else %}
							<li class="page-item">
								<a class="page-link" href="?{%  url_replace request 'page' num %}">
									{{ num }}
								</a>
							</li>
						{% endif %}
					{% endfor %}
				
					{% if page_obj.has_next %}
						<li class="page-item">
							<a class="page-link" href="?{%  url_replace request 'page' page_obj.next_page_number %}">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					{% endif %}
				</ul>
			{% else %}
				<h4 class="mt-5">該当するものはありません。</h4>
			{% endif %}
		</div>
	</div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

