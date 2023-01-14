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
                        <p>休日設定 </p>
                        <p>スタッフがカレンダーで休日を設定できるようにします。</p>
                        <p>URL </p>
                        <p>休日設定のURLを作成します。</p>
                        <Tutorial8101 />
                        <p>ビュー</p>
                        <p>休日設定のビューを作成します。</p>
                        <Tutorial8102 />
                        <p>コード解説</p>
                        <p>ボタンをクリックした時のみに動作するように、加えておきます。</p>
                        <Tutorial8103 />
                        <p>引数で渡された日付と時間で休日を設定します。</p>
                        <p>れは自分の名前で、その時間を予約するということです。</p>
                        <p>こうすると、ユーザーからはすでに予約済みとなるので、予約できなくなります。</p>
                        <Tutorial8104 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>出勤ボタンをクリックすると、休日が設定されるようにします。</p>
                        <p>休日が設定されたら、休みと表示されます</p>
                        <Tutorial8105 />
                        <p>確認</p>
                        <p>出勤ボタンをクリックして、休日が設定されるか確認してください。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial8101 = () => {
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
        path('mypage/holiday/<int:year>/<int:month>/<int:day>/<int:hour>/', views.Holiday, name='holiday'), # 追加
    ]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial8102 = () => {
    const test = `
    from django.views.decorators.http import require_POST


    @require_POST
    def Holiday(request, year, month, day, hour):
        staff_data = Staff.objects.get(id=request.user.id)
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        end_time = make_aware(datetime(year=year, month=month, day=day, hour=hour + 1))
    
        # 休日追加
        Booking.objects.create(
            staff=staff_data,
            start=start_time,
            end=end_time,
        )
    
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

const Tutorial8103 = () => {
    const test = `
    @require_POST
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8104 = () => {
    const test = `
    Booking.objects.create(
        staff=staff_data,
        start=start_time,
        end=end_time,
    )
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8105 = () => {
    const test = `
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
    {% endif %}
</td>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
