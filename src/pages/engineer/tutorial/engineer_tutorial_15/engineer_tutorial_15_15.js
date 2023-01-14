import Layout_tutorial_15 from '../../../../components/layout/engineer/tutorial/Layout_tutorial_15'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Tutorial_15_15() {
  return (
    <Layout_tutorial_15>
      <p>アカウント登録</p>
      <p>アカウント登録後にログインするように調整します。</p>
      <p>action</p>
      <p>アクションのregister関数でアカウント登録が成功したら、login関数を実行するようにします</p>
      <p>これでアカウント登録したらすぐにログインされるようになります。</p>
      <Tutorial15151 />
      <p>完成</p>
      <p>画像投稿システムが完成しましたので、投稿、編集、削除がうまくいくか動作確認をしましょう</p>

      <p>以上で、Django REST Framework と Next.js でインスタ風画像投稿サイトの構築が完了しました。</p>
    </Layout_tutorial_15>
  )
}



const Tutorial15151 = () => {
  const test = `
    // ユーザー登録
    export const register = (name, email, password) => async (dispatch) => {
      dispatch({
        type: SET_AUTH_LOADING,
      })
    
      const body = JSON.stringify({
        name,
        email,
        password,
      })
    
      try {
        const res = await fetch('/api/account/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
    
        if (res.status === 200) {
          dispatch({
            type: REGISTER_SUCCESS,
          })
          // 追加
          await dispatch(login(email, password))
        } else {
          dispatch({
            type: REGISTER_FAIL,
          })
        }
      } catch (err) {
        dispatch({
          type: REGISTER_FAIL,
        })
      }
    
      dispatch({
        type: REMOVE_AUTH_LOADING,
      })
    }
    `
  return (
    <SyntaxHighlighter language="js" style={syntaxStyle} >
      {test}
    </SyntaxHighlighter>
  );
};
