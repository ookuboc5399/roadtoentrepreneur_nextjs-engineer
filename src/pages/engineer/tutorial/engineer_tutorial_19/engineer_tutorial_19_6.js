import React from 'react'
import Layout_tutorial_19 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_19';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_19>
            <h3>Covid19用のSliceを</h3>
            <p>featuresの直下にcovidという名前でフォルダーを作ります</p>
            <p>covidSlice.tsというファイルを作成する </p>
            <p>createSliceとcreateAsyncThunkをインポート。createSliceはSliceを作るものでcreateAsyncThunkは非同期の</p>
            <p>RootStateはappフォルダーのstore.tsでexportされている</p>

            <p>covidフォルダ内にdata.jsonと時系列データのdataDaily.json</p>
            <p>この2つのファイルをインポート。</p>
              <p>typeofを使ってdataJsonの型を取得</p>
              <h4>slice全体のstateの構造を定義</h4>
              <h4>initialStateを定義</h4>
              <p>dataには初期値。countryは空の文字列</p>
              <p></p>
              <p></p>
                <h4>sliceの作成</h4>
              <p></p>
              <p></p> 
              <p></p>
            <p className='text-red-400'>app/urls.py</p>
            <Tutorial1662 />
            </Layout_tutorial_19>



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

