import Link from 'next/link'
import Layout from '../../components/Layout'
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
                    <Chaptertutorial8 />
                </div>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>予約削除 </p>
                        <p>予約を削除できる機能を追加します。</p>
                        <p>URL </p>
                        <p>予約削除のURLを追加します。</p>
                        <Tutorial8111 />
                        <p>ビュー</p>
                        <p>予約削除のビューを作成します。</p>
                        <Tutorial8112 />
                        <p>コード解説</p>
                        <p>delete関数を使用することで、データを削除することができます。</p>
                        <Tutorial8113 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>カレンダーに削除ボタンを追加します。</p>
                        <Tutorial8114 />
                        <p>確認</p>
                        <p>カレンダーに削除ボタンが表示されるので、予約を削除できるか試してみてください。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial8111 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'),
        path('thanks/', views.ThanksView.as_view(), name='thanks'),
        path('mypage/<int:year>/<int:month>/<int:day>/', views.MyPageView.as_view(), name='mypage'),
        path('mypage/holiday/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Holiday, name='holiday'),
        path('mypage/delete/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Delete, name='delete'), # 追加
    ]
    
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial8112 = () => {
    const test = `
    @require_POST
    def Delete(request, year, month, day, hour):
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        booking_data = Booking.objects.filter(start=start_time)
    
        # 予約削除
        booking_data.delete()
    
        start_date = date(year=year, month=month, day=day)
        weekday = start_date.weekday()
        # カレンダー日曜日開始
        if weekday != 6:
            start_date = start_date - timedelta(days=weekday + 1)
        return redirect('mypage', year=start_date.year, month=start_date.month, day=start_date.day)
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8113 = () => {
    const test = `
    booking_data.delete()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8114 = () => {
    const test = `
    <tr>
    <td scope="row">{{ booking_hour }}:00</td>
    {% for datetime, book in booking_date.items %}
    <td>
        {% if book == "" %}
            <form method="POST" action="{% url 'holiday' datetime.year datetime.month datetime.day booking_hour %}">
                {% csrf_token %}
                <button class="btn btn-light" type="submit">出勤</button>
            </form>
        {% else %}
            {% if book == None %}
                <p class="mb-0">休み</p>
            {% else %}
                <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
            {% endif %}
            <form method="POST" action="{% url 'delete' datetime.year datetime.month datetime.day booking_hour %}">
                {% csrf_token %}
                <button class="btn btn-danger" type="submit">取消</button>
            </form>
        {% endif %}
    </td>
    {% endfor %}
</tr>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
