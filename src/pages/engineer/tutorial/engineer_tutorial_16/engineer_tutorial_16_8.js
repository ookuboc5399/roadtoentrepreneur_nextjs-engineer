import React from 'react'
import Layout_tutorial_16 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_16';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_16>
            <h3>Views追加</h3>
            <p>Django REST Framework は、GenericAPIView の中に一般的に必要な開発のコードをすでに用意してくれています。</p>
            <p>それを継承することで、簡単に開発をすることができます </p>
            <div class="relative sm:rounded-lg">
                <table class="w-1/3 shadow text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                クラス
                            </th>
                            <th scope="col" class="px-6 py-3">
                                操作
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                CreateAPIView
                            </th>
                            <td class="px-6 py-4">
                                登録
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                ListAPIView
                            </th>
                            <td class="px-6 py-4">
                                一覧取得
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                RetrieveAPIView
                            </th>
                            <td class="px-6 py-4">
                                取得
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                UpdateAPIView
                            </th>
                            <td class="px-6 py-4">
                                更新
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                DestroyAPIView
                            </th>
                            <td class="px-6 py-4">
                                削除
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className='text-red-400'>app/views.py</p>
            <Tutorial1681 />
            <p>Django REST Framework には多くの汎用ビューが存在しますので、どんどん活用していきましょう。 </p>
            <p>公式ドキュメント - Generic views </p>
        </Layout_tutorial_16>


    )
}


const Tutorial1681 = () => {
    const test = `
    from rest_framework import generics
    from .serializers import PostSerializer
    from .models import Post
    
    
    class PostView(generics.ListAPIView):
        queryset = Post.objects.all()
        serializer_class = PostSerializer
    
    
    class PostDetailView(generics.RetrieveAPIView):
        queryset = Post.objects.all()
        serializer_class = PostSerializer
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

