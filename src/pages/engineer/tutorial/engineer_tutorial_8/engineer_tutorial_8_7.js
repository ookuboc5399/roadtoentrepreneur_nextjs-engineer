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
                        <p>予約機能 </p>
                        <p>カレンダーをクリックして、予約する機能を作成します</p>
                        <p>URL</p>
                        <p>予約のURLを作成します。</p>
                        <Tutorial871 />
                        <p>フォーム </p>
                        <p>約フォームを作成するために、フォームを追加します。 </p>
                        <Tutorial872 />
                        <p>ビュー</p>
                        <p>予約のビューを作成します。</p>
                        <Tutorial873 />
                        <p>コード解説 </p>
                        <p>予約情報にスタッフと時間でフィルターをして、データが存在していたら、ワーニングを出します。 </p>
                        <p>予約確定ボタンを押さないと予約されないため、別の人が同じ時間に予約確定ボタンを押した時に発生します。</p>
                        <Tutorial874/>
                        <p>予約確定ボタンを押したら、ユーザーデータをデータベースに保存します。</p>
                        <Tutorial875/>
                        <p>テンプレート</p>
                        <p>booking</p>
                        <p>予約情報を表示するテンプレートを作成します。</p>
                        <Tutorial876 />
                        <p>コード解説</p>
                        <p>予約の入れ違いがあった時に、表示されます</p>
                        <Tutorial877 />
                        <p>widget_tweaksを使用することで、フォームにクラスを付けることができます。</p>
                        <Tutorial878 />
                        <p>calendar</p>
                        <p>カレンダーをクリックすると、予約画面に遷移するリンクを作成します。</p>
                        <Tutorial879 />
                        <p>CSS</p>
                        <p>CSSで予約フォームを装飾します。</p>
                        <Tutorial8710 />
                        <p>確認</p>
                        <p>カレンダーをクリックすると、予約画面が表示され、予約ができるか確かめてください</p>
                        <p>予約が確定すると、×マークが表示されます。</p>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
                

