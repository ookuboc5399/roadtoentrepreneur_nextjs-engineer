import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_14>
 <p>お支払い画面</p>
                        <p>ここからはフロントエンドに Stripe のお支払い機能を追加していきます。</p>
                        <p>お支払い画面を作成します。</p>
                        <p>お支払いボタンをクリックして、Stripe API がコールされると、URL が返ってきますので、Stripe のチェックアウト画面に遷移します。</p>
                        <p>今回は、Stripe Checkoutを使用します。 </p>
                        <p>クレジットカードを入力するお支払い画面は、Stripe 側が用意してくれるので、セキュリティ的に安心です</p>
                        <p>pages フォルダに checkout.js ファイルを作成します。。</p>
                        <Tutorial14291/>
                        <p>画面確認</p>
                        <p>checkout の URL に遷移するとプラン選択の画面が表示されます</p>
               
                        <p>Action</p>
                        <p>チェックアウト完了用の Action を作成します。</p>
                        <p>チェックアウト完了のアクションタイプを追加します。</p>
                        <Tutorial14292/>
                        <p>チェックアウト関数を追加します。</p>
                        <Tutorial14293/>
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに create_checkout.js ファイルを作成します。</p>
                        <p>stripe ライブラリを使用して、stripe の API をコールします。</p>
                        <p>modeはサブスクリプションで、payment_method_typesはカードとします</p>
                        <p>success_urlにお支払いが成功したあとの URL を指定することができます。</p>
                        <p>stripe.checkout.sessions.createに渡せるパラメータはいくつかありますので、ドキュメントを参考にしてください。</p>
                        <Tutorial14294/>
                        <p>Reducer</p>
                        <p>チェックアウト完了のアクションタイプを Reducer に追加します。</p>
                        <p>Stripe の API コールが成功すると Stripe のチェックアウト画面の URL をフロントに渡します。</p>
                        <Tutorial14295/>
                        <p>Stripe のチェックアウト画面でお支払いが完了すると result 画面に遷移するようにしましたので、result 画面を作成します。</p>
                        <Tutorial14296/>
      </Layout_tutorial_14>
                   
                  
    )
}
               


const Tutorial14291= () => {
    const test = `
    import { useEffect } from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { create_checkout } from '../actions/auth'
    import { useRouter } from 'next/router'
    import Head from 'next/head'
    import Loader from 'react-loader-spinner'
    
    const Checkout = () => {
      const dispatch = useDispatch()
      const router = useRouter()
      const checkout_url = useSelector((state) => state.auth.checkout_url)
      const user = useSelector((state) => state.auth.user)
      const loading = useSelector((state) => state.auth.loading)
    
      useEffect(() => {
        if (checkout_url) {
          router.push(checkout_url)
        }
      }, [checkout_url])
    
      const checkoutHandle = async () => {
        if (dispatch && dispatch !== null && dispatch !== undefined && user) {
          await dispatch(create_checkout(user.email))
        }
      }
    
      return (
        <>
          <Head>
            <title>有料会員サイト | お支払い</title>
          </Head>
    
          <div className="border rounded w-1/3 mx-auto text-center shadow-sm">
            <div className="p-4">
              <h2 className="text-2xl font-medium mb-4">有料会員</h2>
              <div className="text-gray-500 mb-4">有効コンテンツをご利用頂けます。</div>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">1000円</span>
                <span className="font-medium">/月</span>
              </div>
    
              <div className="flex justify-center">
                {loading ? (
                  <Loader type="Oval" color="#F59E00" width={50} height={50} />
                ) : (
                  <div className="button-yellow cursor-pointer" onClick={checkoutHandle}>
                    お支払い
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )
    }
    
    export default Checkout
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14292= () => {
    const test = `
    // チェックアウト完了
export const CREATE_CHECKOUT_SUCCESS = 'CREATE_CHECKOUT_SUCCESS'
export const CREATE_CHECKOUT_FAIL = 'CREATE_CHECKOUT_FAIL'
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14293= () => {
    const test = `
    import {
      ...
    
      // チェックアウト完了
      CREATE_CHECKOUT_SUCCESS, // 追加
      CREATE_CHECKOUT_FAIL, // 追加
    
      ...
    } from './types'
    
    // ↓追加
    // チェックアウト
    export const create_checkout = (email) => async (dispatch) => {
      dispatch({
        type: SET_AUTH_LOADING,
      })
    
      const body = JSON.stringify({
        email,
      })
    
      try {
        const res = await fetch('/api/account/create_checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
    
        const data = await res.json()
    
        if (res.status === 200) {
          dispatch({
            type: CREATE_CHECKOUT_SUCCESS,
            payload: data.url,
          })
          dispatch(verify())
        } else {
          dispatch({
            type: CREATE_CHECKOUT_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: CREATE_CHECKOUT_FAIL,
        })
      }
    
      dispatch({
        type: REMOVE_AUTH_LOADING,
      })
    }
    
    // ↑追加
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14294= () => {
  const test = `
  import Stripe from 'stripe'

  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  })
  
  export default async (req, res) => {
    if (req.method === 'POST') {
      const { email } = req.body
  
      try {
        const params = {
          customer_email: email,
          mode: 'subscription',
          payment_method_types: ['card'],
          line_items: [
            {
              price: process.env.NEXT_PUBLIC_STRIPE_PRICE,
              quantity: 1,
            },
          ],
          allow_promotion_codes: true,
          success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/checkout`,
        }
  
        const checkoutSession = await stripe.checkout.sessions.create(params)
  
        return res.status(200).json(checkoutSession)
      } catch (err) {
        return res.status(500).json({
          error: 'チェックアウトに失敗しました',
        })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      return res.status(405).json({ error: `Method ${req.method} now allowed` })
    }
  }
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14295= () => {
  const test = `
  import {
    ...
  
    // チェックアウト完了
    CREATE_CHECKOUT_SUCCESS, // 追加
    CREATE_CHECKOUT_FAIL, // 追加
  
    ...
  } from '../actions/types'
  
  const initialState = {
    user: null,
    isAuthenticated: null,
    loading: false,
    checkout_url: null, // 追加
  }
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      ...
  
      // ↓追加
      // チェックアウト完了
      case CREATE_CHECKOUT_SUCCESS:
        return {
          ...state,
          checkout_url: payload,
        }
      case CREATE_CHECKOUT_FAIL:
        return {
          ...state,
        }
      // ↑追加
  
      ...
    }
  }
  
  export default authReducer
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};

const Tutorial14296= () => {
  const test = `
  success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  
  `
  return (
      <SyntaxHighlighter language="js" style={syntaxStyle} >
          {test}
      </SyntaxHighlighter>
  );
};