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
                        <p> 新機能</p>
                        <p>ページネーション機能を追加</p>
                        <p>ポイント</p>
                        <p>page_objに、ページネーション情報を代入して、テンプレートに渡します。</p>
                        <Tutorial6351 />
                     
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6351 = () => {
    const test = `
    from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger # 追加

    def Search(request):
        ...
                result = gnavi_api(query)
                total_hit_count = len(result)
                restaurant_list = get_restaurant_info(result)
                page_obj = paginate_queryset(request, restaurant_list, 10) # 追加
    
            context = {
                'total_hit_count': total_hit_count,
                'restaurant_list': page_obj.object_list, # 追加
                'page_obj': page_obj, # 追加
            }
    
            return render(request, 'foodie/search.html', context)
    
    def paginate_queryset(request, queryset, count): # 追加
        paginator = Paginator(queryset, count)
        page = request.GET.get('page')
        try:
            page_obj = paginator.page(page)
        except PageNotAnInteger:
            page_obj = paginator.page(1)
        except EmptyPage:
            page_obj = paginator.page(paginator.num_pages)
        return page_obj
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