const Tutorial871 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    urlpatterns = [
        path('', views.StoreView.as_view(), name='store'),
        path('store/<int:pk>/', views.StaffView.as_view(), name='staff'),
        path('calendar/<int:pk>/', views.CalendarView.as_view(), name='calendar'),
        path('calendar/<int:pk>/<int:year>/<int:month>/<int:day>/', views.CalendarView.as_view(), name='calendar'),
        path('booking/<int:pk>/<int:year>/<int:month>/<int:day>/<int:hour>/', views.BookingView.as_view(), name='booking'), # 追加
    ]
    

    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial872 = () => {
    const test = `
    from django import forms


    class BookingForm(forms.Form):
        first_name = forms.CharField(max_length=30, label='姓')
        last_name = forms.CharField(max_length=30, label='名')
        tel = forms.CharField(max_length=30, label='電話番号')
        remarks = forms.CharField(label='備考', widget=forms.Textarea())
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial873 = () => {
    const test = `
    from datetime import datetime, date, timedelta, time
from django.db.models import Q
from django.shortcuts import get_object_or_404, redirect, render
from django.utils.timezone import localtime, make_aware
from django.views.generic import View
from app.models import Store, Staff, Booking
from app.forms import BookingForm


class BookingView(View):
    def get(self, request, *args, **kwargs):
        staff_data = Staff.objects.filter(id=self.kwargs['pk']).select_related('user').select_related('store')[0]
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        hour = self.kwargs.get('hour')
        form = BookingForm(request.POST or None)

        return render(request, 'app/booking.html', {
            'staff_data': staff_data,
            'year': year,
            'month': month,
            'day': day,
            'hour': hour,
            'form': form,
        })

    def post(self, request, *args, **kwargs):
        staff_data = get_object_or_404(Staff, id=self.kwargs['pk'])
        year = self.kwargs.get('year')
        month = self.kwargs.get('month')
        day = self.kwargs.get('day')
        hour = self.kwargs.get('hour')
        start_time = make_aware(datetime(year=year, month=month, day=day, hour=hour))
        end_time = make_aware(datetime(year=year, month=month, day=day, hour=hour + 1))
        booking_data = Booking.objects.filter(staff=staff_data, start=start_time)
        form = BookingForm(request.POST or None)
        if booking_data.exists():
            form.add_error(None, '既に予約があります。\n別の日時で予約をお願いします。')
        else:
            if form.is_valid():
                booking = Booking()
                booking.staff = staff_data
                booking.start = start_time
                booking.end = end_time
                booking.first_name = form.cleaned_data['first_name']
                booking.last_name = form.cleaned_data['last_name']
                booking.tel = form.cleaned_data['tel']
                booking.remarks = form.cleaned_data['remarks']
                booking.save()
                return redirect('store') # あとで変更

        return render(request, 'app/booking.html', {
            'staff_data': staff_data,
            'year': year,
            'month': month,
            'day': day,
            'hour': hour,
            'form': form,
        })
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial874 = () => {
    const test = `
    booking_data = Booking.objects.filter(staff=staff_data, start=start_time)
form = BookingForm(request.POST or None)
if booking_data.exists():
    form.add_error(None, '既に予約があります。\n別の日時で予約をお願いします。')
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial875= () => {
    const test = `
    booking = Booking()
    booking.staff = staff_data
    booking.start = start_time
    booking.end = end_time
    booking.first_name = form.cleaned_data['first_name']
    booking.last_name = form.cleaned_data['last_name']
    booking.tel = form.cleaned_data['tel']
    booking.remarks = form.cleaned_data['remarks']
    booking.save()
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial876= () => {
    const test = `
    {% extends "app/base.html" %}
    {% load widget_tweaks %}
    
    {% block content %}
    <div class="card card-booking my-5 mx-auto">
        <div class="card-body">
            <h5 class="card-title text-center">予約内容</h5>
            <table class="booking_table mb-4">
                <tbody>
                    <tr>
                        <th class="header">店舗</th>
                        <td class="data">{{ staff_data.store.name }}店</td>
                    </tr>
                    <tr>
                        <th class="header">スタッフ</th>
                        <td class="data">{{ staff_data.user.first_name }} {{ staff_data.user.last_name }}</td>
                    </tr>
                    <tr>
                        <th class="header">日程</th>
                        <td class="data">
                            {% for error in form.non_field_errors %}
                                <h5 class="text-danger">{{ error|linebreaksbr }}</h5>
                            {% endfor %}
                            {{ year }}年{{ month }}月{{ day }}日 {{ hour }}:00
                        </td>
                    </tr>
                </tbody>
            </table>
            <h5 class="card-title text-center">予約情報</h5>
            <form method="post">
                {% csrf_token %}
                <table class="booking_table mb-4">
                    <tbody>
                        <tr>
                            <th class="header">お名前</th>
                            <td class="data form_wrap form_wrap__2col">
                                {% render_field form.first_name class="form-control" placeholder="姓" %}
                                {% render_field form.last_name class="form-control" placeholder="名" %}
                            </td>
                        </tr>
                        <tr>
                            <th class="header">電話番号</th>
                            <td class="data">
                                {% render_field form.tel class="form-control" placeholder="080-1234-5678" %}
                            </td>
                        </tr>
                        <tr>
                            <th class="header">その他備考</th>
                            <td class="data">
                                {% render_field form.remarks class="form-control" %}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="button mx-auto">
                    <button class="btn btn-lg btn-warning btn-block" type="submit">予約確定</button>
                </div>
            </form>
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



const Tutorial877= () => {
    const test = `
    {% for error in form.non_field_errors %}
    <h5 class="text-danger">{{ error|linebreaksbr }}</h5>
{% endfor %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial878= () => {
    const test = `
    {% render_field form.first_name class="form-control" placeholder="姓" %}
{% render_field form.last_name class="form-control" placeholder="名" %}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial879= () => {
    const test = `
    <a href="{% url 'booking' staff_data.pk datetime.year datetime.month datetime.day hour %}">
    <i class="far fa-circle text-info"></i>
</a>
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial8710= () => {
    const test = `
    /* booking */

.card-booking {
    max-width: 800px;
}

.booking_table {
    width: 100%;
    border: 1px solid #D1DBEB;
    border-radius: 8px;
    border-collapse: separate;
    overflow: hidden;
}

.booking_table .header {
    width: 200px;
    padding: 16px 24px;
    text-align: left;
    background: #F1F5FA;
}

.booking_table .data {
    padding: 16px 24px;
}

.form_wrap {
    display: grid;
    gap: 16px;
}

.form_wrap__2col {
    grid-template-columns: repeat(2, 1fr);
}
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};