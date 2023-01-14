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
                        <p>searchテンプレート追加</p>
                        <p>検索結果の下にページネーションを追加します。</p>
                        <p>今までは50件すべて表示されていたので、10件ずつ表示するようにします</p>
                        <p>表示件数は自由にViewで設定できます</p>
                        <p>カスタムテンプレートタグを読み込むために、下記を追加します</p>
                        
                        <Tutorial6371 />
                        <Tutorial6372 />
                        <p>10件ずつ表示されています。</p>
                        <p>実際に別のページに遷移してみましょう。</p>
                  
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

