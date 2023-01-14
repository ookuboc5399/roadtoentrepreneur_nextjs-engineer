import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_14>
<p>お支払い結果画面</p>
                        <p>お支払いが完了したことが分かる画面を作成します</p>
                        <p>お支払いが完了するとsession_idが取得できます</p>
                        <p>このsession_idを使用して、お支払いの詳細を取得します。</p>
                        <p>pages フォルダに result.js ファイルを作成します。</p>
                        <Tutorial14301/>
                        <p>Action</p>
                        <p>チェックアウト詳細用の Action を作成します</p>
                        <p>チェックアウト詳細のアクションタイプを追加します</p>
                        <Tutorial14302/>
                        <p>チェックアウト詳細関数を追加します</p>
                        
                        <Tutorial14303/>
                        <p>フロント API</p>
                        <p>pages/api/account フォルダに detail_checkout.js ファイルを作成します</p>
                        <p>sessin_idを stripe API に渡してお支払いの詳細を取得します。</p>
                        <p>stripe.checkout.sessions.retrieveの詳細は、ドキュメントを参考にしてください。</p>
                        <Tutorial14304/>
                        <p>Reducer</p>
                        <p>チェックアウト詳細のアクションタイプを Reducer に追加します</p>
                        <Tutorial14305/>
                        <p>これでお支払い機能のフロントエンド部分の構築が完了しました。</p>
                        <p>次回はお支払いが完了したときに、webhook を通して Django バックエンドの顧客 ID と有効期限を更新するコードを追加します。</p>
        
      </Layout_tutorial_14>
                  
    )
}
               


const Tutorial14301= () => {
    const test = `
    import { useEffect } from 'react'
    import { useSelector, useDispatch } from 'react-redux'
    import { detail_checkout } from '../actions/auth'
    import { useRouter } from 'next/router'
    import Head from 'next/head'
    
    const Result = () => {
      const dispatch = useDispatch()
      const router = useRouter()
      const checkout_detail = useSelector((state) => state.auth.checkout_detail)
      const session_id = router.query.session_id
    
      useEffect(() => {
        const fn = async () => {
          if (dispatch && dispatch !== null && dispatch !== undefined) {
            await dispatch(detail_checkout(session_id))
          }
        }
        if (session_id) {
          fn()
        }
      }, [session_id])
    
      return (
        <>
          <Head>
            <title>有料会員サイト | お支払い完了</title>
          </Head>
    
          {session_id && (
            <div className="text-center">
              <div className="text-2xl mb-3">{checkout_detail && checkout_detail.customer.name}様</div>
              <div className="text-3xl">お支払いが完了しました</div>
            </div>
          )}
        </>
      )
    }
    
    export default Result
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14302= () => {
    const test = `
    // チェックアウト詳細
    export const DETAIL_CHECKOUT_SUCCESS = 'DETAIL_CHECKOUT_SUCCESS'
    export const DETAIL_CHECKOUT_FAIL = 'DETAIL_CHECKOUT_FAIL'
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};

const Tutorial14303= () => {
    const test = `
    import {
      ...
    
      // チェックアウト詳細
      DETAIL_CHECKOUT_SUCCESS, // 追加
      DETAIL_CHECKOUT_FAIL, // 追加
    
      ...
    } from './types'
    
    // ↓追加
    // チェックアウト詳細
    export const detail_checkout = (session_id) => async (dispatch) => {
      dispatch({
        type: SET_AUTH_LOADING,
      })
    
      const body = JSON.stringify({
        session_id,
      })
    
      try {
        const res = await fetch('/api/account/detail_checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
    
        const data = await res.json()
    
        if (res.status === 200) {
          dispatch({
            type: DETAIL_CHECKOUT_SUCCESS,
            payload: data,
          })
        } else {
          dispatch({
            type: DETAIL_CHECKOUT_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: DETAIL_CHECKOUT_FAIL,
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

const Tutorial14304= () => {
  const test = `
  import Stripe from 'stripe'

  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
  })
  
  export default async (req, res) => {
    if (req.method === 'POST') {
      const { session_id } = req.body
  
      if (!session_id.startsWith('cs_')) {
        return res.status(401).json({
          error: 'セッションIDがありません',
        })
      }
  
      try {
        const checkout_session = await stripe.checkout.sessions.retrieve(session_id, {
          expand: ['customer'],
        })
  
        return res.status(200).json(checkout_session)
      } catch (err) {
        return res.status(500).json({
          error: 'チェックアウト詳細取得に失敗しました',
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


const Tutorial14304= () => {
  const test = `
  import {
    ...
  
    // チェックアウト詳細
    DETAIL_CHECKOUT_SUCCESS, // 追加
    DETAIL_CHECKOUT_FAIL, // 追加
  
    ...
  } from '../actions/types'
  
  const initialState = {
    user: null,
    isAuthenticated: null,
    loading: false,
    checkout_url: null,
    checkout_detail: null, // 追加
  }
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action
  
    switch (type) {
      ...
  
      // ↓追加
      // チェックアウト詳細
      case DETAIL_CHECKOUT_SUCCESS:
        return {
          ...state,
          checkout_detail: payload,
        }
      case DETAIL_CHECKOUT_FAIL:
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