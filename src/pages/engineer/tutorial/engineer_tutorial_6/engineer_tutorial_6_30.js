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
                        <p>View追加</p>
                        <p>レストラン詳細ページで口コミを投稿するために、ShopInfo関数を変更します</p>
                        <Tutorial6301 />
                        <p>口コミを投稿した時のメッセージ機能も追加しています</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6301 = () => {
    const test = `
    from django.shortcuts import render, redirect # 追加
    from django.views.generic import TemplateView
    from .models import Pref, Category, Review # 追加
    from .forms import SearchForm, ReviewForm # 追加
    from django.db.models import Avg # 追加
    from django.contrib import messages
    import json
    import requests
    
    def ShopInfo(request, restid):
        query = get_gnavi_data(
            restid,
            "",
            "",
            "",
            1
        )
        result = gnavi_api(query)
        restaurants_info = get_restaurant_info(result)
    
        if request.method == 'GET':
            review_count = Review.objects.filter(shop_id=restid).count()
            score_ave = Review.objects.filter(shop_id=restid).aggregate(Avg('score'))
            average = score_ave['score__avg']
            if average:
                average_rate = average / 5 * 100
            else:
                average_rate = 0
            review_form = ReviewForm()
            review_list = Review.objects.filter(shop_id=restid)
    
            params = {
                'review_count': review_count,
                'restaurants_info': restaurants_info,
                'review_form': review_form,
                'review_list': review_list,
                'average': average,
                'average_rate': average_rate,
            }
            return render(request, 'foodie/shop_info.html', params)
        else:
            form = ReviewForm(data=request.POST)
    
            if form.is_valid():
                review = Review()
                review.shop_id = restid
                review.shop_name = restaurants_info[0][2]
                review.user = request.user
                review.score = request.POST['score']
                review.comment = request.POST['comment']
                is_exist = Review.objects.filter(shop_id = review.shop_id).filter(user = review.user).count()
                
                if is_exist:
                    messages.error(request, '口コミを投稿済みです')
                else:
                    review.save()
                    messages.success(request, '口コミを投稿しました')
            else:
                messages.error(request, 'エラーがあります')
    
            return redirect('shop_info', restid)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

