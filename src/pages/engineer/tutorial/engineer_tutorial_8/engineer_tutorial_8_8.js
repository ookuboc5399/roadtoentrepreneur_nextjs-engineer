import Header_engineer from '../../../components/header/header_engineer';
import Chaptertutorial8 from '../../../components/chapter/programing/chapter_programing_tutorial8';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <div class="">
            <Header_engineer />
            <div className="flex ">
                <div className="w-1/4">
                    <Chaptertutorial8/>
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約完了 </p>
                        <p>予約完了ページを作成します</p>
                        <p>URL</p>
                        <p>予約完了URLを作成します</p>
                        <Tutorial881 />
                        <p>ビュー</p>
                        <p>予約完了画面に遷移したいので、リダイレクトを書き換えます。</p>
                        <p>TemplateViewクラスを使用して、文字だけを表示します。</p>
                        <Tutorial882 />
                        <p>テンプレート</p>
                        <p>thanks</p>
                        <p>予約完了のテンプレートを作成します</p>
                        <Tutorial883 />
                        <p>確認</p>
                        <p>予約が完了すると、このような画面に遷移することを確定してください。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial881 = () => {
    const test = `
    from django.urls import path
from app import views

urlpatterns = [
    path('', views.StoreView.as_view(), name='store'),
    path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
    path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
    path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
    path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
    path('thanks/', views.ThanksView.as_view(), name='thanks'), # 追加
]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial882 = () => {
    const test = `
    from django.views.generic import View, TemplateView

class BookingView(View):
    ...

    def post(self, request, *args, **kwargs):
        ...
                return redirect('thanks')


class ThanksView(TemplateView):
    template_name = 'app/thanks.html'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial883 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <h1 class="mb-5">ご予約ありがとうございました。</h1>
        <p class="mb-2">担当より予約確定のお電話がありますので、少々お待ちください。</p>
        <p class="mb-4">お客様のご来店をスタッフ一同心よりお待ちしております。</p>
        <a class="btn btn-primary" href="/">ホームに戻る</a>
    </div>
    {% endblock %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
