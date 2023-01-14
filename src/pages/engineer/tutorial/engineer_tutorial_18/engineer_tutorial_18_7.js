import React from 'react'
import Layout_tutorial_17 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_17';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_17>
            <h3>Serializer追加</h3>
            <p>Serializer とは？</p>
            <p>Serializer とは、クエリセットやモデルインスタンスのような複雑なデータを、Json 形式のフォーマットに変換することを役割としています</p>
            <p>serializers.py ファイルを作成します</p>
            <p>serializers の ModelSerializer クラスを継承すことにより、簡単に書くことができます</p>
            <p className='text-red-400'>app/serializers.py</p>
            <Tutorial1671 />
            </Layout_tutorial_17>


    )
}


const Tutorial1671 = () => {
    const test = `
    from rest_framework import serializers
    from .models import Post
    
    
    class PostSerializer(serializers.ModelSerializer):
        created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M")
    
        class Meta:
            model = Post
            fields = ('id', 'title', 'image', 'content', 'created_at')
    
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

