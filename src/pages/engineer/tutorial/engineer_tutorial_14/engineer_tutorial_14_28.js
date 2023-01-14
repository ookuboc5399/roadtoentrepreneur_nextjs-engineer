import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_14>
 <p>Stripe登録</p>
                        <p>Stripe のアカウントを作成します。</p>
                        <p>API キー</p>
                        <p>アカウントを作成したら開発者ボタンをクリックして、API キー画面に遷移します</p>
                        <p>公開可能キーとシークレットキーをメモします。 </p>
                        <p>NextJS プロジェクトの.env ファイルに公開可能キーとシークレットキーを追加します。</p>
                        <p>公開可能キー：NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY </p>
                        <p>シークレットキー：NEXT_PUBLIC_STRIPE_SECRET_KEY</p>
                        <Tutorial14281/>
                        <p>商品</p>
                        
                
                        <p>商品を追加します。</p>
                        <p>商品ボタンをクリックして、商品画面に遷移します。</p>
                        <p>商品を追加ボタンで継続 1000 円などで商品を追加します。</p>
                        <p>商品を追加すると、商品詳細の料金項目にAPI IDがありますので、コピーします。</p>
                        <p>コピーした料金のAPI IDを.env に追加します。</p>
                        <Tutorial14282/>
                        
                        <p>ブランディング設定</p>
                        <p>設定のブランディングでアイコンやロゴ、ブランドカラーなどを設定します。</p>
                        <p>以上の設定をするだけで、Stripe を使用してお支払いが可能になります。</p>
                        <p>他にもメール設定など細かい設定をすることができますので、Stripe のドキュメントを見ながら設定してみてください。</p>
                      
        </Layout_tutorial_14>
                   
                   
    )
}
               


const Tutorial14281= () => {
    const test = `
    NEXT_PUBLIC_API_URL=http://localhost:8000
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
    NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14282= () => {
    const test = `
    NEXT_PUBLIC_API_URL=http://localhost:8000
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
    NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
    NEXT_PUBLIC_STRIPE_PRICE=price_xxxxx
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
