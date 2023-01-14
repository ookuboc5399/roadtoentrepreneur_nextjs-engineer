import { useRouter } from 'next/router'
import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import { Layout_tutorial_2 } from '../../../../components/layout/engineer/tutorial/Layout_tutorial';

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      {
        id == 1 ? (
          <Layout_tutorial_2>
                <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>ステップ1では基本的なブログの機能を構築しました。 </p>
                        <p>このチュートリアルでは、さらに機能を追加していきます。 </p>
                        <p>Djangoの使い方を学習していきましょう </p>
                        <p>目標 </p>
                        <p>下記を学習していきます。 </p>
                        <p>画像のアップロード。 </p>
                        
                       
                        <p>カテゴリの追加。 </p>
                       
                        <p>検索機能の追加 </p>
                       
                        <p>機能 </p>
                        <p>画像のアップロード </p>
                        <p>カテゴリ追加 </p>
                        <p>ブログ内検索 </p>

                        <p>エラーが発生した場合 </p>
                        <p>詳しいコードの解説は、Djangoの公式ページを参考にして下さい。</p>
                        <p>もしエラーが発生したり、分かりにくい箇所は下記のGitHubにてソースコードを参考にして下さい。</p>
                        <p>前提知識</p>
                        <p>Djangoを始める前に、下記の言語は学習しておいて下さい。</p>
                       
                        
                       
                        <p>Python</p>
                        <p>HTML</p>
                     
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>では、始めて行きましょう！！</p>
                    </div>
                </div>
          </Layout_tutorial_2>
        ) : id == 2 ? (
          <Layout_tutorial_2>
                            <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備 </p>
                        <p>このチュートリアルは、ステップ1をベースに機能を追加していきます </p>
                        <p>もし、ステップ1を実施していない方は、戻って実施して下さい。 </p>
                        <p>ステップ1では、Djangoの機能を詳しく解説していますので、もし分からなくなったらステップ1を参照下さい。 </p>
                       
                        
                    </div>
                </div>
          </Layout_tutorial_2>
        ) : id == 3 ? (
          <Layout_tutorial_2>
                           <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>準備 </p>
                        <p>requirements </p>
                        <p>画像をアップロードするには、Pillowパッケージを使用します。。 </p>
                        <Tutorial231 />
                        <p>インストール。 </p>
                        <p>仮想環境にパッケージをインストールします</p>
                        
                        <Tutorial232 />
                        <p>Pillowがインストールできない場合(Mac) </p>
                        <Tutorial233 />
                        <p>settings </p>
                        <p>画像をアップロードするURLを指定します。 </p>
                        <Tutorial234 />
                        <p>プロジェクトURL</p>
                        <p>urlpatternsに画像の場所を追加します。</p>
                        <Tutorial235 />

                        <p>モデル</p>
                        <p>画像のモデルを追加します。</p>
                        <Tutorial236 />
                        <p>コード解説</p>
                        <p>upload_toで画像のアップロード先を指定します。</p>
                        <Tutorial237 />
                        マイグレーション実行
                        <p>モデルを変更したら、下記コマンドで必ずデータベースの再構築が必要になります。</p>
                        <p>マイグレーションをするのを忘れて起動させると、エラーが発生しますので、必ずマイグレーションをしましょう。</p>
                        <Tutorial238 />
                        <p>フォーム</p>
                        <p>画像をアップロードするフォームを追加します。</p>
                        <Tutorial239 />
                        <p>ビュー</p>
                        <p>画像をアップロード用の処理を追加します。</p>
              
                        <Tutorial2310 />

                        <p>コード解説</p>
                        <p>フォームから画像を取得する方法は、request.FILESを使用します。</p>
                        <Tutorial2311 />
                        <p>画像の初期データは、他のデータと同じように指定します。</p>
                       
                        <Tutorial2312 />
                        <p>テンプレート</p>
                        <p>index</p>
                        <p>トップページに画像を表示させます。</p>
                        <Tutorial2313 />
                        <p>コード解説</p>
                        <p>画像を指定する場合は、post.image.urlとurlまで記載します。</p>
                        <Tutorial2314 />
                        <p>post_form</p>
                        <p>投稿画面に画像アップロードを追加します。</p>
                        <Tutorial2315 />
                        <p>コード解説</p>
                        <p>画像をフォームからアップロードする場合は、必ずフォームにenctype="multipart/form-data"を指定する必要があります。</p>
                        <p>これがないと、画像をフォームからアップロードできません。</p>
                        <p>エラーも出ないので、よく覚えておいて下さい。</p>
                        <Tutorial2316 />
                        <p>post_detail</p>
                        <p>詳細画面に画像を表示させます。</p>
                        <Tutorial2317 />
                        <p>CSS</p>
                        <p>CSSで画像を装飾します。</p>
                        <Tutorial2318 />
                        <p>確認</p>
                        <p>新規投稿や編集で画像がアップロードできることを確認します。</p>
                    </div>
                </div>
          </Layout_tutorial_2>
        ) : id == 4 ? (
          <Layout_tutorial_2>
                          <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                    <p>カテゴリ機能 </p>
                    <p>ブログにカテゴリを追加します。 </p>
                    <p>カテゴリをクリックすると、カテゴリ毎の一覧が表示されます。 </p>
                        <p>準備 </p>
                        <p>すでにいくつかブログを投稿している場合は、すべて投稿を削除しておきましょう。 </p>
                        <p>モデルを変更しますので、エラーを防ぐためです。 </p>
                        <p>モデル </p>
                        <p>Categoryモデルを追加します。 </p>
                        <p>Postモデルにもカテゴリを紐づけておきます。 </p>
                        
                        <Tutorial241 />
                        <p>Admin </p>
                        <p>管理画面でカテゴリを登録できるようにします。 </p>
                       
                        <Tutorial242 />
                        <p>マイグレーション実行 </p>
                        <p>モデルを変更したら、下記コマンドで必ずデータベースの再構築が必要になります。 </p>
                        <p>マイグレーションをするのを忘れて起動させると、エラーが発生しますので、必ずマイグレーションをしましょう。 </p>
                        <Tutorial243 />
                        <p>カテゴリ登録 </p>
                        <p>管理画面でカテゴリをいくつか登録します。 </p>
                        <p>登録したカテゴリの中から選んでブログを投稿することになります。 </p>
                        <p>URL </p>
                        <p>カテゴリ用のURLを作成します</p>
                     
                        <Tutorial244 />
                        <p>フォーム</p>
                        <p>カテゴリを選択できるようにフォームを作成します。</p>
                        <Tutorial245 />
                        <p>コード解説</p>
                        <p>カテゴリのデータをすべて取得しています。</p>
                     
                        <Tutorial246 />
                        <p>ChoiceFieldを使用して、登録されたカテゴリを選ぶようにします。</p>
                        <Tutorial247 />
                        <p>Tips</p>
                        <p>データベースを削除したあとに、migrateをしようとすると、下記のエラーが発生します。</p>
                        <Tutorial248 />
                        <p>これは、models.pyよりもforms.pyが先に読み込まれてしまうため、forms.pyでCategoryを使用していると、データベースがありませんとエラーになります。</p>
                        <p>解決方法としては、category_dataを空のリストで設定して、migrateすることで解決します。</p>
                        <Tutorial249 />
                        <p>もし、no such tableとエラーが発生した場合は、forms.pyで使用しているモデルを一旦削除してみて下さい。</p>
                        <p>ビュー</p>
                        <p>カテゴリを選択できるようにビューを修正します。</p>
                        <Tutorial2410 />
                        <p>コード解説</p>
                        <p>フォームからカテゴリのデータを取得して、post_data.categoryにデータを登録します。</p>
                        <Tutorial2411 />
                        <p>URLからカテゴリの名前を取得して、投稿データにフィルターをかけています。</p>
                        <p>フィルターをかけることによって、指定したカテゴリのみの投稿データを取得することができます。</p>
                        <Tutorial2412 />
                        <p>コンテキストプロセッサー</p>
                        <p className='border-2 border-green-400'>変数をビューからテンプレートに直接渡さなくても、テンプレート上で変数を使えるようにする仕組みです。</p>
                        <p>色々なところに表示させたい時に使用すると便利です。</p>
                        <p>appフォルダの中にcontext_processors.pyを作成します。</p>
                        <Tutorial2413 />
                        <p>コード解説</p>
                        <p>カテゴリデータをすべて取得して、そのデータをreturnで返しています。</p>
                        <p>こうすることで、どのテンプレートでもcategory_dataを使用して、カテゴリを取得することができます。</p>
                        <Tutorial2414 />
                        <p>settings</p>
                        <p>作成したコンテキストプロセッサーを有効にします。</p>
                        <Tutorial2415 />
                        <p>テンプレート</p>
                        <p>index</p>
                        <p>トップページにカテゴリを表示させます。</p>
                        <Tutorial2416 />
                        <p>コード解説</p>
                        <p>コンテキストプロセッサーで設定したcategory_dataを使用しています。</p>
                        <Tutorial2417 />
                        <p>post_form</p>
                        <p>投稿画面にカテゴリを追加します。</p>
                        <Tutorial2418 />
                        <p>post_detail</p>
                        <p>詳細画面にカテゴリを表示させます。</p>
                        <Tutorial2419 />
                        <p>CSS</p>
                        <p>CSSでリンクを装飾します。</p>
                        <Tutorial2420 />
                        <p>確認</p>
                        <p>カテゴリをクリックして、カテゴリ毎の一覧になるか確認します。</p>
                        <p>新規投稿や編集でカテゴリが選択できるか確認して下さい。</p>
                    </div>
                </div>
          </Layout_tutorial_2>
        ) : id == 5 ? (
          <Layout_tutorial_2>
                         <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>検索機能 </p>
                        <p>検索機能を追加します。</p>
                        <p>ブログ内を指定したキーワードで検索することができます。 </p>
                        <p>URL</p>
                        <p>検索用のURLを作成します。 </p>
                       
                        <Tutorial251 />
                        <p>ビュー </p>
                        <p>検索用のビューを修正します </p>
                       
                        <Tutorial252 />
                        <p>コード解説 </p>
                        <p>Qオブジェクトを使用して、or検索をします。 </p>
                        <Tutorial253 />
                        <p>全角と半角の空文字列を除外しています。 </p>
                      
                        <Tutorial254 />
                        <p>reduce関数は、関数内関数を扱えます。</p>
                        <p>and_は第2引数に、リスト内包表記で「keyword」をひとつずつQオブジェクトに与えています。</p>
                        <p>こうすることによって、一文字ずつ抽出することができます。</p>
                        <Tutorial255 />
                        <p>投稿データをフィルターにかけて、データを取得します。</p>
                      
                        <Tutorial256 />
                        <p>テンプレート</p>
                        <p>index</p>
                        <p>トップページに検索を表示させます。</p>
                        <Tutorial257 />
                        <p>コード解説</p>
                        <p>検索ボタンを押すことで、inputの値がビューに送られます。</p>
                        <Tutorial258 />
                        <p>確認</p>
                 
                        <p>検索フォームでキーワードを入力して、検索できることを確認します。</p>
                      
                    </div>
                </div>
          </Layout_tutorial_2>
        ) : id == 6 ? (
          <Layout_tutorial_2>
                          <div className="w-3/4">
                    <div className="text-3xl m-4">
                        TOYOTA
                    </div>
                    <div className="ml-80">
                        <p>おわりに </p>
                        <p>チュートリアルを最後まで読んでいただき、誠にありがとうございました。</p>
                        <p>ブログ新機能チュートリアルはここまでで終わりとなります。 </p>
                        <p>Djangoは奥の深いフレームワークで、多くの機能を搭載することができます。</p>
                        <p>公式ドキュメントを参考にして、さらに理解を深めていきましょう。</p>
                       
                        <p>これまでの知識で基本的なWebアプリケーションを開発できます。 </p>
                        <p>ぜひオリジナルのアプリケーションを開発してみてください。</p>

                    </div>
                </div>
          </Layout_tutorial_2>
        ) : (
          <></>
        )}
    </div>
  )
}

