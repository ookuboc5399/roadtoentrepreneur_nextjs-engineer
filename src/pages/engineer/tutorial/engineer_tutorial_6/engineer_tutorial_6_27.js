import Layout_tutorial_6 from '../../../../../components/layout/engineer/Django/Layout_tutorial_6';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <Layout_tutorial_6>
                        <p>Navigation追加</p>
                        <p>ナビゲーションのリンクを追加します</p>
                       
                        <Tutorial6271 />
                        <p>サインアップ、ログイン、ログアウト画面は、このように表示されます</p>
                       
                        </Layout_tutorial_6>
    )
}


const Tutorial6271 = () => {
    const test = `
    <ul class="navbar-nav ml-auto">
    {% if user.is_authenticated %}
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
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
