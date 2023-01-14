import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_14>
<p>Webhook</p>
                        <p>サブスクリプションのお支払いが完了すると、webhook を受け取ります</p>
                        <p>この webhook から顧客情報を取得して Django のデータベースを更新します</p>
                        <p>フロントエンドからデータベースを操作するのではなく、Stripe 側からデータベースを操作することでセキュリティが高まります。</p>
                        <p>webhook </p>
                        <p>Webhook を受け取った時に動作させるコードを書いていきます。</p>
                        <p>毎月のサブスクリプションが成功すると、invoice.payment_succeededイベントを受信します</p>
                        <p>顧客ID、メールアドレス、作成日を使用して Django のデータベースを更新します。 </p>
                        <p>毎月invoice.payment_succeededがコールされると、有効期限が 1 ヶ月ずつ更新されていきます。</p>
                        <p>イベントがコールされないと、有効期限が更新されないので、有効期限が切れてしまうと、有料コンテンツが見れなくなります。</p>
                        <p>詳細は下記のドキュメントを参考にしてください</p>
                        <p>pages/api フォルダに webhooks フォルダを作成し、index.js ファイルを作成します。</p>
                        <Tutorial14301/>
                        <p>Stripe Webhook 設定</p>
                        <p>Stripe で Webhook の設定をします。</p>
                        <p>開発者ボタンをクリックして、Webhook 画面に遷移します。</p>
                        <p>ローカル環境でテストボタンをクリックします</p>
                        <p>Stripe CLI インストール</p>
                        <p>Stripe の Webhook をテストするために、Stripe CLI をインストールします</p>
                        <p>インストールが完了したら、stripe login でログインします。</p>
                        <Tutorial14302/>
                        <p>Webhook サーバー起動</p>
                        <p>別ターミナルで下記のコマンドを実行します。</p>
                        <Tutorial14303/>
                        <p>コマンドを実行すると、webhook のシークレットキーが表示されます</p>
                        <Tutorial14304/>
                        <p>この webhook のシークレットキーを.env ファイルに追加します</p>
                        <Tutorial14305/>
                        <p>NextJS のサーバーを再起動します。</p>
                        <Tutorial14306/>
                        <p>Webhook イベント実行</p>
                        <p>別ターミナルで下記コマンドを実行します</p>
                        <p>テストで payment_intent.succeededイベントを強制的に発行します</p>
                        <Tutorial14307/>
                        <p>下記のように 200 ステータスが返ってきたら成功です</p>
                        <Tutorial14308/>
      </Layout_tutorial_14>
                    
                  
    )
}
               


const Tutorial14301= () => {
    const test = `
    import { buffer } from 'micro'
    import Cors from 'micro-cors'
    import Stripe from 'stripe'
    
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    })
    
    export const config = {
      api: {
        bodyParser: false,
      },
    }
    
    const cors = Cors({
      allowMethods: ['POST', 'HEAD'],
    })
    
    const handleUpdate = async (email, customer_id, created) => {
      const body = JSON.stringify({
        email,
        customer_id,
        created,
      })
    
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/subscription/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
      } catch (err) {
        console.log(err)
      }
    }
    
    const webhookHandler = async (req, res) => {
      if (req.method === 'POST') {
        const buf = await buffer(req)
        const sig = req.headers['stripe-signature']
        const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET
        let event
    
        try {
          event = stripe.webhooks.constructEvent(buf.toString(), sig, webhookSecret)
        } catch (err) {
          res.status(400).send(`Webhook Error: ${err.message}`)
          return
        }
    
        try {
          // invoice.payment_succeededイベントを受信
          if (event.type === 'invoice.payment_succeeded') {
            const data = event.data.object
            const customer_id = data.customer
            const email = data.customer_email
            const created = data.created
            await handleUpdate(email, customer_id, created)
          }
        } catch (error) {
          return res.status(400).send('Webhookでエラーが発生しました')
        }
    
        res.json({ received: true })
      } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
      }
    }
    
    export default cors(webhookHandler)
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14302= () => {
    const test = `
    $ stripe login
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14203= () => {
    const test = `
    $ stripe listen --forward-to localhost:3000/api/webhooks
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14304= () => {
  const test = `
  ⢿ Checking for new versions... A newer version of the Stripe CLI is available, please update to: v1.7.6
  ⣟ Getting ready... > Ready! Your webhook signing secret is whsec_xxxxx (^C to quit)
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14305= () => {
  const test = `
  NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_STRIPE_PRICE=price_xxxxx
NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET=whsec_xxxxx
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14306= () => {
  const test = `
  Ctrl + C
  npm run dev
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14307= () => {
  const test = `
  $ stripe trigger payment_intent.succeeded
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14308= () => {
  const test = `
  ⢿ Checking for new versions... A newer version of the Stripe CLI is available, please update to: v1.7.6
  ⣟ Getting ready... > Ready! Your webhook signing secret is whsec_xxxxx (^C to quit)
  2021-11-09 18:00:14   --> charge.succeeded [evt_3JtqBaGVeidGUX3h2cLMv3Pm]
  2021-11-09 18:00:14   --> payment_intent.succeeded [evt_3JtqBaGVeidGUX3h29EOLphe]
  2021-11-09 18:00:14   --> payment_intent.created [evt_3JtqBaGVeidGUX3h2OFMKOcP]
  2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h2cLMv3Pm]
  2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h29EOLphe]
  2021-11-09 18:00:14  <--  [200] POST http://localhost:3000/api/webhooks [evt_3JtqBaGVeidGUX3h2OFMKOcP]
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};