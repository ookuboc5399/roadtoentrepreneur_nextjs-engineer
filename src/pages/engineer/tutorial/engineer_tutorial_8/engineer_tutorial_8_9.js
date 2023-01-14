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
                        <p>スタッフ専用 </p>
                        <p>スタッフ専用ページを作成します。</p>
                        <p>スタッフが予約の確認や休日の設定、予約の削除をすることができます。 </p>
                        <p>このページは、ログインが必須になります。</p>
                        <p>URL</p>
                        <p>スタッフ専用ページのURLを追加します。</p>
                        <Tutorial891 />
                        <p>ビュー</p>
                        <p>スタッフ専用ページのビューを作成します。</p>
                        <Tutorial892 />
                        <p>コード解説</p>
                        <p>request.user.is_authenticatedでログインしているかの判定をすることができます。</p>
                        <p>ログインしていたら、今週の日曜日からカレンダーを表示します。</p>
                        <Tutorial893 />
                        <p>MyPageViewクラスはCalendarViewクラスとほぼ同じです。</p>
                        <p>ここでは予約した人の名前をcalendar変数に設定しています。</p>
                        <p>設定しておくことで、カレンダーで名前を表示することができます。</p>
                        <Tutorial894 />
                        <p>テンプレート</p>
                        <p>mypage</p>
                        <p>カレンダーと予約一覧を表示するテンプレートを作成します。</p>
                        <Tutorial895 />
                        <p>コード解説</p>
                        <p>カレンダーと予約一覧を表示するテンプレートを作成します。</p>
                        <Tutorial896 />
                        <p>CSS</p>
                        <p>CSSでスタッフ専用ページを装飾します。</p>
                        <Tutorial897 />
                        <p>確認</p>
                        <p>ログインすると、このような画面が表示されるか確認してください。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial891 = () => {
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
        path('mypage/<int:year>/<int:month>/<int:day>/', views.MyPageView.as_view(), name='mypage'), # 追加
    ]

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial892 = () => {
    const test = `
    from django.contrib.auth.mixins import LoginRequiredMixin


class StoreView(View):
    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            start_date = date.today()
            weekday = start_date.weekday()
            # カレンダー日曜日開始
            if weekday != 6:
                start_date = start_date - timedelta(days=weekday + 1)
            return redirect('mypage', start_date.year, start_date.month, start_date.day)

        store_data = Store.objects.all()

        return render(request, 'app/store.html', {
            'store_data': store_data,
        })


class MyPageView(LoginRequiredMixin, View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=request.user.id).select_related('user').select_related('store')[0]
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        start_date = date(year=year, month=month, day=day)
        days = [start_date + timedelta(days=day) for day in range(7)]
        start_day = days[0]
        end_day = days[-1]

        calendar = {}
        # 10時～20時
        for hour in range(10, 21):
            row = {}
            for day_ in days:
                row[day_] = ""
            calendar[hour] = row
        start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
        end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
        booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
        for booking in booking_data:
            local_time = localtime(booking.start)
            booking_date = local_time.date()
            booking_hour = local_time.hour
            if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
                calendar[booking_hour][booking_date] = booking.first_name

        return render(request, 'app/mypage.html', {
            'staff_data': staff_data,
            'booking_data': booking_data,
            'calendar': calendar,
            'days': days,
            'start_day': start_day,
            'end_day': end_day,
            'before': days[0] - timedelta(days=7),
            'next': days[-1] + timedelta(days=1),
            'year': year,
            'month': month,
            'day': day,
        })

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial893 = () => {
    const test = `
    if request.user.is_authenticated:
    start_date = date.today()
    weekday = start_date.weekday()
    # カレンダー日曜日開始
    if weekday != 6:
        start_date = start_date - timedelta(days=weekday + 1)
    return redirect('mypage', start_date.year, start_date.month, start_date.day)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial894 = () => {
    const test = `
    if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
    calendar[booking_hour][booking_date] = booking.first_name
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial895 = () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    <div class="text-center my-5">
        <div class="mb-3">
            <h1>予約カレンダー</h1>
            <p>{{ start_day }}～{{ end_day }}</p>
        </div>
    
        <div class="d-flex mb-2">
            <div class="mx-3 mr-auto">
                <a class="btn btn-warning" href="{% url 'mypage' before.year before.month before.day %}">前週</a>
            </div>
            <div class="mx-3">
                <a class="btn btn-warning" href="{% url 'mypage' next.year next.month next.day %}">次週</a>
            </div>
        </div>
        <div class="mb-3">
            <table class="table table-bordered bg-light">
                <thead class="thead-light">
                    <tr>
                        <th></th>
                        {% for day in days %}
                            {% if day.weekday == 5 %}
                                <th scope="col" class="text-primary">{{ day | date:"d(D)" }}</th>
                            {% elif day.weekday == 6 %}
                                <th scope="col" class="text-danger">{{ day | date:"d(D)" }}</th>
                            {% else %}
                                <th scope="col">{{ day | date:"d(D)" }}</th>
                            {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for booking_hour, booking_date in calendar.items %}
                    <tr>
                        <td scope="row">{{ booking_hour }}:00</td>
                        {% for datetime, book in booking_date.items %}
                        <td>
                            {% if book == "" %}
                                出勤
                            {% else %}
                                <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
                            {% endif %}
                        </td>
                        {% endfor %}
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
    
        <div class="row">
            <div class="col-md-3 mb-4 text-center mypage">
                <img class="mb-3" src="/{{ staff_data.user.image.url }}" class="img-fluid" alt="">
                <p>{{ staff_data.store.name }}店：{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</p>
            </div>
    
            <div class="col-md-9 mb-4">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4 text-left">
                            <h3>今週の予約</h3>
                            <hr>
                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th>お客様</th>
                                        <th>開始時刻</th>
                                        <th>終了時刻</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {% for booking in booking_data %}
                                        {% if booking.first_name != None %}
                                            <tr>
                                                <td>{{ booking.first_name }} {{ booking.last_name }}様</td>
                                                <td>{{ booking.start }}</td>
                                                <td>{{ booking.end }}</td>
                                            </tr>
                                        {% endif %}
                                    {% endfor %}                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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

const Tutorial896 = () => {
    const test = `
    {% if book == "" %}
    出勤
{% else %}
    <p class="mb-0 font-weight-bold text-success">{{ book }}様</p>
{% endif %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial897 = () => {
    const test = `
    /* mypage */

.mypage img {
    height: 150px;
    object-fit: contain;
}

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};