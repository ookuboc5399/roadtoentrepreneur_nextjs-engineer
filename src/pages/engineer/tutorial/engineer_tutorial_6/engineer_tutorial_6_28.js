import Layout_tutorial_6 from '../../../../../components/layout/engineer/Django/Layout_tutorial_6';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';


export default function Home() {
    return (
        <Layout_tutorial_6>
                        <p>Model追加</p>
                        <p>新機能</p>
                        <p>口コミ機能を追加</p>
                        <p>ユーザーがレストランの口コミを投稿するので、Modelを追加する必要があります。</p>
                        <p>コメントとスコアも登録するようにしました。</p>
                        <p>スコアは5段階評価で★を選択する形式にしています。</p>
                        <Tutorial6281 />
                        <p>データベース構築</p>
                        <p>モデルを追加したら、下記コマンドで必ずデータベースの再構築が必要になります。</p>
                        <Tutorial6282 />
                        </Layout_tutorial_6>
    )
}


const Tutorial6281 = () => {
    const test = `
    from django.contrib.auth.models import User # 追加

    class Review(models.Model): # 追加
        SCORE_CHOICES = [
            (1, '★'),
            (2, '★★'),
            (3, '★★★'),
            (4, '★★★★'),
            (5, '★★★★★'),
        ]
    
        shop_id = models.CharField('レストランID', max_length=10, blank=False)
        shop_name = models.CharField('レストラン名', max_length=200, blank=False)
        user = models.ForeignKey(User, on_delete=models.PROTECT)
        comment = models.TextField(verbose_name='口コミ', blank=False)
        score = models.PositiveSmallIntegerField(verbose_name='スコア', choices=SCORE_CHOICES, default='3')
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
    
        def get_score_percent(self):
            score_percent = round(self.score / 5 * 100)
            return score_percent
    
        class Meta:
            unique_together = ('shop_id', 'user')
    
        def __str__(self):
            return str(self.shop_id)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};


const Tutorial6282 = () => {
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