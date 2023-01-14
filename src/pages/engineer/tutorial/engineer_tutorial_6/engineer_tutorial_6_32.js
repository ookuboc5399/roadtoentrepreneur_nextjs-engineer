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
                        <p>Message追加</p>
                        <p>メッセージは、全ページに対応するために、ベーステンプレートに追加します。</p>
                        <Tutorial6321 />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6321 = () => {
    const test = `
    <main>
    <div class="container">
        <!-- 通知メッセージ -->
        {% if messages %}
            <div class="row align-items-center my-3">
                <div class="col-12">
                    <div class="message text-center">
                        {% for message in messages %}
                            <div class="alert{% if message.tags %} alert-{{ message.tags }}{% endif %} alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                                {{ message }}
                            </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        {% endif %}

        <!-- メイン -->
        {% block content %}
        {% endblock content %}
    </div>
</main>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

