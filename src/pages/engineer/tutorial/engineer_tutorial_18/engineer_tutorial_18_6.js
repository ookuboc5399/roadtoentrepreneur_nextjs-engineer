import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
       <Layout_tutorial_17>
            <h3>URL追加</h3>
            <p>ルーティングを設定します。</p>
            <p>プロジェクト用 URL を作成 </p>
            <p>プロジェクト用ルーティングを作成 </p>
            <p>プロジェクト用のルーティングに、アプリケーション用のルーティングを指定します。</p>
            <p className='text-red-400'>mysite/urls.py</p>
            <Tutorial1661 />
            <p>アプリケーション用ルーティングを作成</p>
            <p>app フォルダの下に、urls.py ファイルを作成します。</p>
            <p className='text-red-400'>app/urls.py</p>
            <Tutorial1662 />
            </Layout_tutorial_17>



    )
}

const Tutorial1661 = () => {
    const test = `
    from django.contrib import admin
    from django.urls import path, include
    
    from django.conf.urls.static import static
    from django.conf import settings
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/', include('app.urls')),
    ]
    
    if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};



const Tutorial1662 = () => {
    const test = `
    from django.urls import path
    from app import views
    
    
    urlpatterns = [
        path('post/', views.PostView.as_view(), name='post'),
        path('post/<str:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    ]
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

