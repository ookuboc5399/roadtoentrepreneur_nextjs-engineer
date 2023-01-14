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
                        <p>カレンダー </p>
                        <p>カレンダー画面を作成します。</p>
                        <p>ここがこのチュートリアルのメインとなります</p>
                        <p>モデル</p>
                        <p>予約モデルを作成します。</p>
                        <Tutorial861 />
                       
                        <p>Admin </p>
                        <p>管理画面でデータを登録できるようにします</p>
                        <Tutorial862 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを追加したので、マイグレーションが必要になります </p>
                        <Tutorial863/>
                        <p>URL</p>
                        <p>カレンダー画面は、日程を指定しない場合と指定した場合の2つのURLを用意します。</p>
                        <Tutorial864 />
                        <p>コード解説</p>
                        <p>別のURLで、同じビューを使用するテクニックです。。</p>
                        <p>ビューでURLがある場合とない場合で、判定して処理をすることができます。</p>
                        <Tutorial865 />
                        <p>ビュー</p>
                        <p>カレンダーを表示するためのビューを作成します。</p>
                        <p>日付と時間で2次元配列を使用しますので、少し複雑になっています。</p>
                        <Tutorial866 />
                        <p>コード解説</p>
                        <p>select_relatedを使用することで、SQLを実行する回数を減らすことができます。</p>
                        <p>SQLが実行される分だけ表示するスピードが遅くなります</p>
                        <p>この場合、スタッフモデルからユーザー情報や店舗情報を取得するときに、select_relatedを使用することによって、SQLの実行を一度にしています。</p>
                        <p>効率的にQueryを取り出す方法</p>
                        <Tutorial867 />
                        <p>2通りURLを作成しました。</p>
                        <p>year、month、dayのあるURLとないURLです。</p>
                        <p>もしURLにyear、month、dayがある場合は、その日をカレンダーの始めの日とします。</p>
                        <p>もし日程に指定がない場合は、本日をカレンダーの始めの日とします。</p>
                        <Tutorial868 />
                        <p>週の始めの日から7日間をリストとして格納しています。</p>
                        <p>days[0]で週の始め、days[-1]で週の終わりを指定しています。</p>
                        <Tutorial869 />
                        <p>calendarは日付と時間で2次元配列になっています。</p>
                        <p>予約前の変数はTrueをしておきます。</p>
                        <p>予約がされたら、この変数をFalseにします。</p>
                        <Tutorial8610 />
                        <p>combineを使用することによって、日付と時間を合わせることができます。</p>
                        <p>そして、make_aware関数を使用することによって、設定したでタイムゾーンに変更します。</p>
                        <p>タイムゾーンはきちんと意識をしないとバグの原因になりますので、気をつけてください。</p>
                        <p>native timeはタイムゾーンを意識しない時間</p>
                        <p>aware time はタイムゾーンを意識した時間</p>
                        <Tutorial8611 />
                        <p>Qオブジェクトを使用することによって、OR検索することができます。</p>
                        <p>よく使いますので、覚えておいて下さい</p>
                        <li>
                        __gt：より大きい
                        __gte：以上
                        __lt：より小さい
                        __lte：以下
                        </li>
                        <Tutorial8612 />
                        <p>localtime関数を使用することによって、現地のタイムゾーンに変更します。</p>
                        <Tutorial8613 />
                        <p>予約がある場合は、変数をFalseに設定します。</p>
                        <Tutorial8614 />
                        <p>テンプレート</p>
                        <p>calendar</p>
                        <p>カレンダーのテンプレートを作成します。</p>
                        <Tutorial8615 />
                        <p>コード解説</p>
                        <p>calendarは2次元配列になっているので、横軸は日付、縦軸は時間となり表示しています。</p>
                        <Tutorial8616 />
                        <p>staff</p>
                        <p>スタッフをクリックするとカレンダーが表示されるようにリンクを作成します。</p>
                        <Tutorial8617 />
                        <p>CSS</p>
                        <p>CSSでカレンダー画面を装飾します。</p>
                        <Tutorial8618 />
                        <p>確認</p>
                        <p>店舗をクリックして、スタッフリスト画面がこのように表示されるか確認してください。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial861 = () => {
    const test = `
    from django.utils import timezone


class Booking(models.Model):
    staff = models.ForeignKey(Staff, verbose_name='スタッフ', on_delete=models.CASCADE)
    first_name = models.CharField('姓', max_length=100, null=True, blank=True)
    last_name = models.CharField('名', max_length=100, null=True, blank=True)
    tel = models.CharField('電話番号', max_length=100, null=True, blank=True)
    remarks = models.TextField('備考', default="", blank=True)
    start = models.DateTimeField('開始時間', default=timezone.now)
    end = models.DateTimeField('終了時間', default=timezone.now)

    def __str__(self):
        start = timezone.localtime(self.start).strftime('%Y/%m/%d %H:%M')
        end = timezone.localtime(self.end).strftime('%Y/%m/%d %H:%M')
        return f'{self.first_name}{self.last_name} {start} ~ {end} {self.staff}'

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial862 = () => {
    const test = `
    from django.contrib import admin
    from .models import Store, Staff, Booking
    
    admin.site.register(Store)
    admin.site.register(Staff)
    admin.site.register(Booking)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial863 = () => {
    const test = `
    (myvenv) ~$ python3 manage.py makemigrations
    (myvenv) ~$ python3 manage.py migrate
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial864 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'), # 追加
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'), # 追加
    ]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial865= () => {
    const test = `
    path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
    path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial866= () => {
    const test = `
    from datetime import datetime, date, timedelta, time
from django.db.models import Q
from django.shortcuts import get_object_or_404, render
from django.utils.timezone import localtime, make_aware
from django.views.generic import View
from app.models import Store, Staff, Booking


class CalendarView(View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
        today = date.today()
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        if year and month and day:
            # 週始め
            start_date = date(year=year, month=month, day=day)
        else:
            start_date = today
        # 1週間
        days = [start_date + timedelta(days=day) for day in range(7)]
        start_day = days[0]
        end_day = days[-1]

        calendar = {}
        # 10時～20時
        for hour in range(10, 21):
            row = {}
            for day in days:
                row[day] = True
            calendar[hour] = row
        start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
        end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
        booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
        for booking in booking_data:
            local_time = localtime(booking.start)
            booking_date = local_time.date()
            booking_hour = local_time.hour
            if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
                calendar[booking_hour][booking_date] = False

        return render(request, 'app/calendar.html', {
            'staff_data': staff_data,
            'calendar': calendar,
            'days': days,
            'start_day': start_day,
            'end_day': end_day,
            'before': days[0] - timedelta(days=7),
            'next': days[-1] + timedelta(days=1),
            'today': today,
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial867= () => {
    const test = `
    staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial868= () => {
    const test = `
    today = date.today()
year = self.kwargs.get('year')
month = self.kwargs.get('month')
day = self.kwargs.get('day')
if year and month and day:
    # 週始め
    start_date = date(year=year, month=month, day=day)
else:
    start_date = today
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial869= () => {
    const test = `
    # 1週間
days = [start_date + timedelta(days=day) for day in range(7)]
start_day = days[0]
end_day = days[-1]
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8610= () => {
    const test = `
    calendar = {}
    # 10時～20時
    for hour in range(10, 21):
        row = {}
        for day in days:
            row[day] = True
        calendar[hour] = row
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8611= () => {
    const test = `
    start_time = make_aware(datetime.combine(start_day, time(hour=10, minute=0, second=0)))
    end_time = make_aware(datetime.combine(end_day, time(hour=20, minute=0, second=0)))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8612= () => {
    const test = `
    booking_data = Booking.objects.filter(staff=staff_data).exclude(Q(start__gt=end_time) | Q(end__lt=start_time))
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8613= () => {
    const test = `
    for booking in booking_data:
    local_time = localtime(booking.start)
    booking_date = local_time.date()
    booking_hour = local_time.hour
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8614= () => {
    const test = `
    if (booking_hour in calendar) and (booking_date in calendar[booking_hour]):
    calendar[booking_hour][booking_date] = False
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8615= () => {
    const test = `
    {% extends "app/base.html" %}

    {% block content %}
    
    <div class="text-center my-5">
        <div class="row">
            <div class="col-md-6 mb-4 text-center calendar">
                <img src="/{{ staff_data.user.image.url }}" class="img-fluid" alt="">
            </div>
    
            <div class="col-md-6 mb-5">
                <div class="card">
                    <div class="card-body px-2 py-1">
                        <div class="p-4 text-left">
                            <h3>{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</h3>
                            <hr>
                            <p>店舗：{{ staff_data.store.name }}店</p>
                            <p>{{ staff_data.user.description|linebreaksbr }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="mb-3">
            <h1>予約カレンダー</h1>
            <p>{{ start_day }}～{{ end_day }}</p>
        </div>
    
        <div class="d-flex mb-2">
            <div class="mx-3 mr-auto">
                <a class="btn btn-warning" href="{% url 'calendar' staff_data.pk before.year before.month before.day %}">前週</a>
            </div>
            <div class="mx-3">
                <a class="btn btn-warning" href="{% url 'calendar' staff_data.pk next.year next.month next.day %}">次週</a>
            </div>
        </div>
        <div class="">
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
                    {% for hour, schedules in calendar.items %}
                        <tr>
                            <td scope="row">{{ hour }}:00</td>
                            {% for datetime, book in schedules.items %}
                                <td>
                                    {% if datetime <= today %}
                                        -
                                    {% elif book %}
                                        <a href="">
                                            <i class="far fa-circle text-info"></i>
                                        </a>
                                    {% else %}
                                        <i class="fas fa-times text-danger"></i>
                                    {% endif %}
                                </td>
                            {% endfor %}
                        </tr>
                    {% endfor %}
                </tbody>
            </table>
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

const Tutorial8616= () => {
    const test = `
    {% for hour, schedules in calendar.items %}
    <tr>
        <td scope="row">{{ hour }}:00</td>
        {% for datetime, book in schedules.items %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8617= () => {
    const test = `
    <a class="stretched-link" href="{% url 'calendar' staff.pk %}"></a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8618= () => {
    const test = `
    /* calendar */

    .calendar img {
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