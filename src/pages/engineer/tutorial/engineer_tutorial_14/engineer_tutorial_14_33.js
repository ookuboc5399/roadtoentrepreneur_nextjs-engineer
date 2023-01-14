import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
        <Layout_tutorial_14>
                    <p>最終動作確認</p>
                        <p>お支払いをして有料会員になれるか最終動作確認をします。</p>
                        <p>念のため NextJS と Webhook サーバーを再起動しておいてください</p>
                     
                        <Tutorial14331/>
                        <Tutorial14332/>
                        <p>今は無料会員ですので、トップページのこちらからボタンをクリックします</p>
                        <p>お支払いボタンをクリックします。</p>
                        <p>Stripe のチェックアウト画面に遷移します。</p>
                        <p>Stripe で設定した商品が表示されます。</p>
                        <p>今はテストモードなので、カード情報はテスト用の番号を入力します</p>
                        <Tutorial14333/>
                        <p>カード番号を入力して、申し込むボタンをクリックします。</p>
                        <p>お支払いが完了すると、チェックアウト完了画面に遷移します。</p>
                        <p>トップページに遷移します。</p>
                        <p>有料会員の期限と有料コンテンツが表示されています。</p>
                        <p>こうなっていればお支払いが成功となります。</p>
                        <p>もし有料コンテンツが表示されていない場合は、Webhook がうまくいっていない可能性もあるので、再起動するなど調べてみてください。</p>
                        <p>DRF 参照コード</p>
                        <p>Next.js 参照コード</p>
        </Layout_tutorial_14>


    )
}
               


const Tutorial14331= () => {
    const test = `
    $ npm run dev
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14332= () => {
    const test = `
    $ stripe listen --forward-to localhost:3000/api/webhooks
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14333= () => {
    const test = `
   
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