export default Post


const Tutorial231 = () => {
  const test = `
  Django~=3.1.4
  django-widget-tweaks~=1.4.8
  django-allauth~=0.41.0
  Pillow~=8.1.0
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial232 = () => {
  const test = `
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial233 = () => {
  const test = `
  (myvenv) ~$ pip3 install openssl
  (myvenv) ~$ export LDFLAGS="-L/usr/local/opt/openssl/lib"
  (myvenv) ~$ export CPPFLAGS="-I/usr/local/opt/openssl/include"
  (myvenv) ~$ pip3 install psycopg2
  (myvenv) ~$ pip3 install -r requirements.txt
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial234 = () => {
  const test = `
  MEDIA_URL = '/media/'
  MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial235 = () => {
  const test = `
  from django.contrib import admin
  from django.urls import path, include
  
  from django.conf.urls.static import static # 追加
  from django.conf import settings # 追加
  
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('', include('app.urls')),
      path('accounts/', include('accounts.urls')),
      path('accounts/', include('allauth.urls')),
  ]
  
  if settings.DEBUG:
      urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # 追加
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial236 = () => {
  const test = `
  from django.conf import settings
  from django.db import models
  from django.utils import timezone
  
  
  class Post(models.Model):
      author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
      title = models.CharField("タイトル", max_length=200)
      image = models.ImageField(upload_to='images', verbose_name='イメージ画像', null=True, blank=True) # 追加
      content = models.TextField("本文")
      created = models.DateTimeField("作成日", default=timezone.now)
  
      def __str__(self):
          return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial237 = () => {
  const test = `
  image = models.ImageField(upload_to='images', verbose_name='イメージ画像', null=True, blank=True)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial238 = () => {
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



const Tutorial239 = () => {
  const test = `
  from django import forms


  class PostForm(forms.Form):
      title = forms.CharField(max_length=30, label='タイトル')
      content = forms.CharField(label='内容', widget=forms.Textarea())
      image = forms.ImageField(label='イメージ画像', required=False) # 追加
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2310 = () => {
  const test = `
  class CreatePostView(LoginRequiredMixin, View):
  def get(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      return render(request, 'app/post_form.html', {
          'form': form
      })

  def post(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      if form.is_valid():
          post_data = Post()
          post_data.author = request.user
          post_data.title = form.cleaned_data['title']
          post_data.content = form.cleaned_data['content']
          if request.FILES:
              post_data.image = request.FILES.get('image') # 追加
          post_data.save()
          return redirect('post_detail', post_data.id)

      return render(request, 'app/post_form.html', {
          'form': form
      })


class PostEditView(LoginRequiredMixin, View):
  def get(self, request, *args, **kwargs):
      post_data = Post.objects.get(id=self.kwargs['pk'])
      form = PostForm(
          request.POST or None,
          initial={
              'title': post_data.title,
              'content': post_data.content,
              'image': post_data.image, # 追加
          }
      )

      return render(request, 'app/post_form.html', {
          'form': form
      })
  
  def post(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      if form.is_valid():
          post_data = Post.objects.get(id=self.kwargs['pk'])
          post_data.title = form.cleaned_data['title']
          post_data.content = form.cleaned_data['content']
          if request.FILES:
              post_data.image = request.FILES.get('image') # 追加
          post_data.save()
          return redirect('post_detail', self.kwargs['pk'])

      return render(request, 'app/post_form.html', {
          'form': form
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2311 = () => {
  const test = `
  if request.FILES:
  post_data.image = request.FILES.get('image') # 追加
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2312 = () => {
  const test = `
  initial={
      'title': post_data.title,
      'content': post_data.content,
      'image': post_data.image,
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2313 = () => {
  const test = `
  <div class="row my-4">
  <div class="col-md-8">
      {% for post in post_data %}
          <div class="card mb-4 index">
              {% if post.image %}
                  <img class="card-img-top index-img" src="{{ post.image.url }}" alt="">
              {% endif %}
              <div class="card-body">
                  <h2 class="card-title">{{ post.title }}</h2>
                  <p class="card-text">{{ post.content|truncatechars:100 }}</p>
                  <div class="btn btn-warning">詳細</div>
              </div>
              <div class="card-footer text-muted">
                  {{ post.created|date }} by {{ post.author }}
              </div>
              <a class="stretched-link" href="{% url 'post_detail' post.id %}"></a>
          </div>
      {% endfor %}
  </div>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2314 = () => {
  const test = `
  {% if post.image %}
  <img class="card-img-top index-img" src="{{ post.image.url }}" alt="">
{% endif %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2315 = () => {
  const test = `
  <form method="post" enctype="multipart/form-data">
  {% csrf_token %}
  <div class="formpost">
      {% render_field form.title class="form-control" placeholder="タイトルを入力" %}
  </div>
  <div class="formpost">
      {{ form.image }}
  </div>
  <div class="formpost">
      {% render_field form.content class="form-control" placeholder="本文を入力" %}
  </div>
  <button class="btn btn-warning" type="submit">投稿する</button>
</form>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2316 = () => {
  const test = `
  <form method="post" enctype="multipart/form-data">
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2317 = () => {
  const test = `
  <h2 class="my-4">{{ post_data.title }}</h2>
  <hr>
  <p>{{ post_data.created }} by {{ post_data.author }}</p>
  <hr>
  {% if post_data.image %}
      <img class="rounded detail-img" src="{{ post_data.image.url }}" alt="">        
  {% endif %}
  <hr>
  <p>{{ post_data.content|linebreaksbr }}</p>
  {% if user.is_authenticated %}
      <hr>
      <div class="d-flex mb-5">
          <a class="btn btn-warning mr-2" href="{% url 'post_edit' post_data.id %}">編集する</a>
          <a class="btn btn-danger" href="{% url 'post_delete' post_data.id %}">削除する</a>    
      </div>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2318 = () => {
  const test = `
  /* index */
  .index-img {
      object-fit: cover;
      height: 240px;
  }
  
  /* detail */
  .detail-img {
      object-fit: cover;
      width: 100%;
      height: 400px;
  }
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial241 = () => {
  const test = `
  from django.conf import settings
  from django.db import models
  from django.utils import timezone
  
  
  class Category(models.Model):
      name = models.CharField("カテゴリ", max_length=50)
  
      def __str__(self):
          return self.name
  
  
  class Post(models.Model):
      author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
      category = models.ForeignKey(Category, verbose_name='カテゴリ', on_delete=models.PROTECT) # 追加
      title = models.CharField("タイトル", max_length=50)
      image = models.ImageField(upload_to='images', verbose_name='イメージ画像', null=True, blank=True)
      content = models.TextField("本文")
      created = models.DateTimeField("作成日", default=timezone.now)
  
      def __str__(self):
          return self.title
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial242 = () => {
  const test = `
  from django.contrib import admin
from .models import Post, Category

admin.site.register(Post)
admin.site.register(Category) # 追加
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial243 = () => {
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



const Tutorial244 = () => {
  const test = `
  from django.urls import path
  from app import views
  
  urlpatterns = [
      path('', views.IndexView.as_view(), name='index'),
      path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'),
      path('post/new/', views.CreatePostView.as_view(), name='post_new'),
      path('post/<int:pk>/edit/', views.PostEditView.as_view(), name='post_edit'),
      path('post/<int:pk>/delete/', views.PostDeleteView.as_view(), name='post_delete'),
      path('category/<str:category>/', views.CategoryView.as_view(), name='category') # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial245 = () => {
  const test = `
  from django import forms
  from .models import Category
  
  
  class PostForm(forms.Form):
      category_data = Category.objects.all()
      category_choice = {}
      for category in category_data:
          category_choice[category] = category
  
      title = forms.CharField(max_length=50, label='タイトル')
      category = forms.ChoiceField(label='カテゴリ', widget=forms.Select, choices=list(category_choice.items())) # 追加
      content = forms.CharField(label='内容', widget=forms.Textarea())
      image = forms.ImageField(label='イメージ画像', required=False)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial246 = () => {
  const test = `
  category_data = Category.objects.all()
  category_choice = {}
  for category in category_data:
      category_choice[category] = category
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial247 = () => {
  const test = `
  category = forms.ChoiceField(label='カテゴリ', widget=forms.Select, choices=list(category_choice.items()))
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial248 = () => {
  const test = `
  django.db.utils.OperationalError: no such table: app_category
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial249 = () => {
  const test = `
  class PostForm(forms.Form):
  # category_data = Category.objects.all()
  category_data = []
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2410 = () => {
  const test = `
  from django.views.generic import View
from django.shortcuts import render, redirect
from .models import Post, Category
from .forms import PostForm
from django.contrib.auth.mixins import LoginRequiredMixin


class CreatePostView(LoginRequiredMixin, View):
  def get(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      return render(request, 'app/post_form.html', {
          'form': form
      })

  def post(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      if form.is_valid():
          post_data = Post()
          post_data.author = request.user
          post_data.title = form.cleaned_data['title']
          category = form.cleaned_data['category']
          category_data = Category.objects.get(name=category)
          post_data.category = category_data
          post_data.content = form.cleaned_data['content']
          if request.FILES:
              post_data.image = request.FILES.get('image')
          post_data.save()
          return redirect('post_detail', post_data.id)

      return render(request, 'app/post_form.html', {
          'form': form
      })


class PostEditView(LoginRequiredMixin, View):
  def get(self, request, *args, **kwargs):
      post_data = Post.objects.get(id=self.kwargs['pk'])
      form = PostForm(
          request.POST or None,
          initial={
              'title': post_data.title,
              'category': post_data.category,
              'content': post_data.content,
              'image': post_data.image,
          }
      )

      return render(request, 'app/post_form.html', {
          'form': form
      })
  
  def post(self, request, *args, **kwargs):
      form = PostForm(request.POST or None)

      if form.is_valid():
          post_data = Post.objects.get(id=self.kwargs['pk'])
          post_data.title = form.cleaned_data['title']
          category = form.cleaned_data['category']
          category_data = Category.objects.get(name=category)
          post_data.category = category_data
          post_data.content = form.cleaned_data['content']
          if request.FILES:
              post_data.image = request.FILES.get('image')
          post_data.save()
          return redirect('post_detail', self.kwargs['pk'])

      return render(request, 'app/post_form.html', {
          'form': form
      })


class CategoryView(View):
  def get(self, request, *args, **kwargs):
      category_data = Category.objects.get(name=self.kwargs['category'])
      post_data = Post.objects.order_by('-id').filter(category=category_data)
      return render(request, 'app/index.html', {
          'post_data': post_data
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2411 = () => {
  const test = `
  category = form.cleaned_data['category']
  category_data = Category.objects.get(name=category)
  post_data.category = category_data
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2412 = () => {
  const test = `
  class CategoryView(View):
  def get(self, request, *args, **kwargs):
      category_data = Category.objects.get(name=self.kwargs['category'])
      post_data = Post.objects.order_by('-id').filter(category=category_data)
      return render(request, 'app/index.html', {
          'post_data': post_data
      })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2413 = () => {
  const test = `
  from .models import Category

def common(request):
  category_data = Category.objects.all()
  context = {
      'category_data': category_data,
  }
  return context
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2414 = () => {
  const test = `
  category_data = Category.objects.all()
  context = {
      'category_data': category_data,
  }
  return context
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2415 = () => {
  const test = `
  TEMPLATES = [
      {
          'BACKEND': 'django.template.backends.django.DjangoTemplates',
          'DIRS': [],
          'APP_DIRS': True,
          'OPTIONS': {
              'context_processors': [
                  'django.template.context_processors.debug',
                  'django.template.context_processors.request',
                  'django.contrib.auth.context_processors.auth',
                  'django.contrib.messages.context_processors.messages',
                  'app.context_processors.common', # 追加
              ],
          },
      },
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2416 = () => {
  const test = `
  {% extends "app/base.html" %}

{% block content %}

<div class="row my-4">
  <div class="col-md-8">
      {% for post in post_data %}
      <div class="card mb-4 index">
          {% if post.image %}
              <img class="card-img-top index-img" src="{{ post.image.url }}" alt="">
          {% endif %}
          <div class="card-body">
              <h2 class="card-title">{{ post.title }}<span class="small"> - {{ post.category }}</span></h2>
              <p class="card-text">{{ post.content|truncatechars:100 }}</p>
              <div class="btn btn-warning">詳細</div>
          </div>
          <div class="card-footer text-muted">
              {{ post.created|date }} by {{ post.author }}
          </div>
          <a class="stretched-link" href="{% url 'post_detail' post.id %}"></a>
      </div>
      {% endfor %}
  </div>

  <div class="col-md-4">
      <div class="card">
          <h5 class="card-header">このチュートリアルについて</h5>
          <div class="card-body">
              <p>ステップ1</p>
              <p class="mb-0">
                  初めてDjangoを触る方向けのチュートリアルです。
                  最小限の機能を構築してDjangoを学習しましょう。
              </p>
          </div>
      </div>

      <div class="card my-4">
          <h5 class="card-header">カテゴリ</h5>
          <div class="card-body">
              <div class="row">
                  {% for category in category_data %}
                      <div class="col-md-6">
                          <ul class="list-unstyled">
                              <li>
                                  <a href="{% url 'category' category %}">
                                      {{ category.name }}
                                  </a>
                              </li>
                          </ul>
                      </div>
                  {% endfor %}
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



const Tutorial2417 = () => {
  const test = `
  {% for category in category_data %}
  <div class="col-md-6">
      <ul class="list-unstyled">
          <li>
              <a href="{% url 'category' category %}">
                  {{ category.name }}
              </a>
          </li>
      </ul>
  </div>
{% endfor %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2418 = () => {
  const test = `
  {% extends "app/base.html" %}
  {% load widget_tweaks %}
  
  {% block content %}
  
  <div class="my-4">
      <h2>投稿</h2>
  </div>
  
  <form method="post" enctype="multipart/form-data">
      {% csrf_token %}
      <div class="formpost">
          {% render_field form.title class="form-control" placeholder="タイトルを入力" %}
      </div>
      <div class="formpost">
          {% render_field form.category class="form-control" placeholder="カテゴリを入力" %}
      </div>
      <div class="formpost">
          {{ form.image }}
      </div>
      <div class="formpost">
          {% render_field form.content class="form-control" placeholder="本文を入力" %}
      </div>
      <button class="btn btn-warning" type="submit">投稿する</button>
  </form>
  
  {% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial2419 = () => {
  const test = `
  {% extends "app/base.html" %}

  {% block content %}
  <h2 class="my-4">{{ post_data.title }}</h2>
  <p>{{ post_data.category }}</p>
  <hr>
  <p>{{ post_data.created }} by {{ post_data.author }}</p>
  <hr>
  {% if post_data.image %}
      <img class="rounded detail-img" src="{{ post_data.image.url }}" alt="">        
      <hr>
  {% endif %}
  <p>{{ post_data.content|linebreaksbr }}</p>
  {% if user.is_authenticated %}
      <hr>
      <div class="d-flex mb-5">
          <a class="btn btn-warning mr-2" href="{% url 'post_edit' post_data.id %}">編集する</a>
          <a class="btn btn-danger" href="{% url 'post_delete' post_data.id %}">削除する</a>    
      </div>
  {% endif %}
  
  {% endblock %}
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};




const Tutorial2420 = () => {
  const test = `
  /* category */

  a {
      color: black;
  }
  
  a:hover {
      text-decoration: none;
      color: orange;
  }
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};


const Tutorial251 = () => {
  const test = `
  from django.urls import path
  from app import views
  
  urlpatterns = [
      path('', views.IndexView.as_view(), name='index'),
      path('post/<int:pk>/', views.PostDetailView.as_view(), name='post_detail'),
      path('post/new/', views.CreatePostView.as_view(), name='post_new'),
      path('post/<int:pk>/edit/', views.PostEditView.as_view(), name='post_edit'),
      path('post/<int:pk>/delete/', views.PostDeleteView.as_view(), name='post_delete'),
      path('category/<str:category>/', views.CategoryView.as_view(), name='category'),
      path('search/', views.SearchView.as_view(), name='search'), # 追加
  ]
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial252 = () => {
  const test = `
  from django.db.models import Q
  from functools import reduce
  from operator import and_
  
  
  class SearchView(View):
      def get(self, request, *args, **kwargs):
          post_data = Post.objects.order_by('-id')
          keyword = request.GET.get('keyword')
  
          if keyword:
              exclusion_list = set([' ', '　'])
              query_list = ''
              for word in keyword:
                  if not word in exclusion_list:
                      query_list += word
              query = reduce(and_, [Q(title__icontains=q) | Q(content__icontains=q) for q in query_list])
              post_data = post_data.filter(query)
  
          return render(request, 'app/index.html', {
              'keyword': keyword,
              'post_data': post_data
          })
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial253 = () => {
  const test = `
  from django.db.models import Q
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial254 = () => {
  const test = `
  exclusion_list = set([' ', '　'])
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};




const Tutorial255 = () => {
  const test = `
  query = reduce(and_, [Q(title__icontains=q) | Q(content__icontains=q) for q in query_list])
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial256 = () => {
  const test = `
  post_data = post_data.filter(query)
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial257 = () => {
  const test = `
  <div class="row my-4">
  <div class="col-md-8">
      {% if keyword %}
          <h4 class="mb-4">「{{ keyword }}」の検索結果</h4>
      {% endif %}
      {% for post in post_data %}
      <div class="card mb-4 index">
          {% if post.image %}
          <img class="card-img-top index-img" src="{{ post.image.url }}" alt="">
          {% endif %}
          <div class="card-body">
              <h2 class="card-title">{{ post.title }}<span class="small"> - {{ post.category }}</span></h2>
              <p class="card-text">{{ post.content|truncatechars:100 }}</p>
              <div class="btn btn-warning">詳細</div>
          </div>
          <div class="card-footer text-muted">
              {{ post.created|date }} by {{ post.author }}
          </div>
          <a class="stretched-link" href="{% url 'post_detail' post.id %}"></a>
      </div>
      {% endfor %}
  </div>

  <div class="col-md-4">
      <div class="card">
          <h5 class="card-header">このチュートリアルについて</h5>
          <div class="card-body">
              <p>ステップ1</p>
              <p class="mb-0">
                  初めてDjangoを触る方向けのチュートリアルです。
                  最小限の機能を構築してDjangoを学習しましょう。
              </p>
          </div>
      </div>

      <div class="card my-4">
          <h5 class="card-header">検索</h5>
          <div class="card-body">
              <form method="get" action="{% url 'search' %}" class="input-group">
                  <input type="text" class="form-control" name="keyword" placeholder="ブログを検索...">
                  <button class="btn btn-warning ml-2" type="submit">検索</button>
              </form>
          </div>
      </div>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};



const Tutorial258 = () => {
  const test = `
  <form method="get" action="{% url 'search' %}" class="input-group">
  <input type="text" class="form-control" name="keyword" placeholder="ブログを検索...">
  <button class="btn btn-warning ml-2" type="submit">検索</button>
  </form>
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

