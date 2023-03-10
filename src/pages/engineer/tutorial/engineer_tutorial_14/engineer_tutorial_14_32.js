import React from 'react'
import Layout_tutorial_14 from '../../../../../components/layout/Layout_tutorial_14';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

export default function Home() {
    return (
      <Layout_tutorial_14>
                    <p>トップページ修正</p>
                        <p>トップページに、有料会員の場合は、有料コンテンツを表示するようにします。</p>
                        <p>current_period_endに有効期限が格納されているので、本日が有効期限内であれば有料コンテンツが表示されます。</p>
                        <Tutorial14321/>
      </Layout_tutorial_14>


    )
}
               


const Tutorial14321= () => {
    const test = `
    import { useState, useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import { format } from 'date-fns'
    import Head from 'next/head'
    import Link from 'next/link'
    
    const Index = () => {
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
      const user = useSelector((state) => state.auth.user)
      const [member, setMember] = useState(false)
    
      useEffect(() => {
        const today = new Date()
        if (user && new Date(user.current_period_end) > today) {
          setMember(true)
        }
      }, [user])
    
      return (
        <>
          <Head>
            <title>有料会員サイト</title>
          </Head>
    
          <div>
            {isAuthenticated && user ? (
              <div>
                <div>ようこそ、{user.name}さん</div>
                {member ? (
                  <div>
                    あなたは、{format(new Date(user.current_period_end), 'yyy年MM月dd日')}
                    まで有料会員です。
                  </div>
                ) : (
                  <div>あなたは、無料会員です。</div>
                )}
                <div className="my-4 border-4 border-dashed border-gray-200 rounded">
                  <div className="flex justify-center items-center h-64">こちらは無料コンテンツ！</div>
                </div>
                {member ? (
                  <div className="my-4 border-4 border-dashed border-gray-200 rounded">
                    <div className="flex justify-center items-center h-64">
                      こちらは有料コンテンツ！
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      有料コンテンツを利用するには、有料会員の登録をお願いします。
                    </div>
                    <Link href="/checkout">
                      <a className="button-yellow">こちらから</a>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-2xl">
                フルスタックチャンネルによる有料会員サイトのチュートリアルです。
              </div>
            )}
          </div>
        </>
      )
    }
    
    export default Index
    
    `
    return (
        <SyntaxHighlighter language="js" style={syntaxStyle} >
            {test}
        </SyntaxHighlighter>
    );
};
