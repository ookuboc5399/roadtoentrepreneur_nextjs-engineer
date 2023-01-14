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
                        <p>indexテンプレート追加</p>
                        <p>おすすめレストランは、トップページの下に表示します。</p>
                        <p>ポイント</p>
                        <p>Viewから渡されたpickup_restaurantからレストラン情報を表示します。</p>
                       
                        <Tutorial6341 />
                     
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6341 = () => {
    const test = `
    <div class="text-center">
                <button class="btn btn-success" type="submit">この条件で絞り込む</button>
            </div>
        </form>
    </div>

    <h2 class="mb-4">歓送迎会 おすすめのお店 <i class="fas fa-beer my-icon2"></i></h2>

    <div class="row">
        {% for restaurant in pickup_restaurant %}
        <div class="col-md-4 mb-5">
            <div class="card h-100">
                {% if restaurant.11 %}
                    <img class="card-img-top" src="{{ restaurant.11 }}" alt="{{ restaurant.2 }}">
                {% else %}
                    <img class="card-img-top" src="https://placehold.jp/300x300.png?text=No Image" alt="{{ restaurant.2 }}">
                {% endif %}
                <div class="card-body">
                    <strong class="d-inline-block mb-2 text-success">{{ restaurant.32 }}</strong>
                    <h4 class="mb-2">{{ restaurant.2 }}</h4>
                    <p class="card-text mb-1"><i class="fas fa-subway fa-fw my-icon"></i>{{ restaurant.21 }}・徒歩{{ restaurant.23 }}分</p>
                    <p class="card-text mb-2"><i class="fas fa-yen-sign fa-fw my-icon"></i>平均{{ restaurant.33 }}円</p>
                    <p class="card-text mb-auto">{{ restaurant.26|linebreaksbr }}</p>
                </div>
                <a href="{% url 'shop_info' restaurant.0 %}" class="stretched-link"></a>
            </div>
        </div>
        {% endfor %}
    </div>
{% endblock content %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


