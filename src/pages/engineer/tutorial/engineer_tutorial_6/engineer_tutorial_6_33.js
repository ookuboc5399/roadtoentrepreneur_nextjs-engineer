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
                        <p>おすすめ機能を追加</p>
                        <p>トップページにおすすめレストランを表示する機能を追加します。</p>
                        <p>この条件でおすすめレストランを決めることができます</p>
                        <Tutorial6331 />
                        <p>ポイント</p>
                        <p>get_context_data関数の戻り値に、テンプレートで使用したいデータを渡します。</p>
                        <Tutorial6332 />
                    </div>
                </div>
            </div>
        </div>
    )
}


const Tutorial6331 = () => {
    const test = `
    # おすすめレストラン
category_l = "RSFST09000" # 居酒屋
pref = "PREF13" # 東京都
freeword = "歓送迎会"
num = 6
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial6332 = () => {
    const test = `
    class IndexView(TemplateView):
    template_name = 'foodie/index.html'

    def get_context_data(self, *args, **kwargs):
        searchform = SearchForm()

        # おすすめレストラン
        category_l = "RSFST09000" # 居酒屋
        pref = "PREF13" # 東京都
        freeword = "歓送迎会"
        num = 6

        query = get_gnavi_data(
            "",
            category_l,
            pref,
            freeword,
            num
        )

        result = gnavi_api(query)
        pickup_restaurant = get_restaurant_info(result)

        params = {
            'searchform': searchform,
            'pickup_restaurant': pickup_restaurant,
            }
        return params
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

