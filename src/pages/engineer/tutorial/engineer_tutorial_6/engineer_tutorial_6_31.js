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
                        <p>shop_infoテンプレート追加</p>
                        <p>口コミが投稿された時に、口コミの平均点を表示するようにします。</p>
                        <Tutorial6311 />
                        <p>口コミの一覧を、店情報の下に追加します。</p>
                        <Tutorial6312 />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6311 = () => {
    const test = `
    <div class="col-md-8">
    <div class="card-body">
        <strong class="d-inline-block mb-2 text-success">{{ restaurants_info.0.32 }}</strong>
        <h3 class="mb-2">{{ restaurants_info.0.2 }}</h3>
        {% if not average_rate == 0 %}
        <div class="d-flex flex-row">
            <div class="star-rating">
                <div class="star-rating-front" style="width: {{ average_rate }}%">★★★★★</div>
                <div class="star-rating-back">★★★★★</div>
            </div>
            <div class="average ml-2">
                {{ average|floatformat:2 }}
            </div>
            <div class="d-flex align-items-center ml-2">
                <i class="fas fa-comment-dots fa-fw"></i>{{ review_count }}件
            </div>
        </div>
        {% else %}
            <p>まだ口コミはありません。</p>
        {% endif %}
        <hr>
        <p class="card-text mb-1"><i class="fas fa-map-marker-alt fa-fw my-icon"></i>{{ restaurants_info.0.14 }}</p>
        <p class="card-text mb-3"><i class="fas fa-subway fa-fw my-icon"></i>{{ restaurants_info.0.21 }}・徒歩{{ restaurants_info.0.23 }}分</p>
        <p class="card-text mb-auto">{{ restaurants_info.0.27|linebreaksbr }}</p>   
    </div>
</div>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6312 = () => {
    const test = `
    <tr>
    <td class="bg-light text-center">電子マネー</td>
    <td>{{ restaurants_info.0.37 }}</td>
</tr>
</table>
</div>
</div>

<div class="col-md-12">
<p><i class="fas fa-store-alt fa-fw my-icon2"></i> 口コミ情報</p>
<div class="card card-outline-secondary mb-3">
<div class="card-header">
口コミ一覧
</div>
<div class="card-body">
{% if review_list %}
    {% for item in review_list %}
        <div class="d-flex flex-row">
            <div class="star-rating mb-2">
                <div class="star-rating-front" style="width: {{ item.get_score_percent }}%">★★★★★</div>
                <div class="star-rating-back">★★★★★</div>
            </div>
        </div>
        <p>{{ item.comment }}</p>
        <small class="text-muted">Posted by {{ item.user }} on {{ item.created_at }}</small>
        <hr>
    {% endfor %}
{% else %}
    <p>まだ口コミはありません。</p>
{% endif %}
</div>
</div>
<div class="card card-outline-secondary">
<div class="card-header">
口コミを投稿する
</div>
<div class="card-body">
{% if user.is_authenticated %}
    <form class="login-form" action="" method="POST">
        {{ review_form.non_field_errors }}
        <div class="evaluation">
            <input type="hidden" name="score" value="3">
            <input id="score1" type="radio" name="score" value="5" />
            <label for="score1"><span class="text">最高</span>★</label>
            <input id="score2" type="radio" name="score" value="4" />
            <label for="score2"><span class="text">良い</span>★</label>
            <input id="score3" type="radio" name="score" value="3" />
            <label for="score3"><span class="text">普通</span>★</label>
            <input id="score4" type="radio" name="score" value="2" />
            <label for="score4"><span class="text">悪い</span>★</label>
            <input id="score5" type="radio" name="score" value="1" />
            <label for="score5"><span class="text">最悪</span>★</label>
        </div>

        <div class="form-group text-center" type="text">
            {{ review_form.comment }}
        </div>

        {% csrf_token %}
        <div class="text-center">
            <button type="submit" class="btn btn-success">投稿</button>
        </div>

        {% if form.errors %}
            <br>
            <p>エラー内容</p>
            {% for field in form %}
                {% for error in field.errors %}
                    <p>{{ error }}</p>
                {% endfor %}
            {% endfor %}
        {% endif %}
    </form>
{% else %}
    <p class="mb-3">口コミを投稿するには、ログインして下さい。</p>
    <a class="btn btn-success" href="{% url 'account_signup' %}">サインアップ</a>
    <a class="btn btn-success" href="{% url 'account_login' %}">ログイン</a>
{% endif %}
</div>
</div>
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